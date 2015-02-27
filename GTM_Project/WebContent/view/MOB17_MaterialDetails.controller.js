sap.ui.controller("com.cg.gtm.view.MOB17_MaterialDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB17_MaterialDetails
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB17_MaterialDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB17_MaterialDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB17_MaterialDetails
*/
//	onExit: function() {
//
//	}
	/*
	 * This method is responsible of scanning the material. It will check any manual entry is there else Barcode scanner
	 * method ScannerOut_M_S_E_B() is called and fetch the Material No, Serial No & Batch No
	 */
	scanMaterial: function(oEvent) {
		var valSerial = sap.ui.getCore().byId("inputSerial");
		
		if(valSerial.getValue().trim().length > 0) {
			var lblConfirm = new sap.m.Label({
				text: "You have Entered Serial No: " + valSerial.getValue() + " Do you want to Add it ?"
			});
			
			var leftButton_b = new sap.m.Button({
				  text : "No",
				  press : function(){
					  dialogWindow.close();
				  }
			  });
			 var RightButton_b = new sap.m.Button({
				  text : "Yes",
				  press : function(){
					  dialogWindow.close();
					  addSerial1(valSerial.getValue()); //Adding Serial
				  }
			  });
			  
			 var dialogWindow = new sap.m.Dialog({
				  title: "Add Serial",
				  leftButton : leftButton_b,
				  rightButton: RightButton_b,
				  content : lblConfirm
				 // width : "90%"
				
			  });
			 
			 dialogWindow.open();
			 
		}else {
			var jsonScanResult = ScannerOut_M_S_E_B().scanMaterials[0];
			
			var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
			var oModel = tabMaterialLst.getModel();
			var arrMatLst = oModel.oData.modelData;
			var selMatNo = jsonScanResult.Material;
			
			var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
			
			var errMsg = "";
			
			if(jsonScanResult.Error.trim().length > 0){
				errMsg = jsonScanResult.Error.trim();
			}else if(typeof selMatNo == 'undefined' || selMatNo.trim().length == 0 ||
					typeof jsonScanResult.Serial == 'undefined' || jsonScanResult.Serial.trim().length == 0) {
				errMsg = "Barcode Not Valid";
			}else if(lblMatNoVal.trim() != selMatNo.trim()) {
				errMsg = "Serial Number does not match with Material No: " + lblMatNoVal;
			}
			
			if(errMsg.trim().length > 0 ) {
				var lblConfirm = new sap.m.Label({
					text: errMsg
				});
				
				var Button_b = new sap.m.Button({
					  text : "OK",
					  press : function(){
						  dialogWindow.close();
					  }
				  });
				 
				  
				 var dialogWindow = new sap.m.Dialog({
					  title: "Warning",
					  rightButton: Button_b,
					  content : lblConfirm
					 // width : "90%"
					
				  });
				 
				 dialogWindow.open();
			}else {
				
				var lblConfirm = new sap.m.Label({
					text: "Are you sure want to Add Serial No: " + jsonScanResult.Serial + " for Material No: " + lblMatNoVal
				});
				
				var leftButton_b = new sap.m.Button({
					  text : "No",
					  press : function(){
						  dialogWindow.close();
					  }
				  });
				 var RightButton_b = new sap.m.Button({
					  text : "Yes",
					  press : function(){
						  dialogWindow.close();
						  addSerial1(jsonScanResult.Serial); //Adding Serial
					  }
				  });
				 
				  
				 var dialogWindow = new sap.m.Dialog({
					  title: "Add Serial",
					  leftButton: leftButton_b,
					  rightButton: RightButton_b,
					  content : lblConfirm
					 // width : "90%"
					
				  });
				 
				 dialogWindow.open();
			}
			
			
		}
	},
	/*
	 * This method is called on click of Show Serial Icon. This will open Serial No List pop up window.
	 */
	showSerialLst: function(oEvent) {
		this.popover = sap.ui.getCore().byId("popoverMOB17Serial");
		this.popover.openBy(oEvent.getSource());
	},
	/*
	 * This method is responsible to update the Batch value in the Material List Model.
	 * This is called after batch field value is entered.
	 */
	updateBatch: function(oEvent) {
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		
		var arrMatLst = oModel.oData.modelData;
		
		for(var i=0;i<arrMatLst.length;i++) {
			var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
			var lblUOMVal = sap.ui.getCore().byId("lblUOMVal").getText();
			var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
			var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((lblMatNoVal.trim()==arrMatLst[i].Material) && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
				var objMaterial = arrMatLst[i];
				objMaterial.Batch = txtValue;
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
	},
	/*
	 * This method is responsible of updating Quantity value in the Material List Model.
	 * This is called after Quantity field value is entered.
	 */
	onQtyChange: function(oEvent) {
		
		field_numeric_validation(sap.ui.getCore().byId("inputQty"));//go to string utility 
		
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		
		var arrMatLst = oModel.oData.modelData;
		
		var isSerialManaged = false;
		
		for(var i=0;i<arrMatLst.length;i++) {
			var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
			var lblUOMVal = sap.ui.getCore().byId("lblUOMVal").getText();
			var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
			var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			var serialCount = 0;
			
			if((lblMatNoVal.trim()==arrMatLst[i].Material) && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
				var objMaterial = arrMatLst[i];
				objMaterial.Quantity = txtValue;
				
				if(typeof objMaterial.SerialLst != 'undefined') {
					serialCount = objMaterial.SerialLst.length;
				}
				
				isSerialManaged = objMaterial.SerialManaged;
				
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
		
		validateMaterialList1(); //Validate and set the status for Material List
		
		/*if(!isNaN(txtValue)) {
			if(isSerialManaged==true) {
				if(serialCount != parseInt(txtValue)) {
					lblQty.setIcon("sap-icon://alert");
				}else {
					lblQty.setIcon("");
				}
			}else {
				if(parseInt(txtValue) < 1) {
					lblQty.setIcon("sap-icon://alert");
				}else {
					lblQty.setIcon("");
				}
			}
		}*/
		
	},
	
	/*
	 * This method is called when delete button is pressed in Delete serial dialog box.
	 * After deleting material same is binded in Material List Model.
	 */
	deleteSerial: function(oEvent) {
		
		/*
		 * Check if Serial can be edited - Start
		 */
		var errExist = false;
		
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		var arrMatLst = oModel.oData.modelData;
		
		var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
		var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		
		for(var i=0;i<arrMatLst.length;i++) {
			if((lblMatNoVal.trim()==arrMatLst[i].Material) && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
				
				var docNum = arrMatLst[i].docNumber;
				if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
					errExist = true;
					var objMaterial = arrMatLst[i];
					processedItemDialog(objMaterial.Material);
				}
			}
		}
		
		if(errExist == true) {
			return;
		}
		/*
		 * Check if Serial can be edited - End
		 */
		
		var controlName = oEvent.oSource.sId;
		var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
		var selectedIndex = parseInt(strSelectedIndex);
		
		var tabSerialLst = sap.ui.getCore().byId("tblSerial");
		var oModel = tabSerialLst.getModel();
		
		var lenSerialLst = oModel.oData.modelData.length;
		var arrJSONSerLst = oModel.oData.modelData; //Getting JSON value of Material List
		
		var arrSerLst = [];
		
		for(i=0;i<=lenSerialLst-1;i++) {
			
			if(i!=selectedIndex) {
				arrSerLst.push(arrJSONSerLst[i]);
			}
				
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrSerLst});
		tabSerialLst.setModel(oModel2);
		
		removeSerialFromModel(arrSerLst); //Updating Serial No to Model
	}

});