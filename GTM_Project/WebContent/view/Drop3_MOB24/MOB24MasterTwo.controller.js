sap.ui.controller("com.cg.gtm.view.Drop3_MOB24.MOB24MasterTwo", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
		sap.ui.getCore().byId("MOB24SplitApp").backMaster();
		sap.ui.getCore().byId("MOB24SplitApp").backDetail();
	},

	handleHelpButtonPress: function () {

	},

	handleListItemSelect: function (evt) {
		sap.ui.getCore().byId("MOB24IconTabBar").setSelectedKey("firstTab");
		var context = evt.getParameter("listItem").getBindingContext("components");
		sap.ui.getCore().byId("MOB24Detail").setBindingContext(context, "components");
		
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		sap.ui.getCore().byId("MOB24DETMANU").setText(this.getModel().getProperty(contextPath + "/Manufacturer"));
		sap.ui.getCore().byId("MOB24DETMANUNAME").setText(this.getModel().getProperty(contextPath + "/ManufacturerName"));
		sap.ui.getCore().byId("MOB24DETMANUPART").setText(this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"));
		sap.ui.getCore().byId("MOB24DETVEN").setText(this.getModel().getProperty(contextPath + "/Vendor"));
		sap.ui.getCore().byId("MOB24DETVENAME").setText(this.getModel().getProperty(contextPath + "/VendorName"));
		sap.ui.getCore().byId("MOB24DETVENPART").setText(this.getModel().getProperty(contextPath + "/VendorPartNumber"));
		sap.ui.getCore().byId("MOB24SELMAT").setText(this.getModel().getProperty(contextPath + "/Materialno"));
		
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Detail");
		
		matData = {"Manufacturer" : this.getModel().getProperty(contextPath + "/Manufacturer") ,
				"ManufacturerName" : this.getModel().getProperty(contextPath + "/ManufacturerName"),
				"ManufacturerPartNumber" : this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"),
				"Vendor" : this.getModel().getProperty(contextPath + "/Vendor"),
				"VendorName" : this.getModel().getProperty(contextPath + "/VendorName"),
				"VendorPartNumber" : this.getModel().getProperty(contextPath + "/VendorPartNumber"),
				"Materialno" : this.getModel().getProperty(contextPath + "/Materialno"),
				"MaterialGroupDesc" : this.getModel().getProperty(contextPath + "/MaterialGroupDesc"),
				"MaterialGroup" : this.getModel().getProperty(contextPath + "/MaterialGroup"),
				
				"VendorPartNumber" : this.getModel().getProperty(contextPath + "/VendorPartNumber"),
				"Materialno" : this.getModel().getProperty(contextPath + "/Materialno"),
				"MaterialGroupDesc" : this.getModel().getProperty(contextPath + "/MaterialGroupDesc"),
				"MaterialGroup" : this.getModel().getProperty(contextPath + "/MaterialGroup"),
				"Plant" : this.getModel().getProperty(contextPath + "/Plant"),
				"PlantName" : this.getModel().getProperty(contextPath + "/PlantName"),
				"Uom" : this.getModel().getProperty(contextPath + "/Uom"),
				"Description" : this.getModel().getProperty(contextPath + "/Description"),
				};
	},

	handleListItemPress: function (evt) {
		sap.ui.getCore().byId("MOB24IconTabBar").setSelectedKey("firstTab");
		var context = evt.getSource().getBindingContext("components");
		sap.ui.getCore().byId("MOB24Detail").setBindingContext(context, "components");
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Detail");
	}

});