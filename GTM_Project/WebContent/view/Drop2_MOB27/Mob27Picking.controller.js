sap.ui.controller("com.cg.gtm.view.Drop2_MOB27.Mob27Picking", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob27Picking
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob27Picking
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob27Picking
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob27Picking
*/
//	onExit: function() {
//
//	}

	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB27";
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
	pickByQueue : function(oEvents)
	{
		
		
		
		
		if(g_runningOnPhone == true)
			{
			g_MobileNavigationId = "Mob27-SecScr-Mas";
			sap.ui.getCore().byId("myApp").to("idMob27SecMas");
			}
		else
			{
			sap.ui.getCore().byId("idMOB27SplitApp").toMaster("idMob27SecMas");
			}
		
		
		
		sap.ui.getCore().byId("Mob27-Mas-lbl-Que").setText("Queue");
		sap.ui.getCore().byId("Mob27-Mas-Input").setVisible(false);
		sap.ui.getCore().byId("Mob27-Mas-ComboBox").setVisible(true);
		
		sap.ui.getCore().byId("Mob27-SecScr-Mas").setTitle("Pick by Queue");
		
		//Calling User Assigned Service
		Call_PickByQueue_AssignedUserService();
		
		
	},

pickByOrder : function(oEvents)
{
	
	
	
	
	sap.ui.getCore().byId("Mob27-Mas-Input").setValue("");
	var defaultWareHouse = "";
	defaultWareHouse = window.localStorage.getItem("defWHCode");
	var defaultPlant =  window.localStorage.getItem("defPlantCode");
	//sap.ui.getCore().byId("Mob27-Mas-txt-WorkHouse").setText(defaultWareHouse);
	//sap.ui.getCore().byId("Mob27-Mas-txt-palnt").setText(defaultPlant);
	
	
	
	if(g_runningOnPhone == true)
	{
		g_MobileNavigationId = "Mob27-SecScr-Mas";
	sap.ui.getCore().byId("myApp").to("idMob27SecMas");
	}
else
	{
	sap.ui.getCore().byId("idMOB27SplitApp").toMaster("idMob27SecMas");
	}
	
	
	
	sap.ui.getCore().byId("Mob27-Mas-lbl-Que").setText("Order");
	sap.ui.getCore().byId("Mob27-Mas-ComboBox").setVisible(false);
	sap.ui.getCore().byId("Mob27-Mas-Input").setVisible(true);
	sap.ui.getCore().byId("Mob27-SecScr-Mas").setTitle("Pick by Order");
}
});

function Call_PickByQueue_AssignedUserService()
{

	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true)
		
		{
		// Create JSON data model
		
		
		var dummyData = {
				 "results" : [
				              {
				                "__metadata" : {
				                  "id" : "http://hs1gd1comb.rm.hitachi-eu.com:8100/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/PickingQueueSet('NP1')",
				                  "uri" : "http://hs1gd1comb.rm.hitachi-eu.com:8100/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/PickingQueueSet('NP1')",
				                  "type" : "ZGW_IM_WM_MOBILEAPPS_SRV.PickingQueue"
				                },
				                "WHouse" : "NP1",
				                "QueueId" : "PICK_FLR",
				                "QueueText" : "Pick from St Type FLR"
				              }
				            ]
				          }
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(dummyData);
		
		
		sap.ui.getCore().byId("Mob27-Mas-ComboBox").setModel(oModel);
		
		
		}
	
	else
		{
		openSplashScreen();
		 //Default WareHouse:
		var defaultWareHouse = "";
		defaultWareHouse = window.localStorage.getItem("defWHCode");
		var defaultPlant =  window.localStorage.getItem("defPlantCode");
	//	sap.ui.getCore().byId("Mob27-Mas-txt-WorkHouse").setText(defaultWareHouse);
	//	sap.ui.getCore().byId("Mob27-Mas-txt-palnt").setText(defaultPlant);
		
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB27:: Service: QueueList Start" ;

		
		
		 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/QueueList?WHouse='"+defaultWareHouse+"'&Flag='U'&User='"+myID+"'&$format=json");
			
		 if(serviceURL == "Fail")
		 {
		 return false;
		 }
		 
		 
		 //var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
				var aData = jQuery.ajax({   
				     url : serviceURL,
				     type: "GET",
			         contentType : "application/json",
			         dataType : 'json',
			         success : function(data, textStatus, jqXHR) {
			        	 var getResFromJson = data.d;
			        	// Create JSON data model
			        	 if( getResFromJson.results.length != 0)
			        		 {
			        		 var oModel = new sap.ui.model.json.JSONModel();
					     		oModel.setData(getResFromJson);
					     		sap.ui.getCore().byId("Mob27-Mas-ComboBox").setModel(oModel);
					     		 closeSplashScreen();
					     		 

					     		if( g_isDebug == true)
					     		{
					     		//Service End Time
					     		var logInfo1 = getTimeStamp() +"MOB27:: Service: QueueList Finish" ;
					     		//Log file Service Start and End Time
					     		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					     		logFileUpdate(g_ServiceStartEndTime);
					     		}
			        		 }
			        	 
			        	 else
			        		 {
			        		 closeSplashScreen();
			        		 Call_PickByQueue_AssignedWareHouseService();
			        		 
			        		 }
			     		
			        	 
			        	 
			         },
				 error: function(XMLHttpRequest, textStatus, errorThrown) {
					 try{
	    					var data = JSON.parse(XMLHttpRequest.responseText);
	    					for(var event in data){
	    					var dataCopy = data[event];	
	    						try{
	    						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
	    						sap.m.MessageBox.show(
	    						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
	    						catch(e)
	    						{
	    						sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
	    						sap.m.MessageBox.Icon.ERROR,"Error");break;
	    						}}}catch(e)
	    						{sap.m.MessageBox.show(
	    								"Service Not Available - Please contact system administrator" + " " +" "+" ",
	    						sap.m.MessageBox.Icon.ERROR,"Error");
	    						
	    						if( g_isDebug == true)
					     		{
					     		//Service End Time
					     		var logInfo1 = getTimeStamp() +"MOB27:: Service: QueueList Failed no network" ;
					     		//Log file Service Start and End Time
					     		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					     		logFileUpdate(g_ServiceStartEndTime);
					     		}
	    						
	    						}
	    						
	    						 closeSplashScreen();
					 
				 }
			
			});
		
		}
	

}



