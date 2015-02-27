sap.ui.jsview("com.cg.gtm.view.Mob18Scrap_Bearingcase", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Scrap_Bearingcase
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Scrap_Bearingcase";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Scrap_Bearingcase
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
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblDummy8 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy_mat = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy_bacth = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		
		var lblMaterial = new sap.m.Text({
			text: "{i18n>Mob18_Material}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var txtMaterial = new sap.m.Text("idMat",{
			//text : "{i18n>Mob18_plantname}"
		});
		
		var lblSerial = new sap.m.Text({
			id : "idSerial",
			text: "{i18n>Mob18_Serial}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var inputSerial = new sap.m.Input("inputSerial_scrap",{
		     // type: sap.m.InputType.Text,
			type :  sap.m.InputType.Tel,
		    width : "200px",
		      placeholder: 'Enter Serial Number',
		      change : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("inputSerial_scrap"));//go to string utility  
		      },
		    
		  });
		
		
		//PopUp Serial 
		 var imgShowSerials = new sap.m.Image({
			 id : "Idserial_scrap",
			    src: "img/ico_showimage.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			        linebreakL: true,
					linebreakM: true,
					linebreakS: true
			    }),
			  press : oController.showSerialLst
			  }).addStyleClass("paddingLeft");
		 
		 
		 var tblSerial = new sap.m.Table("tblSerial_Item", {
				
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
		 
		 var aData1 = [
		   			{Serial: "98798989"},
		   			{Serial: "65465689"},
		   			{Serial: "44654645"},
		   			{Serial: "65455766"},
		   			{Serial: "87876777"},
		   			{Serial: "87578655"},
		   			
		   			];
		 
		 
		 var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: aData1});
		//	tblSerial.setModel(oModel2);
			
			tblSerial.bindItems("/modelData", new sap.m.ColumnListItem({
				
			       
		        cells : [ 
		                  new sap.m.Text({
		            text : "{Serial}"
		        }),
		        new sap.ui.core.Icon("Icon1", { 
		        	src : "sap-icon://sys-cancel",
		        	color: "#CC0000",
		        	size: "30px",
		        	press: oController.Mob18deleteSerial
		        })
		       
		       
		        ],
			
		    }));
		
		 var popoverMOB17Serial = new sap.m.Popover("popoverMOB18Serial", {
	            title: "Serial Number List", 
	            contentWidth: "300px",
	            contentHeight: "400px",
	            //verticalScrolling: true,
	            placement: sap.m.PlacementType.Auto, 
	            footer: new sap.m.Bar({
	                contentRight: [new sap.m.Button({
	                    text: 'Close', 
	                    press: function(){
	                    	sap.ui.getCore().byId("popoverMOB18Serial").close();
	                    	sap.ui.getCore().byId("inputSerial_scrap").setValue(" ");
	                    }
	                })]
	            }), 
	            content: tblSerial 
	        });
		 
		 popoverMOB17Serial.setVerticalScrolling(true);
		 
		 var lblUoM = new sap.m.Label({
				text: "{i18n>Mob18_UoM}",
				width : "80px"
			});
			
		var inputUoM = new sap.m.Text("inputUoM",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter UoM Number',
		    
		  });
		
		var lblBatch = new sap.m.Text({
			id : "idBatch",
			text: "{i18n>Mob18_Batch}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		var inputBatch = new sap.m.Input("inputbatch_Scrap",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
			 width : "200px",
		      placeholder: 'Enter Batch Number',
		      change : oController.ChangeBatch
		  });
		
		 var lblQtyIcon_scrap = new sap.ui.core.Icon("lblQtyIcon_Mob18_Scrap", {
			/* height: "10px",
			 width: "10px"  */
		 });
		
		var lblQuantity = new sap.m.Text("idlblQty",{
			width : "420px",
			text: "{i18n>Mob18_Quantity}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		
		var inputQuantity = new sap.m.Input("inputQty_Scrap",{
		     // type: sap.m.InputType.Text,
			 type :  sap.m.InputType.Tel,
			 width : "200px",
		      placeholder: 'Enter Quantity Number',
		      change : oController.ChangeQuantity
		  });
		
		
		var lblLocation = new sap.m.Text({
			text: "{i18n>Mob18_Loc}",
			//width : "80px"
		}).addStyleClass("FontBold");
		
		var inputLocation = new sap.m.Text("inputLoc_Scrap",{
		     // type: sap.m.InputType.Text,
			
		    text : ""
		
		    
		  });
		
		
		
		var lblReason = new sap.m.Text({
			text: "{i18n>Mob18_reason}",
			width : "80px"
		}).addStyleClass("FontBold");
		
		
		
		var inputreason = new sap.m.Text("inputreason_Scrap",{
		     // type: sap.m.InputType.Text,
			
		    text : ""
		
		    
		  });
		
		var lblMove = new sap.m.Text({
			text: "{i18n>Mob18_Move}",
			//width : "80px"
		}).addStyleClass("FontBold");
		
		
		
		var inputMove = new sap.m.Text("inputMove_Scrap",{
		     // type: sap.m.InputType.Text,
			
		    text : ""
		
		    
		  });
		
		var jsonReason = {"MOB18Reason":
			[
				 {"Key" :"1", "detail":"Reason for Scrapping"},
				 {"Key" :"2", "detail":"Reason for Scrapping"},
				 { "Key" :"3","detail":"Reason for Scrapping"}
				 ]};
		
		
		var oModel2 = new sap.ui.model.json.JSONModel(jsonReason);
		//oModel2.setData({modelData: jsonReason});
		
		var selectReason = new sap.m.Select("selectReason", {
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
		//selectReason.setModel(oModel2);
		
	
		
		 var lblMatDocNo = new sap.m.Text("lblMatDocNo1", {
			// width : "420px",
		      text: "Material Document Number"
		    }).addStyleClass("topPadding");
		// lblMatDocNo.setVisible(false);
		 var lblMatDocVal = new sap.m.Label("lblMatDocVal1", {
			// width : "270px",
		    //  text: "6876735727"
		    });
		// lblMatDocVal.setVisible(false);
		 var lblErr = new sap.m.Text("lblErr1", {
			// width : "420px",
		      text: "Error Message"
		    }).addStyleClass("topPadding");
	//	lblErr.setVisible(false);
		 var lblErrVal = new sap.m.Text("lblErrVal1", {
			// width : "420px",
		     // text: "Error Message"
		    }).addStyleClass("text_er");
	//	 lblErrVal.setVisible(false);
		
	
		var container_Mat = new sap.m.FlexBox({
			items: [
			        
			        lblMaterial,
			        txtMaterial,
			        lblDummy_bacth
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
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Batch = new sap.m.FlexBox({
			items: [
			        
			        lblBatch,
			        inputBatch,
			        lblDummy_mat
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_quanity = new sap.m.FlexBox({
			items: [
			        lblQuantity,
			        lblQtyIcon_scrap
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Location = new sap.m.FlexBox({
			items: [
			        
			        lblLocation,
			        inputLocation,
			      //  inputLocation_no
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Reason = new sap.m.FlexBox({
			items: [
			        
			        lblReason,
			        inputreason
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Move = new sap.m.FlexBox({
			items: [
			        
			        lblMove,
			        inputMove
				//inputPlant
			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_MatDocno = new sap.m.FlexBox({
			items: [
			        
				lblMatDocNo,
				
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
    	
    	var container_MatDocnoval = new sap.m.FlexBox({
			items: [
			        
				lblMatDocVal
				    			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
    	
    	var container_lblErr = new sap.m.FlexBox({
			items: [
			        
				lblErr,
				 lblErrVal
				    			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
    	
    	var container_lblErrVal = new sap.m.FlexBox({
			items: [
			        
			       
				    			        
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
    	
    	var container_Main = new sap.m.ScrollContainer({
			horizontal : true,
            vertical : true,
			content: [
			          lblDummy,
			          container_Location,
			          lblDummy1,
			          container_Move,
			          lblDummy2,
			          container_Reason,
			          lblDummy3,
			          container_Mat,	
			        lblDummy4,
			        lblSerial,
			        lblDummy5,
			        container_Serial,
				    lblDummy6,
				    container_Batch,
			        lblDummy7,
			        container_quanity,
			        inputQuantity,
			        //inputQuantity,
			        lblDummy8,
			       // container_Location,
			       // lblDummy6,
			      //  container_Reason,
			       
			        container_MatDocno,
			        lblDummy7,
			        container_MatDocnoval,
			        lblDummy7,
			        container_lblErr,
			        lblDummy7,
			       // container_lblErrVal
				    
					//container_Cust,
					//lblDummy4
			        ],
			
		}).addStyleClass("ContainerPadding");
		
	
		//Back Button
		var btnBack = new sap.m.Button({
			//text : "back",
			icon: "sap-icon://nav-back",
			press : function(){
			//	var btnShow = sap.ui.getCore().byId("idshow");
			//	btnShow.setVisible(false);
				hideidMob18second_Scrap();
				hideidMob18first_Scrap();
				 var deselect = sap.ui.getCore().byId("idtable_Cost");
					deselect.removeSelections();
				
				
				 
	           	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
				 app.toMaster("idBlankScreen_18");
				
			}
		});
/////////////////////////////Mobile//////////////////////////////////////
        if(g_runningOnPhone == true)
		{
        	var btnback = new sap.m.Button({
    	       	//id : "idshow",
    				 text : "{i18n>Mob18_back}",
    				 icon: "sap-icon://close-command-field",
    			  //  icon: "sap-icon://search",
    		      //      style : sap.ui.commons.ButtonStyle.Accept,
    		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
    		            press : function(){
    		            	//Deselect table Items
			    			var deselect = sap.ui.getCore().byId("idtable_Order");
			    			deselect.removeSelections();
    		           
    		            	sap.ui.getCore().byId("myApp").to("idMob18Scrappage");
    		            	
    		            	
    		            }
    		});
        	
        	var container_MatDocno = new sap.m.FlexBox({
    			items: [
    			        
					lblMatDocNo,
					
    			        
    			        ],
    			direction:"Row",
    			justifyContent:"Start",//Contents would be placed in the begin
    			alignItems:"Start"
    		});
        	
        	var container_MatDocnoval = new sap.m.FlexBox({
    			items: [
    			        
					lblMatDocVal
					    			        
    			        ],
    			direction:"Row",
    			justifyContent:"Start",//Contents would be placed in the begin
    			alignItems:"Start"
    		});
        	
        	var container_lblErr = new sap.m.FlexBox({
    			items: [
    			        
					lblErr,
					 lblErrVal
					    			        
    			        ],
    			direction:"Column",
    			justifyContent:"Start",//Contents would be placed in the begin
    			alignItems:"Start"
    		});
        	
        	var container_Main = new sap.m.ScrollContainer({
    			horizontal : true,
                vertical : true,
    			content: [
    			          lblDummy,
    			          container_Mat,	
    			        lblDummy1,
    			        container_Serial,
    				    lblDummy2,
    				  //  container_UoM,
    				  //  lblDummy3,
    				    container_Batch,
    			        
    			        lblDummy4,
    			        container_quanity,
    			      //  inputQuantity,
    			        lblDummy5,
    			       // container_Location,
    			       // lblDummy6,
    			        container_Reason,
    			        lblDummy7,
    			        container_MatDocno,
    			        lblDummy7,
    			        container_MatDocnoval,
    			        lblDummy7,
    			        container_lblErr,
    			        lblDummy7,
    			       // container_lblErrVal
    				    
    					//container_Cust,
    					//lblDummy4
    			        ],
    			
    		}).addStyleClass("ContainerPadding");
    		
        	var btnScan = new sap.m.Button("idscan",{
	        	//id : "idshow",
				 text : "{i18n>Mob18_Scan}",
				 icon: "img/ico_rect_scanbarcode.png",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           	oController.scan();
		            	 /*sap.m.MessageBox.show("Items are scanned",
		    					 sap.m.MessageBox.Icon.ERROR,
		    						"Error"
		    					 );*/
		            	
		            }
		           
			});
			var btnFinish = new sap.m.Button({
	        	//id : "idshow",
				 text : "{i18n>Mob18_Finish}",
				 icon: "sap-icon://complete",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	oController.Mob18Complete();
		            	 
		            	
		            }
		           
			});
        	return new sap.m.Page({
        		id : "Mob18_scrapcase",
        		//	title: "Scrap Bearing Case",
         			showHeader : false,
        			// headerContent :[btnBack],
        			content: [
        			          container_Main
        			],showFooter: true,	
    	  			footer: new sap.m.Bar({
    	  				contentRight: [btnback ,btnScan,btnFinish],
    	  				
    	  				
    	  			}).addStyleClass("mobfooter"),
showNavButton: true,
					
		            navButtonTap:function(){  
		          	  g_MobileNavigationId = "Mob18_scrapitems";
		            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
		                           var app = sap.ui.getCore().byId("myApp"); 
		                           app.to("idMob18Scrappage");
		                           }
        		});
		}
        else{
        	
        
 		return new sap.m.Page({
			title: "Bearing Case",
 			showHeader : false,
			// headerContent :[btnBack],
			content: [
			          container_Main
			]
		});
	}
	}

});
