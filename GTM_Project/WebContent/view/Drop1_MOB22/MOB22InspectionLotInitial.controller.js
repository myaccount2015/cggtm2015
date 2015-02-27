sap.ui.controller("com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotInitial", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB22InspectionLotInitial
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB22InspectionLotInitial
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB22InspectionLotInitial
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB22InspectionLotInitial
*/
//	onExit: function() {
//
//	}
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB22";
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
	filterList: function(oEvent )
	{
	
	
	  var like =  oEvent.getParameter("newValue"); 
	 // alert(like);
	  
      var oFilter = new sap.ui.model.Filter("lotnum",   
          sap.ui.model.FilterOperator.StartsWith, // EndsWith,  
                                              like);  
      var element = sap.ui.getCore().getElementById("mob22iniList");
    //s  alert(element);
    
      var listBinding = element.getBinding("items");  
      listBinding.filter([oFilter]);  
	},
	

	
	
	
	


	
});

 function onSelect(oControlEvent){
	 if( g_runningOnPhone == true)
		 {
		// sap.ui.getCore().byId("Mob22-oOverlayContainer").close();
		 
		 sap.ui.getCore().byId("myApp").to("idMOB22InitView");
		 }
	
	 
	
	 var mob22det  =  sap.ui.getCore().byId("inputMatnrMOB22");
		mob22det.setEnabled(false);
	var listItem = oControlEvent.getParameter('listItem');	
	var contextPath = listItem.oBindingContexts.undefined.sPath;	
	
	
	  var valMatNo = sap.ui.getCore().byId("inputMatnrMOB22"); 
	  valMatNo.setValue(this.getModel().getProperty(contextPath + "/matnum"));
	  mob22det.setEnabled(false);
	  
	  valMatNo = sap.ui.getCore().byId("inputVendorMOB22"); 
	    
	  //alert(this.getModel().getProperty(contextPath + "/vendor"));	
	  sap.ui.getCore().byId("inputVendorMOB22").setSelectedKey(this.getModel().getProperty(contextPath + "/vendor"));
	  var dropDownDataArr = [] ;
	  var dropDownData = {  							    
			     "text": this.getModel().getProperty(contextPath + "/vendor") ,
			     "key" : this.getModel().getProperty(contextPath + "/vendor")					  
			 }; 
	  
	  dropDownDataArr.push(dropDownData);
			//  var oModelJsonList = sap.ui.getCore().byId("Customersdemo");  
				

var dropDownDataFinal = [];
dropDownDataFinal = {"items" : dropDownDataArr};
var oModelJsonList = new sap.ui.model.json.JSONModel();  
oModelJsonList.setData(dropDownDataFinal); 
sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 	

	//  valMatNo.setText()(this.getModel().getProperty(contextPath + "/vendor"));
	  valMatNo.setEnabled(false);
	  
	  valMatNo = sap.ui.getCore().byId("batch"); 
	  valMatNo.setValue(this.getModel().getProperty(contextPath + "/batch"));
	  valMatNo.setEnabled(false);
	  
	  //Batch
	  if(this.getModel().getProperty(contextPath + "/batch") != "" )
		  {
		  sap.ui.getCore().byId("batch").setVisible(true);
		  sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(true);
		  sap.ui.getCore().byId("horizontal5").setVisible(true);
		  
		  
		  if( g_runningInTablet == true || g_runningOnPhone == true)
			{
			  
			  sap.ui.getCore().byId("batchScanMOB22").setVisible(true);
			  
			}
		  
		  
		  }
	  else
		  {
		  sap.ui.getCore().byId("batch").setVisible(false);
		  sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(false);
		  sap.ui.getCore().byId("horizontal5").setVisible(true);
		  if( g_runningInTablet == true || g_runningOnPhone == true)
			{
			  
			  sap.ui.getCore().byId("batchScanMOB22").setVisible(false);
			  
			}
		  }
	  
	  
	  
	  
	  valMatNo = sap.ui.getCore().byId("insqty"); 
	  valMatNo.setValue(this.getModel().getProperty(contextPath + "/qty"));
	  valMatNo.setEnabled(false);
	  
	  valMatNo = sap.ui.getCore().byId("insdet"); 
	  valMatNo.setValue(this.getModel().getProperty(contextPath + "/ins"));
	  valMatNo.setEnabled(false);
	  
	  var insLotLb = sap.ui.getCore().byId("insLotTime"); 
	    insLotLb.setVisible(true);
	    insLotLb.setText(this.getModel().getProperty(contextPath + "/time"));
	    insLotLb = sap.ui.getCore().byId("insLotLb"); 
	    insLotLb.setVisible(true);
	    
	    sap.ui.getCore().byId("lblMatnrMOB22Desc").setText(this.getModel().getProperty(contextPath + "/matdesc"));
	  
	     // oSplitApp.toDetail(Detailpage);


}
 
 
