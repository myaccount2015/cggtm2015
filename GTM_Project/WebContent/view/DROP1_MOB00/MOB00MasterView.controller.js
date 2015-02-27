sap.ui.controller("com.cg.gtm.view.DROP1_MOB00.MOB00MasterView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.DROP1_MOB00.MOB00MasterView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.DROP1_MOB00.MOB00MasterView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.DROP1_MOB00.MOB00MasterView
*/
	onAfterRendering: function() {
		var jsonEndSystems = getURLs();
				 
		var oJSONActType = new sap.ui.model.json.JSONModel(jsonEndSystems);
		var selTargetSystem = sap.ui.getCore().byId("selTargetSystem");
		selTargetSystem.setModel(oJSONActType);
		
		//g_EndSystem = "DEV1"; //Setting default end system
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.DROP1_MOB00.MOB00MasterView
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB00";
	var helpDocNumber = HelpDocument(MobileScreenNumber);
	url1 = url1 + "('"+helpDocNumber+"')/$value";
	if(g_runningOnPhone == false && g_runningInTablet == false) {
	window.open(url1, '_blank'); 
	window.focus();
	} else {
	//navigator.app.loadUrl(url1, { openExternal:true } );
	
		downloadAndDisplayPDF(url1);
	}
	},
	
	onTargetSystemChange: function(oEvent)
	{
		var selectedId = oEvent.mParameters.selectedItem.sId;
		var selectedComp = sap.ui.getCore().byId(selectedId);
		
		var selectedText = selectedComp.mProperties.key;
		/*
		 * Setting Global Variable for End System
		 */
		g_EndSystem = selectedText;
	},
	
	selScanner : function()
	{
	 if ( sap.ui.getCore().byId("scannerMOB00").getSelectedKey == "CAM")
		 {
		 g_scannertype = "CAM";
		 }
	 else
		 {
		 
		 }
		
	},
	getPlantsMOB00 : function()
	{
		openSplashScreen();
		var serviceURL = "";
		var logInfo = "";
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
     	
     
		var readRequestURL = "";
		
		if ( g_MOB00Init == "PL")
		{
			
			
			//Service Start Time
	 logInfo = getTimeStamp() +"MOB00:: Service: PlantList Start" ;
         serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
         if(serviceURL == "Fail")
					 {
					 return false;
					 }
		 readRequestURL = "/PlantList?$format=json";
		}
	
	if ( g_MOB00Init == "PR")
	{  logInfo = getTimeStamp() +"MOB00:: Service: PlantList Start" ;
		serviceURL = getUrl("/sap/opu/odata/sap/ZGW_LABLE_PRINT_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
	    readRequestURL = "/PrinterList?$format=json";
	}
	
	if ( g_MOB00Init == "LO")
	{  logInfo = getTimeStamp() +"MOB00:: Service: StorageLocList Start" ;
		//serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		//readRequestURL="/StorageLocList?PlantId=''?$format=json";
		
		serviceURL =  getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		readRequestURL="/StorageLocList?PlantId=' '";
	}
	
	if ( g_MOB00Init == "WH")
	{  logInfo = getTimeStamp() +"MOB00:: Service: WareHouseList Start" ;
		serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		readRequestURL="/WareHouseList?PlantId=''?$format=json";
	}
	
			
		var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
		defectDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
			
			 var result = oData.results;
             if(result.length > 0){
 				var result = oResponse.body; //Getting JSON response body
				
				var jsonObj = JSON.parse(result); // Parsing the JSON Object
				
				var result = jsonObj.d; // Taking the result inside namespace d
				
				var listData = result.results;
				searchHelpMOB00(listData);
				
				if(g_MOB00Init == 'PR')
					{
					var itemarray = [];
					var item = {
							"PrinterType":	"-Select Printer-",
							"PrinterName": "000A-DummyData"
							
					};
					itemarray.push(item);
					for( var i = 0 ; i < listData.length; i++)
						{
						 item = {
								"PrinterType":	listData[i].PrinterType,
								"PrinterName": listData[i].PrinterName
							};
						itemarray.push(item);
						}
					
			
					var oData = {"Items":itemarray,
							     "AllRecords" : listData
					          };
					var oModel = new sap.ui.model.json.JSONModel(oData);
					sap.ui.getCore().byId("Mob29_DestinationPrinter").setModel(oModel);
					
					}
				
				
				
				
				
				
				
				
				
				
				
				
				}
			    
		  
			  setTimeout(function(){
				  closeSplashScreen();
			  },1000);//constant delay  
			  
			 
			  if ( g_MOB00Init == "PL")
			  		{
				  if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Finish" ;
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}			  
					}
				  

				  	if ( g_MOB00Init == "PR")
				  		{
				  		if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Finish" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}		  		
						}
				  

				  	if ( g_MOB00Init == "LO")
				  	{
				  		if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB00:: Service: StorageLocList Finish" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}		  		
				  	}
				  

				  if ( g_MOB00Init == "WH")
				  {
					  if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB00:: Service: WareHouseList Finish" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}		  
				  }
				  
				  
				  
		
			  
			  
			  
			
		},  function(oError){  
						errorRes = true;
						//alert(oError.message);
						closeSplashScreen();
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
								}}}catch(e){
									
									
									
								sap.m.MessageBox.show(
	                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,"Error");
									
									if ( g_MOB00Init == "PL")
							  		{
								  if( g_isDebug == true)
									{
									//Service End Time
									var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Failed no network" ;
									//Log file Service Start and End Time
									var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}			  
									}
								  

								  	if ( g_MOB00Init == "PR")
								  		{
								  		if( g_isDebug == true)
										{
										//Service End Time
										var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Failed no network" ;
										//Log file Service Start and End Time
										var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										logFileUpdate(g_ServiceStartEndTime);
										}		  		
										}
								  

								  	if ( g_MOB00Init == "LO")
								  	{
								  		if( g_isDebug == true)
										{
										//Service End Time
										var logInfo1 = getTimeStamp() +"MOB00:: Service: StorageLocList Failed no network" ;
										//Log file Service Start and End Time
										var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										logFileUpdate(g_ServiceStartEndTime);
										}		  		
								  	}
								  

								  if ( g_MOB00Init == "WH")
								  {
									  if( g_isDebug == true)
										{
										//Service End Time
										var logInfo1 = getTimeStamp() +"MOB00:: Service: WareHouseList Failed no network" ;
										//Log file Service Start and End Time
										var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										logFileUpdate(g_ServiceStartEndTime);
										}		  
								  }
								
								}
					
      });
		
		
		
	}

});

