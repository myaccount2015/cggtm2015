sap.ui.controller("com.cg.gtm.view.MOB20InvDoc", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB20InvDoc
*/
	onInit: function() {

		
		
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB20InvDoc
*/
	onBeforeRendering: function() {

		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB20InvDoc
*/
	onAfterRendering: function() {

	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB20InvDoc
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB20";
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
	
	Mob20MasterPageSel : function(oEvent)
	{
	//get info from list pass to service then get data after response and put it into two screen
	//hide conform count
    //hide third column
      var oJSONModelMob20TabelList;				
      var demoswitch = sap.ui.getCore().byId("demoswitch");
	  if (demoswitch.getState() == true)
		{
		Mob20SecondScreenSample();
		var Mob20Tit = 	oEvent.mParameters.listItem.mProperties.title;
		var Mob20Loc = 	oEvent.mParameters.listItem.mProperties.description;
		sap.ui.getCore().byId("Mob20-frstScreen").setTitle("Inv Doc No: "+Mob20Tit+ " " +Mob20Loc);
		if ( g_runningOnPhone == true)
		{
		sap.ui.getCore().byId("myApp").to("idMob20MatDesPage");
		}
		else
		{
		sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-TwoScreen");
		}
		}
	else {	
		
	//Prepare local storage ...
		   var listItem = oEvent.getParameter('listItem');	
		   var contextPath = listItem.oBindingContexts.undefined.sPath;	
		   var invDocNumber =  this.getModel().getProperty(contextPath + "/Physinventory");
		   var InvDocDataIni = window.localStorage.getItem(invDocNumber);
		   var InvDocDataParsedIni =  JSON.parse(InvDocDataIni);
		   var errrorreasonIni = "";
		   if ( null != InvDocDataParsedIni &&  InvDocDataParsedIni != undefined)
		   {
			errrorreasonIni = InvDocDataParsedIni.errreason;
		   }
           var invDocData = {
                		   
                		 "Physinventory" :   this.getModel().getProperty(contextPath + "/Physinventory"),
              			 "StgeLoc" :  this.getModel().getProperty(contextPath + "/StgeLoc"),
              			 "Slocdesc" :  this.getModel().getProperty(contextPath + "/Slocdesc"),
              			 "Countitems" : this.getModel().getProperty(contextPath + "/Countitems"), 
              			 "Fiscalyear" :  this.getModel().getProperty(contextPath + "/Fiscalyear"),
              			 "icon" :  this.getModel().getProperty(contextPath + "/icon"),
              			 "errreason" : errrorreasonIni
                              };
            var stringifiedInv = JSON.stringify(invDocData);
            window.localStorage.setItem( this.getModel().getProperty(contextPath + "/Physinventory") , stringifiedInv);
	               
	//////////////////////////////////////////////////////////////////////////////////////////	
	        if ( g_runningOnPhone == false)  	{
                 	Mob20HideThirdScreen();
                }
    sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue("");
	globalValMOB21ConfrmCount = 0; //clear values
	var Mob20Tit = 	oEvent.mParameters.listItem.mProperties.title;//global variable use fr service
	var Mob20Loc = 	oEvent.mParameters.listItem.mProperties.description;
	sap.ui.getCore().byId("Mob20-frstScreen").setTitle("Inv Doc No:" +Mob20Tit+ " " +Mob20Loc);
    // Pass fiscal year and Mob20Tit to second service
	var listItem = oEvent.getParameter('listItem');	
	var contextPath = listItem.oBindingContexts.undefined.sPath;	
    var fiscalYearMob20 = this.getModel().getProperty(contextPath + "/Fiscalyear");
	
    
    //Mob20-List Table 
    openSplashScreen();
	setTimeout(function(){
	closeSplashScreen();//splash screen closed	
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB20:: Service: InventorySet Start" ;
    var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
    if(serviceURL == "Fail")
	 {
	 return false;
	 }
	var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	var readRequestURL =  "/InventorySet?$filter=Physinventory eq '"+Mob20Tit+"' and Fiscalyear eq '"+fiscalYearMob20+"'&$format=json";
	Mob20DataModel.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) { 
		var result = oResponse.body; //Getting JSON response body
		var jsonObj = JSON.parse(result); // Parsing the JSON Object
		var result = jsonObj.d; // Taking the result inside namespace d
	    var clearData = result.results;
            oJSONModelMob20TabelList = new sap.ui.model.json.JSONModel(result, "results");
	for ( var clear = 0 ; clear <clearData.length ; clear++)
		{
		//remove local storage for confrm count function
		var getStorage = window.localStorage.getItem(clearData[clear].Physinventory+"_"+ 
				clearData[clear].Material+clearData[clear].Batch+clearData[clear].StocktypeDesc
			
				
				
				+ "_ServiceArray"); 
		if (getStorage == null )
			{
			}else
			{
			window.localStorage.removeItem(clearData[clear].Physinventory+"_"+ 
					clearData[clear].Material+clearData[clear].Batch+clearData[clear].StocktypeDesc+ "_ServiceArray"); 
			}}
    var tabelList = sap.ui.getCore().byId("idMob20-MatDesTable");
	tabelList.setModel(oJSONModelMob20TabelList);
	
	

	if( g_isDebug == true)
	{
	//Service End Time
	var logInfo1 = getTimeStamp() +"MOB20:: Service: InventorySet Finish" ;
	//Log file Service Start and End Time
	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	logFileUpdate(g_ServiceStartEndTime);
	}
	
	
						},  function(oError){  
							errorRes = true;
								try{
									var data = JSON.parse(oError.response.body);
									for(var event in data){
									var dataCopy = data[event];	
										try{
										var messageFromBackend = dataCopy.innererror.errordetails[0].message;
										sap.m.MessageBox.show(
										messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
										catch(e)
										{
										sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,"Error");break;
										}}}
								        catch(e){
								        sap.m.MessageBox.show(
			                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,"Error");
								        
								        
								        if( g_isDebug == true)
								    	{
								    	//Service End Time
								    	var logInfo1 = getTimeStamp() +"MOB20:: Service: InventorySet Failed no network" ;
								    	//Log file Service Start and End Time
								    	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								    	logFileUpdate(g_ServiceStartEndTime);
								    	}
								        
								        
								        }
		      });	
	 },1000);//constant delay
	 //hide scan button
	 sap.ui.getCore().byId("Mob20-thrdScr-btnScan").setVisible(false);
	 sap.ui.getCore().byId("Mob20-btnlogSer").setVisible(false);
	  var InvDocData = window.localStorage.getItem(invDocNumber);
	  var InvDocDataParsed =  JSON.parse(InvDocData);
	  var errrorreason = "";
	  if ( null != InvDocDataParsed &&  InvDocDataParsed != undefined)
		  {
		   errrorreason = InvDocDataParsed.errreason;
		  }
	  
	
     var Mob20icon = 	oEvent.mParameters.listItem.mProperties.icon;
     if( (errrorreason != null) && ( Mob20icon == "img/error.png") )
    	 {
    	 sap.ui.getCore().byId("Mob20-errBox").setVisible(true);
    	 sap.ui.getCore().byId("Mob20-errBox").setText("Error Message: "+errrorreason);
    	 }
     else
    	 {sap.ui.getCore().byId("Mob20-errBox").setVisible(false);

    	 }
	 if ( g_runningOnPhone == true)
		 {
		  g_MobileNavigationId = "Mob20-frstScreen";
		 sap.ui.getCore().byId("myApp").to("idMob20MatDesPage");
		 }
	else
		 {
		//hide Confrm count
		 sap.ui.getCore().byId("Mob20-btnConfrmCnt").setVisible(false);
		//get id of Mob20 two screen
		 sap.ui.getCore().byId("idMOB20SplitApp").to("idMOB20-TwoScreen");
		 }
	 }	
	 }
});

function Mob20InventoryDocService()
{
	 
	openSplashScreen();
	var oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel();
	//setTimeout(function(){
   // closeSplashScreen();//splash screen closed	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB20:: Service: InventroyList Start" ;
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/InventroyList");
    if(serviceURL == "Fail")
			 {
			 return false;
			 }
	var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	var aData = jQuery.ajax({   
	     url : serviceURL,
	     type: "GET",
         contentType : "application/json",
         dataType : 'json',
         success : function(data, textStatus, jqXHR) {
        	     	 	
            invDocJSONArray  =  data.d.results; 
            var invDataInialArray = [];
            var invDataFinalArray = [];
           
             for (var  index = 0 ; index < invDocJSONArray.length ; index ++)
             	{
             	
             	 var forIcon = window.localStorage.getItem(invDocJSONArray[index].Physinventory);
             	 var imageIcon = "";
             	 if (null != forIcon  && undefined != forIcon)
             		 {
                  var parsedForIcon = JSON.parse(forIcon);
                  imageIcon = parsedForIcon.icon;
             		 }
             	 var invData = {
             			 "Physinventory" : invDocJSONArray[index].Physinventory,
             			 "StgeLoc" : invDocJSONArray[index].StgeLoc,
             			 "Slocdesc" : invDocJSONArray[index].Slocdesc,
             			 "Countitems" : invDocJSONArray[index].Countitems,
             			 "Fiscalyear" : invDocJSONArray[index].Fiscalyear,
             			 "icon" : imageIcon
             			 
             	 }
             	 
             	 invDataInialArray.push(invData);
             	}
             
             invDataFinalArray =  {"results" : invDataInialArray};
     	oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel(invDataFinalArray);
     	var listMat = sap.ui.getCore().byId("Mob20-listMatNo");
     	listMat.setModel(oJSONModelMob20MasterList);
     						
     	closeSplashScreen();	
     	
     	
     	
     	
     	if( g_isDebug == true)
     	{
     	//Service End Time
     	var logInfo1 = getTimeStamp() +"MOB20:: Service: InventroyList Finish" ;
     	//Log file Service Start and End Time
     	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
     	logFileUpdate(g_ServiceStartEndTime);
     	}
         },
	 error: function(XMLHttpRequest, textStatus, errorThrown) { 
		 errorRes = true;
			try{
				var data = JSON.parse(XMLHttpRequest.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
					catch(e)
					{
					sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");break;
					}}}catch(e)
					{sap.m.MessageBox.show(
                 "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					if( g_isDebug == true)
			     	{
			     	//Service End Time
			     	var logInfo1 = getTimeStamp() +"MOB20:: Service: InventroyList Failed no network" ;
			     	//Log file Service Start and End Time
			     	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			     	logFileUpdate(g_ServiceStartEndTime);
			     	}
					
					}
    	 closeSplashScreen();
	 }
	
	});
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	
/*	var readRequestURL = "/InventroyList?&$format=json";
	Mob20DataModel.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) { 
		var result = oResponse.body; //Getting JSON response body
		var jsonObj = JSON.parse(result); // Parsing the JSON Object
		var result = jsonObj.d; // Taking the result inside namespace d
	 	
       invDocJSONArray  =  result.results;//GlobalVariable
       var invDataInialArray = [];
       var invDataFinalArray = [];
      
        for (var  index = 0 ; index < invDocJSONArray.length ; index ++)
        	{
        	
        	 var forIcon = window.localStorage.getItem(invDocJSONArray[index].Physinventory);
        	 var imageIcon = "";
        	 if (null != forIcon  && undefined != forIcon)
        		 {
             var parsedForIcon = JSON.parse(forIcon);
             imageIcon = parsedForIcon.icon;
        		 }
        	 var invData = {
        			 "Physinventory" : invDocJSONArray[index].Physinventory,
        			 "StgeLoc" : invDocJSONArray[index].StgeLoc,
        			 "Slocdesc" : invDocJSONArray[index].Slocdesc,
        			 "Countitems" : invDocJSONArray[index].Countitems,
        			 "Fiscalyear" : invDocJSONArray[index].Fiscalyear,
        			 "icon" : imageIcon
        			 
        	 }
        	 
        	 invDataInialArray.push(invData);
        	}
        
        invDataFinalArray =  {"results" : invDataInialArray};
	oJSONModelMob20MasterList = new sap.ui.model.json.JSONModel(invDataFinalArray);
	var listMat = sap.ui.getCore().byId("Mob20-listMatNo");
	listMat.setModel(oJSONModelMob20MasterList);
						
						},  function(oError){  
							errorRes = true;
								try{
									var data = JSON.parse(oError.response.body);
									for(var event in data){
									var dataCopy = data[event];	
										try{
										var messageFromBackend = dataCopy.innererror.errordetails[0].message;
										sap.m.MessageBox.show(
										messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
										catch(e)
										{
										sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,"Error");break;
										}}}catch(e)
										{sap.m.MessageBox.show(
			                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
										sap.m.MessageBox.Icon.ERROR,"Error");}
		      });	*/
	 //},1000);//constant delay
}



