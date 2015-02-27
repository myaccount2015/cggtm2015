sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiTaskDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB16-NotiTaskDetail
*/
	onInit: function() {},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB16-NotiTaskDetail
*/
	onBeforeRendering: function() {},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB16-NotiTaskDetail
*/
	onAfterRendering: function() {
		
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB16-NotiTaskDetail
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
			try{
				var data = JSON.parse(oError.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
					catch(e)
					{sap.m.MessageBox.show(e.message+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");break;
					}}}catch(e){sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
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
       /* jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(msg);*/
		sap.m.MessageBox.show(
        		msg +" ",
					sap.m.MessageBox.Icon.SUCCESS,
					"Success");
		
	}, function(oError){ 
		//alert(oError.message +" "+oError.status+" "+oError.Statustype);
		/*sap.m.MessageBox.show(

				"Error" + oError.message +" "+oError.status+" "+oError.Statustype

				);*/
		try{
			var data = JSON.parse(oError.response.body);
			for(var event in data){
			var dataCopy = data[event];	
				try{
				var messageFromBackend = dataCopy.innererror.errordetails[0].message;
				sap.m.MessageBox.show(
				messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
				catch(e)
				{sap.m.MessageBox.show(e.message+ " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");break;
				}}}catch(e){sap.m.MessageBox.show(
                "Service Not Available - Please contact system administrator" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");}
		
		
	});
			}
			
	
},
	
	onSave: function() {
		alert("onSave");
	},
	
	showPDFMOB16 : function()
	{
		
	
		 if ( g_runningOnPhone == true)
			{
			   var myapp = sap.ui.getCore().byId("myApp");
		           myapp.to("idMOB16PDFView");
			   
			}
		   
		   else
			   {
		var app = sap.ui.getCore().byId("splitAppNotiList");
	 		app.to("idMOB16PDFView");
			   }
	
 		
 		/*
 		 * Setting the IFRAME PDF Container - Start
 		 */
 		var pdfHTMLContainer = sap.ui.getCore().byId("pdfHTMLContainerMOB16");
 		pdfHTMLContainer.setContent("<div id='pdfFrame' style='height:100%;padding-top:3%;padding-bottom:8%;padding-right:3%;padding-left:3%;'> <IFRAME name='iframe' src='viewer/web/viewer.html?file=sample.pdf' width=100% height=100% marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=auto></IFRAME> </div>");
 		/*
 		 * Setting the IFRAME PDF Container - End
 		 */
		
	},
	
	showIMGMOB16 : function()
	{
	
		   var img = sap.ui.getCore().byId("mob16ImgVie");
			   img.setSrc("img/mob31mattool.jpg");
			   
			   if ( g_runningOnPhone == true)
				{
				   var myapp = sap.ui.getCore().byId("myApp");
			          //  myapp.to("idMob16NotiListMaster");idGridSubMenuQM  idMOB16PDFView
			            myapp.to("idMOB16IIMGView");
				   
				}
			   
			   else
				   {
				var app = sap.ui.getCore().byId("splitAppNotiList");
		 		app.to("idMOB16IIMGView");
				   }
			  
	},
	
	
	imgOpenMOB16: function(event) {
		//aler("hi");

		var img = sap.ui.getCore().byId(event.mParameters.id);
	
		var str = img.mProperties.src;
		
		 var img = sap.ui.getCore().byId("mob16ImgVie");
		   img.setSrc(str);
			var app = sap.ui.getCore().byId("splitAppNotiList");
	 		app.to("idMOB16IIMGView");
		
		/*var n = str.lastIndexOf(".");
		
		var result = str.splice( n, 0, "_1" );
		
		var imgPop = sap.ui.getCore().byId("ImagePopMOB16");
		
		imgPop.setSrc(str);
		
		if (! this.popover) {
			this.popover = sap.ui.xmlfragment(
				"myprefix",
				[this.getView().getControllerName(), "popover"].join("."),
				this // associate controller with the fragment
			);
			
			this.popover = sap.ui.getCore().byId("PopoverMOB16");
		}
		//this.popover.setModel(this.getView().getModel());
		//this.popover.bindElement("/ProductCollection/0");
		this.popover.openBy(event.getSource());
		*/
		
	}
});