sap.ui.jsview("com.cg.gtm.view.Drop2_MOB35.MOB35_ThreeSplitPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB35.MOB35_ThreeSplitPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB35.MOB35_ThreeSplitPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB35.MOB35_ThreeSplitPage
	*/ 
	createContent : function(oController) {
		
		var detailBinpage = sap.ui.view({id:"idMOB35BinDetail", viewName:"com.cg.gtm.view.Drop2_MOB35.MOB35_VerifyBinPage", type:sap.ui.core.mvc.ViewType.JS});
		var detailCountPage = sap.ui.view({id:"idMOB35WMCount", viewName:"com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount", type:sap.ui.core.mvc.ViewType.JS});
		
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/
	   /* var oLayout = new sap.ui.commons.layout.MatrixLayout("MOB35Splitlayout",{
	    
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height: "100%"

			});
		
	    var oCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:sap.ui.commons.layout.VAlign.Top});
		oCell.addContent(detailBinpage);
		
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell("materialCountCell",{vAlign:sap.ui.commons.layout.VAlign.Top,
			
});
		oCell1.addContent(detailCountPage);
		
		oLayout.createRow(oCell,oCell1);*/
		
		
	   // oLayout.createRow(detailBinpage,detailCountPage);
		
		//Header Content
		
		//detailBinpage.setWidth(width1);
		//detailCountPage.setWidth(width2);
		
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[detailBinpage,detailCountPage]
		});*/
		
		
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			detailBinpage.setLayoutData(nonResize);
			}
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB35Splitter",
			contentAreas : [detailBinpage,detailCountPage],
			height: "100%"
		});
		
		if(g_runningOnPhone){
			sap.ui.getCore().byId("MOB35_matScan").setVisible(true);
			sap.ui.getCore().byId("MOB35_binScan").setVisible(true);
			sap.ui.getCore().byId("MOB35_serialScan").setVisible(true);
			sap.ui.getCore().byId("MOB35_batchScan").setVisible(true);
			
			
		}
		
		
		
 		return new sap.m.Page({
 			showHeader: false,
 			//title: " ",
 		//headerContent: oLayout1,
			content: [
			          oLayout
			],
 		enableScrolling: false,
		showFooter: false
		
		});
	}

});