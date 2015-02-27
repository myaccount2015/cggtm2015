sap.ui.jsview("com.cg.gtm.view.MOB20BlankPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB20BlankPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB20BlankPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB20BlankPage
	*/ 
	createContent : function(oController) {
		
		var lblText = new sap.m.Label({
			text : "Select from the list to view an Inventory Document"
		});
		
		
		var containerList = new sap.m.FlexBox({
			
			items: [
lblText
			      
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
			
			//showNavButton: false,
			showFooter: true,
			showHeader: true,
			footer: new sap.m.Bar({
		        contentRight: [
		                       
		                       ]
			}).addStyleClass("footer")
			
			
			
		});
	}

});