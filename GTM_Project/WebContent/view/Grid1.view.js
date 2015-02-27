sap.ui.jsview("com.cg.gtm.view.Grid1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.Grid1
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Grid1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.Grid1
	*/ 
	createContent : function(oController) {
		
	    // create tile container
	   var tileContainer = new sap.m.TileContainer({
		   id :"tilecon",
	      tileDelete : function (evt) {/*
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      */}
	   
	   });
	      
	     
			var qualityTile = new sap.m.StandardTile({
				id : "QU",
			   icon : "newicon/ico_quality.png",
			   // icon : "img//images (2).jpg",
			    //number : "1",
			   // numberUnit : "Maintenence",
			    visible : false ,
			    title : "{i18n>Qulty}",
			    info : "{i18n>Qlty_mag}",
			   // infoState: "{i18n>Er}",
			    press:function(evt) {
			    	  g_MobileNavigationId =  "Mob00-BackNavButton";
			    	//alert(sap.ui.getCore().byId("tilecon3").getTiles());
			    	oController.getImgMetadata();
			    	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuQM");
			    }
			  });
			
			
			var invTile =  new sap.m.StandardTile({
					    id : "IN",
					    icon : "newicon/ico_inventory1.png",
					   // number : "2",
					    visible : false ,
					    //numberUnit : "Quality",
					    title : "{i18n>Inv}",
					    info : "{i18n>InvWarHs}",
					 //   infoState: "{i18n>Sc}",
					    press:function(evt) {
					        g_MobileNavigationId =  "Mob00-BackNavButton";
					    	var app = sap.ui.getCore().byId("myApp"); 
							app.to("idGridSubMenuIMWM");
					    }
					  });
			
			var prodTile =	new sap.m.StandardTile({
							  id : "PP",
							    icon : "newicon/ico_production.png",
							  //  number : "3",
							    visible : false ,
							  //  numberUnit : "Goods",
							    title : "{i18n>Prod}",
							    info : "{i18n>ProMag}",
							//    infoState: "{i18n>Sc}",
							    press:function(evt) {
							    	  g_MobileNavigationId =  "Mob00-BackNavButton";
							    	var app = sap.ui.getCore().byId("myApp"); 
									app.to("idGridSubMenuPM");
							    }
							  });
			var maintainanceTile = new sap.m.StandardTile({
							id : "PM",
						    icon : "newicon/ico_maintenance1.png",
						 //   number : "4",
						    visible : false ,
						   // numberUnit : "Maintenence",
						    title : "Maintenance",
						    info : "Train/Facilities Maintenance (PM)",
						   // infoState: "{i18n>Er}",
						    press:function(evt) {
						    	//getJobList();
						    	//oController.getUserDefaults();
						    	  g_MobileNavigationId =  "Mob00-BackNavButton";
						    	var app = sap.ui.getCore().byId("myApp"); 
								app.to("idGridSubMenuPM");
						    }
						  });
			//tileContainer.addTile(maintainanceTile);
			/*tileContainer.addTile(qualityTile);
			tileContainer.addTile(invTile);
			tileContainer.addTile(prodTile);
			tileContainer.addTile(maintainanceTile);*/
			
			//tileContainer.addTile(maintainanceTile);
			//tileContainer.addTile(prodTile);
			
			
	   //   ]
	   // });
	   //////////////////////////////////////////////////////////////////////////////////////////////////////////
	   var msgDialog = new sap.m.Dialog({
       	title: "Warning",
       	 icon: "img/download_1.jpg",
       	type: sap.m.DialogType.Message,
       	content: [
       	new sap.m.Text({
       	text:"Are you sure you want to logoff?"
       	}),
       	],
       	leftButton: new sap.m.Button({
       	text: "No",
       	press: function () {
       	msgDialog.close();
       	var app = sap.ui.getCore().byId("myApp"); 
		app.to("idGrid");
       	//idFirstLogon1
       	}
       	}),
       	rightButton: new sap.m.Button({
       	text: "Yes",
       	press: function () {
       		
       		g_MobileNavigationId = "";

       		sap.ui.getCore().getElementById("tilecon").removeAllTiles();
       		if(g_runningInTablet || g_runningOnPhone) {
       			//clearappCache(); //Clearing the cache
       			//CustomPlugin.callNativeMethod(); //Clearing App Data
       			window.location.reload(); //Reloading the Application
				navigator.splashscreen.show()
       		}else {
       			
       		
       			$.ajax({
                    url: getUrl("/sap/public/bc/icf/logoff"),
                    async: false,
                    
                    username: getUserName(),
                    password: getPassword(),
                    
                    statusCode: {
                                    401: function() {
                                                    // prevent authentication dialog with empty function
                                    }
                    }
			    }).complete(function () {
			
			    });

       		}
       		
       		msgDialog.close();
       	 var lastDate = window.localStorage.getItem("lastDate");
     	
       	 var today = new Date();
       		var dd = today.getDate(); 
       		var mm = today.getMonth()+1; 
       		var yyyy = today.getFullYear(); 
       		var currDateString = dd + "/" + mm + "/" + yyyy;
       		
       		var todayDate = new Date(currDateString);	           		
       		var lastIPDate =  new Date(lastDate);
       		var currDate = new Date();
       			var currDateString =   currDate.getTime();
       			var timeDiff = currDateString - lastIPDate ;
       			var diffDays = Math.ceil(timeDiff / (3600)); 
       			sap.ui.getCore().byId("demoswitch").setState(false); 
       			if (diffDays > 604800) //seven days
       				{
       			//	sap.m.MessageBox.show("Please re-enter your credentials to login",sap.m.MessageBox.Icon.ERROR,"Error");
       				
       				var app = sap.ui.getCore().byId("myApp"); 
       				sap.ui.getCore().byId("txtUser").setValue(""); 
       				sap.ui.getCore().byId("txtPass").setValue(""); 
       				sap.ui.getCore().byId("txtPin").setValue(""); 
       	    		app.setInitialPage("idFirstLogon1");
       				app.to("idFirstLogon1");
       				return false;
       				}
       			else
   				{
                    app = sap.ui.getCore().byId("myApp");  	                           
                 	sap.ui.getCore().byId("txtPin1").setValue(""); 
                    app.to("idFirstLogonPin");  
                    var userName = getUserName();
                    sap.ui.getCore().byId("txtUser1").setValue(userName); 
                    sap.ui.getCore().byId("btnLogon").setText("Logon as ".concat(userName)); 
   				}
       			
       		//var app = sap.ui.getCore().byId("myApp"); 
			//app.to("idFirstLogon1");
       		//validateData();
       		
       		
       		
       		/*
	        	msgDialog.close();
	        	busyDialog.open(); //Showing Busy Indicator
	        	setTimeout(function(){
	        		
		        	 * Calling Save Inspection Lot Service
		        	 
		        	oController.saveInspecLot();
		        	busyDialog.close(); // Hide Busy Indicator
		        	msgDialog1.open();
		    	 }, 1000);
       	*/}
       	})
       	});
       /*******************************************************************************************************/
       
       	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	   
	   var btn = new sap.m.Button({
		   text : "save"
	   })
	   
	   this.page = new sap.m.Page({
			//title: "{i18n>ApplicationName}",
			
			content: [
			          	tileContainer
					],
					
					showNavButton: true,
					showHeader : true,
					enableScrolling: false,
					customHeader : new sap.m.Bar({
						contentMiddle : [new sap.m.Label({
							text : "{i18n>ApplicationName}"
						})],
						contentRight : [new sap.m.Button({
							text : "Logoff",
							id: "Grid-logOff",
							 icon : "sap-icon://log",
							press : function(){
								msgDialog.open();
							}
						})]
						
					}),
					footer : new sap.m.Bar({
						contentLeft: [new sap.m.Button({
							text : "Settings",
							
							icon : "sap-icon://settings",
							press : function()
							{
								g_MobileNavigationId =  "Mob00-BackNavButton";
								if ( g_runningOnPhone == true){
									
									var myapp = sap.ui.getCore().byId("myApp");
									    myapp.to("idMob00InitialScreen");//Inside this page Master Screen data available.
								  
									}
									
									else
										{
										
										var myapp = sap.ui.getCore().byId("myApp");
						   				    myapp.to("idMob00InitialScreen");
										
										}
							}
						})],	
						
					}),
					
		            navButtonTap:function(){ 
		            	msgDialog.open()
		           
		           			
		            }  
		});
	    
 		return this.page;
	}

});