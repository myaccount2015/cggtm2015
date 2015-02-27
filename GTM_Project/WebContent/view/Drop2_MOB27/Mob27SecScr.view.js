sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27SecScr", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27SecScr
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27SecScr";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27SecScr
	*/ 
	createContent : function(oController) {
		

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
		
		
		var lblPlant = new sap.m.Label({
			id:"Mob27-Mas-lbl-palnt",design: sap.m.LabelDesign.Bold,
			text : "{i18n>Plant}"
		}).addStyleClass("mob27lblmarginLeft");
		
		 var getPlant =  window.localStorage.getItem("defPlantName");
		var txtPlant = new sap.m.Text({
			id:"Mob27-Mas-txt-palnt",
			//text : "GWNP"
		}).addStyleClass("mob27lblmarginLeft");
		txtPlant.setText(getPlant);
		var lblWareHouse = new sap.m.Label({
			id:"Mob27-Mas-lbl-WareHouse",design: sap.m.LabelDesign.Bold,
			text : "{i18n>WorkHouse}"
		}).addStyleClass("mob27lblmarginLeft");
		
		var txtWareHouse = new sap.m.Text({
			id:"Mob27-Mas-txt-WorkHouse",
			//text : "NP1"
		}).addStyleClass("mob27lblmarginLeft");
		
		
		var lblQue = new sap.m.Label({
			id:"Mob27-Mas-lbl-Que",design: sap.m.LabelDesign.Bold,
			text : "{i18n>Queue}"
		}).addStyleClass("mob27lblmarginLeft");
		
		//////////////////////////////////////////////////
		/*var comobox = new sap.ui.commons.ComboBox({
			
			id:"Mob27-Mas-ComboBox"
		}).addStyleClass("mob27lblmarginLeft");
		
		
		
		var oItemTemplate1 = new sap.ui.core.ListItem({
			id :"Mob27-que-list"
		});
		oItemTemplate1.bindProperty("text", "Que_Det");

		comobox.bindItems("/Queue", oItemTemplate1);*/
		
		
		////////////////////////////////////////////
		var comobox =  new sap.m.Select({
			id:"Mob27-Mas-ComboBox",
			
			 items: {
			  
			    
			        path: "/results",
			       // sorter: new sap.ui.model.Sorter("detail", false),
			        template: new sap.ui.core.Item({
			          //key: "{Plant}",
			          text: "{QueueId}"
			        })
			      }
			
		});
		
		
		
		
		
		
		
		
		////////////////////////////////////////////
        var ipTextField = new sap.m.Input({
        	type :sap.m.InputType.Tel,
			id:"Mob27-Mas-Input"
		}).addStyleClass("mob27lblmarginLeft");
		
		
		var flexBox = new sap.m.FlexBox({ 
			id : "MOB27-Mas-flexBox",
			items: [ 
			          labeldummy,
			     			         
			          lblPlant,
			          txtPlant,
			          labeldummy3,
			          lblWareHouse,
			          txtWareHouse,
			          labeldummy1,
			          lblQue,
			          comobox,
			          ipTextField
			         
			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
				
		    }).addStyleClass("flex-box-padding");
		
		
		if(g_runningOnPhone == true)
			{
			return new sap.m.Page({
	 			id:"Mob27-SecScr-Mas",
				title: "",
				content: [
				          flexBox
				
				],
				showNavButton: true,
				navButtonTap:function(){  
					
					g_MobileNavigationId = "Mob27-BackNavButton";
					sap.ui.getCore().byId("myApp").to("idMob27InitialScreen");
		          },
		          footer: new sap.m.Bar({
		  	        
		  	                       contentLeft: [
		  	                                     /*new sap.m.Button({
		  	                                    	 text:"Back",
		  	                                    	icon : "sap-icon://close-command-field",
		  	                                    	 press: function()
		  	                                    	 {
		  	                                    		 
		  	                                    		sap.ui.getCore().byId("myApp").to("idMob27InitialScreen");	
		  	                                    		
		  	                                    	 }
		  	                                     })*/
		  	                                     ],
		  	                                     
		  	                                   contentRight : [
		  	                                     new sap.m.Button({
		  	                                    	 text:"Next",
		  	                                    	 icon : "sap-icon://open-command-field",
		  	                                    	 press: oController.Next
		  	                                    	 	
		  	                                     })]
		          
		}) 
		          
			});
			}
		
		else
			{
			return new sap.m.Page({
	 			id:"Mob27-SecScr-Mas",
				title: "",
				content: [
				          flexBox
				
				],
				showNavButton: false,
				navButtonTap:function(){  
					sap.ui.getCore().byId("idMOB27SplitApp").toMaster("idMob27Picking");
		          },
		          footer: new sap.m.Bar({
		  	        
		  	                       contentLeft: [
		  	                                     new sap.m.Button({
		  	                                    	 text:"Back",
		  	                                    	icon : "sap-icon://close-command-field",
		  	                                    	 press: function()
		  	                                    	 {
		  	                                    		 
		  	                                    		sap.ui.getCore().byId("idMOB27SplitApp").toMaster("idMob27Picking");	
		  	                                    		sap.ui.getCore().byId("idMOB27SplitApp").toDetail("idMOB27-Mob27BlankScreen");	
		  	                                    		
		  	                                    	 }
		  	                                     })
		  	                                     ],
		  	                                     
		  	                                   contentRight : [
		  	                                     new sap.m.Button({
		  	                                    	 text:"Next",
		  	                                    	 icon : "sap-icon://open-command-field",
		  	                                    	 press: oController.Next
		  	                                    	 	
		  	                                     })]
		          
		}).addStyleClass("footer")  
		          
			});
			}
 	
	}

});