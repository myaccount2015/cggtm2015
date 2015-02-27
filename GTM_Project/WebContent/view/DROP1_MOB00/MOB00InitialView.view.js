sap.ui.jsview("com.cg.gtm.view.DROP1_MOB00.MOB00InitialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.DROP1_MOB00.MOB00InitialView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.DROP1_MOB00.MOB00InitialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.DROP1_MOB00.MOB00InitialView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var masterPage = sap.ui.view({id:"idMOB00masterPage", viewName:"com.cg.gtm.view.DROP1_MOB00.MOB00MasterView", type:sap.ui.core.mvc.ViewType.JS});
		var detailPage= sap.ui.view({id: "idMOB00detailPage",viewName: "com.cg.gtm.view.DROP1_MOB00.MOB00DetailView", type:sap.ui.core.mvc.ViewType.JS})
		var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen");
		var oSplitApp= new sap.m.SplitApp("idMOB00SplitApp");
	
		if ( g_runningOnPhone == true){
			
			var app = sap.ui.getCore().byId("myApp");
			app.addPage(masterPage);
			app.addPage(detailPage);
			//app.to("idMOB00masterPage");
			
			//g_MobileNavigationId = "Mob00-BackNavButton";
	 		return new sap.m.Page({
	 			 id : "Mob00-BackNavButton",
				title: "User Defaults",
				showNavButton: true,
				enableScrolling: false,
				showHeader: false,
	            navButtonTap:function(){  
	            
	            	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGrid");
	 		
		         },
				content: [
				          	masterPage    	
				]
			});
	 		
	 		
	 		
			
			
			
			
			
		}
		
		else{
			
			oSplitApp.addMasterPage(masterPage);
			oSplitApp.addDetailPage(detailPage);
			
		//	g_MobileNavigationId = "Mob00-BackNavButton";
 		    return new sap.m.Page({
 		  	id : "Mob00-BackNavButton",
			title: "Settings",
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){  
            	
            	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGrid");
				
               
	},
			content: [
			oSplitApp
			]
		})
 		
		}
	}

});