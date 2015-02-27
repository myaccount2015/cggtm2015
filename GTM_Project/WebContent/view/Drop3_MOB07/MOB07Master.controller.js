sap.ui.controller("com.cg.gtm.view.Drop3_MOB07.MOB07Master", {

	handleNavButtonPress: function () {
		

		sap.ui.getCore().byId("MOB07SplitApp").backToTopDetail();
		//sap.ui.getCore().byId("MOB07AssetList").removeSelections();
		sap.ui.getCore().byId("myApp").back();
	
		
		//sap.ui.getCore().byId("myApp").back();
	},
	handleSearch: function(oEvent) {
		
		var sValue = oEvent.getParameter("value");
		var oFilter = new sap.ui.model.Filter("desc", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter1 = new sap.ui.model.Filter("code", sap.ui.model.FilterOperator.Contains, sValue);
		var oFilter2= new sap.ui.model.Filter([oFilter,oFilter1],false)
		var oBinding = oEvent.getSource().getBinding("items");
		oBinding.filter(oFilter2);
		
		},
	
	handleHelpButtonPress: function (evt) {
		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB07";
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
		sap.ui.getCore().byId("MOB07TrainForm").setVisible(true);
		sap.ui.getCore().byId("MOB07DepotForm").setVisible(false);
	},

	handleDepotButtonPress: function () {
		sap.ui.getCore().byId("MOB07DepotAreaInput").setEnabled(false);
		sap.ui.getCore().byId("MOB07TrainForm").setVisible(false);
		sap.ui.getCore().byId("MOB07DepotForm").setVisible(true);
	},
	handleEquipmentValueHelpT:function(){
		
		
	},
	handleSearchButtonPress: function () {
		
		backNavMat="MOB07Search";
	//	alert(g_MOB07LOC);
		var param = "";
		if(g_MOB07LOC){
		param= sap.ui.getCore().byId(g_MOB07LOC).getValue();
	
		}   //this gives the value in the last field entered
		
		else{
		     param= "";
		}
		//alert(param);
		if(sap.ui.getCore().byId("MOB07SegmentedButton").getSelectedButton()=="MOB07TrainButton"){
			if ( null == sap.ui.getCore().byId("MOB07FleetInput").getValue() || "" == sap.ui.getCore().byId("MOB07FleetInput").getValue()  ||
					null == sap.ui.getCore().byId("MOB07TrainInput").getValue() || "" == sap.ui.getCore().byId("MOB07TrainInput").getValue())
				{
				alert( "Please provide data in all mandatory fields");
				
				}
			else
				{
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
		
		var fleet= sap.ui.getCore().byId("MOB07FleetInput").getValue();
		var eqnum = sap.ui.getCore().byId("MOB07EQT").getValue();
		
     	var readRequestURL = "/AssetSet?$filter=Floc eq '"+param+"' and Fleet eq '"+fleet+"' and Equnr eq '"+eqnum+"'&$format=json&$top=200";
		
     	oModel.read(readRequestURL, null, null, false,   
              function(oData, oResponse) {
     		debugger;
     		var data= oData;
     		var model= new sap.ui.model.json.JSONModel(data);
     		//alert("yoyo..."+oData.results.length);
     		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found");
    		sap.ui.getCore().byId("MOB07AssetList").setModel(model);
    		
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
		}
		}
		else{
			if ( null == sap.ui.getCore().byId("MOB07DepotInput").getValue() || "" == sap.ui.getCore().byId("MOB07DepotInput").getValue())//  ||
				//	null == sap.ui.getCore().byId("MOB07DepotAreaInput").getValue() || "" == sap.ui.getCore().byId("MOB07DepotAreaInput").getValue())
				{
				alert( "Please provide data in all mandatory fields");
				
				}
			else
				{

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			
			var fleet= sap.ui.getCore().byId("MOB07FleetInput").getValue();
			var eqnum = sap.ui.getCore().byId("MOB07EQD").getValue();
			
	     //	var readRequestURL = "/AssetSet?$filter=Floc eq '"+param+"' and Fleet eq '"+fleet+"' and Equnr eq '"+eqnum+"'&$format=json&$top=200";
	     	var readRequestURL = "/AssetSet?$filter=Floc eq '"+param+"' and Equnr eq '"+eqnum+"'&$format=json";
			
	     	oModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) {
	     		debugger;
	     		var data= oData;
	     		var model= new sap.ui.model.json.JSONModel(data)
	     		sap.ui.getCore().byId("MOB07AssetList").getInfoToolbar().getContent()[0].setText(oData.results.length+ " Asset(s) found")
	    		sap.ui.getCore().byId("MOB07AssetList").setModel(model);
	    		
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
			
			
			
		}
		
		
		//var offline = false; //parameter added for testing
/*		if(offline){
			   if(g_runningInTablet || g_runningOnPhone) 
				{
		    	   readLocalFileOnDevice("AssetList.json", function(funCall)
				
						{
					
					 var assetDataArr = JSON.parse(funCall);
					 
					 var dataArrIni = [];
						for ( var i = 0 ; i < assetDataArr.length ; i ++)
							{
							
							if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
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
							MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
							//MOB02Dialog.setTitle(evt.getSource().getName());
							var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
							MOB01Dialog.setModel(codesModel);
							MOB01Dialog.open();
					 
				});
				}
				else
					{
				$.ajax({
					  url: "SaveJSONServlet?operation=Read&fileName=AssetList.json&Append=false",
					  type: "post",
					  dataType: "text",
					  success: function(text){
					 debugger;
					      var assetDataArr = JSON.parse(text);
					      var dataArrIni = [];
					      
					      
					      
					      *//*****code needed for MOB07 search List binding***********//*
							for ( var i = 0 ; i < assetDataArr.length ; i ++)
								{
								
								if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
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
								MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
								//MOB02Dialog.setTitle(evt.getSource().getName());
								var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
								MOB01Dialog.setModel(codesModel);
								MOB01Dialog.open();
					      //var objJobToProcess = {"Key": jobTran.Key, "Transaction": jobTran.Tran, "Header": objJSONTran.Header, "Items": objJSONTran.Items};
					      //processTransactionDrop3(objJobToProcess);
					  },
					  error:function(){
					  }   
					}); 
				
				var assetDataArr = assetData.d.results;;
				var dataArrIni = [];
				for ( var i = 0 ; i < assetDataArr.length ; i ++)
					{
					
					if ( assetDataArr[i].Ingrp == sFleet && assetDataArr[i].Tplma.length == 0)
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
					MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", sap.ui.getCore().byId("MOB01Master").getController());
					//MOB02Dialog.setTitle(evt.getSource().getName());
					var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
					MOB01Dialog.setModel(codesModel);
					MOB01Dialog.open();
					}
			
		}*/
	//	else{
		
		
	//}	
			}
			//}
		
	},
	
	handleValueHelpDepotArea : function( evt)
	{
		
		
		     g_AssetSrch =  "MOB07DepotAreaInput";
			readLocalFileOnDevice("AssetListDepot.json", function(funCall){
				
				g_MOB07LOC="MOB07DepotAreaInput";
				var depot = sap.ui.getCore().byId("MOB07DepotInput").getValue();
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
					MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
	{/*
		
		var dataArrIni = [];
		g_AssetSrch = "MOB07FleetInput";	
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
			MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
			//MOB02Dialog.setTitle(evt.getSource().getName());
			var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
			MOB07Dialog.setModel(codesModel);
			MOB07Dialog.open();
			*/
		g_MOB07LOC= "MOB07FleetInput";
		g_AssetSrch = "MOB07FleetInput";
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
						sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
						sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
		
			},
			
	
	handleValueHelpTrain : function( evt)
	{

		//returnTrains("EC");
		g_AssetSrch = "MOB07TrainInput";	
       //var sFleet = sap.ui.getCore().byId("MOB07FleetInput").getValue();
       
       var sFleet = sap.ui.getCore().byId("MOB07FleetInput").getValue();
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
				MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
			
			},
	
	handleDialogConfirm : function(evt)
	{
		

		var oSelectedItem = evt.getParameter("selectedItem");
	//	alert(g_AssetSrch);
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(g_AssetSrch);
			
			if ( input.getValue() == oSelectedItem.getTitle() )
				{
				input.setValue(oSelectedItem.getTitle());
				
				}
			
			else {

				if ( g_AssetSrch == "MOB07FleetInput")
				{
					g_MOB07LOC= "MOB07FleetInput";
					sap.ui.getCore().byId("MOB07TrainInput").setValue("");
					sap.ui.getCore().byId("MOB07TrainInput").setEnabled(true);

					sap.ui.getCore().byId("MOB07CarInput").setValue("");
					sap.ui.getCore().byId("MOB07CarInput").setEnabled(false);

					sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);
				}
				else if ( g_AssetSrch == "MOB07TrainInput")
				{
					g_MOB07LOC= "MOB07TrainInput"
					sap.ui.getCore().byId("MOB07CarInput").setValue("");
					sap.ui.getCore().byId("MOB07CarInput").setEnabled(true);

					sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(false);

					sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);
				}
				
				////
				else if ( g_AssetSrch == "MOB07DepotInput")
				{
					g_MOB07LOC= "MOB07DepotInput"
					sap.ui.getCore().byId("MOB07DepotAreaInput").setValue("");
					sap.ui.getCore().byId("MOB07DepotAreaInput").setEnabled(true);
					
					//input.setValue(oSelectedItem.getTitle() + "_" +);

					
				}
				else if ( g_AssetSrch == "MOB07DepotAreaInput")
				{
					g_MOB07LOC= "MOB07DepotAreaInput"
					
				}
				////

				else if ( g_AssetSrch == "MOB07CarInput")
				{
					g_MOB07LOC= "MOB07CarInput"
					sap.ui.getCore().byId("MOB07ZoneInput").setValue("");
					sap.ui.getCore().byId("MOB07ZoneInput").setEnabled(true);

					sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(false);
				}
				else if ( g_AssetSrch == "MOB07ZoneInput")
				{
					g_MOB07LOC= "MOB07ZoneInput"
					sap.ui.getCore().byId("MOB07PrimarySystemInput").setValue("");
					sap.ui.getCore().byId("MOB07PrimarySystemInput").setEnabled(true);
				}
				else {
					
					g_MOB07LOC= "MOB07PrimarySystemInput"

				}
				input.setValue(oSelectedItem.getTitle());
				
				if ( g_AssetSrch == "MOB07DepotAreaInput")
					{
					
					sap.ui.getCore().byId("MOB07DepotAreaInput").setValue(oSelectedItem.getDescription().split(":")[0]);
					}
				if (g_AssetSrch == "MOB07DepotInput")
				{
				
				sap.ui.getCore().byId("MOB07DepotAreaInput").setEnabled(true);
				}

			}
			
			
			
		}
		//evt.getSource().getBinding("items").filter([]);
		
		//alert(g_MOB07LOC);
		
	},
	
	handleValueHelpCar : function( evt)
	{

		//returnTrains("EC");
		g_AssetSrch = "MOB07CarInput";	
      //  var sTrain = sap.ui.getCore().byId("MOB07TrainInput").getValue();
        
        var sTrainAll = sap.ui.getCore().byId("MOB07TrainInput").getValue();
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
				
				MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
			
			},
			
			handleValueHelpZone : function( evt)
			{

				//returnTrains("EC");
				g_AssetSrch = "MOB07ZoneInput";	
		        var sCar = sap.ui.getCore().byId("MOB07CarInput").getValue();
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
						MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
					
					},
					
					handleValueHelpPrimary : function( evt)
					{

						//returnTrains("EC");
						g_AssetSrch = "MOB07PrimarySystemInput";	
				        var sZone = sap.ui.getCore().byId("MOB07ZoneInput").getValue();
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
								MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
						
						
							
							},
							
							handleValueHelpDepot : function( evt)
							{
								g_MOB07LOC="MOB07DepotInput"
								//returnTrains("EC");
								g_AssetSrch = "MOB07DepotInput";	
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
											MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Master").getController());
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
									},

});