sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MD37Collection01").removeSelections();
		sap.ui.getCore().byId("MOB37SplitApp").backMaster();
		sap.ui.getCore().byId("MOB37SplitApp").backDetail();
	},

	handleHelpButtonPress: function () {

		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB37";
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

	handleListItemSelect: function (evt) {		
		var context = evt.getParameter("listItem").getBindingContext("tools");	
	//	sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
		//sap.ui.getCore().byId("MOB37SplitApp").getPage("MOB37Detail").setBindingContext(context, "tools");
		sap.ui.getCore().byId("MOB37SplitApp").toDetail("MOB37Detail");
	},

	handleListItemPress: function (evt) {
		var context = evt.getSource().getBindingContext("tools");
		sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
		sap.ui.getCore().byId("MOB37SplitApp").getPage("MOB37Detail").setBindingContext(context, "tools");
		sap.ui.getCore().byId("MOB37SplitApp").toDetail("MOB37Detail");
	},
	
	fetchInvDocDataMOB37 : function(oEvent)
	{
		var app= sap.ui.getCore().byId("MOB37SplitApp");	
		app.toDetail("MOB37Detail");
		
		/*if ( g_runningOnPhone == true){
			  g_MobileNavigationId = "MOB37verifyBinPage";		
		//	var appr = sap.ui.getCore().byId("SplitApp");	
			  
			var app= sap.ui.getCore().byId("MOB37SplitApp");
			
			app.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));
			
			app.toDetail("MOB37Detail");
			
		}
		else{
		
			var app= sap.ui.getCore().byId("MOB37SplitApp");	
			app.toDetail("MOB37Detail");
			app.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));
			
			app.toDetail("MOB37Detail");
		}*/	
				
		
	
	}
	

});