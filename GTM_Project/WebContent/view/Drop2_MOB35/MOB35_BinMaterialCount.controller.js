sap.ui
		.controller(
				"com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.MOB35_BinMaterialCount
					 */
					// onInit: function() {
					//
					// },
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf view.MOB35_BinMaterialCount
					 */
					// onBeforeRendering: function() {
					//
					// },
					submitCount : function() {
						// sap.ui.getCore().byId('mob35_detailBox').setVisible(false);
						globalPlantSearchFrom = "MOB35";
						openSplashScreen();// splash screen opened

						// Service Start Time
						var logInfo = getTimeStamp()
								+ "MOB35:: Service: WMInventoryCountHeaderSet Start";

						var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");

						if (serviceURL == "Fail") {
							return false;
						}

						var oDataChangeStockervice = new sap.ui.model.odata.ODataModel(
								serviceURL, true, myID, myPass, null, true,
								true, false);

						var readRequestURL = "/WMInventoryCountHeaderSet";

						oDataChangeStockervice.setHeaders({
							"X-Requested-With" : "XMLHttpRequest",
							"Content-Type" : "application/json",
							"X-CSRF-Token" : "Fetch",
							"DataServiceVersion" : "2.0"
						});

						var createReqData = "";
						var scannedValues = window.localStorage
								.getItem(g_invdocnumMOB35);

						if (scannedValues != null) {
							scannedValues = scannedValues.replace(/,/g, "_");
							scannedValues = scannedValues.replace(/"/g, "");
							scannedValues = scannedValues.replace("[", "");
							scannedValues = scannedValues.replace("]", "");
						}

						var defaultWareHouse = "";
						defaultWareHouse = window.localStorage
								.getItem("defWHCode");
						var lineItemData = "";
						var useIndex = 0;
						/*for (var index = 0; index < g_resultArrMOB35.length; index++) {

							if (g_resultArrMOB35[index].StorageBin == sap.ui
									.getCore().byId("MOB35_binInput")
									.getValue() // sap.ui.getCore().byId("ddBinMOB35").getSelectedKey()
							) {
								useIndex = index;
								lineItemData = {

									StockCategory : g_resultArrMOB35[index].StockCategory,
									WHouse : defaultWareHouse,
									Plant : window.localStorage
											.getItem("defPlantCode"),
									Quant : g_resultArrMOB35[index].Quant,
									RequestQuantity : gMOB35AddQtyArr[0],// sap.ui.getCore().byId("MOB35Qty").getValue(),
									SplStockNo : g_resultArrMOB35[index].SplStockNo,
									SplStock : g_resultArrMOB35[index].SplStock,
									SerialNo : scannedValues,
									Batch : g_resultArrMOB35[index].Batch,
									MaterialNo : gMOB35AddMatArr[0],// g_resultArrMOB35[index].MaterialNo,
									StorageLoc : window.localStorage
											.getItem("defLocCode"),
									StorageBinPosition : g_resultArrMOB35[index].StorageBinPosition,
									StorageBin : g_resultArrMOB35[index].StorageBin,
									StorageType : g_resultArrMOB35[index].StorageType,
									// WHouse : g_resultArrMOB35[index].WHouse,
									// Plant : g_resultArrMOB35[index].Plant,
									InvDocNo : g_resultArrMOB35[index].InvDocNo,
									InvDocItem : g_resultArrMOB35[index].InvDocItem,
									NameofCounter : g_resultArrMOB35[index].NameofCounter,
									StorageUnitNo : g_resultArrMOB35[index].StorageUnitNo,
									StorageUnitType : g_resultArrMOB35[index].StorageUnitType,
									UOM : gMOB35AddUOMArr[0]
								// g_resultArrMOB35[index].UOM

								};

							}
						}

						var lineItems = [];
						lineItems.push(lineItemData);*/

						// code for added materials
						//useIndex =  0;
						
						var lineItems = [];
						
						if (gMOB35AddMatArr.length > 0) {

							for (var cnt = 0; cnt < gMOB35AddMatArr.length; cnt++) {

								lineItemData = {

									StockCategory : gMOB35AddMatArr[cnt].StockCategory,
									WHouse : defaultWareHouse,
									Plant : window.localStorage
											.getItem("defPlantCode"),
									Quant : "",
									RequestQuantity : gMOB35AddMatArr[cnt].Quantity,// sap.ui.getCore().byId("MOB35Qty").getValue(),
									SplStockNo : gMOB35AddMatArr[cnt].SplStockNo,
									SplStock : gMOB35AddMatArr[cnt].SplStock,
									SerialNo : gMOB35AddMatArr[cnt].SerialArr,
									Batch : gMOB35AddMatArr[cnt].BatchNo,
									MaterialNo : gMOB35AddMatArr[cnt].Material.Material,
									StorageLoc : window.localStorage
											.getItem("defLocCode"),
									StorageBinPosition : g_resultArrMOB35[useIndex].StorageBinPosition,
									StorageBin : g_resultArrMOB35[useIndex].StorageBin,
									StorageType : g_resultArrMOB35[useIndex].StorageType,
									// WHouse : g_resultArrMOB35[index].WHouse,
									// Plant : g_resultArrMOB35[useIndex].Plant,
									InvDocNo : g_resultArrMOB35[useIndex].InvDocNo,
									InvDocItem : g_resultArrMOB35[useIndex].InvDocItem,
									NameofCounter : g_resultArrMOB35[useIndex].NameofCounter,
									StorageUnitNo : g_resultArrMOB35[useIndex].StorageUnitNo,
									StorageUnitType : g_resultArrMOB35[useIndex].StorageUnitType,
									UOM : gMOB35AddMatArr[cnt].Material.Uom
								};
								lineItems.push(lineItemData);
							}
						}
						createReqData = {
							"WHouse" : window.localStorage.getItem("defWHCode")
						};
						// createReqData.Whouse = "NP1";
						createReqData.NavWMInventory = lineItems;
						oDataChangeStockervice
								.create(
										readRequestURL,
										createReqData,
										null,
										function(oResponse) {
											// $("#"+g_sIDMOB28).css("background-color","#00FF00");
											closeSplashScreen();
											sap.m.MessageBox
													.show(
															"Operation Successful",
															sap.m.MessageBox.Icon.SUCCESS,
															"Success");
											var app = sap.ui.getCore().byId("myApp"); 
								            app.to("idGridSubMenuIMWM");
								            var appM = sap.ui.getCore().byId("idMOB35SplitApp");
								            appM.toDetail("idBlankScreen");

											if (g_isDebug == true) {
												// Service End Time
												var logInfo1 = getTimeStamp()
														+ "MOB35:: Service: WMInventoryCountHeaderSet Finish";
												// Log file Service Start and
												// End Time
												var g_ServiceStartEndTime = logInfo
														+ "\n" + logInfo1;
												logFileUpdate(g_ServiceStartEndTime);
											}
										},

										function(oError) {

											try {
												var data = JSON
														.parse(oError.response.body);

												for ( var event in data) {
													var dataCopy = data[event];

													try {
														var messageFromBackend = dataCopy.message.value;

														setTimeout(
																function() {
																	closeSplashScreen();// splash
																	// screen
																	// closed
																	sap.m.MessageBox
																			.show(
																					messageFromBackend
																							+ " "
																							+ " "
																							+ " ",
																					sap.m.MessageBox.Icon.ERROR,
																					"Error");
																	// $("#"+g_sIDMOB28).css("background-color","#FF0000");
																}, 1000);// constant
														// delay
														// saveNotiDeatilsQ1(glo_NotiKey,
														// "Failed",
														// null,messageFromBackend);
														// //Saving Notification

													} catch (e) {

														var errorMsg = e.message;

														setTimeout(
																function() {
																	closeSplashScreen();// splash
																	// screen
																	// closed
																	sap.m.MessageBox
																			.show(
																					errorMsg
																							+ " "
																							+ " "
																							+ " ",
																					sap.m.MessageBox.Icon.ERROR,
																					"Error");
																	// $("#"+g_sIDMOB28).css("background-color","#FF0000");
																}, 1000);// constant
														// delay
														// saveNotiDeatilsQ1(glo_NotiKey,
														// "Failed",
														// null,errorMsg);
														// //Saving Notification

														break;
													}

												}

											}

											catch (e) {
												// saveNotiDeatilsQ1(glo_NotiKey,
												// "Saved", null,null); //Saving
												// Notification

												setTimeout(
														function() {
															closeSplashScreen();// splash
															// screen
															// closed

															sap.m.MessageBox
																	.show(
																			"Service Not Available - Please contact system administrator"
																					+ " "
																					+ " "
																					+ " ",
																			sap.m.MessageBox.Icon.ERROR,
																			"Error");

															if (g_isDebug == true) {
																// Service End
																// Time
																var logInfo1 = getTimeStamp()
																		+ "MOB35:: Service: WMInventoryCountHeaderSet Failed no network";
																// Log file
																// Service Start
																// and End Time
																var g_ServiceStartEndTime = logInfo
																		+ "\n"
																		+ logInfo1;
																logFileUpdate(g_ServiceStartEndTime);
															}

														}, 1000);// constant
												// delay

												// $("#"+g_sIDMOB28).css("background-color","#FFFF00");

											}
										});

					},
					openMatSearchMOB35 : function() {

						backNavMat = "MOB35";
						sap.ui.getCore().byId("MOB35_serialInput").setValue("");
						var app = sap.ui.getCore().byId("myApp");
						app.to("idMob24MaterialSearch");
						var app = sap.ui.getCore().byId("splitAppMaterial");
						app.toMaster("idMob24MaterialSearchInput");
						app.toDetail("idMATSRBlank");
						var getPlant = window.localStorage
								.getItem("defPlantDesc");
						var inputPlantMat = sap.ui.getCore().byId(
								"inputPlantMat");
						inputPlantMat.setValue(getPlant);
						// inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
						g_inputPlantCode = window.localStorage
								.getItem("defPlantCode");
						inputPlantMat.setEnabled(true);

					},
					addSerialMOB35 : function() {
						
						
						if (sap.ui.getCore().byId(
								"Mob35-thrdScr-txtBoxManualEntryLog")
								.getValue() == "") {
							sap.m.MessageBox.show("Please Enter Serial Number"
									+ " " + " " + " ",
									sap.m.MessageBox.Icon.ERROR, "Error");
						} else {

							var titMat = g_invdocnumMOB35;
							var Mob35SerialLogLocalStorage = window.localStorage
									.getItem(titMat);
							var Mob35SerialLogMasArray = window.localStorage
									.getItem("Mob35SerialLog");
							
							if(typeof(Mob35SerialLogLocalStorage) == "undefined" || Mob35SerialLogLocalStorage === null || Mob35SerialLogLocalStorage.trim().length == 0 || JSON.parse(Mob35SerialLogLocalStorage).length == 0)
							{
								var serNumArrTitle = new Array();
								var titString = JSON.stringify(titMat);
								serNumArrTitle[0] = titString;
								var serNumArr = [];
								serNumArr[0] = sap.ui.getCore().byId(
										"Mob35-thrdScr-txtBoxManualEntryLog")
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
								if (sap.ui.getCore().byId("MOB35Qty")
										.getValue() == "") {
									sap.ui.getCore().byId("MOB35Qty").setValue(
											0);
								}

								if (sap.ui.getCore().byId("MOB35Qty")
										.getValue() < getScannedItemRec.length) {
									sap.ui.getCore().byId("MOB35Qty").setValue(
											sap.ui.getCore().byId("MOB35Qty")
													.getValue()
													- (-1));// increment 1
								}

							} else {
								var notiNumRcvd = new Array();
								notiNumRcvd = JSON
										.parse(Mob35SerialLogLocalStorage);
								var testMasterVar = 0;
								// /////////////////////////////////////////////////////////////////////////////////////////////
								// Iterate array
								for (var i = 0; i < notiNumRcvd.length; i++) {
									if (notiNumRcvd[i] == sap.ui
											.getCore()
											.byId(
													"Mob35-thrdScr-txtBoxManualEntryLog")
											.getValue()) {

										sap.m.MessageBox.show(
												"Already Available Serial Number"
														+ " " + " " + " ",
												sap.m.MessageBox.Icon.ERROR,
												"Error");
										sap.ui.getCore().byId("Mob35-popWin")
												.close();
										testMasterVar = 1;
									}
								}

								if (testMasterVar == 0) {
									
									var serialNo = sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").getValue();
									var batchVal = "";
									/*
									* Defect 803 - MOB-35: Valuation Type / Batch to default - Start
									 */
									 if(g_SelMaterialDetail.BatchManaged == true || g_SelMaterialDetail.Splitvaluated == true) {
										 if(g_SelMaterialDetail.SerialManaged == true) {
											 
											var funcSucc = function(data, textStatus, jqXHR) {
										        	var jsonObj = data.d; // Namespace
										        	
										        	//var arrCust = [];
										        	
										        	//return jsonObj.Batch;
										        	
										        	batchVal = jsonObj.Batch;
										        	
										        	var addedBatch = sap.ui.getCore().byId("MOB35_batchInput").getValue().trim();
													 
													 if(addedBatch != batchVal) {
														 closeSplashScreen();
														 sap.m.MessageBox.show(
																	"Batch Number Mismatch"
																			+ " " + " " + " ",
																	sap.m.MessageBox.Icon.ERROR,
																	"Error");
													 }else {
														 
														var serialNo = sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").getValue();
														
														var serNumArrTitle = new Array();
														
														if(typeof(window.localStorage.getItem("Mob35SerialLog")) != "undefined" && window.localStorage.getItem("Mob35SerialLog") != null) {
															serNumArrTitle = JSON.parse(window.localStorage.getItem("Mob35SerialLog"));
														} 
														
														serNumArrTitle.push(serialNo);
														
														var stringifiedMob35 = JSON
																.stringify(serNumArrTitle);
														window.localStorage.setItem("Mob35SerialLog",
																stringifiedMob35);// store the serial
														 
														window.localStorage.setItem(titMat,
																stringifiedMob35);
															// getting scanned records and ther length
															// to check with input valu validations
															var getScannedItemRec = window.localStorage
																	.getItem(titMat);
															getScannedItemRec = JSON
																	.parse(getScannedItemRec);
															if (sap.ui.getCore().byId("MOB35Qty")
																	.getValue() < getScannedItemRec.length) {
																sap.ui.getCore().byId("MOB35Qty")
																		.setValue(
																				sap.ui.getCore().byId(
																						"MOB35Qty")
																						.getValue()
																						- (-1));// increment
																// 1
															}
													 }
													 
													 closeSplashScreen();
										         }
											 
											 batchVal = fetchBatchValue(g_SelMaterialDetail.Material, serialNo, funcSucc);
											 
										 }
										}else {

											 
											var serialNo = sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").getValue();
											
											var serNumArrTitle = new Array();
											
											if(typeof(window.localStorage.getItem("Mob35SerialLog")) != "undefined" && window.localStorage.getItem("Mob35SerialLog") != null) {
												serNumArrTitle = JSON.parse(window.localStorage.getItem("Mob35SerialLog"));
											} 
											
											serNumArrTitle.push(serialNo);
											
											var stringifiedMob35 = JSON
													.stringify(serNumArrTitle);
											window.localStorage.setItem("Mob35SerialLog",
													stringifiedMob35);// store the serial
											 
											window.localStorage.setItem(titMat,
													stringifiedMob35);
												// getting scanned records and ther length
												// to check with input valu validations
												var getScannedItemRec = window.localStorage
														.getItem(titMat);
												getScannedItemRec = JSON
														.parse(getScannedItemRec);
												if (sap.ui.getCore().byId("MOB35Qty")
														.getValue() < getScannedItemRec.length) {
													sap.ui.getCore().byId("MOB35Qty")
															.setValue(
																	sap.ui.getCore().byId(
																			"MOB35Qty")
																			.getValue()
																			- (-1));// increment
													// 1
												}
										 
										}
									 
									 /*
									 * Defect 803 - MOB-35: Valuation Type / Batch to default - End
									 */
									
								}
							}

							// Master Array rec
								if(typeof(Mob35SerialLogMasArray) == "undefined" || Mob35SerialLogMasArray === null || Mob35SerialLogMasArray.trim().length == 0 || JSON.parse(Mob35SerialLogMasArray).length == 0)
								{
								
								/*
								* Defect 803 - MOB-35: Valuation Type / Batch to default - Start
								 */
								var batchVal = "";
								 if(g_SelMaterialDetail.BatchManaged == true || g_SelMaterialDetail.Splitvaluated == true) {
									 if(g_SelMaterialDetail.SerialManaged == true) {
										 
										 var serialNo = sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").getValue();
										 
										 var funcSucc = function(data, textStatus, jqXHR) {
									        	var jsonObj = data.d; // Namespace
									        	
									        	//var arrCust = [];
									        	
									        	//return jsonObj.Batch;
									        	
									        	batchVal = jsonObj.Batch;
									        	
									        	sap.ui.getCore().byId("MOB35_batchInput").setValue(batchVal);
									        	sap.ui.getCore().byId("MOB35_batchInput").setEnabled(false);
									        	
									        	
									        	
												var serNumArrTitle = new Array();
												
												if(typeof(window.localStorage.getItem("Mob35SerialLog")) != "undefined" && window.localStorage.getItem("Mob35SerialLog") != null) {
													serNumArrTitle = JSON.parse(window.localStorage.getItem("Mob35SerialLog"));
												} 
												
												serNumArrTitle.push(serialNo);
												
												var stringifiedMob35 = JSON
														.stringify(serNumArrTitle);
												window.localStorage.setItem("Mob35SerialLog",
														stringifiedMob35);// store the serial
												
												closeSplashScreen();
									        	
									         }
										 
										 batchVal = fetchBatchValue(g_SelMaterialDetail.Material, serialNo, funcSucc);
										 
									 }
									}else {
										var serialNo = sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").getValue();
										
										var serNumArrTitle = new Array();
										
										if(typeof(window.localStorage.getItem("Mob35SerialLog")) != "undefined" && window.localStorage.getItem("Mob35SerialLog") != null) {
											serNumArrTitle = JSON.parse(window.localStorage.getItem("Mob35SerialLog"));
										} 
										
										serNumArrTitle.push(serialNo);
										
										var stringifiedMob35 = JSON
												.stringify(serNumArrTitle);
										window.localStorage.setItem("Mob35SerialLog",
												stringifiedMob35);// store the serial
									}
								 
								 /*
								 * Defect 803 - MOB-35: Valuation Type / Batch to default - End
								 */

							} else {
								var notiNumRcvd = new Array();
								notiNumRcvd = JSON
										.parse(Mob35SerialLogMasArray);
								var testMasterVar = 0;
								// /////////////////////////////////////////////////////////////////////////////////////////////
								// Iterate array
								for (var i = 0; i < notiNumRcvd.length; i++) {
									if (notiNumRcvd[i] == titMat) {
										// alert("already available Master");
										sap.ui.getCore().byId("Mob35-popWin")
												.close();
										testMasterVar = 1;
									}
								}

								/*if (testMasterVar == 0) {
									
									// alert("Not ava Master");
										notiNumRcvd.push(titMat);// pushing new
										// noti number
										var notiNumRcvdString = JSON
												.stringify(notiNumRcvd);
										window.localStorage
												.setItem("Mob35SerialLog",
														notiNumRcvdString);
										// sap.ui.getCore().byId("Mob35-popWin").close();
								}*/

							}

							// Local storage auto inc data to database
							window.localStorage.setItem(g_invdocnumMOB35
									+ "SerLogVal", sap.ui.getCore().byId(
									"MOB35Qty").getValue());

							sap.ui.getCore().byId("Mob35-popWin").close();
						}
						// Dont delete
						/*
						 * var scannedValues =
						 * window.localStorage.getItem(sap.ui.getCore().byId("Mob35-frstScreen").getTitle()+"_"+
						 * sap.ui.getCore().byId("Mob35-thrdScr-txtMat").getText() );
						 * scannedValues = JSON.parse(scannedValues); var array =
						 * []; if (scannedValues != null ) {for ( var i = 0 ; i <
						 * scannedValues.length ; i++) {var res =
						 * {"scannerValues" :scannedValues[i],};
						 * array.push(res);}} var mainArr = []; mainArr =
						 * {"results" : array}; var oJSONModelMob35Res = new
						 * sap.ui.model.json.JSONModel();
						 * oJSONModelMob35Res.setData(mainArr);
						 * 
						 * sap.ui.getCore().byId("oResponsivePopoverList").setModel(oJSONModelMob35Res);
						 */
						// sap.ui.getCore().byId("oResponsivePopover").openBy(this);
						/*var OverDelTolranceInt = parseInt(gOverDelTolrance);
						var QtyInt = parseInt(Qty);
						var ipQtyInt = parseInt(sap.ui.getCore().byId(
								"MOB35Qty").getValue());
						if (ipQtyInt > (QtyInt + OverDelTolranceInt)) {
							sap.m.MessageBox.show(
									"Quantity exceeds tolerance value",
									sap.m.MessageBox.Icon.ERROR, "Error");
						}*/
						

					},

					logSerMOB35 : function(oEvent) {

						// alert("kjf");
						var scannedValues = window.localStorage
								.getItem(g_invdocnumMOB35);
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
							"resultsMOB35Ser" : array
						};
						var oJSONModelMob35Res = new sap.ui.model.json.JSONModel();
						oJSONModelMob35Res.setData(mainArr);

						// sap.ui.getCore().byId("oResponsivePopover").close(this);
						// sap.ui.getCore().byId("oResponsivePopover").openBy(this);
						this.popover = sap.ui.getCore().byId(
								"oResponsivePopoverMOB35");
						this.popover.openBy(oEvent.getSource());
						sap.ui.getCore().byId("oResponsivePopoverListMOB35")
								.setModel(oJSONModelMob35Res);

					},
					AddedMat : function(oEvent) {
						debugger;
						var arr = [];

						if (typeof gMOB35AddMatArr == "undefined") {
							return false;
						}

						for (var i = 0; i < gMOB35AddMatArr.length; i++) {
							var obj = {
									"Material" : gMOB35AddMatArr[i].Material.Material,
									"Quantity" : gMOB35AddMatArr[i].Quantity

							};
							arr.push(obj);
						}

						var model = new sap.ui.model.json.JSONModel();
						model.setData(arr);
						sap.ui.getCore().byId("MOB35_AddedMatList").setModel(
								model);

						this.popover = sap.ui.getCore()
								.byId("AddedMaterialPOP");
						this.popover.openBy(oEvent.getSource());
						// sap.ui.getCore().byId("MOB35_AddedMatList").setModel(oJSONModelMob35Res);

					},

					scanMaterial : function(evt) {

						varScan = "MOB35";
						MOB35SCANVAL = "MAT";
						sap.ui.getCore().byId("idMob24MaterialSearchInput")
								.getController().scanNow();

						/*
						 * var scan_results= ScannerOut_M_S_E_B(); //
						 * /////////dummy data///////////////////////////
						 * mainArray=[1,2,3,4]; var errorText= "Not Found";
						 * 
						 * var obj= {"scanMaterials" : [ { "Material" :
						 * mainArray[0], "Serial" : mainArray[1], "E" :
						 * mainArray[2], "Batch" : mainArray[3], "Error" :
						 * errorText
						 * 
						 * }]};
						 * 
						 * 
						 * 
						 * //scan_results= obj;
						 * 
						 * 
						 * /////////dummy data/////////////////////////// var
						 * material= scan_results.scanMaterials[0].Material; var
						 * serial=scan_results.scanMaterials[0].Serial; var
						 * batch=scan_results.scanMaterials[0].Batch; var
						 * errorText= scan_results.scanMaterials[0].Error;
						 * if(evt.mParameters.id=="MOB35_matScan"){
						 * 
						 * sap.ui.getCore().byId("MOB35_matInput").setValue(material); }
						 * else if(evt.mParameters.id=="MOB35_serialScan"){
						 * sap.ui.getCore().byId("MOB35_serialInput").setValue(serial); }
						 * else if(evt.mParameters.id="MOB35_batchScan"){
						 * sap.ui.getCore().byId("MOB35_batchInput").setValue(batch); }
						 * else{ sap.m.MessageBox.show (errorText,
						 * sap.m.MessageBox.Icon.ERROR, "Error" ); }
						 */

					},

					ScanSerialMOB35 : function() {
						varScan = "MOB35";
						MOB35SCANVAL = "SER";
						sap.ui.getCore().byId("idMob24MaterialSearchInput")
								.getController().scanNow();
						// addSerialMOB35

					},
					handleDeleteMOB35 : function(evt) {

						// evt.getSource().removeItem(evt.getParameter("listItem"));destroyItems
						sap.ui.getCore().byId("oResponsivePopoverMOB35").close(
								this);
						evt.getSource().destroyItems();
						// sap.ui.getCore().byId("oResponsivePopoverList").getModel();
						sap.ui.getCore().byId("MOB35Qty")
								.setValue(
										sap.ui.getCore().byId("MOB35Qty")
												.getValue() - (1));// decrement
						// 1

						// remove from local
						var titMat = g_invdocnumMOB35;

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
						
						window.localStorage.setItem("Mob35SerialLog", stringifiedNoti);
						
						if(arrFin.length == 0) {
							sap.ui.getCore().byId("MOB35_batchInput").setValue("");
				        	sap.ui.getCore().byId("MOB35_batchInput").setEnabled(true);
						}

						var noOfScanQty = window.localStorage
								.getItem(g_invdocnumMOB35 + "SerLogVal");
						noOfScanQty = noOfScanQty - 1;

						window.localStorage.setItem(g_invdocnumMOB35
								+ "SerLogVal", noOfScanQty);

					},

					addConMatMOB35 : function() {

						if (null == sap.ui.getCore().byId("MOB35_matInput")
								.getValue()
								|| sap.ui.getCore().byId("MOB35_matInput")
										.getValue() == undefined
								|| sap.ui.getCore().byId("MOB35_matInput")
										.getValue() == "") {

							sap.m.MessageBox.show(
									"Please enter a value for Material Number",
									sap.m.MessageBox.Icon.ERROR, "Error");

						}

						else if (null == sap.ui.getCore().byId("MOB35Qty")
								.getValue()
								|| sap.ui.getCore().byId("MOB35Qty").getValue() == undefined
								|| sap.ui.getCore().byId("MOB35Qty").getValue() == "") {

							sap.m.MessageBox.show(
									"Please enter a value for Quantity",
									sap.m.MessageBox.Icon.ERROR, "Error");
						} else {
							gMOB35AddMatArr.push(sap.ui.getCore().byId(
									"MOB35_matInput").getValue());
							gMOB35AddQtyArr.push(sap.ui.getCore().byId(
									"MOB35Qty").getValue());
							gMOB35AddUOMArr.push(sap.ui.getCore().byId(
									"MOB35UOM").getValue());
							sap.ui.getCore().byId("MOB35_matInput")
									.setValue("");
							sap.ui.getCore().byId("MOB35Qty").setValue("");

						}

					},
					
					

					addMatMOB35 : function() {
						debugger;
						var Mat = g_SelMaterialDetail;
						if (g_MatAddedMOB35 == false) {
							if (null == sap.ui.getCore().byId("MOB35_matInput")
									.getValue()
									|| sap.ui.getCore().byId("MOB35_matInput")
											.getValue() == undefined
									|| sap.ui.getCore().byId("MOB35_matInput")
											.getValue() == "") {

								sap.m.MessageBox
										.show(
												"Please enter a value for Material Number",
												sap.m.MessageBox.Icon.ERROR,
												"Error");

							}

							else if (null == sap.ui.getCore().byId("MOB35Qty")
									.getValue()
									|| sap.ui.getCore().byId("MOB35Qty")
											.getValue() == undefined
									|| sap.ui.getCore().byId("MOB35Qty")
											.getValue() == "") {

								sap.m.MessageBox.show(
										"Please enter a value for Quantity",
										sap.m.MessageBox.Icon.ERROR, "Error");
							}
							
							else if(Mat.BatchManaged == false && Mat.Splitvaluated == true ){
								if(sap.ui.getCore().byId("MOB35_batchInput").getValue() == "")
									{
									sap.m.MessageBox.show(
											"Please enter Valuation Type",
											sap.m.MessageBox.Icon.ERROR, "Error");
									}
									else{
										if (checkSerialBatchMOB35() == true) {
								debugger; //Validation success
								addMaterialMOB35(); //Adding Material
								
								resetMaterialDetailUIMOB35(false);
							} 
						 else {
							sap.ui.getCore().byId("MOB35_matInput")
									.setValue("");
							sap.ui.getCore().byId("MOB35Qty").setValue("");
							sap.ui.getCore().byId("Mob35ConADDMat").setVisible(
									true);
							sap.ui.getCore().byId("Mob35ADDMat").setVisible(
									false);

						}

									}
					
							}
							else if (checkSerialBatchMOB35() == true) { //Validation success
								addMaterialMOB35(); //Adding Material
								
								resetMaterialDetailUIMOB35(false);
							} 
						 else {
							sap.ui.getCore().byId("MOB35_matInput")
									.setValue("");
							sap.ui.getCore().byId("MOB35Qty").setValue("");
							sap.ui.getCore().byId("Mob35ConADDMat").setVisible(
									true);
							sap.ui.getCore().byId("Mob35ADDMat").setVisible(
									false);

						}

					}
					},

				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf view.MOB35_BinMaterialCount
				 */
				 onAfterRendering: function() {
					 clearSpecialStockMOB35();
					 sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
						sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
						sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
						sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
				 }
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf view.MOB35_BinMaterialCount
				 */
				// onExit: function() {
				//
				// }
				});

