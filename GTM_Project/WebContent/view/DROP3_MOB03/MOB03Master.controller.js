sap.ui.controller("com.cg.gtm.view.DROP3_MOB03.MOB03Master", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").to("idGridSubMenuPM");
	},

	handleHelpButtonPress: function () {


		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB03";
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

	handleOpenJobsListItemPress: function () {
		if( g_runningOnPhone) {
		g_MobileNavigationId = "MOB03MasterTwoPage";
		}
		filterOpenJobs();
		// var openJobsModel = new sap.ui.model.json.JSONModel("drop3mockups/data/openjobs.json");
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("MOB03MasterTwoPage").setTitle("Open Jobs");
		sap.ui.getCore().byId("MOB03ChangeStatusButton").setVisible(true);
		//sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ReopenButton").setVisible(false);
		sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
	},

	handleClosedJobsListItemPress: function () {
		if( g_runningOnPhone) {
			g_MobileNavigationId = "MOB03MasterTwoPage";
			}
		filterClosedJobs();
		//var closedJobsModel = new sap.ui.model.json.JSONModel("drop3mockups/data/closedjobs.json");
		//sap.ui.getCore().setModel(closedJobsModel);
		sap.ui.getCore().byId("MOB03MasterTwoPage").setTitle("Closed Jobs");
		sap.ui.getCore().byId("MOB03ChangeStatusButton").setVisible(false);
		sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ReopenButton").setVisible(true);
		sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
	}

});

