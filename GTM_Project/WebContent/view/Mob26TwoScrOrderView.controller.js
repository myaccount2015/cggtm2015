sap.ui.controller("com.cg.gtm.view.Mob26TwoScrOrderView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob26TwoScrOrderView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob26TwoScrOrderView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob26TwoScrOrderView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob26TwoScrOrderView
*/
//	onExit: function() {
//
//	}
	SecScrNext : function()
	{
		 
    	 
		
		if( sap.ui.getCore().byId("Mob26-twoScr-Mat").getText() != "" )
			{
			
			sap.ui.getCore().byId("Mob26-btnFinish").setVisible(true);
			}
		else{
			sap.ui.getCore().byId("Mob26-btnFinish").setVisible(false);
		}
		
		
		
		
		var serDestBin = Mob26getSerDocJSONArray[0].DestinationStorageBin;
		
		var userDestBin = sap.ui.getCore().byId("Mob26-ipStrBin").getValue();
		
	
		
		 //Serial Enable
        if( Mob26getSerDocJSONArray[0].ScanSerial == "" ||
       		 Mob26getSerDocJSONArray[0].ScanSerial == null ||
       		 Mob26getSerDocJSONArray[0].ScanSerial == undefined)
       	 {
       	 sap.ui.getCore().byId("Mob26-btnScn").setVisible(false); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-Hbox").setVisible(false); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-labeldummy").setVisible(false); 
       	 
       	 }
        else
       	 {
       	 sap.ui.getCore().byId("Mob26-btnScn").setVisible(true); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-Hbox").setVisible(true); 
       	 sap.ui.getCore().byId("Mob26-thrdScr-labeldummy").setVisible(true); 
       	 }
		
	
		
		if( (serDestBin != userDestBin) && ( userDestBin != ""))
			{
			sap.m.MessageBox.show(
				      "Your Destination bin has been changed.Do you want to continue.",
				      sap.m.MessageBox.Icon.WARNING,
				      "Bin Location Changed",
				      [sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.NO ],
				      function(oAction) { 
				    	  if(oAction == "NO")
				    		  {
				    		  
				    		  sap.ui.getCore().byId("Mob26-ipStrBin").setValue("");
				    		  
				    		  
				    		  }
				      }
					 );
			}
		
		//sap.ui.getCore().byId("myApp").to("idMob26ItmScn");
		 if ( g_runningOnPhone == true)
			{
			 g_MobileNavigationId = "Mob26-TwoScreenItem";
				sap.ui.getCore().byId("myApp").to("idMob26ItmScn");
			}
		 else{
			 sap.ui.getCore().byId("myApp").to("idMob26ItmScn"); 
		 }
		 // Mob26ThirdScrShow();
	
	}
});