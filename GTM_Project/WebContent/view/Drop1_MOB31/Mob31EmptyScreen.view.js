sap.ui.jsview("com.cg.gtm.view.Drop1_MOB31.Mob31EmptyScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob31documentdisplay.Mob31EmptyScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB31.Mob31EmptyScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob31documentdisplay.Mob31EmptyScreen
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: " ",
			content: [
			
			]
		});
	}

});