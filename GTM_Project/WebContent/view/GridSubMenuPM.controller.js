sap.ui.controller("com.cg.gtm.view.GridSubMenuPM", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.GridSubMenuPM
*/
//	onInit: function() {
//
//	},

  	clearMOB01: function(){

  	
  	var data=[];
  	
  	var model= new sap.ui.model.json.JSONModel(data);
  	sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").setModel(model);
  	sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").setModel(model);
 
  	//sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").unbindItems();
  	//sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").unbindItems();
  	 g_MOB07Entry = "MOB01";
  	 g_MobileNavigationId = "MOB01MasterPage";
  	 
  	sap.ui.getCore().byId("MOB01FleetInput").setValue(window.localStorage.getItem("IHG"));
	//sap.ui.getCore().byId("MOB07FleetInput").setValue(window.localStorage.getItem("IHG"));
	
  	sap.ui.getCore().byId("myApp").to("MOB01Initial");
  	
  	//sap.ui.getCore().byId("MOB01FleetInput").setValue("");
		sap.ui.getCore().byId("MOB01FleetInput").setEnabled(true);

		sap.ui.getCore().byId("MOB01TrainInput").setValue("");
		sap.ui.getCore().byId("MOB01TrainInput").setEnabled(true);

		sap.ui.getCore().byId("MOB01CarInput").setValue("");
		sap.ui.getCore().byId("MOB01CarInput").setEnabled(false);

		sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
		sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(false);

		sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
		sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
		
		sap.ui.getCore().byId("MOB01BRKDWNT").setSelected(false);
		
		sap.ui.getCore().byId("MOB01DepotInput").setValue("");
		sap.ui.getCore().byId("MOB01AREA").setValue("");
		sap.ui.getCore().byId("MOB01EQT").setValue("");
		sap.ui.getCore().byId("MOB01EQD").setValue("");
		
		
  	},	
  
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.GridSubMenuPM
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.GridSubMenuPM
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.GridSubMenuPM
*/
//	onExit: function() {
//
//	}

});