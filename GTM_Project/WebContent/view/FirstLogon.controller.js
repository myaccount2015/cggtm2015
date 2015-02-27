sap.ui
		.controller(
				"com.cg.gtm.view.FirstLogon",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf com.cg.gtm.view.com.cg.gtm.view.FirstLogon
					 */
					onInit : function() {
						/*
						 * if(!isPassNeeded()) { var app =
						 * sap.ui.getCore().byId("myApp");
						 * app.setInitialPage("idFirstLogonPin");
						 * app.to("idFirstLogonPin"); }else { var app =
						 * sap.ui.getCore().byId("myApp");
						 * app.setInitialPage("idFirstLogon1");
						 * app.to("idFirstLogon1"); }
						 */
					},

					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf com.cg.gtm.view.com.cg.gtm.view.FirstLogon
					 */
					onBeforeRendering : function() {

					},

					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf com.cg.gtm.view.com.cg.gtm.view.FirstLogon
					 */
					onAfterRendering : function() {
						if(g_runningInTablet || g_runningOnPhone) {
						    if (navigator.hasOwnProperty("splashscreen")) {
						        navigator.splashscreen.hide();
						    }
						}
					},

					/**
					 * Called when the Controller is destroyed. Use this one to
					 * free resources and finalize activities.
					 * 
					 * @memberOf com.cg.gtm.view.com.cg.gtm.view.FirstLogon
					 */
					// onExit: function() {
					//
					// }
					onClickLogon : function(event) {
						/*
						 * Calling material search service....this will serve 2
						 * purposes 1. Return the default plant for the logged
						 * in user 2. If no plant is returned , it means UserID /
						 * Password combo is wrong . SO used for login
						 * validation as well
						 */
						openSplashScreen();
						window.localStorage.clear(); // Clear all Data in local
												// storage new user entry
						g_MobileNavigationId = "";
						removeBrowserCookie();
						//var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
						
						/*
						 * new sap.ui.model.odata.ODataModel(sServiceUrl,
						 * bJSON?, sUser?, sPassword?, mHeaders?,
						 * bTokenHandling?, bWithCredentials?,
						 * bLoadMetadataAsync?) Hardcoding user and password
						 * TODO: Need to pass service user and password
						 */

						var myuser = sap.ui.getCore().getElementById("txtUser")
								.getValue();
						var mypass = sap.ui.getCore().getElementById("txtPass")
								.getValue();
						var mypin = sap.ui.getCore().byId("txtPin").getValue();

						if (myuser == "" || myuser.length == 0 || mypass == ""
								|| mypass.length == 0 ) {

							sap.m.MessageBox.show(

							"Please enter values in all fields",
									sap.m.MessageBox.Icon.ERROR, "Error");
							closeSplashScreen();
						}
						else if (mypin == "" || mypin.length == 0){
							sap.m.MessageBox.show(

									"Pin number should be of 4 numeric characters  ",
											sap.m.MessageBox.Icon.ERROR, "Error");
									closeSplashScreen();
						}else if (mypin.length < 4) {
							sap.m.MessageBox.show(

							"Pin number shouldn't be less than 4 ",
									sap.m.MessageBox.Icon.ERROR, "Error");
							mypin.setValue("");
							closeSplashScreen();
						}

						else {
							var demo = sap.ui.getCore().getElementById(
									"demoswitch").getState();
							if (demo) {
								defaultPlantName = "North Pole Depot";
								defaultPlantCode = "1234";
								saveCredentials();
								validate(sap.ui.getCore().byId('txtPin'));
								// sap.ui.controller("com.cg.gtm.view.Grid1").showSettingsPage();
								var app = sap.ui.getCore().byId("myApp");
								app.to("idGrid");
								closeSplashScreen();
							}

							else {

								var numValidation = validate(sap.ui
										.getCore().byId("txtPin"));// Numeric
																	// Field
																	// validation
								if (numValidation) {
									defaultPlantName = "";// plantsArr[0].PlantName;
									defaultPlantCode = "";
									saveCredentials();
									var ReturnMessage = sap.ui.controller(
											"com.cg.gtm.view.Grid1")
											.showSettingsPage();
									
									
									return ReturnMessage;
									closeSplashScreen();
								}

								else {
									closeSplashScreen();
								}

							}

						}

					},
					getTileSetup : function() {
						// loadTilesMock();

						/*
						 * Calling material search service....this will serve 2
						 * purposes 1. Return the default plant for the logged
						 * in user 2. If no plant is returned , it means UserID /
						 * Password combo is wrong . SO used for login
						 * validation as well
						 */
						//Service Start Time
						var logInfo = getTimeStamp() +"MOB00:: Service: LaunchPadService Start" ;
						var serviceURL = getUrl("/sap/opu/odata/UI2/PAGE_BUILDER_PERS/");
						if(serviceURL == "Fail")
						 {
						 return false;
						 }
						/*
						 * new sap.ui.model.odata.ODataModel(sServiceUrl,
						 * bJSON?, sUser?, sPassword?, mHeaders?,
						 * bTokenHandling?, bWithCredentials?,
						 * bLoadMetadataAsync?) Hardcoding user and password
						 * TODO: Need to pass service user and password
						 */

						var myuser = sap.ui.getCore().getElementById("txtUser")
								.getValue();
						var mypass = sap.ui.getCore().getElementById("txtPass")
								.getValue();

						var demo = sap.ui.getCore()
								.getElementById("demoswitch").getState();
						if (demo) {
							defaultPlantName = "North Pole Depot";
							defaultPlantCode = "1234";
							saveCredentials();
							isNumRepeat(sap.ui.getCore().byId('txtPin'));
							{
								loadTilesMock();
							}
							closeSplashScreen();
						}

						else {

							{
								// loadTilesMock();

								var tileSetupModel = new sap.ui.model.odata.ODataModel(
										serviceURL, true, myuser, mypass, null,
										true, true, false);
								var oJSONModelMatSearch = null;
								
								var date = new Date();
								var timestamp = date.getTime();
								
								/*
								 * Set Format as $format=json in the Request URL
								 */
								var readRequestURL = "PageSets('%2FUI2%2FFiori2LaunchpadHome')?$expand=AssignedPages/PageChipInstances/ChipInstanceBags/ChipInstanceProperties&time=" + timestamp;
								// var readRequestURL = "";

								tileSetupModel
										.read(
												readRequestURL,
												null,
												null,
												false,
												function(oData, oResponse) {
													var result = oResponse.body; // Getting
																					// JSON
																					// response
																					// body
													window.localStorage.setItem("Mob00UserTileSetUp",result);
													var jsonObj = JSON
															.parse(result); // Parsing
																			// the
																			// JSON
																			// Object
													var result = jsonObj.d.AssignedPages.results;
													var tileNameArr = [];
													for (var index = 0; index < result.length; index++) {

														if (result[index].id
																.indexOf("HIT_GRP") != -1)// this
																							// is a
																							// group
																							// created
																							// for
																							// Custom
																							// Launchpad
														{
															var tileNames = result[index].PageChipInstances.results;

															for (var innerIndex = 0; innerIndex < tileNames.length; innerIndex++) {

																var chipId = tileNames[innerIndex].chipId;
																var chipIDSPLIT1 = chipId
																		.split("CUSTOMIZING");
																var chipIDSPLIT2 = chipIDSPLIT1[0]
																		.split(":");
																var idForService1 = chipIDSPLIT2[chipIDSPLIT2.length - 3];
																var idForService2 = chipIDSPLIT2[chipIDSPLIT2.length - 2];
																var tileSetupModelNew = new sap.ui.model.odata.ODataModel(
																		serviceURL,
																		true,
																		myuser,
																		mypass,
																		null,
																		true,
																		true,
																		false);
																var readRequestURLNew = "Chips('"
																		+ chipId
																		+ "')?$expand=ChipBags/ChipProperties&time=" + timestamp;
																// "Chips('X-SAP-UI2-PAGE%3AX-SAP-UI2-CATALOGPAGE:"+
																// idForService1+":"+idForService2":CUSTOMIZING')?$expand=ChipBags/ChipProperties";

																tileSetupModelNew
																		.read(
																				readRequestURLNew,
																				null,
																				null,
																				false,
																				function(
																						oData,
																						oResponse) {
																					var result = oResponse.body; // Getting
																													// JSON
																													// response
																													// body
																					
																					window.localStorage.setItem("Mob00UserTileSetUpChips"+innerIndex,result);
																					
																					
																					
																					var jsonObj = JSON
																							.parse(result); // Parsing
																											// the
																											// JSON
																											// Object
																					var config = jsonObj.d.configuration;

																					var configDataArr = config
																							.split(",");
																					var tileSubtitleInit = configDataArr[3];
																					var subTitleArr = tileSubtitleInit
																							.split(":");
																					var tileSubtitleInitLen = subTitleArr[1].length;
																					var tileSubtitleFinal = subTitleArr[1]
																							.substring(
																									2,
																									tileSubtitleInitLen - 2);

																					myTile = tileSubtitleFinal;
																					// alert(myTile);

																					var tilesArr = myTile
																							.split("_");

																					if (tilesArr[0] == "L2") {

																						if (tileNameArr
																								.indexOf(tilesArr[1]) == -1) {
																							var oTileL1 = sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[1]);
																							sap.ui
																									.getCore()
																									.getElementById(
																											"tilecon")
																									.addTile(
																											oTileL1);// Adding
																														// first
																														// level
																														// tile
																							tileNameArr
																									.push(tilesArr[1]);
																						}

																						if (tileNameArr
																								.indexOf(tilesArr[3]) == -1) {
																							var oTileL2 = sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[3]);
																							sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[2])
																									.addTile(
																											oTileL2);// Adding
																														// second
																														// level
																														// tile
																							tileNameArr
																									.push(tilesArr[3]);
																						}
																					}

																					else if (tilesArr[0] == "L3") {

																						if (tileNameArr
																								.indexOf(tilesArr[1]) == -1) {
																							var oTileL1 = sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[1]);
																							sap.ui
																									.getCore()
																									.getElementById(
																											"tilecon")
																									.addTile(
																											oTileL1);// Adding
																														// first
																														// level
																														// tile
																							tileNameArr
																									.push(tilesArr[1]);
																						}

																						if (tileNameArr
																								.indexOf(tilesArr[3]) == -1) {
																							var oTileL2 = sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[3]);
																							sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[2])
																									.addTile(
																											oTileL2);// Adding
																														// second
																														// level
																														// tile
																							tileNameArr
																									.push(tilesArr[3]);
																						}

																						/*
																						 * if (
																						 * tileNameArr.indexOf(tilesArr[4]) ==
																						 * -1) {
																						 * var
																						 * oTileL3 =
																						 * sap.ui.getCore().getElementById(tilesArr[4]);
																						 * sap.ui.getCore().getElementById(tilesArr[3]).addTile(oTileL3);//Adding
																						 * second
																						 * level
																						 * tile
																						 * tileNameArr.push(tilesArr[4]); }
																						 */

																						if (tileNameArr
																								.indexOf(tilesArr[5]) == -1) {
																							var oTileL4 = sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[5]);
																							sap.ui
																									.getCore()
																									.getElementById(
																											tilesArr[4])
																									.addTile(
																											oTileL4);// Adding
																														// second
																														// level
																														// tile
																							tileNameArr
																									.push(tilesArr[5]);
																						}

																					}

																				},
																				function(
																						oError) {
																					errorRes = true;
																					if (oError.response.statusCode == 401) {

																						sap.m.MessageBox
																								.show(

																										"User Unauthorized",
																										sap.m.MessageBox.Icon.ERROR,
																										"Error");
																						closeSplashScreen();
																					}
																					try {
																						var data = JSON
																								.parse(oError.response.body);
																						for ( var event in data) {
																							var dataCopy = data[event];
																							try {
																								var messageFromBackend = dataCopy.innererror.errordetails[0].message;
																								sap.m.MessageBox
																										.show(
																												messageFromBackend
																														+ " "
																														+ " "
																														+ " ",
																												sap.m.MessageBox.Icon.ERROR,
																												"Error");
																							} catch (e) {
																								sap.m.MessageBox
																										.show(
																												e.message
																														+ " "
																														+ " "
																														+ " ",
																												sap.m.MessageBox.Icon.ERROR,
																												"Error");
																								break;
																							}
																						}
																					} catch (e) {
																						sap.m.MessageBox
																								.show(
																										"Service Not Available - Please contact system administrator"
																												+ " "
																												+ " "
																												+ " ",
																										sap.m.MessageBox.Icon.ERROR,
																										"Error");
																					}

																					// alert(oError.message);
																				});

																/*
																 * var myTile =
																 * tileNames[innerIndex].Chip.title ;
																 * var config =
																 * tileNames[innerIndex].Chip.configuration ;
																 * var
																 * configDataArr =
																 * config.split(",");
																 * var
																 * tileSubtitleInit =
																 * configDataArr[3];
																 * var
																 * subTitleArr =
																 * tileSubtitleInit.split(":");
																 * var
																 * tileSubtitleInitLen =
																 * subTitleArr[1].length;
																 * var
																 * tileSubtitleFinal =
																 * subTitleArr[1].substring(2,tileSubtitleInitLen-2 );
																 * 
																 * 
																 * myTile =
																 * tileSubtitleFinal;
																 * //alert(myTile);
																 * 
																 * var tilesArr =
																 * myTile.split("_");
																 * 
																 * if
																 * (tilesArr[0] ==
																 * "L2") {
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[1]) ==
																 * -1) { var
																 * oTileL1 =
																 * sap.ui.getCore().getElementById(tilesArr[1]);
																 * sap.ui.getCore().getElementById("tilecon").addTile(oTileL1);//Adding
																 * first level
																 * tile
																 * tileNameArr.push(tilesArr[1]); }
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[3]) ==
																 * -1) { var
																 * oTileL2 =
																 * sap.ui.getCore().getElementById(tilesArr[3]);
																 * sap.ui.getCore().getElementById(tilesArr[2]).addTile(oTileL2);//Adding
																 * second level
																 * tile
																 * tileNameArr.push(tilesArr[3]); } }
																 * 
																 * else if
																 * (tilesArr[0] ==
																 * "L3") {
																 * 
																 * 
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[1]) ==
																 * -1) { var
																 * oTileL1 =
																 * sap.ui.getCore().getElementById(tilesArr[1]);
																 * sap.ui.getCore().getElementById("tilecon").addTile(oTileL1);//Adding
																 * first level
																 * tile
																 * tileNameArr.push(tilesArr[1]); }
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[3]) ==
																 * -1) { var
																 * oTileL2 =
																 * sap.ui.getCore().getElementById(tilesArr[3]);
																 * sap.ui.getCore().getElementById(tilesArr[2]).addTile(oTileL2);//Adding
																 * second level
																 * tile
																 * tileNameArr.push(tilesArr[3]); }
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[4]) ==
																 * -1) { var
																 * oTileL3 =
																 * sap.ui.getCore().getElementById(tilesArr[4]);
																 * sap.ui.getCore().getElementById(tilesArr[3]).addTile(oTileL3);//Adding
																 * second level
																 * tile
																 * tileNameArr.push(tilesArr[4]); }
																 * 
																 * if (
																 * tileNameArr.indexOf(tilesArr[5]) ==
																 * -1) { var
																 * oTileL4 =
																 * sap.ui.getCore().getElementById(tilesArr[5]);
																 * sap.ui.getCore().getElementById(tilesArr[4]).addTile(oTileL4);//Adding
																 * second level
																 * tile
																 * tileNameArr.push(tilesArr[5]); }
																 * 
																 * 
																 *  }
																 */

															}

														}

													}

													closeSplashScreen()
													
													
													

													
													if( g_isDebug == true)
													{
													//Service End Time
													var logInfo1 = getTimeStamp() +"MOB00:: Service: LaunchPadService Finish" ;
													//Log file Service Start and End Time
													var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
													logFileUpdate(g_ServiceStartEndTime);
													}


												},
												function(oError) {
													errorRes = true;
													if (oError.response.statusCode == 401) {

														sap.m.MessageBox
																.show(

																		"User Unauthorized",
																		sap.m.MessageBox.Icon.ERROR,
																		"Error");
														closeSplashScreen();
														
														if( g_isDebug == true)
														{
														//Service End Time
														var logInfo1 = getTimeStamp() +"MOB00:: Service: LaunchPadService Failed 401 unauthorised" ;
														//Log file Service Start and End Time
														var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
														logFileUpdate(g_ServiceStartEndTime);
														}
														
														
													}
													try {
														var data = JSON
																.parse(oError.response.body);
														for ( var event in data) {
															var dataCopy = data[event];
															try {
																var messageFromBackend = dataCopy.innererror.errordetails[0].message;
																sap.m.MessageBox
																		.show(
																				messageFromBackend
																						+ " "
																						+ " "
																						+ " ",
																				sap.m.MessageBox.Icon.ERROR,
																				"Error");
															} catch (e) {
																sap.m.MessageBox
																		.show(
																				e.message
																						+ " "
																						+ " "
																						+ " ",
																				sap.m.MessageBox.Icon.ERROR,
																				"Error");
																break;
															}
														}
													} catch (e) {
														sap.m.MessageBox
																.show(
																		"Service Not Available - Please contact system administrator"
																				+ " "
																				+ " "
																				+ " ",
																		sap.m.MessageBox.Icon.ERROR,
																		"Error");
														
														if( g_isDebug == true)
														{
														//Service End Time
														var logInfo1 = getTimeStamp() +"MOB00:: Service: LaunchPadService Failed no network" ;
														//Log file Service Start and End Time
														var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
														logFileUpdate(g_ServiceStartEndTime);
														}
														
														
													}

													// alert(oError.message);
												});

							}

						}

					}

				});

