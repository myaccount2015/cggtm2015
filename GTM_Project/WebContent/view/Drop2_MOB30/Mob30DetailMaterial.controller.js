sap.ui.controller("com.cg.gtm.view.Drop2_MOB30.Mob30DetailMaterial", {


	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf view.Mob30DetailMaterial
	*/
		onInit: function() {
			
		},

	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf view.Mob30DetailMaterial
	*/
//		onBeforeRendering: function() {
	//
//		},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf view.Mob30DetailMaterial
	*/
//		onAfterRendering: function() {
	//
//		},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf view.Mob30DetailMaterial
	*/
//		onExit: function() {
	//
//		}
		mob30matselect : function(oEvent){
			/*$("#idMOB30MatDetail").show();
			sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(true);
	 		sap.ui.getCore().byId("Mob30Move").setVisible(true);*/
			if ( g_runningOnPhone == true)
			{
				 g_MobileNavigationId = "Mob30-ThirdScreen"; 
				 sap.ui.getCore().byId("Mob30Move").setVisible(true);
				 var app = sap.ui.getCore().byId("myApp").to("idMOB30MatDetail");
			}
			else{
				$("#idMOB30MatDetail").show();
				sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(true);
		 		sap.ui.getCore().byId("Mob30Move").setVisible(true);
			}
			
		
				
						  var idList = oEvent.mParameters.id;

						  var str = idList.substring(idList.length-1);
							 select = parseInt(str);
							
							// cssBackColor(idList);
							// sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue("");
							 
							 
							 
							
							//MultiSelect
							var contextPath = oEvent.oSource.oBindingContexts.undefined.sPath;	
						   
							//getting details from binded list items
							var Material = this.getModel().getProperty(contextPath + "/Material");
							var Qty = this.getModel().getProperty(contextPath + "/Quant");
							var Desc = this.getModel().getProperty(contextPath + "/MaterialDescription");
							var uoM = this.getModel().getProperty(contextPath + "/UOM");
							var typeDesc = this.getModel().getProperty(contextPath + "/StockCategory");
							var Batch = this.getModel().getProperty(contextPath + "/Batch");
							var SerialNo = this.getModel().getProperty(contextPath + "/SerialNo");
							
							var stock = this.getModel().getProperty(contextPath + "/AvailableStock");
							
						//	var actual = this.getModel().getProperty(contextPath + "/PhyInv");
							
							
							//create Array 
							var MatArray = [];
							var insMatArr = {
								
									
									"Material" : Material,
									"Quant" : Qty,
									"MaterialDescription": Desc,
									"UOM" : uoM,
									"Batch" : Batch,
									"SerialNo" : SerialNo,
									"AvailableStock" : stock,
									"StockCategory" :typeDesc,
									
									
							};
							
							MatArray.push(insMatArr);
							var stringifyng = 	JSON.stringify(MatArray);
							window.localStorage.setItem( 
									Material + "_ServiceArray",stringifyng );
							
							
							
							//pass detail to third column
							sap.ui.getCore().byId("Mob30-thrdScr-txtMat").setText(Material);
							sap.ui.getCore().byId("Mob30-thrdScr-txtDes").setText(Desc);
							sap.ui.getCore().byId("Mob30-thrdScr-txtqty").setText(Qty);
							sap.ui.getCore().byId("idMob30txtUom").setText(uoM);
							sap.ui.getCore().byId("idMob30txtType").setText(typeDesc);
							sap.ui.getCore().byId("idMob30txtBatch").setText(Batch);
							sap.ui.getCore().byId("idMob30ActualQuant").setText(stock);
							sap.ui.getCore().byId("Mob30txtSerial").setText(SerialNo);
							
							
							for(var i =0; i<array.length;i++){
								if(array[i].qty == oEvent.getSource().getCells()[3].getText()){
									 sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(array[i].actualStock);
								}
							}
//							sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue(array[].actualStock);
							
							//Batch 
							//Batch 
							 var FlagBatch = this.getModel().getProperty(contextPath + "/BatchManaged");
							if( FlagBatch == "N")
								{
								sap.ui.getCore().byId("idMob30txtBatch").setVisible(false);
								
								sap.ui.getCore().byId("idbatchMob30").setVisible(false);
								}
							else
								{
								sap.ui.getCore().byId("idbatchMob30").setVisible(true);
								sap.ui.getCore().byId("idMob30txtBatch").setVisible(true);
								sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
								}
							
							/*//get stored values from local storage and pass to SerialText
							
							
							var localStrData = window.localStorage.getItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
						            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal");
							
							 if (localStrData === undefined || localStrData === null || localStrData.length === 0)
					      	 {
					      	 }
							 else
							 {
								 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(localStrData);	 
							 }*/
					      	 
							
							//Serial Flag check
							 var FlagSerialno = this.getModel().getProperty(contextPath + "/Serialized");
							 if ( FlagSerialno == "N")
								 {
								 sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
								 sap.ui.getCore().byId("Mob30-btnlogSer").setVisible(false);
								 //sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(1);
								 
								 
								 //serilized flag
								 /*if(sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue() == "")
									 {
									 sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").setValue(1);
									 window.localStorage.setItem(sap.ui.getCore().byId("Mob20-frstScreen").getTitle()+"_"+ 
									            sap.ui.getCore().byId("Mob20-thrdScr-txtMat").getText() + "SerLogVal",
									            sap.ui.getCore().byId("Mob20-thrdScr-txtBoxLogSer").getValue());
									 }*/
								 
								 }
							 else
								 {
								 sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(true);
								 sap.ui.getCore().byId("Mob30-btnlogSer").setVisible(true);
								// sap.ui.getCore().byId("Mob30-thrdScr-txtBoxLogSer").setValue("");
								 }
							/* if( FlagBatch == "N" && FlagSerialno == "N"){
									sap.ui.getCore().byId("Mob30-thrdScr-btnScan").setVisible(false);
									
									
									
								}*/
							 
							 
							var list = sap.ui.getCore().byId("idtable_mob30");
							var oModel = list.getModel();
							//var data = evt.mParameters.listItem.sId;
							//var str = data.substring(data.length-1);
							//var select = parseInt(str);
							
							var listmodel = oModel.oData.results;
							var lenlistmodel = oModel.oData.results.length;
							for(i=0;i<lenlistmodel;i++) {
								if(i==select) {
									/*
									 * Populate Serial Numbers - Start
									 */
									
									var arrSerialLst = listmodel[i].SerialLst;
									
									if(typeof arrSerialLst != 'undefined' && arrSerialLst.length > 0) {
										var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
										var oModel2 = new sap.ui.model.json.JSONModel();
										oModel2.setData({modelData: arrSerialLst});
										tabSerialLst.setModel(oModel2);
									} else {
										var tabSerialLst = sap.ui.getCore().byId("oResponsivePopover_30");
										var oModel2 = new sap.ui.model.json.JSONModel();
										oModel2.setData({modelData: []});
										tabSerialLst.setModel(oModel2);
									}
									
									/*
									 * Populate Serial Numbers - End
									 */
								}
							}
							
							
							
							 
			
			debugger;
			var tabMaterialLst = sap.ui.getCore().byId("idtable_mob30");
		var oModel = tabMaterialLst.getModel();
		var index = 0;
		if (typeof oModel != 'undefined') {
			index = oModel.oData.results.length;
		}
		var matList = sap.ui.getCore().byId(
				"Mob30-MatDesTable-Column-List-idtable_mob30-" + (index - 1));
		tabMaterialLst.setSelectedItem(matList, true);
			//var listItemIDCtrl = sap.ui.getCore().byId(select);
			//list.setSelectedItem(select, true);
		
					
		}
				});