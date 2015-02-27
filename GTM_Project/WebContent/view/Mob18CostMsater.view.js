sap.ui.jsview("com.cg.gtm.view.Mob18CostMsater", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18CostMsater
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18CostMsater";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18CostMsater
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
		
		var inputPlant = new sap.m.Input("inputPlant_Cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
			 width : "194px",
		    //  placeholder: 'Enter Plant',
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
		    	  globalPlantSearchFrom = "MOB18_cost";
		    	  
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
		
		
		var lblCost = new sap.m.Text({
			text: "{i18n>Mob18_lblCost}",
			//width : "80px"
		}).addStyleClass("FontBold");
		
		var inputCostno = new sap.m.Input("inputCostno",{
		     
			 width : "194px",
		    //  placeholder: 'Enter Cost Center Number',
			// type :  sap.m.InputType.Tel,
		      liveChange : function()
		      {
		    	  
		    	  //field_numeric_validation(sap.ui.getCore().byId("inputCostno"));//go to string utility 
		    	//  field_numeric_spl_validation(sap.ui.getCore().byId("inputCostno"));
		      },
			
		    
		  });
		var lblDesc = new sap.m.Text({
			text: "{i18n>Mob18_Desc}"
		}).addStyleClass("FontBold");
		var txtDesc = new sap.m.Text({
			text : "{i18n>Mob18_txtcstDesc}"
		});
	///////////////////////////////////////////////////////////////////////////////////////////	
		
		/*var radiobtn = new sap.ui.commons.RadioButtonGroup({
			id : "idradio-cost",
		//	columns : 3,
			groupName : "Mob18-Cost-Center-Radio",
			select : function(event) {
				if(event.mParameters.selectedIndex == 0) { //QI Selected
					
					var lblCustProj = sap.ui.getCore().byId("idCost");
					lblCustProj.setVisible(false);
					var selectCustProj = sap.ui.getCore().byId("selectCustProj_Cost");
					selectCustProj.setVisible(false);
					var selectCustProj = sap.ui.getCore().byId("selectCustProj_Cost2");
					
					selectCustProj.setVisible(false);
				}
					if(event.mParameters.selectedIndex == 1) { //QI Selected
						
						callProjSearchHelp_Cost();
					}else if(event.mParameters.selectedIndex == 2) { //Blocked Selected
						
						callCustomerSearchHelp_Cost();
					}
				} 
			}).addStyleClass("topPadding");
		
		
		
		
		var oItem = new sap.ui.core.Item("optNone_Cost", {
			text : "None", 	
			key : "Key1",
			selected : true});
		radiobtn.addItem(oItem);
		var oItem1 = new sap.ui.core.Item("optProject_Cost", {
			text : "Project", 	
			key : "Key2"
				});
		radiobtn.addItem(oItem1);
		var oItem2 = new sap.ui.core.Item("optCustomer_Cost", {
			text : "Customer", 	
			key : "Key3"});
		radiobtn.addItem(oItem2);*/
		
		
	/////////////////////////////////////////////////////////////////////////////////////////
		
		var radiobtn0 = new sap.m.RadioButton({
			id : "idradio-cost-Mob18-0",
			groupName : "Mob18-Cost-Center-Radio",
			text : "None",
			selected:true,
			select : function()
			{
				var lblCustProj = sap.ui.getCore().byId("idCost");
				lblCustProj.setVisible(false);
				var selectCustProj = sap.ui.getCore().byId("inputproject_cost");
				selectCustProj.setVisible(false);
				var selectCustProj = sap.ui.getCore().byId("selectCustProj_Cost2");
				selectCustProj.setVisible(false);
				 sap.ui.getCore().byId("inputcustomer_cost").setVisible(false);
			}
		
		});
		
		var radiobtn1 = new sap.m.RadioButton({
			id : "idradio-cost1-Mob18-1",
			groupName : "Mob18-Cost-Center-Radio",
			text : "Project",
			select : function()
			{
				//callProjSearchHelp_Cost();
	var selectCustProj = sap.ui.getCore().byId("inputproject_cost");
				
				selectCustProj.setVisible(true);
				var lblCustProj = sap.ui.getCore().byId("idCost");
				lblCustProj.setVisible(true);
				
				 sap.ui.getCore().byId("inputcustomer_cost").setVisible(false);
			}
			
		});
		
		var radiobtn2 = new sap.m.RadioButton({
			id : "idradio-cost2-Mob18-2",
			groupName : "Mob18-Cost-Center-Radio",
			text : "Customer",
			select : function()
			{
				//callCustomerSearchHelp_Cost();
				var selectCustProj = sap.ui.getCore().byId("inputproject_cost");
				
				selectCustProj.setVisible(false);
				var lblCustProj = sap.ui.getCore().byId("idCost");
				lblCustProj.setVisible(true);
				
				 sap.ui.getCore().byId("inputcustomer_cost").setVisible(true);
			}
		
		
		});
		
		var radiobtn = new sap.m.HBox({
			
		});
		radiobtn.addItem(radiobtn0);
		radiobtn.addItem(radiobtn1);
		radiobtn.addItem(radiobtn2);
		
		
		
		
		
		
		
		
		var lblCustProj = new sap.m.Text("idCost",{
		      text: "{i18n>Mob18_lblCustomer}",
		      width: "270px"
		    });
		
		lblCustProj.addStyleClass("topPadding");
		lblCustProj.setVisible(false);
		
		var selectQIBlock = new sap.m.Select("selectCustProj_Cost2", {
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
		
		var selectCustProj = new sap.m.Select("selectCustProj_Cost", {
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
		
		
		var inputcust_cost = new sap.m.Input("inputcustomer_cost",{
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
						globalCustomerSearchFrom = "MOB18_cost";
				    	  
				    	  getCustList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonCustSearchPage = sap.ui.getCore().byId("idCustomer_Mob18");
				    	  app.to(commonCustSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalCustomerSearchFrom = "MOB18_cost";
		    	  
		   	getCustList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idCustomer_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idCustomer_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputcust_cost.setVisible(false);
		
		
		var inputproj_cost = new sap.m.Input("inputproject_cost",{
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
						globalProjectSearchFrom = "MOB18_cost";
				    	  
						getProjList_mob18();
				    	  
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var commonprojSearchPage = sap.ui.getCore().byId("idProject_Mob18");
				    	  app.to(commonprojSearchPage);
				    	  
			        	 // app.toMaster("idCommonPlantSearch");
				    	  }
		      else
		    	  {
		    	  globalProjectSearchFrom = "MOB18_cost";
		    	  
		    	  getProjList_mob18();
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
		    	  var Customer = sap.ui.getCore().byId("idProject_Mob18");
		    	  app.addMasterPage(Customer);
		    	  
	        	  app.toMaster("idProject_Mob18");
		    	  }
		      }
		  }).addStyleClass("matsearch");
		
		inputproj_cost.setVisible(false);
		
		  
		
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
				 
				 var inputCostno = sap.ui.getCore().byId("inputCostno");
	            	inputCostno.setValue(" ");
				 
			//	var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
				//inputPlant_Cost.setValue(" ");
				
				var inputCostno = sap.ui.getCore().byId("inputCostno");
				inputCostno.setValueState(sap.ui.core.ValueState.None);
	    	}
	    	}),
	    	leftButton: new sap.m.Button({
	    	text: "No",
	    	press: function () {
	        	msgDialog1.close();
	        	var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
	        	app.toMaster("idMOB18Costmas");	
				app.toDetail("idMOB18Blank");
	    	}
	    	})
	    	});
		
		
		var lblFrom = new sap.m.Text({
		      text: "{i18n>Mob18_Storage}",
		      width: "270px"
		    });
		
		lblFrom.addStyleClass("topPadding");
		
		var fromStorage = new sap.m.Select("idStorage_cost", {
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
		
		var actionType = new sap.m.Select("MvtType_cost", {
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
		    	callReasoncode_cost(key);
		      }
		    });
		
		var lblReason = new sap.m.Text({
			 width: "90px",
		      text: "{i18n>Mob18_Res}"
		    });
		
		lblReason.addStyleClass("topPadding");
		
		var ReasonType = new sap.m.Select("ResType_cost", {
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
				 
				    
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_18lbl");
		
		
		var container_order = new sap.m.FlexBox({
			items: [
			       
			        lblCost,
			        inputCostno,
			
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_input");
		
		var container_desc = new sap.m.FlexBox({
			items: [
				      
			        lblDesc,
					 txtDesc
				
				
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("flex_desc");
		
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
				
            	//alert("inside cost");
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
				 
				 var inputCostno = sap.ui.getCore().byId("inputCostno");
	            	inputCostno.setValue(" ");
				 
			//	var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
				//inputPlant_Cost.setValue(" ");
				
				var inputCostno = sap.ui.getCore().byId("inputCostno");
				inputCostno.setValueState(sap.ui.core.ValueState.None);
			}
		});
		var container_Main = new sap.m.ScrollContainer({
			horizontal : true,
            vertical : true,
			content:[
			         lblDummy,
			        container_plant,
			        lblDummy1,
				container_order,
				//lblDummy2,
				 container_Mvttype,
				    lblDummy3,
				    container_Restype,
				    lblDummy3,
				  container_storage,,
				lblDummy3,
				radiobtn,
				lblDummy4,
				lblCustProj,
				selectCustProj,
				selectQIBlock,
				inputcust_cost,
				inputproj_cost,
				lblDummy5
				
			
			        ],
			
		}).addStyleClass("ContainerPadding");
		
		  var btnShow = new sap.m.Button({
	        	//id : "idshow",
				text : "{i18n>Mob18_Next}",
				 icon: "sap-icon://open-command-field",
		         //icon: "sap-icon://search",
		            //style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            //	backNavMat= "Mob18_matback";
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
						inputcust_cost,
						inputproj_cost

					       
						//inputPlant
					        
					        ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
				});
			  
			  var container_Main = new sap.m.ScrollContainer({
					horizontal : true,
		            vertical : true,
					content:[
					         lblDummy,
					        container_plant,
					        lblDummy1,
						container_order,
						lblDummy2,
						container_Mvttype,
					    lblDummy3,
					    container_Restype,
					    lblDummy2,
						  container_storage,
						lblDummy3,
						container_QI,
						lblDummy4,
						container_Proj,
						container_lblproj,
						selectQIBlock,
						inputcust_cost,
						inputproj_cost,
						lblDummy5
						
					
					        ],
					
				}).addStyleClass("ContainerPadding");
			  return new sap.m.Page({
				  id : "Mob18_costMas",
					title: "Location",
					//headerContent :[btnBack],
					content: [
						container_Main
						
					],
					showFooter: true,	
					footer: new sap.m.Bar({
						contentLeft: [  btnBack],
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
			  return new sap.m.Page({
				  id : "Mob18_costMas",
					title: "Location",
				//	headerContent :[btnBack],
					content: [
					          container_Main
					        
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