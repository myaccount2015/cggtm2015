sap.ui.jsview("com.cg.gtm.view.Drop3_MOB24.MOB24Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB24.MOB24Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB24.MOB24Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24Initial
	 */
	createContent: function (oController) {

		var splitApp = new sap.m.SplitApp({
			id: "MOB24SplitApp",
			mode: "StretchCompressMode"
		});

		//var components = new sap.ui.model.json.JSONModel("drop3mockups/data/components.json");
//		splitApp.setModel(components, "components");

		splitApp.addMasterPage(new sap.ui.jsview("MOB24Master", "com.cg.gtm.view.Drop3_MOB24.MOB24Master"), true);
		splitApp.addMasterPage(new sap.ui.jsview("MOB24MasterTwo", "com.cg.gtm.view.Drop3_MOB24.MOB24MasterTwo"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB24Empty", "com.cg.gtm.view.Drop3_MOB24.MOB24Empty"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB24Detail", "com.cg.gtm.view.Drop3_MOB24.MOB24Detail"));

		return splitApp;
		
	}

});