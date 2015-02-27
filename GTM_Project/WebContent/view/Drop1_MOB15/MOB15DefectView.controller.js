sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.MOB15DefectView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB15DefectView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB15DefectView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB15DefectView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB15DefectView
*/
//	onExit: function() {
//
//	}

onTreeSelectionMOB15Def: function(event)
	
	{
	 var nodeId = event.mParameters.id; // Getting node Id in the Tree
	   
	   var modelNode = sap.ui.getCore().byId(nodeId); // Getting actual Node Control
	   
	   var oTree = sap.ui.getCore().byId("defectTree"); // Getting Tree Control
	   var model = oTree.getModel(); // Getting Model associated to Tree

	   var contextPath = modelNode.oBindingContexts.undefined.sPath; // Getting context path for Node

	   var strNode = contextPath.substring(0, contextPath.length - 2); // Getting parent level of Context Path
	   var defect =sap.ui.getCore().byId("inputDef");
	 
	  if(strNode != null && strNode != undefined && strNode.length > 0) {
		
		    if(strNode.indexOf("QMEARR") !== -1) 
		    {
		    	
			  var objValue = model.getProperty(contextPath);
			   defect.setValue(objValue.QMEDET);	
			   
		    }		    
		    else if (strNode.indexOf("QMMARR")  !== -1)
		    {		
		    	
		    	var  objValue = model.getProperty(contextPath);
		    	  defect.setValue(objValue.QMMDET);
		    }
	  }
	  
	 // var tableData = sap.ui.getCore().byId(nodeId);
      // alert("id of table : "+tableData);
       
       
	 // var setDefectField = sap.ui.getCore().byId("inputDef");
	  //setDefectField.setValue("jah") ; 
	
	
	  var app =sap.ui.getCore().byId("myApp");
	  app.to("idMob15Notification");
	var oSplitApp =sap.ui.getCore().byId("splitApp");
	var detailpage2 =sap.ui.getCore().byId("idMob15DetailsQ3");
    oSplitApp.toDetail(detailpage2);
	},


tableselect : function(event)
{
	
	var bindingContext = event.getSource().getBindingContext(); // get binded context from event
	
	var selectedItem = this.getModel().getProperty(bindingContext.sPath); // From the event sPath is taken and selected Item values are taken from Model 
	
	var defectCodeDesc = selectedItem.defectCodeDescription; //Defect description
	var defCode = selectedItem.defectCode; //Defect description
	var defName = selectedItem.defTypName; //Defect Name
	
    var defect =sap.ui.getCore().byId("inputDef");
    defect.setValue(defectCodeDesc);
    
    var getDefectCode =sap.ui.getCore().byId("getDefCode");
    getDefectCode.setText(defCode);
    
    var getDefectGrp = selectedItem.defectLocationGroup;
    
    var getDefectName =sap.ui.getCore().byId("getDefName");
    getDefectName.setText(getDefectGrp);
    
    
    

    
    var app =sap.ui.getCore().byId("myApp");
    app.to("idMob15Notification");
	var oSplitApp =sap.ui.getCore().byId("splitApp");
	var detailpage2 =sap.ui.getCore().byId("idMob15DetailsQ3");
	
	

    
  
	oSplitApp.to(detailpage2);



}
	
	
	   

});

