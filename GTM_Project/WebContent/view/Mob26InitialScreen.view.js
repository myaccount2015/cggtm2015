sap.ui.jsview("com.cg.gtm.view.Mob26InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26InitialScreen
	*/ 
	createContent : function(oController) {
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Mobile View
		this.setHeight("100%");
		if ( g_runningOnPhone == true)
			{
			var masterpage = sap.ui.view({id:"idMOB26-TrOrder", viewName:"com.cg.gtm.view.Mob26MasterTrOrder", type:sap.ui.core.mvc.ViewType.JS});
			var OrdDet = sap.ui.view({id:"idMob26OrdDet", viewName:"com.cg.gtm.view.Mob26TwoScrOrderView", type:sap.ui.core.mvc.ViewType.JS});	
			var ItmDet = sap.ui.view({id:"idMob26ItmScn", viewName:"com.cg.gtm.view.Mob26TwoScrItenScn", type:sap.ui.core.mvc.ViewType.JS});
			
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(OrdDet).addPage(ItmDet);
		//page
		return new sap.m.Page({
			title: "",
			//id : "Mob26-BackNavButton",
			content: [ masterpage ],
			showNavButton: true,
			enableScrolling: false,
			showHeader: false,
            navButtonTap:function(){  
            	  //g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                           app.to("idGridSubMenuIMWM");
                           },});}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		else{
		//Desktop View and Tablet View

			var masterpage = sap.ui.view({id:"idMOB26-TrOrder", viewName:"com.cg.gtm.view.Mob26MasterTrOrder", type:sap.ui.core.mvc.ViewType.JS});
			var detBlank = sap.ui.view({id:"idMOB26-Mob26BlankScreen", viewName:"com.cg.gtm.view.Mob26BlankScreen", type:sap.ui.core.mvc.ViewType.JS});
			var detailPage_2_Screen = sap.ui.view({id:"idMOB26-TwoScreen", viewName:"com.cg.gtm.view.Mob26Twoscreen", type:sap.ui.core.mvc.ViewType.JS});
			
		
		var oSplitApp = new sap.m.SplitApp({id : "idMOB26SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addDetailPage(detBlank);
		oSplitApp.addDetailPage(detailPage_2_Screen);
	     return new sap.m.Page({
			title: "WM putaway ",
			id : "Mob26-BackNavButton",
			content: [ oSplitApp ],
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){  
            	  g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                          
                           app.to("idGridSubMenuIMWM");
                          //Detail screen
                           sap.ui.getCore().byId("idMOB26SplitApp").to("idMOB26-Mob26BlankScreen");
                          
                           },});
 		
 		///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 		
	}
	
	}

});