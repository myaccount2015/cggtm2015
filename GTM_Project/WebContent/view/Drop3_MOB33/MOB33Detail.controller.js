sap.ui.controller("com.cg.gtm.view.Drop3_MOB33.MOB33Detail", {
	
	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB33SplitApp").backDetail();
	},
	
	handleSubmitButtonPress: function () {
		
		if ( g_MOB33FROMMAIN)
			{
			
			if ( undefined == 	window.localStorage.getItem(g_MOB33Mileage+"_"+"MSR"))
			{
			window.localStorage.setItem(g_MOB33Mileage+"_"+"MSR", 
					sap.ui.getCore().byId("MOB33READING").getValue()+"_"+
					sap.ui.getCore().byId("MOB33COMMENT").getValue());
			}
		
		else
			{
		window.localStorage.removeItem(g_MOB33Mileage+"_"+"MSR");
		window.localStorage.setItem(g_MOB33Mileage+"_"+"MSR", 
				sap.ui.getCore().byId("MOB33READING").getValue()+"_"+
				sap.ui.getCore().byId("MOB33COMMENT").getValue()); 
			}
			
			drop3TRQ(g_MOB33Mileage, "MSR");
			}
		
		else
			{
			

			
			if ( undefined == 	window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"MSR"))
			{
			window.localStorage.setItem(g_MOB33Mileage+"_"+"MSR", 
					sap.ui.getCore().byId("MOB33READING").getValue()+"_"+
					sap.ui.getCore().byId("MOB33COMMENT").getValue());
			}
		
		else
			{
		window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"MSR");
		window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"MSR", 
				sap.ui.getCore().byId("MOB33READING").getValue()+"_"+
				sap.ui.getCore().byId("MOB33COMMENT").getValue()); 
			}
			drop3TRQ(g_ordnum + "_" + g_actnum, "MSR");
			
			}
		writeToFileMOB33(g_ordnum , g_actnum);
		sap.ui.getCore().byId("MOB33ResultsList").removeSelections();
		sap.ui.getCore().byId("MOB33SplitApp").backMaster();
		sap.ui.getCore().byId("MOB33SplitApp").backDetail();
		sap.ui.getCore().byId("myApp").back();
	}

});

function writeToFileMOB33(ordnum , actnum)
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
  		 
  		 var data =  { "Tran": "MSR",
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
  				"MeasurementPoint" : "92" ,
  				"Comments" : sap.ui.getCore().byId("MOB33COMMENT").getValue(),
  				"RecordedValue" : sap.ui.getCore().byId("MOB33READING").getValue(),
			 
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
  		 
  		 var data =  { "Tran": "MSR",
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
  				"MeasurementPoint" : "92" ,
  				"Comments" : sap.ui.getCore().byId("MOB33COMMENT").getValue(),
  				"RecordedValue" : sap.ui.getCore().byId("MOB33READING").getValue(),
			 
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