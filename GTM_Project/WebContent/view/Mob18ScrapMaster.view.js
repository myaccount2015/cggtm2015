sap.ui.jsview("com.cg.gtm.view.Mob18ScrapMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18ScrapMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18ScrapMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18ScrapMaster
	*/ 
	createContent : function(oController) {
		var lblDummy = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblPlant = new sap.m.Text({
			text: "{i18n>Mob18_Plant}",
			
		}).addStyleClass("FontBold");
		
		var inputPlant = new sap.m.Input("inputPlant_Scrap",{
			 type: sap.m.InputType.Email,
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  globalPlantSearchFrom = "MOB18_scrap";
		    	  getPlantList();
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idCommonPlantSearch");
					}
		    	  else{
		    		  var app = sap.ui.getCore().byId("idMOB18SplitApp");
			    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
			    	  app.addMasterPage(commonPlantSearchPage);
		        	  app.toMaster("idCommonPlantSearch");
		    	  }
		    	 
		      }
		    
		  });
		
		
		var lblScrap = new sap.m.Text({
			text: "{i18n>Mob18_lblCost}",
			//
		}).addStyleClass("FontBold");
		
		var inputScrapno = new sap.m.Input("inputScrapno",{
		      liveChange : function()
		      {
		      },
		  });
		/////////////////////////not used//////////////////////////////////////////////////
		var lblCustomer = new sap.m.Label({
			text: "{i18n>Mob18_lblCustomer}",
	
		});
		
		
		/*//Radio Button
		// Create a simple RadioButtonGroup with two items
		var radiobtn = new sap.ui.commons.RadioButtonGroup({
			//id : "idradio_scrap",
			//tooltip : "This is a test tooltip for the first RadioButtonGroup",
			columns : 2,
			
			select : function() {
				// oController.select();
				//alert('RadioButton ' + radiobtn.getSelectedItem().getText());
				} 
			});
		var oItem = new sap.ui.core.Item({
			id :"Item_scrap",
			text : "Q1", 
			
			key : "Key1"
				});
		radiobtn.addItem(oItem);
		oItem = new sap.ui.core.Item({
			text : "Blocked", 
			
			key : "Key2",
			});
		radiobtn.addItem(oItem);*/
		
		////////////////////////////////not used///////////////////////////////////////////////
		
		
		
		/*var radiobtn = new sap.ui.commons.RadioButtonGroup({
			columns : 3,
			select : function(event) {
				if(event.mParameters.selectedIndex == 0) { //QI Selected
					
					var SelectedQIBlock = sap.ui.getCore().byId("selectQIBlock1");
					SelectedQIBlock.setVisible(false);
					var lblQIBlock = sap.ui.getCore().byId("idQIBlock");
					lblQIBlock.setVisible(false);
				}
				else if(event.mParameters.selectedIndex == 1) { //QI Selected
						
					//	callQSearchHelp_scrap();
					}else if(event.mParameters.selectedIndex == 2) { //Blocked Selected
						
						//callBlockedSearchHelp_scrap();
					}
			}
			}).addStyleClass("topPadding");
		oItem = new sap.ui.core.Item("optNone_Scrap", {
			text : "None", 	
			key : "Key1",
			selected : true});
		radiobtn.addItem(oItem);
		var oItem = new sap.ui.core.Item("optQI", {
			text : "QI", 	
			key : "Key2"
				});
		radiobtn.addItem(oItem);
		oItem = new sap.ui.core.Item("optBlocked", {
			text : "Blocked", 	
			key : "Key3"});
		radiobtn.addItem(oItem);*/
		
