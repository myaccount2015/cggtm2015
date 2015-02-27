sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.MOB21DetailSplitView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB21DetailSplitView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB21DetailSplitView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB21DetailSplitView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB21DetailSplitView
*/
//	onExit: function() {
//
//	}
	mob21CharDetSave : function()
	{
	
		 var sampleSize = sap.ui.getCore().byId("ip_samplesize").getValue(); 
		 if ( null == sampleSize || sampleSize == "")
			{
			 sap.m.MessageBox.show(

					 "Please provide value in mandatory field/s"

					 );


			// alert("Please provide value in mandatory field/s ");
			 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
			}
		
		else
			{
		 var rangeText = sap.ui.getCore().byId("text_er1"); 
		     rangeText =  rangeText.getText().replace(/,/g,".");
		 var index = rangeText.indexOf("..");
		 var startRange = rangeText.substring(0,index);
		 var endRange = rangeText.substring(index +2);
		 var startRangeInt =   parseInt(startRange);
		 var endRangeInt =   parseInt(endRange);
		
		 var sampleSizeInt = parseInt(sampleSize);
		 
		 if ( sampleSizeInt <  startRangeInt || sampleSizeInt > endRangeInt)
			 {
			 sap.m.MessageBox.show("Please provide a value in the allowed range",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
			 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
			 }
		 
		 else
			 {
//entering  the inspection ....
			 var demoswitch = sap.ui.getCore().byId("demoswitch");
				
				if (demoswitch.getState())
				{
					sap.m.MessageBox.show("inspection entered successfully");
					
				}
				
				else
					{
					//Service Start Time
			 var logInfo = getTimeStamp() +"MOB21:: Service: InsplotColl Start" ; ;
			 
			 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
			 if(serviceURL == "Fail")
			 {
			 return false;
			 }
		     var insLotNum = sap.ui.getCore().byId("Mob21lot"); 
				var oDataEnterInspection = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
				
				//var readRequestURL =
				//("/InsplotColl(Insplot_No='10000000217',Inspection_Operation_No='0010',Inspection_Char_No='8000')");
				var readRequestURL =(
					"/InsplotColl(Insplot_No=" + insLotNum.getText() + 
					",Inspection_Operation_No=" + globalInsOp + 
					",Inspection_Char_No=" + globalInsChar);
				
				oDataEnterInspection.setHeaders({
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token" : "Fetch",
					"DataServiceVersion" : "2.0"
				});
				var insResult = sap.ui.getCore().byId("ip_samplesize"); 				
				var createReqData = {
						"Inspection_Result" : "20"
						//"Inspection_Result" : insResult.getValue()
					};
				
				oDataEnterInspection.update(readRequestURL, createReqData, null, 
						function(oResponse) {
					
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Finish" ; 
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
				}, function(oError){ 
					//sap.m.MessageBox.show("Error While Entering the inspection " + oError.message +" "+oError.status+" "+oError.Statustype);
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
							var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Failed no network" ; 
							//Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
							}
							
							
							}
				
				
				});
					
			 
			 }
			}
		 
			}
	},
	
	removeLocalData : function()
	{
		
		
		   var items = window.localStorage.getItem('INSRES');
        	 if (items != undefined && items != null && items.length != 0)
        	 {
        		 
        		var insresults = [];
        		insresults = JSON.parse(items);
        		var insresultsLen = insresults.length;
        		
        		for ( index = 0; index < insresultsLen ; index ++)
        			{
        			  
        			 window.localStorage.removeItem(insresults[index]);
        			
                   }
        		 window.localStorage.removeItem('INSRES');
 
	}
	}
 
});