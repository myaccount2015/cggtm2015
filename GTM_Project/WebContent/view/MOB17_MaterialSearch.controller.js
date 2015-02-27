sap.ui
		.controller(
				"com.cg.gtm.view.MOB17_MaterialSearch",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf view.MOB17_MaterialSearch
					 */
					// onInit: function() {
					//
					// },
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf view.MOB17_MaterialSearch
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
					 * @memberOf view.MOB17_MaterialSearch
					 */
					// onAfterRendering: function() {
					//
					// },
					addMaterialScan : function() {

						/*
						 * var jsonScanResult = ScannerOut_M_S_E_B();//
						 * .scanMaterials[0];
						 * 
						 * jsonScanResult.done(function(results){ //All post
						 * operation of Scan has to be written inside done
						 * method. debugger; var scanResult =
						 * results.scanMaterials[0];
						 * 
						 * var selMatNo = scanResult.Material;
						 * 
						 * openSplashScreen();// Open splash screen
						 * 
						 * var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
						 * lblQtyIcon.setSrc("");
						 * 
						 * //Adding the material to the list var tabMaterialLst =
						 * sap.ui.getCore().byId("tabMaterialLst"); var oModel =
						 * tabMaterialLst.getModel();
						 * 
						 * //var inputMatNo =
						 * sap.ui.getCore().byId("inputMatNo");
						 * 
						 * var matNo = selMatNo; //Passing Selected Material No
						 * 
						 * var demo =
						 * sap.ui.getCore().getElementById("demoswitch").getState();
						 * if ( demo) { if(matNo.trim().length==0) { return; }
						 * 
						 * if(oModel==undefined) { var aData1 = [ {"Material":
						 * matNo, "Description": "Insulated Torque Wrench
						 * 5-50Nm", "Uom": "EA", "Quantity": "", "Customer":
						 * "500057(IPEX CONSULTING LTD)", "BatchManaged": true,
						 * "SerialManaged": true, "Splitvaluated": true,
						 * "SerialLst": []} ]; oModel = new
						 * sap.ui.model.json.JSONModel();
						 * 
						 * oModel.setData({modelData: aData1});
						 * tabMaterialLst.setModel(oModel); }else { var
						 * arrMatLst = oModel.oData.modelData; var objMaterial =
						 * {"Material": matNo, "Description": "Insulated Torque
						 * Wrench 5-50Nm", "Uom": "EA", "Quantity": "",
						 * "Customer": "500057(IPEX CONSULTING LTD)",
						 * "BatchManaged": true, "SerialManaged": true,
						 * "Splitvaluated": true, "SerialLst": []};
						 * 
						 * var isExisting = isMaterialExisting1(oModel,
						 * matNo);//Check material already added
						 * 
						 * if(isExisting==true) {
						 * 
						 * closeSplashScreen();
						 * 
						 * var errMsg = "Material No: " + matNo + " Already
						 * Added"; sap.m.MessageBox.show( errMsg,
						 * sap.m.MessageBox.Icon.ERROR,"Error"); }else {
						 * 
						 * arrMatLst.push(objMaterial); var oModel2 = new
						 * sap.ui.model.json.JSONModel();
						 * oModel2.setData({modelData: arrMatLst});
						 * tabMaterialLst.setModel(oModel2); } }
						 * 
						 * sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
						 * sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
						 * 
						 * 
						 * Navigating to detail page - Start
						 * 
						 * if ( g_runningOnPhone == true) { var myApp =
						 * sap.ui.getCore().byId("myApp");
						 * myApp.to("idMaterialList"); }else { var splitAppMOB17 =
						 * sap.ui.getCore().byId("splitAppMOB17");
						 * splitAppMOB17.toDetail("idMaterialFullDetPage"); }
						 * 
						 * Navigating to detail page - End
						 * 
						 * 
						 * closeSplashScreen();
						 * 
						 * return; }
						 * 
						 * 
						 * var JSONMaterial = null;
						 * 
						 * 
						 * 
						 * var errMsg = "Material No: " + matNo + " Not
						 * Existing";
						 * 
						 * 
						 * Validation - Start
						 * 
						 * if(matNo.trim().length==0) {//Check for material
						 * entered by user errMsg = "Please enter value for
						 * Material Number"; }else { var isExisting =
						 * isMaterialExisting1(oModel, matNo);//Check material
						 * already added if(isExisting==true) { errMsg =
						 * "Material No: " + matNo + " Already Added"; }else {
						 * JSONMaterial = searchMaterialNo(matNo); //Calling
						 * com.cg.gtm.view.MaterialSearchDetail
						 * if(JSONMaterial.results.length > 1) { var multiEntry =
						 * isMultiMaterialExist(JSONMaterial, matNo);
						 * if(multiEntry == true) { errMsg = "This Material No: " +
						 * matNo + " is having multiple records to
						 * select.\nPlease choose from Material Search Option."; } } } }
						 * 
						 * if(JSONMaterial == null ||
						 * JSONMaterial.results.length != 1) {
						 * 
						 * closeSplashScreen();
						 * 
						 * sap.m.MessageBox.show( errMsg,
						 * sap.m.MessageBox.Icon.ERROR,"Error"); }
						 * 
						 * Validation - End
						 * 
						 * else {
						 * 
						 * var materialResult = JSONMaterial.results[0];
						 * 
						 * 
						 * if(oModel==undefined) {
						 * if(materialResult.VendorName.length>0) {
						 * sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor +
						 * "(" + materialResult.VendorName + ")"); }
						 * 
						 * sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
						 * 
						 * sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
						 * sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
						 * 
						 * var isSerial = true; var isBatch = true; var
						 * isSplitValuated = true;
						 * 
						 * 
						 * 
						 * if((materialResult.Batchmanaged=="No") &&
						 * (materialResult.Serialized=="No")) {
						 * sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
						 * }else {
						 * sap.ui.getCore().byId("btnScanMaterial").setVisible(true); }
						 * 
						 * if(materialResult.Batchmanaged=="No") { isBatch =
						 * false; }else {
						 * sap.ui.getCore().byId("lblBatch").setText("Batch"); }
						 * 
						 * if(materialResult.Batchmanaged=="Yes" ||
						 * materialResult.Splitvaluated=="Yes") { isBatch =
						 * true;
						 * sap.ui.getCore().byId("lblBatch").setVisible(true);
						 * sap.ui.getCore().byId("inputBatch").setVisible(true);
						 * }else { isBatch = false;
						 * sap.ui.getCore().byId("lblBatch").setVisible(false);
						 * sap.ui.getCore().byId("inputBatch").setVisible(false); }
						 * 
						 * if(materialResult.Splitvaluated=="No") {
						 * isSplitValuated = false; }else {
						 * sap.ui.getCore().byId("lblBatch").setText("Valuation
						 * Type"); }
						 * 
						 * 
						 * 
						 * 
						 * if(materialResult.Serialized=="No") { isSerial =
						 * false;
						 * sap.ui.getCore().byId("imgShowSerials").setVisible(false);
						 * sap.ui.getCore().byId("inputSerial").setVisible(false);
						 * sap.ui.getCore().byId("lblSerial").setVisible(false);
						 * }else {
						 * sap.ui.getCore().byId("imgShowSerials").setVisible(true);
						 * sap.ui.getCore().byId("inputSerial").setVisible(true);
						 * sap.ui.getCore().byId("lblSerial").setVisible(true); }
						 * 
						 * sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
						 * sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
						 * 
						 * sap.ui.getCore().byId("lblErr").setVisible(false);
						 * sap.ui.getCore().byId("lblErrVal").setVisible(false);
						 * 
						 * var aData1 = [ {"Material":
						 * materialResult.Materialno, "Description":
						 * materialResult.Description, "Uom":
						 * materialResult.Uom, "Quantity": "", "Customer":
						 * materialResult.Vendor + "(" +
						 * materialResult.VendorName + ")", "BatchManaged":
						 * isBatch, "SerialManaged": isSerial, "Splitvaluated":
						 * isSplitValuated, "MaterialLst": []} ]; oModel = new
						 * sap.ui.model.json.JSONModel();
						 * 
						 * oModel.setData({modelData: aData1});
						 * tabMaterialLst.setModel(oModel); } else {
						 * if(materialResult.VendorName.length>0) {
						 * sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor +
						 * "(" + materialResult.VendorName + ")"); }
						 * 
						 * sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
						 * 
						 * sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
						 * sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
						 * 
						 * var isSerial = true; var isBatch = true; var
						 * isSplitValuated = true;
						 * 
						 * 
						 * if((materialResult.Batchmanaged=="No") &&
						 * (materialResult.Serialized=="No")) {
						 * sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
						 * }else {
						 * sap.ui.getCore().byId("btnScanMaterial").setVisible(true); }
						 * 
						 * if(materialResult.Batchmanaged=="No") { isBatch =
						 * false; }else {
						 * sap.ui.getCore().byId("lblBatch").setText("Batch"); }
						 * 
						 * if(materialResult.Batchmanaged=="Yes" ||
						 * materialResult.Splitvaluated=="Yes") { isBatch =
						 * true;
						 * sap.ui.getCore().byId("lblBatch").setVisible(true);
						 * sap.ui.getCore().byId("inputBatch").setVisible(true);
						 * }else { isBatch = false;
						 * sap.ui.getCore().byId("lblBatch").setVisible(false);
						 * sap.ui.getCore().byId("inputBatch").setVisible(false); }
						 * 
						 * if(materialResult.Splitvaluated=="No") {
						 * isSplitValuated = false; }else {
						 * sap.ui.getCore().byId("lblBatch").setText("Valuation
						 * Type"); }
						 * 
						 * 
						 * 
						 * 
						 * if(materialResult.Serialized=="No") { isSerial =
						 * false;
						 * sap.ui.getCore().byId("imgShowSerials").setVisible(false);
						 * sap.ui.getCore().byId("inputSerial").setVisible(false);
						 * sap.ui.getCore().byId("lblSerial").setVisible(false);
						 * sap.ui.getCore().byId("inputQty").setValue(""); }else {
						 * sap.ui.getCore().byId("imgShowSerials").setVisible(true);
						 * sap.ui.getCore().byId("inputSerial").setVisible(true);
						 * sap.ui.getCore().byId("lblSerial").setVisible(true); }
						 * 
						 * 
						 * 
						 * sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
						 * sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
						 * 
						 * sap.ui.getCore().byId("lblErr").setVisible(false);
						 * sap.ui.getCore().byId("lblErrVal").setVisible(false);
						 * 
						 * //sap.ui.getCore().byId("inputQty").setValue("-");
						 * 
						 * var arrMatLst = oModel.oData.modelData; var
						 * objMaterial = {"Material": materialResult.Materialno,
						 * "Description": materialResult.Description, "Uom":
						 * materialResult.Uom, "Quantity": "", "Customer":
						 * materialResult.Vendor + "(" +
						 * materialResult.VendorName + ")", "BatchManaged":
						 * isBatch, "SerialManaged": isSerial, "Splitvaluated":
						 * isSplitValuated, "MaterialLst": []};
						 * arrMatLst.push(objMaterial);
						 * 
						 * var oModel2 = new sap.ui.model.json.JSONModel();
						 * 
						 * oModel2.setData({modelData: arrMatLst});
						 * tabMaterialLst.setModel(oModel2); }
						 * 
						 * 
						 * Navigating to detail page - Start
						 * 
						 * if ( g_runningOnPhone == true) { var myApp =
						 * sap.ui.getCore().byId("myApp");
						 * myApp.to("idMaterialList"); }else { var splitAppMOB17 =
						 * sap.ui.getCore().byId("splitAppMOB17");
						 * splitAppMOB17.toDetail("idMaterialFullDetPage"); }
						 * 
						 * Navigating to detail page - End
						 *  }
						 * 
						 * validateMaterialList1(); //Validate and set the
						 * status for Material List
						 * 
						 * 
						 * Clear Serial List - Start
						 * 
						 * var tabSerialLst =
						 * sap.ui.getCore().byId("tblSerial"); var oModel =
						 * tabSerialLst.getModel(); var aData1 = [];
						 * 
						 * oModel = new sap.ui.model.json.JSONModel();
						 * 
						 * oModel.setData({modelData: aData1});
						 * tabSerialLst.setModel(oModel);
						 * 
						 * 
						 * Clear Serial List - End
						 * 
						 * 
						 * sap.ui.getCore().byId("inputBatch").setValue("");
						 * //Clear Batch Field
						 * 
						 * 
						 * //setSelectedIndexForMatTable(); closeSplashScreen();
						 * 
						 * 
						 * });
						 */

						varScan = "Mob17Matmaster";
						Mob17scan = "Material";
						sap.ui.getCore().byId("idMob24MaterialSearchInput")
								.getController().scanNow();

					},

					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf view.MOB17_MaterialSearch
					 */
					// onExit: function() {
					//
					// }
					/*
					 * This method is called to add material to the List.
					 * Material details are binded to the table model. By
					 * default edit icon is set for the material item.
					 */
					addMaterial : function(oEvent) {

						openSplashScreen();// Open splash screen

						/*
						 * var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
						 * lblQtyIcon.setSrc("");
						 */

						// Adding the material to the list
						var tabMaterialLst = sap.ui.getCore().byId(
								"tabMaterialLst");
						var oModel = tabMaterialLst.getModel();

						var inputMatNo = sap.ui.getCore().byId("inputMatNo");

						var matNo = inputMatNo.mProperties.value;

						var demo = sap.ui.getCore()
								.getElementById("demoswitch").getState();
						if (demo) {
							if (matNo.trim().length == 0) {
								return;
							}

							if (oModel == undefined) {
								var aData1 = [ {
									"Material" : matNo,
									"Description" : "Insulated Torque Wrench 5-50Nm",
									"Uom" : "EA",
									"Quantity" : "",
									"Customer" : "500057(IPEX CONSULTING LTD)",
									"BatchManaged" : true,
									"SerialManaged" : true,
									"Splitvaluated" : true,
									"SerialLst" : []
								} ];
								oModel = new sap.ui.model.json.JSONModel();

								oModel.setData({
									modelData : aData1
								});
								tabMaterialLst.setModel(oModel);
							} else {
								var arrMatLst = oModel.oData.modelData;
								var objMaterial = {
									"Material" : matNo,
									"Description" : "Insulated Torque Wrench 5-50Nm",
									"Uom" : "EA",
									"Quantity" : "",
									"Customer" : "500057(IPEX CONSULTING LTD)",
									"BatchManaged" : true,
									"SerialManaged" : true,
									"Splitvaluated" : true,
									"SerialLst" : []
								};

								var isExisting = isMaterialExisting1(oModel,
										matNo);// Check material already added

								if (isExisting == true) {

									closeSplashScreen();

									var errMsg = "Material No: " + matNo
											+ " Already Added";
									var lblConfirm = new sap.m.Label({
										text : errMsg
									});

									var leftButton_b = new sap.m.Button({
										text : "No",
										press : function() {
											dialogWindow.close();
										}
									});
									var RightButton_b = new sap.m.Button({
										text : "OK",
										press : function() {
											// addMaterialInvoker();
											dialogWindow.close();
										}
									});

									var dialogWindow = new sap.m.Dialog({
										title : "Warning",
										icon : "sap-icon://warning2",
										resizable : true,
										// leftButton : leftButton_b,
										rightButton : RightButton_b,
										content : lblConfirm,
										width : "90%"
									});

									dialogWindow.open();
								} else {

									arrMatLst.push(objMaterial);
									var oModel2 = new sap.ui.model.json.JSONModel();
									oModel2.setData({
										modelData : arrMatLst
									});
									tabMaterialLst.setModel(oModel2);
								}
							}

							sap.ui.getCore().byId("lblMatDocNo").setVisible(
									false);
							sap.ui.getCore().byId("lblMatDocVal").setVisible(
									false);

							/*
							 * Navigating to detail page - Start
							 */
							if (g_runningOnPhone == true) {
								g_MobileNavigationId = "Mob17_Matlist";
								var myApp = sap.ui.getCore().byId("myApp");
								myApp.to("idMaterialList");
							} else {
								var splitAppMOB17 = sap.ui.getCore().byId(
										"splitAppMOB17");
								splitAppMOB17.toDetail("idMaterialFullDetPage");
							}
							/*
							 * Navigating to detail page - End
							 */

							closeSplashScreen();

							return;
						}

						var JSONMaterial = null;

						var errMsg = "Material No: " + matNo + " Not Existing";

						/*
						 * Validation - Start
						 */
						if (matNo.trim().length == 0) {// Check for material
														// entered by user
							errMsg = "Please enter value for Material Number";
						} else {
							var isExisting = isMaterialExisting1(oModel, matNo);// Check
																				// material
																				// already
																				// added
							if (isExisting == true) {
								errMsg = "Material No: " + matNo
										+ " Already Added";
							} else {
								JSONMaterial = searchMaterialNo(matNo); // Calling
																		// com.cg.gtm.view.MaterialSearchDetailPage
								if (JSONMaterial.results.length > 1) {
									var multiEntry = isMultiMaterialExist(
											JSONMaterial, matNo);
									if (multiEntry == true) {
										errMsg = "This Material No: "
												+ matNo
												+ " is having multiple records to select.\nPlease choose from Material Search Option.";
									}
								}
							}
						}

						if (JSONMaterial == null
								|| JSONMaterial.results.length != 1) {

							closeSplashScreen();

							sap.m.MessageBox.show(errMsg,
									sap.m.MessageBox.Icon.ERROR, "Error");
						}
						/*
						 * Validation - End
						 */
						else {

							var materialResult = JSONMaterial.results[0];

							if (oModel == undefined) {
								if (materialResult.VendorName.length > 0) {
									sap.ui
											.getCore()
											.byId("lblCustVal")
											.setText(
													materialResult.Vendor
															+ "("
															+ materialResult.VendorName
															+ ")");
								}
								sap.ui.getCore().byId("lblUOMVal").setText(
										materialResult.Uom);

								sap.ui.getCore().byId("lblMatNoVal").setText(
										materialResult.Materialno);
								sap.ui.getCore().byId("lblMatDescVal").setText(
										materialResult.Description);

								var isSerial = true;
								var isBatch = true;
								var isSplitValuated = true;

								if ((materialResult.Batchmanaged == "No")
										&& (materialResult.Serialized == "No")) {
									sap.ui.getCore().byId("btnScanMaterial")
											.setVisible(false);
								} else {
									sap.ui.getCore().byId("btnScanMaterial")
											.setVisible(true);
								}

								if (materialResult.Batchmanaged == "No") {
									isBatch = false;
								} else {
									sap.ui.getCore().byId("lblBatch").setText(
											"Batch");
								}

								if (materialResult.Batchmanaged == "Yes"
										|| materialResult.Splitvaluated == "Yes") {
									isBatch = true;
									sap.ui.getCore().byId("lblBatch")
											.setVisible(true);
									sap.ui.getCore().byId("inputBatch")
											.setVisible(true);
								} else {
									isBatch = false;
									sap.ui.getCore().byId("lblBatch")
											.setVisible(false);
									sap.ui.getCore().byId("inputBatch")
											.setVisible(false);
								}

								if (materialResult.Splitvaluated == "No") {
									isSplitValuated = false;
								} else {
									sap.ui.getCore().byId("lblBatch").setText(
											"Valuation Type");
								}

								var quantity = "";

								if (materialResult.Serialized == "No") {
									isSerial = false;
									sap.ui.getCore().byId("imgShowSerials")
											.setVisible(false);
									sap.ui.getCore().byId("inputSerial")
											.setVisible(false);
									sap.ui.getCore().byId("lblSerial")
											.setVisible(false);
								} else {
									isSerial = true;
									sap.ui.getCore().byId("imgShowSerials")
											.setVisible(true);
									sap.ui.getCore().byId("inputSerial")
											.setVisible(true);
									sap.ui.getCore().byId("lblSerial")
											.setVisible(true);
									sap.ui.getCore().byId("inputQty").setValue(
											"1");
									quantity = "1";
								}

								sap.ui.getCore().byId("lblMatDocNo")
										.setVisible(false);
								sap.ui.getCore().byId("lblMatDocVal")
										.setVisible(false);

								sap.ui.getCore().byId("lblErr").setVisible(
										false);
								sap.ui.getCore().byId("lblErrVal").setVisible(
										false);

								var aData1 = [ {
									"Material" : materialResult.Materialno,
									"Description" : materialResult.Description,
									"Uom" : materialResult.Uom,
									"Quantity" : quantity,
									"Customer" : materialResult.Vendor + "("
											+ materialResult.VendorName + ")",
									"BatchManaged" : isBatch,
									"SerialManaged" : isSerial,
									"Splitvaluated" : isSplitValuated,
									"MaterialLst" : []
								} ];
								oModel = new sap.ui.model.json.JSONModel();

								oModel.setData({
									modelData : aData1
								});
								tabMaterialLst.setModel(oModel);
							} else {
								if (materialResult.VendorName.length > 0) {
									sap.ui
											.getCore()
											.byId("lblCustVal")
											.setText(
													materialResult.Vendor
															+ "("
															+ materialResult.VendorName
															+ ")");
								}
								sap.ui.getCore().byId("lblUOMVal").setText(
										materialResult.Uom);

								sap.ui.getCore().byId("lblMatNoVal").setText(
										materialResult.Materialno);
								sap.ui.getCore().byId("lblMatDescVal").setText(
										materialResult.Description);

								var isSerial = true;
								var isBatch = true;
								var isSplitValuated = true;

								if ((materialResult.Batchmanaged == "No")
										&& (materialResult.Serialized == "No")) {
									sap.ui.getCore().byId("btnScanMaterial")
											.setVisible(false);
								} else {
									sap.ui.getCore().byId("btnScanMaterial")
											.setVisible(true);
								}

								if (materialResult.Batchmanaged == "No") {
									isBatch = false;
								} else {
									sap.ui.getCore().byId("lblBatch").setText(
											"Batch");
								}

								if (materialResult.Batchmanaged == "Yes"
										|| materialResult.Splitvaluated == "Yes") {
									isBatch = true;
									sap.ui.getCore().byId("lblBatch")
											.setVisible(true);
									sap.ui.getCore().byId("inputBatch")
											.setVisible(true);
								} else {
									isBatch = false;
									sap.ui.getCore().byId("lblBatch")
											.setVisible(false);
									sap.ui.getCore().byId("inputBatch")
											.setVisible(false);
								}

								if (materialResult.Splitvaluated == "No") {
									isSplitValuated = false;
								} else {
									sap.ui.getCore().byId("lblBatch").setText(
											"Valuation Type");
								}

								var quantity = "";

								if (materialResult.Serialized == "No") {
									isSerial = false;
									sap.ui.getCore().byId("imgShowSerials")
											.setVisible(false);
									sap.ui.getCore().byId("inputSerial")
											.setVisible(false);
									sap.ui.getCore().byId("lblSerial")
											.setVisible(false);
									sap.ui.getCore().byId("inputQty").setValue(
											"");
								} else {
									sap.ui.getCore().byId("imgShowSerials")
											.setVisible(true);
									sap.ui.getCore().byId("inputSerial")
											.setVisible(true);
									sap.ui.getCore().byId("lblSerial")
											.setVisible(true);
									sap.ui.getCore().byId("inputQty").setValue(
											"1");
									quantity = "1";
								}

								sap.ui.getCore().byId("lblMatDocNo")
										.setVisible(false);
								sap.ui.getCore().byId("lblMatDocVal")
										.setVisible(false);

								sap.ui.getCore().byId("lblErr").setVisible(
										false);
								sap.ui.getCore().byId("lblErrVal").setVisible(
										false);

								// sap.ui.getCore().byId("inputQty").setValue("-");

								var arrMatLst = oModel.oData.modelData;
								var objMaterial = {
									"Material" : materialResult.Materialno,
									"Description" : materialResult.Description,
									"Uom" : materialResult.Uom,
									"Quantity" : quantity,
									"Customer" : materialResult.Vendor + "("
											+ materialResult.VendorName + ")",
									"BatchManaged" : isBatch,
									"SerialManaged" : isSerial,
									"Splitvaluated" : isSplitValuated,
									"MaterialLst" : []
								};
								arrMatLst.push(objMaterial);

								var oModel2 = new sap.ui.model.json.JSONModel();

								oModel2.setData({
									modelData : arrMatLst
								});
								tabMaterialLst.setModel(oModel2);
							}

							/*
							 * Navigating to detail page - Start
							 */
							if (g_runningOnPhone == true) {
								var myApp = sap.ui.getCore().byId("myApp");
								myApp.to("idMaterialList");
							} else {
								var splitAppMOB17 = sap.ui.getCore().byId(
										"splitAppMOB17");
								splitAppMOB17.toDetail("idMaterialFullDetPage");
							}
							/*
							 * Navigating to detail page - End
							 */
						}

						validateMaterialList1(); // Validate and set the
													// status for Material List

						/*
						 * Clear Serial List - Start
						 */
						var tabSerialLst = sap.ui.getCore().byId("tblSerial");
						var oModel = tabSerialLst.getModel();
						var aData1 = [];

						oModel = new sap.ui.model.json.JSONModel();

						oModel.setData({
							modelData : aData1
						});
						tabSerialLst.setModel(oModel);

						/*
						 * Clear Serial List - End
						 */

						sap.ui.getCore().byId("inputBatch").setValue(""); // Clear
																			// Batch
																			// Field

						// setSelectedIndexForMatTable();
						closeSplashScreen();

					}

				});

