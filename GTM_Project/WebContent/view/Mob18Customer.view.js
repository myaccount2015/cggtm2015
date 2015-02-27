sap.ui.jsview("com.cg.gtm.view.Mob18Customer", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Customer
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Customer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Customer
	*/ 
	createContent : function(oController) {
		
		var Mob18Customer = {"MD18CustomerCollection":
			[
			 {"Customername":"Customer"}, 
			 {"Customername":"Customer1"},
			 {"Customername":"Customer2"},
			 {"Customername":"Customer3"},
			 {"Customername":"Customer4"},
			 {"Customername":"Customer5"},
			 {"Customername":"Customer6"}]};
		
		var oJason4 = new sap.ui.model.json.JSONModel(Mob18Customer);
		
		var listCustomer= new sap.m.List({
			 id : "listcust",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onCustSel,
		      items: {
		        path: "/MD18CustomerCollection",
		        template: new sap.m.StandardListItem({
		          title: "{Customername}",
		         // description : "{plantId}",
		           iconDensityAware: false,
		          iconInset: false
		         
		        })
		      }
		 });
	
			  
		listCustomer.setModel(oJason4);
		
 		return new sap.m.Page({
			title: "Customer",
			content: [
			          listCustomer
			]
		});
	}

});