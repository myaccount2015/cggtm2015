sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.MaterialSearchDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.MaterialSearchDetail
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy1.addStyleClass("HideLabel");
		
		var lblMatNo = new sap.m.Label({
			text: "{i18n>Material_number}",
			design: "Bold"
		});
		//lblMatNo.addStyleClass("FontBold");
		
		var lblValMatNo = new sap.m.Label("valMatNo2", {
			//path: "/MD15CollectionMATNR",
			text: ""
		});
		
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		
		lblDummy2.addStyleClass("HideLabel");
		
		var lblMatDesc = new sap.m.Label({
			text: "{i18n>Description}",
			design: "Bold"
		});
		//lblMatDesc.addStyleClass("FontBold");
		
		var lblValMatDesc = new sap.m.Label("valMatDesc", {
			text: ""
		});
		
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy3.addStyleClass("HideLabel");
		
		var lblMatManu = new sap.m.Label({
			text: "{i18n>Manufact}",
			design: "Bold"
		});
		//lblMatManu.addStyleClass("FontBold");
		
		/*var lblValMatManu = new sap.m.Label("valMatManu", {
			text: ""
		});*/
		
		var lblDummy3A = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy3A.addStyleClass("HideLabel");
		
		var lblMatManuName = new sap.m.Label({
			text: "{i18n>ManufactName}",
			design: "Bold"
		});
		//lblMatManuName.addStyleClass("FontBold");
		
		/*var lblValMatManuName = new sap.m.Label("valMatManuName", {
			text: ""
		});*/
		
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy4.addStyleClass("HideLabel");
		
		var lblMatModNo = new sap.m.Label({
			text: "Manufacturer Part Number",
			design: "Bold"
		});
		//lblMatModNo.addStyleClass("FontBold");
		
		/*var lblValMatModNo = new sap.m.Label("valMatModNo", {
			text: ""
		});*/
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy5.addStyleClass("HideLabel");
		
		var lblMatSup = new sap.m.Label({
			text: "Vendor",
			design: "Bold"
		});
		//lblMatSup.addStyleClass("FontBold");
		
		/*var lblValMatSup = new sap.m.Label("valMatSup", {
			text: ""
		});*/
		
		var lblDummy5A = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy5A.addStyleClass("HideLabel");
		
		var lblMatSupName = new sap.m.Label({
			text: "Vendor Name",
			design: "Bold"
		});
		//lblMatSupName.addStyleClass("FontBold");
		
		/*var lblValMatSupName = new sap.m.Label("valMatSupName", {
			text: ""
		});*/
			
		
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy6.addStyleClass("HideLabel");
		
		var lblMatSupPartNo = new sap.m.Label({
			text: "Vendor Part Number",
			design: "Bold"
		});
		//lblMatSupPartNo.addStyleClass("FontBold");
		
		/*var lblValMatPartNo = new sap.m.Label("valMatPartNo", {
			text: ""
		});*/
		
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy7.addStyleClass("HideLabel");
		
		var lblDummy7A = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy7A.addStyleClass("HideLabel");
		
		var lblDummy7B = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy7B.addStyleClass("HideLabel");
		
		 
		var  btnSelMat = new sap.m.Button({
            text: "{i18n>selectMat}",
            id: "matSerDetbtn_MobileVersion",
          //  type: sap.m.ButtonType.Accept,
            layoutData: new sap.m.FlexItemData({growFactor: 1})
          });
		  
		 btnSelMat.attachPress(oController.onMaterialSel);
		
		
		 
		 /*var  btnMatImage = new sap.m.Button({
	            text: "{i18n>getimg}",
	          //  type: sap.m.ButtonType.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1})
	          });
			  
		 btnMatImage.attachPress(oController.getImage);*/
		 
		 var  btnBackMob = new sap.m.Button({
	            text: "Back",
	            icon: "sap-icon://close-command-field" ,
	          //  type: sap.m.ButtonType.Accept,
	           // layoutData: new sap.m.FlexItemData({growFactor: 1})
		 		press : function()
		 		{
		 			//alert("ba");
		 			var app = sap.ui.getCore().byId("myApp"); 
		  			app.to("idMATSR");
		  			
		 			//app.to("idMob24MaterialSearch");
		  			
		 		}
	          });
			  
	
		 
		 var imageMat = new sap.m.Image({
			    //src: "img/MB15_01.jpg",
				//id : "imageMat",
				width : "300px" ,
				height : "250px" ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    })
			  }).addStyleClass("matImgPadding");
		 
		 ////////////////////////////////////////////////////////////////////////////////////////////////
		 /*DMS Implementation*/
		 
		 var Mob24ObjectHeader = new sap.m.ObjectHeader({
			    id : "Mob24-ObjectHeaderTitle",
				title: "Torque Wrench 70-350Nm",//Description
				number: "87",//Material No
				attributes: [
					new sap.m.ObjectAttribute({
						id : "valMatManu",
						title: "Manufacturer Number", //Manufacturer no
						text: "2000006"
					}),
					
					new sap.m.ObjectAttribute({
						id : "valMatManuName",
						title: "Manufacturer Name", //Manufacturer Name
						text: "Test Vendor"
					}),
					
					
				],
				statuses: [
					new sap.m.ObjectStatus({
						text: ""
					}),
				]
			});
		 
		 
		 
		 var ImageIconTabBar = new sap.m.IconTabBar({
				expandable: false,
				select : oController.handleIconTabBarSelect,
				items: [
			
			new sap.m.IconTabFilter({
				text : "More Details",
				icon : "sap-icon://detail-view",
				key : "Mob24Details",

				content : [ 
				           new sap.ui.layout.form.SimpleForm("Mob24-MoreDetailForm",{
				        	   maxContainerCols: 2,
				        	   content:[
 

				        	            new sap.m.Label({
				        	            	text: "Vendor ",
				        	            	//design: "Bold"
				        	            }),
				        	            new sap.m.Text("valMatSup", {
				        	            	text: ""
				        	            }),
				        	            new sap.m.Label({
				        	            	text: "Vendor Name ",
				        	            	//design: "Bold"
				        	            }),
				        	            new sap.m.Text("valMatSupName", {
				        	            	text: ""
				        	            }),
				        	            new sap.m.Label({
				        	            	text: "Vendor Part Number ",
				        	            	//design: "Bold"
				        	            }),
				        	            new sap.m.Text("valMatPartNo", {
				        	            	text: ""
				        	            }),
				        	            new sap.m.Label({
				        	            	text: "Manufacturer Part Number ",
				        	            	//design: "Bold"
				        	            }),
				        	            new sap.m.Text("valMatModNo", {
				        	            	text: ""
				        	            }),

             ]
})

				    /*new sap.ui.layout.form.SimpleForm({
					layout : "ResponsiveGridLayout",
					//editable : true,
					//emptySpanL : 6,
					//emptySpanM : 6,
					//breakpointM : 1000,
					//maxContainerCols: 2,
					content : [
					           //	new sap.ui.core.Title({text:"Detailed Description:"}),

					           	lblMatModNo,
					           	lblValMatModNo,
					         
					           	lblMatSup,
					           	lblValMatSup,
					           
					           	lblMatSupName,
					           	lblValMatSupName,
					        
					           	lblMatSupPartNo,
					           	lblValMatPartNo,
					         


					           		]
				})*/ ]
			}),   
				        
					new sap.m.IconTabFilter({
						text: "Images",
						icon: "sap-icon://image-viewer",
						key : "Mob24Image",
						
						content: [
							new sap.ui.layout.form.SimpleForm({
								layout: "ResponsiveGridLayout",
								//editable: true,
								//emptySpanL: 6,
								//emptySpanM: 6,
								//breakpointM: 1000,
								content: [

											new sap.ui.layout.form.SimpleForm({
												layout: "ResponsiveGridLayout",
												editable: true,
												emptySpanL: 6,
												emptySpanM: 6,
												breakpointM: 1000,
												content: [
												new sap.m.List({
												id : "Mob24ImageListItem",
												noDataText: "",
												mode: sap.m.ListMode.SingleSelectMaster,
												select : oController.handleMob24SelectedImageListpress,
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
											})
												]
											})
										
								]
							})
						]
					}),
					
					new sap.m.IconTabFilter({
						text: "Documents",
						icon: "sap-icon://documents",
						key : "Mob24Doc",
						content: [
							new sap.ui.layout.form.SimpleForm({
								layout: "ResponsiveGridLayout",
								editable: true,
								emptySpanL: 6,
								emptySpanM: 6,
								breakpointM: 1000,
								content: [
								new sap.m.List({
								id : "Mob24DocumentListItem",
								noDataText: "",
								mode: sap.m.ListMode.SingleSelectMaster,
								select : oController.handleMob24SelectedDocListpress,
								items: {
									path: "/results",
									template: new sap.m.ObjectListItem({
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
							})
									
								]
							})
						]
					})
				]
			});
		 
		 
		 
		 
		 
		 
		 
		 
		 ///////////////////////////////////////////////////////////////////////////////////////////////

		
		var container = new sap.m.FlexBox({
			items: [
			        /*lblDummy1,
			        lblMatNo,
			        lblValMatNo,
			        lblDummy2,*/
			        /*lblMatDesc,
			        lblValMatDesc,
			        lblDummy3,
			        lblMatManu,
			        lblValMatManu,
			        lblDummy3A,
			        lblMatManuName,
			        lblValMatManuName,
			        lblDummy4,
			        lblMatModNo,
			        lblValMatModNo,
			        lblDummy5,
			        lblMatSup,
			        lblValMatSup,
			        lblDummy5A,
			        lblMatSupName,
			        lblValMatSupName,
			        lblDummy6,
			        lblMatSupPartNo,
			        lblValMatPartNo,
			        lblDummy7,*/
			       // btnMatImage,
			       // imageMat,
			    
			        lblDummy7A,
			        lblDummy7B
			        
			       // btnSelMat
			        ],
			direction:"Column",
			justifyContent:"Center",
			alignItems:"Start"
		});
	 
	 container.addStyleClass("ContainerPadding");
		
	 if ( g_runningOnPhone == true){
		 var lblConfirm = new sap.m.Label("lblConfirm1", {
				text: "Are you sure what to add the material ?"
			});
			
			var leftButton_b = new sap.m.Button({
				  text : "No",
				  press : function(){
					  dialogWindow.close();
				  }
			  });
			 var RightButton_b = new sap.m.Button({
				  text : "Yes",
				  press : function(){
					  if (backNavMat == "Mob17") {
						  
						  addMaterialInvoker();         
						  /*var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
					    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
					    	splitAppMOB17.toDetail("idMaterialFullDetPage");*/
						 /* $("idMaterialList").show();
					    	$("idMaterialDetails").show();*/  
					    	//sap.ui.getCore().byId("inputQty").setValue("");
					    	sap.ui.getCore().byId("inputSerial").setValue("");
					    	sap.ui.getCore().byId("inputBatch").setValue("");
					    	
					    	dialogWindow.close();
						  
					      /*var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
					      lblQtyIcon.setSrc("");*/
					  }else if (backNavMat == "Mob18") {
						  addMaterialInvoker_mob18();
						  dialogWindow.close();
						  
						  var lblQty = sap.ui.getCore().byId("lblQty");
						  lblQty.setIcon("");
					  }
				  }
			  });
			  
			 var dialogWindow = new sap.m.Dialog("dialogWindow1", {
				  title: "Add Material",
				  leftButton : leftButton_b,
				  rightButton: RightButton_b,
				  content : lblConfirm,
				 // width : "90%"
				
			  });

	 		return new sap.m.Page({
	 			id :"Mob24-thirdPage-BackNavButton",
				title: "{i18n>matSeaDetTit}",
				content: [
				          //container ,
				          Mob24ObjectHeader,
				          ImageIconTabBar,
				],
				enableScrolling: true,
				showNavButton: true,
				
				navButtonTap:function(){
		
		 			var app = sap.ui.getCore().byId("myApp"); 
		  			app.to("idMATSR");
		  			g_MobileNavigationId = "Mob24-SecondScreen-BackNavButton";
				},

	 			
	  			
	 		
	  			
	  			
	  			
				
				showFooter: true,
				footer: new sap.m.Bar({
					
					contentLeft: [
			                       //btnBackMob
			                       
			                       ],
			        contentRight: [
			                       btnSelMat
			                       
			                       ]
				})//.addStyleClass("Selfooter")
			});
		
	 }
	 
	 else{
		
 		return new sap.m.Page({
 			 id :"Mob24-thirdPage-BackNavButton",
			title: "{i18n>matSeaDetTit}",
			showHeader: false,
			content: [
			          //container,,
			          Mob24ObjectHeader,
			          ImageIconTabBar,
			],
			enableScrolling: true,
			//showNavButton: false,
			showFooter: false,
			footer: new sap.m.Bar({
		        contentRight: [
		                       btnSelMat
		                       
		                       ]
			})//.addStyleClass("Selfooter")
		});
	}
	}

});
