sap.ui.controller("com.cg.gtm.view.Mob26MasterTrOrder", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob26MasterTrOrder
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob26MasterTrOrder
*/
	onBeforeRendering: function() {
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob26MasterTrOrder
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob26MasterTrOrder
*/
//	onExit: function() {
//
//	}
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB26";
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
	scanTrCode:	function()
	{
		
		varScan = "Mob26Master";
		Mob26scan = "TO";
	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	.getController().scanNow();
	
		/*var trLine;
		var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
		cordova.plugins.barcodeScanner.scan(
	            function(result){

	            var str = result.text;//"00000010600001NP1";
	            var tr = str.substr(0, 10);
	            var lin = str.substr(10,4 );
                trLine= tr + "." + lin;
                sap.ui.getCore().byId("Mob26-ipTrOrder").setValue(trLine);
                if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"Barcode Scan::"+str+"-Finish" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
                }, 
	            function(error){
	           	sap.m.MessageBox.show("Scan failed: " + error);
	           	errorText = error;
	           	
	           	if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
	           	
	            });	*/
		
		
		
	},
	
btnNext : function(oEvent)
{
	
	window.localStorage.setItem("NewSerialNumbersMob26", "");
	//Check Tr Value
	sap.ui.getCore().byId("Mob26-btnScn").setVisible(false);
	 var getTit = sap.ui.getCore().byId("Mob26-OrderDetTit");
	 var getTrNum = sap.ui.getCore().byId("Mob26-ipTrOrder").getValue();
	 var demoswitch = sap.ui.getCore().byId("demoswitch");
	 var numberSplitter = [];
	 numberSplitter = getTrNum.split(".");
	 var onlyTrNum = numberSplitter[0];//tr input
	 var onlyItmNum = numberSplitter[1];//linew num input
	 
	 //Default WareHouse
	 var getWarHos = window.localStorage.getItem("defWHCode");                              //sap.ui.getCore().byId("Mob26-txtFrWareHouse").getText();//ware house ip
	 var getXeroPaddingOrNym = zeroPadding( onlyTrNum, 10, '0'); 
	 
	
	     if(    getTrNum == "" || getTrNum == null || getTrNum == undefined  )
	    	 {
	    	 sap.m.MessageBox.show("Please Enter Transfer Order" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
	    	 
	    	 
	    	 }
	     
	     else  if (numberSplitter.length != 2)
	    	 {
	    	 sap.m.MessageBox.show("Check your Transfer Order (ex: 0000000001.0001)" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
	    	 }
	     else  if ( isNaN(numberSplitter[0]) || isNaN(numberSplitter[1])  )
	    	 {
	    	 sap.m.MessageBox.show("Enter valid Tr Order" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
	    	 }
	    
////////////////////////////////////Demo mode///////////////////////////////////////////////////////	     
	     else  if (demoswitch.getState() == true)
	    	 {
	    	 
	    	 sap.ui.getCore().byId("Mob26-SerSerialNum").destroyItems();
             Mob26getSerDocJSONArray  =  [];
             
             var results = {
            		 "Material" : "123443",
             		 "MaterialDescription": "Heavy water",
             		 "Batch" : "12643",
             		 "DestinationQuantity":"3",
             		 "Uom":"EA",
             		 "StockCategoryDesc":"Store",
             		 "DestinationStorageType":"0001",
             		 "DestinationStorageBin":"z-01-01-01",
             		 "SerialNo":"1234321_6530897",
             		 "ScanSerial":"X",
             		 "SplStock":"B" ,
             		"SplStockNumber":"123",
             		"SplStockDescription" : "Discription"
            		 
             }
             Mob26getSerDocJSONArray.push(results);
            	         
             //Spl Stk Checking
             if( Mob26getSerDocJSONArray[0].SplStock  == "B")
            	 {
            	 
            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Customer Stk");
                 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText(Mob26getSerDocJSONArray[0].SplStockNumber+"-"+Mob26getSerDocJSONArray[0].SplStockDescription);
            	 }
             else if( Mob26getSerDocJSONArray[0].SplStock  == "Q")
            	 {
            
            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Project Stock");
            	 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText(Mob26getSerDocJSONArray[0].SplStockNumber+"-"+Mob26getSerDocJSONArray[0].SplStockDescription);
            	 }
             else
            	 {
            	// sap.ui.getCore().byId("Mob26-twoScr-ProStk").setText("N/A");
            	// sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText("N/A");
            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Project/Customer Stock");
            	 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText("N/A");
            	
            	 }
                          
             //Bind values to sec scr Tables
             sap.ui.getCore().byId("Mob26-twoScr-Mat").setText(Mob26getSerDocJSONArray[0].Material);
             sap.ui.getCore().byId("Mob26-twoScr-Des").setText(Mob26getSerDocJSONArray[0].MaterialDescription);
             sap.ui.getCore().byId("Mob26-twoScr-Batch").setText(Mob26getSerDocJSONArray[0].Batch);
             sap.ui.getCore().byId("Mob26-twoScr-Qty").setText(Mob26getSerDocJSONArray[0].DestinationQuantity+Mob26getSerDocJSONArray[0].Uom);
             sap.ui.getCore().byId("Mob26-twoScr-StkCat").setText(Mob26getSerDocJSONArray[0].StockCategoryDesc);
             
             //Dest Bin
             sap.ui.getCore().byId("Mob26-lblStrBin").setText(Mob26getSerDocJSONArray[0].DestinationStorageType + " "+Mob26getSerDocJSONArray[0].DestinationStorageBin);
       	     
             //get Ser Num
             var array = [];
             var mainArr = [];
             var getSerNumArr = Mob26getSerDocJSONArray[0].SerialNo;
             getSerNumArr = getSerNumArr.split("_");
           
             //Bind serial number to res list
             if (getSerNumArr != null || getSerNumArr != undefined)
				{
            sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are "+ getSerNumArr.length+" expected serial numbers");
            
            for ( var i = 0 ; i < getSerNumArr.length ; i++)
            	{
            	
            	sap.ui.getCore().byId("Mob26-SerSerialNum").addItem(
            	
            			new sap.m.Label({
            				text : getSerNumArr[i]
            			})
            			
            	);
            	}
            
				}
             else
            	 {
            	 sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are 0 expected serial numbers");
            	 }
             
           
           			
          
             //////////////////////////////////////////////////////////////////////////////
             if ( g_runningOnPhone == true)
 			{
 			
 			sap.ui.getCore().byId("myApp").to("idMob26OrdDet");
 			
 			}
 		
 		else
 			{
 			sap.ui.getCore().byId("idMOB26SplitApp").to("idMOB26-TwoScreen");	
 			Mob26ThirdScrHide();
 			}
  	       sap.ui.getCore().byId("Mob26-lblyourloc").setVisible(false);//hide location
  	       sap.ui.getCore().byId("Mob26-txt").setVisible(false);//hide text
  	       getTit.setTitle("Order :"+onlyTrNum);
  		   sap.ui.getCore().byId("Mob26-btnFinish").setVisible(false);
  		   sap.ui.getCore().byId("Mob26-btnScn").setVisible(false);
  		  // Mob26SecScreenShow();
  		   
	    	 
	    	 }
	        
	     
///////////////////////////////////////////////Service part////////////////////////////////////////////////////////////		
	     else{
	    	
	    	 
             ////////////////////////////////////////	
	    	openSplashScreen();
	    	
	    	//Service Start Time
	    	var logInfo = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Start" ;

	    	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPutawaySet?$filter=WhouseNo eq '"+getWarHos+"' and TransferOrderno eq '"+getXeroPaddingOrNym+"' and TransferOrderItem eq '"+onlyItmNum+"'");
	    	 if(serviceURL == "Fail")
			 {
			 return false;
			 }
	    		//var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	    		var aData = jQuery.ajax({   
	    		     url : serviceURL,
	    		     type: "GET",
	    	         contentType : "application/json",
	    	         dataType : 'json',
	    	         success : function(data, textStatus, jqXHR) {
	    	                 Mob26getSerDocJSONArray  =  data.d.results; //global variable
	    	                 
	    	                 //Spl Stk Checking
	    	                 if( Mob26getSerDocJSONArray[0].SplStock  == "B")
	    	            	 {
	    	                	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("");
	    	            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Customer Stk");
	    	                 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText(Mob26getSerDocJSONArray[0].SplStockNumber+"-"+Mob26getSerDocJSONArray[0].SplStockDescription);
	    	            	 }
	    	             else if( Mob26getSerDocJSONArray[0].SplStock  == "Q")
	    	            	 {
	    	            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("");
	    	            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Project Stock");
	    	            	 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText(Mob26getSerDocJSONArray[0].SplStockNumber+"-"+Mob26getSerDocJSONArray[0].SplStockDescription);
	    	            	 }
	    	             else
	    	            	 {
	    	            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("");
	    	            	// sap.ui.getCore().byId("Mob26-twoScr-ProStk").setText("N/A");
	    	            	// sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText("N/A");
	    	            	 sap.ui.getCore().byId("Mob26-customerStocklbl").setText("Project / Customer Stk");
	    	            	 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText("N/A");
	    	            	
	    	            	 }
	    	                 
	    	                 
	    	                 //Bind values to sec scr Tables
	    	                 sap.ui.getCore().byId("Mob26-twoScr-Mat").setText(Mob26getSerDocJSONArray[0].Material);
	    	                 sap.ui.getCore().byId("Mob26-twoScr-Des").setText(Mob26getSerDocJSONArray[0].MaterialDescription);
	    	                 sap.ui.getCore().byId("Mob26-twoScr-Batch").setText(Mob26getSerDocJSONArray[0].Batch);
	    	                 sap.ui.getCore().byId("Mob26-twoScr-Qty").setText(Mob26getSerDocJSONArray[0].DestinationQuantity+Mob26getSerDocJSONArray[0].Uom);
	    	                 sap.ui.getCore().byId("Mob26-twoScr-StkCat").setText(Mob26getSerDocJSONArray[0].StockCategoryDesc);
	    	                 
	    	                 //Dest Bin
	    	                 sap.ui.getCore().byId("Mob26-lblStrBin").setText(Mob26getSerDocJSONArray[0].DestinationStorageType + " "+Mob26getSerDocJSONArray[0].DestinationStorageBin);
	    	           	     
	    	                 //get Ser Num
	    	                 var array = [];
	    	                 var mainArr = [];
	    	                 var getSerNumArr = Mob26getSerDocJSONArray[0].SerialNo;
	    	                 getSerNumArr = getSerNumArr.split("_");
	    	                 
	    	                 
	    	                 
	    	                 //Bind serial number to res list
	    	                 if (getSerNumArr != "" )
	    	 				{
	    	                
	    	                sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are "+ getSerNumArr.length+" expected serial numbers");
	    	                
	    	                sap.ui.getCore().byId("Mob26-SerSerialNum").destroyItems();
	    	                
	    	                
	    	                for ( var i = 0 ; i < getSerNumArr.length ; i++)
	    	                	{
	    	                	
	    	                	sap.ui.getCore().byId("Mob26-SerSerialNum").addItem(
	    	                	
	    	                			new sap.m.Label({
	    	                				text : getSerNumArr[i]
	    	                			})
	    	                			
	    	                	);
	    	                	}
	    	                
	    	 				/*for ( var i = 0 ; i < getSerNumArr.length ; i++)
	    	 				{
	    	 					var res = {"scannerValues" :getSerNumArr[i],};
	    	 				        array.push(res);
	    	 				}
	    	 				
	    	 				
	    	 			   
	    	 			     mainArr = {"results" :  array};
	    	 			     var oJSONModelMob20Res = new sap.ui.model.json.JSONModel();
	    	 			     oJSONModelMob20Res.setData(mainArr);
	    	 			     sap.ui.getCore().byId("Mob26-oResponsivePopoverList").setModel(oJSONModelMob20Res);*/
	    	 				}
	    	                 else
	    	                	 {
	    	                	 sap.ui.getCore().byId("Mob26-SerSerialNum").destroyItems();
	    	                	 sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are 0 expected serial numbers");
	    	                	 }
	    	                 
	   ///////////////////////Naviation Area///////////////////////////////////////////////////////
	    	 	    		if ( g_runningOnPhone == true)
	    	 	    			{
	    	 	    			  g_MobileNavigationId = "Mob26-OrderDetTit";
	    	 	    			sap.ui.getCore().byId("myApp").to("idMob26OrdDet");
	    	 	    			
	    	 	    			
	    	 	    			}
	    	 	    		
	    	 	    		else
	    	 	    			{
	    	 	    			sap.ui.getCore().byId("idMOB26SplitApp").to("idMOB26-TwoScreen");	
	    	 	    			  Mob26ThirdScrHide();
	    	 	    			}
	    	            
	    	            
	    	 	  
	    	            
	    	 	       sap.ui.getCore().byId("Mob26-lblyourloc").setVisible(false);//hide location
	    	 	       sap.ui.getCore().byId("Mob26-txt").setVisible(false);//hide text
	    	 	       getTit.setTitle("Order :"+onlyTrNum);
	    	 		   sap.ui.getCore().byId("Mob26-btnFinish").setVisible(false);
	    	 		   //sap.ui.getCore().byId("Mob26-btnScn").setVisible(false);
	    	 		  // Mob26SecScreenShow();
	    	                 
	    	                  
	    	                 
	    	                 
	    	                 
	    	                closeSplashScreen();	
	    	                
	    	                
	    	                
	    	                if( g_isDebug == true)
	    	                {
	    	                //Service End Time
	    	                var logInfo1 = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Finish" ;
	    	                //Log file Service Start and End Time
	    	                var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	    	                logFileUpdate(g_ServiceStartEndTime);
	    	                }
	    	              
	    	         },
	    		 error: function(XMLHttpRequest, textStatus, errorThrown) {
	    			 
	    			 
	    			 
	    			 ///////////////////////////////////////////////////////
	    		
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
	    						sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
	    						sap.m.MessageBox.Icon.ERROR,"Error");break;
	    						}}}catch(e)
	    						{sap.m.MessageBox.show(
	    								"Service Not Available - Please contact system administrator" + " " +" "+" ",
	    						sap.m.MessageBox.Icon.ERROR,"Error");
	    						
	    						if( g_isDebug == true)
		    	                {
		    	                //Service End Time
		    	                var logInfo1 = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Failed no network" ;
		    	                //Log file Service Start and End Time
		    	                var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		    	                logFileUpdate(g_ServiceStartEndTime);
		    	                }
	    						
	    						
	    						}
	    						closeSplashScreen();
	    						
	    						
	    							    		    			 
	    		    			 //Unbind all values
	    		                 sap.ui.getCore().byId("Mob26-twoScr-Mat").setText("");
	    		                 sap.ui.getCore().byId("Mob26-twoScr-Des").setText("");
	    		                 sap.ui.getCore().byId("Mob26-twoScr-Batch").setText("");
	    		                 sap.ui.getCore().byId("Mob26-twoScr-Qty").setText("");
	    		                 sap.ui.getCore().byId("Mob26-twoScr-StkCat").setText("");
	    		                 sap.ui.getCore().byId("Mob26-twoScr-ProStk").setText("");
	    	                	 sap.ui.getCore().byId("Mob26-twoScr-CusStk").setText("");
	    	                
	    		                 //Dest Bin
	    		                 sap.ui.getCore().byId("Mob26-lblStrBin").setText("");
	    		    			 //scan
	    		                 sap.ui.getCore().byId("Mob26-btnScn").setVisible(false); 
	    		                 sap.ui.getCore().byId("Mob26-oResponsivePopoverList").destroyItems();
	    		                 sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are 0 expected serial numbers");
	    		                 
	    		    			 sap.ui.getCore().byId("Mob26-SerSerialNum").destroyItems();
	    		    			 Mob26getSerDocJSONArray[0] = "";
	    		    			 
	    		    			 
	    		 }
	    		
	    		});
	    	 
	    	 
           
		 
		   
	     }
////////////////////////////////////////////////////////////////////////////////////////////////////////	  	
}


});




function zeroPadding(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }