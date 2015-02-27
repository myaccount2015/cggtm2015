sap.ui.controller("com.cg.gtm.view.Drop1_MOB22.InspectionLotInitialView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.InspectionLotInitialView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.InspectionLotInitialView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.InspectionLotInitialView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.InspectionLotInitialView
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB22";
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
	saveInspecLot: function() {
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		//alert(demo.getState());
		
		if (demo.getState())
			{
			
		

			
			var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
			var vendornum = sap.ui.getCore().byId("inputVendorMOB22"); 
		//	alert("vendor selection : "+vendornum.getSelectedItem().getText());
			var insLotQty = sap.ui.getCore().byId("insqty");
			var batch = sap.ui.getCore().byId("batch");
		    var insdet = sap.ui.getCore().byId("insdet"); 
			
			
			
			var insNum = new Array();
			
						var msg = "Inspection Lot 123456 Created Successfully";
				        jQuery.sap.require("sap.m.MessageToast");
				        sap.m.MessageToast.show(msg);
				     //   alert(oResponse.Insplot_No);
				    	var insNum = new Array();
				        var items = window.localStorage.getItem('INSLIST');
				      	 if (items === undefined || items === null || items.length === 0)
				      	 {
				      		 

				       		
				       		// create a metadata object 
				       		  var currDate = new Date();
				       		currDate.toDateString();
				       		  var timeMilli = currDate.getTime();
				       		insNum[0] = timeMilli; 
				       		
				       		
				     		str1 = currDate.toDateString();
				     		str2 =  " ";
				     		str3 = currDate.toLocaleTimeString();
				     		var res1 = str1.concat(str2);
				     		var res2 = res1.concat(str3);
				     		
				       		var insModelString = 	JSON.stringify(insNum);
				       		 window.localStorage.setItem("INSLIST", insModelString);//store the notification number 
				       		 //NOW move data to actual object
				       		var insData = {
				       				"time" : 	res2,
				       				"matnum": matnum.getValue(),
				       				"vendor":vendornum.getSelectedItem().getText(),
				       				"batch":batch.getValue(),
				       				"qty": insLotQty.getValue(),
				       				"ins":insdet.getValue(),
				       				"lotnum" : "Demo Insplot No",
				       				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB22Desc").getText()
				       			}
				       		

				       			var stringifiedIns = JSON.stringify(insData);
				       		
				       			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
				       	 
				      	 }
				      	 else
				      		 {
				      		 

				      		 
				       		
				       		
				       		insNumRcvd =  JSON.parse(items);
				       		 var currDate = new Date();
				      		  var timeMilli = currDate.getTime();
				      		  
				      		 str1 = currDate.toDateString();
				      		str2 =  " ";
				      		str3 = currDate.toLocaleTimeString();
				      		var res1 = str1.concat(str2);
				      		var res2 = res1.concat(str3);
				      		
				      		 insNumRcvd.push(timeMilli);//pushing new noti number 
				       		 
				       		var insNumRcvdString = 	JSON.stringify(insNumRcvd);
				       		 window.localStorage.setItem("INSLIST", insNumRcvdString);
				       		 
				       		 
				       		var insData = {
				       				"time" : 	res2,
				       				"matnum": matnum.getValue(),
				       				"vendor":vendornum.getSelectedItem().getText(),
				       				"batch":batch.getValue(),
				       				"qty": insLotQty.getValue(),
				       				"ins":insdet.getValue(),
				       				"lotnum" : "Demo Insplot No",
				       				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB22Desc").getText()
				       			}
				       		
				       		var stringifiedIns = JSON.stringify(insData);
				       		
				   			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
				       		 
				      		 }
				      		
				     
						matnum.setEnabled(false);
						
					
						vendornum.setEnabled(false);
					
						
						insLotQty.setEnabled(false);
						
						batch.setEnabled(false);
					
					 
					    insdet.setEnabled(false);
					    
					    var insLotLb = sap.ui.getCore().byId("insLotTime"); 
					    insLotLb.setVisible(false);
					    
					    insLotLb = sap.ui.getCore().byId("insLotLb"); 
					    insLotLb.setVisible(false);
			
			}
		
		else
			{
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB22:: Service: InsplotColl Start" ; 
			
			
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
		

		if(serviceURL == "Fail")
				 {
				 return false;
				 }
		
		
		var oDataCreateInspLot = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var readRequestURL = "/InsplotColl";
		
		oDataCreateInspLot.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});
		var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
		var vendornum = sap.ui.getCore().byId("inputVendorMOB22"); 

		
		var insLotQty = sap.ui.getCore().byId("insqty");
		var batch = sap.ui.getCore().byId("batch");
	    var insdet = sap.ui.getCore().byId("insdet"); 
		
		var createReqData = {
				"Material" : matnum.getValue(),
				"Short_Text" :  insdet.getValue(),
				"Purchase_Org": "2000",
				"Ven_Act_No": vendornum.getSelectedItem().getKey(),
				"Insp_Lot_Qty": insLotQty.getValue(),
				"Plant": "GWNP"
			};
		
		var insNum = new Array();
       /* var items = window.localStorage.getItem('INSLIST');
      	 if (items === undefined || items === null || items.length === 0)
      	 {
      		
      		// create a metadata object 
      		  var currDate = new Date();
      		currDate.toDateString();
      		  var timeMilli = currDate.getTime();
      		insNum[0] = timeMilli; 
      		
      		
    		str1 = currDate.toDateString();
    		str2 =  " ";
    		str3 = currDate.toLocaleTimeString()
    		var res1 = str1.concat(str2);
    		var res2 = res1.concat(str3);
    		
      		var insModelString = 	JSON.stringify(insNum);
      		 window.localStorage.setItem("INSLIST", insModelString);//store the notification number 
      		 //NOW move data to actual object
      		var insData = {
      				"time" : 	res2,
      				"matnum": matnum.getValue(),
      				"vendor":vendornum.getValue(),
      				"batch":batch.getValue(),
      				"qty": insLotQty.getValue(),
      				"ins":insdet.getValue()
      			}
      		

      			var stringifiedIns = JSON.stringify(insData);
      		
      			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
      	 }
      	 else
      		 {
      		 
      		
      		
      		insNumRcvd =  JSON.parse(items);
      		 var currDate = new Date();
     		  var timeMilli = currDate.getTime();
     		  
     		 str1 = currDate.toDateString();
     		str2 =  " ";
     		str3 = currDate.toLocaleTimeString()
     		var res1 = str1.concat(str2);
     		var res2 = res1.concat(str3);
     		
     		 insNumRcvd.push(timeMilli);//pushing new noti number 
      		 
      		var insNumRcvdString = 	JSON.stringify(insNumRcvd);
      		 window.localStorage.setItem("INSLIST", insNumRcvdString);
      		 
      		 
      		var insData = {
      				"time" : 	res2,
      				"matnum": matnum.getValue(),
      				"vendor":vendornum.getValue(),
      				"batch":batch.getValue(),
      				"qty": insLotQty.getValue(),
      				"ins":insdet.getValue()
      			}
      		
      		var stringifiedIns = JSON.stringify(insData);
      		
  			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
      		 }*/
		
		oDataCreateInspLot.create(readRequestURL, createReqData, null, 
				function(oResponse) {
			
					var msg1 = "Inspection Lot ";
			        var msg2 =  " Created Successfully";
			        var final1 = msg1.concat(oResponse.Insplot_No);
			        var final2 = final1.concat(msg2);
			        jQuery.sap.require("sap.m.MessageToast");
			        sap.m.MessageToast.show(final2);
			      //  alert(oResponse.Insplot_No);
			    	var insNum = new Array();
			        var items = window.localStorage.getItem('INSLIST');
			      	 if (items === undefined || items === null || items.length === 0)
			      	 {
			      		 

			       		
			       		// create a metadata object 
			       		  var currDate = new Date();
			       		currDate.toDateString();
			       		  var timeMilli = currDate.getTime();
			       		insNum[0] = timeMilli; 
			       		
			       		
			     		str1 = currDate.toDateString();
			     		str2 =  " ";
			     		str3 = currDate.toLocaleTimeString();
			     		var res1 = str1.concat(str2);
			     		var res2 = res1.concat(str3);
			     		
			       		var insModelString = 	JSON.stringify(insNum);
			       		 window.localStorage.setItem("INSLIST", insModelString);//store the notification number 
			       		 //NOW move data to actual object
			       		var insData = {
			       				"time" : 	res2,
			       				"matnum": matnum.getValue(),
			       				"vendor":vendornum.getSelectedItem().getText(),//vendornum.getValue(),
			       				"batch":batch.getValue(),
			       				"qty": insLotQty.getValue(),
			       				"ins":insdet.getValue(),
			       				"lotnum" : oResponse.Insplot_No,
			       				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB22Desc").getText()
			       			}
			       		

			       			var stringifiedIns = JSON.stringify(insData);
			       		
			       			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
			       	 
			      	 }
			      	 else
			      		 {
			      		 

			      		 
			       		
			       		
			       		insNumRcvd =  JSON.parse(items);
			       		 var currDate = new Date();
			      		  var timeMilli = currDate.getTime();
			      		  
			      		 str1 = currDate.toDateString();
			      		str2 =  " ";
			      		str3 = currDate.toLocaleTimeString();
			      		var res1 = str1.concat(str2);
			      		var res2 = res1.concat(str3);
			      		
			      		 insNumRcvd.push(timeMilli);//pushing new noti number 
			       		 
			       		var insNumRcvdString = 	JSON.stringify(insNumRcvd);
			       		 window.localStorage.setItem("INSLIST", insNumRcvdString);
			       		 
			       		 
			       		var insData = {
			       				"time" : 	res2,
			       				"matnum": matnum.getValue(),
			       				"vendor":vendornum.getSelectedItem().getText(),//vendornum.getValue(),
			       				"batch":batch.getValue(),
			       				"qty": insLotQty.getValue(),
			       				"ins":insdet.getValue(),
			       				"lotnum" : oResponse.Insplot_No,
			       				"matdesc" : sap.ui.getCore().byId("lblMatnrMOB22Desc").getText()
			       			}
			       		
			       		var stringifiedIns = JSON.stringify(insData);
			       		
			   			window.localStorage.setItem(timeMilli.toString(), stringifiedIns);//store the notification number 
			       		 
			      		 }
			      		
			     
					matnum.setEnabled(false);
					
				
					vendornum.setEnabled(false);
				
					
					insLotQty.setEnabled(false);
					
					batch.setEnabled(false);
				
				 
				    insdet.setEnabled(false);
				    
				    var insLotLb = sap.ui.getCore().byId("insLotTime"); 
				    insLotLb.setVisible(false);
				    
				    insLotLb = sap.ui.getCore().byId("insLotLb"); 
				    insLotLb.setVisible(false);
				  
				    if( g_isDebug == true)
				    {
				    //Service End Time
				    var logInfo1 = getTimeStamp() +"MOB22:: Service: InsplotColl Finish" ; 
				    //Log file Service Start and End Time
				    var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				    logFileUpdate(g_ServiceStartEndTime);
				    }
					
				}, function(oError){ 
/*					sap.m.MessageBox.show
("Error While Creating Inspection Lot: " + oError.message +" "+oError.status+" "+oError.Statustype);*/
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
						    var logInfo1 = getTimeStamp() +"MOB22:: Service: InsplotColl Failed no network" ; 
						    //Log file Service Start and End Time
						    var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						    logFileUpdate(g_ServiceStartEndTime);
						    }
							
							}
					
					
				});
			}
		
	},
	
	showQ : function()
	{
		

		
		var insNumRcvd = new Array();
		
		var items = window.localStorage.getItem('INSLIST');
	 	
	 		
	 		
	 		insNumRcvd =  JSON.parse(items);
	 		var insItems = insNumRcvd.length;
	 		
	 		var oMD22Data = new Array();
	 		// globalMob15Detail;
	 		for (var i=0;i<insItems;i++)// iterate on array of notifications in Queue
	 		{ 
	 	    var insID =  insNumRcvd[i];	
	 	    
	 	   // if (notiID.substring(0, 2) == )
	 		var insData = window.localStorage.getItem(insID);// get from local storage 
	 		//oMD22Data.push(JSON.parse(insData));//the array needs to be parsed to convert to appropriate format
	 		
	 		
	 		 var insIDNum = parseInt(insID);
		 	  
		 	    var currDate = new Date();
	   		    currDate.toDateString();
	   		    var timeMilli = currDate.getTime();
	   		    
	   		    var diff  =  (timeMilli - insIDNum)/1000 ;
	   		   // alert(timeMilli - insIDNum);
	   		    
	   		    if (diff < 3600)
	   		    	{
		 	
		 		var insData = window.localStorage.getItem(insID);// get from local storage 
		 		oMD22Data.push(JSON.parse(insData));//the array needs to be parsed to convert to appropriate format
	   		    	}
	 		
	 		}
	 		
	 		var finalObj = {"list_22": oMD22Data};
	 		var oJasonInsQModel =  new sap.ui.model.json.JSONModel(finalObj);
	 		var insQ = sap.ui.getCore().byId("mob22iniList");
	 		insQ.setModel(oJasonInsQModel);
	 		
		
	
	},
	
	
	newInspection : function()
	{
		
		// alert(sap.ui.getCore().byId("inputVendorMOB22").getSelectedKey());
		var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
		matnum.setEnabled(true);
		matnum.setValue("");
		matnum.setValueState(sap.ui.core.ValueState.None);
		
		var vendornum = sap.ui.getCore().byId("inputVendorMOB22");
		sap.ui.getCore().byId("lblMatnrMOB22Desc").setText("");
		//vendornum.setSelectedKey("");
		//vendornum.setEnabled(false); //Bug fix part of unit test
		//sap.ui.getCore().byId("inputVendorMOB22").removeAllItems();//remove binded items
		
		 var dropDownDataArr = [] ;
		  var dropDownData = {  							    
				     "text": "",
				     "key" : ""				  
				 }; 
		  
		  dropDownDataArr.push(dropDownData);
				//  var oModelJsonList = sap.ui.getCore().byId("Customersdemo");  
					

	var dropDownDataFinal = [];
	dropDownDataFinal = {"items" : dropDownDataArr};
	var oModelJsonList = new sap.ui.model.json.JSONModel();  
	oModelJsonList.setData(dropDownDataFinal); 
	sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 	
	
		vendornum.setEnabled(true);
		
		
		var insLotQty = sap.ui.getCore().byId("insqty");
		insLotQty.setEnabled(true);
		insLotQty.setValue("");
		insLotQty.setValueState(sap.ui.core.ValueState.None);
		
		var batch = sap.ui.getCore().byId("batch");
		batch.setEnabled(true);
		batch.setValue("");
		
	    var insdet = sap.ui.getCore().byId("insdet"); 
	    insdet.setEnabled(true);
	    insdet.setValue("");
	    insdet.setValueState(sap.ui.core.ValueState.None);
		
	    
	    
	    var insLotLb = sap.ui.getCore().byId("insLotTime"); 
	    insLotLb.setVisible(false);
	    
	    insLotLb = sap.ui.getCore().byId("insLotLb"); 
	    insLotLb.setVisible(false);
	    
	    var mob22iniList = sap.ui.getCore().byId("mob22iniList"); // mob22iniList
	    mob22iniList.removeSelections(true); 
		
	}
		
	

});