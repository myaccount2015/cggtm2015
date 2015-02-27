sap.ui.jsview("com.cg.gtm.view.Drop3_MOB07.MOB07Initial", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB07.MOB07Initial
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB07.MOB07Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB07.MOB07Initial
	 */
	createContent: function (oController) {
		
		var splitApp = new sap.m.SplitApp({
			id: "MOB07SplitApp",
			mode: "StretchCompressMode"
		});

		splitApp.addMasterPage(new sap.ui.jsview("MOB07Master", "com.cg.gtm.view.Drop3_MOB07.MOB07Master"), true);
		splitApp.addMasterPage(new sap.ui.jsview("MOB07MasterTwo", "com.cg.gtm.view.Drop3_MOB07.MOB07MasterTwo"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB07Empty", "com.cg.gtm.view.Drop3_MOB07.MOB07Blank"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB07Detail", "com.cg.gtm.view.Drop3_MOB07.MOB07Detail"));
		
		

		return splitApp;
		
	}

});