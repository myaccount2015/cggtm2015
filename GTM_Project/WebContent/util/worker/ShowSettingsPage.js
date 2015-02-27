function W_ShowSettingsPage()
{

	//openSplashScreen();
	g_MobileNavigationId = "";
	removeBrowserCookie();
	var myuser = sap.ui.getCore().getElementById("txtUser")
			.getValue();
	var mypass = sap.ui.getCore().getElementById("txtPass")
			.getValue();
	var mypin = sap.ui.getCore().byId("txtPin").getValue();

	if (myuser == "" || myuser.length == 0 || mypass == ""
			|| mypass.length == 0 ) {

		sap.m.MessageBox.show(

		"Please enter values in all fields",
				sap.m.MessageBox.Icon.ERROR, "Error");
		//closeSplashScreen();
		g_webWorkerCheck = "SPE"; //Settings Page Error
		
	}
	else if (mypin == "" || mypin.length == 0){
		sap.m.MessageBox.show(

				"Pin number should be of 4 numeric characters  ",
						sap.m.MessageBox.Icon.ERROR, "Error");
				//closeSplashScreen();
		g_webWorkerCheck = "SPE"; //Settings Page Error
		
	}else if (mypin.length < 4) {
		sap.m.MessageBox.show(

		"Pin number shouldn't be less than 4 ",
				sap.m.MessageBox.Icon.ERROR, "Error");
		mypin.setValue("");
		//closeSplashScreen();
		g_webWorkerCheck = "SPE"; //Settings Page Error
	}
	


	else {
		var demo = sap.ui.getCore().getElementById(
				"demoswitch").getState();
		if (demo) {
			defaultPlantName = "North Pole Depot";
			defaultPlantCode = "1234";
			saveCredentials();
			validate(sap.ui.getCore().byId('txtPin'));
			// sap.ui.controller("com.cg.gtm.view.Grid1").showSettingsPage();
			var app = sap.ui.getCore().byId("myApp");
			app.to("idGrid");
			//closeSplashScreen();
		}

		else {

			var numValidation = validate(sap.ui
					.getCore().byId("txtPin"));// Numeric
												// Field
												// validation
			if (numValidation) {
				g_webWorkerCheck = "SPE"; //Settings Page Error
			    }

			else {
				
				defaultPlantName = "";// plantsArr[0].PlantName;
				defaultPlantCode = "";
				saveCredentials();
				settingsPageResults();
				
				//closeSplashScreen();
			}

		}

	}

	
}




function settingsPageResults()
{

	 var logInfo = getTimeStamp() +"MOB00:: Service: UserDetailList Start" ;
	 var userID =  getUserName();
	 var userPass = getPassword();
	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_USER_DETAILS_SRV/");
     var Mob00DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, userID, userPass, null, true, true, false);
	 var readRequestURL = "UserDetailList?UserName='"+userID+"'";
		Mob00DataModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
			
			g_webWorkerCheck = "SPS"; //Settings Page Succes
			
	  var result = oResponse.body; //Getting JSON response body
	  var jsonObj = JSON.parse(result); // Parsing the JSON Object		
	  var result = jsonObj.d; // Taking the result inside namespace d
	  var resultArrMOB00 = result.results;
	  var defPlant = "Current default plant is : \n" + resultArrMOB00[0].PlantName ;
	  sap.ui.getCore().byId("MOB00ChPltLBL").setText(resultArrMOB00[0].Plant +" - "+resultArrMOB00[0].PlantName);
	  //sap.ui.getCore().byId("inputPlantMOB28").setText(resultArrMOB00[0].PlantName);
	  var defWhouse = "Current default warehouse is : \n" + resultArrMOB00[0].WHouseName ;
	  sap.ui.getCore().byId("MOB00ChWhLBL").setText(resultArrMOB00[0].WHouse+" - "+resultArrMOB00[0].WHouseName);
	 // sap.ui.getCore().byId("inputWHMOB28").setText(resultArrMOB00[0].WHouseName);
	  var defPrinter = "Current default printer is : \n" + resultArrMOB00[0].PrinterName ;
	  sap.ui.getCore().byId("MOB00ChPrntLBL").setText(resultArrMOB00[0].PrinterId+" - "+resultArrMOB00[0].PrinterName);
	  var defLoc = "Current default location is : \n" + resultArrMOB00[0].SlocName ;
	  sap.ui.getCore().byId("MOB00ChLocLBL").setText( resultArrMOB00[0].Sloc+" - "+ resultArrMOB00[0].SlocName);
	  window.localStorage.setItem("defPlantCode", resultArrMOB00[0].Plant);
	  window.localStorage.setItem("defWHCode", resultArrMOB00[0].WHouse);
	  window.localStorage.setItem("defPrinCode", resultArrMOB00[0].PrinterId);
	  window.localStorage.setItem("defLocCode", resultArrMOB00[0].Sloc);
	  window.localStorage.setItem("defPlantDesc", resultArrMOB00[0].PlantName);
	  window.localStorage.setItem("defWHDesc", resultArrMOB00[0].WHouseName);
	  window.localStorage.setItem("defPrinDesc", resultArrMOB00[0].PrinterName);
	  window.localStorage.setItem("defLocDesc", resultArrMOB00[0].SlocName);
	  g_inputPlantCode = resultArrMOB00[0].Plant;
	  var app = sap.ui.getCore().byId("myApp"); 
		  app.to("idGrid");
		 // closeSplashScreen();
				if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB00:: Service: UserDetailList Finish" ;
				    //Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
		    
	  
		},
		function(oError){  
			
			g_webWorkerCheck = "SPE"; //Settings Page Error
			errorRes = true;
			if (oError.response.statusCode == 401)
				{
			
				sap.m.MessageBox.show(
						
						"User Unauthorized",
						sap.m.MessageBox.Icon.ERROR,
						"Error"
						);
				// closeSplashScreen();
				 
				 
				//Service End Time
					var logInfo1 = getTimeStamp() +"MOB00:: Service: UserDetailList Failed 401 unauthorised" ;
				    //Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					if( g_isDebug == true)
						{
						logFileUpdate(g_ServiceStartEndTime);
						}
				 
				 
				return false;
				
				}
			
			
			try{
				
				 //closeSplashScreen();
				var data = JSON.parse(oError.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
					//alert(messageFromBackend);
					}
					catch(e)
					{
					sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					break;
						
					}}}
			catch(e)
					{
				
				
				
				sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					
					if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB00:: Service: UserDetailList Failed no network" ;
					    //Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
					
					
					
					}
			
			//alert(oError.message);
			
			if(serviceURL == "Fail")
			 {
			 return false;
			 }
			
			
			
});	
		
		
		
}