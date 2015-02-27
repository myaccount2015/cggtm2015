jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01ComponentDialog", {

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01ComponentDialog
	 */
	createContent: function (oController) {
		/**********************************************
		 * TODO: NEED  TO USE SEPERATE MODEL FOR EACH LIST (SHARED CURRENTLY)
		 **********************************************/
		return new sap.m.Dialog({
			id: "MOB01ComponentDialog",
			content: new sap.ui.layout.form.SimpleForm({
				layout: "ResponsiveGridLayout",
				content: [
				    new sap.m.Label({
				    	text: "Material Number"
				    }),
				    new sap.m.Input({
				    	id: "MOB01ComponentDialogMaterialNumberInput",
						showValueHelp: true,
						valueHelpRequest: function () {
							oController.getMaterial();
							/*
							sap.ui.getCore().byId("mockD3App").to("MOB24Initial");
							sap.ui.getCore().byId("MOB01ComponentDialog").close();
						*/},
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
					new sap.m.Button({
						text: "Scan",
						icon: "sap-icon://bar-code",
						type: "Reject",
						layoutData: new sap.ui.layout.GridData({
							span: "L5 M5 S5"
						})
					}),
				    new sap.m.Label({
				    	text: "Quantity"
				    }),
				    new sap.m.Input({
				    	id: "MOB01ComponentDialogQuantityInput",
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
					new sap.m.Button({
						id: "MOB01ComponentDialogDeleteButton",
						text: "Delete",
						type: "Reject",
						press: function () {
							var dialog = sap.ui.getCore().byId("MOB01ComponentDialog");
						    sap.m.MessageBox.show("Are you sure you want to delete this item?", {
						    	title: "Warning!",
						    	icon: sap.m.MessageBox.Icon.QUESTION,
						    	actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						    	onClose: function (oAction) {		 
						    		if (oAction === sap.m.MessageBox.Action.YES) {
						    			/*var context = sap.ui.getCore().byId("MOB01ComponentDialog").getBindingContext("components");
					    				var componentsModel = sap.ui.getCore().getModel("components");
					    				var data = componentsModel.getData();
					                     if (jQuery.isArray(data.results)) {              
					                           data.results = jQuery.grep(data.results, function(n, i){
					                                return n.Materialno !== context.getProperty("Materialno");
					                           });  
					                           componentsModel.setData(data);
					                           componentsModel.refresh();
					                      }	*/	
						    			
						    			var model = sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").getModel();
										var numberInput = sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput");
										var modeldata = model.oData.results;
											
											for ( var i = 0 ; i < modeldata.length ; i ++)
												{if (modeldata[i].Materialno ==  numberInput.getValue())
													{
													modeldata.splice(i, 1);
													
													}
												}
											
											model.refresh();
											model.updateBindings();
											oController.createModifiedModelTools();
											
											
						    			sap.ui.getCore().byId("MOB01ComponentDialog").close();
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
					sap.ui.getCore().byId("MOB01ComponentDialog").close();
				}
			}),
			endButton: new sap.m.Button({
				text: "Confirm",
				press: function () {
					var materialNumberInput = sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput");
					var quantityInput = sap.ui.getCore().byId("MOB01ComponentDialogQuantityInput");
					if (materialNumberInput.getValueState() === "None") {
						//materialNumberInput.setValueState("Error");
					}
					if (quantityInput.getValueState() === "None") {
						//quantityInput.setValueState("Error");
					}
					if (materialNumberInput.getValueState() !== "Error" && quantityInput.getValueState() !== "Error") {
						var dialog = sap.ui.getCore().byId("MOB01ComponentDialog");
						var dialogMode = dialog.getTitle();
						var materialNumberInput = sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput");
						var quantityInput = sap.ui.getCore().byId("MOB01ComponentDialogQuantityInput");
						// TODO: Info from MOB24 or other service
						
						if (dialogMode === "Add Component") {
							/*var data = {
									PlantName: "North Pole Depot",
								      ManufacturerName: "",
								      Plant: "GWNP",
								      Materialno: materialNumberInput.getValue(),
								      Uom: "EA",
								      Description: "Class 800/0 Type 14 Bi Mode GW 5 car",
								      MaterialGroup: "20007",
								      ExternalMaterialGroup: "",
								      Manufacturer: "",
								      Vendor: "",
								      VendorPartNumber: "",
								      ManufacturerPartNumber: "",
								      MaterialGroupDesc: "public trans - train",
								      VendorName: "",
								      Status: "Pick Requested",
								      Quantity: quantityInput.getValue(),
								     Available: "100"
							};*/
							
							var data = {
									PlantName: matData.PlantName,
								      ManufacturerName: matData.ManufacturerName,
								      Plant: matData.Plant,
								      Materialno: materialNumberInput.getValue(),
								      Uom: matData.Uom,
								      Description: matData.Description,
								      MaterialGroup:  matData.MaterialGroup,
								      ExternalMaterialGroup: "",
								      Manufacturer: matData.Manufacturer,
								      Vendor: matData.Vendor,
								      VendorPartNumber: matData.VendorPartNumber,
								      ManufacturerPartNumber: matData.ManufacturerPartNumber,
								      MaterialGroupDesc: matData.MaterialGroupDesc,
								      VendorName: matData.VendorName,
								      Status: "Pick Requested",
								      Quantity: quantityInput.getValue(),
								    // Available: "100"
							};
							
							//results
							var finalArray = [];
							finalArray.push(data);
							var finalData =  {"results" : finalArray};
							var listModel = new sap.ui.model.json.JSONModel(finalData);
							// alert(g_trainordepot);
							 

								//var model = sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").getModel();
								/*if ( null != model && undefined != model)
									{
									alert("1");
									model.getData().results.unshift(data);
									model.refresh();
									model.updateBindings();
									
									}
								
								else
									{
									alert("2");
									sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").setModel(listModel);
									}*/
							
								
							if ( g_trainordepot == "D")
								{
								

								var model = sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").getModel();
								var modelData = sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").getModel().getData();
								if ( modelData.results)
									{
									model.getData().results.unshift(data);
									model.refresh();
									model.updateBindings();
									
									}
								
								else
									{
									sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").setModel(listModel);
									}
							
								}
							
							else
								{
							var model = sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").getModel();
							var modelData = sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").getModel().getData();
							if ( modelData.results)
								{
								//alert("1");
								model.getData().results.unshift(data);
								model.refresh();
								model.updateBindings();
								
								}
							
							else
								{
								//alert("2");
								sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").setModel(listModel);
								}
						}
							
						} else if (/^Component - /.test(dialogMode)) {
							
							var model = sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").getModel();
							var modeldata = model.oData.results;
							for ( var i = 0 ; i < modeldata.length ; i ++)
								{if (modeldata[i].Materialno ==  materialNumberInput.getValue())
									{
									//modeldata[i].Status = stateMap[selectedButton.getText()];
									modeldata[i].Available = quantityInput.getValue();
									
									}}
							model.refresh();
							model.updateBindings();
							
							/*var context = sap.ui.getCore().byId("MOB01ComponentDialog").getBindingContext("components");
							var model = sap.ui.getCore().getModel("components");
							model.setProperty("Materialno", materialNumberInput.getValue(), context);
							model.setProperty("Quantity", quantityInput.getValue(), context);*/
						}
						//alert("now closing");
						dialog.close();
					}
				}
			}),
			afterClose: function() {
				var materialNumberInput = sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput");
				var quantityInput = sap.ui.getCore().byId("MOB01ComponentDialogQuantityInput");
				var previousButton = sap.ui.getCore().byId("MOB01ComponentDialog").previousButton;
//				materialNumberInput.unbindProperty("value", false);
//				quantityInput.unbindProperty("value", false);
//				quantityInput.unbindProperty("description", false);
				if (previousButton) {
					previousButton.setPressed(false);
					previousButton = null;
				}
				materialNumberInput.setValue("").setValueState("None");
				quantityInput.setValue("").setValueState("None");
				//quantityInput.setDescription("EA") // fake
			},
			beforeOpen: function() {
				var quantityInput = sap.ui.getCore().byId("MOB01ComponentDialogQuantityInput");
				//if (quantityInput.getValue().trim() === "") {
					quantityInput.setValue("1").setValueState("Success");
				//}
				if (this.getTitle() === "Add Component") {
					sap.ui.getCore().byId("MOB01ComponentDialogDeleteButton").setVisible(false);
				} else {
					sap.ui.getCore().byId("MOB01ComponentDialogDeleteButton").setVisible(true);
				}
			}
		})
	}

});
