
sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30InitialScreen
	*/ 
	createContent : function(oController) {
		
		 ///////////////////////Phone version///////////////////////////////
		this.setHeight("100%");
		 if ( g_runningOnPhone == true)
			{
			 var masterpage = sap.ui.view({id:"idMOB30master", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30Master", type:sap.ui.core.mvc.ViewType.JS});
			//Blank page
				var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen"); 
			//Plant Search Common Screen
				var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				var detailpage = sap.ui.view({id:"idMOB30Detail", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30DetailMaterial", type:sap.ui.core.mvc.ViewType.JS});
				var detailMatpage = sap.ui.view({id:"idMOB30MatDetail", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30MatDetail", type:sap.ui.core.mvc.ViewType.JS});
				//Warehouse 
				var Whousepage = sap.ui.view({id:"idMOB30whouse", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30warehouse", type:sap.ui.core.mvc.ViewType.JS});
				var app = sap.ui.getCore().byId("myApp"); 
				app.addPage(masterpage).addPage(detailBlankScreen).addPage(Whousepage).addPage(detailpage).addPage(detailMatpage).addPage(commonPlantSearchPage);
				
				//page
				return new sap.m.Page({
					id:"Mob30-BackNavButton",
					title: "",
					content: [ masterpage ],
					showNavButton: true,
					enableScrolling: false,
					showHeader: false,
		            navButtonTap:function(){  
		          	  g_MobileNavigationId = "MainGrid-Inventory";
		            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
		                           var app = sap.ui.getCore().byId("myApp"); 
		                           app.to("idGridSubMenuIMWM");
		                           },});
			}
		 
		 else{
			 
		/////////////////////////Desktop/Tablet Version///////////////////////////////
		var masterpage = sap.ui.view({id:"idMOB30master", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30Master", type:sap.ui.core.mvc.ViewType.JS});
 		//Two Column split screen
		var detailsplit = sap.ui.view({id:"idMOB30Detailsplit", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30TwoScreen", type:sap.ui.core.mvc.ViewType.JS});
		//Warehouse 
		var Whousepage = sap.ui.view({id:"idMOB30whouse", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30warehouse", type:sap.ui.core.mvc.ViewType.JS});
		
		
		//Plant Search Common Screen
		var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		
		//Blank page
		var detailBlankScreen = sap.ui.view({id:"idMOB30Blank", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30Blank", type:sap.ui.core.mvc.ViewType.JS});
		
		
		var oSplitApp = new sap.m.SplitApp({id : "idMOB30SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addMasterPage(commonPlantSearchPage);
		oSplitApp.addMasterPage(Whousepage);
		oSplitApp.addDetailPage(detailBlankScreen);
		oSplitApp.addDetailPage(detailsplit);
		
		
		
		//oSplitApp.toMaster(masterpage);
		oSplitApp.toDetail(detailBlankScreen);
		//oSplitApp.setInitialMaster(masterpage);
		//oSplitApp.setInitialDetail(detailBlankScreen);
		
		 oSplitApp.setMode("ShowHideMode");
		
		return new sap.m.Page({
			id:"Mob30-BackNavButton",
			title: "Bin to Bin",
			content: [
			          	oSplitApp
			],
			showNavButton: true,
			enableScrolling: false,
			showFooter: false,
            navButtonTap:function(){  
            	
              /*  var matno = sap.ui.getCore().byId("inputItem").setValue("");
                
                var plant = sap.ui.getCore().byId("inputPlant23").setValue("");
                
                var plant = sap.ui.getCore().byId("idsearch_WM").setValue("");
                
                var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
				deselect.removeSelections();
				*/
            	  g_MobileNavigationId = "MainGrid-Inventory";
            	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuIMWM");
				
				//quantity
				var plant = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue("");

				var appM = sap.ui.getCore().byId("idMOB30SplitApp");  
              //  app.toMaster("idMOB30master");
                appM.toDetail("idMOB30Blank");
 		
 		
	}
	
		});
	}
	}

});