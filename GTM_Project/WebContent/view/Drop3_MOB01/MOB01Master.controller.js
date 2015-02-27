sap.ui.controller("com.cg.gtm.view.Drop3_MOB01.MOB01Master", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
		sap.ui.getCore().byId("MOB01SplitApp").backToTopDetail();
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections();
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections();
	},

	handleHelpButtonPress: function () {
   
		
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB01";
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
	handleSearch: function(oEvent) {
		
		var sValue = oEvent.getParameter("value");
		var oFilter = new sap.ui.model.Filter("desc", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter1 = new sap.ui.model.Filter("code", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter2= new sap.ui.model.Filter([oFilter,oFilter1],false)
		var oBinding = oEvent.getSource().getBinding("items");
		oBinding.filter(oFilter2);
		
		},
	handleEquipmentValueHelpT: function () {
		//alert(g_trainordepot);
		g_trainordepot = "T";
		/*var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
		sap.ui.getCore().byId("MOB07AssetList").setModel(assets);
		
		sap.ui.getCore().byId("MOB07SplitApp").to("MOB07MasterTwo");
		sap.ui.getCore().byId("myApp").to("MOB07Initial");*/
		
		/*backNavMat = "MOB01T";
		var app = sap.ui.getCore().byId("myApp");  */
		

		
		//sap.ui.getCore().byId("myApp").to("MOB07Initial");
	//	sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo")
    	/*sap.ui.getCore().byId("MOB07FleetInput").setValue("");
		sap.ui.getCore().byId("MOB07FleetInput").setEnabled(true);

		
	
		sap.ui.getCore().byId("MOB07TrainInput").setValue("");
		sap.ui.getCore().byId("MOB07TrainInput").setEnabled(false);

		sap.ui.getCore().byId("MOB07CarInput").setValue("");
		sap.ui.getCore().byId("MOB07CarInput").setEnabled(false);

		sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
		sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(false);

		sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
		sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);*/
	
    //calling service to directly fire the search based on equipment number////

		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var equipment= sap.ui.getCore().byId("MOB01EQT").getValue();
		var fleet= sap.ui.getCore().byId("MOB01FleetInput").getValue();
		
		 
     	var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"' and Floc eq '"+g_MOB01LOC+"' and Fleet eq '"+fleet+"'&$format=json&$top=200";
		
     	oModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
     		var data= oData;
     		var model= new sap.ui.model.json.JSONModel(data);
     		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found");
    		sap.ui.getCore().byId("MOB07AssetList").setModel(model);
     		backNavMat = "MOB01T";
    		//var app = sap.ui.getCore().byId("myApp");  
     		sap.ui.getCore().byId("myApp").to("MOB07Initial");
    		sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
     		//	sap.ui.getCore().byId("MOB07AssetList").setModel(assets); //this line is to set the model 
     		//sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
     	},
              
              
              function(oError){  
		
				errorRes = true;
				//sap.m.MessageBox.show(oError.message);
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
						
						
						
						}
});
	
	
        /*app.to("MOB24Initial"); 
        sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24Master");
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Empty");
        */
        /*var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");*/
	 /*   var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);*/
	
	},
	
