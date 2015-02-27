sap.ui.controller("com.cg.gtm.view.Drop1_MOB29.Mob29-MaterialView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mob29-labelprinting.Mob29-MaterialView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mob29-labelprinting.Mob29-MaterialView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mob29-labelprinting.Mob29-MaterialView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mob29-labelprinting.Mob29-MaterialView
*/
//	onExit: function() {
//
//	}
	openMatSearch : function()
	{
		/*var splitApp = sap.ui.getCore().byId("splitApp");  
		splitApp.to("idMATSR"); */
		debugger;
		backNavMat = "Mob29Screen";
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	    
	  //  var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		 inputPlantMat.setEnabled(true);
		 
		//g_inputPlantCode =  window.localStorage.setItem("defPlantCode");
	    // inputPlantMat.setEnabled(true);
	},
	
	
	

	checkinputMatnrMOB29LabelParintMaterial : function()
		{
		 openSplashScreen();
		
		   validateMATNUMAccess =  "MOB29";
		   backNavMat = "Mob29Screen";
		 
		   sap.ui.getCore().byId("idMob24MaterialSearch").getController().
			validateMatNum(sap.ui.getCore().byId("osearch_material_1").getValue());
		   
		   // If user directly enter into label print 
		   // If he entered manual entry directly
		   // We need this service for one time to call...(Karthik Comment)
	
		  /* if( sendResultToMaterialSearchDetPageButton == ""
			   || sendResultToMaterialSearchDetPageButton == undefined
			   )
			   {
			
				var defaultPlant =  window.localStorage.getItem("defPlantCode");
				var matNo = sap.ui.getCore().byId("osearch_material_1").getValue();
				
				
				//Service Start Time
				var logInfo = getTimeStamp() +"MOB29:: Service: materialcollections Start" ;

				
				
			    var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/materialcollections?$filter=Plant eq '"+defaultPlant+"' &$format=json");
			    if(serviceURL == "Fail")
				 {
				 return false;
				 }
			    
			    var aData = jQuery.ajax({   
					     url : serviceURL,
					     type: "GET",
				         contentType : "application/json",
				         dataType : 'json',
				         success : function(data, textStatus, jqXHR) {
				        	 sendResultToMaterialSearchDetPageButton = data.d.results; //global var 2nd time
				        	 serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue());
				        	 closeSplashScreen();
				        	 if( g_isDebug == true)
				        	 {
				        	 //Service End Time
				        	 var logInfo1 = getTimeStamp() +"MOB29:: Service: materialcollections Finish" ;
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
						        	 var logInfo1 = getTimeStamp() +"MOB29:: Service: materialcollections Failed no network" ;
						        	 //Log file Service Start and End Time
						        	 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						        	 logFileUpdate(g_ServiceStartEndTime);
						        	 }
		    						
		    						
		    						}
		    						
		    						closeSplashScreen();
					 }
				
				});
			   }
		   
		   else
			   {
		
			   serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue());
			   closeSplashScreen();
			   }*/
		   
		   
	}
	
	

	
	
});

function PrintLabelToService()
{
	
	var valError;
	var mat = sap.ui.getCore().byId("osearch_material_1").getValue();
	var baserial = sap.ui.getCore().byId("PrintLabSerBatIp1").getValue();
	var batchN = sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").getValue();
    var qty = sap.ui.getCore().byId("PrtLabIPQty").getValue();
    
	
	/////////////////////////////////////////////////////////////////
   
    if(mat == "")
    	{
    	sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.Error);
		valError = 1;
    	}
    else
    {
    sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None); 
    
    if (qty == ""  || qty == 0)
	  {sap.ui.getCore().byId("PrtLabIPQty").setValueState(sap.ui.core.ValueState.Error);
	  valError = 1;
	 
	  
	  }
    else
    {sap.ui.getCore().byId("PrtLabIPQty").setValueState(sap.ui.core.ValueState.None); }
    
    }
    
 
    
	/*if ( true ==  sap.ui.getCore().byId("PrintLabSerBatIp1").getVisible() )
		
		 if (sap.ui.getCore().byId("PrtLabIPQty").getValue() == ""  )
		  {sap.ui.getCore().byId("PrtLabIPQty").setValueState(sap.ui.core.ValueState.Error);
		   valError = 1;
		  
		  }
	   else
	      {sap.ui.getCore().byId("PrtLabIPQty").setValueState(sap.ui.core.ValueState.None); }*/
		
	/*			
		{if ( sap.ui.getCore().byId("PrintLabSerBatIp1").getValue() == "")
			{
			 sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.Error);
			   valError = 1;}
		else{ sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None);}}
	

	if (	 true ==  sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").getVisible() )
	  {if (  sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").getValue() == "" )
			{
			  sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.Error);
            valError = 1;}
	else{sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.None);}
	  }*/
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
	if ( valError == 1)
		
		{
		
		sap.m.MessageBox.show(
		        "Please provide data in all mandatory fields",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
		}
	
	else{
		openSplashScreen();//splash screen opened
		 
		var DefaultPrinterName = window.localStorage.getItem("defPrinCode");
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB29:: Service: MaterialsSet Start" ;

		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_LABLE_PRINT_SRV/");
		
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		
		var oDataCreateLabPrint = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var readRequestURL = "/MaterialsSet";
		
		oDataCreateLabPrint.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});

	
		var createReqData = {
			"DestPrinter" : sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedItem().getText() , //"HRE-ZEBRA-01",
			"Material":  mat,
			"SerialNumber" : baserial,
			"BatchNumber" : batchN,
			"Quantity" : qty
				
			};
		
		var lineItems = [];
		lineItems.push({Dummy : "D"});
		createReqData.MatPurchase =  lineItems ;		
		 setTimeout(function(){
			    closeSplashScreen();//splash screen closed	
		oDataCreateLabPrint.create(readRequestURL, createReqData, null, 
				function(oResponse) {
			
			
		var app = sap.ui.getCore().byId("myApp");
		    app.to("idMOB29LabelPrintingView");
		var msg = "Print Request has been sent successfully";
		jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);
        
        if( g_isDebug == true)
        {
        //Service End Time
        var logInfo1 = getTimeStamp() +"MOB29:: Service: MaterialsSet Finish" ;
        //Log file Service Start and End Time
        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
        logFileUpdate(g_ServiceStartEndTime);
        }
		
		
		},
		function(oError){
			 try
				{var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
							sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedItem().getText()+" is "+
				    		   messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
					
					if( g_isDebug == true)
			        {
			        //Service End Time
			        var logInfo1 = getTimeStamp() +"MOB29:: Service: MaterialsSet "+
			        sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedItem().getText()+" is "
			        +messageFromBackend ;
			        //Log file Service Start and End Time
			        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			        logFileUpdate(g_ServiceStartEndTime);
			        }
					
					
				}catch(e)
					{sap.m.MessageBox.show(
							data.error.message.value+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,
									"Error");
						break;
					}}}
		 
			catch(e)
				{
				sap.m.MessageBox.show(
                "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");
				
				if( g_isDebug == true)
		        {
		        //Service End Time
		        var logInfo1 = getTimeStamp() +"MOB29:: Service: MaterialsSet Failed no network" ;
		        //Log file Service Start and End Time
		        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        logFileUpdate(g_ServiceStartEndTime);
		        }
				
				
				}
			
		}
		
		
		);
		  },1000);//constant delay

		
		
		
}		
}

	
