sap.ui.jsview("com.cg.gtm.view.Mob26MasterTrOrder", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26MasterTrOrder
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26MasterTrOrder";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26MasterTrOrder
	*/ 
	createContent : function(oController) {
		
		
		this.setHeight("100%");
		
		var lblTrOrder = new sap.m.Label({
			text : "Transfer Order"
					
		}).addStyleClass("Mob26AllTextFont");
		
		var ipTrOrder = new sap.m.Input({
			id : "Mob26-ipTrOrder",	type :sap.m.InputType.Tel,
			maxLength : 15,
		
		});
		
		var scanIp = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : oController.scanTrCode
		});
		
		if( g_runningInTablet == false && g_runningOnPhone == false )
			{
			scanIp.setVisible(false);
			}
		else
			{
			scanIp.setVisible(true);
			}
				
		var Hbox = new sap.m.HBox({
			width : "300px",
		    items:[
                 ipTrOrder,scanIp
		          ]
	        });
		
		var lblyourloc = new sap.m.Label({
			id :"Mob26-lblyourloc",
			text : "Your Location"
					
		}).addStyleClass("Mob26AllTextFont");
		
		var txtFrlocation = new sap.m.Text({
			id : "Mob26-txtFrlocation",
			text : ""
		});
		
		
		var lblPlant = new sap.m.Label({
			text : "Plant:"
			
					
		}).addStyleClass("Mob26AllTextFont");
		
		var txtFrPlant = new sap.m.Text({
			id : "Mob26-txtFrPlant",
			text : ""
		});
		
		var lblWareHouse = new sap.m.Label({
			text : "WareHouse:"
					
		}).addStyleClass("Mob26AllTextFont");
		
		var txtFrWareHouse = new sap.m.Text({
			id : "Mob26-txtFrWareHouse",
			text  : ""
		});
		
		var lblDummy = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy.addStyleClass("HideLabel");
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy1.addStyleClass("HideLabel");
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy2.addStyleClass("HideLabel");
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy3.addStyleClass("HideLabel");
		
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy4.addStyleClass("HideLabel");
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy5.addStyleClass("HideLabel");
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		lblDummy6.addStyleClass("HideLabel");
		
		var txt = new sap.m.Text({
			id :"Mob26-txt",
			text : "Default Location can be changed \n with in the main settings menu"
					
		});
		
		var btnBack = new sap.m.Button({
			
	    	text : "Back",
	    	
	       	icon : "sap-icon://close-command-field",
	    	press : function()
	    	{
	    		 sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	    		sap.ui.getCore().byId("myApp").to("idGridSubMenuIMWM");	
	    		
	    	}
	    });
			
		var flexBox = new sap.m.FlexBox({ 
			id : "MOB26-flexBox",
			items: [ lblTrOrder,
			        // ipTrOrder,
			        // scanIp,
			        // lblDummy3,
			         Hbox,
			         lblDummy,
			         
			         lblyourloc,
			         txtFrlocation,
			         lblDummy4,
			         
			         lblPlant,
			         
			        // lblDummy5,
			         txtFrPlant,
			         lblDummy1,
			         lblWareHouse,
			        // lblDummy6,
			         txtFrWareHouse,
			         lblDummy2,
			         txt,
			         
			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
				
		    }).addStyleClass("flex-box-padding");
		
		
		if ( g_runningOnPhone == true)
			{
			return new sap.m.Page({
				id : "Mob26-BackNavButton",
				title: "Putaway Order",
				content: [
				          flexBox
				],
				
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				
				enableScrolling: false,
				showFooter: true,
				showNavButton: true,
				//showHeader: true,
				navButtonTap:function(){  
					//sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");
					
					  g_MobileNavigationId = "MainGrid-Inventory";
					sap.ui.getCore().byId("myApp").to("idGridSubMenuIMWM");	
					 sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
					
					
		          },
				footer: new sap.m.Bar({
					contentLeft : [
					               	btnBack
					               ],
					               showNavButton: true,
									showHeader: true,
									navButtonTap:function(){  
										//sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");
										
										  g_MobileNavigationId = "MainGrid-Inventory";
										sap.ui.getCore().byId("myApp").to("idGridSubMenuIMWM");	
										 sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
										
										
							          },
					
			        contentRight: [
			                       new sap.m.Button({
			                    	  text : "Next",
			                    	  icon : "sap-icon://open-command-field",
			                    	  press : oController.btnNext
			                       })
			                       
			                       ]
				})
			});
			
			}
		else
			{
			return new sap.m.Page({
				title: "Putaway Order",
				content: [
				          flexBox
				],
				
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				
				enableScrolling: false,
				showFooter: true,
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       new sap.m.Button({
			                    	  text : "Next",
			                    	  icon : "sap-icon://step",
			                    	  press : oController.btnNext
			                       })
			                       
			                       ]
				}).addStyleClass("footer")
			});
			
			}
		
 		
 		
 		
 		
 		
 		
	}

});