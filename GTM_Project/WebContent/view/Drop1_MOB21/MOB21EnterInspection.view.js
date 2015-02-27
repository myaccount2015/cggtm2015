sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21EnterInspection", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21EnterInspection
	*/ 
	getControllerName : function() {
		return "view.Drop1_MOB21.MOB21EnterInspection";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21EnterInspection
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}
 
});