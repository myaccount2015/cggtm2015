jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("com.cg.gtm.view.Drop3_MOB09.MOB09RemoveDetail", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
	},

	handleHelpButtonPress: function () {


   
		
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB09";
		var helpDocNumber = HelpDocument(MobileScreenNumber);
		url1 = url1 + "('"+helpDocNumber+"')/$value";
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
		//navigator.app.loadUrl(url1, { openExternal:true } );
			downloadAndDisplayPDF(url1);
		}
		

	
		
	

	},
	
	handleValueHelp: function () {
		
	},
	
	handleChangeInstalledLocationButtonPress: function () {
	    	
	    	sap.ui.getCore().byId("myApp").to("MOB07Initial");
	    	
	    	sap.ui.getCore().byId("MOB07FleetInput").setValue("");
			sap.ui.getCore().byId("MOB07FleetInput").setEnabled(true);

			sap.ui.getCore().byId("MOB07TrainInput").setValue("");
			sap.ui.getCore().byId("MOB07TrainInput").setEnabled(false);

			sap.ui.getCore().byId("MOB07CarInput").setValue("");
			sap.ui.getCore().byId("MOB07CarInput").setEnabled(false);

			sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
			sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(false);

			sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
			sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);
		
	    
	    },
	
	handleRemoveButtonPress: function () {
		
		if ( undefined == 	window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"REMOVE"))
		{
		window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"REMOVE", 
				sap.ui.getCore().byId("MOB09ManufacturerSerialNumberInput").getValue()+"_"+
				sap.ui.getCore().byId("MOB09RemovePositionInput").getValue());
		}
	
	else
		{
	window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"REMOVE");
	window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"REMOVE", 
			sap.ui.getCore().byId("MOB09ManufacturerSerialNumberInput").getValue()+"_"+
			sap.ui.getCore().byId("MOB09RemovePositionInput").getValue()); 
		}
		drop3TRQ(g_ordnum + "_" + g_actnum, "REMOVE");
		 writeToFileMOB09REMOVE(g_ordnum , g_actnum);
		sap.ui.getCore().byId("myApp").back();
	}
	
});

function writeToFileMOB09REMOVE(ordnum , actnum)
{
    
    var notiNumber =  "";
    var currDate = new Date();
		currDate.toDateString();
		  var timeMilli = currDate.getTime();
   // var items = window.localStorage.getItem('NOTILISTMOB01T');
    var trQ = window.localStorage.getItem('TRQ');
  	 if (trQ === undefined || trQ === null || trQ.length === 0)
  	 {
  		
  		// create a metadata object 
  		 /*var currDate = new Date();
       		currDate.toDateString();
       		  var timeMilli = currDate.getTime();*/
  		 
   		str1 = currDate.toDateString();
  		str2 =  " ";
  		str3 = currDate.toLocaleTimeString();
  		var res1 = str1.concat(str2);
  		var res2 = res1.concat(str3);
  		 
  		 var data =  { "Tran": "REMOVE",
  				       "Key" : timeMilli ,
  				      "Time" : timeMilli,
  				      "Status" : "INIT" ,
  				      "Date" : res2};
  		 
  		 
       		  notiNum[0] = data; 
  		var notiModelString = 	JSON.stringify(notiNum);
  		 window.localStorage.setItem("TRQ", notiModelString);//store the notification number 
  		
 		notiNumber="NOTI "+notiNumber;
  		 //NOW move data to actual object
 		
 		
  		var notiData = {
  				//"title": timeMilli.toString().concat(" (Q1)"),notiNumber
  				"time" : timeMilli,
  				"title": notiNumber,
  				"date": res2,
  				"Order" : ordnum,
  				"Activity" : actnum ,
  				"Equipment" : "3002595",
  				"Plant" : "GWNP",
  				"StgeLoc" :  "0001",
  				
			   };
  		

  			var stringifiedNoti = JSON.stringify(notiData);
  			
  			
  			var dataForFile =  {
  					            "Items" : notiData};
  			//var dataForFile = stringifiedNoti ;//JSON.stringify(result);
  			var myJSONObject = {"myData": JSON.stringify(dataForFile)};
  			
  			if(g_runningInTablet || g_runningOnPhone) {
  				//saveOnMobileMOB01(myJSONObject , timeMilli);
  				saveOnMobileMOB01(JSON.stringify(dataForFile) , timeMilli);  
  			}else {
  				//saveOnDesktopMD(myJSONObject);
  			
  			
  			//dataForFile =  "Ekdum jhakaas hai re ";
  			$.ajax({
  			  url: "FileHandle?readOrWrite=write&fileName="+timeMilli,
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
  			
  			//window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notification number 
  			//createModifiedModelCompMOB01(timeMilli);
  	 }
  	 else
  		 {
  		 
  		
  		
  		notiNumRcvd =  JSON.parse(trQ);
  		
  		str1 = currDate.toDateString();
  		str2 =  " ";
  		str3 = currDate.toLocaleTimeString();
  		var res1 = str1.concat(str2);
  		var res2 = res1.concat(str3);
  		 
  		 var data =  { "Tran": "REMOVE",
			       "Key" : timeMilli ,
				      "Time" : timeMilli,
				      "Status" : "INIT" ,
				      "Date" : res2};
  		
		 
		 
  		notiNumRcvd.push(data);//pushing new noti number 
  		
  		//onotiNumRcvd.push(timeMilli);//pushing new noti number 
  		 
  		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
  		 window.localStorage.setItem("TRQ", notiNumRcvdString);
  		 
  		str1 = currDate.toDateString();
 		str2 =  " ";
 		str3 = currDate.toLocaleTimeString();
 		var res1 = str1.concat(str2);
 		var res2 = res1.concat(str3);
 		notiNumber="NOTI "+notiNumber;
 		
  		var notiData = {
  				//"title": timeMilli.toString().concat(" (Q1)"),notiNumber
  				"time" : timeMilli,
  				"title": notiNumber,
  				"date": res2,
  				"Order" : ordnum,
  				"Activity" : actnum ,
  				"Equipment" : "3002595",
  				"Plant" : "GWNP",
  				"StgeLoc" :  "0001",
  				
			   };
  			//var stringifiedNoti = JSON.stringify(notiData);
  			
  			var stringifiedNoti = JSON.stringify(notiData);
  			
  			
  			var dataForFile =  {
			            "Items" : notiData};
	//var dataForFile = stringifiedNoti ;//JSON.stringify(result);
	var myJSONObject = {"myData": JSON.stringify(dataForFile)};
	
  			if(g_runningInTablet || g_runningOnPhone) {
  				saveOnMobileMOB01(JSON.stringify(dataForFile) , timeMilli);  
  			}else {
  			$.ajax({
    			  url: "FileHandle?readOrWrite=write&fileName="+timeMilli,
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
  			   
  			//window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
  			//createModifiedModelCompMOB01(timeMilli);
    	}
  	 
  
	  

}