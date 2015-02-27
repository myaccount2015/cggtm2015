function createNotiFromQueue(objJobToProcess) {
	//alert("i m create Queue");
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();
	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: createNotiFromQueue: Started";
		logFileUpdate(g_ServiceStartEndTime);
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	var oDataCreateNoti = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	var readRequestURL = "/NotificationCreateSet";

	oDataCreateNoti.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var assetData = allCodes();
	var assetDataArr = assetData.d.results;
	var codingCode = "";
	for (var i = 0; i < assetDataArr.length; i++) {

		if (objJobToProcess.Header.coding == assetDataArr[i].Kurztextcd) {

			codingCode = assetDataArr[i].Code;
			break;
		}
	}
	 
	var breakDown ;
	var createReqData = {
		"NotificationType" : "ZR", // hardcode as per suggestion by Richard
		//"Equipment" : "",
		"ShortDescription" : objJobToProcess.Header.shrtdesc, // sap.ui.getCore().byId("MOB01TSD").getValue(),
		"Coding" :  objJobToProcess.Header.coding,
		"CodeGroup" : objJobToProcess.Header.codeGroup,
		"Plant" : "HREM" , //g_inputPlantCode ,// hardcode as per suggestion by Richard
		"Priority" : objJobToProcess.Header.priority,
		"FunctionalLocation" : objJobToProcess.Header.floc,
		"BreakDownIndicator" : objJobToProcess.Header.BreakDownIndicator,
		"LongText" : objJobToProcess.Header.longdesc,
		"Room" : objJobToProcess.Header.room,
		"FaultLocation" : objJobToProcess.Header.faultloc,
		"Equipment"  : objJobToProcess.Header.eqp

	};

	var results = objJobToProcess.Items;
	var lineItems = [];
	if (results.length == 0)
		{
		var lineItemData = {
				Material : " ",
				Quantity : " ",
				UOM : " "

			};
		lineItems.push(lineItemData);
		
		}
	else
		{
		var lineItemData = "";
		var index = 0;
	for (index = 0; index < results.length; index++) {
		 lineItemData = {
			Material : results[index].Materialno,
			Quantity : results[index].Quantity,
			UOM : results[index].Uom,

		};
		 lineItems.push(lineItemData);
	}
		
		}
	
	//alert(JSON.stringify(lineItems));
		createReqData.NavNotCreate = lineItems;

	if (g_isDebug == true) {
		var logDetails = getTimeStamp() + "BG Processor:: Notification: " + JSON.stringify(createReqData);
		logBGFileUpdate(logDetails);
		//Background log file
		logFileUpdate_Background(logDetails);
	}

	oDataCreateNoti
			.create(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Notification: " + oResponse.NotificationNumber
								+ " created successfully";
							logFileUpdate(g_ServiceStartEndTime);
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Image Upload -- InProgress", null);
						
						//DMS Start::
						
						//No of image:: 	
						var DMS_TakenImage = objJobToProcess.Header.DMS_TakenImage;
						var notifNumber= oResponse.NotificationNumber;
						var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
				    	var addedImageList = DMS_TakenImage;//sap.ui.getCore().byId("Mob01AddedImageList").getModel();
				    	var addedImageList_len = 0;
				    	if(addedImageList != null){
							addedImageList_len = addedImageList.length;
						}
						var NotificationNo = padNotiNo;
						//var CurrentMob = "MOB01";
						var MobKeyValue = "SMQMEL";
						for( var i = 0 ; i< addedImageList_len; i++){
							var addedImageSourcePath = addedImageList;
							var addedImageNamePath = addedImageList;
							
							addedImageSourcePath = addedImageSourcePath[i].imageData;
							var CurrentMob  = addedImageNamePath[i].imageName;
							var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
						}
						
						
						
						//DMS End
						
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Notification: " + oResponse.NotificationNumber
								+ " created successfully");
						
						
						/*sap.m.MessageBox.show(oResponse.NotificationNumber
								+ " created successfully",
								sap.m.MessageBox.Icon.SUCCESS, "Success");*/
						return oResponse.NotificationNumber + "_"
								+ oResponse.PMOrderNumber;

					},

					function(oError) {
						closeSplashScreen();

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: CREATE TRAIN NOTIFICATION Failed: " + messageFromBackend;
										logFileUpdate(g_ServiceStartEndTime);
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										/*sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");*/
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

}

