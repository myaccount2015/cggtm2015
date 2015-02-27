sap.ui.controller("com.cg.gtm.view.Drop2_MOB28.MOB28MatDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop2_MOB28.MOB28MatDetails
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop2_MOB28.MOB28MatDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop2_MOB28.MOB28MatDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop2_MOB28.MOB28MatDetails
*/
//	onExit: function() {
//
//	}
	
	checkQtyMob28MOB : function()
	{
		
		
		var index = parseInt(gMOB28ListIndex);
  		var mob28ListModel = sap.ui.getCore().byId("matListMOB28").getModel();
  		var resultArr = mob28ListModel.oData.modelDataMOB28;
		var qtyFromService = parseInt(resultArr[index].AvailableStock );
		var qtyFromUI = parseInt(sap.ui.getCore().byId("MOB28QtyChg").getValue());
		
		if ( qtyFromUI > qtyFromService)
			{
			
					
			sap.m.MessageBox.show(
	    		    "Entered quantity is greater than Available Quantity"+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,
					"Error");
			
			
			return false ;
			
			}
		else
			{
			return true ;
			}
		
		
	} ,
	
	saveMOB28MOB : function()
	{ 	
    	debugger;
		openSplashScreen();//splash screen opened
    	
    	//Service Start Time
    	var logInfo = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Start" ;

    	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
    	if(serviceURL == "Fail")
		 {
		 return false;
		 }
    	
  		var oDataChangeStockervice = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
  		
  		var readRequestURL = "/PostChangeBinSet";
  		
  		oDataChangeStockervice.setHeaders({
  			"X-Requested-With" : "XMLHttpRequest",
  			"Content-Type" : "application/json",
  			"X-CSRF-Token" : "Fetch",
  			"DataServiceVersion" : "2.0"
  		});
  		
  		var index = parseInt(gMOB28ListIndex);
  		var mob28ListModel = sap.ui.getCore().byId("matListMOB28").getModel();
  		var resultArr = mob28ListModel.oData.modelDataMOB28;
  		//alert(soldTo);
  		
  		var movType =  sap.ui.getCore().byId("ddmovtypeMOB28").getSelectedKey();
  		var createReqData = {
            	
            	"Quant" :resultArr[index].Quant ,
            	"WHouse" : window.localStorage.getItem("defWHCode"),
            	"Plant" :  window.localStorage.getItem("defPlantCode"),
            	"Material" : resultArr[index].matnum,
            	"StorageLoc" : resultArr[index].loc,
            	"Batch"  : resultArr[index].Batch,
            	"SplStock" : resultArr[index].SplStock,
            	"SplStockNo"  : resultArr[index].SplStockNo,
            	"SourceStockCategory" : resultArr[index].SourceStockCategory,
            	"DestStockCategory" :  resultArr[index].DestStockCategory,
            	"AvailableStock" : sap.ui.getCore().byId("MOB28QtyChg").getValue(),
            	"UOM" : resultArr[index].UOM,
            	"MovementType" : movType
            	
            	
  		};
        
  		oDataChangeStockervice.create(readRequestURL, createReqData, null, 
  				function(oResponse) {
  			debugger;
  			$("#"+g_sIDMOB28).css("background-color","#00FF00");
  			
  			var app = sap.ui.getCore().byId("myApp"); 
            app.to("idGridSubMenuIMWM");
            var msg = "Posting Successful. " + "Transfer Order is: " + oResponse.TransferOrder;
    		jQuery.sap.require("sap.m.MessageToast");
            sap.m.MessageToast.show(msg);
  		
  			
  			if( g_isDebug == true)
  			{
  			//Service End Time
  			var logInfo1 = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Finish" ;
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
				   		$("#"+g_sIDMOB28).css("background-color","#FF0000");					    	 
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
                          $("#"+g_sIDMOB28).css("background-color","#FF0000");
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
			  			var logInfo1 = getTimeStamp() +"MOB28:: Service: PostChangeBinSet Failed no network" ;
			  			//Log file Service Start and End Time
			  			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			  			logFileUpdate(g_ServiceStartEndTime);
			  			}
				   		
				   		
				   		
				    	 },1000);//constant delay
			
				   $("#"+g_sIDMOB28).css("background-color","#FFFF00");
				
				}
			});
    	  
		
	}


});