function Call_PickByQueue_AssignedWareHouseService()
{
	openSplashScreen();
	//Default WareHouse:
	var defaultWareHouse = "";
	defaultWareHouse = window.localStorage.getItem("defWHCode");
	var defaultPlant =  window.localStorage.getItem("defPlantCode");
	sap.ui.getCore().byId("Mob27-Mas-txt-WorkHouse").setText(defaultWareHouse);
	sap.ui.getCore().byId("Mob27-Mas-txt-palnt").setText(defaultPlant);
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB27:: Service: QueueList Start" ;

	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/QueueList?WHouse='"+defaultWareHouse+"'&Flag='W'&User=''&$format=json");
	 if(serviceURL == "Fail")
	 {
	 return false;
	 }	
	  //var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var aData = jQuery.ajax({   
			     url : serviceURL,
			     type: "GET",
		         contentType : "application/json",
		         dataType : 'json',
		         success : function(data, textStatus, jqXHR) {
		        	 var getResFromJson = data.d;
		        	// Create JSON data model
		        
		        		 var oModel = new sap.ui.model.json.JSONModel();
				     		oModel.setData(getResFromJson);
				     		sap.ui.getCore().byId("Mob27-Mas-ComboBox").setModel(oModel);
		        		
				     		 closeSplashScreen();
				     		 
				     		if( g_isDebug == true)
				     		{
				     		//Service End Time
				     		var logInfo1 = getTimeStamp() +"MOB27:: Service: QueueList Finish" ;
				     		//Log file Service Start and End Time
				     		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				     		logFileUpdate(g_ServiceStartEndTime);
				     		}
				     		
				     		
		        	 
		         },
			 error: function(XMLHttpRequest, textStatus, errorThrown) {
				 try{
 					var data = JSON.parse(XMLHttpRequest.responseText);
 					for(var event in data){
 					var dataCopy = data[event];	
 						try{
 						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
 						sap.m.MessageBox.show(
 						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
 						catch(e)
 						{
 						sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
 						sap.m.MessageBox.Icon.ERROR,"Error");break;
 						}}}catch(e)
 						{sap.m.MessageBox.show(
 								"Service Not Available - Please contact system administrator" + " " +" "+" ",
 						sap.m.MessageBox.Icon.ERROR,"Error");
 						
 						if( g_isDebug == true)
			     		{
			     		//Service End Time
			     		var logInfo1 = getTimeStamp() +"MOB27:: Service: QueueList Failed no network" ;
			     		//Log file Service Start and End Time
			     		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			     		logFileUpdate(g_ServiceStartEndTime);
			     		}
 						
 						
 						}
 						
 						 closeSplashScreen();
				 
			 }
		
		});
	
	
	
}