function createDepotNotiFromQueue(objJobToProcess)
{


	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	//alert(g_isDebug);
	if (g_isDebug == true) {
		// Service End Time
	//	alert("now insi");
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: createNotiFromQueue DEPOT: Started";
		//alert(g_ServiceStartEndTime);
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
		//alert(g_ServiceStartEndTime);
	}
	//alert("226");
	var oDataCreateNoti = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	var readRequestURL = "/NotificationCreateSet";

	oDataCreateNoti.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	/*var assetData = allCodes();
	var assetDataArr = assetData.d.results;
	var codingCode = "";
	for (var i = 0; i < assetDataArr.length; i++) {

		if (objJobToProcess.Header.coding == assetDataArr[i].Kurztextcd) {

			codingCode = assetDataArr[i].Code;
			break;
		}
	}*/
	 
	var breakDown ;
	//alert(window.localStorage.getItem("ZMOBILE_NOTIF_DEPOT"));
	var createReqData = {
		"NotificationType" : window.localStorage.getItem("ZMOBILE_NOTIF_DEPOT") , //"Z1",
		//"Equipment" : "",
		"ShortDescription" : objJobToProcess.Header.shrtdesc, // sap.ui.getCore().byId("MOB01TSD").getValue(),
		//"Coding" : codingCode,// "0801",
		//"CodeGroup" : "PM1",
		"Coding" :  objJobToProcess.Header.coding,
		"CodeGroup" : objJobToProcess.Header.codeGroup,
		"Plant" :g_inputPlantCode , // "HREM",
		"Priority" : objJobToProcess.Header.priority,
		//"FunctionalLocation" : objJobToProcess.Header.floc,
		"BreakDownIndicator" : objJobToProcess.Header.BreakDownIndicator,
		"LongText" : objJobToProcess.Header.longdesc,
		"FunctionalLocation" : objJobToProcess.Header.floc,
		"Equipment"  : objJobToProcess.Header.eqp

	};
	var results = objJobToProcess.Items;
	var lineItems = [];
	
	if (results.length == 0)
	{
	var lineItemData = {
			Material : " ",
			Quantity : " ",
			UOM : " "

		};
	lineItems.push(lineItemData);
	
	}
else
	{
for (var index = 0; index < results.length; index++) {
	var lineItemData = {
		Material : results[index].Materialno,
		Quantity : results[index].Quantity,
		UOM : results[index].Uom,

	};
	lineItems.push(lineItemData);
}
	
	
	}
	
//	alert(JOSN.stringify(lineItems));
	createReqData.NavNotCreate = lineItems;
	/*for (var index = 0; index < results.length; index++) {
		var lineItemData = {
			Material : results[index].Materialno,
			Quantity : "10",
			UOM : results[index].Uom,

		};
		lineItems.push(lineItemData);
		createReqData.NavNotCreate = lineItems;
	}*/
	//alert("278");
	if (g_isDebug == true) {
	//	alert("now hit file");
		var logDetails = getTimeStamp() + "BG Processor:: Notification: DEPOT " + JSON.stringify(createReqData);
		logFileUpdate(logDetails);
		
		//Background log file
		logFileUpdate_Background(logDetails);
	}

	oDataCreateNoti
			.create(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Notification: DEPOT " + oResponse.NotificationNumber
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Image Upload -- InProgress", null);
						
                        //DMS Start::
						
						//No of image:: 	
						var DMS_TakenImage = objJobToProcess.Header.DMS_TakenImage;
						var notifNumber= oResponse.NotificationNumber;
						var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
				    	var addedImageList = DMS_TakenImage;//sap.ui.getCore().byId("Mob01AddedImageList").getModel();
				    	var addedImageList_len = 0;
				    	if(addedImageList != null){
							addedImageList_len = addedImageList.length;
						}
						var NotificationNo = padNotiNo;
						//var CurrentMob = "MOB01";
						var MobKeyValue = "PMQMEL";
						for( var i = 0 ; i< addedImageList_len; i++){
							//var addedImageSourcePath = sap.ui.getCore().byId("Mob01AddedImageList").getModel().getData();
							var addedImageSourcePath = addedImageList;
							var addedImageNamePath = addedImageList;
							addedImageSourcePath = addedImageSourcePath[i].imageData;
							var CurrentMob  = addedImageNamePath[i].imageName;
							var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
						}
						
						
						
						//DMS End
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Notification: " + oResponse.NotificationNumber
								+ " created successfully");
						
						
						/*sap.m.MessageBox.show(oResponse.NotificationNumber
								+ " created successfully",
								sap.m.MessageBox.Icon.SUCCESS, "Success");*/
						return oResponse.NotificationNumber + "_"
								+ oResponse.PMOrderNumber;

					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: NOTIFICATION DEPOT Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										/*sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");*/
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: NOTIFICATION DEPOT Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: NOTIFICATION DEPOT Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

	
}


