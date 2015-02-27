sap.ui.controller("com.cg.gtm.view.Mob15Delivery_Initial", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob15Delivery_Initial
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob15Delivery_Initial
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob15Delivery_Initial
*/
	onAfterRendering: function() {
		var like =  ""; 
		  
	      var oFilter = new sap.ui.model.Filter("title",   
	                                              sap.ui.model.FilterOperator.StartsWith,   
	                                              like);  
	      var element = sap.ui.getCore().getElementById("myList_cust");
	    
	      var listBinding = element.getBinding("items");  
	      listBinding.filter([oFilter]);  
	      
	      var listBinding = list1.getBinding("items");  
	      listBinding.filter([oFilter]);
	},


/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob15Delivery_Initial
*/
//	onExit: function() {
//
//	}
	onClick : function(oEvent)
	{
	/*//oSplitApp.addDetailPage(detailpage);
		var app = sap.ui.getCore().byId("splitApp");  
        app.to("idDETAIL1");*/
		
		//alert("Agent: " + navigator.userAgent);
        
        var app = sap.ui.getCore().byId("myApp"); 
		app.to("idMob15Cust");
	//oSplitApp.to(detailpage);
	},

	filterList: function(oEvent)
	{
	  var like =  oEvent.getParameter("newValue"); 
	  
      var oFilter = new sap.ui.model.Filter("title",   
                                              sap.ui.model.FilterOperator.StartsWith,   
                                              like);  
      var element = sap.ui.getCore().getElementById("myList_cust");
    
      var listBinding = element.getBinding("items");  
      listBinding.filter([oFilter]);  
      
      var listBinding = list1.getBinding("items");  
      listBinding.filter([oFilter]);
	}


});