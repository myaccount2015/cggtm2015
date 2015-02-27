sap.ui.jsview("com.cg.gtm.view.MOB17_MaterialSearch", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MaterialSearch
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17_MaterialSearch";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17_MaterialSearch
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var lblAddItemDesc = new sap.m.Label({
		      text: "{i18n>MOB17_AddItemDesc}",
		      width: "270px"
		    });
		
		lblAddItemDesc.addStyleClass("topBottomPadding");
		
		var lblOr = new sap.m.Label("lblOr",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr.addStyleClass("topBottomPadAlignCenter");
		
		var lblOr1 = new sap.m.Label("lblOr1",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr1.addStyleClass("topBottomPadAlignCenter");
		
		var btnScanMat = new sap.m.Button({
			text : "{i18n>MOB17_ScanMat}",
			press : oController.addMaterialScan
		}).addStyleClass("btn");
		
		var btnSearchMat = new sap.m.Button({
			text : "{i18n>MOB17_SearchMat}",
			press : function(){
				backNavMat = "Mob17";
				
				var app = sap.ui.getCore().byId("myApp");  
		        app.to("idMob24MaterialSearch"); 
		        
		        var app = sap.ui.getCore().byId("splitAppMaterial");  
			    app.toMaster("idMob24MaterialSearchInput");
			    app.toDetail("idMATSRBlank");
			    
			    
			    g_inputPlantCode=window.localStorage.getItem("defPlantCode");
			    sap.ui.getCore().byId("inputPlantMat").setValue(window.localStorage.getItem("defPlantDesc"))
			    
			   /* var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
			    inputPlantMat.setEnabled(true);
			    inputPlantMat.setValue("");*/
			}
		}).addStyleClass("btn");
		
		var btnAddMaterial = new sap.m.Button("btnAddMaterial", {
			text : "{i18n>MOB17_NEXT}",
			icon: "sap-icon://arrow-right", 
			press : oController.addMaterial
		});
		
		 var inputMatNo  = new sap.m.Input("inputMatNo",{
			 width:"270px",
				type :sap.m.InputType.Tel,
			 placeholder: '{i18n>MOB17_TypeMatNo}',
			  maxLength : 13,
			   liveChange : function(){
				   field_numeric_validation(sap.ui.getCore().byId("inputMatNo"));//go to string utility  
			  			
			  		    
			  		},
			  layoutData : new sap.ui.layout.GridData({
		         span: "L3 M3 S12",
		         linebreakL: true,
					linebreakM: true,
					linebreakS: true
		 })
		 
		 });
		
		var TheScrollContainer1 = new sap.m.ScrollContainer({
            horizontal : true,
            vertical : true,
            content : [lblAddItemDesc,
                       btnScanMat, 
                       lblOr,
                       btnSearchMat,
                       lblOr1,
                       inputMatNo
                       ],
            justifyContent:"Center"
        });
		
		TheScrollContainer1.addStyleClass("ContainerPadding");
		
		var btnBack = new sap.m.Button({
            text: "{i18n>MOB17_BtnBack}",
            icon: "sap-icon://arrow-left" ,
            press : function ()
            {
            	if ( g_runningOnPhone == true)
        		{
            		var myApp = sap.ui.getCore().byId("myApp");
			    	myApp.to("idMOB17");
        		}else {
            	var app = sap.ui.getCore().byId("splitAppMOB17");  
          	  	app.toMaster("idMOB17_MasterActionPage");
            
          	  	sap.ui.getCore().byId("addMatFooterLast").setVisible(true);
        		}
            }
            
          });
		
		/*var btnNext = new sap.m.Button({
			 id : "matSerNxtbtn2",
           text: "{i18n>MOB17_NEXT}",
           icon : "sap-icon://arrow-right",
           //type: sap.m.ButtonType.Accept,
           layoutData: new sap.m.FlexItemData({growFactor: 1}),
           press : function(){
        	   g_MobileNavigationId = "Mob17_Matlist";
           		var myApp = sap.ui.getCore().byId("myApp");
           		myApp.to("idMaterialList");
           }
         });*/
		
		var bar = null;
		
		if ( g_runningOnPhone == true)
   		{
			bar = new sap.m.Bar({
		        contentRight: [
		                       btnBack,
		                       btnAddMaterial
		                       ]
			});
   		}else {
   			bar = new sap.m.Bar({
   		        contentRight: [
   		                       btnBack,
   		                       btnAddMaterial
   		                       ]
   			});
   		}
		
		if ( g_runningOnPhone != true)
		{
			bar.addStyleClass("Matfooter");
		}
		
		var page = new sap.m.Page({
			id : "Mob17_MaterialSearch",
			title: "{i18n>MOB17_AddMatTitle}",
			content: [
			          TheScrollContainer1
			],
			showFooter: true,
			footer: bar,
			showNavButton: false,
			navButtonTap:function(){ 
				  g_MobileNavigationId = "Mob17-BackNavButton";
				  alert("To Master");
				  var app = sap.ui.getCore().byId("splitAppMOB17");  
	          	  	app.toMaster("idMOB17_MasterActionPage");
	            
	          	  	sap.ui.getCore().byId("addMatFooterLast").setVisible(true);
	        },
		});
		
 		return page;
	}

});