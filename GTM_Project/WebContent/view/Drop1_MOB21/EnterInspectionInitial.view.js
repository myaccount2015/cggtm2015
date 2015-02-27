sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.EnterInspectionInitial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.EnterInspectionInitial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.EnterInspectionInitial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.EnterInspectionInitial
	*/ 
	createContent : function(oController) {

		var oSplitApp = new sap.m.SplitApp("splitAppInsCreate1") ;
		var masterpage = sap.ui.view({id:"idMOB21Mas", viewName:"com.cg.gtm.view.Drop1_MOB21.EnterInspectionMaster", type:sap.ui.core.mvc.ViewType.JS});
		var  detailpage = sap.ui.view({id:"idMOB21Det", viewName:"com.cg.gtm.view.Drop1_MOB21.EnterInspectionDetail", type:sap.ui.core.mvc.ViewType.JS});
		var detailpage12 = sap.ui.view({id:"idMOB21Detscr", viewName:"com.cg.gtm.view.Drop1_MOB21.MOB21Details", type:sap.ui.core.mvc.ViewType.JS});
		   
		var Detailpage1 = sap.ui.view({id:"idMobView13", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21PlantList", type:sap.ui.core.mvc.ViewType.JS});
		var masterPageTypeLst = sap.ui.view({id:"idMob21TypeList", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21TypeList", type:sap.ui.core.mvc.ViewType.JS});
		
		var MatPage2 = sap.ui.view({id:"idMobView_mat", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21Material", type:sap.ui.core.mvc.ViewType.JS});
		var WrkPage2 = sap.ui.view({id:"idMobView_wrk", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21WorkCenter", type:sap.ui.core.mvc.ViewType.JS});	
		var VendorPage2 = sap.ui.view({id:"idMobView_ven", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21Vendor", type:sap.ui.core.mvc.ViewType.JS});
		// var detailBlankScreen = sap.ui.getCore().byId("idBlankScreen");   
		 var detailpage3scr = sap.ui.view({id:"idMOB21Det3scr", viewName:"com.cg.gtm.view.Drop1_MOB21.MOB21ThreeScreenDetail", type:sap.ui.core.mvc.ViewType.JS});
		 var detailBlankScreen = sap.ui.view({id:"idMOB21detailBlankScreen", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21DetailBlankScreen", type:sap.ui.core.mvc.ViewType.JS});
			
	     	
		       
		
		
        
       // var runningInTablet = g_runningInTablet;
       // var runningInDsktop = jQuery.device.is.desktop;
       // runningInDsktop = false ;
      //  runningInTablet = false ;
		//alert(runningInDsktop);
		
       
        
		if(g_runningOnPhone == false) {
			
			oSplitApp.addMasterPage(masterpage);
			oSplitApp.addPage(detailBlankScreen);
	       // oSplitApp.addDetailPage(detailpage1);
	        oSplitApp.addMasterPage(Detailpage1);
	        oSplitApp.addMasterPage(MatPage2);
	        oSplitApp.addMasterPage(WrkPage2);
	        oSplitApp.addMasterPage(VendorPage2);
	        oSplitApp.addMasterPage(masterPageTypeLst);
			oSplitApp.addPage(detailpage3scr);
		 	//oSplitApp.addDetailPage(detailpage12);
		}
		else
			{
			
			
			
			var app = sap.ui.getCore().byId("myApp");
			app.addPage(masterpage).addPage(detailpage).addPage(detailpage12).addPage(WrkPage2).addPage(VendorPage2).addPage(masterPageTypeLst).addPage(Detailpage1);
	
			}
        
        oSplitApp.setMode("ShowHideMode");
         
      var btnSearch = new sap.m.Button({
            
            text : "{i18n>MOB21_SRCH}",
            icon: "sap-icon://search",
            //style : sap.ui.commons.ButtonStyle.Accept,
            press : function (){
            	
           	 showMOB21Detail(); //Showing Detail Split Screen, but hiding 3rd column
           	 hideMOB21Dtl3rdColumn();
           	 oController.loadInsTree();
        		}
            });	
        
      
      if(g_runningOnPhone == false)
    	  {

      return new sap.m.Page({
    	    id : "Mob21-BackNavButton",
			title: "{i18n>MOB21_TITLE}",
			content: [
			          oSplitApp
			         
			],
			enableScrolling: true,
			showNavButton: true,
			showFooter: false,

            
			
			footer: new sap.m.Bar({
				/*//contentLeft: [ btnSearch.addStyleClass("search")],
		        contentLeft: [
		                       btnSearch//.addStyleClass("search")
		                       
		                       ]*/
			}),
            navButtonTap:function(){   
            	    g_MobileNavigationId = "MainGrid-Quality";
            		var app = sap.ui.getCore().byId("myApp");  
                    app.to("idGridSubMenuQM");
                    
                    
                    sap.ui.getCore().byId("mob21list").removeSelections();
                   
                    oSplitApp.toMaster("idMOB21Mas");
                    oSplitApp.to("idMOB21detailBlankScreen");
                    
                    
                    
                    
                    sap.ui.getCore().byId("inputPlantMat").setEnabled(true);
                    sap.ui.getCore().byId("inputPlantMat").setValue("");
                    
                    
                    
            	}
            	
		});
	}
	
 		
	}

});