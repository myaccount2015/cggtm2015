sap.ui.jsview("com.cg.gtm.view.Mob26BlankScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26BlankScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26BlankScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26BlankScreen
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var lblBlank = new sap.m.Label({
			text : "Scan or Enter a transfer order to view further details"
					
		});
		
var containerList = new sap.m.FlexBox({
			
			items: [
lblBlank
			      
			       ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Center"
		});
 		return new sap.m.Page({
			title: "",
			content: [
			          containerList
			],
			enableScrolling: false,
			showFooter: true,
			showHeader: true,
			footer: new sap.m.Bar({
		        contentRight: []
			}).addStyleClass("footer")
		});
	}

});