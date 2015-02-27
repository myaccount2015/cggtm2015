sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30warehouse", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB30.Mob30warehouse
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30warehouse";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB30.Mob30warehouse
	*/ 
	createContent : function(oController) {
		
		var listWhouse = new sap.m.List({
			 id : "idWhouselistmob30",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onWhouse_mob30,
		      items: {
		        path: "/MOB30whouse",
		        template: new sap.m.StandardListItem({
		          title: "{WareHouseNum}",
		          description : "{WareHouseDesc}",
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
	 	          	  	app.to("idMOB30master");
	 	        	
	        	 }
	        		//var deselect = sap.ui.getCore().byId("listPlants");	
	        	//	deselect.removeSelections();
	        	 else{
	        		
	 	        		var app = sap.ui.getCore().byId("idMOB30SplitApp");  
	 	          	  	app.toMaster("idMOB30master");
	 	        	 
	        	 
	         }
	         }
	});
		
 		return new sap.m.Page({
			title: "Warehouse List",
			headerContent :[back],
			content: [
			          	listWhouse
			]
		});
	}

});