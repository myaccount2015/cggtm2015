sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB16-NotificationList
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB16-NotificationList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB16-NotificationList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB16-NotificationList
*/
//	onExit: function() {
//
//	}
	onSaveAndComplete: function() {
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		
		if (demo.getState())
			{
			
			var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
			splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
			
			var msg = "Task is Closed with given details. \nNotification No: " + 
			"000001 "+ "  Task Sequence: 001 ";
	        jQuery.sap.require("sap.m.MessageToast");
	        sap.m.MessageToast.show(msg);
			}
		else
			{
		
		  openSplashScreen();//splash screen opened
		  setTimeout(function(){
			    closeSplashScreen();//splash screen closed
			    

		//Service Start Time
		var logInfo = 	getTimeStamp() +"MOB16:: Service: TasklistCollection Start" ;
		
		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		var oDataUpdateTask = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL = "/TasklistCollection?&$format=json";
		oDataUpdateTask.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
		
		oDataUpdateTask.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
			      var result = oResponse.body; //Getting JSON response body
			      //Service End Time
			        
			        if( g_isDebug == true)
			        {
			        	var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Finish" ;
				        //Log file Service Start and End Time
				        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			        logFileUpdate(g_ServiceStartEndTime);
			        }
		
		}, 
		
		function(oError){  
				//alert(oError.message);
			
				/*sap.m.MessageBox.show(

						"Error" + oError.message

						);*/
			 try
				{
				var data = JSON.parse(oError.response.body);
				for(var event in data)
				{
					var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
				    		    messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");}
					catch(e)
					{
						sap.m.MessageBox.show(
								 e.message+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,
									"Error");
						break;
					}}}
		 
			catch(e)
				{
				sap.m.MessageBox.show(

			    		   "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");
				
				if( g_isDebug == true)
		        {
		        	var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Failed no network" ;
			        //Log file Service Start and End Time
			        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        logFileUpdate(g_ServiceStartEndTime);
		        }
				
				
				}
				
				
				
		});
		
var longText = sap.ui.getCore().byId("Text_AddNotes").getValue();
		
		var createReqData = {
			"NotificationLongText" : longText,
			"TaskStatus" : "01" //Task Status - Completed is hard coded
		};
		if(_g_NotificationNo == undefined && _g_TaskSeq == undefined) {
			_g_NotificationNo = null;
			_g_TaskSeq = null;
		}
		
	var padNotiNo = _g_NotificationNo.padBeginZero(_g_NotificationNo, 12);
	//readRequestURL = "/TasklistCollection(NotificationNo=" + _g_NotificationNo + ",TaskSequence=" + _g_TaskSeq ")";
	readRequestURL = "/TasklistCollection(NotificationNo='" + padNotiNo + "',TaskSequence='" + _g_TaskSeq +"')";
	oDataUpdateTask.update(readRequestURL, createReqData, null, 
	function(oResponse) {
		var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
		splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
		var app = sap.ui.getCore().byId("myApp"); 
		app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
		var msg = "Task is Closed with given details. \nNotification No: " + _g_NotificationNo + "  Task Sequence: " + _g_TaskSeq;
        jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);
		//Service End Time
        var logInfo1 = "MOB16:: Service Name: TasklistCollection: After Invocation: " + getTimeStamp();
        //Log file Service Start and End Time
        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
        if( g_isDebug == true)
        {
        logFileUpdate(g_ServiceStartEndTime);
        }
        
        
        
	}, function(oError){ 
		//alert(oError.message +" "+oError.status+" "+oError.Statustype);
		/*sap.m.MessageBox.show(

				"Error" + oError.message +" "+oError.status+" "+oError.Statustype

				);*/
		try
		{
		var data = JSON.parse(oError.response.body);
		for(var event in data)
		{
			var dataCopy = data[event];	
			try{
			var messageFromBackend = dataCopy.innererror.errordetails[0].message;
			sap.m.MessageBox.show(
		    		    messageFromBackend+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");}
			catch(e)
			{
				sap.m.MessageBox.show(
						 e.message+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");
				break;
			}}}
 
	catch(e)
		{
		sap.m.MessageBox.show(

	    		   "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,
					"Error");
		}
		
	});
			
			
			
			
		  },1000);//constant delay
			}
			
	
},


