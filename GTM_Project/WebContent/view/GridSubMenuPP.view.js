sap.ui.jsview("com.cg.gtm.view.GridSubMenuPP", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenuPP
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenuPP";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenuPP
	*/ 
	createContent : function(oController) {
		
	    // create tile container
		
		 var prodTile = new sap.m.StandardTile({
		     id : "PPORD",
		    icon : "icon/ico_orderlist.png",
		  //  number : "19",
		   // numberUnit : "Inventory",
		    title : "{i18n>PmOrdLis}",
		    info : "{i18n>PmOrdLis}",
		//    infoState: "{i18n>Sc}"
		  });
		  
	   var tileContainer = new sap.m.TileContainer({
		  id :"tileconPP",
		   //id :"PP",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	      /*tiles : [
	               

					  new sap.m.StandardTile({
						     id : "PPORD",
						    icon : "icon/ico_orderlist.png",
						  //  number : "19",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmOrdLis}",
						    info : "{i18n>PmOrdLis}",
						//    infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "icon/ico_assetchange.png",
							//    number : "20",
							  //  numberUnit : "Goods",
							    title : "{i18n>PmAsitChg}",
							    info : "{i18n>PmAsitChg}",
							//    infoState: "{i18n>Sc}"
							  }),
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "icon/ico_orderconfirm.png",
				//    number : "21",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PmOrdCnf}",
				    info : "{i18n>PmOrdCnf}",
				  //  infoState: "{i18n>Er}"
				  }),
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "icon/ico_orderchange.png",
					 //   number : "22",
					   // numberUnit : "Production",
					    title : "{i18n>PmOrdChg}",
					    info : "{i18n>PmOrdChg}",
					 //   infoState: "{i18n>Er}"
					  }),
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "icon/ico_Orderpick.png",
					//    number : "23",
					    //numberUnit : "Quality",
					    title : "{i18n>PmOrdPic}",
					    info : "{i18n>PmOrdPic}",
					 //   infoState: "{i18n>Sc}"
					  }),
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "icon/ico_assetlist.png",
						  //  number : "24",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmAssLst}",
						    info : "{i18n>PmAssLstDesc}",
						 //   infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "icon/ico_measure.png",
							 //   number : "25",
							  //  numberUnit : "Goods",
							    title : "{i18n>PmMesu}",
							    info : "{i18n>PmMesu}",
							  //  infoState: "{i18n>Sc}"
							  }),
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "icon/ico_assetreplace.png",
				   // number : "26",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PmAsitRep}",
				    info : "{i18n>PmAsitRep}",
				  //  infoState: "{i18n>Er}"
				  }),
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "icon/ico_createnotification.png",
					  //  number : "27",
					   // numberUnit : "Production",
					    title : "{i18n>PmNotCre}",
					    info : "{i18n>PmNotCre}",
					   // infoState: "{i18n>Er}"
					  }),
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "icon/ico_trainoverview.png",
					  //  number : "28",
					    //numberUnit : "Quality",
					    title : "{i18n>PmTrnOvr}",
					    info : "{i18n>PmTrnOvrDesc}",
					  //  infoState: "{i18n>Sc}"
					  }),
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "icon/ico_workcenterload.png",
						  // number : "29",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmWrkCenLd}",
						    info : "{i18n>PmWrkCenLd}",
						   // infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "icon/ico_stockoverview.png",
							//    number : "30",
							  //  numberUnit : "Goods",
							    title : "{i18n>StkOvr}",
							    info : "{i18n>StkOvr}",
							  //  infoState: "{i18n>Sc}"
							  }),
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "icon/ico_orderlist.png",
				//    number : "31",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PpOrdLst}",
				    info : "{i18n>PpOrdLst}",
				  //  infoState: "{i18n>Er}"
				  }),
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "icon/ico_Orderdetails.png",
					//    number : "32",
					   // numberUnit : "Production",
					    title : "{i18n>PpOrdDet}",
					    info : "{i18n>PpOrdDet} 	",
					  //  infoState: "{i18n>Er}"
					  }),
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "icon/ico_orderconfirm.png",
					  //  number : "33",
					    //numberUnit : "Quality",
					    title : "{i18n>PpOrdCnf}",
					    info : "{i18n>PpOrdCnf}",
					 //   infoState: "{i18n>Sc}"
					  }),
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "icon/ico_ordercomponents.png",
						  //  number : "34",
						   // numberUnit : "Inventory",
						    title : "{i18n>PpOrdCom}",
						    info : "{i18n>PpOrdCom}",
						  //  infoState: "{i18n>Sc}"
						  })
	      ]*/
	    });
	   
	   
	   this.page = new sap.m.Page({
			title: "{i18n>GridSubMenPpTit}",
			content: [
			          	tileContainer
					],
					showNavButton: true,
					enableScrolling: false,
		            navButtonTap:function(){  
		                           app = sap.ui.getCore().byId("myApp");  
		                           app.to("idGrid");  
		            }  
		});
	    
 		return this.page;
	
		
	}

});