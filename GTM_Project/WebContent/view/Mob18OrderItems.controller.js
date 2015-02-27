sap.ui.controller("com.cg.gtm.view.Mob18OrderItems", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18OrderItems
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18OrderItems
*/	
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18OrderItems
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18OrderItems
*/
//	onExit: function() {
//
//	}
	
	selectAll : function()
	{
		var myList = sap.ui.getCore().byId("idtable_Order")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("idtable_Order").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  true ;
			
			
			}
		
		oListMOB19Model.updateBindings();
		
	},
	
	selectNone : function()
	{

		var myList = sap.ui.getCore().byId("idtable_Order")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("idtable_Order").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  false ;
	
			
			}
		
		oListMOB19Model.updateBindings();
		
	
		
	},
	


	matSel_order : function(oEvent){
		debugger;
		   var demo = sap.ui.getCore().getElementById("demoswitch").getState();
       ///global variable defined to get the index
		   MOB18SelectedIndex= sap.ui.getCore().byId("idtable_Order").indexOfItem(oEvent.getSource());   
           if (demo)
    {  
          //////////////////////Mobile view/////////////////////////////////
    	if ( g_runningOnPhone == true)
		{ 
		 
		 //Show conform count
		// sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(true);
	   	 //Show third col
    		//showidMob18second();
    		//hideidMob18first();
    		var table = sap.ui.getCore().byId("idtable_Order");
    		var select = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
      	  var Material = sap.ui.getCore().byId("idMaterial"); 
      	  Material.setText(table.getModel().getProperty(select + "/Material"));
      	  var Location = sap.ui.getCore().byId("idLoc"); 
      	  Location.setText(table.getModel().getProperty(select + "/StoreLoc"));
      	 // var Quantity = sap.ui.getCore().byId("inputQtyno"); 
      	//s  Quantity.setValue(table.getModel().getProperty(select + "/Quantity"));
      	  var Batch = sap.ui.getCore().byId("idbatch"); 
      	  Batch.setText(table.getModel().getProperty(select + "/Batch"));
      	  var Unit = sap.ui.getCore().byId("idunit"); 
      	  Unit.setText(table.getModel().getProperty(select + "/Unit"));
	   	// sap.ui.getCore().byId("Mob20-StockPageTitle").setTitle("Material : "+Material);
		 sap.ui.getCore().byId("myApp").to("idMob18Orderdetpage");
		 
		}
    	var table = sap.ui.getCore().byId("idtable_Order");
		var select = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
  	  var Material = sap.ui.getCore().byId("idMaterial"); 
  	  Material.setText(table.getModel().getProperty(select + "/Material"));
  	  var Location = sap.ui.getCore().byId("idLoc"); 
  	  Location.setText(table.getModel().getProperty(select + "/StoreLoc"));
  	 // var Quantity = sap.ui.getCore().byId("inputQtyno"); 
  	//s  Quantity.setValue(table.getModel().getProperty(select + "/Quantity"));
  	  var Batch = sap.ui.getCore().byId("inputbatch_order"); 
  	  Batch.setText(table.getModel().getProperty(select + "/Batch"));
  	  var Unit = sap.ui.getCore().byId("idunit"); 
  	  Unit.setText(table.getModel().getProperty(select + "/Unit"));
    }
    	
    	//////////////////////Tablet/Desktop//////////////////////////////////////////
    	else{
			//showidMob18second();
        	//var select = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
			//var arrPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
			
    		if ( g_runningOnPhone == true)
    		{ 
    			  g_MobileNavigationId = "Mob18OrderDetailPage";
    			 sap.ui.getCore().byId("myApp").to("idMob18Orderdetpage");
    		}
    		else{
    			
    			$("#idMob18Orderdetpage").show()
    		}
    	//	this.setSelected(true);
    		var selectedIndex=sap.ui.getCore().byId("idtable_Order").indexOfItem(oEvent.getSource());
    		sap.ui.getCore().byId("Mob18-selectedindextable").setText(selectedIndex);
        	var table = sap.ui.getCore().byId("idtable_Order");
        	
        	var oModel = table.getModel();
    		
    		var lenMaterialLst = oModel.oData.results.length;
    		
    		var arrJSONMatLst = oModel.oData.results; //Getting JSON value of Material List
    		
    		var arrMatLst = [];
    		
    		
    		
    		
        	 /* var Material = sap.ui.getCore().byId("idMaterial"); 
        	  Material.setText(table.getModel().getProperty(selectedIndex + "/Material"));
        	  var Location = sap.ui.getCore().byId("idLoc"); 
        	  Location.setText(table.getModel().getProperty(selectedIndex + "/StoreLoc"));*/
        	//  var Quantity = sap.ui.getCore().byId("inputQtyno"); 
        	//  Quantity.setValue(table.getModel().getProperty(select + "/Quantity"));
        	//  var Batch = sap.ui.getCore().byId("inputbatch_order"); 
        	//  Batch.setValue(table.getModel().getProperty(select + "/Batch"));
        	//  var Unit = sap.ui.getCore().byId("idunit"); 
        	//  Unit.setText(table.getModel().getProperty(select + "/Unit"));
    		/*//var arrPath = oEvent.oSource._aSelectedPaths;
    		var arrPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
    		var path = arrPath[0];
    		
    		var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);
    		
    		var selectedIndex = parseInt(strSelectedIndex);
    		alert(selectedIndex);
    		var tabMaterialLst = sap.ui.getCore().byId("idtable_order");
    		var oModel = tabMaterialLst.getModel();
    		
    		var lenMaterialLst = oModel.oData.modelData.length;
    		
    		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
    		
    		var arrMatLst = [];*/
    		
        	//  showdMob18second_Scrap();
        	// var jsonReason = null;
    		SerialDetail_order(selectedIndex); //Populating selected material details
    		//callReason_order(jsonReason);
    		
    		//g_MOB18DeleteMat = false;

		}
    	
	
    }
	
});
function SerialDetail_order(selectedIndex) {
	
	
	
	var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
	var oModel = tabMaterialLst.getModel();
	
	var lenMaterialLst = oModel.oData.results.length;
	
	var arrJSONMatLst = oModel.oData.results; //Getting JSON value of Material List
	
	debugger;

	
	if( arrJSONMatLst[selectedIndex].errMessage != undefined || arrJSONMatLst[selectedIndex].errMessage != null)
		{
		var errMsg = arrJSONMatLst[selectedIndex].errMessage;
	    sap.ui.getCore().byId("lblErr2").setVisible(true);
		sap.ui.getCore().byId("lblErrVal2").setVisible(true);
		sap.ui.getCore().byId("lblErrVal2").setText(errMsg);
		
		//var row = arrJSONMatLst[selectedIndex].MaterialNo;
		
		
		sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
		}
	
	else
		{
		sap.ui.getCore().byId("lblErr2").setVisible(false);
		sap.ui.getCore().byId("lblErrVal2").setVisible(false);
		
		}
	
	 if( arrJSONMatLst[selectedIndex].docNumber != undefined || arrJSONMatLst[selectedIndex].docNumber != null)
	{
	var SucMsg = arrJSONMatLst[selectedIndex].docNumber;
    sap.ui.getCore().byId("lblErr2").setVisible(false);
	sap.ui.getCore().byId("lblErrVal2").setVisible(false);

	
	sap.ui.getCore().byId("lblMatDocNo2").setVisible(true);
	sap.ui.getCore().byId("lblMatDocVal2").setVisible(true);
	sap.ui.getCore().byId("lblMatDocVal2").setText(SucMsg);
	
	
	}
	else
		{
		sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
		}
	
	
	
	
	

	
	
	
	
	for(var i=0;i<lenMaterialLst;i++) {
		if(i==selectedIndex) {

		//	sap.ui.getCore().byId("inputUoM").setText(arrJSONMatLst[i].Uom);
		//	sap.ui.getCore().byId("inputQty_Scrap").setValue(arrJSONMatLst[i].Quantity);

			
			//Window Local storage for Batch///////////////
			var localval = window.localStorage.getItem(arrJSONMatLst[selectedIndex].Material+"_"+ 
					arrJSONMatLst[selectedIndex].StoreLoc + "Batch");
			
		   //  alert(localval);
		     
		     sap.ui.getCore().byId("MOB18_OrderDetailPage").setTitle(arrJSONMatLst[selectedIndex].MaterialDesc);
			sap.ui.getCore().byId("idMaterial").setText(arrJSONMatLst[selectedIndex].Material);

			sap.ui.getCore().byId("idLoc").setText(arrJSONMatLst[selectedIndex].StoreLoc);
			
			sap.ui.getCore().byId("inputQtyno").setValue(arrJSONMatLst[selectedIndex].inputQty);
			
			sap.ui.getCore().byId("inputbatch_order").setValue(localval);
			
			
		
			
			if(arrJSONMatLst[i].Batchmanaged=="No"&&arrJSONMatLst[i].Splitvaluated=="No") {
				sap.ui.getCore().byId("idbatch").setVisible(false);
				sap.ui.getCore().byId("inputbatch_order").setVisible(false);
				sap.ui.getCore().byId("idscan_order").setVisible(false);
			}
			else if(arrJSONMatLst[i].Batchmanaged=="Yes"&&arrJSONMatLst[i].Splitvaluated=="Yes"){

				if(arrJSONMatLst[i].Batch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch);
				}
				else if(arrJSONMatLst[i].inputBatch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].inputBatch);
				}
				else{
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
					
				}
				sap.ui.getCore().byId("idbatch").setVisible(true);
				sap.ui.getCore().byId("idbatch").setText("Batch");
				//sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch);
				sap.ui.getCore().byId("inputbatch_order").setPlaceholder("Enter Batch");
				sap.ui.getCore().byId("inputbatch_order").setVisible(true);
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				sap.ui.getCore().byId("idscanserial_order").setVisible(false);
			}
			else if(arrJSONMatLst[i].Batchmanaged=="Yes"&&arrJSONMatLst[i].Splitvaluated=="No"){
				if(arrJSONMatLst[i].Batch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch);
				}
				else if(arrJSONMatLst[i].inputBatch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].inputBatch);
				}
				else{
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
					
				}
				sap.ui.getCore().byId("idbatch").setText("Batch");
				sap.ui.getCore().byId("inputbatch_order").setPlaceholder("Enter Batch");
			//	sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch);
				sap.ui.getCore().byId("idbatch").setVisible(true);
				sap.ui.getCore().byId("inputbatch_order").setVisible(true);
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				sap.ui.getCore().byId("idscanserial_order").setVisible(false);
			}
			else{
				if(arrJSONMatLst[i].Batch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch);
				}
				else if(arrJSONMatLst[i].inputBatch){
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
					sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].inputBatch);
				}
				else{
					sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
				}
				sap.ui.getCore().byId("idbatch").setVisible(true);
				sap.ui.getCore().byId("idbatch").setText("Valuation Type");
				sap.ui.getCore().byId("inputbatch_order").setPlaceholder("Enter Valuation Type");
				sap.ui.getCore().byId("inputbatch_order").setVisible(true);
				//sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[i].Batch)
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				sap.ui.getCore().byId("idscanserial_order").setVisible(false);

			}
			
			
			if(arrJSONMatLst[i].Serialized=="No") {
				sap.ui.getCore().byId("Idserial_order").setVisible(false);
				sap.ui.getCore().byId("inputSerial_order").setVisible(false);
				sap.ui.getCore().byId("idSerial1").setVisible(false);
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				 if ( g_runningInTablet == true || g_runningOnPhone == true)
				  {
					 sap.ui.getCore().byId("idscanserial_order").setVisible(false)
					 
				  }
			}else {
				sap.ui.getCore().byId("Idserial_order").setVisible(true);
				sap.ui.getCore().byId("inputSerial_order").setVisible(true);
				sap.ui.getCore().byId("idSerial1").setVisible(true);
				sap.ui.getCore().byId("idscan_order").setVisible(true);
				if ( g_runningInTablet == true || g_runningOnPhone == true)
				  {
					 sap.ui.getCore().byId("idscanserial_order").setVisible(true)
					 
				  }
			}
			
			if(arrJSONMatLst[i].ItemCategory=="Z") {
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				sap.ui.getCore().byId("idscanserial_order").setVisible(false);
				//sap.ui.getCore().byId("idshow_order").setVisible(false);
				sap.ui.getCore().byId("inputSerial_order").setEnabled(false);
				sap.ui.getCore().byId("inputQtyno").setEnabled(false);
				sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
				//sap.ui.getCore().byId("Idserial_order").setVisible(false);
			
				
				    
			
			}else {
				sap.ui.getCore().byId("idscan_order").setVisible(true);
				//sap.ui.getCore().byId("idscanserial_order").setVisible(true);
			//	sap.ui.getCore().byId("idshow_order").setVisible(true);
				sap.ui.getCore().byId("inputSerial_order").setEnabled(true);
				sap.ui.getCore().byId("inputQtyno").setEnabled(true);
			//	sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
				//sap.ui.getCore().byId("Idserial_order").setVisible(true);
				if ( g_runningInTablet == true || g_runningOnPhone == true)
				  {
					 sap.ui.getCore().byId("idscanserial_order").setVisible(true)
					 
				  }
			}
			
			if(arrJSONMatLst[i].Batchmanaged=="No" && arrJSONMatLst[i].Serialized=="No"){
				sap.ui.getCore().byId("idscan_order").setVisible(false);
				sap.ui.getCore().byId("idscanserial_order").setVisible(false);
			}
			
			/*
			 * Populate Serial Numbers - Start
			 */
			
			var arrSerialLst = arrJSONMatLst[selectedIndex].SerialLst;
			
			if(typeof arrSerialLst != 'undefined' && arrSerialLst.length > 0) {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial_Items");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: arrSerialLst});
				tabSerialLst.setModel(oModel2);
			} else {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial_Items");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: []});
				tabSerialLst.setModel(oModel2);
			}
			
			
			/* * Populate Serial Numbers - End
			 */
			 
			/*
			 * Set Quantity Alert - Start
			 */
			var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Order");
			var serialCount = 0;
			if(typeof arrSerialLst != 'undefined') {
				serialCount = arrSerialLst.length;
			}
	/*		if(arrJSONMatLst[i].Serialized=="Yes") {
			if(!isNaN(arrJSONMatLst[selectedIndex].Quantity)) {
				if(serialCount < parseInt(arrJSONMatLst[selectedIndex].Quantity)) {
				//	lblQty.setIcon("sap-icon://alert");
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;   
					var materialRow = sap.ui.getCore().byId(rowId);    
					materialRow.setIcon("sap-icon://edit");
				}else {
				//	lblQty.setIcon("");
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setIcon("");
				}
			}
			
		}
			else{
				if(!isNaN(arrJSONMatLst[selectedIndex].Quantity) && typeof (arrJSONMatLst[selectedIndex].Quantity) != 'undefined' &&  parseInt(arrJSONMatLst[selectedIndex].Quantity) > 0 ){
					
					lblQty.setSrc("");
						var rowId = "MaterialNoIcon_order-idtable_Order-" + i;   
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");		
				}
				else{
					//lblQty.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon_order-idtable_Order-" + i;   
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
				}

			}*/
			
	}
	}
}




