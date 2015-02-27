sap.ui.jsview("com.cg.gtm.view.Mob18OrderActionType", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18OrderActionType
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18OrderActionType";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18OrderActionType
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
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
		
		
		var lblPlant = new sap.m.Label({ 
			text: "{i18n>Mob18_Plant}",
			
		}).addStyleClass("FontBold");
		
		var inputPlant = new sap.m.Input("inputPlant",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
				
		    
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
		    	  globalPlantSearchFrom = "MOB18";
		    	  
		    	  getPlantList();
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						//var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
						app.to("idCommonPlantSearch");
					}
		    	  
		    	  else{
		    		  var app = sap.ui.getCore().byId("idMOB18SplitApp");  
		    			var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");
		    			app.addMasterPage(idCommonPlantSearch);
		        	  app.toMaster("idCommonPlantSearch");  
		    	  }
		    	  
	        	  
	        	  
		      }
		    
		  });//.addStyleClass("matsearch");
		
		var lblActType = new sap.m.Label({
			  //width: "90px",
		      text: "{i18n>Mob18_Movt}"
		    }).addStyleClass("FontBold");
		
		lblActType.addStyleClass("topPadding");
		
		var actionType = new sap.m.Select("MvtType", {
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
		    	callReasoncode(key);
		      }
		    });
		
		var lblReason = new sap.m.Label({
			
		      text: "{i18n>Mob18_Res}"
		    }).addStyleClass("FontBold");
		
		lblReason.addStyleClass("topPadding");
		
		var ReasonType = new sap.m.Select("ResType", {
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
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      }),
		      //change: oController.onActionChange
		    });
		
		var lblOrder = new sap.m.Label({
			text: "{i18n>Mob18_Order}",
			
		}).addStyleClass("FontBold");
		
		var inputOrderno = new sap.m.Input("inputOrderno",{
		    
			 
		   //   placeholder: 'Enter Order Number',
		      type :  sap.m.InputType.Tel,
		      change : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("inputOrderno"));//go to string utility 
		    	
		      },
		  });
		
		
		var lblFrom = new sap.m.Label({
		      text: "{i18n>Mob18_Storage}",
		      
		    }).addStyleClass("FontBold");
		
		lblFrom.addStyleClass("topPadding");
		
		var fromStorage = new sap.m.Select("idStorage1", {
			
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
		
		var lblDesc = new sap.m.Label({
			text: "{i18n>Mob18_Desc}"
		}).addStyleClass("FontBold");
		
		var txtDesc = new sap.m.Label({
			text : "{i18n>Mob18_txtDesc}"
		});
		
		/*Message Dialog for Yes button*/

    	var msgDialog1 = new sap.m.Dialog({
    	title: "Warning",
    	type: sap.m.DialogType.Message,
    	 icon: "sap-icon://warning2",
    	content: [
    	          new sap.m.Label({
    	text:"Are you sure you want to exit the screen which may result in data lose ?",
    	})
    	],

    	rightButton: new sap.m.Button({
    	text: "Yes",
    	press: function () {
    		msgDialog1.close();
    		//hideidMob18first();
			//hideidMob18second();
			
			//Deselect table Items
			var deselect = sap.ui.getCore().byId("idtable_Order");
			deselect.removeSelections();
			
			//Clear Input Fields
			 sap.ui.getCore().byId("inputSerial_order").setValue("");
		  	 sap.ui.getCore().byId("inputbatch_order").setValue("");
		  	 sap.ui.getCore().byId("inputQtyno").setValue("");
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
         
			 var inputOrderno = sap.ui.getCore().byId("inputOrderno");
				inputOrderno.setValue(" ");
				
			//var inputPlant = sap.ui.getCore().byId("inputPlant");
			//inputPlant.setValue(" ");
			var inputOrderno = sap.ui.getCore().byId("inputOrderno");
			inputOrderno.setValueState(sap.ui.core.ValueState.None);
    	}
    	}),
    	leftButton: new sap.m.Button({
    	text: "No",
    	press: function () {
        	msgDialog1.close();
        	var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
			app.to("idMOB18SplitScreen");
    	}
    	})
    	});
		var container_plant = new sap.m.FlexBox({
			items: [
				      
			    //    lblDummy,
				 lblPlant,
				// lblDummy1,
				 inputPlant,
				
				// lblDummy2,
				 lblDummy6,
				// lblDummy7,
				
				
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_18lbl");
		
		
		var container_order = new sap.m.FlexBox({
			items: [
			      //  lblDummy3,
			        lblOrder,
			       // lblDummy4,
			        inputOrderno,
			      
			        lblDummy5
			       
			        
				
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_input");
		
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
		
		var container_desc = new sap.m.FlexBox({
			items: [
				      
			        lblDesc,
					 txtDesc
			
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});//.addStyleClass("flex_desc");
		
		var btnBack = new sap.m.Button({
			text : "{i18n>Mob18_back}",
			 icon: "sap-icon://close-command-field",
			press : function(){
				
				msgDialog1.open();
           	
				//var btnShow = sap.ui.getCore().byId("idshow");
				//btnShow.setVisible(false);
				
				 
				
			}
		});
		var container_Main = new sap.ui.layout.form.SimpleForm({
			 layout: "ResponsiveGridLayout",
			 content: [
			          
						lblPlant,
						inputPlant,
						lblOrder,
						inputOrderno,
						lblActType,
						actionType,
						//lblReason,
						//ReasonType,
						lblFrom,
						fromStorage,
						lblDesc,
						txtDesc 
			        
			        ],
			
		});
		
		  var btnShow = new sap.m.Button({
	        	//id : "idshow",
			  text : "{i18n>Mob18_Next}",
			  icon: "sap-icon://open-command-field",
		       //  icon: "sap-icon://search",
		         //   style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	oController.check();
		            	
		            }
		           
			});
	       // btnShow.setVisible(false);
		  
		  
/////////////////////////////Mobile//////////////////////////////////////
	        if(g_runningOnPhone == true)
			{
	        	
	        	
	        	return new sap.m.Page({
	        		id : "Mob18_OrderMas",
	    			title: "Stock Movement Type",
	    			// headerContent :[btnBack],
	    			content: [
	    			          container_Main
	    			] ,showFooter: true,	
		  			footer: new sap.m.Bar({
		  				contentLeft: [ btnBack],
		  				contentRight: [btnShow ],
		  				
		  				
		  			}).addStyleClass("mobfooter"),
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
	        	
	      
	        
	        /////////////////////////////Tablet/Desktop/////////////////////////////////////
 		return new sap.m.Page({
 			id : "Mob18_OrderMas",
			title: "Location",
			//headerContent :[btnBack],
			content: [
			          container_Main,
			         // container_desc
			],
			enableScrolling: false,
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
