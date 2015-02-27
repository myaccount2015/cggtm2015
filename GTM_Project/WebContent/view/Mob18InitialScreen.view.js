sap.ui.jsview("com.cg.gtm.view.Mob18InitialScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18InitialScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18InitialScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18InitialScreen
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		/*//To be defined before threesplit screen
		 var detailPage1 = sap.ui.view({id:"idMob18Orderpage", viewName:"com.cg.gtm.view.Mob18OrderItems", type:sap.ui.core.mvc.ViewType.JS});	
	     var detailPage2 = sap.ui.view({id:"idMob18Orderdetpage", viewName:"com.cg.gtm.view.Mob18OrderBearingCase", type:sap.ui.core.mvc.ViewType.JS});
	     
	     var detailPage3 = sap.ui.view({id:"idMob18Scrappage", viewName:"com.cg.gtm.view.Mob18Scrap_Items", type:sap.ui.core.mvc.ViewType.JS});	
	     var detailPage4 = sap.ui.view({id:"idMob18Scrapdetpage", viewName:"com.cg.gtm.view.Mob18Scrap_Bearingcase", type:sap.ui.core.mvc.ViewType.JS});*/
	     
	   /*  var detailPage5 = sap.ui.view({id:"idMob18WBSpage", viewName:"com.cg.gtm.view.Mob18WBS_Items", type:sap.ui.core.mvc.ViewType.JS});	
	     var detailPage6 = sap.ui.view({id:"idMob18WBSdetpage", viewName:"com.cg.gtm.view.Mob18WBS_Bearingcase", type:sap.ui.core.mvc.ViewType.JS});
	     
	     var detailPage6 = sap.ui.view({id:"idMob18Costpage", viewName:"com.cg.gtm.view.Mob18Cost_Items", type:sap.ui.core.mvc.ViewType.JS});	
	     var detailPage7 = sap.ui.view({id:"idMob18Costdetpage", viewName:"com.cg.gtm.view.Mob18Cost_BearingCase", type:sap.ui.core.mvc.ViewType.JS});*/
	     
		
	     
		
		
		
		 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//Mobile View
			
			if ( g_runningOnPhone == true)
				{
				var masterpage = sap.ui.view({id:"idMOB18StockMas", viewName:"com.cg.gtm.view.Mob18StockIssueMaster", type:sap.ui.core.mvc.ViewType.JS});
				
				//Plant Search Common Screen
				var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				//Customer Search common
				var Customer = sap.ui.view({id:"idCustomer_Mob18", viewName:"com.cg.gtm.view.Mob18_Customer", type:sap.ui.core.mvc.ViewType.JS});
				
				//Project Search common
				var Project = sap.ui.view({id:"idProject_Mob18", viewName:"com.cg.gtm.view.Mob18_Project", type:sap.ui.core.mvc.ViewType.JS});
				//var Project = sap.ui.getCore().byId("idProject_Mob18");
				
				var masterpage1 = sap.ui.view({id:"idMOB18Locmas", viewName:"com.cg.gtm.view.Mob18OrderActionType", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage2 = sap.ui.view({id:"idMOB18Scrapmas", viewName:"com.cg.gtm.view.Mob18ScrapMaster", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage3 = sap.ui.view({id:"idMOB18WBSmas", viewName:"com.cg.gtm.view.Mob18WBSMaster", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage4 = sap.ui.view({id:"idMOB18Costmas", viewName:"com.cg.gtm.view.Mob18CostMsater", type:sap.ui.core.mvc.ViewType.JS});
				
				var masterpage_mat = sap.ui.view({id:"idMOB18Matmas", viewName:"com.cg.gtm.view.Mob18MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
				//var detailBlankScreen = sap.ui.view({id:"idMOB18Blank", viewName:"com.cg.gtm.view.Mob18Blank", type:sap.ui.core.mvc.ViewType.JS});
				 var detailPage1 = sap.ui.view({id:"idMob18Orderpage", viewName:"com.cg.gtm.view.Mob18OrderItems", type:sap.ui.core.mvc.ViewType.JS});	
			     var detailPage2 = sap.ui.view({id:"idMob18Orderdetpage", viewName:"com.cg.gtm.view.Mob18OrderBearingCase", type:sap.ui.core.mvc.ViewType.JS});
			     
			     var detailPage3 = sap.ui.view({id:"idMob18Scrappage", viewName:"com.cg.gtm.view.Mob18Scrap_Items", type:sap.ui.core.mvc.ViewType.JS});	
			     var detailPage4 = sap.ui.view({id:"idMob18Scrapdetpage", viewName:"com.cg.gtm.view.Mob18Scrap_Bearingcase", type:sap.ui.core.mvc.ViewType.JS});
			     
				var app = sap.ui.getCore().byId("myApp"); 
				app.addPage(masterpage).addPage(masterpage1).addPage(commonPlantSearchPage).addPage(Customer).addPage(Project).addPage(masterpage2);
				app.addPage(masterpage3).addPage(masterpage4).addPage(masterpage_mat);
				app.addPage(detailPage1).addPage(detailPage2).addPage(detailPage3).addPage(detailPage4);
			//page
			return new sap.m.Page({
				id : "Mob18-BackNavButton",
				//title: "",
				content: [ masterpage ],
				showNavButton: false,
				showHeader : false,
				enableScrolling: false,
	            navButtonTap:function(){  
	            	  g_MobileNavigationId = "MainGrid-Inventory";
	            	var app = sap.ui.getCore().byId("myApp"); 
	                app.to("idGridSubMenuIMWM");
	                           },
	                           });
			}
			
			/////////////////////////////////////////////////////////////////////////////////////////////////////////////
			else{
			//Desktop View and Tablet View
				
				//To be defined before threesplit screen
				 var detailPage1 = sap.ui.view({id:"idMob18Orderpage", viewName:"com.cg.gtm.view.Mob18OrderItems", type:sap.ui.core.mvc.ViewType.JS});	
			     var detailPage2 = sap.ui.view({id:"idMob18Orderdetpage", viewName:"com.cg.gtm.view.Mob18OrderBearingCase", type:sap.ui.core.mvc.ViewType.JS});
			     
			     var detailPage3 = sap.ui.view({id:"idMob18Scrappage", viewName:"com.cg.gtm.view.Mob18Scrap_Items", type:sap.ui.core.mvc.ViewType.JS});	
			     var detailPage4 = sap.ui.view({id:"idMob18Scrapdetpage", viewName:"com.cg.gtm.view.Mob18Scrap_Bearingcase", type:sap.ui.core.mvc.ViewType.JS});
			
			     //Define Master Page
				var masterpage = sap.ui.view({id:"idMOB18StockMas", viewName:"com.cg.gtm.view.Mob18StockIssueMaster", type:sap.ui.core.mvc.ViewType.JS});
				
				//Plant Search Common Screen
				var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				
				//Customer Search common
				var Customer = sap.ui.view({id:"idCustomer_Mob18", viewName:"com.cg.gtm.view.Mob18_Customer", type:sap.ui.core.mvc.ViewType.JS});
				
				//Project Search common
				var Project = sap.ui.view({id:"idProject_Mob18", viewName:"com.cg.gtm.view.Mob18_Project", type:sap.ui.core.mvc.ViewType.JS});
				
				//var Project = sap.ui.getCore().byId("idProject_Mob18");
				
				var masterpage1 = sap.ui.view({id:"idMOB18Locmas", viewName:"com.cg.gtm.view.Mob18OrderActionType", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage2 = sap.ui.view({id:"idMOB18Scrapmas", viewName:"com.cg.gtm.view.Mob18ScrapMaster", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage3 = sap.ui.view({id:"idMOB18WBSmas", viewName:"com.cg.gtm.view.Mob18WBSMaster", type:sap.ui.core.mvc.ViewType.JS});
				var masterpage4 = sap.ui.view({id:"idMOB18Costmas", viewName:"com.cg.gtm.view.Mob18CostMsater", type:sap.ui.core.mvc.ViewType.JS});
				
				var masterpage_mat = sap.ui.view({id:"idMOB18Matmas", viewName:"com.cg.gtm.view.Mob18MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
				//var masterpage_mat = sap.ui.view({id:"idMOB18Matmas", viewName:"com.cg.gtm.view.Mob18MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
				
				var detailPage = sap.ui.view({id:"idMOB18SplitScreen", viewName:"com.cg.gtm.view.Mob18OrderThreeSplitScreen", type:sap.ui.core.mvc.ViewType.JS});
				var detailPage_Scrap = sap.ui.view({id:"idMOB18SplitScrap", viewName:"com.cg.gtm.view.Mob18ThreeSplitScrap", type:sap.ui.core.mvc.ViewType.JS});
				//var detailPage_WBS = sap.ui.view({id:"idMOB18SplitWBS", viewName:"com.cg.gtm.view.Mob18WBSThreeSplit", type:sap.ui.core.mvc.ViewType.JS});
				//var detailPage_Cost = sap.ui.view({id:"idMOB18SplitCost", viewName:"com.cg.gtm.view.Mob18CostThreesplit", type:sap.ui.core.mvc.ViewType.JS});
				
				
			    // var masterpage5 = sap.ui.view({id:"idMOB18Customer", viewName:"com.cg.gtm.view.Mob18Customer", type:sap.ui.core.mvc.ViewType.JS});
			    // var masterpage6 = sap.ui.view({id:"idMOB18Project", viewName:"com.cg.gtm.view.Mob18Project", type:sap.ui.core.mvc.ViewType.JS});
				var detailBlankScreen = sap.ui.view({id:"idMOB18Blank", viewName:"com.cg.gtm.view.Mob18Blank", type:sap.ui.core.mvc.ViewType.JS});
				
				var oSplitApp = new sap.m.SplitApp({id :"idMOB18SplitApp"});
				oSplitApp.addMasterPage(masterpage);
				oSplitApp.addDetailPage(detailBlankScreen);
				oSplitApp.addMasterPage(masterpage_mat);
				oSplitApp.addMasterPage(masterpage1);
				oSplitApp.addMasterPage(commonPlantSearchPage);
				oSplitApp.addMasterPage(Customer);
				oSplitApp.addMasterPage(Project);
				oSplitApp.addMasterPage(masterpage2);
				oSplitApp.addMasterPage(masterpage3);
				oSplitApp.addMasterPage(masterpage4);
				//oSplitApp.addMasterPage(masterpage5);
				//oSplitApp.addMasterPage(masterpage6);
			
				oSplitApp.addDetailPage(detailBlankScreen);
				
				
				//oSplitApp.setInitialMaster(masterpage);
			//oSplitApp.setInitialDetail(detailBlankScreen);
				
				// oSplitApp.setMode("ShowHideMode");
				
				
				oSplitApp.addDetailPage(detailPage);
				oSplitApp.addDetailPage(detailPage_Scrap);
				
				var msgDialog_nav = new sap.m.Dialog({
			    	title: "Warning",
			    	type: sap.m.DialogType.Message,
			    	 icon: "sap-icon://warning2",
			    	content: [
			    	          new sap.m.Text({
			    	text:"Are you sure you want to exit the screen which may result in data lose ?",
			    	})
			    	],

			    	rightButton: new sap.m.Button({
			    	text: "Yes",
			    	press: function () {
			    		msgDialog_nav.close();
			    		
						
						
					  	 if(g_runningOnPhone == true)
			 			{
			           	 // var appM = sap.ui.getCore().byId("myApp"); 
							    	
						//			appM.to("idMob18InitialScreen");
							// app.toDetail("idBlankScreen_18");
			           	
			 			}
					  	 else{
					  		  g_MobileNavigationId = "MainGrid-Inventory";
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           app.to("idGridSubMenuIMWM");
					  	 }
			         
						
			    	}
			    	}),
			    	leftButton: new sap.m.Button({
			    	text: "No",
			    	press: function () {
			    		msgDialog_nav.close();
			    		if( g_navbutton == "backOrder"){
			    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
							app.to("idMOB18Locmas");	
							app.toDetail("idMOB18Blank");
			    		}
			    		else if( g_navbutton == "backScrap"){
			    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
							app.toMaster("idMOB18Scrapmas");	
							app.toDetail("idMOB18Blank");
			    		}
			    		else if( g_navbutton == "backWBS"){
			    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
							app.toMaster("idMOB18WBSmas");	
							app.toDetail("idMOB18Blank");
			    		}
			    		else if( g_navbutton == "backCost"){
			    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
							app.toMaster("idMOB18Costmas");	
							app.toDetail("idMOB18Blank");
			    		}
			    		else if( g_navbutton == "backMatsearch"){
			    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
							app.toMaster("idMOB18Matmas");	
							app.toDetail("idMOB18Blank");
			    		} 
			    			else if( g_navbutton == "backOrderdetails"){
				    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
								app.to("idMOB18SplitScreen");	
								
				    		} 
				    			else if( g_navbutton == "backScrapdetails"){
					    			var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
									app.to("idMOB18SplitScrap");	
									
					    		}
			    	}
			    	})
			    	});
				 return new sap.m.Page({
					 id : "Mob18-BackNavButton",
						title: "Stock Issue",
						content: [
						          oSplitApp
						],
						showNavButton: true,
						enableScrolling: false,
						
						
			            navButtonTap:function(){  
			            	
			            	
			            	 g_MobileNavigationId = "MainGrid-Inventory";
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           app.to("idGridSubMenuIMWM");
	                           
			            	//msgDialog_nav.open();
			            	//globalLoadingPageMob18 = 1;
			            				//Order no
			            	/*if(navmat = "Mob18_nav"){
			            		hideidMob18first();
				            	hideidMob18second();
				            	hideidMob18first_Scrap();
				            	hideidMob18second_Scrap();
				            
			            	}*/
			            	
			  /*          	//Deselect table Items
			    			var deselect = sap.ui.getCore().byId("idtable_Order");
			    			deselect.removeSelections();
			    			
			            	
			            	//Deselect table Items
							var deselect = sap.ui.getCore().byId("tableMat");
							deselect.removeSelections();
							
							 var inputOrderno = sap.ui.getCore().byId("inputOrderno");
								inputOrderno.setValue(" ");
								
						//	var inputPlant = sap.ui.getCore().byId("inputPlant");
						//	inputPlant.setValue(" ");
							var inputOrderno = sap.ui.getCore().byId("inputOrderno");
							inputOrderno.setValueState(sap.ui.core.ValueState.None);
							
							//Cost
							var inputCostno = sap.ui.getCore().byId("inputCostno");
			            	inputCostno.setValue(" ");
						 
						//var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
						//inputPlant_Cost.setValue(" ");
						
						var inputCostno = sap.ui.getCore().byId("inputCostno");
						inputCostno.setValueState(sap.ui.core.ValueState.None);
						
						//WBS
						 var inputWBSno = sap.ui.getCore().byId("inputWBSno");
						 inputWBSno.setValue(" ");
						// var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
						// inputPlant_WBS.setValue(" ");
						 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
						 
						 //Scrap
						 var inputScrapno = sap.ui.getCore().byId("inputScrapno");
						 inputScrapno.setValue(" ");
						//var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
						//inputPlant_Scrap.setValue(" ");
						
						var inputScrapno = sap.ui.getCore().byId("inputScrapno");
						inputScrapno.setValueState(sap.ui.core.ValueState.None);
						
						 sap.ui.getCore().byId("inputMatNo_ser").setValue("");*/
						
						//Navigation to GridPage
			            	
			                           //var app1 = sap.ui.getCore().byId("idMOB18SplitApp"); 
			                          // app1.to("idMOB18Blank");
			                           //Remove Page
			                           //sap.ui.getCore().byId("idMob20InitialScreen").destroy();	
			                           //app.removePage("idMob20InitialScreen");
			                          
			                          
				                       
			            },
			            
				 });
				 }
				
				}
	
	
			});
		
		
		
		

 		
 	