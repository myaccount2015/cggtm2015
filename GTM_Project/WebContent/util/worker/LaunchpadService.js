function LaunchpadService()
{

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
		//closeSplashScreen();
	}

	else {

		{
			// loadTilesMock();

			var tileSetupModel = new sap.ui.model.odata.ODataModel(
					serviceURL, true, myuser, mypass, null,
					true, true, false);
			var oJSONModelMatSearch = null;
			//var chipArray = [];
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
								g_webWorkerCheck = "LPS"; //Launchpad Success	
								var result = oResponse.body; // Getting
																// JSON
																// response
																// body
								
								
								//window.localStorage.setItem("Mob00UserTileSetUp",result);
								window.localStorage.setItem("Mob00TileResults",result);
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
										
										if (result[index].id
											.indexOf("HIT_GRP_PM") != -1)
											{
											g_drop3user = true ;
											
											}
										var tileNames = result[index].PageChipInstances.results;
									
										var innerIndex;
										
										
										for (innerIndex = 0; innerIndex < tileNames.length; innerIndex++) {

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
																
																
																
															
																var jsonObj = JSON
																		.parse(result); // Parsing
																						// the
																						// JSON
																						// Object
																var config = jsonObj.d.configuration;
																//chipArray.push(config);
																
																window.localStorage.setItem("Mob00UserTileSetUpChips_Array"+chipId,config);
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
																	//closeSplashScreen();
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

							//	closeSplashScreen();
								
								//window.localStorage.setItem("Mob00UserTileSetUpChips_Array",chipArray);
								
								//window.localStorage.setItem("Mob00UserTileSetUpChips",tileNameArr);
								
								if( tileNameArr.length < 1)
				                 {
				                 	sap.m.MessageBox.show("You are not authorized to use any applications",
																						sap.m.MessageBox.Icon.ERROR,
																						"Error");
				                 }
								
								
								if( g_isDebug == true)
								{
								//Service End Time
								var logInfo1 = getTimeStamp() +"MOB00:: Service: LaunchPadService Finish" ;
								//Log file Service Start and End Time
								g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								logFileUpdate(g_ServiceStartEndTime);
								}


							},
							function(oError) {
								
								g_webWorkerCheck = "LPE"; //Launchpad Error	
								
								
								errorRes = true;
								if (oError.response.statusCode == 401) {

									sap.m.MessageBox
											.show(

													"User Unauthorized",
													sap.m.MessageBox.Icon.ERROR,
													"Error");
									//closeSplashScreen();
									
									if( g_isDebug == true)
									{
									//Service End Time
									var logInfo1 = getTimeStamp() +"MOB00:: Service: LaunchPadService Failed 401 unauthorised" ;
									//Log file Service Start and End Time
									g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
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
									g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}
									
									
								}

								// alert(oError.message);
							});

		}

	}

	


}