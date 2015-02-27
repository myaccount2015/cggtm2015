sap.ui.controller("com.cg.gtm.view.MOb19TwoScreenPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOb19TwoScreenPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOb19TwoScreenPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOb19TwoScreenPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOb19TwoScreenPage
*/
//	onExit: function() {
//
//	} ,
	
	saveMOB19 : function()
	{
		debugger;
		var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
		var results = oListMOB19Model.oData.results;
		var expDate = null ;
    if (checkTolerance())
    
    	{
    	sap.m.MessageBox.show("Quantity exceeds tolerance value");
    	}
    else
    	{
    	
    	var demo = sap.ui.getCore().getElementById("demoswitch").getState();
		if (demo)
			{
			var validItem = 0 ;
			for ( var index = 0 ; index < results.length ; index ++)
				{
				 if (results[index].selected == true )
					 {			 
					 if (results[index].serial == "Y" || results[index].serial == "y")
					 {
						 if ( checkSerialQtyMOB19(index) ==  false)
							 {
							 validItem ++ ;
							 }
					 }
					 }
				
				}
			if ( validItem > 0)
				{
				
				 
				 
				 sap.m.MessageBox.show("Mismatch between quantity field and number of scanned values"+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
				 
				 
				}
			else
				{
				
				sap.m.MessageBox.show("Posted Successfully");
				 var app = sap.ui.getCore().byId("myApp"); 
				 app.to(sap.ui.getCore().byId("idMOB19MasPg"));
				}
			}
		else
			{
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB19:: Service: HeaderGRSet Start" ;

		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
		
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var oDataMOB19Save = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var readRequestURL = "/HeaderGRSet";
		
		oDataMOB19Save.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
	var createReqData =  "";
	if ( gMOB19Key == "PO")
		{
		 createReqData = {
			"DocTypeFlag" : "R01",
			"PONumber" : sap.ui.getCore().byId("ip_po_del_num").getValue(),
			"DeliveryNote" : sap.ui.getCore().byId("ip_del_note_num").getValue()
			};
		}
	else if ( gMOB19Key == "ID")
		{
		 createReqData = {
			"DocTypeFlag" : "R04",
			"DeliveryNo" : sap.ui.getCore().byId("ip_po_del_num").getValue(),
			"DeliveryNote" : sap.ui.getCore().byId("ip_del_note_num").getValue()
			};
		}
	
	else
		{
		
			 createReqData = {
				"DocTypeFlag" : "R05",
				"DeliveryNo" : sap.ui.getCore().byId("ip_po_del_num").getValue()
				};
			

		}
		var lineItems = [];
		
		
		
		
		var validItem = 0 ;
		if ( gMOB19Key == "PO"){
		for ( var index = 0 ; index < results.length ; index ++)
			{
			 if (results[index].selected == true )
				 {			 
				 if (results[index].serial == "Y" || results[index].serial == "y")
				 {
					 if ( checkSerialQtyMOB19(index) ==  false)
						 {
						 validItem ++ ;
						 }
				 }
				 }
			
			}
		}
		if ( validItem > 0)
			{
			
			 sap.m.MessageBox.show("Mismatch between quantity field and number of scanned values"+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
			}
		
		else
			{
			openSplashScreen();//splash screen opened
			if ( gMOB19Key == "PO")
			{	
		for ( var index = 0 ; index < results.length ; index ++)
		{
		 if (results[index].selected == true )
			 {			 
				// alert("mow we save");
			/* if (sap.ui.getCore().byId("MOB19Batch").getValue()  != null && sap.ui.getCore().byId("MOB19Batch").getValue()  != undefined
						&& sap.ui.getCore().byId("MOB19Batch").getValue() != "")
					{	*/	
					//expDate = sap.ui.getCore().byId("MOB19Batch").getDateValue().toISOString().substring(0,19);
				    expdate =  
				    	window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+results[index].matnum + "DateTimeISO"+index);
					//expDate = sap.ui.getCore().byId("MOB19Batch").getDateValue();
					//}
				    var matnum  = results[index].matnum ;
				    var delItemNum = results[index].DeliveryItem ;
					var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+matnum+"_"+delItemNum+"_"+index;
					var scannedValues = window.localStorage.getItem(titMat);
					
					if( scannedValues != null)
				    {
				    scannedValues = scannedValues.replace(/,/g, "_");
				    scannedValues = scannedValues.replace(/"/g, "");
				    scannedValues = scannedValues.replace("[", "");
				    scannedValues = scannedValues.replace("]", "");
				    }
					else
						{
						
						scannedValues =  "";
						}
				if(results[index].serial=="Y"){	
			var quan= window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+results[index].matnum+results[index].DeliveryItem + "SerLogVal"+"_"+index);
				}
				else{
					var quan= results[index].qty;
				}
			 var lineItemData  =  {
					    PONumber :  sap.ui.getCore().byId("ip_po_del_num").getValue() ,
				        POItem : results[index].POItem ,
				        Material : results[index].matnum,
				        Plant : results[index].Plant,
				        StorageLoc : results[index].loc,
				        Quantity : quan ,
				        UOM  : results[index].UOM,
				        ExpireDate :expdate,
				        SerialNo : scannedValues
			 };
			 
			 lineItems.push(lineItemData);
			 }
		}
		
		
		
		createReqData.NavGR =  lineItems ;		
		//createReqData.
		//setTimeout(function(){
		    //splash screen closed
		    oDataMOB19Save.create(readRequestURL, createReqData, null, 
				function(oResponse) {
		    	closeSplashScreen();
		var msg = "Posting Successful. " + "Material Document Number is " + oResponse.MaterialDoc;
		jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);	
      //  sap.ui.getCore().byId("idMOB19MasPg").getController().showDetailsMOB19();
        
    	  g_MobileNavigationId = "MainGrid-Inventory";
      	           sap.ui.getCore().byId("LocallblLoadingPageMob19").setText("1");
                     var app = sap.ui.getCore().byId("myApp"); 
                     //Hide third screen Mob20
			    	//   Mob20HideThirdScreen();
                     app.to("idGridSubMenuIMWM");
                     
                    
                    
                     
      
        /*sap.ui.getCore().byId("Mob19listMatNo").destroyItems();
		//We need to reform the list with the non selected items ONLY
        var resultArrIni = [];
        for ( var index = 0 ; index < results.length ; index ++)
		{
		 if (results[index].selected == false )
			 {
			 
			 var resultData = {
	                	"desc" : results[index].MaterialDesc,
	                	"qty" : results[index].Quantity,
	                	"matnum" : results[index].Material,
	                	"loc" : results[index].StorageLoc,
	                	"locdesc" : results[index].StorageLocDesc,
	                	"serial" : results[index].Serialized,
	                	"batch" : results[index].BatchManaged,	
	                	"batchnum" : results[index].Batch,	
	                	"selected" : false,
	                	"POItem" :  results[index].POItem,
	                	"backcolor" : "#FFFFFF",
	                	"Plant" : results[index].Plant,
	                	"UOM" : results[index].UOM
	                };
			 
			 resultArrIni.push(resultData);			 
			 }
		
		}
        var  resDataFinalArray =  {"results" : resultArrIni};
		 var oJSONModelMob19MasterList = new sap.ui.model.json.JSONModel(resDataFinalArray);
		 var listMat = sap.ui.getCore().byId("Mob19listMatNo");
			 listMat.setModel(oJSONModelMob19MasterList);*/
                     

                     if( g_isDebug == true)
                     {
                     //Service End Time
                     var logInfo1 = getTimeStamp() +"MOB19:: Service: HeaderGRSet Finish" ;
                     //Log file Service Start and End Time
                     var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
                     logFileUpdate(g_ServiceStartEndTime);
                     }
                     
                     
		},
		function(oError){
			closeSplashScreen();
			
			 try
				{var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
				    		   messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
				}catch(e)
					{sap.m.MessageBox.show(
								 e.message+ " " +" "+" ",
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
                var logInfo1 = getTimeStamp() +"MOB19:: Service: HeaderGRSet Failed no network" ;
                //Log file Service Start and End Time
                var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
                logFileUpdate(g_ServiceStartEndTime);
                }
				
				}
			
		}
		
		
		);

		 // },1000);//constant delay
		
			}
			
			else
				{
				
				
				for ( var index = 0 ; index < results.length ; index ++)
				{
				 if (results[index].selected == true )
					 {			 
						// alert("mow we save");
					 if (sap.ui.getCore().byId("MOB19Batch").getValue()  != null && sap.ui.getCore().byId("MOB19Batch").getValue()  != undefined
								&& sap.ui.getCore().byId("MOB19Batch").getValue() != "")
							{		
							//expDate = sap.ui.getCore().byId("MOB19Batch").getDateValue().toISOString().substring(0,19);
						    expdate =  
						    	window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+results[index].matnum + "DateTimeISO");
							//expDate = sap.ui.getCore().byId("MOB19Batch").getDateValue();
							}
					 
					 var matnum  = results[index].matnum ;
					 var delItemNum = results[index].DeliveryItem ;
						var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+matnum+"_"+delItemNum+"_"+index;
						//var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+matnum;
						var scannedValues = window.localStorage.getItem(titMat);
						
						if( scannedValues != null)
					    {
					    scannedValues = scannedValues.replace(/,/g, "_");
					    scannedValues = scannedValues.replace(/"/g, "");
					    scannedValues = scannedValues.replace("[", "");
					    scannedValues = scannedValues.replace("]", "");
					    }
						else
						{
						
						scannedValues =  "";
						}
					
						
					 var lineItemData  =  {
							 	DeliveryNo :  sap.ui.getCore().byId("ip_po_del_num").getValue() ,
							 	DeliveryItem : results[index].DeliveryItem ,
						        Material : results[index].matnum,
						        Plant : results[index].Plant,
						        StorageLoc : results[index].loc,
						        Quantity :  results[index].qty ,
						        UOM  : results[index].UOM,
						        ExpireDate :expDate,
						        SerialNo : scannedValues
					 };
					 
					 lineItems.push(lineItemData);
					 }
				}
				
				
				
				createReqData.NavGR =  lineItems ;		
			
				//setTimeout(function(){
				    closeSplashScreen();//splash screen closed
				    oDataMOB19Save.create(readRequestURL, createReqData, null, 
						function(oResponse) {
						
				var msg = "Posting Successful. " + "Material Document Number is " + oResponse.MaterialDoc;
				jQuery.sap.require("sap.m.MessageToast");
		        sap.m.MessageToast.show(msg);	
		        
		        g_MobileNavigationId = "MainGrid-Inventory";
   	           sap.ui.getCore().byId("LocallblLoadingPageMob19").setText("1");
                  var app = sap.ui.getCore().byId("myApp"); 
                  //Hide third screen Mob20
			    	//   Mob20HideThirdScreen();
                  app.to("idGridSubMenuIMWM");
		       // sap.ui.getCore().byId("idMOB19MasPg").getController().showDetailsMOB19();
				},
				function(oError){
					 try
						{var data = JSON.parse(oError.response.body);
						for(var event in data)
						{var dataCopy = data[event];	
							try{
							var messageFromBackend = dataCopy.innererror.errordetails[0].message;
							sap.ui.getCore().byId("MOB19ErrTxt").setValue(messageFromBackend);
							sap.ui.getCore().byId("MOB19ErrTxt").setVisible(true);
							window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"ERR",
									messageFromBackend);
							sap.m.MessageBox.show(
						    		   messageFromBackend+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");
						}catch(e)
							{sap.m.MessageBox.show(
										 e.message+ " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,
											"Error");
								break;
							}}}
				 
					catch(e)
						{
						sap.m.MessageBox.show(
		                "Service Not Available - Please contact system administrator" + " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,
									"Error");}
					
				}
				
				
				);

				//  },1000);//constant delay
				
					
				}
			}
    	}
	}
	},
	
	 checkSelectCount : function()
		{
			var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
			var results = oListMOB19Model.oData.results;
			var numSelected = 0;
			
			for ( var index = 0 ; index < results.length ; index ++)
				{
				 if (results[index].selected == true )
					 {
					 numSelected ++ ;
					 }
				}
			
			if (numSelected ==  0)
			{
			
		
			
			sap.m.MessageBox.show("Please select the line items that need to be posted"+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
			
			
			return false ;
			}
			else
				{
				
				return true ;
				}
			

		} ,
		
		
	
	}
	
	
	

);

