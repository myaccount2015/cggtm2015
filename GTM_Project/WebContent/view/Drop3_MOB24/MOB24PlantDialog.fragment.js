sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB24.MOB24PlantDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24PlantDialog
	 */
	createContent: function (oController) {
		return new sap.m.SelectDialog({
			liveChange: oController.handlePlantDialogSearch,
			confirm: [oController.handlePlantDialogConfirm, oController],
			cancel: oController.handlePlantDialogCancel,
			items: {
				path: "/results",
				template: new sap.m.StandardListItem({
					title: "{PlantId}",
					info: "{PlantName}"
				})
			}
		});
	}

});