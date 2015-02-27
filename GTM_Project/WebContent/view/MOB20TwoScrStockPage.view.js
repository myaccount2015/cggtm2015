sap.ui.jsview("com.cg.gtm.view.MOB20TwoScrStockPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB20TwoScrStockPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB20TwoScrStockPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB20TwoScrStockPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		//Space
		var lblDummy1 = new sap.m.Label({
			id:'Mob20-SerCheckValidation',
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy2 = new sap.m.Label({
			id:'Mob20-SerCheckValidation-NonSer',
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
			id:"Mob20-Dummy-Label-6",
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy7 = new sap.m.Label({
			id:"Mob20-Dummy-Label-7",
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		var lblDummy8 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
//Material
		var lblMat = new sap.m.Label({text : "{i18n>Mob20_Material}",design: sap.m.LabelDesign.Bold,width : "200px"});
		var txtMat = new sap.m.Text({id : "Mob20-thrdScr-txtMat",width : "250px"});
        var MatRow = new sap.m.FlexBox({
        	width : "500px",
			items: [ lblMat, txtMat ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});

//Description
		var lblDes = new sap.m.Label({text : "{i18n>Mob20_Description}",design: sap.m.LabelDesign.Bold,width : "200px"});
		var txtDes = new sap.m.Text({id : "Mob20-thrdScr-txtDes",width : "250px"});
        var DesRow = new sap.m.FlexBox({width : "500px",
			items: [ lblDes, txtDes ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});

//Uom
		var lblUom = new sap.m.Label({text : "{i18n>Mob20_UoM}",design: sap.m.LabelDesign.Bold,width : "200px"});
		var txtUom = new sap.m.Text({id : "Mob20-thrdScr-txtUom",width : "250px"});
        var UomRow = new sap.m.FlexBox({width : "500px",
			items: [ lblUom, txtUom ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
//Type
		var lblType = new sap.m.Label({text : "{i18n>Mob20_StockType}",design: sap.m.LabelDesign.Bold,width : "200px"});
		var txtType = new sap.m.Text({id : "Mob20-thrdScr-txtType",width : "250px"});
        var TypeRow = new sap.m.FlexBox({width : "500px",
			items: [ lblType, txtType ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
        
//Batch
		var lblBatch = new sap.m.Label({id: "batchMob20",text : "{i18n>Mob20_Batch}",design: sap.m.LabelDesign.Bold,width : "200px"});
		var txtBatch = new sap.m.Text({id : "Mob20-thrdScr-txtBatch",width : "250px"});
        var BatchRow = new sap.m.FlexBox({ id : "MOB20-batchFlex",width : "500px",
			items: [ lblBatch, txtBatch ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
        
//Special Stock :
        var lblStockType = new sap.m.Label
        (
        	{id: "SpcStkLab",design: sap.m.LabelDesign.Bold,
        	text : "Special Stock",
        	width : "200px"}
        );
        var txtStockTypeWitNum = new sap.m.Text({id : "Mob20-thrdScr-txtStock",width : "250px"});
        var radioRow = new sap.m.FlexBox({ id : "Mob20-spclstk",width : "500px",
			items: [ lblStockType, txtStockTypeWitNum ],direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		
//Log Serial Num
		var lblLogSer = new sap.m.Label({text : "{i18n>Mob20_Quantity}",design: sap.m.LabelDesign.Bold,width : "250px"});
		var txtBoxLog = new sap.m.Input({id : "Mob20-thrdScr-txtBoxLogSer",	type :sap.m.InputType.Tel,
			change : function(){
				debugger;
				
				window.localStorage.setItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
			            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() +
			            sap.ui.getCore().byId("Mob20-thrdScr-txtBatch").getText()+ 
			            sap.ui.getCore().byId("Mob20-thrdScr-txtType").getText()
			            +
			            "SerLogVal",
						sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue());
			field_numeric_validation(sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer"));//go to string utility  
		  	},});
		
/////////////////////////////////////////////////////////////////////////////////////////////
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob20-thrdScr-txtBoxManualEntryLog",	type :sap.m.InputType.Tel,
			maxLength : 7,
			placeholder : "Manual Entry",
			liveChange : function(){
			field_numeric_validation(sap.ui.getCore().byId("Mob20-thrdScr-txtBoxManualEntryLog"));//go to string utility  
		  	},
		  	});
	
		var btnAdd = new sap.m.Button({ 
			id : "Mob20-thrdScr-btnAdd",
			text : "Add Serial", 
			type : sap.m.ButtonType.Emphasized,
			press : oController.addSerialButton});
		
		var txtAddRow = new sap.m.FlexBox({
			id : "Mob20-txtAddRow",
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
		sap.ui.getCore().byId("Mob20-txtAddRow").setVisible(true);
		var popWin = new sap.m.Dialog({
			id : "Mob20-popWin",
			title:"Add a Serial number for material",
			/*subHeader : new sap.m.Bar({
                contentLeft : [],
                contentMiddle : [new sap.m.Text({text : "Add a Serial number for material"})],
                contentRight : [iconCloseImage],
            }),*/
			
			
			type: sap.m.DialogType.Message,
	       	content: [
            new sap.m.Text({
	       		id:"Mob20-ScanBodyText",
	       		textAlign: "Center",
	       		width: "340px",
	       	text: "text",//sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "\n" + sap.ui.getCore().byId("Mob20-thrdScr-txtDes").getText()
	       	}),
	       	txtAddRow],
	       	leftButton: new sap.m.Button({
	       	text: "Cancel",
	       	press: function () {
	       		//sap.ui.getCore().byId("Mob20-txtAddRow").setVisible(true);
	       		popWin.close();
	        }
	        }),rightButton: new sap.m.Button({
	           	text: "Scan",
	           	press: oController.ScanSerial
	        
	        })});
		
		//Scan
		var btnScan = new sap.m.Button({ id : "Mob20-thrdScr-btnScan",
			    text : "{i18n>Mob20_Scan}", 
			    icon : "img/ico_rect_scanbarcode.png",
			    press : oController.btnScanner
		
		});
		
		
		
		//Res Pop
        var oResponsivePopoverList = new sap.m.List({
        	id:"oResponsivePopoverList",
			  mode: sap.m.ListMode.Delete,
		  	  height : "300px",
		      includeItemInSelection: true,
		      rememberSelections : false,
		      items: {
		    	  path: "/results",
		        template: 
		        new sap.m.StandardListItem({
		        	title : "{scannerValues}",
		        	
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
			id: "oResponsivePopover",
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
		/*var btnlogSer = new sap.m.Button({
			text : "{i18n>Mob20_LoggedSerialNo}",
			id:"Mob20-btnlogSer",
			type : sap.m.ButtonType.Emphasized,
			press : oController.logSer
		});*/
		
				
		var btnlogSer = new sap.m.Image("Mob20-btnlogSer", {
		    src: "img/ico_showimage.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
		    press : oController.logSer
		  });
		
		
		var LogTxtRow = new sap.m.FlexBox({width : "500px",
			items: [ txtBoxLog, /*btnScan*/ btnlogSer ]});
       //Scanner  
		/*var runningInDsktop = jQuery.device.is.desktop;
		if (runningInDsktop == false)
			{sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);}
		else{sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(true);}*/
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		var containerList = new sap.m.FlexBox({
			items: [lblDummy1,MatRow,lblDummy2,DesRow,lblDummy3,UomRow,lblDummy4,TypeRow,lblDummy5,BatchRow,
			        lblDummy6,radioRow,lblDummy7, lblLogSer,lblDummy8,LogTxtRow ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});

        if(g_runningOnPhone == true)
		{
        	var btnConfrmCnt = new sap.m.Button({
			    	id : "Mob20-btnConfrmCnt-thrdScreen",
			    	text : "{i18n>Mob20_ConfirmCount}",
			    	icon : "sap-icon://accept",
			    	press : oController.confrmCount
			    });
         return new sap.m.Page({
				id : "Mob20-StockPageTitle",
				content: [
	                   containerList
				 ],
				 showNavButton: true,
				 enableScrolling: false,
				 navButtonTap:function(){  
					 g_MobileNavigationId = "Mob20-frstScreen";
						sap.ui.getCore().byId("myApp").to("idMob20MatDesPage");
	              },
				footer: new sap.m.Bar({
			        contentRight: [
                    btnConfrmCnt,btnScan
                    ]
				})
			});	
		}
		else{
			return new sap.m.Page({
				id : "Mob20-StockPageTitle",
				content: [
	                   containerList
				],
				enableScrolling: false
			});	
			
		}
 	}

});