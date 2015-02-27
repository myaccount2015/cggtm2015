sap.ui.controller("com.cg.gtm.view.Mob20TwoScreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob20TwoScreen
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob20TwoScreen
*/
	onBeforeRendering: function() {
	
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob20TwoScreen
*/
	onAfterRendering: function() {
		//Hide third screen Mob20
	  	 Mob20HideThirdScreen();	
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob20TwoScreen
*/
//	onExit: function() {
//
//	}

	
	confrmCount : function(oEvent)
	{
		debugger;
	var selectedButton;
	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true)
	{
        var getRecrd = sap.ui.getCore().byId("idMob20-MatDesTable").getModel().oData.results;
		
    	var iconVal = 2;
		Mob20ErrorMessageStage(getRecrd, iconVal);//Success	

  			
	}
	
	else{
		//sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValueState(sap.ui.core.ValueState.None);
  		var getRecrd = sap.ui.getCore().byId("idMob20-MatDesTable").getModel().oData.results;
  	debugger;
		//Calling service
  	
	
        //Service Start Time
        var logInfo = getTimeStamp() +"MOB20:: Service: InventoryHeaderSet Start" ;
        var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var oDataCreateCount = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "/InventoryHeaderSet";
		oDataCreateCount.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
  
		    
         var createReqData = 
                    {
	    			"Physinventory" : getRecrd[0].Physinventory,	
	    			"FiscalYear" : getRecrd[0].Fiscalyear,	
	    			};	
			
		var getAray;
		var getArayMai = [];
		var getScannedItemRec;
		var getScannedQty;
		var checkingLoop = getRecrd.length;
		checkingLoop = checkingLoop - 1;
		
	
		
		
		{
		for ( var i = 0 ; i <getRecrd.length ; i++ )
			if( getRecrd[i].FlagSerialno == "X" )
		{
		//getSerivce array
		getAray = window.localStorage.getItem(getRecrd[i].Physinventory+"_"+ 
				getRecrd[i].Material+getRecrd[i].Batch+getRecrd[i].StocktypeDesc+ 
		"_ServiceArray" );
		getAray =  JSON.parse(getAray);
		if((getAray == null) )
		{
	    sap.m.MessageBox.show("Visit to all line items in Material List"+ " " +
				" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
		selectedButton = 1;
	  //  break;
		
		sap.ui.getCore().byId("myApp").to("idMob20MatDesPage");
		}
					
		
			
		var titMat =sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
        getRecrd[i].Material+"_"+
        getRecrd[i].StocktypeDesc+"_"+
        getRecrd[i].Batch;
		
		
		var scannedValues = window.localStorage.getItem(titMat);
		
		if( scannedValues != null)
	    {
	    scannedValues = scannedValues.replace(/,/g, "_");
	    scannedValues = scannedValues.replace(/"/g, "");
	    scannedValues = scannedValues.replace("[", "");
	    scannedValues = scannedValues.replace("]", "");
	    }
	    var noOfScanQty = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
		getRecrd[i].Material+getRecrd[i].Batch+getRecrd[i].StocktypeDesc + "SerLogVal");
	    
	    if( noOfScanQty == "" || noOfScanQty == null)
    	{
    	noOfScanQty = "0";
    	}
	    
		getAray[0].EntryQnt = noOfScanQty;
		getAray[0].SerialNo = scannedValues;
		getArayMai[i] = getAray[0];
		getAray.length = 0;
		}
		
	else
		{
				
		{
			//getSerivce array
	getAray = window.localStorage.getItem(getRecrd[i].Physinventory+"_"+ 
			getRecrd[i].Material+getRecrd[i].Batch+getRecrd[i].StocktypeDesc+ "_ServiceArray" );
	getAray =  JSON.parse(getAray);
	if((getAray == null) )
	{
    sap.m.MessageBox.show("Visit to all line items in Material List"+ " " +
			" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
	selectedButton = 1;
  //  break;
	
	sap.ui.getCore().byId("myApp").to("idMob20MatDesPage");
	}
		 var noOfScanQty = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
				getRecrd[i].Material+getRecrd[i].Batch +getRecrd[i].StocktypeDesc+ "SerLogVal");
			    
			    if( noOfScanQty == "" || noOfScanQty == null)
		    	{
		    	noOfScanQty = "0";
		    	}
			    
			    
			    getAray[0].EntryQnt = noOfScanQty;
				getAray[0].SerialNo = "";
				getArayMai[i] = getAray[0];
				getAray.length = 0;	
		}
		}
		
		
	}
		    createReqData.NavInventory =  getArayMai ;	
	        for ( var i = 0 ; i <getRecrd.length ; i++ )
				{//validation for qty and ser scan function
                    getScannedItemRec = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
			  				getRecrd[i].Material+"_"+getRecrd[i].StocktypeDesc+"_"+getRecrd[i].Batch);
			  		getScannedQty = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
			  				getRecrd[i].Material+getRecrd[i].Batch+getRecrd[i].StocktypeDesc+"SerLogVal");
			  		
			  		
			  		
			  		
			  	//Mob20-btnlogSer
			  		
			  		
			  	if( getScannedQty == "")
			  	{getScannedQty = null;}
			  		getScannedItemRec =  JSON.parse(getScannedItemRec);
			  		getScannedQty =  JSON.parse(getScannedQty);
			  	if( (getScannedItemRec != null) &&(getScannedItemRec.length <= getScannedQty) == false )
				{
			  		var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"+i;
			  		cssErrColor(idList);
				sap.m.MessageBox.show("Need to check all items are scanned according " +
						"to qty in Material : "+getRecrd[i].Material+ " " +
						" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
				
				  if ( g_runningOnPhone == false)  	
				  {
	                 Mob20HideThirdScreen();
	                 sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);
	               	 sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);
	                }
				  
				  
				return;
				}
			  	debugger;
			  	//var checkSer1 = sap.ui.getCore().byId("Mob20-SerCheckValidation-NonSer").getText();
			  	
			  	if( getRecrd[i].FlagSerialno == "X" )
			  		{
			  		var checkSer = sap.ui.getCore().byId("Mob20-SerCheckValidation").getText();
				  	 if ( getScannedItemRec == null && (checkSer == "Serial" )  && (getScannedQty != null) )
				  		{
				  		// if ( checkSer1 != "NonSer")
				  		{
				  		sap.m.MessageBox.show("Need to check all items are scanned according " +
								"to qty in Material : "+getRecrd[i].Material+ " " +
								" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
				  		return;
				  		}
				  		}
				  	else if ( getScannedItemRec == null && 
					  		  (checkSer == "Serial"
					  		  /*sap.ui.getCore().byId("Mob20-btnlogSer").getVisible() == true*/)
					  		   && (getScannedQty == null ) )
					  		{
				  		//if(checkSer1 != "NonSer")
					  			{
					  			sap.m.MessageBox.show("Need to check all items are scanned according " +
									"to qty in Material : "+getRecrd[i].Material+ " " +
									" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
					  		return;	
					  			}
					  		
					  		}
				  	 
				  	else if( getScannedItemRec != null )
				  		{
				  		
				  		if ( getScannedItemRec.length != getScannedQty && 
					  		  (checkSer == "Serial"
					  		  /*sap.ui.getCore().byId("Mob20-btnlogSer").getVisible() == true*/)
					  		   )
					  		{
				  		var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"+i;
				    	cssErrColor(idList);
				    	sap.m.MessageBox.show("Qty field mismatched with scanned item in Material No : "+getRecrd[i].Material+ " " +
								" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
					  		return;
					  		}
					    }
				  	 
			  		}
			  	
			  	
			  	
			  	 
			  	 
			  	 
			  				  	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
			  	
			  	 
			  	
              	
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////         	
				
			/*if ( (getAray != null) && ( (getScannedItemRec == null) ) )
				{
				 openSplashScreen();//splash screen opened
		         setTimeout(function(){ closeSplashScreen();//splash screen closed
				    oDataCreateCount.create(readRequestURL, createReqData, null, 
						function(oResponse) {var msg = "Data Send Successfully";jQuery.sap.require("sap.m.MessageToast");
		        sap.m.MessageToast.show(msg);	
				},function(oError){
					 try{var data = JSON.parse(oError.response.body);
						for(var event in data)
						{var dataCopy = data[event];	
							try{var messageFromBackend = dataCopy.innererror.errordetails[0].message;
							sap.m.MessageBox.show(
						    messageFromBackend+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");
							
							
							
							//break;
										
							
							}
							
							catch(e){sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
							//break;
							}}}catch(e)
						{sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");}});},1000);//constant delay}
		}*/
			
	//////////////////////////////////////////////////////////////////////////////////////////////		
			
			
			
		debugger;	
		if( sap.ui.getCore().byId("Mob20-thrdScr-btnScan").getVisible() == true)
			  	{
	    if( (getScannedItemRec == null) &&  ( getScannedQty != null && (getScannedQty == 0) 
	    		&& (getScannedQty == "")     ))
	    	{
	    	
	    	
	    	var idList = "Mob20-MatDesTable-Column-List-idMob20-MatDesTable-"+i;
	    	cssErrColor(idList);
	    	sap.m.MessageBox.show("Qty field mismatched with scanned item in Material No : "+getRecrd[i].Material+ " " +
					" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
	    	
	    	 if ( g_runningOnPhone == false)  	
			  {
                Mob20HideThirdScreen();
                 sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);
              	 sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);
               }
	    	return;
	    	}} 	
			  	
	    if(  checkingLoop == i  )
		{
	    	
	     if((getAray != null) && ((selectedButton != 1)) )
	    {
	    	openSplashScreen();//splash screen opened
	        setTimeout(function(){ closeSplashScreen();//splash screen closed
			oDataCreateCount.create(readRequestURL, createReqData, null, 
			function(oResponse) {
				var iconVal = 2;
				Mob20ErrorMessageStage(getRecrd, iconVal ,"");//Success	
				var msg = "Data Send Successfully";jQuery.sap.require("sap.m.MessageToast");
	            sap.m.MessageToast.show(msg); 
	            
	            var deselect = sap.ui.getCore().byId("Mob20-listMatNo"); // mob22iniList
	            deselect.removeSelections(true); 
	    	    
	            
	            
	            if( g_isDebug == true)
	            {
	            //Service End Time
	            var logInfo1 = getTimeStamp() +"MOB20:: Service: InventoryHeaderSet Finish" ;
	            //Log file Service Start and End Time
	            var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	            logFileUpdate(g_ServiceStartEndTime);
	            }
	    	    
			},
			function(oError){
				
				var deselect = sap.ui.getCore().byId("Mob20-listMatNo"); // mob22iniList
	            deselect.removeSelections(true); 
	            
	            
				 try{
					 
					var data = JSON.parse(oError.response.body);
					for(var event in data)
					{var dataCopy = data[event];	
					try{
					    
						var iconVal = 0;
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						Mob20ErrorMessageStage(getRecrd, iconVal , messageFromBackend);//Error Occurs red icon mode fn
						
					
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
					"Error");
					
					window.localStorage.setItem(sap.ui.getCore().byId("Mob20-thrdScr-txtMat")+"ErrorMsgStore", messageFromBackend);
					
					sap.ui.getCore().byId("Mob20-listMatNo").removeSelections();
					
					
					
					break;
					}
					catch(e)
					{
						var iconVal = 0;
					sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					Mob20ErrorMessageStage(getRecrd, iconVal , data.error.message.value);//Error Occurs red icon mode fn
					//window.localStorage.setItem(sap.ui.getCore().byId("Mob20-thrdScr-txtMat")+"ErrorMsgStore", data.error.message.value);
					//sap.ui.getCore().byId("Mob20-listMatNo").removeSelections();
					break;
					
					}}
					}
				    catch(e)
					{
						var iconVal = 1;
						//alert("geudgu");
						Mob20ErrorMessageStage(getRecrd, iconVal  ,"");//Data saved not send to backend Yellow icon
						
					sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					sap.ui.getCore().byId("Mob20-listMatNo").removeSelections();
					//Error Message:
					
					
					 if( g_isDebug == true)
			            {
			            //Service End Time
			            var logInfo1 = getTimeStamp() +"MOB20:: Service: InventoryHeaderSet Failed no network" ;
			            //Log file Service Start and End Time
			            var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			            logFileUpdate(g_ServiceStartEndTime);
			            }
					 
					 
					}
				    });},1000);//constant delay}	 
	    }
	    /*else if( (selectedButton != 1) )
	    	{
	    	openSplashScreen();//splash screen opened
	        setTimeout(function(){ closeSplashScreen();//splash screen closed
			oDataCreateCount.create(readRequestURL, createReqData, null, 
			function(oResponse) {
				var iconVal = 2;
				Mob20ErrorMessageStage(getRecrd, iconVal);//Success	
				
				var msg = "Data Send Successfully";jQuery.sap.require("sap.m.MessageToast");
	        sap.m.MessageToast.show(msg);	
			},function(oError){
				 try{var data = JSON.parse(oError.response.body);
					for(var event in data)
					{var dataCopy = data[event];	
					try{
						var iconVal = 0;
						Mob20ErrorMessageStage(getRecrd, iconVal);//Error Occurs
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
					"Error");}catch(e){sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					//break;
					
					
					}}}catch(e)
					{var iconVal = 1;
					Mob20ErrorMessageStage(getRecrd, iconVal);//Error Occurs
						sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");}});},1000);//constant delay}
	    	}*/
		
  	}}
	}        
	}
	
});

function Mob20HideThirdScreen()
{
	$("#idMob20splStockpage").hide();
};


function Mob20ShowThirdScreen()
{
	$("#idMob20splStockpage").show();
};

function cssErrColor(idList)
{
$("#"+idList+"").css("background-color","rgba(255, 77, 77, 0.72)");
Mob20HideThirdScreen();
sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);
sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);
};

function cssWarningColor(idList)
{
$("#"+idList+"").css("background-color","yellow");
//$("p").css("background-color","yellow");
};



