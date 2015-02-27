sap.ui.jsview("com.cg.gtm.view.Drop2_MOB28.MOB28InitialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB28.MOB28InitialView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB28.MOB28InitialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB28.MOB28InitialView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var oSplitAppMOB28 = new sap.m.SplitApp({id : "idMOB28SplitApp"});
//	var oSplitAppMOB28 = new sap.m.SplitApp({id : "idMOB28SplitApp"});
		
		var oSplitAppMOB28 = sap.ui.getCore().byId("idMOB28SplitApp");
		
		/*if(typeof oSplitAppMOB28 == 'undefined' || oSplitAppMOB28 == null )
			{
			var oSplitAppMOB28 = new sap.m.SplitApp({id : "idMOB28SplitApp"});
			}*/
		var masterpage = sap.ui.view({id:"idMOB28MasPg", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28MasterPage", type:sap.ui.core.mvc.ViewType.JS});
		
		
		  sap.ui.getCore().byId("LocallblLoadingPageMob28").setText("1");
		if ( g_runningOnPhone == true)
		{
			var matListpage = sap.ui.view({id:"idMob28MatListPage", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28MatList", type:sap.ui.core.mvc.ViewType.JS});	
			var matDetpage = sap.ui.view({id:"idMob28MatDetPage", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28MatDetails", type:sap.ui.core.mvc.ViewType.JS});		
			var app = sap.ui.getCore().byId("myApp"); 
			var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
			app.addPage(masterpage);
			app.addPage(matListpage).addPage(matDetpage).addPage(idCommonPlantSearch);
			//app.to(masterpage);
		}else
			{
			//var detailTwoPage = sap.ui.view({id:"idMOB28TwoScreen", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28TwoScreenView", type:sap.ui.core.mvc.ViewType.JS});
			var detailTwoPage = sap.ui.view({id:"idMOB28TwoScreen", viewName:"com.cg.gtm.view.Drop2_MOB28.MOB28TwoScreenView", type:sap.ui.core.mvc.ViewType.JS});
			var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
			oSplitAppMOB28.addMasterPage(masterpage);
			oSplitAppMOB28.addMasterPage(idCommonPlantSearch);
			//oSplitAppMOB28.addDetailPage(detBlank);
			oSplitAppMOB28.addDetailPage(detailTwoPage);
			oSplitAppMOB28.toMaster(masterpage);
			//oSplitAppMOB28.toDetail(detBlank);
			}
		//oSplitApp.setMode("PopoverMode");
		
	setMovTypeDD();
	setStoTypeDD();
		
		function setStoTypeDD()
		{
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB28:: Service: StoragetypeList Start" ;

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }

			
			var Mob28StoTypeDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL =  "/StoragetypeList?WHouse='"+window.localStorage.getItem("defWHCode")+"'&$format=json";
				
				
			Mob28StoTypeDataModel.read(readRequestURL, null, null, false,   
				              function(oData, oResponse) { 
				var result = oResponse.body; //Getting JSON response body
				var jsonObj = JSON.parse(result); // Parsing the JSON Object		
				var result = jsonObj.d; // Taking the result inside namespace d
				var resultArr = result.results;
				var resultArrIni = [];
				 var dropDownDataArr = [] ;
				 var dropDownDataBlank = {  							    
							"text": "--Select--" ,
							"key" : ""						  
										 }; 
					myKey =  resultArr[0].Storagetype;
					dropDownDataArr.push(dropDownDataBlank);	
				 for ( var index = 0 ; index < resultArr.length ;  index ++ )
					 {
					 
						var dropDownDataBlank = {  							    
								"text": resultArr[index].StoragetypeDesc ,
								"key" :  resultArr[index].Storagetype						  
											 }; 
						dropDownDataArr.push(dropDownDataBlank);	
						
					 }
				 
				 gValStoType =  	dropDownDataArr[0].key;
					myKey =  dropDownDataArr[0].key;	
						
						var dropDownDataFinal = [];
						dropDownDataFinal = {"itemsStotype" : dropDownDataArr};
					    var oModelJsonList = new sap.ui.model.json.JSONModel();  
					    oModelJsonList.setData(dropDownDataFinal); 
						sap.ui.getCore().byId("ddstotypeMOB28").setModel(oModelJsonList); 	
						//sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB28:: Service: StoragetypeList Finish" ;
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
						{sap.m.MessageBox.show(e.message+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");break;
						}}}catch(e){sap.m.MessageBox.show(
	                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
						
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB28:: Service: StoragetypeList Failed no network" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
						
						}
				
				//alert(oError.message);
	});	
			
		
		
		}
		function setMovTypeDD()
		{
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB28:: Service: WMMvttypeList Start" ;

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }

			
			
			var Mob28MMovTypeDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL =  "/WMMvttypeList?WHouse='NP1'&$format=json";
				
				
			Mob28MMovTypeDataModel.read(readRequestURL, null, null, false,   
				              function(oData, oResponse) { 
				var result = oResponse.body; //Getting JSON response body
				var jsonObj = JSON.parse(result); // Parsing the JSON Object		
				var result = jsonObj.d; // Taking the result inside namespace d
				var resultArr = result.results;
				var resultArrIni = [];
				 var dropDownDataArr = [] ;
				 for ( var index = 0 ; index < resultArr.length ;  index ++ )
					 {
					 
						var dropDownDataBlank = {  							    
								"text": resultArr[index].MovetypeDesc ,
								"key" :  resultArr[index].Movetype						  
											 }; 
						dropDownDataArr.push(dropDownDataBlank);	
						
					 }
					gValMovType =  resultArr[0].Movetype;
						
						var dropDownDataFinal = [];
						dropDownDataFinal = {"itemsMovtype" : dropDownDataArr};
					    var oModelJsonList = new sap.ui.model.json.JSONModel();  
					    oModelJsonList.setData(dropDownDataFinal); 
						sap.ui.getCore().byId("ddmovtypeMOB28").setModel(oModelJsonList); 	
						//sap.ui.getCore().byId("ddgrtypeMOB19").setSelectedKey("PO");
					 
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB28:: Service: WMMvttypeList Finish" ;
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
						{sap.m.MessageBox.show(e.message+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");break;
						}}}catch(e){sap.m.MessageBox.show(
	                    "Service Not Available - Please contact system administrator" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
						
						if( g_isDebug == true)
						{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB28:: Service: WMMvttypeList Failed no network" ;
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
						}
						
						}
				
				//alert(oError.message);
	});	
			
		
		}
		
		function resetScreensMOB28()
		{
			
			
		}
	
		if ( g_runningOnPhone == true)
		{

			
			return new sap.m.Page({
	 			id : "Mob28-BackNavButton",
				title: "Posting Change",
				content: [
				          
				          	masterpage         
				
				],
				
				headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
					
					 
						
						showHeader: true,
						
				showNavButton: true,
				enableScrolling: false,
	            navButtonTap:function(){  
	            	  g_MobileNavigationId = "MainGrid-Inventory";
	            	           sap.ui.getCore().byId("LocallblLoadingPageMob28").setText("1");
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           //Hide third screen Mob20
	  				    	//   Mob20HideThirdScreen();
	                           app.to("idGridSubMenuIMWM");
	                           
	                           

	                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").loadMOB28();
	                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").setStoTypeDD();
	                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").setMovTypeDD();
	                           
	                          
		                       
	            }
	 		
	 		
			});
		
		}
		else
			{
		
 		return new sap.m.Page({
 			id : "Mob28-BackNavButton",
			title: "Change stock status",
			content: [
			          
			          oSplitAppMOB28        
			
			],
			
			showNavButton: true,
			enableScrolling: false,
            navButtonTap:function(){ 
            	  g_MobileNavigationId = "MainGrid-Inventory";
            	           sap.ui.getCore().byId("LocallblLoadingPageMob28").setText("1");
                           var app = sap.ui.getCore().byId("myApp"); 
                           //Hide third screen Mob20
  				    	//   Mob20HideThirdScreen();
                           app.to("idGridSubMenuIMWM");
                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").loadMOB28();
                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").setStoTypeDD();
                           sap.ui.controller("com.cg.gtm.view.GridSubMenuIMWM").setMovTypeDD();
                          
            }
 		
 		
		});
	}
	}

});