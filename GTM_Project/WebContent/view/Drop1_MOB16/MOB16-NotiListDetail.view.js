sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB16-NotiListDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB16-NotiListDetail
	*/ 
	//Done
	
	createContent : function(oController) {
		this.setHeight("100%");
		var desktopMode = true;
		if( g_runningOnPhone == false && g_runningInTablet == false){
			desktopMode = false;
		}
		
		 btnSave = new sap.m.Button("MOB16SaveComplete",{
	           text: "{i18n>MOB16_SaveAndComplete}",
	           icon: "sap-icon://complete",visible: false,
	          // type: sap.m.ButtonType.Accept,
	           layoutData: new sap.m.FlexItemData({growFactor: 1})
	         });
			 btnSave.attachPress(sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail").onSaveAndComplete);
			 
			 var btnSaveOnly = new sap.m.Button("MOB16SaveOnly",{
		            text: "{i18n>MOB16_Save}",
		            icon: "sap-icon://save",visible: false,
		           // type: sap.m.ButtonType.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1})
		          });
				  
			 btnSaveOnly.attachPress(sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail").onSave);
			 var dummyLabel = new sap.m.Label({
				 id: "Mob16DummyLabel",
				 visible: false,
			 });
		   return new sap.m.Page({
	      showNavButton: "{device>/isPhone}",
	      navButtonPress: oController.handleNavButtonPress,
	      title: "Task Detail",
	      content: [
	          dummyLabel,
	          new sap.m.ObjectHeader("objheader",{
	          title: "{NotificationNo}",
	          number: "{NotificationType}",
	          attributes: [/*
	            new sap.m.ObjectAttribute({
	              text: "{NotificationDescription}"
	            }),
	            new sap.m.ObjectAttribute({
	              text: "Material Number: {MaterialNumber}"
	            }),
	            new sap.m.ObjectAttribute({
	              text: "SerialNumber: {SerialNumber}"
	            }),
	            new sap.m.ObjectAttribute({
		              text: "SerialNumber: {SerialNumber}"
		            }),
	            new sap.m.ObjectAttribute({
	              text: "ProductionOrder:" // TODO: Bind data
	            }),
	            new sap.m.ObjectAttribute({
	              text: "Coding: {Coding}"
	            })
	          */]
	        }),
	        new sap.m.IconTabBar("MOB16_taskDetails_tab",{
	          expandable: false,
	          select : oController.handleIconTabBarSelect,
	          items: [
	            new sap.m.IconTabFilter({
	            	key: "MOB16_task_detailKey",
	                text: "{i18n>Details}",
	                icon: "sap-icon://task",
	                content: [
	                new sap.m.ObjectHeader("objheader2",{
	                  intro: "{TaskText}",
	                  title: "{TaskCodeText}",
	                  attributes: [
	                    new sap.m.ObjectAttribute({
	                      text: "TaskSequence: {TaskSequence}"
	                    }),
	                    new sap.m.ObjectAttribute({
	                      title: "",
	                      text: "TaskCode: {TaskCode}"
	                    }),
	                    new sap.m.ObjectAttribute({
	                      text: {
	                        path: "PlannedStartDate",
	                       // formatter: myapp.util.Formatter.startDate
	                      }
	                    }),
	                    new sap.m.ObjectAttribute({
	                      title: "{i18n>FinishDate}",
	                      text: {
	                        path: "PlannedFinishDate",
	                        //formatter: myapp.util.Formatter.finishDate
	                      }
	                    })
	                  ],
	                  statuses: []
	                }).addStyleClass("custom-object-header"),
	              ]
	            }),
	            new sap.m.IconTabFilter("MOB16_DocFilter",{
	              text: "{i18n>DOCUMENT}",
	              icon: "sap-icon://attachment",
	              key : "Mob16Doc",
	            //  count: 3, // TODO:  Calculate correctly
	              content: [
							new sap.ui.layout.form.SimpleForm({
								layout: "ResponsiveGridLayout",
								editable: true,
								emptySpanL: 6,
								emptySpanM: 6,
								breakpointM: 1000,
								content: [
								new sap.m.List({
								id : "Mob16DocumentListItem",
								noDataText: "",
								mode: sap.m.ListMode.SingleSelectMaster,
								select : oController.handleMob16SelectedDocListpress,
								items: {
									path: "/results",
									template: new sap.m.ObjectListItem({
										title :"{Wsapplication}"+"\n"+"{Documentnumber}",
										number:"{Documentpart}",
										numberUnit:"{Documentversion}",
										attributes:[
										            new sap.m.ObjectAttribute({
										            	text:"{DocDescription}"
										           })
										           ],
										firstStatus:
											       new sap.m.ObjectStatus({
										            	   	text: "{Description}"
											        }),
									})
								}
								//press: oController.handleListItemPress,
								/*items: [
									new sap.m.StandardListItem({
									
										type: "Active",
										icon: "sap-icon://pdf-attachment",
										title: "{Documentnumber}"+"."+"{Wsapplication}",
										description: "{Description}"
									})
									
								]*/
							})]})
	                        ]
	            }),
	            //DMS
	            new sap.m.IconTabFilter("MOB16_PhotoFilter",{
	            	 text: "{i18n>PHOTO}",
		              key : "Mob16Image",
		              icon: "sap-icon://attachment",
 		              content: [
 		                new sap.m.List({
 		                   id : "Mob16ImageListItem",
 		                    headerToolbar : new sap.m.Toolbar({
 		                    content:  [
 		                      new sap.m.Label({
 		                        text : "Available Images:" ,
 		                               }),
 		                      new sap.m.ToolbarSpacer(),
 		                      new sap.m.Button({
 		                        text: "Add",
 		                        visible : desktopMode,
 		                        icon: "sap-icon://add",
 		                        type: "Emphasized",
 		                        press: function(){
 		                    	       // g_DeleteImageListId = "Mob16AddedImageList";
 		                    	   		sap.ui.getCore().byId("Mob00ImageDialogBox").open();
 		                       }
 		                      })
 		                    ] 
 		                  }),
 		                   mode: sap.m.ListMode.SingleSelectMaster,
 		                   select : oController.handleMob16SelectedImageListpress,
 		                   items: {
								path: "/results",
								template: new sap.m.ObjectListItem({
									title :"{Wsapplication}"+"\n"+"{Documentnumber}",
									number:"{Documentpart}",
									numberUnit:"{Documentversion}",
									attributes:[
									            new sap.m.ObjectAttribute({
									            	text:"{DocDescription}"
									           })
									           ],
									firstStatus:
										       new sap.m.ObjectStatus({
									            	   	text: "{Description}"
										        }),
								})
							}
 		                }),
 		                new sap.m.List({
 		                	id : "Mob16AddedImageList",
 		                    visible : desktopMode,
 		                	mode: sap.m.ListMode.SingleSelectMaster,
 		                	headerText : "Added Image List",
 		                	itemPress : oController.responsivePopoverZoom,
 							items: {
 								    path: "/",
 							  	    template: new sap.m.StandardListItem({
 							  		title: "{imageName}"+""+"",
 									type: "Active",
 									icon: "{imageData}",
 							})
 							}
 		                })
 		              ]
 		            
	            }),
	            new sap.m.IconTabFilter({
	              text: "{i18n>Notes}",
	              icon: "sap-icon://notes",
	              content: [
	                new sap.m.TextArea("MOB16_Notes",{
	                	  height : "13rem",
	                  width: "100%",
	                  rows: 1,
	                })
	              ]
	            })
	          ]
	        })
	      ],
	      showFooter: true,
	      footer: new sap.m.Bar({
		        contentRight: [
		          btnSaveOnly,
		          btnSave
		        ]
			})//.addStyleClass("footer")
	      
	    /*  footer: new sap.m.Bar({
	        contentRight: [
	          new sap.m.Button({
	            text: "{i18n>Save}",
	            icon: "sap-icon://save",
	       press: oController.onSave
	          }),
	          new sap.m.Button({
	            text: "{i18n>Complete}",
	            type: "Accept",
	            icon: "sap-icon://complete",
	            press: oController.onSaveAndComplete
	          })
	        ]
	      })*/
	    });
	  
		/*
		
		var lblDummy1 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy1.addStyleClass("HideLabelAndHeight");
		
		var lblDummy2 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy2.addStyleClass("HideLabelAndHeight");
		
		var lblDummy3 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy3.addStyleClass("HideLabelAndHeight");
		
		var lblDummy4 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy4.addStyleClass("HideLabelAndHeight");
		
		var lblDummy5 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy5.addStyleClass("HideLabelAndHeight");
		
		var lblDummy6 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy6.addStyleClass("HideLabelAndHeight");
		
		 var dialog = new sap.m.BusyDialog({
	          title: "Uploading the image ",
	          text: 'Image is being uploaded...',
	         // showCancelButton: true
	        });
		 
		 var cmraDialog = new sap.m.Dialog({
			    title: "",
			   // width : "80%",
			    content:  new sap.m.Image({
				    src: "img/noti.png",
			    }),
			    leftButton: new sap.m.Button({
			      text: "No",
			      press: function () {
			    	  cmraDialog.close();
			      }
			    }),
			    rightButton: new sap.m.Button({
			      text: "Yes",
			      press: function () {
			    	  oNode1.setExpanded(false);
			    	  oNode2.setExpanded(false);
			    	  oNode3.setExpanded(false);
			    	  oNode4.setExpanded(false);
			    	  
			    	  app.to(page1);
			    	  cmraDialog.close();
			      }
			    })
			  }).addStyleClass("notiDia");
		// cmraDialog.
		 
		
		var text = new sap.m.Text({
		      text: " ",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		var textDesc = new sap.m.Text({
		      text: "Description",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputDesc = new sap.m.Text({
			  id : "Description",
		     // text: "Vendor Incident",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var textType = new sap.m.Text({
		      text: "Type",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputType = new sap.m.Text({
		      id : "type",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var textMatNo = new sap.m.Text({
		      text: "Material Number",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputMatNo = new sap.m.Text({
		    id :"matnum",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var textSerialNo = new sap.m.Text({
		      text: "Serial Number",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputSerialNo = new sap.m.Text({
		     id  : "snum",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var textPrOrder = new sap.m.Text({
		      text: "Production Order",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputPrOrder = new sap.m.Text({
		     id : "prdord",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var textCoding = new sap.m.Text({
		      text: "Coding",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputCoding = new sap.m.Text({
		      id : "coding",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var text14 = new sap.m.Text({
		      text: "Additional Notes",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var text15 = new sap.m.Text({
		      text: "Reference Material",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("paddingTop");
		
		var textArea1 = new sap.m.TextArea({
		     
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		var image1 = new sap.m.Image({
		    src: "img/doc.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    })
		  });
		
		

		var image3 = new sap.m.Image({
		    src: "img/info.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    })
		  });
		
		
		function  attachImage() 
		{	 
			dialog.open();
			 setTimeout(function(){
				 dialog.close();
				cmraDialog.open();
				 //app.to(page3);
	    	    
	    	    },3000);
		};
		var image4 = new sap.m.Image({
		    src: "img/MB15_01.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
		    
		    press : attachImage
		  });
		
		var image5 =  new sap.m.Image({
		    src: "img/MB15_02.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    }),
		    press : attachImage
		  });

		var image6 = new sap.m.Image({
		    src: "img/MB15_01A.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    }),
		    press : attachImage
		  });
		
		var image2 =  new sap.m.Image({
		    src: "img/gallery.png",
		    press: function () {
		    	 
		    	  image4.setVisible(true);
		    	  image5.setVisible(true);
		    	  image6.setVisible(true);
		      },
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        
		    })
		  });
		
		 var btnSave = new sap.m.Button({
             text: "{i18n>MOB16_Save}",
             type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1})
           });
		  
		 btnSave.attachPress(oController.onSave);
		  
		  var btnSaveAndComplete = new sap.m.Button({
              text: "{i18n>MOB16_SaveAndComplete}",
              type: sap.m.ButtonType.Accept,
              layoutData: new sap.m.FlexItemData({growFactor: 1})
            });
		  
		  btnSaveAndComplete.attachPress(oController.onSaveAndComplete);
		  
		  var lblDummy7 = new sap.m.Label({
				text: "Dummy"
			}).addStyleClass("HideLabelAndHeight");
			
			var lblDummy8 = new sap.m.Label({
				text: "Dummy"
			}).addStyleClass("HideLabelAndHeight");
			
			var lblDummy9 = new sap.m.Label({
				text: "Dummy"
			}).addStyleClass("HideLabelAndHeight");
		
		 var oGridForm = new sap.ui.layout.Grid({
            hSpacing: 1,
            vSpacing: 0,   
            defaultSpan : "L3 M3 S12",
            content: [
  
                      	lblDummy1,
                      	textDesc,
                      	inputDesc,
                      	lblDummy1,
                      	textType,
                      	inputType,
                      	lblDummy2,
                      	textMatNo,
                      	inputMatNo,
                      	lblDummy3,
                      	textSerialNo,
                      	inputSerialNo,
                      	lblDummy4,
                      	textPrOrder,
                      	inputPrOrder,
                      	lblDummy5,
                      	textCoding,
                      	inputCoding,
                      	lblDummy6,
                      	text14,
                      	textArea1,
                      	//text15,
                      	//image1,
                      	//image2,
                      //	image3,
                      	text,
                      	//image4,
                      	//image5,
                      //	image6
                        text,

                ]
		  });
		 

			var btnSave = new sap.m.Button({
	            text: "SAVE",
	            icon: "sap-icon://save",
	           // type: sap.m.ButtonType.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1})
	          });
			  
			 btnSave.attachPress(sap.ui.getCore().byId("idMOB16NotificationList").getController().onSave);
			  
			  var btnSaveAndComplete = new sap.m.Button({
	             text: "{i18n>MOB16_SaveAndComplete}",
	             icon: "sap-icon://save",
	             //type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
			  btnSaveAndComplete.attachPress(sap.ui.getCore().byId("idMOB16NotificationList").getController().onSaveAndComplete);
			 
		 var oGridForm1 = new sap.ui.layout.Grid({
	            hSpacing: 1,
	            vSpacing: 0,   
	            defaultSpan : "L12 M12 S12",
	            content: [
	                      	lblDummy8,
	             
	                      	lblDummy9
	                ]
			  });
		 
			if ( g_runningOnPhone == true)
			{
				
				return new sap.m.Page({
					id : "Mob16-SecondScreen-BackNavButton",
					title: "Notification Details",
					
					showNavButton : true, // boolean
					navButtonTap: function(){
						
						g_MobileNavigationId = "Mob16-BackNavButton";
			            var myapp = sap.ui.getCore().byId("myApp");
			        
			            myapp.to("idMOB16NotificationList");
			            
		           },
					content: [
					          oGridForm,
					          oGridForm1
					
					],
				
					footer: new sap.m.Bar({})
				
				});
			}
			
			else
				{
		return new sap.m.Page({
			title: "Notification Details",
			content: [
			          oGridForm,
			          oGridForm1
			
			]
		,
			footer: new sap.m.Bar({
		        contentRight: [
		          new sap.m.Button({
		            text: "Back",
		            icon: "sap-icon://sys-back" ,
		            press : function ()
		            {
		            var app = sap.ui.getCore().byId("myApp");
		            app.to("idInitialView1")
		            }
		            
		          }),
		          new sap.m.	({
		            text: "Save",
		            icon: "sap-icon://save"
		          }),
		          new sap.m.Button({
			            text: "Complete",
			            icon: "sap-icon://complete"
			          })
		        ]
			})
		
				
		});
		
	}
	*/}

});