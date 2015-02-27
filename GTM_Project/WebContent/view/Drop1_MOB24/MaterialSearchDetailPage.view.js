sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetailPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitscreens.DetailPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetailPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitscreens.DetailPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var matsrchpage = "";
		var matsrchDetail = "";
			
		
		if(g_runningOnPhone == false) {
		
			matsrchpage = sap.ui.view({id:"idMATSR", viewName:"com.cg.gtm.view.Drop1_MOB24.MatSearchView", type:sap.ui.core.mvc.ViewType.JS});	
			matsrchDetail = sap.ui.view({id:"idMATSRDetail", viewName:"com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetail", type:sap.ui.core.mvc.ViewType.JS});
		
			/*var width1 = ((screen.width)/2.2) + "px";
			var width2 = ((screen.width)/2.3) + "px";
			var height1 = width1.height + "px";*/

			//alert("Screen : "+screen.width);
			//matsrchpage.setWidth("32rem");
		//	matsrchpage.setHeight("810px");
		//	matsrchDetail.setWidth("36rem");
		//	matsrchDetail.setHeight("810px");
		}
		
				
		// create a simple matrix layout with given sizes
		/*var oLayout = new sap.ui.layout.HorizontalLayout({
			
			content: [matsrchpage,matsrchDetail]
			});*/
		
		/*var oLayout = new sap.m.FlexBox({
			
			items: [matsrchpage,
			        matsrchDetail
			        
			        ],
		//	direction:"Column",
			justifyContent:"SpaceBetween",
			alignItems:"Start",
		});*/
		
		
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				id: "MOB24Splitter-LayoutData",
				resizable : false,
				//size : "630px"
			});
			matsrchpage.setLayoutData(nonResize);
			
			}
		
		
		var oLayout = new sap.ui.layout.Splitter("MOB24Splitter", {
			
			contentAreas : [matsrchpage,matsrchDetail],
			resize : function(oEvent)
			{
				//debugger;
				//alert("resize");
				 
			}
		});
		
		
		
		 var btnSelMat = new sap.m.Button({
			 id : "matSerDetbtn",
             text: "{i18n>selectMat}",
             //type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1}),
	
           });
		  
		 btnSelMat.attachPress(oController.onMaterialSel);
		 btnSelMat.setVisible(true);
		// oLayout.createRow(matsrchpage,matsrchDetail);
		
		var lblConfirm = new sap.m.Label("lblConfirm", {
			text: "Are you sure what to add the material ?"
		});
		
		var leftButton_b = new sap.m.Button({
			  text : "No",
			  press : function(){
				  //splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
			    	//splitAppMOB17.toDetail("idMaterialFullDetPage");
				 // $("idMaterialFullDetPage").hide();
			    //	$("idMaterialList").hide();
			    //	$("idMaterialDetails").hide();
				  dialogWindow.close();
			  }
		  });
		 var RightButton_b = new sap.m.Button({
			  text : "Yes",
			  press : function(){
				  if (backNavMat == "Mob17") {
					  addMaterialInvoker();
					  var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
				    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
				    	splitAppMOB17.toDetail("idMaterialFullDetPage");
					  $("idMaterialList").show();
				    	$("idMaterialDetails").show();
				    	//sap.ui.getCore().byId("inputQty").setValue("");
				    	sap.ui.getCore().byId("inputSerial").setValue("");
				    	sap.ui.getCore().byId("inputBatch").setValue("");
					  dialogWindow.close();
					  
					  /*var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
					  lblQtyIcon.setSrc("");*/
				  }else if (backNavMat == "Mob18") {
					  addMaterialInvoker_mob18();
					  dialogWindow.close();
					  
					  /*var lblQty = sap.ui.getCore().byId("lblQty");
					  lblQty.setIcon("");*/
				  }
			  }
		  });
		  
		 var dialogWindow = new sap.m.Dialog("dialogWindow", {
			  title: "Add Material",
			  leftButton : leftButton_b,
			  rightButton: RightButton_b,
			  content : lblConfirm,
			 // width : "90%"
			
		  });
		
		
		
 		return new sap.m.Page({
 			showHeader: true,
			title: "Material List & Details",
			
			content: [
			          oLayout,
			],
			enableScrolling: false,
		
			//showNavButton: false,
			showFooter: true,
			
			footer: new sap.m.Bar({
		        contentRight: [
btnSelMat
		                       
		                       ]
			}).addStyleClass("Matfooter")
		});
	}

});