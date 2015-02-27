sap.ui.jsview("com.cg.gtm.view.Drop3_MOB07.MOB07MasterTwo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB07.MOB07MasterTwo
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB07.MOB07MasterTwo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB07.MOB07MasterTwo
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB07MasterTwoTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.List({
					id: "MOB07AssetList",
					mode: "SingleSelectMaster",
					selectionChange: oController.handleListItemSelect,
					infoToolbar: new sap.m.Toolbar({
						content: new sap.m.Label({
							text: "10 results"
						})
					}),
					items: {
						path: "/results",
						template: new sap.m.ObjectListItem({
							/*type: "Active",
							intro: "{Tplnr}",
							title: "{Description}",
							number: "{EquipmentNumber}",*/
							
							type: "Active",
							intro: "{Floc}",
							title: "{Eqktx}",
							number: "{Equnr}"
							
							//press: oController.handleListItemPress
						})
					}
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});