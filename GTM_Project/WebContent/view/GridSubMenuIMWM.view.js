sap.ui.jsview("com.cg.gtm.view.GridSubMenuIMWM", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenuIMWM
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenuIMWM";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenuIMWM
	*/ 
	createContent : function(oController) {
		//Load page one time
	      var LocallblLoadingPageMob20 = new sap.m.Label({
	    	  id : "LocallblLoadingPageMob20",
	    	  text : "0"
	      });
	      
	      var LocallblLoadingPageMob26 = new sap.m.Label({
	    	  id : "LocallblLoadingPageMob26",
	    	  text : "0"
	      });
	      
	      var LocallblLoadingPageMob27 = new sap.m.Label({
	    	  id : "LocallblLoadingPageMob27",
	    	  text : "0"
	      });
	      
	      var LocallblLoadingPageMob19 = new sap.m.Label({
	    	  id : "LocallblLoadingPageMob19",
	    	  text : "0"
	      });
	      
	      var LocallblLoadingPageMob28 = new sap.m.Label({
	    	  id : "LocallblLoadingPageMob28",
	    	  text : "0"
	      });
		
	    // create tile container
	      
	      
							   var grTile =   new sap.m.StandardTile({
								   id : "L1_WM_GR",
								    icon : "GTM_Image/Goods-received.png",
								    title : "{i18n>GoodReceived}",
								    info : "{i18n>Good_Rec_GMT}",
										    press : function()
										    {
										    	g_MobileNavigationId = "Mob19-BackNavButton";
										    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob19").getText() == 0)
										    	{
										    	
										    		var Mob19InitialPage = sap.ui.view({ id : "idMob19InitialScreen",
														viewName:"com.cg.gtm.view.Mob19InitialScreen", 
														type:sap.ui.core.mvc.ViewType.JS});
												    	//Add page
												    	sap.ui.getCore().byId("myApp").addPage(Mob19InitialPage);
												    	 sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");
										    	
										    	
										    	}
										    	else
										    		{
										    sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");		
										    sap.ui.getCore().byId("idMOB19SplitApp").toMaster("idMOB19MasPg");
										    sap.ui.getCore().byId("idMOB19SplitApp").toDetail("idMOB19BlankPage");
										    		
										    		}
										    	
										    	sap.ui.getCore().byId("ip_po_del_num").setValue("");
										    	 sap.ui.getCore().byId("ip_del_note_num").setValue("");
										    	 sap.ui.getCore().byId("lbl_del_note_num").setVisible(true);
										    	 sap.ui.getCore().byId("ip_del_note_num").setVisible(true);
										    	 sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
										    	 gMOB19Key="PO"
										    	 sap.ui.getCore().byId("inputPlantMOB19").setValue(window.localStorage.defPlantDesc);
										    	 g_inputPlantCode=window.localStorage.defPlantCode;
										    	 sap.ui.getCore().byId("lbl_po_del_num").setText("PO Number");
										    	 
										    	 if ( g_runningOnPhone == true)
											  		{
											    	  sap.ui.getCore().byId("Mob19ScanMob").setVisible(false);
											  		}
											    	else
											    	 {
											    	 sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(false);
											    	 }
										    	 sap.ui.getCore().byId("Mob19-btnlogSer").setVisible(false);
										    	 sap.ui.getCore().byId("MOB19SerialLabel").setVisible(false);
										    	 sap.ui.getCore().byId("MOB19Serial").setVisible(false);
										    	 sap.ui.getCore().byId("MOB19BatchLabel").setVisible(false);
										    	 sap.ui.getCore().byId("MOB19Batch").setVisible(false);
										    	
										    }
										  }).addStyleClass("GTM_TileBackground");
						
						
							   var imcTile = 	new sap.m.StandardTile({
									id : "IMC",
								    icon : "icon/ico_IMcount.png",
								  //  number : "11",
								   // numberUnit : "Maintenence",
								    title : "{i18n>EntImCnt}",
								    info : "{i18n>EntImCnt}",
								  //  infoState: "{i18n>Er}",
								    press : function()
								    {
								    	g_MobileNavigationId = "Mob20-BackNavButton";
								    	//Loading Page to Mob20 one time
								    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob20").getText() == 0)
								    	{var Mob20InitialPage = new sap.ui.view({ id : "idMob20InitialScreen",
												viewName:"com.cg.gtm.view.Mob20InitialScreen", 
												type:sap.ui.core.mvc.ViewType.JS});
										    	//Add page
				                                sap.ui.getCore().byId("myApp").addPage(Mob20InitialPage);
				                       
				                        		var demoswitch = sap.ui.getCore().byId("demoswitch");
				                        		if (demoswitch.getState() == true)
				                        		{Mob20InventoryDocDemoMode();
				                        		}else{Mob20InventoryDocService();}
										}
								    	
								    	else if ( sap.ui.getCore().byId("LocallblLoadingPageMob20").getText() == 1)
								    	{
								    	//alert("second time calng");
				                		var demoswitch = sap.ui.getCore().byId("demoswitch");
				                		if (demoswitch.getState() == true)
				                		{Mob20InventoryDocDemoMode();
				                		}else{Mob20InventoryDocService();}
								    	}
								    	
								    	//Remove selections
								    	 var listPlantsMOb21 = sap.ui.getCore().byId("Mob20-listMatNo");
											listPlantsMOb21.removeSelections();
				                        //hide confrm count 
										if(g_runningOnPhone == true)
										{}
										else{sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);}
				                        //To
										sap.ui.getCore().byId("myApp").to("idMob20InitialScreen");
								    	
								    	
								    }
								  });			  
										  
					/*var imcTile = 	new sap.m.StandardTile({
						id : "IMC",
						icon : "icon/ico_IMcount.png",
						number : "11",
						// numberUnit : "Maintenence",
						title : "{i18n>EntImCnt}",
						info : "{i18n>EntImCnt}",
						infoState: "{i18n>Er}",
						press : function()
						{
						//Loading Page to Mob20 one time
						
						if ( sap.ui.getCore().byId("LocallblLoadingPageMob20").getText() == 0)
						{var Mob20InitialPage = new sap.ui.view({ id : "idMob20InitialScreen",
								viewName:"com.cg.gtm.view.Mob20InitialScreen", 
								type:sap.ui.core.mvc.ViewType.JS});
						  	//Add page
						
						
						  	sap.ui.getCore().byId("myApp").addPage(Mob20InitialPage);
						  	
						  	
						
						}
					//service call
					//Mob20InventoryDoc(evt);
					
					//Remove selections
					var listPlantsMOb21 = sap.ui.getCore().byId("Mob20-listMatNo");
						listPlantsMOb21.removeSelections();
					//hide confrm count 
						if(g_runningOnPhone == true)
							{
							//future ue
							}
						else
							{
							 sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);
							}
					
					//To
					sap.ui.getCore().byId("myApp").to("idMob20InitialScreen");
					
					
					}
					});*/
					
				var stockTransferTile =  	new sap.m.StandardTile({
						    id : "STTRF",
						    icon : "icon/ico_stocktransfer.png",
						  //  number : "8",
						    //numberUnit : "Quality",
						    title : "{i18n>StoTrn}",
						    info : "{i18n>StoTrn}",
						//    infoState: "{i18n>Sc}",
						    press : function()
						    {g_MobileNavigationId = "Mob17-BackNavButton";
						    	openSplashScreen();// Open splash screen
						    	
						    	sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
						   	 var getPlant_mob17 =  window.localStorage.getItem("defPlantDesc");
						   	g_inputPlantCode=window.localStorage.getItem("defPlantCode")
						    	sap.ui.getCore().byId("inputPlantMat1").setValue(getPlant_mob17);
						    	sap.ui.getCore().byId("inputPlantMat").setValue(getPlant_mob17);
						    	var myApp = sap.ui.getCore().byId("myApp");
						    	
						    	myApp.to("idMOB17");
						    	sap.ui.getCore().byId("inputPlantMat1").setValue(getPlant_mob17);
						    	//sap.ui.getCore().byId("inputPlantMat1").rerender()
						    	sap.ui.getCore().byId("lblCustProj").setVisible(false);
								sap.ui.getCore().byId("selectCustProj").setVisible(false);
								//var radioBtnMOB17 = sap.ui.getCore().byId("optSpecialStock");
									//radioBtnMOB17.setSelectedIndex(0);
						    	
						    	if(g_runningOnPhone != true) {
							    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
							    	splitAppMOB17.toMaster("idMOB17_MasterActionPage");
							    	splitAppMOB17.toDetail("idMOB17_BlankScreen");
						    	}
						    	
						    	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
								var aData1 = [];
								var	oModel = new sap.ui.model.json.JSONModel();
								oModel.setData({modelData: aData1});
								tabMaterialLst.setModel(oModel);
								
								sap.ui.getCore().byId("inputMatNo").setValue("");
								
								/*
								 * Calling Moment Type - Start
								 */
								callMomentTypeHelp();
								/*
								 * Calling Moment Type - End
								 */ 
								
								/*Setting Value for From & To Storage Location - Start */
								var demo = sap.ui.getCore().byId("demoswitch");  
								
								if (demo.getState() != true) {
									callStorageLocation1(null);
								}
								/*Setting Value for From & To Storage Location - End */
						    }
						  });
						  
						var stockIssuetile =   new sap.m.StandardTile({
							id : "L1_WM_SI",
						    icon : "GTM_Image/Stock-issue.png",
						    title : "{i18n>StoIsu}",
						    info : "{i18n>Stock_Issue_Info}",
							    press : function(){
							    	/*hideidMob18first_Scrap();
									hideidMob18second_Scrap();
									hideidMob18first();
									hideidMob18second();*/
							    	
							    	 g_MobileNavigationId = "Mob18-BackNavButton";
							    	
									//Mob18-Order
							    	 var getdefaultPlant =  window.localStorage.getItem("defPlantDesc");
									 sap.ui.getCore().byId("inputPlantMat").setValue(getdefaultPlant);
									 	g_inputPlantCode=window.localStorage.getItem("defPlantCode")
									 	
							    	  if(g_runningOnPhone == true)
										{
											
											var appM = sap.ui.getCore().byId("myApp"); 
													appM.to("idMob18InitialScreen");
													appM.to("idMOB18StockMas");
										}
							    	  else{
							    		  var appM = sap.ui.getCore().byId("myApp"); 
											appM.to("idMob18InitialScreen");
											 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
									    	 app.toMaster("idMOB18StockMas");
										 app.toDetail("idMOB18Blank");
											   
							    	  }
							    	
									
									
									
								
						    	
									 //Setting table empty
									 var tabMaterialLst = sap.ui.getCore().byId("tableMat");
										var aData1 = [];
										var	oModel = new sap.ui.model.json.JSONModel();
										oModel.setData({modelData: aData1});
										tabMaterialLst.setModel(oModel);
							  	    /*var app = sap.ui.getCore().byId("splitAppInsCreate1");  
							    	 app.toMaster("idMOB21Mas");
									 app.toDetail("idBlankScreen");*/
									 
							    	/*//Loading Page to Mob18 one time
							    	
							    	if ( globalLoadingPageMob18 == 0)
							    	{
							    		
							    		
							    		
							    		var page = sap.ui.view({ id : "idMob18InitialScreen",
											viewName:"com.cg.gtm.view.Mob18InitialScreen", 
											type:sap.ui.core.mvc.ViewType.JS});
									    	//Add page
									    	sap.ui.getCore().byId("myApp").addPage(page);
							    	
							    	
							    	
							    	//Split App 
							    	
							    	}
							    	//To
							    	sap.ui.getCore().byId("myApp").to("idMob18InitialScreen");*/
							    	
							    	
							    }
							  }).addStyleClass("GTM_TileBackground");

							
						var wmCountTile  = new sap.m.StandardTile({
						    id : "WMCOUNT",
						    icon : "icon/ico_WMcount.png",
						   // number : "12",
						   // numberUnit : "Production",
						    title : "{i18n>EntWmCnt}",
						    info : "{i18n>EntWmCnt}",
						    press: function(){
						    	oController.loadMOB35master();
						    	
						    },
						   // infoState: "{i18n>Er}"
						  });
		 var putAwayTile =  new sap.m.StandardTile({
			    id : "PUTAW",
			    icon : "icon/ico_putaway.png",
			   // number : "13",
			    //numberUnit : "Quality",
			    title : "{i18n>PutWy}",
			    info : "{i18n>PutWy}",
			  //  infoState: "{i18n>Sc}",
			    press : function()
			    {
			    	
			    	 g_MobileNavigationId = "Mob26-BackNavButton";
			    	
			    
			    	
			    	
			    	
			    	//Loading Page to Mob20 one time
			    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob26").getText() == 0)
			    	{var Mob26InitialPage = new sap.ui.view({ id : "idMob26InitialScreen",
							viewName:"com.cg.gtm.view.Mob26InitialScreen", 
							type:sap.ui.core.mvc.ViewType.JS});
					    	//Add page
			    	
			    	var defaultWareHouse = "";
			    	defaultWareHouse = window.localStorage.getItem("defWHCode");
			    	var defaultPlant =  window.localStorage.getItem("defPlantCode");
			    	var defaultlocCode =  window.localStorage.getItem("defLocCode");
			    	var defaultlocCodeDes =  window.localStorage.getItem("defLocDesc");
			   
			    	
			    	sap.ui.getCore().byId("Mob26-txtFrWareHouse").setText(defaultWareHouse);
			    	sap.ui.getCore().byId("Mob26-txtFrPlant").setText(defaultPlant);
			    	sap.ui.getCore().byId("Mob26-txtFrlocation").setText(defaultlocCodeDes);
			    	sap.ui.getCore().byId("myApp").addPage(Mob26InitialPage);
                   
                    		/*var demoswitch = sap.ui.getCore().byId("demoswitch");
                    		if (demoswitch.getState() == true)
                    		{//Mob20InventoryDocDemoMode();
                    		}
                    		else{
                    			
                    		//	Mob20InventoryDocService();
                    			
                    		}*/
					}
			    	
			    	else if ( sap.ui.getCore().byId("LocallblLoadingPageMob26").getText() == 1)
			    	{
			    		
            		var demoswitch = sap.ui.getCore().byId("demoswitch");
            		if (demoswitch.getState() == true)
            		{
            			//Mob20InventoryDocDemoMode();
            		}else{
            			//Mob20InventoryDocService();}
			    	}
			        }
			    	
			    	
			    	var defaultWareHouse = "";
			    	defaultWareHouse = window.localStorage.getItem("defWHCode");
			    	var defaultPlant =  window.localStorage.getItem("defPlantCode");
			    	var defaultlocCodeDes =  window.localStorage.getItem("defLocDesc");
			    	sap.ui.getCore().byId("Mob26-txtFrlocation").setText(defaultlocCodeDes);
			    	
			    	sap.ui.getCore().byId("Mob26-txtFrWareHouse").setText(defaultWareHouse);
			    	sap.ui.getCore().byId("Mob26-txtFrPlant").setText(defaultPlant);
			    	
			    	
			    	sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");
			    	
			    	//Destroy Scanned Items:
			    	sap.ui.getCore().byId("Mob26-oResponsivePopoverList").destroyItems();
			    	window.localStorage.removeItem("NewSerialNumbersMob26");
			    	 sap.ui.getCore().byId("Mob26-lblyourloc").setVisible(true);//hide location
				      sap.ui.getCore().byId("Mob26-txt").setVisible(true);//hide text
				      sap.ui.getCore().byId("Mob26-ipTrOrder").setValue("");
			        	 sap.ui.getCore().byId("Mob26-ipStrBin").setValue("");
			    	
			    	
			    	
			    	
			    	
			        	 
			        	 
			    }
			  });
			  
		 
			
		/*	var stockOverviewToTile =  new sap.m.StandardTile({
					id : "StockOverview",
				    icon : "icon/ico_bin.png",
				    number : "16",
				   // numberUnit : "Maintenence",
				    title : "{i18n>Stock}",
				    info : "{i18n>Stock}",
				    infoState: "{i18n>Er}",
				    press : function(){
				    	
				    	
				    	var appM = sap.ui.getCore().byId("myApp"); 
						appM.to("idMob23InitialScreen");
						globalMob15Detail = "Mob23";
				    }
				  });*/
		 var changeStockTile =	  new sap.m.StandardTile({
			    id : "CHGSTCK",
			    icon : "icon/ico_changestockstatus.png",
			  //  number : "15",
			  //  numberUnit : "Goods",
			    title : "{i18n>ChngStkSta}",
			    info : "{i18n>ChngStkSta}",
			 //   infoState: "{i18n>Sc}",
			    press : function(){
			    	
			    	g_MobileNavigationId = "Mob28-BackNavButton";
			    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob28").getText() == 0)
			    	{
			    	
			    		var Mob28InitialPage = sap.ui.view({ id : "idMob28InitialScreen",
							viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28InitialView", 
							type:sap.ui.core.mvc.ViewType.JS});
					    	//Add page
					    	sap.ui.getCore().byId("myApp").addPage(Mob28InitialPage);
					    	sap.ui.getCore().byId("myApp").to("idMob28InitialScreen");
					    	 $("#idMob28MatListPage").hide();
							   $("#idMob28MatDetPage").hide();
			    	
			    	
			    	}
			    	else
			    		{
			    sap.ui.getCore().byId("myApp").to("idMob28InitialScreen");		
			    if ( g_runningOnPhone == false)
				{
			    sap.ui.getCore().byId("idMOB28SplitApp").toMaster("idMOB28MasPg");
			    sap.ui.getCore().byId("idMOB28SplitApp").toDetail("idMOB28BlankPage");
				}
			    		
			    		}
			    	
			    	//Quantity:MOB28QtyChg
                    sap.ui.getCore().byId("MOB28QtyChg").setValue("");
			    	
			    	 sap.ui.getCore().byId("inputPlantMOB28").setText(  window.localStorage.getItem("defPlantDesc"));
				   	  sap.ui.getCore().byId("inputWHMOB28").setText( window.localStorage.getItem("defWHDesc"));
				   	 sap.ui.getCore().byId("Mob28Save").setVisible(false);
			    	
			    }
			  }) ;
		 
			var pickingTile =   new sap.m.StandardTile({
				    id : "PICK",
				    icon : "icon/ico_picking.png",
				  //  number : "14",
				   // numberUnit : "Inventory",
				    title : "{i18n>PicNg}",
				    info : "{i18n>PicNg}",
				  //  infoState: "{i18n>Sc}",
				    press : function()
				    {g_MobileNavigationId = "Mob27-BackNavButton";

				    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob27").getText() == 0)
				    	{var Mob26InitialPage = new sap.ui.view({ id : "idMob27InitialScreen",
								viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27InitialScreen", 
								type:sap.ui.core.mvc.ViewType.JS});
						    	//Add page
				    	
				    	var defaultWareHouse = "";
				    	defaultWareHouse = window.localStorage.getItem("defWHCode");
				    	var defaultPlant =  window.localStorage.getItem("defPlantCode");
				    	sap.ui.getCore().byId("Mob27-txt-WorkHouse").setText(defaultWareHouse);
				    	sap.ui.getCore().byId("Mob27-txt-palnt").setText(defaultPlant);
				    	
				    	sap.ui.getCore().byId("Mob27-Mas-txt-WorkHouse").setText(defaultWareHouse);
				    	sap.ui.getCore().byId("Mob27-Mas-txt-palnt").setText(defaultPlant);
				    	
				    	
	                            sap.ui.getCore().byId("myApp").addPage(Mob26InitialPage);
	                   
						}
				    	
				    	else if ( sap.ui.getCore().byId("LocallblLoadingPageMob27").getText() == 1)
				    	{
				    		
	            		var demoswitch = sap.ui.getCore().byId("demoswitch");
	            		if (demoswitch.getState() == true)
	            		{
	            			//Mob20InventoryDocDemoMode();
	            		}else{
	            			//Mob20InventoryDocService();}
				    	}
				        }
				    	
				    	
				    	var defaultWareHouse = "";
				    	defaultWareHouse = window.localStorage.getItem("defWHCode");
				    	var defaultPlant =  window.localStorage.getItem("defPlantCode");
				    	sap.ui.getCore().byId("Mob27-txt-WorkHouse").setText(defaultWareHouse);
				    	sap.ui.getCore().byId("Mob27-txt-palnt").setText(defaultPlant);
				    	
				    	sap.ui.getCore().byId("Mob27-Mas-txt-WorkHouse").setText(defaultWareHouse);
				    	sap.ui.getCore().byId("Mob27-Mas-txt-palnt").setText(defaultPlant);
				    	sap.ui.getCore().byId("myApp").to("idMob27InitialScreen");
				    
				    	
				    	
				    	
				    	
				    	
				        	 
				        	 
				    
				    }
				  });
			
			
			
			
			var stockOverviewTile =  new sap.m.StandardTile({
				id : "L1_WM_SO",
				icon : "icon/ico_stockissue.png",
			    title : "{i18n>Stock}",
			    info : "{i18n>Stock_OverView_Info}",
			    press : function(){
			    	//set Default plant to Views
			    	//Default plant for material search
			    	 var getdefaultPlant =  window.localStorage.getItem("defPlantDesc");
					 sap.ui.getCore().byId("inputPlantMat").setValue(getdefaultPlant);
					 	g_inputPlantCode=window.localStorage.getItem("defPlantCode")
					 	
			    	g_backstock = "";
			    	g_MobileNavigationId = "Mob23-BackNavButton";
					 var getPlant =  window.localStorage.getItem("defPlantDesc");
					// defaultPlantName  =  window.localStorage.getItem("defPlantDesc");
					 
					//default warehouse
						var defwhouse =  window.localStorage.getItem("defWHDesc");
						
			    
					
					      if(g_runningOnPhone == true)
							{
								
								var appM = sap.ui.getCore().byId("myApp"); 
										appM.to("idMob23InitialScreen");
										appM.to("idMOB23Matmaster");
							}
							else{
								
											var appM = sap.ui.getCore().byId("myApp"); 
										appM.to("idMob23InitialScreen");
										
										  var app = sap.ui.getCore().byId("idMOB23SplitApp");  
						    	   	        app.toMaster("idMOB23Matmaster");
						    	   	        app.toDetail("idMOB23Blank");
							}		

					//Mob23 
					var plant_mob23 = sap.ui.getCore().byId("inputPlant23");
					plant_mob23.setValue(getPlant)
					
					
					var warehouse = sap.ui.getCore().byId("idwarehouse");
					//warehouse.setText(defwhouse);
					globalMob15Detail = "Mob23";
			    }
			  }).addStyleClass("GTM_TileBackground");
			

			var bintobinTile =   new sap.m.StandardTile({
					id : "BIN1",
				    icon : "icon/ico_bin.png",
				  //  number : "16",
				   // numberUnit : "Maintenence",
				    title : "{i18n>BintoBi}",
				    info : "{i18n>BintoBi}",
				  //  infoState: "{i18n>Er}",
				    press : function(){
				    	
				    	if(g_runningOnPhone == true)
						{
				    	  g_MobileNavigationId = "Mob30-BackNavButton";
							var appM = sap.ui.getCore().byId("myApp"); 
									appM.to("idMob30InitialScreen");
									appM.to("idMOB30master");
						}
				      
			    	
					// var getPlant_mob30 =  window.localStorage.getItem("defPlantDesc");
			    	else{
			    		var appM = sap.ui.getCore().byId("myApp"); 
						appM.to("idMob30InitialScreen");
			    	} 
			    	
				    	
				    	//set Default plant to Views
				    
							//Mob30
							//var plant_mob30 = sap.ui.getCore().byId("inputPlant30");
						//	plant_mob30.setValue(getPlant_mob30);
							//default warehouse
							
							var defaultWareHouse = "";
					    	defaultWareHouse = window.localStorage.getItem("defWHCode");
					    	var defaultPlant =  window.localStorage.getItem("defPlantCode");
					    
					    	var plant = sap.ui.getCore().byId("inputPlant30").setText(defaultPlant);
							//var defwhouse = window.localStorage.getItem("defWHCode");

							var warehouse = sap.ui.getCore().byId("idwarehouse").setText(defaultWareHouse);

							//globalMob15Detail = "Mob23";
					    }
			 });
				              
	
	
/*	var binToTile =  new sap.m.StandardTile({
			id : "BIN",
		    icon : "icon/ico_bin.png",
		    number : "16",
		   // numberUnit : "Maintenence",
		    title : "{i18n>BintoBi}",
		    info : "{i18n>BintoBi}",
		    infoState: "{i18n>Er}",
		    press : function(){
		    	
		    	
		    	var appM = sap.ui.getCore().byId("myApp"); 
				appM.to("idMob23InitialScreen");
				globalMob15Detail = "Mob23";
		    }
		  });*/
		  
		/*  new sap.m.StandardTile({
			 // id : "tile2",
			    icon : "sap-icon://fridge",
			    number : "17",
			   // numberUnit : "Production",
			    title : "{i18n>Mob34}",
			    info : "{i18n>Mob34}",
			    infoState: "{i18n>Er}"
			  });*/
			  
		 var mob35Tile =  new sap.m.StandardTile({
			     id : "MOB35",
			    icon : "icon/ico_measure.png",
			   // number : "18",
			    //numberUnit : "Quality",
			    title : "{i18n>Mob35}",
			    info : "{i18n>Mob35}",
			 //   infoState: "{i18n>Sc}",
			    	 press : function(){
					    	

					    	
					    }
			  });
					
		 
		 
					/***************************************/


	   var tileContainer = new sap.m.TileContainer({
		   id :"tileconIMWM",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	     /* tiles: [
						  new sap.m.StandardTile({
								id : "BIN1",
							    icon : "icon/ico_bin.png",
							  //  number : "16",
							   // numberUnit : "Maintenence",
							    title : "{i18n>BintoBi}",
							    info : "{i18n>BintoBi}",
							  //  infoState: "{i18n>Er}",
							    press : function(){
							    	//set Default plant to Views
									
									 var getPlant =  window.localStorage.getItem("defPlantDesc");
									 
							    	//Mob30
									var plant_mob30 = sap.ui.getCore().byId("inputPlant30");
									plant_mob30.setValue(getPlant);
									//default warehouse

									var defwhouse = window.localStorage.getItem("defWHCode");

									var warehouse = sap.ui.getCore().byId("idwarehouse").setText(defwhouse);

						   		 var appM = sap.ui.getCore().byId("myApp"); 
										appM.to("idMob30InitialScreen");
										//globalMob15Detail = "Mob23";
								    }
						 }),
							              ]*/
	     /* tiles : [
	        
							  new sap.m.StandardTile({
								//  id : "tile3",
								    icon : "icon/ico_stocktransfer.png",
								    number : "8",
								    //numberUnit : "Quality",
								    title : "{i18n>StoTrn}",
								    info : "{i18n>StoTrn}",
								    infoState: "{i18n>Sc}",
								    press : function()
								    {
								    	var myApp = sap.ui.getCore().byId("myApp");
								    	myApp.to("idMOB17");
								    	
								    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
								    	splitAppMOB17.toMaster("idMOB17_MasterActionPage");
								    	splitAppMOB17.toDetail("idMOB17_BlankScreen");
								    	
								    	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
										var aData1 = [];
										var	oModel = new sap.ui.model.json.JSONModel();
										oModel.setData({modelData: aData1});
										tabMaterialLst.setModel(oModel);
										
										sap.ui.getCore().byId("inputMatNo").setValue("");
								    }
								  }),
								  
								  new sap.m.StandardTile({
									//  id : "tile4",
									    icon : "icon/ico_stockissue.png",
									    number : "9",
									   // numberUnit : "Inventory",
									    title : "{i18n>StoIsu}",
									    info : "{i18n>StoIsu}",
									    infoState: "{i18n>Sc}",
									    press : function(){
									    	
									    	
									    	var appM = sap.ui.getCore().byId("myApp"); 
									    	
											appM.to("idMob18InitialScreen");
											
											hideidMob18first();
											hideidMob18second();
											hideidMob18first_Scrap();
											hideidMob18second_Scrap();
											 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
									    	 app.toMaster("idMOB18StockMas");
											 app.toDetail("idBlankScreen_18");
											 
											 //Setting table empty
											 var tabMaterialLst = sap.ui.getCore().byId("tableMat");
												var aData1 = [];
												var	oModel = new sap.ui.model.json.JSONModel();
												oModel.setData({modelData: aData1});
												tabMaterialLst.setModel(oModel);
									  	    var app = sap.ui.getCore().byId("splitAppInsCreate1");  
									    	 app.toMaster("idMOB21Mas");
											 app.toDetail("idBlankScreen");
											 
									    	//Loading Page to Mob18 one time
									    	
									    	if ( globalLoadingPageMob18 == 0)
									    	{
									    		
									    		
									    		
									    		var page = sap.ui.view({ id : "idMob18InitialScreen",
													viewName:"com.cg.gtm.view.Mob18InitialScreen", 
													type:sap.ui.core.mvc.ViewType.JS});
											    	//Add page
											    	sap.ui.getCore().byId("myApp").addPage(page);
									    	
									    	
									    	
									    	//Split App 
									    	
									    	}
									    	//To
									    	sap.ui.getCore().byId("myApp").to("idMob18InitialScreen");
									    	
									    	
									    }
									  }),
									  new sap.m.StandardTile({
										//  id : "tile5",
										    icon : "icon/ico_goodsreceipt.png",
										    number : "10",
										  //  numberUnit : "Goods",
										    title : "{i18n>Gud_rec}",
										    info : "{i18n>Gud_rec}",
										    infoState: "{i18n>Sc}",
										    press : function()
										    {

										    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob19").getText() == 0)
										    	{
										    	
										    		var Mob19InitialPage = sap.ui.view({ id : "idMob19InitialScreen",
														viewName:"com.cg.gtm.view.Mob19InitialScreen", 
														type:sap.ui.core.mvc.ViewType.JS});
												    	//Add page
												    	sap.ui.getCore().byId("myApp").addPage(Mob19InitialPage);
												    	 sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");
										    	
										    	
										    	}
										    	else
										    		{
										    sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");		
										    sap.ui.getCore().byId("idMOB19SplitApp").toMaster("idMOB19MasPg");
										    sap.ui.getCore().byId("idMOB19SplitApp").toDetail("idMOB19BlankPage");
										    		
										    		}
										    	
										    }
										  }) ,
			
	
										  
										  
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "icon/ico_IMcount.png",
				    number : "11",
				   // numberUnit : "Maintenence",
				    title : "{i18n>EntImCnt}",
				    info : "{i18n>EntImCnt}",
				    infoState: "{i18n>Er}",
				    press : function()
				    {
				    	//Loading Page to Mob20 one time
				    	if ( sap.ui.getCore().byId("LocallblLoadingPageMob20").getText() == 0)
				    	{var Mob20InitialPage = new sap.ui.view({ id : "idMob20InitialScreen",
								viewName:"com.cg.gtm.view.Mob20InitialScreen", 
								type:sap.ui.core.mvc.ViewType.JS});
						    	//Add page
                                sap.ui.getCore().byId("myApp").addPage(Mob20InitialPage);
                       
                        		var demoswitch = sap.ui.getCore().byId("demoswitch");
                        		if (demoswitch.getState() == true)
                        		{Mob20InventoryDocDemoMode();
                        		}else{Mob20InventoryDocService();}
						}
				    	
				    	else if ( sap.ui.getCore().byId("LocallblLoadingPageMob20").getText() == 1)
				    	{
				    	//alert("second time calng");
                		var demoswitch = sap.ui.getCore().byId("demoswitch");
                		if (demoswitch.getState() == true)
                		{Mob20InventoryDocDemoMode();
                		}else{Mob20InventoryDocService();}
				    	}
				    	
				    	//Remove selections
				    	 var listPlantsMOb21 = sap.ui.getCore().byId("Mob20-listMatNo");
							listPlantsMOb21.removeSelections();
                        //hide confrm count 
						if(g_runningOnPhone == true)
						{}else{sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);}
                        //To
						sap.ui.getCore().byId("myApp").to("idMob20InitialScreen");
				    	
				    	
				    }
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "icon/ico_WMcount.png",
					    number : "12",
					   // numberUnit : "Production",
					    title : "{i18n>EntWmCnt}",
					    info : "{i18n>EntWmCnt}",
					    infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "icon/ico_putaway.png",
					    number : "13",
					    //numberUnit : "Quality",
					    title : "{i18n>PutWy}",
					    info : "{i18n>PutWy}",
					    infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "icon/ico_picking.png",
						    number : "14",
						   // numberUnit : "Inventory",
						    title : "{i18n>PicNg}",
						    info : "{i18n>PicNg}",
						    infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "icon/ico_changestockstatus.png",
							    number : "15",
							  //  numberUnit : "Goods",
							    title : "{i18n>ChngStkSta}",
							    info : "{i18n>ChngStkSta}",
							    infoState: "{i18n>Sc}"
							  }) 
			,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "icon/ico_bin.png",
				    number : "16",
				   // numberUnit : "Maintenence",
				    title : "{i18n>BintoBi}",
				    info : "{i18n>BintoBi}",
				    infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					    number : "17",
					   // numberUnit : "Production",
					    title : "{i18n>Mob34}",
					    info : "{i18n>Mob34}",
					    infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "icon/ico_measure.png",
					    number : "18",
					    //numberUnit : "Quality",
					    title : "{i18n>Mob35}",
					    info : "{i18n>Mob35}",
					    infoState: "{i18n>Sc}"
					  })
	      ]*/
	    });
	   var HrAppraisal = new sap.m.StandardTile({
	        id : "L1_HR_HA",
	        icon : "GTM_Image/HRAppraisal.png",
		    title : "{i18n>HrAppraisalTitle}",
		    info : "{i18n>Stock_HR_Info1}"
       }).addStyleClass("GTM_TileBackground");
	   
	    defaultPlantName = "North Pole Depot";//GTM
		defaultPlantCode = "GWNP";//GTM
		var user = sap.ui.getCore().getElementById("txtUser");
		var pass = sap.ui.getCore().getElementById("txtPass");
		var currDate = new Date();
		window.localStorage.setItem("lastDate", currDate);
		savePassword(pass.getValue());
		saveUserName(user.getValue());
		getPassword();
		getUserName();
		
	   GTM_LaunchpadService();
	   
	   //tileContainer.addTile(grTile );
	  // tileContainer.addTile(stockIssuetile  );
	   //tileContainer.addTile(stockOverviewTile  );
	   //tileContainer.addTile(HrAppraisal  );
	   
	   
	   this.page = new sap.m.Page({
			//title: "{i18n>GridSubMenImWmTit}",
			id : "MainGrid-Inventory",
			showHeader : true,
			content: [
			          	tileContainer
					],
					showNavButton: false,
					enableScrolling: false,
		            navButtonTap:function(){  
		            	g_MobileNavigationId = "Mob00-BackNavButton";
		                          var app = sap.ui.getCore().byId("myApp");  
		                          
		                        //Main Tile Page
		                          app.to("idGrid");  
		                           
		                           
		                           
		                           
		                         
		            }  
		});
	    
 		return this.page;
 		
 		
 		
	
		
	}

});