jQuery.sap.declare("com.cg.gtm.Component");

sap.ui.core.UIComponent.extend("com.cg.gtm.Component", {

	createContent : function() {
		
		g_runningInTablet = jQuery.device.is.tablet; //Global variable for Tablet
		g_runningOnDesktop = jQuery.device.is.desktop; //Global variable denote running on Desktop
		g_runningOnPhone = jQuery.device.is.phone; //Global variable denote running on Phone
		g_ServiceStartEndTime = "";
		g_logonSuccess = false;
		if(g_runningInTablet||g_runningOnPhone){
			g_isDebug=true;
		}
		else{
			g_isDebug= false;
		}
		//  DMS common Responsive pop over 
		commonResponsivePopoverAndDialogBox();
	    if (g_isDebug == true)
	    	{
	    	
	    	//      Service Log File
	    	var month = new Date().getMonth();
	    	month = month - (-1);
	    	var getDate = new Date().getDate() +"_"+month +"_"+new Date().getFullYear();
	    	var path = "HRE_log_"+ getDate +".txt";//DDMMYYYY
	    	
	    	//      Background Log file
	    	var month_BG_Log = new Date().getMonth();
	    	month_BG_Log = month_BG_Log - (-1);
	    	var getDate_BG_Log = new Date().getDate() +"_"+month_BG_Log +"_"+new Date().getFullYear();
	    	var path_BG_Log = "HRE_BackGround_Log"+ getDate_BG_Log +".txt";//DDMMYYYY
           //	    Checking log files are existing or not	
	    	var checkFile = checkIfFileExists(path);
	    	var checkFile_BG_Log  = checkIfFileExists(path_BG_Log);
	    	if(checkFile == false )
	    		{
	       //       Create Log File First time
				window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
				    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
				    fileEntry.createWriter(function (writer) {
				    writer.onwrite = function(evt) {
				    };
				} , fail);
				}, fail);
		        }, fail);
				function fail()
				{
				}
				if(checkFile_BG_Log == false){
					//Background log file
		    		//Create Log File First time
					window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
					    fileSystem.root.getFile(path_BG_Log, {create: true, exclusive: false}, function (fileEntry) {
					    fileEntry.createWriter(function (writer) {
					    writer.onwrite = function(evt) {
					    };

					} , fail_BG);
					}, fail_BG);
			        }, fail_BG);

					function fail_BG()
					{
					}
				}
				
	    		}
	    	}
	    
		//Busy Indicator 
		var busyIndicator = new sap.m.BusyDialog({
			id : "splash-screen-BusyIndicator",
			text : "Loading...",
			showCancelButton : true,
			cancelButtonText : "Cancel",
			close : function()
			{
				closeSplashScreen();
				
			}
		});
		openSplashScreen();
		loadPDFViewer();
		pdfViewDivHide(); // hide pdf div
		if(g_runningOnDesktop == true)
		{
		hideInpImageSelecter();
		}
		// create root view
		var oView = sap.ui.view({
			id : "firstPage",
			viewName : "com.cg.gtm.view.FirstPage",
			type : "JS",
			viewData : { component : this }
		});
		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch: sap.ui.Device.support.touch,
			isNoTouch: !sap.ui.Device.support.touch,
			isPhone: sap.ui.Device.system.phone,
			isNoPhone: !sap.ui.Device.system.phone,
			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
		    listItemType: sap.ui.Device.system.phone ? "Active" : "Active"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");
		g_isPingSuccess = true;
		/*
		 * Start work monitor - Start
		 */
		startWorkMonitor();
		/*
		 * Start work monitor - End
		 */
		/*var currDate = new Date();
		var timeMilli = currDate.getTime();
		window.localStorage.setItem("USERTOUCH", timeMilli);*/
		
		return oView;
	}
});

function loadPDFViewer() {
	$("#pdfViewer").load("viewer/web/viewer.html");
}

//splash screen
function openSplashScreen()
{
	sap.ui.getCore().byId("splash-screen-BusyIndicator").open();
}

function closeSplashScreen()
{
	sap.ui.getCore().byId("splash-screen-BusyIndicator").close();
}


function pdfViewDivHide()
{
	$("#pdfViewer").hide();
}

function pdfViewDivShow()
{
	$("#pdfViewer").show();
}

function hideInpImageSelecter()
{
	$("#files").hide();	
}
function clearappCache() {
	if(g_runningInTablet || g_runningOnPhone) {
		/*
		var cachecleaner = cordova.require("cordova/plugin/cachecleaner");
		cachecleaner.del( function () { // console.log("PhoneGap Plugin: CacheCleaner: callback success");
		},
		function () { 
			 } );
	    */
		}
	}

