sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16PDF", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB16PDF
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB16PDF
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB16PDF
*/
	onAfterRendering: function() {
		


		var objHeader = new sap.m.ObjectHeader("objHeader", {title: "PDF Viewer Demo"});
		
		//objHeader.placeAt("pdfContainer");
		
		var pdfHTMLContainerMOB16 = new sap.ui.core.HTML("pdfHTMLContainerMOB16", {
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
		
		pdfHTMLContainerMOB16.placeAt("pdfContainerMOB16");
		
	

	},
	
	back: function(){ 
		 if ( g_runningOnPhone == true)
			{
		 var myapp = sap.ui.getCore().byId("myApp");
         //myapp.to("idMob16NotiListMaster");
     		myapp.to("idMOB16NotiTaskDetail");
			}
		 
		 else
			 {
     		
		
		var app = sap.ui.getCore().byId("splitAppNotiList");
 		app.to("idMOB16NotiTaskDetail");
			 }

        
        
        //window.location.reload();
	}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB16PDF
*/
//	onExit: function() {
//
//	}

});