sap.ui.jsview("com.cg.gtm.view.Drop3_MOB01.MOB01Master", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB01.MOB01Master
	 */
	getControllerName: function() {
		return "com.cg.gtm.view.Drop3_MOB01.MOB01Master";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01Master
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			id : "MOB01MasterPage",
			title: "{i18n>MOB01MasterTitle}",
			showNavButton: true,
			navButtonTap: oController.handleNavButtonPress,
			//navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			subHeader: new sap.m.Bar({
				contentMiddle: new sap.m.SegmentedButton({
					id: "MOB01SegmentedButton",
					width: "100%",
					buttons: [
						new sap.m.Button("MOB01SegmentedButtonTrain",{
							text: "Train",
							
							press: oController.handleTrainButtonPress
						}),
						new sap.m.Button({
							text: "Depot/Site",
							press: oController.handleDepotButtonPress
						}),
						new sap.m.Button("MOB01SegmentedButtonList",{
							text: "List",
							press: oController.handleListButtonPress
						})
					]
				})
			}),
			content: [
				new sap.ui.layout.VerticalLayout({
					id: "MOB01TrainForm",
					width: "100%",
					content: [
						new sap.ui.layout.form.SimpleForm({
							layout: "ResponsiveGridLayout",
							content: [
								new sap.m.Label({
									text: "{i18n>MOB01FleetLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01FleetInput",
									valueHelpRequest: [oController.handleValueHelpFleet, oController]
									
								}),
								new sap.m.Label({
									text: "{i18n>MOB01TrainLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01TrainInput",
									valueHelpRequest: [oController.handleValueHelpTrain, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB01CarLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01CarInput",
									valueHelpRequest: [oController.handleValueHelpCar, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB01ZoneLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01ZoneInput",
									valueHelpRequest: [oController.handleValueHelpZone, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB01PrimarySystemLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01PrimarySystemInput",
									valueHelpRequest: [oController.handleValueHelpPrimary, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB01EquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									type: "Number",
									id : "MOB01EQT",
									valueHelpRequest: oController.handleEquipmentValueHelpT,
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
									    	varScan = "MOB01EQT";
									    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
									      },
							      
								})
							]
						})
					]
				}),
				new sap.ui.layout.VerticalLayout({
					id: "MOB01DepotForm",
					width: "100%",
					visible: false,
					content: [
						new sap.ui.layout.form.SimpleForm({
							layout: "ResponsiveGridLayout",
							content: [
								new sap.m.Label({
									text: "Depot / Site *",
									design: "Bold"
								}),
								new sap.m.Input({
									id : "MOB01DepotInput",
									showValueHelp: true,
									valueHelpOnly : true ,
									valueHelpRequest: [oController.handleValueHelpDepot, oController]
								}),
								new sap.m.Label({
									text: "Area",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									valueHelpOnly : true ,
									id : "MOB01AREA",
									valueHelpRequest: [oController.handleValueHelpDepotArea, oController]
								}),
								new sap.m.Label({
									text: "{i18n>MOB01EquipmentLabel}",
									design: "Bold"
								}),
								new sap.m.Input({
									showValueHelp: true,
									type: "Number",
									id : "MOB01EQD",
									valueHelpRequest: oController.handleEquipmentValueHelpD,
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
									    	varScan = "MOB01EQD";
									    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
									      },
								}),
								
								new sap.m.Input({
								id : "MOB01DepotDesc",
								//showValueHelp: true,
								visible : false ,
								valueHelpRequest: [oController.handleValueHelpDepot, oController]
							}),

							]
						})
					]
				}),
				new sap.m.List({
					visible: false,
					id: "MOB01TrainNotificationList",
					headerText: "Train Notifications",
					mode: "SingleSelectMaster",
					selectionChange: oController.handleTrainListItemPress,
					items: {
						path: "/MOB01T",
						template: new sap.m.ObjectListItem({
							type: "Active",
							//title: "{stext}",
							//number: "{Date}",
							number: "{stext}",
							intro : "{Date}",
							//press: oController.handleTrainListItemPress
						})
					}
				}),
				new sap.m.List({
					visible: false,
					id: "MOB01DepotNotificationList",
					headerText: "Depot Notifications",
					mode: "SingleSelectMaster",
					selectionChange: oController.handleDepotListItemPress,
					items: {
						path: "/MOB01D",
						template: new sap.m.ObjectListItem({
							type: "Active",
							number: "{stext}",
							intro: "{Date}",
							//press: oController.handleDepotListItemPress
						})
					}
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						id: "MOB01NextButton",
						text: "{i18n>MOB01NextButton}",
						icon: "sap-icon://feeder-arrow",
						iconFirst: false,
						type: "Emphasized",
						press: oController.handleNextButtonPress
					})
				]
			})
		});
	}

});