/*
 * This method is responsible for setting selected for last item
 */
function setSelectedIndexForMatTable() {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var oModel = tabMaterialLst.getModel();
	var index = 0;
	if (typeof oModel != 'undefined') {
		index = oModel.oData.modelData.length;
	}
	var matList = sap.ui.getCore().byId(
			"materialListItem-tabMaterialLst-" + (index - 1));
	tabMaterialLst.setSelectedItem(matList, true);
}

/*
 * This method is responsible of getting the Table model data and check it is
 * already existing and return true.
 */
function isMaterialExisting1(tableModel, matNo, serial) {
	var isExisting = false;
	var tabModelData = null;
	if (typeof tableModel != 'undefined') {
		tabModelData = tableModel.oData.modelData;

		for (var i = 0; i < tabModelData.length; i++) {
			if (tabModelData[i].Material.trim() == matNo.trim()) {
				isExisting = true;
			}
		}
		return isExisting;
	}
}

/*
 * This method check whether multiple material exists.
 */
function isMultiMaterialExist(JSONMat, matNo) {
	var isExisting = true;
	if (typeof JSONMat != 'undefined') {
		var JSONMatResults = JSONMat.results;
		for (var i = 0; i < JSONMatResults.length; i++) {
			if (JSONMatResults[i].Materialno.trim() != matNo.trim()) {
				isExisting = false;
				break;
			}
		}
	}
	return isExisting;
}