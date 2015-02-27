sap.ui.controller("com.cg.gtm.view.Drop2_MOB27.Mob27SecScr", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob27SecScr
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob27SecScr
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob27SecScr
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob27SecScr
*/
//	onExit: function() {
//
//	}

	Next : function()
	{
		
		
		
		//set ResetArrLenSecScr
		sap.ui.getCore().byId("Mob27-queue-testLoopNext").setText("");
		g_indexLoopCheck = "";
		
		var demo = sap.ui.getCore().byId("demoswitch");  
		if (demo.getState() == true)
			{
			if(sap.ui.getCore().byId("Mob27-Mas-ComboBox").getVisible() == true )
			 {openSplashScreen();
			 
				 var res = {
						 "results":[
						            {
						            	 "TransferOrderno" : "0000001187",
						                 "TransferOrderItem" : "0001",
						                 "MaterialDocument" : "",
						                 "MaterialDocumentItem" : "0000",
						                 "MaterialDocumentYear" : "0000",
						                 "WhouseNo" : "NP1",
						                 "Plant" : "GWNP",
						                 "PlantName" : "North Pole Depot",
						                 "SourceStorageType" : "001",
						                 "SourceStorageBin" : "B-01-03-6",
						                 "Material" : "000000000000200043",
						                 "MaterialDescription" : "Vertical Primary Damper",
						                 "Batch" : "",
						                 "StockCategory" : "",
						                 "Quantity" : "4.000",
						                 "Uom" : "EA",
						                 "DestinationStorageType" : "100",
						                 "DestinationStorageBin" : "0004000562",
						                 "SplStock" : "",
						                 "SplStockNumber" : "",
						                 "SplStockDescription" : "",
						                 "SerialNo" : "",
						                 "FlagSerial" : "Y",
						                 "FlagBatch" : "N",
						                 "FlagSplitValuated" : "N",
						                 "StockCategoryDesc" : "Available Stock",
						                 "TransferPriority" : "",
						                 "Queue" : "PICK_001",
						                 "RequirementNo" : "0004000562",
						                 "RevisionLevel" : "",
						                 "LineNo" : "        3"
						            	
						            },
						            {

					            	 "TransferOrderno" : "0000001187",
					                 "TransferOrderItem" : "0002",
					                 "MaterialDocument" : "",
					                 "MaterialDocumentItem" : "0000",
					                 "MaterialDocumentYear" : "0000",
					                 "WhouseNo" : "NP1",
					                 "Plant" : "GWNP",
					                 "PlantName" : "North Pole Depot",
					                 "SourceStorageType" : "001",
					                 "SourceStorageBin" : "B-01-03-9",
					                 "Material" : "000000000000200043",
					                 "MaterialDescription" : "qwe",
					                 "Batch" : "",
					                 "StockCategory" : "",
					                 "Quantity" : "4.000",
					                 "Uom" : "EA",
					                 "DestinationStorageType" : "100",
					                 "DestinationStorageBin" : "0004000563",
					                 "SplStock" : "",
					                 "SplStockNumber" : "",
					                 "SplStockDescription" : "",
					                 "SerialNo" : "",
					                 "FlagSerial" : "Y",
					                 "FlagBatch" : "N",
					                 "FlagSplitValuated" : "N",
					                 "StockCategoryDesc" : "Available Stock",
					                 "TransferPriority" : "",
					                 "Queue" : "PICK_001",
					                 "RequirementNo" : "0004000562",
					                 "RevisionLevel" : "",
					                 "LineNo" : " 0"
					            	
					            
						            },
						            {

					            	 "TransferOrderno" : "0000001187",
					                 "TransferOrderItem" : "0003",
					                 "MaterialDocument" : "",
					                 "MaterialDocumentItem" : "0000",
					                 "MaterialDocumentYear" : "0000",
					                 "WhouseNo" : "NP1",
					                 "Plant" : "GWNP",
					                 "PlantName" : "North Pole Depot",
					                 "SourceStorageType" : "001",
					                 "SourceStorageBin" : "B-01-03-10",
					                 "Material" : "000000000000200043",
					                 "MaterialDescription" : "qw3123131e",
					                 "Batch" : "",
					                 "StockCategory" : "",
					                 "Quantity" : "4.000",
					                 "Uom" : "EA",
					                 "DestinationStorageType" : "100",
					                 "DestinationStorageBin" : "0004000563",
					                 "SplStock" : "",
					                 "SplStockNumber" : "",
					                 "SplStockDescription" : "",
					                 "SerialNo" : "",
					                 "FlagSerial" : "Y",
					                 "FlagBatch" : "N",
					                 "FlagSplitValuated" : "N",
					                 "StockCategoryDesc" : "Available Stock",
					                 "TransferPriority" : "",
					                 "Queue" : "PICK_001",
					                 "RequirementNo" : "0004000562",
					                 "RevisionLevel" : "",
					                 "LineNo" : " 0"
					            	
					            
						            },

                                     {
					            	 "TransferOrderno" : "0000001189",
					                 "TransferOrderItem" : "0001",
					                 "MaterialDocument" : "",
					                 "MaterialDocumentItem" : "0000",
					                 "MaterialDocumentYear" : "0000",
					                 "WhouseNo" : "NP1",
					                 "Plant" : "GWNP",
					                 "PlantName" : "North Pole Depot",
					                 "SourceStorageType" : "001",
					                 "SourceStorageBin" : "B-01-03-10",
					                 "Material" : "000000000000200043",
					                 "MaterialDescription" : "qw3123131e",
					                 "Batch" : "",
					                 "StockCategory" : "",
					                 "Quantity" : "4.000",
					                 "Uom" : "EA",
					                 "DestinationStorageType" : "100",
					                 "DestinationStorageBin" : "0004000563",
					                 "SplStock" : "",
					                 "SplStockNumber" : "",
					                 "SplStockDescription" : "",
					                 "SerialNo" : "",
					                 "FlagSerial" : "Y",
					                 "FlagBatch" : "N",
					                 "FlagSplitValuated" : "N",
					                 "StockCategoryDesc" : "Available Stock",
					                 "TransferPriority" : "",
					                 "Queue" : "PICK_001",
					                 "RequirementNo" : "0004000560",
					                 "RevisionLevel" : "",
					                 "LineNo" : " 1"
					            	
					            
						            }
						            
						            ]
				 
				 };
				 var GetAllJSONRecord = res.results;
		        	// Create JSON data model
		        //	 calling unique values and records
		    
		         	 
		        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
		       		  return item.TransferOrderno;
		       		});
		        
		        	/*if( GetUniqueRecord[0].SplStock == 'B')
		        	{
		        	sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("P. Stock");
		        	}
		        	else if( GetUniqueRecord[0].SplStock == 'Q')
	        		{
	        		sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("C. Stock");
	        		}
		        	else
		        	{
		        	sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("Stock");
		        	}*/
		        	 
		        	 var createOurJSONFormat = {
		        			 "results" : GetUniqueRecord,
		        			 "AllDataModel": GetAllJSONRecord
		        	 };
		        	 
		       
		        	 sap.ui.getCore().byId("Mob27-queue-SecScreen").setTitle("Queue "+sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText());
		        	 
		        //////////////////////////////////////////////////////////////////////////////////////////////
		       var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel();
		           oJSONModelMob27TabelList.setData(createOurJSONFormat);
		           sap.ui.getCore().byId("idMob27-MatDesTable").setModel(oJSONModelMob27TabelList);
		           
		           if( g_runningOnPhone == true)
		        	   {
		        	   sap.ui.getCore().byId("myApp").to("idMob27OrdDet");    
		        	   }
		           
		           else
		        	   {
		        	   sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickQueue");    
		        	   }
		           	
		           
		           closeSplashScreen();   
		           
			 }
		 else // Order demo mode
			 {
			 
			 openSplashScreen();
			var res = {
					
					
					 "results":[
					            {
					            	"TransferOrderno" : "0000001186",
					                "TransferOrderItem" : "0001",
					                "MaterialDocument" : "",
					                "MaterialDocumentItem" : "0000",
					                "MaterialDocumentYear" : "0000",
					                "WhouseNo" : "NP1",
					                "Plant" : "GWNP",
					                "PlantName" : "North Pole Depot",
					                "SourceStorageType" : "FLR",
					                "SourceStorageBin" : "B-01-01-1",
					                "Material" : "000000000000200048",
					                "MaterialDescription" : "Brake Discs",
					                "Batch" : "",
					                "StockCategory" : "",
					                "Quantity" : "1.000",
					                "Uom" : "EA",
					                "DestinationStorageType" : "100",
					                "DestinationStorageBin" : "0004000562",
					                "SplStock" : "",
					                "SplStockNumber" : "",
					                "SplStockDescription" : "",
					                "SerialNo" : "",
					                "FlagSerial" : "Y",
					                "FlagBatch" : "N",
					                "FlagSplitValuated" : "N",
					                "StockCategoryDesc" : "Available Stock",
					                "TransferPriority" : "",
					                "Queue" : "PICK_FLR",
					                "RequirementNo" : "0004000562",
					                "RevisionLevel" : "",
					                "LineNo" : "        2"
					            	
					            	
					            },
					            {
					            	"TransferOrderno" : "0000001186",
					                "TransferOrderItem" : "0002",
					                "MaterialDocument" : "",
					                "MaterialDocumentItem" : "0000",
					                "MaterialDocumentYear" : "0000",
					                "WhouseNo" : "NP1",
					                "Plant" : "GWNP",
					                "PlantName" : "North Pole Depot",
					                "SourceStorageType" : "FLR",
					                "SourceStorageBin" : "B-01-01-2",
					                "Material" : "000000000000200048",
					                "MaterialDescription" : "Brake Discs",
					                "Batch" : "",
					                "StockCategory" : "",
					                "Quantity" : "1.000",
					                "Uom" : "EA",
					                "DestinationStorageType" : "100",
					                "DestinationStorageBin" : "0004000562",
					                "SplStock" : "",
					                "SplStockNumber" : "",
					                "SplStockDescription" : "",
					                "SerialNo" : "",
					                "FlagSerial" : "Y",
					                "FlagBatch" : "N",
					                "FlagSplitValuated" : "N",
					                "StockCategoryDesc" : "Available Stock",
					                "TransferPriority" : "",
					                "Queue" : "PICK_FLR",
					                "RequirementNo" : "0004000562",
					                "RevisionLevel" : "",
					                "LineNo" : "        0"
					            	
					            	
					            },
					            
					            {
					            	"TransferOrderno" : "0000001183",
					                "TransferOrderItem" : "0001",
					                "MaterialDocument" : "",
					                "MaterialDocumentItem" : "0000",
					                "MaterialDocumentYear" : "0000",
					                "WhouseNo" : "NP1",
					                "Plant" : "GWNP",
					                "PlantName" : "North Pole Depot",
					                "SourceStorageType" : "FLR",
					                "SourceStorageBin" : "B-01-01-2",
					                "Material" : "000000000000200048",
					                "MaterialDescription" : "Brake Discs",
					                "Batch" : "",
					                "StockCategory" : "",
					                "Quantity" : "1.000",
					                "Uom" : "EA",
					                "DestinationStorageType" : "100",
					                "DestinationStorageBin" : "0004000562",
					                "SplStock" : "",
					                "SplStockNumber" : "",
					                "SplStockDescription" : "",
					                "SerialNo" : "",
					                "FlagSerial" : "Y",
					                "FlagBatch" : "N",
					                "FlagSplitValuated" : "N",
					                "StockCategoryDesc" : "Available Stock",
					                "TransferPriority" : "",
					                "Queue" : "PICK_FLR",
					                "RequirementNo" : "0004000562",
					                "RevisionLevel" : "",
					                "LineNo" : "        1"
					            	
					            	
					            },
					            
					            
					            
					            ]
			 
			 };
			
			
			var GetAllJSONRecord = res.results;
        	// Create JSON data model
        //	 calling unique values and records
    
         	 
        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
       		  return item.TransferOrderno;
       		});
        	 /*if( GetUniqueRecord[0].SplStock == 'B')
	        	{
	        	sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("P. Stock");
	        	}
	        	else if( GetUniqueRecord[0].SplStock == 'Q')
     		{
     		sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("C. Stock");
     		}
	        	else
	        	{
	        	sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("Stock");
	        	}*/
	        	 
	        	 var createOurJSONFormat = {
	        			 "results" : GetUniqueRecord,
	        			 "AllDataModel": GetAllJSONRecord
	        	 };
	        	 
	       
	        	 sap.ui.getCore().byId("Mob27-order-SecScreen").setTitle("Order "+sap.ui.getCore().byId("Mob27-Mas-Input").getValue());
	        	 
			
			
			var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel(createOurJSONFormat);
			var tabelList = sap.ui.getCore().byId("idMob27-TrOrderTable");
			tabelList.setModel(oJSONModelMob27TabelList);
			 
			
			if( g_runningOnPhone == true)
     	   {
     	   sap.ui.getCore().byId("myApp").to("idMob27TrOrdDet");    
     	   }
			else
				{
				sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickOrder");	
				}
			
			
			
			
			closeSplashScreen();
			
			 }
			
			}
		
		else
			{
			
		    //Default WareHouse:
			var defaultWareHouse = "";
			defaultWareHouse = window.localStorage.getItem("defWHCode");
			
			
			if(sap.ui.getCore().byId("Mob27-Mas-ComboBox").getVisible() == true )
			 {
				
				
				
				
	
				
				
				
				openSplashScreen();
			 //Service calling for Queue
				
				//Service Start Time
				var logInfo = getTimeStamp() +"MOB27:: Service: TransferPickingSet Start" ;
				
				var queueName = "";
				if(sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem() != null) {
					queueName = sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText();
				}

				 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPickingSet?$filter=WhouseNo eq '"+defaultWareHouse+"' and Queue eq '"+ queueName +"'");
				 if(serviceURL == "Fail")
				 {
				 return false;
				 }	
				 
				 //var Mob20DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
						var aData = jQuery.ajax({   
						     url : serviceURL,
						     type: "GET",
					         contentType : "application/json",
					         dataType : 'json',
					         success : function(data, textStatus, jqXHR) {
					     
					        	 var GetAllJSONRecord = data.d.results;
					        	// Create JSON data model
					        //	 calling unique values and records
					    
					         	 
					        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
					       		  return (item.TransferOrderno );//&& item.RequirementNo);
					       		});
					        
					        	/*if( GetUniqueRecord[0].SplStock == 'B')
					        	{
					        	sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("P. Stock");
					        	}
					        	else if( GetUniqueRecord[0].SplStock == 'Q')
				        		{
				        		sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("C. Stock");
				        		}
					        	else
					        	{
					        	sap.ui.getCore().byId("Mob27-queueHeadStkTxt").setText("Stock");
					        	}*/
					        	 
					        	 var createOurJSONFormat = {
					        			 "results" : GetUniqueRecord,
					        			 "AllDataModel": GetAllJSONRecord
					        	 };
					        	 
					              
					           //   g_indexLoopCheck = GetUniqueRecord[0].TransferOrderItem;
					        	 sap.ui.getCore().byId("Mob27-queue-SecScreen").setTitle("Queue "+sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText());
					        	 
					        //////////////////////////////////////////////////////////////////////////////////////////////
					       var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel();
					           oJSONModelMob27TabelList.setData(createOurJSONFormat);
					           sap.ui.getCore().byId("idMob27-MatDesTable").setModel(oJSONModelMob27TabelList);
					           closeSplashScreen();
					           
					           if( g_isDebug == true)
					           {
					           //Service End Time
					           var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Finish" ;
					           //Log file Service Start and End Time
					           var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					           logFileUpdate(g_ServiceStartEndTime);
					           }
					           
					         },
						 error: function(XMLHttpRequest, textStatus, errorThrown) {
							 closeSplashScreen();
							 var createOurJSONFormat = {};
							 sap.ui.getCore().byId("Mob27-queue-SecScreen").setTitle("Queue "+sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText());
				        	 //////////////////////////////////////////////////////////////////////////////////////////////
						       var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel();
						           oJSONModelMob27TabelList.setData(createOurJSONFormat);
						           sap.ui.getCore().byId("idMob27-MatDesTable").setModel(oJSONModelMob27TabelList);
							 
							 
							 
							 
							 
							 
							 try{
			    					var data = JSON.parse(XMLHttpRequest.responseText);
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
							 
							 
							 //closeSplashScreen();
						 }
					});
						if( g_runningOnPhone == true)
			        	   {
						    g_MobileNavigationId = "Mob27-queue-SecScreen";
						    
						    
			        	   sap.ui.getCore().byId("myApp").to("idMob27OrdDet");    
			        	   }
			           
			           else
			        	   {
			        	   sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickQueue");  
			        	   Hide_Mob27_Queue_ThirdScreen();
			        	   }
			 }
		 else
			 {
			 
			 if( sap.ui.getCore().byId("Mob27-Mas-Input").getValue() == "")
				 {
				 sap.m.MessageBox.show(
	 						"Please Enter Order Number"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
				 }
			 else
				 {
					
					
				 			 
				openSplashScreen();
				var defaultWareHouse = "";
				defaultWareHouse = window.localStorage.getItem("defWHCode");
				var logInfo = getTimeStamp() +"MOB27:: Service: TransferPickingSet Start" ;
			 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPickingSet?$filter=WhouseNo eq '"+defaultWareHouse+"' and RequirementNo eq '"+sap.ui.getCore().byId("Mob27-Mas-Input").getValue()+"'");
			 if(serviceURL == "Fail")
			 {
			 return false;
			 }
			 ///sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPickingSet?$filter=WhouseNo eq 'NP1' and RequirementNo eq '0004000519'	
			 var aData = jQuery.ajax({   
			     url : serviceURL,
			     type: "GET",
		         contentType : "application/json",
		         dataType : 'json',
		         success : function(data, textStatus, jqXHR) {
		        	 var GetAllJSONRecord = data.d.results;
			        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
			        		 return (item.TransferOrderno );//&& item.RequirementNo );
			       		});
			        	 /*if( GetUniqueRecord[0].SplStock == 'B')
				        	{
				        	sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("P. Stock");
				        	}
				        	else if( GetUniqueRecord[0].SplStock == 'Q')
			     		{
			     		sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("C. Stock");
			     		}
				        	else
				        	{
				        	sap.ui.getCore().byId("Mob27-orderHeadStkTxt").setText("Stock");
				        	}*/
				        	 
				        	 var createOurJSONFormat = {
				        			 "results" : GetUniqueRecord,
				        			 "AllDataModel": GetAllJSONRecord
				        	 };
				        	 
				        	// g_indexLoopCheck = GetUniqueRecord[0].TransferOrderItem;
				        	 sap.ui.getCore().byId("Mob27-order-SecScreen").setTitle("Order "+sap.ui.getCore().byId("Mob27-Mas-Input").getValue());
						var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel(createOurJSONFormat);
						var tabelList = sap.ui.getCore().byId("idMob27-TrOrderTable");
						tabelList.setModel(oJSONModelMob27TabelList);
						closeSplashScreen();
						if( g_runningOnPhone == true)
				     	   {
							g_MobileNavigationId = "Mob27-order-SecScreen";
				     	   sap.ui.getCore().byId("myApp").to("idMob27TrOrdDet");    
				     	   }
							else
							{
								sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickOrder");	
								Hide_Mob27_Order_ThirdScreen();
								
							}
						
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Finish" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}	
						
						
						
						
		         },
			 error: function(XMLHttpRequest, textStatus, errorThrown) {
				 closeSplashScreen();
				 var createOurJSONFormat = {};
				 sap.ui.getCore().byId("Mob27-order-SecScreen").setTitle("Order "+sap.ui.getCore().byId("Mob27-Mas-Input").getValue());
	        	 var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel(createOurJSONFormat);
					var tabelList = sap.ui.getCore().byId("idMob27-TrOrderTable");
					tabelList.setModel(oJSONModelMob27TabelList);
				 
				 
				 
				 try{
 					var data = JSON.parse(XMLHttpRequest.responseText);
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
 						}}
 					
				 
				 }catch(e)
 						{sap.m.MessageBox.show(
 								"Service Not Available - Please contact system administrator" + " " +" "+" ",
 						sap.m.MessageBox.Icon.ERROR,"Error");
 						
 						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Failed no network" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}	
 						
 						
 						}
				 
				 
				 
				
				 /*if( g_runningOnPhone == true)
		     	   {
		     	   sap.ui.getCore().byId("myApp").to("idMob27TrOrdDet");    
		     	   }
					else
						{
						sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickOrder");	
						}*/
				 
			 }
		});
 
			 
			
			 }
			}
			}
		
 		 
 		/*	
		//Hide Third Screen
		if( g_runningOnPhone == false)
		{
			
		Hide_Mob27_Queue_ThirdScreen();
		Hide_Mob27_Order_ThirdScreen();
		}*/
 	 	
		
		
		
	}
});


