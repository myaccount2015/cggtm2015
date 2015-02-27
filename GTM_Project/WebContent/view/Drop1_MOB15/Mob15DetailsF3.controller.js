sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.Mob15DetailsF3", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob15DetailsF3
*/
onInit: function() {
		
		notiNum = new Array();
		 oImageModel = new sap.ui.model.json.JSONModel();
		 notiImage = new Array();
		oImageArrReceived = new Array();
		imgid = "";

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
	
	onResolveSuccess : function(fileEntry) {
		 // Get a directory reader
	    var directoryReader = fileEntry.createReader();
	    
	    // Get a list of all the entries in the directory
	    directoryReader.readEntries(this.successImg ,this.failImg);
	    
	    var i;
		
	    var len = oImageArrReceived.length;
	    var image1 = sap.ui.getCore().byId("imageF31");
	    var image2 = sap.ui.getCore().byId("imageF32");
	    var image3 = sap.ui.getCore().byId("imageF33");
	    
	    
	    var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
	    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
	    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
	    containerImage1.setVisible(false);
		 containerImage2.setVisible(false);
		 containerImage3.setVisible(false);
	    
	    if (len >= 3)
		{
		
		 console.log(3);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
		 containerImage3.setVisible(true);
		 containerImage2.setVisible(true);
		 containerImage1.setVisible(true);
		
		
		}
	else if (len == 2)
		{
		 console.log(2);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 containerImage3.setVisible(false);
		 containerImage2.setVisible(true);
		 containerImage1.setVisible(true);
		
		}

	else if (len == 1)
	{
	console.log(1);
      image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
      containerImage3.setVisible();
		
		 containerImage1.setVisible(true);
		 containerImage2.setVisible(false);
		 containerImage3.setVisible(false);
	}
	  
	},

	failImg : function(evt) {
		
		sap.m.MessageBox.show(evt.target.error.code);
	},

	successImg : function(entries) {var i;
	
    var len = oImageArrReceived.length;
    var image1 = sap.ui.getCore().byId("imageF31");
    var image2 = sap.ui.getCore().byId("imageF32");
    var image3 = sap.ui.getCore().byId("imageF33");
    
    var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
    containerImage1.setVisible(false);
	 containerImage2.setVisible(false);
	 containerImage3.setVisible(false);
    
    if (len >= 3)
	{
	
	 console.log(3);
	 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
	 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
	 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
	 containerImage3.setVisible(true);
	 containerImage2.setVisible(true);
	 containerImage1.setVisible(true);
	
	
	}
else if (len == 2)
	{
	 console.log(2);
	 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
	 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
	 containerImage3.setVisible(false);
	 containerImage2.setVisible(true);
	 containerImage1.setVisible(true);
	
	}

else if (len == 1)
{
console.log(1);
  image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
  containerImage3.setVisible();
	
	 containerImage1.setVisible(true);
	 containerImage2.setVisible(false);
	 containerImage3.setVisible(false);
}},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob15DetailsF3
*/
	onBeforeRendering: function() {
		var isRunningOnDesktop = g_runningOnDesktop; // determine if the applicatio is running on desktop or as a mobile app 

		if (g_runningInTablet == true || g_runningOnPhone == true)  // Show image part if on mobile 
			{	
		var notiImage = new Array();
		 var items = window.localStorage.getItem('000001');
		 if (items === undefined || items === null || items.length === 0)
		 {
			 
			
		 }
		 else
			 {
			 var items2 = window.localStorage.getItem('000001');
			
			   oImageArrReceived =  JSON.parse(items2);
			//   alert(oImageArrReceived);
				 
			 }
		// window.resolveLocalFileSystemURI("file:///storage//emulated/0/EasyPacking", this.onResolveSuccess, this.fail);
	
			}
	},


/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob15DetailsF3
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob15DetailsF3
*/
//	onExit: function() {
//
//	}
	openMatSearch : function()
	{
		/*var splitApp = sap.ui.getCore().byId("splitApp");  
		splitApp.to("idMATSR"); */
		
		backNavMat = "Mob15CreateNoti";
		globalMob15Detail == "F3"
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		 inputPlantMat.setEnabled(true);
			g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
	    
	  /*  if (MOB15plantCode != "")
	    	{
	    inputPlantMat.setValue(MOB15plantDesc);
	    getSelectedPlantId = MOB15plantCode ;
	    selectedPlantID = MOB15plantCode;
	    inputPlantMat.setEnabled(false);
	    	}
	    
	    else
	    	{
	    	 inputPlantMat.setEnabled(true);
	    	
	    	}*/
	},
	
	imgOpen: function(event) {
		var img = sap.ui.getCore().byId(event.mParameters.id);
		var str = img.mProperties.src;
		
		var img = sap.ui.getCore().byId("mob16ImgVieF3");
		   img.setSrc(str);
			var app = sap.ui.getCore().byId("splitApp");
	 		app.to("idMOB15F3IMGView");
		/*var n = str.lastIndexOf(".");
		
		var result = str.splice( n, 0, "_1" );
		
		var imgPop = sap.ui.getCore().byId("ImagePop4");
		
		imgPop.setSrc(str);
		
		if (! this.popover) {
			this.popover = sap.ui.xmlfragment(
				"myprefix",
				[this.getView().getControllerName(), "popover"].join("."),
				this // associate controller with the fragment
			);
			
			this.popover = sap.ui.getCore().byId("ImgPopover4");
		}
		//this.popover.setModel(this.getView().getModel());
		//this.popover.bindElement("/ProductCollection/0");
		this.popover.openBy(event.getSource());
		*/
		
	},
	
	onCreateNoti: function(event) {
		
		var isNotiEnabled = sap.ui.getCore().byId("inputMatnr4").getEnabled();
		
		if(!isNotiEnabled) {
			return false;
		}
		
		var valError = 0;
		if (null ==  sap.ui.getCore().byId("inputMatnr4").getValue() || sap.ui.getCore().byId("inputMatnr4").getValue() == "")
			
			{
			sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.Error);
			valError = 1;
			}
		
		else
			{
			
			sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
			}
			if (	 null ==  sap.ui.getCore().byId("descf3").getValue() ||  sap.ui.getCore().byId("descf3").getValue() == ""  )
				    	  {
			
			sap.ui.getCore().byId("descf3").setValueState(sap.ui.core.ValueState.Error);
			valError = 1;
				    	  }
			
			else
				{
				
				sap.ui.getCore().byId("descf3").setValueState(sap.ui.core.ValueState.None);
				}
			
			
			
			if (	 null ==  sap.ui.getCore().byId("ipQty4").getValue() ||  sap.ui.getCore().byId("ipQty4").getValue() == ""  )
	    	  {sap.ui.getCore().byId("ipQty4").setValueState(sap.ui.core.ValueState.Error);
              valError = 1;}
             else
	            {
            	 

           	  
         	    var inQtyInt = parseInt( sap.ui.getCore().byId("ipQty4").getValue());
     		
     		if ( inQtyInt == 0)
     			{
     			
     			sap.m.MessageBox.show(
     					 "Please enter a quantity greater than Zero ",
     								sap.m.MessageBox.Icon.ERROR,
     								"Error");  
     			 valError = 2;
     			sap.ui.getCore().byId("ipQty4").setValueState(sap.ui.core.ValueState.Error);
     			}
     		
     		else
     			{
     			 sap.ui.getCore().byId("ipQty4").setValueState(sap.ui.core.ValueState.None);
     			
     			}
	            
            	 
            	// sap.ui.getCore().byId("ipQty4").setValueState(sap.ui.core.ValueState.None); 
            	 }
			
			if (	 true ==  sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").getVisible() )
				{if ( sap.ui.getCore().byId("ip_SerialNo4").getValue() == "")
					{
					 sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.Error);
	                 valError = 1;}
				else{ sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);}}
			

			if (	 true ==  sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").getVisible() )
	    	  {if (  sap.ui.getCore().byId("ip_BatNo4").getValue() == "" )
					{
					  sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.Error);
		              valError = 1;}
			else{sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);}
	    	  }

  
			
			
			
			
			
			if (  valError ==  1  ||   valError ==  2)
	    	{
			 
			 if (  valError ==  1 )
				 {
			 sap.m.MessageBox.show("Please provide data in all mandatory fields",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
	    	}
	    	  
	    	  }
		
		else
			{
			
			 // creat the notification ....
			  var demo = sap.ui.getCore().getElementById("demoswitch").getState();
			if (demo)
				{

	    		var msg = 'Notification Created Successfully !!! \n Notification Id got generated in the system: DEMO123456';
	          // var msg = oResponse.MessageText;
	      		jQuery.sap.require("sap.m.MessageToast");
	            sap.m.MessageToast.show(msg);
	            
	            var notiNumber =  "DEMO123456";
	           
	            var items = window.localStorage.getItem('NOTILIST');
	          	 if (items === undefined || items === null || items.length === 0)
	          	 {
	          		
	          		// create a metadata object 
	          		 var currDate = new Date();
	    	       		currDate.toDateString();
	    	       		  var timeMilli = currDate.getTime();
	    	       		  notiNum[0] = timeMilli; 
	          		var notiModelString = 	JSON.stringify(notiNum);
	          		 window.localStorage.setItem("NOTILIST", notiModelString);//store the notification number 
	          		 
	          		str1 = currDate.toDateString();
	         		str2 =  " ";
	         		str3 = currDate.toLocaleTimeString();
	         		var res1 = str1.concat(str2);
	         		var res2 = res1.concat(str3);
	         		
	          		 //NOW move data to actual object
	          		var notiData = {
	         				//"title": timeMilli.toString().concat(" (F3)"),
	         				"title": notiNumber.concat(" (F3)"),
	         				"date": res2,
	         				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
	         				"matnum":sap.ui.getCore().byId("inputMatnr4").getValue(),
	         				"qty" :  sap.ui.getCore().byId("ipQty4").getValue(),
	         				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
	         				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
	         				"delnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
	         				"selnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
	         				"batchnum" :  sap.ui.getCore().byId("ip_BatNo4").getValue(),
	         				"desc" :  sap.ui.getCore().byId("descf3").getValue(),
	         				"addninfo" :  sap.ui.getCore().byId("adninfof3").getValue(),
	         				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
	         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
	         				"imgList" : [sap.ui.getCore().byId("imageF31").getSrc(),
	        				             sap.ui.getCore().byId("imageF32").getSrc(),
	        				             sap.ui.getCore().byId("imageF33").getSrc()],
	        				"status" : status ,
	        				"createdTime" : timeMilli,
	        				"icon" : "img/images_2.jpg",
	        				"matdesc" : sap.ui.getCore().byId("idMatDesMob15-Materialerror").getText(),
	        				
	         			};
	          		

	          			var stringifiedNoti = JSON.stringify(notiData);
	          		
	          			window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notification number 
	          	 }
	          	 else
	          		 {
	          		 
	          		
	          		 var currDate = new Date();
	    	       		currDate.toDateString();
	    	       		  var timeMilli = currDate.getTime();
	          		notiNumRcvd =  JSON.parse(items);
	          		notiNumRcvd.push(timeMilli);//pushing new noti number 
	          		 
	          		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
	          		 window.localStorage.setItem("NOTILIST", notiNumRcvdString);
	          		 
	          		str1 = currDate.toDateString();
	         		str2 =  " ";
	         		str3 = currDate.toLocaleTimeString();
	         		var res1 = str1.concat(str2);
	         		var res2 = res1.concat(str3);
	          		 
	          		var notiData = {
	         				//"title": timeMilli.toString().concat(" (F3)"),
	         				"title": notiNumber.concat(" (F3)"),
	         				"date": res2,
	         				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
	         				"matnum":sap.ui.getCore().byId("inputMatnr4").getValue(),
	         				"qty" :  sap.ui.getCore().byId("ipQty4").getValue(),
	         				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
	         				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
	         				"delnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
	         				"selnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
	         				"batchnum" :  sap.ui.getCore().byId("ip_BatNo4").getValue(),
	         				"desc" :  sap.ui.getCore().byId("descf3").getValue(),
	         				"addninfo" :  sap.ui.getCore().byId("adninfof3").getValue(),
	         				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
	         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
	         				"imgList" : [sap.ui.getCore().byId("imageF31").getSrc(),
	        				             sap.ui.getCore().byId("imageF32").getSrc(),
	        				             sap.ui.getCore().byId("imageF33").getSrc()],
	        				"status" : status ,
	        				"createdTime" : timeMilli,
	        				"icon" : "img/images_2.jpg",
	        				"matdesc" : sap.ui.getCore().byId("idMatDesMob15-Materialerror").getText(),
	        				"resforfail" : messageFromBackend,
	         			};
	          		

	          			var stringifiedNoti = JSON.stringify(notiData);
	          			window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
	          			
	          			
	          	 
	            	}
	          	
	            app = sap.ui.getCore().byId("myApp");  
	            app.to("idGridSubMenuCreateNoti");
				
				}
			else
				{
	    	  
				 var currDate = new Date();
	    	       	currDate.toDateString();
	    	       	var timeMilli = currDate.getTime();
	    		 // glo_NotiKey = timeMilli; 
	    		  
	    		  
	    		  if(typeof glo_NotiKey == 'undefined') {
	    	  	    	glo_NotiKey = timeMilli; 
	    	  	      }else	if(glo_NotiKey.toString().trim().length==0) {
	    	  	    		glo_NotiKey = timeMilli; 
	    	  	      }  
	    		  
	    		  
	    	saveNotiDeatils(glo_NotiKey, "F3", "Saved", null, null, false); //Saving Notification
	    	
	    	
	    	openSplashScreen();//splash screen opened
	    	
	    	//Service Start Time
	    	var logInfo = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Start" ;
	    	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
	    	if(serviceURL == "Fail")
			 {
	    		  resetF3(); //Resetting F3 Notification
			 return false;
			 }
	    	
	  		var oDataCreateInspLot = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	  		var readRequestURL = "/TasklistCollection";
	  		
	  		oDataCreateInspLot.setHeaders({
	  			"X-Requested-With" : "XMLHttpRequest",
	  			"Content-Type" : "application/json",
	  			"X-CSRF-Token" : "Fetch",
	  			"DataServiceVersion" : "2.0"
	  		});
	  		var matnum = sap.ui.getCore().byId("inputMatnr4"); 
	  		var desc = sap.ui.getCore().byId("descf3"); 
	  		var soldTo = sap.ui.getCore().byId("inputSoldTo");
	  		var serial = sap.ui.getCore().byId("ip_SerialNo4");
	  		var quantity = sap.ui.getCore().byId("ipQty4");
	  		var batchF3 = sap.ui.getCore().byId("ip_BatNo4");
	  		var addninfo = sap.ui.getCore().byId("adninfof3");
	  		
	  		var createReqData = {
	  				"NotificationDescription" : desc.getValue(),
	  				"NotificationType" :  "F3",
	  				"MaterialNumber": matnum.getValue(),
	  				"NotificationLongText" : addninfo.getValue(),
	  			
	  				"Batch" :batchF3.getValue(),
	  				"SerialNumber": serial.getValue(),
	  				"Quantity":quantity.getValue(),
	  				 "MessageText":g_MOB15MatPlant
	  			};
	  		
	  		oDataCreateInspLot.create(readRequestURL, createReqData, null, 
	  				function(oResponse) {
	  			
			//var msg = 'Notification Created Successful !!! \n Notification Id got generated in the system: 1984672';
	  			
	  	        
	  	       // var notiNumber =   msg.substring(24, 36); //TODO: Get the Notification No from Response
	  	        var notiNumber = oResponse.NotificationNo ; 
	  	       // glo_NotiKey = notiNumber;
	  	        
	  	      saveNotiDeatils(glo_NotiKey, "F3", "Success", notiNumber, null, false); //Saving Notification
	  	        
	  	        var keyVal = glo_NotiKey;
	  	     // create a metadata object 
	  	 		 var currDate = new Date();
	  	      		currDate.toDateString();
	  	        var timeMilli = currDate.getTime();
	  	        
	  	        if(keyVal == undefined) {
	  	        	keyVal = timeMilli;
	  	        }
	  	       		
	  	        
	  	    //DMS Start::
				var notifNumber= oResponse.NotificationNo;
				var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
		    	var addedImageList = sap.ui.getCore().byId("Mob15_F3_AddedImageList").getModel();
				if( addedImageList != undefined){
					addedImageList = addedImageList.getData();
					if(addedImageList != null){
						addedImageList = addedImageList.length;
					}
				}
				var NotificationNo = padNotiNo;
				//var NotificationNo = "200000664";//200000476
				//var CurrentMob = "MOB15";
				var MobKeyValue = "QMQMEL";
				for( var i = 0 ; i< addedImageList; i++){
					var addedImageSourcePath1 = sap.ui.getCore().byId("Mob15_F3_AddedImageList").getModel().getData();
					var addedImageSourcePath = addedImageSourcePath1[i].imageData;
					var CurrentMob  = addedImageSourcePath1[i].imageName;
					var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
				}
				//DMS End
				
	  	      setTimeout(function(){
	  	        closeSplashScreen();//splash screen closed
	  	      var app = sap.ui.getCore().byId("myApp");  
	  	        app.to("idGridSubMenuCreateNoti");	
	  	      var msg = oResponse.NotificationNo;
	  	  		/*jQuery.sap.require("sap.m.MessageToast");
	  	  	     sap.m.MessageToast.show("Notification ".concat((msg).concat(" created successfully")));*/
	  	    sap.m.MessageBox.show(
	    			"Notification ".concat((msg).concat(" created successfully")) +" ",
						sap.m.MessageBox.Icon.SUCCESS,
						"Success");
	  	  	  glo_NotiKey = ""; //Clear Global Variable
	  	  	  
	  	  	 
	  	  	  
	  	  	  
	  	      },1000);//constant delay
	  	  
	  	        
	  	    resetF3(); //Resetting F3 Notification

	  	  
	  	  		if( g_isDebug == true)
	  	  			{
	  	  		//Service End Time
	  		  	    var logInfo = getTimeStamp() +"MOB15:: Service: TasklistCollection Finish" ;
	  	    		//Log file Service Start and End Time
	  		  	  		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	  	  			logFileUpdate(g_ServiceStartEndTime);
	  	  			}
	  	      
			},
	  		
	    	   function(oError){ 
					//alert("Error While Creating Inspection Lot: " + oError.message +" "+oError.status+" "+oError.Statustype);
				
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
				 try
					{
					var data = JSON.parse(oError.response.body);
					
					for(var event in data)
					{
						var dataCopy = data[event];	
						
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						
						  setTimeout(function(){
							    closeSplashScreen();//splash screen closed
							    sap.m.MessageBox.show(
							    		   messageFromBackend+ " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,
											"Error");							    	 
							  },1000);//constant delay
						
						  saveNotiDeatils(glo_NotiKey, "F3", "Failed", null, messageFromBackend, false); //Saving Notification
						  
						   glo_NotiKey = ""; //Clear Global Variable
						   
						   resetF3(); //Resetting F3 Notification
						}
						catch(e)
						{
							var ErrorMsg = data.error.message.value;  
							
							setTimeout(function(){
								    closeSplashScreen();//splash screen closed
								    sap.m.MessageBox.show(
								    		ErrorMsg + " " +" "+" ",
											sap.m.MessageBox.Icon.ERROR,
											"Error");								    	 
								  },1000);//constant delay
							
							  saveNotiDeatils(glo_NotiKey, "F3", "Failed", null, ErrorMsg, false); //Saving Notification
							  
							   glo_NotiKey = ""; //Clear Global Variable
							   
							   resetF3(); //Resetting F3 Notification
							break;
						}
					
					
					}
					
					
					}
			 
				catch(e)
					{
					  setTimeout(function(){
						    closeSplashScreen();//splash screen closed
						    sap.m.MessageBox.show(

						    		   "Service Not Available - Please contact system administrator" + " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");		
						    
						    resetF3(); //Resetting F3 Notification
						    
						    if( g_isDebug == true)
			  	  			{
			  	  		//Service End Time
			  		  	    var logInfo = getTimeStamp() +"MOB15:: Service: TasklistCollection Failed no network" ;
			  	    		//Log file Service Start and End Time
			  		  	  		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			  	  			logFileUpdate(g_ServiceStartEndTime);
			  	  			}
						    
						    
						  },1000);//constant delay
					
					
					
					}

				});
	  	/////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	  		
	    	  }
			}
	
     	 
	},
	
	handleClose: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog4");
		ordNoDlg.close();
	},
	
	handleConfirm: function(event) {
		
		var contextPath = event.mParameters.selectedItem.oBindingContexts.undefined.sPath;
		var orderNo = this.getModel().getProperty(contextPath + "/detail");
		
		var inputOrderNo = sap.ui.getCore().byId("inputOrderNo4");
		inputOrderNo.setValue(orderNo);
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog4");
		ordNoDlg.close();
	},
	
	openOrderSearch: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog4");
		ordNoDlg.open();
	},
	
	openSoldToSearch: function(event) {
		var soldToDlg = sap.ui.getCore().byId("soldToDialog4");
		soldToDlg.open();
	},
	
	newNoti : function()
	{
		resetF3();
		CreateNotificationIconTabBarShow();
	},
	checkinputMatnr_F3 : function()
	{
		
	if (null ==  sap.ui.getCore().byId("inputMatnr4").getValue() || sap.ui.getCore().byId("inputMatnr4").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	checkipdesc_F3 : function()
	{
		
	if (null ==  sap.ui.getCore().byId("descf3").getValue() || sap.ui.getCore().byId("descf3").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("descf3").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("descf3").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	
	
	
	MOB15F3Scan : function()
	{
		
	
		var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
		 cordova.plugins.barcodeScanner.scan(
                function(result){
                	var scanRes = result.text
                	sap.ui.getCore().byId("ip_SerialNo4").setValue(scanRes);
                	
                	if( g_isDebug == true)
    	        	{
    	        	//Service End Time
                		var logInfo1 = getTimeStamp() +"Barcode Scan:: "+scanRes+"Finish" ;
    	        	//Log file Service Start and End Time
    	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    	        	logFileUpdate(g_ServiceStartEndTime);
    	        	}
                	
                	
                }, 
                function(error){
                	sap.m.MessageBox.show("Scan failed: " + error);
                	
                	if( g_isDebug == true)
    	        	{
    	        	//Service End Time
    	        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
    	        	//Log file Service Start and End Time
    	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    	        	logFileUpdate(g_ServiceStartEndTime);
    	        	}
                	
                }
            );
	
	},
	
	checkinputMatnrMOB15F3: function()
	{
		sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText("-");
		sap.ui.getCore().byId("idMatDesMob15-Materialerror").setVisible(true);
		
		
		validateMATNUMAccess =  "MOB15-Materialerror";
		sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		validateMatNum(sap.ui.getCore().byId("inputMatnr4").getValue());
	},
	
	
Edit : function()
{
	
	var items = window.localStorage.getItem('NOTILIST');
	var notiNumRcvd =  JSON.parse(items);
	 
	/*
	 * Binding the Model to the Notification Queue in UI - Start
	 */
	var oMD15Data = new Array();

	for (var i = 0; i < notiNumRcvd.length; i++)// iterate on array of notifications in the Queue
	{
		var notiID = notiNumRcvd[i];
		var notiData = window.localStorage.getItem(notiID);
		notiData = JSON.parse(notiData);
		
		if(glo_NotiKey == notiID) {
			notiData.status = "Failed";
			notiData.icon =  "img/error.png";
			oMD15Data.push(notiData);
		}else {
			oMD15Data.push(notiData);
		}
		
	}

	var finalObj = {
		"MD15Collection01" : oMD15Data
	};
	
	var oJasonNotiQModel = new sap.ui.model.json.JSONModel(finalObj);
	var notiQ = sap.ui.getCore().byId("myList");
	notiQ.setModel(oJasonNotiQModel);
	
	/*
	 * Binding the Model to the Notification Queue in UI - End
	 */
	
	var valMatNo = sap.ui.getCore().byId("inputMatnr4"); 
	  valMatNo.setEnabled(true);
	//  valMatNo = sap.ui.getCore().byId("ipQty4"); 
	 // valMatNo.setEnabled(true);
	  valMatNo = sap.ui.getCore().byId("ip_SerialNo4"); 
	  valMatNo.setEnabled(true);
	  valMatNo = sap.ui.getCore().byId("ip_BatNo4"); 
	  valMatNo.setEnabled(true);
	  valMatNo = sap.ui.getCore().byId("descf3"); 
	  valMatNo.setEnabled(true);
	  valMatNo = sap.ui.getCore().byId("adninfof3"); 
	  valMatNo.setEnabled(true);	

}

});


function constructNewNotiF3(keyVal, status, newKey, messageFromBackend, isBG) {
	var newNotiObj = null;
	
	var keyValTitle = keyVal;
	
	var icon = "";
		
	if(status=="Saved") {
		icon =  "img/edit.png";
 	}
	
	if (status=="Success")
	{
		keyValTitle = newKey;
		icon =  "img/images_2.jpg";
	}		
	
	if (status == "Failed")
	{
		icon =  "img/error.png";
	}
	
	if(status.endsWith("-Started")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	if(status.startsWith("InProgress")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	var currDate = new Date();
	currDate.toDateString();
	var timeMilli = currDate.getTime();
	str1 = currDate.toDateString();
	str2 =  " ";
	str3 = currDate.toLocaleTimeString();
	var res1 = str1.concat(str2);
	var res2 = res1.concat(str3);
	
	if(!isBG) {
		newNotiObj = {
				"title": keyValTitle.toString().concat(" (F3)"),
				"date": res2,
 				"matnum":sap.ui.getCore().byId("inputMatnr4").getValue(),
 				"qty" :  sap.ui.getCore().byId("ipQty4").getValue(),
 				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
 				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
 				"delnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
 				"selnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
 				"batchnum" :  sap.ui.getCore().byId("ip_BatNo4").getValue(),
 				"desc" :  sap.ui.getCore().byId("descf3").getValue(),
 				"addninfo" :  sap.ui.getCore().byId("adninfof3").getValue(),
 				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
 				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
				"imgList" : [sap.ui.getCore().byId("imageF31").getSrc(),
				             sap.ui.getCore().byId("imageF32").getSrc(),
				             sap.ui.getCore().byId("imageF33").getSrc()],
				"status" : status ,
				"createdTime" : timeMilli,
				"icon" : icon,
				"matdesc" : sap.ui.getCore().byId("idMatDesMob15-Materialerror").getText(),
				"resforfail" : messageFromBackend,
				"messageText" : g_MOB15MatPlant
		};
	}else {
		newNotiObj = setRetryCountNotification(keyVal, "F3", newKey, status, messageFromBackend);
	}
	
	return newNotiObj;
}

/*
function saveNotiDeatilsF3(keyVal, status, newKey ,messageFromBackend)
{
	 var notiNum =  new Array();
	
	 var items = window.localStorage.getItem('NOTILIST');
  	 if (items === undefined || items === null || items.length === 0)
  	 {
  		 
  		notiNum[0] = keyVal;  //Key value either timestamp (or) NotiId
  		var notiModelString = 	JSON.stringify(notiNum);
  		 window.localStorage.setItem("NOTILIST", notiModelString);//store the notification number 
  	 }else {
  		var currDate = new Date();
       	currDate.toDateString();
       	var timeMilli = currDate.getTime();
       	
       	notiNumRcvd =  JSON.parse(items);
       	if(status=="Saved") {
	   		//keyVal = timeMilli;
	   		notiNumRcvd.push(keyVal);
	   		
  	 	}
       	
       
       	if(status.endsWith("-Started")) { // Setting Number of Retry and last retried
       		var notiItem = window.localStorage.getItem(keyVal);
    		var notiJSON = JSON.parse(notiItem);
    		
    		notiJSON.status = status; //Setting Status
    		
    		if(typeof notiJSON.numOfRetry != 'undefined' && notiJSON.numOfRetry.trim().length != 0) {
    			var retry = parseInt(notiJSON.numOfRetry) + 1;
    			notiJSON.numOfRetry = retry.toString();
    		}else {
    			notiJSON.numOfRetry = "1";
    		}
    		
    		var currDate = new Date();
    		var timeMilli = currDate.getTime();
    		
    		notiJSON.lastRetried = timeMilli; 
    		
       		var stringifiedNoti = JSON.stringify(notiJSON);
			window.localStorage.removeItem(keyVal);
			window.localStorage.setItem(keyVal , stringifiedNoti);
			
			return;
       	}
  	 	
  	 	
  		if (status=="Success")
   		{
   		
  			notiNumRcvd.splice(notiNumRcvd.length-1 , 1);
  			notiNumRcvd.push(newKey);
  		
   		}
  		
  		
   	//pushing new noti number 
   		
		 
   		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
   		window.localStorage.setItem("NOTILIST", notiNumRcvdString);
   		
   		var uniqueNotiNum = [];
      	$.each(notiNumRcvd, function(i, el){
      	    if($.inArray(el.toString(), uniqueNotiNum) == -1) uniqueNotiNum.push(el.toString());
      	});
		 
   		var notiNumRcvdString = 	JSON.stringify(uniqueNotiNum);
   		window.localStorage.setItem("NOTILIST", notiNumRcvdString);
  	 }
	
  	if(status=="Saved") {
  	   	
   		icon =  "img/edit.png";
	 	}
  	if (status=="Success")
		{
				
			icon =  "img/images_2.jpg";
		}		
	if (status == "Failed")
			{
			
			icon =  "img/error.png";
			}
	
	var objNoti = window.localStorage.getItem(keyVal);
	
	var objDate = "";
	var currDate = new Date();
   	currDate.toDateString();
   	var timeMilli = currDate.getTime();
   	str1 = currDate.toDateString();
		str2 =  " ";
		str3 = currDate.toLocaleTimeString();
		var res1 = str1.concat(str2);
		var res2 = res1.concat(str3);
	if(objNoti == undefined) {
	
	var notiData = {
				//"title": timeMilli.toString().concat(" (Q1)"),
				"title": keyVal.toString().concat(" (F3)"),
				"date": res2,

 				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
 			// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
 				"matnum":sap.ui.getCore().byId("inputMatnr4").getValue(),
 				"qty" :  sap.ui.getCore().byId("ipQty4").getValue(),
 				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
 				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
 				"delnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
 				"selnum" :  sap.ui.getCore().byId("ip_SerialNo4").getValue(),
 				"batchnum" :  sap.ui.getCore().byId("ip_BatNo4").getValue(),
 				"desc" :  sap.ui.getCore().byId("descf3").getValue(),
 				"addninfo" :  sap.ui.getCore().byId("adninfof3").getValue(),
 				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
 				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
 			
				"imgList" : [sap.ui.getCore().byId("imageF31").getSrc(),
				             sap.ui.getCore().byId("imageF32").getSrc(),
				             sap.ui.getCore().byId("imageF33").getSrc()],
				"status" : status ,
				"createdTime" : timeMilli,
				"icon" : icon,
				"matdesc" : sap.ui.getCore().byId("idMatDesMob15-Materialerror").getText(),
				"resforfail" : messageFromBackend,
				"messageText" : g_MOB15MatPlant
			};
	
	var stringifiedNoti = JSON.stringify(notiData);
	window.localStorage.setItem(keyVal , stringifiedNoti);
	
	
	} else {
		
		var objNewNoti = {};
		if (null != newKey)
			{
		objNewNoti.title = newKey.concat(" (F3)");
			}
		else
			{
		objNewNoti.title = keyVal.toString().concat(" (F3)");
			}
		objNewNoti.date = res2;
		objNewNoti.matnum = sap.ui.getCore().byId("inputMatnr4").getValue();
		objNewNoti.qty = sap.ui.getCore().byId("ipQty4").getValue();
		objNewNoti.ordnum =  sap.ui.getCore().byId("inputOrderNo").getValue();
		objNewNoti.soldto = sap.ui.getCore().byId("inputSoldTo").getValue();
		objNewNoti.delnum = sap.ui.getCore().byId("ip_SerialNo4").getValue();
		objNewNoti.selnum =  sap.ui.getCore().byId("ip_SerialNo4").getValue();
		objNewNoti.batchnum =  sap.ui.getCore().byId("ip_BatNo4").getValue();
		objNewNoti.desc = sap.ui.getCore().byId("descf3").getValue();
		objNewNoti.addninfo =  sap.ui.getCore().byId("adninfof3").getValue();
		objNewNoti.ponum =  sap.ui.getCore().byId("ip_purOrd").getValue();
		objNewNoti.poitmnum = sap.ui.getCore().byId("ip_purOrdItm").getValue();
		objNewNoti.imgList =  [sap.ui.getCore().byId("imageF31").getSrc(),
		      				             sap.ui.getCore().byId("imageF32").getSrc(),
		    				             sap.ui.getCore().byId("imageF33").getSrc()],
			//[keyVal+"img1", keyVal+"img2", keyVal+"img3"];
		objNewNoti.status = status ;
		objNewNoti.createdTime = timeMilli;
		objNewNoti.icon = icon;
		objNewNoti.matdesc = sap.ui.getCore().byId("idMatDesMob15-Materialerror").getText();
		objNewNoti.resforfail = messageFromBackend;
		var stringifiedNoti = JSON.stringify(objNewNoti);
		
		if(status != undefined && status !=null && status == "Success") {
			window.localStorage.removeItem(keyVal);
			window.localStorage.setItem(newKey , stringifiedNoti);
		}else {
			window.localStorage.removeItem(keyVal);
			window.localStorage.setItem(keyVal , stringifiedNoti);
		}
		
	}
	
	if (status == "Failed" || status == "Saved")

	{

			var oMD15Data ;
			var notiNum = new Array();
			var notiNumRcvd = new Array();
			
			var items = window.localStorage.getItem('NOTILIST');
		 	 if (items === undefined || items === null || items.length === 0)
		 	 {
		 		 
		 		
		 	 }
		 	 else
		 		 {
		 		
		 		
		 		notiNumRcvd =  JSON.parse(items);
		 		var notiItems = notiNumRcvd.length;
		 		
		 		var oMD15Data = new Array();
		 		
		 		
		 		// globalMob15Detail;
		 		for (var i=0;i<notiItems;i++)// iterate on array of notifications in Queue
		 		{ 
		 	    var notiID =  notiNumRcvd[i];	
		 	    
		 	   var notiIDNum = parseInt(notiID);
			 // var createdTime =  	  
		 	    var currDate = new Date();
	   		    currDate.toDateString();
	   		    var timeMilli = currDate.getTime();
	   		    
	   		    var diff  =  (timeMilli - notiIDNum)/1000 ;
	   		    
	   		   // if ( diff < 3600)
	   		    	//{
		 	    
		 	   // if (notiID.substring(0, 2) == )
		 		var notiData = window.localStorage.getItem(notiID);// get from local storage 
		 		var parsedData = JSON.parse(notiData);
		 		
		 		if (null != parsedData ||  parsedData != undefined)
		 			{
		 		var createdTime =  	 parsedData.createdTime;
		 		 var diff  =  (timeMilli - createdTime)/1000 ;
		   		    
		   		    if ( diff < 3600){
		 		oMD15Data.push(JSON.parse(notiData));//the array needs to be parsed to convert to appropriate format
	   		    	}
		 			}
		 		
		 		}
		 		
		 		var finalObj = {"MD15Collection01": oMD15Data};
		 		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(finalObj);
		 		var notiQ = sap.ui.getCore().byId("myList");
		 		notiQ.setModel(oJasonNotiQModel);
		 		}
	}
}
*/

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

function resetF3() {
	
	 glo_NotiKey = "";
	 
	 sap.ui.getCore().byId("idMatDesMob15-Materialerror").setVisible(false);
	 sap.ui.getCore().byId("Edit-mob15-materialError").setVisible(false);
	 sap.ui.getCore().byId("mobF3-reasonforfail").setText("");
	 var valMatNo = sap.ui.getCore().byId("inputMatnr4"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	   valMatNo = sap.ui.getCore().byId("ipQty4"); 
	   valMatNo.setValue("");
		  valMatNo.setEnabled(true);
	  
	   valMatNo = sap.ui.getCore().byId("ip_SerialNo4"); 
	   valMatNo.setValue("");
		  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("ip_BatNo4"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("descf3"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	  
	  valMatNo = sap.ui.getCore().byId("adninfof3"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("myList"); 
	  valMatNo.removeSelections();
	  
	  var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
	    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
	    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
	    containerImage1.setVisible(false);
		 containerImage2.setVisible(false);
		 containerImage3.setVisible(false);
		 
		 sap.ui.getCore().byId("imageF31").setSrc("");
		    sap.ui.getCore().byId("imageF32").setSrc("");
		    sap.ui.getCore().byId("imageF33").setSrc("");
	  //serBat Val
	  //sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(true);
	  //sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(true);
}