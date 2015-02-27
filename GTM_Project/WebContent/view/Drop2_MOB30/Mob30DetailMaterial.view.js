sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30DetailMaterial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30DetailMaterial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30DetailMaterial";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30DetailMaterial
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		//List 
		
		oList = new sap.m.List({
			id :"idtable_mob30",
             columns: [
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>Mob20_Material}"}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>Mob20_Description}"}) }),
	                
	                new sap.m.Column({ header: new sap.m.Label({text: "AvailableStock"}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "Quant"}).setVisible(false) }),
	                ],
	         items: {
	                path: "/results",
	                template: new sap.m.ColumnListItem({
	                id : "Mob30-MatDesTable-Column-List",
	                selected : true,
	                press:  oController.mob30matselect,
	                type : "Active",
	        	    cells : [ 
	        	    new sap.m.ObjectIdentifier({
	        		title : "{Material}",
	        	    }),
	                new sap.m.ObjectIdentifier({
	                text : "{MaterialDescription}",
	                }),
	              
		                new sap.m.ObjectIdentifier({
		                	  text : "{AvailableStock}",
			                }),
			                new sap.m.ObjectIdentifier({
			                	  text : "{Quant}",
				                }).setVisible(false),
		                
	                ]
	                })
	            }
	        });
		 ///////////////////////Phone version///////////////////////////////
		
		 if ( g_runningOnPhone == true)
			{
			 return new sap.m.Page({
		 			id : "Mob30-frstScreen",
				//	title: "Detail",
		 			enableScrolling: false,
					content: [
					          oList
					],
					showNavButton: true,
					 navButtonTap:function(){  
						 g_MobileNavigationId = "Mob30-BackNavButton"; 
         	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
                        var app = sap.ui.getCore().byId("myApp"); 
                        app.to("idMob30InitialScreen");
                        },});
			
			}
		 else{
			 
		
		return new sap.m.Page({
			id : "Mob30-frstScreen",
		title: "Bin Items",
			enableScrolling: false,
			showHeader : true,
			showFooter: false,
		
			content: [
			          oList
			]
		});
	}
	 }

});