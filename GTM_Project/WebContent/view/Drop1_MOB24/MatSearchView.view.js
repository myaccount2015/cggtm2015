sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.MatSearchView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.MatSearchView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.MatSearchView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.MatSearchView
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		
		itmsel = function (evt) {
			var selectedText = evt.getParameter('listItem').getTitle();
		
			
		    };
		    
		  var space = new sap.m.Label({
			 text : "hai",
			 width : "50px"
		  });
		    
		var listMatNo = new sap.m.List({
			  id : "listMatNo",
		      mode: sap.m.ListMode.SingleSelectMaster,
		  	  height : "300px",
		      includeItemInSelection: true,
		      select : oController.matSel,
		      rememberSelections : false,
		       
		      items: {
		    	  path: "/results",
		        template: 
		        	
		          new sap.m.StandardListItem({
		          id : "stdMatSel",
		          title: "{Materialno}",
		          description: "{Description}",
		          info : "{VendorName}",
		          iconDensityAware: false,
		          iconInset: false ,
		         
		        })
		        	
		      }
	
		 }).addStyleClass("paddingBottom");
		
		
		/*var matnrModel = new sap.ui.model.json.JSONModel(oMD15DataMATNR);
		listMatNo.setModel(matnrModel);*/
		 
		/* var b =  new sap.m.Button({
	         
	         type: sap.m.ButtonType.Emphasized,
	         text: "{i18n>cancel}",
	         tap : function() {
	        	 
	        	 var app = sap.ui.getCore().byId("splitAppMaterial");  
	        	 app.toMaster("idMob24MaterialSearchInput");
	        	 app.toDetail("idMATSRBlank");
	         }
		 
	});*/
		 
		 var lblDummy2 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy2.addStyleClass("HideLabel");
			
			var lblDummy3 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy3.addStyleClass("HideLabel");
			var lblDummy4 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy4.addStyleClass("HideLabel");
			var lblDummy5 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy5.addStyleClass("HideLabel");
			var lblDummy6 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy6.addStyleClass("HideLabel");
/*		 
		 var btnSelMat = new sap.m.Button({
             text: "{i18n>selectMat}",
             type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1})
           });
		  
		 btnSelMat.attachPress(oController.onMaterialSel);
		 
		 var container = new sap.m.FlexBox({
				items: [
				        	 btnSelMat
				        ],
				direction:"Column",
				justifyContent:"Center",
				alignItems:"Start",
				width : "100%",
				height : "100%"
			});
		 
		// container.addStyleClass("ContainerPaddingLeft");
*/		 
			/*var container = new sap.m.FlexBox({
				items: [
    listMatNo,
	lblDummy2,
	lblDummy3,
	lblDummy4,
	lblDummy5,
	lblDummy6
				        ],
				direction:"Column",
				justifyContent:"Begin",
				alignItems:"Start",
				
			});*/
			
			if( g_runningOnPhone == true)
				{
				return new sap.m.Page("Mob24-SecondScreen-BackNavButton", {
					title: "Material List",
		 			enableScrolling: true,
		 		
					showNavButton : true, // boolean
					//headerContent:[btnSelMat],
					   navButtonTap:function(){
						   
							var app = sap.ui.getCore().byId("myApp"); 
							app.to("idMob24MaterialSearch");
							
							 g_MobileNavigationId = "Mob24-BackNavButton";
					   },
					content: [
					          	
					        
					          listMatNo
					],


					showFooter: false,
					footer: new sap.m.Bar({
				        contentRight: [
				                      // btnSelMat
				                       
				                       ]
					})//.addStyleClass("Selfooter")
				});
		 		
				
				}
			else
				{
				return new sap.m.Page("Mob24-SecondScreen-BackNavButton", {
					title: "Material List",
					showHeader: false,
		 			enableScrolling: true,
		 		
					showNavButton : false, // boolean
					//headerContent:[btnSelMat],
					content: [
					          
					          	
					          	listMatNo
					],


					showFooter: false,
					footer: new sap.m.Bar({
				        contentRight: [
				                      // btnSelMat
				                       
				                       ]
					})//.addStyleClass("Selfooter")
				});
		 		
				}
 		
 		
 		
 		
 		
	}

});