function addMaterialMOB35() {
	var Mob28SerialLogLocalStorage = window.localStorage
				.getItem(g_invdocnumMOB35);
	var serNumRcvd = new Array();
	
	if(Mob28SerialLogLocalStorage != "") {
		serNumRcvd = JSON.parse(Mob28SerialLogLocalStorage);
	}
	
	var formattedSerNum = "";
	
	for(var i=0; i<serNumRcvd.length; i++) {
		if(serNumRcvd.length==1 || i==serNumRcvd.length-1) {
			formattedSerNum = formattedSerNum + serNumRcvd[i];
		}else {
			formattedSerNum = formattedSerNum + serNumRcvd[i] + "_";
		}
	}
	
	/*
	 *Stock Type - Start 
	 */
	var stockType = null;
	if(sap.ui.getCore().byId("idradio-ST0-Mob35").getSelected()) {
		stockType = "";
	}else if(sap.ui.getCore().byId("idradio-ST1-Mob35").getSelected()) {
		stockType = "Q";
	}else if(sap.ui.getCore().byId("idradio-ST2-Mob35").getSelected()) {
		stockType = "S";
	}
	
	/*
	 *Stock Type - End 
	 */
	
	/*
	 * Special Stock - Start 
	 */
	var specialStock = null;
	var specialStockValue = null;
	if(sap.ui.getCore().byId("idradio-SS0-Mob35").getSelected()) {
		specialStock = "";
		specialStockValue = "";
	}else if(sap.ui.getCore().byId("idradio-SS1-Mob35").getSelected()) {
		specialStock = "Q";
		specialStockValue = $("#selectCustProj35-label").html();
	}else if(sap.ui.getCore().byId("idradio-SS2-Mob35").getSelected()) {
		specialStock = "B";
		specialStockValue = $("#selectCustProj35-label").html();
	}
	
	/*
	 * Special Stock - End 
	 */
	
	/*
	 * Special Stock Value - End 
	 */
	var qty = sap.ui.getCore().byId("MOB35Qty").getValue();
	if(typeof gMOB35AddMatArr == "undefined" || gMOB35AddMatArr.length == 0) {
		var obj = [{"Material" : g_SelMaterialDetail, "Quantity" : qty,"SerialArr" : formattedSerNum, "BatchNo" : sap.ui.getCore().byId("MOB35_batchInput").getValue(), "StockCategory": stockType, "SplStock": specialStock, "SplStockNo" : specialStockValue}];
		gMOB35AddMatArr = obj;
	} else if(gMOB35AddMatArr.length > 0) {
		var obj = {"Material" : g_SelMaterialDetail, "Quantity" : qty, "SerialArr" : formattedSerNum, "BatchNo" : sap.ui.getCore().byId("MOB35_batchInput").getValue(), "StockCategory": stockType, "SplStock": specialStock, "SplStockNo" : specialStockValue};
		gMOB35AddMatArr.push(obj);
	}
	
	if (typeof gMOB35AddMatArr != "undefined" && gMOB35AddMatArr.length > 0) {
		sap.ui.getCore().byId("Mob35ShowMatAdded").setVisible(true);
	}
}

