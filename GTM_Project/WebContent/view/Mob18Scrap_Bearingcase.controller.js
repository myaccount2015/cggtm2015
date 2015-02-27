sap.ui.controller("com.cg.gtm.view.Mob18Scrap_Bearingcase", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18Scrap_Bearingcase
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18Scrap_Bearingcase
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18Scrap_Bearingcase
*/
	onAfterRendering: function() {
		var jsonReason = null;
		var demo = sap.ui.getCore().byId("demoswitch");  
		
	if (demo.getState() == true) {
			jsonReason = mob18Reason(jsonReason); //Mocking JSON Data
			
		
			
		}else {
			jsonReason = mob18Reason(jsonReason);  //TODO : Integrate Service
			// mob18Reason();
			
		}
		callReason(jsonReason);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18Scrap_Bearingcase
*/
//	onExit: function() {
//
//	}
	showSerialLst : function(oEvent){
		this.popover = sap.ui.getCore().byId("popoverMOB18Serial");
		this.popover.openBy(oEvent.getSource());
	},
	
	ChangeBatch: function(oEvent){
		debugger;
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		//alert(txtValue);
		var arrMatLst = oModel.oData.modelData;
		
		for(var i=0;i<arrMatLst.length;i++) {
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
			var inputMatNoVal = sap.ui.getCore().byId("idMat").getText();
			//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
				var objMaterial = arrMatLst[i];
				objMaterial.Batch = txtValue;
				
				
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
		Mob18validateMaterial(); //Validate and set the status for Material List
		
		
	
		
	},
	ChangeQuantity : function(oEvent){
		  field_numeric_validation(sap.ui.getCore().byId("inputQty_Scrap"));//go to string utility 
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		//alert(txtValue);
		var arrMatLst = oModel.oData.modelData;
		
		for(var i=0;i<arrMatLst.length;i++) {
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
			var inputMatNoVal = sap.ui.getCore().byId("idMat").getText();
			//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
				var objMaterial = arrMatLst[i];
				objMaterial.Quantity = txtValue;
				
				var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
				var serialCount = 0;
				if(typeof objMaterial.SerialLst != 'undefined') {
					serialCount = objMaterial.SerialLst.length;
				}
				
				if(!isNaN(txtValue)) {
					if(serialCount < parseInt(txtValue)) {
						//lblQty.setSrc("sap-icon://alert");
					}else {
						lblQty.setSrc("");
					}
				}
				
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({modelData: arrMatLst});
		tabMaterialLst.setModel(oModel2);
		Mob18validateMaterial(); //Validate and set the status for Material List
		
		
	},
	Mob18deleteSerial : function(oEvent){
		
		
	var errExist = false;
		
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		var arrMatLst = oModel.oData.modelData;
		
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var inputMatNoVal = sap.ui.getCore().byId("idMat").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		
		for(var i=0;i<arrMatLst.length;i++) {
			if((inputMatNoVal.trim()==arrMatLst[i].Material))/* && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) */{
				
				var docNum = arrMatLst[i].docNumber;
				if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
					errExist = true;
					var objMaterial = arrMatLst[i];
					mob18ItemDialog(objMaterial.Material);
				}
			}
		}
		
		if(errExist == true) {
			return;
		}
		
	var controlName = oEvent.oSource.sId;
	var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
	var selectedIndex = parseInt(strSelectedIndex);
	
	var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
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
	
	Mob18addSerialToModel(arrMatLst);
	//sap.ui.getCore().byId("inputSerial_scrap").setValue(" ");
},

	///////////////Phone Version function
	scan : function(oEvent){
		var valSerial = sap.ui.getCore().byId("inputSerial_scrap");
				
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
							  mob18addSerial(valSerial.getValue()); //Adding Serial
							  
						  }
					  });
					  
					 var dialogWindow = new sap.m.Dialog({
						  title: "Add Serial",
						  leftButton : leftButton_b,
						  rightButton: RightButton_b,
						  content : lblConfirm,
						 // width : "90%"
						
					  });
					 
					 dialogWindow.open();
					 
				}
			},
			
			Mob18Complete: function(oEvent) {
		     var isError = Mob18validateMaterial(); //Validating the materials added and setting the status
				
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
				
				var tabMaterialLst = sap.ui.getCore().byId("tableMat");
				var tableModel = tabMaterialLst.getModel();
				
				if(typeof tableModel != 'undefined') {
						tabModelData = tableModel.oData.modelData;
						
						for(var i=0;i<tabModelData.length;i++) {
							var docNum = tabModelData[i].docNumber;
							if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
								//Skip the success item
							}else {
								Mob18post(tabModelData[i], i); //Posting Stock Transfer
							}
							
						}
					}
				
				closeSplashScreen();//splash screen closed
				
			}

		});

		
			/////////////phone version 

