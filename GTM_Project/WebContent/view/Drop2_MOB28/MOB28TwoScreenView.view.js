sap.ui.jsview("com.cg.gtm.view.Drop2_MOB28.MOB28TwoScreenView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB28.MOB28TwoScreenView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB28.MOB28TwoScreenView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB28.MOB28TwoScreenView
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.2) + "px";
		var width2 = ((screen.width)/2.3) + "px";*/
		//var height1 = width1.height + "px";
	
		var matListpage = sap.ui.view({id:"idMob28MatListPage", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28MatList", type:sap.ui.core.mvc.ViewType.JS});	
		var matDetpage = sap.ui.view({id:"idMob28MatDetPage", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28MatDetails", type:sap.ui.core.mvc.ViewType.JS});		
	
		
		/*matListpage.setWidth(width1);
		matDetpage.setWidth(width2);*/
		matListpage.setHeight("810px");
		matDetpage.setHeight("810px");
		// create a simple matrix layout with given sizes
		/*var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : "100%"

			});
		oLayout.createRow(matListpage,matDetpage);
		*/
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[matListpage,matDetpage]
		});*/
		
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			matListpage.setLayoutData(nonResize);
			}
	
		
		
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB28Splitter",
			contentAreas : [matListpage,matDetpage]
		});
	
	    var btnSaveMOB28 = new sap.m.Button({
	    	id : "Mob28Save",
	    	text : "Save",
	    	icon : "sap-icon://save",
	    	press : function(){
	    		debugger;
	    		validateMATNUMAccess="MOB28";
				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
				validateMatNum(sap.ui.getCore().byId("MOB28Mat").getText());
				
				if(g_isMOB17Ser==false){
	    		if (oController.checkQtyMob28())
	    			{
	    			oController.saveMOB28();
	    			}
	    	}
	    			//}
	    	}
	    });
	    btnSaveMOB28.setVisible(false);
	    
	   /* var btnScan = new sap.m.Button
		(
				{ id : "Mob28-thrdScr-btnScan",
		text : "{i18n>Mob20_Scan}", 
		icon : "img/ico_rect_scanbarcode.png",
		press : function(){
		sap.ui.getCore().byId("Mob28-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob28-popWin").open();
		//popWin.open();
		}
				}
				);*/
	    
 		return new sap.m.Page({
			title: "",
			content: [
            oLayout
			],
			enableScrolling: false,
			
			//showNavButton: false,
			showFooter: true,
			showHeader: false,
			 navButtonTap:function(){  
					sap.ui.getCore().byId("idMOB28SplitApp").to("idMOB20-blankPage");
              },
             
              
			footer: new sap.m.Bar({
		        contentRight: [
		                       	btnSaveMOB28               
		                       ]
			}).addStyleClass("footer")
		});
	}

});