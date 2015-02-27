sap.ui.jsview("com.cg.gtm.view.Drop2_MOB28.MOB28MatList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB28.MOB28MatList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB28.MOB28MatList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB28.MOB28MatList
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var tableMOB28 = new sap.m.Table("matListMOB28", {
			
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: true,
			   select : oController.matSelMOB28,
			   columns : [		
						new sap.m.Column({
						   	
						    header : new sap.m.Label({text : "Bin"}) ,
						 
						    }),
						    new sap.m.Column({
									       	
                                           header : new sap.m.Label({text : "Material"}) ,
                                        
                                           }),
                          new sap.m.Column({
                                           header : new sap.m.Label({ text : "Description" }) }),
                         
         ]
    }).addStyleClass("paddingBottom");
		
		tableMOB28.bindItems("/modelDataMOB28", new sap.m.ColumnListItem("materialListItemMOB28", {
	        cells : [ 
	                 
				new sap.m.Text("MOB28ListBin", {
				    text : "{Bin}",
				    	 wrapping: true }),
    	 
	                 new sap.m.Text("MOB28ListMaterial", {
	            text : "{matnum}",
	            	 wrapping: true
	        }),
	        	new sap.m.Text("MOB28ListMatDesc", {
	            text : "{desc}",
	            wrapping: true
	        }),
	        	/*new sap.ui.core.Icon("Deletion", { 
	        	src : "sap-icon://sys-cancel",
	        	color: "#CC0000",
	        	size: "30px",
				press: oController.deleteMaterial
	        })*/
	        ],
		
	    }));
		
		 var backButtonMOB28MatList = new sap.m.Button({
			 text: "Back",
			 icon: "sap-icon://close-command-field" ,
	      press: function () {	 
	    	  var app = sap.ui.getCore().byId("myApp"); 
	    	  var mob28maspage = sap.ui.getCore().byId("idMob28InitialScreen");//("idMOB28MasPg");
	    	    //  app.addPage(mob28maspage);
	    	      app.to(mob28maspage);
	      }
	    });
		if ( g_runningOnPhone == true)
		{

	 		return new sap.m.Page({
	 			id : "Mob28-frstScreen",
				title: "Materials List",
				content: [
				          tableMOB28
				],
				 enableScrolling: false,
					
					//showNavButton: false,
				 showNavButton: true,
				 navButtonTap:function(){  
					 g_MobileNavigationId = "Mob28-BackNavButton"; 
       	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
                      var app = sap.ui.getCore().byId("myApp"); 
                      app.to("idMob28InitialScreen");
                      },
					footer: new sap.m.Bar({
				        contentLeft: [
				                       backButtonMOB28MatList
				                       ]
					})
			});
			
		}
		else
			{
 		return new sap.m.Page({
			title: "Materials List",
			content: [
			          tableMOB28
			]
		});
			}
	}

});