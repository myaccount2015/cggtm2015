sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.EnterInspectionMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.EnterInspectionMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.EnterInspectionMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.EnterInspectionMaster
	*/ 
	createContent : function(oController) {
		
		
		 busyDialog = new sap.m.BusyDialog({
	          title: "Search Material",
	          text: "Retrieving Material List..."
	         // showCancelButton: true
	          });
		

		var Header = new sap.m.ObjectHeader({
			title: "{i18n>MOB21_FINDINS}",
			titleactive : true,
		
				});
		var textDummy = new sap.m.Text({
			
		});
		
	
		var oListInsMast = new sap.m.List( {
            id : "oList1id", // sap.ui.core.ID
           // width : "300px", // sap.ui.core.CSSSize
        	//height : "80px",
        	mode: "Delete",
        	includeItemInSelection: true,
        	rememberSelection : false
     		//selectionChange : oController.list1_select ,
            
     });
		
		
	
		
		if( g_runningOnPhone == false)
			{
			oListInsMast.setWidth("300px");
	
			}
		
		
		
		oListInsMast.attachDelete(oController.deleteCriteria);
	
		  
	  var oListItemPlant = new sap.m.StandardListItem( {
                id : "oListItemPlant", // sap.ui.core.ID
                type : sap.m.ListType.Navigation, // sap.m.ListType
                title : "{i18n>MOB21_Plant} " ,
               
                press : function(){
                	oController.loadPlantMOB21() ;
                if(g_runningOnPhone == true)
        		 {
        		 g_MobileNavigationId = "Mob21-BackNavButton";
        		 var app = sap.ui.getCore().byId("myApp");  
              	 app.to("idMobView13");
        		 }
               	 
               	 else
               		 {
               		var app = sap.ui.getCore().byId("splitAppInsCreate1");  
               	 	app.toMaster("idMobView13");
               		 
               		 }
               	
               	 
			    }
        
                });

      var oListItemMat = new sap.m.StandardListItem( {
                 id : "oListItemMat", // sap.ui.core.ID
                 type : sap.m.ListType.Navigation, // sap.m.ListType
                 title : "{i18n>MOB21_Mat}", // string
                 press : function(){
                	 
                	 backNavMat = "idMOB21Mas";
                	 g_MobileNavigationId = "Mob21-BackNavButton";
             		var app = sap.ui.getCore().byId("myApp");  
                     app.to("idMob24MaterialSearch"); 
                     
                     //Default plant
                     g_inputPlantCode=window.localStorage.getItem("defPlantCode");
       			    sap.ui.getCore().byId("inputPlantMat").setValue(window.localStorage.getItem("defPlantDesc"))
       			    
                     var app = sap.ui.getCore().byId("splitAppMaterial");  
             	    app.toMaster("idMob24MaterialSearchInput");
             	    app.toDetail("idMATSRBlank");
             	  // var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
          	     //inputPlantMat.setEnabled(true);
                 }
        
                });

      var oListItemWC = new sap.m.StandardListItem( {
                 id : "oListItemWC", // sap.ui.core.ID
                 type : sap.m.ListType.Navigation, // sap.m.ListType
                 title : "{i18n>MOB21_WC}",
                 press : function(){
                	 
                	 sap.ui.getCore().byId("ipwrkcntr").setValue("");
                	 if(g_runningOnPhone == true)
                		 {
                		 g_MobileNavigationId = "Mob21-BackNavButton";
                		 var app = sap.ui.getCore().byId("myApp");  
                      	 app.to("idMobView_wrk");
                		 }
                	 else
                		 {
                		 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
                      	 app.toMaster("idMobView_wrk");
                		 }
                	 
                 }
                 });

      var oListItemVen = new sap.m.StandardListItem( {
                 id : "oListItemVen", // sap.ui.core.ID
                 type : sap.m.ListType.Navigation, // sap.m.ListType
                 title : "{i18n>MOB21_Vendor}" ,// string
                 header: sap.m.ListHeaderDesign.Standard,
                 press : function(){
                	 oController.loadvendorMOB21() ;
                	 if(g_runningOnPhone == true)
                		 {
                		 g_MobileNavigationId = "Mob21-BackNavButton";
                		 var app = sap.ui.getCore().byId("myApp");  
                      	 app.to("idMobView_ven");
                		 }
                	 else
                		 {
                		 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
                      	 app.toMaster("idMobView_ven");
                		 }
                	 
                 }
                 });
      
      var oListItemType = new sap.m.StandardListItem( {
          id : "oListItemType", // sap.ui.core.ID
          type : sap.m.ListType.Navigation, // sap.m.ListType
          title : "{i18n>MOB21_Type}" ,// string
          header: sap.m.ListHeaderDesign.Standard,
          press : function(){
        	 oController.loadTypeMOB21() ;
        	 
        	 if(g_runningOnPhone == true)
        		 {
        		 g_MobileNavigationId = "Mob21-BackNavButton";
        		 var app = sap.ui.getCore().byId("myApp");  
               	 app.to("idMob21TypeList");
        		 }
        	 else
        		 {
        		 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
               	 app.toMaster("idMob21TypeList");
        		 }
         	 
          }
          });
    		
        var btnSearch = new sap.m.Button({
                
                 text : "{i18n>MOB21_SRCH}",
                 icon: "sap-icon://search",
                 //style : sap.ui.commons.ButtonStyle.Accept,
                 press : function (){
                	      if(sap.ui.getCore().byId("oListItemPlant").getDescription()){
                	 
                	 if (g_runningOnPhone == true)
      	    	          {
      	    	          g_MobileNavigationId = "Mob21-SecondScreen-Mobile-BackNavButton"; 
      	    	          }
				            openSplashScreen();//splash screen
                	        setTimeout(function(){
				        		var app = sap.ui.getCore().byId("splitAppInsCreate1");  
					        	 app.toDetail("idBlankScreen");
				        		 oController.loadInsTree();	
				        	},1000);//constant delay
                	       
                	        
                	        
                 }
                	      else{
                	    	  
                	    	  sap.m.MessageBox.show(
      								"Please select a valid Plant",sap.m.MessageBox.Icon.ERROR,"Error");
                	      }
                	        
             		}
                 }).addStyleClass("btn");	
	
       oListInsMast.addItem(oListItemPlant);
       oListInsMast.addItem(oListItemMat);
       oListInsMast.addItem(oListItemWC);
       oListInsMast.addItem(oListItemVen);
       oListInsMast.addItem(oListItemType);
		
          	          		
		var containerListInsMast = new sap.m.FlexBox({
			items: [
			       oListInsMast,
			       
			       ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			//alignItems:"Center"
		});
		//containerListInsMast.addStyleClass("container");
		
		var containerBtnSearch = new sap.m.FlexBox({
			items: [
			        textDummy,
			     //  btnSearch
			       ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Center"
		});

		
		if( g_runningOnPhone == true)
			{
			return new sap.m.Page({
				title: "{i18n>MOB21_FINDINS}",
				id  : "Mob21-BackNavButton",
				content: [
	                           containerListInsMast,
	                           containerBtnSearch
	                           
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				enableScrolling: true,
	            showFooter: true,
	    		showNavButton: true,
	    	      navButtonTap:function(){  
	    	    	    g_MobileNavigationId = "MainGrid-Quality";
	    	    		var app = sap.ui.getCore().byId("myApp"); 
	    				app.to("idGridSubMenuQM");
	    	      },
				
				footer: new sap.m.Bar({
					//contentLeft: [ btnSearch.addStyleClass("search")],
					contentLeft: [
			                       btnSearch//.addStyleClass("search")
			                       
			                       ]
				})
				
			});
			}
		
		else
			{
			return new sap.m.Page({
				title: "{i18n>MOB21_FINDINS}",
				
				content: [
	                           containerListInsMast,
	                           containerBtnSearch
	                           
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				enableScrolling: true,
	            showFooter: true,
	   
				
				footer: new sap.m.Bar({
					//contentLeft: [ btnSearch.addStyleClass("search")],
					contentLeft: [
			                       btnSearch//.addStyleClass("search")
			                       
			                       ]
				}).addStyleClass("footer"),
				
			});
			
			}
		
 		
	}
});
	