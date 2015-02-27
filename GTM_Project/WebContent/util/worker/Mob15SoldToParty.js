/*
 * Mob 15 sold to party offline data call
 */


function Mob15SoldToParty()
        {
	
	var strClient = "";
	
	if (g_runningInTablet || g_runningOnPhone) {
		if (g_EndSystem.trim() == "DEV1") {
			strClient = "?sap-client=130";
		} else if (g_EndSystem.trim() == "DEV2") {
			strClient = "?sap-client=130";
		} 
		else if (g_EndSystem.trim() == "DEV3") {
			strClient = "?sap-client=130";
		} 
		
		else if (g_EndSystem.trim() == "QA2") {
			strClient = "?sap-client=210";
		} else if (g_EndSystem.trim() == "QA1") {
			strClient = "?sap-client=210";
		}
		
		else if (g_EndSystem.trim() == "QA3") {
			strClient = "?sap-client=210";
		}
		
		
	}
	
	

	var demoswitch = sap.ui.getCore().byId("demoswitch");
	var inputSoldTo = sap.ui.getCore().byId("inputSoldTo");
	var soldToDialog = sap.ui.getCore().byId("soldToDialog");
	var Mob15SelectContentSold = sap.ui.getCore().byId("Mob15-selectContentSold");
	
	if (demoswitch.getState() == true) {
		Mob15Q1();
	} else {
		// Check sold to number service data
		// id : inputSoldTo
		var webmodel = new sap.ui.model.json.JSONModel();
		var getWebmodelData = soldToDialog.getModel();
		if (getWebmodelData != undefined)
		{
			/*var soldToDlg = sap.ui.getCore().byId("soldToDialog");
			soldToDlg.open();*/
			g_webWorkerCheck = "OFC_STP_SU";//Offline function call Sold to party Success
		} else {
			openSplashScreen();// splash screen opened
			// Service Start Time
			var logInfo = getTimeStamp()
					+ "MOB15:: Service: SoldToPartyList Start";
			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV" + strClient);
			if (serviceURL == "Fail") {
				return false;
			}
			var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL,
					true, getUserName, getPassword, null, true, true, false);
			var readRequestURL = "/SoldToPartyList";
			loginoDataModel.read(readRequestURL, null, null, false, function(
					oData, oResponse) {
				
							
				g_webWorkerCheck = "OFC_STP_SU";//Offline function call Sold to party Success
				var result = oData.results;
				if (result.length > 0) {
					webmodel.setData({
						modelData : result
					});
					// inputSoldTo,soldToDialog, Mob15-selectContentSold setModels are already used in view
					
					inputSoldTo.setModel(webmodel);
					soldToDialog.setModel(webmodel);
					Mob15SelectContentSold.setModel(webmodel);
					
				}
				if (g_isDebug == true) {
					// Service End Time
					var logInfo1 = getTimeStamp()
							+ "MOB15:: Service: SoldToPartyList Finish";
					// Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
				}
				
				
				setTimeout(function() {
					closeSplashScreen();// splash screen closed
					/*var soldToDlg = sap.ui.getCore().byId("soldToDialog");
					soldToDlg.open();*/
				}, 1000);// constant delay
				
				

			},

			function(oError) {
				g_webWorkerCheck = "OFC_STP_ERROR";//Offline function call Sold to party Error
				
				
				
				
				setTimeout(function() {
					try {
						var data = JSON.parse(oError.response.body);
						for ( var event in data) {
							var dataCopy = data[event];
							try {
								var messageFromBackend = dataCopy.innererror.errordetails[0].message;
								sap.m.MessageBox
										.show(
												messageFromBackend
														+ " " + " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
							} catch (e) {
								sap.m.MessageBox
										.show(
												data.error.message.value
														+ " "
														+ " "
														+ " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
								break;
							}
						}
					} catch (e) {
						
						if (g_isDebug == true) {
							// Service End Time
							var logInfo1 = getTimeStamp()
									+ "MOB15:: Service: SoldToPartyList Failed no network";
							// Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
						}
						
						
						sap.m.MessageBox.show(
								"Service Not Available - Please contact system administrator"
										+ " " + " " + " ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");

					}
				
				}, 1000);// constant delay

			});
		}

	}
	

}