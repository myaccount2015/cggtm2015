sap.ui.controller("com.cg.gtm.view.Drop3_MOB24.MOB24Master", {

	handleNavButtonPress: function () {
		if (   backNavMat == "MOB03")
		{

			var app = sap.ui.getCore().byId("myApp");  
			app.back();
			//app.to("MOB03Initial");
			/*var myApp = sap.ui.getCore().byId("MOB03SplitApp");
			myApp.toMaster("MOB03MasterTwo");
			myApp.toDetail("MOB03Detail");*/
			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();



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
			//sap.ui.getCore().byId("MOB01ComponentDialogMaterialNumberInput").setValue
			//(sap.ui.getCore().byId("MOB24SELMAT").getText());
			
			sap.ui.getCore().byId("MOB24ResultsList").removeSelections();
			/*sap.ui.getCore().byId("MOB24SplitApp").backMaster();
			sap.ui.getCore().byId("MOB24SplitApp").backDetail();*/
			//sap.ui.getCore().byId("myApp").back();


		}
		
		else
		{

			var app = sap.ui.getCore().byId("myApp");  
			//app.to("MOB33Initial");
			app.back();
			/*var myApp = sap.ui.getCore().byId("MOB33SplitApp");
			myApp.toMaster("MOB33Master");
			myApp.toDetail("MOB33Detail");*/

		}
		//sap.ui.getCore().byId("myApp").back();
	},

	handleHelpButtonPress: function () {

	},

	handleValueHelp: function (evt) {
		this.inputId = evt.getSource().getId();
		if (!this.plantDialog) {
			this.plantDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB24.MOB24PlantDialog", this);
		}
		this.plantDialog.setTitle(evt.getSource().getName());
		// set binding
		//var plantModel = new sap.ui.model.json.JSONModel("drop3mockups/data/plants.json");
		
		
		
		/*******************************************************/
	
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV");
	
	/*
	 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
	 */
 	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
 	
 	/*
 	 * Replace with below req URL once the service is ready.
 	 */
 	//var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "' and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq '" + typeDesc + "'&$format=json";
 	
	var readRequestURL = "/PlantList?$format=json";
	
	defectDataModel.read(readRequestURL, null, null, false,   
          function(oData, oResponse) { 
		  var result = oData.results;
	
          if(result.length > 0){
				var result = oResponse.body; //Getting JSON response body
			
			var jsonObj = JSON.parse(result); // Parsing the JSON Object
			
			var result = jsonObj.d; // Taking the result inside namespace d
			oJSONModelMatSearch = new sap.ui.model.json.JSONModel(result, "results");
			MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB24.MOB24PlantDialog", sap.ui.getCore().byId("MOB24Master").getController());
			MOB01Dialog.setModel(oJSONModelMatSearch);
			MOB01Dialog.open(evt.getSource().getValue());
		//	plantSear = plantSearchHelp(plantSear);
			
			
        	
           }
		
				
			},  function(oError){  
					errorRes = true;
				//	alert(oError.message);
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
							if( g_isDebug == true)
				              {
				              //Service End Time
				              var logInfo1 = getTimeStamp() +"MOB24:: Service: PlantList Failed no network" ; 
				              //Log file Service Start and End Time
				              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				              logFileUpdate(g_ServiceStartEndTime);
				              }
							
							
							}
				
  });
	
	
	
		
		/*******************************************************/
	},

	handlePlantDialogSearch: function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter({
			filters: [
				new sap.ui.model.Filter("plantId", sap.ui.model.FilterOperator.StartsWith, sValue),
				new sap.ui.model.Filter("plantName", sap.ui.model.FilterOperator.StartsWith, sValue)
			],
			and: false
		});
		var oBinding = evt.getSource().getBinding("items");
		oBinding.filter([oFilter]);
	},

	handlePlantDialogConfirm: function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(this.inputId);
			input.setValue(oSelectedItem.getInfo());
			g_inputPlantCode =  oSelectedItem.getTitle();
		}
		//evt.getSource().getBinding("items").filter([]);
	},

	handlePlantDialogCancel: function (evt) {
		//evt.getSource().getBinding("items").filter([]);
	},

	handleSearchButtonPress: function () {
		/*if (!this.busyDialog) {
			this.busyDialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB24.MOB24BusyDialog", this);
		}
		this.busyDialog.open();
		jQuery.sap.delayedCall(1000, this, function () {
			this.busyDialog.close();
		});
	},

	handleBusyDialogClose: function () {*/
		getAllMaterials();
		sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24MasterTwo");
	}

});


