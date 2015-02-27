sap.ui.jsview("com.cg.gtm.view.Drop3_MOB33.MOB33Detail", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB33.MOB33Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB33.MOB33Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB33.MOB33Detail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB33DetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					id : "MOB33OBJHDR",
					title: "{measurements>MeasPtTxt}",
					attributes: [
					    new sap.m.ObjectAttribute({
					    	id : "MOB33OBJATR1",
					    	title: "{i18n>MOB33TrainSetObjectAttribute}",
					    	text: "{measurements>floc}"
					    })
					],
					statuses: [
					    new sap.m.ObjectStatus({
					    	id : "MOB33OBJSTA1",
						    text: "{measurements>equnr}"
					    })
					],
				}),
				new sap.m.IconTabBar({
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							text: "Detail",
							icon: "sap-icon://activity-items",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									title: "{i18n>MOB33LastReadingFormTitle}",
									content: [
										new sap.m.Label({
											text: "{i18n>MOB33LastReadingLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB33LR",
											text: "{measurements>MeasReadg}"+"{measurements>MeasPtUnit}"
										}),
										new sap.m.Label({
											
											text: "{i18n>MOB33LastReadingDateLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB33LRD",
											text: "{measurements>ModDate}"+"{measurements>ModTime}"
										})
									]
								}),
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									title: "{i18n>MOB33TodaysReadingFormTitle}",
									content: [
										new sap.m.Label({
											text: "{i18n>MOB33TodaysReadingLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											type: "Number",
											id : "MOB33READING",
											description: "{i18n>MOB33TodaysReadingInputDescription}",
											
										}),
										new sap.m.Label({
											text: "{i18n>MOB33CommentsLabel}",
											design: "Bold"
										}),
										new sap.m.TextArea({
											placeholder: "{i18n>MOB33CommentsPlaceholder}",
											rows: 5,
											id : "MOB33COMMENT"
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
						text: "{i18n>MOB33SubmitButton}",
						type: "Emphasized",
						press: oController.handleSubmitButtonPress
					})
				]
			})
		});
	}

});