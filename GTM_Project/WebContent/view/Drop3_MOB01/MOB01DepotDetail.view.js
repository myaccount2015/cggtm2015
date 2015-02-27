sap.ui.jsview("com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB01.MOB01DepotDetail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetail";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB01TrainDetailIconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01DepotDetail
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB01DepotDetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					title: "{depotNotifications>NotificationNo}",
					number: "{depotNotifications>NotificationType}"
				}),
				new sap.m.IconTabBar({
					id: "MOB01DepotDetailIconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Depot",
							icon: "sap-icon://building",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB01DepotLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>Depot}",
											id : "MOB01DEPOTRO"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01DepotAreaLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>DepotArea}",
											id : "MOB01DEPOTROAR"
										}),
										/*new sap.m.Label({
											text: "{i18n>MOB01EquipmentLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>Equipment}"
										})*/
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
											text: "{depotNotifications>ShortDescription}",
											id : "MOB01DSDRO"
										}),
					                    new sap.m.Label({
					                      text: "{i18n>MOB01LongDescriptionLabel}",
					                      design: "Bold"
					                    }),
					                    new sap.m.Text({
											text: "{depotNotifications>LongDescription}",
												id : "MOB01DLDRO"
										}),
										/*new sap.m.Label({
											text: "{i18n>MOB01FaultLocationLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>FaultLocation}",
											id : "MOB01FLTRO"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01RoomLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>Room}",
											id : "MOB01DROOMRO"
												
										}),*/
										new sap.m.Label({
											text: "{i18n>MOB01PriorityLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>Priority}",
											id : "MOB01DPRIORO"
										}),
										new sap.m.Label({
											text: "{i18n>MOB01BreakdownLabel}",
											design: "Bold"
										}),
										new sap.m.Text({
											text: "{depotNotifications>Breakdown}"
										}),
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Components",
							icon: "sap-icon://puzzle",
							content: [
								new sap.m.List({
									id: "MOB01DepotDetailComponentList",
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
//													id: "MOB01DepotDetailQuantityInput",
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
								 	id : "DepotNotiCreated_AddedImageList",
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
								
								  new sap.m.Image({
										// src: "img/MB15_01A.jpg",
										id : "image1MOB01DRO",
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
										id : "image2MOB01DRO",
										width : "60px" ,
										height : "60px" ,
										layoutData : new sap.ui.layout.GridData({
											span: "L2 M3 S12",
										})
									}),
									
									//image2.addStyleClass("BtnStyle");
									new sap.m.Image({
										// src: "img/MB15_01.jpg",
										id : "image3MOB01DRO",
										width : "60px" ,
										height : "60px" ,
										layoutData : new sap.ui.layout.GridData({
											span: "L2 M3 S12",
										})
									})
								
								
							]
						})
					]
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});