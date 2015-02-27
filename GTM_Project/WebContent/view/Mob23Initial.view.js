sap.ui.jsview("com.cg.gtm.view.Mob23Initial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23Initial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23Initial
	*/ 
	createContent : function(oController) {
		
		 ///////////////////////Phone version///////////////////////////////
		this.setHeight("100%");
		 if ( g_runningOnPhone == true)
			{
			 var masterpage = sap.ui.view({id:"idMOB23Matmaster", viewName:"com.cg.gtm.view.Mob23Matmaster", type:sap.ui.core.mvc.ViewType.JS});
			 var masterpage1 = sap.ui.view({id:"idMOB23Matmasdetail", viewName:"com.cg.gtm.view.Mob23Matdetmaster", type:sap.ui.core.mvc.ViewType.JS});
			 var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
			 var detailpage = sap.ui.view({id:"idMOB23Detail", viewName:"com.cg.gtm.view.Mob23Detailpage", type:sap.ui.core.mvc.ViewType.JS});
				var detailWMpage = sap.ui.view({id:"idMOB23WMDetail", viewName:"com.cg.gtm.view.Mob23WMdetail", type:sap.ui.core.mvc.ViewType.JS});
				
				
				var app = sap.ui.getCore().byId("myApp"); 
				app.addPage(masterpage).addPage(masterpage1).addPage(detailpage).addPage(detailWMpage).addPage(commonPlantSearchPage);
			//page
			return new sap.m.Page({
				title: "",
				content: [ masterpage ],
				showNavButton: true,
				enableScrolling: false,
				showHeader: false,
	            navButtonTap:function(){  
	            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           app.to("idGridSubMenuIMWM");
	                           },});
			}
		 ///////////////////////Desktop/Tablet version///////////////////////////////

		 else{
			 
		
		var masterpage = sap.ui.view({id:"idMOB23Matmaster", viewName:"com.cg.gtm.view.Mob23Matmaster", type:sap.ui.core.mvc.ViewType.JS});
		var masterpage1 = sap.ui.view({id:"idMOB23Matmasdetail", viewName:"com.cg.gtm.view.Mob23Matdetmaster", type:sap.ui.core.mvc.ViewType.JS});
		
		//Plant Search Common Screen
		//var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		
		
		//Blank page
		//var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen"); 
		
		var detailBlankScreen = sap.ui.view({id:"idMOB23Blank", viewName:"com.cg.gtm.view.Mob23BlankScreen", type:sap.ui.core.mvc.ViewType.JS});
        var detailsplit = sap.ui.view({id:"idMOB23Detailsplit", viewName:"com.cg.gtm.view.Mob23DetailThreeSplit", type:sap.ui.core.mvc.ViewType.JS});
				
		var oSplitApp = new sap.m.SplitApp({id : "idMOB23SplitApp"});
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addMasterPage(masterpage1);
		//oSplitApp.addMasterPage(commonPlantSearchPage);
		oSplitApp.addDetailPage(detailBlankScreen);
		oSplitApp.addDetailPage(detailsplit);
		
		
		
		//oSplitApp.setInitialMaster(masterpage);
		//oSplitApp.setInitialDetail(detailBlankScreen);
			// oSplitApp.setMode("ShowHideMode");
		
		
		
		 return new sap.m.Page({
			    id : "Mob23-BackNavButton",
				title: "Stock Overview",
				content: [ oSplitApp ],
				showNavButton: true,
				enableScrolling: false,
				showFooter: false,
	            navButtonTap:function(){  
	            	 if(g_backstock == "Mob18Scrap"){
	                     var matno = sap.ui.getCore().byId("inputItem").setValue("");
	       	                
	       	                sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
	       	                
	       	               // var plant = sap.ui.getCore().byId("inputPlant23").setValue("");
	       	                
	       	                var plant = sap.ui.getCore().byId("idsearch_WM").setValue("");
	       	                
	       	                var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
	       					deselect.removeSelections();

	       					var app = sap.ui.getCore().byId("myApp");  
	       					app.to("idMob18InitialScreen");

	       				 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	       					    app.toMaster("idMOB18Matmas");
	       					    app.toDetail("idMOB18SplitScrap");
	       	              
	       	              // app.toDetail("idMOB18SplitScrap");

	       	            } 
	       	            else{

	       	           
	       	            	g_MobileNavigationId = "MainGrid-Inventory";
	       	                var matno = sap.ui.getCore().byId("inputItem").setValue("");
	       	                
	       	                sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
	       	                
	       	               // var plant = sap.ui.getCore().byId("inputPlant23").setValue("");
	       	                
	       	                var plant = sap.ui.getCore().byId("idsearch_WM").setValue("");
	       	                
	       	                    sap.ui.getCore().byId("idMaterialno").setText("");
		       	                sap.ui.getCore().byId("idMatdesc").setText("");
		       	                 sap.ui.getCore().byId("idWMno").setText("");
	       	                var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
	       					deselect.removeSelections();
	       					
	       	            	var app = sap.ui.getCore().byId("myApp"); 
	       					app.to("idGridSubMenuIMWM");
	       					
	       					var app = sap.ui.getCore().byId("idMOB23SplitApp");  
	       	                app.toMaster("idMOB23Matmaster");
	       	               app.toDetail("idMOB23Blank");
	       	            }
	       	 		
	       		}
	       		 })
	       		 }
	       		 
	       		
	       		
	       	}});