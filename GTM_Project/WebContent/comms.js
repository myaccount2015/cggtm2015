/**
 * Global object comms to be accessed when calling statically.
 * Used when consuming multiple services in an asynchronous fashion but in a synchronous order.
 */
var comms = {
	
	/**
	 * Checks that the data passed to comms :: execute() is safe.
	 * @param array {Array.<Object>} The same array of data passed to the execute function.
	 */
	sanitizeAll: function (array) {
		if (!Array.isArray(array))
			throw "comms.js: Not An Array";
		if (array.length < 1)
			throw "comms.js: Empty Array";
		for (var i = 0; i < array.length; i++) {
			if (array[i].hasOwnProperty("serviceUrl")) {
				if (typeof array[i].serviceUrl !== "string")
					throw "comms.js: Invalid serviceUrl argument";
			} else {
				throw "comms.js: Missing serviceUrl argument";
			}
			if (array[i].hasOwnProperty("requestUrl")) {
				if (typeof array[i].requestUrl !== "string")
					throw "comms.js: Invalid requestUrl argument";
			} else {
				throw "comms.js: Missing requestUrl argument";
			}
			if (array[i].hasOwnProperty("destinationPath")) {
				if (typeof array[i].destinationPath !== "string")
					throw "comms.js: Invalid destinationPath argument";
				if (!array[i].hasOwnProperty("filename"))
					throw "comms.js: Missing filename argument";
			}
			if (array[i].hasOwnProperty("filename")) {
				if (typeof array[i].filename !== "string")
					throw "comms.js: Invalid filename argument";
				if (!array[i].hasOwnProperty("destinationPath"))
					throw "comms.js: Missing destinationPath argument";
			}
		}
	},

	/**
	 * To be called statically from outside of comms.js
	 * @param array {Array.<Object>} The array of service calls, and respective information.
	 * @param callback {function} The callback function, called only when all services have been consumed.
	 */
	execute: function (array, callback) {
		this.sanitizeAll(array);
		this.busyDialog = new sap.m.BusyDialog({
			title: "Initialized",
			text: "Initialized"
		});
		this.busyDialog.open();
		this.array = array;
		this.results = [];
		this.errors = [];
		this.callback = callback;
		this.index = 0;
		this.downloadMetadata(array[0]);
	},

	/**
	 * Downloads metadata using the service URL and sap.ui.model.odata.ODataModel
	 * @param obj {object} The current object being processed by comms.js
	 * @param obj.serviceUrl {string} The service URL to be applied to the model.
	 * @param obj.requestUrl {string} The request URL to be called when reading data into the model.
	 * @param obj.destinationPath {string} [obj.destinationPath] Save location for the file.
	 * @param obj.filename {string} [obj.filename] Name for the file including extension.
	 * @param {sap.ui.model.odata.ODataModel} model The model to read the data in to.
	 */
	downloadMetadata: function (obj) {

		var downloadMetadataStartTime = new Date().getTime();

		comms.busyDialog.setTitle("Downloading").setText(obj.filename);

		var model = new sap.ui.model.odata.ODataModel(obj.serviceUrl, true, getUserName(), getPassword(), null, false, false, true);

		model.attachMetadataLoaded(function () {
			comms.downloadModelData(obj, model);
		});

		model.attachMetadataFailed(function () {
			var downloadDataElapsedTime = new Date().getTime() - downloadMetadataStartTime;
			var msg = {
				source: "MOB00",
				action: "DOWNLOAD",
				filename: obj.filename,
				status: "FAIL",
				elapsedTime: downloadDataElapsedTime
			};
			comms.errors.push(msg);
			log(msg, function () {
				comms.index++;
				if (comms.index < comms.array.length) {
					comms.downloadMetadata(comms.array[comms.index]);
				} else {
					comms.busyDialog.close();
					comms.callback(comms.results, comms.errors);
				}
			});
		});

	},

	/**
	 * Downloads oData using sap.ui.model.odata.ODataModel :: read()
	 * @param obj {object} The current object being processed by comms.js
	 * @param obj.serviceUrl {string} The service URL to be applied to the model.
	 * @param obj.requestUrl {string} The request URL to be called when reading data into the model.
	 * @param obj.destinationPath {string} [obj.destinationPath] Save location for the file.
	 * @param obj.filename {string} [obj.filename] Name for the file including extension.
	 * @param {sap.ui.model.odata.ODataModel} model The model to read the data in to.
	 */
	downloadModelData: function (obj, model) {

		var downloadModelDataStartTime = new Date().getTime();

		model.read(obj.requestUrl, {

			success: function (oData, oResponse) {
				var downloadModelDataElapsedTime = new Date().getTime() - downloadModelDataStartTime;
				var msg = {
					source: "MOB00",
					action: "DOWNLOAD",
					filename: obj.filename,
					status: "SUCCESS",
					elapsedTime: downloadModelDataElapsedTime
				};
				comms.results.push(oData);
				log(msg, function () {
					if (obj.hasOwnProperty("destinationPath") && obj.hasOwnProperty("filename")) {
						comms.save(obj, JSON.stringify(oData.results));
					} else {
						comms.index++;
						if (comms.index < comms.array.length) {
							comms.downloadMetadata(comms.array[comms.index]);
						} else {
							comms.busyDialog.close();
							comms.callback(comms.results, comms.errors);
						}
					}
				});
			},

			error: function (oError) {
				var downloadModelDataElapsedTime = new Date().getTime() - downloadModelDataStartTime;
				var msg = {
					source: "MOB00",
					action: "DOWNLOAD",
					filename: obj.filename,
					status: "FAIL",
					elapsedTime: downloadModelDataElapsedTime
				};
				comms.errors.push(msg);
				log(msg, function () {
					comms.index++;
					if (comms.index < comms.array.length) {
						comms.downloadMetadata(comms.array[comms.index]);
					} else {
						comms.busyDialog.close();
						comms.callback(comms.results, comms.errors);
					}
				});
			}

		});

	},

	/**
	 * Saves a file to the device.
	 * @param obj {object} The current object being processed by comms.js
	 * @param obj.serviceUrl {string} The service URL to be applied to the model.
	 * @param obj.requestUrl {string} The request URL to be called when reading data into the model.
	 * @param obj.destinationPath {string} [obj.destinationPath] Save location for the file.
	 * @param obj.filename {string} [obj.filename] Name for the file including extension.
	 * @param {string} fileData The information to be written to the file.
	 */
	save: function (obj, fileData) {

		var writeStartTime = new Date().getTime();

		comms.busyDialog.setTitle("Saving").setText(obj.filename);

		window.resolveLocalFileSystemURL(obj.destinationPath, function (directoryEntry) {
			directoryEntry.getFile(obj.filename, {create: true}, function (fileEntry) {
				fileEntry.createWriter(function (fileWriter) {

					fileWriter.onwriteend = function (e) {
						var writeElapsedTime = new Date().getTime() - writeStartTime;
						var msg = {
							source: "MOB00",
							action: "WRITE",
							filename: obj.filename,
							status: "SUCCESS",
							elapsedTime: writeElapsedTime
						};
						log(msg, function () {
							comms.index++;
							if (comms.index < comms.array.length) {
								comms.downloadMetadata(comms.array[comms.index]);
							} else {
								comms.busyDialog.close();
								comms.callback(comms.results, comms.errors);
							}
						});
					};

					fileWriter.onerror = function (e) {
						var writeElapsedTime = new Date().getTime() - writeStartTime;
						var msg = {
							source: "MOB00",
							action: "WRITE",
							filename: obj.filename,
							status: "FAIL",
							elapsedTime: writeElapsedTime
						};
						comms.errors.push(msg);
						log(msg, function () {
							comms.index++;
							if (comms.index < comms.array.length) {
								comms.downloadMetadata(comms.array[comms.index]);
							} else {
								comms.busyDialog.close();
								comms.callback(comms.results, comms.errors);
							}
						});
					};

					var blob;

					try {
						blob = new Blob([fileData], {
							type: "text/plain"
						});
					} catch (e) {
						window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
						if (e.name === "TypeError" && window.BlobBuilder) {
							var bb = new BlobBuilder();
							bb.append(fileData);
							blob = bb.getBlob("text/plain");
						}
					}

					fileWriter.write(blob);

				}, errorHandler);
			}, errorHandler);
		}, errorHandler);

	}

};

