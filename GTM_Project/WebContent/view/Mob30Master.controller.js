sap.ui.controller("com.cg.gtm.view.Mob30Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob30Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob30Master
*/
	onAfterRendering: function() {
		var jsontype = null;
		var jsonbin = null;
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		if (demo.getState() == true) {
			jsontype = mob30StorageType(); //Mocking JSON Data
			jsonbin = mob30StorageBin();  //Mocking JSON Data
			
			
			var oJSONStorage = jsontype;
			var StorageType = sap.ui.getCore().byId("idStorageType");
			StorageType.setModel(oJSONStorage);
			
			var oJSONStorage = jsonbin;
			var StorageType = sap.ui.getCore().byId("idStoragebin");
			StorageType.setModel(oJSONStorage);
			
		}
		else{
			jsontype = mob30StorageType(); //Integrate service
			jsonbin = mob30StorageBin();
			
			/*Setting Value for From & To Storage Location - Start */
			callStoragetype(jsontype);
			callStoragebin(jsonbin);
			/*Setting Value for From & To Storage Location - End */
		}
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob30Master
*/
//	onExit: function() {
//
//	}
	Mob30MatItem : function(){

		var demo = sap.ui.getCore().byId("demoswitch");  
		if (demo.getState() == true) {
			mob30Material();
		 var app = sap.ui.getCore().byId("idMOB30SplitApp");  
	        app.to("idMOB30Detailsplit");
	        $("#idMOB30MatDetail").hide();
		}
		var plantCode = "";
		if(typeof g_SelectedPlant != 'undefined') {
			plantCode = g_SelectedPlant.description;
		} else {
			plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
		}
		
		//Default Plant:
	  	var defaultPlant = "";
	  	defaultPlant = window.localStorage.getItem("defPlantCode");
     	   
     	   openSplashScreen();//splash screen 
 
    // var type = sap.ui.getCore().byId("idStorageType").get();
    // var bin = sap.ui.getCore().byId("idStoragebin").getValue();
     	   
     	  var type = sap.ui.getCore().byId("idStorageType");
     		Storagetype = type.mProperties.selectedKey;
     		
     		var bin = sap.ui.getCore().byId("idStoragebin");
     		Storagebin = bin.mProperties.selectedKey;
     	//	alert(Storagebin);
      var webmodel;
      
    //Default WareHouse:
  	var defaultWareHouse = "";
  	defaultWareHouse = window.localStorage.getItem("defWHCode");
  	
  //Service Start Time
  	var logInfo = getTimeStamp() +"MOB30:: Service: BinSet Start" ;

      var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/BinSet?$filter=WHouse eq '"+defaultWareHouse+"' and Plant eq '"+ defaultPlant  +"' and SourceStorageType eq '"+Storagetype+"' and SourceStorageBin eq '"+Storagebin+"'");
      if(serviceURL == "Fail")
		 {
		 return false;
		 }
     // var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/OrderDetail?OrderNo='" +get+ "'&$format=json");
 	 var oModel = new sap.ui.model.json.JSONModel();
      
      var aData = jQuery.ajax({   
		     url : serviceURL,
		     
		     type: "GET",

	         //jsonpCallback : 'getJSON',

	         contentType : "application/json",

	         dataType : 'json',
	         
	         //data : "",

	         success : function(data, textStatus, jqXHR) {
	        	var jsonObj = data.d.results; // Namespace
	        	
	        	
	        	invDataFinalArray =  {"results" : jsonObj};
	        	
	        	 
             webmodel = new sap.ui.model.json.JSONModel(invDataFinalArray);
             oList.setModel(webmodel);
             
             closeSplashScreen();
             
             
             
             if( g_isDebug == true)
             {
             //Service End Time
             var logInfo1 = getTimeStamp() +"MOB30:: Service: BinSet Finish" ;
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
 			             var logInfo1 = getTimeStamp() +"MOB30:: Service: BinSet Failed no network" ;
 			             //Log file Service Start and End Time
 			             var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
 			             logFileUpdate(g_ServiceStartEndTime);
 			             }
 						 
 						 
 						}
 						
 						
 	      	        	 
 	      	        	 
 						closeSplashScreen();
 						
 						
   	         }
      });
      
	
			var app = sap.ui.getCore().byId("idMOB30SplitApp");  
	        app.to("idMOB30Detailsplit");
		}
	
});
function callStoragetype(jsontype) {
	openSplashScreen();// Open splash screen
	
	var jsontype = null;

	
	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true) {
		jsontype = mob30StorageType(); //Mocking JSON Data
		
		
		
		closeSplashScreen();
		
	
	}
	else{
	var Warehouse = "";
	warehouse = sap.ui.getCore().byId("idwarehouse").getText();
	//alert("Warehouse"+warehouse);
	/*if(typeof g_SelectedPlant != 'undefined') {
		plantCode = g_SelectedPlant.description;
	} else {
		plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
	}*/
	//Default WareHouse:
  	var defaultWareHouse = "";
  	defaultWareHouse = window.localStorage.getItem("defWHCode");
  	
  //Service Start Time
  	var logInfo = getTimeStamp() +"MOB30:: Service: StoragetypeList Start" ;

	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StoragetypeList?WHouse='"+defaultWareHouse+"'");
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
        	
        	var jsonStoretype = {"results":jsonObj};
        	
        	var oJSONType = new sap.ui.model.json.JSONModel(jsonStoretype);
    		var fromStorage = sap.ui.getCore().byId("idStorageType");
    		fromStorage.setModel(oJSONType);
    		
    	
    		
    		closeSplashScreen();
    		
    		

    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB30:: Service: StoragetypeList Finish" ;
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
	var oJSONStorage = jsontype;
	var StorageType = sap.ui.getCore().byId("idStorageType");
	StorageType.setModel(oJSONStorage);
}
function callStoragebin(jsonbin) {
	openSplashScreen();// Open splash screen
	
	var jsonbin = null;

	
	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true) {
		jsonbin = mob30StorageBin();  //Mocking JSON Data
		
		
		
		closeSplashScreen();
		
	
	}
	else{
	var Warehouse = "";
	warehouse = sap.ui.getCore().byId("idwarehouse").getText();
	//alert("Warehouse"+warehouse);
	
	/*var type = sap.ui.getCore().byId("idStorageType");
	Storagetype = idStorageType.mProperties.selectedKey;
	alert(Storagetype);*/
	/*if(typeof g_SelectedPlant != 'undefined') {
		plantCode = g_SelectedPlant.description;
	} else {
		plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
	}*/
	//Default WareHouse:
  	var defaultWareHouse = "";
  	defaultWareHouse = window.localStorage.getItem("defWHCode");
  	
  //Service Start Time
  	var logInfo = getTimeStamp() +"MOB30:: Service: StoragebinList Start" ;

  	
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StoragebinList?WHouse='"+defaultWareHouse+"'&StorageType='001'");
	

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
        	
        	var jsonStoretype = {"results":jsonObj};
        	
        	var oJSONType = new sap.ui.model.json.JSONModel(jsonStoretype);
    		var fromStorage = sap.ui.getCore().byId("idStoragebin");
    		fromStorage.setModel(oJSONType);
    		
    	
    		
    		closeSplashScreen();
    		
    		
    		

    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB30:: Service: StoragebinList Finish" ;
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
	var oJSONStorage = jsonbin;
	var StorageType = sap.ui.getCore().byId("idStoragebin");
	StorageType.setModel(oJSONStorage);
}
