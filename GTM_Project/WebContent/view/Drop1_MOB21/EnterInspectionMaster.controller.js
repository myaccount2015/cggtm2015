sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.EnterInspectionMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.EnterInspectionMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.EnterInspectionMaster
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.EnterInspectionMaster
*/
	onAfterRendering: function() {
		/*var list = sap.ui.getCore().byId("oListItemPlant");
 		list.setDescription("North Pole Depot");*/
 		
		/*var listItem = sap.ui.getCore().byId("oListItemPlant-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(false);*/
		
		
		var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(false);
		
		var listItem = sap.ui.getCore().byId("oListItemWC-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(false);
		
		var listItem = sap.ui.getCore().byId("oListItemVen-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(false);
		
		var listItem = sap.ui.getCore().byId("oListItemType-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItem.setVisible(false);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.EnterInspectionMaster
*/
//	onExit: function() {
//
//	},
	
	
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB21";
	var helpDocNumber = HelpDocument(MobileScreenNumber);
	url1 = url1 + "('"+helpDocNumber+"')/$value";
	if(g_runningOnPhone == false && g_runningInTablet == false) {
	window.open(url1, '_blank'); 
	window.focus();
	} else {
	//avigator.app.loadUrl(url1, { openExternal:true } );
		downloadAndDisplayPDF(url1);
	}
	},
	
	deleteCriteria: function(oEvent) {
		var ltSelected = oEvent.mParameters.listItem.sId;
		var listItem = sap.ui.getCore().byId(ltSelected);
		//alert(ltSelected);
		var listItemPic = sap.ui.getCore().byId(ltSelected + "-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		listItemPic.setVisible(false);
		
		listItem.setDescription("");
		listItem.setIcon("");
		//listItem.setTitle("");
		if (ltSelected == "oListItemPlant")
			{
		 MOB15plantCode = "";
         MOB15plantDesc = "";
         var inputPlantMat = sap.ui.getCore().byId("oListItemMat");   
   	    inputPlantMat.setDescription(MOB15plantDesc);
  	    getSelectedPlantId = MOB15plantCode ;
  	    selectedPlantID = MOB15plantCode;
  	   // inputPlantMat.setEnabled(true);
			}
		if (ltSelected == "oListItemMat")
		{
  	    matSearchDoneMOB21 = 0;
		}
		if (ltSelected == "oListItemVen")
		{
			selectedVendor = "";
		}
		if (ltSelected == "oListItemWC")
		{
			wcDesc = "";
		}
		if (ltSelected == "oListItemType")
		{
			selectedType = "";
		}
		
		
	},
	
	loadInsTree : function()
	{	
		
		if( g_runningOnPhone == false)
			{
			hideMOB21Dtl3rdColumn();
			}
		
		
		
		//Plant Criteria
		var plantList = sap.ui.getCore().byId("oListItemPlant");
		var plantDesc = plantList.getTitle();
		
		
		//Material Criteria
		var matList = sap.ui.getCore().byId("oListItemMat");
		var matDesc = matList.getDescription();
	
		
		//Work Center Criteria
		var wcList = sap.ui.getCore().byId("oListItemWC");
		var wcDesc = wcList.getDescription();
		
		//Vendor Criteria
		var venList = sap.ui.getCore().byId("oListItemVen");
		var venDesc = venList.getDescription();
		
		//Type Criteria
		var typeList = sap.ui.getCore().byId("oListItemType");
		var typeDesc = typeList.getDescription();
		
		sap.ui.getCore().byId("btnSeeCharMOB21").setVisible(false);
		
		
		var demoswitch = sap.ui.getCore().byId("demoswitch");
		
		if (demoswitch.getState())
		{
			
			treeNotiTaskList = MOB21Mock();
			
		}
		
		
		else {
		
		/*
		 * Callig Service - Start
		 */	
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB21:: Service: InsplotColl Start" ;

		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
     	var notiTaskLstoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
     	
     	//Default Plant code
    	var selectedPlantID = "";
      	selectedPlantID = window.localStorage.getItem("defPlantCode");
      	
     	var readRequestURL = "/InsplotColl?$filter=Plant eq '"+selectedPlantID+"' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + 
		 "' and Ven_Act_No eq '" + selectedVendor + "'and Inspection_Lot_Origin eq '" + selectedType +"'&$format=json";
		
		notiTaskLstoDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
					var result = oResponse.body; //Getting JSON response body
					
					var jsonObj = JSON.parse(result); // Parsing the JSON Object
					
					var result = jsonObj.d; // Taking the result inside namespace d
					
					treeNotiTaskList = result.results;
					
					MOb21SortList= result.results;		/////created a new global variable to use as the Data for changing the tree
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Finish" ;
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
				},  function(oError){  
					
					  setTimeout(function(){
						    closeSplashScreen();//splash screen closed	
						errorRes = true;
					//	alert(oError.message);
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
								var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Failed no network" ;
								//Log file Service Start and End Time
								var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								logFileUpdate(g_ServiceStartEndTime);
								}
								
								}
				 },1000);//constant delay
			
      });
			 
   	/*
	 * Calling Service - End
	 */	
   
	}
   
   treeNotiTaskList = formatInspectionLotResponse(treeNotiTaskList); //Getting results, passing only Array
	var oMOB21Data = {"MOB21Collection":treeNotiTaskList};
	var oJason1 = new sap.ui.model.json.JSONModel(oMOB21Data);
	oJason1.setSizeLimit(100000000000)
	var oMOb21List = sap.ui.getCore().byId("mob21list"); 
	oMOb21List.setModel(oJason1);
   
   
   var runningInTablet = g_runningInTablet;
 //  var runningInDsktop = jQuery.device.is.desktop;
	
	if(runningInTablet || (g_runningInTablet == false && g_runningOnPhone == false)) {
	
		setTimeout(function(){
			closeSplashScreen();
			
			var app = sap.ui.getCore().byId("splitAppInsCreate1");  
			//app.addDetailPage(detailpage3scr);
			 app.toDetail("idMOB21Det3scr");
			 hideMOB21Dtl3rdColumn();
			//////////////workng upto here//////////////
		    },2000);
		
		
		 
	}else {
		
		
		setTimeout(function(){
			closeSplashScreen();
					
				
				var app = sap.ui.getCore().byId("myApp");  
				 app.to("idMOB21Det");
			},2000);
		
	}
   
   
   	 
   
		
  	},
	
	matSearch : function()
	{	
        backNavMat = "Mob15CreateNoti";	
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
        
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	},
	
	loadvendorMOB21 : function()
	{
var demoswitch = sap.ui.getCore().byId("demoswitch");
sap.ui.getCore().byId("venlist").removeSelections();
		if (demoswitch.getState())
		{
			
			mob21VendorMock() ;
		}
		else{
			
		
		if ( matSearchDoneMOB21 == 0)//hit material search 
			{
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB21:: Service: materialcollections Start" ;
			

	         var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
	         if(serviceURL == "Fail")
			 {
			 return false;
			 }
			
			/*
			 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
			 * Hardcoding user and password
			 * TODO: Need to pass service user and password
			 */
	         
		    var materialDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);	    	   
		   var plant = null; // "GWNP"; //TODO - Plant name has to be integrated
		   var selectedPlantID = "";
	      	selectedPlantID = window.localStorage.getItem("defPlantCode");
		   if(typeof(selectedPlantID) != 'undefined' && selectedPlantID != null) {
			   plant = selectedPlantID;
		   } 
		   else{
			   
		   }
		    
		var readRequestURL = "/materialcollections?$filter=Plant eq '" + plant + "'";
		//var readRequestURL = "/materialcollections?$filter=Plant eq 'GWNP'";

		
		materialDataModel.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) { 
				debugger;
				//get res
				  sendResultToMaterialSearchDetPageButton = oData.results;//global	             			
						/*	var result = oResponse.body; //Getting JSON response body
							var jsonObj = JSON.parse(result); // Parsing the JSON Object
							var result = jsonObj.d; // Taking the result inside namespace d
							var matArr = result.results;
							var i;
							var MOB21VendorArr = [] ;
							for ( i = 0 ; i < matArr.length ; i++)
								{
									  var vendorData = {
												  "venid" : matArr[i].Vendor ,
												  "vendes" : matArr[i].VendorName
										  }
										  
										  MOB21VendorArr.push(vendorData);
										
								}							 						 
							 */
				  
				//get res
				  sendResultToMaterialSearchDetPageButton = oData.results;//global	             			
							
							var matArr = oData.results;
							matArr.sort(function (a, b) {
							    if (a.Vendor < b.Vendor) {
							        return -1;
							    }
							    else if (a.Vendor > b.Vendor) {
							        return 1;
							    }
							    return 0;
							});
							
							    var MOB21VendorArr = [];
							    for (var a=0; a < matArr.length; a++) {
							    	if(matArr[a].Vendor){
							    	if(MOB21VendorArr.length==0){
							    		MOB21VendorArr.push({
											  "venid" : matArr[a].Vendor ,
											  "vendes" : matArr[a].VendorName
									  });	
							    		
							    	}
							    	else{
							        if (MOB21VendorArr[MOB21VendorArr.length-1].venid != matArr[a].Vendor) {
							        	MOB21VendorArr.push({
											  "venid" : matArr[a].Vendor ,
											  "vendes" : matArr[a].VendorName
									  });
							        }
							    	}
							    }
							    }
							   
/*							var i;
							var MOB21VendorArr = [] ;
							for ( i = 0 ; i < arrayOut.length ; i++)
								{
									 if(arrayOut[i].Vendor){
									  var vendorData = {
												  "venid" : arrayOut[i].Vendor ,
												  "vendes" : arrayOut[i].VendorName
										  }
										  
										  MOB21VendorArr.push(vendorData);
								}	
								}	*/
							
							
							 /////above code added to fix SIT issue 726
							 var MOB21VendorDataFinal = [];
							 MOB21VendorDataFinal = {"itemsVendor" : MOB21VendorArr};
								 var oModelJsonVendorList = new sap.ui.model.json.JSONModel();  
								 oModelJsonVendorList.setData(MOB21VendorDataFinal); 
								 sap.ui.getCore().byId("venlist").setModel(oModelJsonVendorList); 	
								
								 
								 if( g_isDebug == true)
								 {
								 //Service End Time
								 var logInfo1 =getTimeStamp() +"MOB21:: Service: materialcollections Finish" ;
								 //Log file Service Start and End Time
								 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								 logFileUpdate(g_ServiceStartEndTime);
								 } 
								 
							 		
						},  function(oError){  
								errorRes = true;
								/*sap.m.MessageBox.show(oError.message,
										sap.m.MessageBox.Icon.ERROR,
										"Error");*/
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
										 var logInfo1 =getTimeStamp() +"MOB21:: Service: materialcollections Failed no network" ;
										 //Log file Service Start and End Time
										 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										 logFileUpdate(g_ServiceStartEndTime);
										 } 
										 
										 
										}
		      });
			
			}
		}
		
	},
	
	loadTypeMOB21 : function(){
             var demo = sap.ui.getCore().byId("demoswitch");  
             sap.ui.getCore().byId("listTypesMOb21").removeSelections();
		
		//alert(demo.getState());
		
		if (demo.getState() == true)
			
			{
			//alert(demo.getState());
			TypesMob21();
			
			}
		
		else{
			
			//var model = new sap.ui.model.json.JSONModel();
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB21:: Service: InspLotOriginList Start" ;
			
			
		var serviceURL =getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		//var serviceURL= "http://hs1gd1comb.rm.hitachi-eu.com:8000/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/";
		//var oDataEnterInspection = new sap.ui.model.odata.ODataModel(serviceURL, true, "jprabhu", "cap@123", null, true, true, false);
		
	    var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
		
	    
	 
	//var readRequestURL = "/DefectLocTypeList";

	var readRequestURL = "/InspLotOriginList";
	
		//alert("Before Service Call");
		loginoDataModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
			           //alert("Success");
						var result = oData.results;
					//alert(result.length);
						if(result.length > 0){
							model.setData({modelData: result});
							
							/*var listPlantsMOb21 = sap.ui.getCore().byId("listTypesMOb21");
							listPlantsMOb21.removeSelections();
							listPlantsMOb21.setModel(model);*/
	                     	//alert(result[0].InspLotOriginId);
	                      
						}
						
		
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB21:: Service: InspLotOriginList Finish" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
		
		
		},  function(oError){  
	        // alert(oError.message);
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
									var logInfo1 = getTimeStamp() +"MOB21:: Service: InspLotOriginList Failed no network" ;
									//Log file Service Start and End Time
									var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}
									
									
									}
	      });
	}},
	loadPlantMOB21 : function()
	{
		

		var demo = sap.ui.getCore().byId("demoswitch");  
	
		
		//alert(demo.getState());
		
		if (demo.getState() == true)
			
			{
			var oMOB21CollectionPlant = {"ModelPlant":
				[{"plantId":"0001" ,"plantName":"Ashford"},
				 {"plantId":"0002","plantName":"Bounds Green - London"},
				 {"plantId":"0003","plantName":"Central Warehouse"},
				 {"plantId":"0004","plantName":"Clay Hills-Aberdeen"},
				 {"plantId":"0005","plantName":"Craigentinny-Edingburgh"},
				 {"plantId":"0006","plantName":"Doncaster"},
				 {"plantId":"0007","plantName":"Ferme Park-London"},
				 {"plantId":"0008","plantName":"Heaton-Newcastle"},
				 {"plantId":"0009","plantName":"Holborn"},
				 {"plantId":"0010","plantName":"Inverness"},
				 {"plantId":"0011","plantName":"Neville Hill-Leeds"},
				 {"plantId":"0012","plantName":"Newton Aycliffe"},
				 {"plantId":"0013","plantName":"North Pole"},
				 {"plantId":"0014","plantName":"Polmadie-Glasgow"},
				 {"plantId":"0015","plantName":"Stoke Gifford"},
				 {"plantId":"0016","plantName":"Swansea"}]};

			
			var plantMOB21Model = new sap.ui.model.json.JSONModel();
			plantMOB21Model.setData(oMOB21CollectionPlant);
			
			var listPlantsMOb21 = sap.ui.getCore().byId("listPlantsMOb21");
			listPlantsMOb21.removeSelections();
			listPlantsMOb21.setModel(plantMOB21Model);
			
			}
		
		else {
			
		
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB21:: Service: PlantList Start" ;
			
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV");
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		/*
		 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
		 */
     	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
     	
     	/*
     	 * Replace with below req URL once the service is ready.
     	 */
     	//var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "' and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq '" + typeDesc + "'&$format=json";
     	
		var readRequestURL = "/PlantList?$format=json";
		
		defectDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
			  var result = oData.results;
		
              if(result.length > 0){
  				var result = oResponse.body; //Getting JSON response body
				
				var jsonObj = JSON.parse(result); // Parsing the JSON Object
				
				var result = jsonObj.d; // Taking the result inside namespace d
				
				plantSear = result.results;
				plantSear = plantSearchHelpMOB21(plantSear);
				
				
            	
               }
			
              if( g_isDebug == true)
              {
              //Service End Time
              var logInfo1 = getTimeStamp() +"MOB21:: Service: PlantList Finish" ;
              //Log file Service Start and End Time
              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
              logFileUpdate(g_ServiceStartEndTime);
              }
					
				},  function(oError){  
						errorRes = true;
						//alert(oError.message);
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
					              var logInfo1 = getTimeStamp() +"MOB21:: Service: PlantList Failed no network" ;
					              //Log file Service Start and End Time
					              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					              logFileUpdate(g_ServiceStartEndTime);
					              }
								
								
								}
					
      });
		
		
		}	
		
		
	
		
	}
	
	
});

