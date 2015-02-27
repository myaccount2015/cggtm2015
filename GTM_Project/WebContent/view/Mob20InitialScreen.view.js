sap.ui.jsview("com.cg.gtm.view.Mob20InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob20-InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob20InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob20-InitialScreen
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Mobile View
		
		if ( g_runningOnPhone == true)
			{
			var masterpage = sap.ui.view({id:"idMOB20-InvDoc", viewName:"com.cg.gtm.view.MOB20InvDoc", type:sap.ui.core.mvc.ViewType.JS});
			var matDespage = sap.ui.view({id:"idMob20MatDesPage", viewName:"com.cg.gtm.view.Mob20TwoScrMatDes", type:sap.ui.core.mvc.ViewType.JS});	
			var splStockpage = sap.ui.view({id:"idMob20splStockpage", viewName:"com.cg.gtm.view.MOB20TwoScrStockPage", type:sap.ui.core.mvc.ViewType.JS});
			
			
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(matDespage).addPage(splStockpage);
		//page
		return new sap.m.Page({
			//id:"Mob20-BackNavButton",
			title: "",
			content: [ masterpage ],
			showNavButton: true,
			enableScrolling: false,
			showHeader: false,
            navButtonTap:function(){ 
          	//  g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob20").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                           app.to("idGridSubMenuIMWM");
                           },});}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////
		else{
		//Desktop View and Tablet View

			var masterpage = sap.ui.view({id:"idMOB20-InvDoc", viewName:"com.cg.gtm.view.MOB20InvDoc", type:sap.ui.core.mvc.ViewType.JS});
			var detBlank = sap.ui.view({id:"idMOB20-blankPage", viewName:"com.cg.gtm.view.MOB20BlankPage", type:sap.ui.core.mvc.ViewType.JS});
			var detailPage_2_Screen = sap.ui.view({id:"idMOB20-TwoScreen", viewName:"com.cg.gtm.view.Mob20TwoScreen", type:sap.ui.core.mvc.ViewType.JS});
			
		
		var oSplitApp = new sap.m.SplitApp({id : "idMOB20SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addDetailPage(detBlank);
		oSplitApp.addDetailPage(detailPage_2_Screen);
	     return new sap.m.Page({
	    		id:"Mob20-BackNavButton",
			title: "Enter IM Count",
			content: [ oSplitApp ],
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){  
            	          g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob20").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                           //Hide third screen Mob20
  				    	   Mob20HideThirdScreen();
                           app.to("idGridSubMenuIMWM");
                          //Detail screen
                           sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-blankPage");
                          //Remove Page and Destroy view
                           //sap.ui.getCore().byId("idMob20InitialScreen").destroy();	
                           //app.removePage("idMob20InitialScreen");
                           },});
 		
 		///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 		
	}
	}

});