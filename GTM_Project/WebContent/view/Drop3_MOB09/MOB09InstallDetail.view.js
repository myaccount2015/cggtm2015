jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.Drop3_MOB09.MOB09InstallDetail", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB09.MOB09InstallDetail
	 */
	getControllerName: function() {
		return "com.cg.gtm.view.Drop3_MOB09.MOB09InstallDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB09.MOB09InstallDetail
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "{i18n>MOB09InstallDetailTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.ObjectHeader({
					id : "INSASTHDR",
					title: "{OpearionText}",
					number: "{OrderNo} / {ActivityNo}",
					attributes: [
						new sap.m.ObjectAttribute({
							id : "INSASTATR1",
							title: "Priority",
							text: {
								path: "Priority",
								formatter: com.cg.gtm.view.Drop3Util.Formatter.priorityText
							}
						}),
						new sap.m.ObjectAttribute({
							id : "INSASTSD",
							title: "Start Date",
							text: "{EarliestStartDate}"
						}),
						new sap.m.ObjectAttribute({
							id : "INSASTFD",
							title: "Finish Date",
							text: "{EarliestFinishDate}"
						})
					],
					statuses: [
						new sap.m.ObjectStatus({
							id : "INSASTST1",
							text: "{StandardTextKey}"
						}),
						new sap.m.ObjectStatus({
							
								id : "INSASTST2",
								
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
											visible:false
										}),
										new sap.m.Text({
											//text: "80003245 Bogie Assembly"
											id:"MOB09AssetText",
											visible:false
										}),
										new sap.m.Label({
											text: "{i18n>MOB09LocationLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "395015 External Body"
											id:"MOB09LocationText",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09MaterialNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "520163"
											id:"MOB09MaterialNumberText",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09MaterialDescriptionLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "Bogie Assembly",
											id:"MOB09MaterialDescriptionText",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09ReplacementSerialLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "800003457"
											id:"MOB09ReplacementSerialText",
										}),
										new sap.m.Label({
											text: "{i18n>MOB09ModelNumberLabel}",
											visible:false,
											design: "Bold"
										}),
										new sap.m.Text({
											//text: "22323"
											id:"MOB09ModelNumberText",
											visible:false
										}),
										new sap.m.Label({
											text: "{i18n>MOB09PositionLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "MOB09InstallPositionInput",
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
						press: oController.handleChangeInstalledLocationButtonPress
					}),
					new sap.m.Button({
						text: "{i18n>MOB09InstallButton}",
						type: "Emphasized",
						press: oController.handleInstallButtonPress
					})
				]
			})
		});

	}

});