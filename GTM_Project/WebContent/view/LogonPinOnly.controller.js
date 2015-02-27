sap.ui.controller("com.cg.gtm.view.LogonPinOnly", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.LogonPinOnly
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.LogonPinOnly
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.LogonPinOnly
*/
	onAfterRendering: function() {
		if(g_runningInTablet || g_runningOnPhone) {
		    if (navigator.hasOwnProperty("splashscreen")) {
		        navigator.splashscreen.hide();
		    }
		}
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.LogonPinOnly
*/
//	onExit: function() {
//
//	}
	
	onClickLogonPIN: function(event) {
		var success = verifyPIN();
		if(success == true) {
			//getTileSetupPIN();
			 //sap.ui.getCore().byId("idFirstLogon1").getController().getTileSetup();
			 var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
			 
			 if (demo){
				    defaultPlantName = "North Pole Depot";
				    defaultPlantCode = "1234";
					var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGrid");
					var headerPlant = sap.ui.getCore().byId("headerPlant"); 
					headerPlant.setTitle("North Pole Depot");
			 }
			 else
				 {
				 
				 userTileSetUp();
					
				 if ( g_drop3 == false)
	    			{
					
	    			sap.ui.getCore().byId("tilecon").removeTile(sap.ui.getCore().byId("PM"));
					
	    			}
				 var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGrid");
				
				 
				 /*
				 
				
				 openSplashScreen();//splash screen opened	
				 
				//Service Start Time
				 var logInfo = getTimeStamp() +"MOB00:: Service: materialcollections Start" ;


			 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
			 
			 if(serviceURL == "Fail")
			 {
			 return false;
			 }
			 
			 
			 var myuser = getUserName();
			 var mypass = getPassword();
			 var mypin = sap.ui.getCore().byId("txtPin").getValue();
			 
			
			 var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myuser, mypass, null, true, true, false);
			 
			 var randomh=Math.random();
     		 
      		var readRequestURL = "/materialcollections?x="+randomh+"";
			
				loginoDataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
								var result = oResponse.body; //Getting JSON response body
								var jsonObj = JSON.parse(result); // Parsing the JSON Object		
								var result = jsonObj.d; // Taking the result inside namespace d
								
								var plantsArr = result.results ;
								if (!plantsArr[0])
									{
							    defaultPlantName = plantsArr[0].PlantName;
									}
								if ( !plantsArr[0])
									{
									  defaultPlantCode = plantsArr[0].Plant;
									}
							  
								g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
								var headerPlant = sap.ui.getCore().byId("headerPlant"); 
								headerPlant.setTitle(defaultPlantName);
								var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
								plantLst.setValue(defaultPlantName);
								
								window.localStorage.setItem("defPlantName", defaultPlantName);
								window.localStorage.setItem("defPlantCode", defaultPlantCode);
								
								var app = sap.ui.getCore().byId("myApp"); 
								app.to("idGrid");
								closeSplashScreen();
								//idFromList
								

								if( g_isDebug == true)
								{
								//Service End Time
								var logInfo1 = getTimeStamp() +"MOB00:: Service: materialcollections Finish" ;
								//Log file Service Start and End Time
								var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								logFileUpdate(g_ServiceStartEndTime);
								}
								
								
								
							},  function(oError){  
								closeSplashScreen();
									errorRes = true;
									if (oError.response.statusCode == 401)
										{
										
										sap.m.MessageBox.show(
											"User Unauthorized",
											sap.m.MessageBox.Icon.ERROR,
											"Error"
											);
										
										if( g_isDebug == true)
										{
										//Service End Time
										var logInfo1 = getTimeStamp() +"MOB00:: Service: materialcollections Failed 401 unauthorised" ;
										//Log file Service Start and End Time
										var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										logFileUpdate(g_ServiceStartEndTime);
										}
										
										
										closeSplashScreen(); 
     									
     									return;
										
										}
									try{
										var data = JSON.parse(oError.response.body);
										for(var event in data){
										var dataCopy = data[event];	
											try{
											var messageFromBackend = dataCopy.innererror.errordetails[0].message;
											sap.m.MessageBox.show(
											messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
											catch(e)
											{sap.m.MessageBox.show(e.message+ " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,"Error");break;
											}}}catch(e){sap.m.MessageBox.show(
				                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,"Error");
											
											if( g_isDebug == true)
											{
											//Service End Time
											var logInfo1 = getTimeStamp() +"MOB00:: Service: materialcollections Failed no network" ;
											//Log file Service Start and End Time
											var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
											logFileUpdate(g_ServiceStartEndTime);
											}
											
											
											}
									//alert(oError.message);
			      });	
				 */}
		
		}
	},
	
	goToLogon: function(event) {
		
		sap.ui.getCore().byId("txtUser").setValue(""); 
		sap.ui.getCore().byId("txtPass").setValue(""); 
		sap.ui.getCore().byId("txtPin").setValue(""); 
		
		var app = sap.ui.getCore().byId("myApp"); 
		app.setInitialPage("idFirstLogon1");
		app.to("idFirstLogon1");
	}
	
	

});



