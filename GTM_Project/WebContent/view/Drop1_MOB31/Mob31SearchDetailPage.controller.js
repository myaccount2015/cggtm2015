sap.ui.controller("com.cg.gtm.view.Drop1_MOB31.Mob31SearchDetailPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mob31documentdisplay.Mob31SearchDetailPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mob31documentdisplay.Mob31SearchDetailPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mob31documentdisplay.Mob31SearchDetailPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mob31documentdisplay.Mob31SearchDetailPage
*/
//	onExit: function() {
//
//	}

});

function documentSelected(evt)
{
	
   var img = sap.ui.getCore().byId("mob31ImgVie");
	
   var element = evt.getParameter("listItem").getId(); // get id
  // alert(element);
   switch(element)
   {
   case "tit1":
	  
		var app = sap.ui.getCore().byId("splitAppDocumentDisplay");
 		app.to("idMOB31PDFViewer");
 		
 		/*
 		 * Setting the IFRAME PDF Container - Start
 		 */
 		var pdfHTMLContainer = sap.ui.getCore().byId("pdfHTMLContainer");
 		pdfHTMLContainer.setContent("<div id='pdfFrame' style='height:100%;padding-top:3%;padding-bottom:8%;padding-right:3%;padding-left:3%;'> <IFRAME name='iframe' src='viewer/web/viewer.html?file=sample.pdf' width=100% height=100% marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=auto></IFRAME> </div>");
 		/*
 		 * Setting the IFRAME PDF Container - End
 		 */
 		
	   break;
   case "tit2" :
	   img.setSrc("img/mob31mattool.jpg");
		var app = sap.ui.getCore().byId("splitAppDocumentDisplay");
 		app.to("idMOB31ImagePdf");
	   break;
   }
	   
		
    		
}