function getAllMaterials()
{

	
	//Service Start Time
	/*var logInfo = getTimeStamp() +"MOB24:: Service: materialcollections Start" ; 

     var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");

     if(serviceURL == "Fail")
     		 {
     		 return false;
     		 }*/
	/*
	 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
	 * Hardcoding user and password
	 * TODO: Need to pass service user and password
	 */
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
    var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
    
    var matNo = "";
    
    var plant = 	g_inputPlantCode ;
    g_MOB15MatPlant=g_inputPlantCode;
    var desCheck = sap.ui.getCore().byId("Mob24-getDesLabItemPlantDes").getText();
    var vendor = null;
	   var manu = null;
	   var desc = null;
	   var matGrp = null;
	   var extMatGrp= null;
	   var venPartNo= null;
	   var manufac= null;
	
     vendor = sap.ui.getCore().byId("MOB24VenNum").getValue();
    // manu = sap.ui.getCore().byId("txtManu").getValue();
     desc = sap.ui.getCore().byId("MOB24PlantInputDesc").getValue();
     matGrp = sap.ui.getCore().byId("MOB24MatGrp").getValue();
     extMatGrp = sap.ui.getCore().byId("MOB24ExtMatgrp").getValue();
     venPartNo = sap.ui.getCore().byId("MOB24VenPart").getValue();
     manufac =  sap.ui.getCore().byId("MOB24ManuNum").getValue();
    
    var errorRes = false;
    var oJSONModelMatSearch = null;
    /*
     * Set Format as $format=json in the Request URL
     */
   // alert(" in ,mat srch" + g_inputPlantCode);
var readRequestURL = "/materialcollections?$filter=Materialno eq '" + matNo.toString() + "' and Plant eq '"+g_inputPlantCode+"' and Vendor eq '" + vendor + 
"' and Description eq '"  + desc  +"' and  Manufacturer eq '"    +  manufac    +   "' and MaterialGroup eq '" + matGrp + "' and ExternalMaterialGroup eq '" + extMatGrp + "' and VendorPartNumber eq '" + venPartNo + "' &$format=json";



	loginoDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
					var result = oResponse.body; //Getting JSON response body
					
					var jsonObj = JSON.parse(result); // Parsing the JSON Object
					
					var result = jsonObj.d; // Taking the result inside namespace d
					var CheckResVal = result.results.length;
					//Global variable oJSONModelMatSearch is used to make use of all the screens
					oJSONModelMatSearch = new sap.ui.model.json.JSONModel(result, "results");
					oJSONModelMatSearch.setSizeLimit(1000000);
					var listMat = sap.ui.getCore().byId("MOB24ResultsList");
					listMat.setModel(oJSONModelMatSearch);
					//sendResultToMaterialSearchDetPageButton = oData.results; //global var 2nd time
					
					/*if( CheckResVal == 0 )
					{
					sap.m.MessageBox.show("No material is there with the following search criteria"+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
				//	closeSplashScreen();
					//return;
					}
					
				//	closeSplashScreen();
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Finish" ; 
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}*/
					
				},  function(oError){  
						errorRes = true;
						//alert(oError.message);
						
						
					//	 setTimeout(function(){
								
								
							
							    
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
								
								if( g_isDebug == true)
								{
								//Service End Time
								var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Failed no network" ; 
								//Log file Service Start and End Time
								var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								logFileUpdate(g_ServiceStartEndTime);
								}
								
								
								}
								
								
							//	closeSplashScreen();
						// },3000);	
								
								
								
      }
				
	
	
	);
	
	
	
	
	
	if(!errorRes) {

		/*var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMATSR");*/

		
		/*var deselect = sap.ui.getCore().byId("listMatNo");
		deselect.removeSelections();*/
		// desele.setSelectedItem(sap.ui.getCore().byId("stdMatSel"),false);
			
		
		//setTimeout(function(){
			
			//closeSplashScreen();
/*if(g_runningOnPhone == true)
{
var app = sap.ui.getCore().byId("myApp");  
app.to("idMATSR");

}
else
{
var app = sap.ui.getCore().byId("splitAppMaterial");  
app.toDetail("MaterialSearchDetailPage");
if(!g_runningOnPhone) {
	hideView_MaterialDetails(); // Hiding Material Details Screen
}
}*/
	    
	    

	   


		// },2000);//splash screen 
		
		
		
	

	}

}