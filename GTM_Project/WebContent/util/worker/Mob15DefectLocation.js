function Mob15DefectLocation() {
	
	var strClient = "";
	
	var demoswitch = sap.ui.getCore().byId("demoswitch");
	if (demoswitch.getState() == true) {
		Mob15Defect();
	}
	else {
		
		if (g_runningInTablet || g_runningOnPhone) {
			if (g_EndSystem.trim() == "DEV1") {
				strClient = "?sap-client=130";
			} else if (g_EndSystem.trim() == "DEV2") {
				strClient = "?sap-client=130";
			} 
			else if (g_EndSystem.trim() == "DEV3") {
				strClient = "?sap-client=130";
			} 
			
			else if (g_EndSystem.trim() == "QA2") {
				strClient = "?sap-client=210";
			} else if (g_EndSystem.trim() == "QA1") {
				strClient = "?sap-client=210";
			}
			
			else if (g_EndSystem.trim() == "QA3") {
				strClient = "?sap-client=210";
			}
			
			
		}
		
		

		var getBindedModelDefect = sap.ui.getCore().byId("idRandomDataTable")
				.getModel();
		var getBindedModelLocation = sap.ui.getCore().byId("idLocTable")
				.getModel();
		// getBindedModel = getBindedModel.getModel().subvariants;

		if (getBindedModelDefect == undefined
				|| getBindedModelLocation == undefined)

		{
			// Service Start Time
			var logInfo = getTimeStamp()
					+ "MOB15:: Service: DefectLocTypeList Start";
			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/" + strClient);
			if (serviceURL == "Fail") {
				return false;
			}

			/*
			 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?,
			 * sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?,
			 * bLoadMetadataAsync?)
			 */
			var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL,
					true, getUserName, getPassword, null, true, true, false);

			/*
			 * Replace with below req URL once the service is ready.
			 */
			// var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and
			// Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "'
			// and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq
			// '" + typeDesc + "'&$format=json";
			var readRequestURL = "DefectLocTypeList?$format=json";

			defectDataModel.read(readRequestURL, null, null, false, function(
					oData, oResponse) {
				
				g_webWorkerCheck = "OFC_DL_SU";//Offline function call Defect Location Success
				
				
				var result = oResponse.body; // Getting JSON response body
				var jsonObj = JSON.parse(result); // Parsing the JSON Object
				var result = jsonObj.d; // Taking the result inside namespace d
				var defectTree = result.results;
				defectTree = formatDefectResponse(defectTree);

				if (g_isDebug == true) {
					// Service End Time
					var logInfo1 = getTimeStamp()
							+ "MOB15:: Service: DefectLocTypeList Finish";
					// Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
				}

			}, function(oError) {
				
				g_webWorkerCheck = "OFC_DL_ERROR";//Offline function call Defect Location Error
				errorRes = true;
								try {
									var data = JSON.parse(oError.response.body);
									for ( var event in data) {
										var dataCopy = data[event];
										try {
											var messageFromBackend = dataCopy.innererror.errordetails[0].message;
											sap.m.MessageBox
													.show(
															messageFromBackend
																	+ " " + " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
										} catch (e) {
											sap.m.MessageBox
													.show(
															data.error.message.value
																	+ " "
																	+ " "
																	+ " ",
															sap.m.MessageBox.Icon.ERROR,
															"Error");
											break;
										}
									}
								} catch (e) {
									
									if (g_isDebug == true) {
										// Service End Time
										var logInfo1 = getTimeStamp()
												+ "MOB15:: Service: DefectLocTypeList  Failed no network";
										// Log file Service Start and End Time
										var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
										logFileUpdate(g_ServiceStartEndTime);
									}
									
									
									
									
									sap.m.MessageBox.show(
											"Service Not Available - Please contact system administrator"
													+ " " + " " + " ",
											sap.m.MessageBox.Icon.ERROR,
											"Error");

								}
							
			
			
			
			

			});
		}

		else {
			if (globalDefectLoc == 1) {
				g_webWorkerCheck = "OFC_DL_SU";//Offline function call Defect Location Success
				var idMob15DetailsQ3View = sap.ui.getCore().byId(
						"idMob15DetailsQ3");
				idMob15DetailsQ3View.removeStyleClass("sapMNavItemLeft");
				globalDefectLoc = 0;
				var app = sap.ui.getCore().byId("splitApp");
				app.to("idMob15DetailsF4-1");

			}

			else {
				g_webWorkerCheck = "OFC_DL_SU";//Offline function call Defect Location Success
				globalDefectLoc = 0;
				var idMob15DetailsQ3View = sap.ui.getCore().byId(
						"idMob15DetailsQ3");
				idMob15DetailsQ3View.removeStyleClass("sapMNavItemLeft");
				var app = sap.ui.getCore().byId("splitApp");
				app.to("idMob15DetailsF5-2");
			}

		}
	}

}


