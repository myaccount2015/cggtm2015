sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.MOB15CustComplaintGrid", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB15CustComplaintGrid
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.MOB15CustComplaintGrid";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB15CustComplaintGrid
	*/ 
	//done
	
	createContent : function(oController) {
		
	    // create tile container
	   var tileContainer = new sap.m.TileContainer({
		   id :"custCompTiles",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	      tiles : [
	        
			new sap.m.StandardTile({
				//id : "tile1",
			    icon : "sap-icon://factory",
			    number : "1",
			   // numberUnit : "Maintenence",
			    title : "{i18n>CustSalCom}",
			    info : "{i18n>Complnt}",
			    infoState: "{i18n>Er}",
			    press:function(evt) {
			    	oController.gotoCreateNotiMOB15();
			    	var app = sap.ui.getCore().byId("myApp"); 
					app.to("idMob15Notification");
					
					var splitApp = sap.ui.getCore().byId("splitApp"); 
					splitApp.toDetail("idMob15DetailsQ1");
					//splitApp.setInitialDetail("idMob15DetailsQ1");
					
					globalMob15Detail = "Q1";
			    }
			  }),
			  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					    number : "2",
					    //numberUnit : "Quality",
					    title : "{i18n>CusDelCom}",
					    info : "{i18n>Complnt}",
					    infoState: "{i18n>Sc}",
					    press:function(evt) {
					    	oController.gotoCreateNotiMOB15();
					    	var app = sap.ui.getCore().byId("myApp"); 
							app.to("idMob15Notification");
							
							var splitApp = sap.ui.getCore().byId("splitApp"); 
							splitApp.toDetail("idMob15DetailsQ11");
							//splitApp.setInitialDetail("idMob15DetailsQ11");
							
							globalMob15Detail = "Q11";
					    }
					  }),
					 
	      ]
	    });
	   
	   
	   this.page = new sap.m.Page({
			title: "",
			content: [
			          	tileContainer
					],
					showNavButton: true,
					enableScrolling: true,
		            navButtonTap:function(){  
		            	
		                           app = sap.ui.getCore().byId("myApp");  
		                           app.to("idGridSubMenuCreateNoti");  
		            }  
		});
	    
 		return this.page;
	}

});