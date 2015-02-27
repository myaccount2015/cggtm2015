sap.ui.jsview("com.cg.gtm.view.Mob18WBSMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18WBSMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18WBSMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18WBSMaster
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
			width : "80px"
		}).addStyleClass("FontBold");
		
		var inputPlant = new sap.m.Input("inputPlant_WBS",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
			 width : "194px",
		     // placeholder: 'Enter Plant',
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
		    	  globalPlantSearchFrom = "MOB18_WBS";
		    	  
		    	  getPlantList();
		    	  
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						//var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");  
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
		
		var lblWBS = new sap.m.Text({
			text: "{i18n>Mob18_lblWBS}",
			//width : "80px"
		}).addStyleClass("FontBold");
		
		var inputWBSno = new sap.m.Input("inputWBSno",{
		     
			 width : "194px",
		    
		     // placeholder: 'Enter WBS Number',
		    //  type :  sap.m.InputType.Tel,
		      liveChange : function()
		      {
		    	  
		    	 // field_numeric_validation(sap.ui.getCore().byId("inputWBSno"));//go to string utility 
		    	//  field_numeric_spl_validation(sap.ui.getCore().byId("inputWBSno"));
		      },
		  });
		///////////////////Not Used////////////////////////////////////
		var lblCustomer = new sap.m.Text({
			text: "{i18n>Mob18_lblCustomer}"
		});
		/*var inputCust = new sap.m.Input("inputCust",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    
		      placeholder: 'Enter Customer/Project Number',
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		
		    	  var radio = radiobtn.getSelectedItem().getText();
			      var item = sap.ui.getCore().byId("Item_WBS").getText();  
			      if(radio == item)
			    	{   var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		        	    app.toMaster("idMOB18Project");
			    	}
			    	else{
			    		var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		        	    app.toMaster("idMOB18Customer");
			    	}
			      }
		    	  
		      
		      
		    
		  });*/
	//////////////////////////////////////////////////////////////////////////////////////////////	
		/*//Radio Button
		// Create a simple RadioButtonGroup with two items
		var radiobtn = new sap.ui.commons.RadioButtonGroup({
			id : "radio_WBS",
			tooltip : "This is a test tooltip for the first RadioButtonGroup",
			columns : 2,
			//select : function() {alert('RadioButton ' + oRBG1.getSelectedItem().getText());} 
			});
		var oItem = new sap.ui.core.Item({
			id:"Item_WBS",
			text : "Project", 
			
			key : "Key1"
				});
		radiobtn.addItem(oItem);
		oItem = new sap.ui.core.Item({
			text : "Customer", 
			
			key : "Key2"});
		radiobtn.addItem(oItem);*/
		
    /////////////////////////Not Used////////////////////////////////////////
	

		/*var radiobtn = new sap.ui.commons.RadioButtonGroup({
			id : "idradio_wbs",
			columns : 3,
			select : function(event) {
            if(event.mParameters.selectedIndex == 0) { //QI Selected
					
            	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS");
            	selectCustProj.setVisible(false);
            	var selectCustProj = sap.ui.getCore().byId("selectCustProj_WBS2");
            	selectCustProj.setVisible(false);
            	var lblCustProj = sap.ui.getCore().byId("idCustproj");
            	lblCustProj.setVisible(false);
				}
               else	if(event.mParameters.selectedIndex == 1) { //QI Selected
						
						callProjSearchHelp_WBS();
					}else if(event.mParameters.selectedIndex == 2) { //Blocked Selected
						
						callCustomerSearchHelp_WBS();
					}
				} 
			}).addStyleClass("topPadding");
		var oItem = new sap.ui.core.Item("optNone_WBS", {
			text : "None", 	
			key : "Key1",
			selected : true});
		radiobtn.addItem(oItem);
		var oItem = new sap.ui.core.Item("optProject_WBS", {
			text : "Project", 	
			key : "Key2"
				});
		radiobtn.addItem(oItem);
		var oItem = new sap.ui.core.Item("optCustomer_WBS", {
			text : "Customer", 	
			key : "Key3"});
		radiobtn.addItem(oItem);*/
		
		
//////////////////////////////////////////////////////////////////////////////////////////////////////
		var radiobtn0 = new sap.m.RadioButton({
			id : "idradio-wbs-0-Mob18",
			groupName : "Mob18-WBS-Radio",
			text : "None",
			selected:true,
			select : function()
			{ //None Selected
				var selectCustProj = sap.ui.getCore().byId("inputproject_wbs");
            	selectCustProj.setVisible(false);
            	var selectCustProj = sap.ui.getCore().byId("inputcustomer_wbs");
            	selectCustProj.setVisible(false);
            	var lblCustProj = sap.ui.getCore().byId("idCustproj");
            	lblCustProj.setVisible(false);
			}
		
		});
		
		var radiobtn1 = new sap.m.RadioButton({
			id : "idradio-wbs-1-Mob18",
			groupName : "Mob18-WBS-Radio",
			text : "Project",
			select : function()
			{ //Project Selected
				//callProjSearchHelp_WBS();
				var selectCustProj = sap.ui.getCore().byId("inputproject_wbs");
				
			
				
				selectCustProj.setVisible(true);
				var lblCustProj = sap.ui.getCore().byId("idCustproj");
				lblCustProj.setVisible(true);
				 sap.ui.getCore().byId("inputcustomer_wbs").setVisible(false);
			}
			
		});
		
		var radiobtn2 = new sap.m.RadioButton({
			id : "idradio-wbs-2-Mob18",
			groupName : "Mob18-WBS-Radio",
			text : "Customer",
			select : function()
			{ //Customer Selected
				//callCustomerSearchHelp_WBS();
				var selectCustProj = sap.ui.getCore().byId("inputproject_wbs");
				
			
				
				selectCustProj.setVisible(false);
				var lblCustProj = sap.ui.getCore().byId("idCustproj");
				lblCustProj.setVisible(true);
				 sap.ui.getCore().byId("inputcustomer_wbs").setVisible(true);
			}
		
		
		});
		
		
		
		var radiobtn = new sap.m.HBox({
			
		});
		radiobtn.addItem(radiobtn0);
		radiobtn.addItem(radiobtn1);
		radiobtn.addItem(radiobtn2);
		
		
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
				
		
		var lblCustProj = new sap.m.Text("idCustproj",{
		      text: "{i18n>Mob18_lblCustomer}",
		      width: "270px"
		    });
		
		lblCustProj.addStyleClass("topPadding");
		lblCustProj.setVisible(false);
		
		
		var selectQIBlock = new sap.m.Select("selectCustProj_WBS2", {
			width : "200px",
		      items: {
		        path: "/MOB18CustProj",
		        sorter: new sap.ui.model.Sorter("CustomerNo", false),
		        template: new sap.ui.core.Item({
		          key: "{CustomerNo}",
		          text: "{CustomerName}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		selectQIBlock.setVisible(false);
		
		
		var selectCustProj = new sap.m.Select("selectCustProj_WBS", {
			width : "200px",
		      items: {
		        path: "/MOB18CustProj",
		        sorter: new sap.ui.model.Sorter("WBSElementNo", false),
		        template: new sap.ui.core.Item({
		          key: "{WBSElementNo}",
		          text: "{WBSElementDesc}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		selectCustProj.setVisible(false);
		
		
		var inputcust_wbs = new sap.m.Input("inputcustomer_wbs",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		      placeholder: 'Select Customer..',
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
		         text: "{custName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  

					
					if ( g_runningOnPhone == true)
				{
						globalCustomerSearchFrom = "MOB18_wbs";
				    	  
				    	  getCustList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonCustSearchPage = sap.ui.getCore().byId("idCustomer_Mob18");
				    	  app.to(commonCustSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalCustomerSearchFrom = "MOB18_wbs";
		    	  
		   	getCustList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idCustomer_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idCustomer_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputcust_wbs.setVisible(false);
		
		
		var inputproj_wbs = new sap.m.Input("inputproject_wbs",{
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
						globalProjectSearchFrom = "MOB18_wbs";
				    	  
						getProjList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonprojSearchPage = sap.ui.getCore().byId("idProject_Mob18");
				    	  app.to(commonprojSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalProjectSearchFrom = "MOB18_wbs";
		    	  
		    	  getProjList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idProject_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idProject_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputproj_wbs.setVisible(false);
		  
		
		
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
			
				 
				 var inputWBSno = sap.ui.getCore().byId("inputWBSno");
				 inputWBSno.setValue(" ");
				// var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
				// inputPlant_WBS.setValue(" ");
				 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
	    	
	    	}
	    	}),
	    	leftButton: new sap.m.Button({
	    	text: "No",
	    	press: function () {
	        	msgDialog1.close();
	        	var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
	        	app.toMaster("idMOB18WBSmas");	
				app.toDetail("idMOB18Blank");
	    	}
	    	})
	    	});
		
		
		var lblFrom = new sap.m.Text({
		      text: "{i18n>Mob18_Storage}",
		      width: "270px"
		    });
		
		lblFrom.addStyleClass("topPadding");
		
		var fromStorage = new sap.m.Select("idStorage_wbs", {
			width : "200px",
		      items: {
		        path: "/results",
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
		
		var lblActType = new sap.m.Text({
			  //width: "90px",
		      text: "{i18n>Mob18_Movt}"
		    });
		
		lblActType.addStyleClass("topPadding");
		
		var actionType = new sap.m.Select("MvtType_wbs", {
			autoAdjustWidth : true,
			 // width: "90%",
			width : "199px",
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{MovementtypeId}",
		          text: "{MovementtypeDesc}"
		        })
		      } ,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      }),
		      change : function(oEvent)
		      {
		    	 
		    	//alert(oEvent.oSource.mProperties.selectedKey);  
		    	
		    	var key = oEvent.oSource.mProperties.selectedKey;
		    	callReasoncode_wbs(key);
		      }
		    });
		
		var lblReason = new sap.m.Text({
			 width: "90px",
		      text: "{i18n>Mob18_Res}"
		    });
		
		lblReason.addStyleClass("topPadding");
		
		var ReasonType = new sap.m.Select("ResType_wbs", {
			//autoAdjustWidth : true,
			 // width: "90%",
			width : "199px",
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{ReasonCodeNo}",
		          text: "{ReasonCodeText}"
		        })
		      } ,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      }),
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
				
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_18lbl");
		
		
		var container_WBS = new sap.m.FlexBox({
			items: [
			        
			        lblWBS,
			        inputWBSno
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_input");
		
		/*var container_Cust = new sap.m.FlexBox({
			items: [
			        lblDummy7,
			        lblCustomer,
			       // inputCust
				
				
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("flex_desc");
		
		var container_radio = new sap.m.FlexBox({
			items: [
			        radiobtn,
				
				
				//inputPlant
			        
			        ],
			//direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("flex_desc");*/
		
		
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
		
		var btnBack = new sap.m.Button({
			text : "{i18n>Mob18_back}",
			 icon: "sap-icon://close-command-field",
			press : function(){
				
            	//var btnShow = sap.ui.getCore().byId("idshow");
				//btnShow.setVisible(false);
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
			
				 
				 var inputWBSno = sap.ui.getCore().byId("inputWBSno");
				 inputWBSno.setValue(" ");
				// var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
				// inputPlant_WBS.setValue(" ");
				 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
			}
		});
		var container_Main = new sap.m.ScrollContainer({
			horizontal : true,
            vertical : true,
			content: [
			       
			        lblDummy,
			        container_plant,	
			        lblDummy1,
			        container_WBS,
			        container_Mvttype,
				    lblDummy3,
				    container_Restype,
				    lblDummy3,
			        container_storage,
				    lblDummy2,
				    radiobtn,
				    lblDummy3,
			        lblCustProj,
			        selectCustProj,
			        selectQIBlock,
			        inputcust_wbs,
			        inputproj_wbs,
			        lblDummy4
			        
			        ],
			
		}).addStyleClass("ContainerPadding");
		
		var btnShow = new sap.m.Button({
        	//id : "idshow",
			 text : "{i18n>Mob18_Next}",
			 icon: "sap-icon://open-command-field",
			 //icon: "sap-icon://search",
	         //   style : sap.ui.commons.ButtonStyle.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1}),
	            press : function(){
	            	backNavMat = "Mob18_matback2";
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
					        
					        lblCustProj
					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  var container_lblproj = new sap.m.FlexBox({
					items: [
											        
						//lblCustProj,
						selectCustProj,
						selectQIBlock,
						inputproj_wbs,
						inputcust_wbs

					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  var container_Main = new sap.m.ScrollContainer({
					horizontal : true,
		            vertical : true,
					content: [
					       
					        lblDummy,
					        container_plant,	
					        lblDummy1,
					        container_WBS,
					      
					        container_Mvttype,
						    lblDummy3,
						    container_Restype,
						    lblDummy3,
					        container_storage,
						    lblDummy2,
						    container_QI,
						    lblDummy3,
						    container_Proj,
						    container_lblproj,
					       selectQIBlock,
					       inputcust_wbs,
					       inputproj_wbs,
					        lblDummy4
					        
					        ],
					
				}).addStyleClass("ContainerPadding");
			  return new sap.m.Page({
				  id : "Mob18_WBSMaster",
					title: "Location",
					//headerContent :[btnBack],
					content: [
						container_Main
						
					],
					showFooter: true,	
					footer: new sap.m.Bar({
						contentLeft: [  btnBack],
				        contentRight: [
				                       btnBack,
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
			  
		
		
 		return new sap.m.Page({
 			 id : "Mob18_WBSMaster",
			title: "Location",
			//headerContent :[btnBack],
			content: [
					container_Main,
					
			],
			showFooter: true,	
			footer: new sap.m.Bar({
				contentLeft: [  btnBack],
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