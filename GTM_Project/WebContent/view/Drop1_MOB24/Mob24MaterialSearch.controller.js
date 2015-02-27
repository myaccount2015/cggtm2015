sap.ui.controller("com.cg.gtm.view.Drop1_MOB24.Mob24MaterialSearch", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.Mob24MaterialSearch
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.Mob24MaterialSearch
*/
	onBeforeRendering: function() {
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.Mob24MaterialSearch
*/
	onAfterRendering: function() {
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.Mob24MaterialSearch
*/
	onExit: function() {
		
	},
onMaterialSel: function() {

	
	var btnSelMat = sap.ui.getCore().byId("btnSelMat"); 
	btnSelMat.setVisible(false);
		if(backNavMat=="Mob15CreateNoti") {
			
    		var app = sap.ui.getCore().byId("myApp");  
            app.to("idMob15Notification");
    	}
		else if (backNavMat=="Mob22InsLot")
			{
			var app = sap.ui.getCore().byId("myApp");  
            app.to("idMOB22InitView");
			
			}
		
		else if (backNavMat == "idMOB21Mas")
			{
			
			var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
			
			var txt = sap.ui.getCore().byId("oListItemMat");
			
			txt.setDescription(selectedMatNo.getText());
			txt.setIcon("sap-icon://accept");
			var app = sap.ui.getCore().byId("splitAppInsCreate1");  
	      	app.toMaster("idMOB21Mas");
	      	
	      	var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
			listItem.setVisible(true);
			
		
			var app = sap.ui.getCore().byId("myApp");  
            app.to("idMOB21InitView12");
			}
		else if (backNavMat == "Mob29Screen")
		{

		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob29MaterialView");
		}
		
	
		else {
		
    		var app = sap.ui.getCore().byId("myApp");  
            app.to("idGridSubMenuQM");
    	}
	},

	onMaterialSearch: function() {
		

	var demo = sap.ui.getCore().byId("demoswitch");  
	globalValMatSrch =  1 ;
	alert(inputPlant.getValue());
	
	//alert(demo.getState());
	
	if (demo.getState())
		{

	MatSearchMock();
			if(!g_runningOnPhone) {
			hideView_MaterialDetails();
			}
		}
	
	else{
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB24:: Service: materialcollections Start" ; 
		
		
		
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
	    var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	    
	    var matNo = "";
	    var plant = inputPlant.getValue();
	   // plant = "GWNP";//TODO - Plant name has to be integrated
	    var vendor = sap.ui.getCore().byId("txtVendor").getValue();
	    var desc = sap.ui.getCore().byId("txtDesc").getValue();
	    var matGrp = sap.ui.getCore().byId("txtMtrGrp").getValue();
	    var extMatGrp = sap.ui.getCore().byId("txtExtMtrGrp").getValue();
	    var venPartNo = sap.ui.getCore().byId("txtVenPartNo").getValue();
	    
	    var manufac =  sap.ui.getCore().byId("txtManu").getValue();
	    
	    
	    var errorRes = false;
	    var oJSONModelMatSearch = null;
	    /*
	     * Set Format as $format=json in the Request URL
	     */
	var readRequestURL = "/materialcollections?$filter=Materialno eq '" + matNo + "' and Plant eq '" + plant + "' and Vendor eq '" + vendor + 
	"' and Description eq '"  + desc + "'and  Manufacturer eq '"    +  manufac    +   "' and MaterialGroup eq '" + matGrp + "' and ExternalMaterialGroup eq '" + extMatGrp + "' and VendorPartNumber eq '" + venPartNo + "' &$format=json";

	
		loginoDataModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
						var result = oResponse.body; //Getting JSON response body
						
						var jsonObj = JSON.parse(result); // Parsing the JSON Object
						
						var result = jsonObj.d; // Taking the result inside namespace d
						
						//Global variable oJSONModelMatSearch is used to make use of all the screens
						oJSONModelMatSearch = new sap.ui.model.json.JSONModel(result, "MD15MATCollModel");
						oJSONModelMatSearch.setSizeLimit(1000000);
						var listMat = sap.ui.getCore().byId("listMatNo");
					
						listMat.setModel(oJSONModelMatSearch);
						
						
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Finish" ; 
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
									var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Failed no network" ; 
									//Log file Service Start and End Time
									var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}
									
									
									
									
									}
	      });
		
		
		
		
		
		if(!errorRes) {

			/*var app = sap.ui.getCore().byId("splitAppMaterial");  
		    app.toMaster("idMATSR");*/
		    
		    var app = sap.ui.getCore().byId("splitAppMaterial");  
		    app.toDetail("MaterialSearchDetailPage");
		    if(!g_runningOnPhone) {
		    	hideView_MaterialDetails(); // Hiding Material Details Screen
		    }
		}
	}
	},
	
	
	validateMatNum : function(matnum)
	{

		var demoswitch = sap.ui.getCore().byId("demoswitch");
//		demoswitch = true;
		if (demoswitch.getState() ==  false)
		{
			
			openSplashScreen();//splash screen opened
			//setTimeout(function(){
	  	        closeSplashScreen();//splash screen closed
	  	    //Service Start Time
	  	      var logInfo = getTimeStamp() +"MOB24:: Service: materialcollections Start" ; 

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
	    var matNo = matnum;
	    var errorRes = false;
	    var oJSONModelMatSearch = null;
	    /*
	     * Set Format as $format=json in the Request URL
	     */
	    g_isMOB17Inv = false ;
		var defaultPlant =  window.localStorage.getItem("defPlantCode");
		g_MOB15MatPlant=defaultPlant
	    var readRequestURL = "/materialcollections?$filter=Plant eq '"+defaultPlant+"' and Materialno eq '" + matNo + "' &$format=json";
	        materialDataModel.read(readRequestURL, null, null, false,   
        	            function(oData, oResponse) { 
						var result = oResponse.body; //Getting JSON response body
						var jsonObj = JSON.parse(result); // Parsing the JSON Object
						var result = jsonObj.d; // Taking the result inside namespace d
						var matData = result.results;
						    sendResultToMaterialSearchDetPageButton = matData;//global variable-->goes to serialBatchValidation(getManualentryValue)
						if (matData.length == 0){
							sap.m.MessageBox.show(matNo+" is not a valid material ", 
							sap.m.MessageBox.Icon.ERROR,
										"Error"
									);
							g_isMOB17Inv  = true ;
							sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.Error);
							sap.ui.getCore().byId("lblMatnrMOB22Desc").setText("") ;
						var dropDownDataArr = [] ;
						 
						
								for ( var i = 0 ; i < matData.length ; i++)
									
								{
							if ( matNo == matData[i].Materialno )
									{
									var dropDownData = {  							    
												     "text":"" , 
												     "key" : "" 						  
												 }; 
    									dropDownDataArr.push(dropDownData);	
									}		
								}	
							var dropDownDataFinal = [];
							    dropDownDataFinal = {"items" : dropDownDataArr};
							var oModelJsonList = new sap.ui.model.json.JSONModel();  
							    oModelJsonList.setData(dropDownDataFinal); 
							    sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 
								
							    
							    if( g_isDebug == true)
								{
								//Service End Time
							   var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections "+ matNo+" is not a valid material "; 
						  	    //Log file Service Start and End Time
								var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
								logFileUpdate(g_ServiceStartEndTime);
								}
							    
							    
							    
						
						}
						
						else
							{
							serialBatchValidation(matnum);
							
							if (validateMATNUMAccess ==  "MOB22")
								{
							var dropDownDataArr = [] ;
                            var emptyText = {
									
									"text" : "",
									"key" : ""
							}
							dropDownDataArr.push(emptyText);
							for (var i = 0 ; i < matData.length ; i++)
							{
								if ( matNo == matData[i].Materialno )
								{
									
									sap.ui.getCore().byId("lblMatnrMOB22Desc").setText
						              ("Material Description : ".concat(matData[i].Description));
									
								
									//Batch Validation
									if ( matData[i].Batchmanaged =="No" )
										{
										 sap.ui.getCore().byId("horizontal5").setVisible(false);
										 sap.ui.getCore().byId("batch").setVisible(false);
										
										}
									else
										{
										 sap.ui.getCore().byId("horizontal5").setVisible(true);
										 sap.ui.getCore().byId("batch").setVisible(true);
										
										} 
									
									
									
									
									
									
								var dropDownData = {  							    
										 "text": matData[i].Vendor.concat("  - " +matData[i].VendorName)  , "key" : matData[i].Vendor 						  
											 }; 
								
									
								dropDownDataArr.push(dropDownData);	
						              
						        }
							}
							
							
							
						var dropDownDataFinal = [];
						    dropDownDataFinal = {"items" : dropDownDataArr};
						var oModelJsonList = new sap.ui.model.json.JSONModel();  
						    oModelJsonList.setData(dropDownDataFinal); 
						    sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 
							}
							
							else if (validateMATNUMAccess ==  "MOB29" )
								{for (var i = 0 ; i < matData.length ; i++)
								{if ( matNo == matData[i].Materialno )
									{ 
					                 //label print
						              sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
						              sap.ui.getCore().byId("matLabPrintDes").setVisible(true);
						              sap.ui.getCore().byId("matLabPrintDes").setText(matData[i].Description);  
									}}}
							else if (validateMATNUMAccess ==   "MOB23-StockOverview" )
							{
								for (var i = 0 ; i < matData.length ; i++)
							{
									if ( matNo == matData[i].Materialno )
								{ 
				                 //label print
					             // sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
					             // sap.ui.getCore().byId("matLabPrintDes").setVisible(true);
					              sap.ui.getCore().byId("idMatdesc").setText(matData[i].Description);  
								}}
							}
							
							else if (validateMATNUMAccess == "MOB17")
								{
								g_isMOB17Ser = false ;
								for (var i = 0 ; i < matData.length ; i++)
								{
										if ( matNo == matData[i].Materialno )
									{ 
								if ( matData[i].Serialized ==  "Yes")
									{
									g_isMOB17Ser = true ;
									sap.m.MessageBox.show("Serialized material : Process cannot be executed", 
											sap.m.MessageBox.Icon.ERROR,
														"Error"
													);
									break ;
									}
									}
								}
								
								}
							
							else if(validateMATNUMAccess == "MOB28"){

								g_isMOB17Ser = false ;
								for (var i = 0 ; i < matData.length ; i++)
								{
										if ( matNo == matData[i].Materialno )
									{ 
								if ( matData[i].Serialized ==  "Yes")
									{
									g_isMOB17Ser = true ;
									sap.m.MessageBox.show("Serialized material : Process cannot be executed", 
											sap.m.MessageBox.Icon.ERROR,
														"Error"
													);
									break ;
									}
									}
								}
								
								
								
								
							}
							
							else if (validateMATNUMAccess == "MOB35")
							{
								
								var objMaterial = matData[0];
								
								var Serialized = objMaterial.Serialized;
							    var Batchmanaged = objMaterial.Batchmanaged;
							    var Splitvaluated = objMaterial.Splitvaluated;
								
								if(Serialized=='No') {
							    	Serialized = false;
							    }else {
							    	Serialized = true;
							    }
							    
							    if(Batchmanaged=='No') {
							    	Batchmanaged = false;
							    }else {
							    	Batchmanaged = true;
							    }
							    
							    if(Splitvaluated=='No') {
							    	Splitvaluated = false;
							    }else {
							    	Splitvaluated = true;
							    }
						
								if(objMaterial.VendorName.length > 0) {
							    	g_SelMaterialDetail = {"Material": objMaterial.Materialno, "Description": objMaterial.Description, "Quantity": "", "Uom" : objMaterial.Uom , "Customer": objMaterial.Vendor + "(" + objMaterial.VendorName + ")", "BatchManaged": Batchmanaged, "SerialManaged": Serialized, "Splitvaluated": Splitvaluated};
							    }else {
							    	g_SelMaterialDetail = {"Material": objMaterial.Materialno, "Description": objMaterial.Description, "Quantity": "", "Uom" : objMaterial.Uom , "Customer": objMaterial.Vendor + "", "BatchManaged": Batchmanaged, "SerialManaged": Serialized, "Splitvaluated": Splitvaluated};
							    }
								
								var selMaterial = g_SelMaterialDetail;
								
								resetMaterialDetailUIMOB35(true);
									
								sap.ui.getCore().byId("MOB35_matInput").setValue(objMaterial.Materialno);
								sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
								sap.ui.getCore().byId("MOB35UOM").setValue(selMaterial.Uom);
								
								sap.ui.getCore().byId("MOB35MatDesc").setText(selMaterial.Description);
								
								if(selMaterial.SerialManaged == true) {
									sap.ui.getCore().byId("serialBoxMOB35").setVisible(true);
									sap.ui.getCore().byId("MOB35SerLbl").setVisible(true);
									sap.ui.getCore().byId("Mob35ShowSer").setVisible(true);
									sap.ui.getCore().byId("MOB35Qty").setValue("1");
								}else {
									sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
									sap.ui.getCore().byId("MOB35SerLbl").setVisible(false);
									sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
									sap.ui.getCore().byId("MOB35Qty").setValue("");
								}
								
								if(selMaterial.BatchManaged == true) {
									//sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
									sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
									sap.ui.getCore().byId("MOB35BatLbl").setText("Batch");
									sap.ui.getCore().byId("MOB35_batchInput").setValue("");
									sap.ui.getCore().byId("MOB35_batchInput").setVisible(true);
									if(g_runningInTablet == false && g_runningOnPhone == false )
									  {
										sap.ui.getCore().byId("MOB35_batchScan").setVisible(false);
									  }
									else
									  {
										sap.ui.getCore().byId("MOB35_batchScan").setVisible(true);
									  }
									
									sap.ui.getCore().byId("MOB35_batchInput").setEnabled(true);
								}else if(selMaterial.Splitvaluated == true) {
									//sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
									sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
									sap.ui.getCore().byId("MOB35BatLbl").setText("Valuation Type");
									sap.ui.getCore().byId("MOB35_batchInput").setValue("");
									sap.ui.getCore().byId("MOB35_batchInput").setVisible(true);
									if(g_runningInTablet == false && g_runningOnPhone == false )
									  {
										sap.ui.getCore().byId("MOB35_batchScan").setVisible(false);
									  }
									else
									  {
										sap.ui.getCore().byId("MOB35_batchScan").setVisible(true);
									  }
									//sap.ui.getCore().byId("MOB35_batchScan").setVisible(true);
									
									sap.ui.getCore().byId("MOB35_batchInput").setEnabled(true);
								}
								
								if(selMaterial.BatchManaged == false && selMaterial.Splitvaluated == false) {
									sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
									sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
									
									sap.ui.getCore().byId("MOB35_batchInput").setValue("");
								}
								
								 clearSpecialStockMOB35();
									 
									 window.localStorage.removeItem(g_invdocnumMOB35); //Clearing Data
									 window.localStorage.removeItem("Mob35SerialLog"); //Clearing Data
									 
									 window.localStorage.setItem(g_invdocnumMOB35 + "SerLogVal", ""); //Clearing Data
									 
									 if(selMaterial.SerialManaged == true) {
											if (sap.ui.getCore().byId(
											"Mob35-thrdScr-txtBoxManualEntryLog")
											.getValue() != "") {
											 sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount").addSerialMOB35();
											}
								// sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount").addSerialMOB35();
									 }

								 sap.ui.getCore().byId("idradio-SS0-Mob35").setSelected(true);
								 sap.ui.getCore().byId("idradio-ST0-Mob35").setSelected(true);
								 
							}
							
							
							
							else //create Notification Area
								{
								for ( i = 0 ; i < matData.length ; i++)
									{
									if ( matNo == matData[i].Materialno )
										{
										switch(validateMATNUMAccess)
										{
										case "MOB15-CustComp" :
											sap.ui.getCore().byId("lblMatnrMOB15Desc").setText
										    ("Material Description : ".concat(matData[i].Description));
											break;
										case "MOB15F2" :
											sap.ui.getCore().byId("idMatDesMob15-VendorError").setText
										    ("Material Description : ".concat(matData[i].Description));
											break;
										case "MOB15-Materialerror":
											sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText
										    ("Material Description : ".concat(matData[i].Description));
											break;
										
										case "InternalProblemQ3":
											sap.ui.getCore().byId("idMatDesMob15-IntPro").setText
										    ("Material Description : ".concat(matData[i].Description));
											break;
										
										
										}
										
										
										
									break;
										}
									else{ // if mandt not equal del desc
										
									/*	sap.m.MessageBox.show("Entered material no not available in database ", 
												sap.m.MessageBox.Icon.ERROR,
															"Error"
														);*/
										
										sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("");
										sap.ui.getCore().byId("idMatDesMob15-VendorError").setText("");
										sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText("");
										sap.ui.getCore().byId("idMatDesMob15-IntPro").setText("");
										
										
										
										break;
										}
								
								
									    }
										}
								
							if( g_isDebug == true)
							{
							//Service End Time
							var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Finish" ; 
							//Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
							}
								}
						
						
							
					},  function(oError){  
							errorRes = true;
							//sap.m.MessageBox.show(oError.message);
							try{
								var data = JSON.parse(oError.response.body);
								for(var event in data){
								var dataCopy = data[event];	
									try{
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									sap.m.MessageBox.show(
											matNo+" "+messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
									
									if( g_isDebug == true)
									{
									//Service End Time
									var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections "+matNo+" "+messageFromBackend ; 
									//Log file Service Start and End Time
									var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}
									
									
									}
									catch(e)
									{sap.m.MessageBox.show(e.message+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,"Error");break;
									}}}catch(e){sap.m.MessageBox.show(
		                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,"Error");
									
									if( g_isDebug == true)
									{
									//Service End Time
									var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Failed no network" ; 
									//Log file Service Start and End Time
									var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									logFileUpdate(g_ServiceStartEndTime);
									}
									
									
									}
					
	      });
		
		if(!errorRes) {

			/*var app = sap.ui.getCore().byId("splitAppMaterial");  
		    app.toMaster("idMATSR");*/
		    
		    var app = sap.ui.getCore().byId("splitAppMaterial");  
		    app.toDetail("MaterialSearchDetailPage");
		    if(!g_runningOnPhone) {
		    	hideView_MaterialDetails(); // Hiding Material Details Screen
		    }
		}
		//	},1000);//constant delay  
		}
		
		else
			{
			if (validateMATNUMAccess ==  "MOB22")
			{
		var dropDownDataArr = [] ;
		
			var dropDownData = {  							    
						     "text": "Capgemini" , "key" : "vendor1"		
			}
				  
				  dropDownDataArr.push(dropDownData);								  
			dropDownData = {  							    
				     "text": "IPEX Consulting" , "key" : "vendor2"		
	}
			 dropDownDataArr.push(dropDownData);
				
			
	 var dropDownDataFinal = [];
	 dropDownDataFinal = {"items" : dropDownDataArr};
	 var oModelJsonList = new sap.ui.model.json.JSONModel();  
	 oModelJsonList.setData(dropDownDataFinal); 
	 sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 
		}
			
			}
		
		  
	
	}
		
	
	
	
	


});
