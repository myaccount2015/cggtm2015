sap.ui.jsview("com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrOrderTOrDesScn", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob27TwoScrOrderTOrDesScn
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB27.Mob27TwoScrOrderTOrDesScn";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob27TwoScrOrderTOrDesScn
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		
		//
		var labeldummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy1.addStyleClass("HideLabel");
		var labeldummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy2.addStyleClass("HideLabel");
		
		var labeldummy2A = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy2A.addStyleClass("HideLabel");
		
		
		
		var labeldummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		
		
		labeldummy3.addStyleClass("HideLabel");
		var labeldummy4 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy4.addStyleClass("HideLabel");
		var labeldummy5 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy5.addStyleClass("HideLabel");
		var labeldummy6 = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			width : "60px"
		});
		labeldummy6.addStyleClass("HideLabel");
		var labeldummy6A = new sap.m.Label({
			id:"Mob27-order-testLoopNext"
		});
		labeldummy6A.addStyleClass("HideLabel");
		
		var labeldummy7 = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			width : "60px"
		});
		labeldummy7.addStyleClass("HideLabel");
		var labeldummy8 = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			width : "60px"
			
		});
		labeldummy8.addStyleClass("HideLabel");
		
		var labeldummy9 = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			
			
		});
		labeldummy9.addStyleClass("HideLabel");
		
		var labeldummy9A = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			id:"Mob27-test-order-TableSel"
			
		});
		labeldummy9A.addStyleClass("HideLabel");
		
		var labeldummy9B = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			id:"Mob20-test-order-Qty"
			
		});
		labeldummy9B.addStyleClass("HideLabel");
		
		
		
		
		//Destination
		var lblDestStrBin = new sap.m.Label({
			text  :"Source storage bin"
		});
		
		var lblDestStrBinBackValue = new sap.m.Label({
			id  :"Mob27-order-lblDestStrBinBackValue"
		});
		
		var DestInput = new sap.m.Input({
			id : "Mob27-order-DestInput"
		});
		
		var DestImg = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : function(){
				//var scannerRes = ScannerOut_M_S_E_B();
			   // scannerRes = scannerRes.scanMaterials;
			   // DestInput.setValue(scannerRes[0].Batch)
			    
			    //No destination value
			    
			    /*cordova.plugins.barcodeScanner.scan(
			            function(result){
		
			            var str = result.text;//"A-01-01-01";
			         
			            DestInput.setValue(str);
	                    }, 
			            function(error){
			           	sap.m.MessageBox.show("Scan failed: " + error);
			           	errorText = error;
			            });	*/
				varScan = "Mob27";
	    		Mob27scan = "orderBin";
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	    	.getController().scanNow();
	    	
				/*var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
				jsonScanResult.done(function(results){
			    var scannerRes = results.scanMaterials;
			    DestInput.setValue(scannerRes[0].BinWM);
				});*/
			}
		});
		
		var flexRowDest = new sap.m.FlexBox({
			items : [
			        
			        DestInput,DestImg
			        ]
		});
		
		//Material
		
		var lblMat = new sap.m.Label({
			text  :"Material"
		});
		
		var lblMatBackValue = new sap.m.Label({
			id  :"Mob27-order-lblMatBackValue"
		});
		
		var MatInput = new sap.m.Input({
			id : "Mob27-order-MatInput",
			type :sap.m.InputType.Tel,
				
		});
		
		var MatImg = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : function(){
							
				varScan = "Mob27";
	    		Mob27scan = "orderMat";
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	    	.getController().scanNow();
	    	
				/*var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
				jsonScanResult.done(function(results){
			    var scannerRes = results.scanMaterials;
			    MatInput.setValue(scannerRes[0].Material);
				});*/
				/*var Material = "";
			    var mainArray= [];
			cordova.plugins.barcodeScanner.scan(
			            function(result){
			            //var resArray = result.text.split("#");
			            var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
			            var res = str.split("#");
			            for( var i = 1 ; i< res.length; i++)
			            {
			            Material = res[i];
			            Material = Material.split(":");
			            Material = Material[1];
			            mainArray.push(Material);
			            }
			            
			            MatInput.setValue(mainArray[0]);
			            }, 
			            function(error){
			           	sap.m.MessageBox.show("Scan failed: " + error);
			       
			            });	*/
				
							  
			   
			}
		});
		
		var flexRowMat = new sap.m.FlexBox({
			items : [
			        
			        MatInput,MatImg
			        ]
		});
		
