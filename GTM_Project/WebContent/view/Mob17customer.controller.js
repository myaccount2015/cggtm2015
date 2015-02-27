sap.ui.controller("com.cg.gtm.view.Mob17customer", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob17customer
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob17customer
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob17customer
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob17customer
*/
//	onExit: function() {
//
//	}
	onCommonCustomerSel : function(event){
		g_SelectedCust = event.mParameters.listItems[0].mProperties; //Selected Plant from Common Plant Search
		//g_Mob18SelectedPlant = event.mParameters.listItems[0].mProperties;
		//g_scrapSelectedPlant = event.mParameters.listItems[0].mProperties;
		//if(globalCustSearchFrom=="MOB17") {
			
		
			
			var selectedCustomer = event.getParameter('listItem').getTitle();
			
			var inputPlant = sap.ui.getCore().byId("inputcustomer");
			
			inputPlant.setValue(selectedCustomer);
			if ( g_runningOnPhone == false)
			{
			var app = sap.ui.getCore().byId("splitAppMOB17");  
      	  	app.toMaster("idMOB17_MasterActionPage");
			}
			
			else
				{

				var app = sap.ui.getCore().byId("myApp");  
	      	  	app.to("idMOB17_MasterActionPage");
				
				
				}
		//}
	}
});
function customerSearchHelpCommon(acustList) {

	var aDefectListLength = acustList.length;
	var aCustGroup = [];
    var cnt = 0;


	for(cnt ; cnt<aDefectListLength; cnt++) {
		
		;//creating own json model for table
	  //  var locationData;		

		//var defectGroup = aDefectList[cnt].DefectGroup;
		
		var CustomerName = acustList[cnt].CustomerName;
	    var CustomerNo = acustList[cnt].CustomerNo; // getting plant id
		//alert(plantIdInMaterial);
	
	
	var custData = {"custName" : CustomerName ,
	                 "custNo" : CustomerNo
		            };

	aCustGroup.push(custData);
	
}
	var summaryDetailData={"MOB17CustProj":aCustGroup }	; // main json to bind to table
	var modelBind = sap.ui.getCore().byId("listCustomerCommon");
	modelBind.setModel(new sap.ui.model.json.JSONModel(summaryDetailData));
	
	
}


function getCustList()
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
		var logInfo = getTimeStamp() +"MOB17:: Service: CustomerList Start" ;

		
	var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV");
	
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
 	
	var readRequestURL = "/CustomerList?$format=json";
	
	defectDataModel.read(readRequestURL, null, null, false,   
          function(oData, oResponse) { 
		  var result = oData.results;
	
          if(result.length > 0){
				var result = oResponse.body; //Getting JSON response body
			
			var jsonObj = JSON.parse(result); // Parsing the JSON Object
			
			var result = jsonObj.d; // Taking the result inside namespace d
			
			custSear = result.results;
			custSear = customerSearchHelpCommon(custSear);
			
			
        	
           }
		

          if( g_isDebug == true)
          {
          //Service End Time
          var logInfo1 = getTimeStamp() +"MOB17:: Service: CustomerList Finish" ;
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
					          var logInfo1 = getTimeStamp() +"MOB17:: Service: CustomerList Failed no network" ;
					          //Log file Service Start and End Time
					         var  g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					          logFileUpdate(g_ServiceStartEndTime);
					          }
							 
							 
							}
				
  });
	
	
	}	
	
	

}