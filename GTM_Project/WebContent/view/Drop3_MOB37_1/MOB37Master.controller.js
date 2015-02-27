
var bar;

sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Master", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("mockD3App").back();
	},

	
	handleHelpButtonPress: function () {

		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB37";
		var helpDocNumber = HelpDocument(MobileScreenNumber);
		url1 = url1 + "('"+helpDocNumber+"')/$value";
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
		//navigator.app.loadUrl(url1, { openExternal:true } );
		
			downloadAndDisplayPDF(url1);
		}
		
	},
	
	handleDepotInputLiveChange: function (evt) {
		var input = evt.getParameter("value");
		if (input.trim().length !== 0) {
			evt.getSource().setValueState("Success");
		} else {
			evt.getSource().setValueState("Error");
		}
	},

	handleValueHelp: function (evt) {
		var name = evt.getSource().getName();
		this.inputId = evt.getSource().getId();
		if (name === "Depot") {
			if (!this.depotDialog) {
				this.depotDialog = sap.ui.jsfragment("HitachiRailsWebApp.view.MOB37.MOB37DepotDialog", this);
			}
			this.depotDialog.setTitle(evt.getSource().getName());
			// set binding  
			var depotModel = new sap.ui.model.json.JSONModel("HitachiRailsWebApp.view.MOB37/data/depots.json");
			this.depotDialog.setModel(depotModel);
			this.depotDialog.open(evt.getSource().getValue());
		} else {
			if (!this.toolGroupDialog) {
				this.toolGroupDialog = sap.ui.jsfragment("HitachiRailsWebApp.view.MOB37.MOB37.MOB37ToolGroupDialog", this);
			}
			this.toolGroupDialog.setTitle(evt.getSource().getName());
			// set binding  
			var toolGroupModel = new sap.ui.model.json.JSONModel("HitachiRailsWebApp.view.MOB37/data/toolGroups.json");
			this.toolGroupDialog.setModel(toolGroupModel);
			this.toolGroupDialog.open(evt.getSource().getValue());
		}
	},

	handleDepotDialogSearch: function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter({
			filters: [
				new sap.ui.model.Filter("depotId", sap.ui.model.FilterOperator.StartsWith, sValue),
				new sap.ui.model.Filter("depotName", sap.ui.model.FilterOperator.StartsWith, sValue)
			],
			and: false
		});
		var oBinding = evt.getSource().getBinding("items");
		oBinding.filter([oFilter]);
	},

	handleDepotDialogConfirm: function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(this.inputId);
			input.setValue(oSelectedItem.getTitle());
			input.setValueState("Success");
		}
		evt.getSource().getBinding("items").filter([]);
	},

	handleDepotDialogCancel: function (evt) {
		evt.getSource().getBinding("items").filter([]);
	},
	
	handleToolGroupDialogSearch: function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter({
			filters: [
				new sap.ui.model.Filter("toolGroupNumber", sap.ui.model.FilterOperator.StartsWith, sValue),
				new sap.ui.model.Filter("toolGroupName", sap.ui.model.FilterOperator.StartsWith, sValue)
			],
			and: false
		});
		var oBinding = evt.getSource().getBinding("items");
		oBinding.filter([oFilter]);
	},

	handleToolGroupDialogConfirm: function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(this.inputId);
			input.setValue(oSelectedItem.getTitle());
		}
		evt.getSource().getBinding("items").filter([]);
	},

	handleToolGroupDialogCancel: function (evt) {
		evt.getSource().getBinding("items").filter([]);
	},

	handleSearchButtonPress: function () {
		var depotInput = sap.ui.getCore().byId("MOB37DepotInput");
		if (depotInput.getValueState() === "None") {
			//depotInput.setValueState("Error")
			/*depotInput.to("MOB37MasterTwo");*/
			//asym 
			var appz= sap.ui.getCore().byId("MOB37SplitApp");
			//appz.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));
			appz.to("MOB37MasterTwo");
			//asym
			
		}
		if (depotInput.getValueState() !== "Error") {
			
			/*SplitApp.addMasterPage(masterPage);
			SplitApp.addDetailPage(detailPage);*/
			//asym
			  var myapp = sap.ui.getCore().byId("MOB37SplitApp");  
    		  myapp.to("MOB37MasterTwo");
			//asym
			if (!this.busyDialog) {
				this.busyDialog = sap.ui.jsfragment("HitachiRailsWebApp.view.MOB37.MOB37.MOB37BusyDialog", this);
				//splitApp.goTo(masterPageTwo);
			}
			this.busyDialog.open();
			jQuery.sap.delayedCall(1000, this, function () {
				this.busyDialog.close();
			});
			
			
			
			
			
			
		}
	},

	handleBusyDialogClose: function () {
		sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB37MasterTwo");
	}
	

});

bar = new sap.m.Toolbar({
	content: [
				new sap.m.ToolbarSpacer(),
				new sap.m.Button({
					text: "{i18n>Search}",
					icon: "sap-icon://warning2",
					type: "Emphasized",
					press: function(){alert(this);}
					
				
				})
			]
		});