sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.Mob24MatBlank", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.Mob24MatBlank
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.Mob24MatBlank";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.Mob24MatBlank
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
 		return new sap.m.Page({
			title: "",
			showHeader: true,
			content: [
			
			],
			showFooter: false,
		});
	}

});