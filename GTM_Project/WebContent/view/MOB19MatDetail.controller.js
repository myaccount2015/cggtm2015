sap.ui.controller("com.cg.gtm.view.MOB19MatDetail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB19MatDetail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB19MatDetail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB19MatDetail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB19MatDetail
*/
//	onExit: function() {
//
//	}
	
	addSerialMOB19: function() {
	debugger;
		var OverDelTolranceInt =  parseInt(gOverDelTolrance);
		var QtyInt = parseInt(Qty); 
		//var ipQtyInt = parseInt(sap.ui.getCore().byId("MOB19Qty").getValue()); 
		var scannedValues = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+"_"+gDeliveryItem+"_"+gindex);
		scannedValues =  JSON.parse(scannedValues);
		var ipQtyInt=0;
		if(scannedValues!=null){
			 ipQtyInt=scannedValues.length;
		}
		
		if (ipQtyInt ==  ( QtyInt + OverDelTolranceInt))
			{
			 sap.m.MessageBox.show("Quantity exceeds tolerance value",sap.m.MessageBox.Icon.ERROR,"Error");
			}
		else{
		
	       if( sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").getValue() == "")
				{
				sap.m.MessageBox.show("Please Enter Serial Number"+ " " +
				" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
				}
			else{
				
			
			var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+"_"+gDeliveryItem+"_"+gindex;
			var Mob19SerialLogLocalStorage = window.localStorage.getItem(titMat);
			var Mob19SerialLogMasArray = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+"Mob19SerialLog"+"_"+gindex);
			if (Mob19SerialLogLocalStorage === undefined || Mob19SerialLogLocalStorage === null || 
				Mob19SerialLogLocalStorage.length === 0)
		    {
				var serNumArrTitle = new Array();
		      	var titString  = 	JSON.stringify(titMat);
		        serNumArrTitle[0] = titString; 
			    var serNumArr = [];
		       		serNumArr[0] = sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").getValue(); 
	            var stringifiedNoti = JSON.stringify(serNumArr);
	      		window.localStorage.setItem(titMat.toString(), stringifiedNoti);//store the serial number
	      		
	      		//getting scanned records and ther length to check with input valu validations
	      		var getScannedItemRec = window.localStorage.getItem(titMat.toString());
	      		getScannedItemRec = JSON.parse(getScannedItemRec);
	      		if ( sap.ui.getCore().byId("MOB19Qty").getValue() == "")
	      			{
	      			sap.ui.getCore().byId("MOB19Qty").setValue(0);
	      			}
	      		
	      		 if ( sap.ui.getCore().byId("MOB19Qty").getValue() < getScannedItemRec.length)
	      			{
	      			sap.ui.getCore().byId("MOB19Qty").setValue
	        		(sap.ui.getCore().byId("MOB19Qty").getValue() - (-1));//increment 1 
	      			}
	      		
	      	}
			else{
				var notiNumRcvd = new Array();
				notiNumRcvd =  JSON.parse(Mob19SerialLogLocalStorage);
				var testMasterVar = 0;
				///////////////////////////////////////////////////////////////////////////////////////////////
				//Iterate array 
				for ( var i = 0 ; i < notiNumRcvd.length ; i++)
					{
					if( notiNumRcvd[i] == sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").getValue())
						{
					
						sap.m.MessageBox.show("Already Available Serial Number"+ " " +
								" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
						sap.ui.getCore().byId("Mob19-popWin").close();
						testMasterVar = 1;
						}}
				
			if( testMasterVar == 0)
				{
				/*//alert("Not ava");
				sap.ui.getCore().byId("Mob19-thrdScr-txtBoxLogSer").setValue
	    		(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxLogSer").getValue() - (-1));*/
				notiNumRcvd.push(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").getValue());//pushing new noti number 
				var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
	    		window.localStorage.setItem(titMat, notiNumRcvdString);
	    		//getting scanned records and ther length to check with input valu validations
	      		var getScannedItemRec = window.localStorage.getItem(titMat);
	      		getScannedItemRec = JSON.parse(getScannedItemRec);
	      		if ( sap.ui.getCore().byId("MOB19Qty").getValue() < getScannedItemRec.length)
	      			{
	      			sap.ui.getCore().byId("MOB19Qty").setValue
	        		(sap.ui.getCore().byId("MOB19Qty").getValue() - (-1));//increment 1 
	      			}
	    		
				}}
			
			//Master Array rec
			if (Mob19SerialLogMasArray === undefined || Mob19SerialLogMasArray === null || 
					Mob19SerialLogMasArray.length === 0)
			
	          	 {
					var serNumArrTitle = new Array();
	    	        serNumArrTitle[0] = titMat; 
	    		    var stringifiedMob19 = JSON.stringify(serNumArrTitle);
	          	    window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+"Mob19SerialLog"+"_"+gindex, stringifiedMob19);//store the serial number
	          		 
	          	 }
				else{
					var notiNumRcvd = new Array();
					notiNumRcvd =  JSON.parse(Mob19SerialLogMasArray);
					var testMasterVar = 0;
	        ///////////////////////////////////////////////////////////////////////////////////////////////
					//Iterate array 
					for ( var i = 0 ; i < notiNumRcvd.length ; i++)
						{if( notiNumRcvd[i] == titMat)
							{
							//alert("already available Master");
							sap.ui.getCore().byId("Mob19-popWin").close();
							testMasterVar = 1;
							}}
					
					if( testMasterVar == 0)
						{
						//alert("Not ava Master");
						notiNumRcvd.push(titMat);//pushing new noti number 
						var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
			    		window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+"Mob19SerialLog"+"_"+gindex, notiNumRcvdString);
			    		//sap.ui.getCore().byId("Mob19-popWin").close();	
						}
					 
				
				}
			 scannedValues = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+"_"+gDeliveryItem+"_"+gindex);
				scannedValues =  JSON.parse(scannedValues);
				sap.ui.getCore().byId("MOB19Qty").setValue(scannedValues.length);
			//Local storage auto inc data to database
	  		window.localStorage.setItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem + "SerLogVal"+"_"+gindex,
					sap.ui.getCore().byId("MOB19Qty").getValue());
	  		
	  		        sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").setValue("");
		  	        sap.ui.getCore().byId("Mob19-popWin").close();	
		}
			//Dont delete
			/*var scannedValues = window.localStorage.getItem(sap.ui.getCore().byId("Mob19-frstScreen").getTitle()+"_"+ 
				    sap.ui.getCore().byId("Mob19-thrdScr-txtMat").getText() );
					scannedValues =  JSON.parse(scannedValues);
					var array = [];
					if (scannedValues != null )
						{for ( var i = 0 ; i < scannedValues.length ; i++)
						{var res = {"scannerValues" :scannedValues[i],};
						array.push(res);}}
					    var mainArr = [];
					         mainArr = {"results" :  array};
					     var oJSONModelMob19Res = new sap.ui.model.json.JSONModel();
					     oJSONModelMob19Res.setData(mainArr);
					     
					     sap.ui.getCore().byId("oResponsivePopoverList").setModel(oJSONModelMob19Res);*/
					     //sap.ui.getCore().byId("oResponsivePopover").openBy(this);

	     
			
			/*var OverDelTolranceInt =  parseInt(gOverDelTolrance);
			var QtyInt = parseInt(Qty); 
			var ipQtyInt = parseInt(sap.ui.getCore().byId("MOB19Qty").getValue()); 
			if (ipQtyInt >  ( QtyInt + OverDelTolranceInt))
				{
				 sap.m.MessageBox.show("Quantity exceeds tolerance value");
				 
				}
			else{
			}*/
	      
		}
	},
	
	logSerMOB19 : function(oEvent)
	{
		 debugger;
		var scannedValues = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+"_"+gDeliveryItem+"_"+gindex);
				scannedValues =  JSON.parse(scannedValues);
				var array = [];
				if (scannedValues != null )
					{for ( var i = 0 ; i < scannedValues.length ; i++)
					{var res = {"scannerValues" :scannedValues[i],};
					array.push(res);}}
				    var mainArr = [];
				         mainArr = {"results" :  array};
				     var oJSONModelMob19Res = new sap.ui.model.json.JSONModel();
				     oJSONModelMob19Res.setData(mainArr);
				     
				     //sap.ui.getCore().byId("oResponsivePopover").close(this);
				   // sap.ui.getCore().byId("oResponsivePopover").openBy(this);
				     this.popover = sap.ui.getCore().byId("oResponsivePopoverMOB19");
				     this.popover.openBy(oEvent.getSource());
				     sap.ui.getCore().byId("oResponsivePopoverListMOB19").setModel(oJSONModelMob19Res);
				    // oResponsivePopoverList.setModel(oJSONModelMob19Res);
				    // sap.ui.getCore().byId("oResponsivePopover").addContent( sap.ui.getCore().byId("oResponsivePopoverList"));

				     
				     
	                 	
	},
	handleDeleteMOB19: function(evt) {
		   // evt.getSource().removeItem(evt.getParameter("listItem"));destroyItems
			sap.ui.getCore().byId("oResponsivePopoverMOB19").close(this);
		    evt.getSource().destroyItems();
			//sap.ui.getCore().byId("oResponsivePopoverList").getModel();
		    sap.ui.getCore().byId("MOB19Qty").setValue
			(sap.ui.getCore().byId("MOB19Qty").getValue() - (1));//decrement 1 
		    
		    
		  //remove from local 
			var titMat = sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+"_"+gDeliveryItem+"_"+gindex;
			
			var contentDel = evt.getParameter("listItem").mProperties.title;
			//window.localStorage.removeItem(titMat.toString(), contentDel.toString());//store the serial number
			
			
			var  getScannedItemRec = window.localStorage.getItem(titMat);
				getScannedItemRec = JSON.parse(getScannedItemRec);
			var arrFin = [];	
				for( var i = 0 ; i < getScannedItemRec.length ; i++ )
					{
					
					if(getScannedItemRec[i] != contentDel )
						{
						
						arrFin.push(getScannedItemRec[i]);
						
						}
					
					}
				
				var stringifiedNoti = JSON.stringify(arrFin);
				window.localStorage.setItem(titMat,stringifiedNoti);
				
				
				
				var noOfScanQty = window.localStorage.getItem(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19 + "SerLogVal"+"_"+gindex);
				noOfScanQty = noOfScanQty - 1;
				
				window.localStorage.setItem
				(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem + "SerLogVal"+"_"+gindex,
				noOfScanQty);
					
				
		},
		
		ScanSerialMOB19 : function()
		{
			varScan = "Mob19Goods";
			//Mob26scan = "Bin";
		sap.ui.getCore().byId("idMob24MaterialSearchInput")
		.getController().scanNow();
		
			/*	var scannerRes = ScannerOut_M_S_E_B();
			    scannerRes = scannerRes.scanMaterials;
			    //Check serial with material number
			    if( scannerRes[0].Material == sap.ui.getCore().byId("Mob19-thrdScr-txtMat").getText() )
			    	{
			    	sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
			        sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
			        sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);	
			    	}
			    else
			    	{
			    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
					sap.m.MessageBox.Icon.ERROR,"Error");
			    	}
			    */
				
		},
			
		

});