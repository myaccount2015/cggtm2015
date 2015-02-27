sap.ui.jsview("com.cg.gtm.view.Mob30InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob30InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30InitialScreen
	*/ 
	createContent : function(oController) {
		
		var masterpage = sap.ui.view({id:"idMOB30master", viewName:"com.cg.gtm.view.Mob30Master", type:sap.ui.core.mvc.ViewType.JS});
 		//Two Column split screen
		var detailsplit = sap.ui.view({id:"idMOB30Detailsplit", viewName:"com.cg.gtm.view.Mob30TwoScreen", type:sap.ui.core.mvc.ViewType.JS});
		
		
		//Plant Search Common Screen
		var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		
		//Blank page
		var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen"); 
		
		
		var oSplitApp = new sap.m.SplitApp({id : "idMOB30SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addMasterPage(commonPlantSearchPage);
		oSplitApp.addDetailPage(detailsplit);
		oSplitApp.addDetailPage(detailBlankScreen);
		
		
		
		oSplitApp.setInitialMaster(masterpage);
		oSplitApp.setInitialDetail(detailBlankScreen);
		
		 oSplitApp.setMode("ShowHideMode");
		
		return new sap.m.Page({
			title: "Bin to Bin",
			content: [
			          	oSplitApp
			],
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){  
            	
              /*  var matno = sap.ui.getCore().byId("inputItem").setValue("");
                
                var plant = sap.ui.getCore().byId("inputPlant23").setValue("");
                
                var plant = sap.ui.getCore().byId("idsearch_WM").setValue("");
                
                var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
				deselect.removeSelections();
				*/
            	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuIMWM");
				
				var app = sap.ui.getCore().byId("idMOB30SplitApp");  
                app.toMaster("idMOB30master");
                app.toDetail("idBlankScreen");
 		
 		
	}
	
		});
	}

});