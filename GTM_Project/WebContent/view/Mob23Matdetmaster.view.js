sap.ui.jsview("com.cg.gtm.view.Mob23Matdetmaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23Matdetmaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23Matdetmaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23Matdetmaster
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var lblDummy = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblMatno = new sap.m.Label({
			text: "{i18n>mob23_matno}",
			//width : "150px"
		});
		
		var inputMatno = new sap.m.Text("idMaterialno",{
			text: " ",
			//width : "80px"
		});
		
		
		var lblMatdesc = new sap.m.Label({
			text: "{i18n>mob23_matdesc}",
			//width : "80px"
		});
		
		var inputMatdesc = new sap.m.Text("idMatdesc",{
			text: " ",
			//width : "80px"
		});
		
		
		var lblWMno = new sap.m.Label({
			text: "{i18n>mob23_WAREHOUSE}",
		//	width : "80px"
		});
		
		var inputWMno = new sap.m.Text("idWMno",{
			text: " ",
		//	width : "80px"
		});
		
		
		//Change Material Button
		
		var btnChange = new sap.m.Button("idchange",{
        	//id : "idshow",
		  text : "{i18n>mob23_btn}",
		  icon: "sap-icon://open-command-field",
	       //  icon: "sap-icon://search",
	         //   style : sap.ui.commons.ButtonStyle.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1}),
	            press : function(){
	            	
	           	 ///////////////////////Phone version///////////////////////////////
	       		 if ( g_runningOnPhone == true)
	       			{
	       			var app = sap.ui.getCore().byId("myApp");  
	         	      
         	        app.to("idMOB23Matmaster");
	       			}
	       		 else{
	       			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
	                app.toMaster("idMOB23Matmaster");
	                app.toDetail("idMOB23Blank");
	       		 }
	            	
	            	
	            }
	           
		});
	 
		 var btnNext = new sap.m.Button("idnext23_phone",{
	        	//id : "idshow",
			  text : "{i18n>Mob18_Next}",
			  icon: "sap-icon://open-command-field",
		       //  icon: "sap-icon://search",
		         //   style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){

		      			if ( g_runningOnPhone == true)
		    			{
		      				 g_MobileNavigationId = "Mob23-FirstDetail";
			            	 
				            	var app = sap.ui.getCore().byId("myApp");  
			         	      
			         	        app.to("idMOB23Detail");	
		    			}
	         	        
		            	
		            }
		           
			});
		
		var container_Matno = new sap.m.FlexBox({
			items: [
				      
			    //   lblDummy,
				lblMatno,
				// lblDummy1,
				inputMatno,
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Matdesc = new sap.m.FlexBox({
			items: [
				      
			    //   lblDummy,
				lblMatdesc,
				// lblDummy1,
				inputMatdesc,
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_WMno = new sap.m.FlexBox({
			items: [
				      
			    //   lblDummy,
				lblWMno,
				// lblDummy1,
				inputWMno,
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Main = new sap.m.FlexBox({
			items: [
				      
			       lblDummy1,
			       container_Matno,
				 lblDummy2,
				 container_Matdesc,
				 lblDummy3,
				 container_WMno
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("mob23flex");
		
		
		//////////////////////Phone Version////////////////////////////////////////////
		if (  g_runningOnPhone == true)
		{
			var btnChange = new sap.m.Button("idchange_phone",{
	        
			  text : "{i18n>mob23_btn}",
			  icon: "sap-icon://open-command-field",
		       
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	
		           	 ///////////////////////Phone version///////////////////////////////
		            	var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
						deselect.removeSelections();
					
		       		 sap.ui.getCore().byId("myApp").to("idMob23InitialScreen");  
		         	      
	       
		       			
		            	
		            }
		           
			});
			return new sap.m.Page({
				id : "Mob23-SecondMaster",
				title: "Material Detail",
				content: [
				          container_Main
				],
				showNavButton : true,
				navButtonTap:function(){  
					if(g_backstock == "Mob18Scrap"){
						var matno = sap.ui.getCore().byId("inputItem").setValue("");
       	                
       	                sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
       	                
       	               // var plant = sap.ui.getCore().byId("inputPlant23").setValue("");
       	                
       	                var plant = sap.ui.getCore().byId("idsearch_WM").setValue("");
       	                
       	                var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
       					deselect.removeSelections();

       					var app = sap.ui.getCore().byId("myApp"); 
       					app.to("idMob18Scrappage");
       					//app.to("idMob18InitialScreen");

       				 //var app = sap.ui.getCore().byId("idMOB18SplitApp");  
       					//    app.to("idMob18Scrappage");
       					   
					}
					else{
						 g_MobileNavigationId = "Mob23-BackNavButton";
						 var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
							deselect.removeSelections();
						
							 sap.ui.getCore().byId("myApp").to("idMob23InitialScreen");
					}
					  
					},
				showFooter : true,
				footer: new sap.m.Bar({
					//contentLeft: [ btnSearch.addStyleClass("search")],
			        contentRight: [
			                       btnNext,
			                      btnChange 
			                      
			                       ]
				}).addStyleClass("footer_phone"),
			});
		}
				
		else{
 		return new sap.m.Page({
 			id : "Mob23-SecondMaster",
			title: "Material Detail",
			content: [
			          container_Main
			],
			showNavButton : false,
			enableScrolling: false,
			navButtonTap:function(){
				 g_MobileNavigationId = "Mob23-MasterButton";
				 var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
					deselect.removeSelections();
				
				var app = sap.ui.getCore().byId("idMOB23SplitApp"); 
				app.to("idMOB23Matmaster");
				},
			showFooter : true,
			footer: new sap.m.Bar({
				//contentLeft: [ btnSearch.addStyleClass("search")],
		        contentRight: [
		                      // btnBack,
		                      btnChange  
		                       ]
			}).addStyleClass("footer"),
		});
	}
	}

});