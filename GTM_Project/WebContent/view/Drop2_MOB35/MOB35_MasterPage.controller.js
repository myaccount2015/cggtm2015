sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_MasterPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop2_MOB35.MOB35_MasterPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop2_MOB35.MOB35_MasterPage
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop2_MOB35.MOB35_MasterPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop2_MOB35.MOB35_MasterPage
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB35";
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
	fetchInvDocDataMOB35 : function(oEvent)
	{
		gMOB35AddMatArr=[];
		  gMOB35AddQtyArr=[];
		  gMOB35AddUOMArr=[];
		  g_MatAddedMOB35= false;
		if ( g_runningOnPhone == true){
			  g_MobileNavigationId = "MOB35verifyBinPage";
			var detailBinpage = sap.ui.getCore().byId("idMOB35BinDetail")
			var app = sap.ui.getCore().byId("myApp");
			app.to(detailBinpage)
			
		}
		else{
		
		
		var detail= sap.ui.getCore().byId("idMOB35detailPage");
		sap.ui.getCore().byId("idMOB35SplitApp").addDetailPage(detail);
		sap.ui.getCore().byId("idMOB35SplitApp").toDetail(detail);
		 $("#idMOB35BinDetail").show();
		$("#idMOB35WMCount").hide();
		}	
		//sap.ui.getCore().byId("ddBinMOB35").destroyItems();
		sap.ui.getCore().byId("Mob35ConADDMat").setVisible(false);
		var contextPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		g_invdocnumMOB35 = this.getModel().getProperty(contextPath + "/InvDocument");
		g_stoBin = this.getModel().getProperty(contextPath + "/StorageBin");
		sap.ui.getCore().byId("ddBinMOB35").setValue(g_stoBin);
		
		
	/*	var dropDownDataArr = [] ;
		//alert(g_invdocnumMOB35);
		 var dropDownDataBlank = {  							    
					"text": g_stoBin ,
					"key" :  g_stoBin					  
								 }; 
			dropDownDataArr.push(dropDownDataBlank);
		 var dropDownDataFinal = [];
			dropDownDataFinal = {"itemsBinMOb35" : dropDownDataArr};
		    var oModelJsonList = new sap.ui.model.json.JSONModel();  
		    oModelJsonList.setData(dropDownDataFinal); 
			sap.ui.getCore().byId("ddBinMOB35").setModel(oModelJsonList); 	
			

			sap.ui.getCore().byId("ddBinMOB35").setSelectedKey(g_stoBin);*/
			sap.ui.getCore().byId("MOB35_binInput").setValue("");
			
			sap.ui.getCore().byId("idEmptyMOB35").setVisible(false);
      	sap.ui.getCore().byId("idNextMOB35").setVisible(false);
			
			//alert(sap.ui.getCore().byId("ddBinMOB35").getSelectedKey());
		/*
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		var Mob35DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "WMInventoryCountItemSet?$filter=WHouse eq 'NP1' and InvDocNo eq '"+g_invdocnumMOB35+"'&$format=json";
		   
		Mob35DataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			  g_resultArrMOB35 = result.results;
			  var resultArr = result.results;
			var resultArrIni = [];
			var dropDownDataArr = [] ;
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
				 var resultData = {
		                	
		                	"StockCategory" : resultArr[index].StockCategory,
		                    "Quant" : resultArr[index].StockCategory,
		                    "UOM" : resultArr[index].StockCategory,
		                    "StockKeepingQuantity" : resultArr[index].StockCategory,
		                    "RequestQuantity" : resultArr[index].StockCategory,
		                    "TotalQuantity" : resultArr[index].StockCategory,
		                    "StorageUnitNo" : resultArr[index].StockCategory,
		                    "SplStockNo" : resultArr[index].StockCategory,
		                    "SplStockDesc" : resultArr[index].StockCategory,
		                    "SplStock" : resultArr[index].StockCategory,
		                    "SerialNo" : resultArr[index].StockCategory,
		                    "StockCategoryDesc" : resultArr[index].StockCategory,
		                    "MaterialDesc" : resultArr[index].StockCategory,
		                    "InventoryActive" : resultArr[index].StockCategory,
		                    "Batch" : resultArr[index].StockCategory,
		                    "MaterialNo" : resultArr[index].StockCategory,
		                    "StorageLoc" : resultArr[index].StockCategory,
		                    "StorageBinPosition" : resultArr[index].StockCategory,
		                    "StorageBin" : resultArr[index].StockCategory,
		                    "StorageType" : resultArr[index].StockCategory,
		                    "WHouse" : resultArr[index].StockCategory,
		                    "Plant" : resultArr[index].StockCategory,
		                    "PlantName" : resultArr[index].StockCategory,
		                    "InvDocNo" : resultArr[index].StockCategory,
		                    "InvDocItem" : resultArr[index].StockCategory,
		                    "MessageText" : resultArr[index].StockCategory,
		                    "SplitValuated" : resultArr[index].StockCategory,
		                    "BatchManaged" : resultArr[index].StockCategory,
		                    "Serialized" : resultArr[index].StockCategory,
		                    "NameofCounter" : resultArr[index].StockCategory,
		                    "StorageUnitType" : resultArr[index].StockCategory
		                	
		                };
				 
				 
				 
				// resultArrIni.push(resultData);
				 var dropDownDataBlank = {  							    
							"text": resultArr[index].StorageBin ,
							"key" :  resultArr[index].StorageBin						  
										 }; 
					dropDownDataArr.push(dropDownDataBlank);
				 
				 
				 }
			// resultArrIni.push(resultData);
			
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
					//sap.m.MessageBox.show(
					//messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
					alert(messageFromBackend);
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
					sap.m.MessageBox.Icon.ERROR,"Error");}
			
			//alert(oError.message);
});	
		*/
	
				
		
	
	},
	
	submitCount : function()
{

		//sap.ui.getCore().byId('mob35_detailBox').setVisible(false);
		
  	openSplashScreen();//splash screen opened
  //Service Start Time
  	var logInfo = getTimeStamp() +"MOB35:: Service: WMInventoryCountHeaderSet Start" ;

  	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
  	if(serviceURL == "Fail")
	 {
	 return false;
	 }
  	
		var oDataChangeStockervice = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var readRequestURL = "/WMInventoryCountHeaderSet";
		
		oDataChangeStockervice.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
		
		
		
		 
		 
		 
		var createReqData = "";
		
		
		var lineItemData =  "";
		//for (var index = 0; index < g_resultArrMOB35.length; index++) {
			
		
		 lineItemData  =  {
            	
				    Batch: "",
					InvDocItem: "0001",
					InvDocNo: "0000000065",
					MaterialNo: "0200004",
					NameofCounter: "",
					Plant: "GWNP",
					Quant: "0000002470",
					RequestQuantity: "1",
					SerialNo: null,
					SplStock: "",
					SplStockNo: "",
					StockCategory: "",
					StorageBin: "A-01-01-6",
					StorageBinPosition: "",
					StorageLoc: "0088",
					StorageType: "001",
					StorageUnitNo: "",
					StorageUnitType: "EP2",
					WHouse: "NP1",
					UOM :"M"
					//Whouse: "NP1"
            	
  		};
		 
		//}
		
		
		var lineItems = [];
		lineItems.push(lineItemData);
		
		createReqData =  {
				"WHouse" :  "NP1"
		};
	//	createReqData.Whouse = "NP1";
		createReqData.NavWMInventory = lineItems;
		oDataChangeStockervice.create(readRequestURL, createReqData, null, 
				function(oResponse) {
			//$("#"+g_sIDMOB28).css("background-color","#00FF00");
			closeSplashScreen();
			sap.m.MessageBox.show("Operation Successful",
					sap.m.MessageBox.Icon.SUCCESS,
					"Success");
			
			
			
			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventoryCountHeaderSet Finish" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
		},
				
  	   function(oError){
  		 
  		  try
				{
				var data = JSON.parse(oError.response.body);
				
				for(var event in data)
				{
					var dataCopy = data[event];	
					
					try{
					var messageFromBackend = dataCopy.message.value;
					
					setTimeout(function(){
				   		closeSplashScreen();//splash screen closed
				   		sap.m.MessageBox.show(
				    		    messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
				   		//$("#"+g_sIDMOB28).css("background-color","#FF0000");					    	 
				    	 },1000);//constant delay
					//saveNotiDeatilsQ1(glo_NotiKey, "Failed", null,messageFromBackend); //Saving Notification
				
					}
					catch(e)
					{
						
						var errorMsg = e.message;
						
						setTimeout(function(){
					   	  closeSplashScreen();//splash screen closed
                        sap.m.MessageBox.show(
                      		  errorMsg+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");	
                      //  $("#"+g_sIDMOB28).css("background-color","#FF0000");
					    	 },1000);//constant delay
					//	saveNotiDeatilsQ1(glo_NotiKey, "Failed", null,errorMsg); //Saving Notification
					
						break;
					}
				
				
				}
				
				
				}
		 
			catch(e)
				{
				   //saveNotiDeatilsQ1(glo_NotiKey, "Saved", null,null); //Saving Notification
				   
				   setTimeout(function(){
				   		closeSplashScreen();//splash screen closed
				   		
				   		sap.m.MessageBox.show(
								 "Service Not Available - Please contact system administrator" + " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,
											"Error"); 
				   		

						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventoryCountHeaderSet Failed no network" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
						
						
				    	 },1000);//constant delay
			
				 //  $("#"+g_sIDMOB28).css("background-color","#FFFF00");
				
				}
			});
  	  
		
	
		
	
}

});