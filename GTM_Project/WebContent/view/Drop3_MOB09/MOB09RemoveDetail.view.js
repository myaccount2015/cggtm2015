jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.Drop3_MOB09.MOB09RemoveDetail", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB09.MOB09RemoveDetail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB09.MOB09RemoveDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB09.MOB09RemoveDetail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB09RemoveDetailTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.ObjectHeader({
					id : "REMASTHDR",
					title: "{OpearionText}",
					number: "{OrderNo} / {ActivityNo}",
					attributes: [
						new sap.m.ObjectAttribute({
							id : "REMASTATR1",
							title: "Priority",
							text: {
								path: "Priority",
								formatter: com.cg.gtm.view.Drop3Util.Formatter.priorityText
							}
						}),
						new sap.m.ObjectAttribute({
							id : "REMASTSD",
							title: "Start Date",
							text: "{EarliestStartDate}"
						}),
						new sap.m.ObjectAttribute({
							id : "REMASTFD",
							title: "Finish Date",
							text: "{EarliestFinishDate}"
						})
					],
					statuses: [
						new sap.m.ObjectStatus({
							id : "REMASTST1",
							text: "{StandardTextKey}"
						}),
						new sap.m.ObjectStatus({
							
								id : "REMASTST2",
								
						})
					]
				}),
				new sap.m.IconTabBar({
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							text: "Detail",
							icon: "sap-icon://request",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB09AssetLabel}",
											design: "Bold",
											visible: false
											
										}),
										new sap.m.Text({
											//text: "80003245 Bogie Assembly"
											id:"MOB09_AssetText_Remove",
											visible: false
										}),
										new sap.m.Label({
											text: "{i18n>MOB09LocationLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "395015 External Body"
											id:"MOB09_Location_Remove",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09MaterialNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
										//	text: "12345",
											id:"MOB09_MaterialNumber_Remove",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09MaterialDescriptionLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "Underframe and Bogies"
											id:"MOB09_MaterialDescription_Remove",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09ManufacturerSerialNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB09ManufacturerSerialNumberInput",
											name: "ManufacturerSerialNumber",
											showValueHelp: true,
											valueHelpRequest: oController.handleValueHelp
										}),
										new sap.m.Label({
											text: "{i18n>MOB09PositionLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB09RemovePositionInput",
											name: "Position",
											showValueHelp: true,
											valueHelpRequest: oController.handleValueHelp
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
						text: "{i18n>MOB09ChangeInstalledLocationButton}",
						press: [oController.handleChangeInstalledLocationButtonPress, oController]
					}),
					new sap.m.Button({
						text: "{i18n>MOB09RemoveButton}",
						type: "Emphasized",
						press: [oController.handleRemoveButtonPress, oController]
					})
				]
			})
		});

	}

});