handleEquipmentValueHelpD: function () {
		
		
		/*var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
		sap.ui.getCore().byId("MOB07AssetList").setModel(assets);
		
		sap.ui.getCore().byId("MOB07SplitApp").to("MOB07MasterTwo");
		sap.ui.getCore().byId("myApp").to("MOB07Initial");*/


//calling service to directly fire the search based on equipment number////

	
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
 	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	var equipment= sap.ui.getCore().byId("MOB01EQD").getValue();
	var fleet= sap.ui.getCore().byId("MOB01FleetInput").getValue();
	
	// alert(g_MOB01LOC);
 	var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"' and Floc eq '"+g_MOB01LOC+"' and Fleet eq '"+fleet+"'&$format=json&$top=200";
	
 	oModel.read(readRequestURL, null, null, false,   
          function(oData, oResponse) {
 		debugger;
 		var data= oData;
 		var model= new sap.ui.model.json.JSONModel(data);
 		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found");
		sap.ui.getCore().byId("MOB07AssetList").setModel(model);
 		backNavMat = "MOB01D";
		//var app = sap.ui.getCore().byId("myApp");  
 		sap.ui.getCore().byId("myApp").to("MOB07Initial");
		sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
 		//	sap.ui.getCore().byId("MOB07AssetList").setModel(assets); //this line is to set the model 
 		//sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
 	},
          
          
          function(oError){  
	
			errorRes = true;
			//sap.m.MessageBox.show(oError.message);
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
					
					
					
					}
});


    /*app.to("MOB24Initial"); 
    sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24Master");
	sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Empty");
    */
    /*var app = sap.ui.getCore().byId("splitAppMaterial");  
    app.toMaster("idMob24MaterialSearchInput");
    app.toDetail("idMATSRBlank");*/
 /*   var getPlant =  window.localStorage.getItem("defPlantDesc");
    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
	inputPlantMat.setValue(getPlant);
	//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
	 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
	 inputPlantMat.setEnabled(true);*/


		
		/*backNavMat = "MOB01D";
		var app = sap.ui.getCore().byId("myApp");  
        app.to("MOB24Initial"); 
        sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24Master");
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Empty");
        
        /*var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");*
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);*/
	
	},
	
	handleTrainButtonPress: function () {
		g_trainordepot = "T";
		sap.ui.getCore().byId("MOB01TrainForm").setVisible(true);
		sap.ui.getCore().byId("MOB01DepotForm").setVisible(false);
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections().setVisible(false);
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections().setVisible(false);
		sap.ui.getCore().byId("MOB01NextButton").setVisible(true);
		sap.ui.getCore().byId("MOB01SplitApp").backToTopDetail();
		
	},
	
	handleDepotButtonPress: function () {
		sap.ui.getCore().byId("MOB01AREA").setEnabled(false);
		g_trainordepot = "D";
		sap.ui.getCore().byId("MOB01TrainForm").setVisible(false);
		sap.ui.getCore().byId("MOB01DepotForm").setVisible(true);
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections().setVisible(false);
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections().setVisible(false);
		sap.ui.getCore().byId("MOB01NextButton").setVisible(true);
		sap.ui.getCore().byId("MOB01SplitApp").backToTopDetail();
	},
	
	handleListButtonPress: function () {
		
		var notiNum = new Array();
		var notiNumRcvd = new Array();
		/*****************For Train **********************/
		var items = window.localStorage.getItem('TRQ');
	 	 if (items === undefined || items === null || items.length === 0)
	 	 {
	 		 
	 		
	 	 }
	 	 else
	 		 {
	 		
	 		
	 		notiNumRcvd =  JSON.parse(items);
	 		var notiItems = notiNumRcvd.length;
	 		
	 		var oMD15Data = new Array();
	 		var oMD15DataDepot = new Array();
	 		
	 		
	 		// globalMob15Detail;
	 		for (var i=0;i<notiItems;i++)// iterate on array of notifications in Queue
	 		{ 
	 	    var notiID =  notiNumRcvd[i];	
	 	    var notiNum = notiID.Time ;
	 	   var notiIDNum = parseInt(notiNum);
		 // var createdTime =  	  
	 	    var currDate = new Date();
   		    currDate.toDateString();
   		    var timeMilli = currDate.getTime();
   		    
   		    if ( notiID.Tran ==  "CRNOTI")
   		    	{
   		    var listData = {"Date" : notiID.Date,
   		    		        "Time" : notiID.Time,
   		    		        "stext" : notiID.stext};
   		    oMD15Data.push(listData);
	 		}
   		    
   		 if ( notiID.Tran ==  "CRNOTID")
	    	{
   			// alert(notiID.Time + notiID.Date+notiID.stext);
	    var listData = {"Date" : notiID.Date,
	    		        "Time" : notiID.Time,
	    		        "stext" : notiID.stext};
	    oMD15DataDepot.push(listData);
		}
   		 
   		    var diff  =  (timeMilli - notiIDNum)/1000 ;
	 		
	 		}
	 		
	 		var finalObj = {"MOB01T": oMD15Data};
	 		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(finalObj);
	 		var notiQ = sap.ui.getCore().byId("MOB01TrainNotificationList");
	 		notiQ.setModel(oJasonNotiQModel);
	 		
	 		//alert(oMD15DataDepot.length);
	 		var finalObjDepot = {"MOB01D": oMD15DataDepot};
	 		var oJasonNotiQModelD =  new sap.ui.model.json.JSONModel(finalObjDepot);
	 		var notiQD = sap.ui.getCore().byId("MOB01DepotNotificationList");
	 		notiQD.setModel(oJasonNotiQModelD);
	 		}
	 	 
	 	 
	 	
	 	 
	 	 
	 	/***************************************************************************/
	 	 /***********************  For Depot *************************************
	 	 
	 	var items = window.localStorage.getItem('TRQ');
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
	   		    
	   		  //  if ( diff < 3600){
	 		oMD15Data.push(JSON.parse(notiData));//the array needs to be parsed to convert to appropriate format
  		    	//}
	 			}
	 		
	 		}
	 		
	 		var finalObj = {"MOB01D": oMD15Data};
	 		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(finalObj);
	 		var notiQ = sap.ui.getCore().byId("MOB01DepotNotificationList");
	 		notiQ.setModel(oJasonNotiQModel);
	 		}
	 	 
	 	 /***********************************************************************/
	 	 
	 	 
	 	 
		sap.ui.getCore().byId("MOB01TrainForm").setVisible(false);
		sap.ui.getCore().byId("MOB01DepotForm").setVisible(false);
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections().setVisible(true);
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections().setVisible(true);
		sap.ui.getCore().byId("MOB01NextButton").setVisible(false);
		sap.ui.getCore().byId("MOB01SplitApp").backToTopDetail();
	},

	handleTrainListItemSelect: function (evt) {
		sap.ui.getCore().byId("MOB01TrainDetailIconTabBar").setSelectedKey("firstTab");
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections();
		var context1 = evt.getParameter("listItem").getBindingContext("trainNotifications");
		var context2 = evt.getParameter("listItem").getBindingContext("components");
		// TODO: Need to decide which detail to go to, at the minute it always goes to train detail.
		sap.ui.getCore().byId("MOB01TrainDetail").setBindingContext(context1, "trainNotifications");
		sap.ui.getCore().byId("MOB01TrainDetail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01TrainDetail");
	},

	handleTrainListItemPress: function (evt) {
		sap.ui.getCore().byId("MOB01DepotNotificationList").removeSelections(true);
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		//this.getModel().getProperty(contextPath + "/fleet")
		 var objJSONTran = "";
		 var fileName = this.getModel().getProperty(contextPath + "/Time");
		 
		 if(g_runningInTablet || g_runningOnPhone) 
			{readLocalFileOnDevice(fileName+".json", function(funCall){
				
				 var objJSONTran = JSON.parse(funCall);
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			      //processTransactionDrop3(objJobToProcess);
				 
				 sap.ui.getCore().byId("MOB01FL").setText(objJSONTran.Header.fleet);
				 sap.ui.getCore().byId("MOB01TR").setText(objJSONTran.Header.train);
				 sap.ui.getCore().byId("MOB01CA").setText(objJSONTran.Header.car);
				 sap.ui.getCore().byId("MOB01ZO").setText(objJSONTran.Header.zone);
				 sap.ui.getCore().byId("MOB01PR").setText(objJSONTran.Header.primary);
				 sap.ui.getCore().byId("MOB01SD").setText(objJSONTran.Header.shrtdesc);
				 sap.ui.getCore().byId("MOB01LD").setText(objJSONTran.Header.longdesc);
				 sap.ui.getCore().byId("MOB01PRIO").setText(objJSONTran.Header.priority);
				 sap.ui.getCore().byId("MOB01CODING").setText(objJSONTran.Header.coding);
				 sap.ui.getCore().byId("MOB01EF").setText(objJSONTran.Header.effect);
				 sap.ui.getCore().byId("MOB01EQPTrain").setText(objJSONTran.Header.eqp); 
				
				 
				 
				//DMS
					
				 var DMSImage = objJSONTran.Header.DMS_TakenImage;
				 var model = new sap.ui.model.json.JSONModel(DMSImage);
				 sap.ui.getCore().byId("TrainNotiCreated_AddedImageList").setModel(model);
				 
				 if ( objJSONTran.Header.BreakDownIndicator == "X")
					 {
					 sap.ui.getCore().byId("MOB01BRKDWN").setText("YES");
					 }
				 
				 else
					 {
					 sap.ui.getCore().byId("MOB01BRKDWN").setText("NO");
					 
					 }
				 //sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));
				 

					/* sap.ui.getCore().byId("MOB01FL").setText(this.getModel().getProperty(contextPath + "/fleet"));
					 sap.ui.getCore().byId("MOB01TR").setText(this.getModel().getProperty(contextPath + "/train"));
					 sap.ui.getCore().byId("MOB01CA").setText(this.getModel().getProperty(contextPath + "/car"));
					 sap.ui.getCore().byId("MOB01ZO").setText(this.getModel().getProperty(contextPath + "/zone"));
					 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
					 sap.ui.getCore().byId("MOB01SD").setText(this.getModel().getProperty(contextPath + "/shrtdesc"));
					 sap.ui.getCore().byId("MOB01LD").setText(this.getModel().getProperty(contextPath + "/longdesc"));
					 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
					 sap.ui.getCore().byId("MOB01CODING").setText(this.getModel().getProperty(contextPath + "/coding"));
					 sap.ui.getCore().byId("MOB01EF").setText(this.getModel().getProperty(contextPath + "/effect"));
					 sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));*/
					 
		                /*var sTime = this.getModel().getProperty(contextPath + "/time");
						var compData  =  window.localStorage.getItem(sTime + "_"+"COMPLIST");*/
						var compDataJSON = objJSONTran.Items;//(compData);
						
						 var compDataJSONArr = {
								  "results" : compDataJSON
						  };
						  var compDataJSONModel = new sap.ui.model.json.JSONModel();
						// set the data for the model
						  compDataJSONModel.setData(compDataJSONArr);
						  sap.ui.getCore().byId("MOB01TrainDetailComponentList").setModel(compDataJSONModel);
						  
			      
			  	//alert(funCall); // this is where you get the return value
			});}else {
		$.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName="+fileName+".json" + "&Append=false",
			  type: "post",
			  dataType: "text",
			  async : false ,
			  success: function(text){
			      //alert("success");
			      objJSONTran = JSON.parse(text);
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			     // processTransactionDrop3(objJobToProcess);
			      
			         sap.ui.getCore().byId("MOB01FL").setText(objJSONTran.Header.fleet);
					 sap.ui.getCore().byId("MOB01TR").setText(objJSONTran.Header.train);
					 sap.ui.getCore().byId("MOB01CA").setText(objJSONTran.Header.car);
					 sap.ui.getCore().byId("MOB01ZO").setText(objJSONTran.Header.zone);
					 sap.ui.getCore().byId("MOB01PR").setText(objJSONTran.Header.primary);
					 sap.ui.getCore().byId("MOB01SD").setText(objJSONTran.Header.shrtdesc);
					 sap.ui.getCore().byId("MOB01LD").setText(objJSONTran.Header.longdesc);
					 sap.ui.getCore().byId("MOB01PRIO").setText(objJSONTran.Header.priority);
					 sap.ui.getCore().byId("MOB01CODING").setText(objJSONTran.Header.coding);
					 sap.ui.getCore().byId("MOB01EF").setText(objJSONTran.Header.effect);
					 
					 //DMS
		
					 var DMSImage = objJSONTran.Header.DMS_TakenImage;
					 var model = new sap.ui.model.json.JSONModel(DMSImage);
					 sap.ui.getCore().byId("Mob01AddedImageList").setModel(model);
					
					 
					 
					 
					 if ( objJSONTran.Header.BreakDownIndicator == "X")
						 {
						 sap.ui.getCore().byId("MOB01BRKDWNDepot").setText("YES");
						 }
					 
					 else
						 {
						 sap.ui.getCore().byId("MOB01BRKDWNDepot").setText("NO");
						 
						 }
					 //sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));
					 

						/* sap.ui.getCore().byId("MOB01FL").setText(this.getModel().getProperty(contextPath + "/fleet"));
						 sap.ui.getCore().byId("MOB01TR").setText(this.getModel().getProperty(contextPath + "/train"));
						 sap.ui.getCore().byId("MOB01CA").setText(this.getModel().getProperty(contextPath + "/car"));
						 sap.ui.getCore().byId("MOB01ZO").setText(this.getModel().getProperty(contextPath + "/zone"));
						 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
						 sap.ui.getCore().byId("MOB01SD").setText(this.getModel().getProperty(contextPath + "/shrtdesc"));
						 sap.ui.getCore().byId("MOB01LD").setText(this.getModel().getProperty(contextPath + "/longdesc"));
						 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
						 sap.ui.getCore().byId("MOB01CODING").setText(this.getModel().getProperty(contextPath + "/coding"));
						 sap.ui.getCore().byId("MOB01EF").setText(this.getModel().getProperty(contextPath + "/effect"));
						 sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));*/
						 
			                /*var sTime = this.getModel().getProperty(contextPath + "/time");
							var compData  =  window.localStorage.getItem(sTime + "_"+"COMPLIST");*/
							var compDataJSON = objJSONTran.Items;//(compData);
							
							 var compDataJSONArr = {
									  "results" : compDataJSON
							  };
							  var compDataJSONModel = new sap.ui.model.json.JSONModel();
							// set the data for the model
							  compDataJSONModel.setData(compDataJSONArr);
							  sap.ui.getCore().byId("MOB01TrainDetailComponentList").setModel(compDataJSONModel);
			  },
			  error:function(){
			  }   
			}); 
			}
		
		sap.ui.getCore().byId("MOB01TrainDetailIconTabBar").setSelectedKey("firstTab");
		var context1 = evt.getSource().getBindingContext("trainNotifications");
		var context2 = evt.getSource().getBindingContext("components");
		// Need to decide which detail to go to, at the minute it always goes to train detail.
		sap.ui.getCore().byId("MOB01TrainDetail").setBindingContext(context1, "trainNotifications");
		sap.ui.getCore().byId("MOB01TrainDetail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01TrainDetail");
		 g_MobileNavigationId = "MOB01TrainDetail";
		
		
		
		
				
				  //Images for train
				  
				  
					var imgArr  = window.localStorage.getItem(sTime+"IMG");
					//alert(imgArr);
					var imaParsedArr = imgArr.split("III");
					
						sap.ui.getCore().byId("image1MOB01RO").setSrc(imaParsedArr[0]);
						sap.ui.getCore().byId("image2MOB01RO").setSrc(imaParsedArr[1]);
						sap.ui.getCore().byId("image3MOB01RO").setSrc(imaParsedArr[2]);
						
					
	    
		
	    
		
	},
	
	handleDepotListItemSelect: function (evt) {
		sap.ui.getCore().byId("MOB01DepotDetailIconTabBar").setSelectedKey("firstTab");
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections();
		var context1 = evt.getParameter("listItem").getBindingContext("depotNotifications");
		var context2 = evt.getParameter("listItem").getBindingContext("components");
		// TODO: Need to decide which detail to go to, at the minute it always goes to depot detail.
		sap.ui.getCore().byId("MOB01DepotDetail").setBindingContext(context1, "depotNotifications");
		sap.ui.getCore().byId("MOB01DepotDetail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01DepotDetail");
	},

	handleDepotListItemPress: function (evt) {
		sap.ui.getCore().byId("MOB01TrainNotificationList").removeSelections(true);
		sap.ui.getCore().byId("MOB01DepotDetailIconTabBar").setSelectedKey("firstTab");
		var context1 = evt.getSource().getBindingContext("depotNotifications");
		var context2 = evt.getSource().getBindingContext("components");
		// Need to decide which detail to go to, at the minute it always goes to depot detail.
		sap.ui.getCore().byId("MOB01DepotDetail").setBindingContext(context1, "depotNotifications");
		sap.ui.getCore().byId("MOB01DepotDetail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01DepotDetail");
		 g_MobileNavigationId = "MOB01DepotDetail";
		
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;

		/* sap.ui.getCore().byId("MOB01DEPOTRO").setText(this.getModel().getProperty(contextPath + "/depot"));
		 sap.ui.getCore().byId("MOB01DSDRO").setText(this.getModel().getProperty(contextPath + "/shrtdesc"));
		 sap.ui.getCore().byId("MOB01DLDRO").setText(this.getModel().getProperty(contextPath + "/longdesc"));
		 sap.ui.getCore().byId("MOB01FLTRO").setText(this.getModel().getProperty(contextPath + "/faultyloc"));
		 sap.ui.getCore().byId("MOB01DROOMRO").setText(this.getModel().getProperty(contextPath + "/room"));
		 sap.ui.getCore().byId("MOB01DPRIORO").setText(this.getModel().getProperty(contextPath + "/priority"));
		 
           var sTime = this.getModel().getProperty(contextPath + "/time");
			var compData  =  window.localStorage.getItem(sTime + "_"+"COMPLIST");
			var compDataJSON = JSON.parse(compData);
			
			 var compDataJSONArr = {
					  "results" : compDataJSON
			  };
			  var compDataJSONModel = new sap.ui.model.json.JSONModel();
			// set the data for the model
			  compDataJSONModel.setData(compDataJSONArr);
			  sap.ui.getCore().byId("MOB01DepotDetailComponentList").setModel(compDataJSONModel);
			  
			  
			  var imgArr  = window.localStorage.getItem(sTime+"IMG");
				var imaParsedArr = imgArr.split("III");
				
				sap.ui.getCore().byId("image1MOB01DRO").setSrc(imaParsedArr[0]);
				sap.ui.getCore().byId("image2MOB01DRO").setSrc(imaParsedArr[1]);
				sap.ui.getCore().byId("image3MOB01DRO").setSrc(imaParsedArr[2]);
				
				
				/****************************************************/
				

				var fileName = this.getModel().getProperty(contextPath + "/Time");
			//	alert(fileName);
				readLocalFileOnDevice(fileName+".json", function(funCall){
					
					 var objJSONTran = JSON.parse(funCall);
				      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
				      //processTransactionDrop3(objJobToProcess);
					 
					 sap.ui.getCore().byId("MOB01DEPOTRO").setText(objJSONTran.Header.depot);
					 sap.ui.getCore().byId("MOB01DEPOTROAR").setText(objJSONTran.Header.area);
					 sap.ui.getCore().byId("MOB01DSDRO").setText(objJSONTran.Header.shrtdesc);
					 sap.ui.getCore().byId("MOB01DLDRO").setText(objJSONTran.Header.longdesc);
					 sap.ui.getCore().byId("MOB01DPRIORO").setText(objJSONTran.Header.priority);
					 
					 sap.ui.getCore().byId("MOB01EQPDepot").setText(objJSONTran.Header.eqp); 
					 //DMS					
					 var DMSImage = objJSONTran.Header.DMS_TakenImage;
					 
					
					 var model = new sap.ui.model.json.JSONModel(DMSImage);
					 sap.ui.getCore().byId("DepotNotiCreated_AddedImageList").setModel(model);
					 if ( objJSONTran.Header.BreakDownIndicator == "X")
						 {
						 sap.ui.getCore().byId("MOB01BRKDWNDepot").setText("YES");
						 }
					 
					 else
						 {
						 sap.ui.getCore().byId("MOB01BRKDWNDepot").setText("NO");
						 
						 }
					 //sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));
					 

						/* sap.ui.getCore().byId("MOB01FL").setText(this.getModel().getProperty(contextPath + "/fleet"));
						 sap.ui.getCore().byId("MOB01TR").setText(this.getModel().getProperty(contextPath + "/train"));
						 sap.ui.getCore().byId("MOB01CA").setText(this.getModel().getProperty(contextPath + "/car"));
						 sap.ui.getCore().byId("MOB01ZO").setText(this.getModel().getProperty(contextPath + "/zone"));
						 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
						 sap.ui.getCore().byId("MOB01SD").setText(this.getModel().getProperty(contextPath + "/shrtdesc"));
						 sap.ui.getCore().byId("MOB01LD").setText(this.getModel().getProperty(contextPath + "/longdesc"));
						 sap.ui.getCore().byId("MOB01PR").setText(this.getModel().getProperty(contextPath + "/primary"));
						 sap.ui.getCore().byId("MOB01CODING").setText(this.getModel().getProperty(contextPath + "/coding"));
						 sap.ui.getCore().byId("MOB01EF").setText(this.getModel().getProperty(contextPath + "/effect"));
						 sap.ui.getCore().byId("MOB01PRIO").setText(this.getModel().getProperty(contextPath + "/priority"));*/
						 
			                /*var sTime = this.getModel().getProperty(contextPath + "/time");
							var compData  =  window.localStorage.getItem(sTime + "_"+"COMPLIST");*/
							/*var compDataJSON = objJSONTran.Items;//(compData);
							
							 var compDataJSONArr = {
									  "results" : compDataJSON
							  };
							  var compDataJSONModel = new sap.ui.model.json.JSONModel();
							// set the data for the model
							  compDataJSONModel.setData(compDataJSONArr);
							  sap.ui.getCore().byId("MOB01TrainDetailComponentList").setModel(compDataJSONModel);*/
							  
				      
				  	//alert(funCall); // this is where you get the return value
				});
			
				
				/********************************************************/
					
	},

	handleNextButtonPress: function (evt) {
	/*	if (sap.ui.getCore().byId("MOB01EQT").getValue())
			{}
		else
			{*/
		var selected = sap.ui.getCore().byId(sap.ui.getCore().byId("MOB01SegmentedButton").getSelectedButton());
		var components = new sap.ui.model.json.JSONModel("view/data/components.json");
		//sap.ui.getCore().byId("MOB01TrainDetailEditComponentList").setModel(components);
		//sap.ui.getCore().byId("MOB01DepotDetailEditComponentList").setModel(components);
		
		sap.ui.getCore().byId("MOB01TSD").setValue("");
	    sap.ui.getCore().byId("MOB01TLD").setValue("");
	    sap.ui.getCore().byId("MOB01TCOD").setValue(""); 
	    sap.ui.getCore().byId("MOB01TEFF").setValue(""); 
	    sap.ui.getCore().byId("MOB01TPRI").setValue("");
	    sap.ui.getCore().byId("MOB01DSD").setValue("");
	    sap.ui.getCore().byId("MOB01DLD").setValue("");
	    sap.ui.getCore().byId("MOB01FLOC").setValue(""); 
	    sap.ui.getCore().byId("MOB01ROOM").setValue(""); 
	    sap.ui.getCore().byId("MOB01DPRIO").setValue("");
	    sap.ui.getCore().byId("MOB01DCOD").setValue("");
	    sap.ui.getCore().byId("MOB01BRKDWNT").setSelected(false);
	    sap.ui.getCore().byId("MOB01BRKDWND").setSelected(false);
	    
		if (selected.getText() === "Train") {
			//var context2 = evt.getSource().getBindingContext("components");
			//sap.ui.getCore().byId("MOB01TrainDetailEdit").setBindingContext(context2, "components");
			
			//DMS
			//Clear Image
			var getAlreadyBindedData = [];
			var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(getAlreadyBindedData);
			sap.ui.getCore().byId("Mob01AddedImageList").setModel(oJasonNotiQModel);
			
			
			if( g_runningOnPhone)
				{

			 g_MobileNavigationId = "MOB01TrainDetailEdit";
		}
			//sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01TrainDetailEdit");
			sap.ui.getCore().byId("image1MOB01RO").setSrc("");
			sap.ui.getCore().byId("image2MOB01RO").setSrc("");
			sap.ui.getCore().byId("image3MOB01RO").setSrc("");
			
			if ( null == sap.ui.getCore().byId("MOB01TrainInput").getValue() ||  "" ==  sap.ui.getCore().byId("MOB01TrainInput").getValue())
				{
				alert("Please provide a functional location");
				
				}
			
			else
				{
				sap.ui.getCore().byId("MOB01TSD").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("MOB01ROOM").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("MOB01FLOC").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("MOB01TPRI").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01TrainDetailEdit");
				}
			
		} else {
			
			//DMS
			//Clear Image
			var getAlreadyBindedDataDeport = [];
			var oJasonNotiQModelDeport =  new sap.ui.model.json.JSONModel(getAlreadyBindedDataDeport);
			sap.ui.getCore().byId("Mob01_Depot_AddedImageList").setModel(oJasonNotiQModelDeport);
			
			
			
			if( g_runningOnPhone)
			{
			 g_MobileNavigationId = "MOB01DepotDetailEdit";
			}
			
//			sap.ui.getCore().byId("image1MOB01D").setSrc("");
	//		sap.ui.getCore().byId("image2MOB01D").setSrc("");
		//	sap.ui.getCore().byId("image3MOB01D").setSrc("");
			
			if ( null == sap.ui.getCore().byId("MOB01DepotInput").getValue() ||  "" ==  sap.ui.getCore().byId("MOB01DepotInput").getValue())
			{
			alert("Please provide a functional location");
			
			}
		
		else
			{
			sap.ui.getCore().byId("MOB01DSD").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("MOB01DPRIO").setValueState(sap.ui.core.ValueState.None);
			
			sap.ui.getCore().byId("MOB01SplitApp").toDetail("MOB01DepotDetailEdit");
			}
		}
	},
	
	
	handleValueHelpDepotArea : function( evt)
	{
		
		/************/
		 g_AssetSrch =  "MOB01AREA";
		readLocalFileOnDevice("AssetListDepot.json", function(funCall){
			var depot = sap.ui.getCore().byId("MOB01DepotInput").getValue();
			var depotCode = depot.split("-")[0];
			 var assetDataArr = JSON.parse(funCall);
			 var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					
					if ( assetDataArr[i].ObjType == "20001" &&  assetDataArr[i].SupFloc == depotCode)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc.split("-")[1]  , //+"-"+assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].Floc+":"+assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				
				var dataArrFinal = {"results" : dataArrIni};
				//MOB02InputId = evt.getSource().sId;
				MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
				MOB07Dialog.setTitle("Choose Area");
				var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
				MOB07Dialog.setModel(codesModel);
				MOB07Dialog.open();
			 
		});
		
		
		
		/***************
		var depot = sap.ui.getCore().byId("MOB01DepotInput").getValue();
		var depotCode = depot.split("-")[0];
		//var depotDesc = depot.split("-")[1];
		var depotDesc  = sap.ui.getCore().byId("MOB01DepotDesc").getValue();
		var dataArrIni = [];
		g_AssetSrch = "MOB01AREA";	
				var data = {
						"code" : "OFCE",
 						"desc" : depotCode + "-OFCE" + ":" + depotDesc + "-Office" ,//"Office",
						//"desc" : "OFC"
						
				};
				dataArrIni.push(data);
				
				var data = {
						"code" : "SHED",
						"desc" : depotCode + "-SHED" + ":" + depotDesc + "-Shed" , //"code" : "Shed",
						//"desc" : "SHD"
				};
				dataArrIni.push(data);
				var data = {
						"code" : "STOR",
						"desc" : depotCode + "-STOR" + ":" + depotDesc + "-Stores" , //"code" : "Strore",
						//"desc" : "STR"
						
				};
				dataArrIni.push(data);
				
				var data = {
						"code" : "YARD",
						"desc" : depotCode + "-YARD" + ":" + depotDesc + "-Yard"  , //"code" : "Yard",
						//"desc" : "YRD"
				};
				dataArrIni.push(data);
				
		
		var dataArrFinal = {"results" : dataArrIni};
			//MOB02InputId = evt.getSource().sId;
			MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
			//MOB01Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB07Dialog.setModel(codesModel);
			MOB07Dialog.open();*/
			},
	handleValueHelpFleet : function( evt)
	{

		//var dataArrIni = [];
		g_AssetSrch = "MOB01FleetInput";
		//returnTrains("EC");
	//	g_AssetSrch = "MOB01TrainInput";	
      // var sFleet = sap.ui.getCore().byId("MOB01FleetInput").getValue();
		//var assetData =  allAssets();
       if(g_runningInTablet || g_runningOnPhone) 
		{
    	   var dataArrIni = [];
    	   readLocalFileOnDevice("MasterData.json", function(funCall)
		
				{
			
    		   var fleet = JSON.parse(funCall);
			 
			 assetDataArr = fleet[0].Nav2PlannerGroup.results ;
		      var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					
						
						var data = {
								"code" : assetDataArr[i].Ingrp , //+"-"+assetDataArr[i].Innam,
								 "desc" : assetDataArr[i].Innam
								
						};
						dataArrIni.push(data);
						
						
					}
			 
			/* var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Fleet == sFleet && assetDataArr[i].SupFloc.length == 0)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc + "-" + assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}*/
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					MOB01Dialog.setTitle("Choose Fleet");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();
			 
		});
		}
		else
			{
		$.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=MasterData.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var fleet = JSON.parse(text);
			      assetDataArr = fleet[0].Nav2PlannerGroup.results ;
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						
							
							var data = {
									"code" : assetDataArr[i].Ingrp+"-"+assetDataArr[i].Innam
									//"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					MOB07Dialog.setTitle("Choose Fleet");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB07Dialog.setModel(codesModel);
					MOB07Dialog.open();
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			      //processTransactionDrop3(objJobToProcess);
			  },
			  error:function(){
			  }   
			}); 
		
		/*var assetDataArr = assetData.d.results;;
		var dataArrIni = [];
		for ( var i = 0 ; i < assetDataArr.length ; i ++)
			{
			
			if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
				{
				
				var data = {
						"code" : assetDataArr[i].Tplnr,
						"desc" : assetDataArr[i].Pltxt
						
				};
				dataArrIni.push(data);
				
				}
			}
		
		var dataArrFinal = {"results" : dataArrIni};
		
		
			//MOB02InputId = evt.getSource().sId;
			MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
			//MOB01Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB01Dialog.setModel(codesModel);
			MOB01Dialog.open();*/
			}
		
		/***********************************************
		
		var dataArrIni = [];
		g_AssetSrch = "MOB01FleetInput";	
				var data = {
						"code" : "EC",
						"desc" : "East Coast"
						
				};
				dataArrIni.push(data);
				
				var data = {
						"code" : "GW",
						"desc" : "Grear Western"
				};
				dataArrIni.push(data);
				
		
		var dataArrFinal = {"results" : dataArrIni};
			//MOB02InputId = evt.getSource().sId;
			MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
			//MOB01Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB07Dialog.setModel(codesModel);
			MOB07Dialog.open();*/
			},
	
	handleValueHelpTrain : function( evt)
	{

		//returnTrains("EC");
		g_AssetSrch = "MOB01TrainInput";	
       var sFleet = sap.ui.getCore().byId("MOB01FleetInput").getValue();
       //var sFleetArr = sFleetAll.split("-");
       //var sFleet = sFleetArr[0];
		//var assetData =  allAssets();
       if(g_runningInTablet || g_runningOnPhone) 
		{
    	   readLocalFileOnDevice("AssetList.json", function(funCall)
		
				{
			
			 var assetDataArr = JSON.parse(funCall);
			 
			 var dataArrIni = [];
			 
			 var dataIni = {
						"code" : "" , //+ "-" + assetDataArr[i].FlocDesc,
						"desc" : ""
						
				};
			 dataArrIni.push(dataIni);
			 
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Fleet == sFleet && assetDataArr[i].SupFloc.length == 0)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc , //+ "-" + assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					MOB01Dialog.setTitle("Choose Train");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();
			 
		});
		}
		else
			{
		$.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var assetDataArr = JSON.parse(text);
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						if ( assetDataArr[i].Fleet == sFleet && assetDataArr[i].SupFloc.length == 0)
							{
							
							var data = {
									"code" : assetDataArr[i].Floc + "-" + assetDataArr[i].FlocDesc,
									"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							}
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					
					
						//MOB02InputId = evt.getSource().sId;
						MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
						MOB01Dialog.setTitle("Choose Train");
						var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
						MOB01Dialog.setModel(codesModel);
						MOB01Dialog.open();
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			      //processTransactionDrop3(objJobToProcess);
			  },
			  error:function(){
			  }   
			}); 
		
		/*var assetDataArr = assetData.d.results;;
		var dataArrIni = [];
		for ( var i = 0 ; i < assetDataArr.length ; i ++)
			{
			
			if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
				{
				
				var data = {
						"code" : assetDataArr[i].Tplnr,
						"desc" : assetDataArr[i].Pltxt
						
				};
				dataArrIni.push(data);
				
				}
			}
		
		var dataArrFinal = {"results" : dataArrIni};
		
		
			//MOB02InputId = evt.getSource().sId;
			MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
			//MOB01Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB01Dialog.setModel(codesModel);
			MOB01Dialog.open();*/
			}
		},
	
	handleDialogConfirm : function(evt)
	{
		var oSelectedItem = evt.getParameter("selectedItem");
		g_MOB01LOC =  oSelectedItem.getTitle();
		
		
		if (oSelectedItem) {
			sap.ui.getCore().byId("MOB01DepotDesc").setValue(oSelectedItem.getDescription());
			var input = sap.ui.getCore().byId(g_AssetSrch);
			
			if ( input.getValue() == oSelectedItem.getTitle() )
				{
				input.setValue(oSelectedItem.getTitle());
				
				}
			
			else {

				if ( g_AssetSrch == "MOB01FleetInput")
				{

					sap.ui.getCore().byId("MOB01TrainInput").setValue("");
					sap.ui.getCore().byId("MOB01TrainInput").setEnabled(true);

					sap.ui.getCore().byId("MOB01CarInput").setValue("");
					sap.ui.getCore().byId("MOB01CarInput").setEnabled(false);

					sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
				}
				else if ( g_AssetSrch == "MOB01TrainInput")
				{

					sap.ui.getCore().byId("MOB01CarInput").setValue("");
					sap.ui.getCore().byId("MOB01CarInput").setEnabled(true);

					sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
				}

				else if ( g_AssetSrch == "MOB01CarInput")
				{

					sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(true);

					sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
				}

				else {
					sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(true);

				}
				input.setValue(oSelectedItem.getTitle());
				
				if ( g_AssetSrch == "MOB01AREA")
				{
					
					sap.ui.getCore().byId("MOB01AREA").setValue(oSelectedItem.getDescription().split(":")[0]);
					g_MOB01LOC = oSelectedItem.getDescription().split(":")[0];
				}
				
				if (g_AssetSrch == "MOB01DepotInput")
					{
					
					sap.ui.getCore().byId("MOB01AREA").setEnabled(true);
					}
				

			}
			
		}
		//evt.getSource().getBinding("items").filter([]);
		
	},
	
	handleValueHelpCar : function( evt)
	{

		//returnTrains("EC");
		g_AssetSrch = "MOB01CarInput";	
        var sTrainAll = sap.ui.getCore().byId("MOB01TrainInput").getValue();
        var sTrainArr = sTrainAll.split("-");
        var sTrain = sTrainArr[0];
        
		//var assetData =  allAssets();
		//var assetDataArr = assetData.d.results;;
        if(g_runningInTablet || g_runningOnPhone) 
		{
    	   readLocalFileOnDevice("AssetList.json", function(funCall)
		
				{
			
			 var assetDataArr = JSON.parse(funCall);
			 
			 var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].SupFloc == sTrain)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc ,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					MOB01Dialog.setTitle("Choose Car");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();
			 
		});
		}
		else
			{
        $.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var assetDataArr = JSON.parse(text);
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						if ( assetDataArr[i].SupFloc == sTrain)
							{
							
							var data = {
									"code" : assetDataArr[i].Floc ,
									"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							}
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					
					
						//MOB02InputId = evt.getSource().sId;
						MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
						MOB01Dialog.setTitle("Choose Car");
						var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
						MOB01Dialog.setModel(codesModel);
						MOB01Dialog.open();
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			      //processTransactionDrop3(objJobToProcess);
			  },
			  error:function(){
			  }   
			}); 
			}
		
			},
			
			handleValueHelpZone : function( evt)
			{

				//returnTrains("EC");
				g_AssetSrch = "MOB01ZoneInput";	
		        var sCar = sap.ui.getCore().byId("MOB01CarInput").getValue();
				//var assetData =  allAssets();
				//var assetDataArr = assetData.d.results;
		        if(g_runningInTablet || g_runningOnPhone) 
				{
		    	   readLocalFileOnDevice("AssetList.json", function(funCall)
				
						{
					
					 var assetDataArr = JSON.parse(funCall);
					 
					 var dataArrIni = [];
						for ( var i = 0 ; i < assetDataArr.length ; i ++)
							{
							
							if ( assetDataArr[i].SupFloc == sCar)
								{
								
								var data = {
										"code" : assetDataArr[i].Floc ,
										"desc" : assetDataArr[i].FlocDesc
										
								};
								dataArrIni.push(data);
								
								}
							}
						
						var dataArrFinal = {"results" : dataArrIni};
						
						
							//MOB02InputId = evt.getSource().sId;
							MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
							MOB01Dialog.setTitle("Choose Zone");
							var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
							MOB01Dialog.setModel(codesModel);
							MOB01Dialog.open();
					 
				});
				}
				else
					{
		        $.ajax({
				  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
				  type: "post",
				  dataType: "text",
				  success: function(text){
					  var assetDataArr = JSON.parse(text);
					  var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].SupFloc == sCar)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc ,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					MOB01Dialog.setTitle("Choose Zone");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();},
				  error:function(){
				  }   
				
				  
		        }); 
					}
					},
					
					handleValueHelpPrimary : function( evt)
					{

						//returnTrains("EC");
						g_AssetSrch = "MOB01PrimarySystemInput";	
				        var sZone = sap.ui.getCore().byId("MOB01ZoneInput").getValue();
						//var assetData =  allAssets();
						//var assetDataArr = assetData.d.results;;
				        if(g_runningInTablet || g_runningOnPhone) 
						{
				    	   readLocalFileOnDevice("AssetList.json", function(funCall)
						
								{
							
							 var assetDataArr = JSON.parse(funCall);
							 
							 var dataArrIni = [];
								for ( var i = 0 ; i < assetDataArr.length ; i ++)
									{
									
									if ( assetDataArr[i].SupFloc == sZone)
										{
										
										var data = {
												"code" : assetDataArr[i].Floc,
												"desc" : assetDataArr[i].FlocDesc
												
										};
										dataArrIni.push(data);
										
										}
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								
								
									//MOB02InputId = evt.getSource().sId;
									MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
									MOB01Dialog.setTitle("Choose Primary System");
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB01Dialog.setModel(codesModel);
									MOB01Dialog.open();
							 
						});
						}
						else
							{
				        $.ajax({
							  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
							  type: "post",
							  dataType: "text",
							  success: function(text){
								  var assetDataArr = JSON.parse(text);
								  var dataArrIni = [];
									for ( var i = 0 ; i < assetDataArr.length ; i ++)
										{
										
										if ( assetDataArr[i].SupFloc == sZone)
											{
											
											var data = {
													"code" : assetDataArr[i].FlocDesc,
													"desc" : assetDataArr[i].FlocDesc
													
											};
											dataArrIni.push(data);
											
											}
										}
									
									var dataArrFinal = {"results" : dataArrIni};
									
									
										//MOB02InputId = evt.getSource().sId;
										MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
										MOB01Dialog.setTitle("Choose Primary System");
										var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
										MOB01Dialog.setModel(codesModel);
										MOB01Dialog.open();
								},
							  error:function(){
							  }   
							
							  
					        });
							}
				        
						
							},
							
							handleValueHelpDepot : function( evt)
							{
								//MOB01DepotInput
								//returnTrains("EC");
								g_AssetSrch = "MOB01DepotInput";
								 
								 if(g_runningInTablet || g_runningOnPhone) 
									{readLocalFileOnDevice("AssetListDepot.json", function(funCall){
										
										 var assetDataArr = JSON.parse(funCall);
										 var dataArrIni = [];
											for ( var i = 0 ; i < assetDataArr.length ; i ++)
												{
												
												
												if ( assetDataArr[i].ObjType == "20000")
													{
													
													var data = {
															"code" : assetDataArr[i].Floc  , //+"-"+assetDataArr[i].FlocDesc,
															"desc" : assetDataArr[i].FlocDesc
															
													};
													dataArrIni.push(data);
													
													}
												}
											
											var dataArrFinal = {"results" : dataArrIni};
											
											
												//MOB02InputId = evt.getSource().sId;
												MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
												MOB01Dialog.setTitle("Choose Depot / Site");
												var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
												MOB01Dialog.setModel(codesModel);
												MOB01Dialog.open();
										 
									});
									}
								 
								 else
									 {

								$.ajax({
									  url: "SaveJSONServlet?operation=Read&fileName=AssetListDepot.json&Append=false",
									  type: "post",
									  dataType: "text",
									  success: function(text){
									      //alert("success");
									      var assetDataArr = JSON.parse(text);
									      var dataArrIni = [];
											for ( var i = 0 ; i < assetDataArr.length ; i ++)
												{
												
												
												if ( assetDataArr[i].ObjType == "20000")
													{
													
													var data = {
															"code" : assetDataArr[i].Floc+"-"+assetDataArr[i].FlocDesc,
															"desc" : assetDataArr[i].FlocDesc
															
													};
													dataArrIni.push(data);
													
													}
												}
											
											var dataArrFinal = {"results" : dataArrIni};
											
											
												//MOB02InputId = evt.getSource().sId;
												MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
												//MOB01Dialog.setTitle(evt.getSource().getName());
												var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
												MOB01Dialog.setModel(codesModel);
												MOB01Dialog.open();
									      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
									      //processTransactionDrop3(objJobToProcess);
									  },
									  error:function(){
									  }   
									}); 
									 }
								
								/*var assetDataArr = assetData.d.results;;
								var dataArrIni = [];
								for ( var i = 0 ; i < assetDataArr.length ; i ++)
									{
									
									if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
										{
										
										var data = {
												"code" : assetDataArr[i].Tplnr,
												"desc" : assetDataArr[i].Pltxt
												
										};
										dataArrIni.push(data);
										
										}
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								
								
									//MOB02InputId = evt.getSource().sId;
									MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
									//MOB01Dialog.setTitle(evt.getSource().getName());
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB01Dialog.setModel(codesModel);
									MOB01Dialog.open();*/
									
								
								/*var depotData =  allDepots();
								var depotDataArr = depotData.d.results;;
								var dataArrIni = [];
								for ( var i = 0 ; i < depotDataArr.length ; i ++)
									{
									
										var data = {
												"code" : depotDataArr[i].depotName,
												//"desc" : assetDataArr[i].Pltxt
												
										};
										dataArrIni.push(data);
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								
								
									//MOB02InputId = evt.getSource().sId;
									MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
									//MOB01Dialog.setTitle(evt.getSource().getName());
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB01Dialog.setModel(codesModel);
									MOB01Dialog.open();*/
									},
	
});