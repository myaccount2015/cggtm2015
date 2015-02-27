sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_VerifyBinPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
*/
//	onBeforeRendering: function() {
//
//	},
	scanMaterial: function(){
		varScan = "MOB35";
		MOB35SCANVAL = "BIN";
    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
		
	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
*/
//	onExit: function() {
//
//	}

	verifyBinMOB35 : function()
	{
	//Activate BIN Service 	

		if ( //8sap.ui.getCore().byId("ddBinMOB35").getSelectedKey()" +
				g_stoBin  == sap.ui.getCore().byId("MOB35_binInput").getValue())
			{
			
			//alert("we are equla");
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB35:: Service: WMInventorySet Start" ;

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }
			
			var Mob35DataModelDocAct = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL = "WMInventorySet";
			
			
			Mob35DataModelDocAct.setHeaders({
	  			"X-Requested-With" : "XMLHttpRequest",
	  			"Content-Type" : "application/json",
	  			"X-CSRF-Token" : "Fetch",
	  			"DataServiceVersion" : "2.0"
	  		});

			var defaultWareHouse = "";
			defaultWareHouse = window.localStorage.getItem("defWHCode");
			
	  		var createReqData = {
	  				"WHouse" : defaultWareHouse,
	  				"InvDocument" : g_invdocnumMOB35
	  				
	  		}
			   
			Mob35DataModelDocAct.create(readRequestURL,createReqData, null   ,
				              function(oData, oResponse) {
				
				sap.m.MessageBox.show(
						
						"Document activated successfully",
						sap.m.MessageBox.Icon.SUCCESS,
						"Success"
						
						
						);
				fetchMOB35Det();
				sap.ui.getCore().byId("idEmptyMOB35").setVisible(true);
            	sap.ui.getCore().byId("idNextMOB35").setVisible(true);
				
            	
            	
            	
            	
            	if( g_isDebug == true)
            	{
            	//Service End Time
            	var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Finish" ;
            	//Log file Service Start and End Time
            	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
            	logFileUpdate(g_ServiceStartEndTime);
            	}
            	
            	
			},  function(oError){  
				sap.ui.getCore().byId("idEmptyMOB35").setVisible(false);
            	sap.ui.getCore().byId("idNextMOB35").setVisible(false);
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
	            	var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed 401 unauthorised." ;
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
		            	var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed no network";
		            	//Log file Service Start and End Time
		            	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		            	logFileUpdate(g_ServiceStartEndTime);
		            	}
						
						
						}
				
				//alert(oError.message);
	});	
			
		
					
			
		
		
			
			}
		
		else
			{
			sap.m.MessageBox.show("Bin Mismatch",
					sap.m.MessageBox.Icon.ERROR,
					"Error");
			
		}

		
	
		
	},
	
