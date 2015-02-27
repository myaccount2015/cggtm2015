sap.ui.controller("com.cg.gtm.view.Mob26TwoScrItenScn", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob26TwoScrItenScn
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob26TwoScrItenScn
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob26TwoScrItenScn
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob26TwoScrItenScn
*/
//	onExit: function() {
//
//	}

	
	showSerialLst : function(oEvent)
	{
		//sap.ui.getCore().byId("Mob26-oResponsivePopover").openBy(this);

		 
		var scannedValues = window.localStorage.getItem("NewSerialNumbersMob26");
				scannedValues =  JSON.parse(scannedValues);
				var array = [];
				if (scannedValues != null )
					{for ( var i = 0 ; i < scannedValues.length ; i++)
					{var res = {"scannerValues" :scannedValues[i],};
					array.push(res);}}
				    var mainArr = [];
				         mainArr = {"results" :  array};
				         
				         
				         
				         
				     var oJSONModelMob20Res = new sap.ui.model.json.JSONModel();
				     oJSONModelMob20Res.setData(mainArr);
				     
				     //sap.ui.getCore().byId("oResponsivePopover").close(this);
				   // sap.ui.getCore().byId("oResponsivePopover").openBy(this);
				     this.popover = sap.ui.getCore().byId("Mob26-oResponsivePopover");
				     this.popover.openBy(oEvent.getSource());
				     sap.ui.getCore().byId("Mob26-oResponsivePopoverList").setModel(oJSONModelMob20Res);
				    // oResponsivePopoverList.setModel(oJSONModelMob20Res);
				    // sap.ui.getCore().byId("oResponsivePopover").addContent( sap.ui.getCore().byId("oResponsivePopoverList"));

				     
				     
	                 	

		
		
	},
	handleDelete : function(evt)
	{   evt.getSource().destroyItems();
		sap.ui.getCore().byId("Mob26-oResponsivePopover").close(this);
	    
	    var contentDel = evt.getParameter("listItem").mProperties.title;
	    var  getScannedItemRec = window.localStorage.getItem("NewSerialNumbersMob26");
		getScannedItemRec = JSON.parse(getScannedItemRec);
	var arrFin = [];
	var mainArr = [];
	var array = [];
		for( var i = 0 ; i < getScannedItemRec.length ; i++ )
			{
			
			if(getScannedItemRec[i] != contentDel )
				{
				
				arrFin.push(getScannedItemRec[i]);
				
				 
			
				
				}
			
			
			
			}
		var res = {"scannerValues" :arrFin};
	      array.push(res);
		 mainArr = {"results" :  array};
		/* var oJSONModelMob20Res = new sap.ui.model.json.JSONModel();
		    oJSONModelMob20Res.setData(mainArr);
			sap.ui.getCore().byId("Mob26-oResponsivePopoverList").setModel(oJSONModelMob20Res);*/
		
		var stringifiedNoti = JSON.stringify(arrFin);
		window.localStorage.setItem("NewSerialNumbersMob26",stringifiedNoti);
		
		
	},

AddSer : function()
{

	
    var oJSONModelMob20Res = new sap.ui.model.json.JSONModel();
	//create array
	var newScanArray;
	var array = [];
	var serNumArr = [];
	var mainArr = [];
	var scannedItem = sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").getValue();
	
	///////////////

       if( sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").getValue() == "")
			{
			sap.m.MessageBox.show("Please Enter Serial Number"+ " " +
			" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
			}
	
       else
    	   {
    	   
    	newScanArray = window.localStorage.getItem("NewSerialNumbersMob26");
    	if (newScanArray === undefined || newScanArray === null || 
    			newScanArray.length === 0)
    		{
    		//sap.ui.getCore().byId("Mob26-oResponsivePopoverList").destroyItems();
    		 
	       	serNumArr[0] = sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").getValue(); 
    		var notiNumRcvdString = 	JSON.stringify(serNumArr);
    		window.localStorage.setItem("NewSerialNumbersMob26",notiNumRcvdString);
			
    		
			
    		/*newScanArray = window.localStorage.getItem("NewSerialNumbersMob26");
    		var serNumArrTitle = new Array();
	      	var titString  = 	JSON.parse(newScanArray);
	        serNumArrTitle[0] = titString; 
	        var res = {"scannerValues" :serNumArrTitle[0],};
		        array.push(res);
		        mainArr = {"results" :  array};
 			  
 			     oJSONModelMob20Res.setData(mainArr);
 			     sap.ui.getCore().byId("Mob26-oResponsivePopoverList").setModel(oJSONModelMob20Res);
 			sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are "+ titString.length+" expected serial numbers"); 
    		*/
    		}
    	
    	else if( newScanArray != null)
           	{
    		//sap.ui.getCore().byId("Mob26-oResponsivePopoverList").destroyItems();
           
		var getSerNumInArray = new Array();
        	getSerNumInArray  = 	JSON.parse(newScanArray);
        	
        	 var getSerNumArr = Mob26getSerDocJSONArray[0].SerialNo;
             getSerNumArr = getSerNumArr.split("_");
             
             
           for ( var i = 0 ; i <= getSerNumInArray.length ; i++)
			{
           	
				if( (getSerNumInArray[i] == scannedItem) || (getSerNumArr[i] == scannedItem) )
					{
					sap.m.MessageBox.show(
	    				      "Already Available Scan",
	    				      sap.m.MessageBox.Icon.Error,
	    				      "Error",
	    				      [sap.m.MessageBox.Action.OK],
	    				      function() { 
	    				    	  
	    				    	  
	    				      }
	    					 );
					break;
					}
				else
					{
					
				getSerNumInArray.push(sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").getValue());//pushing new noti number 
			var notiNumRcvdString = 	JSON.stringify(getSerNumInArray);
		    window.localStorage.setItem("NewSerialNumbersMob26",notiNumRcvdString);
		    
		    break;
	             }}
    	   }
    	
    	
    	
    	 newScanArray = window.localStorage.getItem("NewSerialNumbersMob26");
    	 var getSnRecItm  = 	JSON.parse(newScanArray);
    	for( var j = 0 ; j<getSnRecItm.length ; j++)
    		{
    		   var res = {"scannerValues" :getSnRecItm[j],};
			        array.push(res);
			        mainArr = {"results" :  array};
			        
    		}
	 			oJSONModelMob20Res.setData(mainArr);
	 			sap.ui.getCore().byId("Mob26-oResponsivePopoverList").setModel(oJSONModelMob20Res);
    
			 //sap.ui.getCore().byId("Mob26-getScanItemCnt").setText("There are "+ getSnRecItm.length+" expected serial numbers");  
    	   
    	   }
		

	////////////////
	   sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValue("");
       sap.ui.getCore().byId("Mob26-popWin").close();

	
},
BtnFinish : function()
{
	
debugger;
	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true)
	{
     
		sap.m.MessageBox.show(
					"It is DemoMode"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
					"Error");

  			
	}
	
	else{
		openSplashScreen();//splash screen opened
        setTimeout(function(){ closeSplashScreen();//splash screen closed
		
        if(scannedValues)
		{
         
         
        scannedValues = scannedValues.replace(/,/g, "_");
 	    scannedValues = scannedValues.replace(/"/g, "");
 	    scannedValues = scannedValues.replace("[", "");
 	    scannedValues = scannedValues.replace("]", "");
 	    
 	    
		
		}
	
	else{
		var items= sap.ui.getCore().byId("Mob26-SerSerialNum").getItems();
		var scannedValues= "";
		if(items.length>0){
		for(i=0;i<items.length;i++){
			scannedValues= scannedValues+items[i].getText();

		}

		}
	    
	}
   

	        
		  	
		//Calling service
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Start" ;

		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV");
		
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var oDataCreateCount = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "/TransferPutawaySet(TransferOrderno='"+Mob26getSerDocJSONArray[0].TransferOrderno+
		                      "',TransferOrderItem='"+Mob26getSerDocJSONArray[0].TransferOrderItem+"')";
		oDataCreateCount.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
  
		    
         var createReqData = 
                    {
        			"TransferOrderno" : Mob26getSerDocJSONArray[0].TransferOrderno,
	    		    "TransferOrderItem" : Mob26getSerDocJSONArray[0].TransferOrderItem,	
	    			"MaterialDocument" : Mob26getSerDocJSONArray[0].MaterialDocument,	
	    			"MaterialDocumentItem" : Mob26getSerDocJSONArray[0].MaterialDocumentItem,
	    			"MaterialDocumentYear" : Mob26getSerDocJSONArray[0].MaterialDocumentYear,
	                "WhouseNo" : Mob26getSerDocJSONArray[0].WhouseNo,	
	    			"Plant" : Mob26getSerDocJSONArray[0].Plant,	
	    		    "Material" : Mob26getSerDocJSONArray[0].Material,	
	    		    "DestinationQuantity" : Mob26getSerDocJSONArray[0].DestinationQuantity,
	    		    "DestinationStorageType" : Mob26getSerDocJSONArray[0].DestinationStorageType,	
	    
	    		    
	    		    
	    			"DestinationStorageBin" : sap.ui.getCore().byId("Mob26-ipStrBin").getValue(),	
	    			"SerialNo" : scannedValues,	
	    		
	    			};	
			
         
         
         
         
         
         oDataCreateCount.update(readRequestURL, createReqData, null, 
 				function(oResponse) {
 			
        	 sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");

        	 debugger;
        	
           //  var app = sap.ui.getCore().byId("myApp"); 
           //  app.to("idGridSubMenuIMWM");
 					var msg = "Data Updated Successfully";jQuery.sap.require("sap.m.MessageToast");
 		            sap.m.MessageToast.show(msg);	
 		           var app = sap.ui.getCore().byId("myApp"); 
                   app.to("idGridSubMenuIMWM");
                   g_MobileNavigationId = "MainGrid-Inventory";
      	           sap.ui.getCore().byId("LocallblLoadingPageMob19").setText("1");
                     var app = sap.ui.getCore().byId("myApp"); 
                     //Hide third screen Mob20
			    	//   Mob20HideThirdScreen();
                     app.to("idGridSubMenuIMWM");
                     
 		           
 		          if( g_isDebug == true)
 		         {
 		         //Service End Time
 		         var logInfo1 = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Finish" ;
 		         //Log file Service Start and End Time
 		         var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
 		         logFileUpdate(g_ServiceStartEndTime);
 		         }
 				},
 				function(oError){
 					 try{
 						 
 						var data = JSON.parse(oError.response.body);
 						for(var event in data)
 						{var dataCopy = data[event];	
 						try{
 						    
 				
 							var messageFromBackend = dataCopy.innererror.errordetails[0].message;
 						
 						sap.m.MessageBox.show(
 						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
 						"Error");
 					 						
 						
 						
 						break;
 						}
 						catch(e)
 						{
 				
 						sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
 						sap.m.MessageBox.Icon.ERROR,"Error");
 					
 						break;
 						
 						}}
 						}
 					    catch(e)
 						{
 					
 						sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
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
 					    });

	
	       
		    
		    
		    
		    
		    
		    
		    
		    
	},1000);//constant delay}   
        
	}   
	},
	
	ScanSerial : function()
	{
		varScan = "Mob26Master";
		Mob26scan = "Serial";
	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	.getController().scanNow();
			
		  /* var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
			jsonScanResult.done(function(results){
		    var scannerRes = results.scanMaterials;
		    

			   if( scannerRes[0].Material == Mob26getSerDocJSONArray[0].Material )
		    	{
		    	sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
		        sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
		        sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(true);	
		    	}
		    else if( scannerRes[0].Material == null ||scannerRes[0].Material == undefined
		    || scannerRes[0].Material == ""	
		    )
		    	{
		    	
		    	}
		    else
		    	{
		    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		    	}
		    
			});*/
		   
		   
		/*var Material = "";
	    var mainArray= [];
		cordova.plugins.barcodeScanner.scan(
	            function(result){
	            //var resArray = result.text.split("#");
	            var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
	            var res = str.split("#");
	            for( var i = 1 ; i< res.length; i++)
	            {
	            Material = res[i];
	            Material = Material.split(":");
	            Material = Material[1];
	            mainArray.push(Material);
	            }
	            if( mainArray[0] == Mob26getSerDocJSONArray[0].Material )
		    	{
		    	sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
		        sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
		        sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(true);	
		    	}
		    else if( mainArray[0] == null || mainArray[0] == undefined
		    || mainArray[0] == ""	
		    )
		    	{
		    	
		    	}
		    else
		    	{
		    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		    	}
	            
	            }, 
	            function(error){
	           	sap.m.MessageBox.show("Scan failed: " + error);
	       
	            });	*/
		
		
		
		   
		    
			
	},
});