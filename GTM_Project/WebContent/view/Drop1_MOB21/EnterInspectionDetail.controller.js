sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.EnterInspectionDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.EnterInspectionDetail
*/
	onInit: function() {

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.EnterInspectionDetail
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.EnterInspectionDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.EnterInspectionDetail
*/
//	onExit: function() {
//
//	}
	
	onSelectMOb21List : function(oEvent)
	{
		//alert("1");
		/*
		 * Showing 3rd Column Inspection Details
		 */
		
		//DMS
		var emptyArray = [];
		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
		sap.ui.getCore().byId("Mob21AddedImageList").setModel(oJasonNotiQModel);
		
		if( g_runningOnPhone == true)
			{
			sap.ui.getCore().byId("myApp").to("idMOB21Detscr");
			g_MobileNavigationId = "Mob21-ThirdScreen-Mobile-BackNavButton"; 
			
			}
		else
			{
			showMOB21Dtl3rdColumn();
			}

		
		   var listItem = oEvent.getParameter('listItem');	
		   var contextPath = listItem.oBindingContexts.undefined.sPath;	
 
		   var valMatDesc = sap.ui.getCore().byId("MOb21MatDesc"); 
		   valMatDesc.setText(this.getModel().getProperty(contextPath + "/matdes"));
		  
		   var valMatNo = sap.ui.getCore().byId("MOb21Matnr"); 
		   valMatNo.setText(this.getModel().getProperty(contextPath + "/matnum"));
		  
		   valMatNo = sap.ui.getCore().byId("Mob21center"); 
		   valMatNo.setText(this.getModel().getProperty(contextPath + "/centre"));
		  
		   valMatNo = sap.ui.getCore().byId("Mob21lot"); 
		   valMatNo.setText(this.getModel().getProperty(contextPath + "/lot"));
		  
		  valMatNo = sap.ui.getCore().byId("Mob21type"); 
		  valMatNo.setText(this.getModel().getProperty(contextPath + "/desc"));
		  
		  valMatNo = sap.ui.getCore().byId("Mob21vendor"); 
		  valMatNo.setText(this.getModel().getProperty(contextPath + "/vendor"));
		  
		  sap.ui.getCore().byId("btnSeeCharMOB21").setVisible(true);
		  
//character list ............
		  
		  var charArr = this.getModel().getProperty(contextPath + "/charList");
		  var charDetArr = this.getModel().getProperty(contextPath + "/charListDet");
		  var specDispArr = this.getModel().getProperty(contextPath + "/specificationDisplay");
		  var insOpArr = this.getModel().getProperty(contextPath + "/insOp");
		  var insCharArr = this.getModel().getProperty(contextPath + "/insChar");
		  var charListLongArr = this.getModel().getProperty(contextPath + "/charListLong");
		  var charDetailListLongArr =  this.getModel().getProperty(contextPath + "/charDetailListLong");
		  var codeArr =  this.getModel().getProperty(contextPath + "/code");
		  var InspectionMethodTextArr =  this.getModel().getProperty(contextPath + "/InspectionMethodText");
		  
		  var charlListArr = [];
		//  var charlListTreeArr = [];
		  var charlTreeArr = [];
		  var charArrLen = charArr.length ;
		
		  var charDetArrLen = charDetArr.length ;
		  
		  var charList = sap.ui.getCore().byId("mob21charlist"); 
		  
		  	for(countcharList=0; countcharList< charDetArrLen; countcharList++) {
		  		
		  		var charval = {"charval": charDetArr[countcharList]};
		  		charlListArr.push(charval);
			  
		  };
		  
		  
		  var oMOB21charData = { "MOB21charCollection" : charlListArr };
			var oJason1 = new sap.ui.model.json.JSONModel(oMOB21charData);
			oJason1.setSizeLimit(1000000);
			//oJSONModelNotiTaskLst = new sap.ui.model.json.JSONModel(treeNotiTaskList, "MOB21Collection");
			//var mob21charlist = sap.ui.getCore().byId("mob21charlist"); 
			//mob21charlist.setModel(oJason1);
			
/********************************************		  
//creating model for tree*/
		  
		  for(countChar=0; countChar< charArrLen; countChar++) {
		  		
			  var charlListTreeArr = [];
	//loop to get char values 	 
			  
			  
		  		for(countcharValues=0; countcharValues< charDetArrLen; countcharValues++) {
		  			if (charDetailListLongArr[countcharValues].indexOf(charArr[countChar]) != -1)
		  				
		  				////var charValInit =  charDetailListLongArr[countcharValues].
		  				//substring(charDetailListLongArr[countcharValues].indexOf(":")+1);
		  				{
			  		var charval = {"charval": charDetArr[countcharValues],
			  				       "specDisp" : specDispArr[countcharValues],
			  				       "insOp" : insOpArr[countcharValues],
			  				       "insChar" : insCharArr[countcharValues],
			  				       "code" : codeArr[countcharValues],
			  		               "InspectionMethodText" : InspectionMethodTextArr[countcharValues]
			  		};
			  		charlListTreeArr.push(charval);
		  				}
				  
			  };
			  
			  var charNode = {"textChar": charListLongArr[countChar],
					          "valChar" : charlListTreeArr};
		  		charlTreeArr.push(charNode);
			  
		  } ;
		  
		  var mob21Tree = {
				  "mob21TreeData" : charlTreeArr
		  };
		  
		  
		  var oModel = new sap.ui.model.json.JSONModel();
		// set the data for the model
		oModel.setData(mob21Tree);
		// set the model to the core
		
	/*	var oTree =sap.ui.getCore().byId("mob21mastree");
		oTree.setModel(oModel) */;
		
/*****************************************/		
		
		var refInsLot= oEvent.mParameters.listItem.getTitle();
		var Temparr=[];
		for(var i=0;i<MOb21SortList.length;i++){
		if(MOb21SortList[i].Insplot_No==refInsLot){
			Temparr.push(MOb21SortList[i]);
		}
		}
		
		var oModel = new sap.ui.model.json.JSONModel(Temparr);
		sap.ui.getCore().byId("mob21mastree1").setModel(oModel);
		
		
		
		  /*var runningInTablet = g_runningInTablet;
	        var runningInDsktop = jQuery.device.is.desktop;
	       // runningInDsktop = false ;
	      // runningInTablet = false ;
			//alert(runningInDsktop);
			
			if(runningInTablet || runningInDsktop) {
				// valMatNo = sap.ui.getCore().byId("MOb21MatDesc"); 
				// alert(valMatNo.getText());
			
			}*/
			
			
	}

});