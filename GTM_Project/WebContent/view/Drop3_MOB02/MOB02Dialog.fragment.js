sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB02.MOB02Dialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB02.MOB02Dialog
	 */
	createContent: function (oController) {
		return new sap.m.SelectDialog({
			liveChange: oController.handleDialogSearch,
			confirm: oController.handleDialogConfirm,
			cancel: oController.handleDialogCancel,
			items: {
				path: "/results",
				template: new sap.m.StandardListItem({
					title: "{Code}"
				})
			}
		});
	}

});