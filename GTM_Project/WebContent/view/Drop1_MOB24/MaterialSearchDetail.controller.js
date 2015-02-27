sap.ui.controller("com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.MaterialSearchDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.MaterialSearchDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.MaterialSearchDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.MaterialSearchDetail
*/
//	onExit: function() {
//
//	}
	
	handleIconTabBarSelect : function(oControlEvent)
	{
		

		var key = oControlEvent.mParameters.key;
		if( key == "Mob24Image")
			{
			openSplashScreen();
			var matnum = sap.ui.getCore().byId("valMatNo2").getText();  
			var listId = "Mob24ImageListItem";
			var MobId= "Mob24";
			var type = "IMG";
			getDocument(matnum,listId,MobId,type);
			closeSplashScreen();
			}
		else if(key == "Mob24Doc" )
			{
			openSplashScreen();
			var matnum = sap.ui.getCore().byId("valMatNo2").getText();  
			var listId = "Mob24DocumentListItem";
			var MobId= "Mob24";
			var type = "DOC";
			getDocument(matnum,listId,MobId,type);
			closeSplashScreen();
			}
		
		
		
	},
	
	handleMob24SelectedDocListpress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
		var results = "(Documentnumber='"  +  Documentnumber  +
	    "',Documenttype='"    +  Documenttype    +
	    "',Documentpart='"    +  Documentpart    +
	    "',Documentversion='" +  Documentversion +
	    "',Originaltype='"   +  Originaltype    +"')/$value";
		url1 = url1 + results;
	
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
		//navigator.app.loadUrl(url1, { openExternal:true } );
			downloadAndDisplayPDF(url1);
		}
		
		
	},
	
