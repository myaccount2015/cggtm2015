sap.ui.controller("com.cg.gtm.view.Drop3_MOB33.Mob33MasterThreeView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
*/
//	onExit: function() {
//
//	}
	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB33ResultsList").removeSelections();
		sap.ui.getCore().byId("MOB33SplitApp").backMaster();
		sap.ui.getCore().byId("MOB33SplitApp").backDetail();
//		if (g_cameFromMOB01) {
//			sap.ui.getCore().byId("myApp").back();
//			g_cameFromMOB01 = false;
//		}
	},
	
handleListItemSelect: function (evt) {
	var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
	var context = evt.getParameter("listItem").getBindingContext("measurements");
	sap.ui.getCore().byId("MOB33Detail").setBindingContext(context, "measurements");
	
	sap.ui.getCore().byId("MOB33OBJHDR").setTitle(this.getModel().getProperty(contextPath + "/Mileage"));
	sap.ui.getCore().byId("MOB33OBJATR1").setText(this.getModel().getProperty(contextPath + "/TrainSet"));
	sap.ui.getCore().byId("MOB33OBJSTA1").setText(this.getModel().getProperty(contextPath + "/Object"));
	sap.ui.getCore().byId("MOB33LR").setText(this.getModel().getProperty(contextPath + "/LastReading"));
	sap.ui.getCore().byId("MOB33LRD").setText(this.getModel().getProperty(contextPath + "/LastReadingDate"));
	
	g_MOB33Mileage = this.getModel().getProperty(contextPath + "/Mileage");
	
	sap.ui.getCore().byId("MOB33SplitApp").toDetail("MOB33Detail");
	sap.ui.getCore().byId("MOB33READING").setValue("");
	sap.ui.getCore().byId("MOB33COMMENT").setValue("");
}
});