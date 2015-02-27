sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.Mob15Notification", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.Mob15Notification
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.Mob15Notification
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.Mob15Notification
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.Mob15Notification
*/
//	onExit: function() {
//
//	}
	onCreateNoti: function(event) {
		  if (globalMob15Detail ==  "Q1")
			  {
			  sap.ui.getCore().byId("idMob15DetailsQ1").getController().onCreateNoti();
			  }
		  else if (globalMob15Detail ==  "Q11")
			  {
			  sap.ui.getCore().byId("idMob15DetailsQ11").getController().onCreateNoti();
			  }
		  else if (globalMob15Detail ==  "F3")
		  {
		  sap.ui.getCore().byId("idMob15DetailsF3").getController().onCreateNoti();
		  }
		  else if (globalMob15Detail ==  "Q3")
		  {
		  sap.ui.getCore().byId("idMob15DetailsQ3").getController().onCreateNoti();
		  }
		  else if (globalMob15Detail ==  "F2")
		  {
		  sap.ui.getCore().byId("idMob15DetailsF2").getController().onCreateNoti();
		  }
	},
			newNoti : function()
			{
				//CreateNotificationIconTabBarShow();
				window.localStorage.removeItem('000001');
				  if (globalMob15Detail ==  "Q1")
					  {
					  sap.ui.getCore().byId("idMob15DetailsQ1").getController().newNoti();
					  }
				  else if (globalMob15Detail ==  "Q11")
					  {
					  sap.ui.getCore().byId("idMob15DetailsQ11").getController().newNoti();
					  }
				  else if (globalMob15Detail ==  "F3")
				  {
				  sap.ui.getCore().byId("idMob15DetailsF3").getController().newNoti();
				  }
				  else if (globalMob15Detail ==  "Q3")
				  {
				  sap.ui.getCore().byId("idMob15DetailsQ3").getController().newNoti();
				  }
				  else if (globalMob15Detail ==  "F2")
				  {
				  sap.ui.getCore().byId("idMob15DetailsF2").getController().newNoti();
				  }
			}
			

});