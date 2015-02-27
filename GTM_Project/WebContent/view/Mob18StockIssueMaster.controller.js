sap.ui.controller("com.cg.gtm.view.Mob18StockIssueMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18StockIssueMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18StockIssueMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18StockIssueMaster
*/
	onAfterRendering: function() {
		 var getPlant =  window.localStorage.getItem("defPlantName");
		 var plant_order = sap.ui.getCore().byId("inputPlant");
		 plant_order.setValue(getPlant);
		 var plant_scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			plant_scrap.setValue(getPlant);
			 var plant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
				plant_WBS.setValue(getPlant);
				var plant_cost = sap.ui.getCore().byId("inputPlant_Cost");
				plant_cost.setValue(getPlant)

	},
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB18";
	var helpDocNumber = HelpDocument(MobileScreenNumber);
	url1 = url1 + "('"+helpDocNumber+"')/$value";
	if(g_runningOnPhone == false && g_runningInTablet == false) {
	window.open(url1, '_blank'); 
	window.focus();
	} else {
	//navigator.app.loadUrl(url1, { openExternal:true } );
		downloadAndDisplayPDF(url1);
	}
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18StockIssueMaster
*/
//	onExit: function() {
//
//	}

});
