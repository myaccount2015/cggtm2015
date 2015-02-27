sap.ui.controller("com.cg.gtm.view.Drop1_MOB31.Mob31MasterSearchView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mob31documentdisplay.Mob31MasterSearchView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mob31documentdisplay.Mob31MasterSearchView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mob31documentdisplay.Mob31MasterSearchView
*/
	onAfterRendering: function() {
		

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mob31documentdisplay.Mob31MasterSearchView
*/
//	onExit: function() {
//
//	}
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB31";
	var helpDocNumber = HelpDocument(MobileScreenNumber);
	url1 = url1 + "('"+helpDocNumber+"')/$value";
	if(g_runningOnPhone == false && g_runningInTablet == false) {
	window.open(url1, '_blank'); 
	window.focus();
	} else {
	//navigator.app.loadUrl(url1, { openExternal:true } );
		downloadAndDisplayPDF(url1);
	}
	},
	onClick : function (evt) {
		
		var app = sap.ui.getCore().byId("splitAppDocumentDisplay");
		app.to("idMOB31Detail");
		    var desele = sap.ui.getCore().byId("idfeedList"); //Deselect the List Item
	        desele.setSelectedItem(sap.ui.getCore().byId("tit1"),false);
	        desele.setSelectedItem(sap.ui.getCore().byId("tit2"),false);
		
	},

filterList : function(oEvent) {
	var like = oEvent.getParameter("newValue");

	var oFilter = new sap.ui.model.Filter("num",
			sap.ui.model.FilterOperator.EndsWith, // EndsWith,
			like);

	var element = sap.ui.getCore().getElementById("list");
	
	
	var listBinding = element.getBinding("items");
	listBinding.filter([ oFilter ]);
}
});