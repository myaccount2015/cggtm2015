sap.ui.controller("com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetailPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitscreens.DetailPage
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitscreens.DetailPage
*/
	onBeforeRendering: function() {
	
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitscreens.DetailPage
*/
	onAfterRendering: function() {},
	
	

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitscreens.DetailPage
*/
	onExit: function() {
		
	},
	onMaterialSel: function() {

		calling_service_material_to_get_more_vendor();//get selected material number-vendor informations
		serialBatchValidation(sap.ui.getCore().byId("valMatNo2").getText());//SerialBatch Validation
	
		var deselect = sap.ui.getCore().byId("listMatNo");
		deselect.removeSelections();
		//deselect.setSelectedItemById(sap.ui.getCore().byId("stdMatSel"),false);
		
		
		//Reset Input fields in MaterialSearch
		
	    
	  //  var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
	//	plantLst.setValue(defaultPlantName);
		
	    var desc = sap.ui.getCore().byId("txtDesc").setValue("");
	    
	    var manuf = sap.ui.getCore().byId("txtManu").setValue("");
	    
	    var matGrp = sap.ui.getCore().byId("txtMtrGrp").setValue("");
	   
	    var extMatGrp = sap.ui.getCore().byId("txtExtMtrGrp").setValue("");
	    
	    var vendor = sap.ui.getCore().byId("txtVendor").setValue("");
	   
	    var venPartNo = sap.ui.getCore().byId("txtVenPartNo").setValue("");
	    
	   

		
		
		
		if(backNavMat=="Mob15CreateNoti") {
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			//alert(selectedText);
			if(globalMob15Detail == "Q1") {
				sap.ui.getCore().byId("inputMatnr").setValue(selectedText);
				sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
			}else if(globalMob15Detail == "Q11") {
				sap.ui.getCore().byId("inputMatnr1").setValue(selectedText);
				sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
			}else if(globalMob15Detail == "Q3") {
				sap.ui.getCore().byId("inputMatnr2").setValue(selectedText);
				sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
			}else if(globalMob15Detail == "F2") {
				sap.ui.getCore().byId("inputMatnr3").setValue(selectedText);
				sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
			}else if(globalMob15Detail == "F3") {
				sap.ui.getCore().byId("inputMatnr4").setValue(selectedText);
				sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
			}
			
    		var app = sap.ui.getCore().byId("myApp");  
            app.to("idMob15Notification");
    	}else if(  backNavMat == "MOB23"){
			/* var selectedPlant = event.getParameter('listItem').getTitle();
			 
			 var inputPlant = sap.ui.getCore().byId("inputItem");
				inputPlant.setValue(selectedPlant);
				*/
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("inputItem").setValue(selectedText);
			sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
			
			var myApp = sap.ui.getCore().byId("myApp");
	    	myApp.to("idMob23InitialScreen");
	    	
				
			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
     	  	app.toMaster("idMOB23Matmaster");
		}
		
		else if (backNavMat=="Mob22InsLot")
			{
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("inputMatnrMOB22").setValue(selectedText);
			var app = sap.ui.getCore().byId("myApp");  
            app.to("idMOB22InitView");
			
			}
		
		else if (backNavMat == "idMOB21Mas")
			{
		
			//var app = sap.ui.getCore().byId("myApp");  
           // app.to("idMOB21InitView12");
		
		var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
		
		var txt = sap.ui.getCore().byId("oListItemMat");
		
		txt.setDescription(selectedMatNo.getText());
		txt.setIcon("sap-icon://accept");
		var app = sap.ui.getCore().byId("splitAppInsCreate1");  
      	app.toMaster("idMOB21Mas");
      	
      	var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(true);
		
	
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMOB21InitView12");
			}
		else if (backNavMat == "Mob29Screen")
		{
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("osearch_material_1").setValue(selectedText); //mob29 selected item
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob29MaterialView");
		}
		else if (backNavMat == "Mob17")
		{
			
			var myApp = sap.ui.getCore().byId("myApp");
	    	myApp.to("idMOB17");
	    	
	    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
	    	//splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
	    	//splitAppMOB17.toDetail("idMaterialFullDetPage");
	    	
	    	var strAddMaterial = "Are you sure want to add the Material: " + 
	    					sap.ui.getCore().byId("valMatNo2").getText() + " (" + sap.ui.getCore().byId("valMatDesc").getText() + " ) ?";
	    	sap.ui.getCore().byId("lblConfirm").setText(strAddMaterial);
	    	
	    	sap.ui.getCore().byId("dialogWindow").open();
		}
		else if (backNavMat == "Mob18")
		{
           
			var myApp = sap.ui.getCore().byId("myApp");
	    	myApp.to("idMob18InitialScreen");
	    	
	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
	    	
	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
	    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
	    	 $("#idMob18Scrapdetpage").hide()
	    	
	    	//showidMob18first_Scrap();
			//showidMob18second_Scrap();
	    	//showidMob18first_Scrap();
	    	
	    	
	    	
	    	var strAddMaterial = "Are you sure want to add the Material: " + 
			sap.ui.getCore().byId("valMatNo2").getText() + " (" + sap.ui.getCore().byId("valMatDesc").getText() + " ) ?";
             sap.ui.getCore().byId("lblConfirm").setText(strAddMaterial);

            sap.ui.getCore().byId("dialogWindow").open();
		}
		
		else if (backNavMat == "MOB28")
			{

			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("ip_matNumMOB28").setValue(selectedText);
			var app = sap.ui.getCore().byId("myApp");  
            app.to("idMob28InitialScreen");
			
			
			
			}
		else if (   backNavMat == "MOB35")
		{
		
		var selMaterial = g_SelMaterialDetail;
		
		resetMaterialDetailUIMOB35(true);
			
		var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
		sap.ui.getCore().byId("MOB35_matInput").setValue(selectedText);
		sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
		sap.ui.getCore().byId("MOB35UOM").setValue(selMaterial.Uom);
		
		sap.ui.getCore().byId("MOB35MatDesc").setText(selMaterial.Description);
		
		if(selMaterial.SerialManaged == true) {
			sap.ui.getCore().byId("serialBoxMOB35").setVisible(true);
			sap.ui.getCore().byId("Mob35ShowSer").setVisible(true);
			sap.ui.getCore().byId("MOB35Qty").setValue("1");
		}else {
			sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
			sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
			sap.ui.getCore().byId("MOB35Qty").setValue("");
		}
		
		if(selMaterial.BatchManaged == true) {
			sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
			sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
			sap.ui.getCore().byId("MOB35BatLbl").setText("Batch");
		}else if(selMaterial.Splitvaluated == true) {
			sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
			sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
			sap.ui.getCore().byId("MOB35BatLbl").setText("Valuation Type");
		}
		
		if(selMaterial.BatchManaged == false && selMaterial.Splitvaluated == false) {
			sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
			sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
		}
		
		 if ( g_runningOnPhone == true)
       			{
		var myApp = sap.ui.getCore().byId("myApp");
    	myApp.to("idMob35InitialScreen");
       			}
				else{
				/*var app = sap.ui.getCore().byId("idMOB35SplitApp");  
  	  	app.toMaster("idMOB35masterPage");*/
					var myApp = sap.ui.getCore().byId("myApp");
			    	myApp.to("idMob35InitialScreen");
				}
		 
		 clearSpecialStockMOB35();
		 sap.ui.getCore().byId("idradio-SS0-Mob35").setSelected(true);
		 sap.ui.getCore().byId("idradio-ST0-Mob35").setSelected(true);
		
		 var emptyArr = [];
		 
		 window.localStorage
			.setItem(g_invdocnumMOB35, emptyArr);
		}
		else if (   backNavMat == "MOB03")
		{
alert("hoho");
			var app = sap.ui.getCore().byId("myApp"); 
			app.back();
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue(selectedText);
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValueState(sap.ui.core.ValueState.None);
			
			

			/*var app = sap.ui.getCore().byId("myApp");  
			app.to("MOB03Initial");
			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();*/



		}
		
		else if (   backNavMat == "MOB01T")
		{

			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValue(selectedText);
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValueState(sap.ui.core.ValueState.None);

			var app = sap.ui.getCore().byId("myApp");  
			app.to("MOB01Initial");
			var myApp = sap.ui.getCore().byId("MOB01SplitApp");
			myApp.toMaster("MOB01Master");
			myApp.toDetail("MOB01TrainDetailEdit");
			sap.ui.getCore().byId("MOB01ComponentDialog").open();



		}
		
		else if (   backNavMat == "MOB01D")
		{

			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValue(selectedText);
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValueState(sap.ui.core.ValueState.None);

			var app = sap.ui.getCore().byId("myApp");  
			app.to("MOB01Initial");
			var myApp = sap.ui.getCore().byId("MOB01SplitApp");
			myApp.toMaster("MOB01Master");
			myApp.toDetail("MOB01DepotDetailEdit");
			sap.ui.getCore().byId("MOB01ComponentDialog").open();



		}
		else if (   backNavMat == "MOB01POP")
		{

			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValue(selectedText);
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValueState(sap.ui.core.ValueState.None);

			var app = sap.ui.getCore().byId("myApp");  
			app.back();
			//app.to("MOB01Initial");
			/*var myApp = sap.ui.getCore().byId("MOB01SplitApp");
			myApp.toMaster("MOB01Master");
			myApp.toDetail("MOB01DepotDetailEdit");*/
			sap.ui.getCore().byId("MOB01ComponentDialog").open();



		}
		else {
		
    		var app = sap.ui.getCore().byId("myApp");  
            app.to("idGridSubMenuQM");
    	}
		
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(false);
		 
		 
	}
});