function saveCredentials() {
	// var user = sap.ui.getCore().byId("txtUser");

	var user = sap.ui.getCore().getElementById("txtUser");
	var pass = sap.ui.getCore().getElementById("txtPass");
	var pin = sap.ui.getCore().byId("txtPin");
	var currDate = new Date();
	window.localStorage.setItem("lastDate", currDate);
	savePassword(pass.getValue());
	saveUserName(user.getValue());
	savePIN(pin.getValue());
	getPassword();
	getUserName();
}

function isNumRepeat(idControl) {
	var inp = idControl.getValue();
	// var reg =();//
	var myInteger = (/^(?!.*(\d)\1).*$/);
	if (!inp.match(myInteger) || inp.length < 2) {
		idControl.setValue("");
		// alert("not a Valid Pin");
		sap.m.MessageBox.show(

		"Pin should not have repeated numeric value",
				sap.m.MessageBox.Icon.ERROR, "Error");
		return true;
	}
}

function validate(idControl) {
	// var str = ;
	var str = idControl.getValue();
	var l = str.length, i;

	var isError = false;

	for (i = 0; i < l - 1; i++) {
		if ((parseInt(str[i], 10) + 1) % 10 != str[i + 1])

		{

			break;
		} else {
			sap.m.MessageBox.show(

			" PIN should not have Incremental Numeric Values",
					sap.m.MessageBox.Icon.ERROR, "Error");
		}

		sap.ui.getCore().byId('txtPin').setValue("");
		isError = true;
		break;
	}

	if (!isError) {
		isError = isNumRepeat(idControl);
	}

	return isError;

}
// return true;