function Mob18post(objMaterial, selectedIndex) {
   var demo = sap.ui.getCore().getElementById("demoswitch").getState();
       
       if (demo)
{  
    	   sap.m.MessageBox.show(
					 "Items has been Posted Successfully",
						sap.m.MessageBox.Icon.SUCCESS,
						"Success");
   		
    	  
}
       else{
    	   
      
    		
    	 //Service Start Time
    	 var logInfo = getTimeStamp() +"MOB18:: Service: HeaderStckIssueSet Start" ;

    	 
    	 
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
	
	 var readRequestURL = "/HeaderStckIssueSet";
	 
	 var createReqData = Mob18PostReqData(objMaterial); //Constructing Post Req Data
	
	oModel.create(readRequestURL, createReqData, null, 
			function(oResponse) {
			
			var docNo = oResponse.MatDocNo;
			setSuccessErrorResponse(objMaterial, docNo, null); //Setting Success Message in the model (objMaterial, docNo, errMsg)
			SerialDetail_Scrap(selectedIndex);
			
			
			

			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB18:: Service: HeaderStckIssueSet Finish" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
	
	},
	function(oError){
		 try
			{
			 var data = JSON.parse(oError.response.body);
			for(var event in data)
			{
				var dataCopy = data[event];	
				try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					setSuccessErrorResponse(objMaterial, null, messageFromBackend); //Setting Error Message in the model (objMaterial, docNo, errMsg)
					SerialDetail_Scrap(selectedIndex);
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
			var logInfo1 = getTimeStamp() +"MOB18:: Service: HeaderStckIssueSet Failed no network" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
			
			
			}
		
	}
	
	
	);
}
}

function Mob18PostReqData(objMaterial) {
	var plantInput = "";
	
	var specialStock = "";
	
	var movType = "";
	
	//var fromStoLoc = "";
	
	//var toStoLoc = "";
	
	var project = "";
	
	var customer = "";
	
	var reasonmvt = "";
	
	var StorageLoc = "";
	
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
	
	/*
	 * Set Special Stock - Start
	 */
	if(globalMob18Movetype=="555"){
		//var optSpecialStock = sap.ui.getCore().byId("idradio_scrap");
		
		//var selIndex = optSpecialStock.oItemNavigation.iSelectedIndex;
		
		
		//Mobile Radio Group
		//Q- Project Stock
		//B- Customer stock
		var selIndex = "";
		debugger;
		
		if( sap.ui.getCore().byId("idradio-cost1-Mob18-1").getSelected() == true )
			{
			
			selIndex = 1;
			}
		
		else if( sap.ui.getCore().byId("idradio-cost1-Mob18-2").getSelected() == true )
			{
			selIndex = 2;
			}
		
		
		
		if(selIndex==2) {
			specialStock = "B";
			
			/*
			 * Set Project - Start
			 */
			var cust = sap.ui.getCore().byId("selectCustProj2");       //Scrap
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
			customer = cust.mProperties.selectedKey;
			/*
			 * Set Project - End
			 */
		}else if(selIndex==1) {
			specialStock = "Q";
			
			/*
			 * Set Customer - Start
			 */
			var proj = sap.ui.getCore().byId("selectCustProj1"); //scrap
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
		//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
			project = proj.mProperties.selectedKey;
			/*
			 * Set Customer - End
			 */
		} 
		/*
		 * Set Special Stock - End
		 */
	}

	else if(globalMob18Movetype=="221"){
		//var optSpecialStock = sap.ui.getCore().byId("idradio_wbs");
		//var selIndex = optSpecialStock.oItemNavigation.iSelectedIndex;
		
		
		//Mobile Radio Group
		//Q- Project Stock
		//B- Customer stock
		var selIndex = "";
		debugger;
		
		if( sap.ui.getCore().byId("idradio-wbs-1-Mob18").getSelected() == true )
			{
			
			selIndex = 1;
			}
		
		else if( sap.ui.getCore().byId("idradio-wbs-2-Mob18").getSelected() == true )
			{
			selIndex = 2;
			}
		
		
		if(selIndex==2) {
			//specialStock = "B";
			
			/*
			 * Set Project - Start
			 */
			var cust = sap.ui.getCore().byId("selectCustProj_WBS2");       //Scrap
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
			customer = cust.mProperties.selectedKey;
			/*
			 * Set Project - End
			 */
		}else if(selIndex==1) {
			//specialStock = "Q";
			
			/*
			 * Set Customer - Start
			 */
			var proj = sap.ui.getCore().byId("selectCustProj_WBS"); //scrap
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
		//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
			project = proj.mProperties.selectedKey;
			/*
			 * Set Customer - End
			 */
		} 
	}
	else if(globalMob18Movetype=="201"){
		//var optSpecialStock = sap.ui.getCore().byId("idradio-cost");
		
		//var selIndex = optSpecialStock.oItemNavigation.iSelectedIndex;
		
		
		//Mobile Radio Group
		//Q- Project Stock
		//B- Customer stock
		var selIndex = "";
		debugger;
		
		if( sap.ui.getCore().byId("idradio-cost1-Mob18-1").getSelected() == true )
			{
			
			selIndex = 1;
			}
		
		else if( sap.ui.getCore().byId("idradio-cost1-Mob18-2").getSelected() == true )
			{
			selIndex = 2;
			}
		
		
		
		if(selIndex==2) {
			//specialStock = "B";
			
			/*
			 * Set Project - Start
			 */
			var cust = sap.ui.getCore().byId("selectCustProj_Cost2");       //Scrap
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
			customer = cust.mProperties.selectedKey;
			/*
			 * Set Project - End
			 */
		}else if(selIndex==1) {
			//specialStock = "Q";
			
			/*
			 * Set Customer - Start
			 */
			var proj = sap.ui.getCore().byId("selectCustProj_Cost"); //scrap
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
		//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
			project = proj.mProperties.selectedKey;
			/*
			 * Set Customer - End
			 */
		} 
	}
	
	/*
	 * Set Movement Type - Start
	 */
	//var selActionType = sap.ui.getCore().byId("selActionType");
	//movType = selActionType.mProperties.selectedKey;
	movType = globalMob18Movetype;
	
	/*
	 * Set Movement Type - End
	 */
	
	/*
	 * Set From Storage Loc - Start
	 */
	
	if(globalMob18Movetype=="555"){
	var fromStorage = sap.ui.getCore().byId("idStorage");
	StorageLoc = fromStorage.mProperties.selectedKey;
	}
	else if(globalMob18Movetype=="221"){
		var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
		StorageLoc = fromStorage.mProperties.selectedKey;
	}
	else if(globalMob18Movetype=="201"){
		var fromStorage = sap.ui.getCore().byId("idStorage_cost");
		StorageLoc = fromStorage.mProperties.selectedKey;
	}
	/*
	 * Set From Storage Loc - End
	 */
	
	/*
	 * Set From To Loc - Start
	 */
//	var toStorage = sap.ui.getCore().byId("idToStorage");
//	toStoLoc = toStorage.mProperties.selectedKey;
	/*
	 * Set From To Loc - End
	 */
	
	
	/*
	 * Set Reason for Movement- Start
	 */
	var reason = sap.ui.getCore().byId("selectReason");
	reasonmvt = reason.mProperties.selectedKey;
	/*
	 * Set Reason for Movement - End
	 */
	
		var createReqData = {
			"Plant" : plantInput,
			"SplStck" : specialStock,
			"MovementType" : movType,
			"StorageLoc" : StorageLoc,
			//"ToSloc" : toStoLoc,
			"Customer" : customer,
			"WBSElement" : project,
			"ReasonMvt" : reasonmvt
			};
 
/*	var createReqData = {
			"Plant" : "GWNP",
			"SplStck" : "B",
			"MovementType" : movType,
			"OrderNo" : "",
			"StorageLoc" : "0088",
			//"ToSloc" : toStoLoc,
			"Customer" : customer,
			"WBSElement" : project,
			"ReasonMvt" : reasonmvt
		
			};*/
	
	
	
	
	
	 	var lineItems = [];
		lineItems.push({"Material" : objMaterial.Material.toString(),"StockType" : "" , "EntryUOM": (typeof objMaterial.Uom != 'undefined')?objMaterial.Uom.toString():"" , "EntryQuantity" : objMaterial.Quantity.toString(), "SplitValuated" : "", "Batch" : (typeof objMaterial.Batch != 'undefined')?objMaterial.Batch.toString():""});
		
	/*	lineItems.push({
			"Material" : "200003",
			"StockType" : "" , 
			"EntryUOM": "EA",
			"EntryQuantity" : "1",
			"SplitValuated" : "", 
			"Batch" : ""
				
		});*/
		
				
 		createReqData.NavItemStckIssue = lineItems;
 		
 		var serialLineItems = [];
 		
 		if(objMaterial.SerialManaged == true) {
 			for(var i=0;i<objMaterial.SerialLst.length;i++) {
 				//serialLineItems.push({"Material" : objMaterial.Material.toString() ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
 			
 				serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
 			
 			
 			
 			}
 		} else {
 			serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
 		}
 
 		createReqData.NavSerialStckIssue = serialLineItems;
 		
		return createReqData;
}
/*
 * This method is responsible for setting selected for last item
 */
function setSelectedIndexForMatTable_scrap() {
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	var index = 0;
	if(typeof oModel != 'undefined') {
		index = oModel.oData.modelData.length;
	}
	var matList = sap.ui.getCore().byId("materialListItem1-tableMat-" + (index-1));
	tabMaterialLst.setSelectedItem(matList, true);
}





function mob18ItemDialog(matNo) {
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

function mob18addSerial(serialNo) {
	var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
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
		Mob18addSerialToModel(aData1);
		sap.ui.getCore().byId("inputSerial_scrap").setValue("");
		
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
		 /*
			 * Add Serial to Model - Start
			 */
		 Mob18addSerialToModel(tabModel);
			/*
			 * Add Serial to Model - End
			 */
	}
	
	sap.ui.getCore().byId("inputSerial_scrap").setValue("");
}

/*
 * This method is responsible to validate each line item and set the alert icon
 */
function Mob18validateMaterial() {
	/*var materialRow = sap.ui.getCore().byId("Material-tableMat-0");
	materialRow.setIcon("sap-icon://alert");*/
	
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var tableModel = tabMaterialLst.getModel();
	var isError = false;
	
	if(typeof tableModel != 'undefined') {
			tabModelData = tableModel.oData.modelData;
			
			for(var i=0;i<tabModelData.length;i++) {
				
				
if((tabModelData[i].SerialManaged==false) && (tabModelData[i].BatchManaged==false)) {
					
					var errMsg = tabModelData[i].errMessage;
					
					if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) {
						//Skipping
					}else{
				
				//var serLst = tabModelData[i].SerialLst;
				var qty = tabModelData[i].Quantity;
				//alert(qty);
				if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) > 0) {
					var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setSrc("");
					var lblQty_non = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
					lblQty_non.setSrc("");
				}else {
					var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setSrc("sap-icon://edit");
					var lblQty_non = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
					//lblQty_non.setSrc("sap-icon://alert");
					
					isError = true;

				}
				continue;
			}
		}
	

//Serial Managed
	if(tabModelData[i].SerialManaged==true)	{
		var serLst = tabModelData[i].SerialLst;
var qty = tabModelData[i].Quantity;

if(isNaN(qty) || typeof serLst == 'undefined' || serLst.length < parseInt(qty) || serLst.length > parseInt(qty))  {
	var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
	var materialRow = sap.ui.getCore().byId(rowId);
	materialRow.setSrc("sap-icon://edit");
	isError = true;
} else {
	var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
	var materialRow = sap.ui.getCore().byId(rowId);
	materialRow.setSrc("");
}

var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");

if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
	//lblQty.setSrc("sap-icon://alert");
	isError = true;

}else {
	
	lblQty.setSrc("");
}
	}
	
	//Batch Managed
	
	if(tabModelData[i].BatchManaged==true){
		
		var qty = tabModelData[i].Quantity;
	var lblQty_batch = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");

	if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) > 0) {

	lblQty_batch.setSrc("");

	}else {
	//lblQty_batch.setSrc("sap-icon://alert");
	isError = true;


	}
		}
	
	


