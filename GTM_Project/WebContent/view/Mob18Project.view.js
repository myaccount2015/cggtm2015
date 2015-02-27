sap.ui.jsview("com.cg.gtm.view.Mob18Project", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Project
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Project";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Project
	*/ 
	createContent : function(oController) {
		
		var Mob18Project = {"MD18ProjectCollection":
			[
			 {"Projectname":"Project"}, 
			 {"Projectname":"Project1"},
			 {"Projectname":"Project2"},
			 {"Projectname":"Project3"},
			 {"Projectname":"Project4"},
			 {"Projectname":"Project5"},
			 {"Projectname":"Project6"}]};
		
		var oJason4 = new sap.ui.model.json.JSONModel(Mob18Project);
		
		var listProject= new sap.m.List({
			 id : "listpro",
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.onProjectSel,
		      items: {
		        path: "/MD18ProjectCollection",
		        template: new sap.m.StandardListItem({
		          title: "{Projectname}",
		         // description : "{plantId}",
		           iconDensityAware: false,
		          iconInset: false
		         
		        })
		      }
		 });
	
			  
		listProject.setModel(oJason4);
		
		
 		return new sap.m.Page({
			title: "Project",
			
			content: [
			          listProject
			]
		});
	}

});