/**
 * Logs an entry into the log file.
 * @param info {object} Log entry information stored as an Object.
 * @param info.source {string} The location the function was called from, for example MOB00.
 * @param info.action {string} [info.action] The action being logged, must be in caps such as DOWNLOAD.
 * @param info.filename {string} [info.filename] The file relating to the action.
 * @param info.status {string} [info.status] The end result, either SUCCESS or FAIL.
 * @param info.elapsedTime {number} [info.elapsedTime] The time taken to perform the action.
 * @param callback {function} [callback] The callback function to be executed after writing to the log.
 */
function log(info, callback) {

	var date = new Date();

	var timestamp = ("0" + date.getHours()).slice(-2) + ":" +
					("0" + date.getMinutes()).slice(-2) + ":" +
					("0" + date.getSeconds()).slice(-2) + ":" +
					("00" + date.getMilliseconds()).slice(-3);

	var fileData = "\n" + timestamp + " " + info.source + ": ";
	if (info.hasOwnProperty("action")) fileData += "[" + info.action + "] ";
	if (info.hasOwnProperty("filename")) fileData += info.filename + " ";
	if (info.hasOwnProperty("status")) fileData += info.status + " ";
	if (info.hasOwnProperty("elapsedTime")) fileData += info.elapsedTime + "ms";

	var logPath = "HRE_log_" + date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear() + ".txt";

	window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function (directoryEntry) {
		directoryEntry.getFile(logPath, {create: true}, function (fileEntry) {
			fileEntry.createWriter(function (fileWriter) {

				fileWriter.onwriteend = function (e) {
					if (typeof callback === "function") {
						callback();
					}
				};

				fileWriter.onerror = function (e) {
					comms.errors.push(info);
					if (typeof callback === "function") {
						callback();
					}
				};

				var blob;

				try {
					blob = new Blob([fileData], {
						type: "text/plain"
					});
				} catch (e) {
					window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
					if (e.name === "TypeError" && window.BlobBuilder) {
						var bb = new BlobBuilder();
						bb.append(fileData);
						blob = bb.getBlob("text/plain");
					}
				}

				fileWriter.seek(fileWriter.length);

				fileWriter.write(blob);

			}, errorHandler);
		}, errorHandler);
	}, errorHandler);

}

/**
 * Generic callback error handler for file read/write.
 * @param e {FileError} Error object passed from file related function.
 */
function errorHandler(e) {

	var msg;

	switch (e.code) {
		case FileError.QUOTA_EXCEEDED_ERR:
			msg = "QUOTA_EXCEEDED_ERR";
			break;
		case FileError.NOT_FOUND_ERR:
			msg = "NOT_FOUND_ERR";
			break;
		case FileError.SECURITY_ERR:
			msg = "SECURITY_ERR";
			break;
		case FileError.INVALID_MODIFICATION_ERR:
			msg = "INVALID_MODIFICATION_ERR";
			break;
		case FileError.INVALID_STATE_ERR:
			msg = "INVALID_STATE_ERR";
			break;
		default:
			msg = "Unknown Error";
			break;
	}

	comms.errors.push(msg);
	comms.callback(comms.results, comms.errors);

}
