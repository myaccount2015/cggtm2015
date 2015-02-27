sap.ui.jsview("com.cg.gtm.view.Mob23DetailThreeSplit", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23DetailThreeSplit
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23DetailThreeSplit";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23DetailThreeSplit
	*/ 
	createContent : function(oController) {
		
		var detailpage = sap.ui.view({id:"idMOB23Detail", viewName:"com.cg.gtm.view.Mob23Detailpage", type:sap.ui.core.mvc.ViewType.JS});
		var detailWMpage = sap.ui.view({id:"idMOB23WMDetail", viewName:"com.cg.gtm.view.Mob23WMdetail", type:sap.ui.core.mvc.ViewType.JS});
		
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/
	  /*  var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : "810px"

			});
		oLayout.createRow(detailpage,detailWMpage);
		*/
		
		/*detailpage.setWidth(width1);
		detailWMpage.setWidth(width2);*/
		detailpage.setHeight("810px");
		detailWMpage.setHeight("810px");
		
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[detailpage,detailWMpage]
		});*/
		
		
		
		
		/*if( g_runningInTablet == false && g_runningOnPhone == false)
			{*/
			
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			detailpage.setLayoutData(nonResize);
			
			//}
		
		
		
		
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB23Splitter",
			contentAreas : [detailpage,detailWMpage],
			
			
		});
		
		//oLayout.setLayoutData(nonResize);
		
		//Header Content
		/*var oLayout1 = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			//height : screen.height + "px"

			});
		
		var lbl = new sap.m.Label("lblHeader_order", {
		      text: "{i18n>mob23_Mat}"
		    });
		
		var lbl1 = new sap.m.Label("lblHeader1_order", {
		      text: "{i18n>mob23_WM}"
		    });*/
		
	/*	var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell.addContent(lbl);
		
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell1.addContent(lbl1);
		
		oLayout1.createRow(oCell,oCell1);*/
		
 		return new sap.m.Page({
 			enableScrolling: false,
 			showHeader: true,
 			title: "Inventory Details & WM Details",
 			//headerContent: oLayout1,
			content: [
			          oLayout
			],
			footer: new sap.m.Bar({
			     
			}).addStyleClass("footer"),
		showFooter: true
		
		});
	}

});