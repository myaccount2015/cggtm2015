sap.ui.controller("com.cg.gtm.view.Drop3_MOB24.MOB24Detail", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB24SplitApp").backDetail();
	},

	handleUseMaterialButtonPress: function () {
		
		if (   backNavMat == "MOB03")
		{

			var app = sap.ui.getCore().byId("myApp"); 
			app.back();
			/*app.to("MOB03Initial");
			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");*/
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			sap.ui.getCore().byId("MOB01ComponentDialogQuantityInput").setValueState("None");
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		else if  (   backNavMat == "MOB33T")
		{

			var app = sap.ui.getCore().byId("myApp");  
			app.back();
			app.to("MOB33Initial");
			/*var myApp = sap.ui.getCore().byId("MOB33SplitApp");
			myApp.toMaster("MOB33Master");
			myApp.toDetail("MOB33Detail");*/
			//sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			sap.ui.getCore().byId("MOB33EQT").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		else if  (   backNavMat == "MOB33D")
		{

			var app = sap.ui.getCore().byId("myApp");  
			app.back();
			app.to("MOB33Initial");
			/*var myApp = sap.ui.getCore().byId("MOB33SplitApp");
			myApp.toMaster("MOB33Master");
			myApp.toDetail("MOB33Detail");*/
			//sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			sap.ui.getCore().byId("MOB33EQD").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		else if (   backNavMat == "MOB01T")
		{

			var app = sap.ui.getCore().byId("myApp"); 
			app.back();
			/*app.to("MOB03Initial");
			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");*/
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			sap.ui.getCore().byId("MOB01EQT").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		else if (   backNavMat == "MOB01D")
		{

			var app = sap.ui.getCore().byId("myApp"); 
			app.back();
			/*app.to("MOB03Initial");
			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");*/
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();
			sap.ui.getCore().byId("MOB01EQD").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		

		else if (   backNavMat == "MOB01POP")
		{

			var app = sap.ui.getCore().byId("myApp"); 
			app.back();
			/*app.to("MOB03Initial");
			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");*/
			sap.ui.getCore().byId("MOB01ComponentDialog").open();
			sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValue
			(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		
		
		
	}

});