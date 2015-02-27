sap.ui.controller("com.cg.gtm.view.Mob18OrderThreeSplitScreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18OrderThreeSplitScreen
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18OrderThreeSplitScreen
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18OrderThreeSplitScreen
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18OrderThreeSplitScreen
*/
//	onExit: function() {
//
//	}
	scan_order : function(oEvent){
		var valSerial = sap.ui.getCore().byId("inputSerial_order");
				
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
							  mob18addSerial_order(valSerial.getValue()); //Adding Serial
							  
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
			finish: function(oEvent) {
			    var isError = Mob18validateMaterial_order(); //Validating the materials added and setting the status
					
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
					 
					
					//openSplashScreen();//splash screen opened
					
					var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
					var tableModel = tabMaterialLst.getModel();
					//var indexofTable = sap.ui.getCore().byId("Mob18-selectedindextable").getText();
					var indexofTable=sap.ui.getCore().byId("idtable_Order").indexOfItem(sap.ui.getCore().byId("idtable_Order").getSelectedItem())
					if(typeof tableModel != 'undefined') {
							tabModelData = tableModel.oData.modelData;
						tabModelData = tableModel.oData.results;
						
						Mob18post_order();
						
					//	var docNum = tabModelData[indexofTable].docNumber;
						/*if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
							//Skip the success item
						}else {
							 //Posting Stock Transfer
						}*/
						
						
						
						
							/*for(var i=0;i<tabModelData.length;i++) {
								var docNum = tabModelData[i].docNumber;
								if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
									//Skip the success item
								}else {
									Mob18post_order(tabModelData[i], i); //Posting Stock Transfer
								}
								
							}*/
						}
					
					//closeSplashScreen();//splash screen closed
					
				}

		
			
});
function mob18addSerial_order(serialNo) {
	var tabSerialLst = sap.ui.getCore().byId("tblSerial_Items");
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
		Mob18addSerialToModel_order(aData1);
		sap.ui.getCore().byId("inputSerial_order").setValue("");
		
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
		 
		 
	      sap.ui.getCore().byId("inputQtyno").setValue(tabModel.length);
		 
		 
		 /*
			 * Add Serial to Model - Start
			 */
		 Mob18addSerialToModel_order(tabModel);
			/*
			 * Add Serial to Model - End
			 */
	}
	
	sap.ui.getCore().byId("inputSerial_order").setValue("");
}

