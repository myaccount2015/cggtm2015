sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueOrderView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27TwoScrQueueOrderView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrQueueOrderView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27TwoScrQueueOrderView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		
		var setTextCheck = new sap.m.Label({
			id : "Mob27-queue-table-setTextCheck"
		});
		
		var oList = new sap.m.List({
			
			
			id :"idMob27-MatDesTable",
             columns: [
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>order}"}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>toline}"}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "{i18n>line}"}) })/*,
	                new sap.m.Column({ header: new sap.m.Label({id:"Mob27-queueHeadStkTxt",text: "C. Stock"}) })*/
	            ],
	         items: {
	                path: "/results",
	                template: new sap.m.ColumnListItem({
	                id : "Mob27-MatDesTable-Column-List",
	               // includeItemInSelection : true,
	    			//mode : sap.m.ListMode.SingleSelectMaster,
	                selected : true,
	                press: oController.TableSelect,
	                type : "Active",
	        	    cells : [ 
	        	    new sap.m.ObjectIdentifier({
	        		title : "{RequirementNo}",
	        	    }),
	                new sap.m.ObjectIdentifier({
	                id : "Mob27-QueTable-LineItemAndTrOrder",
	        	    title : "{TransferOrderno}"+"."+"{TransferOrderItem}"
	        	    }), 
	                new sap.m.ObjectIdentifier({
		        	    title : "{LineNo}"
		                }),
		                
		            new sap.m.ObjectIdentifier({
			        	    title : "{SplStockDescription}"
			                }), 
			                /*new sap.m.ObjectIdentifier({
				                id : "Mob27-QueTable-LineItemAndTrOrder",
				        	    title : "{TransferOrderno}"+"."+"{TransferOrderItem}"
				        	    }),*/ 
			                //customer Stock and project stock
				        	// SplStock              // spcl stock B or Q   Q-customer B-project
				        	// SplStockDescription
	                
	                ]
	                })
	            }
	        });
		
		
		var labeldummy = new sap.m.Label({
			text: "{i18n>DumyTxt}",

		});
		labeldummy.addStyleClass("HideLabel");
		
		var labeldummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy1.addStyleClass("HideLabel");
		
		var labeldummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy2.addStyleClass("HideLabel");
		
		var labeldummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy3.addStyleClass("HideLabel");
		var flexBox = new sap.m.FlexBox({ 
		
			items: [ 
labeldummy,
labeldummy1,
labeldummy2,
labeldummy3

			         
			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
				
		    }).addStyleClass("flex-box-padding");
		
		
		if( g_runningOnPhone == true)
			{
			return new sap.m.Page({
	 			id:"Mob27-queue-SecScreen",
				title: "Title",
				content: [
	oList,
	flexBox
				
				],
				showNavButton: true,
				navButtonTap:function(){  
					  g_MobileNavigationId = "Mob27-SecScr-Mas";
					
					sap.ui.getCore().byId("myApp").to("idMob27SecMas");
		          },
				   footer: new sap.m.Bar({})
			});
			}
		else
			{
			return new sap.m.Page({
	 			id:"Mob27-queue-SecScreen",
				title: "Title",
				content: [
	oList,
	flexBox
				
				]
			});
			}
 		
 		
 		
 		
 		
 		
 		
 		
 		
 	
          
          
          
          
	}

});