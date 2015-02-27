sap.ui.jsview("com.cg.gtm.view.Drop1_MOB31.Mob31MasterSearchView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob31documentdisplay.Mob31MasterSearchView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB31.Mob31MasterSearchView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob31documentdisplay.Mob31MasterSearchView
	*/ 
	createContent : function(oController) {
		var oSearch = new sap.m.SearchField({
		    placeholder: "Search",
		    liveChange: oController.filterList
		  });
		
		var oProductInfo = 
			{"ProductCollection":
				[
					 {"num":"300000001"},
					 {"num":"300000002"},

					
				]
			};
			
			
			var list1 = new sap.m.List({
				
				id: "list",
				growing : true,//List Growing 

				growingThreshold : 4,

				growingScrollToLoad : false,
				
	//headerText: "Purchase orders",
			      items: {
			          path: "/ProductCollection",
			          template: new sap.m.ObjectListItem({
			            title : "{num}",
			            type : sap.m.ListType.Navigation,
			            press : oController.onClick ,
			            //numberUnit : "CurrencyCode",
			     
			          })
			        }
			    });
			
		
			
			var oJason1 = new sap.ui.model.json.JSONModel(oProductInfo);
			
			list1.setModel(oJason1);
		
 		return new sap.m.Page({
			title: "Search Document",
			content: [
oSearch,list1
			],
			
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
		});
	}

});