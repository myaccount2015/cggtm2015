sap.ui.controller("com.cg.gtm.view.Mob18Scrap_Items", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18Scrap_Items
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18Scrap_Items
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18Scrap_Items
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18Scrap_Items
*/
//	onExit: function() {
//
//	}
	deleteMaterial: function(oEvent) {
		g_MOB18DeleteMat = true; //Global Variable to denote material item is deleted
		/*var controlName = oEvent.oSource.sId;
		var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
		var selectedIndex = parseInt(strSelectedIndex);*/
		//alert(selectedIndex);
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		
		
		
			var arrPath = tabMaterialLst._aSelectedPaths;

			var path = arrPath[0];
			var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);

			var selectedIndex = parseInt(strSelectedIndex);
		var lenMaterialLst = oModel.oData.modelData.length;
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
		
		var arrMatLst = [];
		for(i=0;i<=lenMaterialLst-1;i++) {
			
			if(i!=selectedIndex) {
				arrMatLst.push(arrJSONMatLst[i]);
			}
				
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
		
		if(lenMaterialLst==1) { //If no material in the list navigate to blank
			var splitAppMOB17 = sap.ui.getCore().byId("idMOB18SplitApp");
			splitAppMOB17.toDetail("idMOB18Blank");
			
		}
		else {
			/*
			 * Select first item from the list
			 */
			SerialDetail_Scrap(0);
		}
	},
	Mo23nav_mob : function(oEvent){
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
        var data = tabMaterialLst.getSelectedItem().sId; 
		
		
		
		var strSelectedIndex = data.substring(data.lastIndexOf("-")+1);
		
		var selectedIndex = parseInt(strSelectedIndex);
	//	alert(selectedIndex);
		//var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		//var oModel = tabMaterialLst.getModel();
		
		var lenMaterialLst = oModel.oData.modelData.length;
		
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
		
	//	var arrMatLst = [];
		
		for(i=0;i<lenMaterialLst;i++) {
			if(i==selectedIndex) {
				var material = arrJSONMatLst[selectedIndex].Material;
				sap.ui.getCore().byId("inputItem").setValue(material);
				sap.ui.controller("com.cg.gtm.view.Mob23Matmaster").show();
				
			}
			}
		
	},
	matSel1: function(oEvent) {
		alert("Hi");
	},
	
	matSel: function(oEvent) {
		
		////////////////////////////Mobile//////////////////////////////////
		
		if ( g_runningOnPhone == true)
		{ 
			 g_MobileNavigationId = "Mob18_scrapcase";
			 sap.ui.getCore().byId("myApp").to("idMob18Scrapdetpage");
			 
    		var arrPath = oEvent.oSource._aSelectedPaths;
    		
    		var path = arrPath[0];
    		
    		var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);
    		
    		var selectedIndex = parseInt(strSelectedIndex);
    	//	alert(selectedIndex);
    		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
    		var oModel = tabMaterialLst.getModel();
    		
    		var lenMaterialLst = oModel.oData.modelData.length;
    		
    		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
    		
    		var arrMatLst = [];
    		
    		
    		//Bind data to inputfields
    		//var listItem = oEvent.getParameter('tableMat');	
    		 //  var contextPath = listItem.oBindingContexts.undefined.sPath;	

    		/*   var Material = sap.ui.getCore().byId("idMat"); 
    		   Material.setText(arrJSONMatLst[selectedIndex].Material);
    		   
    		 //  var Serial = sap.ui.getCore().byId("inputSerial_scrap"); 
    		//   Serial.setText(arrJSONMatLst[selectedIndex].Serial);
    		   
    		   var Serial = sap.ui.getCore().byId("inputSerial_scrap"); 
    		   Serial.setValue(arrJSONMatLst[selectedIndex].Serial);
    		   
    		   var UoM = sap.ui.getCore().byId("inputUoM"); 
    		   UoM.setValue(arrJSONMatLst[selectedIndex].UoM);
    		   
    		   var Quantity = sap.ui.getCore().byId("inputQty_Scrap"); 
    		   Quantity.setValue(arrJSONMatLst[selectedIndex].Quantity);
    		   
    		   var Batch = sap.ui.getCore().byId("inputbatch_Scrap"); 
    		   Batch.setValue(arrJSONMatLst[selectedIndex].Batch);
    		   
    		   var Location = sap.ui.getCore().byId("inputLoc_Scrap"); 
    		   Location.setValue(arrJSONMatLst[selectedIndex].Location);
    		   
    		   var LocationNo = sap.ui.getCore().byId("inputLocno_Scrap"); 
    		   LocationNo.setValue(arrJSONMatLst[selectedIndex].LocationNo);*/
    		   
    		SerialDetail_Scrap(selectedIndex); //Populating selected material details
    		g_MOB18DeleteMat = false;
		}
		   
		//showidMob18second_Scrap();
		/////////////////////////////Tablet/Desktop////////////////////////////
		else{
		
		//	showidMob18second2_Scrap();
		//showidMob18second_Scrap();
			  $("#idMob18Scrapdetpage").show()
		var arrPath = oEvent.oSource._aSelectedPaths;
		
		var path = arrPath[0];
		
		var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);
		
		var selectedIndex = parseInt(strSelectedIndex);
	//	alert(selectedIndex);
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		
		var lenMaterialLst = oModel.oData.modelData.length;
		
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
		
		var arrMatLst = [];
		
		
		
		
		//Bind data to inputfields
		//var listItem = oEvent.getParameter('tableMat');	
		 //  var contextPath = listItem.oBindingContexts.undefined.sPath;	

	/*	   var Material = sap.ui.getCore().byId("idMat"); 
		   Material.setText(arrJSONMatLst[selectedIndex].Material);
		   
		 //  var Serial = sap.ui.getCore().byId("inputSerial_scrap"); 
		//   Serial.setText(arrJSONMatLst[selectedIndex].Serial);
		   
		   var Serial = sap.ui.getCore().byId("inputSerial_scrap"); 
		   Serial.setValue(arrJSONMatLst[selectedIndex].Serial);
		   
		   var UoM = sap.ui.getCore().byId("inputUoM"); 
		   UoM.setValue(arrJSONMatLst[selectedIndex].UoM);
		   
		   var Quantity = sap.ui.getCore().byId("inputQty_Scrap"); 
		   Quantity.setValue(arrJSONMatLst[selectedIndex].Quantity);
		   
		   var Batch = sap.ui.getCore().byId("inputbatch_Scrap"); 
		   Batch.setValue(arrJSONMatLst[selectedIndex].Batch);*/
		   
		  /* var Location = sap.ui.getCore().byId("inputLoc_Scrap"); 
		   Location.setValue(arrJSONMatLst[selectedIndex].Location);
		   
		   var LocationNo = sap.ui.getCore().byId("inputLocno_Scrap"); 
		   LocationNo.setValue(arrJSONMatLst[selectedIndex].LocationNo);*/
		   
		
		
		for(i=0;i<=lenMaterialLst-1;i++) {
			
			/*if(typeof g_MOB17DeleteMat != 'undefined' && g_MOB17DeleteMat==true) {
				if(i!=selectedIndex) {
					arrMatLst.push(arrJSONMatLst[i]);
				}
				
			}*/
			
			
			/*if(i==selectedIndex) {
				
				$('span#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('span#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('span#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'bold');
			}else {
				$('span#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('span#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('span#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'normal');
			}*/
		}
		
		/*if(typeof g_MOB17DeleteMat != 'undefined' && g_MOB17DeleteMat==true) {
			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
			
			if(lenMaterialLst==1) { //If no material in the list navigate to blank
				var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
				splitAppMOB17.toDetail("idMOB17_BlankScreen");
			}
			
		}*/
		
		/*var materialLstItm = oEvent.mParameters.listItem;
		materialLstItm.setSelected(false);*/
		  
		SerialDetail_Scrap(selectedIndex); //Populating selected material details
		
		g_MOB18DeleteMat = false;

	}
	}
});