function checkSerialBatchMOB35() {

	if (g_SelMaterialDetail.SerialManaged == true) {
		var Mob28SerialLogLocalStorage = window.localStorage
				.getItem(g_invdocnumMOB35);
		// var qty = results[index].qty;
		var qty = parseInt(sap.ui.getCore().byId("MOB35Qty").getValue());
		if (Mob28SerialLogLocalStorage === undefined
				|| Mob28SerialLogLocalStorage === null
				|| Mob28SerialLogLocalStorage.length === 0) {

			if (qty > 0) {
				sap.m.MessageBox
						.show(
								"Mismatch between quantity field and number of scanned values",
								sap.m.MessageBox.Icon.ERROR, "Error");
				return false;
			}
		}

		else {

			var serNumRcvd = new Array();
			serNumRcvd = JSON.parse(Mob28SerialLogLocalStorage);
			if (qty != serNumRcvd.length) {
				sap.m.MessageBox
						.show(
								"Mismatch between quantity field and number of scanned values",
								sap.m.MessageBox.Icon.ERROR, "Error");
				return false;
			}
		}

		return true;
	}

	else {

		return true;
	}

}



/*
 * This method is invoked when Project Radio Option is selected from Master Page.
 * This method calling WBSElementList Search Help to fetch list of Project Special Stock available.
 */