/*if( tabModelData[i].BatchManaged==true)
	{
	
	lblQty.setIcon("");
	
	}
else
	{
	lblQty.setIcon("sap-icon://alert");
	
	}

*/
		
		/*var lblQty = sap.ui.getCore().byId("lblQty");

		if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
			lblQty.setIcon("sap-icon://alert");
		}else {
			lblQty.setIcon("");
		}*/
		
		var errMsg = tabModelData[i].errMessage;
		
				//if(isNaN(qty) || typeof serLst == 'undefined' || serLst.length < parseInt(qty)) {
				/*
				if (qty == "" || qty == null ){
				var rowId = "Material-tableMat-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					//alert(materialRow);
					//materialRow.setIcon("sap-icon://edit");
					materialRow.setIcon("sap-icon://edit");
					isError = true;
				} else {
					var rowId = "Material-tableMat-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setIcon("");
				}*/
				
			
			//var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
			//var tableModel = tabMaterialLst.getModel();
			
			////////////////////////////////////////////////////////////
			var errMsg = tabModelData[i].errMessage;
		//	alert(errMsg);
			
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
			}else {
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
			}
			
			var docNum = tabModelData[i].docNumber;
			if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
				
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal1").setText(docNum);
				
				var rowId = "MaterialNoIcon_scrap-tabMaterialLst-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://sys-enter-2");
				materialRow.addStyleClass("text_green");
				
				sap.ui.getCore().byId("inputQty_Scrap").setEnabled(false);
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(false);
				sap.ui.getCore().byId("inputSerial_scrap").setEnabled(false);
			} else {
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
				
				sap.ui.getCore().byId("inputQty_Scrap").setEnabled(true);
				sap.ui.getCore().byId("inputbatch_Scrap").setEnabled(true);
				sap.ui.getCore().byId("inputSerial_scrap").setEnabled(true);
			}
			//////////////////////////////////////////////////////////////
			
		}
	}
	return isError;
	}


