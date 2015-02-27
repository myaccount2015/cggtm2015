sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.MOB21Details", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB21Details
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB21Details
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB21Details
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB21Details
*/
//	onExit: function() {
//
//	}
	
	onSelect : function()
	{
		
		 var app = sap.ui.getCore().byId("myApp"); 
			//app.setInitialPage("idFirstLogon1");
			app.to("idMOB21DetSplitApp");
	}

});