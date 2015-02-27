jQuery.sap.require("com.cg.gtm.view.Drop3Util.Formatter");

sap.ui.jsview("com.cg.gtm.view.DROP3_MOB03.MOB03Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB03.MOB03Detail
	 */
	getControllerName: function() {
		return "com.cg.gtm.view.DROP3_MOB03.MOB03Detail";
	},

	onBeforeShow: function(evt) {
		sap.ui.getCore().byId("MOB03IconTabBar").setSelectedKey("firstTab");
		//var context = evt.data.context;
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03Detail
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			id : "MOB03DetailPage",
			title: "{i18n>MOB03DetailTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonTap: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.ObjectHeader({
					id: "MOB03DetObjHdr",
					title: "{OpearionText}",
					number: "{OrderNo} / {ActivityNo}",
					attributes: [
						new sap.m.ObjectAttribute({
							id: "MOB03DetObjHdrAtt1",
							title: "Revision",
							text: {
								//path: "Priority",
								formatter: com.cg.gtm.view.Drop3Util.Formatter.priorityText
							}
						}),
						new sap.m.ObjectAttribute({
							id: "MOB03DetObjHdrAtt2",
							title: "Start Date",
							//text: "{EarliestStartDate}"
						}),
						new sap.m.ObjectAttribute({
							id: "MOB03DetObjHdrAtt3",
							title: "Finish Date",visible: false,
							//text: "{EarliestFinishDate}"
						})
					],
					statuses: [
						new sap.m.ObjectStatus({
							id: "MOB03DetObjHdrSt1",
							//text: "{StandardTextKey}"
						}),
						new sap.m.ObjectStatus({
							id: "MOB03DetObjHdrSt2",
							text: {
								//path: "CurrentStatus",
								formatter: com.cg.gtm.view.Drop3Util.Formatter.statusText
							}
						})
					]
				}),
				new sap.m.IconTabBar({
					id: "MOB03IconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Detail",
							icon: "sap-icon://activity-items",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
									         new sap.m.ObjectHeader({
									        id: "MOB03DetailTabContent",
									        attributes: [
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContTrain_Depot",
									        	//title: "Revision",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContCar",
									        	title: "Car",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContZone_Sys",
									        	title: "Zone/System",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContRoad",
									        	title: "Road",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContEquip",
									        	title: "Equipment",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContManuSerial",
									        	title: "Manuf. Serial No",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContInstDetail",
									        	title: "Installation Details",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContPrio",
									        	title: "Priority",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContNotif",
									        	title: "Notification",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContPMOrdtext",
									        	title: "PM Order Text",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContWrkType",
									        	title: "Type of Work",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContWrkCntr",
									        	title: "Work Center",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContCTRLKey",
									        	title: "Control Key",
									        }),
									        new sap.m.ObjectAttribute({
									        	id: "MOB03DetContSysSta",
									        	title: "System Status",
									        }),
									      
									        
									        ],
									         }),
									          
									          /*
										new sap.m.Label({
											text: "Train Set",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB03DETTR",
											text: "{TrainSet}-{CarId}-{CarZone}-{CarSystem}"
										}),
										new sap.m.Label({
											text: "Road",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB03DETROAD",
											text: "{RoadDesc}"
										}),
										new sap.m.Label({
											text: "Equipment",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB03DETEQ",
											text: "{Equipment}-{EquipmentDesc}"
										}),
										new sap.m.Label({
											text: "System Status",
											design: "Bold"
										}),
										new sap.m.Text({
											id : "MOB03DETST",
											text: "{SystemStatus}"
										})
									*/]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Method",
							
							icon: "sap-icon://activities",
							content: [
								new sap.m.Text({
									 id : "JobMethod",
									//text: "\n1.1.1\n\nEnsure the unit is stable over pitted road.\n\n1.1.2\n\nEnsure service break is applied (CPBC is set to brake position MAX)\n\n1.1.3\n\nAll steps shall be carried out at each vehicle/location before moving to the next vehicle/location. Steps that are specific to a particular vehicle/location are identified in parenthesis at the ..."
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Documents",
							key : "Documents",
							icon: "sap-icon://documents",
							content: [

										new sap.m.List({
											id: "MOB03DocList",
											mode : sap.m.ListMode.SingleSelectMaster,
											select : [oController.handleComponentDocListItemPress, oController],
											noDataText: "{i18n>MOB03NoDocumentsData}",
											
											items: {
												path: "/results",
												template: new sap.m.ObjectListItem({
													title :"{Wsapplication}"+"\n"+"{Documentnumber}",
													number:"{Documentpart}",
													numberUnit:"{Documentversion}",
													attributes:[
													            new sap.m.ObjectAttribute({
													            	text:"{DocDescription}"
													           })
													           ],
													firstStatus:
														       new sap.m.ObjectStatus({
													            	   	text: "{Description}"
														        }),
												})
											}
										})
									
							          
							          
							          
							          
							          ]
						}),
					
						new sap.m.IconTabFilter({
							text: "Components",
							icon: "sap-icon://puzzle",
							key : "COMP",
							content: [
								new sap.m.List({
									id: "MOB03ComponentList",
									mode : sap.m.ListMode.SingleSelectMaster,
									select : [oController.handleComponentListItemPress, oController],
									noDataText: "{i18n>MOB03NoComponentsData}",
									headerToolbar: new sap.m.Toolbar({
										content: [
											new sap.m.ToolbarSpacer(),
											new sap.m.Button({
												id: "MOB03AddComponentButton",
												text: "{i18n>MOB03AddComponentButton}",
												icon: "sap-icon://add",
												type: "Emphasized",
												press: [oController.handleAddComponentButtonPress, oController]
											})
										]
									}),
									items: {
										path: "/results",
										template: new sap.m.ObjectListItem({
											type: "Active",
											title: "{Material} - {MatlDesc}",
											number: "{OriginalQty}",
											attributes: [
												new sap.m.ObjectAttribute({
													title: "Quantity",
													text: "{OriginalQty} {RequirementQuantityUnit} - {Plant}"
												})
											],
											firstStatus: new sap.m.ObjectStatus({
												text: "Pick Requested"//"{Status}"
											}),
											//press: [oController.handleComponentListItemPress, oController]
										})
									}
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Tools",
							icon: "sap-icon://wrench",
							key : "TOOL",
							content: [
								new sap.m.List({
									id: "MOB03ToolList",
									mode : sap.m.ListMode.SingleSelectMaster,
									select : [oController.handleToolListItemPress, oController],
									noDataText: "{i18n>MOB03NoToolsData}",
									headerToolbar: new sap.m.Toolbar({
										content: [
											new sap.m.ToolbarSpacer(),
											new sap.m.Button({
												id: "MOB03AddToolButton",
												text: "{i18n>MOB03AddToolButton}",
												icon: "sap-icon://add",
												type: "Emphasized",
												press: [oController.handleAddToolButtonPress, oController]
											})
										]
									}),
									items: {
										
										path: "/results",
										template: new sap.m.ObjectListItem({
											type: "Active",
											title: "{Equipmentno} - {Description}",
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
											//press: [oController.handleToolListItemPress, oController]
										})
									}
								})
							]
						})
								
//								new sap.m.List({
//									visble: false,
//									id: "MOB03ToolList",
//									width: !sap.ui.Device.system.phone ? "80%" : "100%",
//									noDataText: "{i18n>MOB03NoToolsData}",
//									delete: oController.handleToolListItemDelete,
//									headerToolbar: new sap.m.Toolbar({
//										content: [
//											new sap.m.ToolbarSpacer(),
//											new sap.m.Button({
//												id: "MOB03RemoveToolButton",
//												text: "{i18n>MOB03RemoveToolButton}",
//												icon: "sap-icon://less",
//												press: oController.handleRemoveToolButtonPress
//											}),
//											new sap.m.Button({
//												id: "MOB03AddToolButton",
//												text: "{i18n>MOB03AddToolButton}",
//												icon: "sap-icon://add",
//												type: "Emphasized",
//												press: oController.handleAddToolButtonPress
//											})
//										]
//									}),
//									items: {
//										path: "tools>/results",
//										template: new sap.m.ObjectListItem({
//											type: "Active",
//											title: "{tools>Description}",
//											number: "{tools>Materialno}",
//											attributes: [
//												new sap.m.ObjectAttribute({
//													title: "Plant",
//													text: "{tools>PlantName}"
//												})
//											],
//											firstStatus: new sap.m.ObjectStatus({
//												text: "{tools>Status}"
//											}),
//											press: [oController.handleToolListItemPress, oController]
//										})
//									}
//								})
//							]
//						})
//						new sap.m.IconTabFilter({
//							text: "Tools",
//							icon: "sap-icon://wrench",
//							content: [
//								new sap.m.Table({
//									id: "MOB03ToolTable",
//									width: sap.ui.Device.system.phone ? "100%" : "85%",
//									noDataText: "{i18n>MOB03NoToolsData}",
//									delete: oController.handleToolListItemDelete,
//									headerToolbar: new sap.m.Toolbar({
//										content: [
//											new sap.m.ToolbarSpacer(),
//											new sap.m.Button({
//												id: "MOB03RemoveToolButton",
//												text: "Remove Tool",
//												icon: "sap-icon://less",
//												press: oController.handleRemoveToolButtonPress
//											}),
//											new sap.m.Button({
//												id: "MOB03AddToolButton",
//												text: "Add Tool",
//												icon: "sap-icon://add",
//												type: "Emphasized",
//												press: [oController.handleAddToolButtonPress, oController]
//											})
//										]
//									}),
//									items: {
//										path: "tools>/results",
//										template: new sap.m.ColumnListItem({
//											vAlign: "Middle",
//											cells: [
//												new sap.m.Text({
//													text: "{tools>Materialno}"
//												}),
//												new sap.m.Text({
//													text: "{tools>Description}"
//												}),
//												new sap.m.Text({
//													text: "{tools>Quantity}"
//												}),
//												new sap.m.Text({
//													text: "{tools>Uom}"
//												}),
//												new sap.m.Text({
//													text: "{tools>MaterialGroup}" // TODO: should actually be the available amount
//												}),
//												new sap.m.Button({
//													text: "{tools>Status}",
//													width: "100%",
//													type: "Emphasized",
//													press: [oController.handleToolChangeStatusButtonPress, oController]
//												})
//											]
//										})
//									},
//									columns: [
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											header: new sap.m.Text({
//												text: "ID"
//											})
//										}),
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											header: new sap.m.Text({
//												text: "Desc"
//											})
//										}),
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											header: new sap.m.Text({
//												text: "Qty"
//											})
//										}),
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											header: new sap.m.Text({
//												text: "UoM"
//											})
//										}),
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											header: new sap.m.Text({
//												text: "Avail"
//											})
//										}),
//										new sap.m.Column({
//											demandPopin: true,
//											minScreenWidth: "Tablet",
//											hAlign: "Center",
//											width: "25%",
//											header: new sap.m.Text({
//												text: "Status"
//											})
//										})
//									]
//								})
//							]
//						})
					]
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						id: "MOB03ChangeStatusButton",
						text: "{i18n>MOB03ChangeStatusButton}",
						type: "Accept",
						press: [oController.handleChangeStatusButtonPress, oController]
					}),
					new sap.m.Button({
						id: "MOB03JobActionButton",
						visible: false, // Visible only when the user accepts the Job
						text: "{i18n>MOB03JobActionButton}",
						type: "Emphasized",
						press: [oController.handleJobActionButtonPress, oController]
					}),
					new sap.m.Button({
						id: "MOB03ReopenButton",
						visible: false, // Visible only when job is completed
						text: "{i18n>MOB03ReopenButton}",
						type: "Emphasized",
						press: oController.handleReopenButtonPress
					})
				]
			})
		});
		
		
	}

});