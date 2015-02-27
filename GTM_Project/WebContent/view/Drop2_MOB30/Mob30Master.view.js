sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30Master
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30Master
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
		
		
		var lblType = new sap.m.Label({
			text: "{i18n>mob30_storage}",design: sap.m.LabelDesign.Bold,
			//width : "90px"
		});
		
		
		//Storage Type
		var inputStorage = new sap.m.Select("idStorageType", {
			 width : "15rem",
			 placeholder: 'Storage Type',
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("Storagetype", false),
		        template: new sap.ui.core.Item({
		          key: "{Storagetype}",
		          text: "{StoragetypeDesc}"
		        })
		      } ,
		      
		      change : function(oEvent)
		      {
		    	  $("#idMOB30Detail").hide();
		    	  $("#idMOB30MatDetail").hide();
		    	  sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
		   		sap.ui.getCore().byId("Mob30Move").setVisible(false);
		    	//alert(oEvent.oSource.mProperties.selectedKey);  
		    	
		    	var key = oEvent.oSource.mProperties.selectedKey;
		    	callStoragebin(key);
		      },
		      
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("input_mob23");
		
		var lblBin = new sap.m.Label({
			text: "{i18n>mob30_storagebin}",design: sap.m.LabelDesign.Bold,
//			/width : "80px"
		});
		
		var inputStoragebin = new sap.m.Select("idStoragebin", {
			 width : "15rem",
			 placeholder: 'Storage Bin',
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("Storagetype", false),
		        template: new sap.ui.core.Item({
		          key: "{Storagebin}",
		          text: "{Storagebin}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("input_mob23");
		
		
		
		  
		
		//Plant
		

		var lblPlant = new sap.m.Label({
			text: "{i18n>Mob18_Plant}",design: sap.m.LabelDesign.Bold,
			width : "80px"
		});
		
		var inputPlant  = new sap.m.Text("inputPlant30",{
			//text: "Np1",
			width : "80px"
		});
		
		/*var inputPlant = new sap.m.Input("inputPlant30",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    width : "15rem",
		     placeholder: 'Enter Plant',
		      showSuggestion: true,
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
		    	  globalPlantSearchFrom = "MOB30";
		    	  
		    	  getPlantList();
		    	  
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						//var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
						app.to("idCommonPlantSearch");
					}else
						{
						  var app = sap.ui.getCore().byId("idMOB30SplitApp"); 
				    	  
					    	 var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
					    	  app.addMasterPage(commonPlantSearchPage);
					    	  
				        	  app.toMaster("idCommonPlantSearch");
						}
			      
			      
		    	
	        	  
	        	  
		      }
		    
		  }).addStyleClass("input_mob23");
		*/
		
		
		//Warehouse
		var lblWarehouse = new sap.m.Label({
			text: "{i18n>mob30_warehouse}",design: sap.m.LabelDesign.Bold,
			width : "80px"
		});
		
		
		var inputWarehouse  = new sap.m.Text("idwarehouse",{
			//text: "Np1",
			width : "80px"
		});
		
		
		/*var inputWarehouse = new sap.m.Input("idwarehouse",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    width : "15rem",
		     placeholder: 'Enter Warehouse',
		      showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MOB30whouse",
		        template: new sap.ui.core.Item({
		          text: "{WareHouseDesc}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	 // globalPlantSearchFrom = "MOB30";
		    	  
		    	  getPlantList();
		    	  
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						//var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
						app.to("idMOB30whouse");
					}else
						{
						 getWhouseList_mob30();
						  var app = sap.ui.getCore().byId("idMOB30SplitApp"); 
				    	  
					    	 var WhousePage = sap.ui.getCore().byId("idMOB30whouse");
					    	  app.addMasterPage(WhousePage);
					    	  
				        	  app.toMaster("idMOB30whouse");
				        	 
						}
			      
			      
		    	
	        	  
	        	  
		      }
		    
		  }).addStyleClass("input_mob23");*/
		
		//storage Type Flex Box
		var container_Type = new sap.m.FlexBox({
			items: [
				   
					lblType,
					inputStorage
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//storage Bin Flex Box
		var container_Bin = new sap.m.FlexBox({
			items: [
				  
					//lblBin,
					inputStoragebin,
					batchScanMOB30
				   // matScanQ1
			        ],
			//direction:"Row",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start",
			
		});
		
		
		//Plant Flex Box
		var container_plant = new sap.m.FlexBox({
			items: [
				   
					lblPlant,
					inputPlant
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//WareHouse Flex Box
		var container_warehouse = new sap.m.FlexBox({
			items: [
				   
					lblWarehouse,
					inputWarehouse
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//Main Flex box
		var container_Main = new sap.m.FlexBox({
			items: [
				   
					lblDummy,
					container_Type,
					lblDummy1,
					lblBin,
					container_Bin,
					//batchScanMOB30,
					lblDummy2,
					container_plant,
					lblDummy3,
					container_warehouse
				
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("mob23flex");
		
		
		
		//Buttons in footer
		var btnShow = new sap.m.Button("idshow",{
			text : "Show",
			 icon: "sap-icon://show",
			press :function(){
				//$("#idMOB30MatDetail").hide()
				oController.Mob30MatItem();
			} 
				
			
              //  $("#idMOB30MatDetail").hide();
          	
			
		});
		//scanner
		
		 var matScanMOB22 ;
		  var isRunningOnDesktopMOb22 = jQuery.device.is.desktop; 
		  
		  if( g_runningInTablet|| g_runningOnPhone)
			{
			  debugger;
			  
			var batchScanMOB30 =  new sap.m.Image({
				  id : "batchScanMOB30" ,
				    src: "icon/ico_rect_scanbarcode.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    press: function () {
						
						
						
							
								var Material = "";
							    var mainArray= [];
							    
							    var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
							cordova.plugins.barcodeScanner.scan(
						            function(result){
						            //var resArray = result.text.split("#");
						            var str = result.text;//#L:NP1001X-01-01-2
						            var res = str.split("#");
						            for( var i = 1 ; i< res.length; i++)
						            {
						            Material = res[i];
						            Material = Material.split(":");
						            Material = Material[1];
						            mainArray.push(Material);
						            }
						            var result= mainArray[0]; //NP1001X-01-01-2(Wh 3+Stype 3+10 BIN)
						            var wh= result.substring(0,3);
						            var stype= result.substring(3,6);
						            var bin= result.substring(6,result.length);
						            
						         var selectedStype= sap.ui.getCore().byId("idStorageType").getSelectedItem().getKey();
						         if(selectedStype==stype && wh==sap.ui.getCore().byId("idwarehouse").getText()){ 
						         sap.ui.getCore().byId("idStoragebin").setValue(bin);
						         
						         
						         
						         }
						         else{
						        	 sap.m.MessageBox.show(
												"Bin Mismatch:Please check the Storage type Entry and Warehouse",
													sap.m.MessageBox.Icon.ERROR,
													"Error");
						         }
						         
						         if( g_isDebug == true)
						        	{
						        	//Service End Time
						        	var logInfo1 = getTimeStamp() +"Barcode Scan::"+str+"-Finish" ;
						        	//Log file Service Start and End Time
						        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						        	logFileUpdate(g_ServiceStartEndTime);
						        	}
						         
						         
						            }, 
						            function(error){
						           	sap.m.MessageBox.show("Scan failed: " + error);
						           	if( g_isDebug == true)
						        	{
						        	//Service End Time
						        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
						        	//Log file Service Start and End Time
						        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						        	logFileUpdate(g_ServiceStartEndTime);
						        	}
						            });	
								
							},
				  });
			
			container_Bin.addItem(batchScanMOB30);
			batchScanMOB30.addStyleClass("matScan");
				 // batchScanMOB22.setVisible(false);
			}
		 
		
		 ///////////////////////Phone version///////////////////////////////
		
		 if ( g_runningOnPhone == true)
			{
				return new sap.m.Page({
					id : "Mob30-MasterScreen",
					title: "{i18n>mob30_bin}",
					content: [
					          container_Main
					],
					headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
				
					
					showNavButton: true,
					 navButtonTap:function(){  
           	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
                          var app = sap.ui.getCore().byId("myApp"); 
                          app.to("idGridSubMenuIMWM");
                          },
					enableScrolling: false,
			 		showFooter: true,	
					footer: new sap.m.Bar({
						//contentLeft: [ btnSearch.addStyleClass("search")],
				        contentRight: [
				                      
				                      btnShow  
				                       ]
					}).addStyleClass("footer_phone"),
				});
			}
			
		 else{
			 
		 
		return new sap.m.Page({
		
			title: "{i18n>mob30_bin}",
			content: [
			          container_Main
			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			enableScrolling: false,
	 		showFooter: true,	
			footer: new sap.m.Bar({
				//contentLeft: [ btnSearch.addStyleClass("search")],
		        contentRight: [
		                      
		                      btnShow  
		                       ]
			}).addStyleClass("footer"),
		});
	}
	}

});