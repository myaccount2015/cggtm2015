sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21Vendor", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21Vendor
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21Vendor";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21Vendor
	*/ 
	createContent : function(oController) {

		var data = [];
		
		
		data = {"names":
			[
				 {"title":"Vendor"},
				 {"title":"Vendor1"},
				 {"title":"Vendor2"},
				 {"title":"Vendor3"},
				 
				 {"title":"Vendor4"},
			
				 {"title":"Vendor5"},
			
				 {"title":"Vendor6"},
				
			
				 {"title":"Vendor7"},
			
				 {"title":"Vendor8"},
				 {"title":"Vendor9"},
				 {"title":"Vendor10"},
				 {"title":"Vendor11"},
				 {"title":"Vendor12"},
				 {"title":"Vendor13"},
				 {"title":"Vendor14"},
				 {"title":"Vendor15"},
			
				
				 ]};
		//var oJason1 = new sap.ui.model.json.JSONModel(item_list);
		// create a Model with this data
		var model = new sap.ui.model.json.JSONModel();
		model.setData(data);
		
	
		
		// create a List control
		    
		var list = new sap.m.List({
			  id : "venlist",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.vendorSel,
		      items: {
		        path: "/itemsVendor",
		        template: new sap.m.StandardListItem({
		        	 title: "{venid}",
			          description : "{vendes}",
		           iconDensityAware: false,
		          iconInset: false ,
		         
		        })
		      }
		 });
		
	// list.setModel(model);
	 //list.addStyleClass("List");
	 
	 var btnBack =  new sap.m.Button({
         
         type: sap.m.ButtonType.Back,
       //  icon : "sap-icon://nav-back",
         tap : function() {
                   
        	/*	ostListItem1.setDescription('');
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
           	    back_view_lab.setVisible(false);
           	    */
        	 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
          	 app.toMaster("idMOB21Mas");
          
           	   // oSplitApp.toMaster(Mainpage);
         }
	 
});
		if( g_runningOnPhone == true)
			{
			return new sap.m.Page({
				title: "Vendor Location",
				 headerContent :[ new sap.m.Button({
					// icon : "sap-icon://nav-back",
			         type: sap.m.ButtonType.Back,
			    
			         tap : function() {
			             
			        	 var app = sap.ui.getCore().byId("myApp");  
			          	 app.to("idMOB21Mas");
			          
			         }
				 
			})
				],
				content: [
				          list
				],
				footer: new sap.m.Bar({
	                
				})
			});
			}
		else
		{
			return new sap.m.Page({
				title: "Vendor Location",
				 headerContent :[btnBack],
				content: [
				          list
				],
				footer: new sap.m.Bar({
	                
				}).addStyleClass("footer"),
			});	
		}
 		
	}

});