sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.Mob21WorkCenter", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob21WorkCenter
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob21WorkCenter
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob21WorkCenter
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob21WorkCenter
*/
//	onExit: function() {
//
//	}
	workCenterSel: function(oControlEvent)
	{
		
		//var selectedText = oControlEvent.getParameter('listItem').getTitle();ipwrkcntr
		var selectedText = sap.ui.getCore().byId("ipwrkcntr").getValue();
		
		if (selectedText ==  null || selectedText.length == 0|| selectedText == "")
		{
			 sap.m.MessageBox.show(
			          "Please enter value for Work Center",
			          sap.m.MessageBox.Icon.ERROR,
						"Error"
			         
			        );
	
		}
else
	{
		var textListedItem = sap.ui.getCore().byId("oListItemWC");
		textListedItem.setDescription(selectedText);
		textListedItem.setIcon("sap-icon://accept");
		
		if( g_runningOnPhone == true)
			{
			var appM = sap.ui.getCore().byId("myApp"); 
       	     appM.to("idMOB21InitView12");
          	 appM.to("idMOB21Mas");
			}
		else
			{
			var app = sap.ui.getCore().byId("splitAppInsCreate1");  
	     	app.toMaster("idMOB21Mas");
			}
	    
     	
     	var listItem = sap.ui.getCore().byId("oListItemWC-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(true);
   	    
	    bu1.setVisible(true);
   	    bu2.setVisible(true);
   	    back_view_lab.setVisible(true);
	}
  
   	    //oList1.setMode(sap.m.ListMode.SingleSelectMaster);

   	    
   	    /*
   	    ostListItem2.setDescription("");
		ostListItem2.setIcon("");
		 ostListItem1.setDescription("");
			ostListItem1.setIcon("");
			 ostListItem4.setDescription("");
				ostListItem4.setIcon("");
   	    
   	    */
   	    
   	    

    	    
    	    
    	    
		
	}
});