function completeJobFromQueue(objJobToProcess) {


	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: completeJobFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataCompleteJob = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var ordNo = objJobToProcess.Items.Order.padBeginZero(objJobToProcess.Items.Order, 12);
	
	var readRequestURL = "/ConfirmOrderSet(OrderNumber='" + ordNo + "')";

	oDataCompleteJob.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"OperationProcessActivity" : "COMP",
		"Activity" : objJobToProcess.Items.Activity,
		"ReasonForVariance" : objJobToProcess.Items.ReasonForVariance, 
		"Plant" : objJobToProcess.Items.Plant,
		"FaultyPartCodeGrp" : objJobToProcess.Items.FaultyPartCodeGrp,
		"FaultyPartCode" : objJobToProcess.Items.FaultyPartCode,
		"ProblemCodeGrp" : objJobToProcess.Items.ProblemCodeGrp,
		"ProblemCode" : objJobToProcess.Items.ProblemCode,
		"CauseCodeGrp" : objJobToProcess.Items.CauseCodeGrp,
		"CauseCode" : objJobToProcess.Items.CauseCode,
		"NotificationType" : objJobToProcess.Items.NotificationType,
		"PersonnelNumber" : objJobToProcess.Items.PersonnelNumber,
		"LongText" : objJobToProcess.Items.LongText,
	};

	if (g_isDebug == true) {
		var logDetails = getTimeStamp() + "BG Processor:: completeJobFromQueue: " + JSON.stringify(createReqData);
		logBGFileUpdate(logDetails);
		
		//Background log file
		logFileUpdate_Background(logDetails);
	}
	oDataCompleteJob
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Complete Task: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Notification: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: COMPLETE JOB " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor::  COMPLETE JOB Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: COMPLETE JOB Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});
}

function ahrJobFromQueue(objJobToProcess , process) {
	//alert("ahr job");

	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+" JobFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataCompleteJob = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var ordNo = objJobToProcess.Items.Order.padBeginZero(objJobToProcess.Items.Order, 12);
	
	var readRequestURL = "/ConfirmOrderSet(OrderNumber='" + ordNo + "')";

	oDataCompleteJob.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"OperationProcessActivity" : process,
		"Activity" : objJobToProcess.Items.Activity,
		"ReasonForVariance" : objJobToProcess.Items.ReasonForVariance, 
		"Plant" : objJobToProcess.Items.Plant,
		"FaultyPartCodeGrp" : objJobToProcess.Items.FaultyPartCodeGrp,
		"FaultyPartCode" : objJobToProcess.Items.FaultyPartCode,
		"ProblemCodeGrp" : objJobToProcess.Items.ProblemCodeGrp,
		"ProblemCode" : objJobToProcess.Items.ProblemCode,
		"CauseCodeGrp" : objJobToProcess.Items.CauseCodeGrp,
		"CauseCode" : objJobToProcess.Items.CauseCode,
		"NotificationType" : objJobToProcess.Items.NotificationType,
		"PersonnelNumber" : objJobToProcess.Items.PersonnelNumber,
		"LongText" : objJobToProcess.Items.LongText,
	};

	if (g_isDebug == true) {
		var logDetails = getTimeStamp() + "BG Processor:: ahrJobFromQueue: " + JSON.stringify(createReqData);
		logBGFileUpdate(logDetails);
		
		//Background log file
		logFileUpdate_Background(logDetails);
	}
	oDataCompleteJob
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+ "Task: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Notification: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+"Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() +"BG Processor:: "+process+"Failed: "  + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+" Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});
}

