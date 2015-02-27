sap.ui.controller("com.cg.gtm.view.Grid1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mobilegrid.com.cg.gtm.view.Grid1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mobilegrid.com.cg.gtm.view.Grid1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mobilegrid.com.cg.gtm.view.Grid1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mobilegrid.com.cg.gtm.view.Grid1
*/
//	onExit: function() {
//
//	}
	
	getUserDefaults : function()
	{
		
		alert(window.localStorage.getItem("IHG"));

 	  // var dataArrIni = [];
 	   readLocalFileOnDevice("MasterData.json", function(funCall)
		
				{
			
 		   var fleet = JSON.parse(funCall);
			 
			 assetDataArr = fleet[0].Nav2PlannerGroup.results ;
		      //var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
						if ( assetDataArr[i].Ingrp == window.localStorage.getItem("IHG"))
							{
							sap.ui.getCore().byId("MOB01FleetInput").setValue(assetDataArr[i].Ingrp);
							sap.ui.getCore().byId("MOB01TrainInput").setEnabled(false);
							}
					}
		});
		
		
	},
	
	getImgMetadata : function()
	{
		
/**Calling the service to return the metadata for images to be used in material search**/
		
var demoswitch = sap.ui.getCore().byId("demoswitch");
		
		if (demoswitch.getState() == false)
		{/*
			
			
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_FILES_APP_SRV");	
     	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);     	
		var readRequestURL = "/FilesList?&$format=json";
		defectDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
			  var result = oData.results;
		
              if(result.length > 0){
  				var result = oResponse.body; //Getting JSON response body
				
				var jsonObj = JSON.parse(result); // Parsing the JSON Object
				
				var result = jsonObj.d; // Taking the result inside namespace d
				
				 imageMetadatArr = result.results;//global aaray that stores image metadata 
				
               }
			
			
					
				},  function(oError){  
						errorRes = true;
						//alert(oError.message);
						try{
							var data = JSON.parse(oError.response.body);
							for(var event in data){
							var dataCopy = data[event];	
								try{
								var messageFromBackend = dataCopy.innererror.errordetails[0].message;
								sap.m.MessageBox.show(
								messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
								catch(e)
								{sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,"Error");break;
								}}}catch(e){sap.m.MessageBox.show(
	                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,"Error");}
					
      });
	*/}
	},
	
	showSettingsPage : function () {
		
	//Calling the service to get details :
		
				
		//Service Start Time
		
	 var logInfo = getTimeStamp() +"MOB00:: Service: UserDetailList Start" ;
	 
	 
	 var userID =  getUserName();
	 var userPass = getPassword();
	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_USER_DETAILS_SRV/");

	 /*if(serviceURL == "Fail")
		 {
		 return false;
		 }*/

	 	 
     var Mob00DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, userID, userPass, null, true, true, false);
	 var readRequestURL = "UserDetailList?UserName='"+userID+"'";
		
		Mob00DataModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
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
		  closeSplashScreen();
	  
	  

		
				if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB00:: Service: UserDetailList Finish" ;
				    //Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
				
				
				
		//Service End Time
		
		//var logInfo1 = "MOB00:: Service Name: UserDetailList: After Invocation: " + getTimeStamp();
		
		
		/*if(g_runningOnPhone == true || g_runningInTablet == true)
			{
		//Log file Service Start and End Time
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
		    var path = "HRE_log_Service.txt";
		    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
		    fileEntry.createWriter(function (writer) {
		    writer.onwrite = function(evt) {
		        console.log("write success");
		        alert("On Write");
		    };
		     writer.write(logInfo + logInfo1);
		} , fail);
		}, fail);
      }, fail);function fail()
		{
      	alert("Service Failed");
		}
      
		    }*/
      
	  
		},
		function(oError){  
			errorRes = true;
			if (oError.response.statusCode == 401)
				{
			
				sap.m.MessageBox.show(
						
						"User Unauthorized",
						sap.m.MessageBox.Icon.ERROR,
						"Error"
						);
				 closeSplashScreen();
				 
				 
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
				
				 closeSplashScreen();
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
		
		
		
		
		
	  
	// Till here for service call 	
		
		
	}
	

});