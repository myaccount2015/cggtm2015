sap.ui.controller("com.cg.gtm.view.Drop3_MOB33.MOB33MasterTwo", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB33ResultsList").removeSelections();
		sap.ui.getCore().byId("MOB33SplitApp").backMaster();
		sap.ui.getCore().byId("MOB33SplitApp").backDetail();
		if (g_cameFromMOB01) {
			sap.ui.getCore().byId("myApp").back();
			g_cameFromMOB01 = false;
		}
	},

	handleHelpButtonPress: function () {


   
		
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB33";
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
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		var equipment = this.getModel().getProperty(contextPath + "/Equnr")
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	 	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		//var equipment= sap.ui.getCore().byId("MOB33EQD").getValue();
		var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"'&$expand=NavMeasPt&$format=json";
	 	oModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) {
	 		var data= oData.d;
	 		var measurements = new sap.ui.model.json.JSONModel(data);
	 		sap.ui.getCore().byId("MOB33ThirdMAsterResultsList").setModel(measurements);
			sap.ui.getCore().byId("MOB33SplitApp").toMaster("MOB33MasterThree");
	 	},
	          function(oError){  
				errorRes = true;
				try{
					var data = JSON.parse(oError.response.body);
					for(var event in data){
					var dataCopy = data[event];	
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						sap.m.MessageBox.show(
						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
						catch(e)
						{sap.m.MessageBox.show(e.message+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");break;
						}}}catch(e){sap.m.MessageBox.show(
	                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
						}
	});
		
	
		
		/*
		
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		var context = evt.getParameter("listItem").getBindingContext("measurements");
		sap.ui.getCore().byId("MOB33Detail").setBindingContext(context, "measurements");
		
		sap.ui.getCore().byId("MOB33OBJHDR").setTitle(this.getModel().getProperty(contextPath + "/Mileage"));
		sap.ui.getCore().byId("MOB33OBJATR1").setText(this.getModel().getProperty(contextPath + "/TrainSet"));
		sap.ui.getCore().byId("MOB33OBJSTA1").setText(this.getModel().getProperty(contextPath + "/Object"));
		sap.ui.getCore().byId("MOB33LR").setText(this.getModel().getProperty(contextPath + "/LastReading"));
		sap.ui.getCore().byId("MOB33LRD").setText(this.getModel().getProperty(contextPath + "/LastReadingDate"));
		
		g_MOB33Mileage = this.getModel().getProperty(contextPath + "/Mileage");
		
		sap.ui.getCore().byId("MOB33SplitApp").toDetail("MOB33Detail");
		sap.ui.getCore().byId("MOB33READING").setValue("");
		sap.ui.getCore().byId("MOB33COMMENT").setValue("");
	*/},

	handleListItemPress: function (evt) {
		var context = evt.getSource().getBindingContext("measurements");
		sap.ui.getCore().byId("MOB33Detail").setBindingContext(context, "measurements");
		sap.ui.getCore().byId("MOB33SplitApp").toDetail("MOB33Detail");
	}

});