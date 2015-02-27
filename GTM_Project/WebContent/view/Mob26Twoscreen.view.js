sap.ui.jsview("com.cg.gtm.view.Mob26Twoscreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26Twoscreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26Twoscreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26Twoscreen
	*/ 
	createContent : function(oController) {
		
		if(g_runningOnPhone == false)
		{
		var OrdDet = sap.ui.view({id:"idMob26OrdDet", viewName:"com.cg.gtm.view.Mob26TwoScrOrderView", type:sap.ui.core.mvc.ViewType.JS});	
		var ItmDet = sap.ui.view({id:"idMob26ItmScn", viewName:"com.cg.gtm.view.Mob26TwoScrItenScn", type:sap.ui.core.mvc.ViewType.JS});
		
	//Desktop and Tablet
	this.setHeight("100%");
	/*var width1 = ((screen.width)/2.2) + "px";
	var width2 = ((screen.width)/2.3) + "px";
	
	OrdDet.setWidth(width1);
	ItmDet.setWidth(width2);*/
	OrdDet.setHeight("810px");
	ItmDet.setHeight("810px");
    /*var oLayout = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		columns : 2,
		widths : [ width1, width2],
		height : "810px"

		});
    
    
	oLayout.createRow(OrdDet,ItmDet);*/
	
	
	/*var oLayout = new sap.ui.layout.HorizontalLayout({
		
		content: [OrdDet,ItmDet]
		});*/
	
	
	
	
	if( g_runningInTablet == false && g_runningOnPhone == false)
		{
		var nonResize = new sap.ui.layout.SplitterLayoutData({
			resizable : false,
		});
		OrdDet.setLayoutData(nonResize);
		}

	
	
	
	var oLayout = new sap.ui.layout.Splitter({
		id: "MOB26Splitter",
		contentAreas : [OrdDet,ItmDet]
	});
	
	
	
	
	
	var btnNext = new sap.m.Button({
  
    	text : "Next",
    	 icon: "sap-icon://open-command-field" ,
    	press : oController.SecScrNext
    });
	
	var btnFinish = new sap.m.Button({
		id: "Mob26-btnFinish",
    	text : "Finish",
    	
       	icon : "sap-icon://accept",
    	press : oController.BtnFinish
    });
	
	var btnScn = new sap.m.Button({
		id: "Mob26-btnScn",
    	text : "Scan serial",
        icon : "img/ico_rect_scanbarcode.png",
    	press : function(){
    		sap.ui.getCore().byId("Mob26-popWin").open();
    		sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(false);
    		sap.ui.getCore().byId("Mob26-ScanBodyText").setText(
    		Mob26getSerDocJSONArray[0].Material + "\n"+	Mob26getSerDocJSONArray[0].MaterialDescription
    		);
    	}
    });
	//btnScn.setVisible(false);

		return new sap.m.Page({
		title: "Order & Scanned Item",
		content: [
        oLayout
		],
		enableScrolling: false,
		showFooter: true,
		showHeader: true,
		navButtonTap:function(){  
			sap.ui.getCore().byId("myApp").to("idMob26OrdDet");
          },
        footer: new sap.m.Bar({
	        contentMiddle: [
	                       btnNext              
	                       ],
	                       contentRight: [
btnScn,btnFinish             
	            	                       ],
	                       
	                       
		}).addStyleClass("footer")
	});
}
		

	}

});