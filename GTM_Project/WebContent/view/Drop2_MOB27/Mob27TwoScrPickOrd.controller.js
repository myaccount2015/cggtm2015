sap.ui.controller("com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrPickOrd", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob27TwoScrPickOrd
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob27TwoScrPickOrd
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob27TwoScrPickOrd
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob27TwoScrPickOrd
*/
//	onExit: function() {
//
//	}
	Next: function(oEvent)
	{
		//Get Selected Record Tr.LineItems
		 var arrMob27GetJSONValues = sap.ui.getCore().byId("idMob27TrOrdScn").getModel();
		
	//Entry Field Validations
		//var fieldValVar = arrMob27GetJSONValues[0].RequirementNo;
		 
				
		 var matGetText =  sap.ui.getCore().byId("Mob27-order-lblDestStrBinBackValue").getText();
		 matGetText = matGetText.split(" ");
		 
		 var MDesGetText =  sap.ui.getCore().byId("Mob27-order-lblMatBackValue").getText();
		 MDesGetText = parseInt(MDesGetText);
		 
		 var BatchGetText =  sap.ui.getCore().byId("Mob27-order-lblBatBackValue").getText();
			BatchGetText = parseInt(BatchGetText);
	
		 
		//Dest Str Field  //Mob27-order-DestInput  ////Mob27-order-lblDestStrBinBackValue
		 if( sap.ui.getCore().byId("Mob27-order-DestInput").getValue() != matGetText[1])
		 {
			 sap.m.MessageBox.show(
						"Enter Correct Destination Number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error")
			 return;
		 }
		//Material Field   //Mob27-order-MatInput  //Mob27-order-lblMatBackValue 
		 
		 
		 else if( sap.ui.getCore().byId("Mob27-order-MatInput").getValue() != MDesGetText
			
		 )
			 {
			 sap.m.MessageBox.show(
						"Enter Correct Material Number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error")
			 return;
			 }
		 
		 
//Batch Field  //Mob27-order-BatInput    // Mob27-order-Batch(label)
		 
		 else if( sap.ui.getCore().byId("Mob27-order-Batch").getVisible() == true)
		 {
			 if( sap.ui.getCore().byId("Mob27-order-BatInput").getValue() != BatchGetText)
			 
				 sap.m.MessageBox.show(
							"Enter Correct Batch Number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error")
			 return;
			 
		 }
		 
		 
		//Serial Field //Mob27-order-Serial (label)    //Mob27-2-oResponsivePopover
		 else if( sap.ui.getCore().byId("Mob27-order-Serial").getVisible() == true)
		 {
			 var modelRes = sap.ui.getCore().byId("Mob27-2-oResponsivePopover").getModel();
		 if(   typeof modelRes == 'undefined' )
			 {
			 sap.m.MessageBox.show(
						"Enter Correct Serial Number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error")
			 return;
			 }
		 else if(   typeof modelRes != 'undefined' )
		 {
             var oData = modelRes.oData.results;
			 
			 if( typeof oData == 'undefined')
				 {
				 sap.m.MessageBox.show(
							"Enter Correct Serial Number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error")
				 }
			 
			 else if( oData.length == 0)
				 {
				 sap.m.MessageBox.show(
							"Enter Correct Serial Number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error")
				 return;
				 }
			 
			 else if(oData.length != sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue() )
			 {
			 sap.m.MessageBox.show(
						"Entered Qty not matched with Scanned serial number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error")
	  
	      return ;
			 }
			 
			 else{//SelectedRowId
				 debugger;
				 var getlineItem = sap.ui.getCore().byId("Mob27-ordTable-LineItemAndTrOrder-idMob27-TrOrderTable-"+arrMob27GetJSONValues[0].SelectedRowId)
				 .getTitle();
				 getlineItem = getlineItem.split(".");
				 getlineItem = getlineItem[1];
				 
				 
				 var arrLength = getlineItem;
				 var getLine = arrMob27GetJSONValues[0].RequirementNo[0].LineNo;
					 getLine = getLine.toString();
					 if (getLine <= arrLength )
				    	{
						 arrLength = 0;
				    	}
				    else
				    	{
				    	arrLength = arrLength-1;
				    	}
				 
				 
				 /*
					if(sap.ui.getCore().byId("Mob27-order-testLoopNext").getText() == "" )
								{
					var arrLength = arrMob27GetJSONValues[0].RequirementNo.length;   
								}
							else
								{
					var arrLength = sap.ui.getCore().byId("Mob27-order-testLoopNext").getText();
								}*/
							
							if( arrLength != null)
								{
								debugger;
					checkingAndUpdatingNextLineItemsOrder(arrMob27GetJSONValues, arrLength);
								
								}
							
							/*else if( arrLength == 1)
							{
					var lastRecUpd = arrMob27GetJSONValues[0].RequirementNo.length;
					lastRecUpd = --lastRecUpd;
					qtyCheckWithBackendOrder(lastRecUpd,arrMob27GetJSONValues);
							
					}*/ 
							
			 
			 } } }
		 
		 else{

			//SelectedRowId
			 
			 var getlineItem = sap.ui.getCore().byId("Mob27-ordTable-LineItemAndTrOrder-idMob27-TrOrderTable-"+arrMob27GetJSONValues[0].SelectedRowId)
			 .getTitle();
			 getlineItem = getlineItem.split(".");
			 getlineItem = getlineItem[1];
			 
			 
			 var arrLength = getlineItem;
			 var getLine = arrMob27GetJSONValues[0].RequirementNo[0].LineNo;
				 getLine = getLine.toString();
				 if (getLine <= arrLength )
			    	{
					 arrLength = 0;
			    	}
			    else
			    	{
			    	arrLength = arrLength-1;
			    	}
			 
			 
					/*if(sap.ui.getCore().byId("Mob27-order-testLoopNext").getText() == "" )
						{
						 var arrLength = arrMob27GetJSONValues[0].RequirementNo.length;   
						}
					else
						{
						var arrLength = sap.ui.getCore().byId("Mob27-order-testLoopNext").getText();
						}*/
					
					if( arrLength != null)
						{
						debugger;
						checkingAndUpdatingNextLineItemsOrder(arrMob27GetJSONValues, arrLength);
						
						}
					
					/*else if( arrLength == 1)
					{
					var lastRecUpd = arrMob27GetJSONValues[0].RequirementNo.length;
					lastRecUpd = --lastRecUpd;
					qtyCheckWithBackendOrder(lastRecUpd,arrMob27GetJSONValues);
					
					}*/ }
		
		
		
		
		

		
		
		
		
		
		
		
		
}
});