//////////////////		
		//TODO...
		// Where it is passing...
		var radiobtn0 = new sap.m.RadioButton({
			//id : "optNone_Scrap",
			groupName : "Mob18-Scrapping-Radio",
			text : "None",
			selected:true,
			
		});
		
		var radiobtn1 = new sap.m.RadioButton({
           // id:"optQI",
			groupName : "Mob18-Scrapping-Radio",
			text : "QI",
			
		});
		
		var radiobtn2 = new sap.m.RadioButton({
	       // id : "optBlocked",
			groupName : "Mob18-Scrapping-Radio",
			text : "Blocked",
			
		});
			
		
		var radiobtn = new sap.m.HBox({
			
		});
		radiobtn.addItem(radiobtn0);
		radiobtn.addItem(radiobtn1);
		radiobtn.addItem(radiobtn2);
		
		
		
	/////////////////////////////////////////////////////////////////////////////////////////////////////				
         /*  var radiobtn_cp = new sap.ui.commons.RadioButtonGroup({
								id : "idradio_scrap",
								columns : 3,
								select : function(event) {
									 if(event.mParameters.selectedIndex == 0) { //Project Selected
										 var selectCustProject = sap.ui.getCore().byId("selectCustProj1");
										 selectCustProject.setVisible(false);
										 var selectCustProject = sap.ui.getCore().byId("selectCustProj2");
										 selectCustProject.setVisible(false);
										 var lblCustProj = sap.ui.getCore().byId("idCustProj");
										 lblCustProj.setVisible(false);
										}
									 else if(event.mParameters.selectedIndex == 1) { //Project Selected
								
								callProjectSearchHelp_scrap();
							}else if(event.mParameters.selectedIndex == 2) { //Customer Selected
								
								callCustomerSearchHelp_scrap();
							}
						} 
					}).addStyleClass("topPadding");
					
								oItem = new sap.ui.core.Item("optNone_Pro", {
									text : "None", 	
									key : "Key1",
									selected : true});
								radiobtn_cp.addItem(oItem);
								
		oItem = new sap.ui.core.Item("optProject-scrap", {
			text : "Project", 	
			key : "Key1"});
		radiobtn_cp.addItem(oItem);
		oItem = new sap.ui.core.Item("optCustomer_scrap", {
			text : "Customer", 	
			key : "Key2"});
		radiobtn_cp.addItem(oItem);*/
		
		
		
		
		
		var radiobtn0_Row1 = new sap.m.RadioButton({
			//id : "optNone_Scrap",
			groupName : "Mob18-Scrapping-1-Radio",
			text : "None",
			selected:true,
			select : function()
			{
				 var selectCustProject = sap.ui.getCore().byId("inputproject_scrap");
				 selectCustProject.setVisible(false);
				 var selectCustProject = sap.ui.getCore().byId("selectCustProj2");
				 selectCustProject.setVisible(false);
				 var lblCustProj = sap.ui.getCore().byId("idCustProj");
				 lblCustProj.setVisible(false);
				 sap.ui.getCore().byId("inputcustomer_scrap").setVisible(false);
				
			}
			
		});
		
		var radiobtn1_Row1 = new sap.m.RadioButton({
           id:"optQI",
			groupName : "Mob18-Scrapping-1-Radio",
			text : "Project",
			select : function()
			{
				//callProjectSearchHelp_scrap();
				 var selectCustProject = sap.ui.getCore().byId("inputproject_scrap");
				 selectCustProject.setVisible(true);
				  var lblCustProj = sap.ui.getCore().byId("idCustProj");
				 lblCustProj.setVisible(true);
				 sap.ui.getCore().byId("inputcustomer_scrap").setVisible(false);
				
			}
			
		});
		
		var radiobtn2_Row1 = new sap.m.RadioButton({
	        id : "optBlocked",
			groupName : "Mob18-Scrapping-1-Radio",
			text : "Customer",
			select : function()
			{
				//callCustomerSearchHelp_scrap();inputcustomer_scrap
				 var selectCustProject = sap.ui.getCore().byId("inputproject_scrap");
				 selectCustProject.setVisible(false);
				  var lblCustProj = sap.ui.getCore().byId("idCustProj");
				 lblCustProj.setVisible(true);
				 sap.ui.getCore().byId("inputcustomer_scrap").setVisible(true);
			}
		});
			
		
		var radiobtn_cp = new sap.m.HBox({
			
		});
		radiobtn_cp.addItem(radiobtn0_Row1);
		radiobtn_cp.addItem(radiobtn1_Row1);
		radiobtn_cp.addItem(radiobtn2_Row1);
		
		
		
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		var lblQIBlock = new sap.m.Text("idQIBlock",{
		      text: "{i18n>Mob18_lblQBlock}",
		      
		    });
		
		lblQIBlock.addStyleClass("topPadding");
		lblQIBlock.setVisible(false);
		
		var lblCustProj = new sap.m.Text("idCustProj",{
		      text: "{i18n>Mob18_lblCustomer}",
		      
		      
		    });
		
		lblCustProj.addStyleClass("topPadding");
		lblCustProj.setVisible(false);
		
		var selectQIBlock = new sap.m.Select("selectCustProj2", {
			
		      items: {
		        path: "/MOB18CustProj",
		        sorter: new sap.ui.model.Sorter("CustomerNo", false),
		        template: new sap.ui.core.Item({
		          key: "{CustomerNo}",
		          text: "{CustomerName}"
		        })
		      } ,
		      
		    });
		selectQIBlock.setVisible(false);
		
		
		var inputcust_scrap = new sap.m.Input("inputcustomer_scrap",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		      placeholder: 'Select Customer..',
		    //showSuggestion: true,
		     suggestionItems: {
		        path: "/MOB18CustProj",
		        template: new sap.ui.core.Item({
		         text: "{custName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
				{
						globalCustomerSearchFrom = "MOB18_scrap";
				    	  
				    	  getCustList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonCustSearchPage = sap.ui.getCore().byId("idCustomer_Mob18");
				    	  app.to(commonCustSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalCustomerSearchFrom = "MOB18_scrap";
		    	  
		   	getCustList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idCustomer_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idCustomer_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputcust_scrap.setVisible(false);
		
		
		
		var inputproj_scrap = new sap.m.Input("inputproject_scrap",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		      placeholder: 'Select Project....',
		    //showSuggestion: true,
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
						globalProjectSearchFrom = "MOB18_scrap";
				    	  
						getProjList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  
				    	  var commonprojSearchPage = sap.ui.getCore().byId("idProject_Mob18");
				    	  app.to(commonprojSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalProjectSearchFrom = "MOB18_scrap";
		    	  
		    	  getProjList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idProject_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idProject_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputproj_scrap.setVisible(false);
		
		  
		
		var selectCustProj = new sap.m.Select("selectCustProj1", {
			
		      items: {
		        path: "/MOB18CustProj",
		        sorter: new sap.ui.model.Sorter("WBSElementNo", false),
		        template: new sap.ui.core.Item({
		          key: "{WBSElementNo}",
		          text: "{WBSElementDesc}",
		        	  visible : false
		        })
		      } ,
		      
		    });
		selectCustProj.setVisible(false);
		
		var msgDialog1 = new sap.m.Dialog({
	    	title: "Warning",
	    	type: sap.m.DialogType.Message,
	    	 icon: "sap-icon://warning2",
	    	content: [
	    	          new sap.m.Text({
	    	text:"Are you sure you want to exit the screen which may result in data loss ?",
	    	})
	    	],

	    	rightButton: new sap.m.Button({
	    	text: "Yes",
	    	press: function () {
	    		msgDialog1.close();
	    	
				
	    	   
               
                  
				//hideidMob18first_Scrap();
				//hideidMob18second_Scrap();
			//	var tabMaterialLst = sap.ui.getCore().byId("tableMat").removeAllItems();
				//Deselect table Items
				var deselect = sap.ui.getCore().byId("tableMat");
				deselect.removeSelections();
				
				//Clear Input Fields
				 sap.ui.getCore().byId("inputSerial_scrap").setValue("");
			  	 sap.ui.getCore().byId("inputbatch_Scrap").setValue("");
			  	 sap.ui.getCore().byId("inputQty_Scrap").setValue("");
			  	sap.ui.getCore().byId("lblErrVal1").setText("");
			    
                if(g_runningOnPhone == true)
    			{
              	  var appM = sap.ui.getCore().byId("myApp"); 
				    	
						appM.to("idMob18InitialScreen");
   				// app.toDetail("idBlankScreen_18");
              	
    			}
                else{
                 	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
   				 app.toMaster("idMOB18StockMas");
   				 app.toDetail("idMOB18Blank");
                }
	          
				 var inputScrapno = sap.ui.getCore().byId("inputScrapno");
				 inputScrapno.setValue(" ");
			//	var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			//	inputPlant_Scrap.setValue(" ");
				
				var inputScrapno = sap.ui.getCore().byId("inputScrapno");
				inputScrapno.setValueState(sap.ui.core.ValueState.None);
	    	}
	    	
	    	}),
	    	leftButton: new sap.m.Button({
	    	text: "No",
	    	press: function () {
	        	msgDialog1.close();
	        	var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
	        	app.toMaster("idMOB18Scrapmas");	
				app.toDetail("idMOB18Blank");
	        	
	    	}
	    	})
	    	});
		
		
		var lblActType = new sap.m.Text({
			  //
		      text: "{i18n>Mob18_Movt}"
		    });
		
		lblActType.addStyleClass("topPadding");
		
		var actionType = new sap.m.Select("MvtType_scrap", {
			autoAdjustWidth : true,
			 // width: "90%",
			
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{MovementtypeId}",
		          text: "{MovementtypeDesc}"
		        })
		      } ,
		      change : function(oEvent)
		      {
		    	 
		    	//alert(oEvent.oSource.mProperties.selectedKey);  
		    	
		    	var key = oEvent.oSource.mProperties.selectedKey;
		    	callReasoncode_scrap(key);
		      }
		    });
		
		var lblReason = new sap.m.Text({
			 
		      text: "{i18n>Mob18_Res}"
		    });
		
		lblReason.addStyleClass("topPadding");
		
		var ReasonType = new sap.m.Select("ResType_scrap", {
			//autoAdjustWidth : true,
			 // width: "90%",
			
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{ReasonCodeNo}",
		          text: "{ReasonCodeText}"
		        })
		      } ,
		      //change: oController.onActionChange
		    });
		
		var container_Mvttype = new sap.m.FlexBox({
			items: [
			        
			        lblActType,
			        actionType,
			        lblDummy5
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Restype = new sap.m.FlexBox({
			items: [
			        
			        lblReason,
			        ReasonType,
			        lblDummy5
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_plant = new sap.m.FlexBox({
			items: [
				lblPlant,
				inputPlant
		        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex");
		
		
		var lblFrom = new sap.m.Label({
		      text: "{i18n>Mob18_Storage}",
		      
		    });
		
		lblFrom.addStyleClass("topPadding");
		
		var fromStorage = new sap.m.Select("idStorage", {
			
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("StorageLocationId", false),
		        template: new sap.ui.core.Item({
		          key: "{StorageLocationId}",
		          text: "{StorageLocationDesc}"
		        })
		      } ,
		      
		    });
		
		
		var container_scrap = new sap.m.FlexBox({
			items: [
			        
			        lblScrap,
			      
			        inputScrapno,
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex");
		
		var container_Cust = new sap.m.FlexBox({
			items: [
			        
			        lblCustomer,
			      //  inputcust
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_desc");
		
		var container_storage = new sap.m.FlexBox({
			items: [
			        
			        lblFrom,
			        fromStorage
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_radio = new sap.m.FlexBox({
			items: [
			        
			        
				//inputPlant
			        
			        ],
			//direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_desc");
		
		var btnBack = new sap.m.Button({
			text : "{i18n>Mob18_back}",
			 icon: "sap-icon://close-command-field",
			press : function(){
			
				//msgDialog1.open();
				//Deselect table Items
				var deselect = sap.ui.getCore().byId("tableMat");
				deselect.removeSelections();
				
				//Clear Input Fields
				 sap.ui.getCore().byId("inputSerial_scrap").setValue("");
			  	 sap.ui.getCore().byId("inputbatch_Scrap").setValue("");
			  	 sap.ui.getCore().byId("inputQty_Scrap").setValue("");
			  	sap.ui.getCore().byId("lblErrVal1").setText("");
			    
                if(g_runningOnPhone == true)
    			{
              	  var appM = sap.ui.getCore().byId("myApp"); 
				    	
						appM.to("idMob18InitialScreen");
   				// app.toDetail("idBlankScreen_18");
              	
    			}
                else{
                 	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
   				 app.toMaster("idMOB18StockMas");
   				 app.toDetail("idMOB18Blank");
                }
	          
				 var inputScrapno = sap.ui.getCore().byId("inputScrapno");
				 inputScrapno.setValue(" ");
			//	var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			//	inputPlant_Scrap.setValue(" ");
				
				var inputScrapno = sap.ui.getCore().byId("inputScrapno");
				inputScrapno.setValueState(sap.ui.core.ValueState.None);
				
			}
		});
	/*	var container_Main = new sap.m.ScrollContainer({
			horizontal : true,
            vertical : true,
			content: [
			          lblDummy,
			        container_plant,	
			        lblDummy1,
				    container_scrap,
				    container_Mvttype,
				    lblDummy3,
				    container_Restype,
				    lblDummy3,
				    container_storage,
				    lblDummy3,
				    radiobtn,
				    lblQIBlock,
			        lblDummy5,
			        radiobtn_cp,
			        lblCustProj,
			        selectCustProj,
			        selectQIBlock,
			        inputcust_scrap,
			        inputproj_scrap,
			        lblDummy3,
			        lblDummy7
			        ],
			
		}).addStyleClass("ContainerPadding");*/
		
		
		var container_Main = new sap.ui.layout.form.SimpleForm({
			 layout: "ResponsiveGridLayout",
			content: [
						lblPlant,
						inputPlant,
						lblScrap,
						inputScrapno,
						lblActType,
						actionType,
						lblReason,
						ReasonType,
						lblFrom,
						fromStorage,
						
			        ],
			
		});
		
		var btnShow = new sap.m.Button({
        	//id : "idshow",
			 text : "{i18n>Mob18_Next}",
			// icon : "sap-icon://begin",
		    icon: "sap-icon://open-command-field",
	      //      style : sap.ui.commons.ButtonStyle.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1}),
	            press : function(){
	            //	oController.additem();
	            	//backNavMat= "Mob18_matback";
	            	oController.check();
	            	
	            	
	            }
	           
		});
       // btnShow.setVisible(false);
		/////////////////////Mobile Version//////////////////
		  if ( g_runningOnPhone == true)
			{
			  //Radio Button
			  var container_QI = new sap.m.FlexBox({
					items: [
					        
					        radiobtn
					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  var container_Proj = new sap.m.FlexBox({
					items: [
					        
					        radiobtn_cp
					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  var container_lblproj = new sap.m.FlexBox({
					items: [
											        
						lblCustProj,
						inputcust_scrap

					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  return new sap.m.Page({
				  id : "Mob18_scrapmas",
					title: "Location",
					//headerContent :[btnBack],
					content: [
						container_Main
						
					],
					showFooter: true,	
					footer: new sap.m.Bar({
						contentLeft: [ btnBack],
				        contentRight: [
				                       
				                     btnShow    
				                       ]
					}).addStyleClass("footer_phone"),
					showNavButton: true,
					
		            navButtonTap:function(){  
		          	  g_MobileNavigationId = "Mob18-BackNavButton";
		            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
		                           var app = sap.ui.getCore().byId("myApp"); 
		                           app.to("idMob18InitialScreen");
		                           }
				});
			}
		  
		  else{
			  
	///////////Tablet/Desktop version//////////////////////
 		return new sap.m.Page({
 			  id : "Mob18_scrapmas",
			title: "Location",
			//headerContent :[btnBack],
			content: [
				container_Main,
			    radiobtn,
			    lblQIBlock,
		        radiobtn_cp,
		        lblCustProj,
		        selectCustProj,
		        selectQIBlock,
		        inputcust_scrap,
		        inputproj_scrap,
				
			],
			showFooter: true,	
			footer: new sap.m.Bar({
				contentLeft: [ btnBack],
		        contentRight: [
		                       
		                     btnShow    
		                       ]
			}).addStyleClass("footer"),
			showNavButton: false,
			
	        navButtonTap:function(){  
	      	  g_MobileNavigationId = "Mob18_stock";
	        	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	      	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
			 app.toMaster("idMOB18StockMas");
			 app.toDetail("idMOB18Blank");
	                       }
		});
	}
	}

});
