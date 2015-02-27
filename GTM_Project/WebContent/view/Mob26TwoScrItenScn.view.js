sap.ui.jsview("com.cg.gtm.view.Mob26TwoScrItenScn", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26TwoScrItenScn
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26TwoScrItenScn";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26TwoScrItenScn
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		
		
		var lblSerNo = new sap.m.Label({
			id:"Mob26-getScanItemCnt",
			//text : "There are 0 expected serial numbers",
			height : "250px"
		
		}).addStyleClass("Mob26AllTextFont");
		
		var labeldummy = new sap.m.Label({
			text: "{i18n>DumyTxt}",
			id : "Mob26-thrdScr-labeldummy"
		});
		labeldummy.addStyleClass("HideLabel");
		
		var labeldummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy1.addStyleClass("HideLabel");
		
		var labeldummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy2.addStyleClass("HideLabel");
		
		var labeldummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy3.addStyleClass("HideLabel");
		
		
		
		var lblScnSerNo =  new sap.m.Label({
			id:"Mob26-lblScnSerNo",
			text : "Scanned Serials",
		
		}).addStyleClass("Mob26AllTextFont");
		
		
		//Responsive popup
		var oResponsivePopoverList = new sap.m.List({
        	id:"Mob26-oResponsivePopoverList",
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
			id: "Mob26-oResponsivePopover",
			title : "New Serial Numbers",
			showHeader : true,
			beginButton : oBeginButton,
			//endButton : oEndButton,
			horizontalScrolling : false,
			verticalScrolling : true,
			contentWidth : "520px",
			contentHeight : "300px",
			content : [ oResponsivePopoverList ]
		});
		///////////////////////////////////////////////
		
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob26-thrdScr-txtBoxManualEntryLog",	type :sap.m.InputType.Tel,
			//maxLength : 7,
			liveChange : function(){
			field_numeric_validation(sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog"));//go to string utility  
		  	},
		  	});
	
		var btnAdd = new sap.m.Button({ 
			id : "Mob26-thrdScr-btnAdd",
			text : "Add Serial", 
			type : sap.m.ButtonType.Emphasized,
			press : oController.AddSer
			});
		var txtAddRow = new sap.m.FlexBox({
			id : "Mob26-txtAddRow",
			items: [ txtBoxManualEntryLog, btnAdd ]});
	
		
		var iconCloseImage = new sap.m.Image({
			src : "img/button_cancel.png",
			press : function(){
				popWin.close();
			}
		});
		
		
		//On click of scan Pop up window
		var popWin = new sap.m.Dialog({
			id : "Mob26-popWin",
			//showHeader : false,
			title : "Add a Serial number for material",
		
			subHeader : new sap.m.Bar({
             
                contentMiddle : [new sap.m.Text({text : "Add a Serial number for material"})],
                contentRight : [iconCloseImage],
            }),
			type: sap.m.DialogType.Message,
	       	content: [
            new sap.m.Text({
	       		id:"Mob26-ScanBodyText",
	       		textAlign: "Center",
	       		width: "340px",
	       	//text: "text",//sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "\n" + sap.ui.getCore().byId("Mob20-thrdScr-txtDes").getText()
	       	}),
	       	txtAddRow,
	       		       	
	       	],
	       	
	    
	       	
	       	leftButton: new sap.m.Button({
	       	text: "Manual Entry",
	       	press: function () {
	       		sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(true);
	        }
	        }),
	        rightButton: new sap.m.Button({
	           	text: "Scan",
		       	press: oController.ScanSerial
		        
		        })
		  	
		
		});
		
		if ( g_runningOnPhone == true)
			{
			var btnScn = new sap.m.Button({
				id: "Mob26-btnScn",
		    	text : "Scan serial",
		        icon : "img/ico_rect_scanbarcode.png",
		    	press : function(){
		    		sap.ui.getCore().byId("Mob26-popWin").open();
		    		sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(false);
		    		sap.ui.getCore().byId("Mob26-ScanBodyText").setText(
		    		Mob26getSerDocJSONArray[0].Material + "\n"+	Mob26getSerDocJSONArray[0].MaterialDescription
		    		);
		    		
		    		
		    		
		    	}
		    });
			
			
			var btnFinish = new sap.m.Button({
				id: "Mob26-btnFinish",
		    	text : "Finish",
		    	
		       	icon : "sap-icon://accept",
		    	press : oController.BtnFinish
		    });
			
			var btnBack = new sap.m.Button({
			
		    	text : "Back",
		    	
		       	icon : "sap-icon://close-command-field",
		    	press : function()
		    	{
		    		sap.ui.getCore().byId("myApp").to("idMob26OrdDet");
		    		
		    	}
		    });
			
			}
		
		
		//////////////////////////////////////////////////////////////////////////////////////////////
		var SerSerialNum = new sap.m.FlexBox({
			id : "Mob26-SerSerialNum",
			items : [],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var imgShowSerials = new sap.m.Image("Mob26-serialNumberList", {
		    src: "img/ico_showimage.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
		  press : oController.showSerialLst
		  });
		lblScnSerNo.setLabelFor(imgShowSerials);
		
		var Hbox = new sap.m.FlexBox({
			id : "Mob26-thrdScr-Hbox",
			items : [lblScnSerNo,imgShowSerials],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var flexBox = new sap.m.FlexBox({ 
			id : "MOB26-thrScreenflexBox",
			items: [ 
                    lblSerNo,labeldummy1,SerSerialNum,labeldummy,Hbox,labeldummy2,labeldummy3
			         
			         
			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
				
		    }).addStyleClass("flex-box-padding");
		
		
		if ( g_runningOnPhone == true)
			{
			return new sap.m.Page({
				id:"Mob26-TwoScreenItem",
				title: "Item Scanning",
				content: [flexBox
				
				],
				navButtonTap:function(){  
					  g_MobileNavigationId = "Mob26-OrderDetTit";
					sap.ui.getCore().byId("myApp").to("idMob26OrdDet");
		          },
				enableScrolling: false,
				showFooter: true,
				footer: new sap.m.Bar({
					contentLeft : [btnBack],
			        contentRight: [btnScn,btnFinish  ]
				})
				
				
			});
			
			}
		else
			{
			
			return new sap.m.Page({
				title: "Item Scanning",
				content: [flexBox
				
				],
				enableScrolling: false,
				showFooter: false,
				footer: new sap.m.Bar({
			        contentLeft: [  ]
				}).addStyleClass("footer")
				
			});
			}
		
 		
 		
 		
 		
 		
	}

});