/*
 * This method is calling Device Sync to see whether loading Master Data is required. Then loading master data.
 */
function tiggerMasterDataLoad(isForceLoad) {
	
	var isMasterDataFetchNeeded = false;
	
	if(!isForceLoad) {
		isMasterDataFetchNeeded = checkMasterData();
	}else {
		isMasterDataFetchNeeded = true;
	}
	
	var objJSONMD = null;
	//alert(isMasterDataFetchNeeded);
	if(isMasterDataFetchNeeded) {
		objJSONMD = fetchMasterDataLoad();
	}else {
		return;
	}
	
	/*
	 * Storing Master Data as Flat JSON File - Start
	 */
	if(isMasterDataFetchNeeded) {
	var objStringify = JSON.stringify(objJSONMD);
	
	var myJSONObject = {"JSONObj": objStringify
                             };
	
	if(g_runningInTablet || g_runningOnPhone) {
		saveOnMobileMD(objStringify);  
	}else {
		saveOnDesktopMD(myJSONObject);
	}
	/*
	 * Storing Master Data as Flat JSON File - End
	 */
	
	var path = getUserName()+"MasterData.json";
	
	//alert("Date:"+getDate);
	
	var checkFile = checkIfFileExists(path);
	//alert("check is "+checkFile);
//alert("Check Ex File:"+checkFile);
	if(checkFile == false )
		{
		saveOnMobileMD(objStringify);  
		}
	}
}

function saveOnMobileMD(objStringify) {

	var path = getUserName()+"MasterData.json";
		
	//alert("Date:"+getDate);
	
	var checkFile = checkIfFileExists(path);
	//alert("check is "+checkFile);
//alert("Check Ex File:"+checkFile);
	if(checkFile == true )
		{
		
		removeFile(path);
		//alert("now removed");
		
			//Create Log File First time
			/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.createWriter(function (writer) {
			    writer.onwrite = function(evt) {
			   
			        //alert("On Write");
			    };
			//writer.write("");
	
			} , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
			}
		
		*/}
	
	//logFileUpdate(path, objJSONMD);
	//alert("now creating");
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
	    FS.root.getFile(path, {create:true}, 
	        function(fileEntry) {
	            fileEntry.createWriter(
	                 function(writer) {
	                    writer.seek(writer.length);
	                    writer.write(objStringify);
	                    
	                 }, fail);
	        }, fail);
	}, fail);

function fail(){
//	alert("Service Failed");
	}
	
}

function saveOnDesktopMD(objJSONMD) {
	   
	var _handleSuccess = function(data, textStatus, jqXHR){
		//alert("JSON file saved successfully" + data);  
	}; 
	
	var _handleError = function(data){
		
	};
	
	
		jQuery.ajax({
			type: 'POST',
			url: "SaveJSONServlet?fileName=MasterData.json&operation=Write&Append=false",
			cache: false,
			dataType : "text",
			data: objJSONMD,
			success: _handleSuccess,
			error: _handleError
		});
}

function checkMasterData() {
	
	
	
	 var isMasterDataFetchNeeded = false;
	 
	 var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV");
	 
	 if(serviceURL == "Fail")
	 {
		return isMasterDataFetchNeeded;
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
			  var objPMConfig =  MD_PMConfig ;//JSON.parse(MD_PMConfig);
				
			  var MD_TrainAssetStructure = window.localStorage.getItem('MD_TrainAssetStructure');
			  var objTrainAssetStructure =  JSON.parse(MD_TrainAssetStructure);
				
			  var MD_SiteAssetStructure = window.localStorage.getItem('MD_SiteAssetStructure');
			  var objSiteAssetStructure =  JSON.parse(MD_SiteAssetStructure);
			  
			  if(objPMConfig == null ) {
				 // alert("9");
				  isMasterDataFetchNeeded = true;
			  }
		
			  var stringifiedPMConfig = JSON.stringify(oData.PMConfig);
			  var stringifiedTrainAssetStructure = JSON.stringify(oData.TrainAssetStructure);
			  var stringifiedSiteAssetStructure = JSON.stringify(oData.SiteAssetStructure);
			  /*alert(objPMConfig);
			  alert(stringifiedPMConfig);*/
			  if(objPMConfig != stringifiedPMConfig ) {
				 // alert("10");
				  isMasterDataFetchNeeded = true;
				  window.localStorage.setItem('MD_PMConfig', stringifiedPMConfig);
				  //window.localStorage.setItem('MD_TrainAssetStructure', stringifiedTrainAssetStructure);
				  //window.localStorage.setItem('MD_SiteAssetStructure', stringifiedSiteAssetStructure);
			  }
			  //alert("ret from master data.." +isMasterDataFetchNeeded );
			  return isMasterDataFetchNeeded;
					
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
		
		return isMasterDataFetchNeeded;
}



function fetchMasterDataLoad() {
	//alert("get master data");
	
	if( g_isDebug == true)
    {
	var g_ServiceStartEndTime = getTimeStamp() +"Master Load Started" ;
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
	 	
		var readRequestURL = "/AMSCENARIOSet?$filter=UserId eq '"+getUserName()+"'&$expand=Nav2Codes,Nav2Effect,Nav2Locations,Nav2NotifTypes,Nav2OrderTypes,Nav2PlannerGroup,Nav2PlantOrg,Nav2PMActivityTypes,Nav2PriorityTypes,Nav2ReasonCodes,Nav2ReasCdLinkages,Nav2HeadCodes,Nav2Char,Nav2CharVal,Nav2ChkTbl";
		deviceSyncDataModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) { 
				objMD = oData.results;
				if( g_isDebug == true)
	              {
				var g_ServiceStartEndTime = getTimeStamp() +"Master Load Ended" ;
			    //Log file Service Start and End Time
			    
			    logFileUpdate(g_ServiceStartEndTime);
			    
			  //Background log file
				logFileUpdate_Background(g_ServiceStartEndTime);
	              }
					
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
		
		return objMD;
		
}
