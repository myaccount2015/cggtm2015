sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ1", {
 
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob15DetailsQ1
*/
onInit: function() {
		
		
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
		alert("onResolveSuccess");
		 // Get a directory reader
	    var directoryReader = fileEntry.createReader();
	    
	    // Get a list of all the entries in the directory
	    directoryReader.readEntries(this.successImg ,this.failImg);
	    
	    var i;
		
	    var len = oImageArrReceived.length;
	    var image1 = sap.ui.getCore().byId("image1");
	    var image2 = sap.ui.getCore().byId("image2");
	    var image3 = sap.ui.getCore().byId("image3");
	    
	    var containerImage3 = sap.ui.getCore().byId("containerImage3");
	    var containerImage2 = sap.ui.getCore().byId("containerImage2");
	    var containerImage1 = sap.ui.getCore().byId("containerImage1");
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
		
		 containerImage2.setVisible(true);
		 containerImage1.setVisible(true);
		 containerImage3.setVisible(false);
		
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

	successImg : function(entries) {
		alert("successImg");
		  var i;
			
		    var len = oImageArrReceived.length;
		    var image1 = sap.ui.getCore().byId("imageF31");
		    var image2 = sap.ui.getCore().byId("imageF32");
		    var image3 = sap.ui.getCore().byId("imageF33");
		    var containerImage3 = sap.ui.getCore().byId("containerImage3");
		    var containerImage2 = sap.ui.getCore().byId("containerImage2");
		    var containerImage1 = sap.ui.getCore().byId("containerImage1");
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
			
			 containerImage2.setVisible(true);
			 containerImage1.setVisible(true);
			
			}

		else
			{
			console.log(1);
		      image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		      
				 containerImage1.setVisible(true);
			
			}
		    
	},


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
* @memberOf view.Mob15DetailsQ1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob15DetailsQ1
*/
//	onExit: function() {
//
//	}
	
	openMatSearch : function()
	{
		/*var splitApp = sap.ui.getCore().byId("splitApp");  
		splitApp.to("idMATSR"); */
		
		backNavMat = "Mob15CreateNoti";
		globalMob15Detail = "Q1";
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);
	   // inputPlantMat.setValue("");
	   /* 
	    if (MOB15plantCode != "")
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
		
		  var img = sap.ui.getCore().byId("mob16ImgVieQ1");
		   img.setSrc(str);
			var app = sap.ui.getCore().byId("splitApp");
	 		app.to("idMOB15IMGView");
		/*var n = str.lastIndexOf(".");
		
		var result = str.splice( n, 0, "_1" );
		
		var imgPop = sap.ui.getCore().byId("ImagePop");
		//alert(str);
	//	imgPop.setSrc(result);
		//var imgInPop = sap.ui.getCore().byId("image1");
		imgPop.setSrc(str);
		
		if (! this.popover) {
			this.popover = sap.ui.xmlfragment(
				"myprefix",
				[this.getView().getControllerName(), "popover"].join("."),
				this // associate controller with the fragment
			);
			
			this.popover = sap.ui.getCore().byId("ImgPopover");
		}
		//this.popover.setModel(this.getView().getModel());
		//this.popover.bindElement("/ProductCollection/0");
		this.popover.openBy(event.getSource());
		*/
		
	},
	
	onCreateNoti: function(event) {
		
		var isNotiEnabled = sap.ui.getCore().byId("inputMatnr").getEnabled();
		
		if(!isNotiEnabled) {
			return false;
		}
		
/*validate mandatory fields */
		var valError = 0;
		var notiNum = new Array();
      if (null ==  sap.ui.getCore().byId("inputMatnr").getValue() || sap.ui.getCore().byId("inputMatnr").getValue() == "")
    	  {
    	  sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.Error);
    	  valError = 1;
    	  }
      
      else
    	  {
    	  sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
    	  
    	  }
      
      if ( null ==  sap.ui.getCore().byId("inputSoldTo").getValue() ||  sap.ui.getCore().byId("inputSoldTo").getValue() == "" )
    	  {
    	  
    		sap.ui.getCore().byId("inputSoldTo").setValueState(sap.ui.core.ValueState.Error);
    		
    		   valError = 1;
    	  }
      else
    	  {
    	  sap.ui.getCore().byId("inputSoldTo").setValueState(sap.ui.core.ValueState.None);
    	  
    	  }
	 if(  null == sap.ui.getCore().byId("desc").getValue() || sap.ui.getCore().byId("desc").getValue() == "")
    	  {
			sap.ui.getCore().byId("desc").setValueState(sap.ui.core.ValueState.Error);
			   valError = 1;
    	  }
	 
	 else
		 {
		 
		 sap.ui.getCore().byId("desc").setValueState(sap.ui.core.ValueState.None);
		 }
	 
	 
	 
		if (	 null ==  sap.ui.getCore().byId("ipQty").getValue() ||  sap.ui.getCore().byId("ipQty").getValue() == ""  )
  	  {
			sap.ui.getCore().byId("ipQty").setValueState(sap.ui.core.ValueState.Error);
        valError = 1;
        }
       else
          {
    	  
    	    var inQtyInt = parseInt( sap.ui.getCore().byId("ipQty").getValue());
		
		if ( inQtyInt == 0)
			{
			
			sap.m.MessageBox.show(
					 "Please enter a quantity greater than Zero ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");  
			 valError = 2;
			sap.ui.getCore().byId("ipQty").setValueState(sap.ui.core.ValueState.Error);
			}
		
		else
			{
			 sap.ui.getCore().byId("ipQty").setValueState(sap.ui.core.ValueState.None);
			
			}
		   }
		
		if (	 true ==  sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").getVisible() )
			{if ( sap.ui.getCore().byId("selno").getValue() == "")
				{
				 sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.Error);
               valError = 1;}
			else{ sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);}}
		

		if (	 true ==  sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").getVisible() )
  	  {if (  sap.ui.getCore().byId("batchno").getValue() == "" )
				{
				  sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.Error);
	              valError = 1;}
		else{sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);}
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
    	  
 // create the notification ....
    	  
    	  var demo = sap.ui.getCore().getElementById("demoswitch").getState();
    	  
    	  if (demo)
    		  {	  
        	        	
    		//alert(sap.ui.getCore().byId("image1").getSrc());
    		//alert(sap.ui.getCore().byId("image2").getSrc());
    		//alert(sap.ui.getCore().byId("image3").getSrc());
	             
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
    	       		  
    	       		if(typeof glo_NotiKey == 'undefined' || glo_NotiKey.trim().length==0) {
          	       		glo_NotiKey = timeMilli; 
          	       	}
    	       		
          		var notiModelString = 	JSON.stringify(notiNum);
          		 window.localStorage.setItem("NOTILIST", notiModelString);//store the notification number 
          		 
          		str1 = currDate.toDateString();
         		str2 =  " ";
         		str3 = currDate.toLocaleTimeString();
         		var res1 = str1.concat(str2);
         		var res2 = res1.concat(str3);
         		
          		 //NOW move data to actual object
          		var notiData = {
          				//"title": timeMilli.toString().concat(" (Q1)"),notiNumber
          				"title": notiNumber.concat(" (Q1)"),
          				"date": res2,
          				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
          				"matnum":sap.ui.getCore().byId("inputMatnr").getValue(),
          				"qty" :  sap.ui.getCore().byId("ipQty").getValue(),
          				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
          				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
          				"delnum" :  sap.ui.getCore().byId("ipdelno").getValue(),
          				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
          				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
          				"desc" :  sap.ui.getCore().byId("desc").getValue(),
          				"addninfo" :  sap.ui.getCore().byId("adninfo").getValue(),
          				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
         				"imgList" : [sap.ui.getCore().byId("image1").getSrc(),
        				             sap.ui.getCore().byId("image2").getSrc(),
        				             sap.ui.getCore().byId("image3").getSrc()],
        				"status" : status ,
        				"createdTime" : timeMilli,
        				"icon" : "img/images_2.jpg",
        				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB15Desc").getText(),
        				"resforfail" : messageFromBackend,
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
          		
          		if(typeof glo_NotiKey == 'undefined' || glo_NotiKey.trim().length==0) {
      	       		glo_NotiKey = timeMilli; 
      	       	}
          		
          		notiNumRcvd.push(timeMilli);//pushing new noti number 
          		 
          		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
          		 window.localStorage.setItem("NOTILIST", notiNumRcvdString);
          		 
          		str1 = currDate.toDateString();
         		str2 =  " ";
         		str3 = currDate.toLocaleTimeString();
         		var res1 = str1.concat(str2);
         		var res2 = res1.concat(str3);
         		
          		var notiData = {
          				//"title": timeMilli.toString().concat(" (Q1)"),
          				"title": notiNumber.concat(" (Q1)"),
          				"date": res2,
          				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
          				"matnum":sap.ui.getCore().byId("inputMatnr").getValue(),
          				"qty" :  sap.ui.getCore().byId("ipQty").getValue(),
          				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
          				"soldto" :  sap.ui.getCore().byId("SoldNo").getValue(),
          				"delnum" :  sap.ui.getCore().byId("ipdelno").getValue(),
          				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
          				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
          				"desc" :  sap.ui.getCore().byId("desc").getValue(),
          				"addninfo" :  sap.ui.getCore().byId("adninfo").getValue(),
          				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
         				"imgList" : [sap.ui.getCore().byId("image1").getSrc(),
        				             sap.ui.getCore().byId("image2").getSrc(),
        				             sap.ui.getCore().byId("image3").getSrc()],
        				"status" : status ,
        				"createdTime" : timeMilli,
        				"icon" : "img/images_2.jpg",
        				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB15Desc").getText(),
        				"resforfail" : messageFromBackend,
        				"messageText":g_MOB15MatPlant
          			};
          		

          			var stringifiedNoti = JSON.stringify(notiData);
          		
          			window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
          			
            	}
          	
            app = sap.ui.getCore().byId("myApp");  
            app.to("idGridSubMenuCreateNoti");
            valMatNo = sap.ui.getCore().byId("myList"); 
  		    valMatNo.removeSelections();
            
            
            //  app.to("idMob15CustComp");
        	 
        	  
    		  }
    	  
    	  else
    		  {
    	  
    	var currDate = new Date();
    		currDate.toDateString();
    	var timeMilli = currDate.getTime();
    	//glo_NotiKey = timeMilli; 
    	
    	if(typeof glo_NotiKey == 'undefined') {
  	    	glo_NotiKey = timeMilli; 
  	      }else	if(glo_NotiKey.toString().trim().length==0) {
  	    		glo_NotiKey = timeMilli; 
  	      }  
    	
    	saveNotiDeatils(glo_NotiKey, "Q1", "Saved", null, null, false); //Saving Notification
    		
    	
    	openSplashScreen();//splash screen opened
    	
    	
    	//Service Start Time
		var logInfo = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Start" ;

    	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
    	if(serviceURL == "Fail")
		 {
    		resetQ1(); //Resetting Q1 Notification
		 return false;
		 }
  		var oDataCreateNotiService = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
  		var readRequestURL = "/TasklistCollection";
  		
  		oDataCreateNotiService.setHeaders({
  			"X-Requested-With" : "XMLHttpRequest",
  			"Content-Type" : "application/json",
  			"X-CSRF-Token" : "Fetch",
  			"DataServiceVersion" : "2.0"
  		});
  		var matnum = sap.ui.getCore().byId("inputMatnr"); 
  		var desc = sap.ui.getCore().byId("desc"); 
  		var soldTo = sap.ui.getCore().byId("SoldNo");
  		var qty = sap.ui.getCore().byId("ipQty");
  		var salesorder = sap.ui.getCore().byId("inputOrderNo");
  		var selno = sap.ui.getCore().byId("selno");
  		var delno = sap.ui.getCore().byId("ipdelno");
  		var batchno = sap.ui.getCore().byId("batchno");
  		
  		
  		//alert(soldTo);
  		
  		var addninfo = sap.ui.getCore().byId("adninfo");
  		
  		var createReqData = {
  				"NotificationDescription" : desc.getValue(),
  				"NotificationType" :  "Q1",
  				"MaterialNumber": matnum.getValue(),
  				"SoldToParty": soldTo.getValue(),
  				"NotificationLongText" : addninfo.getValue(),
  			    "SerialNumber" : selno.getValue(),
	  		    "Batch" : batchno.getValue(),
	  		  	"Quantity" : qty.getValue(),
			    "SalesOrder" : salesorder.getValue(),
			    "DeliveryNumber":delno.getValue(),
			    "MessageText":g_MOB15MatPlant
  				
  				
  				
  				//"NotificationLongText": "NotificationLongText for test"
  			};
        
  		oDataCreateNotiService.create(readRequestURL, createReqData, null, 
  				function(oResponse) {
  			
  		//alert(oResponse.MessageText);		
  			        		
		//var msg = 'Notification Created Successful !!! \n Notification Id got generated in the system: 1984672';
    
        
       // var notiNumber =   msg.substring(24, 36); //TODO: Get the Notification No from Response
        var notiNumber = oResponse.NotificationNo ; 
       // glo_NotiKey = notiNumber;
        
        saveNotiDeatils(glo_NotiKey, "Q1", "Success", notiNumber, null, false);//Saving Notification
        
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
    	var addedImageList = sap.ui.getCore().byId("Mob15_Q1_AddedImageList").getModel();
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
			var addedImageSourcePath1 = sap.ui.getCore().byId("Mob15_Q1_AddedImageList").getModel().getData();
			var addedImageSourcePath = addedImageSourcePath1[i].imageData;
			var CurrentMob  = addedImageSourcePath1[i].imageName;
			var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
		}
		//DMS End
        
        setTimeout(function(){
	   		closeSplashScreen();//splash screen closed

	   	 var app = sap.ui.getCore().byId("myApp");  
         app.to("idGridSubMenuCreateNoti");
         var valMatNo = sap.ui.getCore().byId("myList"); 
		  valMatNo.removeSelections();
       //app.to("idMob15CustComp");
		   var msg = oResponse.NotificationNo;
	  		/*jQuery.sap.require("sap.m.MessageToast");
	        sap.m.MessageToast.show("Notification ".concat((msg).concat(" created successfully")));*/
	    	sap.m.MessageBox.show(
	    			"Notification ".concat((msg).concat(" created successfully")) +" ",
						sap.m.MessageBox.Icon.SUCCESS,
						"Success");
	        glo_NotiKey = ""; //Clear Global Variable
	        
	        
	       
			
		  
	    	 },1000);//constant delay
         
		  
        resetQ1(); //Resetting Q1 Notification
        
     
		if( g_isDebug == true)
			{
			 //Service End Time
	        var logInfo1 = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Finish" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}
        
        
        
		  
    	  },
  		
    	   function(oError){
    		 
    		  try
				{
				var data = JSON.parse(oError.response.body);
				
				for(var event in data)
				{
					var dataCopy = data[event];	
					
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					
				   		closeSplashScreen();//splash screen closed
				   		sap.m.MessageBox.show(
				    		    messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
					
					saveNotiDeatils(glo_NotiKey, "Q1", "Failed", null, messageFromBackend, false);
					
					glo_NotiKey = ""; //Clear Global Variable
					
					resetQ1(); //Resetting Q1 Notification
					
					}
					catch(e)
					{
						
						var errorMsg = data.error.message.value;
						setTimeout(function(){
					   	  closeSplashScreen();//splash screen closed
                          sap.m.MessageBox.show(
                        		  errorMsg+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,
										"Error");	    	 							    	 
					    	 },1000);//constant delay
						
						saveNotiDeatils(glo_NotiKey, "Q1", "Failed", null, errorMsg, false);
						
						glo_NotiKey = ""; //Clear Global Variable
						
						resetQ1(); //Resetting Q1 Notification
					
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
				   		
				   		resetQ1(); //Resetting Q1 Notification
				   		
				   		
				   		if( g_isDebug == true)
						{
						 //Service End Time
				        var logInfo1 = 	getTimeStamp() +"MOB15:: Service: TasklistCollection Failed no network" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
				    	 },1000);//constant delay
			
				
				
				}
			});
    	  }
    	  }
	},
	
	
	
	
	
	
	handleCloseOrdNo: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog");
		 
		ordNoDlg.close();
	},
	
	handleConfirmOrdNo: function(event) {
		
		var contextPath = event.mParameters.selectedItem.oBindingContexts.undefined.sPath;
		var orderNo = this.getModel().getProperty(contextPath + "/detail");
		
		var inputOrderNo = sap.ui.getCore().byId("inputOrderNo");
		inputOrderNo.setValue(orderNo);
		
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog");
		ordNoDlg.close();
	},
	
	handleCloseSldToNo: function(event) {
			
		
		
		var ordNoDlg = sap.ui.getCore().byId("soldToDialog");
		ordNoDlg.close();
	},
	
	
	
	handleConfirmSldToNo: function(event) {
		
		var contextPath = event.mParameters.selectedItem.oBindingContexts.undefined.sPath;
		 soldNo = this.getModel().getProperty(contextPath + "/SoldToPartyName");
		
	var	soldId = this.getModel().getProperty(contextPath + "/SoldToPartyId");
		//alert(soldId);
		
		
		var soldIdip = sap.ui.getCore().byId("SoldNo");
		soldIdip.setValue(soldId);
		
		var inputSldToNo = sap.ui.getCore().byId("inputSoldTo");
		inputSldToNo.setValue(soldNo);
		inputSldToNo.setValueState(sap.ui.core.ValueState.None);
		var sldNoDlg = sap.ui.getCore().byId("soldToDialog");
		sldNoDlg.close();
	},
	
	openOrderSearch: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog");
		ordNoDlg.open();
	},
	
	openSoldToSearch: function(event) {
		
		
  var demoswitch = sap.ui.getCore().byId("demoswitch");
		
		if (demoswitch.getState()== true)
		{

			
			
			Mob15Q1();
			
		}
		else{
			
			//Check sold to number service data 
			//id : inputSoldTo
			debugger;
			var webmodel = new sap.ui.model.json.JSONModel();
			
			var getWebmodelData = webmodel.getData();
			getWebmodelData = getWebmodelData.modelData;
			if( getWebmodelData != undefined)
			
			{
			/*if( getWebmodelData.length == 0)
			{
				getUrl("Network");
				return false;
			}*/
							
			}
			else
				{
				
				openSplashScreen();//splash screen opened	
				//Service Start Time
				var logInfo = getTimeStamp() +"MOB15:: Service: SoldToPartyList Start" ;
		        var serviceURL =getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV");
				if(serviceURL == "Fail")
				 {
				 return false;
				 }

		    	var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
		    	var readRequestURL = "/SoldToPartyList";
		    		loginoDataModel.read(readRequestURL, null, null, false,   
			               function(oData, oResponse) { 
		    		       var result = oData.results;
			    		   if(result.length > 0)
			    		   {
		                   webmodel.setData({modelData: result});
		                   
		                   //Set Model data from controller
		                   // inputSoldTo,soldToDialog, Mob15-selectContentSold already used model in view
		                   // Create moldel from controller
		                   var soldToDialog = sap.ui.getCore().byId("inputSoldTo");
		                   var inputSoldTo = sap.ui.getCore().byId("soldToDialog");
		                                 
		                   webmodel.setModel(soldToDialog);
		                   webmodel.setModel(inputSoldTo);
		                   
		                   
		                   
		                   
					       }
			    		   if( g_isDebug == true)
			    		 			{
			    		 		 //Service End Time
			  	    		  var logInfo1 = getTimeStamp() +"MOB15:: Service: SoldToPartyList Finish" ;
			  	    		 //Log file Service Start and End Time
			  	    		 	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			    		 			logFileUpdate(g_ServiceStartEndTime);
			    		 			}
			    		   
			    		   
						   },
				
				  function(oError){  

						setTimeout(function(){
						closeSplashScreen();//splash screen closed
						sap.m.MessageBox.show(
						oError.message + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");  
															    	 							    	 
						},1000);//constant delay			
					 	 							    	 
							
			                  
			      });
				}
			
			
	}
		setTimeout(function(){
	   		closeSplashScreen();//splash screen closed
	   		var soldToDlg = sap.ui.getCore().byId("soldToDialog");
			soldToDlg.open();
	    	 							    	 
	    	 },1000);//constant delay
		
	
	} ,
	
	newNoti : function()
	{
		 resetQ1();
		 CreateNotificationIconTabBarShow();
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
		
		
		var valMatNo = sap.ui.getCore().byId("inputMatnr"); 
	  valMatNo.setEnabled(true);
    //  valMatNo = sap.ui.getCore().byId("ipQty"); 
    //  valMatNo.setEnabled(true);
      valMatNo = sap.ui.getCore().byId("inputOrderNo"); 
      valMatNo.setEnabled(true);
      valMatNo = sap.ui.getCore().byId("inputSoldTo"); 
      valMatNo.setEnabled(true);
	  valMatNo = sap.ui.getCore().byId("ipdelno"); 
		  valMatNo.setEnabled(true);
		  valMatNo = sap.ui.getCore().byId("selno"); 
		  valMatNo.setEnabled(true);
		  valMatNo = sap.ui.getCore().byId("batchno"); 
          valMatNo.setEnabled(true);
		  valMatNo = sap.ui.getCore().byId("desc"); 
		  valMatNo.setEnabled(true);
		  valMatNo = sap.ui.getCore().byId("adninfo"); 
		  valMatNo.setEnabled(true);
		
			

	},
	
	checkInputMatnr : function()
	{
		
	if (null ==  sap.ui.getCore().byId("inputMatnr").getValue() || sap.ui.getCore().byId("inputMatnr").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	
	checkInputSoldTo : function()
	{
		
	if (null ==  sap.ui.getCore().byId("inputSoldTo").getValue() || sap.ui.getCore().byId("inputSoldTo").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("inputSoldTo").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("inputSoldTo").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	checkIpDesc : function()
	{
		
	if (null ==  sap.ui.getCore().byId("desc").getValue() || sap.ui.getCore().byId("desc").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("desc").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("desc").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	checkinputMatnrMOB15Q1 : function()
	{
		sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		
		
		validateMATNUMAccess = "MOB15-CustComp";
		sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		validateMatNum(sap.ui.getCore().byId("inputMatnr").getValue());
	},
	
	 openActionSheetMOB15 : function(oEvent)
	{
		 var oButton = oEvent.getSource();
		 var actionSheetMOb15 =  sap.ui.getCore().byId("openActionSheetMOB15");
		     actionSheetMOb15.openBy(oButton);
	}
	
	

});

/*
 * This method is used
 * @keyVal -
 * @status -
 */
function saveNotiDeatils(keyVal, type, status, newKey, messageFromBackend, isBG)
{
	
	 var items = window.localStorage.getItem('NOTILIST');
	 var notiNumRcvd =  JSON.parse(items);
	 
	 var finalNotiNumList =  new Array();
	 
	 var newNotiData = null;
	 
	 var isNotiExist = false;
	 
  	 if (items === undefined || items === null || items.length === 0)
  	 {
  		finalNotiNumList.push(keyVal);
  	 }else {
  		for(var i=0;i<notiNumRcvd.length;i++) {
  			if(notiNumRcvd[i] == keyVal) {
  				isNotiExist = true;
  			}
  			
  			if(notiNumRcvd[i] == keyVal && status=="Success" && newKey != null && newKey.length > 0) {
  				finalNotiNumList.push(newKey);
  			}else {
  				finalNotiNumList.push(notiNumRcvd[i]);
  			}
  		}
  	 }
  	 
  	if(!isNotiExist) {
  		finalNotiNumList.push(keyVal);
  	}
  	 
  	/*
  	 * Remove Duplicate - Start
  	 */ 
  	var uniqueNotiNum = [];
  	$.each(finalNotiNumList, function(i, el){
  	    if($.inArray(el.toString(), uniqueNotiNum) == -1) uniqueNotiNum.push(el.toString());
  	});
	 
	var notiNumRcvdString = 	JSON.stringify(uniqueNotiNum);
	window.localStorage.setItem("NOTILIST", notiNumRcvdString);
	
	/*
	 * Remove Duplicate - End
	 */
	
	/*
	 * Remove and add updated Notification - Start
	 */
  	if(type.indexOf("Q1") != -1) {
  		newNotiData = constructNewNotiQ1(keyVal, status, newKey, messageFromBackend, isBG);
	}else if(type.indexOf("Q3") != -1) {
		newNotiData = constructNewNotiQ3(keyVal, status, newKey, messageFromBackend, isBG);
	}else if(type.indexOf("F2") != -1) {
		newNotiData = constructNewNotiF2(keyVal, status, newKey, messageFromBackend, isBG);
	}else if(type.indexOf("F3") != -1) {
		newNotiData = constructNewNotiF3(keyVal, status, newKey, messageFromBackend, isBG);
	}
	
  	if(newNotiData != null) {
	  	var notiModelString = 	JSON.stringify(newNotiData);
		
		if(status=="Success" && newKey != null && newKey.length > 0) {
			window.localStorage.removeItem(keyVal);
			window.localStorage.setItem(newKey, notiModelString);
		}else {
			window.localStorage.setItem(keyVal, notiModelString);
		}
  	}
	
	/*
	 * Remove and add updated Notification - End
	 */
       	
	
	/*
	 * Binding the Model to the Notification Queue in UI - Start
	 */
	var oMD15Data = new Array();

	for (var i = 0; i < uniqueNotiNum.length; i++)// iterate on array of notifications in the Queue
	{
		var notiID = uniqueNotiNum[i];

		var notiData = window.localStorage.getItem(notiID);// get from local
															// storage
		oMD15Data.push(JSON.parse(notiData));// the array needs to be
														// parsed to convert to
														// appropriate format
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
}


function reBindNotificationQueue() {
	
	var items = window.localStorage.getItem('NOTILIST');
	var notiNumRcvd =  JSON.parse(items);
	
	if(notiNumRcvd==null) {
		return false;
	}
	
	/*
	 * Binding the Model to the Notification Queue in UI - Start
	 */
	var oMD15Data = new Array();

	for (var i = 0; i < notiNumRcvd.length; i++)// iterate on array of notifications in the Queue
	{
		var notiID = notiNumRcvd[i];

		var notiData = window.localStorage.getItem(notiID);// get from local
															// storage
		oMD15Data.push(JSON.parse(notiData));// the array needs to be
														// parsed to convert to
														// appropriate format
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
}


String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

function constructNewNotiQ1(keyVal, status, newKey, messageFromBackend, isBG) {
	
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
	
	if(typeof status != 'undefined' && status != null && status.endsWith("-Started")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	if(typeof status != 'undefined' && status != null && status.startsWith("InProgress")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	if(status.indexOf("Failed") > -1) {
		icon =  "img/error.png";
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
				"title": keyValTitle.toString().concat(" (Q1)"),
				"date": res2,
				"matnum":sap.ui.getCore().byId("inputMatnr").getValue(),
				"qty" :  sap.ui.getCore().byId("ipQty").getValue(),
				"ordnum" :  sap.ui.getCore().byId("inputOrderNo").getValue(),
				"soldto" :  sap.ui.getCore().byId("SoldNo").getValue(),
				"delnum" :  sap.ui.getCore().byId("ipdelno").getValue(),
				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
				"desc" :  sap.ui.getCore().byId("desc").getValue(),
				"addninfo" :  sap.ui.getCore().byId("adninfo").getValue(),
				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue(),
				"imgList" : [sap.ui.getCore().byId("image1").getSrc(),
				             sap.ui.getCore().byId("image2").getSrc(),
				             sap.ui.getCore().byId("image3").getSrc()],
				"status" : status ,
				"createdTime" : timeMilli,
				"icon" : icon,
				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB15Desc").getText(),
				"resforfail" : messageFromBackend,
				"messageText" : g_MOB15MatPlant
			};
	
	} else {
		newNotiObj = setRetryCountNotification(keyVal, "Q1", newKey, status, messageFromBackend);
	}
	
	return newNotiObj;
}

/*
 * This method is only for Background Job
 */
function setRetryCountNotification(keyVal, type, newKey, status, messageFromBackend) {
	var notiItem = window.localStorage.getItem(keyVal);
	var notiJSON = JSON.parse(notiItem);
	
	notiJSON.status = status; //Setting Status
	
	if(messageFromBackend == null) {
		messageFromBackend = "";
	}
	
	notiJSON.resforfail = messageFromBackend;
	
	if(typeof status != 'undefined' && status != null && status.endsWith("-Started")) {
		if(typeof notiJSON.numOfRetry != 'undefined' && notiJSON.numOfRetry.trim().length != 0) {
			var retry = parseInt(notiJSON.numOfRetry) + 1;
			notiJSON.numOfRetry = retry.toString();
		}else {
			notiJSON.numOfRetry = "1";
		}
		
		var currDate = new Date();
		var timeMilli = currDate.getTime();
		
		notiJSON.lastRetried = timeMilli; 
	}
	
	var icon = "";
	
	if(status=="Saved") {
		icon =  "img/edit.png";
 	}
	
	if (status=="Success")
	{
		notiJSON.title = newKey.toString().concat(" (" + type + ")");
		icon =  "img/images_2.jpg";
	}		
	
	if (status == "Failed")
	{
		icon =  "img/error.png";
	}
	
	if(typeof status != 'undefined' && status != null && status.endsWith("-Started")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	if(typeof status != 'undefined' && status != null && status.startsWith("InProgress")) {
		icon =  "img/BG-InProgress.gif";
	}
	
	if(status.indexOf("Failed") > -1) {
		icon =  "img/error.png";
	}
	
	notiJSON.icon = icon;
	
	var stringifiedNoti = JSON.stringify(notiJSON);
	
	if (status=="Success")
	{
		window.localStorage.removeItem(keyVal);
		window.localStorage.setItem(newKey, stringifiedNoti);
	}else {
		window.localStorage.setItem(keyVal, stringifiedNoti);
	}
	
	return notiJSON;
}

 
 function liveChangeCustomerSoldParty_cancel()
 {
	 
	 var sValue = "";
     
	    var oFilter = new sap.ui.model.Filter(
	      "SoldToPartyName",
	      sap.ui.model.FilterOperator.Contains, sValue
	    );
	    sap.ui.getCore().byId("soldToDialog").getBinding("items").filter([oFilter]);	 
	 
 }
 
 function resetQ1() {
	 
	 glo_NotiKey = "";
	 
	 sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(false);
	 sap.ui.getCore().byId("Edit-mob15-customerComplaint").setVisible(false);
	 sap.ui.getCore().byId("mobQ1-reasonforfail").setText("");
	
	 var valMatNo = sap.ui.getCore().byId("inputMatnr"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	   valMatNo = sap.ui.getCore().byId("ipQty"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	   valMatNo = sap.ui.getCore().byId("inputOrderNo"); 
	   valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	   valMatNo = sap.ui.getCore().byId("inputSoldTo"); 
	   valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	  valMatNo = sap.ui.getCore().byId("ipdelno"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("selno"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	   valMatNo = sap.ui.getCore().byId("batchno"); 
	   valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("desc"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	  
	  valMatNo = sap.ui.getCore().byId("adninfo"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("myList"); 
	  valMatNo.removeSelections();
	  
	  var containerImage3 = sap.ui.getCore().byId("containerImage3");
	    var containerImage2 = sap.ui.getCore().byId("containerImage2");
	    var containerImage1 = sap.ui.getCore().byId("containerImage1");
	    containerImage1.setVisible(false);
		 containerImage2.setVisible(false);
		 containerImage3.setVisible(false);
		 
		 sap.ui.getCore().byId("image1").setSrc("");
		    sap.ui.getCore().byId("image2").setSrc("");
		    sap.ui.getCore().byId("image3").setSrc("");
	  
	  //serBat Validation
	//  sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(true);
	// sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(true);
 }