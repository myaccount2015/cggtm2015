sap.ui.controller("com.cg.gtm.view.MOB17_MasterActionPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB17_MasterActionPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB17_MasterActionPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB17_MasterActionPage
*/
	onAfterRendering: function() {
		var inputPlant = sap.ui.getCore().byId("inputPlantMat1");
		if(typeof g_SelectedPlant != 'undefined') {
			inputPlant.setValue(g_SelectedPlant.title);
		} else {
			inputPlant.setValue(defaultPlantName); //defaultPlantCode & defaultPlantName
		}

		var jsonFromStore = null;
		var jsonToStore = null;
		
		var demo = sap.ui.getCore().byId("demoswitch");  
	
		if (demo.getState() == true) {
			jsonFromStore = mob17FromStorage(); //Mocking JSON Data
			jsonToStore = mob17ToStorage(); //Mocking JSON Data
			
			var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
			var fromStorage = sap.ui.getCore().byId("idFromStorage");
			fromStorage.setModel(oJSONFromStorage);
			
			var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
			var toStorage = sap.ui.getCore().byId("idToStorage");
			toStorage.setModel(oJSONToStorage);
			
		}else {
			
			//jsonFromStore = mob17FromStorage(); //TODO : Integrate Service
			//jsonToStore = mob17ToStorage(); //TODO : Integrate Service
			
			/*Setting Value for From & To Storage Location - Start */
			//callStorageLocation1(jsonFromStore);
			/*Setting Value for From & To Storage Location - End */
		}
		
		/*
		 * Calling Moment Type - Start
		 */
		callMomentTypeHelp();
		/*
		 * Calling Moment Type - End
		 */
		
		if (demo.getState() == true) {
			closeSplashScreen();
		}
	},
	
	/*
	 * This method is called when the Movement type is changed.
	 */
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB17";
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
	
	onActionChange: function(oEvent) {
		var selectedId = oEvent.mParameters.selectedItem.sId;
		var selectedComp = sap.ui.getCore().byId(selectedId);
		
		var selectedText = selectedComp.mProperties.text;
		sap.ui.getCore().byId("lblMovType").setText(selectedText);
		
		var actionKey = selectedComp.mProperties.key;
		if(actionKey == "311") {
			var lblFromStorage = sap.ui.getCore().byId("lblFromStorage");
			lblFromStorage.setText("From Storage Location");
			
			var lblToStorage = sap.ui.getCore().byId("lblToStorage");
			var idToStorage = sap.ui.getCore().byId("idToStorage");
			lblToStorage.setVisible(true);
			idToStorage.setVisible(true);
		}else {
			var lblFromStorage = sap.ui.getCore().byId("lblFromStorage");
			lblFromStorage.setText("Storage Location");
			
			var lblToStorage = sap.ui.getCore().byId("lblToStorage");
			var idToStorage = sap.ui.getCore().byId("idToStorage");
			lblToStorage.setVisible(false);
			idToStorage.setVisible(false);
			
			//idToStorage.setText("");
		}
	}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB17_MasterActionPage
*/
//	onExit: function() {
//
//	}

});

/*
 * This method is invoked when Project Radio Option is selected from Master Page.
 * This method calling WBSElementList Search Help to fetch list of Project Special Stock available.
 */
