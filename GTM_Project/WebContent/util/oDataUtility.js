
/*
 * This method is used to identify the actual url to trigger the service.
 * It is used as common code for running application from local and server.
 */
function getUrl(sUrl) { 
//	if (g_isPingSuccess) {
		    // I'm online so submit the form.
		if (g_runningInTablet || g_runningOnPhone) {

			if (g_EndSystem.trim() == "DEV1") {
				var finalURL = "https://sapdisp.hitachirail-eu.com:443" + sUrl;
				return finalURL;
			} else if (g_EndSystem.trim() == "DEV2") {
				var finalURL = "http://hs1gd1comb.rm.hitachi-eu.com:8100"
						+ sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			} 
			
			else if (g_EndSystem.trim() == "DEV3") {
				var finalURL = "https://80.168.79.120:443"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
			
			
			else if (g_EndSystem.trim() == "QA2") {
				var finalURL = "http://hs1gq1comb.rm.hitachi-eu.com:8000"
						+ sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			} else if (g_EndSystem.trim() == "QA1") {
				var finalURL = "https://sapdisp.hitachirail-eu.com:1443" + sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			}
					
			else if (g_EndSystem.trim() == "QA3") {
				var finalURL = "https://80.168.79.120:1443"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
			
			else if (g_EndSystem.trim() == "GTM") {
				var finalURL = "http://ntbomsap24.corp.capgemini.com:8010"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
			
			
			
                	
                	

		} else {
			if (sUrl == "") {
				return sUrl;
			}
			if (window.location.hostname == "localhost") {
				return "proxy" + sUrl;
			} else {
				return sUrl;
			}
		}
	//}

	/*else {
		sap.m.MessageBox
				.show(
						"Network is not connected, Please try after network is connected.",
						sap.m.MessageBox.Icon.ERROR, "Error");
		closeSplashScreen();
		var finalURL = "Fail";
		return finalURL;
	}*/
} 

/*
 * This method is used to identify the actual url to trigger the service.
 * It is used as common code for running application from local and server.
 */
function getUrlForBG(sUrl) { 
	    // I'm online so submit the form.
	//if (g_isPingSuccess) {
		if (g_runningInTablet || g_runningOnPhone) {
	
			if (g_EndSystem.trim() == "DEV1") {
				var finalURL = "https://sapdisp.hitachirail-eu.com:443" + sUrl;
				return finalURL;
			} else if (g_EndSystem.trim() == "DEV2") {
				var finalURL = "http://hs1gd1comb.rm.hitachi-eu.com:8100"
						+ sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			} 
			
			else if (g_EndSystem.trim() == "DEV3") {
				var finalURL = "https://80.168.79.120:443"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
			
			
			else if (g_EndSystem.trim() == "QA2") {
				var finalURL = "http://hs1gq1comb.rm.hitachi-eu.com:8000"
						+ sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			} else if (g_EndSystem.trim() == "QA1") {
				var finalURL = "https://sapdisp.hitachirail-eu.com:1443" + sUrl;
				// alert("Target URL: " + finalURL);
				return finalURL;
			}
					
			else if (g_EndSystem.trim() == "QA3") {
				var finalURL = "https://80.168.79.120:1443"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
			
			else if (g_EndSystem.trim() == "GTM") {
				var finalURL = "http://ntbomsap24.corp.capgemini.com:8010"
					+ sUrl;
			// alert("Target URL: " + finalURL);
			return finalURL;
			}
	            	
	            	
	
		} else {
			if (sUrl == "") {
				return sUrl;
			}
			if (window.location.hostname == "localhost") {
				return "proxy" + sUrl;
			} else {
				return sUrl;
			}
		}
	
	/*}
	else {
		var finalURL = "Fail";
		return finalURL;
	}*/
}

