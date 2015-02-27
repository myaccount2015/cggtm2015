sap.ui.jsview("com.cg.gtm.view.Drop3_MOB01.MOB01Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB01.MOB01Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB01.MOB01Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01Initial
	 */
	createContent: function (oController) {

		var splitApp = new sap.m.SplitApp({
			id: "MOB01SplitApp",
			mode: "StretchCompressMode"
		});

		splitApp.addMasterPage(new sap.ui.jsview("MOB01Master", "com.cg.gtm.view.Drop3_MOB01.MOB01Master"), true);
		splitApp.addDetailPage(new sap.ui.jsview("MOB01Empty", "com.cg.gtm.view.Drop3_MOB01.MOB01Empty"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB01TrainDetail", "com.cg.gtm.view.Drop3_MOB01.MOB01TrainDetail"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB01TrainDetailEdit", "com.cg.gtm.view.Drop3_MOB01.MOB01TrainDetailEdit"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB01DepotDetail", "com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetail"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB01DepotDetailEdit", "com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetailEdit"));

		return splitApp;
		
	}

});