/*
 * TODO : Comments
 */
function ajaxPingTest() {

	var strClient = "";
	
	if (g_runningInTablet || g_runningOnPhone) {
		if (g_EndSystem.trim() == "DEV1") {
			strClient = "?sap-client=130";
		} else if (g_EndSystem.trim() == "DEV2") {
			strClient = "?sap-client=130";
		} 
		else if (g_EndSystem.trim() == "DEV3") {
			strClient = "?sap-client=130";
		} 
		
		else if (g_EndSystem.trim() == "QA2") {
			strClient = "?sap-client=210";
		} else if (g_EndSystem.trim() == "QA1") {
			strClient = "?sap-client=210";
		}
		
		else if (g_EndSystem.trim() == "QA3") {
			strClient = "?sap-client=210";
		}
		
		
	}
	var logInfo = getTimeStamp() +"MOB00:: Service: PingTest Start" ;
	var pingUrl = getUrl("/sap/opu/odata/SAP/ZGW_PING_SRV/ValueIdSet('OK')" + strClient);
	var user = sap.ui.getCore().getElementById("txtUser");
	var pass = sap.ui.getCore().getElementById("txtPass");
	
	
	if ( pingUrl != "Fail")
		{

		jQuery.ajax({
			type : "GET",
			url : pingUrl,
			username: user.getValue(),
	        password: pass.getValue(),
	    	timeout : 5000,
			dataType : "json",
			success : function(json) {
				if (g_isDebug == true) {
							// Service End Time
							 var logInfo1 = getTimeStamp()+ "MOB00:: Service: PingTest Finish";
							
							//var logInfo1 = getTimeStamp()+ "MOB00:: Logon:"+" "+g_EndSystem+" "+versionInfo+ "User:"+user.getValue();
						
							// Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
							
							
							//Background log file
							logFileUpdate_Background(g_ServiceStartEndTime);
						}
				
				var response = json.d.Id;
				if( response == "OK")
				{
					g_webWorkerCheck = "PTSU";//Ping Test Success
				}
				else
				{
					g_webWorkerCheck = "PTF";//Ping Test Fail
				}
			
			},
			error : function(request, status, err) {
				
				if (status == "timeout") {
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "MOB00:: Service: PingTest Timeout";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						
						//Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
					}
					
					g_webWorkerCheck = "PTTO";//Ping Test Time Out
					sap.m.MessageBox.show("Network not available, please retry later.",sap.m.MessageBox.Icon.ERROR,"Error");
				} 
				else if (err =="Unauthorized")
					{
					g_webWorkerCheck = "PTSU";//Ping Test Fail
				//	sap.m.MessageBox.show("User Unauthorized",sap.m.MessageBox.Icon.ERROR,"Error");
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "MOB00:: Service: PingTest Failed 401 unauthorised";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						
						//Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
					}
					}
				else {
					g_webWorkerCheck = "PTF";//Ping Test Fail
					sap.m.MessageBox.show("Network not available, please retry later",sap.m.MessageBox.Icon.ERROR,"Error");
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "MOB00:: Service: PingTest Failed";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						
						//Background log file
						logFileUpdate_Background(g_ServiceStartEndTime);
					}
					
				}
			}
		});
		}
	
	
	
  
}



/*
 * This method is called to do Ping Test
 */
function ajaxBGPingTest() {

	var strClient = "";
	
	if (g_runningInTablet || g_runningOnPhone) {
		if (g_EndSystem.trim() == "DEV1") {
			strClient = "?sap-client=130";
		} else if (g_EndSystem.trim() == "DEV2") {
			strClient = "?sap-client=130";
		} 
		else if (g_EndSystem.trim() == "DEV3") {
			strClient = "?sap-client=130";
		} 
		
		else if (g_EndSystem.trim() == "QA2") {
			strClient = "?sap-client=210";
		} else if (g_EndSystem.trim() == "QA1") {
			strClient = "?sap-client=210";
		}
		
		else if (g_EndSystem.trim() == "QA3") {
			strClient = "?sap-client=210";
		}
		
		
	}
	var logInfo = getTimeStamp() +"MOB00:: BG Process: Service: PingTest Start" ;
	var pingUrl = getUrlForBG("/sap/opu/odata/SAP/ZGW_PING_SRV/ValueIdSet('OK')" + strClient);
	var user = getUserName();
	var pass = getPassword();
	
	if((typeof user != 'undefined') && (typeof pass != 'undefined')) {
		if((user.trim().length == 0) || (pass.trim().length == 0)) {
			g_isPingSuccess = false;//Ping Test Fail
			return false;
		}
	}
	
	if ( pingUrl != "Fail")
		{

		jQuery.ajax({
			type : "GET",
			url : pingUrl,
			username: user,
	        password: pass,
	    	timeout : 5000,
			dataType : "json",
			success : function(json) {
				if (g_isDebug == true) {
							// Service End Time
							 var logInfo1 = getTimeStamp()+ "BG Process:: Service: PingTest Finish";
							
							//var logInfo1 = getTimeStamp()+ "MOB00:: Logon:"+" "+g_EndSystem+" "+versionInfo+ "User:"+user.getValue();
						
							// Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
						}
				
				var response = json.d.Id;
				if( response == "OK")
				{
					g_isPingSuccess = true;//Ping Test Success
				}
				else
				{
					g_isPingSuccess = false;//Ping Test Fail
				}
			
			},
			error : function(request, status, err) {
				
				if (status == "timeout") {
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "BG Process:: Service: PingTest Timeout";
						// Log file Service Start and End Time
						var g_ServiceStartEndTimeL = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTimeL);
					}
					
					g_isPingSuccess = false;//Ping Test Fail
					//sap.m.MessageBox.show("Network not available, please retry later.",sap.m.MessageBox.Icon.ERROR,"Error");
				} 
				else if (err =="Unauthorized")
					{
					g_isPingSuccess = true;//Ping Test Success
				//	sap.m.MessageBox.show("User Unauthorized",sap.m.MessageBox.Icon.ERROR,"Error");
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "BG Process:: Service: PingTest Failed 401 unauthorised";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
					}
					}
				else {
					g_isPingSuccess = false;//Ping Test Fail
					//sap.m.MessageBox.show("Network not available, please retry later",sap.m.MessageBox.Icon.ERROR,"Error");
					if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "BG Process:: Service: PingTest Failed";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
					}
					
				}
			}
		});
		}
}
