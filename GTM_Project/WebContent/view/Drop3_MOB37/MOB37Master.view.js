sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Master", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB37.MOB37Master
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Master";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37Master
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB37MasterTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.ui.layout.form.SimpleForm({
					layout: "ResponsiveGridLayout",
					editable: true,
					emptySpanL: 6,
					emptySpanM: 6,
					breakpointM: 1000,
					content: [
						new sap.m.Label({
							text: "{i18n>MOB37DepotLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB37DepotInput",
							name: "Depot",
							liveChange: oController.handleDepotInputLiveChange,
							showValueHelp: true,
							//valueHelpOnly: true,
							valueHelpRequest: [oController.handleValueHelp, oController]
						}),
						new sap.m.Label({
							text: "{i18n>MOB37ToolGroupLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB37ToolGroupInput",
							name: "Tool Group",
							showValueHelp: true,
							valueHelpRequest: [oController.handleValueHelp,oController]
						}),
						new sap.m.Label({
							text: "{i18n>MOB37ToolDescriptionLabel}",
							design: "Bold"
						}),
						new sap.m.Input({

						})
					]
				})
				
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						text: "{i18n>MOB37SearchButton}",
						icon: "sap-icon://search",
						type: "Emphasized",
						press: [oController.handleSearchButtonPress, oController]
					})
				]
			})
		});
	}

});