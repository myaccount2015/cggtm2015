sap.ui.jsview("com.cg.gtm.view.Drop3_MOB07.MOB07Detail", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB07.MOB07Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB07.MOB07Detail";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB07IconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB07.MOB07Detail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			id : "MOB07DETPAGE",
			title: "{i18n>MOB07DetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					id : "MOB07OBJHDR",
					intro: "{Floc}",
					title: "{/Eqktx}",
					number: "{/Equnr}"
				}),
				new sap.m.IconTabBar({
					id: "MOB07IconTabBar",
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
										new sap.m.Label({
											text: "{i18n>MOB07DescriptionLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07ASTDESC",
											text: "{assets>Pltxt}"
										}),
										new sap.m.Label({
											text: "{i18n>MOB07ManufacturerLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											
											id : "MOB07ASTMNFR",
											//text: "Kasado" // TODO: Bind data
										}),
										new sap.m.Label({
											text: "{i18n>MOB07ManufacturerPartNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07ASTMNFRPRTNUM",
											//text: "0257368997" // TODO: Bind data
										}),
										new sap.m.Label({
											text: "{i18n>MOB07ModelLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07ASTMNFRMODNUM",
											//text: "A-YU7" // TODO: Bind data
										}),
										new sap.m.Label({
											text: "{i18n>MOB07SerialNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07ASTSRNUM"
											//text: "832846876482686874" // TODO: Bind data
										}),
										
										new sap.m.Label({
											text: "Material Number",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07MATNUM"
											//text: "832846876482686874" // TODO: Bind data
										}),
										new sap.m.Label({
											text: "Object Type",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07OBJTYP"
											//text: "832846876482686874" // TODO: Bind data
										}),

										new sap.m.Label({
											text: "Start Up Date",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07SUD"
											//text: "832846876482686874" // TODO: Bind data
										}), 
										new sap.m.Label({
											text: "Planner Type",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07OPLNR"
											//text: "832846876482686874" // TODO: Bind data
										}),
										
										new sap.m.Label({
											text: "Work Center",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07WC"
											//text: "832846876482686874" // TODO: Bind data
										}),
										
										new sap.m.Label({
											text: "Vendor Warranty from",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB07VW"
											//text: "832846876482686874" // TODO: Bind data
										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Documents",
							icon: "sap-icon://documents",
							content: [
								new sap.m.List({
									id: "MOB07DocList",
									mode : sap.m.ListMode.SingleSelectMaster,
									select : [oController.handleComponentDocListItemPress, oController],
									noDataText: "{i18n>MOB03NoDocumentsData}",
									items: {
										path: "/results",
										template: new sap.m.ObjectListItem({
											title :"{Wsapplication}"+"\n"+"{Documentnumber}",
											number:"{Documentpart}",
											numberUnit:"{Documentversion}",
											attributes:[
											            new sap.m.ObjectAttribute({
											            	text:"{DocDescription}"
											           })
											           ],
											firstStatus:
												       new sap.m.ObjectStatus({
											            	   	text: "{Description}"
												        }),
										})
									}
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
						text: "{i18n>MOB07ChangeAssetButton}",
						press: oController.handleChangeAssetButtonPress
					}),
					new sap.m.Button({
						id : "MOB07USEAST",
						text: "{i18n>MOB07UseAssetButton}",
						type: "Emphasized",
						press: oController.handleUseAssetButtonPress
					})
				]
			})
		});
	}

});