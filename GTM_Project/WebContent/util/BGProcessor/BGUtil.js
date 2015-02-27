/**
 * This class having multiple functions that support various Background Jobs Queue & Retry Logic implemented.
 */

/*
 * This method id responsible of removing Success Notification greater than 24 hours
 */
function removeSuccessNotification() {
	var notiNumRcvd = new Array();
	var notiQueue = window.localStorage.getItem('NOTILIST');
	notiNumRcvd =  JSON.parse(notiQueue);
	
	var finalNotiNumList =  new Array();
	
	var isUpdated = false;
	
	if(notiNumRcvd==null) {
		return null;
	}
	
	for(var i=0;i<notiNumRcvd.length;i++) {
		var notiItem = window.localStorage.getItem(notiNumRcvd[i]);
		var notiJSON = JSON.parse(notiItem);
		
		var currDate = new Date();
		var timeMilli = currDate.getTime();
		
		if(notiJSON.status == "Success") {
			var createdTime = parseInt(notiJSON.createdTime);
			var timeElapsed = (timeMilli-createdTime)/(1000*60); //In Minute
	
			var numOfRetry = 0;
			
			if(typeof notiJSON.numOfRetry != 'undefined' && notiJSON.numOfRetry.trim().length != 0) {
				numOfRetry = parseInt(notiJSON.numOfRetry);
			}
				
			var lastRetried = createdTime;
			
			if(typeof notiJSON.lastRetried != 'undefined') {
				lastRetried = parseInt(notiJSON.lastRetried);
			}
			
			var timeDiff = (timeMilli-lastRetried)/(1000*60); //In Minute
			var timeElapsedInMin = Math.ceil(timeDiff);
			
			
			if(timeElapsedInMin < (60 * 24)) { //Time Elapsed is more than 24 hours
				finalNotiNumList.push(notiNumRcvd[i]);
			}else {
				window.localStorage.removeItem(notiNumRcvd[i]);
				isUpdated = true;
			}
		
		}
	}
	
	if(isUpdated) {
		var notiNumRcvdString = 	JSON.stringify(finalNotiNumList);
		window.localStorage.setItem("NOTILIST", notiNumRcvdString);
		return finalNotiNumList;
	}else {
		return notiNumRcvd;
	}
	
}

/*
 * This method fetches all eligible Jobs from local Queue for MOB15 and set the status for child worker to pick the job.
 */
