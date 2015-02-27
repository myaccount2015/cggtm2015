sap.ui.controller("com.cg.gtm.view.PlantListView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.PlantListView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.PlantListView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.PlantListView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.PlantListView
*/
//	onExit: function() {
//
//	}
	
	onPlantSel: function(event) {
		//debugger;
		var selectedText = event.getParameter('listItem').getTitle();
		var selectedId = event.getParameter('listItem').getDescription();
		
		sap.ui.getCore().byId("Mob24-getDesLabItem").setText(selectedId);
		sap.ui.getCore().byId("Mob24-getDesLabItemPlantDes").setText(selectedText);
		
		
   	 	// Global Variable
		inputPlant.setValue(selectedText);//headerPlant
		var headerPlantVal = sap.ui.getCore().byId("headerPlant"); 
		//headerPlantVal.setTitle(selectedText);
		
		//getPlantId
		
		getSelectedPlantId = event.getParameter('listItem').getDescription();//global
		selectedPlantID = event.getParameter('listItem').getDescription();
		g_inputPlantCode =  selectedId;
		
		
		
   	 	if(g_runningOnPhone == true)
   	 		{
   	 	var app = sap.ui.getCore().byId("myApp"); 
		app.to("idMob24MaterialSearch");
   	 		}
   	 	else
   	 		{
   	 	var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
   	 		}
   	 	
	    
	    var deselect = sap.ui.getCore().byId("listPlants");	
		deselect.removeSelections();
	}
	

});