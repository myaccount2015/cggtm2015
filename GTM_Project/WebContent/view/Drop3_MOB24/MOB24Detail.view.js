sap.ui.jsview("com.cg.gtm.view.Drop3_MOB24.MOB24Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB24.MOB24Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB24.MOB24Detail";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB24IconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24Detail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB24DetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					title: "{components>Description}",
					number: "{components>Materialno}",
					attributes: [
						new sap.m.ObjectAttribute({
							title: "{i18n>MOB24PlantObjectAttributeTitle}",
							text: "{components>PlantName}"
						})
					]
				}),
				new sap.m.IconTabBar({
					id: "MOB24IconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Detail",
							icon: "sap-icon://activity-items",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									labelSpanL: 3,
									labelSpanM: 3,
									breakpointM: 1000,
									content: [
									          
										new sap.m.Text({
											text: "",
											id : "MOB24SELMAT",
											visible : false 
										}),
										new sap.m.Label({
											text: "{i18n>MOB24ManufacturerNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>Manufacturer}",
											id : "MOB24DETMANU"
										}),
										new sap.m.Label({
											text: "{i18n>MOB24ManufacturerNameLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>ManufacturerName}",
											id : "MOB24DETMANUNAME"
										}),
										new sap.m.Label({
											text: "{i18n>MOB24ManufacturerPartNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>ManufacturerPartNumber}",
											id : "MOB24DETMANUPART"
										}),
										new sap.m.Label({
											text: "{i18n>MOB24VendorLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>Vendor}",
											id : "MOB24DETVEN"
										}),
										new sap.m.Label({
											text: "{i18n>MOB24VendorNameLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>VendorName}",
											id : "MOB24DETVENAME"
										}),
										new sap.m.Label({
											text: "{i18n>MOB24VendorPartNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{components>VendorPartNumber}",
											id : "MOB24DETVENPART"
										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Images",
							icon: "sap-icon://camera",
							content: [
								new sap.m.List({
									headerToolbar: new sap.m.Toolbar({
										content: [
											new sap.m.ToolbarSpacer(),
											new sap.m.Button({
												text: "Add",
												icon: "sap-icon://add",
												type: "Emphasized"
											})
										]
									}),
									items: [
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo1.jpeg",
											description: "Taken on: 10/01/14",
											icon: "sap-icon://attachment-photo"
										}),
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo2.png",
											description: "Taken on: 15/02/14",
											icon: "sap-icon://attachment-photo"
										}),
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo3.jpeg",
											description: "Taken on: 01/12/14",
											icon: "sap-icon://attachment-photo"
										})
									]
								})
							]
						})
					]
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						text: "{i18n>MOB24UseMaterialButton}",
						type: "Emphasized",
						press: oController.handleUseMaterialButtonPress
					})
				]
			})
		});
	}

});