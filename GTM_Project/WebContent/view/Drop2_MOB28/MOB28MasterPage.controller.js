sap.ui.controller("com.cg.gtm.view.Drop2_MOB28.MOB28MasterPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop2_MOB28.MOB28MasterPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop2_MOB28.MOB28MasterPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop2_MOB28.MOB28MasterPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop2_MOB28.MOB28MasterPage
*/
//	onExit: function() {
//
//	}
	
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB28";
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

	openMatSearchMOB28 : function()
	{
		
		backNavMat = "MOB28";
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);
	},
	showDetailsMOB28 : function()
	{

		
		
		/*var errMsg = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"ERR");
		if ( null ==  errMsg || errMsg == undefined || errMsg == "")
			{
			sap.ui.getCore().byId("MOB28ErrTxt").setVisible(false);
			}
		
		else
			{
			
			sap.ui.getCore().byId("MOB28ErrTxt").setVisible(true);
			sap.ui.getCore().byId("MOB28ErrTxt").setValue(errMsg);
			}*/
	
		/* sap.ui.getCore().byId("Mob28-btnlogSerMore").setVisible(false);
		 sap.ui.getCore().byId("MOB28Qty").setValueState(sap.ui.core.ValueState.None);
		 sap.ui.getCore().byId("Mob28Detpage").setTitle("");
		sap.ui.getCore().byId("MOB28MatListPage").setTitle
		(sap.ui.getCore().byId("ip_po_del_num").getValue());  
		sap.ui.getCore().byId("Mob28listMatNo").destroyItems();
		 sap.ui.getCore().byId("MOB28SerialLabel").setVisible(false);
	   	 sap.ui.getCore().byId("MOB28Serial").setVisible(false);
	   	 sap.ui.getCore().byId("MOB28BatchLabel").setVisible(false);
	   	 sap.ui.getCore().byId("MOB28Batch").setVisible(false);
	   	sap.ui.getCore().byId("MOB28Mat").setText("");
		sap.ui.getCore().byId("MOB28MatDesc").setText("");
		sap.ui.getCore().byId("MOB28SLoc").setText("");
		sap.ui.getCore().byId("MOB28Qty").setValue("");
		sap.ui.getCore().byId("MOB28Qty").setEnabled(true);
		globalVisitedIDs = [];*/
		
		sap.ui.getCore().byId("matListMOB28").destroyItems();
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Start" ;

		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var Mob28DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "";
		var material = sap.ui.getCore().byId("ip_matNumMOB28").getValue();
		var bin  = sap.ui.getCore().byId("ip_sto_bin").getValue();
		if ( !sap.ui.getCore().byId("ddstotypeMOB28").getSelectedKey())
			{
			 readRequestURL  = "PostChangeBinSet?$filter=WHouse eq '"+window.localStorage.getItem("defWHCode")+"' and Plant eq '"+window.localStorage.getItem("defPlantCode")+"' and SourceStorageType eq '' and SourceStorageBin eq '' and Material eq '"+material+"' and MovementType eq '"+gValMovType+"'&$format=json";
			}
		else
			{
			 readRequestURL  = "PostChangeBinSet?$filter=WHouse eq '"+window.localStorage.getItem("defWHCode")+"' and Plant eq '"+window.localStorage.getItem("defPlantCode")+"' and SourceStorageType eq '"+ gValStoType+"' and SourceStorageBin eq '"+bin+"' and Material eq '' and MovementType eq '"+gValMovType+"'&$format=json";
			}
		 
		   
			Mob28DataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			var resultArr = result.results;
			var resultArrIni = [];
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
				 var resultData = {
		                	"desc" : resultArr[index].MaterialDescription,
		                	"Quant" : resultArr[index].Quant,
		                	"matnum" : resultArr[index].Material,
		                	"loc" : resultArr[index].StorageLoc,
		                	"locdesc" : resultArr[index].StorageLocDesc,
		                	"SourceStorageType" : resultArr[index].SourceStorageType,
		                	"batchM" : resultArr[index].BatchManaged,
		                	"Batch" : resultArr[index].Batch,
		                	"AvailableStock" : resultArr[index].AvailableStock,	
		                	"SplStock" :  resultArr[index].SplStock,
		                	"SplStockNo" : resultArr[index].SplStockNo,
		                	"UOM" : resultArr[index].UOM,
		                	"SourceStockCategory" : resultArr[index].SourceStockCategory,
		                	"Bin" : resultArr[index].SourceStorageBin,
		                	"DestStockCategory" :  resultArr[index].DestStockCategory,
		                	"AvailableStock" : resultArr[index].AvailableStock,
		                	"MovementType" : resultArr[index].MovementType,
		                	///"MovementType" : resultArr[index].MovementType,
		                	/*"datetime" : "",
		                	"ID" : "",
		                	"icon" : ""*/
		                	
		                	
		                };
				 
				 
				 
				 resultArrIni.push(resultData);
				 
				 }
			 
			 
			 if ( resultArr.length > 0)
				 {
				 
				  $("#idMob28MatListPage").show();
				 
				 }
			 
			 else
				 {
				 
				 sap.m.MessageBox.show(
		                    "No data received",
							sap.m.MessageBox.Icon.ERROR,"Error");
				 }
			 var  resDataFinalArray =  {"modelDataMOB28" : resultArrIni};
			 var oJSONModelMob28MasterList = new sap.ui.model.json.JSONModel(resDataFinalArray);
			 var listMat = sap.ui.getCore().byId("matListMOB28");
				 listMat.setModel(oJSONModelMob28MasterList);
				 if ( g_runningOnPhone == true)
					{
					 var app = sap.ui.getCore().byId("myApp"); 
					 if (resultArr.length < 1)
						 {
						 app.to(sap.ui.getCore().byId("idMOB28MasPg"));
						 }
					 
					 else
						 {
						  g_MobileNavigationId = "Mob28-frstScreen";
						 app.to(sap.ui.getCore().byId("idMob28MatListPage"));
						 }
					
					}
				 
				 else
					 {
				sap.ui.getCore().byId("idMOB28SplitApp").to("idMOB28TwoScreen");	
					 }
				 
				 
				 
				 sap.ui.getCore().byId("Mob28Save").setVisible(false);		 
				
				 
				 
				 if( g_isDebug == true)
				 {
				 //Service End Time
				 var logInfo1 = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Finish" ;
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
				
				}
			try{
				var data = JSON.parse(oError.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.message.value;
					//sap.m.MessageBox.show(
					//messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
					sap.m.MessageBox.show(messageFromBackend,sap.m.MessageBox.Icon.ERROR,
							"Error");
					}
					catch(e)
					{
					//sap.m.MessageBox.show(e.message+ " " +" "+" ",
					//sap.m.MessageBox.Icon.ERROR,"Error");break;
						sap.m.MessageBox.show(e.message);
						break;
					}}}
			catch(e)
					{sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					if( g_isDebug == true)
					 {
					 //Service End Time
					 var logInfo1 = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Failed no network" ;
					 //Log file Service Start and End Time
					 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					 logFileUpdate(g_ServiceStartEndTime);
					 }
					
					
					}
			
			//alert(oError.message);
			
			 sap.ui.getCore().byId("Mob28Save").setVisible(false);
});	
		
	
				
		
	}

});