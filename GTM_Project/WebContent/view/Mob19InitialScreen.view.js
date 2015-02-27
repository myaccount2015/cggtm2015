sap.ui.jsview("com.cg.gtm.view.Mob19InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob19InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob19InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob19InitialScreen
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var oSplitAppMOB19 = new sap.m.SplitApp({id : "idMOB19SplitApp"});
		var masterpage = sap.ui.view({id:"idMOB19MasPg", viewName:"com.cg.gtm.view.MOB19MasterPage", type:sap.ui.core.mvc.ViewType.JS});
		var detBlank = sap.ui.view({id:"idMOB19BlankPage", viewName:"com.cg.gtm.view.MOB19BlankPage", type:sap.ui.core.mvc.ViewType.JS});
		
		
		if ( g_runningOnPhone == true)
		{
			var matListpage = sap.ui.view({id:"idMob19MatListPage", viewName:"com.cg.gtm.view.MOB19MatList", type:sap.ui.core.mvc.ViewType.JS});	
			var matDetpage = sap.ui.view({id:"idMob19MatDetPage", viewName:"com.cg.gtm.view.MOB19MatDetail", type:sap.ui.core.mvc.ViewType.JS});		
			var app = sap.ui.getCore().byId("myApp"); 
			var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
			app.addPage(masterpage);
			app.addPage(matListpage).addPage(matDetpage).addPage(idCommonPlantSearch);
			var detailTwoPage = sap.ui.view({id:"idMOB19TwoScreen", viewName:"com.cg.gtm.view.MOb19TwoScreenPage", type:sap.ui.core.mvc.ViewType.JS});
		}else
			{
			var detailTwoPage = sap.ui.view({id:"idMOB19TwoScreen", viewName:"com.cg.gtm.view.MOb19TwoScreenPage", type:sap.ui.core.mvc.ViewType.JS});
			var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
			oSplitAppMOB19.addMasterPage(masterpage);
			oSplitAppMOB19.addMasterPage(idCommonPlantSearch);
			oSplitAppMOB19.addDetailPage(detBlank);
			oSplitAppMOB19.addDetailPage(detailTwoPage);
			oSplitAppMOB19.toMaster(masterpage);
			oSplitAppMOB19.toDetail(detBlank);
			}
		//oSplitApp.setMode("PopoverMode");
		
		setGRDD();
		
		function setGRDD()
		{
			
			var dropDownDataArr = [] ;
			
			var dropDownDataBlank = {  							    
					"text": "Purchase Order" ,
					"key" : "PO"						  
								 }; 
			dropDownDataArr.push(dropDownDataBlank);	
			
			var dropDownDataBlank = {  							    
					"text": "Inbound Delivery" ,
					"key" : "ID"						  
								 }; 
			dropDownDataArr.push(dropDownDataBlank);	
			
			var dropDownDataBlank = {  							    
					"text": "Outbound Delivery" ,
					"key" : "OD"						  
								 }; 
			dropDownDataArr.push(dropDownDataBlank);	
			
			
			var dropDownDataFinal = [];
			dropDownDataFinal = {"itemsgrtype" : dropDownDataArr};
		    var oModelJsonList = new sap.ui.model.json.JSONModel();  
		    oModelJsonList.setData(dropDownDataFinal); 
			sap.ui.getCore().byId("ddgrtypeMOB19").setModel(oModelJsonList); 	
			sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
		}
	
		if ( g_runningOnPhone == true)
		{

			
	 		return new sap.m.Page({
	 			id:"Mob19-BackNavButton",
	 			title: "Log Goods Receipt",
				content: [
				          
				          	masterpage         
				
				],
				
				showNavButton: true,
				headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
				enableScrolling: false,
	            navButtonTap:function(){  
	            	  g_MobileNavigationId = "MainGrid-Inventory";
	            	           sap.ui.getCore().byId("LocallblLoadingPageMob19").setText("1");
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           //Hide third screen Mob20
	  				    	//   Mob20HideThirdScreen();
	                           app.to("idGridSubMenuIMWM");
	                           
	                           //Detail screen
	                           //sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-blankPage");
	                           
	  				    	   
	  				    	   
	  				    	   
	  				    	   
	  				    	   
	                           //Remove Page and Destroy view
	                           //sap.ui.getCore().byId("idMob20InitialScreen").destroy();	
	                           //app.removePage("idMob20InitialScreen");
	                          
	                          
		                       
	            },
	 		
	 		
			});
		
		}
		else
			{
		
 		return new sap.m.Page({
 			id:"Mob19-BackNavButton",
			title: "{i18n>L_G_R}",
			content: [
			          
			          oSplitAppMOB19         
			
			],
			
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){  
          	  g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob19").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                           //Hide third screen Mob20
  				    	//   Mob20HideThirdScreen();
                           app.to("idGridSubMenuIMWM");
                           
                           //Detail screen
                           //sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-blankPage");
                           
  				    	   
  				    	   
  				    	   
  				    	   
  				    	   
                           //Remove Page and Destroy view
                           //sap.ui.getCore().byId("idMob20InitialScreen").destroy();	
                           //app.removePage("idMob20InitialScreen");
                          
                          
	                       
            },
 		
 		
		});
	}
	}

});