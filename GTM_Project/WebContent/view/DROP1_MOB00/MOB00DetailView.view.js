sap.ui.jsview("com.cg.gtm.view.DROP1_MOB00.MOB00DetailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.DROP1_MOB00.MOB00DetailView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.DROP1_MOB00.MOB00DetailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.DROP1_MOB00.MOB00DetailView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var listMOB00 = new sap.m.List({
			  id : "Mob00list",
			  mode: sap.m.ListMode.SingleSelectMaster,
			  select : oController.listSelMOB00,
		      rememberSelections : false,
		       
		      items: {
		    	  path: "/resultsMOB00",
		        	
		        	template: new sap.m.StandardListItem({
						title: "{DESC}", 
						description: "{ID}",
						 //press : oController.Mob00MatSelPress,					

						})
		        	
		      }
	
		 }).addStyleClass("paddingBottom");
		
		if ( g_runningOnPhone == true){
			
			
			 var backButtonMOB00 = new sap.m.Button({
				 text: "Back",
		         icon: "sap-icon://close-command-field" ,
		         press: function () {	 
		    	  var app = sap.ui.getCore().byId("myApp"); 
		    	  var mob28maspage = sap.ui.getCore().byId("idMOB00masterPage");//("idMOB28MasPg");
		    	    //  app.addPage(mob28maspage);
		    	      app.to("idMob00InitialScreen");
		    	      
		    	      g_MobileNavigationId = "Mob00-BackNavButton";
		    	      
		    	      
		    	      
		    	      
		      }
		    });

	 		return new sap.m.Page({
	 			id : "Mob00-SecondScreen-BackNavButton",
				title: "Choose your default options...",
				content: [
				          listMOB00
				],
				 enableScrolling: true,
					
					showNavButton: true,
					 navButtonTap:function(){
						 
				    	  var app = sap.ui.getCore().byId("myApp"); 
				    	  var mob28maspage = sap.ui.getCore().byId("idMOB00masterPage");//("idMOB28MasPg");
				    	      app.to("idMob00InitialScreen");
				    	      g_MobileNavigationId = "Mob00-BackNavButton";
				    	      
				    	      
				    	      
				    	      
				      
						 
					 },
				         
				         
					showFooter: true,
					showHeader: true,
					footer: new sap.m.Bar({
				        contentLeft: [
				                      backButtonMOB00
				                       ]
					})
			});
				
		}
		else
			{
 		return new sap.m.Page({
			title: "",
			content: [
			          listMOB00
			]
		});
			}
	}

});