/*
 * var len=value.length; var first=value[0];
 */

/*
 * var invalid_flag = false; var str =
 * sap.ui.getCore().byId('txtPin').getValue(); str = str.trim(); var v0
 * =str.substring(0,1), v1 = str.substring(1,2), v2 = str.substring(2,3), v3=
 * str.substring(3,4);
 * 
 * if(v3 = v2+1){ if(v2 = v1+1){ if(v1 = v0+1){ invalid_flag = true;
 * alert("failure"); sap.ui.getCore().byId('txtPin').setValue("");
 *  } } } if(!invalid_flag){
 * 
 * alert("sucess"); var app = sap.ui.getCore().byId("myApp"); app.to("idGrid");
 * var headerPlant = sap.ui.getCore().byId("headerPlant");
 * headerPlant.setTitle("North Pole Depot"); } }
 */

/*
 * r=true;
 * 
 * if(!len || isNaN(value) || value==0) return false; for( var i=1; i<len; i++ ) {
 * if(value[i]!=first) { r=false;
 * 
 * 
 * break; } if(r) return true; r=true; for( var i=1; i<len; i++ ) {
 * if(value[i]!=(parseInt(first)+i)) { r=false; alert("Shouldn't be Incremental
 * Numbers"); break; } } if (r){ r=true; alert("No Incremental Numbers"); var
 * app = sap.ui.getCore().byId("myApp"); app.to("idGrid"); var headerPlant =
 * sap.ui.getCore().byId("headerPlant"); headerPlant.setTitle("North Pole
 * Depot"); }
 * 
 *  };
 */

