sap.ui.controller("com.cg.gtm.view.Mob30MatDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30MatDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob30MatDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob30MatDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob30MatDetail
*/
//	onExit: function() {
//
//	}
	logSer_30 : function(oEvent){
		
			 
			
					     
					    
					     this.popover = sap.ui.getCore().byId("oResponsivePopover_30");
					     this.popover.openBy(oEvent.getSource());
					    // sap.ui.getCore().byId("oResponsivePopoverList_30").setModel(oJSONModelMob20Res);
					   
					     
					     
		                 	
		
		
	},
	/*Quantity : function(){
		var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		//alert(txtValue);
		var arrMatLst = oModel.oData.results;
		
		for(var i=0;i<arrMatLst.length;i++) {
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
			var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
			//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((inputMatNoVal.trim()==arrMatLst[i].Material) && (inputUoM.trim()==arrMatLst[i].UoM) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
				var objMaterial = arrMatLst[i];
				objMaterial.Quantity = txtValue;
				
				//var lblQty = sap.ui.getCore().byId("idqtylb");
				
				
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({results: arrMatLst});
		tabMaterialLst.setModel(oModel2);
	},*/
	btnScanner_30 : function(oEvent)
	{

		sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob30-popWin").open();
		
		
		
		sap.ui.getCore().byId("Mob30-ScanBodyText").setText(
		sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() + "\n" + 
		sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText());
		
		//
		
		
		
		
	},
	addSerialButton_30 : function()
	{
		
		var serialNo = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").getValue();
       if( sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").getValue() == "")
			{
			sap.m.MessageBox.show("Please Enter Serial Number"+ " " +
			" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
			}
       else{
    	   var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
    		var oModel = tabSerialLst.getModel();
    		var tabModel = null;
    		var isExisting = false;
    		
    		if(typeof oModel != 'undefined') {
    			tabModel = oModel.oData.modelData;
    			for(var i=0;i<tabModel.length;i++) {
    				if(tabModel[i].Serial.trim()==serialNo) {
    					isExisting = true;
    				}
    			}
    		} else {
    			var aData1 = [
    				   			{Serial: serialNo}
    				   			];
    			
    			oModel = new sap.ui.model.json.JSONModel();
    			
    			oModel.setData({modelData: aData1});
    			tabSerialLst.setModel(oModel);
    			Mob30addSerialToModel(aData1);
    			sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
    			
    			return;
    		}
    		
    		if(isExisting==true) {
    			var lblConfirm = new sap.m.Label({
    				text: "Entered Serial No: " + serialNo + " already existing."
    			});
    			
    			var RightButton_b = new sap.m.Button({
    				  text : "OK",
    				  press : function(){
    					  dialogWindow.close();
    				  }
    			  });
    			  
    			 var dialogWindow = new sap.m.Dialog({
    				  title: "Serial Exist",
    				  //leftButton : leftButton_b,
    				  rightButton: RightButton_b,
    				  content : lblConfirm,
    				 // width : "90%"
    				
    			  });
    			 
    			 dialogWindow.open();
    			 
    			 return isExisting;
    			 
    		}else {
    			
    			 var objSerial = {Serial: serialNo};
    			 tabModel.push(objSerial);
    			 var oModel2 = new sap.ui.model.json.JSONModel();
    			 oModel2.setData({modelData: tabModel});
    			 tabSerialLst.setModel(oModel2);
    			 
    			 Mob30addSerialToModel(tabModel);
    			 /*
    				 * Add Serial to Model - Start
    				 */
    			// Mob18addSerialToModel(tabModel);
    				/*
    				 * Add Serial to Model - End
    				 */
    		}
    		
    		sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
       }
		
},

handleDelete_30 : function(oEvent){

	var errExist = false;
		
		var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
		var oModel = tabMaterialLst.getModel();
		var arrMatLst = oModel.oData.results;
		
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		
		for(var i=0;i<arrMatLst.length;i++) {
			if((inputMatNoVal.trim()==arrMatLst[i].Material))/* && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) */{
				
				var docNum = arrMatLst[i].docNumber;
				if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
					errExist = true;
					var objMaterial = arrMatLst[i];
					mob30ItemDialog(objMaterial.Material);
				}
			}
		}
		
		if(errExist == true) {
			return;
		}
		sap.ui.getCore().byId("oResponsivePopover_30").close(this);
		oEvent.getSource().destroyItems();
		//sap.ui.getCore().byId("oResponsivePopoverList").getModel();
	    sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue
	  var  selectedIndex =	(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue() - (1));//decrement 1 
	    
	/*var controlName = oEvent.oSource.sId;
   var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
	var selectedIndex = parseInt(strSelectedIndex);*/
	
	var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
	var oModel = tabSerialLst.getModel();
	
	var lenSerialLst = oModel.oData.modelData.length;
	var arrJSONSerLst = oModel.oData.modelData; //Getting JSON value of Material List
	
	var arrMatLst = [];
	
	for(i=0;i<=lenSerialLst-1;i++) {
		
		if(i!=selectedIndex) {
			arrMatLst.push(arrJSONSerLst[i]);
		}
			
	}
	
	var oModel2 = new sap.ui.model.json.JSONModel();
	oModel2.setData({modelData: arrMatLst});
	tabSerialLst.setModel(oModel2);
	
	Mob30addSerialToModel(arrMatLst);
	//sap.ui.getCore().byId("inputSerial_order").setValue(" ");
}
		
		
		

});
function Mob30addSerialToModel(arrSerial) {
	var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.results;
	
	for(var i=0;i<arrMatLst.length;i++) {
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
	//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
		var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
		
		var lblQty = sap.ui.getCore().byId("idbatch");
		
		if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
			
			
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			
			sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(arrSerial.length);
			if(arrSerial.length > objMaterial.AvailableStock){
				var lblConfirm = new sap.m.Label({
    				text: "Quantity Should not exceed " + objMaterial.AvailableStock + "available Quantity."
    			});
    			
    			var RightButton_b = new sap.m.Button({
    				  text : "OK",
    				  press : function(){
    					  dialogWindow.close();
    				  }
    			  });
    			  
    			 var dialogWindow = new sap.m.Dialog({
    				  title: "Quantity Exceeds",
    				  //leftButton : leftButton_b,
    				  rightButton: RightButton_b,
    				  content : lblConfirm,
    				 // width : "90%"
    				
    			  });
    			 
    			 dialogWindow.open();
				sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(objMaterial.Quantity);
		
			}
			else{
				objMaterial.Quantity = arrSerial.length;
			}
			
			 
			/*if(isNaN(inputQty) || inputQty.toString().trim().length == 0 || arrSerial.length > parseInt(inputQty) || (parseInt(inputQty)-arrSerial.length==1)) {
				sap.ui.getCore().byId("inputQtyno").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}
			
			if(parseInt(inputQty) > arrSerial.length) {
				lblQty.setIcon("sap-icon://alert");
			}else {
				lblQty.setIcon("");
			}*/
		}
	}
	
	var oModel2 = new sap.ui.model.json.JSONModel();
	oModel2.setData({results: arrMatLst});
	tabMaterialLst.setModel(oModel2);

}	
function mob30ItemDialog(matNo) {
	var lblConfirm = new sap.m.Label({
		text: "Material No: " + matNo + " already Processed."
	});
	
	var RightButton_b = new sap.m.Button({
		  text : "OK",
		  press : function(){
			  dialogWindow.close();
		  }
	  });
	  
	 var dialogWindow = new sap.m.Dialog({
		  title: "Already Processed",
		  //leftButton : leftButton_b,
		  rightButton: RightButton_b,
		  content : lblConfirm,
		  icon: "sap-icon://warning2",
		 // width : "90%"
		
	  });
	 
	 dialogWindow.open();
}