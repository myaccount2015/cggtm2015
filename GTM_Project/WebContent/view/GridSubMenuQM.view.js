sap.ui.jsview("com.cg.gtm.view.GridSubMenuQM", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenuQM
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenuQM";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenuQM
	*/ 
	createContent : function(oController) {
		
		/*
		 * Initializing Busy Dialog UI Component
		 */
		 var busyDialog = new sap.m.BusyDialog({
			          id :"busyDialogMain",
			         
			         // showCancelButton: true
			          }).addStyleClass("splash-screen-circle-outer").addStyleClass("splash-screen-circle-outer");
		
		
		
		
	    // create tile container
		 
		 var createInspectionTile = new sap.m.StandardTile({
			 id : "CRINSP",
			    icon : "newicon/ico_createinspection.png",
			//    number : "5",
			  //  numberUnit : "Goods",
			    title : "{i18n>CreIns}",
			    info : "{i18n>CreIns}",
			   // infoState: "Success",
			    
			    press:function(evt) {				    					    	
			    	g_MobileNavigationId = "Mob22-BackNavButton";
			    	//batch visibility 
			    	 sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(false);
				    sap.ui.getCore().byId("horizontal5").setVisible(false);
			    	oController.loadInspectionQ();
			    	backNavMat = "Mob22InsLot";
			    	
					sap.ui.getCore().byId("lblMatnrMOB22Desc").setText("");
					
					 
					 if( g_runningOnPhone == true)
			    		{
				
						 
						 
						 var appM = sap.ui.getCore().byId("myApp"); 
						 appM.to("idMOB22InitView");
					
						}
					 else
						 {
						 var appM = sap.ui.getCore().byId("myApp"); 
						 appM.to("idMOB22InitView");
						 
						 
						 var app = sap.ui.getCore().byId("splitAppInsCreate");  
			    	     app.toMaster("idMOB22Ini");
						 app.toDetail("idMOB22Det");
						 }
					 
					 
					 
				   
					//app.toma
			    }
			  }) ;
		 
		 
		 var matSrchTile = new sap.m.StandardTile({
			     id : "matSrchTile",
			    icon : "newicon/ico_materialsearch1.png",
			  //  number : "2",
			   // numberUnit : "Production",
			    title : "{i18n>mat_searchTit}",
			    info : "{i18n>mat_searchTit}",
			   // infoState: "Error",
			    press:function(evt) {
			    	backNavMat = "idMob24MaterialSearchInput";
			    	
			    	g_MobileNavigationId = "Mob24-BackNavButton";
			    	//set Default plant to Views
					
					 var getPlant =  window.localStorage.getItem("defPlantDesc");
						var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
						plantLst.setValue(getPlant);
					  
					var headerPlant = sap.ui.getCore().byId("headerPlant"); 
						headerPlant.setTitle(getPlant);
					
				
						
			    	if( g_runningOnPhone == true)
			    		{
			    		var app = sap.ui.getCore().byId("myApp"); 
			    		app.to("idMob24MaterialSearch");
						app.to("idMob24MaterialSearchInput");
						
						
			    		
			    		}
			    	else
			    		{
			    		var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMob24MaterialSearch");
						
						var app = sap.ui.getCore().byId("splitAppMaterial");  
					    app.toMaster("idMob24MaterialSearchInput");
					    app.toDetail("idMATSRBlank");
					    
					  
			    		}
			    	
			    }
			  });
		 
		var createNotiTile =  new sap.m.StandardTile({
				    id : "createNoti",
				    icon : "icon/ico_createnotification.png",
				  //  number : "3",
				    //numberUnit : "Quality",
				    title : "{i18n>mob15NotTit}",
				    info : "{i18n>mob15NotTit}",
				    //infoState: "Success",
				    press:function(evt) {
				    	 g_MOB15MatPlant="";   ///global variable
				    	g_MobileNavigationId = "Mob15-BackNavButton";
				    	showNotificationCnt();
				    	
				    	
				    	
				    	var app = sap.ui.getCore().byId("myApp"); 
						app.to("idGridSubMenuCreateNoti");
				    }
				    
				  });
		
		var notiListTile =  new sap.m.StandardTile({
				     id : "NOTLIST",
				    icon : "newicon/ico_notitasklist1.png",
				  //  number : "4",
				   // numberUnit : "Inventory",
				    title : "{i18n>NotTaskList}",
				    info : "{i18n>NotTaskList}",
				 //   infoState: "Success",
				    press:function(evt) {
				    	
				    	//busyDialog.open(); //Showing Busy Indicator
				    	 var busyDialog = new sap.m.BusyDialog();
				    //	 busyDialog.open();
				    	
							//Calling Notification Task List before navigation.
				    	 
				    	var app = sap.ui.getCore().byId("myApp");
						var page10 = new sap.ui.view({id:"idMOB16NotificationList", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList", type:sap.ui.core.mvc.ViewType.JS});
 						app.addPage(page10);
				    	    g_MobileNavigationId = "Mob16-BackNavButton";
					    	var objNotiTaskList = oController.callNotificationTaskList(evt);
					    	closeSplashScreen();//splash screen closed
				    	    sap.ui.getCore().byId("busyDialogMain").close();

					    	var jsonModel=jSonModelSortList;
					    	
					    	var list= sap.ui.getCore().byId("TaskMasterList");
					    	list.setModel(jsonModel);
					    /*	objNotiTaskList = oJSONModelNotiTaskLst1; //TODO: Change this oJSONModelNotiTaskLst1 Global variable
					    	
					    	var oTree = sap.ui.getCore().byId("NotiTaskListTree");
					    	oTree.setModel(objNotiTaskList); // Setting the model in Notification List Tree UI Component
					    	oTree.collapseAll(); //Collapsing Notification List - Jenish
					    	  */
					    	
					    	 // sap.ui.getCore().byId("busyDialogMain").open();
					    
					    	   // setTimeout(function(){},
					            var app = sap.ui.getCore().byId("myApp");
						    	app.to("idMOB16NotificationList");
						    	if ( g_runningOnPhone == false)
								{
								var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
								splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
								}
								
								//busyDialog.close();
							
					    	 
				    	
				    }
				  });
		
		 var entInstile = new sap.m.StandardTile({
				id : "ENTINSP",
			    icon : "newicon/ico_enterinspectionresults.png",
			   // number : "6",
			   // numberUnit : "Maintenence",
			    title : "{i18n>EnterInspTitle}",
			    info : "{i18n>EnterInspInfo}",
			 //   infoState: "Error" ,
			    
			    press : function(evt)
			    {
			    	g_MobileNavigationId = "Mob21-BackNavButton";
			    	oController.clearInspInputs();
			    	
			    	if( g_runningOnPhone == true)
			    		{
			    		var appM = sap.ui.getCore().byId("myApp"); 
				    	 appM.to("idMOB21InitView12");
				       	 appM.to("idMOB21Mas");
				    	 
				    	 
			    		
			    		}
			    	
			    	else
			    		{
			    		 var appM = sap.ui.getCore().byId("myApp"); 
				    	 appM.to("idMOB21InitView12");
				  	     var app = sap.ui.getCore().byId("splitAppInsCreate1");  
				    	 app.toMaster("idMOB21Mas");
						 app.toDetail("idBlankScreen");
			    		
			    		}
			    	
			    	
					 
					 
					 
			    }
			  });
		 
		 
		     var Mob29_Ser_oneTimeCall = 0;
		    
			  
			var labelPrintTile =   new sap.m.StandardTile({
				    id : "LABELPR",
				    icon : "newicon/ico_labelprint.png",
				   // number : "7",
				   // numberUnit : "Production",
				    title : "{i18n>LabPrnt}",
				    info : "{i18n>Prnt_labl}",
				  //  infoState: "Error",
				    press : function(evt){
				    	g_MobileNavigationId = "Mob29-BackNavButton";
				    	var getDefPrint =  window.localStorage.getItem("defPrinCode");
						var getDefPrintDes =  window.localStorage.getItem("defPrinDesc");
						
						
						var defprinter = window.localStorage.getItem("defPrinCode");
						sap.ui.getCore().byId("Mob29_DestinationPrinter").setSelectedKey(defprinter);
					var selected = sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedKey();
					
				    	
				    	if(Mob29_Ser_oneTimeCall == 0 && (getDefPrint == "" || getDefPrint == null)  )
				    		{
				    		 openSplashScreen();
				    		Mob29_Ser_oneTimeCall = 1;
				    		g_MOB00Init  = "PR"; // for printer
					    	sap.ui.getCore().byId("idMOB00masterPage").getController().getPlantsMOB00();
					    	
							
					    	var app = new sap.ui.getCore().byId("myApp");
					    	app.to("idMOB29LabelPrintingView");
					    	closeSplashScreen();
				    		}
				    	else
				    		{
				    		g_MOB00Init  = "PR"; // for printer
					    	sap.ui.getCore().byId("idMOB00masterPage").getController().getPlantsMOB00();
				    		var getAllData = sap.ui.getCore().byId("Mob29_DestinationPrinter").getModel();
                            var listData =  getAllData.oData.AllRecords;
                            
                            //getDefPrint
                            //getDefPrintDes
                            var itemarray = [];
							/*var item = {
									"PrinterType":	getDefPrint,
									"PrinterName": "0-"+getDefPrintDes
									
							};
							itemarray.push(item);*/
							for( var i = 0 ; i < listData.length; i++)
								{
								 item = {
										"PrinterType":	listData[i].PrinterType,
										"PrinterName": listData[i].PrinterName
									};
								itemarray.push(item);
								}
							
							//All Records
							
							item = {
									"PrinterType":	"-Select Printer-",
									"PrinterName": "ZDummydata"
									
							};
							itemarray.push(item);
							var oData = {"Items":itemarray,
								     "AllRecords" : listData
						          };
							
							
							
							var oModel = new sap.ui.model.json.JSONModel(oData);
							sap.ui.getCore().byId("Mob29_DestinationPrinter").setModel(oModel);
                            
                            
                            
				    		var app = new sap.ui.getCore().byId("myApp");
					    	app.to("idMOB29LabelPrintingView");
				    		}
				    	
				    	
				    	
				    	
				    	
				    }
				  });
			  
	   var tileContainer = new sap.m.TileContainer({
		   id :"tileconQM",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	  /*    tiles : [
	        
			new sap.m.StandardTile({
				//id : "tile1",
			    icon : "newicon/ico_displaydocument2.png",
			    number : "1",
			   // numberUnit : "Maintenence",
			    title : "{i18n>DisDoc}",
			    info : "{i18n>DocInfo}",
			    infoState: "{i18n>Er}",
			    press : function(evt){
			    	var app = new sap.ui.getCore().byId("myApp");
			    	app.to("idMob31DisDoc");

					var app = sap.ui.getCore().byId("splitAppDocumentDisplay");  
				    app.toMaster("idMOB31Master");
				    app.toDetail("idMOB31Empty");
			    	
			    		    	
			    }
			  }),
			  
			  new sap.m.StandardTile({
				 // id : "tile2",
				    icon : "newicon/ico_materialsearch1.png",
				    number : "2",
				   // numberUnit : "Production",
				    title : "{i18n>mat_searchTit}",
				    info : "{i18n>mat_searchTit}",
				    infoState: "Error",
				    press:function(evt) {
				    	backNavMat = "idMob24MaterialSearchInput";
				    	
				    	var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMob24MaterialSearch");
						
						var app = sap.ui.getCore().byId("splitAppMaterial");  
					    app.toMaster("idMob24MaterialSearchInput");
					    app.toDetail("idMATSRBlank");
				    }
				  }),
				  
			  new sap.m.StandardTile({
				//  id : "tile3",
				    icon : "icon/ico_createnotification.png",
				    number : "3",
				    //numberUnit : "Quality",
				    title : "{i18n>mob15NotTit}",
				    info : "{i18n>mob15NotTit}",
				    infoState: "Success",
				    press:function(evt) {
				    	
				    	showNotificationCnt();
				    	
				    	var app = sap.ui.getCore().byId("myApp"); 
						app.to("idGridSubMenuCreateNoti");
				    }
				    
				  }),
				  
				  new sap.m.StandardTile({
					//  id : "tile4",
					    icon : "newicon/ico_notitasklist1.png",
					    number : "4",
					   // numberUnit : "Inventory",
					    title : "{i18n>NotTaskList}",
					    info : "{i18n>NotTaskList}",
					    infoState: "Success",
					    press:function(evt) {
					    	
					    	//busyDialog.open(); //Showing Busy Indicator
					    	
					    	
								//Calling Notification Task List before navigation. 
								
						    	var objNotiTaskList = oController.callNotificationTaskList(evt);
						    	
						    	objNotiTaskList = oJSONModelNotiTaskLst1; //TODO: Change this oJSONModelNotiTaskLst1 Global variable
						    	
						    	var oTree = sap.ui.getCore().byId("NotiTaskListTree");
						    	oTree.setModel(objNotiTaskList); // Setting the model in Notification List Tree UI Component
						    	oTree.collapseAll(); //Collapsing Notification List - Jenish
						    	
						    	
						    	 // sap.ui.getCore().byId("busyDialogMain").open();
						    	
						    	    setTimeout(function(){
							   		closeSplashScreen();//splash screen closed
						    	    sap.ui.getCore().byId("busyDialogMain").close();
							   		var app = sap.ui.getCore().byId("myApp");
							    	app.to("idMOB16NotificationList");
									var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
									splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
							    	 							    	 
							    	 },2000);//constant delay
						    	  
									
								
							  
					    	
					    }
					  }),
					  new sap.m.StandardTile({
						 id : "CRINSP",
						    icon : "newicon/ico_createinspection.png",
						    number : "5",
						  //  numberUnit : "Goods",
						    title : "{i18n>CreIns}",
						    info : "{i18n>CreIns}",
						    infoState: "Success",
						    
						    press:function(evt) {				    					    	
						    	//var app = sap.ui.getCore().byId("myApp"); 
						    	oController.loadInspectionQ();
						    	
						    	backNavMat = "Mob22InsLot";
						    	var appM = sap.ui.getCore().byId("myApp"); 
								appM.to("idMOB22InitView");
								sap.ui.getCore().byId("lblMatnrMOB22Desc").setText("");
						    	var app = sap.ui.getCore().byId("splitAppInsCreate");  
						    	
						    	//batch visibility 
						    	 sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(false);
								 sap.ui.getCore().byId("batch").setVisible(false);
									
						    	 app.toMaster("idMOB22Ini");
								 app.toDetail("idMOB22Det");
							   
								//app.toma
						    }
						  }) ,
						  
						  new sap.m.StandardTile({
								//id : "tile1",
							    icon : "newicon/ico_enterinspectionresults.png",
							    number : "6",
							   // numberUnit : "Maintenence",
							    title : "{i18n>EnterInspTitle}",
							    info : "{i18n>EnterInspInfo}",
							    infoState: "Error" ,
							    
							    press : function(evt)
							    {
							    	
							    	oController.clearInspInputs();
							    	
							    	var appM = sap.ui.getCore().byId("myApp"); 
							    	
									appM.to("idMOB21InitView12");
							  	    var app = sap.ui.getCore().byId("splitAppInsCreate1");  
							    	 app.toMaster("idMOB21Mas");
									 app.toDetail("idBlankScreen");
									 
									 
									 
							    }
							  }),
							  
							  new sap.m.StandardTile({
								 // id : "tile2",
								    icon : "newicon/ico_labelprint.png",
								    number : "7",
								   // numberUnit : "Production",
								    title : "{i18n>LabPrnt}",
								    info : "{i18n>Prnt_labl}",
								    infoState: "Error",
								    press : function(evt){
								    	var app = new sap.ui.getCore().byId("myApp");
								    	app.to("idMOB29LabelPrintingView");
								    	
								    	
								    	
								    	
								    }
								  }),
								
	      ]*/
	    });
	  /* tileContainer.addTile(matSrchTile);
	   tileContainer.addTile(createNotiTile);
	   tileContainer.addTile(notiListTile);
	   tileContainer.addTile(createInspectionTile);
	   tileContainer.addTile(entInstile);
	   tileContainer.addTile(labelPrintTile);
	  */
	   
	   this.page = new sap.m.Page({
		   id : "MainGrid-Quality",
			title: "{i18n>GridSubMenQmTit}",
			content: [
			          	tileContainer
					],
					showNavButton: true,
					enableScrolling: false,
		            navButtonTap:function(){  
		            	
		         
		            	
		            	
		            	
		            	
		                           app = sap.ui.getCore().byId("myApp");  
		                           app.to("idGrid");  
		            }  
		});
	    
 		return this.page;
	
		
	}

});
