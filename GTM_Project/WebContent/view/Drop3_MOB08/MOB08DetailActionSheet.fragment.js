sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB08.MOB08DetailActionSheet", {

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf drop3mockups.MOB08.MOB08DetailActionSheet
     */
    createContent: function(oController) {
        return new sap.m.ActionSheet({
        	placement: "Top",
        	buttons: [
        	    new sap.m.Button({
        	    	text: "{i18n>MOB08DetailActionSheetClassificationButtonText}",
        	    	icon: "sap-icon://tag",
        	    	press: oController.handleClassificationButtonPress
        	    }),
        	    new sap.m.Button({
        	    	text: "{i18n>MOB08DetailActionSheetMeasurementButtonText}",
        	    	icon: "sap-icon://measuring-point",
        	    	press: oController.handleMeasurementButtonPress
        	    }),
        	    new sap.m.Button({
        	    	text: "{i18n>MOB08DetailActionSheetUserStatusButtonText}",
        	    	icon: "sap-icon://employee",
        	    	press: oController.handleUserStatusButtonPress
        	    })
            ]
        });
    }

});