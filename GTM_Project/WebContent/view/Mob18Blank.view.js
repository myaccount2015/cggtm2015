sap.ui.jsview("com.cg.gtm.view.Mob18Blank", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Blank
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Blank";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Blank
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "",
			content: [
			
			]
		});
	}

});