sap.ui.jsview("com.cg.gtm.view.MOB17_MasterActionPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MasterActionPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17_MasterActionPage";
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
		
		var lblPlant = new sap.m.Label({
		      text: "{i18n>MOB17_Plant}"
		    }).addStyleClass("topPadding");
		
		var inputPlant = new sap.m.Input("inputPlantMat1",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		      placeholder: 'Select Plant..',
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
				    	  globalPlantSearchFrom = "MOB17";
				    	  
				    	  getPlantList();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				    	  app.to(commonPlantSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalPlantSearchFrom = "MOB17";
		    	  
		    	  getPlantList();
		    	  
		    	  var app = sap.ui.getCore().byId("splitAppMOB17"); 
		    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		    	  app.addMasterPage(commonPlantSearchPage);
		    	  
	        	  app.toMaster("idCommonPlantSearch");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		var lblActType = new sap.m.Label({
		      text: "{i18n>MOB17_ChooseAction}"
		    });
		
		lblActType.addStyleClass("topPadding");
		
		var actionType = new sap.m.Select("selActionType", {
			autoAdjustWidth : true,
			 // width: "90%",
		      items: {
		        path: "/MOB17ActionType",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{key}",
		          text: "{detail}"
		        })
		      } ,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      }),
		      change: oController.onActionChange
		    });
		
		
		var lblFrom = new sap.m.Label("lblFromStorage", {
		      text: "{i18n>MOB17_FromStorage}"
		    });
		
		lblFrom.addStyleClass("topPadding");
		
		var fromStorage = new sap.m.Select("idFromStorage", {
		      items: {
		        path: "/MOB17FromStorage",
		        sorter: new sap.ui.model.Sorter("StorageLocationId", false),
		        template: new sap.ui.core.Item({
		          key: "{StorageLocationId}",
		          text: "{StorageLocationDesc}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		var lblTo = new sap.m.Label("lblToStorage", {
		      text: "{i18n>MOB17_ToStorage}"
		    });
		
		lblTo.addStyleClass("topPadding");
		
		var toStorage = new sap.m.Select("idToStorage", {
		      items: {
		        path: "/MOB17ToStorage",
		        sorter: new sap.ui.model.Sorter("StorageLocationId", false),
		        template: new sap.ui.core.Item({
		          key: "{StorageLocationId}",
		          text: "{StorageLocationDesc}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		var lblSpeStock = new sap.m.Label({
		      text: "{i18n>MOB17_SpecialStock}"
		    });
		
		lblSpeStock.addStyleClass("topPadding");
	/////////////////////////////////////////////////////////////////////////////////	
		/*var radiobtn = new sap.ui.commons.RadioButtonGroup("optSpecialStock", {
			columns : 2,
			select : function(event) {
					if(event.mParameters.selectedIndex == 1) { //Project Selected
						callProjSearchHelp();
						sap.ui.getCore().byId("lblCustProj").setVisible(true);
						sap.ui.getCore().byId("selectCustProj").setVisible(true);
					}else if(event.mParameters.selectedIndex == 2) { //Customer Selected
						callCustomerSearchHelp();
						sap.ui.getCore().byId("lblCustProj").setVisible(true);
						sap.ui.getCore().byId("selectCustProj").setVisible(true);
					}else if(event.mParameters.selectedIndex == 0) { //Customer Selected
						sap.ui.getCore().byId("lblCustProj").setVisible(false);
						sap.ui.getCore().byId("selectCustProj").setVisible(false);
						clearSpecialStock();
					}
				} 
			});
		
		var oItem = new sap.ui.core.Item("optNone", {
			text : "None", 
			
			key : "Key3"});
		radiobtn.addItem(oItem);
		
		oItem = new sap.ui.core.Item("optProject", {
			text : "Project", 
			
			key : "Key1"
				});
		radiobtn.addItem(oItem);
		oItem = new sap.ui.core.Item("optCustomer", {
			text : "Customer", 
			
			key : "Key2"});
		radiobtn.addItem(oItem);*/
		
		////////////////////////////////////////////////////////////////////////////////////

		
		var radiobtn0 = new sap.m.RadioButton({
			id : "idradio-cost0-Mob17",
			groupName : "Mob17-Radio",
			text : "None",
			selected:true,
			select : function()
			{ //None Selected
				sap.ui.getCore().byId("lblCustProj").setVisible(false);
				sap.ui.getCore().byId("inputproject_17").setVisible(false);
				sap.ui.getCore().byId("inputcustomer").setVisible(false);
				clearSpecialStock();
			}
		
		});
		
		var radiobtn1 = new sap.m.RadioButton({
			id : "idradio-cost1-Mob17",
			groupName : "Mob17-Radio",
			text : "Project",
			select : function()
			{ //Project Selected
				//callProjSearchHelp();
				sap.ui.getCore().byId("lblCustProj").setVisible(true);
				sap.ui.getCore().byId("inputproject_17").setVisible(true);
				sap.ui.getCore().byId("inputcustomer").setVisible(false);
			}
			
		});
		
		var radiobtn2 = new sap.m.RadioButton({
			id : "idradio-cost2-Mob17",
			groupName : "Mob17-Radio",
			text : "Customer",
			select : function()
			{ //Customer Selected
			//	callCustomerSearchHelp();
				sap.ui.getCore().byId("lblCustProj").setVisible(true);
				sap.ui.getCore().byId("inputcustomer").setVisible(true);
				sap.ui.getCore().byId("inputproject_17").setVisible(false);
			}
		
		});
		
		
		
		var radiobtn = new sap.m.HBox({
			
		});
		radiobtn.addItem(radiobtn0);
		radiobtn.addItem(radiobtn1);
		radiobtn.addItem(radiobtn2);
		
		
		
		var lblCustProj = new sap.m.Label("lblCustProj", {
		      text: "{i18n>MOB17_CustProj}"
		    });
		
		lblCustProj.addStyleClass("topPadding");
		
		var lblDummy = new sap.m.Label({
		      text: ""
		    }).addStyleClass("topPaddingFooter");
		
		var selectCustProj = new sap.m.Select("selectCustProj", {
			autoAdjustWidth : true,
		      items: {
		        path: "/MOB17CustProj",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{key}",
		          text: "{detail}"
		        })
		      },
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		
		var inputcust = new sap.m.Input("inputcustomer",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		      placeholder: 'Select Customer..',
		    //  showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MOB17CustProj",
		        template: new sap.ui.core.Item({
		         text: "{custName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
				{
				    	 /* globalPlantSearchFrom = "MOB17";
				    	  
				    	  getPlantList();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				    	  app.to(commonPlantSearchPage);*/
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		   	  globalPlantSearchFrom = "MOB17";
		    	  
		   	getCustList();
		    	  
		    	  var app = sap.ui.getCore().byId("splitAppMOB17"); 
		    	  var Customer = sap.ui.getCore().byId("idCustomer");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idCustomer");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		  inputcust.setVisible(false);
		  
		  
		  var inputproj_mob17 = new sap.m.Input("inputproject_17",{
			     // type: sap.m.InputType.Text,
				 type: sap.m.InputType.Email,
			      placeholder: 'Select Project....',
			    //showSuggestion: true,
			      layoutData : new sap.ui.layout.GridData({
			          span: "L3 M3 S12",
			          linebreakL: true,
			 			linebreakM: true,
			 			linebreakS: true
			  }),
			     suggestionItems: {
			        path: "/MOB18CustProj",
			        template: new sap.ui.core.Item({
			         text: "{projName}"
			        })
			      },
			      showValueHelp: true,
			      valueHelpRequest: function (evt) {
			    	  

						
						if ( g_runningOnPhone == true)
					{
							//globalProjectSearchFrom = "MOB18_scrap";
					    	  
							getProjList_mob17();
					    	  
					    	  var app = sap.ui.getCore().byId("myApp"); 
					    	  
					    	  var commonprojSearchPage = sap.ui.getCore().byId("idProject_17");
					    	  app.to(commonprojSearchPage);
					    	  
				        	 // app.toMaster("idCommonPlantSearch");
					    	  }
			      else
			    	  {
			    	 // globalProjectSearchFrom = "MOB18_scrap";
			    	  
			    	  getProjList_mob17();
			    	  
			    	  var app = sap.ui.getCore().byId("splitAppMOB17"); 
			    	  var Project = sap.ui.getCore().byId("idProject_17");
			    	  app.addMasterPage(Project);
			    	  
		        	  app.toMaster("idProject_17");
			    	  }
			      }
			  }).addStyleClass("matsearch");
			
		  inputproj_mob17.setVisible(false);
			
			
		
		var oLayout = new sap.ui.layout.VerticalLayout({
			content: [
						lblPlant, 
						inputPlant,
                       lblActType, 
                       actionType,
                       lblFrom,
                       fromStorage,
                       lblTo,
                       toStorage,
                      /* lblSpeStock,
                       radiobtn,
                       lblCustProj,
                       selectCustProj,
                       inputcust,
                       inputproj_mob17,*/
                       lblDummy]
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
					lblPlant, 
					inputPlant,
                   lblActType, 
                   actionType,
                   lblFrom,
                   fromStorage,
                   lblTo,
                   toStorage,
                   /*lblSpeStock,
                   radiobtn,
                   lblCustProj,
                   selectCustProj,
                   inputcust,
                   inputproj_mob17,*/
                   lblDummy],
		direction:"Column",
		justifyContent:"Center",
		alignItems:"Start",
		});
		
		//TheScrollContainer2.addStyleClass("ContainerPadAll");
		
		var oForm = new sap.ui.layout.form.SimpleForm({
		   //minWidth : 1024,
		    maxContainerCols: 1,
		    editable: true,
		    layout: "ResponsiveGridLayout",
		labelSpanL:3,
		labelSpanM:3,
		columnsL:1,
		columnsM:1,
		    content:[
						lblPlant, 
						inputPlant,
						lblActType, 
						actionType,
						lblFrom,
						fromStorage,
						lblTo,
						toStorage,
						/*lblSpeStock,
						radiobtn,
						lblCustProj,
						selectCustProj,
						inputcust,
						inputproj_mob17,*/
						lblDummy
			        ]
		});
		
		
		var btnNext = new sap.m.Button({
			 id : "matSerDetbtn2",
           text: "{i18n>MOB17_NEXT}",
           icon : "sap-icon://arrow-right",
           //type: sap.m.ButtonType.Accept,
           layoutData: new sap.m.FlexItemData({growFactor: 1}),
           press : function(){
           	 g_MobileNavigationId = "Mob17_MaterialSearch";
           	if ( g_runningOnPhone == true)
       		{
           		
           		var myApp = sap.ui.getCore().byId("myApp");
           		myApp.to("idMOB17_MasterMatSearch");
       		}else {
       			var app = sap.ui.getCore().byId("splitAppMOB17");  
       			app.toMaster("idMOB17_MasterMatSearch");
       			sap.ui.getCore().byId("addMatFooterLast").setVisible(false);
       		}
			}
         });
		
		var bar = new sap.m.Bar({
	        contentRight: [
	                       btnNext
	                       ]
		});
		
		if(g_runningOnPhone != true) {
			bar.addStyleClass("Matfooter");
		}
		
		var page = new sap.m.Page({
			id : "Mob17-BackNavButton",
			title: "Stock Transfer Action",
			//enableScrolling: false,
			showNavButton: true,
			content: [
			          oForm
			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			navButtonTap:function(){ 
				  g_MobileNavigationId = "MainGrid-Inventory";
	        	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuIMWM");
	        },
			showFooter: true,
			footer: bar
		});
		
		return page;
	}

});