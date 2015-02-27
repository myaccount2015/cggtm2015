sap.ui.jsview("com.cg.gtm.view.Drop3_MOB33.MOB33Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB33.MOB33Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB33.MOB33Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB33.MOB33Initial
	 */
	createContent: function (oController) {
		
		var splitApp = new sap.m.SplitApp({
			id: "MOB33SplitApp",
			mode: "StretchCompressMode"
		});

		splitApp.addMasterPage(new sap.ui.jsview("MOB33Master", "com.cg.gtm.view.Drop3_MOB33.MOB33Master"), true);
		splitApp.addMasterPage(new sap.ui.jsview("MOB33MasterTwo", "com.cg.gtm.view.Drop3_MOB33.MOB33MasterTwo"));
		splitApp.addMasterPage(new sap.ui.jsview("MOB33MasterThree", "com.cg.gtm.view.Drop3_MOB33.Mob33MasterThreeView"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB33Empty",  "com.cg.gtm.view.Drop3_MOB33.MOB33EMPTY"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB33Detail", "com.cg.gtm.view.Drop3_MOB33.MOB33Detail"));

		return splitApp;
		
	}

});