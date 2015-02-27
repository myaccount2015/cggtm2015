sap.ui.jsview("com.cg.gtm.view.Drop1_MOB29.Mob29-LabelPrintingView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob29-labelprinting.Mob29-LabelPrintingView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB29.Mob29-LabelPrintingView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob29-labelprinting.Mob29-LabelPrintingView
	*/ 
	createContent : function(oController) {
		
		var lblDummy1 = new sap.m.Label({
			id:"Mob29_Selected_PrinterType",
			text: "Dummy"
		});
		
		lblDummy1.addStyleClass("HideLabelAndHeight");
		var lblDummy2 = new sap.m.Label({

		});		

		var lblDummy3 = new sap.m.Label({
			text: "Dummy"
		});
		lblDummy3.addStyleClass("HideLabelAndHeight");
		
		var lblDummy4 = new sap.m.Label({
			text: "Dummy"
		});
		lblDummy4.addStyleClass("HideLabelAndHeight");
		
		var lblDummy5 = new sap.m.Label({
			text: "Dummy"
		});
		lblDummy5.addStyleClass("HideLabelAndHeight");
		
		var lblDummy6 = new sap.m.Label({
			text: "Dummy"
		});
		lblDummy6.addStyleClass("HideLabelAndHeight");
		
		
	//////////////////////////////////////////////////////////////////	
		
		var text1 = new sap.m.Text({
		      text: "Destination Printer",
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		
		 
		var oData = {"Items":
			[
				 {"Printer":"NL-LAB-01"},
				 {"Printer":"NL-LAB-02"},
				 {"Printer":"NL-LAB-03"},
			
				 ]};
		
		//var oModel = new sap.ui.model.json.JSONModel(oData);
		
		
		var wrk_ddown =  new sap.m.Select({
			id : "Mob29_DestinationPrinter",
			
			
			 items: {
			    	name : "Plant",  
			    
			        path: "/Items",
			       // sorter: new sap.ui.model.Sorter("detail", false),
			        template: new sap.ui.core.Item({
			         key: "{PrinterType}",
			          text: "{PrinterName}"
			        })
			      },
			      
			      change : function(oEvent)
			      {
			    	  
			    	  //alert(oEvent.oSource.mProperties.selectedKey);  
			      	  sap.ui.getCore().byId("Mob29_Selected_PrinterType").
			      	  setText(oEvent.mParameters.selectedItem.mProperties.text);
			    	
			      }
			      
			     
			
		});
		//wrk_ddown.setModel(oModel);
		//wrk_ddown.setWidth("250px");
		
	///////////////////////////////////////////////////////////////////////////////////////////////////	
		
		
		
		var text2 = new sap.m.Text({
		      text: "Type of Label to Print",
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var MaterialNumButton = new sap.m.Button({
			text : "Material Number",
			type : sap.m.ButtonType.Emphasized  ,
			
				width : "250px",
				press : function ()
	            {
					//serial batch validation
					  g_MobileNavigationId = "Mob29-SecondScreen-BackNavButton";
					  sap.ui.getCore().byId("matLabPrintDesText").setVisible(false);
					  sap.ui.getCore().byId("matLabPrintDes").setVisible(false); 
					  sap.ui.getCore().byId("matLabqtytext").setVisible(false); 
					  sap.ui.getCore().byId("PrtLabIPQty").setVisible(false); 
					 // sap.ui.getCore().byId("PrtLabIPQty").setEnabled(false); 
		        	  sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
					  sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
					  sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
					  sap.ui.getCore().byId("printlabel-SerBatValidatn-Additional").setVisible(false);
					  sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setVisible(false);
					  sap.ui.getCore().byId("labelParnt-dummy3A").setVisible(false);
					  
					  sap.ui.getCore().byId("osearch_material_1").setValue("");
					  sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
					  sap.ui.getCore().byId("PrintLabSerBatIp1").setValue("");
					  
					  
					  sap.ui.getCore().byId("PrintLabSerBatIp1").setValue("");
					  sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValue("");
					  	sap.ui.getCore().byId("PrtLabIPQty").setValueState(sap.ui.core.ValueState.None);
					  sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None)
					
	            var app = sap.ui.getCore().byId("myApp");
	            app.to("idMob29MaterialView");
	            }
		});

			
		var purchaseBut = new sap.m.Button({
			text :  "Material Doc Number",
			width : "250px",
		    type : sap.m.ButtonType.Emphasized  ,
			press : function(){
				  g_MobileNavigationId = "Mob29-ThirdScreen-BackNavButton";
				//1 Field
				sap.ui.getCore().byId("Mob29_copies_field").setValue("");
				sap.ui.getCore().byId("Mob29_copies_field").setValueState(sap.ui.core.ValueState.None);
						
				
				
				  var app = sap.ui.getCore().byId("myApp");
		              app.to("idMob29PrintOrderLabelView");
		              document.getElementById("idMob29search-I").type="tel"; //putting the numeric keypad
			}
		});

		
		var main = new sap.m.FlexBox({
			items: [
			      
text1,
wrk_ddown,
lblDummy1,
text2,
lblDummy2,
MaterialNumButton,
lblDummy3,
purchaseBut
			        	
			        
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Center"
		}).addStyleClass("fluxBoxAllignment");
		
		
	/*	 var oGridForm = new sap.ui.layout.Grid({
	            hSpacing: 1,
	            vSpacing: 0,   
	            defaultSpan : "L3 M3 S12",
	            content: [
text1,
oDropdownBox1,
lblDummy1,

text2,
MaterialNumButton,
lblDummy2,
purchaseBut

	                ]
			  });*/
		
		
		
		
		
		
 		return new sap.m.Page({
 			
 			id : "Mob29-BackNavButton",
			title: "Print Options",
			content: [
                  main,
                  lblDummy4,
                  lblDummy5,
                  lblDummy6
                  
			],
			
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			showNavButton: true,
			enableScrolling: true,
            navButtonTap:function(){  
                           var app = sap.ui.getCore().byId("myApp");  
                           app.to("idGridSubMenuIMWM");  
                           g_MobileNavigationId = "MainGrid-Inventory";
                        
            },
        	showFooter: true,
            footer: new sap.m.Bar()

		});
	}

});