function filterOpenJobs() {
	g_open = 0;
	var openJobs = window.localStorage.getItem("JOBSA");
	var openJobsArr = [];
	 if(g_runningInTablet || g_runningOnPhone) 
		{
 	   var dataArrIni = [];
 	   readLocalFileOnDevice("AllJobs.json", function(funCall)
		
				{
 		   
 		  var allJobsArrayIni  = JSON.parse(funCall);
			 var allJobsArray = allJobsArrayIni.allJobs;
   		  g_open = 0;
					g_closed = 0;
					g_ACT = 0;
					g_HOLD = 0;

					//var allJobsData = allJobs();
					/*var allJobsArray = allJobsData.d.results;
					var jobsMemArrayA = []; // Accepted
					var jobsMemArrayC = []; // Completed
*/	  		
					//alert(allJobsArray.length);
					for (var int = 0; int < allJobsArray.length; int++) {
	

	//if (  openJobs.indexOf(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo) != -1 )
	//	{
	/*if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
			

		};*/
	
	 if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
		 {
		 
           if ((window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
			window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
			window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP" )	)
			{
        	   
        	   var openJobsItem = {
       				"OrderNo": allJobsArray[int].OrderNo,
       				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
       				"ActivityNo": allJobsArray[int].ActivityNo,
       				//"OpearionText": allJobsArray[int].OpearionText,
       				//"Priority": allJobsArray[int].Priority,
       				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo),

       				"StandardTextKey": allJobsArray[int].StandardTextKey,
       				"OrderType": allJobsArray[int].OrderType,
       				"TrainSet": allJobsArray[int].TrainSet,
       				"CarId": allJobsArray[int].CarId,
       				"CarZone": allJobsArray[int].CarZone,
       				"CarSystem": allJobsArray[int].CarSystem,
       				"RoadDesc": allJobsArray[int].RoadDesc,
       				"Equipment": allJobsArray[int].Equipment,
       				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
       				"SystemStatus": allJobsArray[int].SystemStatus,
       				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
       				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

       			};
			g_open++;
			openJobsArr.push(openJobsItem);
			//alert(window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) );
			if ( "ACPT" ==  window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) )
				{
				
				g_ACT ++ ;
				}
			
			if ( "HOLD" ==  window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) )
			{
			
				g_HOLD ++ ;
			}
			}
		
		 }
	 
	 else
		 {
	
	if (	allJobsArray[int].CurrentStatus != "RJCT" &&
			allJobsArray[int].CurrentStatus != "CANL" &&
			allJobsArray[int].CurrentStatus != "COMP") {
		var openJobsItem = {
			"OrderNo": allJobsArray[int].OrderNo,
			//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
			"ActivityNo": allJobsArray[int].ActivityNo,
			//"OpearionText": allJobsArray[int].OpearionText,
			//"Priority": allJobsArray[int].Priority,
			"CurrentStatus": allJobsArray[int].CurrentStatus,

			"StandardTextKey": allJobsArray[int].StandardTextKey,
			"OrderType": allJobsArray[int].OrderType,
			"TrainSet": allJobsArray[int].TrainSet,
			"CarId": allJobsArray[int].CarId,
			"CarZone": allJobsArray[int].CarZone,
			"CarSystem": allJobsArray[int].CarSystem,
			"RoadDesc": allJobsArray[int].RoadDesc,
			"Equipment": allJobsArray[int].Equipment,
			"EquipmentDesc": allJobsArray[int].EquipmentDesc,
			"SystemStatus": allJobsArray[int].SystemStatus,
			"EarliestStartDate": allJobsArray[int].EarliestStartDate,
			"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

		};

		g_open++;
		openJobsArr.push(openJobsItem);
	}
	}
	
	 
	 
				}
					var openJobArrFinal = {
							"results": openJobsArr
						};

var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
//sap.ui.getCore().setModel(openJobsModel);
sap.ui.getCore().byId("mob03a").setCounter(g_open);
 	   
		});
		}
	 
	 else
		 {
	$.ajax({
		  url: "SaveJSONServlet?operation=Read&fileName=AllJobs.json&Append=false",
		  type: "post",
		  dataType: "text",
		  success: function(text){
			  
		  var allJobsArray = JSON.parse(text);
	//var allJobsData = allJobs();
	//var allJobsArray = allJobsData.d.results;
	

	for (var int = 0; int < allJobsArray.length; int++) {
		//if (  openJobs.indexOf(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo) != -1 )
		//	{
		/*if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP") {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				"OpearionText": allJobsArray[int].OpearionText,
				"Priority": allJobsArray[int].Priority,
				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo), //allJobsArray[int].CurrentStatus,
				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};*/
		
		 if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
			 {
			 
               if ((window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP" )	)
				{
            	   
            	   var openJobsItem = {
           				"OrderNo": allJobsArray[int].OrderNo,
           				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
           				"ActivityNo": allJobsArray[int].ActivityNo,
           				//"OpearionText": allJobsArray[int].OpearionText,
           				//"Priority": allJobsArray[int].Priority,
           				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo),

           				"StandardTextKey": allJobsArray[int].StandardTextKey,
           				"OrderType": allJobsArray[int].OrderType,
           				"TrainSet": allJobsArray[int].TrainSet,
           				"CarId": allJobsArray[int].CarId,
           				"CarZone": allJobsArray[int].CarZone,
           				"CarSystem": allJobsArray[int].CarSystem,
           				"RoadDesc": allJobsArray[int].RoadDesc,
           				"Equipment": allJobsArray[int].Equipment,
           				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
           				"SystemStatus": allJobsArray[int].SystemStatus,
           				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
           				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

           			};
				g_open++;
				openJobsArr.push(openJobsItem);
				If ("ACPT" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
				{
					g_ACT ++;
				}
				}
			
			 }
		 
		 else
			 {
		
		if (	allJobsArray[int].CurrentStatus != "RJCT" &&
				allJobsArray[int].CurrentStatus != "CANL" &&
				allJobsArray[int].CurrentStatus != "COMP") {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				//"OpearionText": allJobsArray[int].OpearionText,
				//"Priority": allJobsArray[int].Priority,
				"CurrentStatus": allJobsArray[int].CurrentStatus,

				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};

			g_open++;
			openJobsArr.push(openJobsItem);
		}
		}
		}
	
	var openJobArrFinal = {
			"results": openJobsArr
		};
		 
	
		var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
		sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("mob03a").setCounter(g_open);
		  }
	 });
		 }
	/*var openJobArrFinal = {
			"results": openJobsArr
		};
		 
	
		var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
		sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("mob03a").setCounter(g_open);*/
		
	

	
	
}

