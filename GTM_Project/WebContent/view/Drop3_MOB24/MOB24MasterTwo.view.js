sap.ui.jsview("com.cg.gtm.view.Drop3_MOB24.MOB24MasterTwo", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * @memberOf drop3mockups.MOB24.MOB24MasterTwo
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB24.MOB24MasterTwo";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB24.MOB24MasterTwo
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "{i18n>MOB24MasterTwoTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				//press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.List({
					/*id: "MOB24ResultsList",
				      mode: sap.m.ListMode.SingleSelectMaster,
				      includeItemInSelection: true,
				    //  select : oController.matSel,
				      rememberSelections : false,
				      items: {
				        path: "/results",
				        template: 
				        	[
				        	new sap.m.StandardListItem({
						          title: "{Materialno}",
						          description: "{Description}",
						          iconDensityAware: false,
						          iconInset: false ,
						         
						        }),
						      
						        
				        	
				        	]
				           
				      }*/
				 
				
					id: "MOB24ResultsList",
					mode: sap.m.ListMode.SingleSelectMaster,
					selectionChange: oController.handleListItemSelect,
					infoToolbar: new sap.m.Toolbar({
						content: new sap.m.Label({
							//text: "5 results"
						})
					}),
					items: {
						path: "/results",
						template: new sap.m.ObjectListItem({
							title: "{Materialno}",
					        intro: "{Description}",
							/*attributes: [
								new sap.m.ObjectAttribute({
									title: "{i18n>MOB24PlantObjectAttributeTitle}",
									text: "{components>PlantName}"
								})
							]*/
							//press: oController.handleListItemPress
						})
					}
				})
			],
			footer: new sap.m.Toolbar()
		});
	}

});