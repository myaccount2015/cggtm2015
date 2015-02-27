sap.ui.jsview("com.cg.gtm.view.Mob17customer", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob17customer
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob17customer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob17customer
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var listCustomer = new sap.m.List({
			 id : "listCustomerCommon",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onCommonCustomerSel,
		      items: {
		        path: "/MOB17CustProj",
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
	        	 
	        		//var deselect = sap.ui.getCore().byId("listPlants");	
	        	//	deselect.removeSelections();
	        		
	        		var app = sap.ui.getCore().byId("splitAppMOB17");  
	          	  	app.toMaster("idMOB17_MasterActionPage");
	         }
		 
	});
		
 		return new sap.m.Page({
			title: "Customer",
			 headerContent :[back],
			content: [
			          listCustomer
			],
 		showNavButton : false,
		navButtonTap:function(){  
			var app = sap.ui.getCore().byId("splitAppMOB17");  
      	  	app.toMaster("idMOB17_MasterActionPage");
		},
		});
	}

});