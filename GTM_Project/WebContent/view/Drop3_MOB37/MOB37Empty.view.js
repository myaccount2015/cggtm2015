sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Empty", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop3_MOB37.MOB37Empty
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Empty";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop3_MOB37.MOB37Empty
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});