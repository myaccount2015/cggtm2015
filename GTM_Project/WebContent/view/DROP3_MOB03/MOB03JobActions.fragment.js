sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03JobActions", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03JobActions
	 */
	createContent: function (oController) {
		return new sap.m.ActionSheet({
			placement: "Top",
			width: "100%",
			buttons: [
				new sap.m.Button({
					text: "{i18n>MOB03CreateFollowOnJobButton}",
					icon: "sap-icon://add",
					press: oController.handleCreateFollowOnJobButtonPress
				}),
				new sap.m.Button({
					text: "{i18n>MOB03ChangeJobDurationButton}",
					icon: "sap-icon://history",
					press: oController.handleChangeJobDurationButtonPress
				}),
				new sap.m.Button({
					text: "{i18n>MOB03SplitJobButton}",
					icon: "sap-icon://journey-change",
					press: oController.handleSplitJobButtonPress
				}),
				new sap.m.Button({
					text: "{i18n>MOB03ChangeAssetButton}",
					icon: "sap-icon://money-bills",
					press: oController.handleAssetChangeButtonPress
				}),
				new sap.m.Button({
					text: "{i18n>MOB03InstallAssetButton}",
					icon: "sap-icon://database",
					press: oController.handleInstallAssetButtonPress
				}),
				new sap.m.Button({
					text: "{i18n>MOB03RemoveAssetButton}",
					icon: "sap-icon://delete",
					press: oController.handleRemoveAssetButtonPress
				})
			]
		});
	}

});