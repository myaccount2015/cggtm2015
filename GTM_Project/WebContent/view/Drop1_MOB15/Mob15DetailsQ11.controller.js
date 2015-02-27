sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ11", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob15DetailsQ11
*/
onInit: function() {
		
		notiNum = new Array();
		 oImageModel = new sap.ui.model.json.JSONModel();
		 notiImage = new Array();
		oImageArrReceived = new Array();
		imgid = "";

	},
	
	onResolveSuccess : function(fileEntry) {
		
	    
	 // Get a directory reader
	    var directoryReader = fileEntry.createReader();
	    
	    // Get a list of all the entries in the directory
	    directoryReader.readEntries(this.successImg ,this.failImg);
	    
	    var i;
		
	    var len = oImageArrReceived.length;
	    var image1 = sap.ui.getCore().byId("imageQ111");
	    var image2 = sap.ui.getCore().byId("imageQ112");
	    var image3 = sap.ui.getCore().byId("imageQ113");
	    
	    if (len >= 3)
		{
		
		 console.log(3);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
		
		
		}
	else if (len == 2)
		{
		 console.log(2);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		
		}

	else
		{
		console.log(1);
	      image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		
		}
	  
	    
	   
	},

	failImg : function(evt) {
		
		sap.m.MessageBox.show(evt.target.error.code);
	},

	successImg : function(entries) {
	    var i;
	
	    var len = oImageArrReceived.length;
	    var image1 = sap.ui.getCore().byId("imageQ111");
	    var image2 = sap.ui.getCore().byId("imageQ112");
	    var image3 = sap.ui.getCore().byId("imageQ113");
	    
	    if (len >= 3)
		{
		
		 console.log(3);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
		
		
		}
	else if (len == 2)
		{
		 console.log(2);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		
		}

	else
		{
		console.log(1);
	      image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		
		}
	  
	},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob15DetailsF2
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
		 window.resolveLocalFileSystemURI("file:///storage//emulated/0/EasyPacking", this.onResolveSuccess, this.fail);
			}

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob15DetailsQ11
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob15DetailsQ11
*/
//	onExit: function() {
//
//	}
	openMatSearch : function()
	{
		/*var splitApp = sap.ui.getCore().byId("splitApp");  
		splitApp.to("idMATSR"); */
		
		backNavMat = "Mob15CreateNoti";
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	    
 var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
	  
	    
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
	    	
	    	}
	},
	
	imgOpen: function(event) {
		var img = sap.ui.getCore().byId(event.mParameters.id);
		var str = img.mProperties.src;
		var n = str.lastIndexOf(".");
		
		var result = str.splice( n, 0, "_1" );
		
		var imgPop = sap.ui.getCore().byId("ImagePop1");
		
		imgPop.setSrc(result);
		
		if (! this.popover) {
			/*this.popover = sap.ui.xmlfragment(
				"myprefix",
				[this.getView().getControllerName(), "popover"].join("."),
				this // associate controller with the fragment
			);*/
			
			this.popover = sap.ui.getCore().byId("ImgPopover1");
		}
		//this.popover.setModel(this.getView().getModel());
		//this.popover.bindElement("/ProductCollection/0");
		this.popover.openBy(event.getSource());
		
		
	},
	
	onCreateNoti: function(event) {
		
		var isNotiEnabled = sap.ui.getCore().byId("inputMatnr1").getEnabled();
		
		if(!isNotiEnabled) {
			return false;
		}
		
		var valError = 0;
		if (null ==  sap.ui.getCore().byId("inputMatnr1").getValue() || sap.ui.getCore().byId("inputMatnr1").getValue() == "")
			{
			
			 sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.Error);
			 valError = 1;
			}
		
		else
			{
			 sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
			
			}
		 if(   null == sap.ui.getCore().byId("descq11").getValue() || sap.ui.getCore().byId("descq11").getValue() == "")
		    	  {
			 
			 sap.ui.getCore().byId("descq11").setValueState(sap.ui.core.ValueState.Error);
			 valError = 1;
		    	  }
		 
		 else
			 {
			 
			 sap.ui.getCore().byId("descq11").setValueState(sap.ui.core.ValueState.None);
			 
			 }
			 
				
				if (valError == 1)
					{
		    	 // alert("Please provide data in all mandatory fields");
		    	  sap.m.MessageBox.show(

		    			  "Please enter values in all fields"

		    			  );


		    	  
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
	         				//"title": timeMilli.toString().concat(" (Q11)"),
	         				"title": notiNumber.concat(" (Q1)"),
	         				"date": res2,
	         				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
	         				"matnum":sap.ui.getCore().byId("inputMatnr1").getValue(),
	         				"qty" :  sap.ui.getCore().byId("ipQty1").getValue(),
	         				"ordnum" :  sap.ui.getCore().byId("inputOrderNo1").getValue(),
	         				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
	         				"delnum" :  sap.ui.getCore().byId("delnoq11").getValue(),
	         				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
	         				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
	         				"desc" :  sap.ui.getCore().byId("descq11").getValue(),
	         				"addninfo" :  sap.ui.getCore().byId("adninfoq11").getValue(),
	         				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
	         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue()
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
	         				//"title": timeMilli.toString().concat(" (Q11)"),
	         				"title": notiNumber.concat(" (Q1)"),
	         				"date": res2,
	         				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
	         				"matnum":sap.ui.getCore().byId("inputMatnr1").getValue(),
	         				"qty" :  sap.ui.getCore().byId("ipQty1").getValue(),
	         				"ordnum" :  sap.ui.getCore().byId("inputOrderNo1").getValue(),
	         				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
	         				"delnum" :  sap.ui.getCore().byId("delnoq11").getValue(),
	         				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
	         				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
	         				"desc" :  sap.ui.getCore().byId("descq11").getValue(),
	         				"addninfo" :  sap.ui.getCore().byId("adninfoq11").getValue(),
	         				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
	         				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue()
	         			};
	          		

	          			var stringifiedNoti = JSON.stringify(notiData);
	          			window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
	          			
	          			
	          	 
	            	}
	          	
	            app = sap.ui.getCore().byId("myApp");  
	            app.to("idMob15CustComp");
	        	 
	        	  
	    		  	
			}
			
			else
				{
				
				//Service Start Time
				var logInfo = getTimeStamp() +"MOB15:: Service: TasklistCollection Start" ;
				
				
	    	  var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
	    	 if(serviceURL == "Fail")
	 		 {
	    		 resetQ11(); // Resetting Q11 Notification
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
	  		var matnum = sap.ui.getCore().byId("inputMatnr1"); 
	  		var desc = sap.ui.getCore().byId("descq11"); 
	  		var delNo = sap.ui.getCore().byId("delnoq11");
	  		var addInfo = sap.ui.getCore().byId("adninfoq11");
	
	  		 
	  		
	  		var createReqData = {
	  				"NotificationType" :  "Q1",
	  				"NotificationDescription" : desc.getValue(),
	  				"MaterialNumber": matnum.getValue(),
	  				"DeliveryNumber": delNo.getValue(),
	  				"NotificationLongText": addInfo.getValue(),

	  		        		
	  				
	  				
	  				
	  				
	  				
	  			};
	        
	  		oDataCreateInspLot.create(readRequestURL, createReqData, null, 
	  				function(oResponse) {	
	  			        		
			//var msg = 'Notification Created Successful !!! \n Notification Id got generated in the system: 1984672';
	       var msg = oResponse.MessageText;
	  		jQuery.sap.require("sap.m.MessageToast");
	        sap.m.MessageToast.show(msg);
	        
	        var notiNumber =   msg.substring(24, 36);
	        
        
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
     				//"title": timeMilli.toString().concat(" (Q11)"),
     				"title": notiNumber.concat(" (Q1)"),
     				"date": res2,
     				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
     				"matnum":sap.ui.getCore().byId("inputMatnr1").getValue(),
     				"qty" :  sap.ui.getCore().byId("ipQty1").getValue(),
     				"ordnum" :  sap.ui.getCore().byId("inputOrderNo1").getValue(),
     				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
     				"delnum" :  sap.ui.getCore().byId("delnoq11").getValue(),
     				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
     				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
     				"desc" :  sap.ui.getCore().byId("descq11").getValue(),
     				"addninfo" :  sap.ui.getCore().byId("adninfoq11").getValue(),
     				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
     				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue()
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
     				//"title": timeMilli.toString().concat(" (Q11)"),
     				"title": notiNumber.concat(" (Q1)"),
     				"date": res2,
     				// "qty" :  var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
     				"matnum":sap.ui.getCore().byId("inputMatnr1").getValue(),
     				"qty" :  sap.ui.getCore().byId("ipQty1").getValue(),
     				"ordnum" :  sap.ui.getCore().byId("inputOrderNo1").getValue(),
     				"soldto" :  sap.ui.getCore().byId("inputSoldTo").getValue(),
     				"delnum" :  sap.ui.getCore().byId("delnoq11").getValue(),
     				"selnum" :  sap.ui.getCore().byId("selno").getValue(),
     				"batchnum" :  sap.ui.getCore().byId("batchno").getValue(),
     				"desc" :  sap.ui.getCore().byId("descq11").getValue(),
     				"addninfo" :  sap.ui.getCore().byId("adninfoq11").getValue(),
     				"ponum" : sap.ui.getCore().byId("ip_purOrd").getValue(),
     				"poitmnum" : sap.ui.getCore().byId("ip_purOrdItm").getValue()
     			};
     		

     			var stringifiedNoti = JSON.stringify(notiData);
     			window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
     			
     			
     	 
       	}
        var stringifiedNoti = JSON.stringify(notiData);
     			window.localStorage.setItem("1984673", stringifiedNoti);//store the notofication numnber 
     			
     			  app = sap.ui.getCore().byId("myApp");  
     		        app.to("idMob15CustComp");
     		     
     		       resetQ11(); // Resetting Q11 Notification
     		        
     		       if( g_isDebug == true)
     		      {
     		      //Service End Time
     		      var logInfo1 =   getTimeStamp() +"MOB15:: Service: TasklistCollection Finish" ;
     		      //Log file Service Start and End Time
     		      var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
     		      logFileUpdate(g_ServiceStartEndTime);
     		      }
     		        
     		     
     		       
     		       
			}
	  		,
	  		
	    	   function(oError){ 
					//alert("Error While Creating Inspection Lot: " + oError.message +" "+oError.status+" "+oError.Statustype);
	  		  /*sap.m.MessageBox.show(

	  				"Error While Creating Inspection Lot: " + oError.message +" "+oError.status+" "+oError.Statustype

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
						{sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");break;
						}}}catch(e){sap.m.MessageBox.show(
                        "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
						
						resetQ11(); // Resetting Q11 Notification
						
						 if( g_isDebug == true)
		     		      {
		     		      //Service End Time
		     		      var logInfo1 =   getTimeStamp() +"MOB15:: Service: TasklistCollection Failed no network" ;
		     		      //Log file Service Start and End Time
		     		      var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		     		      logFileUpdate(g_ServiceStartEndTime);
		     		      }
						
						}
	
	  		
	  		});
	    	  }
			}
     	 
	},
	
	handleClose: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog1");
		ordNoDlg.close();
	},
	
	handleConfirm: function(event) {
		
		var contextPath = event.mParameters.selectedItem.oBindingContexts.undefined.sPath;
		var orderNo = this.getModel().getProperty(contextPath + "/detail");
		
		var inputOrderNo = sap.ui.getCore().byId("inputOrderNo1");
		inputOrderNo.setValue(orderNo);
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog1");
		ordNoDlg.close();
	},
	
	openOrderSearch: function(event) {
		var ordNoDlg = sap.ui.getCore().byId("orderNoDialog1");
		ordNoDlg.open();
	},
	
	openSoldToSearch: function(event) {
		var soldToDlg = sap.ui.getCore().byId("soldToDialog1");
		soldToDlg.open();
	} ,
	
	newNoti : function()
	{
		
		 resetQ11();
		 CreateNotificationIconTabBarShow();
	},
	checkinputMatnr_Q11 : function()
	{
		
	if (null ==  sap.ui.getCore().byId("inputMatnr1").getValue() || sap.ui.getCore().byId("inputMatnr1").getValue() == "")
   	  {
   	  sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.Error);
   	
   	  }
     
     else
   	  {
   	  sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
   	  
   	  }
		
	},
	checkipdesc_Q11 : function()
	{
		
		if (null ==  sap.ui.getCore().byId("descq11").getValue() || sap.ui.getCore().byId("descq11").getValue() == "")
	   	  {
	   	  sap.ui.getCore().byId("descq11").setValueState(sap.ui.core.ValueState.Error);
	   	
	   	  }
	     
	     else
	   	  {
	   	  sap.ui.getCore().byId("descq11").setValueState(sap.ui.core.ValueState.None);
	   	  
	   	  }
			
		},
		
		checkinputMatnrMOB15Q11: function()
		{
			
			sap.ui.getCore().byId("idMob24MaterialSearch").getController().
			validateMatNum(sap.ui.getCore().byId("inputMatnr1").getValue());
		}
	
	

});

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

function resetQ11() {
	
	 glo_NotiKey = "";
	 
	var valMatNo = sap.ui.getCore().byId("inputMatnr1"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	   valMatNo = sap.ui.getCore().byId("ipQty1"); 
	   valMatNo.setValue("");
		  valMatNo.setEnabled(true);
	  
	   valMatNo = sap.ui.getCore().byId("inputOrderNo1"); 
	   valMatNo.setValue("");
		  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("delnoq11"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("descq11"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  valMatNo.setValueState(sap.ui.core.ValueState.None);
	  
	  
	  valMatNo = sap.ui.getCore().byId("adninfoq11"); 
	  valMatNo.setValue("");
	  valMatNo.setEnabled(true);
	  
	  valMatNo = sap.ui.getCore().byId("myList"); 
	  valMatNo.removeSelections();
}