/*function Mob27_ThirdScr_refereshOldDataOrder(lessThanMainArrayLen,arrMob27GetJSONValues)
{
	
	
	  sap.ui.getCore().byId("Mob27-order-DestInput").setValue("");
      sap.ui.getCore().byId("Mob27-order-MatInput").setValue("");
      sap.ui.getCore().byId("Mob27-order-BatInput").setValue("");
      
      sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue("");
      
      if( sap.ui.getCore().byId("Mob27-order-flexRowSer").getVisible() == true)
    	  {
    	  sap.ui.getCore().byId("Mob27-2-oResponsivePopoverList").destroyItems();
          sap.ui.getCore().byId("Mob27-2-oResponsivePopover").getModel().destroy();
    	  }
    
 
       
}

//Checking the qty value from backend record
function qtyCheckWithBackendOrder(qtyRecrdId,arrMob27GetJSONValues)
{
	var isValue = false;
	debugger;
	var getValueManF = CheckMandatoryFieldOrder(isValue);
	if( getValueManF == true)
		{
	//	var parseBackQtyValue = parseInt(arrMob27GetJSONValues[0].RequirementNo[qtyRecrdId].Quantity);
		
		
		var parseBackQtyValue = sap.ui.getCore().byId("Mob27-queue-lblExpectedQtyValue").getText();
		var parseCurrentValueInput = parseInt(sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue());

		if( parseBackQtyValue > parseCurrentValueInput)
		 {

		
		 //check conditions
		 
		 var lblConfirm = new sap.m.Label({
             text: "Entered qty is( "+sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue() +
			 " )does not match the expected results(" 
             +parseBackQtyValue +
             " ) is this correct qty"
       });
       
       var RightButton_b = new sap.m.Button({
               text : "No",
               press : function(){
                      dialogWindow.close();
               }
         });
       
       var LeftButton_b = new sap.m.Button({
           text : "Yes",
           press : function(){
        	   dialogWindow.close();
        	 sap.ui.getCore().byId("Mob20-test-order-Qty").setText("OK");
      		 ClearAndUpdateOrder(qtyRecrdId,arrMob27GetJSONValues);
      		sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue(Math.round(arrMob27GetJSONValues[0].RequirementNo[qtyRecrdId].Quantity));
    		sap.ui.getCore().byId("Mob27-order-lblExpectedQtyValue").setText(Math.round(arrMob27GetJSONValues[0].RequirementNo[qtyRecrdId].Quantity));
    		
           }
     });
         
        var dialogWindow = new sap.m.Dialog({
               title: "Quantity Validation",
               type : sap.m.DialogType.Message,
               leftButton : LeftButton_b,
               rightButton: RightButton_b,
               content : lblConfirm,
              // width : "90%"
             
         });
        
        dialogWindow.open();
		 
		 
		 
		 
		 }
	else if( parseBackQtyValue == parseCurrentValueInput)
		 {
		
		 sap.ui.getCore().byId("Mob20-test-order-Qty").setText("OK");
		 ClearAndUpdateOrder(qtyRecrdId,arrMob27GetJSONValues);
		 sap.ui.getCore().byId("Mob27-orer-QtyIpArea").setValue(Math.round(arrMob27GetJSONValues[0].RequirementNo[qtyRecrdId].Quantity));
			sap.ui.getCore().byId("Mob27-order-lblExpectedQtyValue").setText(Math.round(arrMob27GetJSONValues[0].RequirementNo[qtyRecrdId].Quantity));
			
		 }
	else
		 {
	       sap.m.MessageBox.show(
	    		   "Entered qty is( "+sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue() +
	  			 " )does not match the expected results(" 
	               +parseBackQtyValue +
	               " ) is this correct qty"+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,
					"Error");
		 sap.ui.getCore().byId("Mob20-test-order-Qty").setText("REJECT");
		 }
		}
   }


//Clear old line items values and update functions
function ClearAndUpdateOrder(lessThanMainArrayLen,arrMob27GetJSONValues)
{
	
	
	var demo = sap.ui.getCore().byId("demoswitch");  
	if (demo.getState() == true)
		{
		sap.m.MessageBox.show("Demo mode" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,
				"Error");
		}
	else
		{

		
		if(sap.ui.getCore().byId("Mob20-test-order-Qty").getText() == "OK" )
			{
			
			//Update URL
			var splitSerValue = splitSerialNumbersOrder();//Call function to collect all serial numbers
		
			openSplashScreen();
		///////////////////////////////////////////////////////////////////////////////////////////////////	
			var updateFunctionParameters = arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen];
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB27:: Service: TransferPickingSet Start" ;

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }
			
			var oDataUpdateTask = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL = "/TransferPickingSet(TransferOrderno='"+updateFunctionParameters.TransferOrderno+"',TransferOrderItem='"+updateFunctionParameters.TransferOrderItem+"')";
			oDataUpdateTask.setHeaders({
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token" : "Fetch",
					"DataServiceVersion" : "2.0"
			});
	        var createReqData = {
					"TransferOrderno" : updateFunctionParameters.TransferOrderno,
					"TransferOrderItem" : updateFunctionParameters.TransferOrderItem,
					"WhouseNo" : updateFunctionParameters.WhouseNo,
					"DestinationStorageType" : updateFunctionParameters.SourceStorageType,
					"Material" :updateFunctionParameters.Material ,
					"Quantity" : sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue(),
					"DestinationStorageBin" : updateFunctionParameters.SourceStorageBin,
					"SerialNo" : splitSerValue
					
				};
			oDataUpdateTask.update(readRequestURL, createReqData, null, 
			function(oResponse) {
				var msg = "Updated Successfully";
		        jQuery.sap.require("sap.m.MessageToast");
		        sap.m.MessageToast.show(msg);
		        closeSplashScreen();
		        if( g_isDebug == true)
		        {
		        //Service End Time
		        var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Finish" ;
		        //Log file Service Start and End Time
		        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        logFileUpdate(g_ServiceStartEndTime);
		        }
		        
			}, function(oError){ 
				try
				{
				var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
				    		    messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");}
					catch(e)
					{sap.m.MessageBox.show(
							data.error.message.value+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,
									"Error");
						break;}}}
		 
			catch(e)
				{
				sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");
				
				if( g_isDebug == true)
		        {
		        //Service End Time
		        var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Failed no network" ;
		        //Log file Service Start and End Time
		        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        logFileUpdate(g_ServiceStartEndTime);
		        }
				
				
				
				}
			closeSplashScreen();
			});	
			
			
			
		////////////////////////////////////////////////////////////////////////////////////////////////////	
			
			//Clear Old Data In input and List
			   Mob27_ThirdScr_refereshOldDataOrder(lessThanMainArrayLen,arrMob27GetJSONValues);
			   
	var BindedObjects = arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen];
	    if( BindedObjects.FlagBatch == 'Y')
	    	{
	    	sap.ui.getCore().byId("Mob27-order-Batch").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-flexRowBat").setVisible(true);
	        sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setText(BindedObjects.Batch);
	    	
	    	}
	    else
	    	{
	    	    	
	    	sap.ui.getCore().byId("Mob27-order-Batch").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-flexRowBat").setVisible(false);
	    	}
	    if( BindedObjects.FlagSerial == 'Y')
		{
	    	sap.ui.getCore().byId("Mob27-order-lblSerBackValue").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-Serial").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-flexRowSer").setVisible(true);
	    	//sap.ui.getCore().byId("Mob27-queue-QtyIpArea").setValue("1");
	    	var lastRecChk = arrMob27GetJSONValues[0].RequirementNo.length;
	    	var checkList = lessThanMainArrayLen;
	    	var lastReCMainRec = ++checkList;
	    	if( lastRecChk == lastReCMainRec)
	    		{
	    		sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue("");
	    		}
	    	else
	    		{
	    		sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue("1");
	    		}
	    	
	    	
		}
	    else{
	    		    	
	    	sap.ui.getCore().byId("Mob27-order-lblSerBackValue").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-Serial").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-flexRowSer").setVisible(false);
	    	
	    }

	  //Change Third Screen Title:
		   sap.ui.getCore().byId("Mob27-order-thrdScreenTitle").setTitle(
				   
					"Order: "+arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].RequirementNo+
				   " Description for : "
				   +arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].TransferOrderno+"."+ 
				    arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].TransferOrderItem)
	 // Change third screen text 	  
		   sap.ui.getCore().byId("Mob27-order-lblDestStrBinBackValue").setText(
		           arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].SourceStorageType + " " +  
				   arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].SourceStorageBin);
		   sap.ui.getCore().byId("Mob27-order-lblMatBackValue").setText(
				   arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].Material + " " +
				   arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].MaterialDescription);
		   sap.ui.getCore().byId("Mob27-order-UomTxt").setText(
				   arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].Uom);
		   sap.ui.getCore().byId("Mob27-order-RevTxt").setText(
				   arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].RevisionLevel);
		
		 
		   
			}	
		
		}
	
}


//Updating next line items
function checkingAndUpdatingNextLineItemsOrder(arrMob27GetJSONValues,arrLength)
{
//Check mandatory field
	var isValue = false;
	var checkManRes = CheckMandatoryFieldOrder(isValue);
    if( checkManRes == true)
		{
		//Value incremented in list items
		var nextTotal = arrMob27GetJSONValues[0].RequirementNo.length;		
		var lessThanMainArrayLen = nextTotal - (arrLength - 1);
		var TrNumber = arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].TransferOrderno;
		var  TrLine = arrMob27GetJSONValues[0].RequirementNo[lessThanMainArrayLen].TransferOrderItem;
		sap.ui.getCore().byId("Mob27-ordTable-LineItemAndTrOrder-idMob27-TrOrderTable-"+arrMob27GetJSONValues[0].SelectedRowId).setTitle(
		TrNumber+ "." +TrLine );
		arrLength = arrLength - 1;
		sap.ui.getCore().byId("Mob27-order-testLoopNext").setText(arrLength);	
		qtyCheckWithBackendOrder(lessThanMainArrayLen,arrMob27GetJSONValues);
		}
}

//Checking the mandatory fields
function CheckMandatoryFieldOrder(isValue)
{
	
var isValue = false;
	if( sap.ui.getCore().byId("Mob27-order-flexRowSer").getVisible() == true)
	{
	 var QtyInc = sap.ui.getCore().byId("Mob27-2-oResponsivePopover").getModel();
     if( typeof QtyInc == 'undefined')
     {
    	 sap.m.MessageBox.show(
					"Enter Correct Serial Number" + " " +" "+" ",
			sap.m.MessageBox.Icon.ERROR,"Error")
     isValue = false;
     return isValue;
     }
     else{
    	 QtyInc = QtyInc.oData.results;
    	 if( typeof QtyInc == 'undefined')
         {
    		 sap.m.MessageBox.show(
 					"Enter Correct Serial Number" + " " +" "+" ",
 			sap.m.MessageBox.Icon.ERROR,"Error")
         isValue = false;
         return isValue;
         }
    	 else
    		 {
    		 isValue = true;
             return isValue; 
    		 
    		 } }}

	if (sap.ui.getCore().byId("Mob27-order-flexRowBat").getVisible() == true)
	{
	if( sap.ui.getCore().byId("Mob27-order-BatInput").getValue() == "")
    {
		sap.m.MessageBox.show(
				"Enter Correct Batch Number" + " " +" "+" ",
		sap.m.MessageBox.Icon.ERROR,"Error")
    isValue = false;
    return isValue;
    }
    else if( sap.ui.getCore().byId("Mob27-order-QtyIpArea").getValue() == ""){
    	sap.m.MessageBox.show(
				"Enter Correct Qty Number" + " " +" "+" ",
		sap.m.MessageBox.Icon.ERROR,"Error")
              isValue = false;
              return isValue;
     }
   else{
        	 isValue = true;
             return isValue; 
         }
}
	
	return isValue; 
}



function splitSerialNumbersOrder()
{

	 //Serial Split into 1001_1002_1003 format

	 var getAllSerNumbers = sap.ui.getCore().byId("Mob27-2-oResponsivePopover").getModel();
	 var records = getAllSerNumbers.oData.results;
	 var recordWitunder;
	 if( records.length == 1 )
	 {
	 var serrec = records[0].Serial;
	 recordWitunder = 	serrec;	 
	
	 }
	 else
		 {
		 var recordWitunder = records[0].Serial;
		 for( var i = 1 ; i < records.length ; i++)
		 {
		  var serrec = records[i].Serial;
		  recordWitunder = recordWitunder+"_"+serrec;
		  
		  //123_124
		  
	     }
		 }
	 
	 return recordWitunder;
	 }*/