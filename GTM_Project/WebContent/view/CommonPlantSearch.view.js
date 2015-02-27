sap.ui.jsview("com.cg.gtm.view.CommonPlantSearch", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.CommonPlantSearch
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.CommonPlantSearch";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.CommonPlantSearch
	*/ 
	createContent : function(oController) {
		
		var listPlants = new sap.m.List({
			 id : "listPlantsCommon",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onCommonPlantSel,
		      items: {
		        path: "/ModelPlantCommon",
		        template: new sap.m.StandardListItem({
		          title: "{plantName}",
		          description : "{plantId}",
		           iconDensityAware: false,
		          iconInset: false
		         
		        })
		      }
		 }).addStyleClass("paddingBottom_15");
		
 		return new sap.m.Page({
			title: "Plant List",
			content: [
			          listPlants
			],
			showNavButton : true,
			navButtonTap:function(){  
				if(globalPlantSearchFrom=="MOB23"){
				
				if ( g_runningOnPhone == true)
				{
					var app = sap.ui.getCore().byId("myApp"); 
				//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
					app.to("idMob23InitialScreen");
				}
			 
				else
					{
					var app = sap.ui.getCore().byId("idMOB23SplitApp"); 
					app.to("idMOB23Matmaster");
					}
			}
				else if(globalPlantSearchFrom=="MOB30"){
					if ( g_runningOnPhone == true)
					{
						var app = sap.ui.getCore().byId("myApp"); 
					//	var idMOB30master = sap.ui.getCore().byId("idMOB30master"); 
						app.to("idMob30InitialScreen");
						
					}else{
						var app = sap.ui.getCore().byId("idMOB30SplitApp"); 
						app.to("idMOB30master");	
					}
				
					}
				
				else if (globalPlantSearchFrom ==  "MOB19")
					{
					 if ( g_runningOnPhone == true)
					 {
							var app = sap.ui.getCore().byId("myApp"); 
							app.to("idMob19InitialScreen");
							//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
							//app.to(idMOB19MasPg);
						}		else
						{
							 var app = sap.ui.getCore().byId("idMOB19SplitApp");  
					         app.toMaster("idMOB19MasPg");
									}
					}
					  else if(globalPlantSearchFrom =="MOB18") {
					
							  if ( g_runningOnPhone == true)
								{
									var app = sap.ui.getCore().byId("myApp"); 
									//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
									app.to("idMOB18Locmas");
								}else{
									var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
									app.to("idMOB18Locmas");	
								} 
						  }else if(globalPlantSearchFrom=="MOB18_cost") {
							  if ( g_runningOnPhone == true)
								{
									var app = sap.ui.getCore().byId("myApp"); 
									//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
									app.to("idMOB18Costmas");
								}else{
									var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
									app.to("idMOB18Costmas");	
								}  
						  }
						  else if(globalPlantSearchFrom=="MOB18_WBS") {
							  if ( g_runningOnPhone == true)
								{
									var app = sap.ui.getCore().byId("myApp"); 
									//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
									app.to("idMOB18WBSmas");
								}else{
									var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
									app.to("idMOB18WBSmas");	
								}   
						  }else if(globalPlantSearchFrom=="MOB18_scrap") {
							  if ( g_runningOnPhone == true)
								{
									var app = sap.ui.getCore().byId("myApp"); 
									//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
									app.to("idMOB18Scrapmas");
								}else{
									var app = sap.ui.getCore().byId("idMOB18SplitApp"); 
									app.to("idMOB18Scrapmas");	
								} 
						  } 
					  
							  else if(globalPlantSearchFrom = "MOB17") {
								  if ( g_runningOnPhone == true)
									{
										var app = sap.ui.getCore().byId("myApp"); 
										//var idMOB19MasPg = sap.ui.getCore().byId("idMOB19MasPg");  
										app.to("idMOB17_MasterActionPage");
									}else{
										var app = sap.ui.getCore().byId("splitAppMOB17"); 
										app.to("idMOB17_MasterActionPage");	
									} 
							  }
					
			
			
				else{
					var app = sap.ui.getCore().byId("myApp"); 
					app.to("idGridSubMenuIMWM");
				}
			},
		});
}

});
