sap.ui.jsview("com.cg.gtm.view.Drop2_MOB35.MOB35_VerifyBinPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB35.MOB35_VerifyBinPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB35.MOB35_VerifyBinPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		
		var bin= new sap.m.Label({
			text: "{i18n>MOB35_Bin}",design: sap.m.LabelDesign.Bold,
		});
		
		var oItemTemplate = new sap.ui.core.Item({  
            key : "{key}",
      	     text : "{text}"  
      	 }); 
		 
		var binSelectMOB35 = new sap.m.Input("ddBinMOB35", {
			width:"200px",
			enabled: false,
			/*items: {
	      	path : "/itemsBinMOb35",  
			    template : oItemTemplate  
	         },*/
	         change : function()
	         {	
	        	 //gValMovType = movypeMOB28.getSelectedKey(); 	
	         }
   }).addStyleClass("FontBold");
		
		//binSelectMOB35.destroyItems()
		
		var binSelect= new sap.m.Select({
			id : "MOB35BINSEL",
			width: "11rem"
		});
		var verifyBin= new sap.m.Label({
			text: "{i18n>MOB35_VerifyBin}",design: sap.m.LabelDesign.Bold,
		});
		
		
		var verifyBinInput= new sap.m.Input("MOB35_binInput",{
			placeholder: 'Scan or manual entry',
			change : function()
			{
				
			oController.verifyBinMOB35();	
			}
		});
		
		
		var btnScanBin = "";
		 if ( g_runningInTablet == true || g_runningOnPhone == true )
		 {
	btnScanBin = new sap.m.Button({
		 id : "MOB35_binScan",
		// visible: false,
     //  text: "{i18n>MOB17_ScanMat}",
       icon: "img/ico_rect_scanbarcode.png",
       //type: sap.m.ButtonType.Accept,
      //ss layoutData: new sap.m.FlexItemData({growFactor: 1}),
       press: oController.scanMaterial
     });
		 }
	
	 var msgDialog = new sap.m.Dialog({
	       	title: "Warning",
	       	 icon: "img/download_1.jpg",
	       	type: sap.m.DialogType.Message,
	       	content: [
	       	new sap.m.Text({
	       	text:"Do you want to mark this bin as empty ?"
	       	}),
	       	],
	       	leftButton: new sap.m.Button({
	       	text: "No",
	       	press: function () {
	       	msgDialog.close();
	       
	       	}
	       	}),
	       	rightButton: new sap.m.Button({
	       	text: "Yes",
	       	press: function () {
	       		msgDialog.close();
	       		oController.emptyBinPost();
	       	}
	       	})
	       	});
	 
	var scanInput=  new sap.m.FlexBox({
		items: [
			     verifyBinInput ,
			     btnScanBin
						        ],
		direction:"Row",
		//justifyContent:"Center",//Contents would be placed in the begin
		alignItems:"Start"
	});
	var container_Item1 = new sap.m.FlexBox({
		items: [
			     bin ,
			     binSelectMOB35,verifyBin,scanInput
						        ],
		direction:"Column",
		justifyContent:"Center",//Contents would be placed in the begin
		alignItems:"Start"
	}).addStyleClass("lab1");
	
	var btnBinempty = new sap.m.Button({
    	id : "idEmptyMOB35",
	  text : "{i18n>MOB35_BinEmpty}",
            layoutData: new sap.m.FlexItemData({growFactor: 1}),
            press : function(){
            	msgDialog.open();
            	
            }
           
	});
	
	 var btnNext = new sap.m.Button({
			id : "idNextMOB35",
		  text : "{i18n>Mob18_Next}",
		  icon: "sap-icon://open-command-field",
	            layoutData: new sap.m.FlexItemData({growFactor: 1}),
	            press : function(){
	            	resetMaterialDetailUIMOB35(false);
	       		$("#idMOB35WMCount").show();
	            	if ( g_runningOnPhone == true){
	            		  g_MobileNavigationId = "mob35BinPage";
	            		var detailCountPage = sap.ui.getCore().byId("idMOB35WMCount");
	    				var app = sap.ui.getCore().byId("myApp");
	    				app.to(detailCountPage)
	    				
	    			}
	            	else{
	            	$("#idMOB35WMCount").show();
	            }
	            }
		});
	 
		if ( g_runningOnPhone == true)
		{

	 		return new sap.m.Page("MOB35verifyBinPage",{
	 			height:"100%",
	title: "{i18n>MOB35_StorageBin}",
				
	showNavButton: true,

	navButtonTap:function(){  
		  g_MobileNavigationId = "Mob35-BackNavButton";
		var app = sap.ui.getCore().byId("myApp"); 
		app.to("idMob35InitialScreen");
		
	   

	},
				content: [container_Item1],
			footer: new sap.m.Bar({
				
				
					//contentLeft: [ btnSearch.addStyleClass("search")],
			        contentRight: [
			                      // btnBack,
			                      btnBinempty,btnNext  
			                       ]
				})
			});
		
		}
		else
			{
		return new sap.m.Page("MOB35verifyBinPage",{
			height:"100%",
title: "{i18n>MOB35_StorageBin}",
		
showNavButton: true,

navButtonTap:function(){  
  g_MobileNavigationId = "Mob35-BackNavButton";
var app = sap.ui.getCore().byId("myApp"); 
app.to("idMob35InitialScreen");



},
		content: [container_Item1],
	footer: new sap.m.Bar({
		
		
			//contentLeft: [ btnSearch.addStyleClass("search")],
	        contentRight: [
	                      // btnBack,
	                      btnBinempty,btnNext  
	                       ]
		}).addStyleClass("footer")
	});
}
}

});