function filterClosedJobs() {
	
	/***********************************/
	

	g_open = 0;
	var openJobs = window.localStorage.getItem("JOBSA");
	var openJobsArr = [];
	 if(g_runningInTablet || g_runningOnPhone) 
		{
 	   var dataArrIni = [];
 	   readLocalFileOnDevice("AllJobs.json", function(funCall)
		
				{
 		   
 		  var allJobsArrayIni  = JSON.parse(funCall);
			 var allJobsArray = allJobsArrayIni.allJobs;
   		 // g_open = 0;
					g_closed = 0;
			//		g_ACT = 0;
				//	g_HOLD = 0;

					//var allJobsData = allJobs();
					/*var allJobsArray = allJobsData.d.results;
					var jobsMemArrayA = []; // Accepted
					var jobsMemArrayC = []; // Completed
*/	  		
				//	alert(allJobsArray.length);
					for (var int = 0; int < allJobsArray.length; int++) {
	

	//if (  openJobs.indexOf(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo) != -1 )
	//	{
	/*if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
			

		};*/
	
	 if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
		 {
		 
           if ((window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) == "COMP"	))
			{
        	   
        	   var openJobsItem = {
       				"OrderNo": allJobsArray[int].OrderNo,
       				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
       				"ActivityNo": allJobsArray[int].ActivityNo,
       				//"OpearionText": allJobsArray[int].OpearionText,
       				//"Priority": allJobsArray[int].Priority,
       				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo),

       				"StandardTextKey": allJobsArray[int].StandardTextKey,
       				"OrderType": allJobsArray[int].OrderType,
       				"TrainSet": allJobsArray[int].TrainSet,
       				"CarId": allJobsArray[int].CarId,
       				"CarZone": allJobsArray[int].CarZone,
       				"CarSystem": allJobsArray[int].CarSystem,
       				"RoadDesc": allJobsArray[int].RoadDesc,
       				"Equipment": allJobsArray[int].Equipment,
       				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
       				"SystemStatus": allJobsArray[int].SystemStatus,
       				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
       				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

       			};
        	   g_closed++;
			openJobsArr.push(openJobsItem);
			}
		
		 }
	 
	 else
		 {
	
	if (	allJobsArray[int].CurrentStatus == "COMP" ) {
		var openJobsItem = {
			"OrderNo": allJobsArray[int].OrderNo,
			//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
			"ActivityNo": allJobsArray[int].ActivityNo,
			//"OpearionText": allJobsArray[int].OpearionText,
			//"Priority": allJobsArray[int].Priority,
			"CurrentStatus": allJobsArray[int].CurrentStatus,

			"StandardTextKey": allJobsArray[int].StandardTextKey,
			"OrderType": allJobsArray[int].OrderType,
			"TrainSet": allJobsArray[int].TrainSet,
			"CarId": allJobsArray[int].CarId,
			"CarZone": allJobsArray[int].CarZone,
			"CarSystem": allJobsArray[int].CarSystem,
			"RoadDesc": allJobsArray[int].RoadDesc,
			"Equipment": allJobsArray[int].Equipment,
			"EquipmentDesc": allJobsArray[int].EquipmentDesc,
			"SystemStatus": allJobsArray[int].SystemStatus,
			"EarliestStartDate": allJobsArray[int].EarliestStartDate,
			"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

		};

		g_closed++;
		openJobsArr.push(openJobsItem);
	}
	}
	
	 
	 
				}
					var openJobArrFinal = {
							"results": openJobsArr
						};

var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
//sap.ui.getCore().setModel(openJobsModel);
sap.ui.getCore().byId("mob03c").setCounter(g_open);
 	   
		});
		}
	 
	 else
		 {
	$.ajax({
		  url: "SaveJSONServlet?operation=Read&fileName=AllJobs.json&Append=false",
		  type: "post",
		  dataType: "text",
		  success: function(text){
			  
		  var allJobsArray = JSON.parse(text);
	//var allJobsData = allJobs();
	//var allJobsArray = allJobsData.d.results;
	

	for (var int = 0; int < allJobsArray.length; int++) {
		//if (  openJobs.indexOf(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo) != -1 )
		//	{
		/*if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP") {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				"OpearionText": allJobsArray[int].OpearionText,
				"Priority": allJobsArray[int].Priority,
				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo), //allJobsArray[int].CurrentStatus,
				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};*/
		
		 if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
			 {
			 
               if ((window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP" )	)
				{
            	   
            	   var openJobsItem = {
           				"OrderNo": allJobsArray[int].OrderNo,
           				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
           				"ActivityNo": allJobsArray[int].ActivityNo,
           				//"OpearionText": allJobsArray[int].OpearionText,
           				//"Priority": allJobsArray[int].Priority,
           				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo),

           				"StandardTextKey": allJobsArray[int].StandardTextKey,
           				"OrderType": allJobsArray[int].OrderType,
           				"TrainSet": allJobsArray[int].TrainSet,
           				"CarId": allJobsArray[int].CarId,
           				"CarZone": allJobsArray[int].CarZone,
           				"CarSystem": allJobsArray[int].CarSystem,
           				"RoadDesc": allJobsArray[int].RoadDesc,
           				"Equipment": allJobsArray[int].Equipment,
           				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
           				"SystemStatus": allJobsArray[int].SystemStatus,
           				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
           				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

           			};
				g_open++;
				openJobsArr.push(openJobsItem);
				If ("ACPT" == window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
				{
					g_ACT ++;
				}
				}
			
			 }
		 
		 else
			 {
		
		if (	allJobsArray[int].CurrentStatus != "RJCT" &&
				allJobsArray[int].CurrentStatus != "CANL" &&
				allJobsArray[int].CurrentStatus != "COMP") {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				//"OpearionText": allJobsArray[int].OpearionText,
				//"Priority": allJobsArray[int].Priority,
				"CurrentStatus": allJobsArray[int].CurrentStatus,

				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};

			g_open++;
			openJobsArr.push(openJobsItem);
		}
		}
		}
	
	var openJobArrFinal = {
			"results": openJobsArr
		};
		 
	
		var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
		sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("mob03a").setCounter(g_open);
		  }
	 });
		 }
	/*var openJobArrFinal = {
			"results": openJobsArr
		};
		 
	
		var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
		sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("mob03a").setCounter(g_open);*/
		
	

	
	

	
	
	/*************************************
	
	

	g_closed = 0;
	var openJobs = window.localStorage.getItem("JOBSA");
	var openJobsArr = [];
	$.ajax({
		  url: "SaveJSONServlet?operation=Read&fileName=AllJobs.json&Append=false",
		  type: "post",
		  dataType: "text",
		  success: function(text){
			  
		  var allJobsArray = JSON.parse(text);
	//var allJobsData = allJobs();
	//var allJobsArray = allJobsData.d.results;
	

	for (var int = 0; int < allJobsArray.length; int++) {
		//if (  openJobs.indexOf(allJobsArray[int].OrderNo+"_"+allJobsArray[int].ActivityNo) != -1 )
		//	{
		/*if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "RJCT" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "CANL" &&
				window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) != "COMP") {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				"OpearionText": allJobsArray[int].OpearionText,
				"Priority": allJobsArray[int].Priority,
				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo), //allJobsArray[int].CurrentStatus,
				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};*
		 if (undefined != window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo))
		 {
		 
           if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) == "COMP" )	
			{
        	   
        	   var openJobsItem = {
       				"OrderNo": allJobsArray[int].OrderNo,
       				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
       				"ActivityNo": allJobsArray[int].ActivityNo,
       				//"OpearionText": allJobsArray[int].OpearionText,
       				//"Priority": allJobsArray[int].Priority,
       				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo),

       				/*"StandardTextKey": allJobsArray[int].StandardTextKey,
       				"OrderType": allJobsArray[int].OrderType,
       				"TrainSet": allJobsArray[int].TrainSet,
       				"CarId": allJobsArray[int].CarId,
       				"CarZone": allJobsArray[int].CarZone,
       				"CarSystem": allJobsArray[int].CarSystem,
       				"RoadDesc": allJobsArray[int].RoadDesc,
       				"Equipment": allJobsArray[int].Equipment,
       				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
       				"SystemStatus": allJobsArray[int].SystemStatus,
       				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
       				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate*

       			};
        	   g_closed++;
			openJobsArr.push(openJobsItem);
			}
		
		 }
	 
	 else
		 {
		
		if (	allJobsArray[int].CurrentStatus == "COMP" 
				) {
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				//"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				//"OpearionText": allJobsArray[int].OpearionText,
				//"Priority": allJobsArray[int].Priority,
				"CurrentStatus": allJobsArray[int].CurrentStatus,

				/*"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate*

			};

			g_closed++;
			openJobsArr.push(openJobsItem);
		}
		}
	}
	var openJobArrFinal = {
			"results": openJobsArr
		};
		var openJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
		sap.ui.getCore().byId("MOB03Master2List").setModel(openJobsModel);
		//sap.ui.getCore().setModel(openJobsModel);
		sap.ui.getCore().byId("mob03a").setCounter(g_open);
		}
	

	
	});

	
	/*
	g_closed = 0;
	var openJobs = window.localStorage.getItem("JOBSC");
	var allJobsData = allJobs();
	var allJobsArray = allJobsData.d.results;
	var openJobsArr = [];

	for (var int = 0; int < allJobsArray.length; int++) {
		if (window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo) == "COMP") {
			g_closed++;
			var openJobsItem = {
				"OrderNo": allJobsArray[int].OrderNo,
				"OperationObjectNo": allJobsArray[int].OperationObjectNo,
				"ActivityNo": allJobsArray[int].ActivityNo,
				"OpearionText": allJobsArray[int].OpearionText,
				"Priority": allJobsArray[int].Priority,
				"CurrentStatus": window.localStorage.getItem(allJobsArray[int].OrderNo + "_" + allJobsArray[int].ActivityNo), //allJobsArray[int].CurrentStatus,
				"StandardTextKey": allJobsArray[int].StandardTextKey,
				"OrderType": allJobsArray[int].OrderType,
				"TrainSet": allJobsArray[int].TrainSet,
				"CarId": allJobsArray[int].CarId,
				"CarZone": allJobsArray[int].CarZone,
				"CarSystem": allJobsArray[int].CarSystem,
				"RoadDesc": allJobsArray[int].RoadDesc,
				"Equipment": allJobsArray[int].Equipment,
				"EquipmentDesc": allJobsArray[int].EquipmentDesc,
				"SystemStatus": allJobsArray[int].SystemStatus,
				"EarliestStartDate": allJobsArray[int].EarliestStartDate,
				"EarliestFinishDate": allJobsArray[int].EarliestFinishDate

			};

			openJobsArr.push(openJobsItem);

		}
	}

	var openJobArrFinal = {
		"results": openJobsArr
	};
	var closedJobsModel = new sap.ui.model.json.JSONModel(openJobArrFinal);
	sap.ui.getCore().byId("MOB03Master2List").setModel(closedJobsModel);
	//sap.ui.getCore().setModel(closedJobsModel);
	sap.ui.getCore().byId("mob03c").setCounter(g_closed);

*/}
