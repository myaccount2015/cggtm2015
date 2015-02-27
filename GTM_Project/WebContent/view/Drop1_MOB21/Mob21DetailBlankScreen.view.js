sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21DetailBlankScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop1_MOB21.Mob21DetailBlankScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21DetailBlankScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop1_MOB21.Mob21DetailBlankScreen
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "",
			content: [
			
			]
		});
	}

});