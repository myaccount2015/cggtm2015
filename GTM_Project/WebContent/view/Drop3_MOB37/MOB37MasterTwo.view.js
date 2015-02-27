sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB37.MOB37MasterTwo
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB37.MOB37MasterTwo
	 */
	createContent: function (oController) {
		var	oMD37Data = {"MD37Collection01":
     		[
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000002"},
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000003"},
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000004"},
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000005"},
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000006"},
     			 {"title":"Torque-Wrench 200-1000nm","matnum":"2000000007"} 
     			 
     	 ]};
		
		
		
		 mob37list = 
	    	new sap.m.List({
				id: "MD37Collection01",
				/*mode: "{device>/listMode}",*/
				mode: "SingleSelectMaster",
				//selectionChange: oController.handleListItemSelect,
				infoToolbar: new sap.m.Toolbar({
					content: new sap.m.Label({
						text: "10 results"
					})
				}),
				items: {
					path: "/results",
					//asym
					// path: "/resultsMOB00",
					//asym
					 template: new sap.m.ObjectListItem({
						type: "{device>/listItemType}",
						title: "{EquipmentNumberDesc}",
						//number: "{tools>Equipmentno}",
						//press: oController.handleListItemPress
					//press: oController.fetchInvDocDataMOB37 
					})
				},
				
			
			//asym
	        selectionChange : oController.fetchInvDocDataMOB37,
			//asym
	    	});
		
		
		//var oJasonData = new sap.ui.model.json.JSONModel(oMD37Data);
		//sap.ui.getCore().byId("MD37Collection01").setModel(oJasonData);
		
		
		return new sap.m.Page({
			title: "{i18n>MOB37MasterTwoTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			
		
		content: [mob37list],
/*var listMOB37 =		new sap.m.List({
				id: "MOB37ResultsList",
				mode: "{device>/listMode}",
				selectionChange: oController.handleListItemSelect,
				infoToolbar: new sap.m.Toolbar({
					content: new sap.m.Label({
						text: "10 results"s
					})
				}),
				items: {
					path: "tools>/results",
					//asym
					 path: "/resultsMOB00",
					//asym
					 template: new sap.m.ObjectListItem({
						type: "{device>/listItemType}",
						title: "{tools>Description}",
						number: "{tools>Equipmentno}",
						press: oController.handleListItemPress
					})
				}
			})
			,*/
			footer: new sap.m.Toolbar()
		});
	}


});