function SerialDetail_Scrap(selectedIndex) {
	debugger;
	sap.ui.getCore().byId("inputQty_Scrap").setEnabled(true);
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	
	var lenMaterialLst = oModel.oData.modelData.length;
	
	var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
	
	for(i=0;i<lenMaterialLst;i++) {
		if(i==selectedIndex) {
			//sap.ui.getCore().byId("lblCustVal").setText(arrJSONMatLst[selindex].Customer);
			//sap.ui.getCore().byId("inputUoM").setText(arrJSONMatLst[selectedIndex].Uom);
			sap.ui.getCore().byId("inputQty_Scrap").setValue(arrJSONMatLst[selectedIndex].Quantity);
			sap.ui.getCore().byId("inputbatch_order").setValue(arrJSONMatLst[selectedIndex].Batch)
			sap.ui.getCore().byId("idMat").setText(arrJSONMatLst[selectedIndex].Material);
		//	sap.ui.getCore().byId("lblMatDescVal").setText(arrJSONMatLst[selindex].Description);
		
			
			
			if(arrJSONMatLst[i].BatchManaged==false&&arrJSONMatLst[i].Splitvaluated==false) {
				sap.ui.getCore().byId("idBatch").setVisible(false);
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
				sap.ui.getCore().byId("idscanserial").setVisible(false);
				sap.ui.getCore().byId("idscan").setVisible(false);
			}
			else if(arrJSONMatLst[i].BatchManaged==true&&arrJSONMatLst[i].Splitvaluated==true){
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
				sap.ui.getCore().byId("idBatch").setVisible(true);
				sap.ui.getCore().byId("idBatch").setText("Batch");
				sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch);
				sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Batch");
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				//sap.ui.getCore().byId("idscan_order").setVisible(false);
			}
			else if(arrJSONMatLst[i].BatchManaged==true &&arrJSONMatLst[i].Splitvaluated==false){
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
				sap.ui.getCore().byId("idBatch").setText("Batch");
				sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Batch");
				sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch)
				sap.ui.getCore().byId("idBatch").setVisible(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				//sap.ui.getCore().byId("idscan_order").setVisible(false);
			}
			else{
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
				sap.ui.getCore().byId("idBatch").setVisible(true);
				sap.ui.getCore().byId("idBatch").setText("Valuation Type");
				sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Valuation Type")
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch)
				//sap.ui.getCore().byId("idscan_order").setVisible(false);

			}
			/////////////////////////////////////////////////////////////////////
			
			
			
			
			if(arrJSONMatLst[selectedIndex].SerialManaged==true){
				sap.ui.getCore().byId("idscan").setVisible(true);
				//sap.ui.getCore().byId("idscanserial").setVisible(true);
					sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
				sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
				sap.ui.getCore().byId("idSerial").setVisible(true);
				/*sap.ui.getCore().byId("idBatch").setVisible(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);*/
				 if ( g_runningInTablet == true || g_runningOnPhone == true)
				  {
					 sap.ui.getCore().byId("idscanserial").setVisible(true)
				  }
				
			}
			/*else if(arrJSONMatLst[selectedIndex].BatchManaged==true) {
				sap.ui.getCore().byId("idBatch").setVisible(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				sap.ui.getCore().byId("idscan").setVisible(false);
				sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
				sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
				sap.ui.getCore().byId("idSerial").setVisible(false);

		
			}
			*/
			else if(arrJSONMatLst[selectedIndex].SerialManaged==false 
					//&& arrJSONMatLst[selectedIndex].BatchManaged==false
					){
				sap.ui.getCore().byId("idscan").setVisible(false);
				sap.ui.getCore().byId("idscanserial").setVisible(false);
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
				sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
				sap.ui.getCore().byId("idSerial").setVisible(false);
				/*sap.ui.getCore().byId("idBatch").setVisible(false);
				sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);*/

			}
			
			
			var arrSerialLst = arrJSONMatLst[selectedIndex].SerialLst;
			
			if(typeof arrSerialLst != 'undefined' && arrSerialLst.length > 0) {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: arrSerialLst});
				tabSerialLst.setModel(oModel2);
			} else {
				var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: []});
				tabSerialLst.setModel(oModel2);
			}
			
			/*
			 * Populate Serial Numbers - End
			 */
			var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
			var serialCount = 0;
			if(typeof arrSerialLst != 'undefined') {
				serialCount = arrSerialLst.length;
			}
			if(arrJSONMatLst[selectedIndex].SerialManaged==true) {
				if(!isNaN(arrJSONMatLst[selectedIndex].Quantity) && typeof (arrJSONMatLst[selectedIndex].Quantity) != 'undefined' &&  parseInt(arrJSONMatLst[selectedIndex].Quantity) > 0 ){

					if(serialCount < parseInt(arrJSONMatLst[selectedIndex].Quantity) ) {
						//lblQty.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
					}else {
						lblQty.setSrc("");
						var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");
					}
				}
				else{
					//lblQty.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
							var materialRow = sap.ui.getCore().byId(rowId);
							materialRow.setSrc("sap-icon://edit");
				}
				
			}
				else{
					if(!isNaN(arrJSONMatLst[selectedIndex].Quantity) && typeof (arrJSONMatLst[selectedIndex].Quantity) != 'undefined' &&  parseInt(arrJSONMatLst[selectedIndex].Quantity) > 0 ){
						
						lblQty.setSrc("");
						var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
							var materialRow = sap.ui.getCore().byId(rowId);
							materialRow.setSrc("");		
					}
					else{
					//	lblQty.setSrc("sap-icon://alert");
						var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
							var materialRow = sap.ui.getCore().byId(rowId);
							materialRow.setSrc("sap-icon://edit");
					}

				}
			
