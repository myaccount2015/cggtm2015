sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB37.MOB37Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Detail";
	},
	
	onBeforeShow: function() {
		sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37Detail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB37DetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					title: "{tools>Description}",
					number: "{tools>Equipmentno}",
					attributes: [
						new sap.m.ObjectAttribute({
							title: "{i18n>MOB37PlantObjectAttributeTitle}",
							text: "{tools>PlantName}"
						})
					],
					statuses: [
					    new sap.m.ObjectStatus({
					    	icon: {
					    		path: "tools>ToolState",
					    		formatter: com.cg.gtm.view.Drop3Util.Formatter.toolStateIcon
					    	},
					    	state: {
					    		path: "tools>ToolState",
					    		formatter: com.cg.gtm.view.Drop3Util.Formatter.toolValueState
					    	}
					    })
					]
				}),
				new sap.m.IconTabBar({
					id: "MOB37IconTabBar",
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
											text: "{i18n>MOB37ManufacturerLabel}",
											id:"MOB37ManufacturerLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>Manufacturer}",
											id : "MOB37Manufacturer"
										}),
										new sap.m.Label({
											text: "{i18n>MOB37ModelNumberLabel}",
											id : "MOB37ModelNumberLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>ModelNumber}",
											id : "MOB37MOB37ModelNumber",
											
										    
										}),
										new sap.m.Label({
											text: "{i18n>MOB37ManufacturerPartNumberLabel}",
											id:"MOB37ManufacturerPartNumberLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>ManufacturerPartNumber}",
												id:"MOB37ManufacturerPartNumber",	
										}),
										new sap.m.Label({
											text: "{i18n>MOB37ManufacturerSerialNumberLabel}",
											id:"MOB37ManufacturerSerialNumberLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>ManufacturerSerialNumber}",
										    id:"ManufacturerSerialNumber",
										}),
										new sap.m.Label({
											text: "{i18n>MOB37StockTypeLabel}",
											 id:"MOB37StockTypeLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>StockType}",
											 id:"MOB37StockType"
										}),
										new sap.m.Label({
											text: "{i18n>MOB37PlantLabel}",
											 id:"MOB37PlantLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>PlantName}",
												 id:"MOB37PlantName",
										}),
										new sap.m.Label({
											text: "{i18n>MOB37StorageLocationLabel}",
											 id:"MOB37StorageLocationLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>StorageLocation}",
												 id:"MOB37StorageLocation"
										}),
										new sap.m.Label({
											text: "{i18n>MOB37SpecialStockLabel}",
											id:"MOB37SpecialStockLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>SpecialStock}",
											id:"MOB37SpecialStock",
										}),
										new sap.m.Label({
											text: "{i18n>MOB37CustomerLabel}",
											id:"MOB37CustomerLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{tools>Customer}",
											id:"MOB37Customer"
										}),
										
										new sap.m.Label({
											text: "{i18n>MOB37StockLabel}",
											id:"MOB37StockLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "{tools>MOB37StockText}",
											id:"MOB37StockText"
										}),
										
										new sap.m.Label({
											text: "{i18n>MOB37StockDescLabel}",
											id:"MOB37StockDescLabel",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "{tools>MOB37StockDescText}",
											id:"MOB37StockDescText"
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
											/*new sap.m.Button({
												text: "Add",
												icon: "sap-icon://add",
												type: "Emphasized"
											}),*/
											new sap.m.Button({
												id:    "Add_mob37",
												text: "{i18n>MOB37AddToolButton}",
												icon: "sap-icon://add",
												type: "Emphasized",
											//	press: [oController.handleAddToolButtonPress, oController]
											 }),
											
											
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
						id: "MOB37UseToolButton",
						text: "{i18n>MOB37UseToolButton}",
						type: "Emphasized",
						press: oController.handleUseToolButtonPress
					})
				]
			})
		});
	}

});