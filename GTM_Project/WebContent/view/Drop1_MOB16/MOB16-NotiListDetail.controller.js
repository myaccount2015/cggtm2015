sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB16-NotiListDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB16-NotiListDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB16-NotiListDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB16-NotiListDetail
*/
//	onExit: function() {
//
//	}
	
	handleNavButtonPress : function(){
		sap.ui.getCore().byId("splitAppNotiList").backToTopMaster();
	},

	responsivePopoverZoom : function(oControllerEvent){
		sap.ui.getCore().byId("Mob00ResPopUp").openBy(g_commonResponsivePopoverOpenBy);
	    var myScroll = new IScroll('#__container1-scroll', {  
	     zoom: true,  
	     scrollX: true,  
	     scrollY: true,  
	     mouseWheel: true,  
	     wheelAction: 'zoom',  
	     scrollbars: false,  
	     freeScroll: true  
	  });
	     var listItem = oControllerEvent.getParameter('listItem');
		 var contextPath = listItem.oBindingContexts.undefined.sPath;
		 var source = this.getModel().getProperty(contextPath + "/imageData");
		 sap.ui.getCore().byId("PopOverImage").setSrc(source);
		 //g_DeleteImageFromPopOver = getImgId;
		 g_DeleteImageListFromPopOver = source;
		 //g_DeleteImageListId = "Mob16AddedImageList";
	},
	
	handleIconTabBarSelect : function(oControlEvent)
	{   
		var key = oControlEvent.mParameters.key;
		if( key == "Mob16Image")
			{
			openSplashScreen();
			g_DeleteImageListId = "Mob16AddedImageList";
			var NotiNum = sap.ui.getCore().byId("Mob16DummyLabel").getText();  
			var listId = "Mob16ImageListItem";
			var MobId = "Mob16";
			var type = "IMG";
			getDocumentImageForMob16(NotiNum,listId,MobId,type);
			closeSplashScreen();
			}
		else if(key == "Mob16Doc" )
			{openSplashScreen();
			var NotiNum = sap.ui.getCore().byId("Mob16DummyLabel").getText();  
			var listId = "Mob16DocumentListItem";
			var MobId = "Mob16";
			var type = "DOC";
			getDocumentImageForMob16(NotiNum,listId,MobId,type);
			closeSplashScreen();
			}
		
	},
	

	
	
       handleMob16SelectedDocListpress : function(oControlEvent){
    	var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
   		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
   		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
   		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
   		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
   		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
   		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV");
   		var results = "/DocumentSet(Documentnumber='"  +  Documentnumber  +
   	    "',Documenttype='"    +  Documenttype    +
   	    "',Documentpart='"    +  Documentpart    +
   	    "',Documentversion='" +  Documentversion +
   	    "',Originaltype='"   +  Originaltype    +"')/$value";
   		var url12 = url1 + results;
   		if(g_runningOnPhone == false && g_runningInTablet == false) {
   			    window.open(url12, '_blank'); 
				window.focus();	
				
		} else {
			downloadAndDisplayPDF(url12);
		}
	},
	
	
	handleMob16SelectedImageListpress : function(oControlEvent){
    	var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
   		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
   		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
   		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
   		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
   		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
   		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV");
   		var results = "/DocumentSet(Documentnumber='"  +  Documentnumber  +
   	    "',Documenttype='"    +  Documenttype    +
   	    "',Documentpart='"    +  Documentpart    +
   	    "',Documentversion='" +  Documentversion +
   	    "',Originaltype='"   +  Originaltype    +"')/$value";
   		var url12 = url1 + results;
   		if(g_runningOnPhone == false && g_runningInTablet == false) {
   			    window.open(url12, '_blank'); 
				window.focus();			
		} else {
			downloadAndDisplayImage(url12);
		}
	},
		
		
	onSaveAndComplete: function() {
		//Get Notification Num
		debugger;
		var notifNumber= sap.ui.getCore().byId("objheader").getTitle();
		var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
		//Get Length of Added image in list
		
		var addedImageList = sap.ui.getCore().byId("Mob16AddedImageList").getModel();
		if( addedImageList != undefined){
			addedImageList = addedImageList.getData();
			if(addedImageList != null){
				addedImageList = addedImageList.length;
			}
		}
		var NotificationNo = padNotiNo;
		//var NotificationNo = "200000664";//200000476
		//var CurrentMob = "MOB16";
		
		var MobKeyValue = "QMQMEL";
		for( var i = 0 ; i< addedImageList; i++){
			var addedImageSourcePath1 = sap.ui.getCore().byId("Mob16AddedImageList").getModel().getData();
			var addedImageSourcePath = addedImageSourcePath1[i].imageData;
			var CurrentMob  = addedImageSourcePath1[i].imageName;
			var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
		}
		var demo = sap.ui.getCore().byId("demoswitch");  
		if (demo.getState()== true)
			{
			
			
			}
		else
			{
		openSplashScreen();//splash screen opened
		  setTimeout(function(){
	  
	    //Service Start Time
	    var logInfo =  getTimeStamp() +"MOB16:: Service: TasklistCollection Start" ;
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var oDataUpdateTask = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var longText = sap.ui.getCore().byId("MOB16_Notes").getValue();
		var createReqData = {
			"NotificationLongText" : longText,
			"TaskStatus" : "01" //Task Status - Completed is hard coded
		};
		var _g_TaskSeq= sap.ui.getCore().byId("objheader2").getAttributes()[0].getText();
		_g_TaskSeq= _g_TaskSeq.substring(15,_g_TaskSeq.length)
	    readRequestURL = "/TasklistCollection(NotificationNo='" + padNotiNo + "',TaskSequence='" + _g_TaskSeq +"')";
	    oDataUpdateTask.update(readRequestURL, createReqData, null, 
	    function(oResponse) {
		var app = sap.ui.getCore().byId("myApp"); 
		app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
		destroyMOb16Content();
		var msg = "Task is Closed with given details. \nNotification No: " + notifNumber + "  Task Sequence: " + _g_TaskSeq;
        jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);
        if( g_isDebug == true)
        {
        //Service End Time
        var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Finish" ;
        //Log file Service Start and End Time
        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
        logFileUpdate(g_ServiceStartEndTime);
        }
	}, function(oError){ 
		sap.m.MessageBox.show(

				"Error" + oError.message +" "+oError.status+" "+oError.Statustype

				);
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
		
	});  closeSplashScreen();//splash screen closed
		  },1000);//constant delay
			}
},
	
	onSave: function() {
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		if (demo.getState())
			{
			
			}
		else
			{
			    openSplashScreen();//splash screen opened
			    setTimeout(function(){
			    	var notifNumber= sap.ui.getCore().byId("objheader").getTitle();
					var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
					
			    	var addedImageList = sap.ui.getCore().byId("Mob16AddedImageList").getModel();
					if( addedImageList != undefined){
						addedImageList = addedImageList.getData();
						if(addedImageList != null){
							addedImageList = addedImageList.length;
						}
					}
					var NotificationNo = padNotiNo;
					//var NotificationNo = "200000664";//200000476
					//var CurrentMob = "MOB16";
					var MobKeyValue = "QMQMEL";
					for( var i = 0 ; i< addedImageList; i++){
						var addedImageSourcePath1 = sap.ui.getCore().byId("Mob16AddedImageList").getModel().getData();
						var addedImageSourcePath = addedImageSourcePath1[i].imageData;
						var CurrentMob  = addedImageSourcePath1[i].imageName;
						var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
					}
			    closeSplashScreen();//splash screen closed
			  //Service Start Time
	    var logInfo = getTimeStamp() +"MOB16:: Service: TasklistCollection Start" ;
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		var oDataUpdateTask = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
    	var longText = sap.ui.getCore().byId("MOB16_Notes").getValue();
		var createReqData = {
			"NotificationLongText" : longText,
			"TaskStatus" : "" //Task Status - BLANK for SAVE ONLY
		};
		var notifNumber= sap.ui.getCore().byId("objheader").getTitle();
		var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
		var _g_TaskSeq= sap.ui.getCore().byId("objheader2").getAttributes()[0].getText();
		_g_TaskSeq= _g_TaskSeq.substring(15,_g_TaskSeq.length)
		//readRequestURL = "/TasklistCollection(NotificationNo=" + _g_NotificationNo + ",TaskSequence=" + _g_TaskSeq ")";
		readRequestURL = "/TasklistCollection(NotificationNo='" + padNotiNo + "',TaskSequence='" + _g_TaskSeq +"')";
		oDataUpdateTask.update(readRequestURL, createReqData, null, 
				function(oResponse) {
		var msg = "Data saved successfully";
	    jQuery.sap.require("sap.m.MessageToast");
	    sap.m.MessageToast.show(msg);
		var app = sap.ui.getCore().byId("myApp"); 
		app.to("idGridSubMenuQM"); // Navigating to QM Sub Menu
		destroyMOb16Content();
		if( g_isDebug == true)
		{
		//Service End Time
		var logInfo1 = getTimeStamp() +"MOB16:: Service: TasklistCollection Finish" ;
		//Log file Service Start and End Time
		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		logFileUpdate(g_ServiceStartEndTime);
		}
	}, function(oError){ 
		//alert(oError.message +" "+oError.status+" "+oError.Statustype);
		sap.m.MessageBox.show(
				"Error" + oError.message +" "+oError.status+" "+oError.Statustype
				);
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
			  },1000);//constant delay
			  }
			

}

});