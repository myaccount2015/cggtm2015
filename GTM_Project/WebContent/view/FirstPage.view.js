sap.ui.jsview("com.cg.gtm.view.FirstPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.FirstPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.FirstPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.FirstPage
	*/ 
	createContent : function(oController) {
		
		//oController.removeFile();
		/****************Formatter code for MOB 16************************/
		com.cg.gtm.Formatter = {

				  _statusStateMap: {
				    1: "Error",
				    2: "Error",
				    3: "Warning",
				    4: "Success",
				  },

				  _statusTextMap: {
				    1: "Very High",
				    2: "High",
				    3: "Medium",
				    4: "Low",
				  },

				  statusText: function(value) {
				    var map = com.cg.gtm.Formatter._statusTextMap;
				   
				    return (map[value]);
				  },

				  statusState: function(value) {
				    var map = com.cg.gtm.Formatter._statusStateMap;
				    return (value && map[value]) ? map[value] : "None";
				  },

				  date: function(value) {
				    if (value) {
				      var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				        pattern: "dd/MM/yyyy"
				      });
				      return oDateFormat.format(new Date(parseInt(value.substr(6))));
				    } else {
				      return value;
				    }
				  },

				  dateRange: function(date1, date2) {
				    return com.cg.gtm.Formatter.date(date1) + " - " + com.cg.gtm.Formatter.date(date2);
				  },

				  /* Only needed for old version of UI5***************************/
				  startDate: function(value) {
				    //var bundle = this.getModel("i18n").getResourceBundle();
				    return  com.cg.gtm.Formatter.date(value);
				  },

				  finishDate: function(value) {
				   // var bundle = this.getModel("i18n").getResourceBundle();
				    return  com.cg.gtm.Formatter.date(value);
				  },
				  /****************************************************************/

				  quantity: function(value) {
				    try {
				      return (value) ? parseFloat(value).toFixed(0) : value;
				    } catch (e) {
				      return "Not-A-Number";
				    }
				  },

				};
		
		
		/**********************************************************************/
		jQuery.sap.require("sap.m.MessageBox");	
		jQuery.sap.require("sap.ui.core.IconPool");
		aNames = sap.ui.core.IconPool.getIconNames(); 
		this.setDisplayBlock(true);
		
		
		/***************************DMS STUFF***********************************************/
        g_commonResponsivePopoverOpenBy = {};
		/************************************DROP3 STUFF**********************************************/
        g_mob01diaopen = false;
        g_MOB07Entry = "";
        g_MOB033LOC =  "";
        g_drop3user = false ;
        g_reasonCode = "";
        g_personalNum = "";
        g_trainordepot =  "T";
        g_MOB01LOC = "";
        g_MOB33Mileage =  "";
		g_MOB33FROMMAIN = true ;
		g_buttonvalMOB02 = "";
		g_AssetSrch = "";
		g_MOB33Src = "NONE";
		g_MOB01SD = "";
		g_MOB09Rem = "";
		g_MOB07 = "T";
		g_STATUSMOB03 = "";
		g_STFRADD = false;
		g_open = 0;
		g_closed = 0;
		g_ordnum = "";
		g_actnum = "";
		g_listItemStatusID = "";
		g_ACT = 0;
		g_HOLD = 0;
		g_MOB07LOC= "";
		
		selectedIndex = "";
		
		/*********************************************************************************************/
		
		
		
		
		g_drop3 = true;
		g_scannertype = "CAM";
		g_MobileNavigationId = "";
		globalCustomerSearchFrom = "";
		g_backstock = "";
		gMOB35AddMatArr  = [];
		gMOB35AddQtyArr  = [];
		gMOB35AddUOMArr  = [];
		g_MatAddedMOB35 = false ;
		inputPlant =  "";
		g_isMOB17Ser = false;
		g_isMOB17Inv = false;
		g_inputPlantCode =  "";
		gValMovType = "";
		gValStoType = "";
		gMOB19Key = "PO" ;
		globalPlantSearchFrom =  "";
		globalDefectLoc = 0;
        globalValMatSrch = 0 ;
        globalValMOB21ConfrmCount = 0 ;
        globalMob18Movetype = 0;
        g_navbutton = "";
       //Global variable to ensure that back button in Q1 screen returns to Cust Compain grid and not Create Noti grid
         globalFromCustComlaint = 0 ;
         globalInsOp = "";
         globalInsChar = "";
         //Enter inspection dropdown
         sendResultToMaterialSearchDetPageButton ="";
         globalMaterial="";
         backNavMat = "";
         //blobal values for MOB 15 material search
         MOB15plantCode = "";
         MOB15plantDesc = "";
         getSelectedPlantId="";
         selectedPlantID="";
         matSearchDoneMOB21 = 0;//To decide if marerial search ahs been doen and material selected in MOB 21 
         selectedType= "";
         selectedVendor="";
         varScan =  "" ;// used for populating values from scanner 
         defaultPlantName= "";
         defaultPlantCode = "";
         serialNumberShowFlag="";
         validateMATNUMAccess = "";//to drfine the screen from which validateMatNum has been called 
         g_EndSystem = "GTM"; //Setting default end system// QA1
         imageMetadatArr = "";
         g_MOB33LOC="";
         var app  = new sap.m.App("myApp");
                  
         var page1 = sap.ui.view({id:"idFirstLogon1", viewName:"com.cg.gtm.view.FirstLogon", type:sap.ui.core.mvc.ViewType.JS});
         page1.getController().nav = this.getController();	
         app.addPage(page1 , true);
         
         var pagePIN = sap.ui.view({id:"idFirstLogonPin", viewName:"com.cg.gtm.view.LogonPinOnly", type:sap.ui.core.mvc.ViewType.JS});
  		 pagePIN.getController().nav = this.getController();
  		 app.addPage(pagePIN, true);
  		 //app.to("idFirstLogonPin");
  		
         var page2 = sap.ui.view({id:"idGrid", viewName:"com.cg.gtm.view.Grid1", type:sap.ui.core.mvc.ViewType.JS});
 		 app.addPage(page2);
		var page3 = new sap.ui.view({id:"idGridSubMenuQM", viewName:"com.cg.gtm.view.GridSubMenuQM", type:sap.ui.core.mvc.ViewType.JS});
    	app.addPage(page3);
    	var page4 = new sap.ui.view({id:"idGridSubMenuIMWM", viewName:"com.cg.gtm.view.GridSubMenuIMWM", type:sap.ui.core.mvc.ViewType.JS});
    	app.addPage(page4);
    	var page5 = new sap.ui.view({id:"idGridSubMenuPM", viewName:"com.cg.gtm.view.GridSubMenuPM", type:sap.ui.core.mvc.ViewType.JS});
    	app.addPage(page5);
    	var page6 = new sap.ui.view({id:"idGridSubMenuPP", viewName:"com.cg.gtm.view.GridSubMenuPP", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page6);
 	    	
 	    	var page7 = new sap.ui.view({id:"idGridSubMenuCreateNoti", viewName:"com.cg.gtm.view.GridSubMenuCreateNoti", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page7);
 	    	
 			var page8 = new sap.ui.view({id:"idMob15Notification", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15Notification", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page8);
 	    
 	    	
 	    	var page9 = new sap.ui.view({id:"idMob24MaterialSearch", viewName:"com.cg.gtm.view.Drop1_MOB24.Mob24MaterialSearch", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page9);
 	    	
 	    	/*var page10 = new sap.ui.view({id:"idMOB16NotificationList", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page10);
 	    	*/
 	    	var page11 = new sap.ui.view({id:"idMOB22InitView", viewName:"com.cg.gtm.view.Drop1_MOB22.InspectionLotInitialView", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page11);
 	    	
 	    	var page12 = new sap.ui.view({id:"idMOB21InitView12",viewName:"com.cg.gtm.view.Drop1_MOB21.EnterInspectionInitial", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page12);
 	    	    	
 	    	var page13 = new sap.ui.view({id:"idMOB21DetSplitApp",viewName:"com.cg.gtm.view.Drop1_MOB21.MOB21DetailSplitView", type:sap.ui.core.mvc.ViewType.JS});
	    	app.addPage(page13);
	    	
	    	var page14 = new sap.ui.view({id:"idMOB29LabelPrintingView",viewName:"com.cg.gtm.view.Drop1_MOB29.Mob29-LabelPrintingView", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page14);
 	    	
 	    	var page15 = new sap.ui.view({id:"idMob29MaterialView",viewName:"com.cg.gtm.view.Drop1_MOB29.Mob29-MaterialView", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page15);
 	    	
 	    	var page16 = new sap.ui.view({id:"idMob29PrintOrderLabelView",viewName:"com.cg.gtm.view.Drop1_MOB29.Mob-29-printorderLabel", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page16);
 	    	//com.cg.gtm.view.MOB15CustComplaintGrid
 	    	
 	    	var page17 = new sap.ui.view({id:"idMob15CustComp",viewName:"com.cg.gtm.view.Drop1_MOB15.MOB15CustComplaintGrid", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page17);
 	    	
 	    	var page18 = new sap.ui.view({id:"idMob31DisDoc",viewName:"com.cg.gtm.view.Drop1_MOB31.Mob31DocumentDisplayView", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page18);
 	    	
 	    	 var page20 = new sap.ui.view({id:"idCommonPlantSearch",viewName:"com.cg.gtm.view.CommonPlantSearch", type:sap.ui.core.mvc.ViewType.JS});
 		     app.addPage(page20);
 		    	
 		     var page24 = new sap.ui.view({id:"idBlankScreen", viewName:"com.cg.gtm.view.BlankScreen", type:sap.ui.core.mvc.ViewType.JS});
 		     app.addPage(page24); 
 	    	

 	    	//var Mob20InitialPage = new sap.ui.view({id:"idMob20InitialScreen",viewName:"com.cg.gtm.view.Mob20InitialScreen", type:sap.ui.core.mvc.ViewType.JS});
 	    	//app.addPage(Mob20InitialPage);

 	    //	var page19 = new sap.ui.view({id:"idMOB15Defect",viewName:"com.cg.gtm.view.MOB15DefectView", type:sap.ui.core.mvc.ViewType.JS});
 	    //	app.addPage(page19);
 	    	
 	    	var page21 = new sap.ui.view({id:"idMOB17",viewName:"com.cg.gtm.view.MOB17-MainPage", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page21);
 	    	
 	    	
 	    	var page19 = new sap.ui.view({id:"idMob18InitialScreen",viewName:"com.cg.gtm.view.Mob18InitialScreen", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page19);
 	    	
 	    	var page23 = new sap.ui.view({id:"idMob23InitialScreen",viewName:"com.cg.gtm.view.Mob23Initial", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page23);
 	    	
 	    	
 	    	var page25 = new sap.ui.view({id:"idMob30InitialScreen",viewName:"com.cg.gtm.view.Drop2_MOB30.Mob30InitialScreen", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page25);

 	    	var page35 = new sap.ui.view({id:"idMob35InitialScreen",viewName:"com.cg.gtm.view.Drop2_MOB35.MOB35_Initial", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page35);
 	    	
 	    	
 	    	//var page37 =  new sap.ui.view({id:"idMob37InitialScreen",viewName:"com.cg.gtm.view.Drop3_MOB37.MOB37Initial", type:sap.ui.core.mvc.ViewType.JS});
 	    	//app.addPage(page37);
 	    	
 	    	
 	    	 var OpenInsViewMob22IntMob24 = new sap.ui.view({id:"Mob24-OpenInsView", viewName:"com.cg.gtm.view.Drop1_MOB24.Mob24OpenInsView", type:sap.ui.core.mvc.ViewType.JS});
 	    	 app.addPage(OpenInsViewMob22IntMob24);
 	    	 
 	    	 var OpenInsViewMob15IntMob24 = new sap.ui.view({id:"Mob15-OpenInsView", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15OpenCreateNoti", type:sap.ui.core.mvc.ViewType.JS});
 	    	 app.addPage(OpenInsViewMob15IntMob24);
 	    	/*//asym 
 	    	 var OpenInsViewMob15IntMob24 = new sap.ui.view({id:"Mob15-OpenInsView", viewName:"com.cg.gtm.view.Drop1_MOB15.Mob15OpenCreateNoti", type:sap.ui.core.mvc.ViewType.JS});
 	    	 app.addPage(OpenInsViewMob15IntMob24);
 		     //asym 
 		       */
 	    	
 	    	//var page10_Notification = new sap.ui.view({id:"idMOB16NotificationList", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList", type:sap.ui.core.mvc.ViewType.JS});
				//app.addPage(page10_Notification);
				
				
 	    	var page00 = new sap.ui.view({id:"idMob00InitialScreen",viewName:"com.cg.gtm.view.DROP1_MOB00.MOB00InitialView", type:sap.ui.core.mvc.ViewType.JS});
 	    	app.addPage(page00);
 	    	
 	    	/***************************DROP 3 ********************************/
 	    	
 	    	if ( g_drop3 == true) {
 	    		var pageMOB03 = new sap.ui.view({id:"MOB03Initial",viewName:"com.cg.gtm.view.DROP3_MOB03.MOB03Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB03);
 	 	    	
 	 	    	var pageMOB02 = new sap.ui.view({id:"MOB02Detail",viewName:"com.cg.gtm.view.Drop3_MOB02.MOB02Detail", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB02);
 	 	    	
 	 	    	var pageMOB04 = new sap.ui.view({id:"MOB04Detail",viewName:"com.cg.gtm.view.Drop3_MOB04.MOB04Detail", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB04);
 	 	    	
 	 	    	var pageMOB09I = new sap.ui.view({id:"MOB09Install",viewName:"com.cg.gtm.view.Drop3_MOB09.MOB09InstallDetail", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB09I);
 	 	    	
 	 	    	var pageMOB09R = new sap.ui.view({id:"MOB09Remove",viewName:"com.cg.gtm.view.Drop3_MOB09.MOB09RemoveDetail", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB09R);
 	 	    	
 	 	    	var pageMOB01 = new sap.ui.view({id:"MOB01Initial",viewName:"com.cg.gtm.view.Drop3_MOB01.MOB01Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB01);
 	 	    	
 	 	    	var pageMOB33 = new sap.ui.view({id:"MOB33Initial",viewName:"com.cg.gtm.view.Drop3_MOB33.MOB33Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB33);
 	 	    	
 	 	    	var pageMOB08D = new sap.ui.view({id:"MOB08Detail",viewName:"com.cg.gtm.view.Drop3_MOB08.MOB08Detail", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB08D);
 	 	    	
 	 	    	var pageMOB08D2 = new sap.ui.view({id:"MOB08DetailTwo",viewName:"com.cg.gtm.view.Drop3_MOB08.MOB08DetailTwo", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB08D2);
 	 	    	
 	 	    	var pageMOB08D3 = new sap.ui.view({id:"MOB08DetailThree",viewName:"com.cg.gtm.view.Drop3_MOB08.MOB08DetailThree", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB08D3);
 	 	    	
 	 	    	var pageMOB07 = new sap.ui.view({id:"MOB07Initial",viewName:"com.cg.gtm.view.Drop3_MOB07.MOB07Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB07);
 	 	    	
 	 	    	var pageMOB37 = new sap.ui.view({id:"MOB37Initial",viewName:"com.cg.gtm.view.Drop3_MOB37.MOB37Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB37);
 	 	    	
 	 	    	
 	 	    	var pageMOB24 = new sap.ui.view({id:"MOB24Initial",viewName:"com.cg.gtm.view.Drop3_MOB24.MOB24Initial", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageMOB24);
 	 	    	
 	 	    	var pageD3Q = new sap.ui.view({id:"pageD3Q",viewName:"com.cg.gtm.view.Drop3_Q.Drop3Queue", type:sap.ui.core.mvc.ViewType.JS});
 	 	    	app.addPage(pageD3Q);
 	 	    	
 	 	    	//writeFiles();
 	 	    	

 	 			//oController.initialLoadPM();
 	 			
 	 			
 	 			
 	 			
 	 			var components = new sap.ui.model.json.JSONModel("view/data/components.json");
 	 			sap.ui.getCore().setModel(components, "components");

 	 			var tools = new sap.ui.model.json.JSONModel("view/data/tools.json");
 	 			sap.ui.getCore().setModel(tools, "tools");

 	 			var trainNotifications = new sap.ui.model.json.JSONModel("view/data/trainNotifications.json");
 	 			sap.ui.getCore().setModel(trainNotifications, "trainNotifications");

 	 			var depotNotifications = new sap.ui.model.json.JSONModel("view/data/depotNotifications.json");
 	 			sap.ui.getCore().setModel(depotNotifications, "depotNotifications");

 	 			var materials = new sap.ui.model.json.JSONModel("view/data/materials.json");
 	 			sap.ui.getCore().setModel(materials, "materials");

 	 			var assets = new sap.ui.model.json.JSONModel("view/data/assets.json");
 	 			sap.ui.getCore().setModel(assets, "assets");

 	 			var measurements = new sap.ui.model.json.JSONModel("view/data/measurements.json");
 	 			sap.ui.getCore().setModel(measurements, "measurements");
 	    	}
 	    	
 			
 			//writeFile();
 			//onLoad();
 	    	/********************************************************************/
 	    	var lastDate = localStorage.getItem("lastDate");
 	    	
 	    	if(lastDate==null || lastDate == undefined) {
 	    		var app = sap.ui.getCore().byId("myApp"); 
	    		//app.setInitialPage("idFirstLogon1");
				//app.to("idFirstLogon1");
 	    		
 	    		app.setInitialPage("idGridSubMenuIMWM");
				app.to("idGridSubMenuIMWM");
 	    		
 	    		
 	    	} 
 	    	else {
 	    	
 	    	 var today = new Date();
			 var dd = today.getDate(); 
			 var mm = today.getMonth()+1; 
			 var yyyy = today.getFullYear(); 
			 var currDateString = dd + "/" + mm + "/" + yyyy;

			 var todayDate = new Date(currDateString);

			 var lastIPDate = lastDate;
				
			 var currDate = new Date();
			 var currDateString =   currDate.getTime();
			 var timeDiff = currDateString - lastIPDate ;
			 var diffDays = Math.ceil(timeDiff / (1000)); 
					
					//alert(timeDiff);
					//alert(diffDays);
					
					if (diffDays > 604800)
						{
						var app = sap.ui.getCore().byId("myApp"); 
			    		//app.setInitialPage("idFirstLogon1");
						//app.to("idFirstLogon1");
						app.setInitialPage("idGridSubMenuIMWM");
						app.to("idGridSubMenuIMWM");
						
						}
					
					else
						{
						 var userName = getUserName();
                        // sap.ui.getCore().byId("lblUsrName").setText(userName); 
                    sap.ui.getCore().byId("txtUser1").setValue(userName);
                         sap.ui.getCore().byId("btnLogon").setText("Log on as ".concat(userName));
						var app = sap.ui.getCore().byId("myApp"); 
						//app.to("idFirstLogonPin");
						
						app.to("idGridSubMenuIMWM");
						
						
						}
					
 	    	}
 	    	
 	    	
 	    	
 	    	/*
 	    	 * Defining Global Variable
 	    	 */
 	    	globalMob15Detail = "";
 	    	
 	    	
 	    closeSplashScreen();
 		return app;

		
		//app.setInitialPage("idFirstLogonPin");
		//app.to("idFirstLogonPin");
		//return app ;
	}

});