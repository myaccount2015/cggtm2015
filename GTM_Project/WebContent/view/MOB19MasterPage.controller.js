sap.ui.controller("com.cg.gtm.view.MOB19MasterPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB19MasterPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB19MasterPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB19MasterPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB19MasterPage
*/
//	onExit: function() {
//
//	},
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB19";
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
	
	 ddMOB19MasPageSel : function(key)
	{
		 gMOB19Key = key ;
		 sap.ui.getCore().byId("MOB19Qty").setValueState(sap.ui.core.ValueState.None);
		if ( key == "PO")
			{
			
			sap.ui.getCore().byId("lbl_po_del_num").setText("PO Number");
			sap.ui.getCore().byId("lbl_del_note_num").setVisible(true);
			sap.ui.getCore().byId("ip_po_del_num").setValue("");
			sap.ui.getCore().byId("ip_del_note_num").setValue("");
			sap.ui.getCore().byId("ip_del_note_num").setVisible(true);
			sap.ui.getCore().byId("MOB19Qty").setEnabled(true);
			sap.ui.getCore().byId("MOB19Batch").setEnabled(true);
			var oResponsivePopoverList =  sap.ui.getCore().byId("oResponsivePopoverListMOB19");
			oResponsivePopoverList.attachDelete
			(sap.ui.getCore().byId("idMob19MatDetPage").getController().handleDeleteMOB19);
			}
		
		else if (key == "ID")
			{
			
			sap.ui.getCore().byId("lbl_po_del_num").setText("Inbound Delivery Number");
			sap.ui.getCore().byId("lbl_del_note_num").setVisible(true);
			sap.ui.getCore().byId("ip_po_del_num").setValue("");
			sap.ui.getCore().byId("ip_del_note_num").setValue("");
			sap.ui.getCore().byId("ip_del_note_num").setVisible(true);
			sap.ui.getCore().byId("MOB19Qty").setEnabled(false);
			sap.ui.getCore().byId("MOB19Batch").setEnabled(false);
			var oResponsivePopoverList =  sap.ui.getCore().byId("oResponsivePopoverListMOB19");
			oResponsivePopoverList.detachDelete
			(sap.ui.getCore().byId("idMob19MatDetPage").getController().handleDeleteMOB19);
			}
		
		else if (key == "OD")
		{
		
			sap.ui.getCore().byId("lbl_po_del_num").setText("Outbound Delivery Number");
			sap.ui.getCore().byId("lbl_del_note_num").setVisible(false);
			sap.ui.getCore().byId("ip_del_note_num").setVisible(false);
			sap.ui.getCore().byId("ip_po_del_num").setValue("")
			sap.ui.getCore().byId("ip_del_note_num").setValue("");
			sap.ui.getCore().byId("MOB19Qty").setEnabled(false);
			sap.ui.getCore().byId("MOB19Batch").setEnabled(false);
			var oResponsivePopoverList =  sap.ui.getCore().byId("oResponsivePopoverListMOB19");
			oResponsivePopoverList.detachDelete
			(sap.ui.getCore().byId("idMob19MatDetPage").getController().handleDeleteMOB19);
		}
	},
	
	showDetailsMOB19 : function()
	{
		
		var MOB19Selectedplant="";
		if(window.localStorage.defPlantDesc==sap.ui.getCore().byId("inputPlantMOB19").getValue()){
			MOB19Selectedplant=window.localStorage.defPlantCode;
			
		}
		else{
			
			MOB19Selectedplant=g_SelectedPlant.description;
		}
		
		
		var errMsg = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"ERR");
		if ( null ==  errMsg || errMsg == undefined || errMsg == "")
			{
			sap.ui.getCore().byId("MOB19ErrTxt").setVisible(false);
			}
		
		else
			{
			
			sap.ui.getCore().byId("MOB19ErrTxt").setVisible(true);
			sap.ui.getCore().byId("MOB19ErrTxt").setValue(errMsg);
			}
	
		 sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(false);
		 sap.ui.getCore().byId("MOB19Qty").setValueState(sap.ui.core.ValueState.None);
		 sap.ui.getCore().byId("Mob19Detpage").setTitle("");
		sap.ui.getCore().byId("MOB19MatListPage").setTitle
		(sap.ui.getCore().byId("ip_po_del_num").getValue());  
		sap.ui.getCore().byId("Mob19listMatNo").destroyItems();
		 sap.ui.getCore().byId("MOB19SerialLabel").setVisible(false);
	   	 sap.ui.getCore().byId("MOB19Serial").setVisible(false);
	   	 sap.ui.getCore().byId("MOB19BatchLabel").setVisible(false);
	   	 sap.ui.getCore().byId("MOB19Batch").setVisible(false);
	   	sap.ui.getCore().byId("MOB19Mat").setText("");
		sap.ui.getCore().byId("MOB19MatDesc").setText("");
		sap.ui.getCore().byId("MOB19SLoc").setText("");
		sap.ui.getCore().byId("MOB19Qty").setValue("");
		sap.ui.getCore().byId("MOB19Qty").setEnabled(true);
		globalVisitedIDs = [];
		
		/**********************for demo mode *************************************************/
		
		  var demo = sap.ui.getCore().getElementById("demoswitch").getState();
			if (demo)
				{
		var res = {"results":[
        {
        	"desc" : "Bearing Case1",
        	"qty" : "2",
        	"matnum" : "MN : 1425631",
        	"loc" : "Aisle 31, Shelf 41",
        	"selected" : false
        },
        
        {
        	"desc" : "Bearing Case2",
        	"qty" : "2",
        	"matnum" : "MN : 1425632",
        	"loc" : "Aisle 32, Shelf 42",
        	"selected" : false
        },
        {
        	"desc" : "Bearing Case3",
        	"qty" : "2",
        	"matnum" : "MN : 1425633",
        	"loc" : "Aisle 33, Shelf 43",
        	"selected" : false
        },
        {
        	"desc" : "Bearing Case4",
        	"qty" : "2",
        	"matnum" : "MN : 1425634",
        	"loc" : "Aisle 34, Shelf 44",
        	"selected" : false
        },
        {
        	"desc" : "Bearing Case5",
        	"qty" : "2",
        	"matnum" : "MN : 1425635",
        	"loc" : "Aisle 35, Shelf 45",
        	"selected" : false
        }
        
              
              ]
 }

		var oJSONModelMob19MasterList = new sap.ui.model.json.JSONModel(res, "results");
		var listMat = sap.ui.getCore().byId("Mob19listMatNo");
		listMat.setModel(oJSONModelMob19MasterList);
			 if ( g_runningOnPhone == true)
				{
				 
				 var app = sap.ui.getCore().byId("myApp"); 
					 app.to(sap.ui.getCore().byId("idMob19MatListPage"));
				}
			 
			 else
				 {
			sap.ui.getCore().byId("idMOB19SplitApp").to("idMOB19TwoScreen");	
				 }
			 
				}
		
		/****************************************************************************************/
		
		else
			{
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB19:: Service: GRListSet Start" ;


		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");

		if(serviceURL == "Fail")
				 {
				 return false;
				 }
		var Mob19DataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var readRequestURL =  "";
		//var defPlant = window.localStorage.getItem("defPlantCode");
		if (gMOB19Key == "PO")
			{
		     readRequestURL = "/GRListSet?$filter=DocTypeFlag eq 'R01' and Plant eq '" + MOB19Selectedplant +"' and PONumber eq '" + 
		     sap.ui.getCore().byId("ip_po_del_num").getValue()+"'&$format=json";
			}
		else if (gMOB19Key == "ID")
		{
		
		 readRequestURL = "/GRListSet?$filter=DocTypeFlag eq 'R04' and Plant eq '" + MOB19Selectedplant +"' and DeliveryNo eq '" + 
	     sap.ui.getCore().byId("ip_po_del_num").getValue()+"'&$format=json";
		}
		
		else 
			{
			
			 readRequestURL = "/GRListSet?$filter=DocTypeFlag eq 'R05' and Plant eq '" + MOB19Selectedplant +"' and DeliveryNo eq '" + 
		     sap.ui.getCore().byId("ip_po_del_num").getValue()+"'&$format=json";
			}
			
		Mob19DataModel.read(readRequestURL, null, null, false,   
			              function(oData, oResponse) { 
			var result = oResponse.body; //Getting JSON response body
			var jsonObj = JSON.parse(result); // Parsing the JSON Object		
			var result = jsonObj.d; // Taking the result inside namespace d
			var resultArr = oData.results;
			var resultArrIni = [];
			
			var selectedFlag= false;
			if(gMOB19Key!="PO"){			///condition to put everything selected in IBD and OBD
				selectedFlag= true;
			}
			
			
			 for ( var index = 0 ; index < resultArr.length ;  index ++ )
				 {
				 
				 var resultData = {
		                	"desc" : resultArr[index].MaterialDesc,
		                	"qty" : resultArr[index].Quantity,
		                	"matnum" : parseInt(resultArr[index].Material).toString(),
		                	"loc" : resultArr[index].StorageLoc,
		                	"locdesc" : resultArr[index].StorageLocDesc,
		                	"serial" : resultArr[index].Serialized,
		                	"batch" : resultArr[index].BatchManaged,	
		                	"batchnum" : resultArr[index].Batch,	
		                	"selected" : selectedFlag,
		                	"POItem" :  resultArr[index].POItem,
		                	"backcolor" : "#FFFFFF",
		                	"Plant" : resultArr[index].Plant,
		                	"UOM" : resultArr[index].UOM,
		                	"DeliveryItem" : resultArr[index].DeliveryItem,
		                	"OverDelTolrance" : resultArr[index].OverDelTolrance,
		                	"datetime" : "",
		                	"ID" : "",
		                	"icon" : ""
		                };
				 if (resultArr[index].Serialized == "Y" || resultArr[index].Serialized == "y")
					 {
					 
					 addSerialNumbers(resultArr[index].SerialNo ,  parseInt(resultArr[index].Material).toString() , resultArr[index].DeliveryItem,index);
					 
					
					
					 }
				 
				 resultArrIni.push(resultData);
				 
				 }
			 var  resDataFinalArray =  {"results" : resultArrIni};
			 var oJSONModelMob19MasterList = new sap.ui.model.json.JSONModel(resDataFinalArray);
			 var listMat = sap.ui.getCore().byId("Mob19listMatNo");
				 listMat.setModel(oJSONModelMob19MasterList);
				 if ( g_runningOnPhone == true)
					{
					 var app = sap.ui.getCore().byId("myApp"); 
					 if (resultArr.length <= 0)
						 {
						 app.to(sap.ui.getCore().byId("idMOB19MasPg"));
						 }
					 
					 else
						 {
						  g_MobileNavigationId = "MOB19MatListPage";
						 app.to(sap.ui.getCore().byId("idMob19MatListPage"));
						 }
					
					}
				 
				 else
					 {
				sap.ui.getCore().byId("idMOB19SplitApp").to("idMOB19TwoScreen");	
					 }
				 
				 
				 
				 
				 
				 
				 
				 
				 if( g_isDebug == true)
				 {
				 //Service End Time
				 var logInfo1 = getTimeStamp() +"MOB19:: Service: GRListSet Finish" ;
				 //Log file Service Start and End Time
				 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				 logFileUpdate(g_ServiceStartEndTime);
				 }
		},  function(oError){  
			errorRes = true;
			if (oError.response.statusCode == 401)
				{
			
				sap.m.MessageBox.show(
						
						"User Unauthorized",
						sap.m.MessageBox.Icon.ERROR,
						"Error"
						);
				
				}
			try{
				var data = JSON.parse(oError.response.body);
				for(var event in data){
				var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
					messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
					catch(e)
					{sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");break;
					}}}catch(e){sap.m.MessageBox.show(
                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					
					if( g_isDebug == true)
					 {
					 //Service End Time
					 var logInfo1 = getTimeStamp() +"MOB19:: Service: GRListSet Failed no network" ;
					 //Log file Service Start and End Time
					 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					 logFileUpdate(g_ServiceStartEndTime);
					 }
					
					
					}
			
			//alert(oError.message);
});	
		
	}
				}
	

});

