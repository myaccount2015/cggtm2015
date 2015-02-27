sap.ui.controller("com.cg.gtm.view.Mob20TwoScrMatDes", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob20TwoScrMatDes
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob20TwoScrMatDes
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob20TwoScrMatDes
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob20TwoScrMatDes
*/
//	onExit: function() {
//
//	}

	
	Mob20TabColEvent : function(oEvent){
		var idList = oEvent.mParameters.id;
		
		
		 cssBackColor(idList);
		 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue("");
		 
		 
		 
		
		//MultiSelect
		var contextPath = oEvent.oSource.oBindingContexts.undefined.sPath;	
	   
		//getting details from binded list items
		var Material = this.getModel().getProperty(contextPath + "/Material");
		var Desc = this.getModel().getProperty(contextPath + "/Materidesc");
		var uoM = this.getModel().getProperty(contextPath + "/EntryUom");
		var typeDesc = this.getModel().getProperty(contextPath + "/StocktypeDesc");
		var Batch = this.getModel().getProperty(contextPath + "/Batch");
		var SerialNo = this.getModel().getProperty(contextPath + "/SerialNo");
		var zerocount = this.getModel().getProperty(contextPath + "/ZeroCount");
		var item = this.getModel().getProperty(contextPath + "/Item");
		var invDoc = this.getModel().getProperty(contextPath + "/Physinventory");
		var fisYer = this.getModel().getProperty(contextPath + "/Fiscalyear");
		var SpecStockFlag = this.getModel().getProperty(contextPath + "/SpecStock"); // B(customer)   Q(project)
		var SpecialStockValB = this.getModel().getProperty(contextPath + "/Customer");
		var SpecialStockValQ = this.getModel().getProperty(contextPath + "/WbsElement");
		
		//create Array 
		var MatArray = [];
		var insMatArr = {
			
				"Physinventory" : invDoc,
				"Fiscalyear" : fisYer,
				"Material" : Material,
				"EntryUom" : uoM,
				"Batch" : Batch,
				"SerialNo" : SerialNo,
				"Item" : item,
				"ZeroCount" :zerocount,
				"EntryQnt" : "",
				"SerialNo" : ""
				
		};
		
		MatArray.push(insMatArr);
		var stringifyng = 	JSON.stringify(MatArray);
		window.localStorage.setItem(invDoc+"_"+ 
				Material+Batch+ typeDesc+ "_ServiceArray",stringifyng );
		
		
		
		//pass detail to third column
		sap.ui.getCore().byId("Mob20-thrdScr-txtMat").setText(Material);
		sap.ui.getCore().byId("Mob20-thrdScr-txtDes").setText(Desc);
		sap.ui.getCore().byId("Mob20-thrdScr-txtUom").setText(uoM);
		sap.ui.getCore().byId("Mob20-thrdScr-txtType").setText(typeDesc);
		sap.ui.getCore().byId("Mob20-thrdScr-txtBatch").setText(Batch);
		
		
		
		//Batch 
		if( Batch == "")
			{
			sap.ui.getCore().byId("MOB20-batchFlex").setVisible(false);
			sap.ui.getCore().byId("Mob20-Dummy-Label-6").setVisible(false);
			
			
			}
		else
			{
			sap.ui.getCore().byId("MOB20-batchFlex").setVisible(true);
			sap.ui.getCore().byId("Mob20-Dummy-Label-6").setVisible(true);
			}
		
		//special stock
		if(SpecStockFlag == 'B')
			{
			sap.ui.getCore().byId("Mob20-spclstk").setVisible(true);
			sap.ui.getCore().byId("Mob20-Dummy-Label-7").setVisible(true);
			sap.ui.getCore().byId("Mob20-thrdScr-txtStock").setText("Project-"+SpecialStockValB);
			
			
			}
		else if(SpecStockFlag == 'Q' )
			{
			sap.ui.getCore().byId("Mob20-spclstk").setVisible(true);
			sap.ui.getCore().byId("Mob20-Dummy-Label-7").setVisible(true);
			sap.ui.getCore().byId("Mob20-thrdScr-txtStock").setText("Customer-"+SpecialStockValQ);
			}
		else
			{
			
			sap.ui.getCore().byId("Mob20-spclstk").setVisible(false);
			sap.ui.getCore().byId("Mob20-Dummy-Label-7").setVisible(false);
			
			}
	
		
		//get stored values from local storage and pass to SerialText
		
		
		var localStrData = window.localStorage.getItem(
				sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
				Material+Batch+typeDesc+"SerLogVal");
		
		 if (localStrData === undefined || localStrData === null || localStrData.length === 0)
      	 {
      	 }
		 else
		 {
			 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(localStrData);	 
		 }
      	 
		
		//Serial Flag check
		 var FlagSerialno = this.getModel().getProperty(contextPath + "/FlagSerialno");
		 if ( FlagSerialno == "X")
			 {
			 sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(true);
			 sap.ui.getCore().byId("Mob20-btnlogSer").setVisible(true);
			 sap.ui.getCore().byId("Mob20-SerCheckValidation").setText("Serial");
			 
			// sap.ui.getCore().byId("Mob20-SerCheckValidation-NonSer").setText("NonSer-CheckExit");
			 
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
			 sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);
			 sap.ui.getCore().byId("Mob20-btnlogSer").setVisible(false);
			 
			 //sap.ui.getCore().byId("Mob20-SerCheckValidation-NonSer").setText("NonSer");
			 
			 //sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue("");
			 }
		 
		 
		 
		 
		
		
		
		
		
     /*var noOfCells = sap.ui.getCore().byId("Mob20-MatDesTable-Column-List").getCells();
     var noOfCells1 = sap.ui.getCore().byId("idMob20-MatDesTable").getModel();
     alert( sap.ui.getCore().byId("idMob20-MatDesTable").getSelectedItem().mAggregations.cells[0].mProperties.title);
     alert( sap.ui.getCore().byId("Mob20-MatDesTable-Column-List").getBindingPath());
     
     
     alert(sap.ui.getCore().byId("idMob20-MatDesTable").getSelectedItem().oBindingContexts.undefined.sPath );
     var contextPath = sap.ui.getCore().byId("idMob20-MatDesTable").getSelectedItem().oBindingContexts.undefined.sPath ;
     var fiscalYear = noOfCells1.oData(contextPath + "/Fiscalyear");
     alert(fiscalYear);*/
    // noOfCells = noOfCells[0].mProperties.title;	
    // alert(  noOfCells[0].mProperties.title);
    // alert(sap.ui.getCore().byId("Mob20-MatDesTable-Column-List").indexOfCell(0));
     
     
     
     
     
		 if (g_runningOnPhone == true)
			{ 
			 
			 //Show conform count
			// sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(true);
		   	 //Show third col
		   	// Mob20ShowThirdScreen();
			 g_MobileNavigationId = "Mob20-StockPageTitle";
		   	 sap.ui.getCore().byId("Mob20-StockPageTitle").setTitle("Material : "+Material);
			sap.ui.getCore().byId("myApp").to("idMob20splStockpage");
			 
			}
		 else{
	 //Show conform count
	 sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(true);
   	 //Show third col
   	 Mob20ShowThirdScreen();
   	 sap.ui.getCore().byId("Mob20-StockPageTitle").setTitle("Material : "+Material);
			
		 }
		 
	
	}
});


function cssBackColor(idList)
{

globalValMOB21ConfrmCount = globalValMOB21ConfrmCount + 1;
$("#"+idList+"").css("background-color","#e6f2f9");
//$("p").css("background-color","yellow");
}