function formatInspectionLotResponse(aTaskList) {
	

	var aTaskListLength = aTaskList.length;

	var aNotiList = [];
	var aNotiListMas = [];


	for(cnt=0; cnt<aTaskListLength; cnt++) {

		var Material = aTaskList[cnt].Material;
		var Material_Description=aTaskList[cnt].Material_Description;
		var Insplot_No = aTaskList[cnt].Insplot_No;
		var Inspection_Lot_Type_Name = aTaskList[cnt].Inspection_Lot_Type_Name;
		var Vendor_Name = aTaskList[cnt].Vendor_Name;
		var Workcenter = aTaskList[cnt].Workcenter;
		var Qualitative =  aTaskList[cnt].Qualitative;
		//var InspectionMethodText = aTaskList[cnt].InspectionMethodText;
		
	//Code to find all characteristics for a given combination of Material number and inspection lot 	 
		var charList = [];
		var charListLong = [];
		var charDetailList = [];
		var charDetailListLong = [];
		var charSpecDisp = [];
		var insOpNum = [];
		var insCharNum = [];
		var code = [];
		var InspectionMethodText = [];
		
		var aTaskListLength2 = aTaskList.length;
		
		for(countChar=0; countChar< aTaskListLength2; countChar++) {
			
			
			if ( ( (aTaskList[countChar].Material).concat(aTaskList[countChar].Insplot_No)) == (Material.concat(Insplot_No)) )
		{
				
				/*var final1 = aTaskList[countChar].InspOperation_Text.concat("  -  ");
				var final2 = final1.concat(aTaskList[countChar].InspCharacterstic_Text);*/
				charDetailList.push(
						aTaskList[countChar].Inspection_Char_No.concat("-".concat(aTaskList[countChar].InspCharacterstic_Text)));
				charDetailListLong.push(aTaskList[countChar].InspOperation_Text
						.concat(":".concat(aTaskList[countChar].Inspection_Char_No).
								concat("-".concat(aTaskList[countChar].InspCharacterstic_Text))));
				charSpecDisp.push(aTaskList[countChar].Specification_Display);		
				insOpNum.push(aTaskList[countChar].Inspection_Operation_No);	
				insCharNum.push(aTaskList[countChar].Inspection_Char_No);
				code.push(aTaskList[countChar].Code);
				InspectionMethodText.push(aTaskList[countChar].InspectionMethodText);
				
				
				var charListLength = charList.length;
				var duplicatecharList = 0 ;
				for(countcharList=0; countcharList< charListLength; countcharList++) {	
				if (charList[countcharList] == (aTaskList[countChar].InspOperation_Text) )
				{
						duplicatecharList  = 1;	
						break ;
				}	
				}
				
				if ( duplicatecharList == 0)
					{
					//charList.push(aTaskList[cnt].InspOperation_Text);aTaskList[countChar].InspOperation_Text
					charList.push(aTaskList[countChar].InspOperation_Text);
					charListLong.push(aTaskList[countChar].Inspection_Operation_No
							.concat("-".concat(aTaskList[countChar].InspOperation_Text)));
					}
		}	
			
			/******************************
			var charListLength = charList.length;
			var duplicatecharList = 0 ;
			for(countcharList=0; countcharList< charListLength; countcharList++) {	
				if (charList[countcharList] == (aTaskList[countChar].InspOperation_Text) )
			{
					duplicatecharList  = 1;	
					break ;
			}	
			}
			
			
			if ( duplicatecharList == 0)
				{
				//charList.push(aTaskList[cnt].InspOperation_Text);aTaskList[countChar].InspOperation_Text
				charList.push(aTaskList[countChar].InspOperation_Text);
				}
			/*****************************/
			
		}
		var insLotSaved = isInsLotSaved(Insplot_No);
		var arrTaskList = { // Each Task List
				"matnum": Material,
				"matdes": Material_Description,
				"desc": Inspection_Lot_Type_Name,
				"lot": Insplot_No,
				"center" : Workcenter,
				"vendor" : Vendor_Name,
				"charList" : charList,
				"charListDet" : charDetailList,
				"specificationDisplay" : charSpecDisp,
				"insOp" : insOpNum ,
				"insChar" : insCharNum , 
				"charListLong" : charListLong,
				"charDetailListLong" : charDetailListLong,
				"insLotSavedSrc" : insLotSaved,
				"code" : code,
				"InspectionMethodText" : InspectionMethodText
				
				
				
		};
		
		var aTaskListLength1 = aNotiListMas.length;
		var duplicate = 0 ;
		for(count=0; count< aTaskListLength1; count++) {	
			if (aNotiListMas[count] == (Material.concat(Insplot_No)) )
		{
				duplicate  = 1;	
				//charList.push(aTaskList[count].InspOperation_Text);
				break ;
		}	
		}
		
		
		if ( duplicate == 0)
			{
			aNotiList.push(arrTaskList);
		    aNotiListMas.push(Material.concat(Insplot_No));
			}
		
		
	}			
	return aNotiList;
}

