sap.ui.jsview("com.cg.gtm.view.GridSubMenuPM", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenuPM
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenuPM";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenuPM
	*/ 
	createContent : function(oController) {
		
	    // create tile container
		
		var  ORDCONF = new sap.m.StandardTile({
			    id : "ORDCONF2",
			    icon : "icon/ico_orderconfirm.png",
			//    number : "33",
			    //numberUnit : "Quality",
			    title : "My Order List",
			   // info : "i18n>PpOrdCnf}",
			//    infoState: "{i18n>Sc}"
			  });
		 
	   var tileContainer = new sap.m.TileContainer({
		   id :"tileconPM",
		  // id :"PM",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	      tiles : [
	   ]
	   });
	      
	               
	               
	  		varordtile = 	 new sap.m.StandardTile({
	  					id : "ORDCONF",
	  				    icon : "icon/ico_orderlist.png",
	  				//    number : "31",
	  				   // numberUnit : "Maintenence",
	  				    title : "My Order List",
	  				    info : "List of all work orders",

	  				    press : function()
	  				    {
	  				    	//sap.ui.getCore().byId("MOB03ComponentList").unbindItems();
	  				    //	sap.ui.getCore().byId("myApp").to("MOB03Initial");
/****************************************************************************/
	  				    	sap.ui.getCore().byId("MOB07USEAST").setText("Use Asset");
	  				    	 if(g_runningInTablet || g_runningOnPhone) 
	  						{
	  				    	   var dataArrIni = [];
	  				    	   readLocalFileOnDevice("AllJobs.json", function(funCall)
	  						
	  								{
	  							
	  				    		 var allJobsArrayIni  = JSON.parse(funCall);
	  							 var allJobsArray = allJobsArrayIni.allJobs;
	  				    		  g_open = 0;
	  		  						g_closed = 0;
	  		  						g_ACT = 0;
	  		  						g_HOLD = 0;

	  		  						//var allJobsData = allJobs();
	  		  						//var allJobsArray = allJobsData.d.results;
	  		  						var jobsMemArrayA = []; // Accepted
	  		  						var jobsMemArrayC = []; // Completed
  		  						for (var int = 0; int < allJobsArray.length; int++) {
											
	if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
	 {
		if ("DISP" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) ||
					"HOLD" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) ||
					"ACPT" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo)) {
					g_open++;
					//jobsMemArrayA.push(allJobsArray[int-1].OrderNo+"_"+allJobsArray[int-1].ActivityNo);
				} else if ("COMP" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo)) {
					g_closed++;
					//jobsMemArrayC.push(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo);
				}

				if ("ACPT" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo)) {
					g_ACT++;
				}

				if ("HOLD" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo)) {
					g_HOLD++;
				}
	 }
	else
		{if (int != allJobsArray.length) {

	  		  								if (undefined == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo)) {
	  		  									window.localStorage.setItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo, allJobsArray[int].CurrentStatus);
	  		  								}
	  		  							}

	  		  							if (int != 0) {

	  		  								if ("DISP" == allJobsArray[int].CurrentStatus  ||
	  		  									"HOLD" == allJobsArray[int].CurrentStatus  ||
	  		  									"ACPT" == allJobsArray[int].CurrentStatus ) {
	  		  									g_open++;
	  		  									//jobsMemArrayA.push(allJobsArray[int-1].OrderNo+"_"+allJobsArray[int-1].ActivityNo);
	  		  								} else if ("COMP" == allJobsArray[int].CurrentStatus ) {
	  		  									g_closed++;
	  		  									//jobsMemArrayC.push(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo);
	  		  								}

	  		  								if ("ACPT" == allJobsArray[int].CurrentStatus) {
	  		  									g_ACT++;
	  		  								}

	  		  								if ("HOLD" == allJobsArray[int].CurrentStatus) {
	  		  									g_HOLD++;
	  		  								}

	  		  							}

	  		  						}
}
	  		  						
