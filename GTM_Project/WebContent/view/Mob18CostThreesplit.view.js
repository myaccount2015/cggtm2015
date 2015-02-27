sap.ui.jsview("com.cg.gtm.view.Mob18CostThreesplit", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18CostThreesplit
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18CostThreesplit";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18CostThreesplit
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var Mob18Costpage = sap.ui.getCore().byId("idMob18Costpage");
		var Mob18Costpage2 = sap.ui.getCore().byId("idMob18Costdetpage"); 

	 //  var Mob18Orderdetpage = sap.ui.getCore().byId("idMob18Orderdetpage"); 
	
		
			//Divide the width to set three split screen
			/*var width1 = ((screen.width)/2.5) + "px";
			var width2 = ((screen.width)/3) + "px";
			var height1 = width1.height + "px";*/
			
			// create a simple matrix layout with given sizes
		/*	var oLayout = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : true,
				columns : 2,
				widths : [ width1, width2],
				height : "815px"

				});
			oLayout.createRow(Mob18Costpage,Mob18Costpage2);
			*/
			
			/*Mob18Costpage.setWidth(width1);
			Mob18Costpage2.setWidth(width2);*/
			Mob18Costpage.setHeight("815px");
			Mob18Costpage2.setHeight("815px");
			
			
			/*var oLayout= new sap.ui.layout.HorizontalLayout({
				content:[Mob18Costpage,Mob18Costpage2]
			});*/
			
			
			if( g_runningInTablet == false && g_runningOnPhone == false)
				{
				var nonResize = new sap.ui.layout.SplitterLayoutData({
					resizable : false,
				});
				Mob18Costpage.setLayoutData(nonResize);
				}
			
			var oLayout = new sap.ui.layout.Splitter({
				id: "MOB18Splitter",
				contentAreas : [Mob18Costpage,Mob18Costpage2]
			});

			
			var btnAdd = new sap.m.Button({
	        	id : "idAddMaterial_Cost",
				 text : "{i18n>Mob18_Add}",
				 icon: "sap-icon://add", 
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	
				           // 	oController.check();
		            	         backNavMat = "Mob18_cost";
				            	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
					        	  app.toMaster("idMOB18Matmas");
					        	  
					        	  sap.ui.getCore().byId("idAddMaterial_Cost").setVisible(false);
					        	 // sap.ui.getCore().byId("idAddMaterial_second").setVisible(true);
		            	
		            }
		           
			});
			
			
			var btnScan = new sap.m.Button({
	        	//id : "idshow",
				 text : "{i18n>Mob18_Scan}",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	 sap.m.MessageBox.show("Items are scanned",
		    					 sap.m.MessageBox.Icon.ERROR,
		    						"Error"
		    					 );
		            	
		            }
		           
			});
			var btnFinish = new sap.m.Button({
	        	//id : "idshow",
				 text : "{i18n>Mob18_Finish}",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	 var app = sap.ui.getCore().byId("myApp"); 
                         app.to("idGridSubMenuIMWM");
		            	
		            }
		           
			});
 		return new sap.m.Page({
			title: "Title",
			content: [
			          oLayout
			],
			showFooter: true,	
			footer: new sap.m.Bar({
				contentRight: [btnScan, btnFinish],
				
				contentMiddle : [
		                      
				                 btnAdd    
		                       ]
			}).addStyleClass("footer"),
		});
	}

});