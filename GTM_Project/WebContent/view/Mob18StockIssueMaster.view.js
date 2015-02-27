sap.ui.jsview("com.cg.gtm.view.Mob18StockIssueMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18StockIssueMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18StockIssueMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18StockIssueMaster
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var lblDummy = new sap.m.Label({
			text: " "
		});
		
		var lblDummy1 = new sap.m.Label({
			text: " "
		});
		
		var lblDummy2 = new sap.m.Label({
			text: " "
		});
		
		var lblDummy3 = new sap.m.Label({
			text: " "
		});
		
		
		var btnOrder = new sap.m.Button({
			text : "Order",
			press : function(){
				//set Default plant to Views
				
				 var getPlant_mob18 =  window.localStorage.getItem("defPlantDesc");
				
				 g_MobileNavigationId = "Mob18_OrderMas";
					if ( g_runningOnPhone == true)
					{
						
						sap.ui.getCore().byId("myApp").to("idMOB18Locmas");
				var plant_order = sap.ui.getCore().byId("inputPlant");
				plant_order.setValue(getPlant_mob18);
				}
				else{
					/*hideidMob18first_Scrap();
					hideidMob18second_Scrap();
					hideidMob18first();
					hideidMob18second();*/
					// var getPlant =  window.localStorage.getItem("defPlantName");
					 g_navbutton = "backOrder";
					globalMob18Movetype = "261";
					
					
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
           	 	app.toMaster("idMOB18Locmas");
           	 var plant_order = sap.ui.getCore().byId("inputPlant");
				plant_order.setValue(getPlant_mob18);
				 var inputOrderno = sap.ui.getCore().byId("inputOrderno");
					inputOrderno.setValue("");
					var inputOrderno = sap.ui.getCore().byId("inputOrderno");
					inputOrderno.setValueState(sap.ui.core.ValueState.None);
				}
				
          // 	 var btnshow = sap.ui.getCore().byId("idshow");
          // 	btnshow.setVisible(true);
           	   
			}
			
			
		}).addStyleClass("btn");
		
		var btnScrap = new sap.m.Button({
			
			text : "Scrapping",
			press : function(){
				 var getPlant_mob18 =  window.localStorage.getItem("defPlantDesc");
			
				globalMob18Movetype = "555";
				g_MobileNavigationId = "Mob18_scrapmas";
				if ( g_runningOnPhone == true)
				{
					
					sap.ui.getCore().byId("myApp").to("idMOB18Scrapmas");
				var plant_scrap = sap.ui.getCore().byId("inputPlant_Scrap");
				plant_scrap.setValue(getPlant_mob18);
				}
				else{
				/*hideidMob18first();
				hideidMob18second();
				hideidMob18first_Scrap();
				hideidMob18second_Scrap();*/
					// var getPlant =  window.localStorage.getItem("defPlantName");
					 g_navbutton = "backScrap";		
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
           	 	app.toMaster("idMOB18Scrapmas");
           	 var plant_scrap = sap.ui.getCore().byId("inputPlant_Scrap");
				plant_scrap.setValue(getPlant_mob18);
				
				 var inputScrapno = sap.ui.getCore().byId("inputScrapno");
				 inputScrapno.setValue("");
				 
					var inputScrapno = sap.ui.getCore().byId("inputScrapno");
					inputScrapno.setValueState(sap.ui.core.ValueState.None);
				}
				
           	 //Setting table empty
				 var tabMaterialLst = sap.ui.getCore().byId("tableMat");
					var aData1 = [];
					var	oModel = new sap.ui.model.json.JSONModel();
					oModel.setData({modelData: aData1});
					tabMaterialLst.setModel(oModel);
           	 	
         //  	 var btnshow = sap.ui.getCore().byId("idshow");
         //  	btnshow.setVisible(true);
				
			}
			
			
		}).addStyleClass("btn");
		
		var btnWBS = new sap.m.Button({
			text : "Work Break Down Structure",
		press : function(){
			 var getPlant_mob18 =  window.localStorage.getItem("defPlantDesc");
			 
			
			globalMob18Movetype = "221";
			g_MobileNavigationId = "Mob18_WBSMaster";
			if ( g_runningOnPhone == true)
			{
				 
				 sap.ui.getCore().byId("myApp").to("idMOB18WBSmas");
			var plant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
			plant_WBS.setValue(getPlant_mob18);
			}
			else{
				// var getPlant =  window.localStorage.getItem("defPlantName");
				 g_navbutton = "backWBS";
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
           	 	app.toMaster("idMOB18WBSmas");
           	 var plant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
				plant_WBS.setValue(getPlant_mob18);
				 var inputWBSno = sap.ui.getCore().byId("inputWBSno");
				 inputWBSno.setValue("");
				// var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
				// inputPlant_WBS.setValue(" ");
				 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
			}
           	 //Setting table empty
				 var tabMaterialLst = sap.ui.getCore().byId("tableMat");
					var aData1 = [];
					var	oModel = new sap.ui.model.json.JSONModel();
					oModel.setData({modelData: aData1});
					tabMaterialLst.setModel(oModel);
           	 	
           	// var btnshow = sap.ui.getCore().byId("idshow");
           //	btnshow.setVisible(true);
           	   
			}
			
			
		}).addStyleClass("btn");
		
		var btnCost = new sap.m.Button({
			text : "Cost Center",
			press : function(){
				 var getPlant_mob18 =  window.localStorage.getItem("defPlantDesc");
				
				globalMob18Movetype = "201";
				g_MobileNavigationId = "Mob18_costMas";
				if ( g_runningOnPhone == true)
				{
					 
					sap.ui.getCore().byId("myApp").to("idMOB18Costmas");
				var plant_cost = sap.ui.getCore().byId("inputPlant_Cost");
				plant_cost.setValue(getPlant_mob18)
				}
				else{
					// var getPlant =  window.localStorage.getItem("defPlantName");
					 g_navbutton = "backCost";
					var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	           	 	app.toMaster("idMOB18Costmas");
	           		var plant_cost = sap.ui.getCore().byId("inputPlant_Cost");
					plant_cost.setValue(getPlant_mob18)
					
					 var inputCostno = sap.ui.getCore().byId("inputCostno");
	            	inputCostno.setValue("");
				 
			//	var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
				//inputPlant_Cost.setValue(" ");
				
				var inputCostno = sap.ui.getCore().byId("inputCostno");
				inputCostno.setValueState(sap.ui.core.ValueState.None);
				}
				
           	 	
           	 //Setting table empty
				 var tabMaterialLst = sap.ui.getCore().byId("tableMat");
					var aData1 = [];
					var	oModel = new sap.ui.model.json.JSONModel();
					oModel.setData({modelData: aData1});
					tabMaterialLst.setModel(oModel);
           	 	
           	// var btnshow = sap.ui.getCore().byId("idshow");
           	//btnshow.setVisible(true);
           	   
			}
			
		}).addStyleClass("btn");
		
		var container = new sap.m.FlexBox({
			id : "flex_18",
			
			items: [
			        lblDummy,
			        btnOrder,
			        lblDummy1,
			        btnScrap,
			        lblDummy2,
			        btnWBS,
			        lblDummy3,
			        btnCost
			      
				      
				       ],
				direction:"Column",
				justifyContent:"Center",//Contents would be placed in the begin
				alignItems:"Center"
		})
			
		
		//btnShow.attachPress(oController.Showdet);
		
		
/////////////////////////////Mobile//////////////////////////////////////
        if(g_runningOnPhone == true)
		{
        	
        	
        	return new sap.m.Page({
        		id : "Mob18_stock",
        		title: "Stock Movement Type",
    			// headerContent :[btnBack],
    			content: [
    			          container
    			] ,
    			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
    			
    			
    			
				showNavButton: true,
				enableScrolling: false,
				
				
	            navButtonTap:function(){ 
	           	 g_MobileNavigationId = "MainGrid-Inventory";
	            	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
	            }
	            
    		});
    	}

        else{
//////////////////////////Tablet/Desktop/////////////////////////////////////
     		return new sap.m.Page({
     			id : "Mob18_stock",
    			title: "Stock Movement Type",
    			content: [
    			          container
    			],
    			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
    			
    			showNavButton: false,
    		enableScrolling: false,
     		navButtonTap:function(){  
            	//globalLoadingPageMob18 = 1;
            				//Order no
            	/*if(navmat = "Mob18_nav"){
            		hideidMob18first();
                	hideidMob18second();
                	hideidMob18first_Scrap();
                	hideidMob18second_Scrap();
                
            	}*/
            	
     			 g_MobileNavigationId = "MainGrid-Inventory";
            	//Deselect table Items
    			var deselect = sap.ui.getCore().byId("idtable_Order");
    			deselect.removeSelections();
    			
            	
            	//Deselect table Items
    			var deselect = sap.ui.getCore().byId("tableMat");
    			deselect.removeSelections();
    			
    			 var inputOrderno = sap.ui.getCore().byId("inputOrderno");
    				inputOrderno.setValue("");
    				
    			var inputPlant = sap.ui.getCore().byId("inputPlant");
    			inputPlant.setValue("");
    			var inputOrderno = sap.ui.getCore().byId("inputOrderno");
    			inputOrderno.setValueState(sap.ui.core.ValueState.None);
    			
    			//Cost
    			var inputCostno = sap.ui.getCore().byId("inputCostno");
            	inputCostno.setValue("");
    		 
    		var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
    		inputPlant_Cost.setValue("");
    		
    		var inputCostno = sap.ui.getCore().byId("inputCostno");
    		inputCostno.setValueState(sap.ui.core.ValueState.None);
    		
    		//WBS
    		 var inputWBSno = sap.ui.getCore().byId("inputWBSno");
    		 inputWBSno.setValue("");
    		 var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
    		 inputPlant_WBS.setValue("");
    		 sap.ui.getCore().byId("inputWBSno").setValueState(sap.ui.core.ValueState.None);
    		 
    		 //Scrap
    		 var inputScrapno = sap.ui.getCore().byId("inputScrapno");
    		 inputScrapno.setValue("");
    		var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
    		inputPlant_Scrap.setValue("");
    		
    		var inputScrapno = sap.ui.getCore().byId("inputScrapno");
    		inputScrapno.setValueState(sap.ui.core.ValueState.None);
    		
    		 sap.ui.getCore().byId("inputMatNo_ser").setValue("");
    		
    		//Navigation to GridPage
                           var app = sap.ui.getCore().byId("myApp"); 
                           app.to("idGridSubMenuIMWM");
                           //Remove Page
                           //sap.ui.getCore().byId("idMob20InitialScreen").destroy();	
                           //app.removePage("idMob20InitialScreen");
                          
                          
                           
            },
    		});
    	}
        }	

});