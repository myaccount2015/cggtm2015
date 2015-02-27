sap.ui.controller("com.cg.gtm.view.Mob18MaterialSearch", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18MaterialSearch
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18MaterialSearch
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18MaterialSearch
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18MaterialSearch
*/
//	onExit: function() {
//
	
//	}
	
	onBackMatMaster: function() {
		
		
		//Clear Table List-start////
		var tabSerialLst = sap.ui.getCore().byId("tableMat");
			var oModel = tabSerialLst.getModel();
			var aData1 = [];
				
			oModel = new sap.ui.model.json.JSONModel();
				
			oModel.setData({modelData: aData1});
			tabSerialLst.setModel(oModel);

			//Clear Table List-end////

  	// sap.ui.getCore().byId("inputMatNo_ser").setValue("");
  	
		var deselect = sap.ui.getCore().byId("tableMat");
		deselect.removeSelections();
			
		sap.ui.getCore().byId("inputSerial_scrap").setValue("");
		
	if(g_backNavMOB18 == "Mob18_matback"){
		 if(g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp");  
				app.to("idMOB18Scrapmas");
			}else{
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
				app.toMaster("idMOB18Scrapmas");
				app.toDetail("idMOB18Blank");
			}
	  //	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		//app.toMaster("idMOB18Scrapmas");
		 sap.ui.getCore().byId("idAddMaterial_Scrap").setVisible(true);
	}else  if(g_backNavMOB18 == "Mob18_matback2"){
		if(g_runningOnPhone == true)
		{
			var app = sap.ui.getCore().byId("myApp");  
			app.to("idMOB18WBSmas");
		}
		else{
			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		  	app.toMaster("idMOB18WBSmas");
			app.toDetail("idMOB18Blank");
		}
	  
	}
  	else if(g_backNavMOB18 == "Mob18_matback3"){
  		if(g_runningOnPhone == true)
		{
			var app = sap.ui.getCore().byId("myApp");  
			app.to("idMOB18Costmas");
		}
  		else{
  			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
  		    app.toMaster("idMOB18Costmas");
  			app.toDetail("idMOB18Blank");
  		}
	  	
  	}/*else if(backNavMat == "Mob18"){
  		hideidMob18first_Scrap();
		hideidMob18second_Scrap();
		//	var tabMaterialLst = sap.ui.getCore().byId("tableMat").removeAllItems();
			//Deselect table Items
		var deselect = sap.ui.getCore().byId("tableMat");
		deselect.removeSelections();
			
		sap.ui.getCore().byId("inputSerial_scrap").setValue("");
		if(backNavMat == "Mob18_matback"){
		    var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		    app.toMaster("idMOB18Scrapmas");
		    sap.ui.getCore().byId("idAddMaterial_Scrap").setVisible(true);
		}else  if(backNavMat == "Mob18_matback2"){
			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	        app.toMaster("idMOB18WBSmas");
		} else if(backNavMat == "Mob18_matback3"){
	        var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	        app.toMaster("idMOB18Costmas");
	     }
  	  }*/
    	
	},
	addMaterial : function(){
		debugger;
		 //Adding the material to the list
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		tabMaterialLst.removeSelections();
		var oModel = tabMaterialLst.getModel();
		
		var inputMatNo = sap.ui.getCore().byId("inputMatNo_ser").getValue();
		
		var matNo =inputMatNo; //inputMatNo.mProperties.value;
		
		var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
		 if ( demo) {
}
			
	
		
		 else{
			 
		
		var JSONMaterial = null;
		
		var inputmat = sap.ui.getCore().byId("inputMatNo_ser");
		inputmat.setValue("");
		var errMsg = "Material No: " + matNo + " Not Existing";
		
		/*
		 * Validation - Start
		 */
		if(matNo.trim().length==0) {//Check for material entered by user
			errMsg = "Please enter value for Material Number";
		}else {
			var isExisting = isMaterialExisting(oModel, matNo);//Check material already added
			if(isExisting==true) {
				errMsg = "Material No: " + matNo + " Already Added";
			}else {
				JSONMaterial = searchMaterialNo(matNo); //Calling com.cg.gtm.view.MaterialSearchDetailPage
				if(JSONMaterial.results.length > 1) {
					var multiEntry = isMultiMaterialExist(JSONMaterial, matNo);
					if(multiEntry == true) {
						errMsg = "This Material No: " + matNo + " is having multiple records to select.\nPlease choose from Material Search Option.";
					}
				}
			}
		}
		
		if(JSONMaterial == null || JSONMaterial.results.length != 1) {
			var lblConfirm = new sap.m.Label({
				//id:"Mob18-MaterialLbl",
				text: errMsg
			});
			
			var leftButton_b = new sap.m.Button({
				  text : "No",
				  press : function(){
					  dialogWindow.close();
				  }
			  });
			 var RightButton_b = new sap.m.Button({
				  text : "OK",
				  press : function(){
					  //addMaterialInvoker();
					  dialogWindow.close();
				  }
			  });
			  
			 var dialogWindow = new sap.m.Dialog({
				// id:"Mob18-AddMaterial-Dialog",
				  title: "Warning",
			      icon: "img/download_1.jpg",
				  resizable: true,
				  //leftButton : leftButton_b,
				  rightButton: RightButton_b,
				  content : lblConfirm,
				  width : "90%"
			  });
			 
			 dialogWindow.open();
			
			   // sap.ui.getCore().byId("Mob18-MaterialLbl").setText(errMsg);
				//sap.ui.getCore().byId("Mob18-AddMaterial-Dialog").open();
		}
	
		
		/*
		 * Validation - End
		 */
		else {
			
			var materialResult = JSONMaterial.results[0];
			
			
			if(oModel==undefined) {
				//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
				
				//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
				
				sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
				//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
				
				var isSerial = true;
				var isBatch = true;
				var isSplitValuated = true;
				
				if(materialResult.Batchmanaged=="No") {
					isBatch = false;
					sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
				}else {
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				}
				
				if(materialResult.Serialized=="No") {
					isSerial = false;
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}else {
					sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
					sap.ui.getCore().byId("idSerial").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
					else{
						sap.ui.getCore().byId("idscanserial").setVisible(false)
					}
					//sap.ui.getCore().byId("idscanserial").setVisible(true);
				}
				
				if(materialResult.Splitvaluated=="No") {
					isSplitValuated = false;
				}
				
			//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
			//	sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
				
				var aData1 = [
				  			{"Material": materialResult.Materialno,Batch: "", "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "-", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []}
				  			];
				oModel = new sap.ui.model.json.JSONModel();
				
				oModel.setData({modelData: aData1});
				tabMaterialLst.setModel(oModel);
			} else {
				//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
				
				//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
				
				sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
				//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
				
				var isSerial = true;
				var isBatch = true;
				var isSplitValuated = true;
				
				if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}
				
				if(materialResult.Batchmanaged=="No") {
					isBatch = false;
					sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
				}else {
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(false);
				
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}
				
				if(materialResult.Serialized=="No") {
					isSerial = false;
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}else {
					sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
					sap.ui.getCore().byId("idSerial").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
				}
				
				if(materialResult.Splitvaluated=="No") {
					isSplitValuated = false;
				}
				
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
				
				
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
				
				sap.ui.getCore().byId("inputQty_Scrap").setValue("");
				
				var arrMatLst = oModel.oData.modelData;
				var objMaterial = {"Material": materialResult.Materialno, "Description": materialResult.Description,Batch: "", "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []};
				arrMatLst.push(objMaterial);
				
				var oModel2 = new sap.ui.model.json.JSONModel();
				
				oModel2.setData({modelData: arrMatLst});
				tabMaterialLst.setModel(oModel2);
			}
			
			/*
			 * Navigating to detail page - Start
			 */
			 if ( g_runningOnPhone == true)
         	 {
				 g_MobileNavigationId = "Mob18_scrapitems";
         	 var app = sap.ui.getCore().byId("myApp").to("idMob18Scrappage");
         	 }
			 else{
				 g_navbutton = "backScrapdetails";
				 var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
					idMOB18SplitApp.toDetail("idMOB18SplitScrap");  
					  $("#idMob18Scrapdetpage").hide()
			 }
			
			 // showidMob18first_Scrap();
				//hideidMob18second_Scrap();//navigate to detail split screen
			
			/*
			 * Navigating to detail page - End
			 */
		}
		
		Mob18validateMaterial();  //Validate and set the status for Material List
		

		/*
		 * Clear Serial List - Start
		 */
		var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
		var oModel = tabSerialLst.getModel();
		var aData1 = [];
			
		oModel = new sap.ui.model.json.JSONModel();
			
		oModel.setData({modelData: aData1});
		tabSerialLst.setModel(oModel);
	
		/*
		 * Clear Serial List - End
		 */
		
		sap.ui.getCore().byId("inputbatch_Scrap").setValue(""); //Clear Batch Field
		
		//setSelectedIndexForMatTable_scrap(); 
	}
	}

});


