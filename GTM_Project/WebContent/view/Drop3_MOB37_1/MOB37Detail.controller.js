sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Detail", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB37SplitApp").backDetail();
	},

	handleUseToolButtonPress: function () {
		sap.ui.getCore().byId("MOB37ResultsList").removeSelections();
		sap.ui.getCore().byId("MOB37SplitApp").backMaster();
		sap.ui.getCore().byId("MOB37SplitApp").backDetail();
		sap.ui.getCore().byId("mockD3App").back();
	}

});