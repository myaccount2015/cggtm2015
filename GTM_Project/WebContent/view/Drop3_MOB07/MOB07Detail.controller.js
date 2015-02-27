sap.ui.controller("com.cg.gtm.view.Drop3_MOB07.MOB07Detail", {
	
	handleNavButtonPress: function () {
		sap.ui.getCore().byId("MOB07SplitApp").backDetail();
	},
	
	handleChangeAssetButtonPress: function () {

		
		debugger;
			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	     	var equip= sap.ui.getCore().byId("MOB07AssetList").getModel().getProperty(sap.ui.getCore().byId("MOB07AssetList").getSelectedItem().getBindingContext().sPath+ "/Equnr");
			//var equip= "800001" ;
	     	var readRequestURL = "AssetSet?$filter=Equnr eq '"+equip+"'&$expand=NavStProfile,NavGenData,NavSpecData,NavStData,NavMeasPt,NavDocs,NavCval&$format=json";
	     	oModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) {
	     		debugger;
	     		sap.ui.getCore().byId("myApp").to("MOB08Detail");
	    		
	    		var equipDetailData= oData.results[0];
	    		
	    		//Setting Doc Data
	    		
	    		var docData= equipDetailData.NavDocs;
	    		var model= new sap.ui.model.json.JSONModel(docData);
    			sap.ui.getCore().byId("MOB08DocList").setModel(model);
	    		
	    		//setting header data
				sap.ui.getCore().byId("MOB08_AssetObjHead").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHead").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHead").setTitle(equipDetailData.NavGenData.results[0].Descript);
				sap.ui.getCore().byId("MOB08_AssetObjHead").getAttributes()[0].setText(equipDetailData.NavSpecData.results[0].InstPos);
				//setting Manufacture data
				sap.ui.getCore().byId("MOB08MF").setValue(equipDetailData.NavGenData.results[0].Manfacture);
	    		sap.ui.getCore().byId("MOB08MFPART").setValue(equipDetailData.NavGenData.results[0].Manparno);
	    		sap.ui.getCore().byId("MOB08MFMODEL").setValue(equipDetailData.NavGenData.results[0].Manmodel);
	    		sap.ui.getCore().byId("MOB08MFSERIAL").setValue(equipDetailData.NavGenData.results[0].Manserno);
	    		
	    		
	    		//setting header data for UserStatus
	    		
	    		sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setTitle(equipDetailData.NavGenData.results[0].Descript);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").getAttributes()[0].setText(equipDetailData.NavSpecData.results[0].InstPos);
	    		//setting user status
	    		
	    		var verticalLayout= sap.ui.getCore().byId("MOB08FormTwo").getContent()[1];
	    		verticalLayout.removeAllContent();
	    		
	    		var statusList=equipDetailData.NavStData.results;
	    		


	    		var statusProfiles= equipDetailData.NavStProfile.results;
	    		
	    		for(var i=0;i<statusProfiles.length;i++){
	    			
	    			var selected= getStatus(i);
	    			if(statusProfiles[i].Stonr=="00"){
						verticalLayout.addContent(new sap.m.CheckBox({
						text: statusProfiles[i].Txt30,
						selected: selected
	    				
	    			}
					));
						
					
	    			}
	    	    		else{
	    	    			verticalLayout.addContent(new sap.m.RadioButton({
	    						groupName: "userStatus",
	    						text: statusProfiles[i].Txt30,
	    						selected: selected
	    	    			}
	    					));
	    	    			}
	    		}

	    		function getStatus(index){
	    			var selected= false;
	    				if(statusList.length>0){
	    					for(var j=0;j<statusList.length;j++){
	    						if(statusProfiles[index].Estat==statusList[j].Stat && statusList[j].Inact!="X"){
	    							selected= true;
	    	
	    						}
	    					}
	    				}
					return selected;		
	    		}
	    		
	    		//setting header data for Classification
	    		
	    		sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setTitle(equipDetailData.NavGenData.results[0].Descript);
	    		//setting characteristics data for classification
				
				var characteristicsData= equipDetailData.NavCval.results;
				var charateristicsTable= sap.ui.getCore().byId("MOB08CharactTable");
				charateristicsTable.removeAllItems();
				
				if(characteristicsData.length>0){
					for(i=0;i<characteristicsData.length;i++){
						var charDataType= characteristicsData[i].CharDataType;
						if(characteristicsData[i].CharEdit=="X"){
							var valuehelpRequired= true;
							
						}
						else{
							var valuehelpRequired= false;
						}
						if(charDataType=="CHAR"){
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }), 
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.Input({
											showValueHelp: true,
											enabled: valuehelpRequired,
											maxLength:characteristicsData[i].CharNum,
											valueHelpOnly : true ,
											value : characteristicsData[i].ValueChar,
											valueHelpRequest: [sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail").handleClassificationValueHelp]
										}),
							          ]
							}));
							
						}
						else if(charDataType=="DATE"){
							var dateValue=characteristicsData[i].ValueFrom;
							dateValue= parseFloat(dateValue).toString();
							var finalDate= dateValue.substring(4,6)+"/"+dateValue.substring(6,8)+"/"+dateValue.substring(2,4)
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }), 
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.DatePicker({
							        	 value : finalDate
							         }),  ]
							}));
							}
						else if(charDataType=="CURR"){
							
							var currencyValue=characteristicsData[i].ValueFrom;
						currencyValue=parseFloat(currencyValue).toString();
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }),  
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.Input({
							        	 value : currencyValue,
							        	 description:characteristicsData[i].CurrencyFrom
							         }),  ]
							}));
							}
						
					}
					
					
				}
				
	    		
	    		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "ASTCHG");
	     	},
	              
	              
	              function(oError){
	     		
	     		
	     	});	
			
		
		
	
		
		
		
	},
	
