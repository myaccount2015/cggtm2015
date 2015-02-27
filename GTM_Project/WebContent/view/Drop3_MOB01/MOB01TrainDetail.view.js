sap.ui.jsview("com.cg.gtm.view.Drop3_MOB01.MOB01TrainDetail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB01.MOB01TrainDetail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB01.MOB01TrainDetail";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB01TrainDetailIconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01TrainDetail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB01TrainDetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					title: "{trainNotifications>NotificationNo}",
					number: "{trainNotifications>NotificationType}"
				}),
				new sap.m.IconTabBar({
					id: "MOB01TrainDetailIconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Train",
							icon: "sap-icon://passenger-train",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB01FleetLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Fleet}",
											id : "MOB01FL"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01TrainLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Train}",
											id : "MOB01TR"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01CarLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Car}",
											id : "MOB01CA"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01ZoneLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Zone}",
											id : "MOB01ZO"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01PrimarySystemLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>PrimarySystem}",
											id : "MOB01PR"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01EquipmentLabel}",
											design: "Bold"
										}),
										new sap.m.Text("MOB01EQPTrain",{
											text: "{trainNotifications>Equipment}"
										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Info",
							icon: "sap-icon://notification",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
							          	new sap.m.Label({
					                      text: "{i18n>MOB01ShortDescriptionLabel}",
					                      design: "Bold"
					                    }),
					                    new sap.m.Text({
											text: "{trainNotifications>ShortDescription}",
											id : "MOB01SD"
										}),
					                    new sap.m.Label({
					                      text: "{i18n>MOB01LongDescriptionLabel}",
					                      design: "Bold"
					                    }),
					                    new sap.m.Text({
											text: "{trainNotifications>LongDescription}",
											id : "MOB01LD"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01CodingLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Coding}",
											id : "MOB01CODING"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01EffectLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Effect}",
											id : "MOB01EF"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01PriorityLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Priority}",
											id : "MOB01PRIO"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01BreakdownLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{trainNotifications>Breakdown}",
											id : "MOB01BRKDWN"
										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Components",
							icon: "sap-icon://puzzle",
							content: [
								new sap.m.List({
									id: "MOB01TrainDetailComponentList",
									noDataText: "{i18n>MOB01NoComponentsData}",
									items: {
										path: "/results",
										template: new sap.m.ObjectListItem({
											type: "Inactive",
											title: "{Materialno} - {Description}",
											number: "{Available}",
											attributes: [
												new sap.m.ObjectAttribute({
													title: "Quantity",
													text: "{Quantity} {Uom} - {PlantName}"
												})
											],
											firstStatus: new sap.m.ObjectStatus({
												text: "{Status}"
											}),
											press: [oController.handleComponentListItemPress, oController]
										})
									}
								})
//								new sap.m.Table({
//									mode: "Delete",
//									headerToolbar: new sap.m.Toolbar({
//										content: [
//											new sap.m.ToolbarSpacer(),
//											new sap.m.Button({
//												text: "Remove Material",
//												icon: "sap-icon://less"
//											}),
//											new sap.m.Button({
//												text: "Add Material",
//												icon: "sap-icon://add",
//												type: "Emphasized"
//											})
//										]
//									}),
//									items: {
//										path: "materials>/results",
//										template: new sap.m.ColumnListItem({
//											vAlign: "Middle",
//											cells: [
//												new sap.m.Text({
//													text: "{materials>Materialno}"
//												}),
//												new sap.m.Text({
//													text: "{materials>Description}"
//												}),
//												new sap.m.Input({
//													id: "MOB01TrainDetailQuantityInput",
//													type: "Number"
//												}),
//												new sap.m.Text({
//													text: "{materials>Uom}"
//												}),
//												new sap.m.Text({
//													text: "{materials>MaterialGroup}"
//												})
//											]
//										})
//									},
//									columns: [
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "ID"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Desc"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Qty"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "UoM"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Avail"
//											})
//										})
//									]
//								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Images",
							icon: "sap-icon://camera",
							content: [
								new sap.m.List({
									//DMS
								 	id : "TrainNotiCreated_AddedImageList",
								 	mode: sap.m.ListMode.SingleSelectMaster,
								 	headerText : "Added Image List",
										items: {
											    path: "/",
										  	    template: new sap.m.StandardListItem({
										  		title: "{imageName}"+""+"",
												type: "Active",
												icon: "{imageData}",
										})
										}
								 
								}),
								
							/*	new sap.m.Image({
									// src: "img/MB15_01A.jpg",
									id : "image1MOB01RO",
									width : "60px" ,
									height : "60px" ,
									layoutData : new sap.ui.layout.GridData({
										span: "L2 M3 S12",
										linebreakL: true,
										linebreakM: true,
										linebreakS: true
									})
								}),
								
								new sap.m.Image({
									//  src: "img/MB15_02.jpg",
									id : "image2MOB01RO",
									width : "60px" ,
									height : "60px" ,
									layoutData : new sap.ui.layout.GridData({
										span: "L2 M3 S12",
									})
								}),
								
								//image2.addStyleClass("BtnStyle");
								new sap.m.Image({
									// src: "img/MB15_01.jpg",
									id : "image3MOB01RO",
									width : "60px" ,
									height : "60px" ,
									layoutData : new sap.ui.layout.GridData({
										span: "L2 M3 S12",
									})
								})*/
							]
						})
					]
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});