/*
	  		  						var stringifiedJobsA = JSON.stringify(jobsMemArrayA);
	  		  						var stringifiedJobsC = JSON.stringify(jobsMemArrayC);
	  		  						window.localStorage.setItem("JOBSA", stringifiedJobsA);
	  		  						window.localStorage.setItem("JOBSC", stringifiedJobsC);*/
  		  						
	  		  						sap.ui.getCore().byId("myApp").to("MOB03Initial");
	  		  						sap.ui.getCore().byId("mob03a").setCounter(g_open);
	  		  						sap.ui.getCore().byId("mob03c").setCounter(g_closed);
	  							  });
	  								}
	  						}
	  						
	  				    	   
	  				    	  
	  				  });
	  				  

	  				

	  				var pmnoti =  new sap.m.StandardTile({

	  					   id : "PMNOTI",
	  					    icon : "icon/ico_Orderdetails.png",
	  					 //   number : "32",
	  					   // numberUnit : "Production",
	  					    title : "Create Notification",
	  					    info : "Raise a notification",
	  					    press : function()
	  					    {
	  					    	sap.ui.getCore().byId("MOB07USEAST").setText("Use Asset");
	  					    	oController.clearMOB01();
	  					    	var button= sap.ui.getCore().byId("MOB01SegmentedButtonTrain");
	  							sap.ui.getCore().byId("MOB01SegmentedButton").setSelectedButton(button);
	  							button.firePress();
	  					    /*	debugger;
	  					    	
	  					    	var data=[];
	  					    	
	  					    	var model= new sap.ui.model.json.JSONModel(data);
	  					    	sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").setModel(model);
	  					    	sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").setModel(model);
	  					   
	  					    	//sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").unbindItems();
	  					    	//sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").unbindItems();
	  					    	 g_MOB07Entry = "MOB01";
	  					    	 g_MobileNavigationId = "MOB01MasterPage";
	  					    	 
	  					    	sap.ui.getCore().byId("MOB01FleetInput").setValue(window.localStorage.getItem("IHG"));
								//sap.ui.getCore().byId("MOB07FleetInput").setValue(window.localStorage.getItem("IHG"));
								
	  					    	sap.ui.getCore().byId("myApp").to("MOB01Initial");
	  					    	
	  					    	//sap.ui.getCore().byId("MOB01FleetInput").setValue("");
	  							sap.ui.getCore().byId("MOB01FleetInput").setEnabled(true);

	  							sap.ui.getCore().byId("MOB01TrainInput").setValue("");
	  							sap.ui.getCore().byId("MOB01TrainInput").setEnabled(true);

	  							sap.ui.getCore().byId("MOB01CarInput").setValue("");
	  							sap.ui.getCore().byId("MOB01CarInput").setEnabled(false);

	  							sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
	  							sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(false);

	  							sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
	  							sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
	  							
	  							sap.ui.getCore().byId("MOB01BRKDWNT").setSelected(false);
	  							
	  							sap.ui.getCore().byId("MOB01DepotInput").setValue("");
	  							sap.ui.getCore().byId("MOB01AREA").setValue("");*/
	  						
	  					    }
	  					//    infoState: "{i18n>Er}"
	  					  });
	  					  
	  					  
	  				var pmmsr =  new sap.m.StandardTile({
	  					    id : "PMMSR",//MOB33
	  					    icon : "icon/ico_orderconfirm.png",
	  					//    number : "33",
	  					    //numberUnit : "Quality",
	  					    title : "Measurement",
	  					    info : "Enter measurement data",
	  					  press : function()
	  					    {
	  						g_MOB07Entry = "MOB33";
	  						g_MOB33FROMMAIN =  true ;
	  						sap.ui.getCore().byId("MOB07USEAST").setText("Use Asset");
	  					    	sap.ui.getCore().byId("myApp").to("MOB33Initial");
	  					    	
	  					    	
	  					    	/*sap.ui.getCore().byId("MOB33EQD").setValue("");
	  					    	sap.ui.getCore().byId("MOB33EQT").setValue("");
	  					    	sap.ui.getCore().byId("MOB33FleetInput").setValue("");
	  							sap.ui.getCore().byId("MOB33FleetInput").setEnabled(true);

	  							sap.ui.getCore().byId("MOB33TrainInput").setValue("");
	  							sap.ui.getCore().byId("MOB33TrainInput").setEnabled(false);

	  							sap.ui.getCore().byId("MOB33CarInput").setValue("");
	  							sap.ui.getCore().byId("MOB33CarInput").setEnabled(false);

	  							sap.ui.getCore().byId("MOB33ZoneInput").setValue("");
	  							sap.ui.getCore().byId("MOB33ZoneInput").setEnabled(false);

	  							sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
	  							sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(false);
	  						
	  					    */}
	  					   // info : "i18n>PpOrdCnf}",
	  					//    infoState: "{i18n>Sc}"
	  					  });
	  					  
	  				var pmst = 	 new sap.m.StandardTile({
	  						   id : "PMAST",
	  						    icon : "icon/ico_ordercomponents.png",
	  						//    number : "34",
	  						   // numberUnit : "Inventory",
	  						    title : "Asset List",
	  						    info : "Train and Depot Assets",
	  						  press : function()
		  					    {
		  					    	
		  					    	sap.ui.getCore().byId("myApp").to("MOB07Initial");
		  					    	//MOB07EQD
		  					    	sap.ui.getCore().byId("MOB07EQD").setValue("");
		  					    	sap.ui.getCore().byId("MOB07EQT").setValue("");
		  					    	sap.ui.getCore().byId("MOB07USEAST").setText("Back");
		  					    	//sap.ui.getCore().byId("MOB01FleetInput").setValue(window.localStorage.getItem("IHG"));
		  					    	
									sap.ui.getCore().byId("MOB07FleetInput").setValue(window.localStorage.getItem("IHG"));
									
		  					    	sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07Master");
		  					    	//sap.ui.getCore().byId("MOB07FleetInput").setValue("");
		  							sap.ui.getCore().byId("MOB07FleetInput").setEnabled(true);

		  							sap.ui.getCore().byId("MOB07TrainInput").setValue("");
		  							sap.ui.getCore().byId("MOB07TrainInput").setEnabled(true);

		  							sap.ui.getCore().byId("MOB07CarInput").setValue("");
		  							sap.ui.getCore().byId("MOB07CarInput").setEnabled(false);

		  							sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
		  							sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(false);

		  							sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
		  							sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);
		  							
		  							
		  							
		  							sap.ui.getCore().byId("MOB07DepotInput").setValue("");
		  							sap.ui.getCore().byId("MOB07DepotInput").setEnabled(true);
		  							
		  							sap.ui.getCore().byId("MOB07DepotAreaInput").setValue("");
		  							sap.ui.getCore().byId("MOB07DepotAreaInput").setEnabled(false);
		  						
		  					    
		  					    }
	  						  //  info : "{i18n>PpOrdCom}",
	  						//    infoState: "{i18n>Sc}"

	  						  });
	  						  
	  					var pmadmn = 	new sap.m.StandardTile({
			  					id: "PMADMN",
			  					title: "Transaction View",
								  icon: "sap-icon://feed",
								  info : "All queue transactions",
								  press: function () {
							    	sap.ui.getCore().byId("D3QURefreshButton").firePress();
							    	sap.ui.getCore().byId("myApp").to("pageD3Q");
			  					}
			  				}) ;
	  						
	  						/*new sap.m.StandardTile({
		  						   id : "PMADMN",
		  						    icon : "icon/ico_ordercomponents.png",
		  						//    number : "34",
		  						   // numberUnit : "Inventory",
		  						    title : "MOB 37",
		  						  press : function()
			  					    {

								    	sap.ui.getCore().byId("D3QURefreshButton").firePress();
								    	sap.ui.getCore().byId("myApp").to("pageD3Q");
				  					
		  							  
			  					    }
		  						  //  info : "{i18n>PpOrdCom}",
		  						//    infoState: "{i18n>Sc}"
		  						  }),*/
			  						
	     

	  						 // })
	     // ]

	   // });
	   
	  					/*tileContainer.addTile(varordtile);
	  					tileContainer.addTile(pmmsr);
	  					tileContainer.addTile(pmnoti);
	  					tileContainer.addTile(pmst);
	  					tileContainer.addTile(pmadmn);*/
	   this.page = new sap.m.Page({
			title: "Hitachi Sub Menu PM",
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