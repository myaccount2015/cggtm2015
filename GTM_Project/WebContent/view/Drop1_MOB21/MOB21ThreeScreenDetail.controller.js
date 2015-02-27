sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.MOB21ThreeScreenDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB21ThreeScreenDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB21ThreeScreenDetail
*/
	onBeforeRendering: function() {
		//hideMOB21Dtl3rdColumn();
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB21ThreeScreenDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB21ThreeScreenDetail
*/
//	onExit: function() {
//
//	}
	
	showChar : function()
	{
		
				//alert("show char");
				window.localStorage.removeItem('MOB21IMGMEM');
				sap.ui.getCore().byId("ip_samplesize").setValue("");
				sap.ui.getCore().byId("ip_samplesize").setVisible(false);
				sap.ui.getCore().byId("insResDDMOB21").setVisible(false);
				sap.ui.getCore().byId("text_er1").setVisible(false);
	  	  		var app = sap.ui.getCore().byId("myApp"); 
	  	  		
	  	  		if(g_runningOnPhone== true)
	  	  			{
	  	  		app.to("idMOB21MasDet");
	  	  			}
	  	  		else
	  	  			{
	  	  		app.to("idMOB21DetSplitApp");
	  	  			}
	  	  	
			  
	  	  		var image1 = sap.ui.getCore().byId("image1Mob21").setSrc("");
			    var image2 = sap.ui.getCore().byId("image2Mob21").setSrc("");
			    var image3 = sap.ui.getCore().byId("image3Mob21").setSrc("");
			    
			    
			    var containerImage3 = sap.ui.getCore().byId("containerImage3MOB21");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2MOB21");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1MOB21");
			     containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				// alert("show char end");
	}

});