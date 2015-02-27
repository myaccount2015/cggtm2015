sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.GridSubMenuIMWM
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.GridSubMenuIMWM
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.GridSubMenuIMWM
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.GridSubMenuIMWM
*/
//	onExit: function() {
//
//	}


	  
	loadMOB35master : function()
	{
		  g_MobileNavigationId = "Mob35-BackNavButton";
		sap.ui.getCore().byId("Mob35ConADDMat").setVisible(false);
		sap.ui.getCore().byId("idEmptyMOB35").setVisible(false);
    	sap.ui.getCore().byId("idNextMOB35").setVisible(false);
    	
		//Default WareHouse:
		var defaultWareHouse = "";
		defaultWareHouse = window.localStorage.getItem("defWHCode");
		sap.ui.getCore().byId("MOB_35_warehouse").setText(defaultWareHouse);
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB35:: Service: WMInventorySet Start" ;
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		var Mob35DataModelIni = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "WMInventorySet?$filter=WHouse eq '"+defaultWareHouse+"'";
		   
		Mob35DataModelIni.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var appM = sap.ui.getCore().byId("myApp"); 
			appM.to("idMob35InitialScreen");
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			var resultArr = result.results;
			var resultArrIni = [];
			var dropDownDataArr = [] ;
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
				 var resultData = {
						 
						 	"Quants" : resultArr[index].Quants,
					        "ItemCountStype" :  resultArr[index].ItemCountStype,
					        "StorageBin" :  resultArr[index].StorageBin,
					        "StorageType" :  resultArr[index].StorageType,
					        "InvDocStatus" :  resultArr[index].InvDocStatus,
					        "InvDocItem" :  resultArr[index].InvDocItem,
					        "WHouse" :  resultArr[index].WHouse,
					        "InvDocument" :  resultArr[index].InvDocument,
				 };
				 
				 window.localStorage.removeItem(resultArr[index].InvDocument); //Clearing Data
				 window.localStorage.removeItem(resultArr[index].InvDocument + "SerLogVal"); //Clearing Data
				 gMOB35AddMatArr = "";
				 
				 resultArrIni.push(resultData);
				 
				 };
				 var  resDataFinalArray =  {"InvListMOB35" : resultArrIni};
				 var oJSONModelMob28MasterList = new sap.ui.model.json.JSONModel(resDataFinalArray);
				 var listMat = sap.ui.getCore().byId("MOB35_STypeList");
					 listMat.setModel(oJSONModelMob28MasterList); 	
					 
					if( g_isDebug == true)
					 {
					 //Service End Time
					 var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Finish" ;
					 //Log file Service Start and End Time
					 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					 logFileUpdate(g_ServiceStartEndTime);
					 }
					 
					 
					window.localStorage.removeItem("Mob35SerialLog"); //Clearing Data	 
					 
					 
		},  function(oError){  
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
				 var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed 401 unauthorised" ;
				 //Log file Service Start and End Time
				 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				 logFileUpdate(g_ServiceStartEndTime);
				 }
				
				
				
				}
			try{
				var data = JSON.parse(oError.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
					//alert(messageFromBackend);
					}
					catch(e)
					{
					//sap.m.MessageBox.show(e.message+ " " +" "+" ",
					//sap.m.MessageBox.Icon.ERROR,"Error");break;
						alert(e.message);
						break;
					}}}
			catch(e)
					{sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					if( g_isDebug == true)
					 {
					 //Service End Time
					 var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed no network" ;
					 //Log file Service Start and End Time
					 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					 logFileUpdate(g_ServiceStartEndTime);
					 }
					
					
					}
			
			//alert(oError.message);
});	
		
	
				
		
	
	
	}  ,
	
	loadMOB28 : function()
	{
		
		sap.ui.getCore().byId("ip_matNumMOB28").setValue("");
		sap.ui.getCore().byId("ip_sto_bin").setValue("");
		//sap.ui.getCore().byId("destroyItems").destroyItems();
		   $("#idMob28MatListPage").hide();
		   $("#idMob28MatDetPage").hide();
	} ,
	
	 setStoTypeDD : function()
	{
		 
		 var movModel = sap.ui.getCore().byId("ddstotypeMOB28").getModel();
	        
	        if ( null != movModel && movModel != undefined)
	        	{
	        	 movModel.destroy();
	        	}
		
	        
	      //Service Start Time
	        var logInfo = getTimeStamp() +"MOB28:: Service: StoragetypeList Start" ;

		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var Mob28StoTypeDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL =  "/StoragetypeList?WHouse='"+window.localStorage.getItem("defWHCode")+"'&$format=json";
			
			
		Mob28StoTypeDataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			var resultArr = result.results;
			var resultArrIni = [];
			 var dropDownDataArr = [] ;
			 var dropDownDataBlank = {  							    
						"text": "--Select--" ,
						"key" : ""						  
									 }; 
				myKey =  resultArr[0].Storagetype;
				dropDownDataArr.push(dropDownDataBlank);	
			 var myKey = "";
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
					var dropDownDataBlank = {  							    
							"text": resultArr[index].StoragetypeDesc ,
							"key" :  resultArr[index].Storagetype						  
										 }; 
					dropDownDataArr.push(dropDownDataBlank);	
					
				 }
					gValStoType =  	dropDownDataArr[0].key;
					myKey =  dropDownDataArr[0].key;	
					var dropDownDataFinal = [];
					dropDownDataFinal = {"itemsStotype" : dropDownDataArr};
				    var oModelJsonList = new sap.ui.model.json.JSONModel();  
				    oModelJsonList.setData(dropDownDataFinal); 
					sap.ui.getCore().byId("ddstotypeMOB28").setModel(oModelJsonList); 
					sap.ui.getCore().byId("ddstotypeMOB28").setSelectedKey(myKey); 
					//sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(false);
					
					//sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
				 
					
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB28:: Service: StoragetypeList Finish" ;
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
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
				
				if( g_isDebug == true)
				{
				//Service End Time
				var logInfo1 = getTimeStamp() +"MOB28:: Service: StoragetypeList Failed 401 unauthorised" ;
				//Log file Service Start and End Time
				var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				logFileUpdate(g_ServiceStartEndTime);
				}
				
				
				
				
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
					var logInfo1 = getTimeStamp() +"MOB28:: Service: StoragetypeList Failed no network" ;
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
					}
			
			//alert(oError.message);
});	
		
	
	
	} ,
	
	 setMovTypeDD  : function()
	{
		
        var movModel = sap.ui.getCore().byId("ddmovtypeMOB28").getModel();
        
        if ( null != movModel && movModel != undefined)
        	{
        	 movModel.destroy();
        	}
      //Service Start Time
        var logInfo = getTimeStamp() +"MOB28:: Service: WMMvttypeList Start" ;

		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");

		if(serviceURL == "Fail")
				 {
				 return false;
				 }
		
		var Mob28MMovTypeDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL =  "/WMMvttypeList?WHouse='NP1'&$format=json";
			
			
		Mob28MMovTypeDataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			var resultArr = result.results;
			var resultArrIni = [];
			 var dropDownDataArr = [] ;
			 var myKey = "";
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
					var dropDownDataBlank = {  							    
							"text": resultArr[index].MovetypeDesc ,
							"key" :  resultArr[index].Movetype						  
										 }; 
					myKey =  resultArr[0].Movetype;
					dropDownDataArr.push(dropDownDataBlank);	
					
				 }
				gValMovType =  resultArr[0].Movetype;
					
					var dropDownDataFinal = [];
					dropDownDataFinal = {"itemsMovtype" : dropDownDataArr};
				    var oModelJsonList = new sap.ui.model.json.JSONModel();  
				    oModelJsonList.setData(dropDownDataFinal); 
					sap.ui.getCore().byId("ddmovtypeMOB28").setModel(oModelJsonList); 	
					sap.ui.getCore().byId("ddmovtypeMOB28").setSelectedKey(myKey); 
					//sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
				
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB28:: Service: WMMvttypeList Finish" ;
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
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
				
				if( g_isDebug == true)
				{
				//Service End Time
				var logInfo1 = getTimeStamp() +"MOB28:: Service: WMMvttypeList Failed 401 unauthorised" ;
				//Log file Service Start and End Time
				var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				logFileUpdate(g_ServiceStartEndTime);
				}
				
				
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
					var logInfo1 = getTimeStamp() +"MOB28:: Service: WMMvttypeList Failed no network";
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
					}
			
			//alert(oError.message);
});	
		
	
	}


});
function showidMob18first() {
	$("#idMOB18Item").show();
	$("#idMOB18SplitScreen").show();
	
}
function hideidMob18first(){
	$("#idMOB18Item").hide();
	$("#idMOB18SplitScreen").hide();
}

function hideidMob18second() {
	$("#idMob18Orderdetpage").hide();
	
}

function showidMob18second() {
	$("#idMob18Orderdetpage").show();
}

/*function showidMob18first_WBS() {
	$("#idMob18WBSpage").show();
	$("#idMOB18SplitWBS").show();
	
}
function hideidMob18first_WBS(){
	$("#idMob18WBSpage").hide();
	$("#idMOB18SplitWBS").hide();
}

function hideidMob18second_WBS() {
	$("#idMob18WBSdetpage").hide();
	
}
function showidMob18second_WBS() {
	$("#idMob18WBSdetpage").show();
}
//Cost Center Screen
function showidMob18first_Cost() {
	$("#idMob18Costpage").show();
	$("#idMOB18SplitCost").show();
	
}
function hideidMob18first_Cost(){
	$("#idMob18Costpage").hide();
	$("#idMOB18SplitCost").hide();
}

function hideidMob18second_Cost() {
	$("#idMob18Costdetpage").hide();
	
}

function showidMob18second_Cost() {
	$("#idMob18Costdetpage").show();
}
*/