function Mob18addSerialToModel_order(arrSerial) {
	var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.results;
	
	for(var i=0;i<arrMatLst.length;i++) {
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
	//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
		var inputMatNoVal = sap.ui.getCore().byId("idMaterial").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("inputQtyno").getValue();
		
		var lblQty = sap.ui.getCore().byId("idbatch");
		
		if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
			
			
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			
			sap.ui.getCore().byId("inputQtyno").setValue(arrSerial.length);
			objMaterial.Quantity = arrSerial.length;
			
			
			 
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
	
	Mob18validateMaterial_order(); //Validate and set the status for Material List
	
}		



function Mob18post_order() {
	var demo = sap.ui.getCore().byId("demoswitch"); 
	if (demo.getState() == true) {
		
		sap.m.MessageBox.show(
	    		  "Item has been Posted Successfully",
					sap.m.MessageBox.Icon.SUCCESS,
					"Sucess ");
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
	 
	 var createReqData = Mob18PostReqData_order(); //Constructing Post Req Data
	debugger;
	oModel.create(readRequestURL, createReqData, null, 
			function(oResponse) {
			
//			setSuccessErrorResponse_order(objMaterial, docNo, null,null); //Setting Success Message in the model (objMaterial, docNo, errMsg)
			//SerialDetail_order(select);
		//	var docNo = oResponse.MatDocNo;
			var msg = "Posting Successful. " + "Material Document Number is " + oResponse.MatDocNo;
			//jQuery.sap.require("sap.m.MessageToast");
			//sap.m.MessageToast.show(msg);	
			sap.m.MessageBox.show(
		    		   
					msg,
						sap.m.MessageBox.Icon.SUCCESS,
						"SUCCESS" );
			var app = sap.ui.getCore().byId("myApp"); 
            app.to("idGridSubMenuIMWM");
            
            
            
            
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
					setSuccessErrorResponse_order(objMaterial, null, messageFromBackend,selectedIndex); //Setting Error Message in the model (objMaterial, docNo, errMsg)
					//SerialDetail_order(select)
					sap.m.MessageBox.show(
				    		   messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error Material No: " + objMaterial.Material);
				}catch(e)
					{sap.m.MessageBox.show(
							dataCopy.innererror.errordetails[0].message+ " " +" "+" ",
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


function Mob18PostReqData_order() {
	
	
	
	var plantInput = "";
	var movType = "";
	var order = "";
	//var reasonmvt = "";
	var storage = "";
	  var txt = sap.ui.getCore().byId("inputOrderno");
      var val = txt.getValue().trim();
      var get = pad( val, 12, '0');
      order = get;
    //Default Plant:
    	var defaultPlant = "";
    	defaultPlant = window.localStorage.getItem("defPlantCode");
    	
    	if(typeof g_SelectedPlant != 'undefined') {
		plantInput = g_SelectedPlant.description;
    	} else {
    		plantInput = defaultPlant; //defaultPlantCode & defaultPlantName
    	}
	
    	if(typeof plantInput != 'undefined' && plantInput.trim().length==0) {
		plantInput = g_inputPlantCode;
    	} else if(plantInput == "") {
		plantInput = g_inputPlantCode;
    	}
	
	
  	
	var selActionType = sap.ui.getCore().byId("MvtType");
	movType = selActionType.mProperties.selectedKey;
	var Storageloc = sap.ui.getCore().byId("idStorage1");
	storage = Storageloc.mProperties.selectedKey;
	
	/*var reason = sap.ui.getCore().byId("ResType");
	reasonmvt = reason.mProperties.selectedKey;*/
	/*
	 * Set Reason for Movement - End
	 */
	
		var createReqData = {
			"Plant" : plantInput,
			//"SplStck" : specialStock,
			"OrderNo" : order,
			"MovementType" : movType,
			"StorageLoc" : storage,
			//"ToSloc" : toStoLoc,
			//"Customer" : customer,
			//"WBSElement" : project,
			//"ReasonMvt" : reasonmvt
			};
debugger;

	var lineItems = [];
	var serialLineItems = [];
	var selectedItems=  sap.ui.getCore().byId("idtable_Order").getModel().oData.results;
	for(i=0;i<selectedItems.length;i++){
		
		if(selectedItems[i].selected== true){
			
		var batch = selectedItems[i].Batch;
		
		if(selectedItems[i].inputBatch!="")
			var batch = selectedItems[i].inputBatch;
		
		
		var SplitValuated= "";
		
		

	
	 
		lineItems.push({"Material" : selectedItems[i].Material,
			"StockType" : "" ,
			"EntryUOM": (typeof selectedItems[i].Uom != 'undefined')?selectedItems[i].Uom:"" ,
			"EntryQuantity" : selectedItems[i].inputQty.toString(),
			"SplitValuated" : SplitValuated, 
			"Batch" : batch,
			"ReservationItem":selectedItems[i].ReservationItem,
			"ReservationNo":selectedItems[i].ReservationNo,
					});
		
		
		
		if(selectedItems[i].SerialManaged == true) {
			for(var i=0;i<selectedItems[i].SerialLst.length;i++) {
				serialLineItems.push({"Material" : selectedItems[i].Material ,"SerialNo" : selectedItems[i].SerialLst[i].Serial.toString()});
			
				//serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
			
			
			
			}
		} else {
			serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
		}
	}
	}
		
		
				
		createReqData.NavItemStckIssue = lineItems;
		
		
		
	

		createReqData.NavSerialStckIssue = serialLineItems;
		
		return createReqData;
}


/*
* This method will set the error message in Data Model
*/
function setSuccessErrorResponse_order(objMaterial, docNo, errMsg,selectedIndex) {
	var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.results;
	var finalErrMsg = "";
	debugger;
	if(docNo == null) {
		for(var i=0;i<arrMatLst.length;i++)
		{
			//if((objMaterial.Material.trim()==arrMatLst[i].Material)
					/*&& (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)) {*/
				//arrMatLst[i].errMessage = errMsg.toString();
						
						
					if( selectedIndex == i)
						{
					//	finalErrMsg = finalErrMsg.concat(arrMatLst[i].errMessage);
						arrMatLst[i].errMessage = errMsg.toString();
						}
				
			}
		}
	/*else  if(errMsg == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material) && (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)) {
				arrMatLst[i].docNumber = docNo.toString();
			}
		}
	}*/
	
	else  if(errMsg == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material==arrMatLst[i].Material) && (objMaterial.Customer==arrMatLst[i].Customer) && (objMaterial.MaterialDesc==arrMatLst[i].MaterialDesc)) {
				arrMatLst[i].docNumber = docNo.toString();
			}
		}
	}
	
	
	//var errMsg = arrMatLst[i].errMessage;
	//alert(finalErrMsg);
	
	oModel.setData({results: arrMatLst});
	tabMaterialLst.setModel(oModel);
	
	
	SerialDetail_order(selectedIndex);
	
	Mob18validateMaterial_order();
	
	
	
	
	
	
	
	
}


function mob18ItemDialog_order(matNo) {
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

function Mob18validateMaterial_order() {
	/*var materialRow = sap.ui.getCore().byId("Material-tableMat-0");
	materialRow.setIcon("sap-icon://alert");*/
	
	var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
	var tableModel = tabMaterialLst.getModel();
	var isError = false;
	
	if(typeof tableModel != 'undefined') {
			tabModelData = tableModel.oData.results;
			var data=sap.ui.getCore().byId("idtable_Order").getSelectedItems();
			var arr= [];
			for(i=0;i<data.length;i++){
				var index=data[i].sId.split("-")[2]
				arr.push(parseInt(index))

				}
			for(var i=0;i<arr.length;i++) {
				var serLst = tabModelData[arr[i]].SerialLst;
				var qty = tabModelData[arr[i]].inputQty;
				
				if (qty == "" || qty == null ){
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						//materialRow.setSrc("sap-icon://edit");
						isError = true;
					} else {
						var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						//materialRow.setSrc("");
					}
				
				if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) > 0) {
					
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
				//	materialRow.setSrc("");
				}else {
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
				//	materialRow.setSrc("sap-icon://edit");
					isError = true;

				}

				if(tabModelData[i].SerialManaged==true)	{
					var serLst = tabModelData[i].SerialLst;
			var qty = tabModelData[i].Quantity;

			if(isNaN(qty) || typeof serLst == 'undefined' || serLst.length < parseInt(qty) || serLst.length > parseInt(qty))  {
				var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				//materialRow.setSrc("sap-icon://edit");
				isError = true;
			} else {
				var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				//materialRow.setSrc("");
			}

				

				if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
					//lblQty.setSrc("sap-icon://alert");
					isError = true;
				}else {
					lblQty.setSrc("");
				}
				}
			var errMsg = tabModelData[arr[i]].errMessage;
			//alert(errMsg);
			
			if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
				
				sap.ui.getCore().byId("lblErr2").setVisible(true);
				sap.ui.getCore().byId("lblErrVal2").setVisible(true);
				sap.ui.getCore().byId("lblErrVal2").setText(errMsg);
				
				
				
				var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://alert");
				materialRow.addStyleClass("text_er");
			}else {
				sap.ui.getCore().byId("lblErr2").setVisible(false);
				sap.ui.getCore().byId("lblErrVal2").setVisible(false);
			}
			
			var docNum = tabModelData[arr[i]].docNumber;
			if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr2").setVisible(false);
				sap.ui.getCore().byId("lblErrVal2").setVisible(false);
				
				sap.ui.getCore().byId("lblMatDocNo2").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal2").setVisible(true);
				sap.ui.getCore().byId("lblMatDocVal2").setText(docNum);
				
				var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
				materialRow.setSrc("sap-icon://sys-enter-2");
				materialRow.addStyleClass("text_green");
				
				//sap.ui.getCore().byId("inputQtyno").setEnabled(false);
				//sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
				//sap.ui.getCore().byId("inputSerial_order").setEnabled(false);
			} else {
				sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
				
				//sap.ui.getCore().byId("inputQtyno").setEnabled(true);
				//sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
				//sap.ui.getCore().byId("inputSerial_order").setEnabled(true);
			}
			//////////////////////////////////////////////////////////////
			
		}
	}
	return isError;
	}



	
	
