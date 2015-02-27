sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.MaterialSearchInput", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf com.cg.gtm.view.MaterialSearchInput
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB24.MaterialSearchInput";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf com.cg.gtm.view.MaterialSearchInput
	*/ 
	createContent : function(oController) {
	
		this.setHeight("100%");
		 busyDialog = new sap.m.BusyDialog({
	          title: "Search Material",
	          text: "Retrieving Material List..."
	         // showCancelButton: true
	          });
		 

			var scanDiaContent = new sap.m.VBox();
			var btscanIP  =  new sap.m.Input({
			     id : "BTSCAN",		
			     //text : "Do you want to take a new photo or find a saved photo"
			    });
			    
		    var btscanImg =  new sap.m.Image({
		  	  //id : "matScanQ1" ,
		  	    src: "icon/BT.png"
		    });
		    
		    scanDiaContent.addItem(btscanIP);
		    scanDiaContent.addItem(btscanImg);
			var scanDialog = new sap.m.Dialog({
				id : "SCANDIAL",
				  title: "Scan Barcode",
			    content:scanDiaContent,
			    leftButton: new sap.m.Button({
			    	 text: "Confirm",
			      press: function () {

			    	    		 var scannerJSON;
			    	    		 var Material = "";
			    	    		 var errorText;
			    			     var mainArray= ["","","","","","",""];
			    			       
			    			     //var resArray = result.text.split("#");
			    			     var str = sap.ui.getCore().byId("BTSCAN").getValue();//"#M:200042#S:3001607#E:3001607#B:";
			    			     //var str ="#M:200042#S:3001607#E:3001607#B:";
			    			     
			    			     if(str.trim()=="") {
			    			    	 sap.m.MessageBox.show("Please give valid input !!",
				      						 sap.m.MessageBox.Icon.ERROR,
				      							"Error"
				      						 );
			    			    	 return false;
			    			     }else {
			    			    	 if( g_isDebug == true)
			    					 {
			    					 //Service End Time
			    					 var logInfo1 = getTimeStamp() +"Barcode BT Scanned:- Finish " + str; 
			    					 //Log file Service Start and End Time
			    					 var g_ServiceStartEndTime = logInfo1;
			    					 logFileUpdate(g_ServiceStartEndTime);
			    					 }	
			    			     }
			    			     
			    			     
			    			     var res = str.split("#");
			    			     for( var i = 1 ; i< res.length; i++)
			    			     {
			    			     Material = res[i];
			    			     Material = Material.split(":");
			    			     var identifier = Material[0];
			    			     Material = Material[1];
			    			    // alert(identifier);
			    			     if ( identifier ==  "M")
			    			       {
			    			       mainArray[0]= Material ;
			    			       }
			    			    /* else
			    			       {
			    			       
			    			       mainArray[0]= "NA" ;
			    			       }*/
			    			     if ( identifier ==  "S")
			    			       {
			    			       mainArray[1]= Material ;
			    			       }
			    			     /*else
			    			       {
			    			       
			    			       mainArray[1]= "NA" ;
			    			       }*/
			    			     if ( identifier ==  "E")
			    			       {
			    			       mainArray[2]= Material ;
			    			       }
			    			    /* else
			    			       {
			    			       
			    			       mainArray[2]= "NA" ;
			    			       }*/
			    			     if ( identifier ==  "B")
			    			       {
			    			       mainArray[3]= Material ;
			    			       }   
			    			    /* else
			    			       {
			    			       
			    			       mainArray[3]= "NA" ;
			    			       }*/
			    			     if ( identifier ==  "K")
			    			       {
			    			       mainArray[4]= Material ;
			    			       }   
			    			    /* else
			    			       {
			    			       
			    			       mainArray[4]= "NA" ;
			    			       }*/
			    			     
			    			     if ( identifier ==  "L")
			    			       {
			    			       mainArray[5]= Material ;
			    			       }   
			    			    /* else
			    			       {
			    			       
			    			       mainArray[5]= "NA" ;
			    			       }*/
			    			     if ( identifier ==  "T")
			    			       {
			    			       mainArray[6]= Material ;
			    			       }   
			    			    /* else
			    			       {
			    			       
			    			       mainArray[6]= "NA" ;
			    			       }*/
			    			     
			    			    // mainArray.push(Material); 
			    			     }
			    			     
			    			     g_scannerJSONBT = {"scanMaterials" : [
			    			                                      {
			    			                                           "Material" : mainArray[0],
			    			                                            "Serial" : mainArray[1],
			    			                                            "E" : mainArray[2],
			    			                                            "Batch" : mainArray[3],
			    			                                            "BinNonWM" : mainArray[4],
			    			                                            "BinWM" : mainArray[5],
			    			                                            "TO" : mainArray[6],
			    			                                            "Error" :  errorText
			    			                                           
			    			                                      }]};
			    			     
			    			    

			    		
			    	 // sap.ui.getCore().byId("inputMatnr").setValue(sap.ui.getCore().byId("BTSCAN").getValue());
			    	  scanDialog.close();
			  	    var scannerRes = g_scannerJSONBT.scanMaterials;
			  	
			  	    
			  	    var btnSelMat = sap.ui.getCore().byId("btnSelMat"); 
			       	btnSelMat.setVisible(false);
			       	
			       	if ( varScan == "MOB03COMP")
			 		{
			 		
			     	 sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue(scannerRes[0].Serial);
					 if	( null == sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() || 
					    		sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() == "" )
					    	{
						
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue(scannerRes[0].Material);
					sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
					//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
					    	}
					 
					 else if (    sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").getValue() !=  scannerRes[0].Material )
						 {
						 

						sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValue(scannerRes[0].Material);
						sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput").setValueState(sap.ui.core.ValueState.None);
						//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
						//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
						    	
						 
						 }
					 
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
						
					 
			 		}
			       	else if ( varScan == "MOB01EQT")
		     		{
		     		

					 if	( null == sap.ui.getCore().byId("MOB01EQT").getValue() || 
					    		sap.ui.getCore().byId("MOB01EQT").getValue() == "" )
					    	{
						
					sap.ui.getCore().byId("MOB01EQT").setValue(scannerRes[0].Material);
					sap.ui.getCore().byId("MOB01EQT").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
					//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
					    	}
					 
					 else if (    sap.ui.getCore().byId("MOB01EQT").getValue() !=  scannerRes[0].Material )
						 {
						 

		 			sap.ui.getCore().byId("MOB01EQT").setValue(scannerRes[0].Material);
		 			sap.ui.getCore().byId("MOB01EQT").setValueState(sap.ui.core.ValueState.None);
		 			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		 			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
						    	
						 
						 }
					 
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
						
					 
		     		}
			       	
			       	else if ( varScan == "MOB01EQD")
		     		{
		     		

					 if	( null == sap.ui.getCore().byId("MOB01EQD").getValue() || 
					    		sap.ui.getCore().byId("MOB01EQD").getValue() == "" )
					    	{
						
					sap.ui.getCore().byId("MOB01EQD").setValue(scannerRes[0].Material);
					sap.ui.getCore().byId("MOB01EQD").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
					//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
					    	}
					 
					 else if (    sap.ui.getCore().byId("MOB01EQD").getValue() !=  scannerRes[0].Material )
						 {
						 

		 			sap.ui.getCore().byId("MOB01EQD").setValue(scannerRes[0].Material);
		 			sap.ui.getCore().byId("MOB01EQD").setValueState(sap.ui.core.ValueState.None);
		 			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		 			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
						    	
						 
						 }
					 
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
						
					 
		     		}
			       	
			       	else if (varScan =="MOB28" )
		       		{

		    			
		   			if ( MOB28SCANVAL  == "MAT")
		   				{
		  			 if	( null == sap.ui.getCore().byId("ip_matNumMOB28").getValue() || 
		  			    		sap.ui.getCore().byId("ip_matNumMOB28").getValue() == "" )
		  			    	{
		  				
		  			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
		  			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
		  			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		  			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		  			    	}
		  			 
		  			 else if (    sap.ui.getCore().byId("ip_matNumMOB28").getValue() !=  scannerRes[0].Material )
		  				 {
		  				 

		    			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
		    			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
		    			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		    			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		  				    	
		  				 
		  				 }
		  			 
		  			 else
		  				 {

		  			 
		  	    	 sap.m.MessageBox.show("This material has already been added",
		  					 sap.m.MessageBox.Icon.ERROR,
		  						"Error"
		  					 );
		  				 }
		   				}
		  			 
		  			 else
		  				 {
		  				  var binData = scannerRes[0].BinWM ;
		  				  var storageType = binData.substring(3,6);
		  				  var bin = binData.substring(6);
		  				//  alert(storageType);
		  				  sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(true);
		  				  sap.ui.getCore().byId("ddstotypeMOB28").setSelectedKey(storageType);
		  				  sap.ui.getCore().byId("ip_sto_bin").setValue(bin);
		  				  
		  				  
		  				 
		  				 }
		  			 
		  				 
		  				 
		       		}
		       	
			    	else if (varScan == "MOB35")
	     			{
	         			//osearch_material_1
	         		
	         			if ( MOB35SCANVAL  == "MAT")
	         				{
	        			 if	( null == sap.ui.getCore().byId("MOB35_matInput").getValue() || 
	    				    		sap.ui.getCore().byId("MOB35_matInput").getValue() == "" )
	    				    	{
	     			sap.ui.getCore().byId("MOB35_matInput").setValue(scannerRes[0].Material);
	     			sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
	     			var batch = scannerRes[0].Batch;
	     			sap.ui.getCore().byId("MOB35_batchInput").setValue(batch);
	     			sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
	     			
	     			sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	     			sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
	     			sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
      				 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	     			validateMATNUMAccess =  "MOB35";
					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
					validateMatNum(sap.ui.getCore().byId("MOB35_matInput").getValue().trim());
					//sap.ui.getCore().byId("MOB35_serialInput").setValue("");
	    				    	}
	     			 
	     			 else if (    sap.ui.getCore().byId("MOB35_matInput").getValue().trim() !=  scannerRes[0].Material )
	     				 {
	     	 			sap.ui.getCore().byId("MOB35_matInput").setValue(scannerRes[0].Material);
	     	 			sap.ui.getCore().byId("MOB35_matInput").setValueState(sap.ui.core.ValueState.None);
	     	 			sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
	     	 			sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.Error);
	     	 			sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	     	 			sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
	     	 			sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	      				 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	     	 			validateMATNUMAccess =  "MOB35";
	     	 			
						sap.ui.getCore().byId("idMob24MaterialSearch").getController().
						validateMatNum(sap.ui.getCore().byId("MOB35_matInput").getValue().trim());
						
						//sap.ui.getCore().byId("MOB35_serialInput").setValue("");
	     					    	}
	     			 
	     			 else
	     				 {

	    				 
	    		    	 sap.m.MessageBox.show("This material has already been added",
	    						 sap.m.MessageBox.Icon.ERROR,
	    							"Error"
	    						 );
	     				 }
	         				}
	        			 
	         			else if ( MOB35SCANVAL  == "BIN")
	        				 {
	        				  var binData = scannerRes[0].BinWM ;
	        				  var bin = binData.substring(6);
	        				  sap.ui.getCore().byId("MOB35_binInput").setValue(bin);
	        				 }
	         			else if ( MOB35SCANVAL  == "SER")
	    				 {
	         				 if (sap.ui.getCore().byId("MOB35_matInput").getValue().trim() ==  scannerRes[0].Material ){
	         	   				  //sap.ui.getCore().byId("MOB35_binInput").setValue(scannerRes[0].Serial);
	         	   				  sap.ui.getCore().byId("Mob35-popWin").close();
	           				  sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
	           				 sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
	           				 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
	      				 sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
	           				  sap.ui.controller("com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount").addSerialMOB35();
	           				 
	         				 }
	         				
	     			       
	     			 
	     			    else
	     			    	{
	     			    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
	     					sap.m.MessageBox.Icon.ERROR,"Error");
	     			    	}
	     			    
	    				
	     				 
	     				 }	
	     			}
		       	else if (varScan == "Mob27" ){
		     		//osearch_material_1
		     		
		 			if ( Mob27scan == "Material")
		 				{
					 if	( null == sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() || 
					    		sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() == "" )
					    	{
					sap.ui.getCore().byId("Mob27-queue-MatInput").setValue(scannerRes[0].Material);
					sap.ui.getCore().byId("Mob27-queue-MatInput").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
				//	sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
				//	sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
					    	}
					 
					 else if (    sap.ui.getCore().byId("Mob27-queue-MatInput").getValue() !=  scannerRes[0].Material )
						 {
			 			sap.ui.getCore().byId("Mob27-queue-MatInput").setValue(scannerRes[0].Material);
			 			sap.ui.getCore().byId("Mob27-queue-MatInput").setValueState(sap.ui.core.ValueState.None);
			 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
			 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
			 			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
			 			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
							    	}
					 
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
		 				}
		 			else if (Mob27scan == "orderMat"){
		 				if	( null == sap.ui.getCore().byId("Mob27-order-MatInput").getValue() || 
					    		sap.ui.getCore().byId("Mob27-order-MatInput").getValue() == "" )
					    	{
					sap.ui.getCore().byId("Mob27-order-MatInput").setValue(scannerRes[0].Material);
					sap.ui.getCore().byId("Mob27-order-MatInput").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
				//	sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
					//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
				//	sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
					    	}
					 
					 else if (    sap.ui.getCore().byId("Mob27-order-MatInput").getValue() !=  scannerRes[0].Material )
						 {
			 			sap.ui.getCore().byId("Mob27-order-MatInput").setValue(scannerRes[0].Material);
			 			sap.ui.getCore().byId("Mob27-order-MatInput").setValueState(sap.ui.core.ValueState.None);
			 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
			 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
			 			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
			 			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
							    	}
					 
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
		 				
		 			}
					 else if(Mob27scan == "Serial"){
		    			
		    		
		    		
		    			 var MDesGetText =  sap.ui.getCore().byId("Mob27-queue-lblMatBackValue").getText();
		    			 MDesGetText = parseInt(MDesGetText);
		    			 
		    			 //Check serial with material number
		    			    if( scannerRes[0].Material == MDesGetText )
		    			    	{
		    			    	sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
		    			        sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
		    			        sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
		    			    	}
		    			    else if( scannerRes[0].Material == null || scannerRes[0].Material == undefined
		    			    || scannerRes[0].Material == ""	
		    			    )
		    			    	{
		    			    	//alert("No Material Number");
		    			    	}
		    			    else
		    			    	{
		    			    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
		    					sap.m.MessageBox.Icon.ERROR,"Error");
		    			    	}
		    				
				
				    
				    	}
					 else if(Mob27scan == "orderSerial"){
						 //Check serial with material number
						 
						 
						 var mat =  sap.ui.getCore().byId("Mob27-order-lblMatBackValue").getText();
						 mat = parseInt(mat);
				    	    if( scannerRes[0].Material == mat){
				    	    	sap.ui.getCore().byId("Mob27-2-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
				    	       // sap.ui.getCore().byId("Mob27-1-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
				    	      //  sap.ui.getCore().byId("Mob27-1-txtAddRow").setVisible(true);
				    	    	}
				    	    else if( scannerRes[0].Material == null || scannerRes[0].Material == undefined
				    	    || scannerRes[0].Material == ""	
				    	    )
				    	    	{
				    	    	
				    	    	}
				    	    else
				    	    	{
				    	    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
				    			sap.m.MessageBox.Icon.ERROR,"Error");
				    	    	}
					 }
				   
					 else if(Mob27scan == "orderBatch"){
						 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob27-order-MatInput").getText() )
					    	{
					    	sap.ui.getCore().byId("Mob27-order-BatInput").setValue(scannerRes[0].Batch);
					        sap.ui.getCore().byId("Mob27-order-BatInput").setValueState(sap.ui.core.ValueState.None);
					       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
					        //sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
					    	}
					    else
					    	{
					    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
					    	}
					 }
					 else if (Mob27scan == "Batch"){
						 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob27-queue-MatInput").getText() )
					    	{
					    	sap.ui.getCore().byId("Mob27-queue-BatInput").setValue(scannerRes[0].Batch);
					        sap.ui.getCore().byId("Mob27-queue-BatInput").setValueState(sap.ui.core.ValueState.None);
					       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
					        //sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
					    	}
					    else
					    	{
					    	sap.m.MessageBox.show("Batch number not matched with material number" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
					    	}
					 }
					 else if(Mob27scan == "orderBin"){
						  var binData = scannerRes[0].BinWM ;
						  var bin = binData.substring(6);
						  sap.ui.getCore().byId("Mob27-order-DestInput").setValue(bin);
					 }
						 
		    		else if (Mob27scan == "Bin")
						 {
						  var binData = scannerRes[0].BinWM ;
						  var bin = binData.substring(6);
						  sap.ui.getCore().byId("Mob27-queue-DestInput").setValue(bin);
						//sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
						 }
		    	}
		    	else if (varScan == "Mob19Goods" ){
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
		    	}
		    	else if (varScan == "Mob30Matmaster" ){
		    		if(Mob30scan == "Serial"){
		    			
		    		
		    		 if( scannerRes[0].Material == sap.ui.getCore().byId("Mob30-thrdScr-txtMat").getText() )
				    	{
				    	sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
				        sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
				       // sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
				        sap.ui.getCore().byId("Mob30-txtAddRow").setVisible(true);
				    	}
				    else
				    	{
				    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
				    	}
		    		}
		    		else if (Mob30scan == "Bin")
	  				 {
	  				  var binData = scannerRes[0].BinWM ;
	  				  var bin = binData.substring(6);
	  				  sap.ui.getCore().byId("Mob30-thrdScr-txtBoxManualEntryLog1").setValue(bin);
	  				sap.ui.getCore().byId("Mob30-txtAddRow1").setVisible(true);
	  				 }
		    	}
		    	else if (varScan == "Mob26Master" ){
		    	if(	Mob26scan == "TO"){
		    		var trLine;
		    		

		    	            var str = scannerRes[0].TO;//"00000010600001NP1";
		    	            var tr = str.substr(0, 10);
		    	            var lin = str.substr(10,4 );
		                    trLine= tr + "." + lin;
		                    sap.ui.getCore().byId("Mob26-ipTrOrder").setValue(trLine);
		                   
		    	            
		    	            }
		    	
		    	else if(Mob26scan == "Bin"){
		    		 var binData = scannerRes[0].BinWM ;
	  				  var bin = binData.substring(6);
			            sap.ui.getCore().byId("Mob26-ipStrBin").setValue(bin);
			            
			           
		    	}	
		    	else if(Mob26scan == "Serial"){
		    		 if( scannerRes[0].Material == Mob26getSerDocJSONArray[0].Material )
				    	{
				    	sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValue(scannerRes[0].Serial);
				        sap.ui.getCore().byId("Mob26-thrdScr-txtBoxManualEntryLog").setValueState(sap.ui.core.ValueState.None);
				        sap.ui.getCore().byId("Mob26-txtAddRow").setVisible(true);	
				    	}
				    else if( scannerRes[0].Material == null ||scannerRes[0].Material == undefined
				    || scannerRes[0].Material == ""	
				    )
				    	{
				    	
				    	}
				    else
				    	{
				    	sap.m.MessageBox.show("Serial number not matched with material number" + " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,"Error");
				    	}
				    
					}
		    	
		    		
		    	}
		       	else if (varScan == "Mob23Matmaster" )
	     		{

	 			//osearch_material_1
	 		
	 			
				 if	( null == sap.ui.getCore().byId("inputItem").getValue() || 
				    		sap.ui.getCore().byId("inputItem").getValue() == "" )
				    	{
				sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
				sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
				//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
				//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
				//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
				//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
				    	}
				 
				 else if (    sap.ui.getCore().byId("inputItem").getValue() !=  scannerRes[0].Material )
					 {
		 			sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
		 			sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
		 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
		 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
		 			//sap.ui.getCore().byId("MOB35_serialInput").setValue(scannerRes[0].Serial);
		 			//sap.ui.getCore().byId("MOB35_serialInput").setValueState(sap.ui.core.ValueState.None);
						    	}
				 
				 else
					 {

				 
		    	 sap.m.MessageBox.show("This material has already been added",
						 sap.m.MessageBox.Icon.ERROR,
							"Error"
						 );
					 }
	 				}
		     	else if (varScan == "Mob17Matmaster" )
		 		{

					//osearch_material_1
				
		     	 
					
			    	//	if ( Mob17scan  == "Material")
					//		{
							
			    			
					if	( null == sap.ui.getCore().byId("inputMatNo").getValue() || 
					    		sap.ui.getCore().byId("inputMatNo").getValue() == "" )
					    	{
					//sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
					//sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
					sap.ui.getCore().byId("inputBatch").setValue(scannerRes[0].Batch);
					sap.ui.getCore().byId("inputBatch").setValueState(sap.ui.core.ValueState.None);
					sap.ui.getCore().byId("inputSerial").setValue(scannerRes[0].Serial);
					sap.ui.getCore().byId("inputSerial").setValueState(sap.ui.core.ValueState.None);
					
					
					var selMatNo = scannerRes[0].Material;
					var serial =  scannerRes[0].Serial;
					openSplashScreen();// Open splash screen
					
					
					
					 //Adding the material to the list
					var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
					var oModel = tabMaterialLst.getModel();
					
					//var inputMatNo = sap.ui.getCore().byId("inputMatNo");
					
					var matNo = selMatNo; //Passing Selected Material No
					
					var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
					 if ( demo) {
						 if(matNo.trim().length==0) {
							 return;
						 }
						 
						 if(oModel==undefined) {
						 var aData1 = [
							  			{"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []}
							  			];
							oModel = new sap.ui.model.json.JSONModel();
							
							oModel.setData({modelData: aData1});
							tabMaterialLst.setModel(oModel);
						 }else {
							 var arrMatLst = oModel.oData.modelData;
							 var objMaterial = {"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []};
							 
							 var isExisting = isMaterialExisting1(oModel, matNo, serial);//Check material already added
							 
							 if(isExisting==true) {
								 var isSerialExist = false;
								 
								 var tabModelData = oModel.oData.modelData;
									for(var i=0;i<tabModelData.length;i++) {
										if(matNo == tabModelData[i].Material) {
											if(typeof tabModelData[i].Serial != "undefined") {
												for(var j=0;j<tabModelData[i].Serial.length;j++) {
													if(tabModelData[i].Serial[j].trim() == serial) {
														isExisting = true;
														break;
													}
												}		
												if(isSerialExist) {
													var errMsg = "Material No: " + matNo + " Already Added";
													sap.m.MessageBox.show(
															 errMsg,
																sap.m.MessageBox.Icon.ERROR,"Error");
												}
												else{
													addSerial1(serial);
												}
											}else {
												addSerial1(serial);
											}
										}
									}
								 closeSplashScreen();
								 
							}else {
							 
								arrMatLst.push(objMaterial);
				  				var oModel2 = new sap.ui.model.json.JSONModel();
								oModel2.setData({modelData: arrMatLst});
								tabMaterialLst.setModel(oModel2);
							}
						 }
						 
						 sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
						 sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
						 
						 if ( g_runningOnPhone == true)
							{
								var myApp = sap.ui.getCore().byId("myApp");
								myApp.to("idMaterialList");
							}else {
								var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
								splitAppMOB17.toDetail("idMaterialFullDetPage");
							}
							closeSplashScreen();
							
							 return;
					
					 }
					 var JSONMaterial = null;
						
					 JSONMaterial = searchMaterialNo(matNo); //Calling com.cg.gtm.view.MaterialSearchDetail
						
					 	var errMsg = "";

						if(JSONMaterial.results.length==0) {
							errMsg = "Material No: " + matNo + " Not Existing";
						}
						
						if(matNo.trim().length==0) {//Check for material entered by user
							errMsg = "Please enter value for Material Number";
						}else {
							var isExisting = isMaterialExisting1(oModel, matNo,serial);//Check material already added
							
							

							if(isExisting==true) {

								var isSerialExist = false;
								 
								 var tabModelData = oModel.oData.modelData;
									for(var i=0;i<tabModelData.length;i++) {
										if(matNo == tabModelData[i].Material) {
											if(typeof tabModelData[i].SerialLst != "undefined") {
												for(var j=0;j<tabModelData[i].SerialLst.length;j++) {
													if(tabModelData[i].Serial == serial)  {
														isExisting = true;
														break;
													}
												}		
												if(isSerialExist) {
													errMsg = "Material No: " + matNo + " Already Added";
												}
												else{
													addSerial1(serial);
													errMsg = "";
												}
											}else {
												if(serial.length > 0) {
													addSerial1(serial);
												}else { //Material Existing & Serial Empty
													errMsg = "Material No: " + matNo + " Already Added";
												}
											}
										}
									}

								
							}else {
								
								if(JSONMaterial.results.length > 1) {
									var multiEntry = isMultiMaterialExist(JSONMaterial, matNo);
									if(multiEntry == true) {
										errMsg = "This Material No: " + matNo + " is having multiple records to select.\nPlease choose from Material Search Option.";
									}
								}
							}
						}
						
							
						if(errMsg.length > 0) {
							
							closeSplashScreen();
							
							 sap.m.MessageBox.show(
									 errMsg,
										sap.m.MessageBox.Icon.ERROR,"Error");
						}
						else {
							
							if(isExisting) {
								return;
							}
							
							var materialResult = JSONMaterial.results[0];
							
							
							if(oModel==undefined) {
								if(materialResult.VendorName.length>0) {
									sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
								}
								
								sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
								
								sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
								sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
								
								var isSerial = true;
								var isBatch = true;
								var isSplitValuated = true;
								
								
								
								if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
									sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
								}else {
									sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
								}
								
								if(materialResult.Batchmanaged=="No") {
									isBatch = false;
								}else {
									sap.ui.getCore().byId("lblBatch").setText("Batch");
								}
								
								if(materialResult.Batchmanaged=="Yes" || materialResult.Splitvaluated=="Yes") {
									isBatch = true;
									sap.ui.getCore().byId("lblBatch").setVisible(true);
									sap.ui.getCore().byId("inputBatch").setVisible(true);
								}else {
									isBatch = false;
									sap.ui.getCore().byId("lblBatch").setVisible(false);
									sap.ui.getCore().byId("inputBatch").setVisible(false);
								}
								
								if(materialResult.Splitvaluated=="No") {
									isSplitValuated = false;
								}else {
									sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
								}
								
								
								
								
								if(materialResult.Serialized=="No") {
									isSerial = false;
									sap.ui.getCore().byId("imgShowSerials").setVisible(false);
									sap.ui.getCore().byId("inputSerial").setVisible(false);
									sap.ui.getCore().byId("lblSerial").setVisible(false);
								}else {
									sap.ui.getCore().byId("imgShowSerials").setVisible(true);
									sap.ui.getCore().byId("inputSerial").setVisible(true);
									sap.ui.getCore().byId("lblSerial").setVisible(true);
								}
								
								sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
								sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
								
								sap.ui.getCore().byId("lblErr").setVisible(false);
								sap.ui.getCore().byId("lblErrVal").setVisible(false);
								
								var aData1 = [
								  			{"Material": materialResult.Materialno, "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []}
								  			];
								oModel = new sap.ui.model.json.JSONModel();
								
								oModel.setData({modelData: aData1});
								tabMaterialLst.setModel(oModel);
							} else {
								if(materialResult.VendorName.length>0) {
									sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
								}
								
								sap.ui.getCore().byId("lblUOMVal").setText(materialResult.Uom);
								
								sap.ui.getCore().byId("lblMatNoVal").setText(materialResult.Materialno);
								sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
								
								var isSerial = true;
								var isBatch = true;
								var isSplitValuated = true;
								
								
								if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
									sap.ui.getCore().byId("btnScanMaterial").setVisible(false);
								}else {
									sap.ui.getCore().byId("btnScanMaterial").setVisible(true);
								}
								
								if(materialResult.Batchmanaged=="No") {
									isBatch = false;
								}else {
									sap.ui.getCore().byId("lblBatch").setText("Batch");
								}
								
								if(materialResult.Batchmanaged=="Yes" || materialResult.Splitvaluated=="Yes") {
									isBatch = true;
									sap.ui.getCore().byId("lblBatch").setVisible(true);
									sap.ui.getCore().byId("inputBatch").setVisible(true);
								}else {
									isBatch = false;
									sap.ui.getCore().byId("lblBatch").setVisible(false);
									sap.ui.getCore().byId("inputBatch").setVisible(false);
								}
								
								if(materialResult.Splitvaluated=="No") {
									isSplitValuated = false;
								}else {
									sap.ui.getCore().byId("lblBatch").setText("Valuation Type");
								}
								
								
								
								
								if(materialResult.Serialized=="No") {
									isSerial = false;
									sap.ui.getCore().byId("imgShowSerials").setVisible(false);
									sap.ui.getCore().byId("inputSerial").setVisible(false);
									sap.ui.getCore().byId("lblSerial").setVisible(false);
									sap.ui.getCore().byId("inputQty").setValue("");
								}else {
									sap.ui.getCore().byId("imgShowSerials").setVisible(true);
									sap.ui.getCore().byId("inputSerial").setVisible(true);
									sap.ui.getCore().byId("lblSerial").setVisible(true);
								}
								
								
								
								sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
								sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
								
								sap.ui.getCore().byId("lblErr").setVisible(false);
								sap.ui.getCore().byId("lblErrVal").setVisible(false);
								
								//sap.ui.getCore().byId("inputQty").setValue("-");
								
								var arrMatLst = oModel.oData.modelData;
								var objMaterial = {"Material": materialResult.Materialno, "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []};
								arrMatLst.push(objMaterial);
								
								var oModel2 = new sap.ui.model.json.JSONModel();
								
								oModel2.setData({modelData: arrMatLst});
								tabMaterialLst.setModel(oModel2);
							}
							
					    	
						if ( g_runningOnPhone == true)
						{
							var myApp = sap.ui.getCore().byId("myApp");
							myApp.to("idMaterialList");
						}else {
							var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
							splitAppMOB17.toDetail("idMaterialFullDetPage");
						}
					    	}
						validateMaterialList1(); //Validate and set the status for Material List
						
						var tabSerialLst = sap.ui.getCore().byId("tblSerial");
						var oModel = tabSerialLst.getModel();
						var aData1 = [];
							
						oModel = new sap.ui.model.json.JSONModel();
							
						oModel.setData({modelData: aData1});
						tabSerialLst.setModel(oModel);
						
						sap.ui.getCore().byId("inputBatch").setValue(""); //Clear Batch Field
						
						
						//setSelectedIndexForMatTable();
						closeSplashScreen();
						
					    	}
					 
					 else if (    sap.ui.getCore().byId("inputMatNo").getValue() !=  scannerRes[0].Material )
						 {
			 			sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
			 			sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
			 			sap.ui.getCore().byId("inputBatch").setValue(scannerRes[0].Batch);
			 			sap.ui.getCore().byId("inputBatch").setValueState(sap.ui.core.ValueState.None);
			 			sap.ui.getCore().byId("inputSerial").setValue(scannerRes[0].Serial);
			 			sap.ui.getCore().byId("inputSerial").setValueState(sap.ui.core.ValueState.None);
			 			//Add Serial Numbers
			 		
						 }
					 else
						 {

					 
			    	 sap.m.MessageBox.show("This material has already been added",
							 sap.m.MessageBox.Icon.ERROR,
								"Error"
							 );
						 }
			 		//}
					
				// else if (Mob17scan = "Serial")
				// {
						
						
							    //	}
				 
		 		}
		    	else if (varScan == "Mob18Matmaster" )
	     		{
		    		 
	 			//osearch_material_1
		    		if	( null == sap.ui.getCore().byId("inputMatNo_ser").getValue() || 
				    		sap.ui.getCore().byId("inputMatNo_ser").getValue() == "" )
				    	{
				//sap.ui.getCore().byId("inputMatNo").setValue(scannerRes[0].Material);
				//sap.ui.getCore().byId("inputMatNo").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("inputbatch_Scrap").setValue(scannerRes[0].Batch);
				sap.ui.getCore().byId("inputbatch_Scrap").setValueState(sap.ui.core.ValueState.None);
				sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
				sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
				
				
				var selMatNo = scannerRes[0].Material;
				var serial =  scannerRes[0].Serial;
				openSplashScreen();// Open splash screen
				
				
				
				 //Adding the material to the list
				var tabMaterialLst = sap.ui.getCore().byId("tableMat");
				var oModel = tabMaterialLst.getModel();
				
				//var inputMatNo = sap.ui.getCore().byId("inputMatNo");
				
				var matNo = selMatNo; //Passing Selected Material No
				
				var demo =  sap.ui.getCore().getElementById("demoswitch").getState();
				 if ( demo) {
					 if(matNo.trim().length==0) {
						 return;
					 }
					 
					 if(oModel==undefined) {
					 var aData1 = [
						  			{"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []}
						  			];
						oModel = new sap.ui.model.json.JSONModel();
						
						oModel.setData({modelData: aData1});
						tabMaterialLst.setModel(oModel);
					 }else {
						 var arrMatLst = oModel.oData.modelData;
						 var objMaterial = {"Material": matNo, "Description": "Insulated Torque Wrench 5-50Nm", "Uom": "EA", "Quantity": "", "Customer": "500057(IPEX CONSULTING LTD)", "BatchManaged": true, "SerialManaged": true, "Splitvaluated": true, "SerialLst": []};
						 
						 var isExisting = isMaterialExisting1(oModel, matNo, serial);//Check material already added
						 
						 if(isExisting==true) {
							 var isSerialExist = false;
							 
							 var tabModelData = oModel.oData.modelData;
								for(var i=0;i<tabModelData.length;i++) {
									if(matNo == tabModelData[i].Material) {
										if(typeof tabModelData[i].Serial != "undefined") {
											for(var j=0;j<tabModelData[i].Serial.length;j++) {
												if(tabModelData[i].Serial[j].trim() == serial) {
													isExisting = true;
													break;
												}
											}		
											if(isSerialExist) {
												var errMsg = "Material No: " + matNo + " Already Added";
												sap.m.MessageBox.show(
														 errMsg,
															sap.m.MessageBox.Icon.ERROR,"Error");
											}
											else{
												addSerial1(serial);
											}
										}else {
											addSerial1(serial);
										}
									}
								}
							 closeSplashScreen();
							 
						}else {
						 
							arrMatLst.push(objMaterial);
			  				var oModel2 = new sap.ui.model.json.JSONModel();
							oModel2.setData({modelData: arrMatLst});
							tabMaterialLst.setModel(oModel2);
						}
					 }
					 
					 sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
					 sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
					 
					 if ( g_runningOnPhone == true)
						{
							var myApp = sap.ui.getCore().byId("myApp");
							myApp.to("idMaterialList");
						}else {
							var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
							splitAppMOB17.toDetail("idMaterialFullDetPage");
						}
						closeSplashScreen();
						
						 return;
				
				 }
				 
				 //Desktop
				 var JSONMaterial = null;
					
				 JSONMaterial = searchMaterialNo(matNo); //Calling com.cg.gtm.view.MaterialSearchDetail
					
				 	var errMsg = "";

					if(JSONMaterial.results.length==0) {
						errMsg = "Material No: " + matNo + " Not Existing";
					}
					
					if(matNo.trim().length==0) {//Check for material entered by user
						errMsg = "Please enter value for Material Number";
					}else {
						/*if(oModel.oData.modeldata.length==0){
							var valSerial = sap.ui.getCore().byId("inputSerial_scrap");
							 mob18addSerial(valSerial.getValue()); //Adding Serial
						}
						else{
							var isExisting = isMaterialExisting(oModel, matNo);//Check material already added
						}*/
						
						var isExisting = isMaterialExisting(oModel, matNo);//Check material already added
						
						
						
						
						if(isExisting==true) {

							var isSerialExist = false;
							 
							 var tabModelData = oModel.oData.modelData;
								for(var i=0;i<tabModelData.length;i++) {
									if(matNo == tabModelData[i].Material) {
										if(typeof tabModelData[i].SerialLst != "undefined") {
											for(var j=0;j<tabModelData[i].SerialLst.length;j++) {
												if(tabModelData[i].Serial == serial)  {
													isExisting = true;
													break;
												}
											}		
											if(isSerialExist) {
												errMsg = "Material No: " + matNo + " Already Added";
											}
											else{
												mob18addSerial(serial);
												errMsg = "";
											}
										}else {
											if(serial.length > 0) {
												mob18addSerial(serial);
											}else { //Material Existing & Serial Empty
												errMsg = "Material No: " + matNo + " Already Added";
											}
										}
									}
								}

							
						}
						

						else {
							
							if(JSONMaterial.results.length > 1) {
								var multiEntry = isMultiMaterialExist(JSONMaterial, matNo);

								if(multiEntry == true) {
									errMsg = "This Material No: " + matNo + " is having multiple records to select.\nPlease choose from Material Search Option.";
								}
							}
						}
					}
					
						
					if(errMsg.length > 0) {
						
						closeSplashScreen();
						
						 sap.m.MessageBox.show(
								 errMsg,
									sap.m.MessageBox.Icon.ERROR,"Error");
					}
					else {
						
						if(isExisting) {
							return;
						}
						
						
						var materialResult = JSONMaterial.results[0];
						
						
						if(oModel==undefined) {
							//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
							
							//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
							
							sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
							//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
							
							var isSerial = true;
							var isBatch = true;
							var isSplitValuated = true;
							
							if(materialResult.Batchmanaged=="No") {
								isBatch = false;
								sap.ui.getCore().byId("idBatch").setVisible(false);
								sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
							}else {
								sap.ui.getCore().byId("idBatch").setVisible(true);
								sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
							}
							
							if(materialResult.Serialized=="No") {
								isSerial = false;
								sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
								sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
								sap.ui.getCore().byId("idSerial").setVisible(false);
								sap.ui.getCore().byId("idscan").setVisible(false);
								
								sap.ui.getCore().byId("idscanserial").setVisible(false);
							}else {
								sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
								sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
								sap.ui.getCore().byId("idSerial").setVisible(true);
								sap.ui.getCore().byId("idscan").setVisible(true);
								if ( g_runningInTablet == true || g_runningOnPhone == true)
								  {
									 sap.ui.getCore().byId("idscanserial").setVisible(true)
								  }
								else{
									sap.ui.getCore().byId("idscanserial").setVisible(false)
								}
								//sap.ui.getCore().byId("idscanserial").setVisible(true);
							}
							
							if(materialResult.Splitvaluated=="No") {
								isSplitValuated = false;
							}
							
						//	sap.ui.getCore().byId("lblMatDocNo").setVisible(false);
						//	sap.ui.getCore().byId("lblMatDocVal").setVisible(false);
							
							var aData1 = [
							  			{"Material": materialResult.Materialno,Batch: "", "Description": materialResult.Description, "Uom": materialResult.Uom, "Quantity": "-", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []}
							  			];
							oModel = new sap.ui.model.json.JSONModel();
							
							oModel.setData({modelData: aData1});
							tabMaterialLst.setModel(oModel);
						} else {
							//sap.ui.getCore().byId("lblCustVal").setText(materialResult.Vendor + "(" + materialResult.VendorName + ")");
							
							//sap.ui.getCore().byId("inputUoM").setText(materialResult.Uom);
							
							sap.ui.getCore().byId("idMat").setText(materialResult.Materialno);
							//sap.ui.getCore().byId("lblMatDescVal").setText(materialResult.Description);
							
							var isSerial = true;
							var isBatch = true;
							var isSplitValuated = true;
							
							if((materialResult.Batchmanaged=="No") && (materialResult.Serialized=="No")) {
								sap.ui.getCore().byId("idscan").setVisible(false);
								
								sap.ui.getCore().byId("idscanserial").setVisible(false);
							}
							
							if(materialResult.Batchmanaged=="No") {
								isBatch = false;
								sap.ui.getCore().byId("idBatch").setVisible(false);
								sap.ui.getCore().byId("inputbatch_Scrap").setVisible(false);
								sap.ui.getCore().byId("idscan").setVisible(true);
								if ( g_runningInTablet == true || g_runningOnPhone == true)
								  {
									 sap.ui.getCore().byId("idscanserial").setVisible(true)
								  }
							}else {
								sap.ui.getCore().byId("idBatch").setVisible(true);
								sap.ui.getCore().byId("inputbatch_Scrap").setVisible(true);
								sap.ui.getCore().byId("idscan").setVisible(false);
							
								sap.ui.getCore().byId("idscanserial").setVisible(false);
							}
							
							if(materialResult.Serialized=="No") {
								isSerial = false;
								sap.ui.getCore().byId("Idserial_scrap").setVisible(false);
								sap.ui.getCore().byId("inputSerial_scrap").setVisible(false);
								sap.ui.getCore().byId("idSerial").setVisible(false);
								sap.ui.getCore().byId("idscan").setVisible(false);
								
								sap.ui.getCore().byId("idscanserial").setVisible(false);
							}else {
								sap.ui.getCore().byId("Idserial_scrap").setVisible(true);
								sap.ui.getCore().byId("inputSerial_scrap").setVisible(true);
								sap.ui.getCore().byId("idSerial").setVisible(true);
								sap.ui.getCore().byId("idscan").setVisible(true);
								if ( g_runningInTablet == true || g_runningOnPhone == true)
								  {
									 sap.ui.getCore().byId("idscanserial").setVisible(true)
								  }
							}
							
							if(materialResult.Splitvaluated=="No") {
								isSplitValuated = false;
							}
							
							sap.ui.getCore().byId("lblMatDocNo1").setVisible(false);
							sap.ui.getCore().byId("lblMatDocVal1").setVisible(false);
							
							
							sap.ui.getCore().byId("lblErr1").setVisible(false);
							sap.ui.getCore().byId("lblErrVal1").setVisible(false);
							
							sap.ui.getCore().byId("inputQty_Scrap").setValue("");
							
							var arrMatLst = oModel.oData.modelData;
							var objMaterial = {"Material": materialResult.Materialno, "Description": materialResult.Description,Batch: "", "Uom": materialResult.Uom, "Quantity": "", "Customer": materialResult.Vendor + "(" + materialResult.VendorName + ")", "BatchManaged": isBatch, "SerialManaged": isSerial, "Splitvaluated": isSplitValuated, "MaterialLst": []};
							arrMatLst.push(objMaterial);
							
							var oModel2 = new sap.ui.model.json.JSONModel();
							
							oModel2.setData({modelData: arrMatLst});
							tabMaterialLst.setModel(oModel2);
						}
						
						/*
						 * Navigating to detail page - Start
						 */
						 if ( g_runningOnPhone == true)
			         	 {
							 g_MobileNavigationId = "Mob18_scrapitems";
			         	 var app = sap.ui.getCore().byId("myApp").to("idMob18Scrappage");
			         	 }
						 else{
							 g_navbutton = "backScrapdetails";
							 var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
								idMOB18SplitApp.toDetail("idMOB18SplitScrap");  
								//  $("#idMob18Scrapdetpage").hide()
						 }
						
						 // showidMob18first_Scrap();
							//hideidMob18second_Scrap();//navigate to detail split screen
						
						/*
						 * Navigating to detail page - End
						 */
					}
					
					Mob18validateMaterial();  //Validate and set the status for Material List
					

					/*
					 * Clear Serial List - Start
					 */
					var tabSerialLst = sap.ui.getCore().byId("tblSerial_Item");
					var oModel = tabSerialLst.getModel();
					var aData1 = [];
						
					oModel = new sap.ui.model.json.JSONModel();
						
					oModel.setData({modelData: aData1});
					tabSerialLst.setModel(oModel);
				
					/*
					 * Clear Serial List - End
					 */
					
					sap.ui.getCore().byId("inputbatch_Scrap").setValue(""); //Clear Batch Field
					
					//setSelectedIndexForMatTable_scrap(); 
					closeSplashScreen();
					
				    	}
				 
				 else if (    sap.ui.getCore().byId("inputMatNo_ser").getValue() !=  scannerRes[0].Material )
					 {
		 			sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
		 			sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
		 			sap.ui.getCore().byId("inputbatch_Scrap").setValue(scannerRes[0].Batch);
					sap.ui.getCore().byId("inputbatch_Scrap").setValueState(sap.ui.core.ValueState.None);
		 			sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
		 			sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
		 			//Add Serial Numbers
		 		
					 }
				 else
					 {

				 
		    	 sap.m.MessageBox.show("This material has already been added",
						 sap.m.MessageBox.Icon.ERROR,
							"Error"
						 );
					 }
	 		
		    		/*	if ( Mob18Scan == "Material")
		   				{
				 if	( null == sap.ui.getCore().byId("inputMatNo_ser").getValue() || 
				    		sap.ui.getCore().byId("inputMatNo_ser").getValue() == "" )
				    	{
				sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
				sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
				//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
				//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
				
				    	}
				 
				 else if (    sap.ui.getCore().byId("inputMatNo_ser").getValue() !=  scannerRes[0].Material )
					 {
		 			sap.ui.getCore().byId("inputMatNo_ser").setValue(scannerRes[0].Material);
		 			sap.ui.getCore().byId("inputMatNo_ser").setValueState(sap.ui.core.ValueState.None);
		 			//sap.ui.getCore().byId("MOB35_batchInput").setValue(scannerRes[0].Batch);
		 			//sap.ui.getCore().byId("MOB35_batchInput").setValueState(sap.ui.core.ValueState.None);
		 			
						    	}
				 
				 else
					 {

				 
		    	 sap.m.MessageBox.show("This material has already been added",
						 sap.m.MessageBox.Icon.ERROR,
							"Error"
						 );
					 } 
	 				}
		    			else if (  Mob18Scan == "Serial")
		   				{
		    				sap.ui.getCore().byId("inputSerial_scrap").setValue(scannerRes[0].Serial);
							sap.ui.getCore().byId("inputSerial_scrap").setValueState(sap.ui.core.ValueState.None);
		   				}*/
	     		}



		    	else if(varScan =="Mob15CreateNoti") {
		    			  	    if(globalMob15Detail == "Q1") {
		    			  	    	
		    			  	    if	( null == sap.ui.getCore().byId("inputMatnr").getValue() || 
		    			  	    		sap.ui.getCore().byId("inputMatnr").getValue() == "" )
		    			  	    	{
		    			  	    		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
		    			  				sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
		    			  				sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
		    			  				sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
		    			  				
		    			  				   sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  					validateMATNUMAccess = "MOB15-CustComp";
		    			  					
		    			  					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    								validateMatNum(sap.ui.getCore().byId("inputMatnr").getValue());

		    				  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr").getValue());//SerialBatch Validation

		    			  					//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    			  	    	}
		    			  	    
		    			  	  else if ( sap.ui.getCore().byId("inputMatnr").getValue() !=  scannerRes[0].Material)
		    		  	    	{

		    		      		sap.ui.getCore().byId("inputMatnr").setValue(scannerRes[0].Material);
		    		  			sap.ui.getCore().byId("inputMatnr").setValueState(sap.ui.core.ValueState.None);
		    		  			sap.ui.getCore().byId("selno").setValue(scannerRes[0].Serial);
		    		  			sap.ui.getCore().byId("selno").setValueState(sap.ui.core.ValueState.None);
		    		  			sap.ui.getCore().byId("batchno").setValue(scannerRes[0].Batch);
		    		  			sap.ui.getCore().byId("batchno").setValueState(sap.ui.core.ValueState.None);
		    		  			
		    		  			   sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    		  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    		  				validateMATNUMAccess = "MOB15-CustComp";

		    		  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    						validateMatNum(sap.ui.getCore().byId("inputMatnr").getValue());

		    		  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr").getValue());//SerialBatch Validation

		    		  				
		    		  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    		  	    	
		    		  	    	}
		    			  	     
		    			  	     else
		    			  	    	 {
		    			  	    	 
		    			  	    	 sap.m.MessageBox.show("This material has already been added",
		    			  					 sap.m.MessageBox.Icon.ERROR,
		    			  						"Error"
		    			  					 );
		    			  	    	 }
		    			  	 
		    			  				
		    			  			}
		    			  	  else if(globalMob15Detail == "Q3") {
		    			  	    	 if	( null == sap.ui.getCore().byId("inputMatnr2").getValue() || 
		    			  	 	    		sap.ui.getCore().byId("inputMatnr2").getValue() == "" )
		    			  	 	    	{
		    			  				sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
		    			  				sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("ip_SerialNoQ3").setValue(scannerRes[0].Serial);
		    			  				sap.ui.getCore().byId("ip_SerialNoQ3").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("ip_BatNoQ3").setValue(scannerRes[0].Batch);
		    			   				sap.ui.getCore().byId("ip_BatNoQ3").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  				validateMATNUMAccess = "MOB15-CustComp";
		    			  				
		    			  				
		    			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    							validateMatNum(sap.ui.getCore().byId("inputMatnr2").getValue());

		    			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr2").getValue());//SerialBatch Validation
		    			  				
		    			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    			  				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
		    			  	 	    	}
		    			  	    	 
		    			  	    	 else if ( sap.ui.getCore().byId("inputMatnr2").getValue() !=  scannerRes[0].Material)
		    			  	    		 {

		    			  					sap.ui.getCore().byId("inputMatnr2").setValue(scannerRes[0].Material);
		    			  					sap.ui.getCore().byId("inputMatnr2").setValueState(sap.ui.core.ValueState.None);
		    			  					//sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].B);
		    			  	 				//sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
		    			  					sap.ui.getCore().byId("ip_SerialNoQ3").setValue(scannerRes[0].Serial);
		    				  				sap.ui.getCore().byId("ip_SerialNoQ3").setValueState(sap.ui.core.ValueState.None);
		    			  					sap.ui.getCore().byId("ip_BatNoQ3").setValue(scannerRes[0].Batch);
		    				   				sap.ui.getCore().byId("ip_BatNoQ3").setValueState(sap.ui.core.ValueState.None);
		    			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  					sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  					validateMATNUMAccess = "MOB15-CustComp";
		    			  					
		    			  					
		    			  					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    								validateMatNum(sap.ui.getCore().byId("inputMatnr2").getValue());

		    				  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr2").getValue());//SerialBatch Validation
		    				  				
		    			  					
		    			  					//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    			  	    		 }
		    			  	    	 else
		    			  	    		 {

		    			  		    	 
		    			  		    	 sap.m.MessageBox.show("This material has already been added",
		    			  						 sap.m.MessageBox.Icon.ERROR,
		    			  							"Error"
		    			  						 );
		    			  		    	 
		    			  	    		 
		    			  	    		 }
		    			  			}
		    			  			
		    			  			else if(globalMob15Detail == "F2") {
		    			  				
		    			  				 if	( null == sap.ui.getCore().byId("inputMatnr3").getValue() || 
		    			  				    		sap.ui.getCore().byId("inputMatnr3").getValue() == "" )
		    			  				    	{
		    			  				sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
		    			  				sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
		    			   				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
		    			   				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
		    			   				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
		    			   				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  				validateMATNUMAccess = "MOB15-CustComp";
		    			  				
		    			  				
		    			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    							validateMatNum(sap.ui.getCore().byId("inputMatnr3").getValue());

		    			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr3").getValue());//SerialBatch Validation
		    			  				
		    			  				
		    			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    			  				  }
		    			  				 
		    			  				 else if (  sap.ui.getCore().byId("inputMatnr3").getValue() !=  scannerRes[0].Material )
		    			  					 {

		    			  						sap.ui.getCore().byId("inputMatnr3").setValue(scannerRes[0].Material);
		    			  						sap.ui.getCore().byId("inputMatnr3").setValueState(sap.ui.core.ValueState.None);
		    			  						sap.ui.getCore().byId("selnof2").setValue(scannerRes[0].Serial);
		    			  		 				sap.ui.getCore().byId("selnof2").setValueState(sap.ui.core.ValueState.None);
		    			  		 				sap.ui.getCore().byId("batchf2").setValue(scannerRes[0].Batch);
		    			  		 				sap.ui.getCore().byId("batchf2").setValueState(sap.ui.core.ValueState.None);
		    			  		 				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  						sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  						validateMATNUMAccess = "MOB15-CustComp";
		    			  						
		    			  						
		    			  						sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    									validateMatNum(sap.ui.getCore().byId("inputMatnr3").getValue());

		    					  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr3").getValue());//SerialBatch Validation
		    					  				
		    			  						//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	    	
		    			  					 
		    			  					 }
		    			  				 
		    			  				 else
		    			  					 {
		    			  					 
		    			  			    	 sap.m.MessageBox.show("This material has already been added",
		    			  							 sap.m.MessageBox.Icon.ERROR,
		    			  								"Error"
		    			  							 );
		    			  					 }
		    			  				
		    			  			}
		    			  			
		    			  			else if(globalMob15Detail == "F3") {
		    			  				
		    			  				 if	( null == sap.ui.getCore().byId("inputMatnr4").getValue() || 
		    			  				    		sap.ui.getCore().byId("inputMatnr4").getValue() == "" )
		    			  				    	{
		    			  				sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
		    			  				sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
		    			  				sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
		    			   				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
		    			   				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
		    			   				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
		    			   				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  				sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  				validateMATNUMAccess = "MOB15-CustComp";
		    			  				
		    			  				
		    			  				
		    			  				sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    							validateMatNum(sap.ui.getCore().byId("inputMatnr4").getValue());

		    			  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr4").getValue());//SerialBatch Validation
		    			  				
		    			  				//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);	
		    			  				    	}
		    			  				 
		    			  				 else if (   sap.ui.getCore().byId("inputMatnr4").getValue() !=  scannerRes[0].Material )
		    			  					 {
		    			  					 

		    			  						sap.ui.getCore().byId("inputMatnr4").setValue(scannerRes[0].Material);
		    			  						sap.ui.getCore().byId("inputMatnr4").setValueState(sap.ui.core.ValueState.None);
		    			  						sap.ui.getCore().byId("ip_SerialNo4").setValue(scannerRes[0].Serial);
		    			  		 				sap.ui.getCore().byId("ip_SerialNo4").setValueState(sap.ui.core.ValueState.None);
		    			  		 				sap.ui.getCore().byId("ip_BatNo4").setValue(scannerRes[0].Batch);
		    			  		 				sap.ui.getCore().byId("ip_BatNo4").setValueState(sap.ui.core.ValueState.None);
		    			  		 				sap.ui.getCore().byId("lblMatnrMOB15Desc").setText("-");
		    			  						sap.ui.getCore().byId("lblMatnrMOB15Desc").setVisible(true);
		    			  						validateMATNUMAccess = "MOB15-CustComp";
		    			  						
		    			  						
		    			  						sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		    									validateMatNum(sap.ui.getCore().byId("inputMatnr4").getValue());

		    					  				serialBatchValidation(sap.ui.getCore().byId("inputMatnr4").getValue());//SerialBatch Validation
		    			  						//sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);		    	
		    			  					 }
		    			  				 
		    			  				 else
		    			  				 {
		    			  				 
		    			  		    	 sap.m.MessageBox.show("This material has already been added",
		    			  						 sap.m.MessageBox.Icon.ERROR,
		    			  							"Error"
		    			  						 );
		    			  				 }
		    			  			}
		    			       		}
		       		else if (varScan=="Mob22InsLot")
		       			{
		       			 if	( null == sap.ui.getCore().byId("inputMatnrMOB22").getValue() || 
		  				    		sap.ui.getCore().byId("inputMatnrMOB22").getValue() == "" )
		  				    	{
		       			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
		       			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
		       			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		       			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		       			sap.ui.getCore().byId("horizontal5").setVisible(true);
		  				 sap.ui.getCore().byId("batch").setVisible(true);
		  				 validateMATNUMAccess =  "MOB22";
		  	     				
		  				 //sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
		  				    	}
		       			 
		       			 else if (    sap.ui.getCore().byId("inputMatnrMOB22").getValue() !=  scannerRes[0].Material )
		       				 {
		       				 

		            			sap.ui.getCore().byId("inputMatnrMOB22").setValue(scannerRes[0].Material);
		            			sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
		            			sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		            			sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		            			sap.ui.getCore().byId("horizontal5").setVisible(true);
		  					 sap.ui.getCore().byId("batch").setVisible(true);    	
		  					 validateMATNUMAccess =  "MOB22"
		  		     			
		  						 //sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
		       				 }
		       			 
		       			 else
		       				 {
		      		    	 sap.m.MessageBox.show("This material has already been added",
		      						 sap.m.MessageBox.Icon.ERROR,
		      							"Error"
		      						 );
		      				 
		       				 
		       				 }
		       			
		       			}
		       		else if (varScan == "idMOB21Mas")
		  			{
		  			
		  			var selectedMatNo = sap.ui.getCore().byId("valMatNo2");
		  			
		  			var txt = sap.ui.getCore().byId("oListItemMat");
		  			
		  			txt.setDescription(scannerRes[0].Material);
		  			txt.setIcon("sap-icon://accept");
		  			var app = sap.ui.getCore().byId("splitAppInsCreate1");  
		  	      	app.toMaster("idMOB21Mas");
		  	      	
		  	      	var listItem = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		  			listItem.setVisible(true);
		  			
		  		
		  			var app = sap.ui.getCore().byId("myApp");  
		              app.to("idMOB21InitView12");
		  			}

		       		else if (varScan == "Mob29Screen")
		       		{
		       			debugger;
		       			//osearch_material_1
		       			 if	( null == sap.ui.getCore().byId("osearch_material_1").getValue() || 
		  				    		sap.ui.getCore().byId("osearch_material_1").getValue() == "" )
		  				    	{
		    			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
		    			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
		    			 validateMATNUMAccess =  "MOB29";
						//sap.ui.getCore().byId("idMob24MaterialSearch").getController().
						//validateMatNum(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
		    				sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
						//serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
		    			sap.ui.getCore().byId("PrintLabSerBatIp1").setValue(scannerRes[0].Serial);
		    			sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None);
		    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValue(scannerRes[0].Batch);
		    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.None);
		  				    	}
		    			 
		    			 else if (    sap.ui.getCore().byId("osearch_material_1").getValue() !=  scannerRes[0].Material )
		    				 {
		    				 

		         			sap.ui.getCore().byId("osearch_material_1").setValue(scannerRes[0].Material);
		         			sap.ui.getCore().byId("osearch_material_1").setValueState(sap.ui.core.ValueState.None);
		         			 validateMATNUMAccess =  "MOB29";
								//sap.ui.getCore().byId("idMob24MaterialSearch").getController().
								//validateMatNum(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
		         			 
		         			 	sap.ui.getCore().byId("idMob24MaterialSearch").getController().validateMatNum(scannerRes[0].Material);
		         			
								//serialBatchValidation(sap.ui.getCore().byId("osearch_material_1").getValue().trim());
								sap.ui.getCore().byId("PrintLabSerBatIp1").setValue(scannerRes[0].Serial);
				    			sap.ui.getCore().byId("PrintLabSerBatIp1").setValueState(sap.ui.core.ValueState.None);
				    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValue(scannerRes[0].Batch);
				    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setValueState(sap.ui.core.ValueState.None);
		         			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		         			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		    				    	
		    				 
		    				 }
		    			 
		    			 else
		    				 {

		   				 
		   		    	 sap.m.MessageBox.show("This material has already been added",
		   						 sap.m.MessageBox.Icon.ERROR,
		   							"Error"
		   						 );
		   				 
		    				 
		    				 }	
		       		//var app = sap.ui.getCore().byId("myApp");  
		              // app.to("idMob29MaterialView");
		       		}
		       	
		       		/*else if (backNavMat = "MOB23")
		   			{
		       			 if	( null == sap.ui.getCore().byId("inputItem").getValue() || 
		       		    		sap.ui.getCore().byId("inputItem").getValue() == "" )
		       		    	{
		       		    		sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
		       					sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
		   			//sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
		   			//sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
		       		    	}
		       			else if (    sap.ui.getCore().byId("inputItem").getValue() !=  scannerRes[0].Material )
		   				 {
		       				sap.ui.getCore().byId("inputItem").setValue(scannerRes[0].Material);
		             			sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
		             			
		   				 } 
		       			 else
		    				 {

		   		    	 sap.m.MessageBox.show("This material has already been added",
		   						 sap.m.MessageBox.Icon.ERROR,
		   							"Error"
		   						 );
		   				
		    				 }
		   			}*/
		       			
		       			else if (varScan == "MOB28")
		       			{
		           			     			
		           			if ( MOB28SCANVAL  == "MAT")
		           				{
		          			 if	( null == sap.ui.getCore().byId("ip_matNumMOB28").getValue() || 
		      				    		sap.ui.getCore().byId("ip_matNumMOB28").getValue() == "" )
		      				    	{
		          				
		       			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
		       			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
		       			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		       			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		      				    	}
		       			 
		       			 else if (    sap.ui.getCore().byId("ip_matNumMOB28").getValue() !=  scannerRes[0].Material )
		       				 {
		       				 

		            			sap.ui.getCore().byId("ip_matNumMOB28").setValue(scannerRes[0].Material);
		            			sap.ui.getCore().byId("ip_matNumMOB28").setValueState(sap.ui.core.ValueState.None);
		            			//sap.ui.getCore().byId("batch").setValue(scannerRes[0].Batch);
		            			//sap.ui.getCore().byId("batch").setValueState(sap.ui.core.ValueState.None);
		       				    	
		       				 
		       				 }
		       			 
		       			 else
		       				 {

		      				 
		      		    	 sap.m.MessageBox.show("This material has already been added",
		      						 sap.m.MessageBox.Icon.ERROR,
		      							"Error"
		      						 );
		       				 }
		           				}
		          			 
		          			 else
		          				 {
		          				  var binData = scannerRes[0].BinWM ;
		          				  var storageType = binData.substring(3,6);
		          				  var bin = binData.substring(6);
		          			//	  alert(storageType);
		          				  sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(true);
		          				  sap.ui.getCore().byId("ddstotypeMOB28").setSelectedKey(storageType);
		          				  sap.ui.getCore().byId("ip_sto_bin").setValue(bin);
		          				  
		          				  
		          				 
		          				 }
		      				 
		       				 
		       				 }	
		       			
		 		
		   		
		       		else {
		       		
		           		var app = sap.ui.getCore().byId("myApp");  
		                   app.to("idGridSubMenuQM");
		           	}
		  		
		  		
		  		
		  	//}
		  	    
		       	
		       
		    	  
		      }
		    }),
			    rightButton: new sap.m.Button({
			    	   text: "Cancel",
			      press: function () {
			    	  scanDialog.close();
			    	  }
			    })
			  });
			
			//scanDialog.open();
			
		
		var oMD24CollectionPlant = {"MD24CollectionPlant":
			[{"plantName":"Ashford"},
			 {"plantName":"Bounds Green - London"},
			 {"plantName":"Central Warehouse"},
			 {"plantName":"Clay Hills-Aberdeen"},
			 {"plantName":"Craigentinny-Edingburgh"},
			 {"plantName":"Doncaster"},
			 {"plantName":"Ferme Park-London"},
			 {"plantName":"Heaton-Newcastle"},
			 {"plantName":"Holborn"},
			 {"plantName":"Inverness"},
			 {"plantName":"Neville Hill-Leeds"},
			 {"plantName":"Newton Aycliffe"},
			 {"plantName":"North Pole"},
			 {"plantName":"Polmadie-Glasgow"},
			 {"plantName":"Stoke Gifford"},
			 {"plantName":"Swansea"}]};
		
		var oJason4 = new sap.ui.model.json.JSONModel(oMD24CollectionPlant);
		
		var textDefaultPlant = new sap.m.Text({
			text : "{i18n>defplant}"
		}).addStyleClass("textDefaultPlant");
		
		var headerPlant = new sap.m.ObjectHeader({
			id : "headerPlant"
		//	title: "{i18n>plant_ashf}"
		
				});
		
		
		inputPlant = new sap.m.Input("inputPlantMat",{
		     // type: sap.m.InputType.Text,
			// type: sap.m.InputType.Email,
		      //value: "{i18n>ashf}",
		      placeholder: 'Select Plant..',
		     // showSuggestion: true,
		      //maxLength : 4,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		     change: function(){
		    	 this.setValue(this.getValue().toUpperCase())
		    	 
		     },
		      valueHelpRequest: function (evt) {
		    	  g_MobileNavigationId = "Mob24-BackNavButton";
		    	  oController.openMatSearch();
		    	  
if(g_runningOnPhone == true)
	{
	 var app = sap.ui.getCore().byId("myApp");  
	    app.to("idPlantListView");
	}
else
	{
	 var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idPlantListView");
	}
		    	 
	        	    
	        	    
		      
		      }
		  }).addStyleClass("matsearch");
		  inputMatnr.setModel(oJason4);
		  
		  
		  var lblDummy1 = new sap.m.Label({
			  id:"Mob24-getDesLabItem",

				//text: "{i18n>DumyTxt}"
			});
			
			lblDummy1.addStyleClass("HideLabel");
			
			var lblDummy2 = new sap.m.Label({
				id:"Mob24-getDesLabItemPlantDes",
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy2.addStyleClass("HideLabel");
			
		
		var lblDesc = new sap.m.Label({
		    text: "{i18n>Description}"
		  });
		
		  var txtDesc = new sap.m.Input("txtDesc", {
		   // type: sap.m.InputType.Text,
			 // type: sap.m.InputType.Email,
			  maxLength : 40,
		    placeholder: 'Enter Material Description ...'
		  }).addStyleClass("matsearch");
		  
		  var lblMtrGrp = new sap.m.Label({
		    text: "{i18n>mat_group}"
		  });
		  
		  var inputMtrGrp = new sap.m.Input("txtMtrGrp", {
		  //  type: sap.m.InputType.Email,
		    maxLength : 9,
		    placeholder: 'Enter Material Group ...'
		  }).addStyleClass("matsearch");

		  var lblExtMtrGrp = new sap.m.Label({
		    text: "{i18n>external_matgrp}"
		  });
		  
		  var inputExtMtrGrp = new sap.m.Input("txtExtMtrGrp", {
		    //type: sap.m.InputType.Tel,
			//  type: sap.m.InputType.Email,
			  maxLength : 18,
		    placeholder: 'Enter External Material Group ...'
		  }).addStyleClass("matsearch");

		  var lblManu = new sap.m.Label({
		    text: "{i18n>Manufact}"
		  });
		  
		  var inputManu = new sap.m.Input("txtManu", {
		 //   type: sap.m.InputType.Email,
		 maxLength : 10,
		    placeholder: 'Enter Manufacturer ...'
		  }).addStyleClass("matsearch");

		  var lblVen = new sap.m.Label({
		    text: "{i18n>vendor}"
		  });
		  
		  var inputVen = new sap.m.Input("txtVendor", {
		    //type: sap.m.InputType.Url,
		//	  type: sap.m.InputType.Email,
			  maxLength : 10,
		    placeholder: 'Enter Vendor Number...'
		  }).addStyleClass("matsearch");
		  
		  var lblVenNo = new sap.m.Label({
			    text: "{i18n>vend_ptno}"
			  });
			  
		  var inputVenNo = new sap.m.Input("txtVenPartNo", {
			   // type: sap.m.InputType.Url,
			//  type: sap.m.InputType.Email,
			  maxLength : 35,
			    placeholder: 'Enter Vendor Part Number ...'
		  }).addStyleClass("matsearch"); 
		
		  var btnSearch = new sap.m.Button({
			  id : "btnsear",
              text: "{i18n>search_mat}",
             visibility : true,
             enable : true,
        
              icon: "sap-icon://search",
              layoutData: new sap.m.FlexItemData({growFactor: 1}),
              press:function(){
            	  
            	           	  
            	  
            	  
            	  openSplashScreen();//splash screen
              
            	  setTimeout(function(){
            		  
            		oController.onMaterialSearch();
            	
                  	if ( g_runningOnPhone == true)
            		{

            			g_MobileNavigationId = "Mob24-SecondScreen-BackNavButton";
            		}
              		
                  	closeSplashScreen();//splash screen closed
    	  	      },3000);//constant delay  
            	  
          		
              }
            });
		 
		  
		  var btnbarCode = new sap.m.Button({
			  id :"btnbarCode",
	             text: "{i18n>mob24barcode}",
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
		  btnbarCode.setVisible(false);
		  btnbarCode.attachPress(oController.scanAll);
		  
		  var containertext = new sap.m.FlexBox({
				items: [
                      textDefaultPlant
				       
				        ],
				direction:"Column",
				justifyContent:"Center",
				alignItems:"Start"
			});
		  
		  
		  var lblDummy4 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy4.addStyleClass("HideLabel");
			
			var lblDummy5 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy5.addStyleClass("HideLabel");
				
		  var containerHeader = new sap.m.FlexBox({
				items: [
				        lblDummy4,
				        lblDummy5,
                        //textDefaultPlant,
				        //headerPlant
				        ],
				direction:"Column",
				justifyContent:"Center",
				alignItems:"Start"
			});//.addStyleClass("headerplant");
		  
		var container = new sap.m.FlexBox({
			items: [
			        inputPlant,
			        lblDummy1,
					//lblDesc,
					txtDesc,
					//lblMtrGrp,
					inputMtrGrp,
					//lblExtMtrGrp,
					inputExtMtrGrp,
					//lblManu,
					inputManu,
					//lblVen,
					inputVen,
					//lblVenNo,
					inputVenNo,
					lblDummy2,
					//btnSearch,
					lblDummy1
			        ],
			direction:"Column",
			justifyContent:"Center",
			alignItems:"Start"
		});
		
		container.addStyleClass("ContainerPaddingLeft");
		
		
		if ( g_runningOnPhone == true)
		{
			

	 		return new sap.m.Page({
	 			//g_MobileNavigationId = "Mob00-BackNavButton";
	 			id : "Mob24-BackNavButton",
	 			title : "Filter By...",
	 			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				content: [
	                       // containertext,
				          	containerHeader,
				          	container
				],
				enableScrolling: true,
				//showNavButton: false,
				showNavButton: true,
				showFooter: true,
	            navButtonTap:function(){
	            	//alert(backNavMat);
	            	// sap.ui.getCore().byId("splitAppMaterial").to("idMATSRBlank");
	            	g_MobileNavigationId = "MainGrid-Inventory";
	            	if(backNavMat=="Mob15CreateNoti") {
	            		//alert("inside createnoti");
	            		g_MobileNavigationId = "Mob15-BackNavButton";
	            		var app = sap.ui.getCore().byId("myApp");  
	                    app.to("idMob15Notification");
	            		
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            		    clearMaterialInputs();
	                    
	            	}
	            	
	            	else if (backNavMat=="Mob22InsLot")
	    			{
	            		g_MobileNavigationId = "Mob22-BackNavButton";
	            		if (globalValMatSrch == 1)
	            			{
	            			globalValMatSrch = 0;
	            			 var app = sap.ui.getCore().byId("splitAppMaterial");  
	        	        	 app.toMaster("idMob24MaterialSearchInput");
	        	        	 app.toDetail("idMATSRBlank");
	            			
	            			}
	            		
	            		else
	            			{
	            			globalValMatSrch = 0;
	            			//alert("inside Inpsection Lot");
    	            		
    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
	            			plantLst.setValue(defaultPlantName);
	            			
	            			clearMaterialInputs();
	            			
	            			var app = sap.ui.getCore().byId("myApp");  
	                        app.to("idMOB22InitView");
	            			
	            			}
	    			
	    			
	    			}
	            	
	            	else if (backNavMat == "idMob24MaterialSearchInput")
	            		{
	            		if (globalValMatSrch == 1)
	        			{
	        			globalValMatSrch = 0;
	            		var app = sap.ui.getCore().byId("splitAppMaterial");  
	   	        	    app.toMaster("idMob24MaterialSearchInput");
	   	        	    app.toDetail("idMATSRBlank");
	        			}
	            		
	            		else
	        			{
	        			globalValMatSrch = 0;
	        			//alert("inside materialsearch");
	            		
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            			clearMaterialInputs();
            		    
	        			var app = sap.ui.getCore().byId("myApp");  
	                    app.to("idGridSubMenuIMWM");
	        			
	        			}
	   	        	  
	            		}
	            	
	            	else if (backNavMat == "idMOB21Mas")
	        		{
	            		g_MobileNavigationId = "Mob21-BackNavButton";
	            		//alert(globalValMatSrch);
	        		if (globalValMatSrch == 1)
	    			{
	    			globalValMatSrch = 0;
	    			
	    			
	        		var app = sap.ui.getCore().byId("splitAppMaterial");  
		        	    app.toMaster("idMob24MaterialSearchInput");
		        	    app.toDetail("idMATSRBlank");
	    			}
	        		
	        		else
	    			{
	    			globalValMatSrch = 0;
	    			//alert("inside Enter Inpsection Lot");
            		
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
        			
	    			var app = sap.ui.getCore().byId("myApp");  
	                app.to("idMOB21Mas");
	    			
	    			}
		        	  
	        		}
	            	
	            	else if(backNavMat=="Mob29Screen") {
	            		//alert("inside mob29");
	            		g_MobileNavigationId = "Mob29-BackNavButton";
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            			clearMaterialInputs();
            			
	            		var app = sap.ui.getCore().byId("myApp");  
	                    app.to("idMob29MaterialView");
	            	}
	            	else if (backNavMat == "Mob17")
	        		{

	        			var myApp = sap.ui.getCore().byId("myApp");
	        	    	myApp.to("idMOB17");
	        	    	
	        	    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
	        	    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
	        	    	splitAppMOB17.toDetail("idMaterialFullDetPage");
	        		}
	        	   
	        	    else if (backNavMat == "Mob18")
	        	      {
	            		//Clear MaterialSearch Input Fields
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            			clearMaterialInputs();
            			
            		    if(g_runningOnPhone == true)
            			{
            		    	var myApp = sap.ui.getCore().byId("myApp");
    	        	    	myApp.to("idMOB18Matmas");
            			}
            		    else{
            		    	var myApp = sap.ui.getCore().byId("myApp");
    	        	    	myApp.to("idMob18InitialScreen");
    	        	    	
    	        	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
    	        	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
    	        	    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
            		    }
	        			
	        		}

	            	else if( backNavMat == "MOB23"){
	            		
	            		
	            		var myApp = sap.ui.getCore().byId("myApp");
    	       	    	myApp.to("idMob23InitialScreen");
    	       	    	
    	       				
    	       			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
    	       			app.toMaster("idMOB23Matmaster");
	            		
	        			//Clear MaterialSearch Input Fields
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            			clearMaterialInputs();
	       			
    	    			}
	            	else if (backNavMat == "MOB35")
	       			{
		   				var appM = sap.ui.getCore().byId("myApp"); 
		   				appM.to("idMob35InitialScreen");
		   				
		   				sap.ui.getCore().byId("idEmptyMOB35").setVisible(true);
		   		    	sap.ui.getCore().byId("idNextMOB35").setVisible(true);
	       			}
	            	
	            	else if (backNavMat == "MOB01POP")
	       			{
		   				var appM = sap.ui.getCore().byId("myApp"); 
		   				appM.back();
	       			}
	       	
	            	else {
	            		g_MobileNavigationId = "MainGrid-Inventory";
	            		var app = sap.ui.getCore().byId("myApp");  
	                    app.to("idGridSubMenuQM");
	            	}
	            
	            },
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       	btnSearch
			                       
			                       ],
				contentLeft:[
				             
				             //btnbarCode
				             
				             ]
				})
			});
		
		}
		else
			{
 		return new sap.m.Page({
 			
 		
 			
 			title : "Filter By...",
 			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			content: [
                       // containertext,
			          	containerHeader,
			          	container
			],
			enableScrolling: true,
			showNavButton: false,
			showFooter: true,
            navButtonTap:function(){
            	alert(backNavMat);
            	// sap.ui.getCore().byId("splitAppMaterial").to("idMATSRBlank");
            	g_MobileNavigationId = "MainGrid-Inventory";
            	if(backNavMat=="Mob15CreateNoti") {
            		//alert("inside createnoti");
            		g_MobileNavigationId = "Mob15-BackNavButton";
            		var app = sap.ui.getCore().byId("myApp");  
                    app.to("idMob15Notification");
            		
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
                    
            	}
            	
            	else if (backNavMat=="Mob22InsLot")
    			{
            		g_MobileNavigationId = "Mob22-BackNavButton";
            		if (globalValMatSrch == 1)
            			{
            			globalValMatSrch = 0;
            			 var app = sap.ui.getCore().byId("splitAppMaterial");  
        	        	 app.toMaster("idMob24MaterialSearchInput");
        	        	 app.toDetail("idMATSRBlank");
            			
            			}
            		
            		else
            			{
            			globalValMatSrch = 0;
            			//alert("inside Inpsection Lot");
	            		
	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
            			plantLst.setValue(defaultPlantName);
            			
            			clearMaterialInputs();
            			
            			var app = sap.ui.getCore().byId("myApp");  
                        app.to("idMOB22InitView");
            			
            			}
    			
    			}
            	
            	else if (backNavMat == "idMob24MaterialSearchInput")
            		{
            		g_MobileNavigationId = "Mob24-BackNavButton";
            		if (globalValMatSrch == 1)
        			{
            			
        			globalValMatSrch = 0;
        			
        			var deselect = sap.ui.getCore().byId("listMatNo");	
            		deselect.removeSelections();
            		var app = sap.ui.getCore().byId("splitAppMaterial");  
   	        	    app.toMaster("idMob24MaterialSearchInput");
   	        	    app.toDetail("idMATSRBlank");
        			}
            		
            		else
        			{
        			globalValMatSrch = 0;
        			//alert("inside materialsearch");
            		
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
        		    
        			var app = sap.ui.getCore().byId("myApp");  
                    app.to("idGridSubMenuQM");
        			
        			}
   	        	  
            		}
            	
            	else if (backNavMat == "idMOB21Mas")
        		{
            		g_MobileNavigationId = "Mob21-BackNavButton";
            		//alert(globalValMatSrch);
        		if (globalValMatSrch == 1)
    			{
    			globalValMatSrch = 0;
    			
    	
    			
    		
    				var app = sap.ui.getCore().byId("splitAppMaterial");  
	        	    app.toMaster("idMob24MaterialSearchInput");
	        	    app.toDetail("idMATSRBlank");
    				
    			
        		
    			}
        		
        		else
    			{
    			globalValMatSrch = 0;
    			//alert("inside Enter Inpsection Lot");
        		
        		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    			plantLst.setValue(defaultPlantName);
    			
    			clearMaterialInputs();
    			
    			var app = sap.ui.getCore().byId("myApp");  
                
    			
    
    				app.to("idMOB21InitView12");
    			
    			
    			
    			}
	        	  
        		}
            	
            	else if(backNavMat=="Mob29Screen") {
            		//alert("inside mob29");
            		g_MobileNavigationId = "Mob29-BackNavButton";
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
        			
            		var app = sap.ui.getCore().byId("myApp");  
                    app.to("idMob29MaterialView");
            	}
            	else if (backNavMat == "Mob17")
        		{

        	    	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
        			var oModel = tabMaterialLst.getModel();
        			
        			var lenMaterialLst = oModel.oData.modelData.length;
        			
        			if(lenMaterialLst==0) { //If no material in the list navigate to blank
        				var myApp = sap.ui.getCore().byId("myApp");
            	    	myApp.to("idMOB17");
            	    	
        				var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
        				splitAppMOB17.toDetail("idMOB17_BlankScreen");
        			}else {
        				
        				var myApp = sap.ui.getCore().byId("myApp");
            	    	myApp.to("idMOB17");
            	    	
            	    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
            	    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
            	    	splitAppMOB17.toDetail("idMaterialFullDetPage");
            	    	
        				/*
        				 * Select first item from the list
        				 */
        				populateMatDetail(0);
        			}
        		}
            	else if (backNavMat == "Mob18")
        		{
            		
            		
            		//Clear MaterialSearch Input Fields
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
        			
        			
            		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
            		var oModel = tabMaterialLst.getModel();
            		
            		
            		var Matlst = oModel.oData.modelData.length;
            		
            		if(Matlst==0){
            			var myApp = sap.ui.getCore().byId("myApp");
            	    	myApp.to("idMob18InitialScreen");
            	    	
            	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
            	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
            	    	idMOB18SplitApp.toDetail("idMOB18Blank");
            		}
            		else{
            			var myApp = sap.ui.getCore().byId("myApp");
	        	    	myApp.to("idMob18InitialScreen");
	        	    	
	        	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
	        	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
	        	    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
	        	    	
	        	    	
	        	    	SerialDetail_Scrap(0);
            		}
            		
            	
        		
        		}
            	else if( backNavMat == "MOB23"){
            		
            		
            		var myApp = sap.ui.getCore().byId("myApp");
	       	    	myApp.to("idMob23InitialScreen");
	       	    	
	       				
	       			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
	       			app.toMaster("idMOB23Matmaster");
            		
        			//Clear MaterialSearch Input Fields
            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
        			plantLst.setValue(defaultPlantName);
        			
        			clearMaterialInputs();
       			
	    			}	
            	else if( backNavMat == "MOB28"){
            		var app = sap.ui.getCore().byId("myApp");  
                    app.to("idMob28InitialScreen");
            		
            	}else if (backNavMat == "MOB35")
       			{
	   				var appM = sap.ui.getCore().byId("myApp"); 
	   				appM.to("idMob35InitialScreen");
	   				
	   				sap.ui.getCore().byId("Mob35ConADDMat").setVisible(true);
	   				sap.ui.getCore().byId("idEmptyMOB35").setVisible(true);
	   		    	sap.ui.getCore().byId("idNextMOB35").setVisible(true);
       			}
            	else if (backNavMat == "MOB01POP")
       			{
            		alert("now got");
	   				var appM = sap.ui.getCore().byId("myApp"); 
	   				appM.back();
	   				
	   				
       			}
            	else {
            		
            		//var deselect = sap.ui.getCore().byId("listMatNo");	
            		//deselect.removeSelections();
            		g_MobileNavigationId = "MainGrid-Inventory";
            		var app = sap.ui.getCore().byId("myApp");  
                    app.to("idGridSubMenuQM");
            	}
            	
                  
                
               // alert(backNav);
            },
			showHeader: true,
			footer: new sap.m.Bar({
		        contentRight: [
		                       	btnSearch
		                       
		                       ],
			contentLeft:[
			             
			            // btnbarCode
			             
			             ]
			}).addStyleClass("Matfooter")
		});
	}
	}

});