var errMsg = arrJSONMatLst[selectedIndex].errMessage;
			
			if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr1").setVisible(true);
				sap.ui.getCore().byId("lblErrVal1").setVisible(true);
				sap.ui.getCore().byId("lblErrVal1").setText(errMsg);
				
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
				
				var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://alert");
				materialRow.addStyleClass("text_er");
			} else {
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
				
				//sap.ui.getCore().byId("lblMatDocNo1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setText(docNum);
				
				
			}
			
			var docNum = tabModelData[selectedIndex].docNumber;
			if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
				
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setText(docNum);
				
				var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://sys-enter-2");
				materialRow.addStyleClass("text_green");
				
				sap.ui.getCore().byId("inputQty_Scrap").setEnabled(false);
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(false);
				sap.ui.getCore().byId("inputSerial_scrap").setEnabled(false);
				sap.ui.getCore().byId("idscan").setVisible(false);
			} else {
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
				
				
				//Error 
			//	sap.ui.getCore().byId("lblErr1").setVisible(true);
				sap.ui.getCore().byId("lblErrVal1").setVisible(true);
				sap.ui.getCore().byId("lblErrVal1").setText(errMsg);
				
				if(arrJSONMatLst[i].BatchManaged==false &&arrJSONMatLst[i].Splitvaluated==false) {
					sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
					//sap.ui.getCore().byId("idscan_order").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(false);
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}
				else if(arrJSONMatLst[i].BatchManaged==true&&arrJSONMatLst[i].Splitvaluated==true){

					sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("idBatch").setText("Batch");
					sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch);
					sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Batch");
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					//sap.ui.getCore().byId("idscan_order").setVisible(false);
				}
				else if(arrJSONMatLst[i].BatchManaged==true &&arrJSONMatLst[i].Splitvaluated==false){
					sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
					sap.ui.getCore().byId("idBatch").setText("Batch");
					sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Batch");
					sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch)
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					//sap.ui.getCore().byId("idscan_order").setVisible(false);
				}
				else{
					sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);	
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("idBatch").setText("Valuation Type");
					sap.ui.getCore().byId("inputbatch_Scrap").setPlaceholder("Enter Valuation Type")
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setValue(arrJSONMatLst[i].Batch)
					//sap.ui.getCore().byId("idscan_order").setVisible(false);

				}
				
				
				
				if(arrJSONMatLst[selectedIndex].SerialManaged==true){
					sap.ui.getCore().byId("idscan").setVisible(true);
					
					//sap.ui.getCore().byId("idscanserial").setVisible(true);
						sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
					sap.ui.getCore().byId("idSerial").setVisible(true);
					/*sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);*/
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
				}
				/*else if(arrJSONMatLst[selectedIndex].BatchManaged==true) {
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(false);
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);

			
				}
				*/
				else if(arrJSONMatLst[selectedIndex].SerialManaged==false 
						//&& arrJSONMatLst[selectedIndex].BatchManaged==false
						){
					sap.ui.getCore().byId("idscan").setVisible(false);
				
					sap.ui.getCore().byId("idscanserial").setVisible(false);
						sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);
					/*sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);*/

				}
				
				/*sap.ui.getCore().byId("inputQty_Scrap").setEnabled(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
				sap.ui.getCore().byId("inputSerial_scrap").setEnabled(true);
				sap.ui.getCore().byId("idscan").setVisible(true);*/
			}
/*else if (arrJSONMatLst[selectedIndex].Quantity == "" || arrJSONMatLst[selectedIndex].Quantity == null ){
	lblQty.setIcon("sap-icon://alert");
	var rowId = "Material-tableMat-" + i;
	var materialRow = sap.ui.getCore().byId(rowId);
	materialRow.setIcon("sap-icon://edit");
			}else{
				lblQty.setIcon("");
				var rowId = "Material-tableMat-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				materialRow.setIcon("");
			}*/
		}
	}
}

function showidMob18second2_Scrap() {
	$("#idMob18Scrapdetpage").show();
}