var CustomPlugin = {};
CustomPlugin.callNativeMethod = function() {
	if(g_runningInTablet || g_runningOnPhone) {
		cordova.exec(null, null, "CustomPlugin", "callNativeMethod", []);
	}
};
var bgProcessorPing = null;
function startBGPingTester() {
	if(bgProcessorPing != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorPing = new Worker("util/BGProcessor/W_BGPingTest.js");
		
		bgProcessorPing.onmessage = function(event) {
			/*
			 * Check User Inactive - Start
			 */
			var isUserInactive = false;
			var createdTime = window.localStorage.getItem("USERTOUCH");
			var currDate = new Date();
			var timeMilli = currDate.getTime();
			var timeElapsed = (timeMilli-createdTime)/(1000*60); //In Minute
			if(timeElapsed >= 2) {
				isUserInactive = true;
			}
			/*
			 * Check User Inactive - End
			 */
			
			/*
			 * Check total eligible BG Jobs - Start
			 */
			var isEligibleJobsInQueue = false;
			var eligibleJobs = getEligibleJobsInBGQueue();
			if(eligibleJobs > 0) {
				isEligibleJobsInQueue = true;
			}
			/*
			 * Check total eligible BG Jobs - End
			 */
			var logInfo1 = getTimeStamp()+ "MOB00:: isUserInactive: ";
			logFileUpdate(logInfo1);
			if(isUserInactive && !isEligibleJobsInQueue) {
				stopBGPingTester();
			}else{
				ajaxBGPingTest();
			}
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopBGPingTester() {
	if(bgProcessorPing != null) {
		bgProcessorPing.terminate();
		bgProcessorPing = null;
	}
}
var bgProcessorMasterData = null;
function startBGLoadMasterData() {
	if(bgProcessorMasterData != null) {
		return;
	}
	
	if(typeof(Worker) !== "undefined") {
		bgProcessorMasterData = new Worker("util/BGProcessor/W_MasterDataLoad.js");
		
		bgProcessorMasterData.onmessage = function(event) {
			tiggerMasterDataLoad(false);
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopBGLoadMasterData() {
	if(bgProcessorMasterData != null) {
		bgProcessorMasterData.terminate();
		bgProcessorMasterData = null;
	}
}
var bgProcessorMOB15 = null;
function startBGWorkerMOB15() {
	if(bgProcessorMOB15 != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorMOB15 = new Worker("util/BGProcessor/W_BGProcessorMOB15.js");
		
		bgProcessorMOB15.onmessage = function(event) {
			tiggerRetryJobsMOB15();
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopBGWorkerMOB15() {
	if(bgProcessorMOB15 != null) {
		bgProcessorMOB15.terminate();
		bgProcessorMOB15 = null;
	}
}

var bgProcessorChild1MOB15 = null;
function startChildWorker1MOB15() {
	if(bgProcessorChild1MOB15 != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorChild1MOB15 = new Worker("util/worker/W_P1ChildWorkerMOB15.js");
		
		bgProcessorChild1MOB15.onmessage = function(event) {
			/*if(g_isPingSuccess) { //Call when ping test is success
				triggerMOB15Notification("InProgressP1");
			}*/
			triggerMOB15Notification("InProgressP1");
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopChildWorker1MOB15() {
	if(bgProcessorChild1MOB15 != null) {
		bgProcessorChild1MOB15.terminate();
		bgProcessorChild1MOB15 = null;
	}
}

var bgProcessorChild2MOB15 = null;
function startChildWorker2MOB15() {
	if(bgProcessorChild2MOB15 != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorChild2MOB15 = new Worker("util/worker/W_P2ChildWorkerMOB15.js");
		
		bgProcessorChild2MOB15.onmessage = function(event) {
			/*if(g_isPingSuccess) { //Call when ping test is success
				triggerMOB15Notification("InProgressP2");
			}*/
			triggerMOB15Notification("InProgressP2");
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}
function stopChildWorker2MOB15() {
	if(bgProcessorChild2MOB15 != null) {
		bgProcessorChild2MOB15.terminate();
		bgProcessorChild2MOB15 = null;
	}
}
var bgProcessorChild3MOB15 = null;
function startChildWorker3MOB15() {
	if(bgProcessorChild3MOB15 != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorChild3MOB15 = new Worker("util/worker/W_P3ChildWorkerMOB15.js");
		
		bgProcessorChild3MOB15.onmessage = function(event) {
			/*if(g_isPingSuccess) { //Call when ping test is success
				triggerMOB15Notification("InProgressP3");
			}*/
			triggerMOB15Notification("InProgressP3");
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopChildWorker3MOB15() {
	if(bgProcessorChild3MOB15 != null) {
		bgProcessorChild3MOB15.terminate();
		bgProcessorChild3MOB15 = null;
	}
}
var bgDrop3Queue = null;
function startDrop3QueueBG() {
	if(bgDrop3Queue != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgDrop3Queue = new Worker("util/BGProcessor/W_Drop3Queue.js");
		
		bgDrop3Queue.onmessage = function(event) {
			drop3QueueRead();
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopDrop3QueueBG() {
	if(bgDrop3Queue != null) {
		bgDrop3Queue.terminate();
		bgDrop3Queue = null;
	}
}

var bgWorkMonitor = null;
function startWorkMonitor() {
	if(bgWorkMonitor != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgWorkMonitor = new Worker("util/BGProcessor/W_WorkMonitor.js");
		
		bgWorkMonitor.onmessage = function(event) {
			var intervalCount = parseInt(event.data); //Multiples of hundred
			if(intervalCount == 100) { //100 * 100 = 10 Sec
				startWorkersAuto(); //Start Queue Worker Automatically
				//cheatFetchFile(); //Cheat the file fetch
			}
			if(g_logonSuccess) { //Closing the splash screen
				closeSplashScreen();
				g_logonSuccess = false;
			}
			
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopWorkMonitor() {
	if(bgWorkMonitor != null) {
		bgWorkMonitor.terminate();
		bgWorkMonitor = null;
	}
}

var bgProcessorAssetData = null;
function startBGLoadAssetData() {
	if(bgProcessorAssetData != null) {
		return;
	}
	if(typeof(Worker) !== "undefined") {
		bgProcessorAssetData = new Worker("util/BGProcessor/W_AssetDataLoad.js");
		
		bgProcessorAssetData.onmessage = function(event) {
			tiggeraassetLoad(false);
		}
	}else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopBGLoadMasterData() {
	if(bgProcessorAssetData != null) {
		bgProcessorAssetData.terminate();
		bgProcessorAssetData = null;
	}
}

//Web Worker
var bgParentWorker = null;
g_webWorkerCheck = ""; 
function startParentWorker() {
	openSplashScreen();
	
    if(typeof(Worker) !== "undefined") {
    	bgParentWorker = new Worker("util/BGProcessor/W_ParentWorker.js");
    	
    	bgParentWorker.onmessage = function(event) {
        	var w_flag = g_webWorkerCheck;
        	//alert("w_flag"+w_flag);
        	switch(w_flag)
        	{
        	case "NS":
        		g_logonSuccess = false;//Not logged on yet
        		var user = sap.ui.getCore().getElementById("txtUser");
        		var versionInfo = sap.ui.getCore().getElementById("Mob00-VersionInfo").getText();
        		var endUserSystem = getURLs();
        		var getModel = endUserSystem.MOB00TargetSystem;
        		var modelLen = getModel.length;
                var logonSysDet = "";
        		for( var i = 0 ; i < modelLen; i++)
        		{   if( getModel[i].key == g_EndSystem.trim() )
                     {
                     	logonSysDet = getModel[i].detail;
                     }
               }
        		if (g_isDebug == true) {
					// Service End Time
					var logInfoVersion = getTimeStamp()+ "MOB00:: Logon:"+" "+logonSysDet+" "+versionInfo+ " User:"+user.getValue();
					//14:45:31:920 MOB00: Logon: QA 1.35 User: dclavey
					var g_ServiceStartEndTime = logInfoVersion;
					logFileUpdate(g_ServiceStartEndTime);
				}
        		
        		ajaxPingTest();
        		g_webWorkerCheck = "PTS"; //Ping Test Started
            break;
        	
        	case "PTF"://Ping Test Fail
        		closeSplashScreen();
        		//g_isPingSuccess = false;
        		stopBGPingTester();
        		stopParentWorker();
            break;
            
        	case "PTTO"://Ping Test Time Out
        		closeSplashScreen();
        		stopBGPingTester()
        		stopParentWorker();
            break;
            
        	case "PTSU"://Ping Test Success
        		LogOffServiceCall();
        		//W_ShowSettingsPage();
            break;
            
        	case "LOS"://LogOff Success
        		W_ShowSettingsPage();
            break;
            
        	case "LOF"://LogOff Failure
        		closeSplashScreen();
        		stopBGPingTester();
        		stopParentWorker();
            break;
            
        	case "SPE"://Settings Page Error
        		closeSplashScreen();
        		stopBGPingTester();
        		stopParentWorker();
            break;
            
        	case "SPS"://Settings Page Success
        		LaunchpadService();
        		
        		if ( g_drop3 == false)
        			{
        			sap.ui.getCore().byId("PM").setVisible(false);
        			}
            break;
            
        	case "LPS"://Launchpad  Success
        		closeSplashScreen();
        		saveCredentials();
        		stopParentWorker();
        		if (g_drop3) {
        			var url = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV");
        			var username = getUserName();
        			comms.execute([{
							serviceUrl: url,
							requestUrl: "/AMSCENARIOSet?$filter=UserId eq '" + username + "'&$expand=Nav2Codes,Nav2Effect,Nav2Locations,Nav2NotifTypes,Nav2OrderTypes,Nav2PlannerGroup,Nav2PlantOrg,Nav2PMActivityTypes,Nav2PriorityTypes,Nav2ReasonCodes,Nav2ReasCdLinkages,Nav2HeadCodes,Nav2Char,Nav2CharVal",
							destinationPath: cordova.file.externalRootDirectory,
							filename: username + "MasterData.json"
						}, {
							serviceUrl: url,
							requestUrl: "/AssetListSet?$filter=UserId eq '" + username + "' and Type eq 'S'",
							destinationPath: cordova.file.externalRootDirectory,
							filename: username + "AssetListDepot.json"
						}, {
							serviceUrl: url,
							requestUrl: "/AssetListSet?$filter=UserId eq '" + username + "' and Type eq 'T'",
							destinationPath: cordova.file.externalRootDirectory,
							filename: username + "AssetList.json"
						}],
						function (results, errors) {
							if (errors.length > 0) {
								alert(JSON.stringify(errors, null, "\t"));
							}
							getUserParam();
							getJobList();
							g_logonSuccess = true;//Logon Success
						}
					);
        		} else {
        			sap.ui.getCore().byId("tilecon").removeTile(sap.ui.getCore().byId("PM"));
        		}
        			
        		//startBGLoadAssetData();
        		
        		/*
        		 * Load Master Data - Start
        		 */
        		//startBGLoadMasterData();
        		/*
        		 * Load Master Data - End
        		 */
        		
        		/*
        		 * Drop3 Queue - Start
        		 */
        		//startDrop3QueueBG();
        		/*
        		 * Drop3 Queue - End
        		 */
//        		cheatFetchFile();
//
//        			}
        		

        		
            break;
            
        	case "LPE"://Launchpad Error
        		closeSplashScreen();
        		stopBGPingTester();
        		stopParentWorker();
            break;
            
           }
            
        };
    } 
    else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }
}

function stopParentWorker() { 
	if(typeof bgParentWorker == 'undefined' || bgParentWorker == null) {
		return false;
	}else {
		bgParentWorker.terminate();
		bgParentWorker = undefined;
	}
}
/*
 * Offline data worker function
 */
var w_Offline;
function offlineDataStartWorker()
{
	openSplashScreen();
    if(typeof(Worker) !== "undefined") {
    	w_Offline = new Worker("util/BGProcessor/W_ParentWorker.js");
    	w_Offline.onmessage = function(event) {
        	var w_flag = g_webWorkerCheck;
        	switch(w_flag)
        	{
        	case "LPS"://Launchpad success message
        		g_webWorkerCheck = "OFC";//Offline function call
        		Mob15SoldToParty();
            break;
        	case "OFC_STP_SU"://Offline function call Sold to party Success
        		Mob15DefectLocation();
            break;
        	case "OFC_STP_ERROR"://Offline function call Sold to party Error
        		closeSplashScreen();
        		offlineDataStopWorker();
        		offlineDialogBox();
            break;
        	case "OFC_DL_SU"://Offline function call Sold to party Error
        		closeSplashScreen();
        		offlineDataStopWorker();
            break;
        	case "OFC_DL_ERROR"://Offline function call Sold to party Error
        		closeSplashScreen();
        		offlineDataStopWorker();
        		offlineDialogBox();
            break;
           }
        };
    } 
    else {
        sap.m.MessageBox.show("Please check your browser is HTML5 compatable.",sap.m.MessageBox.Icon.ERROR,"Error");
    }

}

function offlineDataStopWorker()
{
	w_Offline.terminate();
	w_Offline = undefined;
}



function offlineDialogBox()
{
	var msgDialog = new sap.m.Dialog({
		//id : "Mob00-offlineDialogBox",
       	title: "Information",
       	icon: "img/information.png",
       	type: sap.m.DialogType.Message,
       	content: [
       	new sap.m.Text({
       	text:"Are you sure you want to fetch all offline information?"
       	}),
       	],
       	leftButton: new sap.m.Button({
       	text: "No",
       	
       	press: function () {
       		msgDialog.close();
       	}
       	}),
       	rightButton: new sap.m.Button({
       	text: "Yes",
       	press: function () {
       		msgDialog.close();
       		offlineDataStartWorker();
       		}
       	})
       	});	
	
	msgDialog.open();
}