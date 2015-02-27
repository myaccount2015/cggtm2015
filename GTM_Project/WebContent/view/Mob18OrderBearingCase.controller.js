	sap.ui.controller("com.cg.gtm.view.Mob18OrderBearingCase", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18OrderBearingCase
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18OrderBearingCase
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18OrderBearingCase
*/
	onAfterRendering: function() {
	/*	var jsonReason = null;
		var demo = sap.ui.getCore().byId("demoswitch");  
		
	if (demo.getState() == true) {
			jsonReason = mob18Reason(jsonReason); //Mocking JSON Data
			
		
			
		}else {
			jsonReason = mob18Reason(jsonReason);  //TODO : Integrate Service
			// mob18Reason();
			
		}*/
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18OrderBearingCase
*/
//	onExit: function() {
//
//	}
	showSerialLst_order : function(oEvent){
		this.popover = sap.ui.getCore().byId("popoverMOB18Serial1");
		this.popover.openBy(oEvent.getSource());
	},
	ChangeQuantity_order : function(oEvent){
		

		  field_numeric_validation(sap.ui.getCore().byId("inputQtyno"));//go to string utility 
		var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		//alert(txtValue);
		var arrMatLst = oModel.oData.results;
		
		for(var i=0;i<arrMatLst.length;i++) {
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
			var inputMatNoVal = sap.ui.getCore().byId("idMaterial").getText();
			//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((inputMatNoVal.trim()==arrMatLst[i].Material) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
				var objMaterial = arrMatLst[i];
				//objMaterial.Quantity = txtValue;
				objMaterial.inputQty = txtValue;
			//	var lblQty = sap.ui.getCore().byId("idqtylb");
				var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Order");
				lblQty.setSrc("");
				var serialCount = 0;
				if(objMaterial.Serialized=="Yes"){
				if(typeof objMaterial.SerialLst != 'undefined') {
					serialCount = objMaterial.SerialLst.length;
				}
				
				if(!isNaN(txtValue)) {
					if(serialCount < parseInt(txtValue)) {
					//	lblQty.setSrc("sap-icon://alert");
					}else {
						lblQty.setSrc("");
					}
				}
			}
			}
		}
		//data=tabMaterialLst.getSelectedItem().sId
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({results: arrMatLst});
		tabMaterialLst.setModel(oModel2);
			//tabMaterialLst.setSelectedItem(sap.ui.getCore().byId(data));
		Mob18validateMaterial_order();


		
	},
	Mob18deleteSerial_order : function(oEvent){
		
	
		var errExist = false;
			
			var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
			var oModel = tabMaterialLst.getModel();
			var arrMatLst = oModel.oData.results;
			
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
			var inputMatNoVal = sap.ui.getCore().byId("idMaterial").getText();
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
		
		var tabSerialLst = sap.ui.getCore().byId("tblSerial_Items");
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
		
		Mob18addSerialToModel_order(arrMatLst);
		sap.ui.getCore().byId("inputSerial_order").setValue(" ");
	},

//Scan Order
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
			
			//Finish Button
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
					
					if(typeof tableModel != 'undefined') {
							//tabModelData = tableModel.oData.modelData;
						tabModelData = tableModel.oData.results;
						
							for(var i=0;i<tabModelData.length;i++) {
								var docNum = tabModelData[i].docNumber;
								if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
									//Skip the success item
								}else {
									Mob18post_order(tabModelData[i], i); //Posting Stock Transfer
								}
								
							}
						}
					
					//closeSplashScreen();//splash screen closed
					
				}

		
			


});