function checkTolerance()
{

	var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
	var results = oListMOB19Model.oData.results;
	var numSelected = 0;
	var qtyMismatch = false ;
	var OverDelTolranceInt =  parseInt(gOverDelTolrance);
	var QtyInt = parseInt(Qty); 
	var ipQtyInt = parseInt(sap.ui.getCore().byId("MOB19Qty").getValue()); 
	if (ipQtyInt >  ( QtyInt + OverDelTolranceInt))
		{
	
	for ( var index = 0 ; index < results.length ; index ++)
		{
		 if (results[index].selected == true )
			 {
			 numSelected ++ ;
			 var rowID  = results[index].ID ;
				var qty = results[index].qty;
				var QtyInt = parseInt(results[index].qty); 
				var OverDelTolranceInt =  parseInt(results[index].OverDelTolranceInt);
				var ipQtyInt = parseInt(sap.ui.getCore().byId("MOB19Qty").getValue()); 
				qty = parseInt(qty);
				$("#"+rowID+"").css("background-color","rgba(255, 77, 77, 0.72)");
				if (ipQtyInt >  ( QtyInt + OverDelTolranceInt))
				{
					//results[index].icon  =  "img/err_mob19.png";
					$("#"+rowID+"").css("background-color","rgba(255, 77, 77, 0.72)");
					qtyMismatch = true ;
					
}
}
		}
	oListMOB19Model.updateBindings();
	 if (qtyMismatch == true )
		{
		
		return false ;
		}
	
	else
		{
		return true ;
		}
		
	
}
}

 function checkSerialQtyMOB19 (index)
{
	var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
	var results = oListMOB19Model.oData.results;
	var numSelected = 0;
	var qtyMismatch = false ;
	
	/*
	for ( var index = 0 ; index < results.length ; index ++)
		{*/
		/* if (results[index].selected == true )
			 {*/
			 numSelected ++ ;
			 var rowID  = results[index].ID ;
			 var matnum  = results[index].matnum ;
			 var delItemNum = results[index].DeliveryItem ;
			 var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+matnum+"_"+delItemNum+"_"+index;
				var Mob19SerialLogLocalStorage = window.localStorage.getItem(titMat);
				//var qty = results[index].qty;
				//qty = parseInt(qty);
				var qty= window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+results[index].matnum+results[index].DeliveryItem + "SerLogVal"+"_"+index);
				if (Mob19SerialLogLocalStorage === undefined || Mob19SerialLogLocalStorage === null || 
					Mob19SerialLogLocalStorage.length === 0)
			    {
					qty = results[index].qty;
					qty = parseInt(qty);
					
					
					if (qty > 0)
					{
						//results[index].icon  =  "img/err_mob19.png";
						$("#"+rowID+"").css("background-color","rgba(255, 77, 77, 0.72)");
						qtyMismatch = true ; 
						
					}
					}
			 
				else
					{
					

					var serNumRcvd = new Array();
					serNumRcvd =  JSON.parse(Mob19SerialLogLocalStorage);					
				    if (qty != serNumRcvd.length)
				    	{
				    	
				      //  results[index].icon  =  "img/err_mob19.png";
				    	$("#"+rowID+"").css("background-color","rgba(255, 77, 77, 0.72)");
				    	qtyMismatch = true ; 
				    	
				    	}
					}
					
/*}
}*/
	oListMOB19Model.updateBindings();
	/*if (numSelected ==  0)
		{
		
		sap.m.MessageBox.show("Please select the line items that need to be posted"+ " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		return false ;
		}
	
	else*/ if (qtyMismatch == true )
		{
		
		return false ;
		}
	
	else
		{
		return true ;
		}
		}
