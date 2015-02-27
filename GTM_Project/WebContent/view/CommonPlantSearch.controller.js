sap.ui.controller("com.cg.gtm.view.CommonPlantSearch", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.CommonPlantSearch
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.CommonPlantSearch
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.CommonPlantSearch
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.CommonPlantSearch
*/
//	onExit: function() {
//
//	}
	
	onCommonPlantSel : function(event)
	{
		g_SelectedPlant = event.mParameters.listItems[0].mProperties; //Selected Plant from Common Plant Search
		g_Mob18SelectedPlant = event.mParameters.listItems[0].mProperties;
		//g_scrapSelectedPlant = event.mParameters.listItems[0].mProperties;
		if(globalPlantSearchFrom=="MOB17") {
			
			callStorageLocation1(null); //Calling From Storage Location
			
			var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant = sap.ui.getCore().byId("inputPlantMat1");
			
			inputPlant.setValue(selectedPlant);
			if ( g_runningOnPhone == false)
			{
			var app = sap.ui.getCore().byId("splitAppMOB17");  
      	  	app.toMaster("idMOB17_MasterActionPage");
			}
			
			else
				{

				var app = sap.ui.getCore().byId("myApp");  
	      	  	app.to("idMOB17");
				
				
				}
		}
		else if( globalPlantSearchFrom == "MOB30"){
            var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant = sap.ui.getCore().byId("inputPlant30");
			inputPlant.setValue(selectedPlant);
			
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB30master = sap.ui.getCore().byId("idMOB30master"); 
				app.to("idMob30InitialScreen");
				
			}
			else{
				var app = sap.ui.getCore().byId("idMOB30SplitApp");  
		   	  	app.toMaster("idMOB30master");
			}
		
   	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
 	  listdeselect.removeSelections();
		}
		else if( globalPlantSearchFrom == "MOB23"){
            var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant = sap.ui.getCore().byId("inputPlant23");
			inputPlant.setValue(selectedPlant);
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
				app.to("idMob23InitialScreen");
			}
			else{
				var app = sap.ui.getCore().byId("idMOB23SplitApp");  
		   	  	app.toMaster("idMOB23Matmaster");
			}
			
	
   	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
 	  listdeselect.removeSelections();
		}
		
		else if (globalPlantSearchFrom =="MOB19"){
			var selectedText = event.getParameter('listItem').getTitle();
			sap.ui.getCore().byId("inputPlantMOB19").setValue(selectedText);
	     	getSelectedPlantId = event.getParameter('listItem').getDescription();//global
			selectedPlantID = event.getParameter('listItem').getDescription();
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
				//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
					app.to("idMob19InitialScreen");
			}
			else{
				sap.ui.getCore().byId("idMOB19SplitApp").toMaster("idMOB19MasPg");
			}
		}
		else if(globalPlantSearchFrom =="MOB18") {
			
			//var jsonStore;
			
			callStorageLocation_order(null);
	      	  
	     
	      	
			var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant = sap.ui.getCore().byId("inputPlant");
			
			inputPlant.setValue(selectedPlant);
			
			/*var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
			inputPlant_Cost.setValue(selectedPlant);
			
			var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			inputPlant_Scrap.setValue(selectedPlant);
			
			var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
			inputPlant_WBS.setValue(selectedPlant);*/
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
				app.to("idMOB18Locmas");
			}
			else{
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	app.toMaster("idMOB18Locmas");
			}
		
      	  	
      	  
      	  	
      	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
    	  listdeselect.removeSelections();
    	  
		}else if(globalPlantSearchFrom=="MOB18_cost") {
			
			callStorageLocation_cost(null);
			var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant_Cost = sap.ui.getCore().byId("inputPlant_Cost");
			inputPlant_Cost.setValue(selectedPlant);
			
			/*
			
			var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			inputPlant_Scrap.setValue(selectedPlant);
			
			var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
			inputPlant_WBS.setValue(selectedPlant);*/
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
				app.to("idMOB18Costmas");
			}
			else{
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	app.toMaster("idMOB18Costmas");
			}
			
      	  	
      	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
    	  listdeselect.removeSelections();
    	  
		}else if(globalPlantSearchFrom=="MOB18_WBS") {
			
			callStorageLocation_wbs(null);
		 	
		 	
			var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant_WBS = sap.ui.getCore().byId("inputPlant_WBS");
			inputPlant_WBS.setValue(selectedPlant);
			
			/*
			
			var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			inputPlant_Scrap.setValue(selectedPlant);
			
			*/
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
				app.to("idMOB18WBSmas");
			}
			else{
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	app.toMaster("idMOB18WBSmas");
			}
			
      	  	
      	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
    	  listdeselect.removeSelections();
    	  
		}else if(globalPlantSearchFrom=="MOB18_scrap") {
			
			callStorageLocation(null);
			
			var selectedPlant = event.getParameter('listItem').getTitle();
			
			var inputPlant_Scrap = sap.ui.getCore().byId("inputPlant_Scrap");
			inputPlant_Scrap.setValue(selectedPlant);
			
			if ( g_runningOnPhone == true)
			{
				var app = sap.ui.getCore().byId("myApp"); 
			//	var idMOB23Matmaster = sap.ui.getCore().byId("idMOB23Matmaster");  
				app.to("idMOB18Scrapmas");
			}
			else{
				var app = sap.ui.getCore().byId("idMOB18SplitApp");  
	      	  	app.toMaster("idMOB18Scrapmas");
			}
			
      	  var listdeselect = sap.ui.getCore().byId("listPlantsCommon");
    	  listdeselect.removeSelections();
      	  
		}
		
		

		
	}
	
});
	function plantSearchHelpCommon(aPlantList) {

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
		var summaryDetailData={"ModelPlantCommon":aPlantGroup }	; // main json to bind to table
		var modelBind = sap.ui.getCore().byId("listPlantsCommon");
		modelBind.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
		
		
	}

	
	function getPlantList()
	{
		

		var demo = sap.ui.getCore().byId("demoswitch");  
	
		
		//alert(demo.getState());
		
		if (demo.getState() == true)
			
			{
			var oMD24CollectionPlant1 = {"ModelPlantCommon":
				[{"plantId": "0001" , "plantName":"Ashford"},
				 {"plantId": "0002" ,"plantName":"Bounds Green - London"},
				 {"plantId": "0003" ,"plantName":"Central Warehouse"},
				 {"plantId": "0004" ,"plantName":"Clay Hills-Aberdeen"},
				 {"plantId": "0005" ,"plantName":"Craigentinny-Edingburgh"},
				 {"plantId": "0006" ,"plantName":"Doncaster"},
				 {"plantId": "0007" ,"plantName":"Ferme Park-London"},
				 {"plantId": "0008" ,"plantName":"Heaton-Newcastle"},
				 {"plantId": "0009" ,"plantName":"Holborn"},
				 {"plantId": "0010" ,"plantName":"Inverness"},
				 {"plantId": "0011" ,"plantName":"Neville Hill-Leeds"},
				 {"plantId": "0012" ,"plantName":"Newton Aycliffe"},
				 {"plantId": "0013" ,"plantName":"North Pole"},
				 {"plantId": "0014" ,"plantName":"Polmadie-Glasgow"},
				 {"plantId": "0015" ,"plantName":"Stoke Gifford"},
				 {"plantId": "0016" ,"plantName":"Swansea"}]};

			
			var model = new sap.ui.model.json.JSONModel();
			model.setData(oMD24CollectionPlant1);
			
			var modelBind = sap.ui.getCore().byId("listPlantsCommon");
			modelBind.setModel(model);
			
			}
		
		else {
			
		
		//Service Start Time
	    var logInfo = getTimeStamp() +"MOB00:: Service: PlantList Start" ;

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
				plantSear = plantSearchHelpCommon(plantSear);
				
				
            	
               }

              if( g_isDebug == true)
              {
              //Service End Time
              var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Finish" ;
              //Log file Service Start and End Time
              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
              logFileUpdate(g_ServiceStartEndTime);
              }
			
					
				},  function(oError){  
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
					              var logInfo1 = getTimeStamp() +"MOB00:: Service: PlantList Failed no network" ;
					              //Log file Service Start and End Time
					              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					              logFileUpdate(g_ServiceStartEndTime);
					              }
								
								
								}
					
      });
		
		
		}	
		
		
	
	}

