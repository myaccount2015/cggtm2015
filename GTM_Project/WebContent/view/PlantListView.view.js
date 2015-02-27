sap.ui.jsview("com.cg.gtm.view.PlantListView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.PlantListView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.PlantListView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.PlantListView
	*/ 
	createContent : function(oController) {
var data = [];
		
		// create a Model with this data
		/*var model = new sap.ui.model.json.JSONModel();
		model.setData(data);*/
		
		// create a List control

/*var oMD24CollectionPlant1 = {"MD24CollectionPlant1":
	[{"plantName":"Ashford"},
	 {"plantName":"Bounds Green - London"},
	 {"plantName":"Central Warehouse"},
	 {"plantName":"Clay Hills-Aberdeen"},
	 {"plantName":"Craigentinny-Edingburgh"},
	 {"plantName":"Doncaster"},
	 {"plantName":"Ferme Park-London"},
	 {"plantName":"Heaton-Newcastle"},
	 {"plantName":"Holborn"},
	 {"plantName":"Inverness"},
	 {"plantName":"Neville Hill-Leeds"},
	 {"plantName":"Newton Aycliffe"},
	 {"plantName":"North Pole"},
	 {"plantName":"Polmadie-Glasgow"},
	 {"plantName":"Stoke Gifford"},
	 {"plantName":"Swansea"}]};

var model = new sap.ui.model.json.JSONModel();
model.setData(oMD24CollectionPlant1);
listPlants.setModel(model);
*/


//var oJason4 = new sap.ui.model.json.JSONModel(oMD24CollectionPlant1);
		    
		var listPlants = new sap.m.List({
			 id : "listPlants",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onPlantSel,
		      items: {
		        path: "/ModelPlant",
		        template: new sap.m.StandardListItem({
		          title: "{plantName}",
		          description : "{plantId}",
		           iconDensityAware: false,
		          iconInset: false
		         
		        })
		      }
		 }).addStyleClass("paddingBottom_15");
	
		
	//	listPlants.setModel(model);
	 //list.addStyleClass("List");
	 
	 var b =  new sap.m.Button({
         
         type: sap.m.ButtonType.Emphasized,
         text: "{i18n>cancel}",
         tap : function() {
        	 
        		var deselect = sap.ui.getCore().byId("listPlants");	
        		deselect.removeSelections();
        		
        	 var app = sap.ui.getCore().byId("splitAppMaterial");  
        	 app.toMaster("idMob24MaterialSearchInput");
         }
	 
});
	 return new sap.m.Page({
			title: "{i18n>plnt_head}",
			 headerContent :[b],
			content: [
			          listPlants
			]
		});
	}

});