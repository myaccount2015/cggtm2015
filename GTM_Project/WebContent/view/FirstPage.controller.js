sap.ui.controller("com.cg.gtm.view.FirstPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.FirstPage
*/
	onInit: function() {
		/*
		 * Calling LogonUtil.js to store user & password in global variable
		 */
		getPassword();
		getUserName();
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.FirstPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.FirstPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.FirstPage
*/
//	onExit: function() {
//
//	}

/*initialLoadPM : function()
{
	
}*/


initialLoadPM : function()
{
	

	var g_isDebug = false ;
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	if(serviceURL == "Fail")
	 {
	 return false;
	 }
	
	var pmDataModelIni = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
	var readRequestURL = "/AssetListSet?$filter=UserId eq '"+getUserName()+"' and Type eq 'T'";
	//var readRequestURL = "/AMSCENARIOSet?$filter=UserId eq 'RDAVIES'&$expand=Nav2Codes,Nav2Effect,Nav2Locations,Nav2NotifTypes,Nav2OrderTypes,Nav2PlannerGroup,Nav2PlantOrg,Nav2PMActivityTypes,Nav2PriorityTypes";
	   
	pmDataModelIni.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) {
		
		var result = oResponse.body; //Getting JSON response body
		
		var dataForFile = JSON.stringify(result);
		
		var myJSONObject = {"myData": dataForFile};
		
		$.ajax({
			  url: "FileHandle?readOrWrite=write&fileName=TrainAssetNew2",
			  type: "post",
			  dataType: "text",
				//processData: false,
				data: myJSONObject,
			  success: function(text){
			      alert("success");
			     //  $("#result").html('submitted successfully');
			  },
			  error:function(){
			      alert("failure");
			     // $("#result").html('there is error while submit');
			  }   
			}); 
		
		
		//dataForFile =  "Ekdum jhakaas hai re ";
		/*var hr = new XMLHttpRequest();
		   var response;
		   hr.open("POST", "FileHandle?readOrWrite=write&myData="+dataForFile+"&fileName=TrainAsset", false);
		   hr.setRequestHeader("Content-type", "text/html", false);
		   hr.onreadystatechange = function() {
		   if(hr.readyState == 4 && hr.status == 200) {
			    response = hr.responseText;
		   }
		  }
		   hr.send(null);*/
		
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
			
			if( g_isDebug == true)
			 {
			 //Service End Time
			 var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed 401 unauthorised" ;
			 //Log file Service Start and End Time
			 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			 logFileUpdate(g_ServiceStartEndTime);
			 }
			
			
			
			}
		try{
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
				//sap.m.MessageBox.show(e.message+ " " +" "+" ",
				//sap.m.MessageBox.Icon.ERROR,"Error");break;
					alert(e.message);
					break;
				}}}
		catch(e)
				{sap.m.MessageBox.show(
              "Service Not Available - Please contact system administrator" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
				
				if( g_isDebug == true)
				 {
				 //Service End Time
				 var logInfo1 = getTimeStamp() +"MOB35:: Service: WMInventorySet Failed no network" ;
				 //Log file Service Start and End Time
				 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				 logFileUpdate(g_ServiceStartEndTime);
				 }
				
				
				}
		
		//alert(oError.message);
});	
	

			
	





},

removeFile : function()
{
	



	var path = "AssetList.json";
	//alert("Date:"+getDate);
	
	//var checkFile = checkIfFileExists(path);
//alert("Check Ex File:"+checkFile);
	//if(checkFile == false )
		//{
			//Create Log File First time
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.remove(function () {
			    	
			    	//alert("file removed");
			    } , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
				
				alert("Failed to remove file");
			}
			
			var path2 = "MasterData.json";
			//alert("Date:"+getDate);
			
			//var checkFile = checkIfFileExists(path);
		//alert("Check Ex File:"+checkFile);
			//if(checkFile == false )
				//{
					//Create Log File First time
					window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
					    
					    fileSystem.root.getFile(path2, {create: true, exclusive: false}, function (fileEntry) {
					    fileEntry.remove(function () {
					    	
					    	//alert("file removed");
					    } , fail);
					}, fail);
			        }, fail);
			
					function fail()
					{
						
						alert("Failed to remove file");
					}
		
		//}
	
	//logFileUpdate(path, objJSONMD);
	
	

}

});


