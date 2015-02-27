function getJobList()
{
	
	//removeAllFiles();
	if( g_isDebug == true)
    {
    //Service End Time
    var logInfo1 = getTimeStamp() +"Open Jobs Load started" ; 
    //Log file Service Start and End Time
   var g_ServiceStartEndTime =  logInfo1;
    logFileUpdate(g_ServiceStartEndTime);
    }
 var allJobsdata = [];	
 g_open = 0;
	g_closed = 0;
	g_ACT = 0;
	g_HOLD = 0;
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	
	/*
	 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
	 */
 	//var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, "hkandpal" , "cap123", null, true, true, false);
 	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
 	
 	/*
 	 * Replace with below req URL once the service is ready.
 	 */
 	//var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "' and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq '" + typeDesc + "'&$format=json";
 	
	//var readRequestURLOpen = "/OrderJobSet?$filter=UserId eq '"+getUserName()+"' and JobTypeO eq 'X'";
	//var readRequestURLOpen = "/OrderListSet?$filter=UserId eq '"+getUserName()+"' and JobTypeO eq 'X'";
 	var readRequestURLOpen = "/OrderListSet?$filter=UserId eq '"+getUserName()+"' and JobTypeC eq 'X' and JobTypeO eq 'X'";
	
	defectDataModel.read(readRequestURLOpen, null, null, false,   
          function(oData, oResponse) { 
		  var result = oData.results;
		  if( g_isDebug == true)
		    {
		    //Service End Time
		    var logInfo1 = getTimeStamp() +"Open Jobs Load Ended" ; 
		    //Log file Service Start and End Time
		    var g_ServiceStartEndTime =  logInfo1;
		    logFileUpdate(g_ServiceStartEndTime);
		    }
		  //alert("jojo..."+ result.length);
          if(result.length > 0){
				var result = oResponse.body; //Getting JSON response body
			
			var jsonObj = JSON.parse(result); // Parsing the JSON Object
			
			var result = jsonObj.d; // Taking the result inside namespace d
			
			for ( var count = 0 ; count < result.results.length ;count ++ )
				{
				
				var data = "";
				if (undefined == window.localStorage.getItem( result.results[count].OrderNo + "_" + result.results[count].ActivityNo )) {

					 data = { "OrderNo" : result.results[count].OrderNo,
							"ActivityNo" : result.results[count].ActivityNo,
							"CurrentStatus" : result.results[count].CurrentStatus,
							"Timestamp" : result.results[count].Timestamp,
							/*"EarliestStartDate" : result.results[count].EarliestStartDate,
							"EarliestFinishDate" : result.results[count].CurrentStatus,
							"EarliestFinishDate" : result.results[count].EarliestFinishDate,
							"StandardTextKey" : result.results[count].StandardTextKey,
							"CarId" : result.results[count].CarId,
							"CarZone" : result.results[count].CarZone,
							"CarSystem" : result.results[count].CarSystem,
							"RoadDesc" : result.results[count].RoadDesc,
							"Equipment" : result.results[count].Equipment,
							"EquipmentDesc" : result.results[count].EquipmentDesc,
							"SystemStatus" : result.results[count].SystemStatus*/
							
							
							};
					}
				
				else
					{
					 data = {
							 "OrderNo" : result.results[count].OrderNo,
								"ActivityNo" : result.results[count].ActivityNo,
								"CurrentStatus" :  window.localStorage.getItem(result.results[count].OrderNo + "_" + result.results[count].ActivityNo ),
										//"Priority" : result.results[count].Priority,
										"Timestamp" : result.results[count].Timestamp,
										/*"EarliestStartDate" : result.results[count].EarliestStartDate,
										"EarliestFinishDate" : result.results[count].CurrentStatus,
										"EarliestFinishDate" : result.results[count].EarliestFinishDate,
										"StandardTextKey" : result.results[count].StandardTextKey,
										"CarId" : result.results[count].CarId,
										"CarZone" : result.results[count].CarZone,
										"CarSystem" : result.results[count].CarSystem,
										"RoadDesc" : result.results[count].RoadDesc,
										"Equipment" : result.results[count].Equipment,
										"EquipmentDesc" : result.results[count].EquipmentDesc,
										"SystemStatus" : result.results[count].SystemStatus ,
										"CurrentStatus" :  window.localStorage.getItem(result.results[count].OrderNo + "_" + result.results[count].ActivityNo*/ //)
								};
					}
				
				
				allJobsdata.push(data);
				}
			
			
			
        	
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
							//sap.m.MessageBox.show(
							//messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
							}
							catch(e)
							{//sap.m.MessageBox.show(e.message+ " " +" "+" ",
							//sap.m.MessageBox.Icon.ERROR,"Error");
							break;
							}}}catch(e){sap.m.MessageBox.show(
                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
							if( g_isDebug == true)
				              {
				              //Service End Time
				              var logInfo1 = getTimeStamp() +"Open Jobs Load Failed" ; 
				              //Log file Service Start and End Time
				              var g_ServiceStartEndTime = logInfo1;
				              logFileUpdate(g_ServiceStartEndTime);
				              }
							
							
							}
				
  });
	if( g_isDebug == true)
    {
    //Service End Time
    var logInfo1 = getTimeStamp() +"Closed Jobs Load Started" ; 
    //Log file Service Start and End Time
    var g_ServiceStartEndTime =  logInfo1;
    logFileUpdate(g_ServiceStartEndTime);
    }
	/*var readRequestURLComp = "/OrderJobSet?$filter=UserId eq '"+getUserName()+"' and JobTypeC eq 'X'";
	//alert(allJobsdata.length);*/
	
	var jobTimeArray = [];
	for (var int = 0; int < allJobsdata.length ; int++) {
		var jobTimeFromDervice = allJobsdata[int].Timestamp ;
		var regex = /-?\d+/;
        var matches = regex.exec(jobTimeFromDervice);
		if ( undefined == window.localStorage.getItem("JOBTIME"))
			{
			//alert("1");
			getJobDetails(allJobsdata[int].OrderNo , allJobsdata[int].ActivityNo);
			}
		
		else
			{
			
			
           // alert(matches);
			//alert("2");
			var jobTimeData = JSON.parse( window.localStorage.getItem("JOBTIME"));
			var jobTimeDataArray = jobTimeData.jobTimes ;
		//	alert(jobTimeDataArray);
			
			if ( jobTimeDataArray.indexOf(allJobsdata[int].OrderNo+allJobsdata[int].ActivityNo+matches) == -1)
				{
				//alert(allJobsdata[int].OrderNo , allJobsdata[int].ActivityNo);
				getJobDetails(allJobsdata[int].OrderNo , allJobsdata[int].ActivityNo);
				//alert("now wriring..  " + allJobsdata[int].OrderNo+allJobsdata[int].ActivityNo+matches);
				
				}
				
			
			}
		jobTimeArray.push(allJobsdata[int].OrderNo+allJobsdata[int].ActivityNo+matches);

				if ("DISP" == allJobsdata[int].CurrentStatus  ||
					"HOLD" == allJobsdata[int].CurrentStatus ||
					"ACPT" == allJobsdata[int].CurrentStatus ) {
					g_open++;
					//jobsMemArrayA.push(allJobsdata[int-1].OrderNo+"_"+allJobsdata[int-1].ActivityNo);
				} else if ("COMP" == allJobsdata[int].CurrentStatus) {
					g_closed++;
					//jobsMemArrayC.push(allJobsdata[int].OrderNo+"_"+allJobsdata[int].ActivityNo);
				}

				if ("ACPT" == allJobsdata[int].CurrentStatus) {
					g_ACT++;
				}

				if ("HOLD" == allJobsdata[int].CurrentStatus) {
					g_HOLD++;
				}
				
				//alert(g_open);
				//alert(g_closed);

			}
     var dataForLocal = {"jobTimes" : jobTimeArray};
	 window.localStorage.setItem("JOBTIME" , JSON.stringify(dataForLocal));	
	sap.ui.getCore().byId("mob03a").setCounter(g_open);
	sap.ui.getCore().byId("mob03c").setCounter(g_closed);
	//alert(g_open);
	//alert(g_closed);
		
	var myJSONObject = {"myData": JSON.stringify(allJobsdata)};
	//alert(allJobsdata);
		//alert("220");
		if(g_runningInTablet || g_runningOnPhone) {
			
			//alert("223");

			var path = getUserName()+"AllJobs.json";
			//var path = "\\HRE\\AllJobs.json"
			
			var checkFile = checkIfFileExists(path);
			//alert("Check Ex File:"+checkFile);
				if(checkFile == true )
					{
					//alert("232");
					removeFile(path);
					}/*
			//alert("Date:"+getDate);
			
			//var checkFile = checkIfFileExists(path);
		//alert("Check Ex File:"+checkFile);
			//if(checkFile == false )
				//{
					//Create Log File First time
					/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
					    
					    fileSystem.root.getFile(path, {create: true}, function (fileEntry) {
					    fileEntry.createWriter(function (writer) {
					    writer.onwrite = function(evt) { 
					    	writer.seek(writer.length);
		                writer.write(JSON.stringify(allJobsdata));
		                };
					//writer.write("");
			
					} , fail);
					}, fail);
			        }, fail);
			
					function fail()
					{
					}*/
			
          // alert(allJobsdata);
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
			    FS.root.getFile(path, {create:true}, 
			        function(fileEntry) {
			            fileEntry.createWriter(
			                 function(writer) {
			                    writer.seek(writer.length);
			                    writer.write(JSON.stringify({"allJobs" : allJobsdata}));
			                    
			                 }, fail);
			        }, fail);
			}, fail);

		function fail(){
		//	alert("Service Failed");
			}

				
			//	}
			
			//logFileUpdate(path, JSON.stringify(allJobsdata));
				//}
			

			
		}else {
			//saveOnDesktopMD(myJSONObject);
		
		
		//dataForFile =  "Ekdum jhakaas hai re ";
		$.ajax({
		  url: "FileHandle?readOrWrite=write&fileName=AllJobs",
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
		}
}

function getJobDetails(orderNo , activityNo)
{
	
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
if( g_isDebug == true)
{
//Service End Time
var logInfo1 = getTimeStamp() +" Jobs Details Load Start for " + orderNo +"_" + activityNo; 
//Log file Service Start and End Time
var g_ServiceStartEndTime =  logInfo1;
logFileUpdate(g_ServiceStartEndTime);
}
	
	/*
	 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
	 */
 	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
 	
 	/*
 	 * Replace with below req URL once the service is ready.
 	 */
 	//var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "' and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq '" + typeDesc + "'&$format=json";
 	
	var readRequestURLOpen = "/OrderJobSet?$filter=OrderNo eq '"+orderNo+"' and ActivityNo eq '"+activityNo+"'&$expand=NavPRT,NavComp,NavDoc";
	
	defectDataModel.read(readRequestURLOpen, null, null, false,   
          function(oData, oResponse) { 
		  var result = oData.results;
	
          if(result.length > 0){
				var result = oResponse.body; //Getting JSON response body
			
			var jsonObj = JSON.parse(result); // Parsing the JSON Object
			
			var result = jsonObj.d; // Taking the result inside namespace d
			
			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +" Jobs Details Load End for " + orderNo +"_" + activityNo; 
			//Log file Service Start and End Time
			var g_ServiceStartEndTime =  logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
			
			/*for ( var count = 0 ; count < result.results.length ;count ++ )
				{*/
				
				var dataHeader = { /*"OrderNo" : result.results[0].OrderNo,
									"ActivityNo" : result.results[0].ActivityNo,
									"ActivityType" : result.results[0].ActivityType,
									"PersonalNo" : result.results[0].PersonalNo*/
									
									"OrderNo" : result.results[0].OrderNo,
							        "ActivityNo" : result.results[0].ActivityNo,
							        "OrderType" : result.results[0].OrderType,
							        "MaintenanceActivityType" : result.results[0].MaintenanceActivityType,
							        "MaintenanceActivityTypeDesc" : result.results[0].MaintenanceActivityTypeDesc,
							        "PlanningPlant" : result.results[0].PlanningPlant,
							        "PersonalNo" : result.results[0].PersonalNo,
							        "PersonShort" : result.results[0].PersonShort,
							        "PersonShortText" : result.results[0].PersonShortText,
							        "CurrentStatus" : result.results[0].CurrentStatus,
							        "CurrentStatusText" :result.results[0].CurrentStatusText,
							        "TrainSet" : result.results[0].TrainSet,
							        "TrainSetDesc" : result.results[0].TrainSetDesc,
							        "CarId" : result.results[0].CarId,
							        "CarDesc" : result.results[0].CarDesc,
							        "CarZone" : result.results[0].CarZone,
							        "CarZoneDesc" : result.results[0].CarZoneDesc,
							        "CarSystem" : result.results[0].CarSystem,
							        "CarSystemText" : result.results[0].CarSystemText,
							        "CurrentStat" : result.results[0].CurrentStat,
							        "SystemStatus" : result.results[0].SystemStatus,
							        "UserStatus" : result.results[0].UserStatus,
							        "WorkCenter" : result.results[0].WorkCenter,
							        "WorkCenterDesc" : result.results[0].WorkCenterDesc,
							        "Plant" : result.results[0].Plant,
							        "PlantDesc" : result.results[0].PlantDesc,
							        "ControlKey" : result.results[0].ControlKey,
							        "ControlKeyDesc" : result.results[0].ControlKeyDesc,
							        "StandardTextKey" : result.results[0].StandardTextKey,
							        "OpearionText" : result.results[0].OpearionText,
							        "OperationLongText" : result.results[0].OperationLongText,
							        "JobType" : result.results[0].JobType,
							        "Priority" : result.results[0].Priority,
							        "Revision" : result.results[0].Revision,
							        "RevisionDesc" : result.results[0].RevisionDesc,
							        "RevisionPlant" : result.results[0].RevisionPlant,
							        "RevisionWorkCenter" : result.results[0].RevisionWorkCenter,
							        "RevisionType" : result.results[0].RevisionType,
							        "Road" : result.results[0].Road,
							        "RoadDesc" : result.results[0].RoadDesc,
							        "FunctionLoc" : result.results[0].FunctionLoc,
							        "FunctionLocDesc" : result.results[0].FunctionLocDesc,
							        "Equipment" : result.results[0].Equipment,
							        "EquipmentDesc" : result.results[0].EquipmentDesc,
							        "MaterialNo" : result.results[0].MaterialNo,
							        "MaterialDesc" : result.results[0].MaterialDesc,
							        "OrderObjectNo" : result.results[0].OrderObjectNo,
							        "OperationObjectNo" : result.results[0].OperationObjectNo,
							        "EarliestStartDate" : result.results[0].EarliestStartDate,
							        "EarliestStartTime" : result.results[0].EarliestStartTime,
							        "EarliestFinishDate" : result.results[0].EarliestFinishDate,
							        "EarliestFinishTime" : result.results[0].EarliestFinishTime,
							        "LatestStartDate" : result.results[0].LatestStartDate,
							        "LatestStartTime" : result.results[0].LatestStartTime,
							        "LatestFinishDate" : result.results[0].LatestFinishDate,
							        "LatestFinishTime" : result.results[0].LatestFinishTime,
							        "Suitability" : result.results[0].Suitability,
							        "CalculationKey" : result.results[0].CalculationKey,
							        "ActivityType" : result.results[0].ActivityType,
							        "DurationNormal" : result.results[0].DurationNormal,
							        "DurationNormalUnit" :result.results[0].DurationNormalUnit,
							        "WorkActitivty" : result.results[0].WorkActitivty,
							        "WorkActivityUnit" : result.results[0].WorkActivityUnit,
							        "NotificationNo" : result.results[0].NotificationNo,
							        "NotificationType" : result.results[0].NotificationType,
							        "ManufacturerSerialNo":result.results[0].ManufacturerSerialNo,
                                    "EquipmentPosition":result.results[0].EquipmentPosition,
                                    "SuperordinateEquipment":result.results[0].SuperordinateEquipment,
                                    "SuperordinateEquipmentDesc":result.results[0].SuperordinateEquipmentDesc,
                                    "NotificationText":result.results[0].NotificationText,
                                    "NotificationLongText" : result.results[0].NotificationLongText

							};
				
				var dataComp = result.results[0].NavComp.results ;
			//	var dataCo = result.results[0].NavComp.results ;
				var dataTools = result.results[0].NavPRT.results ;
				
				var dataDocs= result.results[0].NavDoc.results;


				var allData = {

				"dataHeader" : dataHeader,

				"dataComp" : dataComp,

				"dataTools" : dataTools,

				"dataDocs": dataDocs


				};

				var myJSONObject = {"myData" : JSON.stringify(allData)};
				if(g_runningInTablet || g_runningOnPhone) {
					


					var path = getUserName()+"Job_"+orderNo+"_"+activityNo+".json";
					//alert("Date:"+getDate);
					
					var checkFile = checkIfFileExists(path);
				//alert("Check Ex File:"+checkFile);
					if(checkFile == true )
						{
						removeFile(path);
						}
							//Create Log File First time
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
					
					//logFileUpdate(path, JSON.stringify(allData));
						

						


						//var path = "AllJobs.json";
						//alert("Date:"+getDate);
						
						//var checkFile = checkIfFileExists(path);
					//alert("Check Ex File:"+checkFile);
						//if(checkFile == false )
							//{
								//Create Log File First time
								/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
								    
								    fileSystem.root.getFile(path, {create: true}, function (fileEntry) {
								    fileEntry.createWriter(function (writer) {
								    writer.onwrite = function(evt) { 
								    	writer.seek(writer.length);
					                writer.write(JSON.stringify(allJobsdata));
					                };
								//writer.write("");
						
								} , fail);
								}, fail);
						        }, fail);
						
								function fail()
								{
								}*/
						
			          // alert(allJobsdata);
					//alert("now wriring");
					var finalData = [JSON.stringify({"allJobs" : allData})];
						window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
						    FS.root.getFile(path, {create:true}, 
						        function(fileEntry) {
						            fileEntry.createWriter(
						                 function(writer) {
						                    writer.seek(writer.length);
						                    writer.write(JSON.stringify(allData));
						                    
						                 }, fail);
						        }, fail);
						}, fail);

					function fail(){
					//	alert("Service Failed");
						}

							
						//	}
						
						//logFileUpdate(path, JSON.stringify(allJobsdata));
							//}
						

						
					
						
          

					
				}else {
				
				$.ajax({
					  url: "FileHandle?readOrWrite=write&fileName=Job_"+orderNo+"_"+activityNo,
					  type: "post",
					  dataType: "text",
						//processData: false,
						data: myJSONObject,
					  success: function(text){
					      //alert("success");
					     //  $("#result").html('submitted successfully');
					  },
					  error:function(){
					      alert("failure");
					     // $("#result").html('there is error while submit');
					  }   
					});
				}
				
					
				//}
			
			
			
        	
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
							//sap.m.MessageBox.show(
							//messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
							}
							catch(e)
							{//sap.m.MessageBox.show(e.message+ " " +" "+" ",
							//sap.m.MessageBox.Icon.ERROR,"Error");
							break;
							}}}catch(e){sap.m.MessageBox.show(
                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
							if( g_isDebug == true)
				              {
				              //Service End Time
				              var logInfo1 = getTimeStamp() +"Jobs Load Details FAILED" ; 
				              //Log file Service Start and End Time
				              var g_ServiceStartEndTime =  logInfo1;
				              logFileUpdate(g_ServiceStartEndTime);
				              }
							
							
							}
				
  });
	
	
	
}