function Hide_Mob27_Queue_ThirdScreen()
{
	$("#idMob27DesScn").hide();
}
function Show_Mob27_Queue_ThirdScreen()
{
	$("#idMob27DesScn").show();
}


function Hide_Mob27_Order_ThirdScreen()
{
	$("#idMob27TrOrdScn").hide();
}
function Show_Mob27_Order_ThirdScreen()
{
	$("#idMob27TrOrdScn").show();
}



function Mob27_Que_Order_UpdatedRecordFromService(){
	
    //Default WareHouse:
	var defaultWareHouse = "";
	defaultWareHouse = window.localStorage.getItem("defWHCode");
	if(sap.ui.getCore().byId("Mob27-Mas-ComboBox").getVisible() == true )
	 {
		openSplashScreen();
		var logInfo = getTimeStamp() +"MOB27:: Service: TransferPickingSet Start" ;
		var queueName = "";
		if(sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem() != null) {
			queueName = sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText();
		}
		 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPickingSet?$filter=WhouseNo eq '"+defaultWareHouse+"' and Queue eq '"+ queueName +"'");
		 if(serviceURL == "Fail")
		 {
		 return false;
		 }
		 
		 //Empty Record
		 var createOurJSONFormat_Empty = {
    			 "results" : "",
    			 "AllDataModel": ""
    	 };
         var oJSONModelMob27TabelList_Empty = new sap.ui.model.json.JSONModel();
         oJSONModelMob27TabelList_Empty.setData(createOurJSONFormat_Empty);
         sap.ui.getCore().byId("idMob27-MatDesTable").setModel(oJSONModelMob27TabelList_Empty);
       
       
				var aData = jQuery.ajax({   
				     url : serviceURL,
				     type: "GET",
			         contentType : "application/json",
			         dataType : 'json',
			         success : function(data, textStatus, jqXHR) {
			        	 var GetAllJSONRecord = data.d.results;
			        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
			       		  return (item.TransferOrderno );//&& item.RequirementNo);
			       		});
			        	 var createOurJSONFormat = {
			        			 "results" : GetUniqueRecord,
			        			 "AllDataModel": GetAllJSONRecord
			        	 };
			        	 sap.ui.getCore().byId("Mob27-queue-SecScreen").setTitle("Queue "+sap.ui.getCore().byId("Mob27-Mas-ComboBox").getSelectedItem().getText());
			       var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel();
			           oJSONModelMob27TabelList.setData(createOurJSONFormat);
			           sap.ui.getCore().byId("idMob27-MatDesTable").setModel(oJSONModelMob27TabelList);
			           closeSplashScreen();
			           if( g_isDebug == true)
			           {
			           var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Finish" ;
			           var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			           logFileUpdate(g_ServiceStartEndTime);
			           }
			         },
				 error: function(XMLHttpRequest, textStatus, errorThrown) {
					 /*sap.m.MessageBox.show(
								"Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");*/
				 }
			});
				if( g_runningOnPhone == true)
	        	   {
				    g_MobileNavigationId = "Mob27-queue-SecScreen";
	        	    sap.ui.getCore().byId("myApp").to("idMob27OrdDet");    
	        	   }
	           
	           else
	        	   {
	        	   sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickQueue");  
	        	   Hide_Mob27_Queue_ThirdScreen();
	        	   }
	 }
 else
	 {
	 
	 if( sap.ui.getCore().byId("Mob27-Mas-Input").getValue() == "")
		 {
		 sap.m.MessageBox.show(
						"Please Enter Order Number"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
		 }
	 else
		 {
		openSplashScreen();
		var defaultWareHouse = "";
		defaultWareHouse = window.localStorage.getItem("defWHCode");
		var logInfo = getTimeStamp() +"MOB27:: Service: TransferPickingSet Start" ;
	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/TransferPickingSet?$filter=WhouseNo eq '"+defaultWareHouse+"' and RequirementNo eq '"+sap.ui.getCore().byId("Mob27-Mas-Input").getValue()+"'");
	 if(serviceURL == "Fail")
	 {
	 return false;
	 }
	 
	//Empty Record
	 var createOurJSONFormat_Empty = {
			 "results" : "",
			 "AllDataModel": ""
	 };
     var oJSONModelMob27TabelList_Empty = new sap.ui.model.json.JSONModel();
     oJSONModelMob27TabelList_Empty.setData(createOurJSONFormat_Empty);
     sap.ui.getCore().byId("idMob27-TrOrderTable").setModel(oJSONModelMob27TabelList_Empty);
     
     
	 var aData = jQuery.ajax({   
	     url : serviceURL,
	     type: "GET",
         contentType : "application/json",
         dataType : 'json',
         success : function(data, textStatus, jqXHR) {
        	 var GetAllJSONRecord = data.d.results;
	        	 var GetUniqueRecord = _.uniq(GetAllJSONRecord, true /* GetUniqueRecord already sorted */, function(item) {
	        		 return (item.TransferOrderno );//&& item.RequirementNo );
	       		});
		        	 
		        	 var createOurJSONFormat = {
		        			 "results" : GetUniqueRecord,
		        			 "AllDataModel": GetAllJSONRecord
		        	 };
		        	 
		        	 sap.ui.getCore().byId("Mob27-order-SecScreen").setTitle("Order "+sap.ui.getCore().byId("Mob27-Mas-Input").getValue());
				var oJSONModelMob27TabelList = new sap.ui.model.json.JSONModel(createOurJSONFormat);
				var tabelList = sap.ui.getCore().byId("idMob27-TrOrderTable");
				tabelList.setModel(oJSONModelMob27TabelList);
				closeSplashScreen();
				if( g_isDebug == true)
				{
				//Service End Time
				var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Finish" ;
				//Log file Service Start and End Time
				var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				logFileUpdate(g_ServiceStartEndTime);
				}	
				
         },
	 error: function(XMLHttpRequest, textStatus, errorThrown) {
		 /*sap.m.MessageBox.show(
						"Service Not Available - Please contact system administrator" + " " +" "+" ",
				sap.m.MessageBox.Icon.ERROR,"Error");*/
				if( g_isDebug == true)
			{
			//Service End Time
			var logInfo1 = getTimeStamp() +"MOB27:: Service: TransferPickingSet Failed no network" ;
			//Log file Service Start and End Time
			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
			logFileUpdate(g_ServiceStartEndTime);
			}	
	 }
         
         
});
	 
	 if( g_runningOnPhone == true)
	   {
		g_MobileNavigationId = "Mob27-order-SecScreen";
	   sap.ui.getCore().byId("myApp").to("idMob27TrOrdDet");    
	   }
		else
		{
			sap.ui.getCore().byId("idMOB27SplitApp").to("idMOB27-twoScreenPickOrder");	
			Hide_Mob27_Order_ThirdScreen();
			
		}
	 }
	}
}