handleMob24SelectedImageListpress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
		var results = "(Documentnumber='"  +  Documentnumber  +
	    "',Documenttype='"    +  Documenttype    +
	    "',Documentpart='"    +  Documentpart    +
	    "',Documentversion='" +  Documentversion +
	    "',Originaltype='"   +  Originaltype    +"')/$value";
		url1 = url1 + results;
	
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
			downloadAndDisplayImage(url1);
		}
		
		
	},
	
	
	onMaterialSel: function() {
		
		
		calling_service_material_to_get_more_vendor();//get selected material number-vendor informations
		serialBatchValidation(sap.ui.getCore().byId("valMatNo2").getText());//SerialBatch Validation
	
		var deselect = sap.ui.getCore().byId("listMatNo");
		deselect.removeSelections();
		//deselect.setSelectedItemById(sap.ui.getCore().byId("stdMatSel"),false);
		
		
		//Reset Input fields in MaterialSearch
		
	    
	    var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
		plantLst.setValue(defaultPlantName);
		
	    var desc = sap.ui.getCore().byId("txtDesc").setValue("");
	    
	    var manuf = sap.ui.getCore().byId("txtManu").setValue("");
	    
	    var matGrp = sap.ui.getCore().byId("txtMtrGrp").setValue("");
	   
	    var extMatGrp = sap.ui.getCore().byId("txtExtMtrGrp").setValue("");
	    
	    var vendor = sap.ui.getCore().byId("txtVendor").setValue("");
	   
	    var venPartNo = sap.ui.getCore().byId("txtVenPartNo").setValue("");  
	    
	    if(!g_runningOnPhone) {
	    	$("#idMATSRDetail").hide();
	    	sap.ui.getCore().byId("idMATSRDetail").addStyleClass("idMATSRDetailNone");
	    }
		if(backNavMat=="Mob15CreateNoti") {
			
		
				var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
				//alert(selectedText);
				if(globalMob15Detail == "Q1") {
					sap.ui.getCore().byId("inputMatnr").setValue(selectedText);
					sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
					var app = sap.ui.getCore().byId("myApp");  
		    		app.to("idMob15DetailsQ1");
				}else if(globalMob15Detail == "Q11") {
					sap.ui.getCore().byId("inputMatnr1").setValue(selectedText);
					sap.ui.getCore().byId("inputMatnr1").setValueState(sap.ui.core.ValueState.None);
				}else if(globalMob15Detail == "Q3") {
					sap.ui.getCore().byId("inputMatnr2").setValue(selectedText);
					sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
					var app = sap.ui.getCore().byId("myApp");  
		    		app.to("idMob15DetailsQ3");
				}else if(globalMob15Detail == "F2") {
					sap.ui.getCore().byId("inputMatnr3").setValue(selectedText);
					sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
					var app = sap.ui.getCore().byId("myApp");  
		    		app.to("idMob15DetailsF2");
				}else if(globalMob15Detail == "F3") {
					sap.ui.getCore().byId("inputMatnr4").setValue(selectedText);
					sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
					var app = sap.ui.getCore().byId("myApp");  
		    		app.to("idMob15DetailsF3");
				}

    		//var app = sap.ui.getCore().byId("myApp");  
            //app.to("idMob15Notification");
    	}
		else if (backNavMat=="Mob22InsLot")
			{
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("inputMatnrMOB22").setValue(selectedText);
 
			var oSplitApp = new sap.m.SplitApp("splitAppInsCreate") ;
			oSplitApp.toDetail("idMOB22Det")
			//var app = sap.ui.getCore().byId("myApp");  
          //  app.to("idMOB22InitView");
			
			}
		
		else if (backNavMat == "idMOB21Mas")
			{
			
			var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
			
			var txt = sap.ui.getCore().byId("oListItemMat");
			
			txt.setDescription(selectedMatNo.getText());
			txt.setIcon("sap-icon://accept");
			var app = sap.ui.getCore().byId("myApp");  
	      	app.to("idMOB21Mas");
	      	
	      	var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
			listItem.setVisible(true);
			
		
			//var app = sap.ui.getCore().byId("myApp");  
           // app.to("idMOB21InitView12");
			}
		else if (backNavMat == "Mob29Screen")
		{
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("osearch_material_1").setValue(selectedText); //mob29 selected item

		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob29MaterialView");
		}
		else if (backNavMat == "MOB28" )
			
		{
		var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
	sap.ui.getCore().byId("ip_matNumMOB28").setValue(selectedText);
		sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
		}
		
		else if (backNavMat == "Mob18")
		{
			
	    	if(g_runningOnPhone) {
	    		var myApp = sap.ui.getCore().byId("myApp");
				myApp.to("idMob18Scrappage");
	    	}else {
	    		var myApp = sap.ui.getCore().byId("myApp");  
		    	myApp.to("idMob18InitialScreen");
		    	
		    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
		    	
		    	idMOB18SplitApp.toMaster("idMOB18Matmas");
		    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
	    	}
           
			
	    	
	    	
	    	var strAddMaterial = "Are you sure want to add the Material: " + 
			sap.ui.getCore().byId("valMatNo2").getText() + " (" + sap.ui.getCore().byId("valMatDesc").getText() + " ) ?";
             sap.ui.getCore().byId("Mob18-MaterialLbl1").setText(strAddMaterial);
            sap.ui.getCore().byId("Mob18-AddMaterial-Dialog1").open();
                        var lblQty = sap.ui.getCore().byId("lblQtyIcon_Mob18_Scrap");
            lblQty.setSrc("");
            
            
		}
		
		
		else if (backNavMat == "Mob17")
		{

		    	if(g_runningOnPhone) {
		    		var myApp = sap.ui.getCore().byId("myApp");
					myApp.to("idMaterialList");
		    	}else {
		    		var myApp = sap.ui.getCore().byId("myApp");
			    	myApp.to("idMOB17");
		    	}
		    	
		    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
		    	
		    	var strAddMaterial = "Are you sure want to add the Material: " + 
		    					sap.ui.getCore().byId("valMatNo2").getText() + " (" + sap.ui.getCore().byId("valMatDesc").getText() + " ) ?";
		    	
		    	
		    	if(g_runningOnPhone) {
		    		sap.ui.getCore().byId("lblConfirm1").setText(strAddMaterial);
		    		sap.ui.getCore().byId("dialogWindow1").open();
		    	}else {
		    		sap.ui.getCore().byId("lblConfirm").setText(strAddMaterial);
		    		sap.ui.getCore().byId("dialogWindow").open();
		    	}
		    	
	    	
		    /*var lblQtyIcon = sap.ui.getCore().byId("lblQtyIcon");
		    lblQtyIcon.setSrc("");*/
		}
		else if(  backNavMat == "MOB23"){
			/* var selectedPlant = event.getParameter('listItem').getTitle();
			 
			 var inputPlant = sap.ui.getCore().byId("inputItem");
				inputPlant.setValue(selectedPlant);
				*/
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("inputItem").setValue(selectedText);
			sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
			 if ( g_runningOnPhone == true)
           			{
			var myApp = sap.ui.getCore().byId("myApp");
	    	myApp.to("idMob23InitialScreen");
           			}
					else{
							var app = sap.ui.getCore().byId("idMOB23SplitApp");  
      	  	app.toMaster("idMOB23Matmaster");
					}
			 
				
		
		}
		else if (   backNavMat == "MOB35")
		{
		
		var selMaterial = g_SelMaterialDetail;
			
			resetMaterialDetailUIMOB35(true);
				
			var selectedText = sap.ui.getCore().byId("valMatNo2").getText();
			sap.ui.getCore().byId("MOB35_matInput").setValue(selectedText);
			sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
			sap.ui.getCore().byId("MOB35UOM").setValue(selMaterial.Uom);
			
			sap.ui.getCore().byId("MOB35MatDesc").setText(selMaterial.Description);
			
			if(selMaterial.SerialManaged == true) {
				sap.ui.getCore().byId("serialBoxMOB35").setVisible(true);
				sap.ui.getCore().byId("Mob35ShowSer").setVisible(true);
			}else {
				sap.ui.getCore().byId("serialBoxMOB35").setVisible(false);
				sap.ui.getCore().byId("Mob35ShowSer").setVisible(false);
			}
			
			if(selMaterial.BatchManaged == true) {
				sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
				sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
				sap.ui.getCore().byId("MOB35BatLbl").setText("Batch");
			}else if(selMaterial.Splitvaluated == true) {
				sap.ui.getCore().byId("batchBoxMOB35").setVisible(true);
				sap.ui.getCore().byId("MOB35BatLbl").setVisible(true);
				sap.ui.getCore().byId("MOB35BatLbl").setText("Valuation Type");
			}
			
			if(selMaterial.BatchManaged == false && selMaterial.Splitvaluated == false) {
				sap.ui.getCore().byId("batchBoxMOB35").setVisible(false);
				sap.ui.getCore().byId("MOB35BatLbl").setVisible(false);
			}
			
			 if ( g_runningOnPhone == true)
	       			{
			var myApp = sap.ui.getCore().byId("myApp");
	    	myApp.to("idMob35InitialScreen");
	       			}
					else{
					/*var app = sap.ui.getCore().byId("idMOB35SplitApp");  
	  	  	app.toMaster("idMOB35masterPage");*/
						var myApp = sap.ui.getCore().byId("myApp");
				    	myApp.to("idMob35InitialScreen");
					}
			 
			 clearSpecialStockMOB35();
			 sap.ui.getCore().byId("idradio-SS0-Mob35").setSelected(true);
			 sap.ui.getCore().byId("idradio-ST0-Mob35").setSelected(true);
			 
			 var emptyArr = [];
			 
			 window.localStorage
				.setItem(g_invdocnumMOB35, emptyArr);
				
		}
		else {
		
    		var app = sap.ui.getCore().byId("myApp");  
            app.to("idGridSubMenuQM");
    	}
	
	},
	
	

});
/*
 * This method is used to add the material on Invoker MOB's
 */




