sap.ui.jsview("com.cg.gtm.view.Mob20TwoScrMatDes", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob20TwoScrMatDes
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob20TwoScrMatDes";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob20TwoScrMatDes
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var oList = new sap.m.List({
			id :"idMob20-MatDesTable",
             columns: [
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>Mob20_Material}",design: sap.m.LabelDesign.Bold,}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>Mob20_Description}",design: sap.m.LabelDesign.Bold,}) }),
	            ],
	         items: {
	                path: "/results",
	                template: new sap.m.ColumnListItem({
	                id : "Mob20-MatDesTable-Column-List",
	                selected : true,
	                press: oController.Mob20TabColEvent,
	                type : "Active",
	        	    cells : [ 
	        	    new sap.m.ObjectIdentifier({
	        		title : "{Material}",
	        	    }),
	                new sap.m.ObjectIdentifier({
	        	    title : "{Materidesc}"
	                }), ]
	                })
	            }
	        });
		   
		   
		   //space
		   var lblDummy1 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			}).addStyleClass("HideLabel");
			
			var lblDummy2 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			}).addStyleClass("HideLabel");
			
			
		   //error box
		   
		   var errBox = new sap.m.Text({
			   
			  id : "Mob20-errBox" ,
			  wrapping : true
			});
		   errBox.setVisible(false);
	 
		   if(g_runningOnPhone == true)
			{
			   return new sap.m.Page({
	 			id:"Mob20-frstScreen",
				content: [
	            oList,errBox
				],
				 showNavButton: true,
				 showHeader: true,
				 showFooter: true,
				 enableScrolling: false,
				 navButtonTap:function(){  
					 g_MobileNavigationId = "Mob20-InvdocMaster";
      	         sap.ui.getCore().byId("myApp").to("idMob20InitialScreen"); 
                 },
				footer: new sap.m.Bar({
			        contentRight: []
				})
			    });
			 
			 }
		   else
			   {
			   return new sap.m.Page({
		 			id : "Mob20-frstScreen",
		 			enableScrolling: false,
					content: [
		              oList,errBox
					]
				    });
			   
			   }}

});