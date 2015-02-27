sap.ui.controller("com.cg.gtm.view.Drop3_Q.Drop3Queue", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	// onInit: function() {

	// },

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	// onBeforeRendering: function() {

	// },

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	onAfterRendering: function () {
		setInterval(function () {
			if (bgDrop3Queue) {
				sap.ui.getCore().byId("D3QUStatus").setColor("#2ecc71");
			} else {
				sap.ui.getCore().byId("D3QUStatus").setColor("#e74c3c");
			}
		}, 500);
	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	// onExit: function() {

	// }

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
	},

	handleRefreshButtonPress: function () {

		var trQ = window.localStorage.getItem("TRQ");

		if (trQ) {

			var notiNumRcvd = JSON.parse(trQ);

			var button = this;
			button.setEnabled(false);

			// keeps track of async method calls
			var counter = 0;
			var dataArray = [];

			for (var i = notiNumRcvd.length - 1; i >= 0; i--) {

				(function (i_copy) {

					readDrop3TransactionDetails(notiNumRcvd[i_copy].Key, function (result) {

						var data = {
							"Tran": notiNumRcvd[i_copy].Tran,
							"Key": notiNumRcvd[i_copy].Key,
							"Time": notiNumRcvd[i_copy].Time,
							"Status": notiNumRcvd[i_copy].retryStatus,
							"numOfRetry": notiNumRcvd[i_copy].retryStatus === "Failed" ? notiNumRcvd[i_copy].numOfRetry : 0,
							"Date": notiNumRcvd[i_copy].res2,
							"shrtdesc": "N/A",
							"Order": "N/A",
							"Activity": "N/A"
						};

						var parsedJSON = JSON.parse(result);

						if (parsedJSON.hasOwnProperty("Header")) {
							if (parsedJSON.Header.hasOwnProperty("shrtdesc")) data["shrtdesc"] = parsedJSON.Header.shrtdesc;
						} else if (parsedJSON.hasOwnProperty("Items")) {
							if (parsedJSON.Items.hasOwnProperty("Order")) data["Order"] = parsedJSON.Items.Order;
							if (parsedJSON.Items.hasOwnProperty("Activity")) data["Activity"] = parsedJSON.Items.Activity;
						}

						var index = (notiNumRcvd.length - 1) - i_copy;
						dataArray[index] = data;

						counter++;

						// last result
						if (counter === notiNumRcvd.length) {
							var model = sap.ui.getCore().byId("D3QU").getModel();
							model.setProperty("/results", dataArray);
							sap.ui.getCore().byId("D3QU").setModel(model);
							button.setEnabled(true);
						}

					});

				}(i));

			}

		}

	},

	handleListItemPress: function (evt) {

		var context = evt.getSource().getBindingContext().getObject();

		if (!this.dialog) {
			this.dialog = new sap.m.Dialog({
				id: "D3QUDialog",
				customHeader: new sap.m.Bar({
					contentMiddle: new sap.m.Label({
						text: "Inspect"
					}),
					contentRight: new sap.m.Button({
						icon: "sap-icon://decline",
						press: function () {
							sap.ui.getCore().byId("D3QUDialog").close();
						}
					})
				}),
				content: [
					new sap.m.Button({
						type: "Emphasized",
						width: "100%",
						text: "Queue JSON",
						press: function () {
							var trQ = window.localStorage.getItem("TRQ");
							var parsedJSON = JSON.parse(trQ);
							var key = sap.ui.getCore().byId("D3QUDialog").data("key");
							for (var i = 0; i < parsedJSON.length; i++) {
								if (parsedJSON[i].Key === key) {
									alert(JSON.stringify(parsedJSON[i]));
									break;
								}
							}
						}
					}),
					new sap.m.Button({
						type: "Emphasized",
						width: "100%",
						text: "Transaction JSON",
						press: function () {
							var key = sap.ui.getCore().byId("D3QUDialog").data("key");
							readDrop3TransactionDetails(key, function (result) {
								alert(result);
							});
						}
					}),
					new sap.m.Button({
						id: "D3QURetryTransaction",
						type: "Emphasized",
						width: "100%",
						text: "Retry Transaction",
						press: function () {
							var key = sap.ui.getCore().byId("D3QUDialog").data("key");
							forceRetryDrop3Jobs(key);
							sap.ui.getCore().byId("D3QUDialog").close();
						}
					})
				]
			}).data("key", context.Key);
		} else {
			this.dialog.data("key", context.Key);
		}

		if (context.Status === "Failed" && context.numOfRetry >= 10) {
			sap.ui.getCore().byId("D3QURetryTransaction").setVisible(true);
		} else {
			sap.ui.getCore().byId("D3QURetryTransaction").setVisible(false);
		}

		this.dialog.open();

	},

	handleViewJSONButtonPress: function () {
		var trQ = window.localStorage.getItem("TRQ");
		alert(trQ);
	},

	handleViewLogButtonPress: function () {
		var date = new Date();
		var formattedDate = date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear();
		var path = cordova.file.externalRootDirectory + "HRE_log_" + formattedDate + ".txt";
		window.open(path, "_blank", "location=yes");
	}

});