//Expected qty

		
		var lblExpectedQty = new sap.m.Label({
			text  :"Expected Qty: "
		});
		
		var lblExpectedQtyValue = new sap.m.Label({
			id  :"Mob27-order-lblExpectedQtyValue"
		});
		
		var flexRowExpectedQtyValue = new sap.m.FlexBox({
			id: "Mob27-order-flexRowExpectedQtyValue",
			items : [
			        
			        lblExpectedQty,lblExpectedQtyValue
			        ]
		});
		//Batch
		
		var lblBat = new sap.m.Label({
			id : "Mob27-order-Batch",
			text  :"Batch"
		});
		
		var lblBatBackValue = new sap.m.Label({
			id  :"Mob27-order-lblBatBackValue"
		});
		
		var BatInput = new sap.m.Input({
			id : "Mob27-order-BatInput",
			type :sap.m.InputType.Tel,
		});
		
		var BatImg = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : function(){
				varScan = "Mob27";
	    		Mob27scan = "orderBatch";
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	    	.getController().scanNow();
	    	
			/*	var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
				jsonScanResult.done(function(results){
			    var scannerRes = results.scanMaterials;
			    BatInput.setValue(scannerRes[0].Batch);
				});*/
			
			    
			    
				/*var Material = "";
			    var mainArray= [];
			   cordova.plugins.barcodeScanner.scan(
			            function(result){
			            //var resArray = result.text.split("#");
			            var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
			            var res = str.split("#");
			            for( var i = 1 ; i< res.length; i++)
			            {
			            Material = res[i];
			            Material = Material.split(":");
			            Material = Material[1];
			            mainArray.push(Material);
			            }
			            BatInput.setValue(mainArray[3]);
			            }, 
			            function(error){
			           	sap.m.MessageBox.show("Scan failed: " + error);
			       
			            });	*/
				
				
			}
		});
		
		var flexRowBat = new sap.m.FlexBox({
			id: "Mob27-order-flexRowBat",
			items : [
			        
			        BatInput,BatImg
			        ]
		});
		
		//Serial
		
		var lblSer = new sap.m.Label({
			id : "Mob27-order-Serial",
			text  :"Serial"
		});
		
		var lblSerBackValue = new sap.m.Label({
			id  :"Mob27-order-lblSerBackValue"
		});
		
		
	////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//scan serials
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob27-2-thrdScr-txtBoxManualEntryLog",
			//maxLength : 7,
			type :sap.m.InputType.Tel,
			placeholder : "Manual Entry",
			liveChange : function(){
			field_numeric_validation(sap.ui.getCore().byId("Mob27-2-thrdScr-txtBoxManualEntryLog"));//go to string utility  
		  	},
		  	});
	
		var btnAdd = new sap.m.Button({ 
			id : "Mob27-2-thrdScr-btnAdd",
			text : "Add Serial", 
			type : sap.m.ButtonType.Emphasized,
			press : oController.AddSer
			});
		var txtAddRow = new sap.m.FlexBox({
			id : "Mob27-2-txtAddRow",
			items: [ txtBoxManualEntryLog, btnAdd ]});
		var iconCloseImage = new sap.m.Image({
			src : "img/button_cancel.png",
			press : function(){
				popWin.close();
			}
		});
		
		
		//On click of scan Pop up window
		var popWin = new sap.m.Dialog({
			id : "Mob27-2-popWin",
			//showHeader : false,
			title : "Add a Serial number for Order",
		
			/*subHeader : new sap.m.Bar({
             
                contentMiddle : [new sap.m.Text({text : "Add a Serial number for material"})],
                contentRight : [iconCloseImage],
            }),*/
			type: sap.m.DialogType.Message,
	       	content: [
            new sap.m.Text({
	       		id:"Mob27-2-ScanBodyText",
	       		textAlign: "Center",
	       		width: "340px",
	       	//text: "text",//sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "\n" + sap.ui.getCore().byId("Mob20-thrdScr-txtDes").getText()
	       	}),
	       	txtAddRow,
	       		       	
	       	],
	       	
	    
	       	
	       	leftButton: new sap.m.Button({
	       	text: "Scan",
	       	press: function () {
	       		varScan = "Mob27";
	    		Mob27scan = "orderSerial";
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput")
	    	.getController().scanNow();
	    	
	       		/*var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
				jsonScanResult.done(function(results){
			    var scannerRes = results.scanMaterials;
			    
			  //Check serial with material number
	    	    if( scannerRes[0].Material == lblMatBackValue.getText() )
	    	    	{
	    	    	txtBoxManualEntryLog.setValue(scannerRes[0].Serial);
	    	       // sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	    	      //  sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
	    	    	}
	    	    else if( scannerRes[0].Material == null || scannerRes[0].Material == undefined
	    	    || scannerRes[0].Material == ""	
	    	    )
	    	    	{
	    	    	
	    	    	}
	    	    else
	    	    	{
	    	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
	    			sap.m.MessageBox.Icon.ERROR,"Error");
	    	    	}
			 
				});*/
			    
			  
	            
			    
			    
	       		/*var Material = "";
			    var mainArray= [];
			   cordova.plugins.barcodeScanner.scan(
			            function(result){
			            //var resArray = result.text.split("#");
			            var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
			            var res = str.split("#");
			            for( var i = 1 ; i< res.length; i++)
			            {
			            Material = res[i];
			            Material = Material.split(":");
			            Material = Material[1];
			            mainArray.push(Material);
			            }
			          //Check serial with material number
			    	    if( mainArray[0] == lblMatBackValue.getText() )
			    	    	{
			    	    	txtBoxManualEntryLog.setValue(mainArray[1]);
			    	       // sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
			    	      //  sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
			    	    	}
			    	    else if( mainArray[0] == null || mainArray[0] == undefined
			    	    || mainArray[0] == ""	
			    	    )
			    	    	{
			    	    	
			    	    	}
			    	    else
			    	    	{
			    	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
			    			sap.m.MessageBox.Icon.ERROR,"Error");
			    	    	}
			            
			            
			            
			            //txtBoxManualEntryLog.setValue(mainArray[1]);
			            }, 
			            function(error){
			           	sap.m.MessageBox.show("Scan failed: " + error);
			       
			            });	*/
				
			  
	       		
	       		
	       		
	        }
	        }),
	        rightButton: new sap.m.Button({
	           	text: "Cancel",
		      	press: function()
		      	{
		      		sap.ui.getCore().byId("Mob27-2-popWin").close();	
		      	}
		        
		        })
		  	
		
		});
		////////////////////////////////////////////////////////////////////////////////////////////
		
		//New Serial Numbers
		//Responsive popup
		var oResponsivePopoverList = new sap.m.List({
        	id:"Mob27-2-oResponsivePopoverList",
			  mode: sap.m.ListMode.Delete,
		  	  height : "300px",
		      includeItemInSelection: true,
		      rememberSelections : false,
		      items: {
		    	  path: "/results",
		        template: 
		        new sap.m.StandardListItem({
		        	title : "{Serial}",
		        	
		     	})}
       });
       oResponsivePopoverList.attachDelete(oController.handleDelete);
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
			id: "Mob27-2-oResponsivePopover",
			title : "Entered Serial Numbers",
			showHeader : true,
			beginButton : oBeginButton,
			//endButton : oEndButton,
			horizontalScrolling : false,
			verticalScrolling : true,
			contentWidth : "520px",
			contentHeight : "300px",
			content : [ oResponsivePopoverList ]
		});
		
		

		/*var SerImg = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : function(){
				//var getScanVal = sap.ui.getCore().byId("Mob27-queue-lblSerBackValue").getValue();
	    	    
	    	
			}
		});*/
		
		var SerInput = new sap.m.Button({
			text : "Scan Serial",
		    type : sap.m.ButtonType.Reject,
			press : function()
			{
				sap.ui.getCore().byId("Mob27-2-popWin").open();
	    		sap.ui.getCore().byId("Mob27-2-txtAddRow").setVisible(true);
			}
			
		});//.addStyleClass("ScanButtonStyle");
		var imgShowSerials = new sap.m.Image("Mob27-2-serialNumberList", {
		    src: "img/ico_showimage.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
		  press : function(){
			  oResponsivePopover.openBy(this);
		  }
		  });
		
		
		var flexRowSer = new sap.m.FlexBox({
			id: "Mob27-order-flexRowSer",
			items : [
			        
			        SerInput,imgShowSerials
			        ]
		});
		
		
		
		
		
		
		
		
		
		
		//Qty
		var qty = new sap.m.Label({
			text  :"Quantity"
		});
		
		//Uom
		var Uom = new sap.m.Label({
			text  :"Uom"
		});
		
		//Revision
		var Revision = new sap.m.Label({
			text  :"Revision"
		});
		
		
		var flexRowQty = new sap.m.FlexBox({
			items : [
			        
			        qty,labeldummy6, Uom,labeldummy7, Revision
			        ]
		});
		
		/////Text area 
		
		var QtyIpArea = new sap.m.Input({
			width : "60px",
			type :sap.m.InputType.Tel,
			id : "Mob27-order-QtyIpArea"
		});
		
		//Uom
		var UomTxt = new sap.m.Text({
			id:"Mob27-order-UomTxt"
		});
		
		//Uom
		var RevTxt = new sap.m.Text({
			id : "Mob27-order-RevTxt"
		});
		
		var flexRowQtyIps = new sap.m.FlexBox({
			items : [
			        
			        QtyIpArea,labeldummy8, UomTxt,labeldummy9, RevTxt
			        ]
		});
		
		
		
		
		
		
		var flexBox = new sap.m.FlexBox({ 
			id : "MOB27-thrdScr-order-flexBox",
			items: [ 
			        labeldummy1,
			        
			        lblDestStrBin,
			        lblDestStrBinBackValue,
			        flexRowDest,

			        labeldummy2,
			        lblMat,
			        lblMatBackValue,
			        flexRowMat,
			        labeldummy2A,
			        
			        flexRowExpectedQtyValue,
			        labeldummy3,
			        lblBat,
			        lblBatBackValue,
			        flexRowBat,

			        
			        labeldummy4,
			        lblSer,
			        lblSerBackValue,
			        flexRowSer,

			        labeldummy5,
			        flexRowQty,
			        flexRowQtyIps

			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
				
		    }).addStyleClass("flex-box-padding");
		
		//Scan image visibility
		if(g_runningInTablet == true || g_runningOnPhone == true )
		{
		DestImg.setVisible(true);
		MatImg.setVisible(true);
		BatImg.setVisible(true);
		}
	else
		{
		DestImg.setVisible(false);
		MatImg.setVisible(false);
		BatImg.setVisible(false);
		}
		
		if(g_runningOnPhone == true)
			{
			return new sap.m.Page({
	 			id:"Mob27-order-thrdScreenTitle",
				content: [
	           flexBox
				],
				showNavButton: true,
				navButtonTap:function(){ 
					 g_MobileNavigationId = "Mob27-order-SecScreen";
					sap.ui.getCore().byId("myApp").to("idMob27TrOrdDet");
		          },
				   footer: new sap.m.Bar({
					   
					   contentRight: [new sap.m.Button({
				        	id:"Mob27-order-NextPick",
				        	text : "Next Pick",
				        	press : oController.Next,
				        	//style : sap.ui.commons.ButtonStyle.Error,
				        	
				        	
				        })
				        
				        ],
				
				   })
				
				
			});
			}
		
		else
			{
			return new sap.m.Page({
	 			id:"Mob27-order-thrdScreenTitle",
				content: [
	flexBox
				]
			});
			}
 		
 		
 		
 		
 		
	}

});