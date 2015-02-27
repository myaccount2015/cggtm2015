	sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21TypeList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21PlantList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21TypeList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21PlantList
	*/ 
	createContent : function(oController) {

		// create the data
				
				
				var data = [];
				
				
				data = {"names":
					[
						 {"title":"Type 1"},
						 {"title":"Type 2"},
						 {"title":"Type 3"},
						 {"title":"Type 4"}
					]};
				//var oJason1 = new sap.ui.model.json.JSONModel(item_list);
				// create a Model with this data
		 model = new sap.ui.model.json.JSONModel();
				//model.setData(data);
				
				// create a List control
				    
				var list = new sap.m.List({
					 id : "listTypesMOb21",
				      mode: sap.m.ListMode.SingleSelectMaster,
				      includeItemInSelection: true,
				      selectionChange : oController.typeSel,
				      items: {
				        path: "/modelData",
				        template: new sap.m.StandardListItem({
				        	title: "{InspLotOriginDesc}",
					          description : "{InspLotOriginId}",
					         
				           iconDensityAware: false,
				          iconInset: false ,
				         
				        })
				      }
				 }).addStyleClass("padding-bottom");
				
			 list.setModel(model);
			 
			 var btnBack =  new sap.m.Button({
		         type: sap.m.ButtonType.Back,
		       //  icon : "sap-icon://nav-back",
		         tap : function() {
		        	 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
		          	 app.toMaster("idMOB21Mas");
		         }
			 
		});
			 if( g_runningOnPhone == true)
				 {
				 return new sap.m.Page({
						title: "Type",
						 headerContent :[
						                 new sap.m.Button({
						                	 icon : "sap-icon://nav-back",
					         type: sap.m.ButtonType.Back,
					         tap : function() {
					        	 var appM = sap.ui.getCore().byId("myApp"); 
					       	     appM.to("idMOB21InitView12");
					          	 appM.to("idMOB21Mas");
					         }})
						 
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
						title: "Type",
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