/*************Split JOb ******************/

function splitJobFromQueue(objJobToProcess , process) {
	

	//alert("ahr job");

	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+" JobFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataCompleteJob = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var ordNo = objJobToProcess.Items.Order.padBeginZero(objJobToProcess.Items.Order, 12);
	
	var readRequestURL = "/SplitOrderJobSet(Orderid='" + ordNo + "')";

	oDataCompleteJob.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});
readLocalFileOnDevice("Job_"+objJobToProcess.Items.Order+"_"+objJobToProcess.Items.Activity+".json", function(funCall)
		
		{
	  var allJobsArray  = JSON.parse(funCall);
	 g_personalNum =    allJobsArray.dataHeader.PersonalNo;
/*alert(allJobsArray.dataHeader.EarliestStartDate);
alert(allJobsArray.dataHeader.EarliestFinishDate);
alert(allJobsArray.dataHeader.LatestStartDate);
alert(allJobsArray.dataHeader.LatestFinishDate);*/

//alert(convertJsonDateString(objJobToProcess.Items.EarliestStartDate));

	var EarlyScheduleStartDateI = convertJsonDateString(allJobsArray.dataHeader.EarliestStartDate);
	
	var EarlyScheduleStartDate  = EarlyScheduleStartDateI.substring(6, EarlyScheduleStartDateI.length ) +"-"+
	EarlyScheduleStartDateI.substring(0, 2) +"-"+
	EarlyScheduleStartDateI.substring(3, 5);
	
	var EarlyScheduleStartTime = allJobsArray.dataHeader.EarliestStartTime.substring(2,4)+":"+
					allJobsArray.dataHeader.EarliestStartTime.substring(5,7)+":"+
					allJobsArray.dataHeader.EarliestStartTime.substring(8,10);
	var EarlyScheduleFinishDateI = convertJsonDateString(allJobsArray.dataHeader.EarliestFinishDate);
	//01-21-2015
	//alert(EarlyScheduleFinishDateI);
	var EarlyScheduleFinishDate  = EarlyScheduleFinishDateI.substring(6, EarlyScheduleFinishDateI.length) +"-"+
								   EarlyScheduleFinishDateI.substring(0,2) +"-"+
								   EarlyScheduleFinishDateI.substring(3,5);
	//alert(EarlyScheduleFinishDate);
	var EarlyScheduleFinishTime = allJobsArray.dataHeader.EarliestFinishTime.substring(2,4)+":"+
	allJobsArray.dataHeader.EarliestFinishTime.substring(5,7)+":"+
	allJobsArray.dataHeader.EarliestFinishTime.substring(8,10);
	
	var LateScheduleStartDateI = convertJsonDateString(allJobsArray.dataHeader.LatestStartDate);
	var LateScheduleStartDate  = LateScheduleStartDateI.substring(6, LateScheduleStartDateI.length) +"-"+
	LateScheduleStartDateI.substring(0,2) +"-"+
	LateScheduleStartDateI.substring(3,5);
	
	var LateScheduleStartTime = allJobsArray.dataHeader.LatestStartTime.substring(2,4)+":"+
	allJobsArray.dataHeader.LatestStartTime.substring(5,7)+":"+
	allJobsArray.dataHeader.LatestStartTime.substring(8,10);
	
	var LatestFinishDateI = convertJsonDateString(allJobsArray.dataHeader.LatestFinishDate);
	//alert("LatestFinishDateI..." + LatestFinishDateI);
	var LatestFinishDate  = LatestFinishDateI.substring(6, LatestFinishDateI.length) +"-"+
	LatestFinishDateI.substring(0, 2) +"-"+
	LatestFinishDateI.substring(3, 5);
	//12-19-2014
	//alert("allJobsArray.dataHeader.LatestFinishTime..." + allJobsArray.dataHeader.LatestFinishTime);
	var LatestFinishDateTime =allJobsArray.dataHeader.LatestFinishTime.substring(2,4)+":"+
	allJobsArray.dataHeader.LatestFinishTime.substring(5,7)+":"+
	allJobsArray.dataHeader.LatestFinishTime.substring(8,10);
	
	/*alert(EarlyScheduleStartDate+"T"+EarlyScheduleStartTime);
	alert(LateScheduleStartDate+"T"+LateScheduleStartTime );
	alert(EarlyScheduleFinishDate+"T"+EarlyScheduleFinishTime);
	alert(LatestFinishDate+"T"+LatestFinishDateTime);*/
	
	var createReqData = {
		"OperationProcessActivity" : "SPLT",
		"Activity" : objJobToProcess.Items.Activity,
		"ReasonForVariance" : "SPLT", 
		"Plant" : objJobToProcess.Items.Plant,
		"PlanningPlant" : allJobsArray.dataHeader.MaintanancePlanningPlant,
		"PersonnelNo" : allJobsArray.dataHeader.PersonalNo , //objJobToProcess.Items.PersonnelNo,
		
		"ControlKey" : allJobsArray.dataHeader.ControlKey,
		"WorkCenter" : allJobsArray.dataHeader.WorkCenter,
		"StandardTextKey" : allJobsArray.dataHeader.StandardTextKey,
		"PostingDate" : "2015-02-06T02:10:00",//objJobToProcess.Items.PostingDate,//
		"Description" : allJobsArray.dataHeader.Description,
		"CalcKey" : allJobsArray.dataHeader.CalculationKey,
		
		"ActivityType" : allJobsArray.dataHeader.ActivityType,
		"NormalDurationUnit" : allJobsArray.dataHeader.DurationNormalUnit,
		"NormalDuration" : allJobsArray.dataHeader.DurationNormal,
		"ActivityWork" : allJobsArray.dataHeader.WorkActitivty,
		"ActivityWorkUnit" :allJobsArray.dataHeader.WorkActitivtyUnit,
		"Equipment" : allJobsArray.dataHeader.Equipment,
		
		"FunctionalLocation" : allJobsArray.dataHeader.FunctionLoc,
		"NotificationNo" : allJobsArray.dataHeader.NotificationNo,
		"EarlyScheduleStartDateTime" : EarlyScheduleStartDate+"T"+EarlyScheduleStartTime  , // objJobToProcess.Items.EarlyScheduleStartDateTime,
		"LateScheduleStartDateTime" :  LateScheduleStartDate+"T"+LateScheduleStartTime  ,
		"EarlyScheduleFinishDateTime" : EarlyScheduleFinishDate+"T"+EarlyScheduleFinishTime  ,
		"LateScheduleFinishDateTime" :  LatestFinishDate+"T"+LatestFinishDateTime  ,
		
		//"LongText" : objJobToProcess.Items.LongText,
	};
	if (g_isDebug == true) {
		var logDetails = getTimeStamp() + "BG Processor:: SPLT JobFromQueue: " + JSON.stringify(createReqData);
		logBGFileUpdate(logDetails);
		
		//Background log file
		logFileUpdate_Background(logDetails);
	}
	oDataCompleteJob
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+ "Task: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Notification: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+"Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() +"BG Processor:: "+process+"Failed: "  + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: "+process+" Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});
});

}

