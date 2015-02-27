sap.ui.jsview("com.cg.gtm.view.Mob18OrderBearingCase", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18OrderBearingCase
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18OrderBearingCase";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18OrderBearingCase
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
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblMaterial = new sap.m.Text({
			text: "{i18n>Mob18_Material}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var txtMaterial = new sap.m.Text("idMaterial",{
			//text : "{i18n>Mob18_plantname}"
		});
		
		var lblLocation = new sap.m.Text({
			text: "{i18n>Mob18_Loc}",
			width : "80px"
			
		}).addStyleClass("FontBold");
		
		var txtLocation = new sap.m.Text("idLoc",{
			//text : "{i18n>Mob18_plantname}"
		});
		
		var lblBatch = new sap.m.Text("idbatch",{
			text: "{i18n>Mob18_Batch}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var inputBatch = new sap.m.Input("inputbatch_order",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
			 width : "200px",
		      placeholder: 'Enter Batch Number',
		      
		      change: function(oEvent){
		    	  debugger;
		  		

				var tabMaterialLst = sap.ui.getCore().byId("idtable_Order");
				var oModel = tabMaterialLst.getModel();
				
				var txtValue = oEvent.mParameters.newValue;
				//alert(txtValue);
				var arrMatLst = oModel.oData.results;
				
				for(var i=0;i<arrMatLst.length;i++) {
				if((i==MOB18SelectedIndex) /*&& (inputUoM.trim()==arrMatLst[i].UoM)*//* && (lblMatDescVal.trim()==arrMatLst[i].Description)*/) {
						var objMaterial = arrMatLst[i];
						objMaterial.inputBatch = txtValue;
					}
				}
				
				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({results: arrMatLst});
				tabMaterialLst.setModel(oModel2);
			


				
			  
		    	  
		      },
		      /*liveChange : function(){
					window.localStorage.setItem(sap.ui.getCore().byId("idMaterial").getText()+"_"+ 
				            sap.ui.getCore().byId("idLoc").getText() + "Batch",
							sap.ui.getCore().byId("inputbatch_order").getValue());
				
			  	},*/
		     /* change: function(){
		    	  if(this.getValue()&& sap.ui.getCore().byId("inputQtyno").getValue()){
		    		  
		    		  lblQty.setIcon("");
		    	  }
		    	  else{
		    		  lblQty.setIcon("sap-icon://alert");
		    	  }
		    	  
		      }*/
		    
		  });
		
		/*var lblValuation = new sap.m.Text("idvaluation",{
			text: "Valuation Type",
			width : "80px"
		}).addStyleClass("FontBold");
		
		
		var inputValuation = new sap.m.Input("inputValuation",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
			 width : "200px",
		      placeholder: 'Enter Valuation Type'
		    
		  });
		*/
		var lblSerial = new sap.m.Text({
			id : "idSerial1",
			text: "{i18n>Mob18_Serial}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var inputSerial = new sap.m.Input("inputSerial_order",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    width : "200px",
		      placeholder: 'Enter Serial Number',
		    
		  });
		
		
		//PopUp Serial 
		 var imgShowSerials = new sap.m.Image({
			 id : "Idserial_order",
			    src: "img/ico_showimage.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			        linebreakL: true,
					linebreakM: true,
					linebreakS: true
			    }),
			  press : oController.showSerialLst_order
			  }).addStyleClass("paddingLeft");
		 
		 
		 var tblSerial = new sap.m.Table("tblSerial_Items", {
				
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: true,
		       columns : [new sap.m.Column({
                                 header : new sap.m.Label({text : "Serial Numbers", visible:false})
                        }),
                        new sap.m.Column({
                            header : new sap.m.Label({text : "Delete", visible:false})
                   })
		       ]
		 }).addStyleClass("paddingBottom");
		 
		 
		 tblSerial.bindItems("/modelData", new sap.m.ColumnListItem({
				
		       
		        cells : [ 
		                  new sap.m.Text({
		            text : "{Serial}"
		        }),
		        new sap.ui.core.Icon("Icon2", { 
		        	src : "sap-icon://sys-cancel",
		        	color: "#CC0000",
		        	size: "30px",
		        	press: oController.Mob18deleteSerial_order
		        })
		       
		       
		        ],
			
		    }));
		
		 var popoverMOB17Serial = new sap.m.Popover("popoverMOB18Serial1", {
	            title: "Serial Number List", 
	            contentWidth: "300px",
	            contentHeight: "400px",
	            //verticalScrolling: true,
	            placement: sap.m.PlacementType.Auto, 
	            footer: new sap.m.Bar({
	                contentRight: [new sap.m.Button({
	                    text: 'Close', 
	                    press: function(){
	                    	sap.ui.getCore().byId("popoverMOB18Serial1").close();
	                    	sap.ui.getCore().byId("inputSerial_order").setValue(" ");
	                    }
	                })]
	            }), 
	            content: tblSerial 
	        });
		 
		 popoverMOB17Serial.setVerticalScrolling(true);
		
		 var lblQtyIcon_order = new sap.ui.core.Icon("lblQtyIcon_Mob18_Order", {
			 height: "1px"
		 });
		 
		
		var lblQuantity = new sap.m.Text("idqtylb",{
			text: "{i18n>Mob18_Quantity}",
			width : "80px"
		});
		
		
		 var containerQty_order = new sap.m.FlexBox({
				items: [
				        lblQtyIcon_order,
				        lblQuantity
				        ],
				alignItems:"Start"
			});
		 
		var inputQtyno = new sap.m.Input("inputQtyno",{
		     // type: sap.m.InputType.Text,
			 width : "200px",
			 type :  sap.m.InputType.Tel,
		    
		      placeholder: 'Enter Quantity Number',
		      change : oController.ChangeQuantity_order,
		      /*change: function(){
		    	  if(this.getValue()&& sap.ui.getCore().byId("inputbatch_order").getValue()){
		    		  
		    		  lblQty.setIcon("");
		    	  }
		    	  else{
		    		  lblQty.setIcon("sap-icon://alert");
		    	  }
		    	  
		      }*/
		  });
		
		var lblUnit = new sap.m.Label({
			text: "{i18n>Mob18_unit}",
			width : "80px"
		});
		
		var txtUnit = new sap.m.Text("idunit",{
			//text : "{i18n>Mob18_plantname}"
		});
		
		
		var lblReason = new sap.m.Label({
			text: "{i18n>Mob18_reason}",
			width : "80px"
		});
		
		var selectReason = new sap.m.Select("selectReason1", {
			 width : "200px",
		      items: {
		        path: "/MOB18Reason",
		        sorter: new sap.ui.model.Sorter("ReasonCodeNo", false),
		        template: new sap.ui.core.Item({
		         key: "{ReasonCodeNo}",
		          text: "{ReasonCodeText}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		
		
		/////////////////Display Error Message and Material Number//////////
		 var lblMatDocNo = new sap.m.Text("lblMatDocNo2", {
			// width : "420px",
		      text: "Material Document Number"
		    }).addStyleClass("topPadding");
		 lblMatDocNo.setVisible(false);
		 var lblMatDocVal = new sap.m.Label("lblMatDocVal2", {
			 //width : "270px",
		      text: " "
		    });
		// lblMatDocVal.setVisible(false);
		 var lblErr = new sap.m.Text("lblErr2", {
			// width : "420px",
		      text: "Error Message"
		    }).addStyleClass("topPadding");
		 lblErr.setVisible(false);
		 var lblErrVal = new sap.m.Text("lblErrVal2", {
			 //width : "420px",
			 wrapping : true,
		      text: " "
		    }).addStyleClass("text_er");
		 lblErrVal.setVisible(false);
		var container_Mat = new sap.m.FlexBox({
			items: [
			        
			        lblMaterial,
			        txtMaterial
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Loc = new sap.m.FlexBox({
			items: [
			        
			        lblLocation,
			        txtLocation
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Batch = new sap.m.FlexBox({
			items: [
			        
			        lblBatch,
			        inputBatch
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		

		/*var container_Valuation = new sap.m.FlexBox({
			items: [
			        
			        lblValuation,
			        inputValuation
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		*/
		var container_Serial_label = new sap.m.FlexBox({
			items: [
			        
			        lblSerial,
			        
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		

		var container_Serial = new sap.m.FlexBox({
			items: [
			        
			       
			        inputSerial,
			        imgShowSerials
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Error = new sap.m.FlexBox({
			items: [
			        
			        lblErr,
			        lblErrVal
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Matdocno = new sap.m.FlexBox({
			items: [
			        
				lblMatDocNo,
				lblMatDocVal
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Main = new sap.m.ScrollContainer({
			//horizontal : true,
            //vertical : true,
			content: [
			          lblDummy,
			          container_Mat,	
			        lblDummy1,
			        container_Loc,
				    lblDummy2,
				    container_Batch,
				    lblDummy3,
				 //   container_Valuation,
				    lblDummy4,
				    container_Serial_label,
				    container_Serial,
			        
				    lblDummy5,
			      //  container_Quantity,
			        containerQty_order,
			        inputQtyno,
			        lblDummy6,
			       // container_Reason,
			        container_Error,
			        lblDummy7,
			        container_Matdocno,
			       
			        
			       
				    
					//container_Cust,
					//lblDummy4
			        ],
			
		}).addStyleClass("ContainerPadding");
		
		
		var btnBack = new sap.m.Button({
			//text : "back",
			icon: "sap-icon://nav-back",
			press : function(){
			//	var btnShow = sap.ui.getCore().byId("idshow");
			//	btnShow.setVisible(false);
				hideidMob18second();
				hideidMob18first();
				 var deselect = sap.ui.getCore().byId("idtable_Order");
					deselect.removeSelections();
				
				
				 
	           	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
				 app.toMaster("idBlankScreen_18");
				
			}
		});
		/////////////////////////////Mobile//////////////////////////////////////
        if(g_runningOnPhone == true)
		{
        	var btnScan = new sap.m.Button("idscan_order",{
	        	//id : "idshow",
				 text : "{i18n>Mob18_Scan}",
				 icon: "img/ico_rect_scanbarcode.png",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		             	oController.scan_order();
		            	
		            }
		           
			});
	           
        	var btnFinish = new sap.m.Button({
	        	id : "idshow_order",
				 text : "{i18n>Mob18_Finish}",
				 //visibility : true,
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	debugger;
		            	var valid = true;
		            	
		            	
		            	if(valid){
		            	oController.finish();}
		            	 /*var app = sap.ui.getCore().byId("myApp"); 
                         app.to("idGridSubMenuIMWM");*/
		            	
		            }
		           
			});
        	btnFinish.setVisible(true);
        	
		var btnback = new sap.m.Button({
	       	//id : "idshow",
				 text : "{i18n>Mob18_back}",
				 icon: "sap-icon://close-command-field",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		          
		            	sap.ui.getCore().byId("myApp").to("idMob18Orderpage");
		            	
		            	
		            }
		});
		
		
		
			//sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(true);    
			return new sap.m.Page({
				id : "Mob18OrderDetailPage",
				content: [
				          container_Main
				],
				showNavButton: true,
				enableScrolling: false,
				 navButtonTap:function(){  
					  g_MobileNavigationId = "Mob18_OrderItems";
						sap.ui.getCore().byId("myApp").to("idMob18Orderpage");
	              },
	              showFooter: true,	
	  			footer: new sap.m.Bar({
	  				contentRight: [btnback ,btnScan, btnFinish],
	  				
	  				contentMiddle : [
	  		                      
	  				                 
	  		                       ]
	  			}).addStyleClass("mobfooter"),
			});	
		}
        else{
        	
      
        /////////////////////Tablet/Desktop//////////////////////
 		return new sap.m.Page("MOB18_OrderDetailPage",{
			title: "Bearing Case",
			// headerContent :[btnBack],
			content: [
			          container_Main
			]
		});
        }
	}

});
