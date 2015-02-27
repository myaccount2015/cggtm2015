/*
 * This method is calling Device Sync to see whether loading Master Data is required. Then loading master data.
 */
function tiggeraassetLoad(isForceLoad) {
	
	var isaassetFetchNeeded = false;
	
	if(!isForceLoad) {
		isaassetFetchNeeded = checkaasset();
	}else {
		isaassetFetchNeeded = true;
	}
	
	
	//alert("isaassetFetchNeeded..." + isaassetFetchNeeded);
	var objJSONMD = null;
	//isaassetFetchNeeded = true ;//checkaasset();
	if(isaassetFetchNeeded) {
		objJSONMD = fetchaassetLoad();
	}else {
		return;
	}
	
	
	
	/*
	 * Storing Master Data as Flat JSON File - Start
	 */
	if(isaassetFetchNeeded) {
	var objStringify = JSON.stringify(objJSONMD);
	
	var myJSONObject = {"myData": objStringify
                             };
	
	if(g_runningInTablet || g_runningOnPhone) {
		saveOnMobileAsset(objStringify);  
	}else {
		saveOnDesktopAL(myJSONObject);
	}
	}
	/*
	 * Storing Master Data as Flat JSON File - End
	 */
	
	//Calling for depot assets
	
	var objJSONDEPAST = null ;
	if(isaassetFetchNeeded) {
		 objJSONDEPAST  = fetchAssetsDepot();
	}else {
		
		return ;
	}
	
	if(isaassetFetchNeeded) {
var objStringify = JSON.stringify(objJSONDEPAST);
	
	var myJSONObject = {"myData": objStringify
                             };
	
	if(g_runningInTablet || g_runningOnPhone) {
		saveOnMobileAssetDepot(objStringify);  
	}else {
		saveOnDesktopALDepot(myJSONObject);
	}
	}
	
}

function saveOnMobileAsset(objJSONMD) {

	var path = getUserName()+"AssetList.json";
	//removeFile(path);
	
	var checkFile = checkIfFileExists(path);
	//alert("Check Ex File:"+checkFile);
		if(checkFile == true )
			{
			
			removeFile(path);
			}
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
	    FS.root.getFile(path, {create:true}, 
	        function(fileEntry) {
	            fileEntry.createWriter(
	                 function(writer) {
	                    writer.seek(writer.length);
	                    writer.write(objJSONMD);
	                    
	                 }, fail);
	        }, fail);
	}, fail);

function fail(){
//	alert("Service Failed");
	}
			/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.createWriter(function (writer) {
			    writer.onwrite = function(evt) { 
			    	writer.seek(writer.length);
                writer.write(dataToWrite);
                };
			//writer.write("");
	
			} , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
			}*/
		
	//	}
	
	//logFileUpdate(path, objJSONMD);
	
}

function saveOnDesktopAL(objJSONMD) {
	   
	var _handleSuccess = function(data, textStatus, jqXHR){
		//alert("JSON file saved successfully" + data);  
	}; 
	
	var _handleError = function(data){
		
	};
	
	//var objJSONMDp = {"myData": objJSONMD};
	 
	
	  
	
		jQuery.ajax({
			 url: "FileHandle?readOrWrite=write&fileName=AssetList",
			  type: "post",
			  dataType: "text",
			  async : false ,
			data: objJSONMD,
			success: _handleSuccess,
			error: _handleError
		});
}

function saveOnMobileAssetDepot(objJSONMD) {

	var path = getUserName()+"AssetListDepot.json";
	//removeFile(path);
	
	var checkFile = checkIfFileExists(path);
	//alert("Check Ex File:"+checkFile);
		if(checkFile == true )
			{
			
			removeFile(path);
			}
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
	    FS.root.getFile(path, {create:true}, 
	        function(fileEntry) {
	            fileEntry.createWriter(
	                 function(writer) {
	                    writer.seek(writer.length);
	                    writer.write(objJSONMD);
	                    
	                 }, fail);
	        }, fail);
	}, fail);

function fail(){
//	alert("Service Failed");
	}
			/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.createWriter(function (writer) {
			    writer.onwrite = function(evt) { 
			    	writer.seek(writer.length);
                writer.write(dataToWrite);
                };
			//writer.write("");
	
			} , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
			}*/
		
	//	}
	
	//logFileUpdate(path, objJSONMD);
	
}

function saveOnDesktopALDepot(objJSONMD) {
	   
	var _handleSuccess = function(data, textStatus, jqXHR){
		//alert("JSON file saved successfully" + data);  
	}; 
	
	var _handleError = function(data){
		
	};
	
	//var objJSONMDp = {"myData": objJSONMD};
	 
	
	  
	
		jQuery.ajax({
			 url: "FileHandle?readOrWrite=write&fileName=AssetListDepot",
			  type: "post",
			  dataType: "text",
			  async : false ,
			data: objJSONMD,
			success: _handleSuccess,
			error: _handleError
		});
}

