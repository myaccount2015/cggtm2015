sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27InitialScreen
	*/ 
	createContent : function(oController) {
		//Desktop View and Tablet View

		this.setHeight("100%");
		if(g_runningOnPhone == false)
			{
			var masterpage = sap.ui.view({id:"idMob27Picking", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27Picking", type:sap.ui.core.mvc.ViewType.JS});
			var masterpageSecScr = sap.ui.view({id:"idMob27SecMas", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27SecScr", type:sap.ui.core.mvc.ViewType.JS});
			
			
			var detBlank = sap.ui.view({id:"idMOB27-Mob27BlankScreen", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27BlankScreen", type:sap.ui.core.mvc.ViewType.JS});
			var twoScreenPickQueue = sap.ui.view({id:"idMOB27-twoScreenPickQueue", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrPickQue", type:sap.ui.core.mvc.ViewType.JS});
			var twoScreenPickOrder = sap.ui.view({id:"idMOB27-twoScreenPickOrder", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrPickOrd", type:sap.ui.core.mvc.ViewType.JS});
			
		var oSplitApp = new sap.m.SplitApp({id : "idMOB27SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addMasterPage(masterpageSecScr);
		oSplitApp.addDetailPage(detBlank);
		oSplitApp.addPage(twoScreenPickQueue);
		oSplitApp.addPage(twoScreenPickOrder);

	     return new sap.m.Page({
			title: "WM pick ",
			id: "Mob27-BackNavButton",
			content: [ oSplitApp ],
			showNavButton: true,
			enableScrolling: false,
	        navButtonTap:function(){  
	        	  g_MobileNavigationId = "MainGrid-Inventory";
	        	           sap.ui.getCore().byId("LocallblLoadingPageMob27").setText("1");
	                       var app = sap.ui.getCore().byId("myApp"); 
	                       app.to("idGridSubMenuIMWM");
	                   	if( g_runningOnPhone == false)
	                   		{
	                   	 sap.ui.getCore().byId("idMOB27SplitApp").toMaster("idMob27Picking");
	                     //Detail screen
	                     sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-Mob27BlankScreen");
	                   		}
	                      
	                      
	                       },
	                                      
	     
	     
	     });
	     
	     
			}
		else
   	 {

			var masterpage = sap.ui.view({id:"idMob27Picking", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27Picking", type:sap.ui.core.mvc.ViewType.JS});
			var masterpageSecScr = sap.ui.view({id:"idMob27SecMas", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27SecScr", type:sap.ui.core.mvc.ViewType.JS});
			
			var QueueOrdDet = sap.ui.view({id:"idMob27OrdDet", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueOrderView", type:sap.ui.core.mvc.ViewType.JS});	
			var QueueItmDet = sap.ui.view({id:"idMob27DesScn", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueDesScn", type:sap.ui.core.mvc.ViewType.JS});
			
			
			var OrderOrdDet = sap.ui.view({id:"idMob27TrOrdDet", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrOrderTOrderView", type:sap.ui.core.mvc.ViewType.JS});	
			var OrderItmDet = sap.ui.view({id:"idMob27TrOrdScn", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrOrderTOrDesScn", type:sap.ui.core.mvc.ViewType.JS});
			
			
			
			
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(masterpageSecScr).addPage(QueueOrdDet)
			.addPage(QueueItmDet).addPage(OrderOrdDet).addPage(OrderItmDet);

	     return new sap.m.Page({
			title: "",
			//id: "Mob27-BackNavButton",
			content: [ masterpage ],
			showNavButton: true,
			showHeader : false,
			enableScrolling: false,
	        navButtonTap:function(){  
	        	  //g_MobileNavigationId = "MainGrid-Inventory";
	        	           sap.ui.getCore().byId("LocallblLoadingPageMob27").setText("1");
	                       var app = sap.ui.getCore().byId("myApp"); 
	                       app.to("idGridSubMenuIMWM");
	                   
	                      
	                      
	                       },
	                                      
	     
	     
	     });
	     
	     
			
   	 }
		
		
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
}

});