function tiggerRetryJobsMOB15() {
	
	var notiNumRcvd = removeSuccessNotification();
	
	if(notiNumRcvd==null) {
		return false;
	}
	
	if(typeof notiQueue == "undefined" || notiQueue == null) {
		//Terminate all workers
	}

	for(var i=0;i<notiNumRcvd.length;i++) {
		var notiItem = window.localStorage.getItem(notiNumRcvd[i]);
		var notiJSON = JSON.parse(notiItem);
		
		
		var currDate = new Date();
		var timeMilli = currDate.getTime();
		
		if(notiJSON == null || typeof notiJSON == 'undefined') {
			continue;
		}
		
		if(notiJSON.status != "Success") {
			var createdTime = parseInt(notiJSON.createdTime);
			var timeElapsed = (timeMilli-createdTime)/(1000*60); //In Minute

			var numOfRetry = 0;
			
			if(typeof notiJSON.numOfRetry != 'undefined' && notiJSON.numOfRetry.trim().length != 0) {
				numOfRetry = parseInt(notiJSON.numOfRetry);
			}
				
			var lastRetried = createdTime;
			
			if(typeof notiJSON.lastRetried != 'undefined') {
				lastRetried = parseInt(notiJSON.lastRetried);
			}
			
			var timeDiff = (timeMilli-lastRetried)/(1000*60); //In Minute
			var timeElapsedInMin = Math.ceil(timeDiff);
			
			/*
			 * Rule eligible for Retry - Start
			 */
			var isEligibleForRetry = false;
			//Rule 1 - Job stuck "InProgress" more than 10 minute
			if(notiJSON.status != null && typeof notiJSON.status != 'undefined') {
				if(notiJSON.status.endsWith("-Started") || notiJSON.status.startsWith("InProgress")) {
					if(timeElapsedInMin>=10) {
						isEligibleForRetry = true;
					}
				}
			}
			
			//Rule 2 - Job status "Failed"/"Saved"
			if(notiJSON.status == "Failed" || notiJSON.status == "Saved" || notiJSON.status.endsWith("Failed")) {
				isEligibleForRetry = true;
			}
			
			/*
			 * Rule eligible for Retry - End
			 */
			
			/*
			 * Rule for priority - Start
			 */
			if(isEligibleForRetry) {
				//Rule 1 - Number of Retry 0 to 3
				if(numOfRetry <= 3) {
					//Setting status for Priority Worker 1
					notiJSON.status = "InProgressP1";
					
					var stringifiedNoti = JSON.stringify(notiJSON);
					window.localStorage.removeItem(notiNumRcvd[i]);
					window.localStorage.setItem(notiNumRcvd[i] , stringifiedNoti);
					
				}else if(numOfRetry <= 6) {
					//Setting status for Priority Worker 2
					notiJSON.status = "InProgressP2";
					
					var stringifiedNoti = JSON.stringify(notiJSON);
					window.localStorage.removeItem(notiNumRcvd[i]);
					window.localStorage.setItem(notiNumRcvd[i] , stringifiedNoti);
				}else if(numOfRetry <= 10) {
					//Setting status for Priority Worker 3
					notiJSON.status = "InProgressP3";
					
					var stringifiedNoti = JSON.stringify(notiJSON);
					window.localStorage.removeItem(notiNumRcvd[i]);
					window.localStorage.setItem(notiNumRcvd[i] , stringifiedNoti);
				}else {
					//Setting status to "Permanent Failed"
				}
			}
			
			/*
			 * Rule for priority - End
			 */
			
		}
	}
}

function drop3QueueRead() {
	
	var items = window.localStorage.getItem('TRQ');
	var transactions =  JSON.parse(items);
	
	var eligibleJobs = fetchEligibleDrop3JobsInOrder(transactions);
	
	for (var index = 0 ; index < eligibleJobs.length ; index ++)
	{
			var jobTran = eligibleJobs[index];
			readAndProcessTransaction(jobTran);
	}
}



function removeSuccessDrop3Job() {

	var items = window.localStorage.getItem('TRQ');
	var transactions =  JSON.parse(items);
	
	if(transactions == null) {
		return []; 
	}
	
	var actualJobs = [];
	
	for (var index = 0 ; index < transactions.length ; index ++)
	{
		var timeElapsedInMin = 0;
		
		/*
		 * Removal of all Faulty retry records after 24 hours - Start
		 */
		if(typeof transactions[index].createdTime == 'undefined') {
			isEligibleForRetry = true;
		}else {
			var createdTime = parseInt(transactions[index].createdTime);

			var lastRetried = createdTime;
						
			if(typeof transactions[index].lastRetried != 'undefined') {
				lastRetried = parseInt(transactions[index].lastRetried);
			}

			var timeDiff = (timeMilli-lastRetried)/(1000*60); //In Minute
			timeElapsedInMin = Math.ceil(timeDiff);
		}
		
		if(timeElapsedInMin >= (1000 * 60 * 24)) { // More than 24 hours
			continue;
		}
		
		/*
		 * Removal of all Faulty retry records after 24 hours - End
		 */
		
		if(typeof transactions[index].retryStatus != 'undefined' && transactions[index].retryStatus == "Success") {

			var currDate = new Date();
			var timeMilli = currDate.getTime();
			
			if(timeElapsedInMin <= (1000 * 60 * 60)) { //Elapsed time one hour
				actualJobs.push(transactions[index]);
			}
			
		}else {
			actualJobs.push(transactions[index]);
		}
		
	}
	
	if(actualJobs.length > 0) {
		window.localStorage.setItem('TRQ', JSON.stringify(actualJobs));
	}

	return actualJobs;
}


