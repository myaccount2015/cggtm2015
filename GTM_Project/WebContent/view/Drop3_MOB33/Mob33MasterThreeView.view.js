sap.ui.jsview("com.cg.gtm.view.Drop3_MOB33.Mob33MasterThreeView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop3_MOB33.Mob33MasterThreeView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop3_MOB33.Mob33MasterThreeView
	*/ 
	createContent : function(oController) {
		return new sap.m.Page({
			title: "{i18n>MOB33MasterTwoTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				//icon: "sap-icon://sys-help",
				//press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.List({
					id: "MOB33ThirdMAsterResultsList",
					mode: "SingleSelectMaster",
					selectionChange: oController.handleListItemSelect,
					infoToolbar: new sap.m.Toolbar({
						content: new sap.m.Label({
							text: "12 results"
						})
					}),
					items: {
						path: "/results",
						template: new sap.m.ObjectListItem({
							type: "Active",
							intro: "{Floc}",
							title: "{Eqktx}",
							number: "{Equnr}"
						})
					}
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});