function addMaterialInvoker_mob18() {
	 if (backNavMat == "Mob18")
	{
		
	debugger;
		////////////////New code//////////////////////
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		if(oModel==undefined) {
			var aData1 = [
			              g_SelMaterialDetail //Taking the material details from global variable 
			  			];
			oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData({modelData: aData1});
			tabMaterialLst.setModel(oModel);
		} else {
			
			var isExisting = isMaterialExisting(oModel, g_SelMaterialDetail.Material);//Check material already added
			
			if(isExisting==true) {
				var errMsg = "Material No: " + g_SelMaterialDetail.Material + " Already Added";
				
				var lblConfirm = new sap.m.Label({
					text: errMsg
				});
				
				 var RightButton_b = new sap.m.Button({
					  text : "OK",
					  press : function(){
						  //addMaterialInvoker();
						  dialogWindow.close();
					  }
				  });
				  
				 var dialogWindow = new sap.m.Dialog({
					  title: "Warning",
					  icon: "sap-icon://warning2",
					  resizable: true,
					  //leftButton : leftButton_b,
					  rightButton: RightButton_b,
					  content : lblConfirm,
					  width : "90%"
				  });
				 
				 dialogWindow.open();
			} else {
			
			var arrMatLst = oModel.oData.modelData;
			var objMaterial = g_SelMaterialDetail; //Taking the material details from global variable
			objMaterial.Batch="";
			
			arrMatLst.push(objMaterial);
			
			var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
			}
		}
		
		if((g_SelMaterialDetail.BatchManaged==false) && (g_SelMaterialDetail.SerialManaged==false)) {
			sap.ui.getCore().byId("idscan").setVisible(false);
			
			
			sap.ui.getCore().byId("idscanserial").setVisible(false);
		}else {
			sap.ui.getCore().byId("idscan").setVisible(true);
			
			if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
				 sap.ui.getCore().byId("idscanserial").setVisible(true)
			  }
		}
		
		
		// * Setting values to the Detail Page - Start
		 
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
			sap.ui.getCore().byId("idscan").setVisible(false);
			
			
			sap.ui.getCore().byId("idscanserial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
			sap.ui.getCore().byId("idscan").setVisible(true);
			
			if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
				 sap.ui.getCore().byId("idscanserial").setVisible(true)
			  }
		}
		
		
		//sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
	//	sap.ui.getCore().byId("lblUOMVal").setText(g_SelMaterialDetail.Uom);
		
sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
		sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
		
		sap.ui.getCore().byId("lblErr1").setVisible(false);
		sap.ui.getCore().byId("lblErrVal1").setVisible(false);
		
		
		// * Setting values to the Detail Page - End
		 
		
		Mob18validateMaterial(); //Validate and set the status for Material List
		
		
		// * Clear Serial List - Start
		 
		var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
		var oModel = tabSerialLst.getModel();
		var aData1 = [];
			
		oModel = new sap.ui.model.json.JSONModel();
			
		oModel.setData({modelData: aData1});
		tabSerialLst.setModel(oModel);
	
		
	//	 * Clear Serial List - End
		 
		
		sap.ui.getCore().byId("inputbatch_Scrap").setValue(""); //Clear Batch Field
		
		
	//	 * Setting values to the Detail Page - Start
		 
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
		}
		
		
		
		
	//	sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
		sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
	//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		//sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		
		
		// * Setting values to the Detail Page - End
		 
		
		//setSelectedIndexForMatTable_scrap();
	}

}

function calling_service_material_to_get_more_vendor()
{
	
	var demoswitch = sap.ui.getCore().byId("demoswitch");
	
	if (demoswitch.getState() == true)
	
      {
		 var dropDownData = {  
				   items: [  
				     {text: "Capgemini" , key : "vendor1"},     
				     {text: "IPEX Consulting",key : "vendor2"},     
				     {text: "Hitachi",key : "vendor3"}    
				        
				   ]  
				 }; 
				//  var oModelJsonList = sap.ui.getCore().byId("Customersdemo");  
				 var oModelJsonList = new sap.ui.model.json.JSONModel();  
				 oModelJsonList.setData(dropDownData);  
				 sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 	
      }	
	
	else
	{
		var valThirdPageSelectedMaterialNo = sap.ui.getCore().byId("valMatNo2");
		//alert(valThirdPageSelectedMaterialNo.getText());
		
		
		var res = sendResultToMaterialSearchDetPageButton;//global
		var i;
		var j;
		var dropDownDataArr = [] ;
		var MOB21VendorArr = [] ;
		 var emptyText = {
					
					"text" : "",
					"key" : "" 
			}
			dropDownDataArr.push(emptyText);
		for ( i = 0 ; i < res.length ; i++)
			{
			
			if ( valThirdPageSelectedMaterialNo.getText() == res[i].Materialno )
				{
				var dropDownData = {  							    
							     "text": res[i].Vendor.concat("  - " +res[i].VendorName) , "key" : res[i].Vendor 						  
							 }; 
					  
					  dropDownDataArr.push(dropDownData);
					  
			//for MOB 21 vendor list	
					  
					  var vendorData = {
							  "venid" : res[i].Vendor ,
							  "vendes" : res[i].VendorName
					  };
					  
					  MOB21VendorArr.push(vendorData);
				}		
			}	
		var dropDownDataFinal = [];
		dropDownDataFinal = {"items" : dropDownDataArr};
		 var oModelJsonList = new sap.ui.model.json.JSONModel();  
		 oModelJsonList.setData(dropDownDataFinal); 
		 sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 	 
		 
	//vendor list only for MOB 21	 
		 if (backNavMat == "idMOB21Mas")
			{
		 var MOB21VendorDataFinal = [];
		 MOB21VendorDataFinal = {"itemsVendor" : MOB21VendorArr};
			 var oModelJsonVendorList = new sap.ui.model.json.JSONModel();  
			 oModelJsonVendorList.setData(MOB21VendorDataFinal); 
			 sap.ui.getCore().byId("venlist").setModel(oModelJsonVendorList); 	
			 matSearchDoneMOB21 = 1;
			}
		 
	}
	
}

