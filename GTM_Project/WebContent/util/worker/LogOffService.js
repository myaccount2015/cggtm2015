function LogOffServiceCall()
{
	
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
	
	var pingUrl = getUrl("/sap/public/bc/icf/logoff" + strClient);
	var user = sap.ui.getCore().getElementById("txtUser");
	var pass = sap.ui.getCore().getElementById("txtPass");
	
	var logInfo = getTimeStamp() +"MOB00:: Service: Logoff Start" ;
	
	//g_webWorkerCheck = "LOS"; //Log off Success
	
	
	
	if ( pingUrl != "Fail"){
		jQuery.ajax({
		    url: pingUrl,
		    async: false,
		    username: user.getValue(),
	        password: pass.getValue(),
	        success : function(json) {
	        	g_webWorkerCheck = "LOS"; //Log off Success
	        	
	        	if (g_isDebug == true) {
					// Service End Time
					var logInfo1 = getTimeStamp()
							+ "MOB00:: Service: Logoff Finish";
					// Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
				}
	        	
	        	
	        },
			error : function(request, status, err) {
				g_webWorkerCheck = "LOF"; //Log off Error
				
				if (g_isDebug == true) {
					// Service End Time
					var logInfo1 = getTimeStamp()
							+ "MOB00:: Service: Logoff Failed";
					// Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
				}
				
				
			},
			statusCode: {
		      401: function() {
		          // prevent authentication dialog with empty function
		    	  g_webWorkerCheck = "LOF"; //Log off Error
		    	  
		    	  if (g_isDebug == true) {
						// Service End Time
						var logInfo1 = getTimeStamp()
								+ "MOB00:: Service: Logoff Failed";
						// Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
					}
		    	  
		    	  
		       } }}).complete(function () {
					
				});	
	}
	
	

}