handleComponentDocListItemPress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Documenttype");
   		var Documentpart = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Documentpart");
   		var Documentversion = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Documentversion");
   		var Originaltype = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Originaltype");
		var Wsapplication = sap.ui.getCore().byId("MOB07DocList").getModel().getProperty(contextPath + "/Wsapplication");
		
   		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV");
   		var results = "/DocumentSet(Documentnumber='"  +  Documentnumber  +
   	    "',Documenttype='"    +  Documenttype    +
   	    "',Documentpart='"    +  Documentpart    +
   	    "',Documentversion='" +  Documentversion +
   	    "',Originaltype='"   +  Originaltype    +"')/$value";
		var url12 = url1 + results;
   		if(g_runningOnPhone == false && g_runningInTablet == false) {
   			    window.open(url12, '_blank'); 
				window.focus();	
				
		} else {
		if(Wsapplication == "JPG" || Wsapplication == "PNG")
		{
		downloadAndDisplayImage(url12);
		}
		else if(Wsapplication == "PDF"){
		downloadAndDisplayPDF(url12);
		}
			
		}
		
		
	},
	
	handleUseAssetButtonPress: function () {
		var selectedAsset=sap.ui.getCore().byId("MOB07AssetList").getSelectedItem().getNumber();
		//alert(g_trainordepot);
		//alert(selectedAsset);
		
		if ( g_MOB07Entry == "MOB33")
			{

			if ( g_trainordepot == "T" )
				{
				sap.ui.getCore().byId("MOB33EQT").setValue(selectedAsset);
				}
			
			else
				{
				sap.ui.getCore().byId("MOB33EQD").setValue(selectedAsset);
				}
				
			
			}
		else
			{
		if ( g_trainordepot == "T" )
			{
			sap.ui.getCore().byId("MOB01EQT").setValue(selectedAsset);
			}
		
		else
			{
			sap.ui.getCore().byId("MOB01EQD").setValue(selectedAsset);
			}
			}
		
		sap.ui.getCore().byId("MOB07SplitApp").backDetail();
		sap.ui.getCore().byId("MOB07AssetList").removeSelections();
		sap.ui.getCore().byId("myApp").back();
		//debugger;
		//selectedAsset to be used for putting the value in MOB01
		
		
	}

});