function isPassNeeded() {

	return false;
}


function logonValidate() {
	isSuccess = false;

	var myuser = sap.ui.getCore().getElementById("txtUser").getValue();
	var mypass = sap.ui.getCore().getElementById("txtPass").getValue();
	var mypin = sap.ui.getCore().byId("txtPin").getValue();

	if (myuser == "" || myuser.length == 0 || mypass == ""
			|| mypass.length == 0) {

		sap.m.MessageBox.show(

		"Please enter values in all fields", sap.m.MessageBox.Icon.ERROR,
				"Error");
		closeSplashScreen();
		return isSuccess;
	} else if (mypin == "" || mypin.length == 0) {
		sap.m.MessageBox.show(

		"Pin number should be of 4 numeric characters  ",
				sap.m.MessageBox.Icon.ERROR, "Error");
		closeSplashScreen();
		return isSuccess;
	} else if (mypin.length < 4) {
		sap.m.MessageBox.show(

		"Pin number shouldn't be less than 4 ", sap.m.MessageBox.Icon.ERROR,
				"Error");
		mypin.setValue("");
		closeSplashScreen();
		return isSuccess;
	}
	
	var numValidation = validate(sap.ui
			.getCore().byId("txtPin"));// Numeric
										// Field
										// validation
										
	if(numValidation==false) {
		return isSuccess;									
	}else {
		isSuccess = true;
	}
		
	return isSuccess;
}