/*
 * This method is responsible of getting the Table model data and check it is already existing and return true.
 */
function isMaterialExisting(tableModel, matNo) {
	var isExisting = false;
	var tabModelData = null; 
	if(typeof tableModel != 'undefined') {
		tabModelData = tableModel.oData.modelData;
		
		for(var i=0;i<tabModelData.length;i++) {
			if(tabModelData[i].Material.trim() == matNo.trim()) {
				isExisting = true;
			}
		}
	}
	return isExisting;
}

/*
 * This method check whether multiple material exists.
 */
function isMultiMaterialExist(JSONMat, matNo) {
	var isExisting = true;
	if(typeof JSONMat != 'undefined') {
		var JSONMatResults = JSONMat.results;
		for(var i=0;i<JSONMatResults.length;i++) {
			if(JSONMatResults[i].Materialno.trim() != matNo.trim()) {
				isExisting = false;
				break;
			}
		}
	}
	return isExisting;
}


function showidMob18first_Scrap() {
	$("#idMob18Scrappage").show();
	$("#idMOB18SplitScrap").show();
	
}
function hideidMob18first_Scrap(){
	$("#idMob18Scrappage").hide();
	$("#idMOB18SplitScrap").hide();
}

function hideidMob18second_Scrap() {
	$("#idMob18Scrapdetpage").hide();
	
}

function showidMob18second_Scrap() {
	$("#idMob18Scrapdetpage").show();
}