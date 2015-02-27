sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.Mob21PDF", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob21PDF
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob21PDF
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob21PDF
*/
onAfterRendering: function() {
		


		var objHeader = new sap.m.ObjectHeader("objHeaderMOB21PDF", {title: "PDF Viewer Demo"});
		
		//objHeader.placeAt("pdfContainer");
		
		var pdfHTMLContainerMOB21 = new sap.ui.core.HTML("pdfHTMLContainerMOB21", {
			// the static content as a long string literal
			content:"",
			preferDOM : false,			
			// use the afterRendering event for 2 purposes
			afterRendering : function(e) {

				// a) add dynamic behavior
				if ( !e.getParameters()["isPreservedDOM"] ) {
					var $=e.getSource().$();
					$.click(function(e) {
						addColorBlockAtCursor($, e, 64, 8);
					});
				}
	    
				// just for illustration purposes: update the redraw infos in the page
				//updateRedrawInfo(e.getSource().getId()); // note: does not touch / invalidate any UI5 control!

			}
		});
		
		pdfHTMLContainerMOB21.placeAt("pdfContainerMOB21");
		
	

	},
	
	back: function(){ 
		
		

		if( g_runningOnPhone == true)
			{
			var app = sap.ui.getCore().byId("myApp");
 		app.to("idMOB21DetChar");
			}
		
		else
			{
			var app = sap.ui.getCore().byId("splitAppMOB21Det");
			app.to("idMOB21DetChar");
			}
        
        //window.location.reload();
	}
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob21PDF
*/
//	onExit: function() {
//
//	}

});