sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21Material", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21Material
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21Material";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21Material
	*/ 
	createContent : function(oController) {
var data = [];
		
		
		data = {"names":
			[
				 {"title":"Material"},
				 {"title":"Material1"},
				 {"title":"Material2"},
				 {"title":"Material3"},
				 
				 {"title":"Material4"},
			
				 {"title":"Material5"},
			
				 {"title":"Material6"},
				
			
				 {"title":"Material7"},
			
				
			
				
				 ]};
		//var oJason1 = new sap.ui.model.json.JSONModel(item_list);
		// create a Model with this data
		var model = new sap.ui.model.json.JSONModel();
		model.setData(data);
		
	
		
		// create a List control
		    
		var list = new sap.m.List({
			 
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.matSel ,
		      items: {
		        path: "/names",
		        template: new sap.m.StandardListItem({
		          title: "{title}",
		           iconDensityAware: false,
		          iconInset: false ,
		         
		        })
		      }
		 });
		
	 list.setModel(model);
	 //list.addStyleClass("List");
	 
	 var btnBack =  new sap.m.Button({
         
         type: sap.m.ButtonType.Back,
    
         tap : function() {
                   
        	 
    /*    	 ostListItem1.setDescription('');
     		//ostListItem1.setBackground("#1A3444");
     	    ostListItem1.setIcon("");
     	    ostListItem2.setDescription('');
     		//ostListItem1.setBackground("#1A3444");
     	    ostListItem2.setIcon("");
     	    ostListItem3.setDescription('');
     		//ostListItem1.setBackground("#1A3444");
     	    ostListItem3.setIcon("");
     	    ostListItem4.setDescription('');
     		//ostListItem1.setBackground("#1A3444");
     	    ostListItem4.setIcon("");
     	    bu1.setVisible(false);
        	    bu2.setVisible(false);
        	    back_view_lab.setVisible(false);*/
        	 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
          	 app.toMaster("idMOB21Mas");
          	
        	  //  oSplitApp.toMaster(Mainpage);
         }
	 
});
	 return new sap.m.Page({
			title: "Material Location",
			 headerContent :[btnBack],
			content: [
			          list
			]
		});
	}

});