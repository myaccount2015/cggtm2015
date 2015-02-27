sap.ui.controller("com.cg.gtm.view.Drop1_MOB24.MatSearchView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.MatSearchView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.MatSearchView
*/
	onBeforeRendering: function() {
		
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.MatSearchView
*/
	onAfterRendering: function() {
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.MatSearchView
*/
	onExit: function() {
	
	},
	
	matSel : function(oControlEvent)
	{	
		//alert("hhdkhsakdhsa");
		if ( g_runningOnPhone == false){
			showView_MaterialDetails(); //to display Material Detail view
		}
		else
			{
			
			
			var app = sap.ui.getCore().byId("myApp"); 
  			app.to("idMATSRDetail");
			
			g_MobileNavigationId = "Mob24-thirdPage-BackNavButton";
			if(backNavMat == "idMob24MaterialSearchInput")
			{
			 var btnSelMat = sap.ui.getCore().byId("matSerDetbtn_MobileVersion"); 
			 btnSelMat.setVisible(false);
			}
		else
			{
			var btnSelMat = sap.ui.getCore().byId("matSerDetbtn_MobileVersion"); 
			 btnSelMat.setVisible(true);
			}
			
			
			//showView_MaterialDetails(); //to display Material Detail view
		//	sap.ui.getCore().byId("idMATSRDetail").addStyleClass("idMATSRDetailBlock");
			}
		
		
		
		var listItem = oControlEvent.getParameter('listItem');
		
		var contextPath = listItem.oBindingContexts.undefined.sPath;
		
		
		var variable1 = this.getModel().getProperty(contextPath + "/Materialno");
		
		
		var selectedText = oControlEvent.getParameter('listItem').getTitle();
		var selectedMatDesc = oControlEvent.getParameter('listItem').getDescription();
		
		
		sap.ui.getCore().byId("inputMatnrMOB22").setValue(selectedText);
		sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
		sap.ui.getCore().byId("lblMatnrMOB22Desc").setText("Material Description : ".concat(selectedMatDesc));
		
	//DMS
		
		var objectHeader = sap.ui.getCore().byId("Mob24-ObjectHeaderTitle"); 
		objectHeader.setTitle(this.getModel().getProperty(contextPath + "/Description"));
		objectHeader.setNumber(this.getModel().getProperty(contextPath + "/Materialno"));
	    
	   
	    
	    
		
		
		
		
	    var valMatNo = sap.ui.getCore().byId("valMatNo2"); 
	    valMatNo.setText(this.getModel().getProperty(contextPath + "/Materialno"));
	    
	    var valMatDesc = sap.ui.getCore().byId("valMatDesc"); 
	    valMatDesc.setText(this.getModel().getProperty(contextPath + "/Description"));
	    
	    var valMatManu = sap.ui.getCore().byId("valMatManu"); 
	    valMatManu.setText(this.getModel().getProperty(contextPath + "/Manufacturer"));
	    
	    var valMatManuName = sap.ui.getCore().byId("valMatManuName"); 
	    valMatManuName.setText(this.getModel().getProperty(contextPath + "/ManufacturerName"));
	    
	    var valMatModNo = sap.ui.getCore().byId("valMatModNo"); 
	    valMatModNo.setText(this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"));
	    
	    var valMatSup = sap.ui.getCore().byId("valMatSup"); 
	    valMatSup.setText(this.getModel().getProperty(contextPath + "/Vendor"));
	 	    
	    
	    var valMatSupName = sap.ui.getCore().byId("valMatSupName"); 
	    valMatSupName.setText(this.getModel().getProperty(contextPath + "/VendorName"));
	    
	    var valMatPartNo = sap.ui.getCore().byId("valMatPartNo"); 
	    valMatPartNo.setText(this.getModel().getProperty(contextPath + "/VendorPartNumber"));
	  
//		var txt = sap.ui.getCore().byId("oListItemMat");
		//	txt.setDescription(this.getModel().getProperty(contextPath + "/Materialno"));
		  //  txt.setIcon("sap-icon://accept");

	    /*var imageMat = sap.ui.getCore().byId("imageMat"); 
	    imageMat.setSrc("");*/
	
	    
	    
	    /*Setting Material Details in Global Variable*/
	    var Materialno = this.getModel().getProperty(contextPath + "/Materialno");
	    var Uom = this.getModel().getProperty(contextPath + "/Uom");
	    var Description = this.getModel().getProperty(contextPath + "/Description");
	    var Vendor = this.getModel().getProperty(contextPath + "/Vendor");
	    var VendorName = this.getModel().getProperty(contextPath + "/VendorName");
	    var Serialized = this.getModel().getProperty(contextPath + "/Serialized");
	    var Batchmanaged = this.getModel().getProperty(contextPath + "/Batchmanaged");
	    var Splitvaluated = this.getModel().getProperty(contextPath + "/Splitvaluated");
	    
	  //  alert("1");
	    matData = {"Manufacturer" : this.getModel().getProperty(contextPath + "/Manufacturer") ,
				"ManufacturerName" : this.getModel().getProperty(contextPath + "/ManufacturerName"),
				"ManufacturerPartNumber" : this.getModel().getProperty(contextPath + "/ManufacturerPartNumber"),
				"Vendor" : this.getModel().getProperty(contextPath + "/Vendor"),
				"VendorName" : this.getModel().getProperty(contextPath + "/VendorName"),
				"VendorPartNumber" : this.getModel().getProperty(contextPath + "/VendorPartNumber"),
				"Materialno" : this.getModel().getProperty(contextPath + "/Materialno"),
				"MaterialGroupDesc" : this.getModel().getProperty(contextPath + "/MaterialGroupDesc"),
				"MaterialGroup" : this.getModel().getProperty(contextPath + "/MaterialGroup"),
				
				"VendorPartNumber" : this.getModel().getProperty(contextPath + "/VendorPartNumber"),
				"Materialno" : this.getModel().getProperty(contextPath + "/Materialno"),
				"MaterialGroupDesc" : this.getModel().getProperty(contextPath + "/MaterialGroupDesc"),
				"MaterialGroup" : this.getModel().getProperty(contextPath + "/MaterialGroup"),
				"Plant" : this.getModel().getProperty(contextPath + "/Plant"),
				"PlantName" : this.getModel().getProperty(contextPath + "/PlantName"),
				"Uom" : this.getModel().getProperty(contextPath + "/Uom"),
				"Description" : this.getModel().getProperty(contextPath + "/Description"),
				};
	   // alert("2");
	    
	    if(Serialized=='No') {
	    	Serialized = false;
	    }else {
	    	Serialized = true;
	    }
	    
	    if(Batchmanaged=='No') {
	    	Batchmanaged = false;
	    }else {
	    	Batchmanaged = true;
	    }
	    
	    if(Splitvaluated=='No') {
	    	Splitvaluated = false;
	    }else {
	    	Splitvaluated = true;
	    }
	    
	    if(VendorName.length > 0) {
	    	g_SelMaterialDetail = {"Material": Materialno, "Description": Description, "Quantity": "", "Uom" : Uom , "Customer": Vendor + "(" + VendorName + ")", "BatchManaged": Batchmanaged, "SerialManaged": Serialized, "Splitvaluated": Splitvaluated};
	    }else {
	    	g_SelMaterialDetail = {"Material": Materialno, "Description": Description, "Quantity": "", "Uom" : Uom , "Customer": Vendor + "", "BatchManaged": Batchmanaged, "SerialManaged": Serialized, "Splitvaluated": Splitvaluated};
	    }
	    
	},


});


function showView_MaterialDetails(){
	$("#idMATSRDetail").show();
	if(backNavMat=="Mob15CreateNoti") {
	var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
	 btnSelMat.setVisible(true);
	}	else if (backNavMat=="Mob22InsLot")
	{
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}	else if (backNavMat == "idMOB21Mas")
	{

		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}else if(backNavMat=="Mob29Screen") {
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}else if (backNavMat == "Mob17")
	{
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}else if (backNavMat == "Mob18")
	{
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}else if( backNavMat == "MOB23"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else if( backNavMat == "MOB28"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else if( backNavMat == "MOB35"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	
	else if( backNavMat == "MOB03"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else if( backNavMat == "MOB01T"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else if( backNavMat == "MOB01D"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else if( backNavMat == "MOB01POP"){
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(true);
	}
	else{
		var btnSelMat = sap.ui.getCore().byId("matSerDetbtn"); 
		 btnSelMat.setVisible(false);
	}
	
	 /*var deselect = sap.ui.getCore().byId("btnsear");	
		deselect.setEnable(false);		*/
	 
}