function callProjSearchHelpMOB35() {
	openSplashScreen();//splash screen
	
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch"); 
	
	demo.setState(true);
	
	if (demo.getState() == true) {
		jsonCustProj = {"MOB35CustProj":
		[
			 {"key":"2", "detail":"Proj 1111"},
			 {"key":"1", "detail":"Proj 2222"},
			 {"key":"3", "detail":"Proj 3333"}
			 ]};
	} else {
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB35:: Service: WBSElementList Start" ;

		var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/WBSElementList");
		if(url1 == "Fail")
		 {
		 return false;
		 }
		
		 var oModel = new sap.ui.model.json.JSONModel();
		 
		 var aData = jQuery.ajax({   
		     url : url1,
		     
		     type: "GET",

	         //jsonpCallback : 'getJSON',

	         contentType : "application/json",

	         dataType : 'json',
	         
	         //data : "",

	         success : function(data, textStatus, jqXHR) {
	        	var jsonObj = data.d.results; // Namespace
	        	
	        	var arrWBS = [];
       	 	
       	 	for(var i=0;i<jsonObj.length;i++) {
       	 		var WBSNo = jsonObj[i].WBSElementNo;
       	 		var WBSName = jsonObj[i].WBSElementDesc;
       	 		var objWBS = {"key": WBSNo, "detail": WBSName};
       	 		arrWBS.push(objWBS);
       	 	}
	        	
	        	var jsonCustProj = {"MOB35CustProj": arrWBS};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj35");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	     		
	        	
	        	
	        	
	        	
	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB35:: Service: WBSElementList Finish" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
	        	
	        	
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	        	 closeSplashScreen();
	         }
		 });
	}
	
	/*Setting Value for Proj/Cust - Start */
	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	var selectCustProj = sap.ui.getCore().byId("selectCustProj35");
	
	selectCustProj.setModel(oJSONCust);
	/*Setting Value for Proj/Cust - End */
	
	closeSplashScreen();
}

