sap.ui.controller("com.cg.gtm.view.Drop1_MOB24.MaterialSearchInput", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.MaterialSearchInput
*/
	onInit: function() {
		
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.MaterialSearchInput
*/
	onBeforeRendering: function() {
	
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.MaterialSearchInput
*/
	onAfterRendering: function() {
		
		//sap.ui.getCore().byId("inputPlantMat").setValue("bsd");
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.MaterialSearchInput
*/
//	onExit: function() {
//
//	}
	
	
	handleHelpButtonPress : function()
	{
		//var MobileScreenNumber = "MOB24";
		//var helpDocNumber = HelpDocument(MobileScreenNumber);
		//Display_Document_Image_PDF(helpDocNumber);
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		//url1 = url1 + "('IMMATERIALSEARCHHELPPAGE')/$value";
		var MobileScreenNumber = "MOB24";
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
	
	
	onMaterialSearch: function() {
		// openSplashScreen();

		var demo = sap.ui.getCore().byId("demoswitch");  
		globalValMatSrch =  1 ;
		
		//alert(demo.getState());
		
		//alert(inputPlant.getValue());
		
		if (demo.getState())
			{
			// setTimeout(function(){
					
					MatSearchMock();
					if(!g_runningOnPhone) {
						hideView_MaterialDetails();
					}
				//	closeSplashScreen();
				 //   },3000);
		
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
		    
		    var plant = 	g_inputPlantCode ;
		    g_MOB15MatPlant=g_inputPlantCode;
		    var desCheck = sap.ui.getCore().byId("Mob24-getDesLabItemPlantDes").getText();
		    var vendor = null;
			   var manu = null;
			   var desc = null;
			   var matGrp = null;
			   var extMatGrp= null;
			   var venPartNo= null;
			   var manufac= null;
			
		     vendor = sap.ui.getCore().byId("txtVendor").getValue();
		     manu = sap.ui.getCore().byId("txtManu").getValue();
		     desc = sap.ui.getCore().byId("txtDesc").getValue();
		     matGrp = sap.ui.getCore().byId("txtMtrGrp").getValue();
		     extMatGrp = sap.ui.getCore().byId("txtExtMtrGrp").getValue();
		     venPartNo = sap.ui.getCore().byId("txtVenPartNo").getValue();
		     manufac =  sap.ui.getCore().byId("txtManu").getValue();
		    
		 
		    
		    
		    
		    
		    
		    var errorRes = false;
		    var oJSONModelMatSearch = null;
		    /*
		     * Set Format as $format=json in the Request URL
		     */
		var readRequestURL = "/materialcollections?$filter=Materialno eq '" + matNo.toString() + "' and Plant eq '" + plant + "' and Vendor eq '" + vendor + 
		"' and Description eq '"  + desc  +"' and  Manufacturer eq '"    +  manufac    +   "' and MaterialGroup eq '" + matGrp + "' and ExternalMaterialGroup eq '" + extMatGrp + "' and VendorPartNumber eq '" + venPartNo + "' &$format=json&$top=200";

		
		
			loginoDataModel.read(readRequestURL, null, null, false,   
		              function(oData, oResponse) { 
							var result = oResponse.body; //Getting JSON response body
							
							var jsonObj = JSON.parse(result); // Parsing the JSON Object
							
							var result = jsonObj.d; // Taking the result inside namespace d
							var CheckResVal = result.results.length;
							
							
							
							//Global variable oJSONModelMatSearch is used to make use of all the screens
							oJSONModelMatSearch = new sap.ui.model.json.JSONModel(result, "MD15MATCollModel");
							oJSONModelMatSearch.setSizeLimit(1000000);
							var listMat = sap.ui.getCore().byId("listMatNo");
							listMat.setModel(oJSONModelMatSearch);
							sendResultToMaterialSearchDetPageButton = oData.results; //global var 2nd time
							
							if( CheckResVal == 0 )
							{
							sap.m.MessageBox.show("No material is there with the following search criteria"+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,"Error");
						//	closeSplashScreen();
							//return;
							}
							
						//	closeSplashScreen();
							
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
								
								
							//	 setTimeout(function(){
										
										
									
									    
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
										
										
									//	closeSplashScreen();
								// },3000);	
										
										
										
		      }
						
			
			
			);
			
			
			
			
			
			if(!errorRes) {

				/*var app = sap.ui.getCore().byId("splitAppMaterial");  
			    app.toMaster("idMATSR");*/
		
				
				/*var deselect = sap.ui.getCore().byId("listMatNo");
				deselect.removeSelections();*/
				// desele.setSelectedItem(sap.ui.getCore().byId("stdMatSel"),false);
					
				
				//setTimeout(function(){
					
					//closeSplashScreen();
if(g_runningOnPhone == true)
	{
	var app = sap.ui.getCore().byId("myApp");  
    app.to("idMATSR");

	}
else
	{
	var app = sap.ui.getCore().byId("splitAppMaterial");  
    app.toDetail("MaterialSearchDetailPage");
    	if(!g_runningOnPhone) {
    		hideView_MaterialDetails(); // Hiding Material Details Screen
    	}
	}
			    
			    

			   


				// },2000);//splash screen 
				
				
				
			

			}
		}
		},
	
	scanBatch : function()
	{
		var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
		 cordova.plugins.barcodeScanner.scan(
                 function(result){
               
                 		if(varScan=="Mob15CreateNoti") {
                 			if(globalMob15Detail == "Q1") {
                 				sap.ui.getCore().byId("batchno").setValue(result.text);
                 				sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "Q11") {
                 				sap.ui.getCore().byId("inputMatnr1").setValue(result.text);
                 				sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "Q3") {
                 				sap.ui.getCore().byId("inputMatnr2").setValue(result.text);
                 				sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "F2") {
                 				sap.ui.getCore().byId("batchf2").setValue(result.text);
                 				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "F3") {
                 				sap.ui.getCore().byId("ip_BatNo4").setValue(result.text);
                 				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
                 			}
                     		
                     	}
                 		else if (varScan=="Mob22InsLot")
                 			{
                 			
                 			sap.ui.getCore().byId("batch").setValue(result.text );
                 			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
                 			
                 			}
                 		
 
                 		else if (varScan == "Mob29Screen")
                 		{

                 		var app = sap.ui.getCore().byId("myApp");  
                         app.to("idMob29MaterialView");
                 		}
                 	
                 		else {
                 		
                     		var app = sap.ui.getCore().byId("myApp");  
                             app.to("idGridSubMenuQM");
                     	}
                 		if( g_isDebug == true)
        	        	{
        	        	//Service End Time
                 			var scanedText = result.text;
        	        	var logInfo1 = getTimeStamp() +"Barcode Scan::"+scanedText+"-Finish" ;
        	        	//Log file Service Start and End Time
        	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
        	        	logFileUpdate(g_ServiceStartEndTime);
        	        	}
                 }, 
                 function(error){
                	 sap.m.MessageBox.show("Scan failed: " + error);
                	 if( g_isDebug == true)
     	        	{
     	        	//Service End Time
     	        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
     	        	//Log file Service Start and End Time
     	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
     	        	logFileUpdate(g_ServiceStartEndTime);
     	        	}
                	 
                 }
             );	
	},
	
	scanSNUM : function()
	{

	  	
		 cordova.plugins.barcodeScanner.scan(
                 function(result){
               
                 		if(varScan=="Mob15CreateNoti") {
                 			if(globalMob15Detail == "Q1") {
                 				sap.ui.getCore().byId("selno").setValue(result.text);
                 				sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "Q11") {
                 				sap.ui.getCore().byId("inputMatnr1").setValue(result.text);
                 				sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "Q3") {
                 				sap.ui.getCore().byId("inputMatnr2").setValue(result.text);
                 				sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "F2") {
                 				sap.ui.getCore().byId("selnof2").setValue(result.text);
                 				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
                 			}else if(globalMob15Detail == "F3") {
                 				sap.ui.getCore().byId("ip_SerialNo4").setValue(result.text);
                 				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
                 			}
                     		
                     	}
                 		else if (varScan=="Mob22InsLot")
                 			{
                 			
                 			sap.ui.getCore().byId("inputMatnrMOB22").setValue(result.text );
                 			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
                 			
                 			}
                 		
 
                 		else if (varScan == "Mob29Screen")
                 		{

                 		var app = sap.ui.getCore().byId("myApp");  
                         app.to("idMob29MaterialView");
                 		}
                 	
                 		else {
                 		
                     		var app = sap.ui.getCore().byId("myApp");  
                             app.to("idGridSubMenuQM");
                     	}
                 	
                 }, 
                 function(error){
                	 sap.m.MessageBox.show("Scan failed: " + error);
                 }
             );	
	
	},
	scanAll  : function()
	{    
       /* cordova.plugins.barcodeScanner.scan(

       		 function(result){


       		 //var resArray = result.text.split("#");

       		 var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";

       		 var res = str.split("#");

       		 for( var i = 1 ; i< res.length; i++)

       		 {

       		 Material = res[i];

       		 Material = Material.split(":");

       		 Material = Material[1];

       		 mainArray.push(Material);

       		 }*/
		
		var scannerRes = ScannerOut_M_S_E_B();
		scannerRes = scannerRes.scanMaterials;

       		// sap.ui.getCore().byId("inputMatnrMOB22").setValue(mainArray[0]);
       			var btnSelMat = sap.ui.getCore().byId("btnSelMat"); 
                	btnSelMat.setVisible(false);
                		if(backNavMat=="Mob15CreateNoti") {

                		    if(globalMob15Detail == "Q1") {
                		    	
                		    if	( null == sap.ui.getCore().byId("inputMatnr").getValue() || 
                		    		sap.ui.getCore().byId("inputMatnr").getValue() == "" )
                		    	{
                		    		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
                					sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
                					sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
                					sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
                					sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
                					sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
                		    		
                		    	}
                		    
                		    else if ( sap.ui.getCore().byId("inputMatnr").getValue() !=  scannerRes[0].Material)
                		    	{

                	    		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
                				sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
                				sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
                				sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
                				sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
                				sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
                	    		
                		    	
                		    	}
                		     
                		     else
                		    	 {
                		    	 
                		    	 sap.m.MessageBox.show("This material has already been added",
                						 sap.m.MessageBox.Icon.ERROR,
                							"Error"
                						 );
                		    	 }
                					
                					
                				}
                		    else if(globalMob15Detail == "Q3") {
                		    	 if	( null == sap.ui.getCore().byId("inputMatnr2").getValue() || 
                		 	    		sap.ui.getCore().byId("inputMatnr2").getValue() == "" )
                		 	    	{
                					sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
                					sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
                					//sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].B);
                	 				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
                		 	    	}
                		    	 
                		    	 else if ( sap.ui.getCore().byId("inputMatnr2").getValue() !=  scannerRes[0].Material)
                		    		 {

                						sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
                						sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
                						//sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].B);
                		 				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
                			 	    	
                		    		 }
                		    	 
                		    	 else
                		    		 {

                			    	 
                			    	 sap.m.MessageBox.show("This material has already been added",
                							 sap.m.MessageBox.Icon.ERROR,
                								"Error"
                							 );
                			    	 
                		    		 
                		    		 }
                				}
                				
                				else if(globalMob15Detail == "F2") {
                					
                					 if	( null == sap.ui.getCore().byId("inputMatnr3").getValue() || 
                					    		sap.ui.getCore().byId("inputMatnr3").getValue() == "" )
                					    	{
                					sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
                					sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
                					sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
                	 				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
                	 				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
                	 				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
                					    	}
                					 
                					 else if (  sap.ui.getCore().byId("inputMatnr3").getValue() !=  scannerRes[0].Material )
                						 {

                							sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
                							sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
                							sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
                			 				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
                			 				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
                			 				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
                							    	
                						 
                						 }
                					 
                					 else
                						 {
                						 
                				    	 sap.m.MessageBox.show("This material has already been added",
                								 sap.m.MessageBox.Icon.ERROR,
                									"Error"
                								 );
                						 }
                					
                				}
                				
                				else if(globalMob15Detail == "F3") {
                					
                					 if	( null == sap.ui.getCore().byId("inputMatnr4").getValue() || 
                					    		sap.ui.getCore().byId("inputMatnr4").getValue() == "" )
                					    	{
                					sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
                					sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
                					sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
                	 				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
                	 				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
                	 				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
                					    	}
                					 
                					 else if (   sap.ui.getCore().byId("inputMatnr4").getValue() !=  scannerRes[0].Material )
                						 {
                						 

                							sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
                							sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
                							sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
                			 				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
                			 				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
                			 				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
                							    	
                						 }
                					 
                					 else
                					 {
                					 
                			    	 sap.m.MessageBox.show("This material has already been added",
                							 sap.m.MessageBox.Icon.ERROR,
                								"Error"
                							 );
                					 }
                				}
                	     		
                    		var app = sap.ui.getCore().byId("myApp");  
                            app.to("idMob15Notification");
                    	}
                		else if (backNavMat=="Mob22InsLot")
                			{
                			

                			 if	( null == sap.ui.getCore().byId("inputMatnrMOB22").getValue() || 
           				    		sap.ui.getCore().byId("inputMatnrMOB22").getValue() == "" )
           				    	{
                			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
                			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
                			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
                			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
           				    	}
                			 
                			 else if (    sap.ui.getCore().byId("inputMatnrMOB22").getValue() !=  scannerRes[0].Material )
                				 {
                				 

                     			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
                     			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
                     			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
                     			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
                				    	
                				 
                				 }
                			 
                			 else
                				 {

               				 
               		    	 sap.m.MessageBox.show("This material has already been added",
               						 sap.m.MessageBox.Icon.ERROR,
               							"Error"
               						 );
               				 
                				 
                				 }
                			
                			
                			var app = sap.ui.getCore().byId("myApp");  
                            app.to("idMOB22InitView");
                			
                			}
                		
                		else if (backNavMat == "idMOB21Mas")
                			{
                			
                			var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
                			
                			var txt = sap.ui.getCore().byId("oListItemMat");
                			
                			txt.setDescription(scannerRes[0].Material);
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

                 			//osearch_material_1
                 			 if	( null == sap.ui.getCore().byId("osearch_material_1").getValue() || 
            				    		sap.ui.getCore().byId("osearch_material_1").getValue() == "" )
            				    	{
              			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
              			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
              			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
              			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
            				    	}
              			 
              			 else if (    sap.ui.getCore().byId("osearch_material_1").getValue() !=  scannerRes[0].Material )
              				 {
              				 

                   			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
                   			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
                   			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
                   			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
              				    	
              				 
              				 }
              			 
              			 else
              				 {

             				 
             		    	 sap.m.MessageBox.show("This material has already been added",
             						 sap.m.MessageBox.Icon.ERROR,
             							"Error"
             						 );
             				 
              				 
              				 }	
                 		//var app = sap.ui.getCore().byId("myApp");  
                        // app.to("idMob29MaterialView");
                 		
                		var app = sap.ui.getCore().byId("myApp");  
                        app.to("idMob29MaterialView");
                		}
                		else if (backNavMat = "MOB28")
             			{
                 			//osearch_material_1
                			 if	( null == sap.ui.getCore().byId("ip_matNumMOB28").getValue() || 
            				    		sap.ui.getCore().byId("ip_matNumMOB28").getValue() == "" )
            				    	{
             			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
             			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
             			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
             			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
            				    	}
             			 
             			 else if (    sap.ui.getCore().byId("ip_matNumMOB28").getValue() !=  scannerRes[0].Material )
             				 {
             				 

                  			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
                  			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
                  			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
                  			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
             				    	
             				 
             				 }
             			 
             			 else
             				 {

            				 
            		    	 sap.m.MessageBox.show("This material has already been added",
            						 sap.m.MessageBox.Icon.ERROR,
            							"Error"
            						 );
            				 
             				 
             				 }	
                		//var app = sap.ui.getCore().byId("myApp");  
                       // app.to("idMob29MaterialView");
                		}
                	
                		else {
                		
                    		var app = sap.ui.getCore().byId("myApp");  
                            app.to("idGridSubMenuQM");
                    	}
                	
               /* }, 
       	

       		 function(error){

       		 sap.m.MessageBox.show("Scan failed: " + error);

       		 errorText = error;

       		 }); */

	} ,
	
	scanNow : function ()
	{
		
		//alert(sap.ui.getCore().byId("scannerMOB00").getSelectedKey())
		
	if ( sap.ui.getCore().byId("scannerMOB00").getSelectedKey() == "BLU")
		{
		
		sap.ui.getCore().byId("BTSCAN").setValue("");
		var scanDialog = sap.ui.getCore().byId("SCANDIAL");
		scanDialog.open();
		
		setTimeout(function(){
    		$('#BTSCAN-inner').focus(); //Setting Focus
    	}, 1000);
		}
	
	else
		{
     	 
		var jsonScanResult = ScannerOut_M_S_E_B();//  
		//var jsonScanResult =  $.when(ScannerOut_M_S_E_B());//  
		//var scanRes = $.when(scanBarcode());
		//var deferred = $.Deferred(); //Defferred Method is declared..scanMaterials[0];
		//var jsonScanResultDUMMY = ScannerOut_M_S_E_B().scanMaterials[0];
		//alert(jsonScanResult);
		jsonScanResult.done(function(results){
	    var scannerRes = results.scanMaterials;
	
	    
	    var btnSelMat = sap.ui.getCore().byId("btnSelMat"); 
     	btnSelMat.setVisible(false);
     	
     	if ( varScan == "MOB03COMP")
 		{
 		
     	 sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue(scannerRes[0].Serial);
		 if	( null == sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() || 
		    		sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue(scannerRes[0].Material);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() !=  scannerRes[0].Material )
			 {
			 

			sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This material has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	else if ( varScan == "MOB01EQT")
     		{
     		

			 if	( null == sap.ui.getCore().byId("MOB01EQT").getValue() || 
			    		sap.ui.getCore().byId("MOB01EQT").getValue() == "" )
			    	{
				
			sap.ui.getCore().byId("MOB01EQT").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB01EQT").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	}
			 
			 else if (    sap.ui.getCore().byId("MOB01EQT").getValue() !=  scannerRes[0].E )
				 {
				 

 			sap.ui.getCore().byId("MOB01EQT").setValue(scannerRes[0].E);
 			sap.ui.getCore().byId("MOB01EQT").setValueState(sap.ui.core.ValueState.None);
 			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
 			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
				    	
				 
				 }
			 
			 else
				 {

			 
	    	/* sap.m.MessageBox.show("This Equipment has already been added",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );*/
				 }
				
			 
     		}
     	
     	else if ( varScan == "MOB01EQD")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB01EQD").getValue() || 
		    		sap.ui.getCore().byId("MOB01EQD").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB01EQD").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB01EQD").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB01EQD").getValue() !=  scannerRes[0].E )
			 {
			 

			sap.ui.getCore().byId("MOB01EQD").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB01EQD").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	
     	/******************/
     	else if ( varScan == "MOB07EQT")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB07EQT").getValue() || 
		    		sap.ui.getCore().byId("MOB07EQT").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB07EQT").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB07EQT").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB07EQT").getValue() !=  scannerRes[0].E )
			 {
			 

			sap.ui.getCore().byId("MOB07EQT").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB07EQT").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	else if ( varScan == "MOB07EQD")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB07EQD").getValue() || 
		    		sap.ui.getCore().byId("MOB07EQD").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB07EQD").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB07EQD").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB07EQD").getValue() !=  scannerRes[0].E )
			 {
			 

			sap.ui.getCore().byId("MOB07EQD").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB07EQD").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	
     	/*********************/
 		else if ( varScan == "MOB33EQD")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB33EQD").getValue() || 
		    		sap.ui.getCore().byId("MOB33EQD").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB33EQD").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB33EQD").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB33EQD").getValue() !=  scannerRes[0].Material )
			 {
			 

			sap.ui.getCore().byId("MOB33EQD").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB33EQD").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	
 		else if ( varScan == "MOB33EQT")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB33EQT").getValue() || 
		    		sap.ui.getCore().byId("MOB33EQT").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB33EQT").getValue() !=  scannerRes[0].Material )
			 {
			 

			sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
 		else if ( varScan == "MOB33EQT")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB33EQT").getValue() || 
		    		sap.ui.getCore().byId("MOB33EQT").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB33EQT").getValue() !=  scannerRes[0].Material )
			 {
			 

			sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

		 
    	/* sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
 		else if ( varScan == "MOB33EQT")
 		{
 		

		 if	( null == sap.ui.getCore().byId("MOB33EQT").getValue() || 
		    		sap.ui.getCore().byId("MOB33EQT").getValue() == "" )
		    	{
			
		sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
		sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("MOB33EQT").getValue() !=  scannerRes[0].Material )
			 {
			 

			sap.ui.getCore().byId("MOB33EQT").setValue(scannerRes[0].E);
			sap.ui.getCore().byId("MOB33EQT").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	
			 
			 }
		 
		 else
			 {

	/*	 
    	 sap.m.MessageBox.show("This equipment has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );*/
			 }
			
		 
 		}
     	
     	
 		
     	
     	else if (varScan =="MOB28" )
   		{

			
			if ( MOB28SCANVAL  == "MAT")
				{
			 if	( null == sap.ui.getCore().byId("ip_matNumMOB28").getValue() || 
			    		sap.ui.getCore().byId("ip_matNumMOB28").getValue() == "" )
			    	{
				
			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
			    	}
			 
			 else if (    sap.ui.getCore().byId("ip_matNumMOB28").getValue() !=  scannerRes[0].Material )
				 {
				 

			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
				    	
				 
				 }
			 
			 else
				 {

			 
	    	 sap.m.MessageBox.show("This material has already been added",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
				 }
				}
			 
			 else
				 {
				  var binData = scannerRes[0].BinWM ;
				  var storageType = binData.substring(3,6);
				  var bin = binData.substring(6);
				//  alert(storageType);
				  sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(true);
				  sap.ui.getCore().byId("ddstotypeMOB28").setSelectedKey(storageType);
				  sap.ui.getCore().byId("ip_sto_bin").setValue(bin);
				  
				  
				 
				 }
			 
				 
				 
   		}
   	
    	else if (varScan == "MOB35")
			{
 			//osearch_material_1
 		
 			if ( MOB35SCANVAL  == "MAT")
 				{
			 if	( null == sap.ui.getCore().byId("MOB35_matInput").getValue() || 
			    		sap.ui.getCore().byId("MOB35_matInput").getValue() == "" )
			    	{
			sap.ui.getCore().byId("MOB35_matInput").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
			var batch = scannerRes[0].Batch;
			sap.ui.getCore().byId("MOB35_batchInput").setValue(batch);
			sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
			
			sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
			sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
			 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
			validateMATNUMAccess =  "MOB35";
		sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		validateMatNum(sap.ui.getCore().byId("MOB35_matInput").getValue().trim());
		//sap.ui.getCore().byId("MOB35_serialInput").setValue("");
			    	}
			 
			 else if (    sap.ui.getCore().byId("MOB35_matInput").getValue().trim() !=  scannerRes[0].Material )
				 {
	 			sap.ui.getCore().byId("MOB35_matInput").setValue(scannerRes[0].Material);
	 			sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
	 			sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	 			sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.Error);
	 			sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	 			sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
	 			sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
				 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	 			validateMATNUMAccess =  "MOB35";
			sap.ui.getCore().byId("idMob24MaterialSearch").getController().
			validateMatNum(sap.ui.getCore().byId("MOB35_matInput").getValue().trim());
			/*var mainArr = [];
			mainArr = {
				"resultsMOB35Ser" : array
			};
			var oJSONModelMob35Res = new sap.ui.model.json.JSONModel();
			oJSONModelMob35Res.setData(mainArr);

			// sap.ui.getCore().byId("oResponsivePopover").close(this);
			// sap.ui.getCore().byId("oResponsivePopover").openBy(this);
			this.popover = sap.ui.getCore().byId(
					"oResponsivePopoverMOB35");
			this.popover.openBy(oEvent.getSource());
			sap.ui.getCore().byId("oResponsivePopoverListMOB35")
					.setModel(oJSONModelMob35Res);*/
			//sap.ui.getCore().byId("MOB35_serialInput").setValue("");
					    	}
			 
			 else
				 {

			 
	    	 sap.m.MessageBox.show("This material has already been added",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
				 }
 				}
			 
 			else if ( MOB35SCANVAL  == "BIN")
				 {
				  var binData = scannerRes[0].BinWM ;
				  var bin = binData.substring(6);
				  sap.ui.getCore().byId("MOB35_binInput").setValue(bin);
				 }
 			else if ( MOB35SCANVAL  == "SER")
			 {
 				if (sap.ui.getCore().byId("MOB35_matInput").getValue().trim() ==  scannerRes[0].Material ){
	   				  //sap.ui.getCore().byId("MOB35_binInput").setValue(scannerRes[0].Serial);
	   				  sap.ui.getCore().byId("Mob35-popWin").close();
 				  sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
 				  sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
 				  sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
 				  sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
 				  sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount").addSerialMOB35();
 				 
				 }
   				 
			    else
			    	{
			    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
			    	}
				 }	
			}
   	else if (varScan == "Mob27" ){
 		//osearch_material_1
 		
			if ( Mob27scan == "Material")
				{
		 if	( null == sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() || 
		    		sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() == "" )
		    	{
		sap.ui.getCore().byId("Mob27-queue-MatInput").setValue(scannerRes[0].Material);
		sap.ui.getCore().byId("Mob27-queue-MatInput").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	//	sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	//	sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() !=  scannerRes[0].Material )
			 {
 			sap.ui.getCore().byId("Mob27-queue-MatInput").setValue(scannerRes[0].Material);
 			sap.ui.getCore().byId("Mob27-queue-MatInput").setValueState(sap.ui.core.ValueState.None);
 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
 			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
 			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
				    	}
		 
		 else
			 {

		 
    	 sap.m.MessageBox.show("This material has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );
			 }
				}
			else if (Mob27scan == "orderMat"){
				if	( null == sap.ui.getCore().byId("Mob27-order-MatInput").getValue() || 
		    		sap.ui.getCore().byId("Mob27-order-MatInput").getValue() == "" )
		    	{
		sap.ui.getCore().byId("Mob27-order-MatInput").setValue(scannerRes[0].Material);
		sap.ui.getCore().byId("Mob27-order-MatInput").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	//	sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
		//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	//	sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
		    	}
		 
		 else if (    sap.ui.getCore().byId("Mob27-order-MatInput").getValue() !=  scannerRes[0].Material )
			 {
 			sap.ui.getCore().byId("Mob27-order-MatInput").setValue(scannerRes[0].Material);
 			sap.ui.getCore().byId("Mob27-order-MatInput").setValueState(sap.ui.core.ValueState.None);
 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
 			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
 			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
				    	}
		 
		 else
			 {

		 
    	 sap.m.MessageBox.show("This material has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );
			 }
				
			}
		 else if(Mob27scan == "Serial"){
			
		
		
			 var MDesGetText =  sap.ui.getCore().byId("Mob27-queue-lblMatBackValue").getText();
			 MDesGetText = parseInt(MDesGetText);
			 
			 //Check serial with material number
			    if( scannerRes[0].Material == MDesGetText )
			    	{
			    	sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
			        sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
			        sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
			    	}
			    else if( scannerRes[0].Material == null || scannerRes[0].Material == undefined
			    || scannerRes[0].Material == ""	
			    )
			    	{
			    	//alert("No Material Number");
			    	}
			    else
			    	{
			    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
			    	}
				
	
	    
	    	}
		 else if(Mob27scan == "orderSerial"){
			 //Check serial with material number
			 
			 
			 var mat =  sap.ui.getCore().byId("Mob27-order-lblMatBackValue").getText();
			 mat = parseInt(mat);
	    	    if( scannerRes[0].Material == mat){
	    	    	sap.ui.getCore().byId("Mob27-2-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	    	       // sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	    	      //  sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
	    	    	}
	    	    else if( scannerRes[0].Material == null || scannerRes[0].Material == undefined
	    	    || scannerRes[0].Material == ""	
	    	    )
	    	    	{
	    	    	
	    	    	}
	    	    else
	    	    	{
	    	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
	    			sap.m.MessageBox.Icon.ERROR,"Error");
	    	    	}
		 }
	   
		 else if(Mob27scan == "orderBatch"){
			 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob27-order-MatInput").getText() )
		    	{
		    	sap.ui.getCore().byId("Mob27-order-BatInput").setValue(scannerRes[0].Batch);
		        sap.ui.getCore().byId("Mob27-order-BatInput").setValueState(sap.ui.core.ValueState.None);
		       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
		        //sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
		    	}
		    else
		    	{
		    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		    	}
		 }
		 else if (Mob27scan == "Batch"){
			 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob27-queue-MatInput").getText() )
		    	{
		    	sap.ui.getCore().byId("Mob27-queue-BatInput").setValue(scannerRes[0].Batch);
		        sap.ui.getCore().byId("Mob27-queue-BatInput").setValueState(sap.ui.core.ValueState.None);
		       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
		        //sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
		    	}
		    else
		    	{
		    	sap.m.MessageBox.show("Batch number not matched with material number" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");
		    	}
		 }
		 else if(Mob27scan == "orderBin"){
			  var binData = scannerRes[0].BinWM ;
			  var bin = binData.substring(6);
			  sap.ui.getCore().byId("Mob27-order-DestInput").setValue(bin);
		 }
			 
		else if (Mob27scan == "Bin")
			 {
			  var binData = scannerRes[0].BinWM ;
			  var bin = binData.substring(6);
			  sap.ui.getCore().byId("Mob27-queue-DestInput").setValue(bin);
			//sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
			 }
	}
	else if (varScan == "Mob19Goods" ){
		 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob19-thrdScr-txtMat").getText() )
	    	{
	    	sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	        sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	        sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);	
	    	}
	    else
	    	{
	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
			sap.m.MessageBox.Icon.ERROR,"Error");
	    	}
	}
	else if (varScan == "Mob30Matmaster" ){
		if(Mob30scan == "Serial"){
			
		
		 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() )
	    	{
	    	sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	        sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
	        sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
	    	}
	    else
	    	{
	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
			sap.m.MessageBox.Icon.ERROR,"Error");
	    	}
		}
		else if (Mob30scan == "Bin")
			 {
			  var binData = scannerRes[0].BinWM ;
			  var bin = binData.substring(6);
			  sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").setValue(bin);
			sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
			 }
	}
	else if (varScan == "Mob26Master" ){
	if(	Mob26scan == "TO"){
		var trLine;
		

	            var str = scannerRes[0].TO;//"00000010600001NP1";
	            var tr = str.substr(0, 10);
	            var lin = str.substr(10,4 );
                trLine= tr + "." + lin;
                sap.ui.getCore().byId("Mob26-ipTrOrder").setValue(trLine);
               
	            
	            }
	
	else if(Mob26scan == "Bin"){
		 var binData = scannerRes[0].BinWM ;
			  var bin = binData.substring(6);
            sap.ui.getCore().byId("Mob26-ipStrBin").setValue(bin);
            
           
	}	
	else if(Mob26scan == "Serial"){
		 if( scannerRes[0].Material == Mob26getSerDocJSONArray[0].Material )
	    	{
	    	sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	        sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	        sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(true);	
	    	}
	    else if( scannerRes[0].Material == null ||scannerRes[0].Material == undefined
	    || scannerRes[0].Material == ""	
	    )
	    	{
	    	
	    	}
	    else
	    	{
	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
			sap.m.MessageBox.Icon.ERROR,"Error");
	    	}
	    
		}
	
		
	}
   	else if (varScan == "Mob23Matmaster" )
		{

		//osearch_material_1
	
		
	 if	( null == sap.ui.getCore().byId("inputItem").getValue() || 
	    		sap.ui.getCore().byId("inputItem").getValue() == "" )
	    	{
	sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
	sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
	//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
	//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
	    	}
	 
	 else if (    sap.ui.getCore().byId("inputItem").getValue() !=  scannerRes[0].Material )
		 {
			sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
			    	}
	 
	 else
		 {

	 
	 sap.m.MessageBox.show("This material has already been added",
			 sap.m.MessageBox.Icon.ERROR,
				"Error"
			 );
		 }
			}
 	else if (varScan == "Mob17Matmaster" )
		{

		//osearch_material_1
	
 	 
		
    	//	if ( Mob17scan  == "Material")
		//		{
				
    			
		if	( null == sap.ui.getCore().byId("inputMatNo").getValue() || 
		    		sap.ui.getCore().byId("inputMatNo").getValue() == "" )
		    	{
		//sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
		//sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
		sap.ui.getCore().byId("inputBatch").setValue(scannerRes[0].Batch);
		sap.ui.getCore().byId("inputBatch").setValueState(sap.ui.core.ValueState.None);
		sap.ui.getCore().byId("inputSerial").setValue(scannerRes[0].Serial);
		sap.ui.getCore().byId("inputSerial").setValueState(sap.ui.core.ValueState.None);
		
		
		var selMatNo = scannerRes[0].Material;
		var serial =  scannerRes[0].Serial;
		openSplashScreen();// Open splash screen
		
		
		
		 //Adding the material to the list
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		
		//var inputMatNo = sap.ui.getCore().byId("inputMatNo");
		
		var matNo = selMatNo; //Passing Selected Material No
		
		var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
		 if ( demo) {
			 if(matNo.trim().length==0) {
				 return;
			 }
			 
			 if(oModel==undefined) {
			 var aData1 = [
				  			{"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []}
				  			];
				oModel = new sap.ui.model.json.JSONModel();
				
				oModel.setData({modelData: aData1});
				tabMaterialLst.setModel(oModel);
			 }else {
				 var arrMatLst = oModel.oData.modelData;
				 var objMaterial = {"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []};
				 
				 var isExisting = isMaterialExisting1(oModel, matNo, serial);//Check material already added
				 
				 if(isExisting==true) {
					 var isSerialExist = false;
					 
					 var tabModelData = oModel.oData.modelData;
						for(var i=0;i<tabModelData.length;i++) {
							if(matNo == tabModelData[i].Material) {
								if(typeof tabModelData[i].Serial != "undefined") {
									for(var j=0;j<tabModelData[i].Serial.length;j++) {
										if(tabModelData[i].Serial[j].trim() == serial) {
											isExisting = true;
											break;
										}
									}		
									if(isSerialExist) {
										var errMsg = "Material No: " + matNo + " Already Added";
										sap.m.MessageBox.show(
												 errMsg,
													sap.m.MessageBox.Icon.ERROR,"Error");
									}
									else{
										addSerial1(serial);
									}
								}else {
									addSerial1(serial);
								}
							}
						}
					 closeSplashScreen();
					 
				}else {
				 
					arrMatLst.push(objMaterial);
	  				var oModel2 = new sap.ui.model.json.JSONModel();
					oModel2.setData({modelData: arrMatLst});
					tabMaterialLst.setModel(oModel2);
				}
			 }
			 
			 sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
			 sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
			 
			 if ( g_runningOnPhone == true)
				{
					var myApp = sap.ui.getCore().byId("myApp");
					myApp.to("idMaterialList");
				}else {
					var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
					splitAppMOB17.toDetail("idMaterialFullDetPage");
				}
				closeSplashScreen();
				
				 return;
		
		 }
		 var JSONMaterial = null;
			
		 JSONMaterial = searchMaterialNo(matNo); //Calling com.cg.gtm.view.MaterialSearchDetail
			
		 	var errMsg = "";

			if(JSONMaterial.results.length==0) {
				errMsg = "Material No: " + matNo + " Not Existing";
			}
			
			if(matNo.trim().length==0) {//Check for material entered by user
				errMsg = "Please enter value for Material Number";
			}else {
				var isExisting = isMaterialExisting1(oModel, matNo,serial);//Check material already added
				
				

				if(isExisting==true) {

					var isSerialExist = false;
					 
					 var tabModelData = oModel.oData.modelData;
						for(var i=0;i<tabModelData.length;i++) {
							if(matNo == tabModelData[i].Material) {
								if(typeof tabModelData[i].SerialLst != "undefined") {
									for(var j=0;j<tabModelData[i].SerialLst.length;j++) {
										if(tabModelData[i].Serial == serial)  {
											isExisting = true;
											break;
										}
									}		
									if(isSerialExist) {
										errMsg = "Material No: " + matNo + " Already Added";
									}
									else{
										addSerial1(serial);
										errMsg = "";
									}
								}else {
									if(serial.length > 0) {
										addSerial1(serial);
									}else { //Material Existing & Serial Empty
										errMsg = "Material No: " + matNo + " Already Added";
									}
								}
							}
						}

					
				}else {
					
					if(JSONMaterial.results.length > 1) {
						var multiEntry = isMultiMaterialExist(JSONMaterial, matNo);
						if(multiEntry == true) {
							errMsg = "This Material No: " + matNo + " is having multiple records to select.\nPlease choose from Material Search Option.";
						}
					}
				}
			}
			
				
			if(errMsg.length > 0) {
				
				closeSplashScreen();
				
				 sap.m.MessageBox.show(
						 errMsg,
							sap.m.MessageBox.Icon.ERROR,"Error");
			}
			else {
				
				if(isExisting) {
					return;
				}
				
				var materialResult = JSONMaterial.results[0];
				
				
				if(oModel==undefined) {
					if(materialResult.VendorName.length>0) {
						sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
					}
					
					sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
					
					sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
					sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
					
					var isSerial = true;
					var isBatch = true;
					var isSplitValuated = true;
					
					
					
					if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
						sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
					}else {
						sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
					}
					
					if(materialResult.Batchmanaged=="No") {
						isBatch = false;
					}else {
						sap.ui.getCore().byId("lblBatch").setText("Batch");
					}
					
					if(materialResult.Batchmanaged=="Yes" || materialResult.Splitvaluated=="Yes") {
						isBatch = true;
						sap.ui.getCore().byId("lblBatch").setVisible(true);
						sap.ui.getCore().byId("inputBatch").setVisible(true);
					}else {
						isBatch = false;
						sap.ui.getCore().byId("lblBatch").setVisible(false);
						sap.ui.getCore().byId("inputBatch").setVisible(false);
					}
					
					if(materialResult.Splitvaluated=="No") {
						isSplitValuated = false;
					}else {
						sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
					}
					
					
					
					
					if(materialResult.Serialized=="No") {
						isSerial = false;
						sap.ui.getCore().byId("imgShowSerials").setVisible(false);
						sap.ui.getCore().byId("inputSerial").setVisible(false);
						sap.ui.getCore().byId("lblSerial").setVisible(false);
					}else {
						sap.ui.getCore().byId("imgShowSerials").setVisible(true);
						sap.ui.getCore().byId("inputSerial").setVisible(true);
						sap.ui.getCore().byId("lblSerial").setVisible(true);
					}
					
					sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
					sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
					
					sap.ui.getCore().byId("lblErr").setVisible(false);
					sap.ui.getCore().byId("lblErrVal").setVisible(false);
					
					var aData1 = [
					  			{"Material": materialResult.Materialno, "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []}
					  			];
					oModel = new sap.ui.model.json.JSONModel();
					
					oModel.setData({modelData: aData1});
					tabMaterialLst.setModel(oModel);
				} else {
					if(materialResult.VendorName.length>0) {
						sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
					}
					
					sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
					
					sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
					sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
					
					var isSerial = true;
					var isBatch = true;
					var isSplitValuated = true;
					
					
					if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
						sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
					}else {
						sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
					}
					
					if(materialResult.Batchmanaged=="No") {
						isBatch = false;
					}else {
						sap.ui.getCore().byId("lblBatch").setText("Batch");
					}
					
					if(materialResult.Batchmanaged=="Yes" || materialResult.Splitvaluated=="Yes") {
						isBatch = true;
						sap.ui.getCore().byId("lblBatch").setVisible(true);
						sap.ui.getCore().byId("inputBatch").setVisible(true);
					}else {
						isBatch = false;
						sap.ui.getCore().byId("lblBatch").setVisible(false);
						sap.ui.getCore().byId("inputBatch").setVisible(false);
					}
					
					if(materialResult.Splitvaluated=="No") {
						isSplitValuated = false;
					}else {
						sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
					}
					
					
					
					
					if(materialResult.Serialized=="No") {
						isSerial = false;
						sap.ui.getCore().byId("imgShowSerials").setVisible(false);
						sap.ui.getCore().byId("inputSerial").setVisible(false);
						sap.ui.getCore().byId("lblSerial").setVisible(false);
						sap.ui.getCore().byId("inputQty").setValue("");
					}else {
						sap.ui.getCore().byId("imgShowSerials").setVisible(true);
						sap.ui.getCore().byId("inputSerial").setVisible(true);
						sap.ui.getCore().byId("lblSerial").setVisible(true);
					}
					
					
					
					sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
					sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
					
					sap.ui.getCore().byId("lblErr").setVisible(false);
					sap.ui.getCore().byId("lblErrVal").setVisible(false);
					
					//sap.ui.getCore().byId("inputQty").setValue("-");
					
					var arrMatLst = oModel.oData.modelData;
					var objMaterial = {"Material": materialResult.Materialno, "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []};
					arrMatLst.push(objMaterial);
					
					var oModel2 = new sap.ui.model.json.JSONModel();
					
					oModel2.setData({modelData: arrMatLst});
					tabMaterialLst.setModel(oModel2);
				}
				
		    	
			if ( g_runningOnPhone == true)
			{
				var myApp = sap.ui.getCore().byId("myApp");
				myApp.to("idMaterialList");
			}else {
				var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
				splitAppMOB17.toDetail("idMaterialFullDetPage");
			}
		    	}
			validateMaterialList1(); //Validate and set the status for Material List
			
			var tabSerialLst = sap.ui.getCore().byId("tblSerial");
			var oModel = tabSerialLst.getModel();
			var aData1 = [];
				
			oModel = new sap.ui.model.json.JSONModel();
				
			oModel.setData({modelData: aData1});
			tabSerialLst.setModel(oModel);
			
			sap.ui.getCore().byId("inputBatch").setValue(""); //Clear Batch Field
			
			
			//setSelectedIndexForMatTable();
			closeSplashScreen();
			
		    	}
		 
		 else if (    sap.ui.getCore().byId("inputMatNo").getValue() !=  scannerRes[0].Material )
			 {
 			sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
 			sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
 			sap.ui.getCore().byId("inputBatch").setValue(scannerRes[0].Batch);
 			sap.ui.getCore().byId("inputBatch").setValueState(sap.ui.core.ValueState.None);
 			sap.ui.getCore().byId("inputSerial").setValue(scannerRes[0].Serial);
 			sap.ui.getCore().byId("inputSerial").setValueState(sap.ui.core.ValueState.None);
 			//Add Serial Numbers
 		
			 }
		 else
			 {

		 
    	 sap.m.MessageBox.show("This material has already been added",
				 sap.m.MessageBox.Icon.ERROR,
					"Error"
				 );
			 }
 		//}
		
	// else if (Mob17scan = "Serial")
	// {
			
			
				    //	}
	 
		}
	else if (varScan == "Mob18Matmaster" )
		{
		 
		//osearch_material_1
		if	( null == sap.ui.getCore().byId("inputMatNo_ser").getValue() || 
	    		sap.ui.getCore().byId("inputMatNo_ser").getValue() == "" )
	    	{
	//sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
	//sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
	sap.ui.getCore().byId("inputbatch_Scrap").setValue(scannerRes[0].Batch);
	sap.ui.getCore().byId("inputbatch_Scrap").setValueState(sap.ui.core.ValueState.None);
	sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
	sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
	
	
	var selMatNo = scannerRes[0].Material;
	var serial =  scannerRes[0].Serial;
	openSplashScreen();// Open splash screen
	
	
	
	 //Adding the material to the list
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	
	//var inputMatNo = sap.ui.getCore().byId("inputMatNo");
	
	var matNo = selMatNo; //Passing Selected Material No
	
	var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
	 if ( demo) {
		 if(matNo.trim().length==0) {
			 return;
		 }
		 
		 if(oModel==undefined) {
		 var aData1 = [
			  			{"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []}
			  			];
			oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData({modelData: aData1});
			tabMaterialLst.setModel(oModel);
		 }else {
			 var arrMatLst = oModel.oData.modelData;
			 var objMaterial = {"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []};
			 
			 var isExisting = isMaterialExisting1(oModel, matNo, serial);//Check material already added
			 
			 if(isExisting==true) {
				 var isSerialExist = false;
				 
				 var tabModelData = oModel.oData.modelData;
					for(var i=0;i<tabModelData.length;i++) {
						if(matNo == tabModelData[i].Material) {
							if(typeof tabModelData[i].Serial != "undefined") {
								for(var j=0;j<tabModelData[i].Serial.length;j++) {
									if(tabModelData[i].Serial[j].trim() == serial) {
										isExisting = true;
										break;
									}
								}		
								if(isSerialExist) {
									var errMsg = "Material No: " + matNo + " Already Added";
									sap.m.MessageBox.show(
											 errMsg,
												sap.m.MessageBox.Icon.ERROR,"Error");
								}
								else{
									addSerial1(serial);
								}
							}else {
								addSerial1(serial);
							}
						}
					}
				 closeSplashScreen();
				 
			}else {
			 
				arrMatLst.push(objMaterial);
  				var oModel2 = new sap.ui.model.json.JSONModel();
				oModel2.setData({modelData: arrMatLst});
				tabMaterialLst.setModel(oModel2);
			}
		 }
		 
		 sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		 sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		 
		 if ( g_runningOnPhone == true)
			{
				var myApp = sap.ui.getCore().byId("myApp");
				myApp.to("idMaterialList");
			}else {
				var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
				splitAppMOB17.toDetail("idMaterialFullDetPage");
			}
			closeSplashScreen();
			
			 return;
	
	 }
	 
	 //Desktop
	 var JSONMaterial = null;
		
	 JSONMaterial = searchMaterialNo(matNo); //Calling com.cg.gtm.view.MaterialSearchDetail
		
	 	var errMsg = "";

		if(JSONMaterial.results.length==0) {
			errMsg = "Material No: " + matNo + " Not Existing";
		}
		
		if(matNo.trim().length==0) {//Check for material entered by user
			errMsg = "Please enter value for Material Number";
		}else {
			/*if(oModel.oData.modeldata.length==0){
				var valSerial = sap.ui.getCore().byId("inputSerial_scrap");
				 mob18addSerial(valSerial.getValue()); //Adding Serial
			}
			else{
				var isExisting = isMaterialExisting(oModel, matNo);//Check material already added
			}*/
			
			var isExisting = isMaterialExisting(oModel, matNo);//Check material already added
			
			
			
			
			if(isExisting==true) {

				var isSerialExist = false;
				 
				 var tabModelData = oModel.oData.modelData;
					for(var i=0;i<tabModelData.length;i++) {
						if(matNo == tabModelData[i].Material) {
							if(typeof tabModelData[i].SerialLst != "undefined") {
								for(var j=0;j<tabModelData[i].SerialLst.length;j++) {
									if(tabModelData[i].Serial == serial)  {
										isExisting = true;
										break;
									}
								}		
								if(isSerialExist) {
									errMsg = "Material No: " + matNo + " Already Added";
								}
								else{
									mob18addSerial(serial);
									errMsg = "";
								}
							}else {
								if(serial.length > 0) {
									mob18addSerial(serial);
								}else { //Material Existing & Serial Empty
									errMsg = "Material No: " + matNo + " Already Added";
								}
							}
						}
					}

				
			}
			

			else {
				
				if(JSONMaterial.results.length > 1) {
					var multiEntry = isMultiMaterialExist(JSONMaterial, matNo);

					if(multiEntry == true) {
						errMsg = "This Material No: " + matNo + " is having multiple records to select.\nPlease choose from Material Search Option.";
					}
				}
			}
		}
		
			
		if(errMsg.length > 0) {
			
			closeSplashScreen();
			
			 sap.m.MessageBox.show(
					 errMsg,
						sap.m.MessageBox.Icon.ERROR,"Error");
		}
		else {
			
			if(isExisting) {
				return;
			}
			
			
			var materialResult = JSONMaterial.results[0];
			
			
			if(oModel==undefined) {
				//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
				
				//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
				
				sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
				//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
				
				var isSerial = true;
				var isBatch = true;
				var isSplitValuated = true;
				
				if(materialResult.Batchmanaged=="No") {
					isBatch = false;
					sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
				}else {
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
				}
				
				if(materialResult.Serialized=="No") {
					isSerial = false;
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}else {
					sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
					sap.ui.getCore().byId("idSerial").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
					else{
						sap.ui.getCore().byId("idscanserial").setVisible(false)
					}
					//sap.ui.getCore().byId("idscanserial").setVisible(true);
				}
				
				if(materialResult.Splitvaluated=="No") {
					isSplitValuated = false;
				}
				
			//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
			//	sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
				
				var aData1 = [
				  			{"Material": materialResult.Materialno,Batch: "", "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "-", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []}
				  			];
				oModel = new sap.ui.model.json.JSONModel();
				
				oModel.setData({modelData: aData1});
				tabMaterialLst.setModel(oModel);
			} else {
				//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
				
				//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
				
				sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
				//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
				
				var isSerial = true;
				var isBatch = true;
				var isSplitValuated = true;
				
				if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}
				
				if(materialResult.Batchmanaged=="No") {
					isBatch = false;
					sap.ui.getCore().byId("idBatch").setVisible(false);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
				}else {
					sap.ui.getCore().byId("idBatch").setVisible(true);
					sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(false);
				
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}
				
				if(materialResult.Serialized=="No") {
					isSerial = false;
					sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
					sap.ui.getCore().byId("idSerial").setVisible(false);
					sap.ui.getCore().byId("idscan").setVisible(false);
					
					sap.ui.getCore().byId("idscanserial").setVisible(false);
				}else {
					sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
					sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
					sap.ui.getCore().byId("idSerial").setVisible(true);
					sap.ui.getCore().byId("idscan").setVisible(true);
					if ( g_runningInTablet == true || g_runningOnPhone == true)
					  {
						 sap.ui.getCore().byId("idscanserial").setVisible(true)
					  }
				}
				
				if(materialResult.Splitvaluated=="No") {
					isSplitValuated = false;
				}
				
				sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
				sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
				
				
				sap.ui.getCore().byId("lblErr1").setVisible(false);
				sap.ui.getCore().byId("lblErrVal1").setVisible(false);
				
				sap.ui.getCore().byId("inputQty_Scrap").setValue("");
				
				var arrMatLst = oModel.oData.modelData;
				var objMaterial = {"Material": materialResult.Materialno, "Description": materialResult.Description,Batch: "", "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []};
				arrMatLst.push(objMaterial);
				
				var oModel2 = new sap.ui.model.json.JSONModel();
				
				oModel2.setData({modelData: arrMatLst});
				tabMaterialLst.setModel(oModel2);
			}
			
			/*
			 * Navigating to detail page - Start
			 */
			 if ( g_runningOnPhone == true)
         	 {
				 g_MobileNavigationId = "Mob18_scrapitems";
         	 var app = sap.ui.getCore().byId("myApp").to("idMob18Scrappage");
         	 }
			 else{
				 g_navbutton = "backScrapdetails";
				 var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
					idMOB18SplitApp.toDetail("idMOB18SplitScrap");  
					//  $("#idMob18Scrapdetpage").hide()
			 }
			
			 // showidMob18first_Scrap();
				//hideidMob18second_Scrap();//navigate to detail split screen
			
			/*
			 * Navigating to detail page - End
			 */
		}
		
		Mob18validateMaterial();  //Validate and set the status for Material List
		

		/*
		 * Clear Serial List - Start
		 */
		var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
		var oModel = tabSerialLst.getModel();
		var aData1 = [];
			
		oModel = new sap.ui.model.json.JSONModel();
			
		oModel.setData({modelData: aData1});
		tabSerialLst.setModel(oModel);
	
		/*
		 * Clear Serial List - End
		 */
		
		sap.ui.getCore().byId("inputbatch_Scrap").setValue(""); //Clear Batch Field
		
		//setSelectedIndexForMatTable_scrap(); 
		closeSplashScreen();
		
	    	}
	 
	 else if (    sap.ui.getCore().byId("inputMatNo_ser").getValue() !=  scannerRes[0].Material )
		 {
			sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("inputbatch_Scrap").setValue(scannerRes[0].Batch);
		sap.ui.getCore().byId("inputbatch_Scrap").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
			sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
			//Add Serial Numbers
		
		 }
	 else
		 {

	 
	 sap.m.MessageBox.show("This material has already been added",
			 sap.m.MessageBox.Icon.ERROR,
				"Error"
			 );
		 }
	
		/*	if ( Mob18Scan == "Material")
				{
	 if	( null == sap.ui.getCore().byId("inputMatNo_ser").getValue() || 
	    		sap.ui.getCore().byId("inputMatNo_ser").getValue() == "" )
	    	{
	sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
	sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
	//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
	
	    	}
	 
	 else if (    sap.ui.getCore().byId("inputMatNo_ser").getValue() !=  scannerRes[0].Material )
		 {
			sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
			
			    	}
	 
	 else
		 {

	 
	 sap.m.MessageBox.show("This material has already been added",
			 sap.m.MessageBox.Icon.ERROR,
				"Error"
			 );
		 } 
			}
			else if (  Mob18Scan == "Serial")
				{
				sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
				sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
				}*/
		}



	else if(varScan =="Mob15CreateNoti") {
			  	    if(globalMob15Detail == "Q1") {
			  	    	
			  	    if	( null == sap.ui.getCore().byId("inputMatnr").getValue() || 
			  	    		sap.ui.getCore().byId("inputMatnr").getValue() == "" )
			  	    	{
			  	    		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
			  				sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
			  				sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
			  				sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
			  				
			  				   sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  					validateMATNUMAccess = "MOB15-CustComp";
			  					
			  					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
								validateMatNum(sap.ui.getCore().byId("inputMatnr").getValue());

				  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr").getValue());//SerialBatch Validation

			  					//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
			  	    	}
			  	    
			  	  else if ( sap.ui.getCore().byId("inputMatnr").getValue() !=  scannerRes[0].Material)
		  	    	{

		      		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
		  			sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
		  			sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
		  			sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
		  			sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
		  			sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
		  			
		  			   sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		  				validateMATNUMAccess = "MOB15-CustComp";

		  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
						validateMatNum(sap.ui.getCore().byId("inputMatnr").getValue());

		  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr").getValue());//SerialBatch Validation

		  				
		  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		  	    	
		  	    	}
			  	     
			  	     else
			  	    	 {
			  	    	 
			  	    	 sap.m.MessageBox.show("This material has already been added",
			  					 sap.m.MessageBox.Icon.ERROR,
			  						"Error"
			  					 );
			  	    	 }
			  	 
			  				
			  			}
			  	  else if(globalMob15Detail == "Q3") {
			  	    	 if	( null == sap.ui.getCore().byId("inputMatnr2").getValue() || 
			  	 	    		sap.ui.getCore().byId("inputMatnr2").getValue() == "" )
			  	 	    	{
			  				sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
			  				sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("ip_SerialNoQ3").setValue(scannerRes[0].Serial);
			  				sap.ui.getCore().byId("ip_SerialNoQ3").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("ip_BatNoQ3").setValue(scannerRes[0].Batch);
			   				sap.ui.getCore().byId("ip_BatNoQ3").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  				validateMATNUMAccess = "MOB15-CustComp";
			  				
			  				
			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
							validateMatNum(sap.ui.getCore().byId("inputMatnr2").getValue());

			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr2").getValue());//SerialBatch Validation
			  				
			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
			  				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
			  	 	    	}
			  	    	 
			  	    	 else if ( sap.ui.getCore().byId("inputMatnr2").getValue() !=  scannerRes[0].Material)
			  	    		 {

			  					sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
			  					sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
			  					//sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].B);
			  	 				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
			  					sap.ui.getCore().byId("ip_SerialNoQ3").setValue(scannerRes[0].Serial);
				  				sap.ui.getCore().byId("ip_SerialNoQ3").setValueState(sap.ui.core.ValueState.None);
			  					sap.ui.getCore().byId("ip_BatNoQ3").setValue(scannerRes[0].Batch);
				   				sap.ui.getCore().byId("ip_BatNoQ3").setValueState(sap.ui.core.ValueState.None);
			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  					validateMATNUMAccess = "MOB15-CustComp";
			  					
			  					
			  					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
								validateMatNum(sap.ui.getCore().byId("inputMatnr2").getValue());

				  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr2").getValue());//SerialBatch Validation
				  				
			  					
			  					//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
			  	    		 }
			  	    	 else
			  	    		 {

			  		    	 
			  		    	 sap.m.MessageBox.show("This material has already been added",
			  						 sap.m.MessageBox.Icon.ERROR,
			  							"Error"
			  						 );
			  		    	 
			  	    		 
			  	    		 }
			  			}
			  			
			  			else if(globalMob15Detail == "F2") {
			  				
			  				 if	( null == sap.ui.getCore().byId("inputMatnr3").getValue() || 
			  				    		sap.ui.getCore().byId("inputMatnr3").getValue() == "" )
			  				    	{
			  				sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
			  				sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
			   				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
			   				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
			   				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
			   				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  				validateMATNUMAccess = "MOB15-CustComp";
			  				
			  				
			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
							validateMatNum(sap.ui.getCore().byId("inputMatnr3").getValue());

			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr3").getValue());//SerialBatch Validation
			  				
			  				
			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
			  				  }
			  				 
			  				 else if (  sap.ui.getCore().byId("inputMatnr3").getValue() !=  scannerRes[0].Material )
			  					 {

			  						sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
			  						sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
			  						sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
			  		 				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
			  		 				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
			  		 				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
			  		 				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  						sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  						validateMATNUMAccess = "MOB15-CustComp";
			  						
			  						
			  						sap.ui.getCore().byId("idMob24MaterialSearch").getController().
									validateMatNum(sap.ui.getCore().byId("inputMatnr3").getValue());

					  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr3").getValue());//SerialBatch Validation
					  				
			  						//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	    	
			  					 
			  					 }
			  				 
			  				 else
			  					 {
			  					 
			  			    	 sap.m.MessageBox.show("This material has already been added",
			  							 sap.m.MessageBox.Icon.ERROR,
			  								"Error"
			  							 );
			  					 }
			  				
			  			}
			  			
			  			else if(globalMob15Detail == "F3") {
			  				
			  				 if	( null == sap.ui.getCore().byId("inputMatnr4").getValue() || 
			  				    		sap.ui.getCore().byId("inputMatnr4").getValue() == "" )
			  				    	{
			  				sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
			  				sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
			  				sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
			   				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
			   				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
			   				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
			   				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  				validateMATNUMAccess = "MOB15-CustComp";
			  				
			  				
			  				
			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
							validateMatNum(sap.ui.getCore().byId("inputMatnr4").getValue());

			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr4").getValue());//SerialBatch Validation
			  				
			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
			  				    	}
			  				 
			  				 else if (   sap.ui.getCore().byId("inputMatnr4").getValue() !=  scannerRes[0].Material )
			  					 {
			  					 

			  						sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
			  						sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
			  						sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
			  		 				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
			  		 				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
			  		 				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
			  		 				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
			  						sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  						validateMATNUMAccess = "MOB15-CustComp";
			  						
			  						
			  						sap.ui.getCore().byId("idMob24MaterialSearch").getController().
									validateMatNum(sap.ui.getCore().byId("inputMatnr4").getValue());

					  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr4").getValue());//SerialBatch Validation
			  						//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);		    	
			  					 }
			  				 
			  				 else
			  				 {
			  				 
			  		    	 sap.m.MessageBox.show("This material has already been added",
			  						 sap.m.MessageBox.Icon.ERROR,
			  							"Error"
			  						 );
			  				 }
			  			}
			       		}
   		else if (varScan=="Mob22InsLot")
   			{
   			 if	( null == sap.ui.getCore().byId("inputMatnrMOB22").getValue() || 
				    		sap.ui.getCore().byId("inputMatnrMOB22").getValue() == "" )
				    	{
   			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
   			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
   			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
   			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
   			sap.ui.getCore().byId("horizontal5").setVisible(true);
				 sap.ui.getCore().byId("batch").setVisible(true);
				 validateMATNUMAccess =  "MOB22";
	     				
				 //sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
				    	}
   			 
   			 else if (    sap.ui.getCore().byId("inputMatnrMOB22").getValue() !=  scannerRes[0].Material )
   				 {
   				 

        			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
        			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
        			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
        			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
        			sap.ui.getCore().byId("horizontal5").setVisible(true);
					 sap.ui.getCore().byId("batch").setVisible(true);    	
					 validateMATNUMAccess =  "MOB22"
		     			
						 //sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
   				 }
   			 
   			 else
   				 {
  		    	 sap.m.MessageBox.show("This material has already been added",
  						 sap.m.MessageBox.Icon.ERROR,
  							"Error"
  						 );
  				 
   				 
   				 }
   			
   			}
   		else if (varScan == "idMOB21Mas")
			{
			
			var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
			
			var txt = sap.ui.getCore().byId("oListItemMat");
			
			txt.setDescription(scannerRes[0].Material);
			txt.setIcon("sap-icon://accept");
			var app = sap.ui.getCore().byId("splitAppInsCreate1");  
	      	app.toMaster("idMOB21Mas");
	      	
	      	var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
			listItem.setVisible(true);
			
		
			var app = sap.ui.getCore().byId("myApp");  
          app.to("idMOB21InitView12");
			}

   		else if (varScan == "Mob29Screen")
   		{
   			debugger;
   			//osearch_material_1
   			 if	( null == sap.ui.getCore().byId("osearch_material_1").getValue() || 
				    		sap.ui.getCore().byId("osearch_material_1").getValue() == "" )
				    	{
			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
			 validateMATNUMAccess =  "MOB29";
			//sap.ui.getCore().byId("idMob24MaterialSearch").getController().
			//validateMatNum(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
			sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
			 
			//serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
			sap.ui.getCore().byId("PrintLabSerBatIp1").setValue(scannerRes[0].Serial);
			sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValue(scannerRes[0].Batch);
			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.None);
				    	}
			 
			 else if (    sap.ui.getCore().byId("osearch_material_1").getValue() !=  scannerRes[0].Material )
				 {
				 

     			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
     			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
     			 validateMATNUMAccess =  "MOB29";
					//sap.ui.getCore().byId("idMob24MaterialSearch").getController().
					//validateMatNum(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
					//serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
     			sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
					sap.ui.getCore().byId("PrintLabSerBatIp1").setValue(scannerRes[0].Serial);
	    			sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None);
	    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValue(scannerRes[0].Batch);
	    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.None);
     			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
     			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
				    	
				 
				 }
			 
			 
			 else
				 {

				 
		    	 sap.m.MessageBox.show("This material has already been added",
						 sap.m.MessageBox.Icon.ERROR,
							"Error"
						 );
				 
				 
				 }	
   		//var app = sap.ui.getCore().byId("myApp");  
          // app.to("idMob29MaterialView");
   		}
   	
   	
   			
   			else if (varScan == "MOB28")
   			{
       			     			
       			if ( MOB28SCANVAL  == "MAT")
       				{
      			 if	( null == sap.ui.getCore().byId("ip_matNumMOB28").getValue() || 
  				    		sap.ui.getCore().byId("ip_matNumMOB28").getValue() == "" )
  				    	{
      				
   			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
   			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
   			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
   			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
  				    	}
   			 
   			 else if (    sap.ui.getCore().byId("ip_matNumMOB28").getValue() !=  scannerRes[0].Material )
   				 {
   				 

        			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
        			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
        			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
        			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
   				    	
   				 
   				 }
   			 
   			 else
   				 {

  				 
  		    	 sap.m.MessageBox.show("This material has already been added",
  						 sap.m.MessageBox.Icon.ERROR,
  							"Error"
  						 );
   				 }
       				}
      			 
      			 else
      				 {
      				  var binData = scannerRes[0].BinWM ;
      				  var storageType = binData.substring(3,6);
      				  var bin = binData.substring(6);
      			//	  alert(storageType);
      				  sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(true);
      				  sap.ui.getCore().byId("ddstotypeMOB28").setSelectedKey(storageType);
      				  sap.ui.getCore().byId("ip_sto_bin").setValue(bin);
      				  
      				  
      				 
      				 }
  				 
   				 
   				 }	
   			
 		
     		else {
     		
         		var app = sap.ui.getCore().byId("myApp");  
                 app.to("idGridSubMenuQM");
         	}
		});
		
		
	}
	    
     	
     }, 

	
	openMatSearch : function()
	{
		var demo = sap.ui.getCore().byId("demoswitch");  
	
		
		//alert(demo.getState());
		
		if (demo.getState() == true)
			
			{
			var oMD24CollectionPlant1 = {"ModelPlant":
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
			
			var modelBind = sap.ui.getCore().byId("listPlants");
			modelBind.setModel(model);
			
			}
		
		else {
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB24:: Service: PlantList Start" ; 
			
		
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
				plantSear = plantSearchHelp(plantSear);
				
				
            	
               }
			
              if( g_isDebug == true)
              {
              //Service End Time
              var logInfo1 = getTimeStamp() +"MOB24:: Service: PlantList Finish" ; 
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
					              var logInfo1 = getTimeStamp() +"MOB24:: Service: PlantList Failed no network" ; 
					              //Log file Service Start and End Time
					              var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					              logFileUpdate(g_ServiceStartEndTime);
					              }
								
								
								}
					
      });
		
		
		}	
		
		
	},
	
	
	
	

});

//remove duplicate json
function removeDuplicates(arrayIn) {
	var a;
	var lengthofRec = (arrayIn.length) - 1 ;

    var arrayOut = [];
  
    	
    		
    		 for (a=0; a < lengthofRec ; a++) {
    			 
    		    			 
    			if (arrayIn[a+1].Materialno != arrayIn[a].Materialno) 
    		        {
    		        	
    		            arrayOut.push(arrayIn[a]);
    		           
    		            //alert(arrayOut[a-1].Materialno);
    		        }
    		    }
    		
    		
 
	var array = [];
	array = {"results" : arrayOut};
	
	 oJSONModelMatSearch = new sap.ui.model.json.JSONModel();  
	 oJSONModelMatSearch.setData(array); 
	 sap.ui.getCore().byId("listMatNo").setModel(oJSONModelMatSearch); 	
    
    
 

}


function hideView_MaterialDetails(){
	$("#idMATSRDetail").hide();
}
function hideView_MaterialDetailsLsit(){
	$("#MaterialSearchDetailPage").hide();
}
function showView_MaterialDetailsLsit(){
	$("#MaterialSearchDetailPage").hide();
}





function plantSearchHelp(aPlantList) {

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
	var modelBind = sap.ui.getCore().byId("listPlants");
	modelBind.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
	
	
}