/********************************************/


function installJobFromQueue(objJobToProcess) {

	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: completeJobFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataInstallJob = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var eqpNo = objJobToProcess.Items.Equipment.padBeginZero(objJobToProcess.Items.Equipment, 7);
	
	var readRequestURL = "/AssetInstallSet(Equipment='" + eqpNo + "')";

	oDataInstallJob.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"Equipment" : eqpNo,
		"ReservNo" : objJobToProcess.Items.ReservNo,
		"ResItem" : objJobToProcess.Items.ResItem, 
		"Plant" : objJobToProcess.Items.Plant,
		"StgeLoc" : objJobToProcess.Items.StgeLoc,
		"Funcloc" : objJobToProcess.Items.Funcloc,
		"Position" : objJobToProcess.Items.Position
	};


	oDataInstallJob
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Install Job: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Install Job: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										/*sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");*/
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

}




function removeAssetFromQueue(objJobToProcess) {

	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: removeAssetFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataRemoveJob = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var eqpNo = objJobToProcess.Items.Equipment.padBeginZero(objJobToProcess.Items.Equipment, 7);
	
	var readRequestURL = "/AssetRemoveSet(Equipment='" + eqpNo + "')";

	oDataRemoveJob.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"Equipment" : eqpNo,
		"Activity" : objJobToProcess.Items.Activity,
		"OrderId" : objJobToProcess.Items.OrderId, 
		"Plant" : objJobToProcess.Items.Plant,
		"StgeLoc" : objJobToProcess.Items.StgeLoc
	};


	oDataRemoveJob
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Install Job: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Install Job: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										/*sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");*/
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

}





