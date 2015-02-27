sap.ui.jsview("com.cg.gtm.view.Mob30DetailMaterial", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30DetailMaterial
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob30DetailMaterial";
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
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>mob30_type}"}) }),
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
	                	  text : "{SourceStorageType}",
		                }),
	                ]
	                })
	            }
	        });
		
 		return new sap.m.Page({
 			id : "Mob30-frstScreen",
		//	title: "Detail",
 			enableScrolling: false,
			content: [
			          oList
			]
		});
	}

});