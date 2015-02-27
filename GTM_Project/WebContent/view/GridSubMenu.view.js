sap.ui.jsview("com.cg.gtm.view.GridSubMenu", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.GridSubMenu
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.GridSubMenu";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.GridSubMenu
	*/ 
	createContent : function(oController) {
		
	    // create tile container
	   var tileContainer = new sap.m.TileContainer({
		   id :"tilecon",
	      tileDelete : function (evt) {
	        var tile = evt.getParameter("tile");
	        evt.getSource().removeTile(tile);
	      },
	      tiles : [
	        
			new sap.m.StandardTile({
				//id : "tile1",
			    icon : "newicon/ico_displaydocument2.png",
			  //  number : "1",
			   // numberUnit : "Maintenence",
			    title : "{i18n>DisDoc}",
			    info : "{i18n>DocInfo}",
			   // infoState: "Error"
			  }),
			  
			  new sap.m.StandardTile({
				 // id : "tile2",
				    icon : "icon/ico_materialsearch.png",
				  //  number : "2",
				   // numberUnit : "Production",
				    title : "{i18n>mat_searchTit}",
				    info : "{i18n>mat_searchTit}",
				//    infoState: "{i18n>Er}"
				  }),
				  
			  new sap.m.StandardTile({
				//  id : "tile3",
				    icon : "icon/ico_createnotification.png",
				  //  number : "3",
				    //numberUnit : "Quality",
				    title : "{i18n>mob15NotTit}",
				    info : "{i18n>mob15NotTit}",
				//    infoState: "{i18n>Sc}"
				  }),
				  
				  new sap.m.StandardTile({
					//  id : "tile4",
					    icon : "icon/ico_notitasklist.png",
					//    number : "4",
					   // numberUnit : "Inventory",
					    title : "{i18n>NotTaskList}",
					    info : "{i18n>NotTaskList}",
					//    infoState: "{i18n>Sc}"
					  }),
					  new sap.m.StandardTile({
						//  id : "tile5",
						    icon : "icon/ico_createinspection.png",
						  //  number : "5",
						  //  numberUnit : "Goods",
						    title : "{i18n>CreIns}",
						    info : "{i18n>CreIns}",
						//    infoState: "{i18n>Sc}"
						  }) ,
						  
						  new sap.m.StandardTile({
								//id : "tile1",
							    icon : "icon/ico_enterinspectionresults.png",
							  //  number : "6",
							   // numberUnit : "Maintenence",
							    title : "{i18n>EnterInfo}",
							    info : "{i18n>EnterInfo}",
							//    infoState: "{i18n>Er}"
							  }),
							  
							  new sap.m.StandardTile({
								 // id : "tile2",
								    icon : "icon/ico_labelprint.png",
								  //  number : "7",
								   // numberUnit : "Production",
								    title : "{i18n>LabPrnt}",
								    info : "{i18n>Prnt_labl}",
								 //   infoState: "{i18n>Er}"
								  }),
								  
							  new sap.m.StandardTile({
								//  id : "tile3",
								    icon : "sap-icon://technical-object",
								  //  number : "8",
								    //numberUnit : "Quality",
								    title : "{i18n>StoTrn}",
								    info : "{i18n>StoTrn}",
								 //   infoState: "{i18n>Sc}"
								  }),
								  
								  new sap.m.StandardTile({
									//  id : "tile4",
									    icon : "sap-icon://inventory",
									  //  number : "9",
									   // numberUnit : "Inventory",
									    title : "{i18n>StoIsu}",
									    info : "{i18n>StoIsu}",
									//    infoState: "{i18n>Sc}"
									  }),
									  new sap.m.StandardTile({
										//  id : "tile5",
										    icon : "sap-icon://inventory",
										//    number : "10",
										  //  numberUnit : "Goods",
										    title : "{i18n>Gud_rec}",
										    info : "{i18n>Gud_rec}",
										//    infoState: "{i18n>Sc}"
										  }) ,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "sap-icon://factory",
				  //  number : "11",
				   // numberUnit : "Maintenence",
				    title : "{i18n>EntImCnt}",
				    info : "{i18n>EntImCnt}",
				   // infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					  //  number : "12",
					   // numberUnit : "Production",
					    title : "{i18n>EntWmCnt}",
					    info : "{i18n>EntWmCnt}",
					  //  infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					   // number : "13",
					    //numberUnit : "Quality",
					    title : "{i18n>PutWy}",
					    info : "{i18n>PutWy}",
				//	    infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "sap-icon://inventory",
						  //  number : "14",
						   // numberUnit : "Inventory",
						    title : "{i18n>PicNg}",
						    info : "{i18n>PicNg}",
						//    infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "sap-icon://inventory",
							  // number : "15",
							  //  numberUnit : "Goods",
							    title : "{i18n>ChngStkSta}",
							    info : "{i18n>ChngStkSta}",
							    //infoState: "{i18n>Sc}"
							  }) 
			,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "sap-icon://factory",
				  //  number : "16",
				   // numberUnit : "Maintenence",
				    title : "{i18n>BintoBi}",
				    info : "{i18n>BintoBi}",
				  //  infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					   // number : "17",
					   // numberUnit : "Production",
					    title : "{i18n>Mob34}",
					    info : "{i18n>Mob34}",
					  //  infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					   // number : "18",
					    //numberUnit : "Quality",
					    title : "{i18n>Mob35}",
					    info : "{i18n>Mob35}",
					  //  infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "sap-icon://inventory",
						  //  number : "19",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmOrdLis}",
						    info : "{i18n>PmOrdLis}",
						   // infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "sap-icon://inventory",
							  //  number : "20",
							  //  numberUnit : "Goods",
							    title : "{i18n>PmAsitChg}",
							    info : "{i18n>PmAsitChg}",
							  //  infoState: "{i18n>Sc}"
							  }) 
			
			,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "sap-icon://factory",
				   // number : "21",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PmOrdCnf}",
				    info : "{i18n>PmOrdCnf}",
				 //   infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					   // number : "22",
					   // numberUnit : "Production",
					    title : "{i18n>PmOrdChg}",
					    info : "{i18n>PmOrdChg}",
					 //   infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					 //   number : "23",
					    //numberUnit : "Quality",
					    title : "{i18n>PmOrdPic}",
					    info : "{i18n>PmOrdPic}",
					 //   infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "sap-icon://inventory",
						  //  number : "24",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmOrdRet}",
						    info : "{i18n>PmOrdRet}",
						  //  infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "sap-icon://inventory",
							 //   number : "25",
							  //  numberUnit : "Goods",
							    title : "{i18n>PmMesu}",
							    info : "{i18n>PmMesu}",
							   // infoState: "{i18n>Sc}"
							  }) 
			
			,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "sap-icon://factory",
				   // number : "26",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PmAsitRep}",
				    info : "{i18n>PmAsitRep}",
				  //  infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					  //  number : "27",
					   // numberUnit : "Production",
					    title : "{i18n>PmNotCre}",
					    info : "{i18n>PmNotCre}",
					   // infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					  //  number : "28",
					    //numberUnit : "Quality",
					    title : "{i18n>PmFunChg}",
					    info : "{i18n>PmFunChg}",
					  //  infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "sap-icon://inventory",
						  //  number : "29",
						   // numberUnit : "Inventory",
						    title : "{i18n>PmWrkCenLd}",
						    info : "{i18n>PmWrkCenLd}",
						 //   infoState: "{i18n>Sc}"
						  }),
						  new sap.m.StandardTile({
							//  id : "tile5",
							    icon : "sap-icon://inventory",
							   // number : "30",
							  //  numberUnit : "Goods",
							    title : "{i18n>StkOvr}",
							    info : "{i18n>StkOvr}",
							  //  infoState: "{i18n>Sc}"
							  }) 
			
			,
			
			
			 new sap.m.StandardTile({
					//id : "tile1",
				    icon : "sap-icon://factory",
				   // number : "31",
				   // numberUnit : "Maintenence",
				    title : "{i18n>PpOrdLst}",
				    info : "{i18n>PpOrdLst}",
				   // infoState: "{i18n>Er}"
				  }),
				  
				  new sap.m.StandardTile({
					 // id : "tile2",
					    icon : "sap-icon://fridge",
					   // number : "32",
					   // numberUnit : "Production",
					    title : "{i18n>PpOrdDet}",
					    info : "{i18n>PpOrdDet}",
					   // infoState: "{i18n>Er}"
					  }),
					  
				  new sap.m.StandardTile({
					//  id : "tile3",
					    icon : "sap-icon://technical-object",
					  //  number : "33",
					    //numberUnit : "Quality",
					    title : "{i18n>PpOrdCnf}",
					    info : "{i18n>PpOrdCnf}",
					  //  infoState: "{i18n>Sc}"
					  }),
					  
					  new sap.m.StandardTile({
						//  id : "tile4",
						    icon : "sap-icon://inventory",
						 //   number : "34",
						   // numberUnit : "Inventory",
						    title : "{i18n>PpOrdCom}",
						    info : "{i18n>PpOrdCom}",
						  //  infoState: "{i18n>Sc}"
						  })
						 
			
			
			
			
	       
	      ]
	    });
	   
	   
	   this.page = new sap.m.Page({
			title: "{i18n>ApplicationName}",
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