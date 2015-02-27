
sap.ui.controller("com.cg.gtm.view.Drop1_MOB29.Mob-29-printorderLabel", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mob29-labelprinting.Mob-29-printorderLabel
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mob29-labelprinting.Mob-29-printorderLabel
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mob29-labelprinting.Mob-29-printorderLabel
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mob29-labelprinting.Mob-29-printorderLabel
*/
//	onExit: function() {
//
//	}
	selectAll_mob29 : function()
	{
		var myList = sap.ui.getCore().byId("Mob29_Table")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("Mob29_Table").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  true ;
			
			
			}
		
		oListMOB19Model.updateBindings();
		
	},
	
	selectNone_29 : function()
	{

		var myList = sap.ui.getCore().byId("Mob29_Table")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("Mob29_Table").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  false ;
	
			
			}
		
		oListMOB19Model.updateBindings();
		
	
		
	},
	printSel : function(oEvent){
		var tabMaterialLst = sap.ui.getCore().byId("Mob29_Table");
		var oModel = tabMaterialLst.getModel();
        var data = tabMaterialLst.getSelectedItem().sId; 
		
		
		
		var strSelectedIndex = data.substring(data.lastIndexOf("-")+1);
		
		 selectedIndex = parseInt(strSelectedIndex);
 //indexOfItem(oEvent.getSource().listItems);  
			// select = MOB18SelectedIndex
		   //alert(selectedIndex);
	},
	
	searchPO : function(oEvent)
	{

		 var query = oEvent.mParameters.query;
		 var myInteger = (/^-?\d*(\.\d+)?$/);
		 var newval = query.substr(0,(query.length -1));
			
			if( !query.match(myInteger) )
			{
		    sap.m.MessageBox.show("Enter numeric values",sap.m.MessageBox.Icon.ERROR,"Error");
		    sap.ui.getCore().byId("idMob29search").setValue("");
			}
			else if(sap.ui.getCore().byId("idMob29search").getValue() ==""){
				sap.m.MessageBox.show("Please Provide Material Doc Number",sap.m.MessageBox.Icon.ERROR,"Error");
			}
			else{
		 
		 var defaultPlant =  window.localStorage.getItem("defPlantCode");
		debugger; 
	 openSplashScreen();
	// var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_LABLE_PRINT_SRV/PODetail?PONumber='"+query+"'");
	//Service Start Time
	 var logInfo =  getTimeStamp() +"MOB24:: Service: MaterialDoc Start" ; 
	
	 
	 
	 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_LABLE_PRINT_SRV/MaterialDocList?MaterialDoc='"+query+"'&Plant='"+defaultPlant+"'");
	 if(serviceURL == "Fail")
	 {
	 return false;
	 }
	 var aData = jQuery.ajax({   
	     url : serviceURL,
	     type: "GET",
         contentType : "application/json",
         dataType : 'json',
         success : function(data, textStatus, jqXHR) {
             debugger;
        	 var GetAllJSONRecord = data.d.results;
        	
        	 var aData1 = [];
        	 
        	 
        	 for( var i =0; i < GetAllJSONRecord.length; i++)
        		 {
        		 var createData = {
            			 "MaterialNo": GetAllJSONRecord[i].Material,
            			 "MaterialDocNo": GetAllJSONRecord[i].MaterialDocNo,
            			 "MaterialDesc": GetAllJSONRecord[i].MaterialDescription,
            			 "MaterialDocItem": GetAllJSONRecord[i].MaterialDocItem,
            			  "TotalLineItem":GetAllJSONRecord.length,
            			  "Quantity":GetAllJSONRecord[i].Quantity,
            			  "UOM":GetAllJSONRecord[i].UOM,
            			  "Plant":GetAllJSONRecord[i].Plant
            	 };
        		 aData1.push(createData);
        		 }
        	 
        	 
        	 
        	   var oModel2 = new sap.ui.model.json.JSONModel();
				
				oModel2.setData({modelData: aData1});
				sap.ui.getCore().byId("Mob29_Table").setModel(oModel2);
		     
				closeSplashScreen();
				
				if( g_isDebug == true)
				{
				//Service End Time
				var logInfo1 =  getTimeStamp() +"MOB24:: Service: MaterialDoc Finish" ; 
				//Log file Service Start and End Time
				var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				logFileUpdate(g_ServiceStartEndTime);
				}
				
         },
	 error: function(XMLHttpRequest, textStatus, errorThrown) {
	       sap.ui.getCore().byId("idMob29search").setValue("");
		   var aData1 = [];
		   var oModel2 = new sap.ui.model.json.JSONModel();
		   oModel2.setData({modelData: aData1});
		   sap.ui.getCore().byId("Mob29_Table").setModel(oModel2);
		   
		   	   
		 
		 
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
					sap.m.MessageBox.show(e.message+ " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");break;
					}}}catch(e)
					{sap.m.MessageBox.show(
							"Service Not Available - Please contact system administrator" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 =  getTimeStamp() +"MOB24:: Service: MaterialDoc Failed no network" ; 
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
					
					}
		            closeSplashScreen();
	 }
});

	
	}
	 
		
	}
});

