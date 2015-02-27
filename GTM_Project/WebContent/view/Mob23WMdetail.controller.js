sap.ui.controller("com.cg.gtm.view.Mob23WMdetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob23WMdetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob23WMdetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob23WMdetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob23WMdetail
*/
//	onExit: function() {
//
//	}
	filterList_WMlist : function(oEvent){
		var like =  oEvent.getParameter("newValue"); 
		  
	      var oFilter = new sap.ui.model.Filter("Storagebin",   
	                                              sap.ui.model.FilterOperator.Contains,   
	                                              like);  
	      var element = sap.ui.getCore().getElementById("IdMob23WMdetailList");
	    
	      var listBinding = element.getBinding("items");  
	      listBinding.filter([oFilter]);  
	      
	      //var listBinding = list1.getBinding("items");  
	      //listBinding.filter([oFilter]);
	}
});