/*	fetchMOB35Det : function(oEvent)
	{
		

		
		if ( g_runningOnPhone == true){
			var detailBinpage = sap.ui.getCore().byId("idMOB35BinDetail")
			var app = sap.ui.getCore().byId("myApp");
			app.to(detailBinpage)
			
		}
		else{
		
		
		var detail= sap.ui.getCore().byId("idMOB35detailPage");
		sap.ui.getCore().byId("idMOB35SplitApp").addDetailPage(detail);
		sap.ui.getCore().byId("idMOB35SplitApp").toDetail(detail);
		$("#idMOB35WMCount").hide()
		}	
		  sap.ui.getCore().byId("MOB35_batchInput").setValue("");
		  sap.ui.getCore().byId("MOB35UOM").setValue(""); 
		  sap.ui.getCore().byId("MOB35_matInput").setValue(""); 
		  sap.ui.getCore().byId("MOB35Qty").setValue(""); 
		  
		 
		 
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		var Mob35DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "WMInventoryCountItemSet?$filter=WHouse eq 'NP1' and InvDocNo eq '"+g_invdocnumMOB35+"' &$format=json";
		   
		Mob35DataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			 $("#idMOB35WMCount").show();
			 sap.ui.getCore().byID("MOB35_matInput").setValue("");
			 sap.ui.getCore().byID("MOB35Qty").setValue("");
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			  g_resultArrMOB35 = result.results;
			  
			  if (g_resultArrMOB35[0].Serialized == "Y")
				  {
				  sap.ui.getCore().byId("MOB35_serialInput").setValue("");
				   sap.ui.getCore().byId("serialBoxMOB35").setVisible(true);
				   sap.ui.getCore().byId("MOB35SerLbl").setVisible(true);
				   sap.ui.getCore().byId("Mob35ShowSer").setVisible(true);
				   
				   
				  }
			  
			  else
				  {

				   sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
				   sap.ui.getCore().byId("MOB35SerLbl").setVisible(false);
				   sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
				  }
			  
			  if (g_resultArrMOB35[0].BatchManaged == "Y")
			  {
			  
				  sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
				  sap.ui.getCore().byId("MOB35_batchInput").setValue(g_resultArrMOB35[0].Batch);
				  sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
				  
			  }
			  
			  else
				  {
				  sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
				  sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
				  
				  }
			  //sap.ui.getCore().byId("MOB35UOM").setValue(g_resultArrMOB35[0].UOM);
			  sap.ui.getCore().byId("MOB35UOM").setValue(g_resultArrMOB35[0].UOM); 
			  sap.ui.getCore().byId("Mob35ConADDMat").setVisible(true);
			  	
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
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
					//alert(messageFromBackend);
					}
					catch(e)
					{
					sap.m.MessageBox.show(e.message+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");break;
						alert(e.message);
						break;
					}}}
			catch(e)
					{sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");}
			
			//alert(oError.message);
});	
		
	
				
		
	
	
	},*/
	
	emptyBinPost : function()
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
  		var scannedValues = window.localStorage.getItem(g_invdocnumMOB35);
		
		if( scannedValues != null)
	    {
	    scannedValues = scannedValues.replace(/,/g, "_");
	    scannedValues = scannedValues.replace(/"/g, "");
	    scannedValues = scannedValues.replace("[", "");
	    scannedValues = scannedValues.replace("]", "");
	    }
		
		var lineItemData =  "";
  		for (var index = 0; index < g_resultArrMOB35.length; index++) {
			
		if( g_resultArrMOB35[index].StorageBin ==  sap.ui.getCore().byId("MOB35_binInput").getValue()//sap.ui.getCore().byId("ddBinMOB35").getSelectedKey()
				)
			{
  		 
  		 lineItemData  =  {
              	
              	StockCategory :g_resultArrMOB35[index].StockCategory ,
              	WHouse : window.localStorage.getItem("defWHCode"),
              	Plant : window.localStorage.getItem("defPlantCode"),
              	Quant : "0",
              	RequestQuantity : "0",
              	SplStockNo  : g_resultArrMOB35[index].SplStockNo,
              	SplStock : g_resultArrMOB35[index].SplStock,
              	SerialNo  : scannedValues,
              	Batch : g_resultArrMOB35[index].Batch,
              	MaterialNo :  g_resultArrMOB35[index].MaterialNo,
              	StorageLoc : g_resultArrMOB35[index].StorageLoc,
              	StorageBinPosition : g_resultArrMOB35[index].StorageBinPosition,
              	StorageBin : g_resultArrMOB35[index].StorageBin,
              	StorageType :  g_resultArrMOB35[index].StorageType,
              	//WHouse : g_resultArrMOB35[index].WHouse,
              	Plant : g_resultArrMOB35[index].Plant,
              	InvDocNo : g_resultArrMOB35[index].InvDocNo,
              	InvDocItem : g_resultArrMOB35[index].InvDocItem,
              	NameofCounter : g_resultArrMOB35[index].NameofCounter,
              	StorageUnitNo :  g_resultArrMOB35[index].StorageUnitNo,
              	StorageUnitType : g_resultArrMOB35[index].StorageUnitType,
              	UOM : g_resultArrMOB35[index].UOM
              	
    		};
  		 
  		}
  		}
  		
  		var lineItems = [];
  		lineItems.push(lineItemData);
  		
  		createReqData =  {
  				"WHouse" :  window.localStorage.getItem("defWHCode")
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
  			closeSplashScreen(); 
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

function fetchMOB35Det()
{

	

	
	if ( g_runningOnPhone == true){
		var detailBinpage = sap.ui.getCore().byId("idMOB35BinDetail")
		var app = sap.ui.getCore().byId("myApp");
		app.to(detailBinpage)
		
	}
	else{
	
	
	var detail= sap.ui.getCore().byId("idMOB35detailPage");
	sap.ui.getCore().byId("idMOB35SplitApp").addDetailPage(detail);
	sap.ui.getCore().byId("idMOB35SplitApp").toDetail(detail);
	$("#idMOB35WMCount").hide();
	}	
	  sap.ui.getCore().byId("MOB35_batchInput").setValue("");
	  sap.ui.getCore().byId("MOB35UOM").setValue(""); 
	  sap.ui.getCore().byId("MOB35_matInput").setValue(""); 
	  sap.ui.getCore().byId("MOB35Qty").setValue(""); 
	  
	 
	//Service Start Time
	  var logInfo = getTimeStamp() +"MOB35:: Service: WMInventoryCountItemSet Start" ;

	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
	if(serviceURL == "Fail")
	 {
	 return false;
	 }
	
	var Mob35DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	var readRequestURL = "WMInventoryCountItemSet?$filter=WHouse eq 'NP1' and InvDocNo eq '"+g_invdocnumMOB35+"' &$format=json";
	   
	Mob35DataModel.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) { 
		 $("#idMOB35WMCount").hide();
		 sap.ui.getCore().byId("MOB35_matInput").setValue("");
		 sap.ui.getCore().byId("MOB35Qty").setValue("");
		var result = oResponse.body; //Getting JSON response body
		var jsonObj = JSON.parse(result); // Parsing the JSON Object		
		var result = jsonObj.d; // Taking the result inside namespace d
		  g_resultArrMOB35 = result.results;
		  
		  if (g_resultArrMOB35[0].Serialized == "Y")
			  {
			  sap.ui.getCore().byId("MOB35_serialInput").setValue("");
			   sap.ui.getCore().byId("serialBoxMOB35").setVisible(true);
			   sap.ui.getCore().byId("MOB35SerLbl").setVisible(true);
			   sap.ui.getCore().byId("Mob35ShowSer").setVisible(true);
			   
			   
			  }
		  
		  else
			  {

			   sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
			   sap.ui.getCore().byId("MOB35SerLbl").setVisible(false);
			   sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
			  }
		  
		  if (g_resultArrMOB35[0].BatchManaged == "Y")
		  {
		  
			  sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
			  sap.ui.getCore().byId("MOB35_batchInput").setValue(g_resultArrMOB35[0].Batch);
			  sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
			  
		  }
		  
		  else
			  {
			  sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
			  sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
			  
			  }
		  //sap.ui.getCore().byId("MOB35UOM").setValue(g_resultArrMOB35[0].UOM);
		  sap.ui.getCore().byId("MOB35UOM").setValue(g_resultArrMOB35[0].UOM); 
		  sap.ui.getCore().byId("Mob35ConADDMat").setVisible(false); 
		  sap.ui.getCore().byId("Mob35ADDMat").setVisible(true);
		  	
		  
		  if( g_isDebug == true)
		  {
		  //Service End Time
		  var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventoryCountItemSet Finish" ;
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
			  var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventoryCountItemSet Failed 401 unauthorised." ;
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
				sap.m.MessageBox.show(e.message+ " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");break;
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
				  var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventoryCountItemSet Failed no network";
				  //Log file Service Start and End Time
				  var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				  logFileUpdate(g_ServiceStartEndTime);
				  }
				
				}
		
		//alert(oError.message);
});	
}