/*
 * This method is responsible for setting selected for last item
 */
function setSelectedIndexForMatTable_scrap() {
	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
	var oModel = tabMaterialLst.getModel();
	var index = 0;
	if(typeof oModel != 'undefined') {
		index = oModel.oData.modelData.length;
	}
	var matList = sap.ui.getCore().byId("materialListItem1-tableMat-" + (index-1));
	tabMaterialLst.setSelectedItem(matList, true);
}



/*
 * This method is used to add the material on Invoker MOB's
 */
function addMaterialInvoker() {
	if (backNavMat == "Mob17")
	{
		var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
		var oModel = tabMaterialLst.getModel();
		if(oModel==undefined) {
			var aData1 = [
			              g_SelMaterialDetail //Taking the material details from global variable 
			  			];
			oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData({modelData: aData1});
			tabMaterialLst.setModel(oModel);
		} else {
			
			var isExisting = isMaterialExisting1(oModel, g_SelMaterialDetail.Material);//Check material already added
			
			if(isExisting==true) {
				var errMsg = "Material No: " + g_SelMaterialDetail.Material + " Already Added";
				
				var lblConfirm = new sap.m.Label({
					text: errMsg
				});
				
				 var RightButton_b = new sap.m.Button({
					  text : "OK",
					  press : function(){
						  //addMaterialInvoker();
						  dialogWindow.close();
					  }
				  });
				  
				 var dialogWindow = new sap.m.Dialog({
					  title: "Warning",
					  icon: "sap-icon://warning2",
					  resizable: true,
					  //leftButton : leftButton_b,
					  rightButton: RightButton_b,
					  content : lblConfirm,
					  width : "90%"
				  });
				 
				 dialogWindow.open();
			} else {
			
			var arrMatLst = oModel.oData.modelData;
			
			if(g_SelMaterialDetail.SerialManaged==true) {
				g_SelMaterialDetail.Quantity = "1";
			}
			
			var objMaterial = g_SelMaterialDetail; //Taking the material details from global variable
			arrMatLst.push(objMaterial);
			
			var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
			}
		}
		
if((g_SelMaterialDetail.BatchManaged==false) && (g_SelMaterialDetail.SerialManaged==false)) {
			
			if ( g_runningOnPhone == true)
		{
				sap.ui.getCore().byId("btnScanMaterial1").setVisible(false);
		}
			
			else
				{
				sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
				}
			
		}else {
			
		  if ( g_runningOnPhone == true)
		{
				sap.ui.getCore().byId("btnScanMaterial1").setVisible(true);
		}
			
			else
				{
				sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
				}
			
		}
		
		/*
		 * Setting values to the Detail Page - Start
		 */


		if((g_SelMaterialDetail.BatchManaged==false) && (g_SelMaterialDetail.Serialized==false)) {
			if ( g_runningOnPhone == true)
			{
					sap.ui.getCore().byId("btnScanMaterial1").setVisible(false);
			}
				
			else
			{
			sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
			}
		}else {
			if ( g_runningOnPhone == true)
			{
					sap.ui.getCore().byId("btnScanMaterial1").setVisible(true);
			}
				
			else
			{
			sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
			}
		}
		
		if(g_SelMaterialDetail.BatchManaged==false) {
			isBatch = false;
		}else {
			sap.ui.getCore().byId("lblBatch").setText("Batch");
		}
		
		if(g_SelMaterialDetail.BatchManaged==true || g_SelMaterialDetail.Splitvaluated==true) {
			isBatch = true;
			sap.ui.getCore().byId("lblBatch").setVisible(true);
			sap.ui.getCore().byId("inputBatch").setVisible(true);
		}else {
			isBatch = false;
			sap.ui.getCore().byId("lblBatch").setVisible(false);
			sap.ui.getCore().byId("inputBatch").setVisible(false);
		}
		
		if(g_SelMaterialDetail.Splitvaluated==false) {
			isSplitValuated = false;
		}else {
			sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
		}

		
		

		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("imgShowSerials").setVisible(false);
			sap.ui.getCore().byId("inputSerial").setVisible(false);
			sap.ui.getCore().byId("lblSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("imgShowSerials").setVisible(true);
			sap.ui.getCore().byId("inputSerial").setVisible(true);
			sap.ui.getCore().byId("lblSerial").setVisible(true);
			sap.ui.getCore().byId("inputQty").setValue("1");
		}
		
		
		sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
		sap.ui.getCore().byId("lblUOMVal").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("lblMatNoVal").setText(g_SelMaterialDetail.Material);
		sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
		sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		
		sap.ui.getCore().byId("lblErr").setVisible(false);
		sap.ui.getCore().byId("lblErrVal").setVisible(false);
		
		/*
		 * Setting values to the Detail Page - End
		 */
		
		validateMaterialList1(); //Validate and set the status for Material List
		
		/*
		 * Clear Serial List - Start
		 */
		var tabSerialLst = sap.ui.getCore().byId("tblSerial");
		var oModel = tabSerialLst.getModel();
		var aData1 = [];
			
		oModel = new sap.ui.model.json.JSONModel();
			
		oModel.setData({modelData: aData1});
		tabSerialLst.setModel(oModel);
	
		/*
		 * Clear Serial List - End
		 */
		
		sap.ui.getCore().byId("inputBatch").setValue(""); //Clear Batch Field
		
		/*
		 * Setting values to the Detail Page - Start
		 */
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
		}
		
		
		
		
	//	sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
		sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
	//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		//sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		
		/*
		 * Setting values to the Detail Page - End
		 */
		
		//setSelectedIndexForMatTable();
		
	}else if (backNavMat == "Mob18")
	{
		
	/*	var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		if(oModel==undefined) {
			var aData1 = [
			              g_SelMaterialDetail //Taking the material details from global variable 
			  			];
			oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData({modelData: aData1});
			tabMaterialLst.setModel(oModel);
		} else {
			var arrMatLst = oModel.oData.modelData;
			var objMaterial = g_SelMaterialDetail; //Taking the material details from global variable
			arrMatLst.push(objMaterial);
			
			var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
		}
		
		
		
		 * Setting values to the Detail Page - Start
		 
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
		}
		
		sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
		
		sap.ui.getCore().byId("lblErr1").setVisible(false);
		sap.ui.getCore().byId("lblErrVal1").setVisible(false);
		
	//	sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
		sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
	//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		//sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		
		
		 * Setting values to the Detail Page - End
		 */
		
		
		////////////////New code//////////////////////
		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
		var oModel = tabMaterialLst.getModel();
		if(oModel==undefined) {
			var aData1 = [
			              g_SelMaterialDetail //Taking the material details from global variable 
			  			];
			oModel = new sap.ui.model.json.JSONModel();
			
			oModel.setData({modelData: aData1});
			tabMaterialLst.setModel(oModel);
		} else {
			
			var isExisting = isMaterialExisting(oModel, g_SelMaterialDetail.Material);//Check material already added
			
			if(isExisting==true) {
				var errMsg = "Material No: " + g_SelMaterialDetail.Material + " Already Added";
				
				var lblConfirm = new sap.m.Label({
					text: errMsg
				});
				
				 var RightButton_b = new sap.m.Button({
					  text : "OK",
					  press : function(){
						  //addMaterialInvoker();
						  dialogWindow.close();
					  }
				  });
				  
				 var dialogWindow = new sap.m.Dialog({
					  title: "Warning",
					  icon: "sap-icon://warning2",
					  resizable: true,
					  //leftButton : leftButton_b,
					  rightButton: RightButton_b,
					  content : lblConfirm,
					  width : "90%"
				  });
				 
				 dialogWindow.open();
			} else {
			
			var arrMatLst = oModel.oData.modelData;
			var objMaterial = g_SelMaterialDetail; //Taking the material details from global variable
			arrMatLst.push(objMaterial);
			
			var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
			}
		}
		
		if((g_SelMaterialDetail.BatchManaged==false) && (g_SelMaterialDetail.SerialManaged==false)) {
			sap.ui.getCore().byId("idscan").setVisible(false);
		}else {
			sap.ui.getCore().byId("idscan").setVisible(true);
		}
		
		/*
		 * Setting values to the Detail Page - Start
		 */
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
		}
		
		
		//sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
	//	sap.ui.getCore().byId("lblUOMVal").setText(g_SelMaterialDetail.Uom);
		
sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
		sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
		sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
		
		sap.ui.getCore().byId("lblErr1").setVisible(false);
		sap.ui.getCore().byId("lblErrVal1").setVisible(false);
		
		/*
		 * Setting values to the Detail Page - End
		 */
		
		Mob18validateMaterial(); //Validate and set the status for Material List
		
		/*
		 * Clear Serial List - Start
		 */
		var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
		var oModel = tabSerialLst.getModel();
		var aData1 = [];
			
		oModel = new sap.ui.model.json.JSONModel();
			
		oModel.setData({modelData: aData1});
		tabSerialLst.setModel(oModel);
	
		/*
		 * Clear Serial List - End
		 */
		
		sap.ui.getCore().byId("inputbatch_Scrap").setValue(""); //Clear Batch Field
		
		/*
		 * Setting values to the Detail Page - Start
		 */
		if(g_SelMaterialDetail.BatchManaged==false) {
			sap.ui.getCore().byId("idBatch").setVisible(false);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
		}else {
			sap.ui.getCore().byId("idBatch").setVisible(true);
			sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
		}
		
		if(g_SelMaterialDetail.SerialManaged==false) {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
			sap.ui.getCore().byId("idSerial").setVisible(false);
		}else {
			sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
			sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
			sap.ui.getCore().byId("idSerial").setVisible(true);
		}
		
		
		
		
	//	sap.ui.getCore().byId("lblCustVal").setText(g_SelMaterialDetail.Customer);
		
		sap.ui.getCore().byId("inputUoM").setText(g_SelMaterialDetail.Uom);
		
		sap.ui.getCore().byId("idMat").setText(g_SelMaterialDetail.Material);
		//sap.ui.getCore().byId("lblMatDescVal").setText(g_SelMaterialDetail.Description);
		
	//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
		//sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
		
		/*
		 * Setting values to the Detail Page - End
		 */
		
		setSelectedIndexForMatTable_scrap();
	}

}

