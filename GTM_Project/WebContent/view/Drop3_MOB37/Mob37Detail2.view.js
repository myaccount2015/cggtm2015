sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.Mob37Detail2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop3_MOB37.Mob37Detail2
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop3_MOB37.Mob37Detail2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop3_MOB37.Mob37Detail2
	*/ 
	createContent : function(oController) {
		
		var lblMat = new sap.m.Label({text : "Material",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtMat = new sap.m.Text({id : "MOB37Mat",width : "250px"});
		var MatRow = new sap.m.FlexBox({
		width : "500px",
		items: [ lblMat, txtMat ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		var containerList = new sap.m.FlexBox({
			
			items: [lblMat,txtMat
			
			],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
			}).addStyleClass("ContainerPadding");
		
			
		 if ( g_runningOnPhone == true)
			{
				
				return new sap.m.Page({
					title : "Material Details",
					id : "MOB37Detpage",
					showHeader: true,
					content: [
					          	containerList			
					],
					showNavButton: true,
					 navButtonTap:function(){  
						 g_MobileNavigationId = "MOB37-frstScreen"; 
	     	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
						  var myapp = sap.ui.getCore().byId("myApp");
				            myapp.to("idMOB37MatListPage");
	                    },
					footer: new sap.m.Bar({
				        contentLeft: [
				         
				        ],
				        contentRight: [
				                      
				 			         
				  			        ]
				        
					})
				
				});
			}
			
			else
				{
		    
				return new sap.m.Page({
					title : "Material Details",
					id : "MOB37Detpage2",
					showHeader: true,
					content: [
					          	containerList			
					],
					showNavButton: true,
					 navButtonTap:function(){  
						 g_MobileNavigationId = "MOB37-frstScreen"; 
	     	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
						  var myapp = sap.ui.getCore().byId("myApp");
				            myapp.to("idMOB37MatListPage");
	                    },
					footer: new sap.m.Bar({
				        contentLeft: [
				         
				        ],
				        contentRight: [
				                     
				 			         
				  			        ]
				        
					})
				
				});
				}
		
 		
	}

});