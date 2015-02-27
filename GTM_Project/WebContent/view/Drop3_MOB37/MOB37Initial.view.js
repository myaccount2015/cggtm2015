sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB37.MOB37Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37Initial
	 */
	createContent: function (oController) {

		var splitApp = new sap.m.SplitApp({
			id: "MOB37SplitApp",
			mode: "StretchCompressMode"
		});

		//var tools = new sap.ui.model.json.JSONModel("drop3mockups/data/tools.json");
		//splitApp.setModel(tools, "tools");

		splitApp.addMasterPage(new sap.ui.jsview("MOB37Master", "com.cg.gtm.view.Drop3_MOB37.MOB37Master"), true);
		splitApp.addMasterPage(new sap.ui.jsview("MOB37MasterTwo", "com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo"));
		//splitApp.addDetailPage(new sap.ui.jsview("MOB37Empty", "com.cg.gtm.view.Drop3_MOB37.MOB37Empty"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));

		return splitApp;

	}

});