////////////////////////Reason for Movement////////////////////////////////////
function callReason_order(jsonReason) {
	var demo = sap.ui.getCore().byId("demoswitch");
	if (demo.getState() == true) {
		var oJSONReason = jsonReason;
		var selectReason = sap.ui.getCore().byId("selectReason1");
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
	    		var selectReason = sap.ui.getCore().byId("selectReason1");
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



function Mob18post_order(objMaterial, selectedIndex) {
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
	 
	 var createReqData = Mob18PostReqData_order(objMaterial); //Constructing Post Req Data
	
	oModel.create(readRequestURL, createReqData, null, 
			function(oResponse) {
			
			var docNo = oResponse.MatDocNo;
			setSuccessErrorResponse_order(objMaterial, docNo, null); //Setting Success Message in the model (objMaterial, docNo, errMsg)
			//SerialDetail_order(select);
			
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
					setSuccessErrorResponse_order(objMaterial, null, messageFromBackend); //Setting Error Message in the model (objMaterial, docNo, errMsg)
					//SerialDetail_order(select)
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


function Mob18PostReqData_order(objMaterial) {
	var plantInput = "";
	
	//var specialStock = "";
	
	var movType = "";
	
	var order = "";
	
	//var fromStoLoc = "";
	
	//var toStoLoc = "";
	
	//var project = "";
	
	//var customer = "";
	
	var reasonmvt = "";
	
	var storage = "";
	
	//var fromStoLoc = "";
	
	
	/*
	 * get Order No
	 */
	  var txt = sap.ui.getCore().byId("inputOrderno");
      var val = txt.getValue().trim();
      var get = pad( val, 12, '0');
      order = get;
      
	/*
	 * 
	 */
	
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
	 * Set Movement Type - Start
	 */
	//var selActionType = sap.ui.getCore().byId("selActionType");
	//movType = selActionType.mProperties.selectedKey;
	movType = globalMob18Movetype;
	
	/*
	 * Set Movement Type - End
	 */
	
	/*
	 * Set Storage Location - start
	 * 
	 */
	var Storageloc = sap.ui.getCore().byId("idStorage1");
	storage = Storageloc.mProperties.selectedKey;
	/*
	 * Set Storage Location - End
	 * 
	 */
	
	/*
	 * Set Reason for Movement- Start
	 */
	var reason = sap.ui.getCore().byId("selectReason1");
	reasonmvt = reason.mProperties.selectedKey;
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
			"ReasonMvt" : reasonmvt
			};

	
	 	var lineItems = [];
		lineItems.push({"Material" : objMaterial.Material,"StockType" : "" , "EntryUOM": (typeof objMaterial.Uom != 'undefined')?objMaterial.Uom:"" , "EntryQuantity" : objMaterial.Quantity.toString(), "SplitValuated" : "", "Batch" : (typeof objMaterial.Batch != 'undefined')?objMaterial.Batch:""});
		
		/*lineItems.push({
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
				serialLineItems.push({"Material" : objMaterial.Material ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
			
				//serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
			
			
			
			}
		} else {
			serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
		}

		createReqData.NavSerialStckIssue = serialLineItems;
		
		return createReqData;
}


/*
* This method will set the error message in Data Model
*/
function setSuccessErrorResponse_order(objMaterial, docNo, errMsg) {
	var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.results;
	var finalErrMsg = "";
	if(docNo == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material)
					/*&& (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)*/) {
				//arrMatLst[i].errMessage = errMsg.toString();
				finalErrMsg = finalErrMsg.concat(arrMatLst[i].errMessage);
			}
		}
	}else  if(errMsg == null) {
		for(var i=0;i<arrMatLst.length;i++) {
			if((objMaterial.Material.trim()==arrMatLst[i].Material)/* && (objMaterial.Customer.trim()==arrMatLst[i].Customer) && (objMaterial.Description.trim()==arrMatLst[i].Description)*/) {
				arrMatLst[i].docNumber = docNo.toString();
				finalErrMsg = finalErrMsg.concat(arrMatLst[i].errMessage);
			}
		}
	}
	//var errMsg = arrMatLst[i].errMessage;
	//alert(finalErrMsg);
	sap.ui.getCore().byId("lblErr2").setVisible(true);
	sap.ui.getCore().byId("lblErrVal2").setVisible(true);
	sap.ui.getCore().byId("lblErrVal2").setText(errMsg);
	oModel.setData({results: arrMatLst});
	tabMaterialLst.setModel(oModel);
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
			
			for(var i=0;i<tabModelData.length;i++) {
				var serLst = tabModelData[i].SerialLst;
				var qty = tabModelData[i].Quantity;
				
				if (qty == "" || qty == null ){
					var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("sap-icon://edit");
						isError = true;
					} else {
						var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
						var materialRow = sap.ui.getCore().byId(rowId);
						materialRow.setSrc("");
					}
				
/*				
if((tabModelData[i].SerialManaged==false) && (tabModelData[i].BatchManaged==false)) {
					
					var errMsg = tabModelData[i].errMessage;
					
					if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) {
						//Skipping
					}else{
				
				//var serLst = tabModelData[i].SerialLst;
				var qty = tabModelData[i].Quantity;
				//alert(qty);
				if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) > 0) {
					var rowId = "Material_order1-idtable_Order-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setIcon("");
				}else {
					var rowId = "Material_order1-idtable_Order-" + i;
					var materialRow = sap.ui.getCore().byId(rowId);
					materialRow.setIcon("sap-icon://edit");
				}
				continue;
			}
		}
	
	
var serLst = tabModelData[i].SerialLst;
var qty = tabModelData[i].Quantity;

if(isNaN(qty) || typeof serLst == 'undefined' || serLst.length < parseInt(qty)) {
	var rowId = "Material_order1-idtable_Order-" + i;
	var materialRow = sap.ui.getCore().byId(rowId);
	materialRow.setIcon("sap-icon://edit");
	isError = true;
} else {
	var rowId = "Material_order1-idtable_Order-" + i;
	var materialRow = sap.ui.getCore().byId(rowId);
	materialRow.setIcon("");
}

var lblQty = sap.ui.getCore().byId("idqtylb");

if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
	lblQty.setIcon("sap-icon://alert");
}else {
	lblQty.setIcon("");
}*/
				/*var lblQty = sap.ui.getCore().byId("lblQty");

				if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
					lblQty.setIcon("sap-icon://alert");
				}else {
					lblQty.setIcon("");
				}*/
				
				
			//var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
			//var tableModel = tabMaterialLst.getModel();
			
			////////////////////////////////////////////////////////////
				
				var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Order");

				if(!isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length) {
					//lblQty.setSrc("sap-icon://alert");
				}else {
					lblQty.setSrc("");
				}
			var errMsg = tabModelData[i].errMessage;
			//alert(errMsg);
			
			if(typeof errMsg != 'undefined' && errMsg.toString().trim().length>0) { //Check For Error Message
				sap.ui.getCore().byId("lblErr2").setVisible(true);
				sap.ui.getCore().byId("lblErrVal2").setVisible(true);
				sap.ui.getCore().byId("lblErrVal2").setText(errMsg);
				
				sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
				
				var rowId = "MaterialNoIcon_order-idtable_Order-" + i;
				var materialRow = sap.ui.getCore().byId(rowId);
				
			//	materialRow.setIcon("sap-icon://alert");
			//	materialRow.addStyleClass("text_er");
			}else {
				sap.ui.getCore().byId("lblErr2").setVisible(false);
				sap.ui.getCore().byId("lblErrVal2").setVisible(false);
			}
			
			var docNum = tabModelData[i].docNumber;
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
				
				sap.ui.getCore().byId("inputQtyno").setEnabled(false);
				sap.ui.getCore().byId("inputbatch_order").setEnabled(false);
				sap.ui.getCore().byId("inputSerial_order").setEnabled(false);
			} else {
				sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
				
				sap.ui.getCore().byId("inputQtyno").setEnabled(true);
				sap.ui.getCore().byId("inputbatch_order").setEnabled(true);
				sap.ui.getCore().byId("inputSerial_order").setEnabled(true);
			}
			//////////////////////////////////////////////////////////////
			
		}
	}
	return isError;
	}