sap.ui.controller("com.cg.gtm.view.Drop2_MOB30.Mob30MatDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30MatDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob30MatDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob30MatDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob30MatDetail
*/
//	onExit: function() {
//
//	}
	
	logSer_30 : function(oEvent){
		
			 
			
					     
					    
					     this.popover = sap.ui.getCore().byId("oResponsivePopover_30");
					     this.popover.openBy(oEvent.getSource());
					    // sap.ui.getCore().byId("oResponsivePopoverList_30").setModel(oJSONModelMob20Res);
					   
					     
					     
		                 	
		
		
	},
	/*Quantity : function(){
		var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
		var oModel = tabMaterialLst.getModel();
		
		var txtValue = oEvent.mParameters.newValue;
		//alert(txtValue);
		var arrMatLst = oModel.oData.results;
		
		for(var i=0;i<arrMatLst.length;i++) {
			//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
			var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
			//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
			
			if((inputMatNoVal.trim()==arrMatLst[i].Material) && (inputUoM.trim()==arrMatLst[i].UoM) && (lblMatDescVal.trim()==arrMatLst[i].Description)) {
				var objMaterial = arrMatLst[i];
				objMaterial.Quantity = txtValue;
				
				//var lblQty = sap.ui.getCore().byId("idqtylb");
				
				
			}
		}
		
		var oModel2 = new sap.ui.model.json.JSONModel();
		oModel2.setData({results: arrMatLst});
		tabMaterialLst.setModel(oModel2);
	},*/
	btnScanner_30 : function(oEvent)
	{

		sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob30-popWin").open();
		
		
		
		sap.ui.getCore().byId("Mob30-ScanBodyText").setText(
		sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() + "\n" + 
		sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText());
		
		//
		
		
		
		
	},
	addSerialButton_30 : function()
	{
		
		var serialNo = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").getValue();
       if( sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").getValue() == "")
			{
			sap.m.MessageBox.show("Please Enter Serial Number"+ " " +
			" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
			
			}
       else{
       	debugger;
    	   var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
    		var oModel = tabSerialLst.getModel();
    		var tabModel = null;
    		var isExisting = false;
    		AvailableStock = 	sap.ui.getCore().byId("idMob30ActualQuant").getText();

    		
    		if(typeof oModel != 'undefined') {
    			tabModel = oModel.oData.modelData;
    			for(var i=0;i<tabModel.length;i++) {
    				
    					if(tabModel[i].Serial.trim()==serialNo) {
    					isExisting = true;
    				}
    				
    				
       
    			}
    		}
    		
    			else {
    			var aData1 = [
    				   			{Serial: serialNo}
    				   			];
    			
    			oModel = new sap.ui.model.json.JSONModel();
    			
    			oModel.setData({modelData: aData1});
    			tabSerialLst.setModel(oModel);
    			Mob30addSerialToModel(aData1);
    			sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
    			sap.ui.getCore().byId("Mob30-popWin").close();
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
    			
    			if(tabModel.length < AvailableStock){

    			 var objSerial = {Serial: serialNo};
    			 tabModel.push(objSerial);
    			 var oModel2 = new sap.ui.model.json.JSONModel();
    			 oModel2.setData({modelData: tabModel});
    			 tabSerialLst.setModel(oModel2);
    			 
    			 Mob30addSerialToModel(tabModel);
    			 sap.ui.getCore().byId("Mob30-popWin").close();
    			 /*
    				 * Add Serial to Model - Start
    				 */
    			// Mob18addSerialToModel(tabModel);
    				/*
    				 * Add Serial to Model - End
    				 */
    			}
    			else{
    	       		sap.ui.getCore().byId("Mob30-popWin").close();
    	       		sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
    	    			var lblConfirm = new sap.m.Label({
    	    				text: "Quantity Should not exceed " + AvailableStock + "available Quantity."
    	    			});
    	    			
    	    			var RightButton_b = new sap.m.Button({
    	    				  text : "OK",
    	    				  press : function(){
    	    					  dialogWindow.close();
    	    				  }
    	    			  });
    	    			  
    	    			 var dialogWindow = new sap.m.Dialog({
    	    				  title: "Quantity Exceeds",
    	    				  //leftButton : leftButton_b,
    	    				  rightButton: RightButton_b,
    	    				  content : lblConfirm,
    	    				 // width : "90%"
    	    				
    	    			  });
    	    			 
    	    			 dialogWindow.open();
    	    		}
    			
    		}
    		
    		sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
       

    				
       
       }

    				
    		
    		
},

handleDelete_30 : function(oEvent){

	var errExist = false;
		
		var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
		var oModel = tabMaterialLst.getModel();
		var arrMatLst = oModel.oData.results;
		
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
		var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		
		for(var i=0;i<arrMatLst.length;i++) {
			if((inputMatNoVal.trim()==arrMatLst[i].Material))/* && (lblCustVal.trim()==arrMatLst[i].Customer) && (lblMatDescVal.trim()==arrMatLst[i].Description)) */{
				
				var docNum = arrMatLst[i].docNumber;
				if(typeof docNum != 'undefined' && docNum.toString().trim().length>0) {
					errExist = true;
					var objMaterial = arrMatLst[i];
					mob30ItemDialog(objMaterial.Material);
				}
			}
		}
		
		if(errExist == true) {
			return;
		}
		sap.ui.getCore().byId("oResponsivePopover_30").close(this);
		oEvent.getSource().destroyItems();
		//sap.ui.getCore().byId("oResponsivePopoverList").getModel();
	    sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue
	  var  selectedIndex =	(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue() - (1));//decrement 1 
	    
	/*var controlName = oEvent.oSource.sId;
   var strSelectedIndex = controlName.substring(controlName.lastIndexOf("-")+1);
	var selectedIndex = parseInt(strSelectedIndex);*/
	
	var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
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
	
	Mob30addSerialToModel(arrMatLst);
	//sap.ui.getCore().byId("inputSerial_order").setValue(" ");
},
		
post : function(objMaterial){
	sap.ui.getCore().byId("Mob30-popWin1").close();
	
	
	
	 
		
	openSplashScreen();
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB30:: Service: BinSet Start" ;

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
	
	 var readRequestURL = "/BinSet";
	 
	 //Get Values To Post
	 
	 /*
		 * Set Plant Code - Start
		 */
	
	 var defaultPlant = "";
	  	defaultPlant = window.localStorage.getItem("defPlantCode");
	  	
	var plantInput=""; 
		if(typeof g_SelectedPlant != 'undefined') {
			plantInput = g_SelectedPlant.description;
		} else {
			plantInput = defaultPlant; //defaultPlantCode & defaultPlantName
		}
		/*
		 * Set Plant Code - End
		 */
		
		/*
		 * Set Storage Type - Start
		 */
		var type = sap.ui.getCore().byId("idStorageType");
		Storagetype = type.mProperties.selectedKey;

		/*
		 * Set Storage Type - End
		 */
		
		/*
		 * Set Storage Bin - Start
		 */
		var bin = sap.ui.getCore().byId("idStoragebin");
		Storagebin = bin.mProperties.selectedKey;

		/*
		 * Set Storage Bin - End
		 */
		
		/*
		 * Set Warehouse - Start
		 */
		//var warehouse = sap.ui.getCore().byId("idwarehouse").getValue();
		   //Default WareHouse:
	  	var defaultWareHouse = "";
	  	defaultWareHouse = window.localStorage.getItem("defWHCode");

	  	var warehouse = defaultWareHouse;

		/*
		 * Set Warehouse - End
		 */
		
		
		
		/*
		 * Set Material - Start
		 */
		var matno = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();

		/*
		 * Set Material - End
		 */
		
		/*
		 * Set Destination Bin - Start
		 */
		var destbin = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").getValue();

		/*
		 * Set Destination Bin - End
		 */
		
		
		var quant = sap.ui.getCore().byId("Mob30-thrdScr-txtqty").getText();
		/*
		 * Set Available Stock - Start
		 * 
		 * 
		 */
		var Quantity = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();

		/*
		 * Set Available Stock - End
		 */
		
		
		/*
		 * Set UoM - Start
		 */
		var UoM = sap.ui.getCore().byId("idMob30txtUom").getText();

		/*
		 * Set UoM- End
		 */
		/*
		 * set Serial no - Start
		 */
		
		 /* var idList = oEvent.mParameters.id;

		  var str = idList.substring(idList.length-1);
			var select = parseInt(str);*/
			
			 
			var list = sap.ui.getCore().byId("idtable_mob30");
			var oModel1 = list.getModel();
			//var data = evt.mParameters.listItem.sId;
			//var str = data.substring(data.length-1);
			//var select = parseInt(str);
			
			var listmodel = oModel1.oData.results;
			var lenlistmodel = oModel1.oData.results.length;
			for(i=0;i<lenlistmodel;i++) {
				if(i==select) {
					
				
		// var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
			//var oModel1 = tabMaterialLst.getModel();
			//var arrMatLst = oModel1.oData.results;
			
			//var objMaterial = arrMatLst[0];
				
			
			/*if(objMaterial.SerialManaged == true) {
				for(var i=0;i<objMaterial.SerialLst.length;i++) {
					//serialLineItems.push({"Material" : objMaterial.Material ,"SerialNo" : objMaterial.SerialLst[i].Serial.toString()});
				    //serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
				
				
				
				}
			    } else {
				
				//serialLineItems.push({"Material" : "" ,"SerialNo" : ""});
			    }*/
			debugger;
			var serialLineItems;
			var underScrSep = "";
			var bunchOfSerial = listmodel[i].SerialLst;
			if(listmodel[i].Serialized=="Y"){
				var isError = Mob30Validate(); //Validating the serial no
				
				var errMsg = "Please Complete all Editing Material before Posting BIN to BIN";
				
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
					 
					 closeSplashScreen();//splash screen closed
					 return;
				}
				else{
					if( bunchOfSerial.length >1)
					{
					var ArrayFunString =bunchOfSerial.toString();
					underScrSep = ArrayFunString.replace("," ,"_");
					alert("underScrSep: "+underScrSep);
					
					}
				else
				{
				underScrSep = bunchOfSerial[0].Serial;
				}
				}
				}
				
			
	
	
	
		}
			}
	
	var stocktype = sap.ui.getCore().byId("idMob30txtType").getText();
	
	
	
			/*
			 * set Serial no - End
			 */
	 var createReqData = {
			 "WHouse" : warehouse,
			 "Plant" : plantInput,
			 "SourceStorageType" : Storagetype,
			 "SourceStorageBin" : Storagebin,
			 "Material" : matno,
			 "DestStorageBin": destbin,
			 "DestStorageType":Storagetype,
			"Quant" : quant,
			 "UOM" : UoM,
		     "SerialNo": underScrSep,//serialLineItems,
			 "AvailableStock" : Quantity,
			 "StockCategory": stocktype
	 };
	 
	
	 oModel.create(readRequestURL, createReqData, null, 
				function(oResponse) {
		 debugger;
			var msg = "Posting Successful. " + "Transfer Order Number is " + oResponse.TransferOrder;
			/*jQuery.sap.require("sap.m.MessageToast");
			sap.m.MessageToast.show(msg,	
			 {
				    duration: 6000,                  // default
				    
				});*/

			sap.m.MessageBox.show(msg+ " " +" "+" ",
			sap.m.MessageBox.Icon.Success,"Success");
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
	            app.to("idGridSubMenuIMWM");
			}else{
				var app = sap.ui.getCore().byId("myApp"); 
	            app.to("idGridSubMenuIMWM");
	            var appM = sap.ui.getCore().byId("idMOB30SplitApp");  
	            //  app.toMaster("idMOB30master");
	              appM.toDetail("idMOB30Blank");
			}
		/* var msg = "Data Updated Successfully";
		 jQuery.sap.require("sap.m.MessageToast");
          sap.m.MessageToast.show(msg);	*/
          
          
          
          
          if( g_isDebug == true)
          {
          //Service End Time
          var logInfo1 = getTimeStamp() +"MOB30:: Service: BinSet Finish" ;
          //Log file Service Start and End Time
          var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
          logFileUpdate(g_ServiceStartEndTime);
          }
		},
		function(oError){
			 try{
				 
				var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
				try{
				    
		
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
				
					var list = sap.ui.getCore().byId("idtable_mob30");
			var oModel1 = list.getModel();
			//var data = evt.mParameters.listItem.sId;
			//var str = data.substring(data.length-1);
			//var select = parseInt(str);
			
			var listmodel = oModel1.oData.results;
			var lenlistmodel = oModel1.oData.results.length;
			for(i=0;i<lenlistmodel;i++) {
				if(i==select) {

				sap.m.MessageBox.show(
				messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,
				"Error Material No: " + listmodel[i].Material);
			 				
				}
			}
				/*var messageFromBackend = dataCopy.innererror.errordetails[0].message;
				setSuccessErrorResponse(objMaterial, null, messageFromBackend); //Setting Error Message in the model (objMaterial, docNo, errMsg)
				SerialDetail_Scrap(selectedIndex);
				sap.m.MessageBox.show(
			    		   messageFromBackend+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error Material No: " + objMaterial.Material);*/
				
				
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
				
				if( g_isDebug == true)
		          {
		          //Service End Time
		          var logInfo1 = getTimeStamp() +"MOB30:: Service: BinSet Failed no network" ;
		          //Log file Service Start and End Time
		          var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		          logFileUpdate(g_ServiceStartEndTime);
		          }
				
				
		
				}
			    });
			



	closeSplashScreen();//splash screen closed
	

},
Mob30_scan  : function(){
	//sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
	varScan = "Mob30Matmaster";
	Mob30scan = "Serial";
	//Mob30scan = "Bin";
	sap.ui.getCore().byId("idMob24MaterialSearchInput")
			.getController().scanNow();
	
},
Mob30_scan_Bin  : function(){
	sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
	varScan = "Mob30Matmaster";
	//Mob30scan = "Serial";
	Mob30scan = "Bin";
	sap.ui.getCore().byId("idMob24MaterialSearchInput")
			.getController().scanNow();
	
},

	

		

});
function Mob30addSerialToModel(arrSerial) {
	debugger;
	var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
	var oModel = tabMaterialLst.getModel();
	var arrMatLst = oModel.oData.results;
	
	for(var i=0;i<arrMatLst.length;i++) {
		//var lblCustVal = sap.ui.getCore().byId("lblCustVal").getText();
	//	var inputUoM = sap.ui.getCore().byId("inputUoM").getText();
		var inputMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
		var inputMatdesc = sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText();
		var qnat = sap.ui.getCore().byId("Mob30-thrdScr-txtqty").getText();
		//var lblMatDescVal = sap.ui.getCore().byId("lblMatDescVal").getText();
		var inputQty = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
		
		var lblQty = sap.ui.getCore().byId("idbatch");
		
		if((qnat.trim()==arrMatLst[i].Quant) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
			
			
			var objMaterial = arrMatLst[i];
			objMaterial.SerialLst = arrSerial;
			
			
			sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(arrSerial.length);
			var stock = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
			debugger;
                			for(var i =0; i<array.length;i++){
                				if(array[i].qty == sap.ui.getCore().byId("Mob30-thrdScr-txtqty").getText()){
                					array[i].actualStock = stock;
                				}
                			}
			if(arrSerial.length > objMaterial.AvailableStock){
				var lblConfirm = new sap.m.Label({
    				text: "Quantity Should not exceed " + objMaterial.AvailableStock + "available Quantity."
    			});
    			
    			var RightButton_b = new sap.m.Button({
    				  text : "OK",
    				  press : function(){
    					  dialogWindow.close();
    				  }
    			  });
    			  
    			 var dialogWindow = new sap.m.Dialog({
    				  title: "Quantity Exceeds",
    				  //leftButton : leftButton_b,
    				  rightButton: RightButton_b,
    				  content : lblConfirm,
    				 // width : "90%"
    				
    			  });
    			 
    			 dialogWindow.open();
				sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(objMaterial.Quantity);
				
		
			}
			else{
				objMaterial.Quantity = arrSerial.length;
			}
			
			 
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

}	
function mob30ItemDialog(matNo) {
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