function readAndProcessTransaction(jobTran) {
	
	

	if(g_runningInTablet || g_runningOnPhone) 
	{readLocalFileOnDevice(jobTran.Key+".json", function(funCall){
		
		 var objJSONTran = JSON.parse(funCall);
	      var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
	      processTransactionDrop3(objJobToProcess);
	      
	  	//alert(funCall); // this is where you get the return value
	});}else {
	$.ajax({
		  url: "SaveJSONServlet?operation=Read&fileName="+ jobTran.Key +".json" + "&Append=false",
		  type: "post",
		  dataType: "text",
		  success: function(text){
		      var objJSONTran = JSON.parse(text);
		      var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
		      processTransactionDrop3(objJobToProcess);
		  },
		  error:function(){
		  }   
		}); 
		}
	
	
	
	/*$.ajax({
		  url: "SaveJSONServlet?operation=Read&fileName="+ jobTran.Key +".json" + "&Append=false",
		  type: "post",
		  dataType: "text",
		  success: function(text){
		      alert("success");
		      var objJSONTran = JSON.parse(text);
		      var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
		      processTransactionDrop3(objJobToProcess);
		  },
		  error:function(){
		  }   
		}); */
}

function processTransactionDrop3(objJobToProcess) {
		//alert(objJobToProcess.Transaction);
	if (objJobToProcess.Transaction ==  "CRNOTI") {
		createNotiFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "CRNOTID") {
		createDepotNotiFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "COMP") {
		completeJobFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "INSTALL") {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		installJobFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "REMOVE") {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		removeAssetFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "MSR") {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		createMeasureFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "EXTEND") {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		changeDurationFromQueue(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}else if (objJobToProcess.Transaction ==  "HOLD" ||  objJobToProcess.Transaction ==  "CANC" || objJobToProcess.Transaction ==  "REJT" ||
			objJobToProcess.Transaction ==  "ACPT" ) {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		ahrJobFromQueue(objJobToProcess , objJobToProcess.Transaction); //Go to Worker_Drop3HookUp.js
	}
	else if ( objJobToProcess.Transaction ==  "SPLT" ) {
		//updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		splitJobFromQueue(objJobToProcess , objJobToProcess.Transaction); //Go to Worker_Drop3HookUp.js
	}
	else if (objJobToProcess.Transaction ==  "CHNGASST") {
		updateTransactionQueueDrop3(objJobToProcess.Key, "InProgress", "");
		PostChangeAsset(objJobToProcess); //Go to Worker_Drop3HookUp.js
	}
}

function updateTransactionQueueDrop3(key, tranStatus, errorMsg) {
	if (g_isDebug == true) {
		// Service End Time
		var logInfo = getTimeStamp() + "BG Processor:: updateTransactionQueueDrop3: key: " + key +" tranStatus:: " + tranStatus + " errorMsg: " + errorMsg;
		var g_ServiceStartEndTime = logInfo;
		logFileUpdate(g_ServiceStartEndTime);
		
		//Background log file
		logFileUpdate_Background(g_ServiceStartEndTime);
	}
	var items = window.localStorage.getItem('TRQ');
	var transactions =  JSON.parse(items);
	
	var updatedJobs = [];
	var isUpdated = false;
	
	for (var index = 0 ; index < transactions.length ; index ++)
	{
		var jobTran = transactions[index];
		
		if(jobTran.Key == key) {
			isUpdated = true;
			
			if(typeof jobTran.retryStatus != 'undefined' && jobTran.retryStatus == "InProgress") {
				jobTran.retryStatus = tranStatus;
				jobTran.response = errorMsg;
				
				var currDate = new Date();
				var timeMilli = currDate.getTime();
				
				jobTran.lastRetried = timeMilli; 
				
				if(typeof jobTran.numOfRetry != 'undefined' && jobTran.numOfRetry.trim().length != 0) {
					var retry = parseInt(jobTran.numOfRetry) + 1;
					jobTran.numOfRetry = retry.toString();
				}else {
					jobTran.numOfRetry = "1";
				}
			}else {
				jobTran.retryStatus = tranStatus;
				jobTran.response = errorMsg;
			}
		}
		
		updatedJobs.push(jobTran);
	}
	
	if(isUpdated) {
		window.localStorage.setItem('TRQ', JSON.stringify(updatedJobs));
	}
}

function fetchEligibleDrop3JobsInOrder(fetchJobs) {
	var transactions =  fetchJobs
	
	if(transactions == null) {
		return []; 
	}
	
	var sortedTrans = transactions.sort(function(a,b) { return parseInt(a.Key) - parseInt(b.Key)} );
	
	var eligibleJob = [];
	
	for (var index = 0 ; index < sortedTrans.length ; index ++)
	{
		var isEligibleForRetry = false;
		
		var timeElapsedInMin = 0;
		
		if(typeof sortedTrans[index].retryStatus == 'undefined' || sortedTrans[index].retryStatus != "Success") {
			
			if(typeof sortedTrans[index].retryStatus != 'undefined' && sortedTrans[index].retryStatus == "ForceRetry") {
				isEligibleForRetry = true; //Force Retry
			}else if(typeof sortedTrans[index].lastRetried != 'undefined') {
				var numOfRetry = parseInt(sortedTrans[index].numOfRetry);
				if(numOfRetry >= 10) {
					continue;
				}
			}
			

			var currDate = new Date();
			var timeMilli = currDate.getTime();
			
			if(typeof sortedTrans[index].createdTime == 'undefined') {
				isEligibleForRetry = true;
			}else {
				var createdTime = parseInt(sortedTrans[index].createdTime);

				var lastRetried = createdTime;
							
				if(typeof sortedTrans[index].lastRetried != 'undefined') {
					lastRetried = parseInt(sortedTrans[index].lastRetried);
				}

				var timeDiff = (timeMilli-lastRetried)/(1000*60); //In Minute
				timeElapsedInMin = Math.ceil(timeDiff);
			}
			
			
						
			/*
			 * Rule eligible for Retry - Start
			 */
			
			//Rule 1 - Job stuck "InProgress" more than 10 minute
			if(typeof sortedTrans[index].retryStatus != 'undefined' && sortedTrans[index].retryStatus != null) {
				if(sortedTrans[index].retryStatus.startsWith("InProgress")) {
					if(timeElapsedInMin>=10) {
						isEligibleForRetry = true;
					}
				}
			
				//Rule 2 - Job status "Failed"/"Saved"
				if(sortedTrans[index].retryStatus == "Failed" || sortedTrans[index].retryStatus == "Saved") {
					isEligibleForRetry = true;
				}
				
				/*
				 * Rule eligible for Retry - End
				 */
			}
			
		}
		
		if(isEligibleForRetry) {
			eligibleJob.push(sortedTrans[index]);
		}
	}
	
	return eligibleJob;
}

function forceRetryDrop3Jobs(key) {
	updateTransactionQueueDrop3(key, "ForceRetry", ""); //Force Retry
}

/*
 * Pick the passed status and process the notification
 */
function triggerMOB15Notification(priorityStatus) {
	
	
	
	
	var notiNumRcvd = new Array();
	var notiQueue = window.localStorage.getItem('NOTILIST');
	notiNumRcvd =  JSON.parse(notiQueue);
	
	if(notiNumRcvd==null) {
		return false;
	}
	
	for(var i=0;i<notiNumRcvd.length;i++) {
		var notificationNo = notiNumRcvd[i];
		var notiItem = window.localStorage.getItem(notificationNo);
		var notiJSON = JSON.parse(notiItem);
		
		if(notiJSON == null || typeof notiJSON == 'undefined') {
			continue;
		}
		
		if(notiJSON.status == priorityStatus) {
			
			if(notiJSON.title.indexOf("Q1") != -1) {
				saveNotiDeatils(notificationNo, "Q1", priorityStatus + "-Started", null, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("Q3") != -1) {
				saveNotiDeatils(notificationNo, "Q3", priorityStatus + "-Started", null, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("F2") != -1) {
				saveNotiDeatils(notificationNo, "F2", priorityStatus + "-Started", null, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("F3") != -1) {
				saveNotiDeatils(notificationNo, "F3", priorityStatus + "-Started", null, null, true); //Saving Notification
			}
			
			
			//Service Start Time
			var logInfo = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Start" ;

	    	var serviceURL = getUrlForBG("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
	    	if(serviceURL == "Fail")
			 {
	    		return false;
			 }
	  		var oDataCreateNotiService = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	  		var readRequestURL = "/TasklistCollection";
	  		
	  		oDataCreateNotiService.setHeaders({
	  			"X-Requested-With" : "XMLHttpRequest",
	  			"Content-Type" : "application/json",
	  			"X-CSRF-Token" : "Fetch",
	  			"DataServiceVersion" : "2.0"
	  		});
			
			
	  		var createReqData = constructNotiReq(notiJSON); //Passing Title and get the request data
			

	  		oDataCreateNotiService.create(readRequestURL, createReqData, null, 
	  				function(oResponse) {
	  			
	        var notiNumber = oResponse.NotificationNo ; 
	        
	        if(notiJSON.title.indexOf("Q1") != -1) {
				saveNotiDeatils(notificationNo, "Q1", "Success", notiNumber, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("Q3") != -1) {
				saveNotiDeatils(notificationNo, "Q3", "Success", notiNumber, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("F2") != -1) {
				saveNotiDeatils(notificationNo, "F2", "Success", notiNumber, null, true); //Saving Notification
			}else if(notiJSON.title.indexOf("F3") != -1) {
				saveNotiDeatils(notificationNo, "F3", "Success", notiNumber, null, true); //Saving Notification
			}
	        
			if( g_isDebug == true)
				{
				 //Service End Time
		        var logInfo1 = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Finish" ;
				//Log file Service Start and End Time
				var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				logFileUpdate(g_ServiceStartEndTime);
				
				//Background log file
				logFileUpdate_Background(g_ServiceStartEndTime);
				}
	    	  },
	  		
	    	   function(oError){
	    		 
	    		  try
					{
					var data = JSON.parse(oError.response.body);
					
					for(var event in data)
					{
						var dataCopy = data[event];	
						
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						
						if(notiJSON.title.indexOf("Q1") != -1) {
							saveNotiDeatils(notificationNo, "Q1", priorityStatus + "Failed", null, messageFromBackend, true); //Saving Notification
						}else if(notiJSON.title.indexOf("Q3") != -1) {
							saveNotiDeatils(notificationNo, "Q3", priorityStatus + "Failed", null, messageFromBackend, true); //Saving Notification
						}else if(notiJSON.title.indexOf("F2") != -1) {
							saveNotiDeatils(notificationNo, "F2", priorityStatus + "Failed", null, messageFromBackend, true); //Saving Notification
						}else if(notiJSON.title.indexOf("F3") != -1) {
							saveNotiDeatils(notificationNo, "F3", priorityStatus + "Failed", null, messageFromBackend, true); //Saving Notification
						}
						
						if( g_isDebug == true)
						{
						 //Service End Time
				        var logInfo1 = 	getTimeStamp() +"MOB15-Background Processor:: Service Error:" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo1 + "\n" + messageFromBackend;
						logFileUpdate(g_ServiceStartEndTime);
						
						//Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
						}
						}
						catch(e)
						{
							var errorMsg = data.error.message.value;
							
							if( g_isDebug == true)
							{
							 //Service End Time
					        var logInfo1 = 	getTimeStamp() +"MOB15-Background Processor:: Service Error:" ;
							//Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo1 + "\n" + errorMsg;
							logFileUpdate(g_ServiceStartEndTime);
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
							}
							break;
						}
					}
					}
			 
				catch(e)
					{
					
					}
				});
		}
	}
}


function constructNotiReq(notiJSON) {
	var createReqData = "";
	if(notiJSON.title.indexOf("Q1") != -1) {
		var matnum = notiJSON.matnum;
  		var desc = notiJSON.desc; 
  		var soldTo = notiJSON.soldto;
  		var qty = notiJSON.qty;
  		var salesorder = notiJSON.ordnum;
  		var selno = notiJSON.selnum;
  		var delno = notiJSON.delnum;
  		var batchno = notiJSON.batchnum;
  		var addninfo = notiJSON.addninfo;
  		var messageText = notiJSON.messageText;
  		
  		
  		createReqData = {
  				"NotificationDescription" : desc,
  				"NotificationType" :  "Q1",
  				"MaterialNumber": matnum,
  				"SoldToParty": soldTo,
  				"NotificationLongText" : addninfo,
  			    "SerialNumber" : selno,
	  		    "Batch" : batchno,
	  		  	"Quantity" : qty,
			    "SalesOrder" : salesorder,
			    "DeliveryNumber":delno,
			    "MessageText":messageText
  				//"NotificationLongText": "NotificationLongText for test"
  			};
	}else if(notiJSON.title.indexOf("Q3") != -1) {
		var matnum = notiJSON.matnum; 
  		var desc = notiJSON.desc; 
  		var addninfo = notiJSON.addninfo;
  		
  		var getDefLocCod = notiJSON.defLoccode;
  		var getDefGrp = notiJSON.defGroup;
  		var getDefCode = notiJSON.defCode;
  		var getDefName = notiJSON.defName;
  		var getQuantity = notiJSON.qty;
  		
  		//////////////Done for UAT issue 775
  		var getSerial = notiJSON.selnum;
  		var getbatch = notiJSON.batchnum;
  		var msgText = notiJSON.messageText;
    	
    	////////////////////////////////////////////////////////////
  		
  		//var soldTo = sap.ui.getCore().byId("inputSoldTo");
  		
  		var createReqData = {
  				"NotificationDescription" : desc,
  				"NotificationType" :  "Q3",
  				"MaterialNumber": matnum,
  				"NotificationLongText" : addninfo,
  				
  				//defect and location
  		        "DefectLocationCode" : getDefLocCod,   //pass location code from location field
  				"DefectLocation" :  getDefGrp,//QE not accepting   // pass defect group from location field
  			    "DefectType" :getDefCode, //pass defect code from defect field selection
  				"DefectTypeName" : getDefName, // it is common for defect and location fields
  				"Quantity" : getQuantity, //pass quantity to service
  				 "MessageText": msgText,
  				 
  	//////////////below functionality added  for UAT issue 775
  				"Batch" :getbatch,
  				"SerialNumber": getSerial,
  				
  			};
	}else if(notiJSON.title.indexOf("F2") != -1) {
		var matnum = notiJSON.matnum; 
		var desc = notiJSON.desc;
  		var serialno = notiJSON.selnum;
  		var quantity = notiJSON.qty;
  		var batch = notiJSON.batchnum;
  		var addninfo = notiJSON.addninfo;
  		var purord = notiJSON.ponum;
  		var puritm = notiJSON.poitmnum;
  		
  		var createReqData = {
  				"NotificationType" :  "F2",
  				"MaterialNumber": matnum,
  				"PurchaseOrderItem": puritm,
  				"NotificationDescription" : desc,
  				"NotificationLongText" : addninfo,
  				"Quantity" :quantity,
  				"Batch" :batch,
  				"SerialNumber" : serialno,
  				"PurchaseOrder": purord,
  			};
        
	}else if(notiJSON.title.indexOf("F3") != -1) {
		var matnum = notiJSON.matnum; 
  		var desc = notiJSON.desc; 
  		var serial = notiJSON.selnum;
  		var quantity = notiJSON.qty;
  		var batchF3 = notiJSON.batchnum;
  		var addninfo = notiJSON.addninfo;
  		var messageText = notiJSON.messageText;
  		
  		var createReqData = {
  				"NotificationDescription" : desc,
  				"NotificationType" :  "F3",
  				"MaterialNumber": matnum,
  				"NotificationLongText" : addninfo,
  				"Batch" :batchF3,
  				"SerialNumber": serial,
  				"Quantity":quantity,
  				 "MessageText":messageText
  			};
	}
	
	return createReqData;
}

function fetchEligibleMOB15QueueJobs() {

	
	var notiNumRcvd = removeSuccessNotification();
	
	if(notiNumRcvd==null) {
		return false;
	}
	
	var eligibleJobs = [];
	
	for(var i=0;i<notiNumRcvd.length;i++) {
		var notiItem = window.localStorage.getItem(notiNumRcvd[i]);
		var notiJSON = JSON.parse(notiItem);
		
		
		var currDate = new Date();
		var timeMilli = currDate.getTime();
		
		if(notiJSON == null || typeof notiJSON == 'undefined') {
			continue;
		}
		
		if(notiJSON.status != "Success") {
			var createdTime = parseInt(notiJSON.createdTime);
			var timeElapsed = (timeMilli-createdTime)/(1000*60); //In Minute

			var numOfRetry = 0;
			
			if(typeof notiJSON.numOfRetry != 'undefined' && notiJSON.numOfRetry.trim().length != 0) {
				numOfRetry = parseInt(notiJSON.numOfRetry);
			}
				
			var lastRetried = createdTime;
			
			if(typeof notiJSON.lastRetried != 'undefined') {
				lastRetried = parseInt(notiJSON.lastRetried);
			}
			
			var timeDiff = (timeMilli-lastRetried)/(1000*60); //In Minute
			var timeElapsedInMin = Math.ceil(timeDiff);
			
			/*
			 * Rule eligible for Retry - Start
			 */
			var isEligibleForRetry = false;
			//Rule 1 - Job stuck "InProgress" more than 10 minute
			if(notiJSON.status != null && typeof notiJSON.status != 'undefined') {
				if(notiJSON.status.endsWith("-Started") || notiJSON.status.startsWith("InProgress")) {
					if(timeElapsedInMin>=10) {
						isEligibleForRetry = true;
					}
				}
			}
			
			//Rule 2 - Job status "Failed"/"Saved"
			if(notiJSON.status == "Failed" || notiJSON.status == "Saved" || notiJSON.status.endsWith("Failed")) {
				isEligibleForRetry = true;
			}
			
			/*
			 * Rule eligible for Retry - End
			 */
			
			/*
			 * Rule for priority - Start
			 */
			if(isEligibleForRetry) {
				eligibleJobs.push(notiJSON);
			}
			
			/*
			 * Rule for priority - End
			 */
			
		}
	}

	return eligibleJobs;
}


function startWorkersAuto() {
	var items = window.localStorage.getItem('TRQ');
	var transactions =  JSON.parse(items);
	
	if(transactions==null) {
		return;
	}
	
	if(transactions.length > 0) {
		var fetchJobs = removeSuccessDrop3Job();//Before fetching Jobs remove success that are more than one hour
	}
	
	var eligibleJobsDrop3 = fetchEligibleDrop3JobsInOrder(transactions);
	
	if(eligibleJobsDrop3.length > 0) {
		startDrop3QueueBG();
		//startBGPingTester();
	}else {
		stopDrop3QueueBG();
	}
	
	var eligibleMOB15Jobs = fetchEligibleMOB15QueueJobs();
	
	if(eligibleMOB15Jobs.length > 0) {
		//startBGPingTester();
		startBGWorkerMOB15();
		startChildWorker1MOB15();
		startChildWorker2MOB15();
		startChildWorker3MOB15();
	}else {
		stopBGWorkerMOB15();
		stopChildWorker1MOB15();
		stopChildWorker2MOB15();
		stopChildWorker3MOB15();
	}
	
}


function getEligibleJobsInBGQueue() {
	var totalEligibleJobs = 0;
	
	var eligibleJobsDrop3 = fetchEligibleDrop3JobsInOrder();
	
	totalEligibleJobs = totalEligibleJobs + eligibleJobsDrop3.length;
	
	var eligibleMOB15Jobs = fetchEligibleMOB15QueueJobs();
	
	totalEligibleJobs = totalEligibleJobs + eligibleMOB15Jobs.length;
	
	return totalEligibleJobs;
}

function cheatFetchFile() {
	//var masterDataPrefetch = new sap.ui.model.json.JSONModel("Model/MasterData-PreFetch.json");
	
    var masterDataPrefetch = new sap.ui.model.json.JSONModel();
    
    //sap.ui.getCore().setModel(masterDataPrefetch);
    
    masterDataPrefetch.attachRequestCompleted(function(oEvent){
            var objStringMasterData = JSON.stringify(oEvent.oSource.oData);
    		replaceFileOnMobile(objStringMasterData, getUserName() + "MasterData.json");
    });
    masterDataPrefetch.loadData("Model/MasterData-PreFetch.json");

	
	/*if(typeof masterDataPrefetch != 'undefined' && masterDataPrefetch != null) {
		var objStringMasterData = JSON.stringify(masterDataPrefetch.oData);
		replaceFileOnMobileMD(objStringMasterData, getUserName() + "MasterData.json");
	}*/
	
	//var assetListDepotPrefetch = new sap.ui.model.json.JSONModel("Model/AssetListDepot-PreFetch.json");
    
    var assetListDepotPrefetch = new sap.ui.model.json.JSONModel();
    assetListDepotPrefetch.attachRequestCompleted(function(oEvent){
		var objStringAssetListDepot = JSON.stringify(oEvent.oSource.oData);
		replaceFileOnMobile(objStringAssetListDepot, getUserName() + "AssetListDepot.json");
    });
    assetListDepotPrefetch.loadData("Model/AssetListDepot-PreFetch.json");
	
	/*if(typeof assetListDepotPrefetch != 'undefined' && assetListDepotPrefetch != null) {
		var objStringAssetListDepot = JSON.stringify(assetListDepotPrefetch.oData);
		replaceFileOnMobileMD(objStringAssetListDepot, getUserName() + "AssetListDepot.json");
	}*/
	
    var assetListPrefetch = new sap.ui.model.json.JSONModel();
    assetListPrefetch.attachRequestCompleted(function(oEvent){
    	var objStringAssetList = JSON.stringify(assetListPrefetch.oData);
		replaceFileOnMobile(objStringAssetList, getUserName() + "AssetList.json");
    });
    assetListPrefetch.loadData("Model/AssetList-Prefetch.json");
    
	//var assetListPrefetch = new sap.ui.model.json.JSONModel("Model/AssetList-Prefetch.json");
	
	/*if(typeof assetListPrefetch != 'undefined' && assetListPrefetch != null) {
		var objStringAssetList = JSON.stringify(assetListPrefetch.oData);
		replaceFileOnMobileMD(objStringAssetList, getUserName() + "AssetList.json");
	}*/
	
}