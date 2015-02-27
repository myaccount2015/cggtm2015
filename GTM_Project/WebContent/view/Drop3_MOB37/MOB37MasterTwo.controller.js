


sap.ui.controller("com.cg.gtm.view.Drop3_MOB37.MOB37MasterTwo", {

	handleNavButtonPress: function () {
		
		//asym
	//	sap.ui.getCore().byId("MD37ToolCollModel").removeSelections();
		//asym
		sap.ui.getCore().byId("MOB37SplitApp").backMaster();
		sap.ui.getCore().byId("MOB37SplitApp").backDetail();
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

	handleListItemSelect: function (evt) {		
		var context = evt.getParameter("listItem").getBindingContext("tools");	
	//	sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
		//sap.ui.getCore().byId("MOB37SplitApp").getPage("MOB37Detail").setBindingContext(context, "tools");
		
       
        
        var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
        sap.ui.getCore().byId("MOB24DETMANU").setText(this.getModel().getProperty(contextPath + "/Manufacturer"));
        sap.ui.getCore().byId("MOB24DETMANUNAME").setText(this.getModel().getProperty(contextPath + "/ManufacturerName"));
        sap.ui.getCore().byId("MOB24DETMANUPART").setText(this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"));
        sap.ui.getCore().byId("MOB24DETVEN").setText(this.getModel().getProperty(contextPath + "/Vendor"));
        sap.ui.getCore().byId("MOB24DETVENAME").setText(this.getModel().getProperty(contextPath + "/VendorName"));
        sap.ui.getCore().byId("MOB24DETVENPART").setText(this.getModel().getProperty(contextPath + "/VendorPartNumber"));
        sap.ui.getCore().byId("MOB24SELMAT").setText(this.getModel().getProperty(contextPath + "/Materialno"));
        //Stock and Desc
        sap.ui.getCore().byId("MOB37StockText").setText(this.getModel().getProperty(contextPath + "/StockType"));
        sap.ui.getCore().byId("MOB37StockDescText").setText(this.getModel().getProperty(contextPath + "/StockTypeDesc"));
        
        sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Detail");
 
        sap.ui.getCore().byId("MOB37ManufacturerPartNumber").setText(this.getModel().getProperty(contextPath + "/Materialno"));
        MOB37ManufacturerPartNumber
        
		sap.ui.getCore().byId("MOB37SplitApp").toDetail("MOB37Detail");
	},
	//////////////////////////////////asym
	
	
	
	
	
	
	/////////////////////////////////asym

	handleListItemPress: function (evt) {
		var context = evt.getSource().getBindingContext("tools");
		sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
		sap.ui.getCore().byId("MOB37SplitApp").getPage("MOB37Detail").setBindingContext(context, "tools");
		sap.ui.getCore().byId("MOB37SplitApp").toDetail("MOB37Detail");
		
	},
	
//	searchz:function()
//	{
//		
//		
//		
//	}
	
	
	searchz: function () {/*
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
		
		sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB37MasterTwo");
        var mob37serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
        var mob37loginoDataModel = new sap.ui.model.odata.ODataModel(mob37serviceURL, true, getUserName(), getPassword(), null, true, true, false);
            
        // var mob37readRequestURL =  "/ToolsSet?$filter=Plant eq 'GWNP' and SearchString eq ' ' and Locked eq 'X' and ToolsGroupingKey eq ' ' &$format=json";
         var mob37readRequestURL =  "/ToolsSet?$filter=Plant eq 'GWNP' and SearchString eq ' ' and Locked eq 'X' and ToolsGroupingKey eq ' '&$expand=NavTools"
        
         
         mob37loginoDataModel.read(mob37readRequestURL, null, null, false,   
                 function(oData, oResponse) { 
                                   var result = oResponse.body; //Getting JSON response body
                                   
                                   var jsonObj = JSON.parse(result); // Parsing the JSON Object
                                   
                                   var result = jsonObj.d; // Taking the result inside namespace d
                                   var CheckResVal = result.results.length;
                                   
                                   //Global variable oJSONModelMatSearch is used to make use of all the screens
                                   oJSONModelToolSearch = new sap.ui.model.json.JSONModel(result, "MD37ToolCollModel");
                                   oJSONModelToolSearch.setSizeLimit(1000000);
                                
                                
                                   
                                 mob37list =sap.ui.getCore().byId("mob37list");
                                 mob37list.setModel(mob37loginoDataModel);
                                   
                                   
         				},
         				function(oError){  
         					
         					alert("error");
         				
         						
         						});
		
		
		
		
		
		
		
		
		
		
		
		/////////////asym////////////////////////////////////////S
		
	
		},
	
	fetchInvDocDataMOB37 : function(oEvent)
	{
		
				//var context = oEvent.getParameter("MD37Collection01").getBindingContext("");	
			//	sap.ui.getCore().byId("MOB37IconTabBar").setSelectedKey("firstTab");
			//sap.ui.getCore().byId("MOB37SplitApp").getPage("MOB37Detail").setBindingContext(context, "tools");
			
		
				
	        
				var contextPath = oEvent.mParameters.listItem.oBindingContexts.undefined.sPath;
					sap.ui.getCore().byId("MOB37Manufacturer").setText(this.getModel().getProperty(contextPath + "/AssetManufacturer"));
			//	sap.ui.getCore().byId("Model Number").setText(this.getModel().getProperty(contextPath + "/MaintenancePlanningPlant"));
					sap.ui.getCore().byId("MOB37MOB37ModelNumber").setText(this.getModel().getProperty(contextPath + "/ManufacturerModelNumber"));
					
					sap.ui.getCore().byId("MOB37ManufacturerPartNumber").setText(this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"));
				sap.ui.getCore().byId("ManufacturerSerialNumber").setText(this.getModel().getProperty(contextPath + "/SerialNumber"));
					sap.ui.getCore().byId("MOB37StockType").setText(this.getModel().getProperty(contextPath + "/EquipmentCategory"));
				sap.ui.getCore().byId("MOB37PlantName").setText(this.getModel().getProperty(contextPath + "/MaintenancePlanningPlant"));
					sap.ui.getCore().byId("MOB37StorageLocation").setText(this.getModel().getProperty(contextPath + "/StorageLocation"));
				sap.ui.getCore().byId("MOB37SpecialStock").setText(this.getModel().getProperty(contextPath + "/SpecialStockDescription"));
					sap.ui.getCore().byId("MOB37Customer").setText(this.getModel().getProperty(contextPath + "/CustomerName"));
			//	sap.ui.getCore().byId("MOB37ManufacturerPartNumber").setText(this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"));
		
			        //Stock and Desc
			        sap.ui.getCore().byId("MOB37StockText").setText(this.getModel().getProperty(contextPath + "/StockType"));
			        sap.ui.getCore().byId("MOB37StockDescText").setText(this.getModel().getProperty(contextPath + "/StockTypeDesc"));
		
	//////////////////////asym//////////
		
		var app= sap.ui.getCore().byId("MOB37SplitApp");	
		app.toDetail("MOB37Detail");
		
		
	//	 sap.ui.getCore().byId("MOB37SplitApp").toMaster("MOB37Master");
		 oSelectedItemz = oEvent.mParameters.listItem._oTitleText.mProperties.text;
		 var numberInput_mob37 = sap.ui.getCore().byId("MOB37ComponentAndToolDialogNumberInput");
		 var numberInput_mob03 = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
		 
		 if(numberInput_mob37 != 'undefined')
			 numberInput_mob37.setValue(oSelectedItemz);
		 if(numberInput_mob03 != 'undefined')
			 numberInput_mob03.setValue(oSelectedItemz);
		 
		 
		 
		
		/*var oSelectedItem = oEvent.getParameter("selectedItem");
		if (oSelectedItem) {
			//var input = sap.ui.getCore().byId(this.inputId);
			var numberInput = sap.ui.getCore().byId("MOB37ComponentAndToolDialogNumberInput");
			numberInput.setValue(oSelectedItem.getTitle());
			numberInput.setValueState("Success");
		}
		oEvent.getSource().getBinding("items").filter([]);*/
		//asym
		
		//asym
		/*if ( g_runningOnPhone == true){
			  g_MobileNavigationId = "MOB37verifyBinPage";		
		//	var appr = sap.ui.getCore().byId("SplitApp");	
			  
			var app= sap.ui.getCore().byId("MOB37SplitApp");
			
			app.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));
			
			app.toDetail("MOB37Detail");
			
		}
		else{
		
			var app= sap.ui.getCore().byId("MOB37SplitApp");	
			app.toDetail("MOB37Detail");
			app.addDetailPage(new sap.ui.jsview("MOB37Detail", "com.cg.gtm.view.Drop3_MOB37.MOB37Detail"));
			
			app.toDetail("MOB37Detail");
		}*/	
				
		
	
	},
	
	/*fetchInvDocDataMOB37_1 :function(oEvent)
	{
		
		
		var oSelectedItem = oEvent.getParameter("selectedItem");
		if (oSelectedItem) {
			//var input = sap.ui.getCore().byId(this.inputId);
			var numberInput = sap.ui.getCore().byId("MOB37ComponentAndToolDialogNumberInput");
			numberInput.setValue(oSelectedItem.getTitle());
			numberInput.setValueState("Success");
		}
		oEvent.getSource().getBinding("items").filter([]);
	}*/
		

});



function mob37getalltools()
{
 var mob37serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/ToolsSet");
 
 var mob37loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
    
 var mob37readRequestURL =  "/ToolsSet?$filter=Plant eq 'GWNP' and SearchString eq ' ' and Locked eq 'X' and ToolsGroupingKey eq ' ' &$format=json";

 
 loginoDataModel.read(mob37readRequestURL, null, null, false,   
         function(oData, oResponse) { 
				var result = oResponse.body; //Getting JSON response body
				
				var jsonObj = JSON.parse(result); // Parsing the JSON Object
				
				var result = jsonObj.d; // Taking the result inside namespace d
				var CheckResVal = result.results.length;
				
				//Global variable oJSONModelMatSearch is used to make use of all the screens
				oJSONModelToolSearch = new sap.ui.model.json.JSONModel(result, "MD37ToolCollModel");
				oJSONModelToolSearch.setSizeLimit(1000000);
				var listMat = sap.ui.getCore().byId("listMatNo");
				
				var mob37list =sap.ui.getCore().byId("mob37list");
				listMat.setModel(oJSONModelToolSearch);
				
							
 		}
			


);
 
 
 
 
 
 
 
 
 
 
 
 
}