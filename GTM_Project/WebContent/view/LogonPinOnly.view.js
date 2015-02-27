sap.ui.jsview("com.cg.gtm.view.LogonPinOnly", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.cg.gtm.view.LogonPinOnly
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.LogonPinOnly";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf com.cg.gtm.view.LogonPinOnly
	 */
	createContent: function (oController) {

		return new sap.m.Page({
			enableScrolling: false,
			showHeader: false,
			content: new sap.m.FlexBox({
				fitContainer: true,
				alignItems: "Center",
				justifyContent: "Center",
				items: [
					new sap.ui.layout.form.SimpleForm({
						layout: "ResponsiveGridLayout",
						editable: true,
						content: [
							new sap.m.Label({
								text: "{i18n>usdTxt}"
							}),
							new sap.m.Input({
								id: "txtUser1",
								enabled: false
							}),
							new sap.m.Label({
								text: "{i18n>EntrPinToLogOn}"
							}),
							new sap.m.Input({
								id: "txtPin1",
								type: "Number",
								maxLength: 4,
							}).addStyleClass("secure").attachBrowserEvent("keyup", function (e) {
								var theEvent = e || window.event;
								var keyPressed = theEvent.keyCode || theEvent.which;
								if (keyPressed == 13) {
									sap.ui.getCore().byId("btnLogon").firePress();
								}
								return true;
							}).addEventDelegate({
								onAfterRendering: function () {
									$("#txtPin1 > input").attr("pattern", "[0-9]*");
								}
							}),
							new sap.m.Button({
								id: "btnLogon",
								text: "{i18n>LogOnUsingPin}",
								type: "Emphasized",
								press: oController.onClickLogonPIN,
								layoutData: new sap.ui.layout.GridData({
									linebreak: true
								})
							}),
							new sap.m.Label({
								text: "or",
								textAlign: "Center"
							}),
							new sap.m.Button({
								id: "newuser",
								text: "{i18n>LogOnAsNwUser}",
								type: "Reject",
								layoutData: new sap.ui.layout.GridData({
									linebreak: true
								}),
								press: oController.goToLogon
							}),
							new sap.m.Button({
								text: "{i18n>Version}",
								type: "Transparent",
								enabled: false
							})
						]
					})
				]
			})
		});

		//		var icon = new sap.m.Image({
		//			src:"img/Hitachi_Icon.png"
		//		}).addStyleClass("fontcolor");
		//		
		//		//icon.addStyleClass("ImageIcon");
		//		
		//		var lblDummy1 = new sap.m.Label({
		//			text: "{i18n>DumyTxt}"
		//		});
		//		
		//		lblDummy1.addStyleClass("HideLabel");
		//		
		//		var lblHeader = new sap.m.Label({
		//			text: "{i18n>FirstLogTit}"
		//				}).addStyleClass("header");
		//		
		//		var objHeader = new sap.m.ObjectHeader({
		//			title: "{i18n>FirstLogTit}"
		//				}).addStyleClass("fontcolor");
		//		
		//		objHeader.addStyleClass("HeaderProp");
		//		
		//		/*
		//		//objHeader.addStyleClass("ImageIcon");
		//		
		//		var hdrContainer = new sap.m.FlexBox({
		//			items: [
		//			        	icon, objHeader
		//			        ],
		//	        justifyContent:"Start",
		//			alignItems:"Start"
		//		});*/
		//		
		//		
		//		var lblUsr = new sap.m.Label({
		//			
		//			text: "{i18n>CurrentUsrIs}"
		//				}).addStyleClass("fontcolor");
		//		
		//		var lblUsrName = new sap.m.Label({
		//			id : "lblUsrName",
		//			//text: userName
		//				}).addStyleClass("fontcolor");
		//		
		//			
		//		var lblPin = new sap.m.Label({
		//			text: "{i18n>EntrPinToLogOn}"
		//			
		//				}).addStyleClass("fontcolor");
		//		
		//		var inputPin = new sap.m.Input({
		//			id:"txtPin1",
		//			type: sap.m.InputType.Number,
		//			maxLength : 4,
		//			liveChange : function(){
		//				field_numeric_validation(sap.ui.getCore().byId("txtPin1"));//go to string utility
		//			}
		//
		//		}).addStyleClass("secure");
		//		
		//		var lblDummy = new sap.m.Label({
		//			text: "{i18n>DumyTxt}"
		//		});
		//		
		//		lblDummy.addStyleClass("HideLabel");
		//		
		//		var lblDummy1 = new sap.m.Label({
		//			text: "{i18n>DumyTxt1}"
		//		});
		//		
		//		lblDummy1.addStyleClass("HideLabel");
		//		
		//		var btnLogon = new sap.m.Button({
		//			//text: "{i18n>LogonAsApadim}",
		//			id : "btnLogon",
		//			//text : userName,
		//			width: "180px",
		//			//press : onClickLogonPIN
		//		});
		//		
		//		var lblDummy2 = new sap.m.Label({
		//			text: "{i18n>DumyTxt2}"
		//		});
		//		
		//		lblDummy2.addStyleClass("HideLabel");
		//		
		//		var lblOr = new sap.m.Label({
		//			text: "(or)"
		//				}).addStyleClass("fontcolor");
		//		
		//		var lblDummy3 = new sap.m.Label({
		//			text: "{i18n>DumyTxt3}"
		//		});
		//		
		//		lblDummy3.addStyleClass("HideLabel");
		//		
		//		var btnLogonAnother = new sap.m.Button({
		//			id :"newuser",
		//			text: "{i18n>LogOnAsNwUser}",
		//			width: "180px",
		//			press : oController.goToLogon
		//		});
		//		
		//		btnLogonAnother.addStyleClass("BtnStyle");
		//		
		//		var lblDummy4 = new sap.m.Label({
		//			text: "{i18n>DumyTxt4}"
		//		});
		//		
		//		lblDummy4.addStyleClass("HideLabel");
		//		
		//		btnLogon.addStyleClass("BtnStyle");
		//		btnLogon.attachPress(oController.onClickLogonPIN);
		//		
		//		
		//		var usrContainer = new sap.m.FlexBox({
		//			items: [
		//			        	lblPin, inputPin
		//			        ],
		//			direction:"Column",
		//	        justifyContent:"Start",
		//			alignItems:"Start"
		//		});
		//		
		//		
		//		var newUserDialog = new sap.m.Dialog("newUserDialog", {
		//	       	title: "Warning",
		//	       	 icon: "img/download_1.jpg",
		//	       	type: sap.m.DialogType.Message,
		//	       	content: [
		//	       	new sap.m.Text({
		//	       		text:"Please re-open the application, if you want to login as new user."
		//	       	}),
		//	       	],
		//	       	leftButton: new sap.m.Button({
		//	       	text: "No",
		//	       	press: function () {
		//	       		newUserDialog.close();
		//	       	}
		//	       	}),
		//	       	rightButton: new sap.m.Button({
		//	       	text: "Yes",
		//	       	press: function () {
		//	       		newUserDialog.close();
		//	       		navigator.app.exitApp();
		//	       	}
		//	       	})
		//	       	});
		//		
		//		
		//		var container = new sap.m.FlexBox({
		//			id:"cont",
		//			items: [
		//			        	//icon,
		//			        	lblHeader,
		//			        	lblDummy1,
		//			        	lblUsr,
		//			        	lblUsrName,
		//			        	lblDummy1,
		//			        	usrContainer,
		//			        	lblDummy,
		//			        	btnLogon,
		//			        	lblDummy2,
		//			        	lblOr,
		//			        	lblDummy3,
		//			        	btnLogonAnother,
		//			        	lblDummy4
		//			        ],
		//			direction:"Column",
		//			justifyContent:"Center",
		//			alignItems:"Center"
		//		});
		//		
		//		this.page = new sap.m.Page({
		//			content: [
		//			          container
		//			],
		//			showFooter: false,
		//			showHeader:false,
		//			footer : new sap.m.Bar({
		//				contentLeft: [],	
		//				contentMiddle: [],
		//				contentRight: [new sap.m.Label({
		//					text : "{i18n>FirstLogTit}"
		//				}) ]
		//			})
		//		});
		//		
		// 		return this.page;
	}

});