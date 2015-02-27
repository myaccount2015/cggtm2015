sap.ui.controller("com.cg.gtm.view.MOB17_MaterialFullDetPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB17_MaterialFullDetPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB17_MaterialFullDetPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB17_MaterialFullDetPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB17_MaterialFullDetPage
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
			
			 varScan = "Mob17Matmaster";
			 Mob17scan = "Serial";
	         sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
	         
			/*var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
			
			jsonScanResult.done(function(results){ //All post operation of Scan has to be written inside done method.
	      
				var jsonScanResult = results.scanMaterials[0];
				//jsonScanResult.Material ( material number )
	         
	         
				var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
				var oModel = tabMaterialLst.getModel();
				var arrMatLst = oModel.oData.modelData;
				var selMatNo = jsonScanResult.Material;
							
				var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
				var errMsg = "";
				if(jsonScanResult != undefined && jsonScanResult.Error != undefined && jsonScanResult.Error.trim().length > 0){
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
			});
			*/
		}
	},
	
	/*
	 * This method is called to post Stock Transfer Request. It construct the Request JSON object for multiple
	 * scenarios like Movement Type, Batch managed Material, Serial Managed Material, etc.,
	 */
	onComplete: function(oEvent) {
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		var validateQtyMOB17 = validateQty();
         if ( validateQtyMOB17 ==  true)
        	 {
		if (demo.getState() == true) {
			return;
		}
		
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
		
		//closeSplashScreen();//splash screen closed
		
		var isError = validateMaterialList1(); //Validating the materials added and setting the status
		
	}
	}
});

/*
 * This method is responsible to add the serial No to the Meterial List model.
 */
function addSerial1(serialNo) {
	var tabSerialLst = sap.ui.getCore().byId("tblSerial");
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
		
		/*
		 * Add Serial to Model - Start
		 */
		addSerialToModel(aData1);
		/*
		 * Add Serial to Model - End
		 */
		
		
		sap.ui.getCore().byId("inputSerial").setValue("");
		
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
			  icon: "sap-icon://warning2",
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
		
		 /*
		 * Add Serial to Model - Start
		 */
		addSerialToModel(tabModel);
		/*
		 * Add Serial to Model - End
		 */
	}
	
	sap.ui.getCore().byId("inputSerial").setValue("");
}


/*
 * This method is responsible to add the serial No to the Meterial List model.
 */
function addSerialToMaterial(matNo, serialNo) {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	
	for(var i=0;i<arrMatLst.length;i++) {
				
		if(matNo.trim()==arrMatLst[i].Material) {
			if(typeof arrMatLst[i].Serial == "undefined" || arrMatLst[i].Serial.length==0) {
				var arrSerial = [];
				var aData1 = [
					   			{Serial: serialNo}
					   			];
				arrSerial.push(aData1);
				arrMatLst[i].SerialLst = arrSerial;
			}else {
				var aData1 = [
					   			{Serial: serialNo}
					   			];
				arrMatLst[i].SerialLst.push(aData1);
			}
			
		}
	}
	
	oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel);
	
}

/*
 * This method is responsible to validate each line item and set the alert icon.
 */
