sap.ui.controller("com.cg.gtm.view.Mob18WBSMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18WBSMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18WBSMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18WBSMaster
*/
	onAfterRendering: function() {
		var jsonCustProj = null;
		var jsonStore = null;
		var inputPlant = sap.ui.getCore().byId("inputPlant_WBS");
		if(typeof g_Mob18SelectedPlant != 'undefined') {
			inputPlant.setValue(g_Mob18SelectedPlant.title);
		} else {
			inputPlant.setValue(defaultPlantName); //defaultPlantCode & defaultPlantName
		}
		
		callStorageLocation_wbs();
		 callMomentType_wbs();
		var demo = sap.ui.getCore().byId("demoswitch");  
		
		if (demo.getState() == true) {
			
			
			
			jsonCustProj = mob18Proj();
			jsonStore = mob18storage();
		}else {
			
			
			jsonCustProj = mob18Proj(); //TODO : Integrate Service
			jsonStore = mob18storage();
		
		}
		
		/*Setting Value for QI/Blocked - Start */
		var oJSONCust = jsonCustProj;
		var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS");
		
		selectCustProj.setModel(oJSONCust);
		/*Setting Value for QI/Blocked - End */
		
		/*
		Setting Value for From & To Storage Location - Start 
		
		var oJSONFromStorage = jsonStore;
		var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
		fromStorage.setModel(oJSONFromStorage);
		Setting Value for From & To Storage Location - End */
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18WBSMaster
*/
//	onExit: function() {
//
//	}
	check : function(){
		var valError = 0;
		if(  null == sap.ui.getCore().byId("inputWBSno").getValue().trim() || sap.ui.getCore().byId("inputWBSno").getValue().trim() == "")
  	  {
			sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.Error);
			   valError = 1;
  	  }
	 
	 else
		 {
		 
		 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
		/* showidMob18first_Scrap();
 		var app = sap.ui.getCore().byId("idMOB18SplitApp");  
    	 	app.toDetail("idMOB18SplitScrap");
    	 hideidMob18second_Scrap();*/
		 g_backNavMOB18 = "Mob18_matback2";
	     var demo = sap.ui.getCore().getElementById("demoswitch").getState();
         
         if (demo)
  {      
       	  if(g_runningOnPhone == true)
  			{
       		  var app = sap.ui.getCore().byId("myApp");
            	 app.to("idMOB18Matmas");
  			}
       	  else{
       		var app = sap.ui.getCore().byId("idMOB18SplitApp");  
       	  app.toMaster("idMOB18Matmas");
       	  }
   
	 }else{
		//Movement Type
		 
		 var selActionType = sap.ui.getCore().byId("MvtType_wbs");
		 //var selActionType = sap.ui.getCore().byId("MvtType_scrap");

		 	var a_mov = selActionType.mProperties.selectedItemId
		var select = a_mov.substring(a_mov.lastIndexOf("-")+1)
		var index= parseInt(select);
	     var oModel = selActionType.getModel();
		var lenMaterialLst = oModel.oData.results.length;
		for(i=0;i<lenMaterialLst;i++) {
		if(i==index) {
		 var text = selActionType.mAggregations.items[i].mProperties.text;
			sap.ui.getCore().byId("inputMove_Scrap").setText(text);
		}
		}
		if(index==0){
			 sap.m.MessageBox.show("Please select Movement Type",
						 sap.m.MessageBox.Icon.ERROR,
							"Error"
						 );
		}
		//var	movType = selActionType.mProperties.text;
		//	sap.ui.getCore().byId("inputMove_Scrap").setText(movType);
		
		//Storage Location
			var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
			var a_loc = fromStorage.mProperties.selectedItemId
			var select_loc = a_loc.substring(a_loc.lastIndexOf("-")+1)
			var index= parseInt(select_loc);
		     var oModel = fromStorage.getModel();
			var lenMaterialLst = oModel.oData.results.length;
			for(i=0;i<lenMaterialLst;i++) {
			if(i==index) {
			 var text = fromStorage.mAggregations.items[i].mProperties.text;
				sap.ui.getCore().byId("inputLoc_Scrap").setText(text);
			}
			}
		//	var StorageLoc = fromStorage.mProperties.text;
		//	sap.ui.getCore().byId("inputLoc_Scrap").setText(StorageLoc);
			
			//Reason Code
			var reason = sap.ui.getCore().byId("ResType_wbs");
			var a_loc = reason.mProperties.selectedItemId
			var select_loc = a_loc.substring(a_loc.lastIndexOf("-")+1)
			var index= parseInt(select_loc);
		     var oModel = reason.getModel();
			var lenMaterialLst = oModel.oData.results.length;
			for(i=0;i<lenMaterialLst;i++) {
			if(i==index) {
			 var text = reason.mAggregations.items[i].mProperties.text;
				sap.ui.getCore().byId("inputreason_Scrap").setText(text);
			}
			}
		//	var reasonmvt = reason.mProperties.text;
			//sap.ui.getCore().byId("inputreason_Scrap").setText(reasonmvt);
			
		 g_MobileNavigationId = "Mob18_Materialsearch";
		 if(g_runningOnPhone == true)
 		{
			
     		  var app = sap.ui.getCore().byId("myApp");
          	 app.to("idMOB18Matmas");
   			}
		 else{
			   g_navbutton = "backMatsearch";
        	 //alert("inside WBS");
        		var app = sap.ui.getCore().byId("idMOB18SplitApp");  
        	  app.toMaster("idMOB18Matmas");
        	  }
	 }
        
     	
     	
		 }
		 
		 if (  valError ==  1 )
	    	{
			 sap.m.MessageBox.show("Please provide data in mandatory field",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
	    	  
	    	  }
	}
});
function callProjSearchHelp_WBS(){
	//openSplashScreen();//splash screen
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch");  
	
	if (demo.getState() == true) {
		jsonCustProj = mob18Proj();
	} else {
		
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB00:: Service: WBSElementList Start" ;

		
		
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
	        	
	      /*  	var arrWBS = [];
      	 	
      	 	for(var i=0;i<jsonObj.length;i++) {
      	 		var ProjNo_WBS = jsonObj[i].WBSElementNo;
      	 		var ProjName_WBS = jsonObj[i].WBSElementDesc;
      	 		var objWBS = {"key": ProjNo_WBS, "detail": ProjName_WBS};
      	 		arrWBS.push(objWBS);
      	 	}*/
	        	
	        	var jsonCustProj = {"MOB18CustProj": jsonObj};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	        	
	        	

	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB18:: Service: WBSElementList Finish" ;
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
	var oJSONCust = jsonCustProj;
	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS");
	
	selectCustProj.setModel(oJSONCust);
	
	selectCustProj.setVisible(true);
	var lblCustProj = sap.ui.getCore().byId("idCustproj");
	lblCustProj.setVisible(true);
	var selectCustProj = sap.ui.getCore().byId("inputcustomer_wbs");
	selectCustProj.setVisible(false);
	/*Setting Value for Proj/Cust - End */	
}
function callCustomerSearchHelp_WBS(){
	//openSplashScreen();//splash screen
	
	var jsonCustProj = null;
	var demo = sap.ui.getCore().byId("demoswitch");  
	
	if (demo.getState() == true) {
		jsonCustProj = mob18Cust();
	} else {
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB18:: Service: CustomerList Start" ;

		
		
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
	        	
	        /*	var arrCust = [];
     	 	
     	 	for(var i=0;i<jsonObj.length;i++) {
     	 		var custNo_WBs = jsonObj[i].CustomerNo;
     	 		var custName_WBS = jsonObj[i].CustomerName;
     	 		var objCust = {"key": custNo_WBs, "detail": custName_WBS};
     	 		arrCust.push(objCust);
     	 	}*/
	        	
	        	var jsonCustProj = {"MOB18CustProj":jsonObj};
	        	
	        	/*Setting Value for Proj/Cust - Start */
	        	var oJSONCust = new sap.ui.model.json.JSONModel(jsonCustProj);
	        	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS2");
	        	
	        	selectCustProj.setModel(oJSONCust);
	        	/*Setting Value for Proj/Cust - End */
	        	
	        	closeSplashScreen();
	        	
	        	
	        	
	        	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"MOB18:: Service: CustomerList Finish" ;
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
	var oJSONCust = jsonCustProj;
	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS2");
	
	selectCustProj.setModel(oJSONCust);
	var lblCustProj = sap.ui.getCore().byId("idCustproj");
	lblCustProj.setVisible(true);
	selectCustProj.setVisible(true);
	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS");
	selectCustProj.setVisible(false);
	/*Setting Value for Proj/Cust - End */
	};
	
	function callStorageLocation_wbs(jsonStore) {
		var plantCode = "";
		if(typeof g_Mob18SelectedPlant != 'undefined') {
			plantCode = g_Mob18SelectedPlant.description;
		} else {
			plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
		}
		
		if(typeof plantCode != 'undefined' && plantCode.trim().length==0) {
			plantCode = g_inputPlantCode;
		} else if(plantCode == "") {
			plantCode = g_inputPlantCode;
		}
		//Default Plant:
	  	var defaultPlant = "";
	  	defaultPlant = window.localStorage.getItem("defPlantCode");
		var jsonStore = null;
		var demo = sap.ui.getCore().byId("demoswitch"); 
		if (demo.getState() == true) {
			jsonStore = mob18storage();
		}
		else{
			
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB18:: Service: StorageLocList Start" ;

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
	        	
	        	var jsonFromStore = {"results":jsonObj};
	        	
	        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
	    		var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
	    		fromStorage.setModel(oJSONFromStorage);
	    		
	    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
	    		
	    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
	    		var toStorage = sap.ui.getCore().byId("idToStorage");
	    		toStorage.setModel(oJSONToStorage);*/
	    		
	    		if( g_isDebug == true)
	    		{
	    		//Service End Time
	    		var logInfo1 = getTimeStamp() +"MOB18:: Service: StorageLocList Finish" ;
	    		//Log file Service Start and End Time
	    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	    		logFileUpdate(g_ServiceStartEndTime);
	    		}
	    		
	    		
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	         }
		 
		 });
		}
		var oJSONFromStorage = jsonStore;
		var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
		fromStorage.setModel(oJSONFromStorage);
	}
	
	function callMomentType_wbs(){
		var jsonStore = null;
		var demo = sap.ui.getCore().byId("demoswitch"); 
		if (demo.getState() == true) {
			jsonStore = mob18movt();
		}
		else{
			//var plant = sap.ui.getCore().byId("inputPlant");
			// plantcode = plant.getValue();
			// alert(plantcode);
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB18:: Service: MovementTypeList Start" ;

		var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/MovementTypeList?Flag='I'");
		
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
	             		"MovementtypeId" : "000ADummyDataData",
	             		"MovementtypeDesc":"-Select Movement Type-"
	             };
	 			arrayEm.push(SelectEmpty);
	 			for( var i = 0 ; i< jsonObj.length ; i++)
	 			{
	 				 SelectEmpty = {
	             		"MovementtypeId" : jsonObj[i].MovementtypeId,
	             		"MovementtypeDesc":jsonObj[i].MovementtypeDesc
	             };
	 				arrayEm.push(SelectEmpty);
	 			}
	 			
	        	//var jsonObj = data.d.results; // Namespace
	        	
	        	var jsonFromStore = {"results":arrayEm};
	        	
	        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
	    		var fromStorage = sap.ui.getCore().byId("MvtType_wbs");
	    		fromStorage.setModel(oJSONFromStorage);
	    		
	    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
	    		
	    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
	    		var toStorage = sap.ui.getCore().byId("idToStorage");
	    		toStorage.setModel(oJSONToStorage);*/
	    		//closeSplashScreen();
	    		
	    		
	    		
	    		if( g_isDebug == true)
	    		{
	    		//Service End Time
	    		var logInfo1 = getTimeStamp() +"MOB18:: Service: MovementTypeList Finish" ;
	    		//Log file Service Start and End Time
	    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	    		logFileUpdate(g_ServiceStartEndTime);
	    		}
	    		
	    		
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	        	// closeSplashScreen();
	         }
		 
		 });
		}
		var oJSONFromStorage = jsonStore;
		var fromStorage = sap.ui.getCore().byId("MvtType_wbs");
		fromStorage.setModel(oJSONFromStorage);

	}

	function callReasoncode_wbs(key){
		var jsonStore = null;
		var demo = sap.ui.getCore().byId("demoswitch"); 
		if (demo.getState() == true) {
			jsonStore = mob18Res();
		}
		else{
			//var plant = sap.ui.getCore().byId("inputPlant");
			// plantcode = plant.getValue();
			// alert(plantcode);
			
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB18:: Service: ReasonCodeList Start" ;

			
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/ReasonCodeList?MovementType='"+key+"'");
		
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
	        	
	        	var jsonFromStore = {"results":jsonObj};
	        	
	        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
	    		var fromStorage = sap.ui.getCore().byId("ResType_wbs");
	    		fromStorage.setModel(oJSONFromStorage);
	    		
	    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
	    		
	    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
	    		var toStorage = sap.ui.getCore().byId("idToStorage");
	    		toStorage.setModel(oJSONToStorage);*/
	    		//closeSplashScreen();
	    		
	    		
	    		if( g_isDebug == true)
	    		{
	    		//Service End Time
	    		var logInfo1 = getTimeStamp() +"MOB18:: Service: ReasonCodeList Finish" ;
	    		//Log file Service Start and End Time
	    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	    		logFileUpdate(g_ServiceStartEndTime);
	    		}
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	        	// closeSplashScreen();
	         }
		 
		 });
		}
		var oJSONFromStorage = jsonStore;
		var fromStorage = sap.ui.getCore().byId("ResType_wbs");
		fromStorage.setModel(oJSONFromStorage);

	}