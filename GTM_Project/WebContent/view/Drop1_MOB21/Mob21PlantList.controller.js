sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.Mob21PlantList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob21PlantList
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob21PlantList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob21PlantList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob21PlantList
*/
//	onExit: function() {
//
//	}
	onPlantSelMOB21 : function(oControlEvent)
	{
		
		var selectedText = oControlEvent.getParameter('listItem').getTitle();
	    selectedPlantID = oControlEvent.getParameter('listItem').getDescription();
		//alert(selectedText);
		
		var textListedItem = sap.ui.getCore().byId("oListItemPlant");
		
		textListedItem.setDescription(selectedText);
		//textListedItem.setTitle(selectedPlantID);
		
		 MOB15plantCode = selectedPlantID;
         MOB15plantDesc = selectedText;
         
         var inputPlantMat = sap.ui.getCore().byId("inputPlantMat");   
 	    
 	    inputPlantMat.setValue(MOB15plantDesc);
 	    getSelectedPlantId = MOB15plantCode ;
 	    selectedPlantID = MOB15plantCode;
 	    inputPlantMat.setEnabled(true);
 	    	
 	    
		textListedItem.setIcon("sap-icon://accept");
		
		
		if( g_runningOnPhone == true)
 		 {
 		 var app = sap.ui.getCore().byId("myApp");  
     	 app.to("idMOB21Mas");
 		 }
 	 else
 		 {
 		 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
     	 app.toMaster("idMOB21Mas");
 		 }
      	
      	
      	
      	var listItem = sap.ui.getCore().byId("oListItemPlant-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(true);
		
	  /*  bu1.setVisible(true);
   	    bu2.setVisible(true);
   	    back_view_lab.setVisible(true);*/
	}

});