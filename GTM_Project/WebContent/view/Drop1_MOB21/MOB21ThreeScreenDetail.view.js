sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21ThreeScreenDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21ThreeScreenDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.MOB21ThreeScreenDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21ThreeScreenDetail
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		/*var detailMaterialView = sap.ui.view({id:"idMaterialView", viewName:"splitscreens.MaterialView", type:sap.ui.core.mvc.ViewType.JS});
		
		
		
		var detailLastPage = sap.ui.view({id:"idLastPage", viewName:"splitscreens.LastPage", type:sap.ui.core.mvc.ViewType.JS});
		*/
	
		
		var idMOB21Det = sap.ui.getCore().byId("idMOB21Det"); 
		var idMOB21Detscr = sap.ui.getCore().byId("idMOB21Detscr"); 
		
		
		
		
		//var Detailpage1 = sap.ui.view({id:"idMobView13", viewName:"com.cg.gtm.view.Mob21PlantList", type:sap.ui.core.mvc.ViewType.JS});
		//var detailpage12 = sap.ui.view({id:"idMOB21Detscr", viewName:"com.cg.gtm.view.MOB21Details", type:sap.ui.core.mvc.ViewType.JS});
		
		/*var width1 = ((screen.width)/2) + "px";
		var width2 = ((screen.width)/2) + "px";
		var height1 = screen.height + "px";*/
		
		/*var width1 = ((screen.width)/2.2) + "px";
		var width2 = ((screen.width)/2.3) + "px";*/
	

		
		   		
		if(g_runningOnPhone == false)
			{
			//idMOB21Det.setWidth(width1);
			idMOB21Det.setHeight("810px");
			//idMOB21Detscr.setWidth(width2);
			idMOB21Detscr.setHeight("810px");
			//idMOB21Detscr.addStyleClass("MarginLeft");
			
			
			}
		
		
		/*var oLayout = new sap.ui.layout.HorizontalLayout({
			content: [idMOB21Det,idMOB21Detscr ]
		});*/
		
		
		
		
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			idMOB21Det.setLayoutData(nonResize);
			
			}
		
		
		
		
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB21Splitter",
			contentAreas : [idMOB21Det,idMOB21Detscr],
			
		});
		
			
		var btnSeeChar = new sap.m.Button({
		    id : "btnSeeCharMOB21",
		    text : "{i18n>MOB21_SHOW_CHAR}",
		    icon: "sap-icon://search",
		    //style : sap.ui.commons.ButtonStyle.Accept,
		    press : function (){
		    	oController.showChar();
		    	
				}
		    }).addStyleClass("btn");
		
 		return new sap.m.Page({
 			showHeader: true,
			title: "Open Inspection Lots",
			content: [
			          oLayout
			],
			enableScrolling: true,
			
			footer: new sap.m.Bar({
				
				contentRight: [
			                      btnSeeChar,//.addStyleClass("search")
			                   
			                      ]

			}).addStyleClass("footer"),
		});
	
 		
	}

});