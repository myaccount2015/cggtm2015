
function savePassword(value) {
	
	if(g_runningInTablet || g_runningOnPhone) {
		window.localStorage.setItem("myPass", value );//JSON.stringify(value));
	} else {
		var passEncrypted = CryptoJS.enc.Utf16.parse(value);
		window.localStorage.setItem("myPass", JSON.stringify(passEncrypted));
	}
	
}

 function saveUserName(value) {
	
	 if(g_runningInTablet || g_runningOnPhone) {
		 window.localStorage.setItem("myID",value);// JSON.stringify(value));
	 }else {
		 var userEncrypted = CryptoJS.enc.Utf16.parse(value);
		 window.localStorage.setItem("myID", JSON.stringify(userEncrypted));
	 }
}
 
 function savePIN(value) {
		
	 if(g_runningInTablet || g_runningOnPhone) {
		 window.localStorage.setItem("uPin", value );// JSON.stringify(value));
	 }else {
		 var pinEncrypted = CryptoJS.enc.Utf16.parse(value);
		 window.localStorage.setItem("uPin", JSON.stringify(pinEncrypted));
	 }
}
 
 function getPassword() {
		
		myPass  = window.localStorage.getItem("myPass");
		
		if(g_runningInTablet || g_runningOnPhone) {
			return myPass;
		}else {
		
			if(myPass == null || myPass == undefined) {
				return "";
			}else {
				var JSONPass = JSON.parse(myPass);
				if(JSONPass.words==undefined) {
					return "";
				}else {
					var utf16Pass = CryptoJS.enc.Utf16.stringify(JSONPass);
					return utf16Pass;
				}
			}
		}
}

 function getUserName() {
		myID =  window.localStorage.getItem("myID");
		
		if(g_runningInTablet || g_runningOnPhone) {
			return myID;
		}else {
			if(myID==null || myID == undefined) {
				return "";
			}else {
				var JSONUser = JSON.parse(myID);
				if(JSONUser.words==undefined) {
					return "";
				}else {
					var utf16User = CryptoJS.enc.Utf16.stringify(JSONUser);
					return utf16User;
				}
			}
		}
}
 
 function getPin() {
		
		var myPin  = window.localStorage.getItem("uPin");
		
		if(g_runningInTablet || g_runningOnPhone) {
			return myPin;
		}else {
			if(myPin == null || myPin == undefined) {
				return "";
			}else {
				var JSONPin = JSON.parse(myPin);
				if(JSONPin.words==undefined) {
					return "";
				}else {
					var utf16Pin = CryptoJS.enc.Utf16.stringify(JSONPin);
					return utf16Pin;
				}
			}
		}
		
}
 
 function removeBrowserCookie(){
	 
	 
	 
	 var cookies= document.cookie.split(";");
	 for(i=0;i< cookies.length;i++){
	 var name= cookies [i].split("=")[0];
	 removeCookie(name,"",-1);
	 }
	 function removeCookie(name,value,days) {
		 
	                  var date = new Date();
	                  date.setTime(date.getTime()+(days*24*60*60*1000));
	                  var expires = "; expires="+date.toGMTString();
	                  document.cookie = name+"="+value+expires+"; path=/";
	                     		 
	                     		}

	 
 }