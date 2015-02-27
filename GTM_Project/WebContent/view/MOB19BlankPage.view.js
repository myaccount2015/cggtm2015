sap.ui.jsview("com.cg.gtm.view.MOB19BlankPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB19BlankPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB19BlankPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB19BlankPage
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "",
			content: [
			
			]
		});
	}

});