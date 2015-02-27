sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.MD15INITIAL", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.MD15INITIAL
*/
	onInit: function() {
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.MD15INITIAL
*/
	onBeforeRendering: function() {
		
		 
		 /* var oMD15Data ;
			var notiNum = new Array();
			var notiNumRcvd = new Array();
			
			var items = window.localStorage.getItem('NOTILIST');
		 	 if (items === undefined || items === null || items.length === 0)
		 	 {
		 		 
		 		 //when there is no data in Queue
		 	 }
		 	 else
		 		 {
		 		
		 		
		 		notiNumRcvd =  JSON.parse(items);
		 		var notiItems = notiNumRcvd.length;
		 		
		 		var oMD15Data = new Array();
		 		// globalMob15Detail;
		 		for (var i=0;i<notiItems;i++)// iterate on array of notifications in Queue
		 		{ 
		 	    var notiID =  notiNumRcvd[i];	
		 	    
		 	   // if (notiID.substring(0, 2) == )
		 		var notiData = window.localStorage.getItem(notiID);// get from local storage 
		 		oMD15Data.push(JSON.parse(notiData));//the array needs to be parsed to convert to appropriate format
		 		
		 		}
		 		
		 		var finalObj = {"MD15Collection01": oMD15Data};
		 		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(finalObj);
		 		var notiQ = sap.ui.getCore().byId("myList");
		 		notiQ.setModel(oJasonNotiQModel);
		 		}*/
	},
	

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.MD15INITIAL
*/
	onAfterRendering: function() {
		var like =  ""; 
		  
	      var oFilter = new sap.ui.model.Filter("title",   
	                                              sap.ui.model.FilterOperator.StartsWith,   
	                                              like);  
	      var element = sap.ui.getCore().getElementById("myList");
	    
	     // var listBinding = element.getBinding("items");  
	    //  listBinding.filter([oFilter]);  
	      
	     // var listBinding = list1.getBinding("items");  
	     // listBinding.filter([oFilter]);
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.MD15INITIAL
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB15";
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
	onClick : function(oEvent)
	{
        
        var app = sap.ui.getCore().byId("myApp"); 
		app.to("idMob15Notification");
	//oSplitApp.to(detailpage);
	},

	filterList: function(oEvent)
	{
	  var like =  oEvent.getParameter("newValue"); 
	  
      var oFilter = new sap.ui.model.Filter("title",   
                                              sap.ui.model.FilterOperator.StartsWith,   
                                              like);  
      var element = sap.ui.getCore().getElementById("myList");
    
      var listBinding = element.getBinding("items");  
      listBinding.filter([oFilter]);  
      
      var listBinding = list1.getBinding("items");  
      listBinding.filter([oFilter]);
	},
	
	onSelect : function(oEvent)
	{
		
		CreateNotificationIconTabBarHide();
		var emptyArray = [];
    	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
    	sap.ui.getCore().byId("Mob15_Q1_AddedImageList").setModel(oJasonNotiQModel);
    	sap.ui.getCore().byId("Mob15_Q3_AddedImageList").setModel(oJasonNotiQModel);
    	sap.ui.getCore().byId("Mob15_F2_AddedImageList").setModel(oJasonNotiQModel);
    	sap.ui.getCore().byId("Mob15_F3_AddedImageList").setModel(oJasonNotiQModel);
    	
		
		
		var listItem = oEvent.getParameter('listItem');	
		var contextPath = listItem.oBindingContexts.undefined.sPath;

		var NotiNum = listItem.mProperties.title;
		
		var iconPath = listItem.mProperties.icon;
		
		var iconErrPath = "img/error.png";
		
		var iconBGPath = "img/BG-InProgress.gif";
		
		NotiNum = NotiNum.substring(0, NotiNum.indexOf(' ')).trim();
		
		if((iconErrPath == iconPath) || (iconBGPath == iconPath)) {
			glo_NotiKey = NotiNum; //Storing the Notification Number
		} else {
			glo_NotiKey = "";
		}
//Q1	
		  var valMatNo = sap.ui.getCore().byId("inputMatnr"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		   valMatNo = sap.ui.getCore().byId("ipQty"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
		  valMatNo.setEnabled(false);
		  
		   valMatNo = sap.ui.getCore().byId("inputOrderNo"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/ordnum"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("inputSoldTo"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/soldto"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  valMatNo = sap.ui.getCore().byId("ipdelno"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/delnum"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("selno"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/selnum"));
		  valMatNo.setEnabled(false);
		  
		 
		  
		  valMatNo = sap.ui.getCore().byId("batchno"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/batchnum"));
		  valMatNo.setEnabled(false);
		  
		  
		  if( sap.ui.getCore().byId("selno").getValue() != "" )
		  {
		  sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(true);
		//  sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(true);
		 // sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(true);
		  }
		  else
			  {
			  sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(false);
			  }
		  
		  
		  if( sap.ui.getCore().byId("batchno").getValue() != "" )
		  {
				sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(true);
        	//	sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(true);
        	//	sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(true);
		  }
		  else
			  {
			  sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(false);
			  }
		  
		  valMatNo = sap.ui.getCore().byId("desc"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/desc"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  
		  valMatNo = sap.ui.getCore().byId("adninfo"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/addninfo"));
		  valMatNo.setEnabled(false);
		  
		  /*
		   * Material Description - Start
		   */
		  var matDesc = this.getModel().getProperty(contextPath + "/matdesc");
		  
		  if(typeof matDesc != 'undefined' && matDesc != null && matDesc.trim().length > 0) {
			  sap.ui.getCore().byId("lblMatnrMOB15Desc").setText(matDesc);
			  sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
			  
			  sap.ui.getCore().byId("idMatDesMob15-IntPro").setText(matDesc);
			  sap.ui.getCore().byId("idMatDesMob15-IntPro").setVisible(true);
			  
			  sap.ui.getCore().byId("idMatDesMob15-VendorError").setText(matDesc);
			  sap.ui.getCore().byId("idMatDesMob15-VendorError").setVisible(true);
			  
			  sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText(matDesc);
			  sap.ui.getCore().byId("idMatDesMob15-Materialerror").setVisible(true);
			  
		  }else {
			  sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(false);
			  sap.ui.getCore().byId("idMatDesMob15-IntPro").setVisible(false);
			  sap.ui.getCore().byId("idMatDesMob15-VendorError").setVisible(false);
			  sap.ui.getCore().byId("idMatDesMob15-Materialerror").setVisible(false);
		  }
		
		  /*
		   * Material Description - End
		   */
		  
//Q3		  
		
		  valMatNo = sap.ui.getCore().byId("inputMatnr2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  valMatNo = sap.ui.getCore().byId("ipQty2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("inputDef"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/defect"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  valMatNo = sap.ui.getCore().byId("inputLocation"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/location"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("descq3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/desc"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  
		  valMatNo = sap.ui.getCore().byId("adninfoq3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/addninfo"));
		  valMatNo.setEnabled(false);
		  sap.ui.getCore().byId("idMatDesMob15-IntPro").
		  setText(this.getModel().getProperty(contextPath + "/matdesc"));
		  
		  ///added for 775
			  valMatNo = sap.ui.getCore().byId("ip_SerialNoQ3"); 
			  valMatNo.setValue(this.getModel().getProperty(contextPath + "/selnum"));
			  valMatNo.setEnabled(false);
			  
			 
			  
			  valMatNo = sap.ui.getCore().byId("ip_BatNoQ3"); 
			  valMatNo.setValue(this.getModel().getProperty(contextPath + "/batchnum"));
			  valMatNo.setEnabled(false);
			
			
		  if( sap.ui.getCore().byId("ip_SerialNoQ3").getValue() != "" )
		  {
		  sap.ui.getCore().byId("containerBoxSerialNo-InternalProblemError").setVisible(true);
		  }
		  else
			  {
			  sap.ui.getCore().byId("containerBoxSerialNo-InternalProblemError").setVisible(false);
			  }
		  
		  
		  if( sap.ui.getCore().byId("ip_BatNoQ3").getValue() != "" )
		  {
				sap.ui.getCore().byId("containerBoxBatchNo-InternalProblemError").setVisible(true);
		  }
		  else
			  {
			  sap.ui.getCore().byId("containerBoxBatchNo-InternalProblemError").setVisible(false);
			  }
//q11		  
		
	
		  var valMatNo = sap.ui.getCore().byId("inputMatnr1"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		   valMatNo = sap.ui.getCore().byId("ipQty1"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
		  valMatNo.setEnabled(false);
		  
		   valMatNo = sap.ui.getCore().byId("inputOrderNo1"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/ordnum"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("delnoq11"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/delnum"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("descq11"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/desc"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  
		  valMatNo = sap.ui.getCore().byId("adninfoq11"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/addninfo"));
		  valMatNo.setEnabled(false);
		  
//f3
		  
		  var valMatNo = sap.ui.getCore().byId("inputMatnr4"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		   valMatNo = sap.ui.getCore().byId("ipQty4"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
		  valMatNo.setEnabled(false);
		  
		   valMatNo = sap.ui.getCore().byId("ip_SerialNo4"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/selnum"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("ip_BatNo4"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/batchnum"));
		  valMatNo.setEnabled(false);
		  
		  
		  if( sap.ui.getCore().byId("ip_SerialNo4").getValue() != "" )
		  {
		  //sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(true);
		  //sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(true);
		  sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(true);
		  }
		  
		  else
			  {
			  sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(false);
			  }
		  
		  
		  
		  if( sap.ui.getCore().byId("ip_BatNo4").getValue() != "" )
		  {
			//	sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(true);
        	//	sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(true);
        		sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(true);
		  }
		  
		  else
			  {
			  sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(false);
			  }
		  
		  
		  valMatNo = sap.ui.getCore().byId("descf3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/desc"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  valMatNo = sap.ui.getCore().byId("adninfof3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/addninfo"));
		  valMatNo.setEnabled(false);
		  
		  sap.ui.getCore().byId("idMatDesMob15-Materialerror").setVisible(true);
		  
		  
		  sap.ui.getCore().byId("idMatDesMob15-Materialerror").
		  setText(this.getModel().getProperty(contextPath + "/matdesc"));
		  
		  
		 
		  
//f2
		  
		  
		  var valMatNo = sap.ui.getCore().byId("inputMatnr3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		   valMatNo = sap.ui.getCore().byId("ipQty3"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
		  valMatNo.setEnabled(false);
		  
		  valMatNo = sap.ui.getCore().byId("ip_purOrd"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/ponum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		   valMatNo = sap.ui.getCore().byId("ip_purOrdItm"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/poitmnum"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  valMatNo = sap.ui.getCore().byId("selnof2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/selnum"));
		  valMatNo.setEnabled(false);
		  
		   valMatNo = sap.ui.getCore().byId("batchf2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/batchnum"));
		  valMatNo.setEnabled(false);
		  
		  
		  if( sap.ui.getCore().byId("selnof2").getValue() != "" )
		  {
		  //sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(true);
		  sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(true);
		 // sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(true);
		  }
		  
		  else
			  {
			  sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(false);
			  }
		  
		  
		  if( sap.ui.getCore().byId("batchf2").getValue() != "" )
		  {
			//	sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(true);
        		sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(true);
        	//	sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(false);
		  }
		  
		  else
			  {
			  sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(false);
			  }
		  
		  
		  valMatNo = sap.ui.getCore().byId("descf2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/desc"));
		  valMatNo.setEnabled(false);
		  valMatNo.setValueState(sap.ui.core.ValueState.None);
		  
		  
		  valMatNo = sap.ui.getCore().byId("adninfof2"); 
		  valMatNo.setValue(this.getModel().getProperty(contextPath + "/addninfo"));
		  valMatNo.setEnabled(false);
		  
		  sap.ui.getCore().byId("idMatDesMob15-VendorError").
		  setText(this.getModel().getProperty(contextPath + "/matdesc"));
		  
		  
		  var title = this.getModel().getProperty(contextPath + "/title");
		  
		  var imgArr = this.getModel().getProperty(contextPath + "/imgList");
		  
		  var imgArrlen = imgArr.length;
		 // alert(title);
		  if (title.indexOf("(Q1)") != -1)
			  {
			  var image1 = sap.ui.getCore().byId("image1");
			    var image2 = sap.ui.getCore().byId("image2");
			    var image3 = sap.ui.getCore().byId("image3");
			    
			    var containerImage3 = sap.ui.getCore().byId("containerImage3");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1");
			    containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				 
				
				 
				 image1.setSrc("");
				 image2.setSrc("");
				 image3.setSrc("");
				 
				 
				 var selectedListFromMasterPageMob15customerComplaint =  this.getModel().getProperty(contextPath + "/status");
								 
				 if (selectedListFromMasterPageMob15customerComplaint.indexOf("Failed") > -1 ||  selectedListFromMasterPageMob15customerComplaint == "Saved" || selectedListFromMasterPageMob15customerComplaint.endsWith("-Started") || selectedListFromMasterPageMob15customerComplaint.startsWith("InProgress"))
					 {
					 sap.ui.getCore().byId("Edit-mob15-customerComplaint").setVisible(true);
					 
					 if( selectedListFromMasterPageMob15customerComplaint != "Success" ){
						 var reasonForFail =  this.getModel().getProperty(contextPath + "/resforfail");
						 var setTexttoLab = sap.ui.getCore().byId("mobQ1-reasonforfail");
						 
						 if(typeof reasonForFail != 'undefined' && reasonForFail != null && reasonForFail.trim().length > 0) {
							 sap.ui.getCore().byId("mobQ1-reasonforfail").setVisible(true);
							 setTexttoLab.setText("Reason for error : "+reasonForFail + "");
						 }
					 }
					 
					 }
				 else{
				 sap.ui.getCore().byId("Edit-mob15-customerComplaint").setVisible(false);
				
				 sap.ui.getCore().byId("mobQ1-reasonforfail").setVisible(false);
				 
				 }
			
			 
			    
			    if (imgArrlen >= 3)
				{
				
				 console.log(3);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 image3.setSrc(imgArr[imgArrlen-3]);
				 if ( imgArr[imgArrlen-3] != "" && imgArr[imgArrlen-3] != null)
					 {
				 containerImage3.setVisible(true);
					 }
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				
				
				}
			else if (imgArrlen == 2)
				{
				 console.log(2);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				 containerImage3.setVisible(false);
				
				}

			else if (imgArrlen == 1)
				{
				console.log(1);
			      image1.setSrc(imgArr[imgArrlen-1]);
			      containerImage3.setVisible();
			      if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
					 {
					 containerImage1.setVisible(true);
					 }
					 containerImage2.setVisible(false);
					 containerImage3.setVisible(false);
				}
			  var app = sap.ui.getCore().byId("myApp"); 
				app.to("idMob15Notification");
				globalMob15Detail = "Q1";
				if( g_runningOnPhone == true)
				   {
					app.to("idMob15DetailsQ1");
					
				   }
				else
					{
				
				var splitApp = sap.ui.getCore().byId("splitApp"); 
				splitApp.toDetail("idMob15DetailsQ1");
				splitApp.setInitialDetail("idMob15DetailsQ1");
				
				
					}
			  }
		  
		  else if (title.indexOf("(Q11)") != -1)
			  {
			  
			  var app = sap.ui.getCore().byId("myApp"); 
				app.to("idMob15Notification");
				
				var splitApp = sap.ui.getCore().byId("splitApp"); 
				splitApp.toDetail("idMob15DetailsQ11");
				splitApp.setInitialDetail("idMob15DetailsQ11");
				
				globalMob15Detail = "Q11";
			  }
		  
		  else if (title.indexOf("(Q3)") != -1)
		  {
			  var image1 = sap.ui.getCore().byId("imageQ31");
			    var image2 = sap.ui.getCore().byId("imageQ32");
			    var image3 = sap.ui.getCore().byId("imageQ33");
			    
			    var containerImage3 = sap.ui.getCore().byId("containerImage3Q3");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2Q3");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1Q3");
			    
			    containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				 
				
			
				 image1.setSrc("");
				 image2.setSrc("");
				 image3.setSrc("");
				 
				 
				 var selectedListFromMasterPageMob15InternalProblrm =  this.getModel().getProperty(contextPath + "/status");
				 if (selectedListFromMasterPageMob15InternalProblrm == "Failed" ||  selectedListFromMasterPageMob15InternalProblrm == "Saved" || selectedListFromMasterPageMob15InternalProblrm.endsWith("-Started") || selectedListFromMasterPageMob15InternalProblrm.startsWith("InProgress"))
					 {
					 sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(true);
					 
					 if( selectedListFromMasterPageMob15InternalProblrm != "Success" ){
						 var reasonForFail =  this.getModel().getProperty(contextPath + "/resforfail");
						 var setTexttoLab = sap.ui.getCore().byId("mobQ3-reasonforfail");
						 
						 if(typeof reasonForFail != 'undefined' && reasonForFail != null && reasonForFail.trim().length > 0) {
							 sap.ui.getCore().byId("mobQ3-reasonforfail").setVisible(true);
							 setTexttoLab.setText("Reason for error : "+reasonForFail + "");
						 }
					 }
					 
					 }
				 else{sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(false);
				
				 sap.ui.getCore().byId("mobQ3-reasonforfail").setVisible(false);
				 }
			    
			    if (imgArrlen >= 3)
				{
				
			//	 console.log(3);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 image3.setSrc(imgArr[imgArrlen-3]);
				 if ( imgArr[imgArrlen-3] != "" && imgArr[imgArrlen-3] != null)
					 {
				 containerImage3.setVisible(true);
					 }
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				
				
				}
			else if (imgArrlen == 2)
				{
				 console.log(2);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				 containerImage3.setVisible(false);
				
				}

			else if (imgArrlen == 1)
				{
				console.log(1);
			      image1.setSrc(imgArr[imgArrlen-1]);
			      containerImage3.setVisible();
			      if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
					 {
					 containerImage1.setVisible(true);
					 }
					 containerImage2.setVisible(false);
					 containerImage3.setVisible(false);
				}
			    
		  var app = sap.ui.getCore().byId("myApp"); 
			app.to("idMob15Notification");
			if( g_runningOnPhone == true)
			   {
				app.to("idMob15DetailsQ3");
				
			   }
			else
				{
			var splitApp = sap.ui.getCore().byId("splitApp"); 
			splitApp.toDetail("idMob15DetailsQ3");
			splitApp.setInitialDetail("idMob15DetailsQ3");
				}
			
			globalMob15Detail = "Q3";
		  }
		  
		  else if (title.indexOf("(F2)") != -1)
		  {
			  
				 
				 
			  var image1 = sap.ui.getCore().byId("imageF21");
			    var image2 = sap.ui.getCore().byId("imageF22");
			    var image3 = sap.ui.getCore().byId("imageF23");
			    var containerImage3 = sap.ui.getCore().byId("containerImage3F2");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2F2");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1F2");
			    containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				 
				
				 
				 image1.setSrc("");
				 image2.setSrc("");
				 image3.setSrc("");
				 
				 
				 var selectedListFromMasterPageMob15VendorError =  this.getModel().getProperty(contextPath + "/status");
					 if (selectedListFromMasterPageMob15VendorError == "Failed" ||  selectedListFromMasterPageMob15VendorError == "Saved" || selectedListFromMasterPageMob15VendorError.endsWith("-Started") || selectedListFromMasterPageMob15VendorError.startsWith("InProgress"))
					 {
					 sap.ui.getCore().byId("Edit-mob15-vendorError").setVisible(true);
					 
					 if( selectedListFromMasterPageMob15VendorError != "Success" ){
						 var reasonForFail =  this.getModel().getProperty(contextPath + "/resforfail");
						 var setTexttoLab = sap.ui.getCore().byId("mobF2-reasonforfail");
						 
						 if(typeof reasonForFail != 'undefined' && reasonForFail != null && reasonForFail.trim().length > 0) {
							 sap.ui.getCore().byId("mobF2-reasonforfail").setVisible(true);
							 setTexttoLab.setText("Reason for error : "+reasonForFail + "");
						 }
					 }
					 
					 }
				 else{sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(false);
		
				 sap.ui.getCore().byId("mobF2-reasonforfail").setVisible(false);
				 
				 }
				    if (imgArrlen >= 3)
					{
					
					 console.log(3);
					 image1.setSrc(imgArr[imgArrlen-1]);
					 image2.setSrc(imgArr[imgArrlen-2]);
					 image3.setSrc(imgArr[imgArrlen-3]);
					 if ( imgArr[imgArrlen-3] != "" && imgArr[imgArrlen-3] != null)
						 {
					 containerImage3.setVisible(true);
						 }
					 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
					 {
					 containerImage2.setVisible(true);
					 }
					 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
					 {
					 containerImage1.setVisible(true);
					 }
					
					
					}
				else if (imgArrlen == 2)
					{
					 console.log(2);
					 image1.setSrc(imgArr[imgArrlen-1]);
					 image2.setSrc(imgArr[imgArrlen-2]);
					 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
					 {
					 containerImage2.setVisible(true);
					 }
					 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
					 {
					 containerImage1.setVisible(true);
					 }
					 containerImage3.setVisible(false);
					
					}

				else if (imgArrlen == 1)
					{
					console.log(1);
				      image1.setSrc(imgArr[imgArrlen-1]);
				      containerImage3.setVisible();
				      if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
						 {
						 containerImage1.setVisible(true);
						 }
						 containerImage2.setVisible(false);
						 containerImage3.setVisible(false);
					}
		  var app = sap.ui.getCore().byId("myApp"); 
			app.to("idMob15Notification");
			if( g_runningOnPhone == true)
			   {
				app.to("idMob15DetailsF2");
				
			   }
			else
				{
			var splitApp = sap.ui.getCore().byId("splitApp"); 
			splitApp.toDetail("idMob15DetailsF2");
			splitApp.setInitialDetail("idMob15DetailsF2");
				}
			
			globalMob15Detail = "F2";
		  }
		  
		  else if (title.indexOf("(F3)") != -1)
		  {
		  
			    var image1 = sap.ui.getCore().byId("imageF31");
			    var image2 = sap.ui.getCore().byId("imageF32");
			    var image3 = sap.ui.getCore().byId("imageF33");
			    
			    
			    var containerImage3 = sap.ui.getCore().byId("containerImage3F3");
			    var containerImage2 = sap.ui.getCore().byId("containerImage2F3");
			    var containerImage1 = sap.ui.getCore().byId("containerImage1F3");
			    containerImage1.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				 
				 
				 var selectedListFromMasterPageMob15 =  this.getModel().getProperty(contextPath + "/status");
			 if (selectedListFromMasterPageMob15 == "Failed" ||  selectedListFromMasterPageMob15 == "Saved" || selectedListFromMasterPageMob15.endsWith("-Started")  || selectedListFromMasterPageMob15.startsWith("InProgress"))
					 {
					 sap.ui.getCore().byId("Edit-mob15-materialError").setVisible(true);
					
					 if( selectedListFromMasterPageMob15 != "Success" ){
						 var reasonForFail =  this.getModel().getProperty(contextPath + "/resforfail");
						 var setTexttoLab = sap.ui.getCore().byId("mobF3-reasonforfail");
						 
						 if(typeof reasonForFail != 'undefined' && reasonForFail != null && reasonForFail.trim().length > 0) {
							 sap.ui.getCore().byId("mobF3-reasonforfail").setVisible(true);
							 setTexttoLab.setText("Reason for error : "+reasonForFail + "");
						 }
					 }
					 }
				 else{sap.ui.getCore().byId("Edit-mob15-internalProblem").setVisible(false);
				 sap.ui.getCore().byId("mobF3-reasonforfail").setVisible(false);
				 }
				 
				 image1.setSrc("");
				 image2.setSrc("");
				 image3.setSrc("");
			
			 
			    
			    if (imgArrlen >= 3)
				{
				
				 console.log(3);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 image3.setSrc(imgArr[imgArrlen-3]);
				 if ( imgArr[imgArrlen-3] != "" && imgArr[imgArrlen-3] != null)
					 {
				 containerImage3.setVisible(true);
					 }
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				
				
				}
			else if (imgArrlen == 2)
				{
				 console.log(2);
				 image1.setSrc(imgArr[imgArrlen-1]);
				 image2.setSrc(imgArr[imgArrlen-2]);
				 if ( imgArr[imgArrlen-2] != "" && imgArr[imgArrlen-2] != null)
				 {
				 containerImage2.setVisible(true);
				 }
				 if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
				 {
				 containerImage1.setVisible(true);
				 }
				 containerImage3.setVisible(false);
				
				}

			else if (imgArrlen == 1)
				{
				console.log(1);
			      image1.setSrc(imgArr[imgArrlen-1]);
			      containerImage3.setVisible();
			      if ( imgArr[imgArrlen-1] != "" && imgArr[imgArrlen-1] != null)
					 {
					 containerImage1.setVisible(true);
					 }
					 containerImage2.setVisible(false);
					 containerImage3.setVisible(false);
				}
			    
		  var app = sap.ui.getCore().byId("myApp"); 
			app.to("idMob15Notification");
			if( g_runningOnPhone == true)
			   {
				app.to("idMob15DetailsF3");
				
			   }
			else
				{
			var splitApp = sap.ui.getCore().byId("splitApp"); 
			splitApp.toDetail("idMob15DetailsF3");
			splitApp.setInitialDetail("idMob15DetailsF3");
				}
			globalMob15Detail = "F3";
		  }
		  
		  /*if (sap.ui.getCore().byId("Mob15-oOverlayContainer").isOpen())
			{
			sap.ui.getCore().byId("Mob15-oOverlayContainer").close();
			}*/
       // var app = sap.ui.getCore().byId("myApp"); 
		//app.to("idMob15Notification");
	//oSplitApp.to(detailpage);
	}

});