/*
 * This method is invoked when Customer Radio Option is selected from Master Page.
 * This method calling CustomerList Search Help to fetch list of Customer Special Stock available.
 */
function callCustomerSearchHelpMOB35() {
	openSplashScreen();//splash screen
	
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch"); 
	
	demo.setState(true);
	
	if (demo.getState() == true) {
		jsonCustProj = {"MOB35CustProj":
		[
			 {"key":"2", "detail":"Customer 1111"},
			 {"key":"1", "detail":"Customer 2222"},
			 {"key":"3", "detail":"Customer 3333"}
			 ]};
		/*Setting Value for Proj/Cust - Start */
		var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
		var selectCustProj = sap.ui.getCore().byId("selectCustProj35");
		
		selectCustProj.setModel(oJSONCust);
		/*Setting Value for Proj/Cust - End */
		
		closeSplashScreen();
	} else {
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB35:: Service: CustomerList Start" ;

		
		
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/CustomerList");
		if(url1 == "Fail")
		 {
		 return false;
		 }
		
		 var oModel = new sap.ui.model.json.JSONModel();
		 
		 var aData = jQuery.ajax({   
		     url : url1,
		     
		     type: "GET",

	         //jsonpCallback : 'getJSON',

	         contentType : "application/json",

	         dataType : 'json',
	         
	         //data : "",

	         success : function(data, textStatus, jqXHR) {
	        	var jsonObj = data.d.results; // Namespace
	        	
	        	var arrCust = [];
        	 	
        	 	for(var i=0;i<jsonObj.length;i++) {
        	 		var custNo = jsonObj[i].CustomerNo;
        	 		var custName = jsonObj[i].CustomerName;
        	 		var objCust = {"key": custNo, "detail": custName};
        	 		arrCust.push(objCust);
        	 	}
	        	
	        	var jsonCustProj = {"MOB35CustProj":arrCust};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj35");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	        	
	        	
	        	
	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB35:: Service: CustomerList Finish" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
	     		
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	        	 closeSplashScreen();
	         }
		 });
	}
}


