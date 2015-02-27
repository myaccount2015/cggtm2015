sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27Picking", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27Picking
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27Picking";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27Picking
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
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
		
		var btnQue = new sap.m.Button({
			id : "Mob27-btnQueue",
			text :"Pick by Queue",
			width: "280px",
			press : oController.pickByQueue
			
		});
		var btnOrd = new sap.m.Button({
			id : "Mob27-btnOrd",
			text :"Pick by Order",
			width: "280px",
			press : oController.pickByOrder
			
		});
		
		
		var lblPlant = new sap.m.Label({
			id:"Mob27-lbl-palnt",design: sap.m.LabelDesign.Bold,
			text : "Plant"
		}).addStyleClass("mob27lblmarginLeft");
		
		 var getPlant =  window.localStorage.getItem("defPlantName");
		var txtPlant = new sap.m.Label({
			id:"Mob27-txt-palnt",
			//text : "GWNP"
		}).addStyleClass("mob27lblmarginLeft");
		txtPlant.setText(getPlant);
		var lblWareHouse = new sap.m.Label({
			id:"Mob27-lbl-WareHouse",design: sap.m.LabelDesign.Bold,
			text : "{i18n>WorkHouse}"
		}).addStyleClass("mob27lblmarginLeft");
		
	
	//	var getWareHouse =  window.localStorage.getItem("defWHCode");
		var txtWareHouse = new sap.m.Label({
			id:"Mob27-txt-WorkHouse",
			//text : "NP1"
		}).addStyleClass("mob27lblmarginLeft");
	//	txtWareHouse.setText(getWareHouse);
		
		
		
		
		if(g_runningOnPhone == true)
			{
			var flexBox = new sap.m.FlexBox({ 
				id : "MOB27-flexBox",
				items: [ 
				          labeldummy,
				          btnQue,
				          labeldummy1,
				          btnOrd,
				          labeldummy2,
				          lblPlant,
				          txtPlant,
				          labeldummy3,
				          lblWareHouse,
				          txtWareHouse
				         
				         ],
				direction:"Column",
				justifyContent:"Center",//Contents would be placed in the begin
				alignItems:"Center"
					
			    })//.addStyleClass("flex-box-padding");

			return new sap.m.Page({
				title: "Picking",
				id : "Mob27-BackNavButton",
				content: [
				          flexBox         
				          
				],
				
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				showNavButton: true,
				enableScrolling: false,
		        navButtonTap:function(){  
		        	
		        	
		        	           g_MobileNavigationId = "MainGrid-Inventory";
		        	           sap.ui.getCore().byId("LocallblLoadingPageMob27").setText("1");
		                       var app = sap.ui.getCore().byId("myApp"); 
		                       app.to("idGridSubMenuIMWM");
		                   
		                       },
		         footer: new sap.m.Bar({})
				
			});
			
			}
		else
			{
			
			var flexBox = new sap.m.FlexBox({ 
				id : "MOB27-flexBox",
				items: [ 
				          labeldummy,
				          btnQue,
				          labeldummy1,
				          btnOrd,
				          labeldummy2,
				          lblPlant,
				          txtPlant,
				          labeldummy3,
				          lblWareHouse,
				          txtWareHouse
				         
				         ],
				direction:"Column",
				justifyContent:"Start",//Contents would be placed in the begin
				alignItems:"Start"
					
			    }).addStyleClass("flex-box-padding");
			
			
			return new sap.m.Page({
				title: "Picking",
				content: [
				          flexBox         
				          
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				 footer: new sap.m.Bar({
				        contentMiddle: [],
				                       contentRight: [],
				                       
				                       
					}).addStyleClass("footer")
				
			});
			}
 		
 		
 		
 		
	}

});