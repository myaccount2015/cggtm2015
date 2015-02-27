jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB03.MOB03ComponentAndToolDialog
	 */
	createContent: function (oController) {
		
	
		
		var stateMap = {
			"Request Pick": "Pick Requested",
			"Issue": "Issued",
			"Make Available": "Available For Order",
			"To Return": "To Be Returned",
			"Drop Off": "Dropped Off",
			"Return": "Not Issued"
		};
		//asym
	//	value:oSelectedItemz,
		//asym
		return new sap.m.Dialog({
			id: "MOB03ComponentAndToolDialog",
			content: new sap.ui.layout.form.SimpleForm({
				layout: "ResponsiveGridLayout",
				content: [
				    new sap.m.Label({
				    	id: "MOB03ComponentAndToolDialogNumberLabel_MOB03"
				    }),
				    new sap.m.Input({
				    	id: "MOB03ComponentAndToolDialogNumberInput",
						showValueHelp: true,
					
						valueHelpRequest: function () {
							
							var title= sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getTitle();
							
							if(title.indexOf("Tool")!=-1){
								sap.ui.getCore().byId("myApp").to("MOB37Initial");
								sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close()
								
							}
							else{
								oController.getMaterial();
							}
							
							//once_pressed = false;
							//alert('aaaaaaaaa');
							
							
							//sap.ui.getCore().byId("myApp").to("idMOB37Empty");
							
							
							
						//	var app = sap.ui.getCore().byId("splitAppDocumentDisplay");  
						//	MOB37Detail
							//sap.ui.getCore().byId("myApp").toDetail("idMOB31Empty");
						
							/*alert(this.getTitle());
							sap.ui.getCore().byId("mockD3App").to("MOB24Initial");
							sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close();*/
						},
						liveChange: function () {
							if (this.getValue().trim() !== "") {
								this.setValueState("Success");
							} else {
								this.setValueState("Error");
							}
				    	},
				    	change: function () {
				    		if (this.getValueState() === "Success") {
				    			// TODO: Call service to get material information
				    		}
				    	},
						layoutData: new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),
				    /*new sap.m.Input({
				    	id: "MOB03ComponentAndToolDialogQuantityInput",
						showValueHelp: true,
					
						valueHelpRequest: function () {
							oController.getMaterial();
							//alert('aaaaaaaaa');
							
							sap.ui.getCore().byId("myApp").to("MOB37Initial");
							alert(this.getTitle());
							sap.ui.getCore().byId("mockD3App").to("MOB24Initial");
							sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close();
						},
						liveChange: function () {
							if (this.getValue().trim() !== "") {
								this.setValueState("Success");
							} else {
								this.setValueState("Error");
							}
				    	},
				    	change: function () {
				    		if (this.getValueState() === "Success") {
				    			// TODO: Call service to get material information
				    		}
				    	},
						layoutData: new sap.ui.layout.GridData({
							span: "L7 M7 S7"
						})
					}),*/
					new sap.m.Button({
						text: "Scan",
						icon: "sap-icon://bar-code",
						type: "Reject",
						layoutData: new sap.ui.layout.GridData({
							span: "L5 M5 S5"
						}),
						press: function () {
					    	varScan = "MOB03COMP";
					    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
					      },
					}),
					
					/*new sap.m.Label({
				    	text: "Serial Number"
				    }),
				    new sap.m.Input({
				    	id: "MOB03ComponentAndToolDialogSerialInput",
				    	type: "Number",
				    	//value: "1",
				    	//description: "EA", // TODO: should be set after finding material
				    	valueState: "Success",
				    	liveChange: function () {}
				    }),*/
				    
					new sap.m.Label({
				    	text: "Quantity"
				    }),
				    new sap.m.Input({
				    	id: "MOB03ComponentAndToolDialogQuantityInput",
				    	type: "Number",
				    	value: "1",
				    	description: "EA", // TODO: should be set after finding material
				    	valueState: "Success",
				    	liveChange: function () {
							if (/^[1-9]\d*$/.test(this.getValue())) {
								this.setValueState("Success");
							} else {
								this.setValueState("Error");
							}
				    	}
				    }),
				    
				    new sap.m.Label({
				    	text: "Description",
				    	visible: false
				    }),
				    new sap.m.Text({
				    	visible: false
				    }),
				    new sap.m.Label({
				    	text: "Material Group",
				    	visible: false
				    }),
				    new sap.m.Text({
				    	visible: false
				    }),
				    new sap.m.ToggleButton({
				    	id: "MOB03ComponentAndToolDialogRequestPickButton",
						text: "Request Pick",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.ToggleButton({
						id: "MOB03ComponentAndToolDialogIssueButton",
						text: "Issue",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.ToggleButton({
						id: "MOB03ComponentAndToolDialogMakeAvailableButton",
						text: "Make Available",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.ToggleButton({
						id: "MOB03ComponentAndToolDialogToReturnButton",
						text: "To Return",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.ToggleButton({
						id: "MOB03ComponentAndToolDialogDropOffButton",
						text: "Drop Off",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.ToggleButton({
						id: "MOB03ComponentAndToolDialogReturnButton",
						text: "Return",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
							if (dialog.previousButton && dialog.previousButton !== this) {
								dialog.previousButton.setPressed(false);
							}
							dialog.previousButton = this;
							dialog.data("selectedButton", this);
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					}),
					new sap.m.Button({
						id: "MOB03ComponentAndToolDialogDeleteButton",
						text: "Delete",
						type: "Reject",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
						    sap.m.MessageBox.show("Are you sure you want to delete this item?", {
						    	title: "Warning!",
						    	icon: sap.m.MessageBox.Icon.QUESTION,
						    	actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						    	onClose: function (oAction) {
						    		var dialogMode = dialog.getTitle();
						    		if (oAction === sap.m.MessageBox.Action.YES) {
						    			if (/^Component - /.test(dialogMode)) {/*
						    				var context = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getBindingContext("components");
						    				var componentsModel = sap.ui.getCore().getModel("components");
						    				var data = componentsModel.getData();
						                     if (jQuery.isArray(data.results)) {              
						                           data.results = jQuery.grep(data.results, function(n, i){
						                                return n.Materialno !== context.getProperty("Materialno");
						                           });  
						                           componentsModel.setData(data);
						                           componentsModel.refresh();
						                      }						  
										*/
						    				
						    				var model = sap.ui.getCore().byId("MOB03ToolList").getModel();
											var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
											var selectedButton = dialog.data("selectedButton");
											var modeldata = model.oData.results;
												
												for ( var i = 0 ; i < modeldata.length ; i ++)
													{if (modeldata[i].Materialno ==  numberInput.getValue())
														{
														modeldata.splice(i, 1);
														
														}
													}
												
												
												/*model.setProperty("Equipmentno", numberInput.getValue(), context);
												model.setProperty("Available", quantityInput.getValue(), context);
												if (selectedButton) {
													model.setProperty("Status", stateMap[selectedButton.getText()]);
												}*/	
												model.refresh();
												model.updateBindings();
												oController.createModifiedModelTools();
												} else if (/^Tool - /.test(dialogMode)) {/*
											var context = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getBindingContext("tools");
											var toolsModel = sap.ui.getCore().getModel("tools");
						    				 var data = toolsModel.getData();
						                     if (jQuery.isArray(data.results)) {              
						                           data.results = jQuery.grep(data.results, function(n, i){
						                                return n.Materialno !== context.getProperty("Materialno");
						                           });  
						                           toolsModel.setData(data);
						                           toolsModel.refresh();
						                      }
										*/var model = sap.ui.getCore().byId("MOB03ComponentList").getModel();
										//asym
										var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
									//asym
										var selectedButton = dialog.data("selectedButton");
										var modeldata = model.oData.results;
											
											for ( var i = 0 ; i < modeldata.length ; i ++)
												{if (modeldata[i].Equipmentno ==  numberInput.getValue())
													{
													modeldata.splice(i, 1);
													
													}
												}
											
											
											/*model.setProperty("Equipmentno", numberInput.getValue(), context);
											model.setProperty("Available", quantityInput.getValue(), context);
											if (selectedButton) {
												model.setProperty("Status", stateMap[selectedButton.getText()]);
											}*/	
											model.refresh();
											model.updateBindings();
											oController.createModifiedModelComp();
											
										}			    			
						    			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close();
						    			sap.m.MessageToast.show("Item Deleted");
						    		}
						    	}
						    });
						},
						layoutData: new sap.ui.layout.GridData({
							linebreak: true
						})
					})
				]
			}),
			beginButton: new sap.m.Button({
				text: "Cancel",
				press: function () {
					sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close();
				}
			}),
			endButton: new sap.m.Button({
				text: "Confirm",
				press: function () {
					var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
					var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
					/*if (numberInput.getValueState() === "None") {
						numberInput.setValueState("Error");
					}
					if (quantityInput.getValueState() === "None") {
						quantityInput.setValueState("Error");
					}*/
					if (numberInput.getValueState() !== "Error" && quantityInput.getValueState() !== "Error") {
						var dialog = sap.ui.getCore().byId("MOB03ComponentAndToolDialog");
						var dialogMode = dialog.getTitle();
						var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
						var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");

						// TODO: Info from MOB24 or other service
						if (dialogMode === "Add Component") {
							/*var data = {
									PlantName: "North Pole Depot",
								      ManufacturerName: "",
								      Plant: "GWNP",
								      Materialno: numberInput.getValue(),
								      RequirementQuantityUnit: "EA",
								      MatlDesc: "Class 800/0 Type 14 Bi Mode GW 5 car",
								      Material: "20007",
								      ExternalMaterialGroup: "",
								      Manufacturer: "",
								      Vendor: "",
								      VendorPartNumber: "",
								      ManufacturerPartNumber: "",
								      MaterialGroupDesc: "public trans - train",
								      VendorName: "",
								      Status: "Pick Requested",
								      RequirementQuantity: quantityInput.getValue(),
								      Equipmentno : numberInput.getValue(),
								     Available: "100"
							};*/
							//alert("1");
							var data = {
									"PlantName": matData.PlantName,
								      "ManufacturerName": matData.ManufacturerName,
								      "Plant": matData.Plant,
								      "Material": numberInput.getValue(),
								      "RequirementQuantityUnit": matData.Uom,
								      "MatlDesc": matData.Description,
								      "MaterialGroup":  matData.MaterialGroup,
								      "ExternalMaterialGroup": "",
								      "Manufacturer": matData.Manufacturer,
								      "Vendor": matData.Vendor,
								      "VendorPartNumber": matData.VendorPartNumber,
								      "ManufacturerPartNumber": matData.ManufacturerPartNumber,
								      "MaterialGroupDesc": matData.MaterialGroupDesc,
								      "VendorName": matData.VendorName,
								      "Status": "Pick Requested",
								      "OriginalQty": quantityInput.getValue(),
								    // Available: "100"
							};
							//var model = sap.ui.getCore().getModel("components");
							//var model = sap.ui.getCore().byId("MOB03ComponentList").getModel();
							var finalArray = [];
							finalArray.push(data);
							var finalData =  {"results" : finalArray};
							var listModel = new sap.ui.model.json.JSONModel(finalData);
							var model = sap.ui.getCore().byId("MOB03ComponentList").getModel();
							var modelData = sap.ui.getCore().byId("MOB03ComponentList").getModel().getData();
							if ( modelData.results)
								{
								model.getData().results.unshift(data);
								model.refresh();
								model.updateBindings();
								
								}
							
							else
								{
								sap.ui.getCore().byId("MOB03ComponentList").setModel(listModel);
								}
							
							/*model.getData().results.unshift(data);
							model.refresh();
							model.updateBindings();*/
							//oController.createModifiedModelComp();
						} else if (dialogMode === "Add Tool") {
							var data = {
									PlantName: "North Pole Depot",
								      ManufacturerName: "",
								      Plant: "GWNP",
								      Materialno: numberInput.getValue(),
								      Uom: "EA",
								      Description: "Torque Wrench 200-1000Nm",
								      MaterialGroup: "20007",
								      ExternalMaterialGroup: "",
								      Manufacturer: "",
								      Vendor: "",
								      VendorPartNumber: "",
								      ManufacturerPartNumber: "",
								      MaterialGroupDesc: "public trans - train",
								      VendorName: "",
								      Status: "Not Issued",
								      Quantity: quantityInput.getValue(),
								      Equipmentno : numberInput.getValue(),
								     Available: quantityInput.getValue()
							};
							//var model = sap.ui.getCore().getModel("tools");
							var model = sap.ui.getCore().byId("MOB03ToolList").getModel();
							model.getData().results.unshift(data);
							model.refresh();
							model.updateBindings();
							oController.createModifiedModelTools();
						} else if (/^Component - /.test(dialogMode)) {/*
							var context = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getBindingContext("components");
							var model = sap.ui.getCore().getModel("components");
							var selectedButton = dialog.data("selectedButton");
							model.setProperty("Materialno", numberInput.getValue(), context);
							model.setProperty("Quantity", quantityInput.getValue(), context);
							if (selectedButton) {
								model.setProperty("Status", stateMap[selectedButton.getText()], context);
							}
						*/
							

							var context = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getBindingContext("tools");
							//var model = sap.ui.getCore().getModel("tools");
							var model = sap.ui.getCore().byId("MOB03ComponentList").getModel();
							var selectedButton = dialog.data("selectedButton");
							
							var modeldata = model.oData.results;
							
							for ( var i = 0 ; i < modeldata.length ; i ++)
								{if (modeldata[i].Materialno ==  numberInput.getValue())
									{
									modeldata[i].Status = stateMap[selectedButton.getText()];
									modeldata[i].Available = quantityInput.getValue();
									
									}}
							
							
							/*model.setProperty("Equipmentno", numberInput.getValue(), context);
							model.setProperty("Available", quantityInput.getValue(), context);
							if (selectedButton) {
								model.setProperty("Status", stateMap[selectedButton.getText()]);
							}*/	
							model.refresh();
							model.updateBindings();
							oController.createModifiedModelComp();
						} else if (/^Tool - /.test(dialogMode)) {
							var context = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").getBindingContext("tools");
							//var model = sap.ui.getCore().getModel("tools");
							var model = sap.ui.getCore().byId("MOB03ToolList").getModel();
							var selectedButton = dialog.data("selectedButton");
							
							var modeldata = model.oData.results;
							
							for ( var i = 0 ; i < modeldata.length ; i ++)
								{if (modeldata[i].Equipmentno ==  numberInput.getValue())
									{
									modeldata[i].Status = stateMap[selectedButton.getText()];
									modeldata[i].Available = quantityInput.getValue();
									
									}}
							
							
							/*model.setProperty("Equipmentno", numberInput.getValue(), context);
							model.setProperty("Available", quantityInput.getValue(), context);
							if (selectedButton) {
								model.setProperty("Status", stateMap[selectedButton.getText()]);
							}*/	
							model.refresh();
							model.updateBindings();
							oController.createModifiedModelTools();
						}
						dialog.close();
					}
				}
			}),
			afterClose: function() {
				var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
				var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
				var previousButton = sap.ui.getCore().byId("MOB03ComponentAndToolDialog").previousButton;
//				numberInput.unbindProperty("value", false);
//				quantityInput.unbindProperty("value", false);
//				quantityInput.unbindProperty("description", false);
				if (previousButton) {
					previousButton.setPressed(false);
					previousButton = null;
				}
				numberInput.setValue("").setValueState("None");
				quantityInput.setValue("").setValueState("None");
				//quantityInput.setDescription("EA") //fake
			},
			beforeOpen: function() {
				var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
				if (quantityInput.getValue().trim() === "") {
					quantityInput.setValue("1").setValueState("Success");
				}
				if (this.getTitle().indexOf("Component") > -1) {
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberLabel_MOB03").setText("Material Number");
				} else {
					
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberLabel_MOB03").setText("Equipment Number");
				}
				if (this.getTitle() === "Add Component" || this.getTitle() === "Add Tool") {
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogRequestPickButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogIssueButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogMakeAvailableButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogToReturnButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogDropOffButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogReturnButton").setVisible(false);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogDeleteButton").setVisible(false);
				} else {/*
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogRequestPickButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogIssueButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogMakeAvailableButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogToReturnButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogDropOffButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogReturnButton").setVisible(true);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogDeleteButton").setVisible(true);
				*/}
			}
		})
	}

});