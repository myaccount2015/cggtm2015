sap.ui.controller("com.cg.gtm.view.Mob18ThreeSplitScrap", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18ThreeSplitScrap
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18ThreeSplitScrap
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18ThreeSplitScrap
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18ThreeSplitScrap
*/
//	onExit: function() {
//
//	}
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
		
		else{
			sap.m.MessageBox.show(
		    		   "Please Provide the Serial Number",
						sap.m.MessageBox.Icon.WARNING,
						"Enter Serial Number" )
			
		}
	},
	Mo23nav : function(oEvent){
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

function Mob18post(objMaterial, selectedIndex) {
	
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
			var msg = "Posting Successful. " + "Material Document Number is " + oResponse.MatDocNo;
			//sap.m.MessageToast.show(msg);	
			sap.m.MessageBox.show(
		    		   
					msg,
						sap.m.MessageBox.Icon.SUCCESS,
						"SUCCESS" );
			
	
            
		
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
	var WBSElement="";
	var costCenter= "";
	/*
	 * Set Plant Code - Start
	 */
	
	//Default Plant:
  	var defaultPlant = "";
  	defaultPlant = window.localStorage.getItem("defPlantCode");
  	
  	
	if(typeof g_SelectedPlant != 'undefined') {
		plantInput = g_SelectedPlant.description;
	} else {
		plantInput = defaultPlant; //defaultPlantCode & defaultPlantName
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
	if(globalMob18Movetype=="555"){
	//	var optSpecialStock = sap.ui.getCore().byId("idradio_scrap");
		
	//	var selIndex = optSpecialStock.oItemNavigation.iSelectedIndex;
		

		//Mobile Radio Group
		//Q- Project Stock
		//B- Customer stock
		var selIndex = "";
		debugger;
		
		if( sap.ui.getCore().byId("optQI").getSelected() == true )
		{
		
		selIndex = 1;
		}
	
	else if( sap.ui.getCore().byId("optBlocked").getSelected() == true )
		{
		selIndex = 2;
		}
	
	
	
	if(selIndex==2) {
	specialStock = "B";
		
		/*
		 * Set Project - Start
		 */
	//	var cust = sap.ui.getCore().byId("selectCustProj2");       //Scrap
		//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
		//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
	//	customer = cust.mProperties.selectedKey;
		if(typeof g_SelectedCust18 != 'undefined') {
			customer = g_SelectedCust18.description;
		} else {
			customer = " "; //defaultPlantCode & defaultPlantName
		}
		/*
		 * Set Project - End
		 */
	}else if(selIndex==1) {
		specialStock = "Q";
		
		/*
		 * Set Customer - Start
		 */
		//var proj = sap.ui.getCore().byId("selectCustProj1"); //scrap
		//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
	//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
		//project = proj.mProperties.selectedKey;
		 if(typeof g_SelectedProj18 != 'undefined') {
			 project = g_SelectedProj18.description;
			} else {
				project = " "; //defaultPlantCode & defaultPlantName
			}
		/*
		 * Set Customer - End
		 */
	} 
		/*
		 * Set Special Stock - End
		 */
	}

	else if(globalMob18Movetype=="221"){
	//	var optSpecialStock = sap.ui.getCore().byId("idradio_wbs");
		
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
			specialStock = "B";
			
			/*
			 * Set Project - Start
			 */
			//var cust = sap.ui.getCore().byId("selectCustProj_WBS2");       //Scrap
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
			//customer = cust.mProperties.selectedKey;
			if(typeof g_SelectedCust18 != 'undefined') {
				customer = g_SelectedCust18.description;
			} else {
				customer = " "; //defaultPlantCode & defaultPlantName
			}
			/*
			 * Set Project - End
			 */
		}else if(selIndex==1) {
			specialStock = "Q";
			
			/*
			 * Set Customer - Start
			 */
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS"); //scrap
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
		//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
			//project = proj.mProperties.selectedKey;
			 if(typeof g_SelectedProj18 != 'undefined') {
				 project = g_SelectedProj18.description;
				} else {
					project = " "; //defaultPlantCode & defaultPlantName
				}
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
		
		else if( sap.ui.getCore().byId("idradio-cost2-Mob18-2").getSelected() == true )
			{
			selIndex = 2;
			}
		
		
		
		if(selIndex==2) {
			specialStock = "B";
			
			/*
			 * Set Project - Start
			 */
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2");       //Scrap
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost");   //cost center
			//var proj = sap.ui.getCore().byId("selectCustProj_WBS");   //WBS
			//customer = cust.mProperties.selectedKey;
			if(typeof g_SelectedCust18 != 'undefined') {
				customer = g_SelectedCust18.description;
			} else {
				customer = " "; //defaultPlantCode & defaultPlantName
			}
			/*
			 * Set Project - End
			 */
		}else if(selIndex==1) {
			specialStock = "Q";
			
			/*
			 * Set Customer - Start
			 */
			//var proj = sap.ui.getCore().byId("selectCustProj_Cost"); //scrap
			//var cust = sap.ui.getCore().byId("selectCustProj_Cost2"); //cost
		//	var cust = sap.ui.getCore().byId("selectCustProj_WBS2");  //WBS
			//project = proj.mProperties.selectedKey;
			 if(typeof g_SelectedProj18 != 'undefined') {
				 project = g_SelectedProj18.description;
				} else {
					project = " "; //defaultPlantCode & defaultPlantName
				}
			/*
			 * Set Customer - End
			 */
		} 
	}
	
	
	
	
	
	
	
	
	if(globalMob18Movetype=="555"){
		/*
		 * Set From Storage Loc - Start
		 */
	var fromStorage = sap.ui.getCore().byId("idStorage");
	StorageLoc = fromStorage.mProperties.selectedKey;
	/*
	 * Set From Storage Loc - End
	 */
	
	/*
	 * Set Movement Type - start
	 */
	
	//movType = globalMob18Movetype; //Hardcoded value
	var selActionType = sap.ui.getCore().byId("MvtType_scrap");
	movType = selActionType.mProperties.selectedKey;
	
	/*
	 * Set Movement Type - End
	 */
	
	/*
	 * Set Movement Type - End
	 */
	
	/*
	 * Set Reason for Movement- Start
	 */
	var reason = sap.ui.getCore().byId("ResType_scrap");
	reasonmvt = reason.mProperties.selectedKey;
	/*
	 * Set Reason for Movement - End
	 */
	}
	else if(globalMob18Movetype=="221"){
		/*
		 * Set From Storage Loc - Start
		 */
		var fromStorage = sap.ui.getCore().byId("idStorage_wbs");
		StorageLoc = fromStorage.mProperties.selectedKey;
 WBSElement= sap.ui.getCore().byId("inputWBSno").getValue();
		/*
		 * Set From Storage Loc - end
		 */
		
		/*
		 * Set Movement Type - Start
		 */
		
		//movType = globalMob18Movetype;  //Hardcoded value
		
		var selActionType = sap.ui.getCore().byId("MvtType_wbs");
		movType = selActionType.mProperties.selectedKey;
		/*
		 * Set Movement Type - End
		 */
		
		/*
		 * Set Movement Type - End
		 */
		
		/*
		 * Set Reason for Movement- Start
		 */
		var reason = sap.ui.getCore().byId("ResType_wbs");
		reasonmvt = reason.mProperties.selectedKey;
		/*
		 * Set Reason for Movement - End
		 */
		
	}
	else if(globalMob18Movetype=="201"){
		/*
		 * Set From Storage Loc - Start
		 */
		var fromStorage = sap.ui.getCore().byId("idStorage_cost");
		StorageLoc = fromStorage.mProperties.selectedKey;
		costCenter= sap.ui.getCore().byId("inputCostno").getValue().trim();
		/*
		 * Set From Storage Loc - End
		 */
		
		/*
		 * Set Movement Type - Start
		 */
		
		//movType = globalMob18Movetype; //Hardcoded value
		var selActionType = sap.ui.getCore().byId("MvtType_cost");
		movType = selActionType.mProperties.selectedKey;
		
		/*
		 * Set Movement Type - End
		 */
		
		/*
		 * Set Reason for Movement- Start
		 */
		var reason = sap.ui.getCore().byId("ResType_cost");
		reasonmvt = reason.mProperties.selectedKey;
		/*
		 * Set Reason for Movement - End
		 */
		
		
	}
	
	
		var createReqData = {
			//"Plant" : defaultPlant,
				"Plant" : plantInput,
			"SplStck" : specialStock,
			"MovementType" : movType,
			"StorageLoc" : StorageLoc,
			"Customer" : customer,
			"WBSElement" : WBSElement,
			"ReasonMvt" : reasonmvt,
			"Costcenter": costCenter,
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
	
	
	
		
		var batch = sap.ui.getCore().byId("inputbatch_Scrap").getValue();
		var SplitValuated= "";
		
		
		if(objMaterial.BatchManaged=="Yes"&& objMaterial.Splitvaluated=="Yes"){
			 SplitValuated= batch
			 
		 }
		else if(objMaterial.BatchManaged=="No"&& objMaterial.Splitvaluated=="Yes"){
			 SplitValuated= sap.ui.getCore().byId("inputbatch_order").getValue();
			 batch="";
			
		}
	
	 	/*var lineItems = [];
		lineItems.push({"Material" : objMaterial.Material,
			"StockType" : "" ,
			"EntryUOM": (typeof objMaterial.Uom != 'undefined')?objMaterial.Uom:"" ,
			"EntryQuantity" : objMaterial.Quantity.toString(),
			"SplitValuated" : SplitValuated, 
			"Batch" : batch,
			"ReservationItem":objMaterial.ReservationItem,
			"ReservationNo":objMaterial.ReservationNo,
					});*/
		 	var lineItems = [];
			lineItems.push({"Material" : objMaterial.Material.toString(),
				"StockType" : "" , 
				"EntryUOM": (typeof objMaterial.Uom != 'undefined')?objMaterial.Uom.toString():"" ,
						"EntryQuantity" : objMaterial.Quantity.toString(),
						"SplitValuated" : SplitValuated,
						"Batch" : objMaterial.Batch,
						"ReservationItem":objMaterial.ReservationItem,
						"ReservationNo":objMaterial.ReservationNo,
						
			
			});
	
	
				
 		createReqData.NavItemStckIssue = lineItems;
 		
 		var serialLineItems = [];
 		
 		if(objMaterial.SerialManaged == true) {
 			for(var i=0;i<objMaterial.SerialLst.length;i++) {
 				//serialLineItems.push({"Material" : objMaterial.Material.toString() ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
 			
 				//serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
 			
 				serialLineItems.push({"Material" : objMaterial.Material.toString() ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
 			
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


/*
* This method will set the error message in Data Model
*/
function setSuccessErrorResponse(objMaterial, docNo, errMsg) {
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.modelData;
	setSelectedIndexForMatTable_scrap();
	if(docNo == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material) /*&& (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)*/) {
				arrMatLst[i].errMessage = errMsg.toString();
			}
		}
	}else  if(errMsg == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material)/* && (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)*/) {
				arrMatLst[i].docNumber = docNo.toString();
			}
		}
	}
	
	oModel.setData({modelData: arrMatLst});
	tabMaterialLst.setModel(oModel);
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
				
				var rowId = "MaterialNoIcon_scrap-tableMat-" + i;
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