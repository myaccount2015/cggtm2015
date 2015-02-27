sap.ui.jsview("com.cg.gtm.view.Mob18_Customer", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18_Customer
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18_Customer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18_Customer
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var listCustomer = new sap.m.List({
			 id : "idcustomerlistmob18",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onCommonCustomerSel_mob18,
		      items: {
		        path: "/MOB18CustProj",
		        template: new sap.m.StandardListItem({
		          title: "{custName}",
		          description : "{custNo}",
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
	        		 if(globalCustomerSearchFrom=="MOB18_scrap") {
	 	        		var app = sap.ui.getCore().byId("myApp");  
	 	          	  	app.to("idMOB18Scrapmas");
	 	        	 }else if( globalCustomerSearchFrom == "MOB18_wbs"){
	 	        			var app = sap.ui.getCore().byId("myApp");  
	 	    				app.to("idMOB18WBSmas");
	 	        	 }else if(globalCustomerSearchFrom == "MOB18_cost"){
	 	        		 var app = sap.ui.getCore().byId("myApp");  
	 						app.to("idMOB18Costmas");
	 	        	 } 
	        	 }
	        		//var deselect = sap.ui.getCore().byId("listPlants");	
	        	//	deselect.removeSelections();
	        	 else{
	        		 if(globalCustomerSearchFrom=="MOB18_scrap") {
	 	        		var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	 	          	  	app.toMaster("idMOB18Scrapmas");
	 	        	 }else if( globalCustomerSearchFrom == "MOB18_wbs"){
	 	        			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	 	    				app.toMaster("idMOB18WBSmas");
	 	        	 }else if(globalCustomerSearchFrom == "MOB18_cost"){
	 	        		 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	 						app.toMaster("idMOB18Costmas");
	 	        	 } 
	        	 }
	        	 
	         }
		 
	});
		
		return new sap.m.Page({
			title: "Customer List",
			 headerContent :[back],
			content: [
			          listCustomer
			],
			showNavButton : false,
			navButtonTap:function(){  
				//var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	//app.toMaster("idMob18Scrappage");
			},
		});
	}

});