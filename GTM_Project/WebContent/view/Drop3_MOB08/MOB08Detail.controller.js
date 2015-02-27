jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
	},

	handleHelpButtonPress: function () {
	
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB08";
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
	
	//DMS
	handleMob08SelectedImageListpress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Documenttype");
   		var Documentpart = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Documentpart");
   		var Documentversion = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Documentversion");
   		var Originaltype = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Originaltype");
		var Wsapplication = sap.ui.getCore().byId("MOB08DocList").getModel().getProperty(contextPath + "/Wsapplication");
		
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
		if(Wsapplication == "JPG" || Wsapplication == "PNG")
		{
		downloadAndDisplayImage(url12);
		}
		else if(Wsapplication == "PDF"){
		downloadAndDisplayPDF(url12);
		}
			
		}
		
		
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
	handleClassificationValueHelp:function(evt){
		debugger;
		
		g_MOB08ClassificationField =evt.getSource().sId;
		var classification=this.getParent().getCells()[1].getText();
		var finalClassification={results:[]};
		   readLocalFileOnDevice("MasterData.json", function(funCall)
				   
					{
			   var fleet = JSON.parse(funCall);
			   
			   var dataFinalArray= fleet[0].Nav2CharVal;

	     		debugger;
	     		
	    		for(var i=0;i<dataFinalArray.results.length;i++){
	    			if(dataFinalArray.results[i].Charact==classification){
	    				finalClassification.results.push(dataFinalArray.results[i]);
	    				
	    			}

	    		}
	    		if(finalClassification.results.length==0)
		    		sap.ui.getCore().byId(g_MOB08ClassificationField).setValueHelpOnly(false)
	    		MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB08.MOB08CharacteristicsDialog", sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail"));
	    		MOB01Dialog.setTitle("Select Classification");
	    		var codesModel = new sap.ui.model.json.JSONModel(finalClassification);
	    		MOB01Dialog.setModel(codesModel);
	    		MOB01Dialog.open();
	     	
						
					});
		
		
		
	/*	
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
	
     	var readRequestURL = "/EquipClassDefSet?$expand=NavClassChar,NavClassCharVal,NavClassChkTbl";
		
     	oModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
     		debugger;
     		var dataFinalArray= oData.results[0].NavClassCharVal;
    		for(var i=0;i<dataFinalArray.results.length;i++){
    			if(dataFinalArray.results[i].Charact==classification){
    				finalClassification.results.push(dataFinalArray.results[i]);
    				
    			}

    		}
    		
    		MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB08.MOB08CharacteristicsDialog", sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail"));
    		MOB01Dialog.setTitle("Select Classification");
    		var codesModel = new sap.ui.model.json.JSONModel(finalClassification);
    		MOB01Dialog.setModel(codesModel);
    		MOB01Dialog.open();
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
});*/
		
	
		
		
	},
	
	handleDialogConfirm: function(evt){
		
		debugger;
		
		var oSelectedItem = evt.getParameter("selectedItem");
		var selectedClassification =  oSelectedItem.getTitle();
		sap.ui.getCore().byId(g_MOB08ClassificationField).setValue(selectedClassification);
		
	},
	
	
	
	handleClassificationButtonPress: function () {
		sap.ui.getCore().byId("myApp").to("MOB08DetailThree");
		/*sap.ui.getCore().byId("MOB08VOLTAGE").setValue("");
		sap.ui.getCore().byId("MOB08LEN").setValue("");
		sap.ui.getCore().byId("MOB08POS").setValue(""); */
	},

	handleMeasurementButtonPress: function () {
	    	
			g_MOB33FROMMAIN =  false ;
	    	sap.ui.getCore().byId("myApp").to("MOB33Initial");
	    	
	    	sap.ui.getCore().byId("MOB33FleetInput").setValue("");
			sap.ui.getCore().byId("MOB33FleetInput").setEnabled(true);

			sap.ui.getCore().byId("MOB33TrainInput").setValue("");
			sap.ui.getCore().byId("MOB33TrainInput").setEnabled(false);

			sap.ui.getCore().byId("MOB33CarInput").setValue("");
			sap.ui.getCore().byId("MOB33CarInput").setEnabled(false);

			sap.ui.getCore().byId("MOB33ZoneInput").setValue("");
			sap.ui.getCore().byId("MOB33ZoneInput").setEnabled(false);

			sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
			sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(false);
		
	    },

	handleUserStatusButtonPress: function () {
		sap.ui.getCore().byId("myApp").to("MOB08DetailTwo");
	},

	handleSaveButtonPress: function () {
		var equipmentNum= sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").getNumber();
		//DMS 
		var notifNumber= equipmentNum;
		var padNotiNo = notifNumber.padBeginZero(notifNumber, 12);
		//Get Length of Added image in list
		var addedImageList = sap.ui.getCore().byId("Mob08AddedImageList").getModel();
		if( addedImageList != undefined){
			addedImageList = addedImageList.getData();
			if(addedImageList != null){
				addedImageList = addedImageList.length;
			}
		}
		var NotificationNo = padNotiNo;
		var MobKeyValue = "EQUI";
		for( var i = 0 ; i< addedImageList; i++){
			var addedImageSourcePath1 = sap.ui.getCore().byId("Mob08AddedImageList").getModel().getData();
			var addedImageSourcePath = addedImageSourcePath1[i].imageData;
			var CurrentMob  = addedImageSourcePath1[i].imageName;
			var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
		}
		
		
	//	var equipmentNum="800001";
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
     	requestData={};
		 var equipDetailData;
     	var readRequestURL = "AssetSet?$filter=Equnr eq '"+equipmentNum+"'&$expand=NavStProfile,NavGenData,NavSpecData,NavStData,NavMeasPt,NavCval&$format=json";
     	oModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
     		
    		
    		 equipDetailData= oData.results[0];
    
     	},
              function(oError){
     		
     	});	
     	requestData.Equnr=equipmentNum;
     	requestData.NavGenData=[{}];
     	//requestData.NavGenData.results=;
     	
     	//Setting data for Manufacture Detail

     	requestData.NavGenData[0].Manfacture=sap.ui.getCore().byId("MOB08MF").getValue();
     	requestData.NavGenData[0].Manparno=sap.ui.getCore().byId("MOB08MFPART").getValue();
     	requestData.NavGenData[0].Manmodel=sap.ui.getCore().byId("MOB08MFMODEL").getValue();
     	requestData.NavGenData[0].Manserno=sap.ui.getCore().byId("MOB08MFSERIAL").getValue();

     	//setting data for status data
     	
     	
     	var verticalLayout= sap.ui.getCore().byId("MOB08FormTwo").getContent()[1];
     	var statusProfiles= equipDetailData.NavStProfile.results;
     	var content= verticalLayout.getContent();
     	var arr= [];
     	for(i=0;i<content.length;i++){
				var text= content[i].getText();
				for(var j=0;j<statusProfiles.length;i++){

				if(text==statusProfiles[i].Txt30){
					var obj={}
					obj.Stat=statusProfiles[i].Estat;
					obj.Objnr=equipDetailData.NavGenData.results[0].Objnr;
					obj.Mandt=statusProfiles[i].Mandt;

					if(content[i].getSelected()==true){
					obj.Inact="";
					}
					else{
						obj.Inact="X";
					}
					arr.push(obj);
					break;
				}

				}

			
			


     	}
     	
     	requestData.NavStData=arr;
     	//setting data for classification
     	var characteristicsData= equipDetailData.NavCval.results;
     	var charateristicsTable= sap.ui.getCore().byId("MOB08CharactTable");
     	var data= charateristicsTable.getItems();
     	
    	if(characteristicsData.length>0){
			for(i=0;i<characteristicsData.length;i++){
				var charDataType= characteristicsData[i].CharDataType;
				
				if(charDataType=="CHAR"){
					characteristicsData[i].ValueChar=data[i].getCells()[2].getValue();
				}
				else if(charDataType=="DATE"){
					
				var finalDate="00000000";
				var dateValue= data[i].getCells()[2].getDateValue();
				
				if(dateValue){
					var a= dateValue.getFullYear();
					var b= dateValue.getMonth()+1;
					var c = dateValue.getDate();
					
					if(b<10){
						  b= "0"+b;
						  }
					  if(c<10){
						  c= "0"+c;
					  }
					  finalDate= a+b+c;   ///in the format YYYYmmdd
					
					
				}
			
				characteristicsData[i].ValueFrom=finalDate;}
				else if(charDataType=="CURR"){
					characteristicsData[i].ValueFrom=data[i].getCells()[2].getValue();
				}
				
			}
			
		}

    	//requestData.NavCval={};
    	requestData.NavCval=characteristicsData;
    //	PostChangeAsset(requestData);
    	
    	
    	
    	var items= [];
    	items.push(requestData.NavCval);
    	items.push(requestData.NavGenData[0]);
    	items.push(requestData.NavStData);
    
    	var dataToPost= {"Header":requestData.Equnr,"Items": items };
    	sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail").createChangeAssetData(dataToPost);
		
	/*	
		if ( undefined == 	window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"ASTCHG"))
		{
		window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"ASTCHG", 
				sap.ui.getCore().byId("MOB08MF").getValue()+"_"+
				sap.ui.getCore().byId("MOB08MFPART").getValue()+"_"+
				sap.ui.getCore().byId("MOB08MFMODEL").getValue()+"_"+
				sap.ui.getCore().byId("MOB08MFSERIAL").getValue()+"_"+
				sap.ui.getCore().byId("MOB08VOLTAGE").getValue()+"_"+
				sap.ui.getCore().byId("MOB08LEN").getValue()+"_"+
				sap.ui.getCore().byId("MOB08POS").getValue());
				//sap.ui.getCore().byId("reasonCodeInput").getValue()+"_"+);
		}
	
	else
		{
	window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"ASTCHG");
	window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"ASTCHG", 
			sap.ui.getCore().byId("MOB08MF").getValue()+"_"+
			sap.ui.getCore().byId("MOB08MFPART").getValue()+"_"+
			sap.ui.getCore().byId("MOB08MFMODEL").getValue()+"_"+
			sap.ui.getCore().byId("MOB08MFSERIAL").getValue()+"_"+
			sap.ui.getCore().byId("MOB08VOLTAGE").getValue()+"_"+
			sap.ui.getCore().byId("MOB08LEN").getValue()+"_"+
			sap.ui.getCore().byId("MOB08POS").getValue()); 
		}*/
		
		sap.ui.getCore().byId("myApp").back();
		
		/*window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"ASTCHG"+"_IMG", 
				sap.ui.getCore().byId("image1MOB08D").getSrc()+"III"+
	  			sap.ui.getCore().byId("image2MOB08D").getSrc()+"III"+
	  			sap.ui.getCore().byId("image3MOB08D").getSrc()); */
			
	
