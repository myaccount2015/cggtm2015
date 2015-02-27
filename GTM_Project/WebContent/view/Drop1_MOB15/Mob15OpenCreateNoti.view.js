sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.Mob15OpenCreateNoti", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop1_MOB15.Mob15OpenCreateNoti
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.Mob15OpenCreateNoti";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop1_MOB15.Mob15OpenCreateNoti
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
 			
 			id:"Mob15-Created-Notification",
			title: "Created Notification",
			content: [
			
			],
			
			
			showNavButton: true,
		    navButtonTap:function(){
		    	g_MobileNavigationId =  "Mob15-BackNavButton";
		    	sap.ui.getCore().byId("myApp").to("idGridSubMenuCreateNoti");
		     },
		     headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				})
 		
			
			
			
			
		});
	}

});