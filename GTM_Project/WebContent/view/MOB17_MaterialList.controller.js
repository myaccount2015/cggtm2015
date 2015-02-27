sap.ui.controller("com.cg.gtm.view.MOB17_MaterialList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB17_MaterialList
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB17_MaterialList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB17_MaterialList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB17_MaterialList
*/
//	onExit: function() {
//
//	}
	/*
	 * This method is called to post Stock Transfer Request. It construct the Request JSON object for multiple
	 * scenarios like Movement Type, Batch managed Material, Serial Managed Material, etc.,
	 */
	onComplete: function(oEvent) {
		var validateQtyMOB17 = validateQty();

        if ( validateQtyMOB17)
        	{
		var isError = validateMaterialList1(); //Validating the materials added and setting the status
		
		var errMsg = "Please Complete all Editing Material before Posting Stock Transfer";
		
		if(isError == true) {
			var lblConfirm = new sap.m.Label({
				text: errMsg
			});
			
			 var RightButton_b = new sap.m.Button({
				  text : "OK",
				  press : function(){
					  //addMaterialInvoker();
					  dialogWindow.close();
				  }
			  });
			  
			 var dialogWindow = new sap.m.Dialog({
				  title: "Warning",
				  icon: "sap-icon://warning2",
				  resizable: true,
				  //leftButton : leftButton_b,
				  rightButton: RightButton_b,
				  content : lblConfirm,
				  width : "90%"
			  });
			 
			 dialogWindow.open();
			 
			 return;
		}
		 
		
		openSplashScreen();//splash screen opened
		
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var tableModel = tabMaterialLst.getModel();
		
		if(typeof tableModel != 'undefined') {
				tabModelData = tableModel.oData.modelData;
				
				for(var i=0;i<tabModelData.length;i++) {
					var docNum = tabModelData[i].docNumber;
					if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
						//Skip the success item
					}else {
						postStockTransfer(tabModelData[i], i); //Posting Stock Transfer
					}
					
				}
			}
		
		closeSplashScreen();//splash screen closed
		
		var isError = validateMaterialList1(); //Validating the materials added and setting the status
        	}
		
	},
	/*
	 * This method is called to delete the material and update the same in table model.
	 */
	deleteMaterial: function(oEvent) {
		var controlName = oEvent.oSource.sId;
		var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
		var selectedIndex = parseInt(strSelectedIndex);
		
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		
		var lenMaterialLst = oModel.oData.modelData.length;
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
		
		var arrMatLst = [];
		
		for(var i=0;i<=lenMaterialLst-1;i++) {
			
			if(i!=selectedIndex) {
				arrMatLst.push(arrJSONMatLst[i]);
			}
				
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
		
		if(lenMaterialLst==1) { //If no material in the list navigate to blank
			var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
			splitAppMOB17.toDetail("idMOB17_BlankScreen");
		}else {
			/*
			 * Select first item from the list
			 */
			populateMatDetail(0);
		}
		
		validateMaterialList1(); //Validate and set the status for Material List
	},
	/*
	 * This method is called to set value in the detail page.
	 */
	matSel: function(oEvent) {
		
		var arrPath = oEvent.oSource._aSelectedPaths;
		
		var path = arrPath[0];
		
		var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);
		
		var selectedIndex = parseInt(strSelectedIndex);
		
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		
		var lenMaterialLst = oModel.oData.modelData.length;
		
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
		
		var arrMatLst = [];
		
		for(var i=0;i<=lenMaterialLst-1;i++) {
			
			if(i==selectedIndex) {
				$('label#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('label#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('label#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'bold');
			}else {
				$('label#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('label#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('label#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'normal');
			}
		}
		
		populateMatDetail(selectedIndex); //Populating selected material details
		
	}

});


