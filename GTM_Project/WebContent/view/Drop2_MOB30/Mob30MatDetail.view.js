sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30MatDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30MatDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30MatDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30MatDetail
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		//Space
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		var lblDummy8 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		var lblDummy9 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		
		//Material
		var lblMat = new sap.m.Label({text : "{i18n>mob30_material}",width : "200px",
			design: sap.m.LabelDesign.Bold,
});
		var txtMat = new sap.m.Text({id : "Mob30-thrdScr-txtMat",
			design: sap.m.LabelDesign.Bold,
width : "250px"});
        var MatRow = new sap.m.FlexBox({
        	width : "500px",
			items: [ lblMat, txtMat,lblDummy8 ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"}).addStyleClass("Mob30_matflex");
        
        
        //Quantity
        
       
  		var lblQty = new sap.m.Label({text : "Quant",
  			design: sap.m.LabelDesign.Bold,
width : "200px"}).setVisible(false);
  		var txtQty = new sap.m.Text({id : "Mob30-thrdScr-txtqty",width : "250px"}).setVisible(false);
          var Qty = new sap.m.FlexBox({width : "500px",
  			items: [ lblQty, txtQty ],direction:"Column",
  			justifyContent:"Start",//Contents would be placed in the begin
  			alignItems:"Start"});
          
      //Description
		var lblDes = new sap.m.Label({text : "{i18n>mob30_desc}",
			design: sap.m.LabelDesign.Bold,
			width : "200px"});
		var txtDes = new sap.m.Text({id : "Mob30-thrdScr-txtDes",width : "250px"});
        var DesRow = new sap.m.FlexBox({width : "500px",
			items: [ lblDes, txtDes ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});

        

      //Uom
      		var lblUom = new sap.m.Label({text : "{i18n>Mob20_UoM}",
      			design: sap.m.LabelDesign.Bold,
      			width : "200px"});
      		var txtUom = new sap.m.Text({id : "idMob30txtUom",width : "250px"});
              var UomRow = new sap.m.FlexBox({width : "500px",
      			items: [ lblUom, txtUom ],direction:"Column",
      			justifyContent:"Start",//Contents would be placed in the begin
      			alignItems:"Start"});
              
            //Type
      		var lblType = new sap.m.Label({text : "{i18n>Mob20_StockType}",
      			design: sap.m.LabelDesign.Bold,
      			width : "200px"});
      		var txtType = new sap.m.Text({id : "idMob30txtType",
      			design: sap.m.LabelDesign.Bold,width : "250px"});
              var TypeRow = new sap.m.FlexBox({width : "500px",
      			items: [ lblType, txtType ],direction:"Column",
      			justifyContent:"Start",//Contents would be placed in the begin
      			alignItems:"Start"});
              
              
              //Batch
              		var lblBatch = new sap.m.Label({id: "idbatchMob30",design: sap.m.LabelDesign.Bold,text : "{i18n>Mob20_Batch}",width : "200px"});
              		var txtBatch = new sap.m.Text({id : "idMob30txtBatch",
              			design: sap.m.LabelDesign.Bold,width : "250px"});
                      var BatchRow = new sap.m.FlexBox({ id : "MOB30-batchFlex",width : "500px",
              			items: [ lblBatch, txtBatch ],direction:"Column",
              			justifyContent:"Start",//Contents would be placed in the begin
              			alignItems:"Start"});  
                      
                      //Special stock
                      
                      var lblStockcat = new sap.m.Label({id: "idStockcatMob30",design: sap.m.LabelDesign.Bold,text : "StockType",width : "200px"});
                		var txtStockcat = new sap.m.Text({id : "idMob30txtStockcat",
                			design: sap.m.LabelDesign.Bold,width : "250px"});
                        var StockcatRow = new sap.m.FlexBox({ id : "MOB30-StockcatFlex",width : "500px",
                			items: [ lblStockcat, txtStockcat ],direction:"Column",
                			justifyContent:"Start",//Contents would be placed in the begin
                			alignItems:"Start"});  
                      
                    //Serial
              		var lblSerial = new sap.m.Label({id: "idserialMob30",
              			design: sap.m.LabelDesign.Bold,
              			text : "{i18n>mob30_serial}",width : "200px"});
              		var txtSerial = new sap.m.Text({id : "Mob30txtSerial",width : "250px"});
                      var serialRow = new sap.m.FlexBox({ id : "MOB30-SerialFlex",width : "500px",
              			items: [ lblSerial, txtSerial ],direction:"Column",
              			justifyContent:"Start",//Contents would be placed in the begin
              			alignItems:"Start"});
                      
                    /*  //Quantity
                      var lblQuantity = new sap.m.Label({id: "idQuantityMob30",
                    	  design: sap.m.LabelDesign.Bold,
                    	  text : "{i18n>mob30_quantity}",width : "200px"});
                		var txtQuantity = new sap.m.Input({id : "Mob30txtQuantity",	type :sap.m.InputType.Tel,width : "250px"});
                        var QuantityRow = new sap.m.FlexBox({ id : "MOB30-QuantityFlex",width : "500px",
                			items: [ lblQuantity, txtQuantity ],direction:"Column",
                			justifyContent:"Start",//Contents would be placed in the begin
                       alignItems:"Start"});*/
                        
                      //Availabale Stock			//modified by Shubh for SIT issue 752
                        
                        var lblAvlStock = new sap.m.Label({text : "Available Stock",
                        	design: sap.m.LabelDesign.Bold,
                        	width : "200px"});
                  		var txtAvlStock = new sap.m.Text({id : "idMob30ActualQuant",width : "250px"});
                  		
                  		
                      //Log Serial Num
                		var lblLogSer = new sap.m.Label({text : "Actual Stock",
                			width : "250px",design: sap.m.LabelDesign.Bold});
                		var txtBoxLog = new sap.m.Input({id : "Mob30-thrdScr-txtBoxLogSer",	type :sap.m.InputType.Tel,
                			change : function(){
                				/*window.localStorage.setItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
                			            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal",
                						sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue());*/
                			field_numeric_validation(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer"));//go to string utility 
                			
                			debugger;
                			for(var i =0; i<array.length;i++){
                				if(array[i].qty == sap.ui.getCore().byId("Mob30-thrdScr-txtqty").getText()){
                					array[i].actualStock = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
                				}
                			}
                			/*var txtValue = sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
                			
                			var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
                			var oModel = tabMaterialLst.getModel();
                			
                			//var txtValue = oEvent.mParameters.newValue;
                			
                			var arrMatLst = oModel.oData.results;
                			
                			//var isSerialManaged = false;
                			
                			for(var i=0;i<arrMatLst.length;i++) {
                				//var lblCustVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
                				var lblUOMVal = sap.ui.getCore().byId("idMob30txtUom").getText();
                				var lblMatNoVal = sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText();
                				var lblqty = sap.ui.getCore().byId("Mob30txtQuantity").getValue();
                				var lblMatDescVal = sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText();
                				
                				//var serialCount = 0;
                				
                				if((lblqty.trim()==arrMatLst[i].Material)  && (lblMatDescVal.trim()==arrMatLst[i].MaterialDescription)) {
                					var objMaterial = arrMatLst[i];
                					objMaterial.PhyInv = txtValue;
                					
                					
                					
                				}
                			}
                			
                			var oModel2 = new sap.ui.model.json.JSONModel();
                			oModel2.setData({modelData: arrMatLst});
                			tabMaterialLst.setModel(oModel2);
                		  	},*/
                			}
                		  	});
                		
                		//Res Pop
                        var oResponsivePopoverList = new sap.m.List({
                        	id:"oResponsivePopoverList_30",
                			  mode: sap.m.ListMode.Delete,
                		  	  height : "300px",
                		      includeItemInSelection: true,
                		      rememberSelections : false,
                		      items: {
                		    	  path: "/modelData",
                		        template: 
                		        new sap.m.StandardListItem({
                		        	title : "{Serial}",
                		        	
                		     	})}
                       });
                        oResponsivePopoverList.attachDelete(oController.handleDelete_30);
                        var oBeginButton = new sap.m.Button({
                			text : "Close",
                			width : "100%",
                			type : sap.m.ButtonType.Reject,
                			press : function() {
                				oResponsivePopover.close();
                			}
                		});
                		var oResponsivePopover = new sap.m.ResponsivePopover({
                			placement : sap.m.PlacementType.Auto,
                			id: "oResponsivePopover_30",
                			title : "Serial Number",
                			showHeader : true,
                			beginButton : oBeginButton,
                			//endButton : oEndButton,
                			horizontalScrolling : false,
                			verticalScrolling : true,
                			contentHeight : "300px",
                			content : [ oResponsivePopoverList ]
                		});
                        
                		var btnlogSer = new sap.m.Image("Mob30-btnlogSer", {
                		    src: "img/ico_showimage.png",
                		    layoutData : new sap.ui.layout.GridData({
                		        span: "L1 M3 S3",
                		        linebreakL: true,
                				linebreakM: true,
                				linebreakS: true
                		    }),
                		    press : oController.logSer_30
                		  });
                		
                		var LogTxtRow = new sap.m.FlexBox({width : "500px",
                			items: [ txtBoxLog, /*btnScan*/ btnlogSer ]});
                		
                		//Pop win
                		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob30-thrdScr-txtBoxManualEntryLog",	type :sap.m.InputType.Tel,
                			maxLength : 7,
                			liveChange : function(){
                			field_numeric_validation(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog"));//go to string utility  
                		  	},
                		  	});
                	
                		var btnAdd = new sap.m.Button({ 
                			id : "Mob30-thrdScr-btnAdd",
                			text : "Add Serial", 
                			type : sap.m.ButtonType.Emphasized,
                			press : oController.addSerialButton_30
                			});
                		
                		var txtAddRow = new sap.m.FlexBox({
                			id : "Mob30-txtAddRow",
                			items: [ txtBoxManualEntryLog, btnAdd ]});
                		////////////////////////////////////////////////////////////////////////////////////////////
                       //image
                		var iconCloseImage = new sap.m.Image({
                			src : "img/button_cancel.png",
                			press : function(){
                				sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue("");
                			
                				sap.ui.getCore().byId("Mob30-popWin").close();
                				
                				
                			}
                		});
                		//On click of scan Pop up window
                		var popWin = new sap.m.Dialog({
                			id : "Mob30-popWin",
                			subHeader : new sap.m.Bar({
                                contentLeft : [],
                                contentMiddle : [new sap.m.Text({text : "Add a Serial number for material"})],
                                contentRight : [iconCloseImage],
                            }),
                			type: sap.m.DialogType.Message,
                	       	content: [
                            new sap.m.Text({
                	       		id:"Mob30-ScanBodyText",
                	       		textAlign: "Center",
                	       		width: "340px",
                	       	text: "text",//sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "\n" + sap.ui.getCore().byId("Mob20-thrdScr-txtDes").getText()
                	       	}),
                	       	txtAddRow],
                	       	leftButton: new sap.m.Button({
                	       	text: "Manual Entry",
                	       	press: function () {
                	       		sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
                	        }
                	        }),rightButton: new sap.m.Button({
                	           	text: "Scan",
                	           	
                	         	press: oController.Mob30_scan
                	        
                	        })});
                		
                		//Scan
                		var btnScan = new sap.m.Button({ id : "Mob30-thrdScr-btnScan",
                			    text : "{i18n>Mob20_Scan}", 
                			    icon : "img/ico_rect_scanbarcode.png",
                			    press : oController.btnScanner_30
                		
                		});
                		
                
   //Main Container
	                      var containerList = new sap.m.FlexBox({
	              			items: [lblDummy1,
	              			        MatRow,
	              			      lblDummy8,
	              			       Qty,
	              			      //lblDummy2,
	              			        DesRow,
	              			        lblDummy3,
	              			        UomRow,
	              			        lblDummy4,
	              			        TypeRow,
	              			     // lblDummy6,
	              			    //  StockcatRow,
	              			    lblDummy7,
	              			       BatchRow,
	              			       //serialRow,
	              			     lblDummy8,
	              			      lblAvlStock,
	              			      txtAvlStock,lblDummy5,
	              			        lblLogSer,
	              			      lblDummy9,
	              			        LogTxtRow ],
	              			direction:"Column",
	              			justifyContent:"Start",//Contents would be placed in the begin
	              			alignItems:"Start"
	              		}).addStyleClass("Mob30_flex");
	                      
	                      
	                      
	                  	var btnmove = new sap.m.Button({
	            	    	id : "Mob30Move",
	            	    	text : "Move",
	            	    	icon : "sap-icon://accept",
	            	    	press : function(){
	            	    		var value=sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").getValue();
	            	    		if(!value||value=="0"){
	            	    			sap.m.MessageBox.show(
	            							"Please provide a valid Quantity",
	            					sap.m.MessageBox.Icon.ERROR,"Error");
	            	    			
	            	    		}
	            	    		else{
	            	    		sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(false);
	            	    		sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").setValue("");
	            	    		sap.ui.getCore().byId("Mob30-popWin1").open();
	            	    		
	            	    		
	            	    		
	            	    		sap.ui.getCore().byId("Mob30-ScanBodyText1").setText(
	            	    		sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() + "\n" + 
	            	    		sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText());
	            	    		}
	            	    	}
	            	    });
	            	   
	            		
	            		//Pop win
	            		var txtBoxManualEntryLog1 = new sap.m.Input({id : "Mob30-thrdScr-txtBoxManualEntryLog1",	
	            			//type :sap.m.InputType.Tel,
	            		//	maxLength : 9,
	            			liveChange : function(){
	            			//field_numeric_validation(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1"));//go to string utility  
	            		  	},
	            		  	});
	            	
	            		var btnAdd = new sap.m.Button({ 
	            			id : "Mob30-thrdScr-btnAdd1",
	            			text : "Add Destination Bin", 
	            			type : sap.m.ButtonType.Emphasized,
	            			press : oController.post
	            			});
	            		
	            		var txtAddRow = new sap.m.FlexBox({
	            			id : "Mob30-txtAddRow1",
	            			items: [ txtBoxManualEntryLog1, btnAdd ]});
	            		////////////////////////////////////////////////////////////////////////////////////////////
	                   //image
	            		var iconCloseImage = new sap.m.Image({
	            			src : "img/button_cancel.png",
	            			press : function(){
	            				//alert("close");
	            				
	            				sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").setValue("");
	            				popWin.close();
	            			}
	            		});
	            		//On click of scan Pop up window
	            		var popWin = new sap.m.Dialog({
	            			id : "Mob30-popWin1",
	            			subHeader : new sap.m.Bar({
	                            contentLeft : [],
	                            contentMiddle : [new sap.m.Text({text : "Add Destination Bin"})],
	                            contentRight : [iconCloseImage],
	                        }),
	            			type: sap.m.DialogType.Message,
	            	       	content: [
	                        new sap.m.Text({
	            	       		id:"Mob30-ScanBodyText1",
	            	       		textAlign: "Center",
	            	       		width: "340px",
	            	       	text: "text",//sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "\n" + sap.ui.getCore().byId("Mob20-thrdScr-txtDes").getText()
	            	       	}),
	            	       	txtAddRow],
	            	       	leftButton: new sap.m.Button({
	            	       	text: "Manual Entry",
	            	       	press: function () {
	            	       		sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
	            	        }
	            	        }),rightButton: new sap.m.Button({
	            	           	text: "Scan",
	            	         	press: oController.Mob30_scan_Bin
	            	        
	            	        })});

	                      ///////////////////////Phone version///////////////////////////////
	              		
	                    //  var btnMove = sap.ui.getCore().byId("Mob30Move");
	                      
	                     
	                      
	                      
	             		 if ( g_runningOnPhone == true)
	             			{
	             			//Main Container
		                      var containerList = new sap.m.FlexBox({
		              			items: [
										lblDummy1,
										  MatRow,
										lblDummy8,
										 Qty,
										//lblDummy2,
										  DesRow,
										  lblDummy3,
										  UomRow,
										  lblDummy4,
										  TypeRow,
										// lblDummy6,
										//  StockcatRow,
										lblDummy7,
										 BatchRow,
										 //serialRow,
										lblDummy8,
										lblAvlStock,
										txtAvlStock,lblDummy5,
										  lblLogSer,
										lblDummy9,
										  LogTxtRow ],
		              			direction:"Column",
		              			justifyContent:"Start",//Contents would be placed in the begin
		              			alignItems:"Start"
		              		}).addStyleClass("mob23flex");
	             	 		return new sap.m.Page({
	             	 			id: "Mob30-ThirdScreen",
	             			title: "{i18n>mob30_detail}",
	             				content: [
	             				          containerList
	             				],
	             					showNavButton: true,
	             					 navButtonTap:function(){  
	             						 g_MobileNavigationId = "Mob30-frstScreen"; 
	                         	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	                                        var app = sap.ui.getCore().byId("myApp"); 
	                                        app.to("idMOB30Detail");
	                                        },
	                                        showFooter: true,	
	                            			footer: new sap.m.Bar({
	                            				//contentLeft: [ btnMove],
	                            		        contentRight: [
	                            		                      
	                            		                       	btnScan,
	                            		                       	btnmove
	                            		                       ]
	                            			}).addStyleClass("footer_phone")
	                            			});
	             			
	             			}
	             		 else{
	             			 
	             		
 		return new sap.m.Page({
			title: "{i18n>mob30_detail}",
			content: [
			          containerList
			         
			],
 		showHeader : true,
 		enableScrolling: false,
 		 showFooter: false
		});
	             		 }
	}

});