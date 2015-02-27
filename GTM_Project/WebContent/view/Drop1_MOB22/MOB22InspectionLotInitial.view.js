sap.ui.jsview("com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotInitial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB22InspectionLotInitial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotInitial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB22InspectionLotInitial
	*/ 
	//Done
	createContent : function(oController) {
		 
		this.setHeight("100%");
		//var lots = "Lots ".concat(globalCount.toString());
		
		
		/*
		 		panel1 = new sap.m.Panel();
		 		panel1.addStyleClass("panel");*/
				
				/*item_list = {"list_22":
					[
						 {"title":"First Inspection Lot","date":"01/01/2014","matnum":"Material Number"},
						 {"title":"Second Inspection Lot","date":"03/04/2014","matnum":"Material Number"},
						 {"title":"Third Inspection Lot","date":"05/05/2014","matnum":"Material Number"},
						 {"title":"Fourth Inspection Lot","date":"06/07/2014","matnum":"Material Number"},
						 {"title":"Fifth Inspection Lot","date":"07/09/2014","matnum":"Material Number"},
						 {"title":"Sixth Inspection Lot","date":"08/09/2014","matnum":"Material Number"},
						 {"title":"Seventh Inspection Lot","date":"08/09/2014","matnum":"Material Number"},
						 {"title":"Eighth Inspection Lot","date":"08/09/2014","matnum":"Material Number"},
						 {"title":"Ninth Inspection Lot","date":"08/09/2014","matnum":"Material Number"},
						
						 
						 ]};
				var oJason1 = new sap.ui.model.json.JSONModel(item_list);*/
				
			//	oJason1.
		
			var  listInspLot = new sap.m.List({
				 id : "mob22iniList",
				 mode: sap.m.ListMode.SingleSelectMaster,
			      includeItemInSelection: true,
			      rememberSelections : false,
			     select : onSelect,
		 items: {				        	 
		path: "/list_22",
		template: new sap.m.StandardListItem({
		title: "{lotnum}",
		//description: "Material Number \n fjhsdgsh ",
		info : "{matnum}",
		icon : "{icon}",
		description: "{time}",
		//footerText  : "fgvhfghf",
		type : sap.m.ListType.Navigation,
		//press : onSelect
		//press : oController.onClick 
		})
		}
			
		 
			}).addStyleClass("paddingBottom_15");
				
				
				 oSearch = new sap.m.SearchField({
					 id:"Mob24-search",
				    placeholder: "Search",
				    liveChange: oController.filterList
				  });
		 		return new sap.m.Page({
					title: "Created Inspection Lots",
					content: [
					          
		oSearch,			          
		listInspLot

					
					],
					headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
					
					showNavButton: false,
					showFooter: true,
					
		            navButtonTap:function(){ 
		  
		            		var app = sap.ui.getCore().byId("myApp");  
		                    app.to("idGridSubMenuQM");
		            	},
		            	
		            	footer: new sap.m.Bar({
							
						}).addStyleClass("footer")
				});
			
		
		
	
	}

});