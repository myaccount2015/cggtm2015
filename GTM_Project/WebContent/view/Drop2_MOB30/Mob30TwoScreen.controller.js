sap.ui.controller("com.cg.gtm.view.Drop2_MOB30.Mob30TwoScreen", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30TwoScreen
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob30TwoScreen
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob30TwoScreen
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob30TwoScreen
*/
//	onExit: function() {
//
//	}
/*post : function(objMaterial){
	sap.ui.getCore().byId("Mob30-popWin1").close();
	
	
	
	 var isError = Mob30Validate(); //Validating the serial no
		
		var errMsg = "Please Complete all Editing Material before Posting Bin to Bin";
		
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
		
	openSplashScreen();
	
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	 
	oModel.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});
	
	 var readRequestURL = "/BinSet";
	 
	 //Get Values To Post
	 
	 
		 * Set Plant Code - Start
		 
	
		if(typeof g_SelectedPlant != 'undefined') {
			plantInput = g_SelectedPlant.description;
		} else {
			plantInput = defaultPlantCode; //defaultPlantCode & defaultPlantName
		}
		//Default Plant:
	  	var defaultPlant = "";
	  	defaultPlant = window.localStorage.getItem("defPlantCode");
		
		 * Set Plant Code - End
		 
		
		
		 * Set Storage Type - Start
		 
		var type = sap.ui.getCore().byId("idStorageType");
		Storagetype = type.mProperties.selectedKey;

		
		 * Set Storage Type - End
		 
		
		
		 * Set Storage Bin - Start
		 
		var bin = sap.ui.getCore().byId("idStoragebin");
		Storagebin = type.mProperties.selectedKey;

		
		 * Set Storage Bin - End
		 
		
		
		 * Set Warehouse - Start
		 
		var warehouse = sap.ui.getCore().byId("idwarehouse");
		warehouse.getText();
		
		   //Default WareHouse:
	  	var defaultWareHouse = "";
	  	defaultWareHouse = window.localStorage.getItem("defWHCode");

		
		 * Set Warehouse - End
		 
		
		
		
		
		 * Set Material - Start
		 
		var matno = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();

		
		 * Set Material - End
		 
		
		
		 * Set Destination Bin - Start
		 
		var destbin = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").getValue();

		
		 * Set Destination Bin - End
		 
		
		
		 * Set Available Stock - Start
		 
		var Quantity = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();

		
		 * Set Available Stock - End
		 
		
		
		
		 * Set UoM - Start
		 
		var UoM = sap.ui.getCore().byId("idMob30txtUom").getText();

		
		 * Set UoM- End
		 
		
		 * set Serial no - Start
		 
		 var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
			var oModel1 = tabMaterialLst.getModel();
			var arrMatLst = oModel1.oData.results;
			
			//var objMaterial = arrMatLst[i];
			//objMaterial.SerialLst = arrSerial;
				
	var serialLineItems = [];
			
			if(objMaterial.SerialManaged == true) {
				for(var i=0;i<objMaterial.SerialLst.length;i++) {
					serialLineItems.push({"Material" : objMaterial.Material ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
				
					//serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
				
				
				
				}
			} else {
				serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
			}
			
			 * set Serial no - End
			 
	 var createReqData = {
			 "WHouse" : defaultWareHouse,
			 "Plant" : defaultPlant,
			 "SourceStorageType" : Storagetype,
			 "SourceStorageBin" : Storagebin,
			 "Material" : matno,
			 "DestStorageBin": destbin,
			//"Quant" :
			 "UOM" : UoM,
		     "SerialNo": "",//serialLineItems,
			 "AvailableStock" : Quantity
	 };
	 
	
	 oModel.create(readRequestURL, createReqData, null, 
				function(oResponse) {
		 var msg = "Data Updated Successfully";
		 jQuery.sap.require("sap.m.MessageToast");
          sap.m.MessageToast.show(msg);	
		},
		function(oError){
			 try{
				 
				var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
				try{
				    
		
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
				
				sap.m.MessageBox.show(
				messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
				"Error");
			 						
				
				
				break;
				}
				catch(e)
				{
		
				sap.m.MessageBox.show(e.message+ " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
			
				break;
				
				}}
				}
			    catch(e)
				{
			
				sap.m.MessageBox.show("Service Not Available - Please contact system administrator" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		
				}
			    });



	closeSplashScreen();//splash screen closed
	

}*/


});


	

function Mob30Validate(){
	var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
	var tableModel = tabMaterialLst.getModel();
	var isError = false;
	
	if(typeof tableModel != 'undefined') {
			tabModelData = tableModel.oData.results;
			
			for(var i=0;i<tabModelData.length;i++) {
				if(i==select){
				var serLst = tabModelData[i].SerialLst;
				var qty = tabModelData[i].AvailableStock;
				/*var serial = sap.ui.getCore().byId("oResponsivePopoverList_30");
				if(serial=="" || serial == null){
					isError = true;
				}*/
				
			 /*if( !isNaN(qty) && typeof serLst != 'undefined' && parseInt(qty)!= serLst.length ) {
					
					isError = true;
					
				}*/
				if(tabModelData[i].Serialized=="Y"){
				if(isNaN(qty) || typeof serLst == 'undefined'){
					isError = true;
					
					sap.m.MessageBox.show("Please enter Serial Numbers" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
				}
if( !isNaN(qty) && typeof serLst != 'undefined' &&  serLst.length  >  parseInt(qty)) {
					
/*	sap.m.MessageBox.show("Mismatch in Quantity and Scanned serials",sap.m.MessageBox.Icon.ERROR,
	"Error");*/

					isError = true;
					sap.m.MessageBox.show("Serial numbers Mismatched with Quantity" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
				}
				}

	
/*	sap.m.MessageBox.show("Mismatch in Quantity and Scanned serials",sap.m.MessageBox.Icon.ERROR,
	"Error");*/
}
			}
			if(!isNaN(qty) && typeof qty != 'undefined' && parseInt(qty) < 0){
				isError = true;
				sap.m.MessageBox.show("Please enter Quantity" + " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,"Error");
			} 

}
	
	return isError;
	}