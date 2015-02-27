sap.ui.jsview("com.cg.gtm.view.Drop1_MOB29.Mob29-MaterialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob29-labelprinting.Mob29-MaterialView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB29.Mob29-MaterialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob29-labelprinting.Mob29-MaterialView
	*/ 
	createContent : function(oController) {
		
		
		
	
		
		var lblDummy1 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy1.addStyleClass("HideLabelAndHeight");
		var lblDummy2 = new sap.m.Label({
			text: "Dummy"
		});		
		lblDummy2.addStyleClass("HideLabelAndHeight");
		var lblDummy3 = new sap.m.Label({
			id:"labelParnt-dummy3",
			text: "Dummy"
		});
		lblDummy3.addStyleClass("HideLabelAndHeight");
		lblDummy3.setVisible(false);
		
		
		var lblDummy3A = new sap.m.Label({
			id:"labelParnt-dummy3A",
			text: "Dummy"
		});
		lblDummy3A.addStyleClass("HideLabelAndHeight");
		lblDummy3A.setVisible(false);
		
		var lblDummy4A = new sap.m.Label({
		
			text: "Dummy"
		});
		lblDummy4A.addStyleClass("HideLabelAndHeight");
		lblDummy4A.setVisible(false);
		
		var lblDummy5A = new sap.m.Label({
			
			text: "Dummy"
		});
		lblDummy5A.addStyleClass("HideLabelAndHeight");
		lblDummy5A.setVisible(false);
		
		var lblDummy6A = new sap.m.Label({
		
			text: "Dummy"
		});
		lblDummy6A.addStyleClass("HideLabelAndHeight");
		lblDummy6A.setVisible(false);
		
		
		 
		var text1 = new sap.m.Text({
			//id : "lableprintmaterialNumId",
		      text: "Material Number *",
		      
		     
		    }).addStyleClass("headerText");

		 var oSearch = new sap.m.Input("osearch_material_1", {
			 type :  sap.m.InputType.Tel,
		      maxLength : 6,
		      placeholder: 'Enter Material Number',
		      showSuggestion: false,
		      showValueHelp: true,
		     // liveChange : oController.checkinputMatnrMOB29LabelParintMaterial,
		      change : oController.checkinputMatnrMOB29LabelParintMaterial,
		      valueHelpRequest: function (evt) {
		      oController.openMatSearch();
	
		      
		      }
		  });
 
		 var matScanMOB29 ;
		  //var isRunningOnDesktop = jQuery.device.is.desktop; 
		  
		  if (  g_runningInTablet == false || g_runningOnPhone == false)
			  {
			  matScanMOB29 =  new sap.m.Image({
			  id : "matScanMOB29" ,
			    src: "icon/ico_rect_scanbarcode.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: function () {
			    	varScan = "Mob29Screen";
			    	//globalMob15Detail = "Q1" ;
			    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
			      },
			  });
			  matScanMOB29.addStyleClass("matScan");
			  }
		  
		  var containerBoxMaScanMOB29 = new sap.m.FlexBox({
				items: [
			        	
			        	oSearch,
			        	matScanMOB29
			        	
			        ],
			direction:"Row",
			justifyContent:"Center",
			alignItems:"Start",
			});
		  
		 var text2 = new sap.m.Text({
			 id:"matLabPrintDesText",
		      text: "Material Description",
		     
		    }).addStyleClass("headerText");
		
		
		 var text3 = new sap.m.Text({
			 id : "matLabPrintDes"
		    
		     
		    });
	
		  
		  
		 var text4 = new sap.m.Text({
			 id:"printlabel-SerBatValidatn",
		      text: "Serial Number ",
		     
		    }).addStyleClass("headerText");
		
		 var ip1  = new sap.m.Input({
				type :sap.m.InputType.Tel,
			 id : "PrintLabSerBatIp1",
			 maxLength : 10, //Serial num have 7 batch number have 10
			 change : function(){
		
	field_numeric_validation(sap.ui.getCore().byId("PrintLabSerBatIp1"));//go to string utility  
		
					

		              }
		 });
		 
		 
		 var text4A = new sap.m.Text({
			 id:"printlabel-SerBatValidatn-Additional",
		      text: "Batch Number ",
		     
		    }).addStyleClass("headerText");
		
		 var ip1A  = new sap.m.Input({
				type :sap.m.InputType.Tel,
			 id : "PrintLabSerBatIp1-Additional",
			 maxLength : 10, //Serial num have 7 batch number have 10
			 change : function(){
					field_numeric_validation(sap.ui.getCore().byId("PrintLabSerBatIp1"));//go to string utility  
		              }
		 });
		
		 var text5 = new sap.m.Text({
			 id:"matLabqtytext",
		      text: "Quantity *",
		     
		    }).addStyleClass("headerText");
		  
		 var ip2  = new sap.m.Input({
			 id :"PrtLabIPQty",
				type :sap.m.InputType.Tel,
			 change : function(){
				 field_numeric_validation_qty(sap.ui.getCore().byId("PrtLabIPQty"));//go to string utility  
		              }
			 });
		 var checkPrintFrstTime = new sap.m.Text({
			id : "Mob29-checkPrintFrstTime" ,
			text : "0"
		 });
//Print image viewer 
		 
		/* if( sap.ui.getCore().byId("Mob29-checkPrintFrstTime").getText() == 1)
			 {
			 var printImage = new sap.m.Image({
				 id : "idMob29printImage",
				// src : "img/PrintImage1.PNG",
				 width : "90%",
				 height : "90%"
			  });
			 printImage.setSrc("img/PrintImage1.PNG");
			 
			 }
		 else
			 {
			 var printImage = new sap.m.Text({
				 id : "idMob29printImage",
				 text : "Do you wish to print this page?"
				// src : "img/PrintImage1.PNG",
				// width : "90%",
				// height : "90%"
			  });
		
			 sap.ui.getCore().byId("Mob29-checkPrintFrstTime").setText("1");
			 }
		 
		 
		  
		 var leftButton_b = new sap.m.Button({
			  text : "No",
			  press : function(){
				  dialogWindow.close();
			  }
		  });
		 var RightButton_b = new sap.m.Button({
			  text : "Yes",
			  press : function(){
				  PrintLabelToService();
				  dialogWindow.close();
			  }
		  });
		  
		 var dialogWindow = new sap.m.Dialog({
			 title: "Print Label",
			  leftButton : leftButton_b,
			  rightButton: RightButton_b,
			  content : printImage,
			  width : "90%"
			
		  });*/
		  
		  
		
		 var main = new sap.m.FlexBox({
				items: [
                         text1,
                        // oSearch,
                         containerBoxMaScanMOB29,
                         lblDummy1,
                         text2,
                         text3,
                         lblDummy2,
                         text4,
                         ip1,
                         lblDummy3,
                         text4A,
                         ip1A,
                         lblDummy3A,
                         text5,
                         ip2
                         
                       ],
				direction:"Column",
				alignItems:"Center",
				justifyContent:"Center"

			}).addStyleClass("fluxBoxAllignment");
		 
		 
		 var printImage; 
		 if( sap.ui.getCore().byId("Mob29-checkPrintFrstTime").getText() == 1)
		 {
		 printImage = new sap.m.Image({
			// id : "idMob29printImage",
			// src : "img/PrintImage1.PNG",
			 width : "90%",
			 height : "90%"
		  });
		 printImage.setSrc("img/PrintImage1.PNG");
		 
		 }
	 else
		 {
		 printImage = new sap.m.Text({
			 //id : "idMob29printImage",
			 text : "Do you wish to print the Label for this Material?"
			// src : "img/PrintImage1.PNG",
			// width : "90%",
			// height : "90%"
		  });
	
		 sap.ui.getCore().byId("Mob29-checkPrintFrstTime").setText("1");
		 }
		 
		 
		 
		 
		 var leftButton_b = new sap.m.Button({
			  text : "No",
			  press : function(){
				  dialogWindow.close();
			  }
		  });
		 var RightButton_b = new sap.m.Button({
			  text : "Yes",
			  press : function(){
				  PrintLabelToService();
				  dialogWindow.close();
			  }
		  });
		  
		 var dialogWindow = new sap.m.Dialog({
			 title: "Print Label",
			  leftButton : leftButton_b,
			  rightButton: RightButton_b,
			  content : printImage,
			  width : "90%"
			
		  });
		 
		 
		 

			if( g_runningOnPhone == true)
				{
				return new sap.m.Page({
					
					id  :"Mob29-SecondScreen-BackNavButton",
					title: "Print Material Number Label",
					content: [
					          main,
					          lblDummy4A,
		                      lblDummy5A,
		                      lblDummy6A
					
					],
					showNavButton: true,
					enableScrolling: true,
		            navButtonTap:function(){  
		            	        g_MobileNavigationId = "Mob29-BackNavButton";
		                         var  app = sap.ui.getCore().byId("myApp");  
		                           app.to("idMOB29LabelPrintingView");
		                           
		                         //reset fields
		       		       //     sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
		       				//	sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
		       				//	sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
		       					
		       					sap.ui.getCore().byId("osearch_material_1").setValue("");
		       					sap.ui.getCore().byId("PrtLabIPQty").setValue("");
		       					
		            } ,
					footer: new sap.m.Bar({
				        contentRight: [
				         
				         /* new sap.m.Button({
				            text: "Save",
				            icon: "sap-icon://save"
				          }),*/
				          new sap.m.Button({
					            text: "Print",
					            icon: "sap-icon://print",
					            press : function(){
					            	dialogWindow.open();
					            }
					          })
				        ],
				        
				        contentLeft : [ new sap.m.Button({
				            text: "Back",
				            icon: "sap-icon://close-command-field" ,
				            press : function ()
				            {
				            var app = sap.ui.getCore().byId("myApp");
				            app.to("idMOB29LabelPrintingView");
				            
				            
				            //reset fields
				         //   sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
						//	sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
						//	sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
							sap.ui.getCore().byId("osearch_material_1").setValue("");
							sap.ui.getCore().byId("PrtLabIPQty").setValue("");
							
				            }
				            
				          }),
				                       
				                       ]
					})
		 		
				});
				}
			
			else
				{
				return new sap.m.Page({
					id  :"Mob29-SecondScreen-BackNavButton",
					title: "Print Material Number Label",
					content: [
					          main,
					          lblDummy4A,
		                      lblDummy5A,
		                      lblDummy6A
					
					],
					showNavButton: true,
					enableScrolling: true,
		            navButtonTap:function(){  
		            	           g_MobileNavigationId = "Mob29-BackNavButton";
		                           app = sap.ui.getCore().byId("myApp");  
		                           app.to("idMOB29LabelPrintingView");
		                           
		                         //reset fields
		       		       //     sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
		       				//	sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
		       				//	sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
		       					
		       					sap.ui.getCore().byId("osearch_material_1").setValue("");
		       					sap.ui.getCore().byId("PrtLabIPQty").setValue("");
		       					
		            } ,
					footer: new sap.m.Bar({
				        contentRight: [
				          /*new sap.m.Button({
				            text: "Back",
				            icon: "sap-icon://sys-back" ,
				            press : function ()
				            {
				            var app = sap.ui.getCore().byId("myApp");
				            app.to("idMOB29LabelPrintingView");
				            
				            
				            //reset fields
				         //   sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
						//	sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
						//	sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
							sap.ui.getCore().byId("osearch_material_1").setValue("");
							sap.ui.getCore().byId("PrtLabIPQty").setValue("");
							
				            }
				            
				          }),*/
				         /* new sap.m.Button({
				            text: "Save",
				            icon: "sap-icon://save"
				          }),*/
				          new sap.m.Button({
					            text: "Print",
					            icon: "sap-icon://print",
					            press : function(){
					            	
					            	
					    		
					    		 dialogWindow.open();
					            	
					            	
					            	
					            	
					            	
					            	
					            }
					          })
				        ]
					}).addStyleClass("mob29footer")
		 		
				});
				
				}
 		
	}

});
