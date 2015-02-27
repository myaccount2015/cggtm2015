jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.DROP3_MOB03.MOB03MasterTwo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB03.MOB03MasterTwo
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.DROP3_MOB03.MOB03MasterTwo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03MasterTwo
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			id: "MOB03MasterTwoPage",
			showNavButton: true,
			navButtonTap: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.List({
					id: "MOB03Master2List",
					mode: "SingleSelectMaster",
					selectionChange: oController.handleListItemSelect,
					items: {
						path: "/results",
						template: new sap.m.ObjectListItem({
							type: "Navigation" , //"Active",
							intro: "{OrderNo} / {ActivityNo}",
							/*title: "{OpearionText}",
							attributes: [
								new sap.m.ObjectAttribute({
									title: "Priority",
									text: {
										path: "Priority",
										formatter: com.cg.gtm.view.Drop3Util.Formatter.priorityText
										
									}
								})
							],*/
							firstStatus: new sap.m.ObjectStatus({
								text: {
									path: "CurrentStatus",
									  formatter: com.cg.gtm.view.Drop3Util.Formatter.statusText
								}
							}),
							press: oController.handleListItemPress
						}),
						sorter: oController.getSorter()
					},
					
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});