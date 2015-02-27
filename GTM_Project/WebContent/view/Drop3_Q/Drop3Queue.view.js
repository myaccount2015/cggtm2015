sap.ui.jsview("com.cg.gtm.view.Drop3_Q.Drop3Queue", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_Q.Drop3Queue";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf view.Drop3_Q.Drop3Queue
	 */
	createContent: function (oController) {
		return new sap.m.Page({
			title: "Drop 3 Queue",
			showNavButton: true,
			navButtonTap: oController.handleNavButtonPress,
			headerContent: [
				new sap.ui.core.Icon({
					id: "D3QUStatus",
					src: "sap-icon://color-fill"
				}),
				new sap.m.Button({
					icon: "sap-icon://document-text",
					press: oController.handleViewLogButtonPress
				}),
				new sap.m.Button({
					id: "D3QUViewJSONButton",
					icon: "sap-icon://syntax",
					press: oController.handleViewJSONButtonPress
				}),
				new sap.m.Button({
					id: "D3QURefreshButton",
					icon: "sap-icon://refresh",
					press: oController.handleRefreshButtonPress
				})
			],
			content: [
				new sap.m.List({
					id: "D3QU",
					noDataText: "No Transactions In Queue",
					items: {
						path: "/results",
						template: new sap.m.ObjectListItem({
							type: "Active",
							title: "{Tran}",
							number: "{Status}",
							numberState: {
								path: "Status",
								formatter: function (value) {
									var map = {
										"INIT": "None",
										"InProgress": "None",
										"Failed": "Error",
										"Success": "Success"
									};
									return map[value];
								}
							},
							attributes: [
								new sap.m.ObjectAttribute({
									id: "D3QShortDescriptionAttribute",
									text: {
										parts: ["shrtdesc", "Order", "Activity"],
										formatter: function (desc, order, activity) {
											var finalString = "";
											if (desc !== "N/A") finalString += ("Short Description: " + desc + " ");
											if (order !== "N/A") finalString += ("Order Number: " + order + " ");
											if (activity !== "N/A") finalString += ("Activity Number: " + activity + " ");
											return finalString;
										}
									}
								})
							],
							firstStatus: new sap.m.ObjectStatus({
								title: "Retries",
								text: "{numOfRetry}"
							}),
							press: [oController.handleListItemPress, oController]
						})
					}
				}).setModel(new sap.ui.model.json.JSONModel())
			]
		});
	}

});