/*
 * This method is invoked when None Radio Option is selected for Special Stock from Master Page.
 * This will clear the oData Model binded to the special stock drop down.
 */
function clearSpecialStockMOB35() {
	var jsonCustProj = null;
		
	/*Setting Value for Proj/Cust - Start */
	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	var selectCustProj = sap.ui.getCore().byId("selectCustProj35");
	
	selectCustProj.setModel(oJSONCust);
	/*Setting Value for Proj/Cust - End */
	
	sap.ui.getCore().byId("selectCustProj35").setVisible(false);
}


function fetchBatchValue(materialNo, serialNo, funcSucc) {
	openSplashScreen();//splash screen
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/BatchValidationSet(MaterialNo='"+materialNo+"',SerialNo='"+serialNo+"')");
	if(url1 == "Fail")
	 {
	 return false;
	 }
	
	 var oModel = new sap.ui.model.json.JSONModel();
	 
	 var aData = jQuery.ajax({   
	     url : url1,
	     
	     type: "GET",

         //jsonpCallback : 'getJSON',

         contentType : "application/json",

         dataType : 'json',
         
         //data : "",

         success : funcSucc,
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	// var a = textStatus;
        	 sap.m.MessageBox.show(
						"Failed to fetch Batch Number for the Serial No: " + serialNo
								+ " " + " " + " ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
        	 closeSplashScreen();
        	 
         }
	 });
        	
	
}
	 