function plantSearchHelpMOB21(aPlantList) {

	var aDefectListLength = aPlantList.length;
	var aPlantGroup = [];
    var cnt = 0;


	for(cnt ; cnt<aDefectListLength; cnt++) {
		
		;//creating own json model for table
	  //  var locationData;		

		//var defectGroup = aDefectList[cnt].DefectGroup;
		
		var plantGroupDescription = aPlantList[cnt].PlantName;
	    var plantIdInMaterial = aPlantList[cnt].PlantId; // getting plant id
		//alert(plantIdInMaterial);
	
	
	var plantData = {"plantName" : plantGroupDescription ,
	                 "plantId" : plantIdInMaterial
		            };

	aPlantGroup.push(plantData);
	
}
	var summaryDetailData={"ModelPlant":aPlantGroup }	; // main json to bind to table
	
	var listPlantsMOb21 = sap.ui.getCore().byId("listPlantsMOb21");
	listPlantsMOb21.removeSelections();
	listPlantsMOb21.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
	
	
}


function isInsLotSaved(insLotIN)
{
	
	var insLots = window.localStorage.getItem("MOB21CHAR");
	
	if (insLots ==  null || insLots ==  undefined )
		{
		
		 return "";
		}
	
	else
		{
		var lotSaved = false ;
		var insLotsRcvd =  JSON.parse(insLots);
		var insLotsRcvdLen = insLotsRcvd.length ;
		
		for ( index = 0 ; index < insLotsRcvdLen ; index ++)
			{
			
			if (insLotsRcvd[index] == insLotIN )
				{
				
				//return "img/edit.png" ;
				return  "sap-icon://edit";
				}
			}
		
		return "";
		
		}
}

