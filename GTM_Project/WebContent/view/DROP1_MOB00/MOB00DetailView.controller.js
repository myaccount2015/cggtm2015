sap.ui.controller("com.cg.gtm.view.DROP1_MOB00.MOB00DetailView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.DROP1_MOB00.MOB00DetailView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.DROP1_MOB00.MOB00DetailView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.DROP1_MOB00.MOB00DetailView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.DROP1_MOB00.MOB00DetailView
*/
//	onExit: function() {
//
//	}
	
	listSelMOB00 : function(oEvent)
	{
		
		var contextPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var idFromList = this.getModel().getProperty(contextPath + "/ID");
		var idFromList_name = this.getModel().getProperty(contextPath + "/DESC");
		
		if ( g_MOB00Init == "PL")
		{
			  window.localStorage.setItem("defPlantCode",idFromList);
			  window.localStorage.setItem("defPlantDesc",idFromList_name);
			  sap.ui.getCore().byId("MOB00ChPltLBL").setText(idFromList+ " - "+idFromList_name);
			  g_inputPlantCode = idFromList; 
		
		}
		
	
		if ( g_MOB00Init == "PR")
		{
			 window.localStorage.setItem("defPrinCode",idFromList);
			 window.localStorage.setItem("defPrinDesc",idFromList_name);
			 sap.ui.getCore().byId("MOB00ChPrntLBL").setText(idFromList+ " -  "+idFromList_name);
			 
			 
		}
		
		if ( g_MOB00Init == "LO")
		{
			 window.localStorage.setItem("defLocCode",idFromList);
			 window.localStorage.setItem("defLocDesc",idFromList_name);
			 sap.ui.getCore().byId("MOB00ChLocLBL").setText(idFromList+ " -  "+idFromList_name);
			 
			  
		}
		
		if ( g_MOB00Init == "WH")
		{
			 window.localStorage.setItem("defWHCode",idFromList);
			 window.localStorage.setItem("defWHDesc",idFromList_name);
			 sap.ui.getCore().byId("MOB00ChWhLBL").setText(idFromList+ " -  "+idFromList_name);
	
		}
		if ( g_runningOnPhone == true){
  		  
  		  var myapp = sap.ui.getCore().byId("myApp");  
  		  myapp.to("idMob00InitialScreen");
  		 g_MobileNavigationId =  "Mob00-BackNavButton";
  	  }
		
		
		
		//set Default plant to Views
		
		 var getPlant =  window.localStorage.getItem("defPlantDesc");
		 defaultPlantName  =  window.localStorage.getItem("defPlantDesc");
		 
		//default warehouse
			var defwhouse =  window.localStorage.getItem("defWHDesc");
		  
			var headerPlant = sap.ui.getCore().byId("headerPlant"); 
				headerPlant.setTitle(getPlant);
				var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
				plantLst.setValue(getPlant);

			sap.ui.getCore().byId("Mob24-getDesLabItemPlantDes").setText(getPlant);
			
			//Mob23 
			var plant_mob23 = sap.ui.getCore().byId("inputPlant23");
			plant_mob23.setValue(getPlant)
			
			
			var warehouse = sap.ui.getCore().byId("idwarehouse");
			warehouse.setText(defwhouse);
			
			//Mob30
			var plant_mob30 = sap.ui.getCore().byId("inputPlant30");
			plant_mob30.setValue(getPlant);
			//Mob18-Order
			
			var plant_order = sap.ui.getCore().byId("inputPlant");
			plant_order.setValue(getPlant);
			var plant_scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			plant_scrap.setValue(getPlant);
			var plant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
			plant_WBS.setValue(getPlant);
			var plant_cost = sap.ui.getCore().byId("inputPlant_Cost");
			plant_cost.setValue(getPlant)
			
		
	}

});