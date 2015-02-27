sap.ui.jsview("com.cg.gtm.view.Mob15Delivery_Initial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob15Delivery_Initial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob15Delivery_Initial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob15Delivery_Initial
	*/ 
	//done
	
	createContent : function(oController) {
		oMD15Data = {"MD15Collection01":
			[
				 {"title":"FIRST-NOTIFICATION","date":"01/10/2014","matnum":"0000000001","DOJ":"11/03/2002"},
				 {"title":"SECOND-NOTIFICATION","date":"02/10/2014","matnum":"0000000002","DOJ":"04/03/2006"},
				 {"title":"THIDR-NOTIFICATION","date":"03/10/2014","matnum":"0000000003","DOJ":"08/10/2009"},
				 {"title":"FOURTH-NOTIFICATION","date":"04/10/2014","matnum":"0000000004","DOJ":"11/03/2010"},
				 {"title":"FIFTH-NOTIFICATION","date":"05/10/2014","matnum":"0000000005","DOJ":"11/03/2002"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"}
				 
				 ]};
		var oJasonData = new sap.ui.model.json.JSONModel(oMD15Data);
		
		
	listNotification = new sap.m.List({
		id : "myList_cust",         
		         items: {
					path: "/MD15Collection01",
					template: new sap.m.StandardListItem({
					title: "{title}",
					description: "{date}",
					info : "{matnum}",
					type : sap.m.ListType.Navigation,
					press : oController.onClick
					})
					}
	}).addStyleClass("paddingBottom_15");
		
		
		 oSearch = new sap.m.SearchField({
		    placeholder: "Search",
		    liveChange: oController.filterList
		  });
		 
		  
		list1.setModel(oJasonData);
		
		var lblDummy1 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy2 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy3 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		 var oGridForm1 = new sap.ui.layout.Grid({
	           hSpacing: 1,
	           vSpacing: 0,   
	           defaultSpan : "L12 M12 S12",
	        
	           content: [
	                     	lblDummy1,
	                     	//btnSave,
	                     	lblDummy2,
	                     	lblDummy3
	               ]
			  });
 		return new sap.m.Page({
 			title: "{i18n>mob15Deliv_intTit}",
			content: [
			          
						oSearch,			          
						listNotification,
						oGridForm1
   
			
			]
			
		});
	}

});