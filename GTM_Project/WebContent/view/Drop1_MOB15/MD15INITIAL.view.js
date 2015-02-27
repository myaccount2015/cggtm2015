sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.MD15INITIAL", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.MD15INITIAL
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.MD15INITIAL";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.MD15INITIAL
	*/ 
	//done
	
	createContent : function(oController) {
		
		
		/*oMD15Data = {"MD15Collection01":
			[
				 {"title":"FIRST-NOTIFICATION","date":"01/10/2014","matnum":"0000000001","DOJ":"11/03/2002"},
				 {"title":"SECOND-NOTIFICATION","date":"02/10/2014","matnum":"0000000002","DOJ":"04/03/2006"},
				 {"title":"THIDR-NOTIFICATION","date":"03/10/2014","matnum":"0000000003","DOJ":"08/10/2009"},
				 {"title":"FOURTH-NOTIFICATION","date":"04/10/2014","matnum":"0000000004","DOJ":"11/03/2010"},
				 {"title":"FIFTH-NOTIFICATION","date":"05/10/2014","matnum":"0000000005","DOJ":"11/03/2002"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"},
				 {"title":"SIXTH-NOTIFICATION","date":"06/10/2014","matnum":"0000000006","DOJ":"21/08/2012"}
				 
				 ]};*/
	//	var oJason1 = new sap.ui.model.json.JSONModel(oMD15Data);
		
var count = new sap.m.Label({
	id : "countNot",
	text : "0"
});
	
	var listNotification = new sap.m.List({
		id : "myList", 
		//height  : "200px",
		 mode: sap.m.ListMode.SingleSelectMaster,
	      includeItemInSelection: true,
	      rememberSelections : false,
	     select : oController.onSelect,
		         items: {
					path: "/MD15Collection01",
					template: new sap.m.StandardListItem({
					title: "{title}",
					description: "{date}",
					info : "{matnum}",
					icon : "{icon}",
					//type : sap.m.ListType.Navigation,
				//	counter : 
					//press : oController.onClick 
					})
					}
	}).addStyleClass("paddingBottom_15");
	//listNotification.setModel(oJason1);
		
		var oSearch = new sap.m.SearchField({
		    placeholder: "Search",
		    liveChange: oController.filterList
		  });
	// for mobile 	 
		if( g_runningOnPhone == true)
		   {
		/* var oOverlayContainer = new sap.ui.ux3.OverlayContainer({
			 id:"Mob15-oOverlayContainer"
		 });
		 oOverlayContainer.setOpenButtonVisible(false);*/
		// oOverlayContainer.addContent(sap.ui.getCore().byId("Mob24-search"));	
		
   	 
   	 
		 btnOpenNotiMOB15 = new sap.m.Button({
      		text: "Queue",
            		press: function(oEvent){ 
            			/*if(!oOverlayContainer.isOpen()){
            				 oOverlayContainer.addContent(sap.ui.getCore().byId("myList"));	
            				oOverlayContainer.open();
            				
            				
            			}*/
            			g_MobileNavigationId =  "Mob15-Created-Notification";
            			var itemAdded = sap.ui.getCore().byId("myList");
            			
            			
            			sap.ui.getCore().byId("Mob15-Created-Notification").
            			addContent(oSearch);
            			
            			sap.ui.getCore().byId("Mob15-Created-Notification").
            			addContent(itemAdded);
            			
            			sap.ui.getCore().byId("myApp").to("Mob15-OpenInsView");
            			
            			
            			
            			
            			
            			
            		}
            	});
		 
		 
		   }
	    		  
		//list1.setModel(oJason1);
 		return new sap.m.Page("mstPage_MOB15", {
			//title: "",
			content: [
			          
			          oSearch,			          
			          listNotification       
			

			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			enableScrolling: true,
			footer: new sap.m.Bar({
		     
			}).addStyleClass("footer"),
			
			
	});
	}

});