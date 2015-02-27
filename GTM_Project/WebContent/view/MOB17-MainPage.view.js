sap.ui.jsview("com.cg.gtm.view.MOB17-MainPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17-MainPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17-MainPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17-MainPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		/*var oDeviceModel = new sap.ui.model.json.JSONModel({
            isTouch: sap.ui.Device.support.touch,
            isNoTouch: !sap.ui.Device.support.touch,
            isPhone: sap.ui.Device.system.phone,
            isNoPhone: !sap.ui.Device.system.phone,
            listMode: (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
            listItemType: (sap.ui.Device.system.phone) ? "Active" : "Inactive"
        });
        oDeviceModel.setDefaultBindingMode("OneWay");
        sap.ui.getCore().setModel(oDeviceModel, "device");
        this.setModel(oDeviceModel, "device");*/
		
		if ( g_runningOnPhone == true)
		{
			var masterpage = sap.ui.view({id:"idMOB17_MasterActionPage", viewName:"com.cg.gtm.view.MOB17_MasterActionPage", type:sap.ui.core.mvc.ViewType.JS});
			var masterMatSearchpage = sap.ui.view({id:"idMOB17_MasterMatSearch", viewName:"com.cg.gtm.view.MOB17_MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
			var materialFullDetailPage = new sap.ui.view({id:"idMaterialFullDetPage", viewName:"com.cg.gtm.view.MOB17_MaterialFullDetPage", type:sap.ui.core.mvc.ViewType.JS});
			
			var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
			var Customer = sap.ui.view({id:"idCustomer", viewName:"com.cg.gtm.view.Mob17customer", type:sap.ui.core.mvc.ViewType.JS});
			
			var project = sap.ui.view({id:"idProject_17", viewName:"com.cg.gtm.view.Mob17_Project", type:sap.ui.core.mvc.ViewType.JS});
			
			
			var matListPage = sap.ui.view({id:"idMaterialList", viewName:"com.cg.gtm.view.MOB17_MaterialList", type:sap.ui.core.mvc.ViewType.JS});
			var matDetPage = sap.ui.view({id:"idMaterialDetails", viewName:"com.cg.gtm.view.MOB17_MaterialDetails", type:sap.ui.core.mvc.ViewType.JS});
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(project).addPage(masterMatSearchpage).addPage(commonPlantSearchPage).addPage(Customer).addPage(matListPage).addPage(matDetPage);
			
			//page
			return new sap.m.Page({
				
				title: "",
				content: [ masterpage ],
				showNavButton: true,
				enableScrolling: false,
				showHeader: false,
	            navButtonTap:function(){  
	            	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
	                           }
	             });
		}else {
		
		var masterpage = sap.ui.view({id:"idMOB17_MasterActionPage", viewName:"com.cg.gtm.view.MOB17_MasterActionPage", type:sap.ui.core.mvc.ViewType.JS});
		var masterMatSearchpage = sap.ui.view({id:"idMOB17_MasterMatSearch", viewName:"com.cg.gtm.view.MOB17_MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
		
		var blankScreen = sap.ui.view({id:"idMOB17_BlankScreen", viewName:"com.cg.gtm.view.BlankScreen", type:sap.ui.core.mvc.ViewType.JS});
		//var Customer = sap.ui.view({id:"idCustomer", viewName:"com.cg.gtm.view.Mob17customer", type:sap.ui.core.mvc.ViewType.JS});
		var Customer = sap.ui.view({id:"idCustomer", viewName:"com.cg.gtm.view.Mob17customer", type:sap.ui.core.mvc.ViewType.JS});
		
		var project = sap.ui.view({id:"idProject_17", viewName:"com.cg.gtm.view.Mob17_Project", type:sap.ui.core.mvc.ViewType.JS});
		
		var materialFullDetailPage = new sap.ui.view({id:"idMaterialFullDetPage", viewName:"com.cg.gtm.view.MOB17_MaterialFullDetPage", type:sap.ui.core.mvc.ViewType.JS});
		var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		
		var oSplitApp = new sap.m.SplitApp("splitAppMOB17", 
				{initialPage:"idMOB17_MasterActionPage",
			
				afterDetailNavigate: function(){
					this.hideMaster();
				}
		
				}
				//The master area needs to be closed when navigation in detail area is done.
				);
		
		oSplitApp.addDetailPage(blankScreen).addDetailPage(materialFullDetailPage);
		oSplitApp.addMasterPage(masterpage).addMasterPage(project).addMasterPage(commonPlantSearchPage).addMasterPage(Customer).addMasterPage(masterMatSearchpage);
		
		oSplitApp.setMode("ShowHideMode");
		//oSplitApp.setInitialMaster("idMOB17_MasterActionPage");
		
 		return new sap.m.Page({
			title: "Stock Transfer",
			showNavButton : true,
			navButtonTap:function(){  
				var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuIMWM");
			},
			content: [
			          oSplitApp
			]
		});
	}

	}
});

