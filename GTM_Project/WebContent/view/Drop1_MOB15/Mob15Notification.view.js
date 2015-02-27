sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.Mob15Notification", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.Mob15Notification
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.Mob15Notification";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.Mob15Notification
	*/ 
	//Done
	createContent : function(oController) {
		var oSplitApp = new sap.m.SplitApp("splitApp", 
				{initialPage:"idMD15INITIAL1",
			
				afterDetailNavigate: function(){
					this.hideMaster();
				}
		
				}
				//The master area needs to be closed when navigation in detail area is done.
				);
		var masterpage = sap.ui.view({id:"idMD15INITIAL1", viewName:"com.cg.gtm.view.Drop1_MOB15.MD15INITIAL", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpageQ1 = sap.ui.view({id:"idMob15DetailsQ1", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ1", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpageQ2 = sap.ui.view({id:"idMob15DetailsQ11", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ11", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpageQ3 = sap.ui.view({id:"idMob15DetailsQ3", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ3", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpageF2 = sap.ui.view({id:"idMob15DetailsF2", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15DetailsF2", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpageF3 = sap.ui.view({id:"idMob15DetailsF3", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15DetailsF3", type:sap.ui.core.mvc.ViewType.JS});
		
		var detailpagedefect = sap.ui.view({id:"idMob15DetailsF4-1", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15DefectView", type:sap.ui.core.mvc.ViewType.JS}); 
		
		var detailpageloc = sap.ui.view({id:"idMob15DetailsF5-2", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15LocView", type:sap.ui.core.mvc.ViewType.JS}); 
		var mob31IMGPage =  sap.ui.view({id:"idMOB15IMGView", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15IMGView", type:sap.ui.core.mvc.ViewType.JS});
		var mob15Q3img =  sap.ui.view({id:"idMOB15Q1IMGView", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15Q1IMGView", type:sap.ui.core.mvc.ViewType.JS});
		var mob15F2img =  sap.ui.view({id:"idMOB15F2IMGView", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15F2IMGView", type:sap.ui.core.mvc.ViewType.JS});
		var mob15F3img =  sap.ui.view({id:"idMOB15F3IMGView", viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15F3IMGView", type:sap.ui.core.mvc.ViewType.JS});
		if( g_runningOnPhone == true)
		   {
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(detailpageQ1).addPage(detailpageQ3).addPage(detailpageF2).addPage(detailpageF3);
			app.addPage(detailpagedefect).addPage(detailpageloc);
			app.addPage(mob31IMGPage).addPage(mob15Q3img).addPage(mob15F2img).addPage(mob15F3img);
			
			return new sap.m.Page({
				title: "{i18n>mob15NotTit}",
				content: [
				          
				],
				
				enableScrolling: false,
				showNavButton: false,
				
	            navButtonTap:function(){  
	            g_MobileNavigationId =  "Mob15-BackNavButton";
	        var valMatNo = sap.ui.getCore().byId("myList"); 
	       		valMatNo.removeSelections();
	       		  
	                           app = sap.ui.getCore().byId("myApp"); 
	                           app.to("idGridSubMenuCreateNoti");  

	                           //app.to("idGridSubMenuCreateNoti");  
	                        
	                           /*if ( globalFromCustComlaint ==  1)
	                        	   {
	                        	   globalFromCustComlaint =  0;
	                        	   
	                        	   app.to("idGridSubMenuCreateNoti");
	                        	   }
	                           else
	                        	   {
	                           app.to("idGridSubMenuCreateNoti");  
	                        	   }
	            */
	            }
			});
			
			
		   }
		
		else
			{
		oSplitApp.addMasterPage(masterpage);
        oSplitApp.addDetailPage(detailpageQ1).addDetailPage(detailpageQ2).addDetailPage(detailpageQ3).addDetailPage(detailpageF2).addDetailPage(detailpageF3).addDetailPage(detailpagedefect).addDetailPage(detailpageloc);
        oSplitApp.addDetailPage(mob31IMGPage).addDetailPage(mob15Q3img).addDetailPage(mob15F2img).addDetailPage(mob15F3img);
        oSplitApp.setMode("ShowHideMode");
        
      //  oSplitApp.setInitialDetail("idMob15DetailsQ1");
        // oSplitApp.setInitialMaster("idMD15INITIAL1");
        //oSplitApp.setDefaultTransitionNameDetail("fade");
        
    
        //Define Notification button
        var btnCreateNoti = new sap.m.Button({
            text: "{i18n>mob15NotTit}",
          //  type: sap.m.ButtonType.Accept,
            icon: "sap-icon://action",
            layoutData: new sap.m.FlexItemData({growFactor: 1})
          });
		  
	  btnCreateNoti.attachPress(oController.onCreateNoti);
	  
	  var btnNewNoti = new sap.m.Button({
            text: "{i18n>reset}",
           // type: sap.m.ButtonType.Accept,
            icon: "sap-icon://refresh",
            layoutData: new sap.m.FlexItemData({growFactor: 1})
          });
		  
	  btnNewNoti.attachPress(oController.newNoti);
	  
	  
		
 		return new sap.m.Page({
			title: "{i18n>mob15NotTit}",
			content: [
			          oSplitApp
			],
			
			enableScrolling: false,
			showNavButton: true,
			showFooter: false,
			footer: new sap.m.Bar({
		        contentRight: [
		                       btnNewNoti,
		                       btnCreateNoti
		                       
		                       ]
			}),//.addStyleClass("Pfooter"),
			/*footer : new sap.m.Bar({
				contentLeft: [],	
				contentMiddle: [],
				contentRight: []
			})*/
			
            navButtonTap:function(){  
              //  app = sap.ui.getCore().byId("myApp");  
               // app.to("idGridSubMenuCreateNoti");  
            	g_MobileNavigationId =  "Mob15-BackNavButton";
            	var valMatNo = sap.ui.getCore().byId("myList"); 
       		    valMatNo.removeSelections();
       		  
                           app = sap.ui.getCore().byId("myApp"); 
                           app.to("idGridSubMenuCreateNoti");  

                           //app.to("idGridSubMenuCreateNoti");  
                        
                           /*if ( globalFromCustComlaint ==  1)
                        	   {
                        	   globalFromCustComlaint =  0;
                        	   
                        	   app.to("idGridSubMenuCreateNoti");
                        	   }
                           else
                        	   {
                           app.to("idGridSubMenuCreateNoti");  
                        	   }
            */
            }
		});
	}
	}

});