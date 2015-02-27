sap.ui.jsview("com.cg.gtm.view.DROP1_MOB00.MOB00MasterView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.DROP1_MOB00.MOB00MasterView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.DROP1_MOB00.MOB00MasterView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.DROP1_MOB00.MOB00MasterView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var plantText = "Current default plant is : ";
		var whText = "Current default warehouse is : ";
		var printerText = "Current default printer is : ";
		var stoLocText = "Current default storage location is : ";
		var txtTargetSystem = "Select Target System : ";
		
		var plantLabel = new  sap.m.Label({
			
			text : plantText
		}).addStyleClass("paddingTopandfontweight");
		
		var plantLabelV = new  sap.m.Label({
			id : "MOB00ChPltLBL",
			//text : plantText
		});
		
		var plantButton = new sap.m.Button({
			 id : "MOB00ChPlt",
			 visible: true,
          text: "Change Plant",
          press:function(evt){
        	  
        	  
        	  g_MOB00Init  = "PL"; // for printer
        	  
        	  oController.getPlantsMOB00();
        	  if ( g_runningOnPhone == true){
        		  g_MobileNavigationId =  "Mob00-SecondScreen-BackNavButton";
        		  var myapp = sap.ui.getCore().byId("myApp");  
        		  myapp.to("idMOB00detailPage");
        	  }
        	  else
        		  {
        	oSplitApp= sap.ui.getCore().byId("idMOB00SplitApp");
      		oSplitApp.toDetail("idMOB00detailPage");
        		  }
        	  
          } 
        });
		
		var whLabel = new  sap.m.Label({
			//id : "MOB00ChWhLBL",
			text : whText
		}).addStyleClass("paddingTopandfontweight");
		
		var whLabelV = new  sap.m.Label({
			id : "MOB00ChWhLBL",
			text : whText
		});
		
		
		var whButton = new sap.m.Button({
			 id : "MOB00ChWh",
			 visible: true,
          text: "Change Warehouse",
          press:function(evt){
        	 // oController.scanMaterial(evt)
        	  g_MOB00Init  = "WH"; // for printer
        	  oController.getPlantsMOB00();
        	  if ( g_runningOnPhone == true){
        		  g_MobileNavigationId =  "Mob00-SecondScreen-BackNavButton";
        		  var myapp = sap.ui.getCore().byId("myApp");  
        		  myapp.to("idMOB00detailPage");
        	  }
        	  else
        		  {
        	  oSplitApp= sap.ui.getCore().byId("idMOB00SplitApp");
        	  oSplitApp.toDetail("idMOB00detailPage");
        		  }
        	  
          } 
        });
		
		var printerLabel = new  sap.m.Label({
			//id : "MOB00ChPrntLBL",
			text : printerText
		}).addStyleClass("paddingTopandfontweight");
		
		var printerLabelV = new  sap.m.Label({
			id : "MOB00ChPrntLBL",
			text : plantText
		});
		
		var printerButton = new sap.m.Button({
			 id : "MOB00ChPrnt",
			 visible: true,
          text: "Change Printer",
          press:function(evt){
        	 // oController.scanMaterial(evt)
        	  g_MOB00Init  = "PR"; // for printer
        	  oController.getPlantsMOB00();
        	  if ( g_runningOnPhone == true){
        		  g_MobileNavigationId =  "Mob00-SecondScreen-BackNavButton";
        		  var myapp = sap.ui.getCore().byId("myApp");  
        		  myapp.to("idMOB00detailPage");
        	  }
        	  else
        		  {
        	  oSplitApp= sap.ui.getCore().byId("idMOB00SplitApp");
        	  oSplitApp.toDetail("idMOB00detailPage");
        		  }
          } 
        });
		
		//For scanner
		
		var lblScanner = new  sap.m.Label({
			//id : "MOB00ChLocLBL",
			text : "Type of scanner"
		}).addStyleClass("paddingTopandfontweight");
		
		 var oItemTemplate = new sap.ui.core.Item({  
             id : "scannerMOB00dd",
             key : "{key}",
       	  text : "{text}"  
       	 }); 
		
		var scannerMOB00 = new sap.m.Select("scannerMOB00", {
			
		     // type: sap.m.InputType.Text,	  
		     change : oController.selScanner,
		     width:"150px",
			 items: {
               	path : "/items",  
				    template : oItemTemplate  
		           }});//.addStyleClass("InputVendor");
		
	var dropDownDataArr = [] ;
	
		var dropDownData = {  							    
					     "text": "CAMERA" , "key" : "CAM"		
		}
			  
		dropDownDataArr.push(dropDownData);								  
		dropDownData = {  							    
			     "text": "BLUETOOTH" , "key" : "BLU"		
}
		 dropDownDataArr.push(dropDownData);
			
		
 var dropDownDataFinal = [];
 dropDownDataFinal = {"items" : dropDownDataArr};
 var oModelJsonList = new sap.ui.model.json.JSONModel();  
 oModelJsonList.setData(dropDownDataFinal); 
 sap.ui.getCore().byId("scannerMOB00").setModel(oModelJsonList); 
 sap.ui.getCore().byId("scannerMOB00").setSelectedKey("CAM");
		
		//End for scanner 
		
		var locLabel = new  sap.m.Label({
			//id : "MOB00ChLocLBL",
			text : stoLocText
		}).addStyleClass("paddingTopandfontweight");
		
		var locLabelV = new  sap.m.Label({
			id : "MOB00ChLocLBL",
			text : plantText
		});
		
		
		var locButton = new sap.m.Button({
			 id : "MOB00ChLoc",
			 visible: true,
          text: "Change Location",
          press:function(evt){
        	  g_MOB00Init  = "LO"; // for printer
        	  oController.getPlantsMOB00();
        	 // oController.scanMaterial(evt)
        	  if ( g_runningOnPhone == true){
        		  g_MobileNavigationId =  "Mob00-SecondScreen-BackNavButton";
        		  var myapp = sap.ui.getCore().byId("myApp");  
        		  myapp.to("idMOB00detailPage");
        	  }
        	  else
        		  {
        	  oSplitApp= sap.ui.getCore().byId("idMOB00SplitApp");
        	  oSplitApp.toDetail("idMOB00detailPage");
        		  }
          } 
        });
		
		
		
		
		var lblEndPoint = new  sap.m.Label({
			//id : "MOB00ChLocLBL",
			text : txtTargetSystem
		}).addStyleClass("paddingTopandfontweight");
		
		
		
		var selTargetSystem = new sap.m.Select("selTargetSystem", {
			autoAdjustWidth : true,
			 // width: "90%",
		      items: {
		        path: "/MOB00TargetSystem",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		          key: "{key}",
		          text: "{detail}"
		        })
		      } ,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      }),
		      change: oController.onTargetSystemChange
		    });
		  
		var container_ItemMOb00 = null; 
		if(g_runningInTablet || g_runningOnPhone) {
			container_ItemMOb00 = new sap.m.FlexBox("mob00_detailBox",{
				items: [
				        plantLabel,
				        plantLabelV,
				        plantButton,
				        whLabel,
				        whLabelV,
				        whButton,
				        printerLabel,
				        printerLabelV,
				        printerButton,
				        locLabel,
				        locLabelV,
				        locButton,
				        lblEndPoint,
				        selTargetSystem,
				        lblScanner,
				        scannerMOB00,
				        ],
				direction:"Column",
				justifyContent:"Center",//Contents would be placed in the begin
				alignItems:"Start"
			}).addStyleClass("lab1");
		}else {
			container_ItemMOb00 = new sap.m.FlexBox("mob00_detailBox",{
				items: [
				        plantLabel,
				        plantLabelV,
				        plantButton,
				        whLabel,
				        whLabelV,
				        whButton,
				        printerLabel,
				        printerLabelV,
				        printerButton,
				        locLabel,
				        locLabelV,
				        locButton,
				       // lblScanner,
				        //scannerMOB00
				        ],
				direction:"Column",
				justifyContent:"Center",//Contents would be placed in the begin
				alignItems:"Start"
			}).addStyleClass("lab1");
		}
		
		
		
		if ( g_runningOnPhone == true){
			 var backButtonMOB00M = new sap.m.Button({
				
				 text: "Back",
				 icon: "sap-icon://close-command-field" ,
		      press: function () {
		    	  g_MobileNavigationId =  "Mob00-BackNavButton";
		    	  var app = sap.ui.getCore().byId("myApp"); 
				   app.to("idGrid");
				
		      }
		    });

	 		return new sap.m.Page({
				title: "User Defaults",
				content: [
				          container_ItemMOb00,
				         			          
				],
				headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
				 enableScrolling: true,
					
					//showNavButton: false,
					showFooter: true,
					showHeader: true,
					footer: new sap.m.Bar({
				        contentLeft: [
				                      backButtonMOB00M
				                       ]
					})
			});
				
		}
		else{
 		return new sap.m.Page({
			title: "User Defaults",
			content: [
			          container_ItemMOb00,
			          	          
			          
			
			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
		});
	}
	}

});