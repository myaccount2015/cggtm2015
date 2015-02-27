sap.ui.controller("com.cg.gtm.view.Drop2_MOB28.MOB28MatList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Drop2_MOB28.MOB28MatList
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Drop2_MOB28.MOB28MatList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Drop2_MOB28.MOB28MatList
*/
//	onAfterRendering: function() {
//
//	}, 

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Drop2_MOB28.MOB28MatList
*/
//	onExit: function() {
//
//	}
	
	matSelMOB28 : function(oEvent)
	{
		debugger;
		 $("#idMob28MatDetPage").show();
		 g_sIDMOB28 =  oEvent.mParameters.listItem.sId ;
		//dfgidList = oEvent.mParameters.id;
		var sIDLen = oEvent.mParameters.listItem.sId.length ;  
		gMOB28ListIndex =  oEvent.mParameters.listItem.sId.substring(sIDLen -1 , sIDLen);
		var contextPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Material = this.getModel().getProperty(contextPath + "/matnum");
		sap.ui.getCore().byId("MOB28Mat").setText( this.getModel().getProperty(contextPath + "/matnum"));
		sap.ui.getCore().byId("MOB28Bin").setText( this.getModel().getProperty(contextPath + "/Bin"));
		sap.ui.getCore().byId("MOB28MatDesc").setText( this.getModel().getProperty(contextPath + "/desc"));
		sap.ui.getCore().byId("MOB28Batch").setText( this.getModel().getProperty(contextPath + "/Batch"));
		sap.ui.getCore().byId("MOB28Type").setText( this.getModel().getProperty(contextPath + "/SplStock"));
		sap.ui.getCore().byId("MOB28Qty").setText( this.getModel().getProperty(contextPath + "/AvailableStock"));
		sap.ui.getCore().byId("MOB28SUOM").setText( this.getModel().getProperty(contextPath + "/UOM"));
		
		if ( this.getModel().getProperty(contextPath + "/batchM") ==  "N")
			{
			sap.ui.getCore().byId("MOB28Batch").setVisible(false);
			sap.ui.getCore().byId("MOB28BatchLabel").setVisible(false);
			}
		else
			{
			
			sap.ui.getCore().byId("MOB28Batch").setVisible(true);
			sap.ui.getCore().byId("MOB28BatchLabel").setVisible(true);
			}
		if ( this.getModel().getProperty(contextPath + "/SplStock") ==  "" || null == this.getModel().getProperty(contextPath + "/SplStock"))
		{
		sap.ui.getCore().byId("MOB28Type").setVisible(false);
		sap.ui.getCore().byId("MOB28TypeLabel").setVisible(false);
		}
		else
			{
			sap.ui.getCore().byId("MOB28Type").setVisible(true);
			sap.ui.getCore().byId("MOB28TypeLabel").setVisible(true);
			}
		
		if ( g_runningOnPhone == true)
		{
			 g_MobileNavigationId = "Mob28Detpage"; 
			var app = sap.ui.getCore().byId("myApp"); 
	    	    app.to("idMob28MatDetPage");
	    	    sap.ui.getCore().byId("Mob28SaveMOb").setVisible(true);
		}
		else
			{
			sap.ui.getCore().byId("Mob28Save").setVisible(true);
			}
		sap.ui.getCore().byId("Mob28Save").setVisible(true);	
	}
	

});