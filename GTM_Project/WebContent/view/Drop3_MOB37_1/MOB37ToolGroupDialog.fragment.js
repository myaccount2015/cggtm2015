sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37ToolGroupDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37ToolGroupDialog
	 */
	createContent: function (oController) {
		return new sap.m.SelectDialog({
			liveChange: oController.handleToolGroupDialogSearch,
			confirm: [oController.handleToolGroupDialogConfirm, oController],
			cancel: oController.handleToolGroupDialogCancel,
			items: {
				path: "/results",
				template: new sap.m.StandardListItem({
					title: "{toolGroupName}",
					info: "{toolGroupNumber}"
				})
			}
		});
	}

});