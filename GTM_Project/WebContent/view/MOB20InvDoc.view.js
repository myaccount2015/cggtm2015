sap.ui.jsview("com.cg.gtm.view.MOB20InvDoc", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB20InvDoc
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB20InvDoc";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB20InvDoc
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		var listMatNo = new sap.m.List({
			  id : "Mob20-listMatNo",
		      mode: sap.m.ListMode.SingleSelectMaster,
		  	  height : "300px",
		      includeItemInSelection: true,
		      select : oController.Mob20MasterPageSel,
		      rememberSelections : false,
		      items: {
		    	  path: "/results",
		          template: 
		          new sap.m.StandardListItem({
		          id : "Mob20-stdMatSel",
		          title: "{Physinventory}",
		          description: "Location: " + "{StgeLoc}"+"-"+"{Slocdesc}",
		          info : "Item: "+"{Countitems}",
		          icon :  "{icon}",
		          iconDensityAware: false,
		          iconInset: false ,
		          })
		          }
	              }).addStyleClass("paddingBottom");
		
		
		
    /*	var oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel(result, "results");
    	var listMat = sap.ui.getCore().byId("Mob20-listMatNo");
    	listMat.setModel(oJSONModelMob20MasterList);*/
		
		
		//Space
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		
		lblDummy1.addStyleClass("HideLabel");
		
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		
		lblDummy2.addStyleClass("HideLabel");
		var containerList = new sap.m.FlexBox({
		items: [lblDummy1,
                lblDummy2
		       ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Center"
		       });
		if ( g_runningOnPhone == true)
		{
			return new sap.m.Page({
				id:"Mob20-InvdocMaster",
				title: "{i18n>MOB20_IniPageTit}",
				content: [
	                    listMatNo,
	                    containerList
                         ],
                         headerContent: new sap.m.Button({
     					icon: "sap-icon://sys-help",
     					press: oController.handleHelpButtonPress
     				}),
             			
				enableScrolling: true,
	            showNavButton: true,
		        navButtonTap:function(){ 
		        	 g_MobileNavigationId = "MainGrid-Inventory";
	            	    sap.ui.getCore().byId("LocallblLoadingPageMob20").setText("1");
	                    var app = sap.ui.getCore().byId("myApp"); 
	                        app.to("idGridSubMenuIMWM");
	                     },
				showFooter: true,
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: []
				})
			    });
		        }
		
		else{
			
			return new sap.m.Page({
				
				title: "{i18n>MOB20_IniPageTit}",
				content: [
	            listMatNo,
	            containerList
                ],
                headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				enableScrolling: false,
				showFooter: true,
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: []
				}).addStyleClass("footer")
			});	
		    }
		
 	
	}

});