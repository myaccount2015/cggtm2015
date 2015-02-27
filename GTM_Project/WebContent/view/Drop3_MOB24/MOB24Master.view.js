sap.ui.jsview("com.cg.gtm.view.Drop3_MOB24.MOB24Master", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB24.MOB24Master
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB24.MOB24Master";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24Master
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB24MasterTitle}",
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
							text: "{i18n>MOB24PlantLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24PlantInput",
							name: "Plant",
							showValueHelp: true,
							valueHelpOnly: true,
							valueHelpRequest: [oController.handleValueHelp, oController]
						}),
						new sap.m.Label({
							text: "{i18n>MOB24MaterialDescriptionLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24PlantInputDesc",

						}),
						new sap.m.Label({
							text: "{i18n>MOB24MaterialGroupLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24MatGrp",

						}),
						new sap.m.Label({
							text: "{i18n>MOB24ExternalMaterialGroupLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24ExtMatgrp",

						}),
						new sap.m.Label({
							text: "{i18n>MOB24ManufacturerPartNumberLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24ManuNum",

						}),
						new sap.m.Label({
							text: "{i18n>MOB24VendorNumberLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24VenNum",

						}),
						new sap.m.Label({
							text: "{i18n>MOB24VendorPartNumberLabel}",
							design: "Bold"
						}),
						new sap.m.Input({
							id: "MOB24VenPart",

						})
					]
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						text: "{i18n>MOB24SearchButton}",
						icon: "sap-icon://search",
						type: "Emphasized",
						press: [oController.handleSearchButtonPress, oController]
					})
				]
			})
		});
	}

});