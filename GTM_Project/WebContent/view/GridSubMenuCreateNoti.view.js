sap.ui.jsview("com.cg.gtm.view.GridSubMenuCreateNoti", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenuCreateNoti
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenuCreateNoti";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenuCreateNoti
	*/ 
	createContent : function(oController) {
		
	    // create tile container
		
		
		var custCompTile  = new sap.m.StandardTile({
			id : "CUSTCOMP",
		    icon : "newicon/ico_customercomplaint.png",
		  //  number : "1",
		   // numberUnit : "Maintenence",
		    title : "{i18n>mob15CustComp}"+" (Q1)",
		    info : "{i18n>Complnt}",
		   // infoState: "{i18n>Er}",
		    press:function(evt) {
		    	CreateNotificationIconTabBarShow();
		    	
		    	var emptyArray = [];
		    	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
		    	sap.ui.getCore().byId("Mob15_Q1_AddedImageList").setModel(oJasonNotiQModel);
		    	
		    	reBindNotificationQueue(); //Rebinding Notification Queue
		    	
		    	g_MobileNavigationId = "Mob15-Q1-BackNavButton";
		    	sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("");//mat desc Text
		    	sap.ui.getCore().byId("Edit-mob15-customerComplaint").setVisible(false);
		    	sap.ui.getCore().byId("mobQ1-reasonforfail").setText("");
		    	backNavMat = "Mob15CreateNoti";
		    	var app = sap.ui.getCore().byId("myApp"); 
		    	window.localStorage.removeItem('000001');
				
		    	var image1 = sap.ui.getCore().byId("image1");
			    var image2 = sap.ui.getCore().byId("image2");
			    var image3 = sap.ui.getCore().byId("image3");
			    
			    var containerImage3 = sap.ui.getCore().byId("containerImage3");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1");
			    containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				 
				
				 
				 image1.setSrc("");
				 image2.setSrc("");
				 image3.setSrc("");
				
				 oController.gotoCreateNoti();
					globalMob15Detail = "Q1";
					
			    	showNotificationCnt(); // count notification
			    	if( g_runningOnPhone == true)
					   {
			    		app.to("idMob15DetailsQ1");
					   }
			    	else
			    		{
			    		var splitApp = sap.ui.getCore().byId("splitApp"); 
						splitApp.toDetail("idMob15DetailsQ1");
						splitApp.setInitialDetail("idMob15DetailsQ1");
						app.to("idMob15Notification");
			    		}
				
				
				
				
				
				
		    }
		  });
		
		var internalProbTile =   new sap.m.StandardTile({
				    id : "INTPROB",
				    icon : "newicon/ico_internalproblem.png",
				 //   number : "2",
				  //  numberUnit : "Goods",
				    title : "{i18n>IntPro}"+" (Q3)",
				    info : "{i18n>Pro}",
				   // infoState: "{i18n>Sc}",
				    press:function(evt) {
				    	CreateNotificationIconTabBarShow();
				    	var emptyArray = [];
				    	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
				    	sap.ui.getCore().byId("Mob15_Q3_AddedImageList").setModel(oJasonNotiQModel);
				    	
				    	
				    	reBindNotificationQueue(); //Rebinding Notification Queue
				    	
				    	backNavMat = "Mob15CreateNoti";
				    	  g_MobileNavigationId =  "Mob15-Q3-BackNavButton";
				    	 sap.ui.getCore().byId("idMatDesMob15-IntPro").setText("");	
				    	 sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(false);
				    	 sap.ui.getCore().byId("mobQ3-reasonforfail").setText("");
				   	var app = sap.ui.getCore().byId("myApp"); 
						
				   	var image1 = sap.ui.getCore().byId("imageQ31");
				    var image2 = sap.ui.getCore().byId("imageQ32");
				    var image3 = sap.ui.getCore().byId("imageQ33");
				    
				    var containerImage3 = sap.ui.getCore().byId("containerImage3Q3");
				    var containerImage2 = sap.ui.getCore().byId("containerImage2Q3");
				    var containerImage1 = sap.ui.getCore().byId("containerImage1Q3");
				    containerImage1.setVisible(false);
					 containerImage2.setVisible(false);
					 containerImage3.setVisible(false);

					 	//////////////Done for UAT issue 775
			 		 
				 		sap.ui.getCore().byId("containerBoxSerialNo-InternalProblemError").setVisible(false);
				    	sap.ui.getCore().byId("containerBoxBatchNo-InternalProblemError").setVisible(false);
				    	
				    	////////////////////////////////////////////////////////////
					
					 
					 image1.setSrc("");
					 image2.setSrc("");
					 image3.setSrc("");
					 
					 oController.gotoCreateNoti();
						
						globalMob15Detail = "Q3";
						showNotificationCnt(); // count notification
						if( g_runningOnPhone == true)
						   {
				    		app.to("idMob15DetailsQ3");
						   }
				    	else
				    		{
						var splitApp = sap.ui.getCore().byId("splitApp"); 
						splitApp.toDetail("idMob15DetailsQ3");
						splitApp.setInitialDetail("idMob15DetailsQ3");
						app.to("idMob15Notification");
				    		}
						
						
				    }
				  });
		
		 var vendorErrorTile =  new sap.m.StandardTile({
			  
				id : "VENERR",
			    icon : "newicon/ico_vendorerror.png",
			   // number : "3",
			   // numberUnit : "Maintenence",
			    title : "{i18n>mob15DetF2Tit}"+" (F2)",
			    info : "{i18n>Er}",
			  //  infoState: "{i18n>Er}",
			    press:function(evt) {
			    	CreateNotificationIconTabBarShow();
			    	var emptyArray = [];
			    	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
			    	sap.ui.getCore().byId("Mob15_F2_AddedImageList").setModel(oJasonNotiQModel);
			    	
			    	reBindNotificationQueue(); //Rebinding Notification Queue
			    	g_MobileNavigationId =  "Mob15-F2-BackNavButton";
			    	backNavMat = "Mob15CreateNoti";
			    		sap.ui.getCore().byId("idMatDesMob15-VendorError").setText("");
			    	    sap.ui.getCore().byId("Edit-mob15-vendorError").setVisible(false);
			    	    sap.ui.getCore().byId("mobF2-reasonforfail").setText("");
			    	
			    	 var image1 = sap.ui.getCore().byId("imageF21");
			 	    var image2 = sap.ui.getCore().byId("imageF22");
			 	    var image3 = sap.ui.getCore().byId("imageF23");
			 	    var containerImage3 = sap.ui.getCore().byId("containerImage3F2");
			 	    var containerImage2 = sap.ui.getCore().byId("containerImage2F2");
			 	    var containerImage1 = sap.ui.getCore().byId("containerImage1F2");
			 	    containerImage1.setVisible(false);
			 		 containerImage2.setVisible(false);
			 		 containerImage3.setVisible(false);
					 
					
					 
					 image1.setSrc("");
					 image2.setSrc("");
					 image3.setSrc("");
					 
						oController.gotoCreateNoti();
						globalMob15Detail = "F2";
						showNotificationCnt(); // count notification
					 
			    	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idMob15Notification");
					if( g_runningOnPhone == true)
					   {
			    		app.to("idMob15DetailsF2");
					   }
			    	else
			    		{
					
					var splitApp = sap.ui.getCore().byId("splitApp"); 
					splitApp.toDetail("idMob15DetailsF2");
					splitApp.setInitialDetail("idMob15DetailsF2");
			    		}
					
					
					
			    	
			    }
			  });
		 
			 var maerialErrTile  =  new sap.m.StandardTile({
					id : "MATERR",
				    icon : "newicon/ico_materialerror1.png",
				  //  number : "4",
				   // numberUnit : "Maintenence",
				    title : "{i18n>mob15DetF3Tit}"+" (F3)",
				    info : "{i18n>Er}",
				//    infoState: "{i18n>Er}",
				    press:function(evt) {
				    	CreateNotificationIconTabBarShow();
				    	var emptyArray = [];
				    	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
				    	sap.ui.getCore().byId("Mob15_F3_AddedImageList").setModel(oJasonNotiQModel);
				    	
				    	reBindNotificationQueue(); //Rebinding Notification Queue
				    	
				    	  g_MobileNavigationId =  "Mob15-F3-BackNavButton";
				    	sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText("");
				    	sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(false);
				    	sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(false);
				    	sap.ui.getCore().byId("Edit-mob15-materialError").setVisible(false);
				    	sap.ui.getCore().byId("mobF3-reasonforfail").setText("");
				    	
				    	 var image1 = sap.ui.getCore().byId("imageF31");
				 	    var image2 = sap.ui.getCore().byId("imageF32");
				 	    var image3 = sap.ui.getCore().byId("imageF33");
				 	    
				 	    
				 	    var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
				 	    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
				 	    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
				 	    containerImage1.setVisible(false);
				 		 containerImage2.setVisible(false);
				 		 containerImage3.setVisible(false);
				 		 
				 		 
						 image1.setSrc("");
						 image2.setSrc("");
						 image3.setSrc("");
				 		 
				    	backNavMat = "Mob15CreateNoti"
				    	var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMob15Notification");
						oController.gotoCreateNoti();
						if( g_runningOnPhone == true)
						   {
				    		app.to("idMob15DetailsF3");
						   }
				    	else
				    		{
						globalMob15Detail = "F3";
						showNotificationCnt(); // count notification
						var splitApp = sap.ui.getCore().byId("splitApp"); 
						splitApp.toDetail("idMob15DetailsF3");
						splitApp.setInitialDetail("idMob15DetailsF3");
				    		}
						
						
					
				    }
				  });
	   var tileContainer = new sap.m.TileContainer({
		   id :"tilecon3",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	    /*  tiles : [
	        
			new sap.m.StandardTile({
				//id : "tile1",
			    icon : "newicon/ico_customercomplaint.png",
			    number : "1",
			   // numberUnit : "Maintenence",
			    title : "{i18n>mob15CustComp}",
			    info : "{i18n>Complnt}",
			    infoState: "{i18n>Er}",
			    press:function(evt) {
			    	sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("");//mat desc Text
			    	sap.ui.getCore().byId("Edit-mob15-customerComplaint").setVisible(false);
			    	sap.ui.getCore().byId("mobQ1-reasonforfail").setText("");
			    	backNavMat = "Mob15CreateNoti";
			    	var app = sap.ui.getCore().byId("myApp"); 
			    	window.localStorage.removeItem('000001');
					
			    	var image1 = sap.ui.getCore().byId("image1");
				    var image2 = sap.ui.getCore().byId("image2");
				    var image3 = sap.ui.getCore().byId("image3");
				    
				    var containerImage3 = sap.ui.getCore().byId("containerImage3");
				    var containerImage2 = sap.ui.getCore().byId("containerImage2");
				    var containerImage1 = sap.ui.getCore().byId("containerImage1");
				    containerImage1.setVisible(false);
					 containerImage2.setVisible(false);
					 containerImage3.setVisible(false);
					 
					
					 
					 image1.setSrc("");
					 image2.setSrc("");
					 image3.setSrc("");
					
					 oController.gotoCreateNoti();
						globalMob15Detail = "Q1";
						
				    	showNotificationCnt(); // count notification
					
					var splitApp = sap.ui.getCore().byId("splitApp"); 
					splitApp.toDetail("idMob15DetailsQ1");
					splitApp.setInitialDetail("idMob15DetailsQ1");
					app.to("idMob15Notification");
					
					
					
			    }
			  }),
			  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					    number : "2",
					    //numberUnit : "Quality",
					    title : "{i18n>CusDelCom}",
					    info : "{i18n>Complnt}",
					    infoState: "{i18n>Sc}",
					    press:function(evt) {
					    	oController.gotoCreateNoti();
					    	var app = sap.ui.getCore().byId("myApp"); 
							app.to("idMob15Notification");
							
							var splitApp = sap.ui.getCore().byId("splitApp"); 
							splitApp.toDetail("idMob15DetailsQ11");
							splitApp.setInitialDetail("idMob15DetailsQ11");
							
							globalMob15Detail = "Q11";
					    }
					  }),
					  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "newicon/ico_internalproblem.png",
							    number : "2",
							  //  numberUnit : "Goods",
							    title : "{i18n>IntPro}",
							    info : "{i18n>Pro}",
							    infoState: "{i18n>Sc}",
							    press:function(evt) {
							  
							    	 sap.ui.getCore().byId("idMatDesMob15-IntPro").setText("");	
							    	 sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(false);
							    	 sap.ui.getCore().byId("mobQ3-reasonforfail").setText("");
							   	var app = sap.ui.getCore().byId("myApp"); 
									
							   	var image1 = sap.ui.getCore().byId("imageQ31");
							    var image2 = sap.ui.getCore().byId("imageQ32");
							    var image3 = sap.ui.getCore().byId("imageQ33");
							    
							    var containerImage3 = sap.ui.getCore().byId("containerImage3Q3");
							    var containerImage2 = sap.ui.getCore().byId("containerImage2Q3");
							    var containerImage1 = sap.ui.getCore().byId("containerImage1Q3");
							    containerImage1.setVisible(false);
								 containerImage2.setVisible(false);
								 containerImage3.setVisible(false);
								 
								
								 
								 image1.setSrc("");
								 image2.setSrc("");
								 image3.setSrc("");
								 
								 oController.gotoCreateNoti();
									
									globalMob15Detail = "Q3";
									showNotificationCnt(); // count notification
								 
									var splitApp = sap.ui.getCore().byId("splitApp"); 
									splitApp.toDetail("idMob15DetailsQ3");
									splitApp.setInitialDetail("idMob15DetailsQ3");
									app.to("idMob15Notification");
									
									
							    }
							  }),
					  new sap.m.StandardTile({
						  
							//id : "tile1",
						    icon : "newicon/ico_vendorerror.png",
						    number : "3",
						   // numberUnit : "Maintenence",
						    title : "{i18n>mob15DetF2Tit}",
						    info : "{i18n>Er}",
						    infoState: "{i18n>Er}",
						    press:function(evt) {
						    	backNavMat = "Mob15CreateNoti";
						    		sap.ui.getCore().byId("idMatDesMob15-VendorError").setText("");
						    	    sap.ui.getCore().byId("Edit-mob15-vendorError").setVisible(false);
						    	    sap.ui.getCore().byId("mobF2-reasonforfail").setText("");
						    	
						    	 var image1 = sap.ui.getCore().byId("imageF21");
						 	    var image2 = sap.ui.getCore().byId("imageF22");
						 	    var image3 = sap.ui.getCore().byId("imageF23");
						 	    var containerImage3 = sap.ui.getCore().byId("containerImage3F2");
						 	    var containerImage2 = sap.ui.getCore().byId("containerImage2F2");
						 	    var containerImage1 = sap.ui.getCore().byId("containerImage1F2");
						 	    containerImage1.setVisible(false);
						 		 containerImage2.setVisible(false);
						 		 containerImage3.setVisible(false);
								 
								
								 
								 image1.setSrc("");
								 image2.setSrc("");
								 image3.setSrc("");
								 
									oController.gotoCreateNoti();
									globalMob15Detail = "F2";
									showNotificationCnt(); // count notification
								 
						    	var app = sap.ui.getCore().byId("myApp"); 
								app.to("idMob15Notification");
							
								
								var splitApp = sap.ui.getCore().byId("splitApp"); 
								splitApp.toDetail("idMob15DetailsF2");
								splitApp.setInitialDetail("idMob15DetailsF2");
								
								
								
						    	
						    }
						  }),
						  new sap.m.StandardTile({
								//id : "tile1",
							    icon : "newicon/ico_materialerror1.png",
							    number : "4",
							   // numberUnit : "Maintenence",
							    title : "{i18n>mob15DetF3Tit}",
							    info : "{i18n>Er}",
							    infoState: "{i18n>Er}",
							    press:function(evt) {
							    	sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText("");
							    	sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(false);
							    	sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(false);
							    	sap.ui.getCore().byId("Edit-mob15-materialError").setVisible(false);
							    	sap.ui.getCore().byId("mobF3-reasonforfail").setText("");
							    	
							    	 var image1 = sap.ui.getCore().byId("imageF31");
							 	    var image2 = sap.ui.getCore().byId("imageF32");
							 	    var image3 = sap.ui.getCore().byId("imageF33");
							 	    
							 	    
							 	    var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
							 	    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
							 	    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
							 	    containerImage1.setVisible(false);
							 		 containerImage2.setVisible(false);
							 		 containerImage3.setVisible(false);
							 		 
							 		 
									 image1.setSrc("");
									 image2.setSrc("");
									 image3.setSrc("");
							 		 
							    	backNavMat = "Mob15CreateNoti"
							    	var app = sap.ui.getCore().byId("myApp"); 
									app.to("idMob15Notification");
									oController.gotoCreateNoti();
									
									globalMob15Detail = "F3";
									showNotificationCnt(); // count notification
									var splitApp = sap.ui.getCore().byId("splitApp"); 
									splitApp.toDetail("idMob15DetailsF3");
									splitApp.setInitialDetail("idMob15DetailsF3");
									
									
								
							    }
							  })
	      ]*/
	    });
	   
	  /* tileContainer.addTile(custCompTile);
	   tileContainer.addTile(internalProbTile);
	   tileContainer.addTile(vendorErrorTile);
	   tileContainer.addTile(maerialErrTile);*/
	   this.page = new sap.m.Page({
			title: "Quality Notifications",
			id : "Mob15-BackNavButton",
			content: [
			          	tileContainer
					],
					showNavButton: true,
					enableScrolling: false,
		            navButtonTap:function(){  
		            	g_MobileNavigationId =  "Mob00-BackNavButton";
		            	var  app = sap.ui.getCore().byId("myApp"); 
		                           app.to("idGridSubMenuQM");  
		                        	  
		            }  
		});
	    
 		return this.page;
	}

});