function searchMaterialNo(matNo) {

	openSplashScreen();// Open splash screen
	//Service Start Time
	var logInfo = getTimeStamp() +"MOB24:: Service: materialcollections Start" ; 
    var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
    if(serviceURL == "Fail")
	 {
	 return false;
	 }
	/*
	 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
	 * Hardcoding user and password
	 * TODO: Need to pass service user and password
	 */
   var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
   
   var oJSONModelMatSearch = null;
   /*
    * Set Format as $format=json in the Request URL
    */
   
  var plant= window.localStorage.defPlantCode
   var readRequestURL = "/materialcollections?$filter=Materialno eq '" + matNo + "' and Plant eq '" + plant +  "' &$format=json";


	loginoDataModel.read(readRequestURL, null, null, false,   
             function(oData, oResponse) { 
					var result = oResponse.body; //Getting JSON response body
					
					var jsonObj = JSON.parse(result); // Parsing the JSON Object
					
					var result = jsonObj.d; // Taking the result inside namespace d
					
					oJSONModelMatSearch = result;
					
					closeSplashScreen();
					
					if( g_isDebug == true)
					{
					//Service End Time
					var logInfo1 = getTimeStamp() +"MOB24:: Service: materialcollections Finish" ; 
					//Log file Service Start and End Time
					var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
					logFileUpdate(g_ServiceStartEndTime);
					}
					
					
					
				},  function(oError){  
						errorRes = true;
						//alert(oError.message);
							var data = JSON.parse(oError.response.body);
							for(var event in data){
							var dataCopy = data[event];	
							}
							
							closeSplashScreen();
				});
	
	return oJSONModelMatSearch;
}

