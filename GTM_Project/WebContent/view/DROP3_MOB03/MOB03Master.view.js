sap.ui.jsview("com.cg.gtm.view.DROP3_MOB03.MOB03Master", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB03.MOB03Master
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.DROP3_MOB03.MOB03Master";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03Master
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			id : "MOB03MasterPage",
			title: "{i18n>MOB03MasterTitle}",
			showNavButton: true,
			navButtonTap : oController.handleNavButtonPress,
			//navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.List({
					items: [
						new sap.m.ObjectListItem({
							id: "mob03a",
							type: "Active",
							title: "{i18n>MOB03MasterOpenJobs}",
							icon: "sap-icon://notification",
							//counter: 10,
							press: oController.handleOpenJobsListItemPress
						}),
						new sap.m.ObjectListItem({
							id: "mob03c",
							type: "Active",
							title: "{i18n>MOB03MasterCompletedJobs}",
							icon: "sap-icon://complete",
							//counter: 10,
							press: oController.handleClosedJobsListItemPress
						})
					]
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});