function verifyPIN() {
	
	var uspin = getPin();//window.localStorage.getItem("uPin");
	var lastDate = window.localStorage.getItem("lastDate");
	
	 var today = new Date();
		var dd = today.getDate(); 
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear(); 
		var currDateString = dd + "/" + mm + "/" + yyyy;
		//alert(currDateString);
		var todayDate = new Date(currDateString);
		//alert("todayDate" + todayDate);
		var lastIPDate =  new Date(lastDate);
		//alert("lastIPDate" + lastIPDate);
		//var timeDiff = Math.abs(todayDate.getTime() - lastIPDate.getTime());
		//alert("timeDiff" +  timeDiff);
		
		//alert(diffDays);
		
		var pinformuser = sap.ui.getCore().byId("txtPin1").getValue();
		
		  var currDate = new Date();
			var currDateString =   currDate.getTime();
			var timeDiff = currDateString - lastIPDate ;
			var diffDays = Math.ceil(timeDiff / (1000)); 
			
			//alert(timeDiff);
			//alert(diffDays);
			
			if (diffDays > 604800)
				{
				sap.m.MessageBox.show("Please re-enter your credentials to login",sap.m.MessageBox.Icon.ERROR,"Error");
				var app = sap.ui.getCore().byId("myApp"); 
	    		app.setInitialPage("idFirstLogon1");
				app.to("idFirstLogon1");
				return false;
				}
			
			else
				{
				 if (uspin == pinformuser)
		        	{
					// sap.ui.controller("com.cg.gtm.view.Grid1").showSettingsPage();
					 getDefaults();
					 var app = sap.ui.getCore().byId("myApp"); 
						app.to("idGrid");
			        	return true;
		        	}
		        
		        else
		        	{
		        	sap.m.MessageBox.show("Invalid PIN",sap.m.MessageBox.Icon.ERROR,"Error");
		        	return false;
		        	}
				
				}
			
			
	
	
};



 function  getTileSetupPIN()
{
	

	/* Calling material search service....this will serve 2 purposes 
	 * 1. Return the default plant for the logged in user
	 * 2. If no plant is returned , it means UserID / Password combo is wrong . SO used for login validation as well
	 * */		
			
var serviceURL = getUrl
("/sap/opu/odata/UI2/PAGE_BUILDER_PERS/");
				
				/*
				 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
				 * Hardcoding user and password
				 * TODO: Need to pass service user and password
				 */
			 
				var myuser = getUserName();
				var mypass = getPassword();
			
			
				 var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
				 if ( demo)
					 {
					 defaultPlantName = "North Pole Depot";
					 defaultPlantCode = "1234";
					 saveCredentials();
					 isNumRepeat(sap.ui.getCore().byId('txtPin'));
					 validate(sap.ui.getCore().byId('txtPin').getValue());
					 loadTilesMock();	
						
					 }
				 
				 else
					 {
					 loadTilesMock();	
			 var tileSetupModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myuser, mypass, null, true, true, false);
			 var oJSONModelMatSearch = null;
			    
			     // Set Format as $format=json in the Request URL
			     
			var readRequestURL = "PageSets('%2FUI2%2FFiori2LaunchpadHome')?$expand=Pages/PageChipInstances/Chip,Pages/PageChipInstances/RemoteCatalog,Pages/PageChipInstances/ChipInstanceBags/ChipInstanceProperties,AssignedPages,DefaultPage";
			tileSetupModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
								var result = oResponse.body; //Getting JSON response body
								var jsonObj = JSON.parse(result); // Parsing the JSON Object		
								var result = jsonObj.d.Pages.results;
								var tileNameArr = [];
								for ( var index =  0 ; index < result.length ; index ++ )
									{
									 
									if (result[index].id.indexOf("HIT_GRP") != -1)//this is a group created for Custom Launchpad
										{
										

										 var tileNames = result[index].PageChipInstances.results;
										 for ( var innerIndex = 0; innerIndex < tileNames.length ; innerIndex ++ )
											 {
											 
											 var myTile = tileNames[innerIndex].Chip.title ;
											 var config =  tileNames[innerIndex].Chip.configuration ;
											 var configDataArr = config.split(",");
											 var tileSubtitleInit = configDataArr[3];
											 var subTitleArr = tileSubtitleInit.split(":");
											 var tileSubtitleInitLen = subTitleArr[1].length;
											 var tileSubtitleFinal = subTitleArr[1].substring(2,tileSubtitleInitLen-2 );
											 myTile = tileSubtitleFinal;
											 //alert(myTile);
											 
											 var tilesArr =  myTile.split("_");
											 if (tilesArr[0] == "L2")
												 {
												
												 if ( tileNameArr.indexOf(tilesArr[1]) == -1)
													 {
													 var oTileL1 = sap.ui.getCore().getElementById(tilesArr[1]);
													 sap.ui.getCore().getElementById("tilecon").addTile(oTileL1);//Adding first level tile
													 tileNameArr.push(tilesArr[1]);
													 }
												
												 if ( tileNameArr.indexOf(tilesArr[3]) == -1)
												 {
												 var oTileL2 = sap.ui.getCore().getElementById(tilesArr[3]);
												 sap.ui.getCore().getElementById(tilesArr[2]).addTile(oTileL2);//Adding second level tile
												 tileNameArr.push(tilesArr[3]);
												 }
												 }
											 
											 else if (tilesArr[0] == "L3")
												 {
												 

													
												 if ( tileNameArr.indexOf(tilesArr[1]) == -1)
													 {
													 var oTileL1 = sap.ui.getCore().getElementById(tilesArr[1]);
													 sap.ui.getCore().getElementById("tilecon").addTile(oTileL1);//Adding first level tile
													 tileNameArr.push(tilesArr[1]);
													 }
												
												 if ( tileNameArr.indexOf(tilesArr[3]) == -1)
												 {
												 var oTileL2 = sap.ui.getCore().getElementById(tilesArr[3]);
												 sap.ui.getCore().getElementById(tilesArr[2]).addTile(oTileL2);//Adding second level tile
												 tileNameArr.push(tilesArr[3]);
												 }
												 
												 if ( tileNameArr.indexOf(tilesArr[4]) == -1)
												 {
												 var oTileL3 = sap.ui.getCore().getElementById(tilesArr[4]);
												 sap.ui.getCore().getElementById(tilesArr[3]).addTile(oTileL3);//Adding second level tile
												 tileNameArr.push(tilesArr[4]);
												 }
												 
												 if ( tileNameArr.indexOf(tilesArr[5]) == -1)
												 {
												 var oTileL4 = sap.ui.getCore().getElementById(tilesArr[5]);
												 sap.ui.getCore().getElementById(tilesArr[4]).addTile(oTileL4);//Adding second level tile
												 tileNameArr.push(tilesArr[5]);
												 }
												 
												 
												 
												 }
											 
											 }
										
										
										}
									
									}
								
								
								
								
							},  function(oError){  
									errorRes = true;
									if (oError.response.statusCode == 401)
										{
									
										sap.m.MessageBox.show(
												
												"User Unauthorized",
												sap.m.MessageBox.Icon.ERROR,
												"Error"
												);
										
										}
									try{
										var data = JSON.parse(oError.response.body);
										for(var event in data){
										var dataCopy = data[event];	
											try{
											var messageFromBackend = dataCopy.innererror.errordetails[0].message;
											sap.m.MessageBox.show(
											messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
											catch(e)
											{sap.m.MessageBox.show(e.message+ " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,"Error");break;
											}}}catch(e){sap.m.MessageBox.show(
				                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,"Error");}
									
									//alert(oError.message);
			      });	
				 }
				 
			
			
		
			 
};