function Mob18addSerialToModel(arrSerial) {
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	
	for(var i=0;i<arrMatLst.length;i++) {
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
	//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
		var inputMatNoVal = sap.ui.getCore().byId("idMat").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("inputQty_Scrap").getValue();
		
		var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
		
		if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			/*
			 * Checking Qty Field and update it
			 */
			if(isNaN(inputQty) || inputQty.toString().trim().length == 0 || arrSerial.length > parseInt(inputQty) || (parseInt(inputQty)-arrSerial.length==1)) {
				sap.ui.getCore().byId("inputQty_Scrap").setValue(arrSerial.length);
				objMaterial.Quantity = arrSerial.length;
			}
			
			if(parseInt(inputQty) > arrSerial.length) {
				//lblQty.setSrc("sap-icon://alert");
			}else {
				lblQty.setSrc("");
			}
		}
	}
	
	var oModel2 = new sap.ui.model.json.JSONModel();
	oModel2.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel2);
	
	Mob18validateMaterial(); //Validate and set the status for Material List
	
}		


//////////////////phone version-End////////////////////////////////
function callReason(jsonReason) {
	var demo = sap.ui.getCore().byId("demoswitch");
	if (demo.getState() == true) {
		var oJSONReason = jsonReason;
		var selectReason = sap.ui.getCore().byId("selectReason");
		selectReason.setModel(oJSONReason);
	} else {
		
		//var txt = sap.ui.getCore().byId("inputOrderno");
		var val = globalMob18Movetype;
		
		
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB18:: Service: ReasonCodeList Start" ;

		var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/ReasonCodeList?MovementType='" +val+ "'&$format=json");
		if(url1 == "Fail")
		 {
		 return false;
		 }
		
		
		
		var oModel = new sap.ui.model.json.JSONModel();
		 
		 var aData = jQuery.ajax({   
		     url : url1,
		     
		     type: "GET",

	         //jsonpCallback : 'getJSON',

	         contentType : "application/json",

	         dataType : 'json',
	         
	         //data : "",

	         success : function(data, textStatus, jqXHR) {
	        	var jsonObj = data.d.results; // Namespace
	        	
	        	var jsonReason = {"MOB18Reason":jsonObj};
	        	
	        	var oJSONReason = new sap.ui.model.json.JSONModel(jsonReason);
	    		var selectReason = sap.ui.getCore().byId("selectReason");
	    		selectReason.setModel(oJSONReason);
	    		
	    		
	    		
	    		
	    		if( g_isDebug == true)
	    		{
	    		//Service End Time
	    		var logInfo1 = getTimeStamp() +"MOB18:: Service: ReasonCodeList Finish" ;
	    		//Log file Service Start and End Time
	    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	    		logFileUpdate(g_ServiceStartEndTime);
	    		}
	     		
	         },
	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
	        	 var a = textStatus;
	         }
		 
		 });
		 
	}
}