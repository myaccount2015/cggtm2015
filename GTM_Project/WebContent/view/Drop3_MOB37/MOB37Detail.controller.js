sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Detail", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB37SplitApp").backDetail();
	},

	handleUseToolButtonPress: function (evt) {
		
		debugger;
		var app = sap.ui.getCore().byId("myApp"); 
		app.back();
		var context= sap.ui.getCore().byId("MD37Collection01").getSelectedItem().getBindingContext().sPath;
		var equip= sap.ui.getCore().byId("MD37Collection01").getModel().getProperty(context + "/EquipmentNumber")

		 
				/*if (!this.componentAndToolDialog) {
			
			//		this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37ToolGroupDialog", this);
		
			//asym
			//	this.getView().addDependent(this.componentAndToolDialog);
	    //asym
				}
				this.componentAndToolDialog.setTitle("Add Tool");
				this.componentAndToolDialog.open();*/
		
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open()
				var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
	     //	sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
		// sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
		quantityInput.setValue(equip); 
		
	},
	
		
	handleAddToolButtonPress: function() {
	/*	if (!this.componentAndToolDialog) {
			
			//		this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			this.componentAndToolDialog = sap.ui.jsfragment("MOB37ComponentAndToolDialog", this);
			this.getView().addDependent(this.componentAndToolDialog);
		}
		this.componentAndToolDialog.setTitle("Add Tool");
		this.componentAndToolDialog.open();
		var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");*/
	}
	
	
	
	

});