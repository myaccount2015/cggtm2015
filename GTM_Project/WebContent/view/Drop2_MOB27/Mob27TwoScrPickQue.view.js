sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrPickQue", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27TwoScrPickQue
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrPickQue";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27TwoScrPickQue
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		if(g_runningOnPhone == false)
		{
		var OrdDet = sap.ui.view({id:"idMob27OrdDet", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueOrderView", type:sap.ui.core.mvc.ViewType.JS});	
		var ItmDet = sap.ui.view({id:"idMob27DesScn", viewName:"com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueDesScn", type:sap.ui.core.mvc.ViewType.JS});
		
	//Desktop and Tablet
	this.setHeight("100%");
	/*var width1 = ((screen.width)/2.2) + "px";
	var width2 = ((screen.width)/2.3) + "px";*/
 
	
	
	//OrdDet.setWidth(width1);
	OrdDet.setHeight("810px");
	//ItmDet.setWidth(width2);
	ItmDet.setHeight("810px");
	
	/*var oLayout = new sap.ui.layout.HorizontalLayout({
		content: [OrdDet,ItmDet ]
	});*/
	
	
	if( g_runningInTablet == false && g_runningOnPhone == false)
		
		{
		var nonResize = new sap.ui.layout.SplitterLayoutData({
			resizable : false,
		});
		OrdDet.setLayoutData(nonResize);
		
		}
	
	
	
	
	var oLayout = new sap.ui.layout.Splitter({
		id: "MOB27Splitter-Q",
		contentAreas : [OrdDet,ItmDet]
	});

		return new sap.m.Page({
		title: "Queue details",
		content: [
        oLayout
		],
		enableScrolling: false,
		showFooter: true,
		showHeader: true,
		navButtonTap:function(){  
		
          },
        footer: new sap.m.Bar({
	        contentMiddle: [],
	        contentRight: [new sap.m.Button({
	        	id:"Mob27-Queue-NextPick",
	        	text : "Next Pick",
	        	press : oController.Next,
	        	//style : sap.ui.commons.ButtonStyle.Error,
	        	
	        	
	        })
	        
	        ],
	                       
	                       
		}).addStyleClass("footer")
	});
}
		

	}

});