/*
 * Setting visible/invisible in MOB35 material detail page.
 */
function resetMaterialDetailUIMOB35(isVisible) {
	
	if (typeof gMOB35AddMatArr != "undefined" && gMOB35AddMatArr.length > 0) {
		sap.ui.getCore().byId("Mob35ShowMatAdded").setVisible(true);
	}
	
	sap.ui.getCore().byId("MOB35_matInput").setValue(""); 
	sap.ui.getCore().byId("MOB35Qty").setValue("");
	sap.ui.getCore().byId("MOB35UOM").setValue("");
	sap.ui.getCore().byId("MOB35MatDesc").setText("");
	//sap.ui.getCore().byId("MOB35_batchInput").setValue("");
	
	sap.ui.getCore().byId("serialBoxMOB35").setVisible(isVisible);
	sap.ui.getCore().byId("Mob35ShowSer").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35Qty").setVisible(isVisible);
	sap.ui.getCore().byId("batchBoxMOB35").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35BatLbl").setVisible(isVisible);
	sap.ui.getCore().byId("lblUOMMOB35").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35UOM").setVisible(isVisible);
	sap.ui.getCore().byId("lblStockType35").setVisible(isVisible);
	sap.ui.getCore().byId("radioBtnST").setVisible(isVisible);
	sap.ui.getCore().byId("lblSpeStock").setVisible(isVisible);
	sap.ui.getCore().byId("radioBtnSS").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35Qty").setVisible(isVisible);
	sap.ui.getCore().byId("quantityLbl").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35SerLbl").setVisible(isVisible);
	sap.ui.getCore().byId("MOB35MatDesc").setVisible(isVisible);
	
}