function  addSerialNumbers(serialNumbers , matnum , delItem,index)
{

	var serNumArrMaster = serialNumbers.split("_");
	if (serialNumbers != null && serialNumbers != undefined && serialNumbers != "")
		{
	var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+matnum+"_"+delItem+"_"+index; // DeliveryItem
	var Mob19SerialLogLocalStorage = window.localStorage.getItem(titMat);
	var Mob19SerialLogMasArray = window.localStorage.getItem("Mob19SerialLog");
	if (Mob19SerialLogLocalStorage === undefined || Mob19SerialLogLocalStorage === null || 
		Mob19SerialLogLocalStorage.length === 0)
    {
		var serNumArrTitle = new Array();
      	var titString  = 	JSON.stringify(titMat);
        serNumArrTitle[0] = titString; 
	    var serNumArr = [];
	    for ( var index = 0 ; index < serNumArrMaster.length ; index ++)
	    {
	    	 if ( null !=  serNumArrMaster[index] && serNumArrMaster[index]!= undefined 
					 && serNumArrMaster[index] != "")
				 {
	    		// sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(true);
	 	    	serNumArr.push(serNumArrMaster[index]);
				 
				 }
			
	    }
       		   if ( serNumArr.length > 0)
       			   {
       			 var stringifiedNoti = JSON.stringify(serNumArr);
       	  		window.localStorage.setItem(titMat.toString(), stringifiedNoti);//store the serial number
       			   }
       
  		
  	}
	else
	{
		var notiNumRcvd = new Array();
		notiNumRcvd =  JSON.parse(Mob19SerialLogLocalStorage);
	
		///////////////////////////////////////////////////////////////////////////////////////////////
		//Iterate array 
		
			for ( var j = 0 ; j < serNumArrMaster.length ; j++)
			{
			if( notiNumRcvd.indexOf(serNumArrMaster[j]) == -1)
				{
			    
				 if ( null !=  serNumArrMaster[j] && serNumArrMaster[j] != undefined 
						 && serNumArrMaster[j] != "")
					 {
		    		// sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(true);
		    		 notiNumRcvd.push(serNumArrMaster[j]);
		    		 var notiNumRcvdString = JSON.stringify(notiNumRcvd);
					 window.localStorage.setItem(titMat, notiNumRcvdString);
					 
					 }
				
				
				}
			
			}
		
	/*if( testMasterVar == 0)
		{
		//alert("Not ava");
		sap.ui.getCore().byId("Mob19-thrdScr-txtBoxLogSer").setValue
		(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxLogSer").getValue() - (-1));
		notiNumRcvd.push(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").getValue());//pushing new noti number 
		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
		window.localStorage.setItem(titMat, notiNumRcvdString);
		//getting scanned records and ther length to check with input valu validations
  		var getScannedItemRec = window.localStorage.getItem(titMat);
  		getScannedItemRec = JSON.parse(getScannedItemRec);
  		if ( sap.ui.getCore().byId("MOB19Qty").getValue() < getScannedItemRec.length)
  			{
  			sap.ui.getCore().byId("MOB19Qty").setValue
    		(sap.ui.getCore().byId("MOB19Qty").getValue() - (-1));//increment 1 
  			}
		
		}}*/
	}
	//Master Array rec
	if (Mob19SerialLogMasArray === undefined || Mob19SerialLogMasArray === null || 
			Mob19SerialLogMasArray.length === 0)
	
      	 {
			var serNumArrTitle = new Array();
	        serNumArrTitle[0] = titMat; 
		    var stringifiedMob19 = JSON.stringify(serNumArrTitle);
      	    window.localStorage.setItem("Mob19SerialLog"+"_"+index, stringifiedMob19);//store the serial number
      		 
      	 }
		else
		{
			var notiNumRcvd = new Array();
			notiNumRcvd =  JSON.parse(Mob19SerialLogMasArray);
			
				if( notiNumRcvd.indexOf(titMat) == -1)
					{
					notiNumRcvd.push(titMat);//pushing new noti number 
					var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
		    		window.localStorage.setItem("Mob19SerialLog"+"_"+index, notiNumRcvdString);
					}
				}
			
			
		
		}
		
	
		

}