function getDefaults()
{
	
	 var defPlant = window.localStorage.getItem("defPlantDesc") ;
	 var defPlantCode = window.localStorage.getItem("defPlantCode") ;
	// sap.ui.getCore().byId("inputPlantMOB28").setText(defPlant);
	 
	  sap.ui.getCore().byId("MOB00ChPltLBL").setText(defPlantCode+" - "+defPlant);
	  
	  var defWhouse = window.localStorage.getItem("defWHDesc") ;
	  var defWhouseCode = window.localStorage.getItem("defWHCode") ;
	  sap.ui.getCore().byId("MOB00ChWhLBL").setText(defWhouseCode+" - "+defWhouse);
	//  sap.ui.getCore().byId("inputWHMOB28").setText(defWhouse);
	  
	  var defPrinter =  window.localStorage.getItem("defPrinDesc") ;
	  var defPrinterCode =  window.localStorage.getItem("defPrinCode") ;
	  sap.ui.getCore().byId("MOB00ChPrntLBL").setText(defPrinterCode +" - "+defPrinter);
	  
	  var defLoc =   window.localStorage.getItem("defLocDesc") ;
	  var defLocCode =   window.localStorage.getItem("defLocCode") ;
	  sap.ui.getCore().byId("MOB00ChLocLBL").setText(defLocCode+" - "+defLoc);
	  
	  	defaultPlantName = window.localStorage.getItem("defPlantDesc");
		defaultPlantCode = window.localStorage.getItem("defPlantCode");
		var headerPlant = sap.ui.getCore().byId("headerPlant"); 
		headerPlant.setTitle(defaultPlantName);
		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
		plantLst.setValue(defaultPlantName);
	  
	
}






