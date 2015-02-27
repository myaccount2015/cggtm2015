sap.ui.controller("com.cg.gtm.view.Drop1_MOB31.Mob31PDFViewer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pdfviewer.PDFViewer
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pdfviewer.PDFViewer
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pdfviewer.PDFViewer
*/
	onAfterRendering: function() {

		var objHeader = new sap.m.ObjectHeader("objHeader", {title: "PDF Viewer Demo"});
		
		//objHeader.placeAt("pdfContainer");
		
		var pdfHTMLContainer = new sap.ui.core.HTML("pdfHTMLContainer", {
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
		
		pdfHTMLContainer.placeAt("pdfContainer");
		
	},
	back: function(){ 
		/*var sel = sap.ui.getCore().byId("idfeedList").getSelectedItem(); 
		alert(sel);*/
			var app = sap.ui.getCore().byId("splitAppDocumentDisplay");  
        app.to("idMOB31Detail");  
        var desele = sap.ui.getCore().byId("idfeedList"); 

        desele.setSelectedItem(sap.ui.getCore().byId("tit1"),false);

        
        
        //window.location.reload();
	}

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pdfviewer.PDFViewer
*/
//	onExit: function() {
//
//	}

});
 