/*
* This method is used to populate the material details page by taking material index. 
*/
function populateMatDetail(selindex) {
	debugger;
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	
	var oModel = tabMaterialLst.getModel();
	
	var lenMaterialLst = oModel.oData.modelData.length;
	
	var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
	
	for(var i=0;i<lenMaterialLst;i++) {
		if(i==selindex) {
			sap.ui.getCore().byId("lblCustVal").setText(arrJSONMatLst[selindex].Customer);
			sap.ui.getCore().byId("lblUOMVal").setText(arrJSONMatLst[selindex].Uom);
			sap.ui.getCore().byId("inputQty").setValue(arrJSONMatLst[selindex].Quantity);
			
			sap.ui.getCore().byId("lblMatNoVal").setText(arrJSONMatLst[selindex].Material);
			sap.ui.getCore().byId("lblMatDescVal").setText(arrJSONMatLst[selindex].Description);
			
			sap.ui.getCore().byId("inputBatch").setValue(arrJSONMatLst[selindex].Batch);
			
			
			if((arrJSONMatLst[selindex].BatchManaged==false) && (arrJSONMatLst[selindex].SerialManaged==false)) {
				sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
			}else {
				sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
			}
			
			if(arrJSONMatLst[selindex].BatchManaged==false) {
			}else {
				sap.ui.getCore().byId("lblBatch").setText("Batch");
			}
			
			if(arrJSONMatLst[selindex].BatchManaged==true || arrJSONMatLst[selindex].Splitvaluated==true) {
				sap.ui.getCore().byId("lblBatch").setVisible(true);
				sap.ui.getCore().byId("inputBatch").setVisible(true);
			}else {
				sap.ui.getCore().byId("lblBatch").setVisible(false);
				sap.ui.getCore().byId("inputBatch").setVisible(false);
			}
			
			if(arrJSONMatLst[selindex].Splitvaluated==true) {
				sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
			}else {
				sap.ui.getCore().byId("lblBatch").setText("Batch");
			}
			
			
			
			if(arrJSONMatLst[selindex].SerialManaged==false) {
				sap.ui.getCore().byId("imgShowSerials").setVisible(false);
				sap.ui.getCore().byId("inputSerial").setVisible(false);
				sap.ui.getCore().byId("lblSerial").setVisible(false);
			}else {
				sap.ui.getCore().byId("imgShowSerials").setVisible(true);
				sap.ui.getCore().byId("inputSerial").setVisible(true);
				sap.ui.getCore().byId("lblSerial").setVisible(true);
				//sap.ui.getCore().byId("inputQty").setValue("1");
			}
			
			/*
			 * Populate Serial Numbers - Start
			 */
			
			var arrSerialLst = arrJSONMatLst[selindex].SerialLst;
			
			if(typeof arrSerialLst != 'undefined' && arrSerialLst.length > 0) {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: arrSerialLst});
				tabSerialLst.setModel(oModel2);
			} else {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: []});
				tabSerialLst.setModel(oModel2);
			}
			
			/*
			 * Populate Serial Numbers - End
			 */
			
			
			//var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
			
			var serialCount = 0;
			if(typeof arrSerialLst != 'undefined') {
				serialCount = arrSerialLst.length;
			}
			
			if(arrJSONMatLst[selindex].SerialManaged==true) {
				if(!isNaN(arrJSONMatLst[selindex].Quantity)) {
					if(serialCount < parseInt(arrJSONMatLst[selindex].Quantity)) {
						//lblQtyIcon.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
					}else {
						//lblQtyIcon.setSrc("");
						var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");
					}
				}
			}else {
				if(!isNaN(arrJSONMatLst[selindex].Quantity)) {
					if(parseInt(arrJSONMatLst[selindex].Quantity) < 1) {
						//lblQtyIcon.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
					}else {
						//lblQtyIcon.setSrc("");
						var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");
					}
				}
			}
			
			var errMsg = arrJSONMatLst[selindex].errMessage;
			
			if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr").setVisible(true);
				sap.ui.getCore().byId("lblErrVal").setVisible(true);
				sap.ui.getCore().byId("lblErrVal").setText(errMsg);
				
				sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
				
				var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://alert");
				materialRow.addStyleClass("text_er");
			} else {
				sap.ui.getCore().byId("lblErr").setVisible(false);
				sap.ui.getCore().byId("lblErrVal").setVisible(false);
			}
			
			var docNum = arrJSONMatLst[selindex].docNumber;
			if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr").setVisible(false);
				sap.ui.getCore().byId("lblErrVal").setVisible(false);
				
				sap.ui.getCore().byId("lblMatDocNo").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal").setText(docNum);
				
				var rowId = "MaterialNoIcon-tabMaterialLst-" + selindex;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://sys-enter-2");
				materialRow.addStyleClass("text_green");
				
				sap.ui.getCore().byId("inputQty").setEnabled(false);
				sap.ui.getCore().byId("inputBatch").setEnabled(false);
				sap.ui.getCore().byId("inputSerial").setEnabled(false);
			} else {
				sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
				
				sap.ui.getCore().byId("inputQty").setEnabled(true);
				sap.ui.getCore().byId("inputBatch").setEnabled(true);
				sap.ui.getCore().byId("inputSerial").setEnabled(true);
			}
		}
	}
	
	var listItemIDCtrl = sap.ui.getCore().byId(tabMaterialLst.getItems()[selindex].sId);
	tabMaterialLst.setSelectedItem(listItemIDCtrl, true); //Setting the selected Item
}