function userTileSetUp()
{
	
	
	/*debugger;
	var getTileId = window.localStorage.getItem("Mob00UserTileSetUpChips");
    var getTileArray = [];//"QU,createNoti,CUSTCOMP,ENTINSP,CRINSP,
                          //NOTLIST,INTPROB,VENERR,MATERR,
                          //IN,IMC,GR,
                          //STTRF,STISSUE,WMCOUNT,PUTAW,PICK,CHGSTCK,BIN1,BIN,matSrchTile,LABELPR"
	getTileArray =  getTileId.split(",");

	for ( var i = 0 ; i< getTileArray.length ; i++)
		{
		var oTileL1 = getTileArray[i];
		sap.ui.getCore().getElementById("tilecon").addTile(sap.ui.getCore().byId(oTileL1));
		}*/
	
	
	
	
	var tileNames1 = window.localStorage.getItem("Mob00TileResults");
	var jsonObj = JSON
	.parse(tileNames1); 
     var result = jsonObj.d.AssignedPages.results;
	var innerIndex;
	var tilesArr = [];
	var tileNameArr = [];
	for (var index = 0; index < result.length; index++) {
			if (result[index].id
					.indexOf("HIT_GRP") != -1){// this
		var tileNames = result[index].PageChipInstances.results;
	for (innerIndex = 0; innerIndex < tileNames.length; innerIndex++) {
		var chipId = tileNames[innerIndex].chipId;
		var chipIDSPLIT1 = chipId
				.split("CUSTOMIZING");
		var chipIDSPLIT2 = chipIDSPLIT1[0]
				.split(":");
		var idForService1 = chipIDSPLIT2[chipIDSPLIT2.length - 3];
		var idForService2 = chipIDSPLIT2[chipIDSPLIT2.length - 2];
	{
							var config = window.localStorage.getItem("Mob00UserTileSetUpChips_Array"+chipId);
							if(typeof config == 'undefined' || config==null) {
								continue;
							}
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
							var tilesArr = myTile
									.split("_");
							if (tilesArr[0] == "L2") {
								if (tileNameArr
										.indexOf(tilesArr[1]) == -1) {
									var oTileL1 = sap.ui
											.getCore()
											.getElementById(
													tilesArr[1]);
									
									
									if(typeof oTileL1 == 'undefined' || oTileL1==null) {
										continue;
									}
									
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
									
									if(typeof oTileL2 == 'undefined' || oTileL2==null) {
										continue;
									}
									
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
									
									if(typeof oTileL1 == 'undefined' || oTileL1==null) {
										continue;
									}
									
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
									
									if(typeof oTileL2 == 'undefined' || oTileL2==null) {
										continue;
									}
									
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


								if (tileNameArr
										.indexOf(tilesArr[5]) == -1) {
									var oTileL4 = sap.ui
											.getCore()
											.getElementById(
													tilesArr[5]);
									
									if(typeof oTileL4 == 'undefined' || oTileL4==null) {
										continue;
									}
									
									sap.ui
											.getCore()
											.getElementById(
													tilesArr[4])
											.addTile(
													oTileL4);
									tileNameArr
											.push(tilesArr[5]);
								}}}}
	
	}
	}
	
	if( tileNameArr.length < 1)
    {
    	sap.m.MessageBox.show("You are not authorized to use any applications",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
    }
}



