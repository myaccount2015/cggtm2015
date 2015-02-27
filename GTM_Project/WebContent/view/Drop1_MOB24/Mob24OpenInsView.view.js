sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.Mob24OpenInsView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop1_MOB24.Mob24OpenInsView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.Mob24OpenInsView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop1_MOB24.Mob24OpenInsView
	*/ 
	createContent : function(oController) {
		
		
		
		
		
		
 		return new sap.m.Page({
 			//id: "Mob24-Created-Ins-page",
 			id : "Mob22-SecondScreen-BackNavButton",
			title: "Created Inspection",
			content: [
			
			],
			showNavButton: true,
		    navButtonTap:function(){
		    	g_MobileNavigationId = "Mob22-BackNavButton";
		    	sap.ui.getCore().byId("myApp").to("idMOB22InitView");
		     }
			
			
			
			
		});
	}

});