function validateMaterialList1() {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var tableModel = tabMaterialLst.getModel();
	
	var isError = false;
	
	
	if(typeof tableModel != 'undefined') {
			tabModelData = tableModel.oData.modelData;
			
			for(var i=0;i<tabModelData.length;i++) {
				
				var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
				var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
				var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
				
				/*if((lblMatNoVal.trim()==tabModelData[i].Material) && (lblCustVal.trim()==tabModelData[i].Customer) && (lblMatDescVal.trim()==tabModelData[i].Description)) {
				
					var lblQty = sap.ui.getCore().byId("lblQty");
					//var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
					var qty = sap.ui.getCore().byId("inputQty").getValue();
	
					if(tabModelData[i].SerialManaged==true) {
						if(typeof tabModelData[i].SerialLst == 'undefined' && !isNaN(qty) & parseInt(qty) >0) {
							lblQtyIcon.setSrc("sap-icon://alert");
						}else if(!isNaN(parseInt(qty)) && typeof tabModelData[i].SerialLst != 'undefined' && parseInt(qty)!= tabModelData[i].SerialLst.length) {
							lblQtyIcon.setSrc("sap-icon://alert");
						}else {
							lblQtyIcon.setSrc("");
						}
					}else {
						if(!isNaN(parseInt(qty)) && parseInt(qty) < 1) {
							lblQtyIcon.setSrc("sap-icon://alert");
						}else {
							lblQtyIcon.setSrc("");
						}
					}
				}*/
				
				if(tabModelData[i].SerialManaged==false) {
					
					var errMsg = tabModelData[i].errMessage;
					
					if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) {
						//Skipping
					}else{
					
						var qty = tabModelData[i].Quantity;
						if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) > 0) {
							var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
							var materialRow = sap.ui.getCore().byId(rowId);
							materialRow.setSrc("");
						}else {
							var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
							var materialRow = sap.ui.getCore().byId(rowId);
							materialRow.setSrc("sap-icon://edit");
						}
						//continue;
					}
				}else {
				
					var serLst = tabModelData[i].SerialLst;
					var qty = tabModelData[i].Quantity;
					
					if(isNaN(qty) || typeof serLst == 'undefined' || serLst.length < parseInt(qty)) {
						var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
						isError = true;
					} else {
						var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");
					}
				}
				
				var errMsg = tabModelData[i].errMessage;
				
				if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) { //Check For Error Message
					sap.ui.getCore().byId("lblErr").setVisible(true);
					sap.ui.getCore().byId("lblErrVal").setVisible(true);
					sap.ui.getCore().byId("lblErrVal").setText(errMsg);
					
					sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
					sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
					
					var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					
					materialRow.setSrc("sap-icon://alert");
					materialRow.addStyleClass("text_er");
				}else {
					sap.ui.getCore().byId("lblErr").setVisible(false);
					sap.ui.getCore().byId("lblErrVal").setVisible(false);
				}
				
				var docNum = tabModelData[i].docNumber;
				if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) { //Check For Error Message
					sap.ui.getCore().byId("lblErr").setVisible(false);
					sap.ui.getCore().byId("lblErrVal").setVisible(false);
					
					sap.ui.getCore().byId("lblMatDocNo").setVisible(true);
					sap.ui.getCore().byId("lblMatDocVal").setVisible(true);
					sap.ui.getCore().byId("lblMatDocVal").setText(docNum);
					
					var rowId = "MaterialNoIcon-tabMaterialLst-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					
					materialRow.setSrc("sap-icon://sys-enter-2");
					materialRow.addStyleClass("text_green");
					
					var rowIcon = "span#Icon-tabMaterialLst-" + i;
					/*var iconRow = sap.ui.getCore().byId(rowIcon);
					
					iconRow.addStyleClass("grayColor");*/
					
					$(rowIcon).css('color', 'gray');
					
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
	
	return isError;
}

/*
 * This method is responsible to remove the serial No to the Meterial List model.
 */
function removeSerialFromModel(arrSerial) {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	
	for(var i=0;i<arrMatLst.length;i++) {
		var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
		var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("inputQty").getValue();
		
		if((lblMatNoVal.trim()==arrMatLst[i].Material) && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			/*
			 * Checking Qty Field and update it
			 */
			/*if(isNaN(inputQty) || inputQty.toString().trim().length == 0 || arrSerial.length > parseInt(inputQty)) {
				sap.ui.getCore().byId("inputQty").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}*/
			var qtyValue = parseInt(inputQty);
			if((qtyValue-arrSerial.length) <= 1) {
				sap.ui.getCore().byId("inputQty").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}
			
		}
	}
	
	var oModel2 = new sap.ui.model.json.JSONModel();
	oModel2.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel2);
	
	validateMaterialList1(); //Validate and set the status for Material List
	
}

/*
 * This method is responsible to add the serial No to the Meterial List model.
 */
function addSerialToModel(arrSerial) {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	
	for(var i=0;i<arrMatLst.length;i++) {
		var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var lblUOMVal = sap.ui.getCore().byId("lblUOMVal").getText();
		var lblMatNoVal = sap.ui.getCore().byId("lblMatNoVal").getText();
		var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("inputQty").getValue();
		
		var lblQty = sap.ui.getCore().byId("lblQty");
		
		if((lblMatNoVal.trim()==arrMatLst[i].Material) && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			/*
			 * Checking Qty Field and update it
			 */
			/*if(isNaN(inputQty) || inputQty.toString().trim().length == 0 || arrSerial.length > parseInt(inputQty)) {
				sap.ui.getCore().byId("inputQty").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}*/
			var qtyValue = parseInt(inputQty);
			if(isNaN(qtyValue) || (qtyValue-arrSerial.length) < 1) {
				sap.ui.getCore().byId("inputQty").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}
			
		}
	}
	
	var oModel2 = new sap.ui.model.json.JSONModel();
	oModel2.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel2);
	
	validateMaterialList1(); //Validate and set the status for Material List
	
}

