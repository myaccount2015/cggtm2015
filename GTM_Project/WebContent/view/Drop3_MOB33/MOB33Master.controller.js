sap.ui.controller("com.cg.gtm.view.Drop3_MOB33.MOB33Master", {

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
	},
	handleSearch: function(oEvent) {
		
		var sValue = oEvent.getParameter("value");
		var oFilter = new sap.ui.model.Filter("desc", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter1 = new sap.ui.model.Filter("code", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter2= new sap.ui.model.Filter([oFilter,oFilter1],false)
		var oBinding = oEvent.getSource().getBinding("items");
		oBinding.filter(oFilter2);
		
		},
	handleHelpButtonPress: function () {


   
		
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB33";
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

	handleTrainButtonPress: function () {
		sap.ui.getCore().byId("MOB33TrainForm").setVisible(true);
		sap.ui.getCore().byId("MOB33DepotForm").setVisible(false);
	},

	handleDepotButtonPress: function () {
		sap.ui.getCore().byId("MOB33TrainForm").setVisible(false);
		sap.ui.getCore().byId("MOB33DepotForm").setVisible(true);
	},

	handleSearchButtonPress: function () {
		
		//var selected = sap.ui.getCore().byId(sap.ui.getCore().byId("MOB33SegmentedButton").getSelectedButton());
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	 	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var equipment= sap.ui.getCore().byId("MOB33EQD").getValue();
		var fleet= sap.ui.getCore().byId("MOB33FleetInput").getValue();
		//alert(g_MOB33LOC);
		
		var param = "";
		if(g_MOB33LOC){
		param= sap.ui.getCore().byId(g_MOB33LOC).getValue();
	
		}   //this gives the value in the last field entered
		
		else{
		     param= "";
		}
		
		var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"' and Floc eq '"+param+"' and Fleet eq '"+fleet+"'&$format=json&$top=200";
		//alert(readRequestURL);
	 	oModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) {
	 		var data= oData.d;
	 		var measurements = new sap.ui.model.json.JSONModel(data);
	 		sap.ui.getCore().byId("MOB33ResultsList").setModel(measurements);
			sap.ui.getCore().byId("MOB33SplitApp").toMaster("MOB33MasterTwo");
	 	},
	          function(oError){  
				errorRes = true;
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
						}
	});

				
		
		
		
		//var measurements = new sap.ui.model.json.JSONModel("view/data/measurements.json");
		//sap.ui.getCore().byId("MOB33ResultsList").setModel(measurements);
		//sap.ui.getCore().byId("MOB33SplitApp").toMaster("MOB33MasterTwo");
		
		
		
		
	},
	
	handleValueHelpEq : function()
	{
		/*var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
		sap.ui.getCore().byId("MOB07AssetList").setModel(assets);
		sap.ui.getCore().byId("myApp").to("MOB07Initial");
		sap.ui.getCore().byId("MOB07SplitApp").to("MOB07MasterTwo");*
		
		
		backNavMat = "MOB33T";
		var app = sap.ui.getCore().byId("myApp");  
        app.to("MOB24Initial"); 
        sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24Master");
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Empty");
        
        /*var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");*
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);*/
		g_trainordepot = "T";
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var equipment= sap.ui.getCore().byId("MOB33EQT").getValue();
		var fleet= sap.ui.getCore().byId("MOB33FleetInput").getValue();
		
		 
     	var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"' and Floc eq '"+g_MOB033LOC+"' and Fleet eq '"+fleet+"'&$format=json&$top=200";
		
     	oModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
     		var data= oData;
     		var model= new sap.ui.model.json.JSONModel(data);
     		//alert(oData.results.length);
     		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found");
    		sap.ui.getCore().byId("MOB07AssetList").setModel(model);
     		backNavMat = "MOB01T";
    		//var app = sap.ui.getCore().byId("myApp");  
     		sap.ui.getCore().byId("myApp").to("MOB07Initial");
    		sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
     		//	sap.ui.getCore().byId("MOB07AssetList").setModel(assets); //this line is to set the model 
     		//sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
     	},
              
              
              function(oError){  
		
				errorRes = true;
				//sap.m.MessageBox.show(oError.message);
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
						
						
						
						}
     	});
		
		
	},
	
	handleValueHelpEqD : function()
	{
		/*var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
		sap.ui.getCore().byId("MOB07AssetList").setModel(assets);
		sap.ui.getCore().byId("myApp").to("MOB07Initial");
		sap.ui.getCore().byId("MOB07SplitApp").to("MOB07MasterTwo");*
		
		
		backNavMat = "MOB33D";
		var app = sap.ui.getCore().byId("myApp");  
        app.to("MOB24Initial"); 
        sap.ui.getCore().byId("MOB24SplitApp").toMaster("MOB24Master");
		sap.ui.getCore().byId("MOB24SplitApp").toDetail("MOB24Empty");
        
        /*var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");*
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true);*/
		
		
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	 	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		var equipment= sap.ui.getCore().byId("MOB33EQD").getValue();
		var fleet= sap.ui.getCore().byId("MOB33FleetInput").getValue();
		
		// alert(g_MOB01LOC);
	 	var readRequestURL = "/AssetSet?$filter=Equnr eq '"+equipment+"' and Floc eq '"+g_MOB033LOC+"' and Fleet eq '"+fleet+"'&$format=json&$top=200";
		
	 	oModel.read(readRequestURL, null, null, false,   
	          function(oData, oResponse) {
	 		debugger;
	 		var data= oData;
	 		var model= new sap.ui.model.json.JSONModel(data);
	 		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found");
			sap.ui.getCore().byId("MOB07AssetList").setModel(model);
	 		backNavMat = "MOB01T";
			//var app = sap.ui.getCore().byId("myApp");  
	 		sap.ui.getCore().byId("myApp").to("MOB07Initial");
			sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
	 		//	sap.ui.getCore().byId("MOB07AssetList").setModel(assets); //this line is to set the model 
	 		//sap.ui.getCore().byId("MOB07SplitApp").toMaster("MOB07MasterTwo");
	 	},
	          
	          
	          function(oError){  
		
				errorRes = true;
				//sap.m.MessageBox.show(oError.message);
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
						
						
						}
						});
	 	
		
		
	},
	
	handleValueHelpDepotArea : function( evt)
	{/*
		

		g_MOB07LOC="MOB33DepotAreaInput";
		var depot = sap.ui.getCore().byId("MOB07DepotInput").getValue();
		var depotCode = depot;
		var depotDesc = depot.split("-")[1];
		var dataArrIni = [];
		g_AssetSrch = "MOB33DepotAreaInput";	
		var data = {
				"code" : "OFCE",
					"desc" : depotCode + "-OFCE" + ":" + depotDesc + "-Office" ,//"Office",
				//"desc" : "OFC"
				
		};
		dataArrIni.push(data);
		
		var data = {
				"code" : "SHED",
				"desc" : depotCode + "-SHED" + ":" + depotDesc + "-Shed" , //"code" : "Shed",
				//"desc" : "SHD"
		};
		dataArrIni.push(data);
		var data = {
				"code" : "STOR",
				"desc" : depotCode + "-STOR" + ":" + depotDesc + "-Stores" , //"code" : "Strore",
				//"desc" : "STR"
				
		};
		dataArrIni.push(data);
		
		var data = {
				"code" : "YARD",
				"desc" : depotCode + "-YARD" + ":" + depotDesc + "-Yard"  , //"code" : "Yard",
				//"desc" : "YRD"
		};
				dataArrIni.push(data);
				
				var data = {
						"code" : "Yard",
						"desc" : "YRD"
				};
				dataArrIni.push(data);
				
		
		var dataArrFinal = {"results" : dataArrIni};
			//MOB02InputId = evt.getSource().sId;
			MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
			MOB07Dialog.setTitle("Choose Area");
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB07Dialog.setModel(codesModel);
			MOB07Dialog.open();
			*/
		

		
		
	     g_AssetSrch =  "MOB33DepotAreaInput";
		readLocalFileOnDevice("AssetListDepot.json", function(funCall){
			
			g_MOB33LOC="MOB33DepotAreaInput";
			var depot = sap.ui.getCore().byId("MOB33DepotInput").getValue();
			var depotCode = depot;
			var depotDesc = depot.split("-")[1];
			
		
			 var assetDataArr = JSON.parse(funCall);
			 var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					
					if ( assetDataArr[i].ObjType == "20001" &&  assetDataArr[i].SupFloc == depotCode)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc.split("-")[1]  , //+"-"+assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].Floc+":"+assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				
				var dataArrFinal = {"results" : dataArrIni};
				//MOB02InputId = evt.getSource().sId;
				MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
				MOB07Dialog.setTitle("Choose Area");
				var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
				MOB07Dialog.setModel(codesModel);
				MOB07Dialog.open();
			 
		});
		
		/*
	g_MOB07LOC="MOB07DepotAreaInput";
	var depot = sap.ui.getCore().byId("MOB07DepotInput").getValue();
	var depotCode = depot;
	var depotDesc = depot.split("-")[1];
	var dataArrIni = [];
	g_AssetSrch = "MOB07DepotAreaInput";	
	var data = {
			"code" : "OFCE",
				"desc" : depotCode + "-OFCE" + ":" + depotDesc + "-Office" ,//"Office",
			//"desc" : "OFC"
			
	};
	dataArrIni.push(data);
	
	var data = {
			"code" : "SHED",
			"desc" : depotCode + "-SHED" + ":" + depotDesc + "-Shed" , //"code" : "Shed",
			//"desc" : "SHD"
	};
	dataArrIni.push(data);
	var data = {
			"code" : "STOR",
			"desc" : depotCode + "-STOR" + ":" + depotDesc + "-Stores" , //"code" : "Strore",
			//"desc" : "STR"
			
	};
	dataArrIni.push(data);
	
	var data = {
			"code" : "YARD",
			"desc" : depotCode + "-YARD" + ":" + depotDesc + "-Yard"  , //"code" : "Yard",
			//"desc" : "YRD"
	};
			dataArrIni.push(data);
			
			/*var data = {
					"code" : "Yard",
					"desc" : "YRD"
			};*
			dataArrIni.push(data);
			
	
	var dataArrFinal = {"results" : dataArrIni};
		//MOB02InputId = evt.getSource().sId;
		MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
		MOB07Dialog.setTitle("Choose Area");
		var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
		MOB07Dialog.setModel(codesModel);
		MOB07Dialog.open();*/
		},
	
	handleValueHelpFleet : function( evt)
	{
		

		g_MOB07LOC= "MOB33FleetInput";
		g_AssetSrch = "MOB33FleetInput";
		if(g_runningInTablet || g_runningOnPhone) 
		{
    	   var dataArrIni = [];
    	   readLocalFileOnDevice("MasterData.json", function(funCall)
		
				{
			
    		   var fleet = JSON.parse(funCall);
			 
			 assetDataArr = fleet[0].Nav2PlannerGroup.results ;
		      var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					
						
						var data = {
								"code" : assetDataArr[i].Ingrp  , //+"-"+assetDataArr[i].Innam
								"desc" : assetDataArr[i].Innam
								
						};
						dataArrIni.push(data);
						
						
					}
			 
			/* var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Fleet == sFleet && assetDataArr[i].SupFloc.length == 0)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc + "-" + assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}*/
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB01Dialog = 
						sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
					MOB01Dialog.setTitle("Choose Fleet");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();
			 
		});
		}
		else
			{
		$.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=MasterData.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var fleet = JSON.parse(text);
			      assetDataArr = fleet[0].Nav2PlannerGroup.results ;
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						
							
							var data = {
									"code" : assetDataArr[i].Ingrp+"-"+assetDataArr[i].Innam
									//"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					MOB07Dialog = 
						sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
					MOB07Dialog.setTitle("Choose Fleet");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB07Dialog.setModel(codesModel);
					MOB07Dialog.open();
			      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
			      //processTransactionDrop3(objJobToProcess);
			  },
			  error:function(){
			  }   
			}); 
			}
		
			
		
		
		/*var dataArrIni = [];
		g_AssetSrch = "MOB33FleetInput";	
				var data = {
						"code" : "EC",
						"desc" : "East Coast"
						
				};
				dataArrIni.push(data);
				
				var data = {
						"code" : "GW",
						"desc" : "Grear Western"
				};
				dataArrIni.push(data);
				
		
		var dataArrFinal = {"results" : dataArrIni};
			//MOB02InputId = evt.getSource().sId;
			MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
			//MOB02Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB07Dialog.setModel(codesModel);
			MOB07Dialog.open();*/
			},
	
	handleValueHelpTrain : function( evt)
	{
		


		//returnTrains("EC");
		g_AssetSrch = "MOB33TrainInput";	
	    var sFleet = sap.ui.getCore().byId("MOB33FleetInput").getValue();
      // var sFleetArr = sFleetAll.split("-");
       //var sFleet = sFleetArr[0];
       if(g_runningInTablet || g_runningOnPhone) 
		{
   	   readLocalFileOnDevice("AssetList.json", function(funCall)
		
				{
			
			 var assetDataArr = JSON.parse(funCall);
			 
			 var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Fleet == sFleet && assetDataArr[i].SupFloc.length == 0)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc  ,  //+ "-" + assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				//var dataArrFinal = {"results" : dataArrIni};
				
				
				var dataArrFinal = {"results" : dataArrIni};
				MOB07Dialog = 
					sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
				MOB07Dialog.setTitle("Search Trains");
				var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
				MOB07Dialog.setModel(codesModel);
				MOB07Dialog.open();
			 
		});
		}
		else
			{
       $.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var assetDataArr = JSON.parse(text);
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc + "-" + assetDataArr[i].FlocDesc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
					MOB07Dialog.setTitle("Search Trains");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB07Dialog.setModel(codesModel);
					MOB07Dialog.open();
			  },
			  error:function(){
			  }   
			}); 
			}
			
			
       /*

		//returnTrains("EC");
		g_AssetSrch = "MOB33TrainInput";	
       var sFleet = sap.ui.getCore().byId("MOB33FleetInput").getValue();
		var assetData =  allAssets();
		var assetDataArr = assetData.d.results;;
		var dataArrIni = [];
		for ( var i = 0 ; i < assetDataArr.length ; i ++)
			{
			
			if ( assetDataArr[i].FilterIngrp == sFleet && assetDataArr[i].Tplma.length == 0)
				{
				
				var data = {
						"code" : assetDataArr[i].Tplnr,
						"desc" : assetDataArr[i].Pltxt
						
				};
				dataArrIni.push(data);
				
				}
			}
		
		var dataArrFinal = {"results" : dataArrIni};
		
		
			//MOB02InputId = evt.getSource().sId;
			MOB33Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
			//MOB02Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB33Dialog.setModel(codesModel);
			MOB33Dialog.open();*/
			},
	
	handleDialogConfirm : function(evt)
	{
		//alert(g_AssetSrch);
		g_MOB33LOC =   g_AssetSrch ;//oSelectedItem.getTitle();
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(g_AssetSrch);
			
			if ( input.getValue() == oSelectedItem.getTitle() )
				{
				//alert("1");
				input.setValue(oSelectedItem.getTitle());
				
				}
			
			else {

				if ( g_AssetSrch == "MOB33FleetInput")
				{

					g_MOB033LOC =  "MOB33FleetInput";
					sap.ui.getCore().byId("MOB33TrainInput").setValue("");
					sap.ui.getCore().byId("MOB33TrainInput").setEnabled(true);

					sap.ui.getCore().byId("MOB33CarInput").setValue("");
					sap.ui.getCore().byId("MOB33CarInput").setEnabled(false);

					sap.ui.getCore().byId("MOB33ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB33ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(false);
				}
				else if ( g_AssetSrch == "MOB33TrainInput")
				{

					
					g_MOB033LOC =  "MOB33TrainInput";
					
					sap.ui.getCore().byId("MOB33CarInput").setValue("");
					sap.ui.getCore().byId("MOB33CarInput").setEnabled(true);

					sap.ui.getCore().byId("MOB33ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB33ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(false);
				}

				else if ( g_AssetSrch == "MOB33CarInput")
				{

					g_MOB033LOC =  "MOB33CarInput";
					
					sap.ui.getCore().byId("MOB33ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB33ZoneInput").setEnabled(true);

					sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(false);
				}

				else {
					
					g_MOB033LOC =  "MOB33PrimarySystemInput"; 
					sap.ui.getCore().byId("MOB33PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB33PrimarySystemInput").setEnabled(true);

				}
				input.setValue(oSelectedItem.getTitle());
				
				if ( g_AssetSrch == "MOB33DepotAreaInput")
				{
					
					sap.ui.getCore().byId("MOB33DepotAreaInput").setValue(oSelectedItem.getDescription().split(":")[0]);
					//g_MOB33LOC = oSelectedItem.getDescription().split(":")[0];
				}
				

			}
			
		}
		//evt.getSource().getBinding("items").filter([]);
		
	},
	
	handleValueHelpCar : function( evt)
	{


		//returnTrains("EC");
		g_AssetSrch = "MOB33CarInput";	
        var sTrainAll = sap.ui.getCore().byId("MOB33TrainInput").getValue();
        var sTrainArr = sTrainAll.split("-");
        var sTrain = sTrainArr[0];
        if(g_runningInTablet || g_runningOnPhone) 
		{
    	   readLocalFileOnDevice("AssetList.json", function(funCall)
		
				{
			
			 var assetDataArr = JSON.parse(funCall);
			 
			 var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].SupFloc == sTrain)
						{
						
						var data = {
								"code" : assetDataArr[i].Floc,
								"desc" : assetDataArr[i].FlocDesc
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				var dataArrFinal = {"results" : dataArrIni};
				
				MOB07Dialog = 
					sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
				MOB07Dialog.setTitle("Search Car");
				var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
				MOB07Dialog.setModel(codesModel);
				MOB07Dialog.open();
			 
		});
		}
		else
			{
        $.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			      //alert("success");
			      var assetDataArr = JSON.parse(text);
			      var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						if ( assetDataArr[i].SupFloc == sTrain)
							{
							
							var data = {
									"code" : assetDataArr[i].Floc,
									"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							}
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					
					MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
					MOB07Dialog.setTitle("Search Car");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB07Dialog.setModel(codesModel);
					MOB07Dialog.open();
			  },
			  error:function(){
			  }   
			}); 
			}
			
			
        
		/*

		//returnTrains("EC");
		g_AssetSrch = "MOB33CarInput";	
        var sTrain = sap.ui.getCore().byId("MOB33TrainInput").getValue();
		var assetData =  allAssets();
		var assetDataArr = assetData.d.results;;
		var dataArrIni = [];
		for ( var i = 0 ; i < assetDataArr.length ; i ++)
			{
			
			if ( assetDataArr[i].Tplma == sTrain)
				{
				
				var data = {
						"code" : assetDataArr[i].Tplnr,
						"desc" : assetDataArr[i].Pltxt
						
				};
				dataArrIni.push(data);
				
				}
			}
		
		var dataArrFinal = {"results" : dataArrIni};
		
		
			//MOB02InputId = evt.getSource().sId;
			MOB33Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
			//MOB02Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB33Dialog.setModel(codesModel);
			MOB33Dialog.open();
			*/},
			
			handleValueHelpZone : function( evt)
			{


				//returnTrains("EC");
				g_AssetSrch = "MOB33ZoneInput";	
		        var sCar = sap.ui.getCore().byId("MOB33CarInput").getValue();
		        if(g_runningInTablet || g_runningOnPhone) 
				{
		    	   readLocalFileOnDevice("AssetList.json", function(funCall)
				
						{
					
					 var assetDataArr = JSON.parse(funCall);
					 
					 var dataArrIni = [];
						for ( var i = 0 ; i < assetDataArr.length ; i ++)
							{
							
							if ( assetDataArr[i].SupFloc == sCar)
								{
								
								var data = {
										"code" : assetDataArr[i].Floc,
										"desc" : assetDataArr[i].FlocDesc
										
								};
								dataArrIni.push(data);
								
								}
							}
						
						//var dataArrFinal = {"results" : dataArrIni};
						var dataArrFinal = {"results" : dataArrIni};
						MOB07Dialog = 
							sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
						MOB07Dialog.setTitle("Search Zone");
						var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
						MOB07Dialog.setModel(codesModel);
						MOB07Dialog.open();
					 
				});
				}
				else
					{
		        $.ajax({
					  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
					  type: "post",
					  dataType: "text",
					  success: function(text){
						  var assetDataArr = JSON.parse(text);
						  var dataArrIni = [];
					for ( var i = 0 ; i < assetDataArr.length ; i ++)
						{
						
						if ( assetDataArr[i].SupFloc == sCar)
							{
							
							var data = {
									"code" : assetDataArr[i].Floc,
									"desc" : assetDataArr[i].FlocDesc
									
							};
							dataArrIni.push(data);
							
							}
						}
					
					var dataArrFinal = {"results" : dataArrIni};
					MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
					MOB07Dialog.setTitle("Search Zone");
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB07Dialog.setModel(codesModel);
					MOB07Dialog.open();
					  },
					  error:function(){
					  }   
					
					  
			        }); 
					}
				
				
					//MOB02InputId = evt.getSource().sId;
					
					
		        
				/*

				//returnTrains("EC");
				g_AssetSrch = "MOB33ZoneInput";	
		        var sCar = sap.ui.getCore().byId("MOB33CarInput").getValue();
				var assetData =  allAssets();
				var assetDataArr = assetData.d.results;;
				var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Tplma == sCar)
						{
						
						var data = {
								"code" : assetDataArr[i].Tplnr,
								"desc" : assetDataArr[i].Pltxt
								
						};
						dataArrIni.push(data);
						
						}
					}
				
				var dataArrFinal = {"results" : dataArrIni};
				
				
					//MOB02InputId = evt.getSource().sId;
					MOB33Dialog = 
					sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
					//MOB02Dialog.setTitle(evt.getSource().getName());
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB33Dialog.setModel(codesModel);
					MOB33Dialog.open();
					*/},
					
					handleValueHelpPrimary : function( evt)
					{


						//returnTrains("EC");
						g_AssetSrch = "MOB33PrimarySystemInput";	
				        var sZone = sap.ui.getCore().byId("MOB33ZoneInput").getValue();
				        if(g_runningInTablet || g_runningOnPhone) 
						{
				    	   readLocalFileOnDevice("AssetList.json", function(funCall)
						
								{
							
							 var assetDataArr = JSON.parse(funCall);
							 
							 var dataArrIni = [];
								for ( var i = 0 ; i < assetDataArr.length ; i ++)
									{
									
									if ( assetDataArr[i].SupFloc == sZone)
										{
										
										var data = {
												"code" : assetDataArr[i].Floc,
												"desc" : assetDataArr[i].FlocDesc
												
										};
										dataArrIni.push(data);
										
										}
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								MOB07Dialog = 
									 sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
								MOB07Dialog.setTitle("Choose Primary System");
								var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
								MOB07Dialog.setModel(codesModel);
								MOB07Dialog.open();
							 
						});
						}
						else
							{
				        $.ajax({
							  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
							  type: "post",
							  dataType: "text",
							  success: function(text){
								  var assetDataArr = JSON.parse(text);
								  var dataArrIni = [];
									for ( var i = 0 ; i < assetDataArr.length ; i ++)
										{
										
										if ( assetDataArr[i].SupFloc == sZone)
											{
											
											var data = {
													"code" : assetDataArr[i].FlocDesc,
													"desc" : assetDataArr[i].FlocDesc
													
											};
											dataArrIni.push(data);
											
											}
										}
									
									var dataArrFinal = {"results" : dataArrIni};
									//MOB02InputId = evt.getSource().sId;
									MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
									MOB07Dialog.setTitle("Choose Primary System");
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB07Dialog.setModel(codesModel);
									MOB07Dialog.open();
								},
							  error:function(){
							  }   
							
							  
					        });
							}
						
						
							
							
						
						/*

						//returnTrains("EC");
						g_AssetSrch = "MOB33PrimarySystemInput";	
				        var sZone = sap.ui.getCore().byId("MOB33ZoneInput").getValue();
						var assetData =  allAssets();
						var assetDataArr = assetData.d.results;;
						var dataArrIni = [];
						for ( var i = 0 ; i < assetDataArr.length ; i ++)
							{
							
							if ( assetDataArr[i].Tplma == sZone)
								{
								
								var data = {
										"code" : assetDataArr[i].Tplnr,
										"desc" : assetDataArr[i].Pltxt
										
								};
								dataArrIni.push(data);
								
								}
							}
						
						var dataArrFinal = {"results" : dataArrIni};
						
						
							//MOB02InputId = evt.getSource().sId;
							MOB33Dialog =
				 sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
							//MOB02Dialog.setTitle(evt.getSource().getName());
							var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
							MOB33Dialog.setModel(codesModel);
							MOB33Dialog.open();
							*/},
							
							handleValueHelpDepot : function( evt)
							{
								

								g_MOB07LOC="MOB33DepotInput"
								//returnTrains("EC");
								g_AssetSrch = "MOB33DepotInput";	
								/*var depotData =  allDepots();
								var depotDataArr = depotData.d.results;;
								var dataArrIni = [];
								for ( var i = 0 ; i < depotDataArr.length ; i ++)
									{
									
										var data = {
												"code" : depotDataArr[i].depotName,
												//"desc" : assetDataArr[i].Pltxt
												
										};
										dataArrIni.push(data);
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								
								
									//MOB02InputId = evt.getSource().sId;
									MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
									//MOB02Dialog.setTitle(evt.getSource().getName());
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB07Dialog.setModel(codesModel);
									MOB07Dialog.open();*/
								
								 if(g_runningInTablet || g_runningOnPhone) 
									{readLocalFileOnDevice("AssetListDepot.json", function(funCall){
										
										 var assetDataArr = JSON.parse(funCall);
										 var dataArrIni = [];
											for ( var i = 0 ; i < assetDataArr.length ; i ++)
												{
												
												
												if ( assetDataArr[i].ObjType == "20000")
													{
													
													var data = {
															"code" : assetDataArr[i].Floc ,// +"-"+assetDataArr[i].FlocDesc,
															"desc" : assetDataArr[i].FlocDesc
															
													};
													dataArrIni.push(data);
													
													}
												}
											
											var dataArrFinal = {"results" : dataArrIni};
											
											
												//MOB02InputId = evt.getSource().sId;
											MOB07Dialog = 
												sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
											MOB07Dialog.setTitle("Search Depot/Area");
												var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
												MOB07Dialog.setModel(codesModel);
												MOB07Dialog.open();
										 
									});
									}
								 
								 else
									 {

								$.ajax({
									  url: "SaveJSONServlet?operation=Read&fileName=AssetListDepot.json&Append=false",
									  type: "post",
									  dataType: "text",
									  success: function(text){
									      //alert("success");
									      var assetDataArr = JSON.parse(text);
									      var dataArrIni = [];
											for ( var i = 0 ; i < assetDataArr.length ; i ++)
												{
												
												
												if ( assetDataArr[i].ObjType == "20000")
													{
													
													var data = {
															"code" : assetDataArr[i].Floc+"-"+assetDataArr[i].FlocDesc,
															"desc" : assetDataArr[i].FlocDesc
															
													};
													dataArrIni.push(data);
													
													}
												}
											
											var dataArrFinal = {"results" : dataArrIni};
											
											
												//MOB02InputId = evt.getSource().sId;
											MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
											MOB07Dialog.setTitle("Search Depot");
												var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
												MOB07Dialog.setModel(codesModel);
												MOB07Dialog.open();
									      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
									      //processTransactionDrop3(objJobToProcess);
									  },
									  error:function(){
									  }   
									}); 
									 }
									
								 /*
								MOB33DepotInput
								//returnTrains("EC");
								g_AssetSrch = "MOB33DepotInput";	
								var depotData =  allDepots();
								var depotDataArr = depotData.d.results;;
								var dataArrIni = [];
								for ( var i = 0 ; i < depotDataArr.length ; i ++)
									{
									
										var data = {
												"code" : depotDataArr[i].depotName,
												//"desc" : assetDataArr[i].Pltxt
												
										};
										dataArrIni.push(data);
									}
								
								var dataArrFinal = {"results" : dataArrIni};
								
								
									//MOB02InputId = evt.getSource().sId;
									MOB33Dialog = 
									sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB33.MOB33Dialog", sap.ui.getCore().byId("MOB33Master").getController());
									//MOB02Dialog.setTitle(evt.getSource().getName());
									var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
									MOB33Dialog.setModel(codesModel);
									MOB33Dialog.open();
									*/},
	

});