sap.ui.jsview("com.cg.gtm.view.MOb19TwoScreenPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOb19TwoScreenPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOb19TwoScreenPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOb19TwoScreenPage
	*/ 
	createContent : function(oController) {
		if ( g_runningOnPhone == false)
		{
		
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/
		//var height1 = width1.height + "px";
	
		var matListpage = sap.ui.view({id:"idMob19MatListPage", viewName:"com.cg.gtm.view.MOB19MatList", type:sap.ui.core.mvc.ViewType.JS});	
		var matDetpage = sap.ui.view({id:"idMob19MatDetPage", viewName:"com.cg.gtm.view.MOB19MatDetail", type:sap.ui.core.mvc.ViewType.JS});
		
		// create a simple matrix layout with given sizes
		/*var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : "100%"

			});
		oLayout.createRow(matListpage,matDetpage);*/
		
		/*matListpage.setWidth(width1);
		matDetpage.setWidth(width2);*/
		matListpage.setHeight("810px");
		matDetpage.setHeight("810px");
		
		
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[matListpage,matDetpage]
		});*/
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			matListpage.setLayoutData(nonResize);
			}
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB19Splitter",
			contentAreas : [matListpage,matDetpage]
		});

		
	    var btnSave = new sap.m.Button({
	    	id : "Mob19Save",
	    	text : "Save",
	    	icon : "sap-icon://save",
	    	press : function(){
	    		//if (oController.checkSerialQtyMOB19())
	    			//{
	    			//alert(sap.ui.getCore().byId("MOB19Batch").getDateValue().toISOString().substring(0,19));
	    		if (oController.checkSelectCount())
	    			{
	    			oController.saveMOB19();
	    			}
	    		
	    			//}
	    	}
	    });
	    btnSave.setVisible(false);
	    
	    var btnScan = new sap.m.Button
		(
				{ id : "Mob19-thrdScr-btnScan",
		text : "{i18n>Mob20_Scan}", 
		icon : "img/ico_rect_scanbarcode.png",
		press : function(){
		sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob19-popWin").open();
		//popWin.open();
		}
				}
				);
	    
 		return new sap.m.Page({
			title: "",
			content: [
            oLayout
			],
			enableScrolling: false,
			
			//showNavButton: false,
			showFooter: true,
			showHeader: false,
			 navButtonTap:function(){  
					sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-blankPage");
              },
             
              
			footer: new sap.m.Bar({
		        contentRight: [
		                       	btnScan , btnSave               
		                       ]
			}).addStyleClass("footer")
		});
	}
}

});