/*
 * This method is calling HeaderStckTransferSet service by setting Post Request JSON Data.
 * It is accepting Material Object and the selected Index, so that it can set the success & failure Indication.
 */
function postStockTransfer(objMaterial, selIndex) {
	openSplashScreen();//splash screen opened
	debugger;
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB17:: Service: HeaderStckTransferSet Start" ;


	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
	if(serviceURL == "Fail")
	 {
	 return false;
	 }
	
	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	 
	oModel.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});
	
	 var readRequestURL = "/HeaderStckTransferSet";
	 
	 var createReqData = createPostReqData(objMaterial); //Constructing Post Req Data
	
	oModel.create(readRequestURL, createReqData, null, 
			function(oResponse) {
			
			var docNo = oResponse.MatDocNo;
			setSuccessErrorResponse1(objMaterial, docNo, null); //Setting Success Message in the model (objMaterial, docNo, errMsg)
			sap.m.MessageBox.show(
		    		  "Operation Successful. Document No Created: " + docNo,
						sap.m.MessageBox.Icon.SUCCESS,
						"Success");
			
			closeSplashScreen();//splash screen closed
			
			populateMatDetail(selIndex);
			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB17:: Service: HeaderStckTransferSet Finish" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
	
	},
	function(oError){
		 try
			{
			 closeSplashScreen();//splash screen closed
			 var data = JSON.parse(oError.response.body);
			for(var event in data)
			{
				var dataCopy = data[event];	
				try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					setSuccessErrorResponse1(objMaterial, null, messageFromBackend); //Setting Error Message in the model (objMaterial, docNo, errMsg)
					populateMatDetail(selIndex);
					sap.m.MessageBox.show(
				    		   messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error Material No: " + objMaterial.Material);
				}catch(e)
					{sap.m.MessageBox.show(
							data.error.message.value+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
					break;
				}
			}
			}
	 
		catch(e)
			{
			sap.m.MessageBox.show(
            "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
			
			
			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB17:: Service: HeaderStckTransferSet Failed no network" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
			
			
			}
		
	}
	
	
	);
}

/*
 * This method is responsible to set the request data for Deep structure. It can handle all scanerios
 * like Movement Type, Batch managed Material, Serial Managed Material, etc.,
 */
function createPostReqData(objMaterial) {
	var plantInput = "";
	
	var specialStock = "";
	
	var movType = "";
	
	var fromStoLoc = "";
	
	var toStoLoc = "";
	
	var project = "";
	
	var customer = "";
	
	/*
	 * Set Plant Code - Start
	 */
	if(typeof g_SelectedPlant != 'undefined') {
		plantInput = g_SelectedPlant.description;
	} else {
		plantInput = defaultPlantCode; //defaultPlantCode & defaultPlantName
	}
	/*
	 * Set Plant Code - End
	 */
	
	if(typeof plantInput != 'undefined' && plantInput.trim().length==0) {
		plantInput = g_inputPlantCode;
	} else if(plantInput == "") {
		plantInput = g_inputPlantCode;
	}
	
	
	/*
	 * Set Special Stock - Start
	 */
	
	
	/*var optSpecialStock = sap.ui.getCore().byId("optSpecialStock");
	var selIndex = optSpecialStock.oItemNavigation.iSelectedIndex;*/
	
	//Mobile Radio Group
	//Q- Project Stock
	//B- Customer stock
	var selIndex = "";
	debugger;
	
	/*if( sap.ui.getCore().byId("idradio-cost1-Mob17").getSelected() == true )
		{
		
		selIndex = 1;
		}
	
	else if( sap.ui.getCore().byId("idradio-cost2-Mob17").getSelected() == true )
		{
		selIndex = 2;
		}
	
	
	
	if(selIndex==2) {
		specialStock = "B";
		
		
		 * Set Customer - Start
		 
		//var cust = sap.ui.getCore().byId("selectCustProj");
		//customer = cust.mProperties.selectedKey;
		if(typeof g_SelectedCust != 'undefined') {
			customer = g_SelectedCust.description;
		} else {
			customer = " "; //defaultPlantCode & defaultPlantName
		}
		
		 * Set Customer - End
		 
	}else if(selIndex==1) {
		specialStock = "Q";  
		
		
		 * Set Project - Start
		 
		//var proj = sap.ui.getCore().byId("selectCustProj");
		//project = proj.mProperties.selectedKey;
		if(typeof g_SelectedProj17 != 'undefined') {
			project = g_SelectedProj17.description;
		} else {
			project = " "; //defaultPlantCode & defaultPlantName
		}
		
		 * Set Project - End
		 
	} */
	/*
	 * Set Special Stock - End
	 */
	
	/*
	 * Set Movement Type - Start
	 */
	var selActionType = sap.ui.getCore().byId("selActionType");
	movType = selActionType.mProperties.selectedKey;
	
	/*
	 * Set Movement Type - End
	 */
	
	/*
	 * Set From Storage Loc - Start
	 */
	var fromStorage = sap.ui.getCore().byId("idFromStorage");
	fromStoLoc = fromStorage.mProperties.selectedKey;
	/*
	 * Set From Storage Loc - End
	 */
	
	/*
	 * Set From To Loc - Start
	 */
	var toStorage = sap.ui.getCore().byId("idToStorage");
	if(toStorage.mProperties.visible==true) {
		toStoLoc = toStorage.mProperties.selectedKey;
	}
	/*
	 * Set From To Loc - End
	 */
	
		var createReqData = {
			"Plant" : plantInput,
			"SplStock" : specialStock,
			"MvtType" : movType,
			"FromSloc" : fromStoLoc,
			"ToSloc" : toStoLoc,
			"CustomerNo" : customer,
			"WBSElement" : project
			};
 
	 	var lineItems = [];
		//lineItems.push({"Material" : objMaterial.Material ,"StockType" : "" , "Uom": objMaterial.Uom , "Quantity" : objMaterial.Quantity.toString(), "SplitValuated" : "", "Batch" : (typeof objMaterial.Batch != 'undefined')?objMaterial.Batch:""});
		lineItems.push({"Material" : objMaterial.Material ,"StockType" : "" , "Uom": objMaterial.Uom , "Quantity" :objMaterial.Quantity.toString(), "SplitValuated" : "", "Batch" : (typeof objMaterial.Batch != 'undefined')?objMaterial.Batch:""});
		
 		createReqData.NavItemStckTransfer = lineItems;
 		
 		var serialLineItems = [];
 		
 		if(objMaterial.SerialManaged == true) {
 			for(var i=0;i<objMaterial.SerialLst.length;i++) {
 				serialLineItems.push({"MaterialNo" : objMaterial.Material ,"SerialNo" : objMaterial.SerialLst[i].Serial});
 			}
 		} else {
 			serialLineItems.push({"MaterialNo" : "" ,"SerialNo" : ""});
 		}
 
 		createReqData.NavSerialStckTransfer = serialLineItems;
 		
		return createReqData;
}

/*
 * This method will set the success & error message in Material List Data Model
 */
function setSuccessErrorResponse1(objMaterial, docNo, errMsg) {
	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	
	if(docNo == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material) && (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)) {
				arrMatLst[i].errMessage = errMsg.toString();
			}
		}
	}else  if(errMsg == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material) && (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)) {
				arrMatLst[i].docNumber = docNo.toString();
			}
		}
	}
	
	oModel.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel);
}

/*
 * This method is called to show alert message.
 */
function processedItemDialog(matNo) {
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

function  validateQty()
{
	var inQty = sap.ui.getCore().byId("inputQty").getValue() ;
	
	if ( null == inQty  || inQty ==  undefined || inQty == "" )
		{
		
		sap.m.MessageBox.show(
				 "Please enter a quantity ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");  
		
		return false ;
		
		}

	else
		{
		
		var inQtyInt = parseInt(inQty);
		
		if ( inQtyInt == 0)
			{
			
			sap.m.MessageBox.show(
					 "Please enter a quantity greater than Zero ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");  
			return false ;
			}
		
		}

	return true ;
	
	}