sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MasterActionPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17_MasterActionPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		/*var jsonActionType = {"MOB17ActionType":
			[
				 {"key":"311", "detail":"Storage Location to Storage Location"},
				 {"key":"321", "detail":"Quality Inspection to Unrestricted"},
				 {"key":"322", "detail":"Unrestricted to Quality Inspection"},
				 {"key":"343", "detail":"Blocked to Unrestricted"},
				 {"key":"344", "detail":"Unrestricted to Blocked"},
				 {"key":"349", "detail":"Blocked to Quality"},
				 {"key":"350", "detail":"Quality to Blocked"}
				 ]};
		
		var oJSONActType = new sap.ui.model.json.JSONModel(jsonActionType);*/
		
		var lblDepot = new sap.m.Label({
		      text: "{i18n>Depot}"
		    }).addStyleClass("topPadding");
		
		var inputDepot = new sap.m.Input("MOB37DepotInput",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    //  placeholder: 'Select Plant..',
		    //  showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
						{
				    	  globalPlantSearchFrom = "MOB37";
				    	  // Depot
				    	 // getPlantList();
				    	  getDepoList();
				    	  var appz= sap.ui.getCore().byId("MOB37SplitApp");	
					    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
					    	  appz.addMasterPage(commonPlantSearchPage);
					    	  appz.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalPlantSearchFrom = "MOB37";
		    	  
		    	//  getPlantList();
		    	  getDepoList();
		    	 var appz= sap.ui.getCore().byId("MOB37SplitApp");	
		    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		    	  appz.addMasterPage(commonPlantSearchPage);
		    	  
	        	  appz.toMaster("idCommonPlantSearch");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		var lblToolGroup = new sap.m.Label({
		      text: "{i18n>ToolGroup}"
		    }).addStyleClass("topPadding");
		
		var inputToolGroup = new sap.m.Input("MOB37ToolGroupInput",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    //  placeholder: 'Select Plant..',
		    //  showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
						{
						  globalPlantSearchFrom = "MOB37";
				    	  
				    	 // getPlantList();
						  gettoolgroupList();
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				    	  app.to(commonPlantSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalPlantSearchFrom = "MOB37";
		    	  gettoolgroupList();
		    	 // getPlantList();
		    	  
		    		var appz= sap.ui.getCore().byId("MOB37SplitApp");	
		    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		    	  appz.addMasterPage(commonPlantSearchPage);
		    	  
	        	  appz.toMaster("idCommonPlantSearch");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		var lblToolDescription= new sap.m.Label({
		      text: "{i18n>Tool Description}"
		    }).addStyleClass("topPadding");
		
		var inputToolDescription = new sap.m.Input("MOB37ToolGroupDescription",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    //  placeholder: 'Select Plant..',
		    //  showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
						{
				    	  globalPlantSearchFrom = "MOB37";
				    	  
				    	//  getPlantList();
				    	  gettooldescriptionList(); 
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				    	  app.to(commonPlantSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalPlantSearchFrom = "MOB37";
		    	  
		    	//  getPlantList();
		    	  gettooldescriptionList();
		    		var appz= sap.ui.getCore().byId("MOB37SplitApp");	
		    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		    	  appz.addMasterPage(commonPlantSearchPage);
		    	  
	        	  appz.toMaster("idCommonPlantSearch");
		    	  }
		      }
		  }).addStyleClass("matsearch");	
		
	
		
	
		var oLayout = new sap.ui.layout.VerticalLayout({
			content: [  lblDepot, 
						inputDepot,
						lblToolGroup,
						inputToolGroup,
						lblToolDescription,
						inputToolDescription]
		});
		
	/*	var TheScrollContainer2 = new sap.m.ScrollContainer({
			//height : "500px",
            horizontal : false,
            vertical : false,
            content : [
                       oLayout
                       ]
        });
		
		TheScrollContainer2.addStyleClass("ContainerPadAll");*/
		
		
		var TheScrollContainer2 = new sap.m.FlexBox({
			items: [
			        lblDepot, 
			        inputDepot,
			        lblToolGroup,
			        inputToolGroup,
			        lblToolDescription,
			        inputToolDescription
                 ],
		direction:"Column",
		justifyContent:"Center",
		alignItems:"Start",
		});
		
		TheScrollContainer2.addStyleClass("ContainerPadAll");
		var bar = new sap.m.Bar({
	        contentRight: [
	                      // btnNext
	                       ]
		});
		
		if(g_runningOnPhone != true) {
			bar.addStyleClass("Matfooter");
		}
		
		var page = null;
		
		if(g_runningOnPhone == true) {
			page = new sap.m.Page({
				id : "Mob37-BackNavButton",
				title: "Stock Transfer Action",
				enableScrolling: true,
				showNavButton: true,
				content: [
				          TheScrollContainer2
				],
				/*headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),*/
				
				navButtonTap:function(){ 
					  g_MobileNavigationId = "MainGrid-Inventory";
		        	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
		        },
				showFooter: true,
				footer: bar
			});
		}else {
			page = new sap.m.Page({
				id : "Mob37-BackNavButton",
				title: "Tool Search",
				showNavButton: true,
				navButtonPress : function() {
					//splitApp.backMaster();
					alert('Back button clicked!!');
		              },
				content: [
				          TheScrollContainer2
				],
				/*headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),*/
				
				
				showFooter: true,
				footer: new sap.m.Toolbar({
					content: [
								new sap.m.ToolbarSpacer(),
								new sap.m.Button({
									text: "{i18n>Search}",
									icon: "sap-icon://search",
									type: "Emphasized",
									press: [oController.handleSearchButtonPress, oController]
									
								
								})
							]
						}),
				showNavButton: true,
				navButtonTap:function(){ 
					  g_MobileNavigationId = "MainGrid-Inventory";
		        	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
		        },
		        
			});
		}
		
		return page;
	}


});