function PrintLabelToServicePO()
{
	
	
	var mat = sap.ui.getCore().byId("osearch_material_1").getValue();
	var baserial = sap.ui.getCore().byId("PrintLabSerBatIp1").getValue();
	var batchN = sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").getValue();
    var qty = sap.ui.getCore().byId("PrtLabIPQty").getValue();
    if(sap.ui.getCore().byId("Mob29_copies_field").getValue == ""){
		sap.m.MessageBox.show(
					"Please provide no. of copies to print",
			sap.m.MessageBox.Icon.ERROR,"Error");
	}
    else
	
	{
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB29:: Service: MaterialsSet Start" ;

		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_LABLE_PRINT_SRV/");
		
		if(serviceURL == "Fail")
		 {
		 return false;
		 }
		
		
		var oDataCreateLabPrint = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var readRequestURL = "/MaterialsSet";
		
		oDataCreateLabPrint.setHeaders({
			"X-Requested-With" : "XMLHttpRequest",
			"Content-Type" : "application/json",
			"X-CSRF-Token" : "Fetch",
			"DataServiceVersion" : "2.0"
		});

		//defPrinCode
	/*	var defaultPrinter =  window.localStorage.getItem("defPrinCode");
		if( defaultPrinter != "" || defaultPrinter != null || defaultPrinter != undefined)
			
			{
			var createReqData = {
					"DestPrinter" : sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedKey()//sap.ui.getCore().byId("Mob29_Selected_PrinterType").getText(),				
					};
			}
		else
			{*/
			//Selected printer
			var createReqData = {
					"DestPrinter" : sap.ui.getCore().byId("Mob29_DestinationPrinter").getSelectedItem().getText(),				
					};
		//	}
		
		
		/////////////// > or = than 1 Copies///////////////////////////////////////
		
		//input id: Mob29_copies_field-Mob29_Table-0
		//No of rows: sap.ui.getCore().byId("Mob29_Table").getModel().oData.modelData[0].TotalLineItem
		
		//iteration
		
		var noOfRows = sap.ui.getCore().byId("Mob29_Table").getModel().oData.modelData[0].TotalLineItem;
		var getTotalRec = sap.ui.getCore().byId("Mob29_Table").getModel().oData;
		var NonZeroCopiesRecArray = [];
		
		
		
		var tabMaterialLst = sap.ui.getCore().byId("Mob29_Table");
		var oModel = tabMaterialLst.getModel();
      //  var data = tabMaterialLst.getSelectedItem().sId; 
		
		
		
		//var strSelectedIndex = data.substring(data.lastIndexOf("-")+1);
		
		//var selectedIndex = parseInt(strSelectedIndex);
	//	alert(selectedIndex);
		//var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		//var oModel = tabMaterialLst.getModel();
		
		var lenMaterialLst = oModel.oData.modelData.length;
		
		var arrJSONMatLst = oModel.oData.modelData;
		
debugger;
		
		for(i=0;i<lenMaterialLst;i++) {
			if(i==selectedIndex) {
				//alert("bypassed if");
				var getCopiesValue = sap.ui.getCore().byId("Mob29_copies_field-Mob29_Table-"+i).getValue();
				
				if( getCopiesValue == "" || getCopiesValue == 0)
					{
						sap.m.MessageBox.show(
					"Please provide number of copies to print",
			sap.m.MessageBox.Icon.ERROR,"Error");
					}
				
				else
					{
							
					
					//NonZeroCopiesRec.push(getValue);
					//Create DeepEntity
					
					var createDeepEntityModel = {
						"MaterialDocNo" : 	getTotalRec.modelData[i].MaterialDocNo,
						"MaterialDocItem" : getTotalRec.modelData[i].MaterialDocItem,
						"Material":getTotalRec.modelData[i].MaterialNo,
						"Plant" : getTotalRec.modelData[i].Plant,
						"Quantity" : getCopiesValue
							
					};
					
					NonZeroCopiesRecArray.push(createDeepEntityModel);

					createReqData.MatPurchase =  NonZeroCopiesRecArray;
		
		
		
		
		
		/*var lineItems = [];
		lineItems.push({Dummy : "DUMMY" ,PONumber : "4500000753" , POItem: "00010" , Quantity : "1" , Material : "200003"});
		lineItems.push({Dummy : "DUMMY" ,PONumber : "4500000753" , POItem: "00020" , Quantity : "1" , Material : "200004"});
		//lineItems.push({Dummy : "DUMMY" ,PONumber : "4500000753" , POItem: "00010" , Quantity : "1" , Material : "200003"});
		createReqData.MatPurchase =  lineItems ;*/		
		openSplashScreen();//splash screen opened
		setTimeout(function(){
		    closeSplashScreen();//splash screen closed
		oDataCreateLabPrint.create(readRequestURL, createReqData, null, 
				function(oResponse) {
				
		var msg = "Print Request has been sent successfully";
        sap.m.MessageToast.show(msg);	
        var app = sap.ui.getCore().byId("myApp");
	    app.to("idMOB29LabelPrintingView");
        sap.ui.getCore().byId("Mob29-checkPrintFrstTime").setText("1"); // First time request sent
		
        
        if( g_isDebug == true)
        {
        //Service End Time
        var logInfo1 = getTimeStamp() +"MOB29:: Service: MaterialsSet Finish" ;
        //Log file Service Start and End Time
        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
        logFileUpdate(g_ServiceStartEndTime);
        }
        
        
		
		},
		function(oError){
			  
			 try
				{var data = JSON.parse(oError.response.body);
				for(var event in data)
				{var dataCopy = data[event];	
					try{
					var messageFromBackend = dataCopy.innererror.errordetails[0].message;
					sap.m.MessageBox.show(
				    		   messageFromBackend+ " " +" "+" ",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
				}catch(e)
					{sap.m.MessageBox.show(
								 e.message+ " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,
									"Error");
						break;
					}}}
		 
			catch(e)
				{
				sap.m.MessageBox.show(
                "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,
							"Error");
				if( g_isDebug == true)
		        {
		        //Service End Time
		        var logInfo1 = getTimeStamp() +"MOB29:: Service: MaterialsSet Failed no network" ;
		        //Log file Service Start and End Time
		        var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        logFileUpdate(g_ServiceStartEndTime);
		        }
				
				
				
				}
			
		}
		
		
		);

		  },1000);//constant delay				
					}
			}
			}
		
		
	
		
		
		
		
}	
	}
	
