sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.Mob21Material", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob21Material
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob21Material
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob21Material
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob21Material
*/
//	onExit: function() {
//
//	}
	matSel : function(oControlEvent)
	{

		var selectedText = oControlEvent.getParameter('listItem').getTitle();
		//alert(selectedText);
		var textListedItem = sap.ui.getCore().byId("ostListItem1id");
		textListedItem.setDescription(selectedText);
		textListedItem.setIcon("sap-icon://accept");
	    
	    //Navigate back to Master Page
	    var app = sap.ui.getCore().byId("splitAppInsCreate1");  
     	 app.toMaster("idMOB21Mas");
     	
	   // oSplitApp.toMaster(Mainpage);
	    
	    
	    
	    
	    bu1.setVisible(true);
   	    bu2.setVisible(true);
   	    back_view_lab.setVisible(true);
  
   	//	oList1.setMode(sap.m.ListMode.SingleSelectMaster);
 	//oList1.setSelected(true);
   
   	    
   	    
   	    
   	    /*
	    ostListItem1.setDescription("");
		ostListItem1.setIcon("");
		 ostListItem3.setDescription("");
			ostListItem3.setIcon("");
			 ostListItem4.setDescription("");
				ostListItem4.setIcon("");
   	
   	*/
   	
   	
   	
		//inputMatnr.setValue(selectedText);

		
	}

});