function formatDefectResponse(aDefectList) {
	var aDefectListLength = aDefectList.length;
	var arrDefectListMech = [];
	var arrDefectListElec = [];
	var arrLocList = [];
    var cnt = 0;
    var arrDefectListForTable = [];
    var arrLocationListForTable = [];

	for(cnt ; cnt<aDefectListLength; cnt++) {
		
		//creating own json model for table
	  //  var locationData;		

		//var defectGroup = aDefectList[cnt].DefectGroup;
		
		var defectGroupDescription = aDefectList[cnt].DefectGroupDescription;
		var defectCode = aDefectList[cnt].DefectCode;
		var defectCodeDescription = aDefectList[cnt].DefectCodeDescription;
		var defectGrp = aDefectList[cnt].DefectGroup;
		var catlogType = aDefectList[cnt].CatalogType;
		
		
		
		//var deftypname = aDefectList[cnt].DefectTypeName;
		
		
		if ("E" !== catlogType)
		{
	var defectData = {"defectGroupDescription" : defectGroupDescription ,
			       "defectCode" :  defectCode ,
			       "defectCodeDescription" :  defectCodeDescription,
			       "defectLocationGroup" : defectGrp,
			   //    "defTypName" : deftypname
			     
			       };
	arrDefectListForTable.push(defectData);
	

		}
	
	if ("E" == catlogType)
		{
		var locationData = {"defectGroupDescription" : defectGroupDescription ,
			       "defectCodeForLocation" :  defectCode,
			       "defectCodeDescriptionForLocation" :  defectCodeDescription,
			       "defectLocationGroup" : defectGrp,
			       "defectCode" :  defectCode ,
			    //   "defTypName" : deftypname
			    	   
			       
			       
			       };
		arrLocationListForTable.push(locationData);
		
		}
	
	/*if ("9" == catlogType)
	{
	var locationData = {
			
			   "defectGroupDescription" : defectGroupDescription ,
		       "defectCodeForLocation" :  defectCode ,
		       "defectCodeDescriptionForLocation" :  defectCodeDescription,
		       "defectLocationGroup" : defectGrp,
		       "defectCode" :  defectCode ,
		     //  "defTypName" : deftypname
		    	   
		       
		       
		       };
	arrLocationListForTable.push(locationData);
	
	}*/
	
	
	
	
		
	
	
	}
		
		
		/*var defect1 = defectCode.concat(" : ");
		var defect2 = defect1.concat(defectCodeDescription);
		
		var qme ;
		var qmm ;
		var qm;
		
		if (defectGroup ==  "QM-E" )
			{
			 qme = { "QMEDET" : defect2 };
			 arrDefectListElec.push(qme);
			
			}
		
		else if (defectGroup == "QM-M")
			{
			 qmm = { "QMMDET" : defect2 };
			 arrDefectListMech.push(qmm);
			
			}
		
		else if (defectGroup == "QM")
		{
		 qm = { "QM" : defect2 };
		 arrLocList.push(qm);
		
		}
		
		
		
	}*/
	////////////////////////////////////////////////////////////////////////
	var summaryDetailData={"subvariants":arrDefectListForTable }	; // main json to bind to table
	var modelBind = sap.ui.getCore().byId("idRandomDataTable");
	modelBind.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
	

	
	//location
	var summaryDetailDataLoc={"subvariantsLoc":arrLocationListForTable }	; // main json to bind to table
	var locTable = sap.ui.getCore().byId("idLocTable");
	locTable.setModel(new sap.ui.model.json.JSONModel(summaryDetailDataLoc));
	/////////////////////////////////////////////////////////////////////////
	//var defType = 
	/*var defectListElec = { 
			"namedef": "QM-E   Defect Types in Electrical Devices Production",
			"QMEARR": arrDefectListElec,
			};
	
	var defectListMech = {
			"namedef": "QM-M   Defect Types in Mechanical Devices Production",
			"QMMARR": arrDefectListMech,
			};
	
		var arrDefectList = { 
				"defects" : [defectListElec,
				             defectListMech]
		
				};
		
		var oDefectTreeModel = new sap.ui.model.json.JSONModel(arrDefectList, "defectTree"); 
	
		var defectViewTree = sap.ui.getCore().byId("defectTree"); 
		defectViewTree.setModel(oDefectTreeModel);
	
		
		var locList = {
				"locationHdr": "QM  Defect Locations",
				"QMARR": arrLocList,
				};
		var arrLocationList = { 				
				"locations" : [locList]         	
				};
		
		var oLocTreeModel = new sap.ui.model.json.JSONModel(arrLocationList, "locations"); 
		var locTree = sap.ui.getCore().byId("locTree"); 
		locTree.setModel(oLocTreeModel);*/
		
		if (globalDefectLoc == 1)
			{
			g_webWorkerCheck = "OFC_DL_SU";//Offline function call Defect Location Success
			var idMob15DetailsQ3View = sap.ui.getCore().byId("idMob15DetailsQ3");
			idMob15DetailsQ3View.removeStyleClass("sapMNavItemLeft");
			globalDefectLoc =  0;
			var app = sap.ui.getCore().byId("splitApp"); 
			app.to("idMob15DetailsF4-1");


			}
		
		else
			{
			g_webWorkerCheck = "OFC_DL_SU";//Offline function call Defect Location Success
			globalDefectLoc =  0;
			var idMob15DetailsQ3View = sap.ui.getCore().byId("idMob15DetailsQ3");
			idMob15DetailsQ3View.removeStyleClass("sapMNavItemLeft");
			var app = sap.ui.getCore().byId("splitApp"); 
			app.to("idMob15DetailsF5-2");
			}
		
				
	

}

