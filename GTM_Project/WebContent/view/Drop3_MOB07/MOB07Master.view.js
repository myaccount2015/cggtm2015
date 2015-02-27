sap.ui.jsview("com.cg.gtm.view.Drop3_MOB07.MOB07Master", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB07.MOB07Master
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB07.MOB07Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB07.MOB07Master
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB07MasterTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			subHeader: new sap.m.Bar({
				contentMiddle: new sap.m.SegmentedButton({
					id: "MOB07SegmentedButton",
					width: "100%",
					buttons: [
						new sap.m.Button("MOB07TrainButton",{
							text: "{i18n>MOB07TrainButton}",
							press: oController.handleTrainButtonPress
						}),
						new sap.m.Button("MOB07DepotButton",{
							text: "Depot / Area",
							press: oController.handleDepotButtonPress
						})
					]
				})
			}),
			content: [
				new sap.ui.layout.VerticalLayout({
					id: "MOB07TrainForm",
					width: "100%",
					content: [
						new sap.ui.layout.form.SimpleForm({
							layout: "ResponsiveGridLayout",
							editable: true,
							emptySpanL: 6,
							emptySpanM: 6,
							breakpointM: 1000,
							content: [
								new sap.m.Label({
									text: "{i18n>MOB07FleetLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07FleetInput",
									name: "Fleet",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpFleet, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB07TrainLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07TrainInput",
									name: "Train",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpTrain, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB07CarLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07CarInput",
									name: "Car",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpCar, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB07ZoneLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07ZoneInput",
									name: "Zone",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpZone, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB07PrimarySystemLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07PrimarySystemInput",
									name: "Primary System",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpPrimary, oController]
								}),
								/*new sap.m.Label({
									text: "{i18n>MOB07IncludeEquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.CheckBox({
									selected: true
								})*/
								new sap.m.Label({
									text: "{i18n>MOB01EquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									//showValueHelp: true,
									id : "MOB07EQT",
									type: "Number",
									//valueHelpRequest: oController.handleEquipmentValueHelpT,
									layoutData: new sap.ui.layout.GridData({
										span: "L7 M7 S7"
									})
								}),
								new sap.m.Button({
									text: "Scan",
									icon: "sap-icon://bar-code",
									type: "Reject",
									layoutData: new sap.ui.layout.GridData({
										span: "L5 M5 S5"
									}),

									 press: function () {
									    	varScan = "MOB07EQT";
									    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
									      },
							      
								})
							]
						})
					]
				}),
				new sap.ui.layout.VerticalLayout({
					id: "MOB07DepotForm",
					width: "100%",
					visible: false,
					content: [
						new sap.ui.layout.form.SimpleForm({
							layout: "ResponsiveGridLayout",
							editable: true,
							emptySpanL: 6,
							emptySpanM: 6,
							breakpointM: 1000,
							content: [
								new sap.m.Label({
									text: "Depot / Site *",
									design: "Bold"
								}),
								new sap.m.Input({
									id: "MOB07DepotInput",
									name: "Depot / Site ",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpDepot, oController]
								}),
								new sap.m.Label({
									text: "Area",
									design: "Bold",
								}),
								new sap.m.Input({
									id: "MOB07DepotAreaInput",
									name: "Area ",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpDepotArea, oController]
								}),
								/*new sap.m.Label({
									text: "{i18n>MOB07IncludeEquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.CheckBox({
									selected: true
								})*/
								
								new sap.m.Label({
									text: "{i18n>MOB01EquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									//showValueHelp: true,
									id : "MOB07EQD",
									type: "Number",
									//valueHelpRequest: oController.handleEquipmentValueHelpT,
									layoutData: new sap.ui.layout.GridData({
										span: "L7 M7 S7"
									})
								}),
								new sap.m.Button({
									text: "Scan",
									icon: "sap-icon://bar-code",
									type: "Reject",
									layoutData: new sap.ui.layout.GridData({
										span: "L5 M5 S5"
									}),

									 press: function () {
									    	varScan = "MOB07EQD";
									    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
									      },
							      
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
						text: "{i18n>MOB07SearchButton}",
						icon: "sap-icon://search",
						type: "Emphasized",
						press: [oController.handleSearchButtonPress, oController]
					})
				]
			})
		});
	}

});