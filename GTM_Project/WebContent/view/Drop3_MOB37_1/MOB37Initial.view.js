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

		
		
	//	var masterPage = sap.ui.view({id:"idMOB00masterPage", viewName:"com.cg.gtm.view.DROP1_MOB00.MOB00MasterView", type:sap.ui.core.mvc.ViewType.JS});
	//	var detailPage= sap.ui.view({id: "idMOB00detailPage",viewName: "com.cg.gtm.view.DROP1_MOB00.MOB00DetailView", type:sap.ui.core.mvc.ViewType.JS})
	
		var splitApp = new sap.m.SplitApp({
			id: "MOB37SplitApp",
			mode: "StretchCompressMode",
			//backButtonNavigation:function(){splitApp.backMaster()},
		});
		
		
		//var tools = new sap.ui.model.json.JSONModel("com.cg.gtm.view.Drop3_MOB37/data/tools.json");
		//splitApp.setModel(tools, "tools");

		splitApp.addMasterPage(new sap.ui.jsview("MOB37Master", "com.cg.gtm.view.Drop3_MOB37.MOB37Master"), true);
		//splitApp.addDetailPage(new sap.ui.jsview("MOB37Master", "com.cg.gtm.view.Drop3_MOB37.MOB37Master"), true);
		
		splitApp.addMasterPage(new sap.ui.jsview("MOB37MasterTwo", "com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB37Empty", "com.cg.gtm.view.Drop3_MOB37.Mob37Empty"));
		splitApp.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"),false);
		
	//	splitApp.addDetailPage(new sap.ui.jsview("MOB37Empty", "drop3mockups.Empty"));


		
		return splitApp;

	}

});