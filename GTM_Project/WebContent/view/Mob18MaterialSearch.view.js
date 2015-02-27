sap.ui.jsview("com.cg.gtm.view.Mob18MaterialSearch", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18MaterialSearch
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18MaterialSearch";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18MaterialSearch
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var lblConfirm = new sap.m.Label({
			id:"Mob18-MaterialLbl1",
			text: ""
		});
		
		
		
		
		var leftButton_b = new sap.m.Button({
			  text : "No",
			  press : function(){
				  dialogWindow.close();
			  }
		  });
		 var RightButton_b = new sap.m.Button({
			  text : "Yes",
			  press : function(){
				  debugger;
				  //addMaterialInvoker();
				  if ( g_runningOnPhone == true)
	       			{
					  addMaterialInvoker_mob18();
						  setSelectedIndexForMatTable_scrap();
						  dialogWindow.close(); 
	       			}
				 else{
					  addMaterialInvoker_mob18();
						 // setSelectedIndexForMatTable_scrap();
						  dialogWindow.close();  
				  }
				  
					
				
				 // sap.ui.getCore().byId("inputMatNo_ser").setValue(lblConfirm.getText());
				
			  }
		  });
		  
		 var dialogWindow = new sap.m.Dialog({
			 id:"Mob18-AddMaterial-Dialog1",
			  title: "Warning",
		      icon: "img/download_1.jpg",
			  resizable: true,
			  leftButton : leftButton_b,
			  rightButton: RightButton_b,
			  content : lblConfirm,
			  width : "90%"
		  });
		 
		// dialogWindow.open();
		 
		 
		 
		
		
		var lblAddItemDesc = new sap.m.Label({
		      text: "{i18n>MOB17_AddItemDesc}",
		      width: "270px"
		    });
		
		lblAddItemDesc.addStyleClass("topBottomPadding");
		
		var lblOr = new sap.m.Label("lblOr_mat",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr.addStyleClass("topBottomPadAlignCenter");
		
		var lblOr1 = new sap.m.Label("lblOr1_mat",{
		      text: "(or)",
		      width: "270px",
		      textAlign: "Center"
		    });
		
		lblOr1.addStyleClass("topBottomPadAlignCenter");
		
		var btnScanMat = new sap.m.Button({
			text : "{i18n>MOB17_ScanMat}",
			press : function(){
				varScan = "Mob18Matmaster";
				
				//Mob17scan = "Material";
				sap.ui.getCore().byId("idMob24MaterialSearchInput")
						.getController().scanNow();
				//backNavMat == "MOB18" ;
		    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
				/*var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
				jsonScanResult.done(function(results){
			    var scannerRes = results.scanMaterials;
			    var MatInput = sap.ui.getCore().byId("inputMatNo_ser");
			    MatInput.setValue(scannerRes[0].Material);
				});*/
			}
		}).addStyleClass("btn");
		
		var btnSearchMat = new sap.m.Button({
			text : "{i18n>MOB17_SearchMat}",
			press : function(){
				//backNavMat = "";
				 backNavMat = "Mob18";
				
			 g_navbutton = "backScrapdetails";
			//Deselect table Items
				var deselect = sap.ui.getCore().byId("tableMat");
				deselect.removeSelections();  
				
				var app = sap.ui.getCore().byId("myApp");  
		        app.to("idMob24MaterialSearch"); 
		        
		        var app = sap.ui.getCore().byId("splitAppMaterial");  
			    app.toMaster("idMob24MaterialSearchInput");
			    app.toDetail("idMATSRBlank");
			    
			    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
			    inputPlantMat.setEnabled(true);
			  //  inputPlantMat.setValue("");
				}
			
		}).addStyleClass("btn");
		
		var btnAddMaterial = new sap.m.Button({
			id : "idAddMaterial_second",
			text : "{i18n>MOB17_AddMat}",
			icon: "sap-icon://add", 
			press : oController.addMaterial
		/*	press : function(){ //Adding the material to the list
				
				var tabMaterialLst = sap.ui.getCore().byId("tableMat");
				//var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
				var oModel = tabMaterialLst.getModel();
				if(oModel==undefined) {
					var aData1 = [
					  			{Material: "1134", Description: "Desc",Quantity: "1",Serial : "0001",UoM : "EA",Batch : "1",Location:"Ashford",LocationNo:"10035",Reason:"Reason for Move" },
					  			
					  			];
					oModel = new sap.ui.model.json.JSONModel();
					
					oModel.setData({modelData: aData1});
					tabMaterialLst.setModel(oModel);
				} else {
					var arrMatLst = oModel.oData.modelData;
					var objMaterial = {Material: "1134", Description: "Desc",Quantity: "1",Serial : "0001",UoM : "EA",Batch : "1",Location:"Ashford",LocationNo:"10035",Reason:"Reason for Move" };
					arrMatLst.push(objMaterial);
					
					var oModel2 = new sap.ui.model.json.JSONModel();
					
					oModel2.setData({modelData: arrMatLst});
					tabMaterialLst.setModel(oModel2);
				}
				
				
				 * Navigating to detail page - Start
				 
				var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
				idMOB18SplitApp.toDetail("idMOB18SplitScrap"); //navigate to detail split screen
				
				
				 * Navigating to detail page - End
				 
				
			}*/
			
		});
		
		 var inputMatNo  = new sap.m.Input("inputMatNo_ser",{
			 width:"270px",
			 type: sap.m.InputType.Number,
			 placeholder: 'Type Material Number...',
			  maxLength : 13,
			   liveChange : function(){
				   //field_numeric_validation(sap.ui.getCore().byId("selno"));//go to string utility  
			  			
			  		    
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
          text: "Back",
          icon: "sap-icon://sys-back" ,
         press : oController.onBackMatMaster
          
        });
		
		/////////////////////////////////////Mobile///////////////////////////////
		

		
		 if(g_runningOnPhone == true)
			{
			 
			 //Add Description
				var container_AddItemDesc = new sap.m.FlexBox({
					items: [
					        lblAddItemDesc
						        ],
						direction:"Column",
						justifyContent:"Start",//Contents would be placed in the begin
						alignItems:"Start"
					});
				
				 
				 //Scan Material Button
					var container_scanbtn = new sap.m.FlexBox({
						items: [
						        btnScanMat
							        ],
							direction:"Column",
							justifyContent:"Start",//Contents would be placed in the begin
							alignItems:"Start"
						});
				
					//Label or
					var container_lblor = new sap.m.FlexBox({
						items: [
						        lblOr
							        ],
							direction:"Column",
							justifyContent:"Start",//Contents would be placed in the begin
							alignItems:"Start"
						});
					
					//Search MAterial Button
					var container_btnSearch = new sap.m.FlexBox({
						items: [
						        btnSearchMat
							        ],
							direction:"Column",
							justifyContent:"Start",//Contents would be placed in the begin
							alignItems:"Start"
						});
					
					//Label or1
					var container_lblor1 = new sap.m.FlexBox({
						items: [
						        lblOr1
							        ],
							direction:"Column",
							justifyContent:"Start",//Contents would be placed in the begin
							alignItems:"Start"
						});
					
					//Material No
					var container_Matno = new sap.m.FlexBox({
						items: [
						        inputMatNo
							        ],
							direction:"Column",
							justifyContent:"Start",//Contents would be placed in the begin
							alignItems:"Start"
						});
					
					//Main container
					var TheScrollContainer1 = new sap.m.ScrollContainer({
				          horizontal : true,
				          vertical : true,
				          content : [container_AddItemDesc,
				                     container_scanbtn, 
				                     container_lblor,
				                     container_btnSearch,
				                     container_lblor1,
				                     container_Matno
				                     ],
				          justifyContent:"Center"
				      });
						
						TheScrollContainer1.addStyleClass("ContainerPadding");
						
			
	        	
	        	return new sap.m.Page({
	        		id : "Mob18_Materialsearch",
	    			title: "Order Items",
	    			// headerContent :[btnBack],
	    			content: [
	    			          TheScrollContainer1
	    			] ,
	    			
					showNavButton: false,
					enableScrolling: false,
					
					showFooter: true,
					footer: new sap.m.Bar({
						contentLeft: [   btnBack],
				        contentRight: [
				                       
				                       btnAddMaterial
				                       ]
					}).addStyleClass("footer_phone"),
showNavButton: true,
					
		            navButtonTap:function(){  
		          	 
		            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
		                        
		                           
		                           
		                           if(g_backNavMOB18 == "Mob18_matback"){
		                      		 if(g_runningOnPhone == true)
		                      			{
		                      			 g_MobileNavigationId = "Mob18_scrapmas";
		                      				var app = sap.ui.getCore().byId("myApp");  
		                      				app.to("idMOB18Scrapmas");
		                      			}
		                      	  
		                      	//	sap.ui.getCore().byId("idAddMaterial_Scrap").setVisible(true);
		                      	}else  if(g_backNavMOB18 == "Mob18_matback2"){
		                      		if(g_runningOnPhone == true)
		                      		{
		                      			 g_MobileNavigationId = "Mob18_WBSMaster";
		                      			var app = sap.ui.getCore().byId("myApp");  
		                      			app.to("idMOB18WBSmas");
		                      		}
		                      		
		                      	  
		                      	}
		                        	else if(g_backNavMOB18 == "Mob18_matback3"){
		                        		if(g_runningOnPhone == true)
		                      		{
		                        			 g_MobileNavigationId = "Mob18_costMas";
		                      			var app = sap.ui.getCore().byId("myApp");  
		                      			app.to("idMOB18Costmas");
		                      		}
		                        		
		                      	  	
		                        	}
		                           }
					
		            
		            
	    		});
	    	}
		
		 else{
			 /////////////////////////Tablet/Desktop////////////////////////////
		 		return new sap.m.Page({
		 			id : "Mob18_Materialsearch",
					title: "Material Search",
					content: [
					          TheScrollContainer1
					],
					showFooter: true,
					footer: new sap.m.Bar({
						contentLeft: [   btnBack],
				        contentRight: [
				                      
				                       btnAddMaterial
				                       ]
					}).addStyleClass("footer"),
showNavButton: false,
					
		            navButtonTap:function(){  
		            	if(g_backNavMOB18 == "Mob18_matback"){
                     		 if(g_runningOnPhone == false)
                     			{
                     			 g_MobileNavigationId = "Mob18_scrapmas";
                     			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
                				app.toMaster("idMOB18Scrapmas");
                				app.toDetail("idMOB18Blank");
                     			}
                     	  
                     	//	sap.ui.getCore().byId("idAddMaterial_Scrap").setVisible(true);
                     	}else  if(g_backNavMOB18 == "Mob18_matback2"){
                     		if(g_runningOnPhone == false)
                     		{g_runningOnPhone
                     			 g_MobileNavigationId = "Mob18_WBSMaster";
                     			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
                    		  	app.toMaster("idMOB18WBSmas");
                    		  	app.toDetail("idMOB18Blank");
                     		}
                     		
                     	  
                     	}
                       	else if(g_backNavMOB18 == "Mob18_matback3"){
                       		if(g_runningOnPhone == false)
                     		{
                       			 g_MobileNavigationId = "Mob18_costMas";
                       			var app = sap.ui.getCore().byId("idMOB18SplitApp");  
                      		    app.toMaster("idMOB18Costmas");
                      		  app.toDetail("idMOB18Blank");
                     		}
                       		
                     	  	
                       	}
                          }
			
				});
			} 
		 }
		 
		

});