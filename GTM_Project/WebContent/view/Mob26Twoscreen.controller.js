sap.ui.controller("com.cg.gtm.view.Mob26Twoscreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob26Twoscreen
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob26Twoscreen
*/
	onBeforeRendering: function() {
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob26Twoscreen
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob26Twoscreen
*/
//	onExit: function() {
//
//	}
	
	
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
			var entredTrNum =sap.ui.getCore().byId("Mob26-ipTrOrder").getValue();
			entredTrNum = entredTrNum.split(".");
			
			var scannedValues = window.localStorage.getItem("NewSerialNumbersMob26");
			
			
			//var AllSerNum;
		    //str = ["123","298"];
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
		   

			
		        
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB26:: Service: TransferPutawaySet Start" ;
	
			//Calling service
			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }
			var oDataCreateCount = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL = "/TransferPutawaySet(TransferOrderno='"+entredTrNum[0]+
			                      "',TransferOrderItem='"+entredTrNum[1]+"')";
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
	        	
              //   var app = sap.ui.getCore().byId("myApp"); 
              //   app.to("idGridSubMenuIMWM");
                 //Detail screen
               //  sap.ui.getCore().byId("idMOB26SplitApp").to("idMOB26-Mob26BlankScreen");
                 
                 
	 					var msg = "Data Updated Successfully";/*jQuery.sap.require("sap.m.MessageToast");
	 		            sap.m.MessageToast.show(msg);*/
	 		       	sap.m.MessageBox.show(
		            		msg +" ",
								sap.m.MessageBox.Icon.SUCCESS,
								"Success");
	 		           var app = sap.ui.getCore().byId("myApp"); 
	                     app.to("idGridSubMenuIMWM");
	 		            
	                     
	                     g_MobileNavigationId = "MainGrid-Inventory";
	               	           sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	                              var app = sap.ui.getCore().byId("myApp"); 
	                             
	                              app.to("idGridSubMenuIMWM");
	                             //Detail screen
	                              sap.ui.getCore().byId("idMOB26SplitApp").to("idMOB26-Mob26BlankScreen");
	                             
	                              
	 		           
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
	
	SecScrNext : function()
	{

		
		if( sap.ui.getCore().byId("Mob26-twoScr-Mat").getText() != "" )
			{
			
			sap.ui.getCore().byId("Mob26-btnFinish").setVisible(true);
			}
		else{
			sap.ui.getCore().byId("Mob26-btnFinish").setVisible(false);
		}
		
		
		
		
		var serDestBin = Mob26getSerDocJSONArray[0].DestinationStorageBin;
		
		var userDestBin = sap.ui.getCore().byId("Mob26-ipStrBin").getValue();
		
		
		
		if( (serDestBin != userDestBin) && ( userDestBin != ""))
			{
			sap.m.MessageBox.show(
				      "Your Destination bin has been changed.Do you want to continue.",
				      sap.m.MessageBox.Icon.WARNING,
				      "Bin Location Changed",
				      [sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO ],
				      function(oAction) { 
				    	  if(oAction == "NO")
				    		  {
				    		  
				    		  sap.ui.getCore().byId("Mob26-ipStrBin").setValue("");
				    		  
				    		  
				    		  }
				      }
					 );
			}
		
		 //Serial Enable
        if( Mob26getSerDocJSONArray[0].ScanSerial == "" ||
       		 Mob26getSerDocJSONArray[0].ScanSerial == null ||
       		 Mob26getSerDocJSONArray[0].ScanSerial == undefined)
       	 {
       	 sap.ui.getCore().byId("Mob26-btnScn").setVisible(false); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-Hbox").setVisible(false); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-labeldummy").setVisible(false); 
       	 
       	 }
        else
       	 {
       	 sap.ui.getCore().byId("Mob26-btnScn").setVisible(true); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-Hbox").setVisible(true); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-labeldummy").setVisible(true); 
       	 }
		
		  Mob26ThirdScrShow();
	
	}

});


function Mob26ThirdScrHide()
{
$("#idMob26ItmScn").hide();	

}



function Mob26ThirdScrShow()
{
$("#idMob26ItmScn").show();	

}


function Mob26SecScreenShow()
{
	$("#idMob26OrdDet").show();		
	
}

function Mob26SecScreenHide()
{
	$("#idMob26OrdDet").hide();		
	
}

