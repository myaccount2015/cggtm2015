sap.ui.controller("com.cg.gtm.view.Mob30DetailMaterial", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob30DetailMaterial
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob30DetailMaterial
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob30DetailMaterial
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob30DetailMaterial
*/
//	onExit: function() {
//
//	}
	mob30matselect : function(oEvent){
		  $("#idMOB30MatDetail").show();
		  var idList = oEvent.mParameters.id;
			
			
			// cssBackColor(idList);
			 sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue("");
			 
			 
			 
			
			//MultiSelect
			var contextPath = oEvent.oSource.oBindingContexts.undefined.sPath;	
		   
			//getting details from binded list items
			var Material = this.getModel().getProperty(contextPath + "/Material");
			var Desc = this.getModel().getProperty(contextPath + "/MaterialDescription");
			var uoM = this.getModel().getProperty(contextPath + "/UOM");
			var typeDesc = this.getModel().getProperty(contextPath + "/StockCategory");
			var Batch = this.getModel().getProperty(contextPath + "/Batch");
			var SerialNo = this.getModel().getProperty(contextPath + "/SerialNo");
			
			var Qty = this.getModel().getProperty(contextPath + "/AvailableStock");
			
			
			
			//create Array 
			var MatArray = [];
			var insMatArr = {
				
					
					"Material" : Material,
					"MaterialDescription": Desc,
					"UOM" : uoM,
					"Batch" : Batch,
					"SerialNo" : SerialNo,
					"AvailableStock" : Qty,
					"StockCategory" :typeDesc,
					
					
			};
			
			MatArray.push(insMatArr);
			var stringifyng = 	JSON.stringify(MatArray);
			window.localStorage.setItem( 
					Material +Batch+ "_ServiceArray",stringifyng );
			
			
			
			//pass detail to third column
			sap.ui.getCore().byId("Mob30-thrdScr-txtMat").setText(Material);
			sap.ui.getCore().byId("Mob30-thrdScr-txtDes").setText(Desc);
			sap.ui.getCore().byId("idMob30txtUom").setText(uoM);
			sap.ui.getCore().byId("idMob30txtType").setText(typeDesc);
			sap.ui.getCore().byId("idMob30txtBatch").setText(Batch);
			sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(Qty);
			sap.ui.getCore().byId("Mob30txtSerial").setText(SerialNo);
			
			//Batch 
			 var FlagBatch = this.getModel().getProperty(contextPath + "/BatchManaged");
			if( FlagBatch == "N")
				{
				sap.ui.getCore().byId("idMob30txtBatch").setVisible(false);
				
				}
			else
				{
				sap.ui.getCore().byId("idMob30txtBatch").setVisible(true);
				}
			
		
			
			/*//get stored values from local storage and pass to SerialText
			
			
			var localStrData = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
		            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal");
			
			 if (localStrData === undefined || localStrData === null || localStrData.length === 0)
	      	 {
	      	 }
			 else
			 {
				 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(localStrData);	 
			 }*/
	      	 
			
			//Serial Flag check
			 var FlagSerialno = this.getModel().getProperty(contextPath + "/Serialized");
			 if ( FlagSerialno == "N")
				 {
				 sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(true);
				 sap.ui.getCore().byId("Mob30-btnlogSer").setVisible(true);
				 //sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(1);
				 
				 
				 //serilized flag
				 /*if(sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue() == "")
					 {
					 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(1);
					 window.localStorage.setItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
					            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal",
					            sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue());
					 }*/
				 
				 }
			 else
				 {
				 sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
				 sap.ui.getCore().byId("Mob30-btnlogSer").setVisible(false);
				// sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue("");
				 }
			 
			 
			 
	}
});