//		sap.m.MessageToast.show(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB08SaveMessage"));
	},

	createChangeAssetData: function(equipDetailData){
        var notiNumber =  "";
        var currDate = new Date();
                  currDate.toDateString();
                    var timeMilli = currDate.getTime();
        var trQ = window.localStorage.getItem('TRQ');
            if (trQ === undefined || trQ === null || trQ.length === 0)
            {
                  
                  
                  str1 = currDate.toDateString();
                  str2 =  " ";
                  str3 = currDate.toLocaleTimeString();
                  var res1 = str1.concat(str2);
                  var res2 = res1.concat(str3);
                   
                   var data =  { "Tran": "CHNGASST",
                                      "Key" : timeMilli ,
                                     "Time" : timeMilli,
                                     "Status" : "INIT" ,
                                     "Date" : res2};
                   
                   
                           notiNum[0] = data; 
                  var notiModelString =      JSON.stringify(notiNum);
                   window.localStorage.setItem("TRQ", notiModelString);//store the notification number 
                  
                  notiNumber="NOTI "+notiNumber;
                   //NOW move data to actual object
                         var myJSONObject = {"myData": JSON.stringify(equipDetailData)};
                         
                         if(g_runningInTablet || g_runningOnPhone) {
                               //saveOnMobileMOB01(myJSONObject , timeMilli);
                               saveOnMobileMOB01(JSON.stringify(equipDetailData) , getUserName()+timeMilli);  
                         }else {
                               //saveOnDesktopMD(myJSONObject);
                         
                         
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
                         
            }
            else{
                   
                  notiNumRcvd =  JSON.parse(trQ);
                  
                  str1 = currDate.toDateString();
                  str2 =  " ";
                  str3 = currDate.toLocaleTimeString();
                  var res1 = str1.concat(str2);
                  var res2 = res1.concat(str3);
                   
                   var data =  { "Tran": "CHNGASST",
                                      "Key" : timeMilli ,
                                     "Time" : timeMilli,
                                     "Status" : "INIT" ,
                                     "Date" : res2};
                  
                   
                   
                  notiNumRcvd.push(data);//pushing new noti number 
                  
                  //onotiNumRcvd.push(timeMilli);//pushing new noti number 
                   
                  var notiNumRcvdString =    JSON.stringify(notiNumRcvd);
                   window.localStorage.setItem("TRQ", notiNumRcvdString);
                   
                  str1 = currDate.toDateString();
                 str2 =  " ";
                 str3 = currDate.toLocaleTimeString();
                 var res1 = str1.concat(str2);
                 var res2 = res1.concat(str3);
                 notiNumber="NOTI "+notiNumber;
                 
                         //var stringifiedNoti = JSON.stringify(notiData);
                         
                                                    
                         var myJSONObject = {"myData": JSON.stringify(equipDetailData)};
                         //dataForFile =  "Ekdum jhakaas hai re ";
                         if(g_runningInTablet || g_runningOnPhone) {
                              saveOnMobileMOB01(JSON.stringify(equipDetailData) , getUserName()+timeMilli);  
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
                            
           }
            
                       
             

    },
    
    

	
	handleActionButtonPress: function (evt) {
		if (!this.actionButtonActionSheet) {
			this.actionButtonActionSheet = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB08.MOB08DetailActionSheet", sap.ui.getCore().byId("MOB08Detail").getController());
			sap.ui.getCore().byId("MOB08Detail").addDependent(this.actionButtonActionSheet);
		}
		this.actionButtonActionSheet.openBy(evt.getSource());
	}

});