function callProjSearchHelp() {
	openSplashScreen();//splash screen
	
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch");  
	
	if (demo.getState() == true) {
		jsonCustProj = mob17Proj();
	} else {
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB17:: Service: WBSElementList Start" ;

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
	        	
	        	var jsonCustProj = {"MOB17CustProj": arrWBS};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	     		
	        	
	        	
	        	
	        	
	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB17:: Service: WBSElementList Finish" ;
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
	var selectCustProj = sap.ui.getCore().byId("selectCustProj");
	
	selectCustProj.setModel(oJSONCust);
	/*Setting Value for Proj/Cust - End */
	
	closeSplashScreen();
}

/*
 * This method is invoked when Customer Radio Option is selected from Master Page.
 * This method calling CustomerList Search Help to fetch list of Customer Special Stock available.
 */
function callCustomerSearchHelp() {
	openSplashScreen();//splash screen
	
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch");  
	
	if (demo.getState() == true) {
		jsonCustProj = mob17Cust();
		/*Setting Value for Proj/Cust - Start */
		var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
		var selectCustProj = sap.ui.getCore().byId("selectCustProj");
		
		selectCustProj.setModel(oJSONCust);
		/*Setting Value for Proj/Cust - End */
		
		closeSplashScreen();
	} else {
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB17:: Service: CustomerList Start" ;

		
		
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
	        	
	        	var jsonCustProj = {"MOB17CustProj":arrCust};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	        	
	        	
	        	
	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB17:: Service: CustomerList Finish" ;
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
function clearSpecialStock() {
	var jsonCustProj = null;
		
	/*Setting Value for Proj/Cust - Start */
	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	var selectCustProj = sap.ui.getCore().byId("selectCustProj");
	
	selectCustProj.setModel(oJSONCust);
	/*Setting Value for Proj/Cust - End */
}

/*
 * This method will bind hardcoded Movement type to drop down.
 */
function callMomentTypeHelp() {
	var jsonMomType = null;
	var demo = sap.ui.getCore().byId("demoswitch");
	if (demo.getState() == true) {
		jsonMomType = mob17ActionType();
		var oJSONActType = new sap.ui.model.json.JSONModel(jsonMomType);
		var selActionType = sap.ui.getCore().byId("selActionType");
		selActionType.setModel(oJSONActType);
		
		//closeSplashScreen();
		
	} else { // We need to hardcode the values, no need to call service
		jsonMomType = mob17ActionType();
		var oJSONActType = new sap.ui.model.json.JSONModel(jsonMomType);
		var selActionType = sap.ui.getCore().byId("selActionType");
		selActionType.setModel(oJSONActType);
		
		//closeSplashScreen();
	}
}

/*
 * This method is calling StorageLocList Search Help and fetch all Storage Location.
 */
function callStorageLocation1(jsonStoLoc) {
	openSplashScreen();// Open splash screen
	debugger;
	var jsonFromStore = null;
	var jsonToStore = null;
	
	var demo = sap.ui.getCore().byId("demoswitch");  

	if (demo.getState() == true) {
		var jsonFromStore = mob17FromStorage(); //Mocking JSON Data
		var jsonToStore = mob17ToStorage(); //Mocking JSON Data
		
		var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
		var fromStorage = sap.ui.getCore().byId("idFromStorage");
		fromStorage.setModel(oJSONFromStorage);
		
		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
		var toStorage = sap.ui.getCore().byId("idToStorage");
		toStorage.setModel(oJSONToStorage);
		
		closeSplashScreen();
		
		return;
	}
	
	var plantCode = "";
	if(typeof g_SelectedPlant != 'undefined') {
		plantCode = g_SelectedPlant.description;
	} else {
		plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
	}
	
	if(typeof plantCode != 'undefined' && plantCode.trim().length==0) {
		plantCode = g_inputPlantCode;
	} else if(plantCode == "") {
		plantCode = g_inputPlantCode;
	}
	
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB17:: Service: StorageLocList Start" ;

	
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StorageLocList?PlantId='" + plantCode + "'");
	
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
        	
        	var jsonFromStore = {"MOB17FromStorage":jsonObj};
        	
        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
    		var fromStorage = sap.ui.getCore().byId("idFromStorage");
    		fromStorage.setModel(oJSONFromStorage);
    		
    		var jsonToStore = {"MOB17ToStorage":jsonObj};
    		
    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
    		var toStorage = sap.ui.getCore().byId("idToStorage");
    		toStorage.setModel(oJSONToStorage);
    		
    		closeSplashScreen();
    		
    		

    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB17:: Service: StorageLocList Finish" ;
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
