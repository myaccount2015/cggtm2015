sap.ui.jsview("com.cg.gtm.view.Mob30MatDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30MatDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob30MatDetail";
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
		
		
		//Material
		var lblMat = new sap.m.Label({text : "{i18n>mob30_material}",width : "200px"});
		var txtMat = new sap.m.Text({id : "Mob30-thrdScr-txtMat",width : "250px"});
        var MatRow = new sap.m.FlexBox({
        	width : "500px",
			items: [ lblMat, txtMat ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
        
      //Description
		var lblDes = new sap.m.Label({text : "{i18n>mob30_desc}",width : "200px"});
		var txtDes = new sap.m.Text({id : "Mob30-thrdScr-txtDes",width : "250px"});
        var DesRow = new sap.m.FlexBox({width : "500px",
			items: [ lblDes, txtDes ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});

        

      //Uom
      		var lblUom = new sap.m.Label({text : "{i18n>Mob20_UoM}",width : "200px"});
      		var txtUom = new sap.m.Text({id : "idMob30txtUom",width : "250px"});
              var UomRow = new sap.m.FlexBox({width : "500px",
      			items: [ lblUom, txtUom ],direction:"Column",
      			justifyContent:"Start",//Contents would be placed in the begin
      			alignItems:"Start"});
              
            //Type
      		var lblType = new sap.m.Label({text : "{i18n>Mob20_StockType}",width : "200px"});
      		var txtType = new sap.m.Text({id : "idMob30txtType",width : "250px"});
              var TypeRow = new sap.m.FlexBox({width : "500px",
      			items: [ lblType, txtType ],direction:"Column",
      			justifyContent:"Start",//Contents would be placed in the begin
      			alignItems:"Start"});
              
              
              //Batch
              		var lblBatch = new sap.m.Label({id: "idbatchMob30",text : "{i18n>Mob20_Batch}",width : "200px"});
              		var txtBatch = new sap.m.Text({id : "idMob30txtBatch",width : "250px"});
                      var BatchRow = new sap.m.FlexBox({ id : "MOB30-batchFlex",width : "500px",
              			items: [ lblBatch, txtBatch ],direction:"Column",
              			justifyContent:"Start",//Contents would be placed in the begin
              			alignItems:"Start"});  
                      
                      
                    //Serial
              		var lblSerial = new sap.m.Label({id: "idserialMob30",text : "{i18n>mob30_serial}",width : "200px"});
              		var txtSerial = new sap.m.Text({id : "Mob30txtSerial",width : "250px"});
                      var serialRow = new sap.m.FlexBox({ id : "MOB30-SerialFlex",width : "500px",
              			items: [ lblSerial, txtSerial ],direction:"Column",
              			justifyContent:"Start",//Contents would be placed in the begin
              			alignItems:"Start"});
                      
                      //Quantity
                      var lblQuantity = new sap.m.Label({id: "idQuantityMob30",text : "{i18n>mob30_quantity}",width : "200px"});
                		var txtQuantity = new sap.m.Input({id : "Mob30txtQuantity",	type :sap.m.InputType.Tel,width : "250px"});
                        var QuantityRow = new sap.m.FlexBox({ id : "MOB30-QuantityFlex",width : "500px",
                			items: [ lblQuantity, txtQuantity ],direction:"Column",
                			justifyContent:"Start",//Contents would be placed in the begin
                       alignItems:"Start"});
                      
                      //Log Serial Num
                		var lblLogSer = new sap.m.Label({text : "{i18n>mob30_quantity}",width : "250px"});
                		var txtBoxLog = new sap.m.Input({id : "Mob30-thrdScr-txtBoxLogSer",	type :sap.m.InputType.Tel,
                			liveChange : function(){
                				/*window.localStorage.setItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
                			            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal",
                						sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue());*/
                			field_numeric_validation(sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer"));//go to string utility  
                		  	},
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
                			contentWidth : "520px",
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
                				popWin.close();
                			}
                		});
                		//On click of scan Pop up window
                		var popWin = new sap.m.Dialog({
                			id : "Mob30-popWin",
                			subHeader : new sap.m.Bar({
                            
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
                	        //   	press: oController.ScanSerial
                	        
                	        })});
                		
                		//Scan
                		var btnScan = new sap.m.Button({ id : "Mob30-thrdScr-btnScan",
                			    text : "{i18n>Mob20_Scan}", 
                			    icon : "img/ico_rect_scanbarcode.png",
                			    press : oController.btnScanner_30
                		
                		});
                		
                
   //Main Container
	                      var containerList = new sap.m.FlexBox({
	              			items: [lblDummy1,MatRow,lblDummy2,DesRow,lblDummy3,UomRow,lblDummy4,TypeRow,lblDummy5,BatchRow,
	              			        lblDummy6,serialRow,lblDummy7,lblLogSer,lblDummy8,LogTxtRow ],
	              			direction:"Column",
	              			justifyContent:"Start",//Contents would be placed in the begin
	              			alignItems:"Start"
	              		});

		
 		return new sap.m.Page({
		//	title: "MatDetail",
			content: [
			          containerList
			]
		});
	}

});