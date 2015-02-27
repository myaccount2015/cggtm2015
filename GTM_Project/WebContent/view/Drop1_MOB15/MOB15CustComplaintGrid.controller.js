sap.ui.controller("com.cg.gtm.view.Drop1_MOB15.MOB15CustComplaintGrid", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB15CustComplaintGrid
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB15CustComplaintGrid
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB15CustComplaintGrid
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB15CustComplaintGrid
*/
//	onExit: function() {
//
//	}
	
	gotoCreateNotiMOB15 : function()
	{

		globalFromCustComlaint = 1 ;
		 var oMD15Data ;
			var notiNum = new Array();
			var notiNumRcvd = new Array();
			
			var items = window.localStorage.getItem('NOTILIST');
		 	 if (items === undefined || items === null || items.length === 0)
		 	 {
		 		
		 		
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
		 	    
		 	   var notiIDNum = parseInt(notiID);
			 	  
		 	    var currDate = new Date();
	   		    currDate.toDateString();
	   		    var timeMilli = currDate.getTime();
	   		    
	   		    var diff  =  (timeMilli - notiIDNum)/1000 ;
	   		    
	   		    if ( diff < 3600)
	   		    	{
		 	    
		 	   // if (notiID.substring(0, 2) == )
		 		var notiData = window.localStorage.getItem(notiID);// get from local storage 
		 		oMD15Data.push(JSON.parse(notiData));//the array needs to be parsed to convert to appropriate format
	   		    	}
		 		
		 		}
		 		
		 		var finalObj = {"MD15Collection01": oMD15Data};
		 		//alert("finalObj :"+finalObj.length);
		 		var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(finalObj);
		 		var notiQ = sap.ui.getCore().byId("myList");
		 		notiQ.setModel(oJasonNotiQModel);
		 		}
		 	 
		 var valMatNo = sap.ui.getCore().byId("inputMatnr"); 
		 	 valMatNo.setValue("");
			 valMatNo.setEnabled(true);
			 valMatNo.setValueState(sap.ui.core.ValueState.None);
			  
			  valMatNo = sap.ui.getCore().byId("ipQty"); 
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  valMatNo = sap.ui.getCore().byId("inputOrderNo"); 
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  valMatNo = sap.ui.getCore().byId("inputSoldTo");
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  valMatNo.setValueState(sap.ui.core.ValueState.None);
			  
			  valMatNo = sap.ui.getCore().byId("ipdelno"); 	
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  valMatNo = sap.ui.getCore().byId("selno"); 	
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  valMatNo = sap.ui.getCore().byId("batchno"); 	
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  valMatNo = sap.ui.getCore().byId("desc"); 	
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  valMatNo.setValueState(sap.ui.core.ValueState.None);
			  
			  
			  valMatNo = sap.ui.getCore().byId("adninfo"); 		
			  valMatNo.setValue("");
			  valMatNo.setEnabled(true);
			  
			  
			  
			  
			  
			     valMatNo = sap.ui.getCore().byId("inputMatnr2"); 
			 	 valMatNo.setValue("");
				 valMatNo.setEnabled(true);
				 valMatNo.setValueState(sap.ui.core.ValueState.None);
				  
				  valMatNo = sap.ui.getCore().byId("ipQty2"); 
				  valMatNo.setValue("");
				  valMatNo.setEnabled(true);
				  
				  valMatNo = sap.ui.getCore().byId("inputDef"); 
				  valMatNo.setValue("");
				  valMatNo.setEnabled(true);
				  valMatNo.setValueState(sap.ui.core.ValueState.None);
				  
				  valMatNo = sap.ui.getCore().byId("inputLocation");
				  valMatNo.setValue("");
				  valMatNo.setEnabled(true);
				  
				  valMatNo = sap.ui.getCore().byId("descq3"); 	
				  valMatNo.setValue("");
				  valMatNo.setEnabled(true);
				  valMatNo.setValueState(sap.ui.core.ValueState.None);
				  
				  valMatNo = sap.ui.getCore().byId("adninfoq3"); 	
				  valMatNo.setValue("");
				  valMatNo.setEnabled(true);
				  
				  
				  
				  valMatNo = sap.ui.getCore().byId("inputMatnr1"); 
				 	 valMatNo.setValue("");
					 valMatNo.setEnabled(true);
					 valMatNo.setValueState(sap.ui.core.ValueState.None);
					 
					  valMatNo = sap.ui.getCore().byId("ipQty1"); 
					  valMatNo.setValue("");
					  valMatNo.setEnabled(true);
					  
					  valMatNo = sap.ui.getCore().byId("inputOrderNo1"); 
					  valMatNo.setValue("");
					  valMatNo.setEnabled(true);
					  
					  valMatNo = sap.ui.getCore().byId("delnoq11"); 	
					  valMatNo.setValue("");
					  valMatNo.setEnabled(true);
					  
					  valMatNo = sap.ui.getCore().byId("descq11"); 	
					  valMatNo.setValue("");
					  valMatNo.setEnabled(true);
					  valMatNo.setValueState(sap.ui.core.ValueState.None);
					  
					  valMatNo = sap.ui.getCore().byId("adninfoq11"); 	
					  valMatNo.setValue("");
					  valMatNo.setEnabled(true);
					  
					  
					  
					  valMatNo = sap.ui.getCore().byId("inputMatnr4"); 
					 	 valMatNo.setValue("");
						 valMatNo.setEnabled(true);
						 valMatNo.setValueState(sap.ui.core.ValueState.None);
						  
						  valMatNo = sap.ui.getCore().byId("ipQty4"); 
						  valMatNo.setValue("");
						  valMatNo.setEnabled(true);
						  
						  valMatNo = sap.ui.getCore().byId("ip_SerialNo4"); 
						  valMatNo.setValue("");
						  valMatNo.setEnabled(true);
						  
						  valMatNo = sap.ui.getCore().byId("ip_BatNo4"); 	
						  valMatNo.setValue("");
						  valMatNo.setEnabled(true);
						  
						  valMatNo = sap.ui.getCore().byId("descf3"); 	
						  valMatNo.setValue("");
						  valMatNo.setEnabled(true);
						  valMatNo.setValueState(sap.ui.core.ValueState.None);
						  
						  valMatNo = sap.ui.getCore().byId("adninfof3"); 	
						  valMatNo.setValue("");
						  valMatNo.setEnabled(true);
						  
						  
						  valMatNo = sap.ui.getCore().byId("inputMatnr3"); 
						 	 valMatNo.setValue("");
							 valMatNo.setEnabled(true);
							 valMatNo.setValueState(sap.ui.core.ValueState.None);
							 
							  valMatNo = sap.ui.getCore().byId("ipQty3"); 
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  
							  valMatNo = sap.ui.getCore().byId("ip_purOrd"); 
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  valMatNo.setValueState(sap.ui.core.ValueState.None);
							  
							  valMatNo = sap.ui.getCore().byId("ip_purOrdItm"); 	
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  valMatNo.setValueState(sap.ui.core.ValueState.None);
							  
							  valMatNo = sap.ui.getCore().byId("selnof2"); 	
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  
							  valMatNo = sap.ui.getCore().byId("batchf2"); 	
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  
							  valMatNo = sap.ui.getCore().byId("descf2"); 	
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  valMatNo.setValueState(sap.ui.core.ValueState.None);
							  
							  valMatNo = sap.ui.getCore().byId("adninfof2"); 	
							  valMatNo.setValue("");
							  valMatNo.setEnabled(true);
							  
						  
					
				  
				 
	}

});