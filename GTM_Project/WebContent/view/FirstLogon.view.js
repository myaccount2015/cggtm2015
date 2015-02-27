sap.ui.jsview("com.cg.gtm.view.FirstLogon", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf com.cg.gtm.view.FirstLogon
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.FirstLogon";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf com.cg.gtm.view.FirstLogon
	 */
	createContent: function (oController) {

		// keep for worker to work
		var demoSwitch = new sap.m.Switch({
			id: "demoswitch",
			state: false
		}).addStyleClass("switch");

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
								id: "txtUser",
								value : "dev1",//GTM
								change: function (evt) {
									this.setValue(evt.getParameter("value").toUpperCase());
								}
							}),
							new sap.m.Label({
								text: "{i18n>Pas}"
							}),
							new sap.m.Input({
								id: "txtPass",
								value : "initial1",//GTM
								type: "Password"
							}),
							new sap.m.Label({
								text: "{i18n>newPn}"
							}),
							new sap.m.Input({
								id: "txtPin",
								type: "Number",
								maxLength: 4,
							}).addStyleClass("secure").attachBrowserEvent("keyup", function (e) {
								var theEvent = e || window.event;
								var keyPressed = theEvent.keyCode || theEvent.which;
								if (keyPressed == 13) {
									sap.ui.getCore().byId("idLogon").firePress();
								}
								return true;
							}).addEventDelegate({
								onAfterRendering: function () {
									$("#txtPin > input").attr("pattern", "[0-9]*");
								}
							}),
							new sap.m.Button({
								id: "idLogon",
								text: "{i18n>LogOn}",
								type: "Emphasized",
								press: function () {
									if (logonValidate()) { //Validation success
										defaultPlantName = "";
										defaultPlantCode = "";
										//saveCredentials();
										g_isPingSuccess = true;
										//startBGPingTester();
										g_webWorkerCheck = "NS"; // Not Started
										if (g_runningInTablet || g_runningOnPhone) {
											var user = sap.ui.getCore().getElementById("txtUser").getValue();
											var pass = sap.ui.getCore().getElementById("txtPass").getValue();
											var savedUsr = getUserName();
											var savedPass = getPassword();
											if (savedUsr != user || savedPass != pass) {
												removeAllFiles();
												window.localStorage.clear(); // Clear all Data in local
											}
											startParentWorker();
										} else {
											startParentWorker();
										}
									} else {
										return false;
									}
								},
								layoutData: new sap.ui.layout.GridData({
									linebreak: true
								})
							}),
							new sap.m.Button({
								id: "Mob00-VersionInfo",
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
		//		});
		//		
		//		//icon.addStyleClass("ImageIcon");
		//		
		//		var lblDummy2 = new sap.m.Label({
		//			
		//		});
		//		var lblDummy3 = new sap.m.Label({
		//					
		//				});
		//		
		//		var lblDummy1 = new sap.m.Label({
		//			text: "Dummy"
		//		});
		//		
		//		lblDummy1.addStyleClass("HideLabel");
		//		
		//		var lblVersion = new sap.m.Label({
		//			id : "Mob00-VersionInfo",
		//		
		//			text: "Version 1.70"
		//				}).addStyleClass("fontcolor");
		//		
		//		var lblHeader = new sap.m.Label({
		//			text: "{i18n>FirstLogTit}"
		//		
		//				}).addStyleClass("header");
		//		
		//		
		//		/*var lblDOM_WebWorkerFlag = new sap.m.Label({
		//			id:"DOM_WebWorkerFlag",
		//			text: "123"
		//				
		//		}).addStyleClass("HideLabel");*/
		//		
		//		
		//		var objHeader = new sap.m.ObjectHeader({
		//		
		//			title: "{i18n>FirstLogTit}"
		//			//title : "HITACHI RAIL EUROPE"
		//				}).addStyleClass("fontcolor");
		//		
		//	//	objHeader.addStyleClass("HeaderProp");		
		//		
		//		var lblUsr = new sap.m.Label({
		//			text: "{i18n>usdTxt}"
		//				}).addStyleClass("fontcolor");
		//		
		//		var textUser = new sap.m.Input({
		//			id : "txtUser",
		//			maxLength : 12,
		//			width: "100%"
		//		}).addStyleClass("input");
		//		
		//		var lblPass = new sap.m.Label({
		//			text: "{i18n>Pas}"
		//				}).addStyleClass("fontcolor");
		//		
		//			var textPass = new sap.m.Input({
		//			
		//			id :"txtPass",
		//			type: sap.m.InputType.Password,
		//			change : function(){
		//				//field_alphanumeric_validation_pass(sap.ui.getCore().byId("txtPass"));//go to string utility  
		//			}
		//		}).addStyleClass("input");
		//		
		//		var lblPin = new sap.m.Label({
		//			text: "{i18n>newPn}"
		//				}).addStyleClass("fontcolor");
		//		
		//		var textPin = new sap.m.Input({
		//			id :"txtPin",
		//
		//		type: sap.m.InputType.Number,
		//
		//		//	type : "Number",
		//			maxLength : 4,
		//			minLength:1,
		//			change : function(){
		//				//isNumRepeat(sap.ui.getCore().byId('txtPin'));
		//				field_numeric_validation(sap.ui.getCore().byId("txtPin"));
		//		      }
		//		    	
		//		}).addStyleClass("secure");
		//		textPin.addStyleClass("input");
		//		
		//		
		//		var lblDummy = new sap.m.Label({
		//			text: "{i18n>DumyTxt}"
		//		});
		//		
		//		lblDummy.addStyleClass("HideLabel");
		//		//alert(sap.ui.core.IconPool.getIconURI(aNames[5]));
		//		var btnLogon = new sap.m.Button({
		//			id : "idLogon",
		//			text: "{i18n>LogOn}",
		//			width: "180px",
		//			//icon:  sap.ui.core.IconPool.getIconURI("visits"),
		//			press : function()
		//			{
		//				if(logonValidate()) {//Validation success
		//					defaultPlantName = "";
		//					defaultPlantCode = "";
		//					saveCredentials();
		//					g_isPingSuccess = true;
		//					
		//					startBGPingTester();
		//					
		//					//ajaxBGPingTest(); //Calling ping test during first log on
		//					
		//					g_webWorkerCheck = "NS"; // Not Started
		//					
		//					if(g_runningInTablet || g_runningOnPhone) {
		//						
		//		       			//clearappCache(); //Clearing the cache
		//		       			//CustomPlugin.callNativeMethod(); //Clearing App Data
		//						
		//						var user = sap.ui.getCore().getElementById("txtUser").getValue();
		//						var pass = sap.ui.getCore().getElementById("txtPass").getValue();
		//						
		//						var savedUsr = getUserName();
		//						var savedPass = getPassword();
		//						
		//						if(savedUsr!=user || savedPass!=pass) {
		//							window.localStorage.clear(); // Clear all Data in local
		//						}
		//						
		//			       		startWorker();
		//		       		
		//					}else {
		//		       			
		//		       			startWorker();
		//	
		//		       		}
		//				
		//				}else {
		//					return false;
		//				}
		//			
		//			}
		//				
		//		});
		//		
		//		btnLogon.addStyleClass("BtnStyle");
		//		
		//		
		//		var usrContainer = new sap.m.FlexBox({
		//			items: [
		//			        	lblUsr, textUser, lblPass, textPass, lblPin, textPin
		//			        ],
		//			direction:"Column",
		//	        justifyContent:"Start",
		//			alignItems:"Start"
		//		});
		//		
		//		var containerVersion = new sap.m.FlexBox({
		//			id : "idcontVer",
		//			
		//			items: [
		//			        lblVersion
		//			        ],
		//			direction:"Column",
		//			justifyContent:"End",
		//			alignItems:"Start"
		//		});
		//		
		//		var container = new sap.m.FlexBox({
		//			id : "idcont",
		//			
		//			items: [
		//			        	//icon,
		//			        	/*lblDummy2,
		//			        	lblDummy3,*/
		//			        	lblHeader,
		//			        	lblDummy1,
		//			        	usrContainer,
		//			        	lblDummy,
		//			        	btnLogon,
		//			        	lblDummy2,
		//			        	lblVersion,
		//			        	
		//			        	
		//			        	//lblDOM_WebWorkerFlag
		//			        ],
		//			direction:"Column",
		//			justifyContent:"Center",
		//			alignItems:"Center"
		//		});
		//		
		//		var lblDummy = new sap.m.Label({
		//			id : "iddemo",
		//			text: "Demo Mode"
		//		}).addStyleClass("demo");
		//		
		//		
		//		
		//		var demoSwitch =  new sap.m.Switch({
		//			id : "demoswitch",
		//			//text : "Demo",
		//	        state: false
		//		}).addStyleClass("switch");
		//		
		//		//var runningInDsktop = jQuery.device.is.desktop;
		//		
		//		if(g_runningInTablet == true || g_runningOnPhone == true) {
		//			//demoSwitch.setState(true);
		//		}
		//		
		//		this.page = new sap.m.Page("pageLogin",{
		//			content: [
		//			          container,
		//			        //  lblDummy,
		//			         // demoSwitch
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