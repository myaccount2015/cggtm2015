obj = [];

sap.ui.controller("com.cg.gtm.view.Drop2_MOB30.Mob30Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30Master
*/
	onInit: function() {
		 array = [];
	},

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
	

	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB30";
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

			if ( g_runningOnPhone == true)
			{
			  g_MobileNavigationId = "Mob30-frstScreen";
			 mob30Material();
			 
			 var app = sap.ui.getCore().byId("myApp").to("idMOB30Detail");
			}
		 else{
			  g_MobileNavigationId = "Mob30-frstScreen";
				mob30Material();
				
				 var app = sap.ui.getCore().byId("idMOB30SplitApp");  
			        app.to("idMOB30Detailsplit");
			        $("#idMOB30MatDetail").hide();
		 }
	
	}
	else{
		
		//Default Plant:
	  	var defaultPlant = "";
	  	defaultPlant = window.localStorage.getItem("defPlantCode");
	  	
		var plantCode = "";
		if(typeof g_SelectedPlant != 'undefined') {
			plantCode = g_SelectedPlant.description;
		} else {
			plantCode = defaultPlant; //defaultPlantCode & defaultPlantName
		}
		
	
 	   
 
    
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
	
	//var Whouse = sap.ui.getCore().byId("idwarehouse").getText();
	var Whouse = defaultWareHouse;
	/*g_SelectedWhouse30 = sap.ui.getCore
	if(g_SelectedWhouse30 != 'undefined'){
		Whouse = g_SelectedWhouse30.WareHouseNum;
	}
	else{
		Whouse = defWHCode;
	}*/
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB30:: Service: BinSet Start" ;

  var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/BinSet?$filter=WHouse eq '"+Whouse+"' and Plant eq '"+ plantCode  +"' and SourceStorageType eq '"+Storagetype+"' and SourceStorageBin eq '"+Storagebin+"'");
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
        	 debugger;
        	var jsonObj = data.d.results; // Namespace
        	
        	obj = jsonObj;
        	var blank = [];
    		array = blank;
    		for(var i =0;i<obj.length;i++){
    		array.push({
    			material : obj[i].Material,
    			stock: obj[i].StockCategory,
    			qty: obj[i].Quant,
    			//stockcat : obj[i].StockCategoryDesc,
    			desc: obj[i].MaterialDescription,
    			uom: obj[i].UOM,
    			availableStock: obj[i].AvailableStock,
    			actualStock: ''
    		});
    		}
    		
        	if(jsonObj.length>0){
        		$("#idMOB30Detail").show();
        	invDataFinalArray =  {"results" : jsonObj};
        	
        	 
         webmodel = new sap.ui.model.json.JSONModel(invDataFinalArray);
         oList.setModel(webmodel);
         if ( g_runningOnPhone == true)
        	 {
        	   g_MobileNavigationId = "Mob30-frstScreen";
        	 var app = sap.ui.getCore().byId("myApp").to("idMOB30Detail");
        	 }
         else{
        	  var app = sap.ui.getCore().byId("idMOB30SplitApp");  
   	        app.toDetail("idMOB30Detailsplit");
   	     $("#idMOB30MatDetail").hide();
   	     sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
 		
 		sap.ui.getCore().byId("Mob30Move").setVisible(false);
         }
       
	      // $("#idMOB30MatDetail").hide();
         
         }
        	else{
        		
        		sap.m.MessageBox.show(
						"No details available for given Storage Bin",
				sap.m.MessageBox.Icon.ERROR,"Error");	
        		 if ( g_runningOnPhone == true){
        			 var app = sap.ui.getCore().byId("myApp").to("idMOB30master");
        		 }
        		 else{
        			 var app = sap.ui.getCore().byId("idMOB30SplitApp");  
      	        	 app.toMaster("idMOB30master");
      	        	 app.toDetail("idMOB30Blank");
        		 }
        		
        		
        	}
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
						sap.m.MessageBox.show(e.message+ " " +" "+" ",
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
 				 	
						 if ( g_runningOnPhone == true)
		            	 {
							   g_MobileNavigationId = "Mob30-frstScreen";
		            	 var app = sap.ui.getCore().byId("myApp").to("idMOB30Detail");
		            	 }
		             else{
		            	 
						 var app = sap.ui.getCore().byId("idMOB30SplitApp");  
      	        	 app.toMaster("idMOB30master");
      	        	 app.toDetail("idMOB30Blank");
		             }
						
 						closeSplashScreen();
 						
 						
   	         } });

		
	}
		
}

});
function callStoragetype(jsontype) {

openSplashScreen();// Open splash screen

var jsontype = null;
var jsonbin = null;

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
//var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StoragetypeList?WHouse='NP1'");

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
    	 debugger;
    	var jsonObj = data.d.results; // Namespace
    	
    	var arrayEm = [];
		var SelectEmpty = {
        		"Storagetype" : "000ADummyDataData",
        		"StoragetypeDesc":"-Select Storage Type-"
        };
		arrayEm.push(SelectEmpty);
		for( var i = 0 ; i< jsonObj.length ; i++)
		{
			 SelectEmpty = {
        		"Storagetype" : jsonObj[i].Storagetype,
        		"StoragetypeDesc":jsonObj[i].StoragetypeDesc
        };
			arrayEm.push(SelectEmpty);
		}
        
    	
    	var jsonStoretype = {"results":arrayEm};
    	
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
    	 sap.m.MessageBox.show (a ,
                 sap.m.MessageBox.Icon.ERROR,
                        "Error"
                 );
    	 closeSplashScreen();
     }
 
 });

}
/*var oJSONStorage = jsontype;
var StorageType = sap.ui.getCore().byId("idStorageType");
StorageType.setModel(oJSONStorage);*/
}
function callStoragebin(key) {
openSplashScreen();// Open splash screen

var jsonbin = null;


var demo = sap.ui.getCore().byId("demoswitch");  
if (demo.getState() == true) {
	jsonbin = mob30StorageBin();  //Mocking JSON Data
	
	
	
	closeSplashScreen();
	

}
else{
//var Warehouse = "";
//warehouse = sap.ui.getCore().byId("idwarehouse").getText();
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
  //var type = sap.ui.getCore().byId("idStorageType");
	//Storagetype = type.mProperties.selectedKey;
	
var defaultWareHouse = "";
defaultWareHouse = window.localStorage.getItem("defWHCode");
//Service Start Time
var logInfo = getTimeStamp() +"MOB30:: Service: StoragebinList Start" ;

var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StoragebinList?WHouse='"+defaultWareHouse+"'&StorageType='"+key+"'");
if(url1 == "Fail")
{
return false;
}
//----------/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StoragebinList?WHouse='NP1'&StorageType='KD3'
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
    	
    	oJSONType.setSizeLimit(100000000000);
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
    	 sap.m.MessageBox.show (a ,
                 sap.m.MessageBox.Icon.ERROR,
                        "Error"
                 );
    	 closeSplashScreen();
     }
 
 });
}
var oJSONStorage = jsonbin;
var StorageType = sap.ui.getCore().byId("idStoragebin");
StorageType.setModel(oJSONStorage);
}
