sap.ui.jsview("com.cg.gtm.view.MOB17_MaterialFullDetPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MaterialFullDetPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17_MaterialFullDetPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17_MaterialFullDetPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		//var runningInTablet = jQuery.device.is.tablet;
		//var runningOnDesktop = jQuery.device.is.desktop;
		
		var blankScreen = sap.ui.getCore().byId("idMOB17_BlankScreen");
		
		var matListPage = null;
		var matDetPage = null;
		
		if((g_runningInTablet == false && g_runningOnPhone == false) || g_runningInTablet) {
		
			matListPage = sap.ui.view({id:"idMaterialList", viewName:"com.cg.gtm.view.MOB17_MaterialList", type:sap.ui.core.mvc.ViewType.JS});
			matDetPage = sap.ui.view({id:"idMaterialDetails", viewName:"com.cg.gtm.view.MOB17_MaterialDetails", type:sap.ui.core.mvc.ViewType.JS});
			matListPage.setHeight(screen.height + "px");
			matDetPage.setHeight(screen.height + "px");
		
		
		
	
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/

		// create a simple matrix layout with given sizes
		/*var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : screen.height + "px"

			});*/
		/*matListPage.setWidth(width1);
		matDetPage.setWidth(width2);*/
		
		
		/*matListPage.setHeight(screen.height + "px");
		matDetPage.setHeight(screen.height + "px");*/
		
		
		
		
		 var btnScanMat = new sap.m.Button({
			 id : "btnScanMaterial",
             text: "{i18n>MOB17_ScanMat}",
             icon: "img/ico_rect_scanbarcode.png",
             //type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1}),
             press: oController.scanMaterial
           });
		  
		// btnSelMat.attachPress(oController.onMaterialSel);
		 
		 var btnComplete = new sap.m.Button({
			 id : "btnComplete",
             text: "{i18n>MOB17_Complete}",
             icon: "sap-icon://complete",
             //type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1}),
             press : oController.onComplete
           });
		 
		 var btnAddMaterial = new sap.m.Button("addMatFooterLast", {
				text : "{i18n>MOB17_AddMat}",
				icon: "sap-icon://add", 
				press : function(){
					var app = sap.ui.getCore().byId("splitAppMOB17");  
		        	  app.toMaster("idMOB17_MasterMatSearch");
		        	  
		        	  sap.ui.getCore().byId("addMatFooterLast").setVisible(false);
				}
			});
		 
	//	oLayout.createRow(matListPage,matDetPage);
		 /*var oLayout= new sap.ui.layout.HorizontalLayout({
				content:[matListPage,matDetPage]
			});*/
		 
		 
		 if( g_runningInTablet == false && g_runningOnPhone == false)
			 {
			 var nonResize = new sap.ui.layout.SplitterLayoutData({
					resizable : false,
				});
			 matListPage.setLayoutData(nonResize);
			 
			 }
		 
		 var oLayout = new sap.ui.layout.Splitter({
				id: "MOB17Splitter",
				contentAreas : [matListPage,matDetPage]
			});
		
		var lbl = new sap.m.Label("lblHeader", {
		      text: "{i18n>MOB17_MatLst}"
		    });
		
		var lbl1 = new sap.m.Label("lblHeader1", {
		      text: "{i18n>MOB17_MatDet}"
		    });
		/*
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			//height : screen.height + "px"

			});*/
		
		/*var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell.addContent(lbl);
		
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell1.addContent(lbl1);
		
		oLayout1.createRow(oCell,oCell1);*/
		    
 		return new sap.m.Page({
 			showHeader: false,
 			title: " ",
 			//headerContent: oLayout1,
			content: [
			          oLayout,
			],
			enableScrolling: true,
			showFooter: true,
			
			footer: new sap.m.Bar({
		        contentRight: [
		                       btnAddMaterial,
		                       btnScanMat,
		                       btnComplete
		                       ]
			}).addStyleClass("Matfooter")
		});
	}
		
	}
	
	

});