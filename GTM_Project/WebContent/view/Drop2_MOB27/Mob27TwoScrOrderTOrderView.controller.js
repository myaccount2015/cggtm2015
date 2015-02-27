sap.ui.controller("com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrOrderTOrderView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob27TwoScrOrderTOrderView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob27TwoScrOrderTOrderView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob27TwoScrOrderTOrderView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob27TwoScrOrderTOrderView
*/
//	onExit: function() {
//
//	}
	TableSelect : function(oEvent)
	{
		
		if( g_runningOnPhone == false)
			{
			Show_Mob27_Order_ThirdScreen();
			}
		
		else
			{
			 g_MobileNavigationId = "Mob27-order-thrdScreenTitle";
			sap.ui.getCore().byId("myApp").to("idMob27TrOrdScn");
			}
		
		
		var idList = oEvent.mParameters.id;
	    //Getting all Values from binded results
		var getAllVariables = this.getModel().oData.AllDataModel;
	    var contextPath = oEvent.oSource.oBindingContexts.undefined.sPath;	
	   	//getting details from binded list items
		var RequirementNo1 = this.getModel().getProperty(contextPath + "/RequirementNo");
		RequirementNo1 = RequirementNo1.toString();
		
		
		var getTrOrder = this.getModel().getProperty(contextPath + "/TransferOrderno");
		getTrOrder = getTrOrder.toString();
        //get index 0 or 1 or 2...
		var getIndexOfTab = contextPath;
		var IdOfTable = getIndexOfTab.substr(9);
	    var filteredRecord = _.where( getAllVariables, {RequirementNo: RequirementNo1}   );
	    
	    
	    //After Check with TO
	    filteredRecord = _.where( filteredRecord, {TransferOrderno: getTrOrder}   );
	    var uniqueRecArr = {
				RequirementNo : filteredRecord,
				SelectedRowId : IdOfTable
		};
	    var arrMob27GetJSONValues = [];
	    arrMob27GetJSONValues.push(uniqueRecArr);	
	    //create Model
	    sap.ui.getCore().byId("idMob27TrOrdScn").setModel(arrMob27GetJSONValues);
	    //Bind values to third screen first values of list
	    var TransferOrderItem;
	    TransferOrderItem =  sap.ui.getCore().byId("Mob27-ordTable-LineItemAndTrOrder-idMob27-TrOrderTable-"+IdOfTable).getTitle();
	    TransferOrderItem = TransferOrderItem.split(".");
	    var index = TransferOrderItem[1];
	    index =  parseInt(index);
	    var getLine = this.getModel().getProperty(contextPath + "/LineNo");
		getLine = getLine.toString();
		
		
	    if (getLine <= index )
	    	{
	    	index = 0;
	    	}
	    else
	    	{
	    	index = index -1;
	    	}
	    
	    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////	    
	    //Check with Batch and Serial Flags 
	    //flags name : FlagBatch (Y/N), FlagSerial (Y/N)
	    
	    if( filteredRecord[index].FlagBatch == 'Y')
	    	{
	    	sap.ui.getCore().byId("Mob27-order-Batch").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-flexRowBat").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setText(filteredRecord[index].Batch);
	    	
	    	
	    	}
	    else
	    	{
	    	    	
	    	sap.ui.getCore().byId("Mob27-order-Batch").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-lblBatBackValue").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-flexRowBat").setVisible(false);
	    	
	    	
	    	
	    	}
	    if( filteredRecord[index].FlagSerial == 'Y')
    	{
	    	sap.ui.getCore().byId("Mob27-order-lblSerBackValue").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-Serial").setVisible(true);
	    	sap.ui.getCore().byId("Mob27-order-flexRowSer").setVisible(true);
	    	
	    	 
       	  
       	 // sap.ui.getCore().byId("Mob27-queue-QtyIpArea").setValue("1");
       	  
	    	//sap.ui.getCore().byId("Mob27-queue-lblBatBackValue").setText(filteredRecord[index].Batch);
	    	
    	}
	    else{
	    		    	
	    	sap.ui.getCore().byId("Mob27-order-lblSerBackValue").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-Serial").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-flexRowSer").setVisible(false);
	    	sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue("0");
	    	
	    }
	    
	    sap.ui.getCore().byId("Mob27-order-lblDestStrBinBackValue").setText(filteredRecord[index].SourceStorageType + " " +  filteredRecord[index].SourceStorageBin);
		sap.ui.getCore().byId("Mob27-order-lblMatBackValue").setText(filteredRecord[index].Material + " " +filteredRecord[index].MaterialDescription);
		//sap.ui.getCore().byId("Mob27-queue-lblBatBackValue").setText(filteredRecord[index].Batch);
        sap.ui.getCore().byId("Mob27-order-UomTxt").setText(filteredRecord[index].Uom);
		sap.ui.getCore().byId("Mob27-order-RevTxt").setText(filteredRecord[index].RevisionLevel);
		sap.ui.getCore().byId("Mob27-order-QtyIpArea").setValue(Math.round(filteredRecord[index].Quantity));
		sap.ui.getCore().byId("Mob27-order-lblExpectedQtyValue").setText(Math.round(filteredRecord[index].Quantity));
		
		
		//SetTitle to third page
		var getLineItem = sap.ui.getCore().byId("Mob27-ordTable-LineItemAndTrOrder-idMob27-TrOrderTable-"+IdOfTable).getTitle();
		sap.ui.getCore().byId("Mob27-order-thrdScreenTitle").setTitle(
				"Order: "+RequirementNo1+
				
				" Destination for : "+getLineItem);
		//Next Button 
		sap.ui.getCore().byId("Mob27-order-NextPick").setVisible(true);
		
		//Clear Old Data 
		if(sap.ui.getCore().byId("Mob27-test-order-TableSel").getText() != "")
			{
			 Mob27_ThirdScr_refereshOldData();
			 sap.ui.getCore().byId("Mob27-test-order-TableSel").setText("");
			}
		else{
			 sap.ui.getCore().byId("Mob27-test-order-TableSel").setText("1");
		}
		
		
		
	
		
	}
});