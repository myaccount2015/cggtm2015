sap.ui.jsview("com.cg.gtm.view.DROP3_MOB03.MOB03Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB03.MOB03Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.DROP3_MOB03.MOB03Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03Initial
	 */
	createContent: function (oController) {

		var splitApp = new sap.m.SplitApp({
			id: "MOB03SplitApp",
			mode: "StretchCompressMode"
		});

		splitApp.addMasterPage(new sap.ui.jsview("MOB03Master", "com.cg.gtm.view.DROP3_MOB03.MOB03Master"), true);
		splitApp.addMasterPage(new sap.ui.jsview("MOB03MasterTwo", "com.cg.gtm.view.DROP3_MOB03.MOB03MasterTwo"));
		splitApp.addDetailPage(sap.ui.getCore().byId("idBlankScreen"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB03Detail", "com.cg.gtm.view.DROP3_MOB03.MOB03Detail"));

		return splitApp;
		
	}

});