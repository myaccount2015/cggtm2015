sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21DetailSplitView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21DetailSplitView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.MOB21DetailSplitView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21DetailSplitView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%"); 
		var oSplitApp = new sap.m.SplitApp("splitAppMOB21Det") ;
		var masterpage = sap.ui.view({id:"idMOB21MasDet", viewName:"com.cg.gtm.view.Drop1_MOB21.MOB21DetailsMaster", type:sap.ui.core.mvc.ViewType.JS});
		//var detailpage1 = sap.ui.view({id:"idMOB21Detscr", viewName:"com.cg.gtm.view.MOB21Details", type:sap.ui.core.mvc.ViewType.JS});
		var idMOB21DetChar = sap.ui.view({id:"idMOB21DetChar", viewName:"com.cg.gtm.view.Drop1_MOB21.MOB21CharDetails", type:sap.ui.core.mvc.ViewType.JS});
		 var mob21PDFPage = sap.ui.view({id:"idMOB21PDFView", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21PDF", type:sap.ui.core.mvc.ViewType.HTML});
			
		var mob21IMGPage =  sap.ui.view({id:"idMOB21IIMGView", viewName:"com.cg.gtm.view.Drop1_MOB21.Mob21Image", type:sap.ui.core.mvc.ViewType.JS});
		var blankScreen =  sap.ui.view({id:"idMob21BlankScreen", viewName:"com.cg.gtm.view.BlankScreen", type:sap.ui.core.mvc.ViewType.JS});	
		oSplitApp.addMasterPage(masterpage);
		oSplitApp.addDetailPage(blankScreen);
		oSplitApp.addDetailPage(idMOB21DetChar);
		oSplitApp.addDetailPage(mob21PDFPage).addDetailPage(mob21IMGPage);
		
		//oSplitApp.setInitialDetail(blankScreen);
		//  var runningInTablet = g_runningInTablet;
	      //  var runningInDsktop = jQuery.device.is.desktop;
	       // runningInDsktop = false ;
	       // runningInTablet = false ;
			//alert(runningInDsktop);
			
			if( g_runningOnPhone == true)
				{
				
				var app = new sap.ui.getCore().byId("myApp");
				app.addPage(masterpage).addPage(idMOB21DetChar).addPage(mob21PDFPage).addPage(mob21IMGPage);
				
				}
	        
	        
	        
     
        oSplitApp.setMode("ShowHideMode");
 		return new sap.m.Page({
 			
		//	title: "",
			showNavButton : true, 
			content: [
			          	oSplitApp
			],
			
			showFooter: false,
			footer: new sap.m.Bar({
		        contentRight: [
		         
		         /* new sap.m.Button({
		            text: "Save",
		            icon: "sap-icon://save"
		          }),*/
		          new sap.m.Button({
			            text: "Save",
			            icon: "sap-icon://save",
			            press : function (){
		                	 oController.mob21CharDetSave();
		             		}
			          })
		        ],
		        
		        contentLeft : [
		                       new sap.m.Button({
		       		            text: "Back",
		       		            icon : "sap-icon://close-command-field",
		       		            press : function(){
		       		               	openSplashScreen();
		       		            
		       		             setTimeout(function(){
                                      sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
				       		        	var appM = sap.ui.getCore().byId("myApp"); 			    	
				       					appM.to("idMOB21InitView12");
				       					
				       					 var mob21list = sap.ui.getCore().byId("mob21list");
				       					 mob21list.removeSelections(true); 
				       					 
				       					 
				       					var app = sap.ui.getCore().byId("splitAppMOB21Det");
				       			        app.toDetail("idMob21BlankScreen");	
				       			        
				       			     closeSplashScreen();
		       		            	 
			       		          },1000);//constant delay
		       		             
		       		            }
		       		          }),
		                       ]
			
			}),//.addStyleClass("footer")
			navButtonTap:function(){  
				
			///////////////////////////////////////////////////////////////////////////////////////////	
				
				sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
	        	var appM = sap.ui.getCore().byId("myApp"); 			    	
				appM.to("idMOB21InitView12");
				
				 var mob21list = sap.ui.getCore().byId("mob21list");
				 mob21list.removeSelections(true); 
				 
				 
				var app = sap.ui.getCore().byId("splitAppMOB21Det");
		        app.toDetail("idMob21BlankScreen");	
		        
		   ///////////////////////////////////////////////////////////////////////////////////
				
				/*if ( globalValMOB21 == 0)
					{
				
					//oController.removeLocalData();
				sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
				var mob21list = sap.ui.getCore().byId("mob21list");
				 mob21list.removeSelections(true); 
				 
				 
				 
				var myApp = sap.ui.getCore().byId("myApp"); 
				myApp.to("idMOB21InitView12");
				
				
				 
					}
				
				else
					{
					globalValMOB21 = 0;
				
					var oSplitApp =sap.ui.getCore().byId("splitAppMOB21Det");
		        	var detailpage1 =sap.ui.getCore().byId("idMOB21Detscr");
		        	//oSplitApp.addDetailPage(detailpage2);
		        	 //oSplitApp.toDetail(detailpage1);
		        
		        	  
		        	  
		        	  
		        	  
		        		var app = sap.ui.getCore().byId("splitAppMOB21Det");
				        app.toDetail("idMob21BlankScreen");	
					
					}*/
	           } 
 		
		
	});
		
	}
 
});