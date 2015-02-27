sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ChangeStatusActions", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03ChangeStatusActions
	 */
	createContent: function (oController) {
		return new sap.m.ActionSheet({
			placement: "Top",
			buttons: [
				new sap.m.Button({
					id: "MOB03ACPT",
					visible: false,
					text: "Accept",
					icon: "sap-icon://accept",
					press: oController.handleAcceptButtonPress
				}),
				new sap.m.Button({
					id: "MOB03RJCT",
					visible: false,
					text: "Reject",
					icon: "sap-icon://decline",
					press: oController.handleRejectButtonPress
				}),
				new sap.m.Button({
					id: "MOB03HOLD",
					visible: false,
					text: "Hold",
					icon: "sap-icon://media-pause",
					press: oController.handleHoldButtonPress
				}),
				new sap.m.Button({
					id: "MOB03RES",
					visible: false,
					text: "Resume",
					icon: "sap-icon://media-play",
					press: oController.handleResumeButtonPress
				}),
				new sap.m.Button({
					id: "MOB03COMP",
					visible: false,
					text: "Complete",
					icon: "sap-icon://complete",
					press: oController.handleCompleteButtonPress
				}),
				new sap.m.Button({
					id: "MOB03CAN",
					visible: false,
					text: "Cancel",
					icon: "sap-icon://decline",
					press: oController.handleCancelJobButtonPress
				})
			]
		});
	}

});