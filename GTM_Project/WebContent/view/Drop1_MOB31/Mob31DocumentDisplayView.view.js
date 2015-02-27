sap.ui.jsview("com.cg.gtm.view.Drop1_MOB31.Mob31DocumentDisplayView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob31documentdisplay.Mob31DocumentDisplayView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB31.Mob31DocumentDisplayView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob31documentdisplay.Mob31DocumentDisplayView
	*/ 
	createContent : function(oController) {
		
		var oSplitApp = new sap.m.SplitApp({ id : "splitAppDocumentDisplay",
			afterDetailNavigate: function(){
				this.hideMaster();
			}	
		} );
		var masterpage = sap.ui.view({id:"idMOB31Master", viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31MasterSearchView", type:sap.ui.core.mvc.ViewType.JS});
		var empty = sap.ui.view({id:"idMOB31Empty", viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31EmptyScreen", type:sap.ui.core.mvc.ViewType.JS});
		var detailpage = sap.ui.view({id:"idMOB31Detail", viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31SearchDetailPage", type:sap.ui.core.mvc.ViewType.JS});
		var detailpage1 = sap.ui.view({id:"idMOB31ImagePdf", viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31ImageFileViewer", type:sap.ui.core.mvc.ViewType.JS});
		var pageMOB31PDFViewer = sap.ui.view({id:"idMOB31PDFViewer", viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31PDFViewer", type:sap.ui.core.mvc.ViewType.HTML});
		
		pageMOB31PDFViewer.setHeight("100%");
		
		  oSplitApp.setMode("ShowHideMode");
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addDetailPage(empty);
		oSplitApp.addDetailPage(detailpage);
		oSplitApp.addDetailPage(detailpage1);
		oSplitApp.addDetailPage(pageMOB31PDFViewer);
		oSplitApp.setInitialDetail("idMOB31PDFViewer");
		
		
 		return new sap.m.Page({
			title: "{i18n>MOB31_DisDoc}",
			content: [
			          oSplitApp
			],
			showNavButton: true,
			 navButtonTap:function(){  
                 var app = sap.ui.getCore().byId("myApp");  
                     app.to("idGridSubMenuQM");  
      }
		});
	}

});