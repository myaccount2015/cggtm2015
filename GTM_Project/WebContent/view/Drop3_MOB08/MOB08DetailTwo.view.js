sap.ui.jsview("com.cg.gtm.view.Drop3_MOB08.MOB08DetailTwo", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf drop3mockups.MOB08.MOB08DetailTwo
     */
    getControllerName: function() {
        return "com.cg.gtm.view.Drop3_MOB08.MOB08DetailTwo";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf drop3mockups.MOB08.MOB08DetailTwo
     */
    createContent: function(oController) {
        return new sap.m.Page({
            title: "{i18n>MOB08DetailTwoTitle}",
            showNavButton: true,
            navButtonPress: oController.handleNavButtonPress,
            content: [
				new sap.m.ObjectHeader("MOB08_AssetObjHeadStatus",{
					intro: "800001-811001-CABN-D",
					title: "Tinted Windscreen",
					number: "3002605",
					attributes: [
						new sap.m.ObjectAttribute({
							title: "{i18n>MOB08PositionObjectAttributeTitle}",
							text: "2"
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
									id: "MOB08FormTwo",
								    layout: "ResponsiveGridLayout",
								    editable: true,
								    emptySpanL: 6,
				                    emptySpanM: 6,
				                    breakpointM: 1000,
								    content: [
								        new sap.m.Label({
								            text: "{i18n>MOB08SelectStatusText}",
								            design: "Bold"
								        }),
								        new sap.ui.layout.VerticalLayout(/*{
								        	content: [
												new sap.m.RadioButton({
													groupName: "userStatus",
													text: "{i18n>MOB08InServiceText}"
												}),
												new sap.m.RadioButton({
													groupName: "userStatus",
													text: "{i18n>MOB08OutOfServiceText}"
												}),
												new sap.m.RadioButton({
													groupName: "userStatus",
													text: "{i18n>MOB08DisposedText}"
												}),
												new sap.m.RadioButton({
													groupName: "userStatus",
													text: "{i18n>MOB08SpecialToolRequiredText}"
												}),
												new sap.m.RadioButton({
													groupName: "userStatus",
													text: "{i18n>MOB08CustomerSuppliedPartText}"
												})
								        	]
								        }*/),
								        
								        
								    ]
								})
							]
                        })
                    ]
				})
            ],
            footer: new sap.m.Toolbar()
        });
    }
});