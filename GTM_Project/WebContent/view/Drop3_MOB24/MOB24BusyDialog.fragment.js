sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB24.MOB24BusyDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24BusyDialog
	 */
	createContent: function (oController) {
		return new sap.m.BusyDialog({
			title: "{i18n>MOB24BusyDialogTitle}",
			text: "{i18n>MOB24BusyDialogText}",
			customIconWidth: "1rem",
			customIconHeight: "1rem",
			showCancelButton: true,
			close: oController.handleBusyDialogClose
		});
	}

});