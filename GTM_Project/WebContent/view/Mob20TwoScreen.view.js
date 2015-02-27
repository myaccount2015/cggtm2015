sap.ui.jsview("com.cg.gtm.view.Mob20TwoScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob20TwoScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob20TwoScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob20TwoScreen
	*/ 
	createContent : function(oController) {
		
		
		if(g_runningOnPhone == false)
			{
			var matDespage = sap.ui.view({id:"idMob20MatDesPage", viewName:"com.cg.gtm.view.Mob20TwoScrMatDes", type:sap.ui.core.mvc.ViewType.JS});	
			var splStockpage = sap.ui.view({id:"idMob20splStockpage", viewName:"com.cg.gtm.view.MOB20TwoScrStockPage", type:sap.ui.core.mvc.ViewType.JS});
			
		//Desktop and Tablet
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/
	 /*   var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : "810px"

			});
		oLayout.createRow(matDespage,splStockpage);*/
		
		/*matDespage.setWidth(width1);
		splStockpage.setWidth(width2);*/
		matDespage.setHeight("810px");
		splStockpage.setHeight("810px");
		
		
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[matDespage,splStockpage]
		});*/
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			matDespage.setLayoutData(nonResize);
			}
	
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB20Splitter",
			contentAreas : [matDespage,splStockpage]
		});

		
		var btnConfrmCnt = new sap.m.Button({
	    	id : "Mob20-btnConfrmCnt",
	    	text : "Confirm Count",
	    	icon : "sap-icon://accept",
	    	press : oController.confrmCount
	    });
	    btnConfrmCnt.setVisible(false);
	    
	    var btnScan =  sap.ui.getCore().byId("Mob20-thrdScr-btnScan");
	    btnScan.setVisible(false);
 		return new sap.m.Page({
			title: "{i18n>Mob20_TwoScreenTit}",
			content: [
            oLayout
			],
			enableScrolling: true,
			showFooter: true,
			showHeader: true,
			navButtonTap:function(){  
					sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-blankPage");
              },
            footer: new sap.m.Bar({
		        contentRight: [
                            btnScan,btnConfrmCnt              
		                       ]
			}).addStyleClass("footer")
		});
	}
	}
	//}
});