function checkaasset() {
	
	 var isaassetFetchNeeded = false;
	 
	 var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV");
	 
	 if(serviceURL == "Fail")
	 {
		return isaassetFetchNeeded;
	 }
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
	 	var deviceSyncDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
	 	
	 	/*
	 	 * Replace with below req URL once the service is ready.
	 	 */
	 	
		var readRequestURL = "/DevicesyncSet(PMConfig=datetime'2014-12-14T00:00:00')";
		
		deviceSyncDataModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) { 
			  
			  var MD_PMConfig = window.localStorage.getItem('MD_PMConfig');
			  var objPMConfig =  JSON.parse(MD_PMConfig);
				
			  var MD_TrainAssetStructure = window.localStorage.getItem('MD_TrainAssetStructure');
			  var objTrainAssetStructure =  MD_TrainAssetStructure//JSON.parse(MD_TrainAssetStructure);
				
			  var MD_SiteAssetStructure = window.localStorage.getItem('MD_SiteAssetStructure');
			  var objSiteAssetStructure =  MD_SiteAssetStructure//JSON.parse(MD_SiteAssetStructure);
			 
			  
			  if( objTrainAssetStructure == null || objSiteAssetStructure == null) {
				  //alert("1");
				  isaassetFetchNeeded = true;
			  }
		    
			  var stringifiedPMConfig = JSON.stringify(oData.PMConfig);
			  var stringifiedTrainAssetStructure = JSON.stringify(oData.TrainAssetStructure);
			  var stringifiedSiteAssetStructure = JSON.stringify(oData.SiteAssetStructure);
			  
			 /* alert(objTrainAssetStructure);
			
			  alert(stringifiedTrainAssetStructure);
			  
			  alert(objSiteAssetStructure);
			  alert(stringifiedSiteAssetStructure);*/
			  
			  if(objTrainAssetStructure != stringifiedTrainAssetStructure || objSiteAssetStructure != stringifiedSiteAssetStructure) {
				 // alert("2");
				  isaassetFetchNeeded = true;
				 // window.localStorage.setItem('MD_PMConfig', stringifiedPMConfig);
				  window.localStorage.setItem('MD_TrainAssetStructure', stringifiedTrainAssetStructure);
				  window.localStorage.setItem('MD_SiteAssetStructure', stringifiedSiteAssetStructure);
			  }
			// alert(isaassetFetchNeeded);
			  return isaassetFetchNeeded;
					
		},  function(oError){
					
					if( g_isDebug == true)
		              {
		              //Service End Time
		              var g_ServiceStartEndTime = getTimeStamp() +"BG Master Data Load:: Error occured while loading master data" ;
		              //Log file Service Start and End Time
		              
		              logFileUpdate(g_ServiceStartEndTime);
		              
		            //Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
		              }
					
		});
		
		return isaassetFetchNeeded;
}



function fetchaassetLoad() {
	//alert("calling assets");
	
	if( g_isDebug == true)
    {
    //Service End Time
    var g_ServiceStartEndTime = getTimeStamp() +"BG Train Asset Load:: Started" ;
    //Log file Service Start and End Time
    
    logFileUpdate(g_ServiceStartEndTime);
    
  //Background log file
	logFileUpdate_Background(g_ServiceStartEndTime);
    }
	 var objMD = null;
	 
	 var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV");
	 
	 if(serviceURL == "Fail")
	 {
		return false;
	 }
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
	 	var deviceSyncDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
	 	
	 	/*
	 	 * Replace with below req URL once the service is ready.
	 	 */
	 	//alert(getUserName());
	 	var readRequestURL = "/AssetListSet?$filter=UserId eq '"+getUserName()+"' and Type eq 'T'";
		
		deviceSyncDataModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) { 
				objMD = oData.results;
				if( g_isDebug == true)
			    {
			    //Service End Time
			    var g_ServiceStartEndTime = getTimeStamp() +"BG Train Asset Load:: Ended" ;
			    //Log file Service Start and End Time
			    
			    logFileUpdate(g_ServiceStartEndTime);
			    
			  //Background log file
				logFileUpdate_Background(g_ServiceStartEndTime);
			    }
					
		},  function(oError){
					
			if( g_isDebug == true)
            {
            //Service End Time
            var g_ServiceStartEndTime = getTimeStamp() +"BG Train Asset Load:: Error occured while loading asset data" ;
            //Log file Service Start and End Time
            
            logFileUpdate(g_ServiceStartEndTime);
            
          //Background log file
			logFileUpdate_Background(g_ServiceStartEndTime);
            }
					
		});
		
		return objMD;
		
}

function fetchAssetsDepot()
{

	if( g_isDebug == true)
    {
    //Service End Time
    var g_ServiceStartEndTime = getTimeStamp() +"BG Depot Asset Load:: Started" ;
    //Log file Service Start and End Time
    
    logFileUpdate(g_ServiceStartEndTime);
    
  //Background log file
	logFileUpdate_Background(g_ServiceStartEndTime);
    }
	 
	 var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV");
	 
	 if(serviceURL == "Fail")
	 {
		return false;
	 }
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
	 	var deviceSyncDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
	 	
	 	/*
	 	 * Replace with below req URL once the service is ready.
	 	 */
	 	
	 	var readRequestURL = "/AssetListSet?$filter=UserId eq '"+getUserName()+"' and Type eq 'S'";
		
		deviceSyncDataModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) { 
				objMD = oData.results;
				
				if( g_isDebug == true)
	              {
				var g_ServiceStartEndTime = getTimeStamp() +"Depot Asset Load :: Ended" ;
			    //Log file Service Start and End Time
			    
			    logFileUpdate(g_ServiceStartEndTime);
			    
			  //Background log file
				logFileUpdate_Background(g_ServiceStartEndTime);
	              }
					
		},  function(oError){
					
					if( g_isDebug == true)
		              {
		              //Service End Time
		              var g_ServiceStartEndTime = getTimeStamp() +"BG Depot Asset Load:: Error occured while loading asset data" ;
		              //Log file Service Start and End Time
		              
		              logFileUpdate(g_ServiceStartEndTime);
		              
		            //Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
		              }
					
		});
		
		return objMD;
		

}
