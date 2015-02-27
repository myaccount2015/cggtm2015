sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30Blank", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB30.Mob30Blank
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30Blank";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB30.Mob30Blank
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			//title: "Title",
			content: [
			
			]
		});
	}

});