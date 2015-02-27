jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.Drop3_MOB02.MOB02Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB02.MOB02Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB02.MOB02Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB02.MOB02Detail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB02DetailTitle}",
			showNavButton: true,
			navButtonTap: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.ObjectHeader({
					id : "MOB02OBJHDR",
					title: "{OpearionText}",
					number: "{OrderNo} / {ActivityNo}",
					attributes: [
						new sap.m.ObjectAttribute({
							id : "MOB02OBJATRPRI",
							title: "Priority",
							text: "{Priority}"
						}),
						new sap.m.ObjectAttribute({
							id : "MOB02OBJSD",
							title: "Start Date",
							text: "{EarliestStartDate}"
						}),
						new sap.m.ObjectAttribute({
							id : "MOB02OBJFD",
							title: "Finish Date",
							text: "{EarliestFinishDate}"
						})
					],
					statuses: [
						new sap.m.ObjectStatus({
							id : "MOB02OBJST1",
							text: "{StandardTextKey}"
						}),
						new sap.m.ObjectStatus({
							
								id : "MOB02OBJST2",
								
						
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
									id: "MOB02Form",
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB02Description}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "VM10003 Underframe and Bogies, Zonal Survey"
										}),
//										new sap.m.Label({
//											text: "{i18n>MOB02CompletionEstimate}",
//											design: "Bold"
//										}),
//										new sap.m.Text({
//											text: "23/11/2014 12:45hrs"
//										}),
										new sap.m.Label({
											text: "{i18n>MOB02ReasonCode}",
											design: "Bold"
										}),
										new sap.m.Input({
											id: "reasonCodeInput",
											name: "Reason Code",
											showValueHelp: true,
											valueHelpOnly: true,
											valueHelpRequest: [oController.handleValueHelp, oController]
										}),
										new sap.m.Label({
											text: "{i18n>MOB02ExtendBy}",
											design: "Bold"
										}),
										new sap.ui.layout.Grid({
											defaultSpan: "L6 M6 S6",
											vSpacing: 0,
											content: [
												new sap.m.ToggleButton({
													text: "30 Mins",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController]
												}),
												new sap.m.ToggleButton({
													text: "1 Hour",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController]
												}),
												new sap.m.ToggleButton({
													text: "1.5 Hours",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController],
													layoutData: new sap.ui.layout.GridData({
														linebreakL: true,
														linebreakM: true,
														linebreakS: true,
													})
												}),
												new sap.m.ToggleButton({
													text: "2 Hours",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController]
												}),
												new sap.m.ToggleButton({
													text: "3 Hours",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController],
													layoutData: new sap.ui.layout.GridData({
														linebreakL: true,
														linebreakM: true,
														linebreakS: true,
													})
												}),
												new sap.m.ToggleButton({
													text: "4 Hours",
													width: "100%",
													press: [oController.handleToggleButtonPress, oController]
												})
											]
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
						text: "{i18n>MOB02SubmitButtonText}",
						type: "Emphasized",
						press: oController.handleSubmitButtonPress
					})
				]
			})
		});
	}
});