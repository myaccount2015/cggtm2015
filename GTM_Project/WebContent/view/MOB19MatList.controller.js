sap.ui.controller("com.cg.gtm.view.MOB19MatList", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB19MatList
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB19MatList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB19MatList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB19MatList
*/
//	onExit: function() {
//
//	}
	
	Mob19MatSel : function(oEvent)
	{
		debugger;
	
		var sID =  oEvent.mParameters.listItem.sId ;
		var selected =  oEvent.mParameters.selected ;
		var sIDLen = sID.length ;
		var sIndex = sID.substring(sIDLen-1);
		sIndex = parseInt(sIndex);
		
		
		var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
		var results = oListMOB19Model.oData.results;
		results[sIndex].selected =  selected ;
		
		
			if (globalVisitedIDs.indexOf(sIndex) == -1 ||!selected)
				{
				$("#"+sID).css("background-color","#FFFFFF");
				}
			
			else
				{
				$("#"+sID).css("background-color","#e6f2f9");
				
				}
	
			if(gMOB19Key=="OD"||gMOB19Key=="ID"){
				this.selectAll();
				$("#"+sID).css("background-color","#e6f2f9");
	    			sap.m.MessageBox.show(
							
							"All items should be selected for this Goods reciept",
							sap.m.MessageBox.Icon.Warning,
							"Warning"
							);
				
			}
	//	$("#__item59-Mob19listMatNo-1").css("background-color","#FFFFFF");
	
		/*  var listItem = oEvent.getParameter('listItem');	
		   var contextPath = listItem.oBindingContexts.undefined.sPath;	

		 
		    gMatNumMOB19  = this.getModel().getProperty(contextPath + "/matnum");
		  
		    sap.ui.getCore().byId("Mob19Save").setVisible(true);*/
	},
	
	Mob19MatSelPress : function(oEvent)
	{
		debugger;
		gidList = oEvent.mParameters.id;
		
		gindex = sap.ui.getCore().byId("Mob19listMatNo").indexOfItem(oEvent.getSource());
		
		
		
		globalValMOB21ConfrmCount = globalValMOB21ConfrmCount + 1;
		$("#"+gidList+"").css("background-color","#e6f2f9");
		//globalVisitedIDs.push(idList);
		globalVisitedIDs.push(gindex);
		//MultiSelect
		var contextPath = oEvent.oSource.oBindingContexts.undefined.sPath;	
	   
		//getting details from binded list items
		var Material = this.getModel().getProperty(contextPath + "/matnum");
		var Desc = this.getModel().getProperty(contextPath + "/desc");
		    Qty = this.getModel().getProperty(contextPath + "/qty");
		var Location = this.getModel().getProperty(contextPath + "/loc");
		var Batch = this.getModel().getProperty(contextPath + "/batch");
		var Batchnum = this.getModel().getProperty(contextPath + "/batchnum");
		var Serial = this.getModel().getProperty(contextPath + "/serial");
		//var MaterialDesc  = this.getModel().getProperty(contextPath + "/MaterialDesc");
	    gMatNumMOB19  = this.getModel().getProperty(contextPath + "/matnum");
	    gDeliveryItem  = this.getModel().getProperty(contextPath + "/DeliveryItem");
	    gOverDelTolrance = this.getModel().getProperty(contextPath + "/OverDelTolrance");
	    sap.ui.getCore().byId("MOB19SLoc").setText(Location);
	    sap.ui.getCore().byId("Mob19Detpage").setTitle(Desc);
	   
	    if (Serial ==  "Y")
	    	{
	    	  sap.ui.getCore().byId("MOB19SerialLabel").setVisible(false);
	    	  sap.ui.getCore().byId("MOB19Serial").setVisible(false);
	    	  sap.ui.getCore().byId("Mob19-btnlogSer").setVisible(true);
	    	  sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(true);
	    	  if ( g_runningOnPhone == true)
	  		{
	    	  sap.ui.getCore().byId("Mob19ScanMob").setVisible(true);
	  		}
	    	else
	    	 {
	    	 sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(true);
	    	 }
	    	  var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+Material+"_"+gDeliveryItem;
	    	  var Mob19SerialLogLocalStorage = window.localStorage.getItem(titMat);
	    	  
	    	  if ( null != Mob19SerialLogLocalStorage && Mob19SerialLogLocalStorage != undefined)
	    		  {
	    		  var notiNumRcvd = new Array();
	    			  notiNumRcvd =  JSON.parse(Mob19SerialLogLocalStorage);
	    			  
	    			  if ( notiNumRcvd.length > 0)
	    				  {
	    				  sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(true);
	    				  }
	    		 
	    		  }
	    	}
	    
	    else
	    	{
	    	 sap.ui.getCore().byId("MOB19SerialLabel").setVisible(false);
	    	 sap.ui.getCore().byId("MOB19Serial").setVisible(false);
	    	  sap.ui.getCore().byId("Mob19-btnlogSer").setVisible(false);
	    	  sap.ui.getCore().byId("Mob19-btnlogSerMore").setVisible(false);
	    	  if ( g_runningOnPhone == true)
		  		{
		    	  sap.ui.getCore().byId("Mob19ScanMob").setVisible(false);
		  		}
		    	else
		    	 {
		    	 sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(false);
		    	 }
	    	}
	    
	    if (Batch ==  "Y")
    	{
    	  sap.ui.getCore().byId("MOB19BatchLabel").setVisible(true);
    	  sap.ui.getCore().byId("MOB19Batch").setVisible(true);
    	  
    	  if (Batchnum ==  "Y")
      	{
    	   sap.ui.getCore().byId("BatchRow1").setVisible(true);
    	   sap.ui.getCore().byId("MOB19Batch1").setValue(Batchnum);
      	}
    	  else{
    		  sap.ui.getCore().byId("BatchRow1").setVisible(false);
    	    	 sap.ui.getCore().byId("MOB19Batch1").setValue("");
    		  
    	  }
    	  //sap.ui.getCore().byId("MOB19Batch").setValue(true);
    	  //sap.ui.getCore().byId("MOB19Batch").setValue(Batchnum);
    	 // sap.ui.getCore().byId("MOB19Batch").setDateValue("2014-07-18");
    	  
 
    	var expdate =  
    	window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+Material + "DateTime");
    	if ( null != expdate && expdate != undefined && expdate != "")
    		{
    		sap.ui.getCore().byId("MOB19Batch").setValue(expdate);
    		}
    	else
    		{
    		sap.ui.getCore().byId("MOB19Batch").setValue("");
    		}
    
    	}
    
    else
    	{
    	 sap.ui.getCore().byId("MOB19BatchLabel").setVisible(false);
    	 sap.ui.getCore().byId("MOB19Batch").setVisible(false);
    	 
    	}
	    
	    if ( gMOB19Key != "PO")
	    	{
	    	 sap.ui.getCore().byId("MOB19Batch").setEnabled(false);
	    	 sap.ui.getCore().byId("MOB19Qty").setEnabled(false);
	    	 sap.ui.getCore().byId("Mob19-btnlogSer").setVisible(false);
	    	 if ( g_runningOnPhone == true)
		  		{
		    	  sap.ui.getCore().byId("Mob19ScanMob").setVisible(false);
		  		}
		    	else
		    	 {
		    	 sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(false);
		    	 }
	    	
	    	}
	    
	    
	    
	    
		//create Array 
		var MatArray = [];
		var insMatArr = {					
				
				"Material" : Material,
				"Desc" : Desc,
				"Qty" : Qty			
		};
		
		MatArray.push(insMatArr);
		var stringifyng = 	JSON.stringify(MatArray);
		window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem+"_Details",stringifyng );
		
		window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem+"_"+gindex+"_Details",stringifyng );
		
		//pass detail to third column
		sap.ui.getCore().byId("MOB19Mat").setText(Material);
		sap.ui.getCore().byId("MOB19MatDesc").setText(Desc);
		
		
	
		//get stored values from local storage and pass to SerialText
		
		
		var localStrData = window.localStorage.getItem
		(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem+ "SerLogVal"+"_"+gindex);
		
		 if (localStrData === undefined || localStrData === null || localStrData.length === 0)
      	 {
			 sap.ui.getCore().byId("MOB19Qty").setValue(Qty);	
      	 }
		 else
		 {
			 sap.ui.getCore().byId("MOB19Qty").setValue(localStrData);	 
		 }
      	 
		 var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
		 var results = oListMOB19Model.oData.results;
		 //results[index].qty = Qty ;
		 results[gindex].ID =  gidList ;	
		 
      	if ( g_runningOnPhone == true)
		{
      	  g_MobileNavigationId = "Mob19Detpage";
      		var myapp = sap.ui.getCore().byId("myApp");
            myapp.to("idMob19MatDetPage");
            sap.ui.getCore().byId("Mob19SaveMOb").setVisible(true);
            sap.ui.getCore().byId("Mob19ScanMob").setVisible(true);
            sap.ui.getCore().byId("Mob19-btnlogSer").setVisible(true);
            
		}
      	
      	else
      		{
      		
      		sap.ui.getCore().byId("Mob19Save").setVisible(true);
      		}
      	// sap.ui.getCore().byId("MOB19Batch").setValue("23/07/2014 16:09");
      	// sap.ui.getCore().byId("MOB19SerialLabel").setVisible(false);
    	// sap.ui.getCore().byId("MOB19Serial").setVisible(false);
      	
      	/* sap.ui.getCore().byId("MOB19Qty").setValue(mob19ListInfoArray[gindex].quantity);
      	 var serial= mob19ListInfoArray[gindex].Serial;
      	 var serailArr= serial.split("_");
      	var serialArrFinal= [];
      	
      	for(i=0;i<serailArr.length;i++){
      		
      		serialArrFinal.push({"scannerValues":serailArr[i]})
      	}
      	oResponsivePopoverListMOB19*/
      	
	},
	
	selectAll : function()
	{
		var myList = sap.ui.getCore().byId("Mob19listMatNo")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  true ;
			
			if (globalVisitedIDs.indexOf(index) == -1 )
				{
				//$("#__item59-Mob19listMatNo-"+index).css("background-color","#FFFFFF");
				$("#"+myList[index].id).css("background-color","#FFFFFF");
				}
			else
				{
				$("#"+myList[index].id).css("background-color","#e6f2f9");
				}
			}
		
		oListMOB19Model.updateBindings();
		
	},
	
	selectNone : function()
	{

		var myList = sap.ui.getCore().byId("Mob19listMatNo")._oItemNavigation.aItemDomRefs;
		var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
		var results = oListMOB19Model.oData.results;
		
		for ( var index = 0 ; index < results.length ; index ++)
			{
			
			results[index].selected =  false ;
			if (globalVisitedIDs.indexOf(index) == -1 )
			{
			//$("#__item59-Mob19listMatNo-"+index).css("background-color","#FFFFFF");
			$("#"+myList[index].id).css("background-color","#FFFFFF");
			}
		else
			{
			$("#"+myList[index].id).css("background-color","#e6f2f9");
			}
			
			}
		
		oListMOB19Model.updateBindings();
		
	
		
	}
	

});