onSave: function() {
	
	var demo = sap.ui.getCore().byId("demoswitch");  
	
	if (demo.getState())
		{
		
		var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
		splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
		
		var app = sap.ui.getCore().byId("myApp"); 
		app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
		
		var msg = "Data saved successfully";
        jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);
		}
	else
		{
		openSplashScreen();//splash screen opened


		  setTimeout(function(){
		    
		  //Service Start Time
		    var logInfo = getTimeStamp() +"MOB16:: Service: TasklistCollection Start" ;

	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
	if(serviceURL == "Fail")
	 {
	 return false;
	 }
	var oDataUpdateTask = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	var readRequestURL = "/TasklistCollection?&$format=json";
	oDataUpdateTask.setHeaders({
		"X-Requested-With" : "XMLHttpRequest",
		"Content-Type" : "application/json",
		"X-CSRF-Token" : "Fetch",
		"DataServiceVersion" : "2.0"
	});
	
	oDataUpdateTask.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
		var result = oResponse.body; //Getting JSON response body
		if( g_isDebug == true)
		{
		//Service End Time
		var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Finish" ;
		//Log file Service Start and End Time
		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		logFileUpdate(g_ServiceStartEndTime);
		}
	
	}, 
	
	function(oError){  
			//alert(oError.message);
		
			/*sap.m.MessageBox.show(

					"Error" + oError.message

					);*/
		 try
			{
			var data = JSON.parse(oError.response.body);
			for(var event in data)
			{
				var dataCopy = data[event];	
				try{
				var messageFromBackend = dataCopy.innererror.errordetails[0].message;
				sap.m.MessageBox.show(
			    		    messageFromBackend+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");}
				catch(e)
				{
					sap.m.MessageBox.show(
							 e.message+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
					break;
				}}}
	 
		catch(e)
			{
			sap.m.MessageBox.show(

		    		   "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
			if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Failed no network" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
			
			}
			
			
			
	});
	
var longText = sap.ui.getCore().byId("Text_AddNotes").getValue();
	
	var createReqData = {
		"NotificationLongText" : longText,
		"TaskStatus" : "" //Task Status - BLANK for SAVE ONLY
	};
	

	if(_g_NotificationNo == undefined && _g_TaskSeq == undefined) {
		_g_NotificationNo = null;
		_g_TaskSeq = null;
	}
	
	var padNotiNo = _g_NotificationNo.padBeginZero(_g_NotificationNo, 12);


//readRequestURL = "/TasklistCollection(NotificationNo=" + _g_NotificationNo + ",TaskSequence=" + _g_TaskSeq ")";
readRequestURL = "/TasklistCollection(NotificationNo='" + padNotiNo + "',TaskSequence='" + _g_TaskSeq +"')";

oDataUpdateTask.update(readRequestURL, createReqData, null, 
function(oResponse) {
	var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
	splitApp.toDetail("idBlankPage"); // Navigating to Blank Page
	
	var app = sap.ui.getCore().byId("myApp"); 
	app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
	
	var msg = "Data saved successfully";
    jQuery.sap.require("sap.m.MessageToast");
    sap.m.MessageToast.show(msg);
	
}, function(oError){ 
	//alert(oError.message +" "+oError.status+" "+oError.Statustype);
	/*sap.m.MessageBox.show(

			"Error" + oError.message +" "+oError.status+" "+oError.Statustype

			);*/
	try
	{
	var data = JSON.parse(oError.response.body);
	for(var event in data)
	{
		var dataCopy = data[event];	
		try{
		var messageFromBackend = dataCopy.innererror.errordetails[0].message;
		sap.m.MessageBox.show(
	    		    messageFromBackend+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,
					"Error");}
		catch(e)
		{
			sap.m.MessageBox.show(
					 e.message+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
			break;
		}}}

catch(e)
	{
	sap.m.MessageBox.show(

    		   "Service Not Available - Please contact system administrator" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,
				"Error");}
	
});
closeSplashScreen();//splash screen closed
},1000);//constant delay
		  }
		

} ,

/*backMobile: function()
{
	
	  
  	 var containerImage3 = sap.ui.getCore().byId("containerImage1MOB16");
	    var containerImage2 = sap.ui.getCore().byId("containerImage2MOB16");
	    var containerImage1 = sap.ui.getCore().byId("containerImage3MOB16");
	// containerImage3.setVisible(false);
	// containerImage2.setVisible(false);
	// containerImage1.setVisible(false);
	 var items = window.localStorage.getItem('000002');
	window.localStorage.removeItem('000002');
	
    app = sap.ui.getCore().byId("myApp");  
    app.to("idGridSubMenuQM");  
    if (items != undefined && items != null && items.length != 0)
	 {
    var items2 = window.localStorage.getItem('000002');
		// alert(items2);
		   oImageArrReceived =  JSON.parse(items2);
		   oImageArrReceived.splice(0,oImageArrReceived.length-1);
		    
			var imageModelString = 	JSON.stringify(oImageArrReceived);
			 window.localStorage.setItem("000002", imageModelString);
		// alert( oImageArrReceived[0]);
	 }

}*/


});