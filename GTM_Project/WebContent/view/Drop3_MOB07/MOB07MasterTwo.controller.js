sap.ui.controller("com.cg.gtm.view.Drop3_MOB07.MOB07MasterTwo", {

	handleNavButtonPress: function () {
		
		if(backNavMat=="MOB01T"||backNavMat=="MOB01D"){
		sap.ui.getCore().byId("MOB07SplitApp").backToTopDetail();
		sap.ui.getCore().byId("myApp").back();
		}
		else if(backNavMat=="MOB07Search"){
			sap.ui.getCore().byId("MOB07SplitApp").backMaster();
			sap.ui.getCore().byId("MOB07SplitApp").backDetail();
			
		}
		/*sap.ui.getCore().byId("MOB07AssetList").removeSelections();
		sap.ui.getCore().byId("MOB07SplitApp").backMaster();
		sap.ui.getCore().byId("MOB07SplitApp").backDetail();
		
		
		if (g_cameFromMOB01 !== undefined && g_cameFromMOB01) {
			sap.ui.getCore().byId("myApp").back();
			g_cameFromMOB01 = false;
		}
*/	},

	handleHelpButtonPress: function () {
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB07";
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
		sap.ui.getCore().byId("MOB07IconTabBar").setSelectedKey("firstTab");
		/*var context = evt.getParameter("listItem").getBindingContext("assets");
		sap.ui.getCore().byId("MOB07Detail").setBindingContext(context, "assets");*/
		var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
		sap.ui.getCore().byId("MOB07Detail").setModel(assets);
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		sap.ui.getCore().byId("MOB07OBJHDR").setTitle(this.getModel().getProperty(contextPath + "/Eqktx"));
		sap.ui.getCore().byId("MOB07OBJHDR").setIntro(this.getModel().getProperty(contextPath + "/Floc"));
		sap.ui.getCore().byId("MOB07OBJHDR").setNumber(this.getModel().getProperty(contextPath + "/Equnr"));
		sap.ui.getCore().byId("MOB07ASTDESC").setText(this.getModel().getProperty(contextPath + "/Eqktx"));
		sap.ui.getCore().byId("MOB07ASTMNFR").setText(this.getModel().getProperty(contextPath + "/EquipMftr"));
		sap.ui.getCore().byId("MOB07ASTMNFRPRTNUM").setText(this.getModel().getProperty(contextPath + "/MftrPrtNr"));
		sap.ui.getCore().byId("MOB07ASTMNFRMODNUM").setText(this.getModel().getProperty(contextPath + "/MftrModNr"));
		sap.ui.getCore().byId("MOB07ASTSRNUM").setText(this.getModel().getProperty(contextPath + "/MftrSrNr"));
		sap.ui.getCore().byId("MOB07MATNUM").setText(this.getModel().getProperty(contextPath + "/Matnr"));
		sap.ui.getCore().byId("MOB07OBJTYP").setText(this.getModel().getProperty(contextPath + "/TechObjTypDesc"));
		sap.ui.getCore().byId("MOB07SUD").setText(convertJsonDateString(this.getModel().getProperty(contextPath + "/StrtUpDt")));
		sap.ui.getCore().byId("MOB07OPLNR").setText(this.getModel().getProperty(contextPath + "/FleetDesc"));
		
		sap.ui.getCore().byId("MOB07WC").setText(this.getModel().getProperty(contextPath + "/WorkCenterDesc"));
		sap.ui.getCore().byId("MOB07VW").setText
		(this.getModel().getProperty(convertJsonDateString(this.getModel().getProperty(contextPath + "/WrntyStart")))
				+" to " + convertJsonDateString(this.getModel().getProperty(contextPath + "/WrntyEnd")) + " " +
				this.getModel().getProperty(contextPath + "/WrntyDesc"));
		
		//Matnr , TechObjTyp , StrtUpDt  , Fleet
		//Form Doc List
		var Equnr = this.getModel().getProperty(contextPath + "/Equnr");
		var iconType = "DOC";
		var MobId = "MOB07";
		var ListId = "MOB07DocList";
		var DynamicserviceURL = "/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV";
		var readRequestURL = "/AssetSet?$filter=Equnr eq '"+Equnr+"' &$expand=NavDocs";
		Drop3_Common_DMS_Document_List(DynamicserviceURL,readRequestURL,ListId,MobId,iconType);
		
		
		sap.ui.getCore().byId("MOB07SplitApp").toDetail("MOB07Detail");
		sap.ui.getCore().byId("MOB07DETPAGE").setTitle("Asset " + this.getModel().getProperty(contextPath + "/Equnr"));
		//MOB07DETPAGE
	},

	handleListItemPress: function (evt) {
		sap.ui.getCore().byId("MOB07IconTabBar").setSelectedKey("firstTab");
		var context = evt.getSource().getBindingContext("assets");
		sap.ui.getCore().byId("MOB07Detail").setBindingContext(context, "assets");
		sap.ui.getCore().byId("MOB07SplitApp").toDetail("MOB07Detail");
	}

});