function createMeasureFromQueue(objJobToProcess) {

	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: createMeasureFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataCreateMeasure = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	
	var readRequestURL = "/CreateMeasureSet";

	oDataCreateMeasure.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"MeasurementPoint" : objJobToProcess.Items.MeasurementPoint,
		"Comments" : objJobToProcess.Items.Comments,
		"RecordedValue" : objJobToProcess.Items.RecordedValue
	};


	oDataCreateMeasure
			.create(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Create Measure: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Create Measure: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

}


function changeDurationFromQueue(objJobToProcess) {
	//alert("now extend");
	if (g_isDebug == true) {
		// Service End Time
		var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: changeDurationFromQueue: Started";
		
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();

	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}
	updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
	var oDataExtendOrder = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
//	alert("1249");
	var ordNo = objJobToProcess.Items.Order.padBeginZero(objJobToProcess.Items.Order, 12);
	//alert("1251");
	var readRequestURL = "/ExtendOrderSet(OrderId='" + ordNo + "')";
	
	oDataExtendOrder.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	var createReqData = {
		"OperationProcessActivity" : objJobToProcess.Items.OperationProcessActivity,
		"Activity" : objJobToProcess.Items.Activity,
		"ReasonForVariance" : objJobToProcess.Items.ReasonForVariance,
		"Plant" : objJobToProcess.Items.Plant,
		"PersonnelNumber" : objJobToProcess.Items.PersonnelNumber,
		"PostingDate" : objJobToProcess.Items.PostingDate,
		"NormalDuration" : objJobToProcess.Items.NormalDuration
	};

	if (g_isDebug == true) {
		//alert("1272");
		var logDetails = getTimeStamp() + "BG Processor:: changeDurationFromQueue: " + JSON.stringify(createReqData);
		logBGFileUpdate(logDetails);
		
		//Background log file
		logFileUpdate_Background(logDetails);
	}
	oDataExtendOrder
			.update(
					readRequestURL,
					createReqData,
					null,
					function(oResponse) {
						closeSplashScreen();
						
						if (g_isDebug == true) {
							// Service End Time
							var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Extend Order: "  
								+ " created successfully";
							
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
						
						updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Extend Order: "
								+ " created successfully");
						
					},

					function(oError) {
						closeSplashScreen();

						// alert("Error While Creating Inspection Lot: " +
						// oError.message +" "+oError.status+"
						// "+oError.Statustype);

						try {
							var data = JSON.parse(oError.response.body);
							for ( var event in data) {
								var dataCopy = data[event];

								try {
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									/*setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										sap.m.MessageBox.show(
												messageFromBackend + " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
									}, 1000);// constant delay
*/									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: EXTEND ORDER " + messageFromBackend;
										
										logFileUpdate(g_ServiceStartEndTime);
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return messageFromBackend;
								} catch (e) {

									setTimeout(function() {
										closeSplashScreen();// splash screen
															// closed
										var errorMsg = e.message;
										/*sap.m.MessageBox.show(
												data.error.message.value + " "
														+ " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");*/
									}, 1000);// constant delay
									
									updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
									
									if (g_isDebug == true) {
										// Service End Time
										var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: EXTEND ORDER " + e.message;
										
										logFileUpdate(g_ServiceStartEndTime);
										
										//Background log file
										logFileUpdate_Background(g_ServiceStartEndTime);
									}

									return errorMsg;
								}

							}

						}

						catch (e) {
							
							var errorMsg = "Service Not Available - Please contact system administrator";
							
							/*setTimeout(function() {
								closeSplashScreen();// splash screen closed
								
								
								sap.m.MessageBox.show(

								
										+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");

							}, 1000);// constant delay
*/							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var g_ServiceStartEndTime = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
								
								logFileUpdate(g_ServiceStartEndTime);
								
								//Background log file
								logFileUpdate_Background(g_ServiceStartEndTime);
							}

							return "Contact Admin";
						}

					});

}
function PostChangeAsset(objJobToProcess){
	debugger;
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if (serviceURL == "Fail") {
		// resetF2(); //Resetting F2 Notification
		return false;
	}

	var oDataCreateNoti = new sap.ui.model.odata.ODataModel(serviceURL,
			true, myID, myPass, null, true, true, false);
	var readRequestURL = "/AssetSet";
	
	
	var AssetChangeData={};
	
	AssetChangeData.Equnr= objJobToProcess.Header;
	AssetChangeData.NavCval= objJobToProcess.Items[0]
	AssetChangeData.NavGenData=[];
	AssetChangeData.NavGenData[0]=objJobToProcess.Items[1];
	AssetChangeData.NavStData=objJobToProcess.Items[2];
	
	
	oDataCreateNoti.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});

	oDataCreateNoti
	.create(
			readRequestURL,
			AssetChangeData,
			null,
			function(oResponse) {
				debugger;
				closeSplashScreen();
				
				if (g_isDebug == true) {
					// Service End Time
					var logInfo = getTimeStamp() + "BG Processor:: Asset Changed Successfully";
					g_ServiceStartEndTime = logInfo;
					logFileUpdate(g_ServiceStartEndTime);
				}
				
				updateTransactionQueueDrop3(objJobToProcess.Key, "Success", "Asset Changed Successfully");
				
			
				return 

			},

			function(oError) {
				debugger;
				closeSplashScreen();

				

				try {
					var data = JSON.parse(oError.response.body);
					for ( var event in data) {
						var dataCopy = data[event];

						try {
							var messageFromBackend = dataCopy.innererror.errordetails[0].message;
							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", messageFromBackend);
							
							if (g_isDebug == true) {
								// Service End Time
								var logInfo = getTimeStamp() + "BG Processor:: Failed: " + messageFromBackend;
								g_ServiceStartEndTime = logInfo;
								logFileUpdate(g_ServiceStartEndTime);
							}

							return messageFromBackend;
						} catch (e) {

							setTimeout(function() {
								closeSplashScreen();// splash screen
													// closed
								var errorMsg = e.message;
								sap.m.MessageBox.show(
										data.error.message.value + " "
												+ " " + " ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");
							}, 1000);// constant delay
							
							updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
							
							if (g_isDebug == true) {
								// Service End Time
								var logInfo = getTimeStamp() + "BG Processor:: Failed: " + e.message;
								g_ServiceStartEndTime = logInfo;
								logFileUpdate(g_ServiceStartEndTime);
							}

							return errorMsg;
						}

					}

				}

				catch (e) {
					
					var errorMsg = "Service Not Available - Please contact system administrator";
					
					/*setTimeout(function() {
						closeSplashScreen();// splash screen closed
						
						
						sap.m.MessageBox.show(

						
								+ " " + " " + " ",
								sap.m.MessageBox.Icon.ERROR, "Error");

					}, 1000);// constant delay
*/							
					updateTransactionQueueDrop3(objJobToProcess.Key, "Failed", errorMsg);
					
					if (g_isDebug == true) {
						// Service End Time
						var logInfo = getTimeStamp() + "BG Processor:: Failed: " + errorMsg;
						g_ServiceStartEndTime = logInfo;
						logFileUpdate(g_ServiceStartEndTime);
					}

					return "Contact Admin";
				}

			});
	
	
}