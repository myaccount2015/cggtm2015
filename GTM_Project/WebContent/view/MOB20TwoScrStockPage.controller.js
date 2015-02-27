sap.ui
		.controller(
				"com.cg.gtm.view.MOB20TwoScrStockPage",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.MOB20TwoScrStockPage
					 */
					// onInit: function() {
					//
					// },
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf view.MOB20TwoScrStockPage
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf view.MOB20TwoScrStockPage
					 */
					// onAfterRendering: function() {
					//
					// },
					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf view.MOB20TwoScrStockPage
					 */
					// onExit: function() {
					//
					// }
					confrmCount : function(oEvent) // for mobile
					{
						var selectedButton;
						var demo = sap.ui.getCore().byId("demoswitch");
						if (demo.getState() == true) {
							var getRecrd = sap.ui.getCore().byId(
									"idMob20-MatDesTable").getModel().oData.results;

							var iconVal = 2;
							Mob20ErrorMessageStage(getRecrd, iconVal);// Success
						} else {
							debugger;
							g_MobileNavigationId = "Mob20-InvdocMaster";
							// sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValueState(sap.ui.core.ValueState.None);
							var getRecrd = sap.ui.getCore().byId(
									"idMob20-MatDesTable").getModel().oData.results;
							// Calling service

							// Service Start Time
							var logInfo = getTimeStamp()
									+ "MOB20:: Service: InventoryHeaderSet Start";
							var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
							if (serviceURL == "Fail") {
								return false;
							}
							var oDataCreateCount = new sap.ui.model.odata.ODataModel(
									serviceURL, true, myID, myPass, null, true,
									true, false);
							var readRequestURL = "/InventoryHeaderSet";
							oDataCreateCount.setHeaders({
								"X-Requested-With" : "XMLHttpRequest",
								"Content-Type" : "application/json",
								"X-CSRF-Token" : "Fetch",
								"DataServiceVersion" : "2.0"
							});
							var createReqData = {
								"Physinventory" : getRecrd[0].Physinventory,
								"FiscalYear" : getRecrd[0].Fiscalyear,
							};

							var getAray;
							var getArayMai = [];
							var getScannedItemRec;
							var getScannedQty;
							var checkingLoop = getRecrd.length;
							checkingLoop = checkingLoop - 1;

							for (var i = 0; i < getRecrd.length; i++)
								if (getRecrd[i].FlagSerialno == "X") {
									// getSerivce array
									getAray = window.localStorage
											.getItem(getRecrd[i].Physinventory
													+ "_"
													+ getRecrd[i].Material
													+ getRecrd[i].Batch
													+ getRecrd[i].StocktypeDesc
													+ "_ServiceArray");
									getAray = JSON.parse(getAray);
									if ((getAray == null)) {
										sap.m.MessageBox.show(
												"Visit to all line items in Material List"
														+ " " + " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
										selectedButton = 1;
										// break;

										sap.ui.getCore().byId("myApp").to(
												"idMob20MatDesPage");
									}

									var titMat = sap.ui.getCore().byId(
											"Mob20-frstScreen").getTitle()
											+ "_"
											+ getRecrd[i].Material
											+ "_"
											+ getRecrd[i].StocktypeDesc
											+ "_"
											+ getRecrd[i].Batch;

									var scannedValues = window.localStorage
											.getItem(titMat);

									if (scannedValues != null) {
										scannedValues = scannedValues.replace(
												/,/g, "_");
										scannedValues = scannedValues.replace(
												/"/g, "");
										scannedValues = scannedValues.replace(
												"[", "");
										scannedValues = scannedValues.replace(
												"]", "");
									}
									var noOfScanQty = window.localStorage
											.getItem(sap.ui.getCore().byId(
													"Mob20-frstScreen")
													.getTitle()
													+ "_"
													+ getRecrd[i].Material
													+ getRecrd[i].Batch
													+ getRecrd[i].StocktypeDesc
													+ "SerLogVal");

									if (noOfScanQty == ""
											|| noOfScanQty == null) {
										noOfScanQty = "0";
									}

									getAray[0].EntryQnt = noOfScanQty;
									getAray[0].SerialNo = scannedValues;
									getArayMai[i] = getAray[0];
									getAray.length = 0;
								}

								else {

									{
										// getSerivce array
										getAray = window.localStorage
												.getItem(getRecrd[i].Physinventory
														+ "_"
														+ getRecrd[i].Material
														+ getRecrd[i].Batch
														+ getRecrd[i].StocktypeDesc
														+ "_ServiceArray");
										getAray = JSON.parse(getAray);
										if ((getAray == null)) {
											sap.m.MessageBox
													.show(
															"Visit to all line items in Material List"
																	+ " " + " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
											selectedButton = 1;
											// break;

											sap.ui.getCore().byId("myApp").to(
													"idMob20MatDesPage");
										}
										var noOfScanQty = window.localStorage
												.getItem(sap.ui.getCore().byId(
														"Mob20-frstScreen")
														.getTitle()
														+ "_"
														+ getRecrd[i].Material
														+ getRecrd[i].Batch
														+ getRecrd[i].StocktypeDesc
														+ "SerLogVal");

										if (noOfScanQty == ""
												|| noOfScanQty == null) {
											noOfScanQty = "0";
										}

										getAray[0].EntryQnt = noOfScanQty;
										getAray[0].SerialNo = "";
										getArayMai[i] = getAray[0];
										getAray.length = 0;
									}
								}

							createReqData.NavInventory = getArayMai;
							for (var i = 0; i < getRecrd.length; i++) {// validation
								// for
								// qty
								// and
								// ser
								// scan
								// function
								getScannedItemRec = window.localStorage
										.getItem(sap.ui.getCore().byId(
												"Mob20-frstScreen").getTitle()
												+ "_"
												+ getRecrd[i].Material
												+ "_"
												+ getRecrd[i].StocktypeDesc
												+ "_" + getRecrd[i].Batch);
								getScannedQty = window.localStorage
										.getItem(sap.ui.getCore().byId(
												"Mob20-frstScreen").getTitle()
												+ "_"
												+ getRecrd[i].Material
												+ getRecrd[i].Batch
												+ getRecrd[i].StocktypeDesc
												+ +"SerLogVal");

								if (getScannedQty == "") {
									getScannedQty = null;
								}
								getScannedItemRec = JSON
										.parse(getScannedItemRec);
								getScannedQty = JSON.parse(getScannedQty);
								if ((getScannedItemRec != null)
										&& (getScannedItemRec.length <= getScannedQty) == false) {
									var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"
											+ i;
									cssErrColor(idList);
									sap.m.MessageBox.show(
											"Need to check all items are scanned according "
													+ "to qty in Material : "
													+ getRecrd[i].Material
													+ " " + " " + " ",
											sap.m.MessageBox.Icon.ERROR,
											"Error");
									sap.ui.getCore().byId("myApp").to(
											"idMob20MatDesPage");
									return;

								}

								if (getRecrd[i].FlagSerialno == "X") {
									var checkSer = sap.ui.getCore().byId(
											"Mob20-SerCheckValidation")
											.getText();
									if (getScannedItemRec == null
											&& (checkSer == "Serial")
											&& (getScannedQty != null)) {
										// if ( checkSer1 != "NonSer")
										{
											sap.m.MessageBox
													.show(
															"Need to check all items are scanned according "
																	+ "to qty in Material : "
																	+ getRecrd[i].Material
																	+ " " + " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
											return;
										}
									} else if (getScannedItemRec == null
											&& (checkSer == "Serial"
											/*
											 * sap.ui.getCore().byId("Mob20-btnlogSer").getVisible() ==
											 * true
											 */) && (getScannedQty == null)) {
										// if(checkSer1 != "NonSer")
										{
											sap.m.MessageBox
													.show(
															"Need to check all items are scanned according "
																	+ "to qty in Material : "
																	+ getRecrd[i].Material
																	+ " " + " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
											return;
										}

									}

									else if (getScannedItemRec != null) {

										if (getScannedItemRec.length != getScannedQty
												&& (checkSer == "Serial"
												/*
												 * sap.ui.getCore().byId("Mob20-btnlogSer").getVisible() ==
												 * true
												 */)) {
											var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"
													+ i;
											cssErrColor(idList);
											sap.m.MessageBox
													.show(
															"Qty field mismatched with scanned item in Material No : "
																	+ getRecrd[i].Material
																	+ " " + " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
											return;
										}
									}

								}

								// //////////////////////////////////////////////////////////////////////////////////////////////////////
								// //////////////Dont
								// delete///////////////////////////

								/*
								 * if ( (getAray != null) && (
								 * (getScannedItemRec == null) ) ) {
								 * openSplashScreen();//splash screen opened
								 * setTimeout(function(){
								 * closeSplashScreen();//splash screen closed
								 * oDataCreateCount.create(readRequestURL,
								 * createReqData, null, function(oResponse) {var
								 * msg = "Data Send
								 * Successfully";jQuery.sap.require("sap.m.MessageToast");
								 * sap.m.MessageToast.show(msg);
								 * },function(oError){ try{var data =
								 * JSON.parse(oError.response.body); for(var
								 * event in data) {var dataCopy = data[event];
								 * try{var messageFromBackend =
								 * dataCopy.innererror.errordetails[0].message;
								 * sap.m.MessageBox.show( messageFromBackend+ " " +"
								 * "+" ", sap.m.MessageBox.Icon.ERROR, "Error");
								 * //break; }
								 * catch(e){sap.m.MessageBox.show(data.error.message.value+ " " +"
								 * "+" ", sap.m.MessageBox.Icon.ERROR,"Error");
								 * //break; }}}catch(e)
								 * {sap.m.MessageBox.show("Service Not Available -
								 * Please contact system administrator" + " " +"
								 * "+" ",
								 * sap.m.MessageBox.Icon.ERROR,"Error");}});},1000);//constant
								 * delay} }
								 */

								// ///////////////////////////////////////////////////////////////////////////////////////////////////////
								if (sap.ui.getCore().byId(
										"Mob20-thrdScr-btnScan").getVisible() == true) {
									if ((getScannedItemRec == null)
											&& (getScannedQty != null && (getScannedQty != 0))) {
										var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"
												+ i;
										cssErrColor(idList);
										sap.m.MessageBox.show(
												"Qty field mismatched with scanned item in Material No : "
														+ getRecrd[i].Material
														+ " " + " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
										sap.ui.getCore().byId("myApp").to(
												"idMob20MatDesPage");
										return;

									}
								}

								if (checkingLoop == i) {
									if ((getAray != null)
											&& ((selectedButton != 1))) {
										openSplashScreen();// splash screen
										// opened
										setTimeout(
												function() {
													closeSplashScreen();// splash
													// screen
													// closed
													oDataCreateCount
															.create(
																	readRequestURL,
																	createReqData,
																	null,
																	function(
																			oResponse) {
																		var iconVal = 2;
																		Mob20ErrorMessageStage(
																				getRecrd,
																				iconVal,
																				"");// Success
																		var msg = "Data Send Successfully";
																	/*	jQuery.sap
																				.require("sap.m.MessageToast");
																		sap.m.MessageToast
																				.show(msg);*/
																		sap.m.MessageBox.show(
															            		msg +" ",
																					sap.m.MessageBox.Icon.SUCCESS,
																					"Success");
																		sap.ui
																				.getCore()
																				.byId(
																						"myApp")
																				.to(
																						"idMob20InitialScreen");

																		var deselect = sap.ui
																				.getCore()
																				.byId(
																						"Mob20-listMatNo"); // mob22iniList
																		deselect
																				.removeSelections(true);

																		if (g_isDebug == true) {
																			// Service
																			// End
																			// Time
																			var logInfo1 = getTimeStamp()
																					+ "MOB20:: Service: InventoryHeaderSet Finish";
																			// Log
																			// file
																			// Service
																			// Start
																			// and
																			// End
																			// Time
																			var g_ServiceStartEndTime = logInfo
																					+ "\n"
																					+ logInfo1;
																			logFileUpdate(g_ServiceStartEndTime);
																		}
																	},
																	function(
																			oError) {

																		var deselect = sap.ui
																				.getCore()
																				.byId(
																						"Mob20-listMatNo"); // mob22iniList
																		deselect
																				.removeSelections(true);

																		try {

																			var data = JSON
																					.parse(oError.response.body);
																			for ( var event in data) {
																				var dataCopy = data[event];
																				try {
																					var iconVal = 0;
																					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
																					Mob20ErrorMessageStage(
																							getRecrd,
																							iconVal,
																							messageFromBackend);// Error
																					// Occurs
																					// red
																					// icon
																					// mode
																					// fn
																					sap.m.MessageBox
																							.show(
																									messageFromBackend
																											+ " "
																											+ " "
																											+ " ",
																									sap.m.MessageBox.Icon.ERROR,
																									"Error");
																					window.localStorage
																							.setItem(
																									sap.ui
																											.getCore()
																											.byId(
																													"Mob20-thrdScr-txtMat")
																											+ "ErrorMsgStore",
																									messageFromBackend);
																					sap.ui
																							.getCore()
																							.byId(
																									"myApp")
																							.to(
																									"idMob20InitialScreen");
																					sap.ui
																							.getCore()
																							.byId(
																									"Mob20-listMatNo")
																							.removeSelections();
																					break;
																				} catch (e) {
																					var iconVal = 0;
																					sap.m.MessageBox
																							.show(
																									data.error.message.value
																											+ " "
																											+ " "
																											+ " ",
																									sap.m.MessageBox.Icon.ERROR,
																									"Error");
																					Mob20ErrorMessageStage(
																							getRecrd,
																							iconVal,
																							data.error.message.value);// Error
																					// Occurs
																					// red
																					// icon
																					// mode
																					// fn
																					sap.ui
																							.getCore()
																							.byId(
																									"myApp")
																							.to(
																									"idMob20InitialScreen");
																					// window.localStorage.setItem(sap.ui.getCore().byId("Mob20-thrdScr-txtMat")+"ErrorMsgStore",
																					// data.error.message.value);
																					// sap.ui.getCore().byId("Mob20-listMatNo").removeSelections();
																					break;
																				}
																			}
																		} catch (e) {
																			var iconVal = 1;
																			Mob20ErrorMessageStage(
																					getRecrd,
																					iconVal,
																					"");// Data
																			// saved
																			// not
																			// send
																			// to
																			// backend
																			// Yellow
																			// icon
																			sap.m.MessageBox
																					.show(
																							"Service Not Available - Please contact system administrator"
																									+ " "
																									+ " "
																									+ " ",
																							sap.m.MessageBox.Icon.ERROR,
																							"Error");
																			sap.ui
																					.getCore()
																					.byId(
																							"myApp")
																					.to(
																							"idMob20InitialScreen");
																			sap.ui
																					.getCore()
																					.byId(
																							"Mob20-listMatNo")
																					.removeSelections();
																			// Error
																			// Message:

																			if (g_isDebug == true) {
																				// Service
																				// End
																				// Time
																				var logInfo1 = getTimeStamp()
																						+ "MOB20:: Service: InventoryHeaderSet Failed no network";
																				// Log
																				// file
																				// Service
																				// Start
																				// and
																				// End
																				// Time
																				var g_ServiceStartEndTime = logInfo
																						+ "\n"
																						+ logInfo1;
																				logFileUpdate(g_ServiceStartEndTime);
																			}

																		}
																	});
												}, 1000);// constant delay}
									}
									// /////////////////////////////////////////Dont
									// delete/////////////////////////////////////////////////
									/*
									 * else if( (selectedButton != 1) ) {
									 * openSplashScreen();//splash screen opened
									 * setTimeout(function(){
									 * closeSplashScreen();//splash screen
									 * closed
									 * oDataCreateCount.create(readRequestURL,
									 * createReqData, null, function(oResponse) {
									 * var iconVal = 2;
									 * Mob20ErrorMessageStage(getRecrd,
									 * iconVal);//Success var msg = "Data Send
									 * Successfully";jQuery.sap.require("sap.m.MessageToast");
									 * sap.m.MessageToast.show(msg);
									 * },function(oError){ try{var data =
									 * JSON.parse(oError.response.body); for(var
									 * event in data) {var dataCopy =
									 * data[event]; try{ var iconVal = 0;
									 * Mob20ErrorMessageStage(getRecrd,
									 * iconVal);//Error Occurs var
									 * messageFromBackend =
									 * dataCopy.innererror.errordetails[0].message;
									 * sap.m.MessageBox.show(
									 * messageFromBackend+ " " +" "+"
									 * ",sap.m.MessageBox.Icon.ERROR,
									 * "Error");}catch(e){sap.m.MessageBox.show(data.error.message.value+ " " +"
									 * "+" ",
									 * sap.m.MessageBox.Icon.ERROR,"Error");
									 * //break; }}}catch(e) {var iconVal = 1;
									 * Mob20ErrorMessageStage(getRecrd,
									 * iconVal);//Error Occurs
									 * sap.m.MessageBox.show("Service Not
									 * Available - Please contact system
									 * administrator" + " " +" "+" ",
									 * sap.m.MessageBox.Icon.ERROR,"Error");}});},1000);//constant
									 * delay} }
									 */

									// //////////////////////////////////////////////////////////////////////////////////////////////////////////
								}
							}
						}
					},
					addSerialButton : function() {
						if (sap.ui.getCore().byId(
								"Mob20-thrdScr-txtBoxManualEntryLog")
								.getValue() == "") {
							sap.m.MessageBox.show("Please Enter Serial Number"
									+ " " + " " + " ",
									sap.m.MessageBox.Icon.ERROR, "Error");
						} else {
							var titMat = sap.ui.getCore().byId(
									"Mob20-frstScreen").getTitle()
									+ "_"
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtMat").getText()
									+ "_"
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtType").getText()
									+ "_"
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtBatch").getText();

							var Mob20SerialLogLocalStorage = window.localStorage
									.getItem(titMat);
							var Mob20SerialLogMasArray = window.localStorage
									.getItem("Mob20SerialLog");
							if (Mob20SerialLogLocalStorage === undefined
									|| Mob20SerialLogLocalStorage === null
									|| Mob20SerialLogLocalStorage.length === 0) {
								var serNumArrTitle = new Array();
								var titString = JSON.stringify(titMat);
								serNumArrTitle[0] = titString;
								var serNumArr = [];
								serNumArr[0] = sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBoxManualEntryLog")
										.getValue();
								var stringifiedNoti = JSON.stringify(serNumArr);
								window.localStorage.setItem(titMat.toString(),
										stringifiedNoti);// store the serial
								// number

								// getting scanned records and ther length to
								// check with input valu validations
								var getScannedItemRec = window.localStorage
										.getItem(titMat.toString());
								getScannedItemRec = JSON
										.parse(getScannedItemRec);
								if (sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBoxLogSer")
										.getValue() == "") {
									sap.ui.getCore().byId(
											"Mob20-thrdScr-txtBoxLogSer")
											.setValue(0);
								}

								if (sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBoxLogSer")
										.getValue() < getScannedItemRec.length) {
									sap.ui
											.getCore()
											.byId("Mob20-thrdScr-txtBoxLogSer")
											.setValue(
													sap.ui
															.getCore()
															.byId(
																	"Mob20-thrdScr-txtBoxLogSer")
															.getValue()
															- (-1));// increment
									// 1
								}

							} else {
								var notiNumRcvd = new Array();
								notiNumRcvd = JSON
										.parse(Mob20SerialLogLocalStorage);
								var testMasterVar = 0;
								// /////////////////////////////////////////////////////////////////////////////////////////////
								// Iterate array
								for (var i = 0; i < notiNumRcvd.length; i++) {
									if (notiNumRcvd[i] == sap.ui
											.getCore()
											.byId(
													"Mob20-thrdScr-txtBoxManualEntryLog")
											.getValue()) {

										sap.m.MessageBox.show(
												"Already Available Serial Number"
														+ " " + " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
										sap.ui.getCore().byId("Mob20-popWin")
												.close();
										testMasterVar = 1;
									}
								}

								if (testMasterVar == 0) {
									/*
									 * //alert("Not ava");
									 * sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue
									 * (sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue() -
									 * (-1));
									 */
									notiNumRcvd
											.push(sap.ui
													.getCore()
													.byId(
															"Mob20-thrdScr-txtBoxManualEntryLog")
													.getValue());// pushing
									// new noti
									// number
									var notiNumRcvdString = JSON
											.stringify(notiNumRcvd);
									window.localStorage.setItem(titMat,
											notiNumRcvdString);
									// getting scanned records and ther length
									// to check with input valu validations
									var getScannedItemRec = window.localStorage
											.getItem(titMat);
									getScannedItemRec = JSON
											.parse(getScannedItemRec);
									if (sap.ui.getCore().byId(
											"Mob20-thrdScr-txtBoxLogSer")
											.getValue() < getScannedItemRec.length) {
										sap.ui
												.getCore()
												.byId(
														"Mob20-thrdScr-txtBoxLogSer")
												.setValue(
														sap.ui
																.getCore()
																.byId(
																		"Mob20-thrdScr-txtBoxLogSer")
																.getValue()
																- (-1));// increment
										// 1

										sap.ui.getCore().byId(
												"Mob20-thrdScr-txtBoxLogSer")
												.fireChangeEvent();

									}

								}
							}

							// Master Array rec
							if (Mob20SerialLogMasArray === undefined
									|| Mob20SerialLogMasArray === null
									|| Mob20SerialLogMasArray.length === 0)

							{
								var serNumArrTitle = new Array();
								serNumArrTitle[0] = titMat;
								var stringifiedMob20 = JSON
										.stringify(serNumArrTitle);
								window.localStorage.setItem("Mob20SerialLog",
										stringifiedMob20);// store the serial
								// number

							} else {
								var notiNumRcvd = new Array();
								notiNumRcvd = JSON
										.parse(Mob20SerialLogMasArray);
								var testMasterVar = 0;
								// /////////////////////////////////////////////////////////////////////////////////////////////
								// Iterate array
								for (var i = 0; i < notiNumRcvd.length; i++) {
									if (notiNumRcvd[i] == titMat) {
										// alert("already available Master");
										sap.ui.getCore().byId("Mob20-popWin")
												.close();
										testMasterVar = 1;
									}
								}

								if (testMasterVar == 0) {
									// alert("Not ava Master");
									notiNumRcvd.push(titMat);// pushing new
									// noti number
									var notiNumRcvdString = JSON
											.stringify(notiNumRcvd);
									window.localStorage
											.setItem("Mob20SerialLog",
													notiNumRcvdString);
									// sap.ui.getCore().byId("Mob20-popWin").close();
								}

							}

							// Local storage auto inc data to database
							window.localStorage.setItem(sap.ui.getCore().byId(
									"Mob20-frstScreen").getTitle()
									+ "_"
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtMat").getText()
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtBatch").getText()
									+ sap.ui.getCore().byId(
											"Mob20-thrdScr-txtType").getText() +

									+"SerLogVal", sap.ui.getCore().byId(
									"Mob20-thrdScr-txtBoxLogSer").getValue());
							sap.ui.getCore().byId(
									"Mob20-thrdScr-txtBoxManualEntryLog")
									.setValue("");
							sap.ui.getCore().byId("Mob20-popWin").close();
						}
						// Dont delete
						/*
						 * var scannedValues =
						 * window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+
						 * sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() );
						 * scannedValues = JSON.parse(scannedValues); var array =
						 * []; if (scannedValues != null ) {for ( var i = 0 ; i <
						 * scannedValues.length ; i++) {var res =
						 * {"scannerValues" :scannedValues[i],};
						 * array.push(res);}} var mainArr = []; mainArr =
						 * {"results" : array}; var oJSONModelMob20Res = new
						 * sap.ui.model.json.JSONModel();
						 * oJSONModelMob20Res.setData(mainArr);
						 * 
						 * sap.ui.getCore().byId("oResponsivePopoverList").setModel(oJSONModelMob20Res);
						 */
						// sap.ui.getCore().byId("oResponsivePopover").openBy(this);
					},

					btnScanner : function(oEvent) {

						sap.ui.getCore().byId("Mob20-txtAddRow").setVisible(
								true);
						sap.ui.getCore().byId("Mob20-popWin").open();

						sap.ui.getCore().byId("Mob20-ScanBodyText").setText(
								sap.ui.getCore().byId("Mob20-thrdScr-txtMat")
										.getText()
										+ "\n"
										+ sap.ui.getCore().byId(
												"Mob20-thrdScr-txtDes")
												.getText());

					},

					ScanSerial : function() {

						// var scannerRes = ScannerOut_M_S_E_B();
						// scannerRes = scannerRes.scanMaterials;
						/*
						 * var Material = ""; var mainArray= [];
						 * cordova.plugins.barcodeScanner.scan( function(result){
						 * //var resArray = result.text.split("#"); var str =
						 * result.text;//"#M:200042#S:3001607#E:3001607#B:"; var
						 * res = str.split("#"); for( var i = 1 ; i<
						 * res.length; i++) { Material = res[i]; Material =
						 * Material.split(":"); Material = Material[1];
						 * mainArray.push(Material); } //Check serial with
						 * material number if( mainArray[0] ==
						 * sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() ) {
						 * sap.ui.getCore().byId("Mob20-thrdScr-txtBoxManualEntryLog").setValue(mainArray[1]);
						 * sap.ui.getCore().byId("Mob20-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
						 * sap.ui.getCore().byId("Mob20-txtAddRow").setVisible(true); }
						 * 
						 * 
						 * else if( mainArray[0] == null || mainArray[0] ==
						 * undefined || mainArray[0] == "" ) { } else {
						 * sap.m.MessageBox.show("Serial number not matched with
						 * material number" + " " +" "+" ",
						 * sap.m.MessageBox.Icon.ERROR,"Error"); } },
						 * function(error){ sap.m.MessageBox.show("Scan failed: " +
						 * error);
						 * 
						 * });
						 */

						var jsonScanResult = ScannerOut_M_S_E_B();// .scanMaterials[0];
						jsonScanResult.done(function(results) {
							var scannerRes = results.scanMaterials;
							// Check serial with material number
							if (scannerRes[0].Material == sap.ui.getCore()
									.byId("Mob20-thrdScr-txtMat").getText()) {
								sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBoxManualEntryLog")
										.setValue(scannerRes[0].Serial);
								sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBoxManualEntryLog")
										.setValueState(
												sap.ui.core.ValueState.None);
								sap.ui.getCore().byId("Mob20-txtAddRow")
										.setVisible(true);
							}

							else if (scannerRes[0].Material == null
									|| scannerRes[0].Material == undefined
									|| scannerRes[0].Material == "") {
								// alert("No Material number");
							} else {
								sap.m.MessageBox.show(
										"Serial number not matched with material number"
												+ " " + " " + " ",
										sap.m.MessageBox.Icon.ERROR, "Error");
							}
						});

					},

					logSer : function(oEvent) {

						var titMat = sap.ui.getCore().byId("Mob20-frstScreen")
								.getTitle()
								+ "_"
								+ sap.ui.getCore().byId("Mob20-thrdScr-txtMat")
										.getText()
								+ "_"
								+ sap.ui.getCore()
										.byId("Mob20-thrdScr-txtType")
										.getText()
								+ "_"
								+ sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBatch").getText();

						var scannedValues = window.localStorage.getItem(titMat);
						scannedValues = JSON.parse(scannedValues);
						var array = [];
						if (scannedValues != null) {
							for (var i = 0; i < scannedValues.length; i++) {
								var res = {
									"scannerValues" : scannedValues[i],
								};
								array.push(res);
							}
						}
						var mainArr = [];
						mainArr = {
							"results" : array
						};

						var oJSONModelMob20Res = new sap.ui.model.json.JSONModel();
						oJSONModelMob20Res.setData(mainArr);

						// sap.ui.getCore().byId("oResponsivePopover").close(this);
						// sap.ui.getCore().byId("oResponsivePopover").openBy(this);
						this.popover = sap.ui.getCore().byId(
								"oResponsivePopover");
						this.popover.openBy(oEvent.getSource());
						sap.ui.getCore().byId("oResponsivePopoverList")
								.setModel(oJSONModelMob20Res);
						// oResponsivePopoverList.setModel(oJSONModelMob20Res);
						// sap.ui.getCore().byId("oResponsivePopover").addContent(
						// sap.ui.getCore().byId("oResponsivePopoverList"));

					},
					handleDelete : function(evt) {
						// evt.getSource().removeItem(evt.getParameter("listItem"));destroyItems
						sap.ui.getCore().byId("oResponsivePopover").close(this);
						evt.getSource().destroyItems();
						// sap.ui.getCore().byId("oResponsivePopoverList").getModel();
						sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer")
								.setValue(
										sap.ui.getCore().byId(
												"Mob20-thrdScr-txtBoxLogSer")
												.getValue() - (1));// decrement
						// 1

						// remove from local
						var titMat = sap.ui.getCore().byId("Mob20-frstScreen")
								.getTitle()
								+ "_"
								+ sap.ui.getCore().byId("Mob20-thrdScr-txtMat")
										.getText()
								+ "_"
								+ sap.ui.getCore()
										.byId("Mob20-thrdScr-txtType")
										.getText()
								+ "_"
								+ sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBatch").getText();

						var contentDel = evt.getParameter("listItem").mProperties.title;
						// window.localStorage.removeItem(titMat.toString(),
						// contentDel.toString());//store the serial number

						var getScannedItemRec = window.localStorage
								.getItem(titMat);
						getScannedItemRec = JSON.parse(getScannedItemRec);
						var arrFin = [];
						for (var i = 0; i < getScannedItemRec.length; i++) {

							if (getScannedItemRec[i] != contentDel) {

								arrFin.push(getScannedItemRec[i])

							}

						}

						var stringifiedNoti = JSON.stringify(arrFin);
						window.localStorage.setItem(titMat, stringifiedNoti);

						var getRecrd = sap.ui.getCore().byId(
								"idMob20-MatDesTable").getModel().oData.results;
						var noOfScanQty = window.localStorage.getItem(sap.ui
								.getCore().byId("Mob20-frstScreen").getTitle()
								+ "_"
								+ sap.ui.getCore().byId("Mob20-thrdScr-txtMat")
										.getText()
								+ sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBatch").getText()

								+ sap.ui.getCore()
										.byId("Mob20-thrdScr-txtType")
										.getText() + +"SerLogVal");
						noOfScanQty = noOfScanQty - 1;

						window.localStorage.setItem(sap.ui.getCore().byId(
								"Mob20-frstScreen").getTitle()
								+ "_"
								+ sap.ui.getCore().byId("Mob20-thrdScr-txtMat")
										.getText()
								+ sap.ui.getCore().byId(
										"Mob20-thrdScr-txtBatch").getText()

								+ sap.ui.getCore()
										.byId("Mob20-thrdScr-txtType")
										.getText() + +"SerLogVal", noOfScanQty);

						// sap.ui.getCore().byId("oResponsivePopover").destroyContent();
						// sap.ui.getCore().byId("oResponsivePopover").removeAllContent();
						// Binding
						// var mainArr = [];
						// mainArr = {"results" : arrFin};
						// var oJSONModelMob20Res = new
						// sap.ui.model.json.JSONModel();
						// oJSONModelMob20Res.setData(mainArr);
						// sap.ui.getCore().byId("oResponsivePopoverList").removeAllItems();
						// sap.ui.getCore().byId("oResponsivePopoverList").setModel(oJSONModelMob20Res);

					}

				});

function cssErrColor(idList) {
	$("#" + idList + "").css("background-color", "rgba(255, 77, 77, 0.72)");

};

function Mob20ErrorMessageStage(getRecrd, iconVal, errorMsg) {
	window.localStorage.removeItem(getRecrd[0].Physinventory);
	var invDocData = "";

	if (iconVal == 0) // error
	{
		invDocData = {

			"Physinventory" : getRecrd[0].Physinventory,
			"StgeLoc" : getRecrd[0].StgeLoc,
			"Slocdesc" : getRecrd[0].Slocdesc,
			"Countitems" : getRecrd[0].Countitems,
			"Fiscalyear" : getRecrd[0].Fiscalyear,
			"icon" : "img/error.png",
			"errreason" : errorMsg
		};
	} else if (iconVal == 1) // edit
	{
		invDocData = {

			"Physinventory" : getRecrd[0].Physinventory,
			"StgeLoc" : getRecrd[0].StgeLoc,
			"Slocdesc" : getRecrd[0].Slocdesc,
			"Countitems" : getRecrd[0].Countitems,
			"Fiscalyear" : getRecrd[0].Fiscalyear,
			"icon" : "img/edit.png",
			"errreason" : ""
		};
	}

	else // success
	{
		invDocData = {

			"Physinventory" : getRecrd[0].Physinventory,
			"StgeLoc" : getRecrd[0].StgeLoc,
			"Slocdesc" : getRecrd[0].Slocdesc,
			"Countitems" : getRecrd[0].Countitems,
			"Fiscalyear" : getRecrd[0].Fiscalyear,
			"icon" : "img/images_2.jpg",
			"errreason" : ""
		};

	}

	var stringifiedInv = JSON.stringify(invDocData);
	window.localStorage.setItem(getRecrd[0].Physinventory, stringifiedInv);
	var invDataInialArray = [];
	var invDataFinalArray = [];
	for (var index = 0; index < invDocJSONArray.length; index++)

	{
		var invData = "";
		if (invDocJSONArray[index].Physinventory == getRecrd[0].Physinventory) {

			if (iconVal == 0) // error
			{
				invData = {
					"Physinventory" : invDocJSONArray[index].Physinventory,
					"StgeLoc" : invDocJSONArray[index].StgeLoc,
					"Slocdesc" : invDocJSONArray[index].Slocdesc,
					"Countitems" : invDocJSONArray[index].Countitems,
					"Fiscalyear" : invDocJSONArray[index].Fiscalyear,
					"icon" : "img/error.png"

				}

			} else if (iconVal == 1) // edit
			{
				invData = {

					"Physinventory" : getRecrd[0].Physinventory,
					"StgeLoc" : getRecrd[0].StgeLoc,
					"Slocdesc" : getRecrd[0].Slocdesc,
					"Countitems" : getRecrd[0].Countitems,
					"Fiscalyear" : getRecrd[0].Fiscalyear,
					"icon" : "img/edit.png"
				};
			}

			else // success
			{
				invData = {

					"Physinventory" : getRecrd[0].Physinventory,
					"StgeLoc" : getRecrd[0].StgeLoc,
					"Slocdesc" : getRecrd[0].Slocdesc,
					"Countitems" : getRecrd[0].Countitems,
					"Fiscalyear" : getRecrd[0].Fiscalyear,
					"icon" : "img/images_2.jpg"
				}
			}

		} else {

			var forIcon = window.localStorage
					.getItem(invDocJSONArray[index].Physinventory);
			var imageIcon = "";
			if (null != forIcon && undefined != forIcon) {
				var parsedForIcon = JSON.parse(forIcon);
				imageIcon = parsedForIcon.icon;
			}

			invData = {
				"Physinventory" : invDocJSONArray[index].Physinventory,
				"StgeLoc" : invDocJSONArray[index].StgeLoc,
				"Slocdesc" : invDocJSONArray[index].Slocdesc,
				"Countitems" : invDocJSONArray[index].Countitems,
				"Fiscalyear" : invDocJSONArray[index].Fiscalyear,
				"icon" : imageIcon
			}
		}
		invDataInialArray.push(invData);
	}
	invDataFinalArray = {
		"results" : invDataInialArray
	};
	// var oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel(result,
	// "results");
	var oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel(
			invDataFinalArray);
	var listMat = sap.ui.getCore().byId("Mob20-listMatNo");
	listMat.setModel(oJSONModelMob20MasterList);
};

