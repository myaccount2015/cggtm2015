sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.MOB15LocView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB15LocView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB15LocView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB15LocView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB15LocView
*/
//	onExit: function() {
//
//	}
	onTreeSelectionMOB15Loc : function(event)
	{

		 var nodeId = event.mParameters.id; // Getting node Id in the Tree
		   
		   var modelNode = sap.ui.getCore().byId(nodeId); // Getting actual Node Control
		   
		   var oTree = sap.ui.getCore().byId("locTree"); // Getting Tree Control
		   var model = oTree.getModel(); // Getting Model associated to Tree
		   
		   var contextPath = modelNode.oBindingContexts.undefined.sPath; // Getting context path for Node
		   
		   var strNode = contextPath.substring(0, contextPath.length - 2); // Getting parent level of Context Path
		   var location =sap.ui.getCore().byId("inputLocation");
		  
		  if(strNode != null && strNode != undefined && strNode.length > 0) {
					    	
				  var objValue = model.getProperty(contextPath);
				  location.setValue(objValue.QM);	
				   
		  }
		
		  var app =sap.ui.getCore().byId("myApp");
		  app.to("idMob15Notification");
		  if( g_runningOnPhone == true)
		   {
			var app = sap.ui.getCore().byId("myApp"); 
			app.to("idMob15DetailsQ3");
		   }
			else
				{
		var oSplitApp =sap.ui.getCore().byId("splitApp");
		var detailpage2 =sap.ui.getCore().byId("idMob15DetailsQ3");
	    oSplitApp.toDetail(detailpage2);
				}
		
		
	},
	
	locationSelect : function(event)
	{
		var bindingContext = event.getSource().getBindingContext(); // get binded context from event
		
		var selectedItem = this.getModel().getProperty(bindingContext.sPath); // From the event sPath is taken and selected Item values are taken from Model 
		
		var defectCodeDesc = selectedItem.defectCodeDescriptionForLocation; //Defect description
		var defectLocCode = selectedItem.defectCodeForLocation;//DefLocCode
		var defectLocGrp = selectedItem.defectLocationGroup;//DefLocCode
	
		
	    var defect =sap.ui.getCore().byId("inputLocation");
	    defect.setValue(defectCodeDesc);
	    
	    
	    var setDefLocCod = sap.ui.getCore().byId("getdefLoccode");
	    setDefLocCod.setText(defectLocCode); // set defect Code text 
		
	    var setDefLocGrp = sap.ui.getCore().byId("getDefGroup");
	    setDefLocGrp.setText(defectLocGrp); 
	    

	    
	    var app =sap.ui.getCore().byId("myApp");
	    app.to("idMob15Notification");
	    if( g_runningOnPhone == true)
		   {
			var app = sap.ui.getCore().byId("myApp"); 
			app.to("idMob15DetailsQ3");
		   }
			else
				{
		var oSplitApp =sap.ui.getCore().byId("splitApp");
		var detailpage2 =sap.ui.getCore().byId("idMob15DetailsQ3");
		oSplitApp.toDetail(detailpage2);	
				}

	}

});