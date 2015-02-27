sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Master", {


	
	handleNavButtonPress: function () {
		
	

	// sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB03Master");
	sap.ui.getCore().byId("myApp").back();
//	sap.ui.getCore().byId("myApp").toMaster("MOB03Master");
	 /*if (!this.componentAndToolDialog) {
			
		 this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
		
		//asym
			this.getView().addDependent(this.componentAndToolDialog);
			
		//asym
	}
	 this.componentAndToolDialog.setTitle("Add Tool");
	 this.componentAndToolDialog.open();*/
	
	   if(once_pressed == true){		  
			if (typeof dialog_box === 'undefined') {
				dialog_box = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
				this.getView().addDependent(dialog_box);
			}
			dialog_box.setTitle("Add Tool");
			dialog_box.open();	
			
			 var numberInput_mob37 = sap.ui.getCore().byId("MOB37ComponentAndToolDialogNumberInput");
			 var numberInput_mob03 = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
			 
			 if(numberInput_mob37 != 'undefined')
				 numberInput_mob37.setValue(oSelectedItemz);
			 if(numberInput_mob03 != 'undefined')
				 numberInput_mob03.setValue(oSelectedItemz);
			 
		}
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
				this.depotDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37DepotDialog", this);
			}
			//this.depotDialog.setTitle(evt.getSource().getName());
			// set binding  
			//var depotModel = new sap.ui.model.json.JSONModel("view/data/depots.json");
			//this.depotDialog.setModel(depotModel);
			//this.depotDialog.open(evt.getSource().getValue());
			
			readLocalFileOnDevice("AssetListDepot.json", function(funCall){
				
				 var assetDataArr = JSON.parse(funCall);
				 var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						
						if ( assetDataArr[i].ObjType == "20000")
							{
							
							var data = {
									"code" : assetDataArr[i].Floc  , //+"-"+assetDataArr[i].FlocDesc,
									"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							}
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					
					
						//MOB02InputId = evt.getSource().sId;
						var MOB37Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37DepotDialog", 
					    sap.ui.getCore().byId("MOB37Master").getController());
						//MOB01Dialog.setTitle("Choose Depot/Site");
						var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
						//sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Master").depotDialog.setModel(codesModel);
						//sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37Master").open(evt.getSource().getValue());
						MOB37Dialog.setModel(codesModel);
						MOB37Dialog.open();
						
						//MOB01Dialog.setModel(codesModel);
					//	MOB01Dialog.open();
				 
			});
			
			
		} else {
			if (!this.toolGroupDialog) {
				this.toolGroupDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37ToolGroupDialog", this);
			}
			this.toolGroupDialog.setTitle(evt.getSource().getName());
			// set binding  
			var toolGroupModel = new sap.ui.model.json.JSONModel("view/data/toolGroups.json");
			this.toolGroupDialog.setModel(toolGroupModel);
			this.toolGroupDialog.open(evt.getSource().getValue());
		}
	},
	
/*	handleValueHelp_toolGroups: function (evt) {
		var name = evt.getSource().getName();
		this.inputId = evt.getSource().getId();
		if (name === "Tool Groups") {
			if (!this.ToolGroupsDialog) {
				this.ToolGroupsDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37DepotDialog", this);
			}
			this.depotDialog.setTitle(evt.getSource().getName());
			// set binding  
			var depotModel = new sap.ui.model.json.JSONModel("view/data/toolGroups.json");
			this.depotDialog.setModel(depotModel);
			this.depotDialog.open(evt.getSource().getValue());
		} else {
			if (!this.toolGroupDialog) {
				this.toolGroupDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB37.MOB37ToolGroupDialog", this);
			}
			this.toolGroupDialog.setTitle(evt.getSource().getName());
			// set binding  
			var toolGroupModel = new sap.ui.model.json.JSONModel("drop3mockups/data/toolGroups.json");
			this.toolGroupDialog.setModel(toolGroupModel);
			this.toolGroupDialog.open(evt.getSource().getValue());
		}
	},*/

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
			input.setValue(oSelectedItem.getTitle() +"-"+oSelectedItem.getInfo());
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
			input.setValue(oSelectedItem.getInfo() +"-"+oSelectedItem.getTitle());
		}
		evt.getSource().getBinding("items").filter([]);
	},

	handleToolGroupDialogCancel: function (evt) {
		evt.getSource().getBinding("items").filter([]);
	},

	handleSearchButtonPress: function () {/*
		var depotInput = sap.ui.getCore().byId("MOB37DepotInput");
		if (depotInput.getValueState() === "None") {
			depotInput.setValueState("Error")
		}
		if (depotInput.getValueState() !== "Error") {
			if (!this.busyDialog) {
				this.busyDialog = sap.ui.jsfragment("drop3mockups.MOB37.MOB37BusyDialog", this);
			}
			this.busyDialog.open();
			jQuery.sap.delayedCall(1000, this, function () {
				this.busyDialog.close();
			});
		}
	*/
		/////////////asym///////////////////////////////
		
		// "http://hs1gd1comb.rm.hitachi-eu.com:8100"
		
		
        var mob37serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
        var mob37loginoDataModel = new sap.ui.model.odata.ODataModel(mob37serviceURL, true, getUserName(), getPassword(), null, true, true, false);
            var plantIn = sap.ui.getCore().byId("MOB37DepotInput").getValue().split("-")[0];
            var toolgrpIn = sap.ui.getCore().byId("MOB37ToolGroupInput").getValue().split("-")[0];
            
            alert(plantIn);
            alert(toolgrpIn);
            
            
        // var mob37readRequestURL =  "/ToolsSet?$filter=Plant eq 'GWNP' and SearchString eq ' ' and Locked eq 'X' and ToolsGroupingKey eq ' ' &$format=json";
         var mob37readRequestURL = 
        	 "/ToolsSet?$filter=Plant eq '"+plantIn+"' and SearchString eq ' ' and Locked eq 'X' and ToolsGroupingKey eq '"+toolgrpIn+"'&$expand=NavTools"
        
         
         mob37loginoDataModel.read(mob37readRequestURL, null, null, false,   
                 function(oData, oResponse) { 
                                   var result = oResponse.body; //Getting JSON response body
                                   
                                   var jsonObj = JSON.parse(result); // Parsing the JSON Object
                                   
                                   var result = jsonObj.d; // Taking the result inside namespace d
                                   var CheckResVal = result.results.length;
                                   
                                   //Global variable oJSONModelMatSearch is used to make use of all the screens
                                   oJSONModelToolSearch = new sap.ui.model.json.JSONModel(result, "MD37ToolCollModel");
                                   oJSONModelToolSearch.setSizeLimit(1000000);
                                
                                
                                   
                                 mob37list = sap.ui.getCore().byId("MD37Collection01");
                                 
                                 var oJasonData = new sap.ui.model.json.JSONModel(result);
                                 mob37list.setModel(oJasonData);
                                   
                                   
         				});/*,
         				function(oError){  
         					
         					alert("error");
         				
         						
         						});
		*/
		
		
		
		
		
		
		
		
		
		
		/////////////asym////////////////////////////////////////S
		
         sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB37MasterTwo");
         
		},

	handleBusyDialogClose: function () {
		sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB37MasterTwo");
	}
		
		
		
		

});