function searchHelpMOB00(MOB00ListRes)
{
var aListLength = MOB00ListRes.length;
	var mob00DataGrp = [];
	
	if ( g_MOB00Init == "PL")
		{
	    var cnt = 0;
		for(cnt ; cnt<aListLength; cnt++) {
		
			var plantGroupDescription = MOB00ListRes[cnt].PlantName;
		    var plantIdInMaterial = MOB00ListRes[cnt].PlantId; // getting plant id
			//alert(plantIdInMaterial);
		
		
		var mob00SrchDataPlant = {"DESC" : plantGroupDescription ,
								  "ID" : plantIdInMaterial
			            };

		mob00DataGrp.push(mob00SrchDataPlant);
		
	}
		
		}
	
	if ( g_MOB00Init == "PR")
	{
    var cnt = 0;
	for(cnt ; cnt<aListLength; cnt++) {
	
		var PrinterName = MOB00ListRes[cnt].PrinterName;
	    var PrinterType = MOB00ListRes[cnt].PrinterType; // getting plant id
		//alert(plantIdInMaterial);
	
	
	var mob00SrchDataPlant = {"DESC" : PrinterName ,
							  "ID" : PrinterType
		            };

	mob00DataGrp.push(mob00SrchDataPlant);
	
}
	
	}
	
	if ( g_MOB00Init == "LO")
	{

	    var cnt = 0;
		for(cnt ; cnt<aListLength; cnt++) {
		
			var StorageLocationId = MOB00ListRes[cnt].StorageLocationId;
		    var StorageLocationDesc = MOB00ListRes[cnt].StorageLocationDesc; // getting plant id
			//alert(plantIdInMaterial);
		
		
		var mob00SrchDataPlant = {"DESC" : StorageLocationDesc ,
								  "ID" : StorageLocationId
			            };

		mob00DataGrp.push(mob00SrchDataPlant);
		
	}
		
		
	}
	
	if ( g_MOB00Init == "WH")
	{


	    var cnt = 0;
		for(cnt ; cnt<aListLength; cnt++) {
		
			var WareHouseNum = MOB00ListRes[cnt].WareHouseNum;
		    var WareHouseDesc = MOB00ListRes[cnt].WareHouseDesc; // getting plant id
			//alert(plantIdInMaterial);
		
		
		var mob00SrchDataPlant = {"DESC" : WareHouseDesc ,
								  "ID" : WareHouseNum
			            };

		mob00DataGrp.push(mob00SrchDataPlant);
		
	}
		
		
	
	
	}
	
	
	var summaryDetailData={"resultsMOB00":mob00DataGrp }	; // main json to bind to table
	
	var listPlantsMOb21 = sap.ui.getCore().byId("Mob00list");
	listPlantsMOb21.removeSelections();
	listPlantsMOb21.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
	
	

}