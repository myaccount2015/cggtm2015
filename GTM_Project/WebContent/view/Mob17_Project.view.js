sap.ui.jsview("com.cg.gtm.view.Mob17_Project", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob17_Project
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob17_Project";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob17_Project
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var listProject = new sap.m.List({
			 id : "idprojectlistmob17",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onCommonProjectSel_mob17,
		      items: {
		        path: "/MOB18CustProj",
		        template: new sap.m.StandardListItem({
		          title: "{projName}",
		          description : "{projNo}",
		           iconDensityAware: false,
		          iconInset: false
		         
		        })
		      }
		 }).addStyleClass("paddingBottom_15");
		
		var back =  new sap.m.Button({
	         
	         type: sap.m.ButtonType.Emphasized,
	         text: "{i18n>cancel}",
	         tap : function() {
	        	//Mobile Version
	        	 if(g_runningOnPhone == true){
	        		 
	 	        		var app = sap.ui.getCore().byId("myApp");  
	 	          	  	app.to("idMOB17_MasterActionPage");
	 	        	 
	 	        			
	        	 }
	        		//var deselect = sap.ui.getCore().byId("listPlants");	
	        	//	deselect.removeSelections();
	        	 else{
	        		
	 	        		var app = sap.ui.getCore().byId("splitAppMOB17");  
	 	          	  	app.toMaster("idMOB17_MasterActionPage");
	 	        	 
	        	 }
	        	 
	         }
		 
	});
		
		return new sap.m.Page({
			title: "Project List",
			 headerContent :[back],
			content: [
			          listProject
			],
			showNavButton : false,
			navButtonTap:function(){  
				//var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	//app.toMaster("idMob18Scrappage");
			},
		});
	}
});