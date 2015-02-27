sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.EnterInspectionInitial", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.EnterInspectionInitial
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.EnterInspectionInitial
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.EnterInspectionInitial
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.EnterInspectionInitial
*/
//	onExit: function() {
//
//	}
	
	loadInsTree : function()
	{	
		
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
		
		
		var treeNotiTaskList = null;
		
		var demoswitch = sap.ui.getCore().byId("demoswitch");
		
		if (demoswitch.getState())
		{
			
			treeNotiTaskList = MOB21Mock();
			
		}
		
		
		else {
		
		/*
		 * Calling Service - Start
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
     	
		
     	var readRequestURL = "/InsplotColl?$filter=Plant eq '"+selectedPlantID+"' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + 
		 "' and Ven_Act_No eq '" + selectedVendor + "'and Inspection_Lot_Origin eq '" + selectedType +"'&$format=json";
		
		notiTaskLstoDataModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) { 
					var result = oResponse.body; //Getting JSON response body
					
					var jsonObj = JSON.parse(result); // Parsing the JSON Object
					
					var result = jsonObj.d; // Taking the result inside namespace d
					
					treeNotiTaskList = result.results;
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 =getTimeStamp() +"MOB21:: Service: InsplotColl Finish" ;
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
							var logInfo1 =getTimeStamp() +"MOB21:: Service: InsplotColl Failed no network" ;
							//Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
							}
							
							
							}
						
						
						
				
			
      });
   
   	/*
	 * Calling Service - End
	 */	
   
	}
   
   treeNotiTaskList = formatInspectionLotResponse(treeNotiTaskList); //Getting results, passing only Array
	
	var oMOB21Data = {"MOB21Collection":treeNotiTaskList};
	var oJason1 = new sap.ui.model.json.JSONModel(oMOB21Data);
	var oMOb21List = sap.ui.getCore().byId("mob21list"); 
	oMOb21List.setModel(oJason1);
   
   
   var runningInTablet = g_runningInTablet;
  // var runningInDsktop = jQuery.device.is.desktop;
	
	if(runningInTablet || (
			g_runningInTablet == false && g_runningOnPhone == false)) {
	
		var app = sap.ui.getCore().byId("splitAppInsCreate1");  
	//	app.addDetailPage(detailpage3scr);
		 app.toDetail("idMOB21Det3scr");
		//////////////workng upto here//////////////
		 
		 
		 
		 hideMOB21Dtl3rdColumn();
	}else {
		var app = sap.ui.getCore().byId("myApp");  
		 app.toDetail("idMOB21Det");
	}
   
   
   	 
   
		
  	}
	
	
	
});

function formatInspectionLotResponse(aTaskList) {
var aTaskListLength = aTaskList.length;

var aNotiList = [];
var aNotiListMas = [];


for(cnt=0; cnt<aTaskListLength; cnt++) {

	var Material = aTaskList[cnt].Material;
	var Material_Description=  aTaskList[cnt].Material_Description;
	var Insplot_No = aTaskList[cnt].Insplot_No;
	var Inspection_Lot_Type_Name = aTaskList[cnt].Inspection_Lot_Type_Name;
	var Vendor_Name = aTaskList[cnt].Vendor_Name;
	var Workcenter = aTaskList[cnt].Workcenter;
	
//Code to find all characteristics for a given combination of Material number and inspection lot 	 
	var charList = [];
	var charDetailList = [];
	var charSpecDisp = [];
	var insOpNum = [];
	var insCharNum = [];
	
	var aTaskListLength2 = aTaskList.length;
	
	for(countChar=0; countChar< aTaskListLength2; countChar++) {
		
		
		if ( ( (aTaskList[countChar].Material).concat(aTaskList[countChar].Insplot_No)) == (Material.concat(Insplot_No)) )
	{
			
			/*var final1 = aTaskList[countChar].InspOperation_Text.concat("  -  ");
			var final2 = final1.concat(aTaskList[countChar].InspCharacterstic_Text);*/
			charDetailList.push(aTaskList[countChar].InspCharacterstic_Text);
			charSpecDisp.push(aTaskList[countChar].Specification_Display);		
			insOpNum.push(aTaskList[countChar].Inspection_Operation_No);	
			insCharNum.push(aTaskList[countChar].Inspection_Char_No);	
	}	
		
		/******************************/
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
			charList.push(aTaskList[countChar].InspOperation_Text);
			}
		/*****************************/
		
	}
	
	var arrTaskList = { // Each Task List
			"matnum": Material,
			"matdesc":Material_Description,
			"desc": Inspection_Lot_Type_Name,
			"lot": Insplot_No,
			"center" : Workcenter,
			"vendor" : Vendor_Name,
			"charList" : charList,
			"charListDet" : charDetailList,
			"specificationDisplay" : charSpecDisp,
			"insOp" : insOpNum ,
			"insChar" : insCharNum
			
			
			
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


