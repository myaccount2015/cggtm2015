sap.ui.jsview("com.cg.gtm.view.Drop2_MOB30.Mob30TwoScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30TwoScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB30.Mob30TwoScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30TwoScreen
	*/ 
	createContent : function(oController) {
		var detailpage = sap.ui.view({id:"idMOB30Detail", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30DetailMaterial", type:sap.ui.core.mvc.ViewType.JS});
		var detailMatpage = sap.ui.view({id:"idMOB30MatDetail", viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30MatDetail", type:sap.ui.core.mvc.ViewType.JS});
		
		this.setHeight("100%");
		/*var width1 = ((screen.width)/2.5) + "px";
		var width2 = ((screen.width)/3) + "px";*/
	 /*   var oLayout = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			height : "810px"

			});
		oLayout.createRow(detailpage,detailMatpage);*/
		/*detailpage.setWidth(width1);
		detailMatpage.setWidth(width2);*/
		detailpage.setHeight("810px");
		detailMatpage.setHeight("810px");
		
		
		/*var oLayout= new sap.ui.layout.HorizontalLayout({
			content:[detailpage,detailMatpage]
		});*/
		
		
		if( g_runningInTablet == false && g_runningOnPhone == false)
			{
			var nonResize = new sap.ui.layout.SplitterLayoutData({
				resizable : false,
			});
			detailpage.setLayoutData(nonResize);
			
			
			
			}
		
		
		
		var oLayout = new sap.ui.layout.Splitter({
			id: "MOB30Splitter",
			contentAreas : [detailpage,detailMatpage]
		});
		
		//Header Content
		/*var oLayout1 = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			columns : 2,
			widths : [ width1, width2],
			//height : screen.height + "px"

			});
		*/
		var lbl = new sap.m.Label("lblHeader_Bin", {
		      text: "{i18n>mob30_Mat}"
		    });
		
		var lbl1 = new sap.m.Label("lblHeader1_Bin", {
		      text: "{i18n>mob30_detail}"
		    });
		
		/*var oLayout1= new sap.ui.layout.HorizontalLayout({
			content:[lbl,lbl1]
		});*/
		/*var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell.addContent(lbl);
		
		var oCell1 = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		oCell1.addContent(lbl1);
		
		oLayout1.createRow(oCell,oCell1);*/
		
		var btnScan = sap.ui.getCore().byId("Mob30-thrdScr-btnScan");
		
		var btnmove = sap.ui.getCore().byId("Mob30Move");
	/*	var btnmove = new sap.m.Button({
	    	id : "Mob30Move",
	    	text : "Move",
	    	icon : "sap-icon://accept",
	    	press : function(){
	    		//alert("clicked move");
	    		sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(false);
	    		sap.ui.getCore().byId("Mob30-popWin1").open();
	    		
	    		
	    		
	    		sap.ui.getCore().byId("Mob30-ScanBodyText1").setText(
	    		sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() + "\n" + 
	    		sap.ui.getCore().byId("Mob30-thrdScr-txtDes").getText());
	    		
	    	}
	    });
	   
		
		//Pop win
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob30-thrdScr-txtBoxManualEntryLog1",	type :sap.m.InputType.Tel,
			maxLength : 9,
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
			items: [ txtBoxManualEntryLog, btnAdd ]});
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
	        //   	press: oController.ScanSerial
	        
	        })});*/
		
 		return new sap.m.Page({
 			showHeader: false,
 			//title: " ",
 			
			content: [
			          oLayout
			],
 		enableScrolling: false,
		showFooter: true,
		
 		 
          footer: new sap.m.Bar({
		        contentRight: [
                          btnScan,btnmove             
		                       ]
			}).addStyleClass("footer")
		});
	}

});