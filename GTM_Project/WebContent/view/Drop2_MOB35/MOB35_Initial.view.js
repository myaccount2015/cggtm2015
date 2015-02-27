sap.ui.jsview("com.cg.gtm.view.Drop2_MOB35.MOB35_Initial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB35.MOB35_Initial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB35.MOB35_Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB35.MOB35_Initial
	*/ 
	createContent : function(oController) {
		this.setHeight("100%")
		var masterPage = sap.ui.view({id:"idMOB35masterPage", viewName:"com.cg.gtm.view.Drop2_MOB35.MOB35_MasterPage", type:sap.ui.core.mvc.ViewType.JS});
		var detailPage= sap.ui.view({id: "idMOB35detailPage",viewName: "com.cg.gtm.view.Drop2_MOB35.MOB35_ThreeSplitPage", type:sap.ui.core.mvc.ViewType.JS})
		var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen");
		detailBlankScreen.mAggregations.content[0].setShowFooter(false)
		var oSplitApp= new sap.m.SplitApp("idMOB35SplitApp");
		
		
		if ( g_runningOnPhone == true){
			debugger;
			var detailBinpage = sap.ui.getCore().byId("idMOB35BinDetail")
			var detailCountPage = sap.ui.getCore().byId("idMOB35WMCount");
			
			var app = sap.ui.getCore().byId("myApp");
			app.addPage(masterPage);
			app.addPage(detailBinpage).addPage(detailCountPage);
			
			
	 		return new sap.m.Page({
	 			id : "Mob35-BackNavButton",
				title: "{i18n>MOB35_WMCount}",
				showNavButton: true,
				enableScrolling: false,
	            navButtonTap:function(){  
	          	  g_MobileNavigationId = "MainGrid-Inventory";
	            //	 $("#idMOB35BinDetail").hide();
	           // 	 $("#idMOB35WMCount").hide();
	                g_MatAddedMOB35 =  false ;
	               sap.ui.getCore().byId("MOB35_binInput").setValue("");
	               sap.ui.getCore().byId("idEmptyMOB35").setVisible(false);
	            	sap.ui.getCore().byId("idNextMOB35").setVisible(false);
	            	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
					
	               
				//	oSplitApp.toDetail("idBlankScreen_18");
	 		
	 		
		},
				content: [
				          	masterPage    	
				]
			})
	 		
			
			
			
			
			
		}
		
		else{
			
			sap.ui.getCore().byId("MOB35verifyBinPage").setShowNavButton(false);
			sap.ui.getCore().byId("mob35BinPage").setShowNavButton(false);
			
			oSplitApp.addMasterPage(masterPage);
			oSplitApp.addDetailPage(detailBlankScreen);
 		return new sap.m.Page({
 			id : "Mob35-BackNavButton",
			title: "{i18n>MOB35_WMCount}",
			showNavButton: true,
			enableScrolling: false,
			showFooter: false,
            navButtonTap:function(){  
            	
          	  g_MobileNavigationId = "MainGrid-Inventory";
               // var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
				//deselect.removeSelections();
            	 $("#idMOB35BinDetail").hide();
            	 $("#idMOB35WMCount").hide();
            	 g_MatAddedMOB35 =  false ;
            	sap.ui.getCore().byId("MOB35_binInput").setValue("");
            	sap.ui.getCore().byId("idEmptyMOB35").setVisible(false);
            	sap.ui.getCore().byId("idNextMOB35").setVisible(false);
            	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuIMWM");
				
               
				oSplitApp.toDetail("idBlankScreen_18");
				
 		
 		
	},
			content: [
			oSplitApp
			]
		})
 		
		}
	}

});