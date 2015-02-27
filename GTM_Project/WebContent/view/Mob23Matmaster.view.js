sap.ui.jsview("com.cg.gtm.view.Mob23Matmaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23Matmaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23Matmaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23Matmaster
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
		
		var lblAddItemDesc = new sap.m.Label({
		      text: "{i18n>Mob18_Add}",design: sap.m.LabelDesign.Bold,
		      width: "270px"
		    });
	/*	var lblAddItemDesc = new sap.m.Label({
		      text: "{i18n>MOB17_AddItemDesc}",
		      width: "270px"
		    });
		
		lblAddItemDesc.addStyleClass("topBottomPadding");
		
		var lblOr = new sap.m.Label("lblOr_mob23",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr.addStyleClass("topBottomPadAlignCenter");
		
		var lblOr1 = new sap.m.Label("lblOr1_mob23",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr1.addStyleClass("topBottomPadAlignCenter");
		
		var btnScanMat = new sap.m.Button({
			text : "{i18n>MOB17_ScanMat}",
			press : function(){
				
			}
		}).addStyleClass("btn");
		

		var btnSearchMat = new sap.m.Button({
			text : "{i18n>MOB17_SearchMat}",
			press : function(){
			    
		          backNavMat = "MOB23";
				
				var app = sap.ui.getCore().byId("myApp");  
		        app.to("idMob24MaterialSearch"); 
		        
		        var app = sap.ui.getCore().byId("splitAppMaterial");  
			    app.toMaster("idMob24MaterialSearchInput");
			    app.toDetail("idMATSRBlank");
			    
			    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
			    inputPlantMat.setEnabled(true);
			    inputPlantMat.setValue("");
			}
		}).addStyleClass("btn");*/
		
		var inputItem = new sap.m.Input("inputItem",{
		     // type: sap.m.InputType.Text,
			 type :  sap.m.InputType.Tel,
			  maxLength : 18,
			 
			  width : "15rem",
		    //  placeholder: 'Enter Plant',
		     // showSuggestion: true,
		      liveChange : oController.checkMaterial,
		   //   change : oController.checkmaterial,
		      layoutData : new sap.ui.layout.GridData({
			         span: "L3 M3 S12",
			         linebreakL: true,
						linebreakM: true,
						linebreakS: true
			 }),
		      suggestionItems: {
		        path: "/MD15CollectionMATNR",
		        template: new sap.ui.core.Item({
		          text: "{matnum}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  
		    	//Default plant
		    	  var getdefaultPlant =  window.localStorage.getItem("defPlantDesc");
					 sap.ui.getCore().byId("inputPlantMat").setValue(getdefaultPlant);
						g_inputPlantCode=window.localStorage.getItem("defPlantCode");
		    	  //Open Material Search screen
		    	  oController.Mob23openMatSearch();
		    	
		      }
		    
		  }).addStyleClass("input_mob23");
		
		
		var lblPlant = new sap.m.Label({
			text: "{i18n>Mob18_Plant}",design: sap.m.LabelDesign.Bold,
			width : "80px"
		});
		
		var inputPlant = new sap.m.Input("inputPlant23",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    width : "15rem",
		    //  placeholder: 'Enter Plant',
		   //   showSuggestion: true,
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
		    	  globalPlantSearchFrom = "MOB23";
		    	  
		    	  
					 
		    	  getPlantList();
		    	  if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
						//var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");  
						app.to("idCommonPlantSearch");
					}else
						{
						  var app = sap.ui.getCore().byId("idMOB23SplitApp"); 
				    	  
				    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
				    	  app.addMasterPage(commonPlantSearchPage);
				    	  
			        	  app.toMaster("idCommonPlantSearch");
						}
		    	  
		    	  
		    	
	        	  
	        	  
		      }
		    
		  }).addStyleClass("input_mob23");
		
	
		//Scan Material
		//var matScanQ1 ;
		//  var isRunningOnDesktop = jQuery.device.is.desktop; 
		  
		  if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
			var  matScanMob23 =  new sap.m.Image({
			  id : "matScan23",  
			    src: "icon/ico_rect_scanbarcode.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: function () {
			    	//varScan = "MOB23";
			    	//backNavMat == "MOB23" ;
			    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();

			/*		var Material = "";
				    var mainArray= [];
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
			            
			            sap.ui.getCore().byId("inputItem").setValue(mainArray[0]);
			            }, 
			            function(error){
			           	sap.m.MessageBox.show("Scan failed: " + error);
			       
			            });*/
			    /*	var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
					jsonScanResult.done(function(results){
				    var scannerRes = results.scanMaterials;
				    var MatInput =  sap.ui.getCore().byId("inputItem");
				    MatInput.setValue(scannerRes[0].Material);
					});*/

			    	 varScan = "Mob23Matmaster";
			            sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
			      },
			  });
			  matScanMob23.addStyleClass("matScan");
			  }
	
		/*
		var TheScrollContainer1 = new sap.m.ScrollContainer({
          horizontal : true,
          vertical : true,
          content : [lblAddItemDesc,
                     btnScanMat, 
                     lblOr,
                     btnSearchMat,
                     lblOr1,
                     inputMatNo
                     ],
          justifyContent:"Center"
      });
		
		TheScrollContainer1.addStyleClass("ContainerPadding");
		*/
		
		 var btnNext = new sap.m.Button("idnext23",{
	        	//id : "idshow",
			  text : "{i18n>Mob18_Next}",
			  icon: "sap-icon://open-command-field",
		       //  icon: "sap-icon://search",
		         //   style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	oController.show();
		            	
		            }
		           
			});
		 
		var container_Item = new sap.m.FlexBox({
			items: [
				      
					/*lblAddItemDesc,
					btnScanMat,*/ 
					
					/*lblOr,
					btnSearchMat,
					lblOr1,*/
					
				// lblDummy1,
					//lblAddItemDesc,
				    inputItem,
				    matScanMob23
			        ],
			direction:"Row",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Plant = new sap.m.FlexBox({
			items: [
				      
			    //   lblDummy,
				lblPlant,
				// lblDummy2,
				 inputPlant,
				
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Main = new sap.m.FlexBox({
			items: [
				      
			       lblDummy3,
			       container_Plant,
				
				 lblDummy4,
				 lblAddItemDesc,
				 container_Item
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("mob23flex");
//////////////////////Phone Version////////////////////////////////////////////
		if ( g_runningOnPhone == true)
		{
			return new sap.m.Page({
				id : "Mob23-BackNavButton",
				title: "Location",
				content: [
				          container_Main
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				showNavButton : true,
				showFooter : true,
				footer: new sap.m.Bar({
					//contentLeft: [ btnSearch.addStyleClass("search")],
			        contentRight: [
			                      // btnBack,
			                      btnNext  
			                       ]
				}).addStyleClass("footer_phone"),
				navButtonTap:function(){  
					
					
					 g_MobileNavigationId = "MainGrid-Inventory";
						
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idGridSubMenuIMWM");
					},
			});
		
		}
		////////////////////////Desktop/Tablet Version///////////////////////////////
		return new sap.m.Page({
			id : "Mob23-MasterButton",
			title: "Location",
			content: [
			          container_Main
			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			enableScrolling: false,
			showFooter : true,
			footer: new sap.m.Bar({
				//contentLeft: [ btnSearch.addStyleClass("search")],
		        contentRight: [
		                      // btnBack,
		                      btnNext  
		                       ]
			}).addStyleClass("footer"),
		});
	}

});