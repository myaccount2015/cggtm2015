sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37BusyDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37BusyDialog
	 */
	createContent: function (oController) {
		return new sap.m.BusyDialog({
			title: "{i18n>MOB37BusyDialogTitle}",
			text: "{i18n>MOB37BusyDialogText}",
			customIconWidth: "1rem",
			customIconHeight: "1rem",
			showCancelButton: true,
			close: oController.handleBusyDialogClose
		});
	}

});