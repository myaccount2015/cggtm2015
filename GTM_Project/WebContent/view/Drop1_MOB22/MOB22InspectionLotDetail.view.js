sap.ui.jsview("com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB22InspectionLotDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB22InspectionLotDetail
	*/ 
	//Done
	
	createContent : function(oController) {
		
		this.setHeight("100%");
		
		panel = new sap.m.Panel({
			
		});
			panel.addStyleClass("panel");
			
		
			//11 - First Row first HBox
		
		var hBox1 = new sap.m.HBox({
			  id:"horizontal",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBox2 = new sap.m.HBox({
			  id:"horizontal1",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBox3 = new sap.m.HBox({
			  id:"horizontal2",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBox4 = new sap.m.HBox({
			  id:"horizontal3",
			  width : "400px",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		
		var hBox5 = new sap.m.HBox({
			  id:"horizontal4",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBox6 = new sap.m.HBox({
			  id:"horizontal5",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		hBox6.setVisible(false);
		
		var hBox7 = new sap.m.HBox({
			  id:"horizontal7",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBox8 = new sap.m.HBox({
			  id:"horizontal8",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBoxMatDesc = new sap.m.HBox({
			  id:"hBoxMatDesc",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		var hBoxVenDesc = new sap.m.HBox({
			  id:"hBoxVenDesc",
			  direction : sap.m.FlexDirection.Row, // sap.m.FlexDirection
	        fitContainer : false, // boolean
	        renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	        justifyContent : sap.m.FlexJustifyContent.Start // sap.m.FlexJustifyContent

		  });
		
		
		
		 var vBox = new sap.m.VBox({
			  id :"flex",
			  renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	         justifyContent : sap.m.FlexJustifyContent.Start // 
		  });
		
		 var vBox1 = new sap.m.VBox({
			  id :"flex1",
			  renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	         justifyContent : sap.m.FlexJustifyContent.Start // 
		  });
		  
		 var vBox2 = new sap.m.VBox({
			  id :"flex2",
			  renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	         justifyContent : sap.m.FlexJustifyContent.Start // 
		  });
		  
		 var vBox3 = new sap.m.VBox({
			  id :"flex3",
			  renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	         justifyContent : sap.m.FlexJustifyContent.Start // 
		  });
		 
		 var vBox4 = new sap.m.VBox({
			  id :"flex4",
			  renderType : sap.m.FlexRendertype.Div, // sap.m.FlexRendertype
	         justifyContent : sap.m.FlexJustifyContent.Start // 
		  });
		 
		 var lblTime =  new sap.m.Text("insLotLb",{
	         text: "Created Time",
	         layoutData : new sap.ui.layout.GridData({
	                 span: "L6 M9 S12",
	                 linebreakL: true,
	     			linebreakM: true,
	     			linebreakS: true
	         })
	 }).addStyleClass("lab1");
		 
		 var textInsLotTime = new sap.m.Text("insLotTime", {
		      type: sap.m.InputType.Text,
		    //  placeholder: 'Enter Material Number',
		      enabled : false ,
		     
		  }).addStyleClass("Input3");
		  
		 var lblTop =  new sap.m.Text({
	         text: ' ',
	         layoutData : new sap.ui.layout.GridData({
	                 span: "L6 M9 S12",
	                 linebreakL: true,
	     			linebreakM: true,
	     			linebreakS: true
	         })
	 });
		 
		 var lblTop1 =  new sap.m.Text({
	         text: ' ',
	         layoutData : new sap.ui.layout.GridData({
	                 span: "L8 M9 S12",
	                 linebreakL: true,
	     			linebreakM: true,
	     			linebreakS: true
	         })
	 });
		 
		 
		 
		//label1 = new sap.m.Label({text:"Customer",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		lblMat = new sap.m.Label({text:"{i18n>MOB_22_MATERIAL}",design: sap.m.LabelDesign.Bold,textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		lblVendor = new sap.m.Label({text:"{i18n>MOB_22_VENDOR}",design: sap.m.LabelDesign.Bold,textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		//label4 = new sap.m.Label({text:"Manufacturer",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab2");
		//label5 = new sap.m.Label({text:"Purchase Organisation",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		var lblBatch = new sap.m.Label({id:"batLabel-CreateInspection",design: sap.m.LabelDesign.Bold,text:"{i18n>MOB_22_BATCH}",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		lblInsQty = new sap.m.Label({text:"{i18n>MOB_22_INSQ}",design: sap.m.LabelDesign.Bold,textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");
		lblInst = new sap.m.Label({text:"{i18n>MOB_22_INS}",design: sap.m.LabelDesign.Bold,textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab1");//addStyleClass("topMargin2");
		//label7 = new sap.m.Label({text:"Inspection Quantity",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab3");
		//label8 = new sap.m.Label({text:"Instruction",textAlign:sap.ui.core.TextAlign.Begin,width:"230px"}).addStyleClass("lab3");

		var textFieldBatch = new sap.m.Input("batch",{type:sap.m.InputType.Text, placeholder:"Optional-determined by Material",
			maxLength : 10,
			  liveChange : function(){
					field_numeric_validation(sap.ui.getCore().byId("batch"));//go to string utility  
			  			
			  		    
			  		},
		
		}).addStyleClass("dropdown");
		//textFieldBatch.setVisible(false);
		lblBatch.setVisible(false);
		
		textFieldInsQty = new sap.m.Input("insqty",{type:sap.m.InputType.Text, placeholder:"Manual entry numeric value",liveChange : oController.checktextFieldInsQty}).addStyleClass("Input2");
		
		textareaInsDet = new sap.m.TextArea("insdet",{rows:1,maxLength: 40,height: "5rem", cols:40,}).addStyleClass("topMargin0.5");
		textareaInsDet.setPlaceholder("Add Description (max 40 Char.) ");
		textareaInsDet.attachLiveChange(oController.checktextFieldInstruction);
		//textareaInsDet.addStyleClass("lab1");
		//textarea.setValue("Add details of inspection task(s) to be undertaken.").addStyleClass("Input2");
		//textareaInsDet.setPlaceholder(
		/*select1 = new sap.m.Select({
			items:[new sap.ui.core.Item({text:"Great Western 1"}), 
			       new sap.ui.core.Item({text:"Great Western 2"}), 
			       new sap.ui.core.Item({text:"Great Western 3"}), 
			       new sap.ui.core.Item({text:"Great Western 4"})]}).addStyleClass("dropdown3");*/
		
		
		/*  textareaInsDet = new sap.m.Input("insdet", {
		      type: sap.m.InputType.Text,
		      placeholder: 'Add details of inspection task(s) to be undertaken',
		    
		      liveChange : oController.checktextFieldInstruction ,
		   
		  }).addStyleClass("Input3");*/
		
		 var matScanMOB22 ;
		 // var isRunningOnDesktopMOb22 = jQuery.device.is.desktop; 
		  
		  if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
			  matScanMOB22 =  new sap.m.Image({
			  id : "matScanMOb22" ,
			    src: "icon/ico_rect_scanbarcode.png",
			   /* layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),*/
			    press: function () {
				    //	varScan = "Mob22InsLot";
				    	
				    //	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanBatch();
			  
			    	/*var Material = "";
			        var mainArray= [];
			    	cordova.plugins.barcodeScanner.scan(
			                function(result){
			                	
			                //var resArray = result.text.split("#");
			                var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
			                var res = str.split("#");
			                for( var i = 1 ; i< res.length; i++)
			                {
			                Material = res[i];
			                Material = Material.split(":");
			                Material = Material[1];
			                mainArray.push(Material);
			                }
			                sap.ui.getCore().byId("inputMatnrMOB22").setValue(mainArray[0]);
			                }, 
			                function(error){
			               	sap.m.MessageBox.show("Scan failed: " + error);
			               	errorText = error;
			                });	*/
					      
				    	 
				    	
				      
			    	varScan = "Mob22InsLot" ;
			    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
			      },
			  });
			  matScanMOB22.addStyleClass("matScan");
			  matScanMOB22.addStyleClass("scanPadding");
			  }
		  
		if( g_runningInTablet == true || g_runningOnPhone == true)
			{
			var batchScanMOB22 =  new sap.m.Image({
				  id : "batchScanMOB22" ,
				    src: "icon/ico_rect_scanbarcode.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    press: function () {
				    	varScan = "Mob22InsLot";
				    	
				    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanBatch();
				    			     
				    	var Material = "";
				        var mainArray= [];
				        
				        var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
				    	cordova.plugins.barcodeScanner.scan(
				                function(result){
				                	
				                //var resArray = result.text.split("#");
				                var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
				                var res = str.split("#");
				                for( var i = 1 ; i< res.length; i++)
				                {
				                Material = res[i];
				                Material = Material.split(":");
				                Material = Material[1];
				                mainArray.push(Material);
				                }
				                sap.ui.getCore().byId("batch").setValue(mainArray[3]);
				                

				                if( g_isDebug == true)
				                	        	{
				                	        	//Service End Time
				                	var logInfo1 = getTimeStamp() +"Barcode Scan:: "+str+"Finish" ;
				                	        	//Log file Service Start and End Time
				                	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				                	        	logFileUpdate(g_ServiceStartEndTime);
				                	        	}
				                
				                
				                }, 
				                function(error){
				               	sap.m.MessageBox.show("Scan failed: " + error);
				               	errorText = error;
				               	

				               	if( g_isDebug == true)
				               		        	{
				               		        	//Service End Time
				               		        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
				               		        	//Log file Service Start and End Time
				               		        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
				               		        	logFileUpdate(g_ServiceStartEndTime);
				               		        	}
				               	
				               	
				                });	
				    
				    	
				      },
				  });
				  batchScanMOB22.addStyleClass("matScan");
				  batchScanMOB22.addStyleClass("scanPadding");
				 // batchScanMOB22.setVisible(false);
			}
		 
			  
		 
		  
		 var inputMatnrMOB22 = new sap.m.Input("inputMatnrMOB22", {
		      type: sap.m.InputType.Text,
		      maxLength : 6,
		      placeholder: 'Enter Material Number',
		      //showSuggestion: true,		     
		      showValueHelp: true,
		      change : oController.checkMatnrMOB22 ,
		      liveChange : oController.checkinputMatnrMOB22,
		      valueHelpRequest: function (evt) {
		    	  oController.openMatSearch();
		      
		      }
		  }).addStyleClass("Input3");
		 
		 var lblMatnrMOB22Desc = new sap.m.Label("lblMatnrMOB22Desc", {
			// enabled : false ,
			 //visible : false 
			 design: sap.m.LabelDesign.Bold,
			 textAlign:sap.ui.core.TextAlign.Begin,
			// width:"230px"
		 }).addStyleClass("lab1");
		 
////////////////////////////////////////////////////////////////////////////////////////////////////////		 

		 
		 var oItemTemplate = new sap.ui.core.Item({  
		              id : "vendordd",
		              key : "{key}",
		        	  text : "{text}"  
		        	 });  
		 var inputVendorMOB22 = new sap.m.Select("inputVendorMOB22", {
			
		     // type: sap.m.InputType.Text,	  
		     change : oController.selVendor,
		     width:"350px",
			 items: {
                	path : "/items",  
				    template : oItemTemplate  
		           }}).addStyleClass("InputVendor");
		 
		 var lblVendorMOB22Desc = new sap.m.Label("lblVendorMOB22Desc", {
				// enabled : false ,
				 //visible : false 
				 textAlign:sap.ui.core.TextAlign.Begin,design: sap.m.LabelDesign.Bold,
				 width:"230px"
			 }).addStyleClass("lab1");
		 
		// inputVendorMOB22.setModel(oModelJsonList);
		 
//////////////////////////////////////////////////////////////////////////////////////////////////////////		 
		 
	/*	 var oItem = new sap.ui.core.ListItem("Vendor1-mob21");
		 oItem.setText("Vendor1");
		 inputVendorMOB22.addItem(oItem);
		 var oItem1 = new sap.ui.core.ListItem("Vendor2-mob21");
		 oItem1.setText("Vendor2");
		 inputVendorMOB22.addItem(oItem1);*/
		 
		 
		 
		 
		selectmanual = new sap.m.Select({
			items:[new sap.ui.core.Item({text:"lookup/manual/scan 1"}),	
			       new sap.ui.core.Item({text:"lookup/manual/scan 2"}),
			       new sap.ui.core.Item({text:"lookup/manual/scan 3"})]}).addStyleClass("dropdown3");
		selectlist = new sap.m.Select({
			items:[new sap.ui.core.Item({text:"Select from pre-populated list 1"}),
			       new sap.ui.core.Item({text:"Select from pre-populated list 2"}),
			       new sap.ui.core.Item({text:"Select from pre-populated list 3"})]}).addStyleClass("dropdown");
		/*select4 = new sap.m.Select({
			items:[new sap.ui.core.Item({text:"pre-pop/lookup/manual 1"}),
			       new sap.ui.core.Item({text:"pre-pop/lookup/manual 2"}), 
			       new sap.ui.core.Item({text:"pre-pop/lookup/manual 3"})]}).addStyleClass("dropdown2");*/
		/*select5 = new sap.m.Select({
			items:[new sap.ui.core.Item({text:"Select from pre-populated list 1"}), 
			       new sap.ui.core.Item({text:"Select from pre-populated list 2"}),
			       new sap.ui.core.Item({text:"Select from pre-populated list 3"})]}).addStyleClass("dropdown");
		*/
		var btnBack = new sap.m.Button({
			text :"back",
			 icon : "sap-icon://nav-back",
			press : onBack_dra,
			layoutData : new sap.ui.layout.GridData({
	            span: "L2 M9 S12",
	           
	    })
		});
		
		var btnSave = new sap.m.Button({
			text :"Save",
			icon : "sap-icon://save",
			press : onSave_dra,
			layoutData : new sap.ui.layout.GridData({
	            span: "L2 M9 S12",
	           
	    })
		});
		
		
		hBox1.addItem(lblMat);
		//hBox1.addItem(label2);
		//hBox2.addItem(select1);
		//hBox2.addItem(selectmanual);
		hBox2.addItem(inputMatnrMOB22);
		hBox2.addItem(matScanMOB22);
		hBoxMatDesc.addItem(lblMatnrMOB22Desc);
		hBox3.addItem(lblVendor);
		hBox4.addItem(inputVendorMOB22);
		hBoxVenDesc.addItem(lblVendorMOB22Desc);
		//hBox3.addItem(label4);
		//hBox4.addItem(selectlist);
		//hBox4.addItem(select4);
		//hBox5.addItem(label5);
		hBox5.addItem(lblBatch);
		//hBox6.addItem(select5);
		hBox6.addItem(textFieldBatch);
		hBox6.addItem(batchScanMOB22);
		hBox7.addItem(lblTime);
		hBox8.addItem(textInsLotTime);
		vBox1.addItem(hBox1);
		vBox1.addItem(hBox2);
		vBox1.addItem(hBoxMatDesc);

		vBox2.addItem(hBox3);
		vBox2.addItem(hBox4);
		vBox2.addItem(hBoxVenDesc);
		vBox2.addItem(hBox5);
		vBox2.addItem(hBox6);

		vBox3.addItem(lblInsQty);
		vBox3.addItem(textFieldInsQty);
		vBox3.addItem(lblInst);
		vBox3.addItem(textareaInsDet);
		vBox4.addItem(hBox7);
		vBox4.addItem(hBox8);
		vBox.addItem(vBox1);
		vBox.addItem(vBox2);
		vBox.addItem(vBox3);
		vBox.addItem(vBox4);
	
		
		vBox3.addStyleClass("vbox3");
		vBox2.addStyleClass("vBox2");
		var det = new sap.m.FlexBox({
			items: [
			textareaInsDet
			],

			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
			}).addStyleClass("det");
		
		
		var main = new sap.m.FlexBox({
			items: [
			lblMat,
			hBox2,
			//inputMatnrMOB22,
			//matScanMOB22,
			lblMatnrMOB22Desc,
			
			lblVendor,
			inputVendorMOB22,
			
			lblBatch,
			hBox6,
			
			lblInsQty,
			textFieldInsQty,
			lblInst,
			det
			],

			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
			});
		
		//Plant Label

	/*	var plant_lbl = new sap.m.Label({
			text: "Customer",
	});
		plant_lbl.addStyleClass(label);

		


		var plant_ddown = new sap.m.Select({
			name : "abc",
		items:[new sap.ui.core.Item({text:"Great Western"})]

		});
	plant_ddown.addStyleClass(dropdown);
	//Material Number

		var mat_lbl = new sap.m.Label({
			text: "Material",

		});


		var mat_ddown = new sap.m.Select({
			name : "Material1",
		items:[new sap.ui.core.Item({text:"lookup/manual/scan"})]

		});



		var lbl_flex = new sap.m.FlexBox({

			items: [
	        plant_lbl,
	        mat_lbl
	],
	direction:"Row",
	justifyContent:"Start",
	alignItems:"Start"
	});

	var ddwon_flex = new sap.m.FlexBox({
	items: [

	plant_ddown,
	mat_ddown
	],

	direction:"Row",
	justifyContent:"Start",
	alignItems:"Start"
	});

	var main = new sap.m.FlexBox({
	items: [
	lbl_flex,
	ddwon_flex,
	],

	direction:"Column",
	justifyContent:"Start",//Contents would be placed in the begin
	alignItems:"Center"
	});
	*/
		
		
		
        var msgDialog = new sap.m.Dialog({
        	title: "Inspection Lot",
        	 icon: "sap-icon://sys-help",
        	type: sap.m.DialogType.Message,
        	content: [
        	new sap.m.Text({
        	text:"Are you sure you wish to send this  Inspection Lot now?"
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
        		validateData();
        		
        		
        		
        		/*
	        	msgDialog.close();
	        	busyDialog.open(); //Showing Busy Indicator
	        	setTimeout(function(){
	        		
		        	 * Calling Save Inspection Lot Service
		        	 
		        	oController.saveInspecLot();
		        	busyDialog.close(); // Hide Busy Indicator
		        	msgDialog1.open();
		    	 }, 1000);
        	*/}
        	})
        	});
        /*******************************************************************************************************/
        	/*Message Dialog for Yes button*/

        	var msgDialog1 = new sap.m.Dialog({
        	title: "Inspection Lot",
        	type: sap.m.DialogType.Message,
        	// icon: "sap-icon://sys-enter"
        	content: [
        	          new sap.m.Text({
        	text:"Inspection Lot Created !! Do you wish to create another ?",
        	})
        	],

        	leftButton: new sap.m.Button({
        	text: "Yes",
        	press: function () {
        		msgDialog1.close();
        	}
        	}),
        	rightButton: new sap.m.Button({
        	text: "No",
        	press: function () {
	        	msgDialog1.close();
	        	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuQM");
        	}
        	})
        	});
        	
        	
        	function validateData()
        	{
        		
        		///////////////////////////////////////////////////////
        		debugger;
        		var mandfield = 0;
        		
        		if (null ==  sap.ui.getCore().byId("inputMatnrMOB22").getValue() || sap.ui.getCore().byId("inputMatnrMOB22").getValue() == "")
          	  {
          	  sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.Error);
          	mandfield = 1;
          	  }
            
            else
          	  {
          	  sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
          	  
          	  }
            
            if ( null ==  sap.ui.getCore().byId("insqty").getValue() ||  sap.ui.getCore().byId("insqty").getValue() == "" )
          	  {
          	  
          		sap.ui.getCore().byId("insqty").setValueState(sap.ui.core.ValueState.Error);
          		mandfield = 1;
          	  }
            else
          	  {
          	  sap.ui.getCore().byId("insqty").setValueState(sap.ui.core.ValueState.None);
          	  
          	  }
            if (null ==  sap.ui.getCore().byId("insdet").getValue() || sap.ui.getCore().byId("insdet").getValue() == "")
  	   	  {
  	   	  sap.ui.getCore().byId("insdet").setValueState(sap.ui.core.ValueState.Error);
  	   	mandfield = 1;
  	   	  }
  	     
  	     else
  	   	  {
  	   	  sap.ui.getCore().byId("insdet").setValueState(sap.ui.core.ValueState.None);
  	   	  
  	   	  }
      	 
      	 
      	 if (  mandfield ==  1 )
          	{
          	 // alert("Please provide data in all mandatory fields");
      		sap.m.MessageBox.show(

      				"Please provide data in all mandatory fields",
      				sap.m.MessageBox.Icon.ERROR,
      				"Error"

      				);


          	  }
     	else
		{
     		var qtyInt =  parseInt(sap.ui.getCore().byId("insqty").getValue());
     		if (qtyInt > 0)
     		{
     		var msg = 'Inspection Lot has been saved sucessfully';
            jQuery.sap.require("sap.m.MessageToast");
          //  sap.m.MessageToast.show(msg);
     	//matnum.setValueState(sap.ui.core.ValueState.None);
     	//	insLotQty.setValueState(sap.ui.core.ValueState.None);
            
            var	app = sap.ui.getCore().byId("myApp"); 
     	    app.to("idGridSubMenuQM");
     	   
     	   
		oController.saveInspecLot();
		oController.showQ(); 
		//msgDialog1.open();
		
	//	sap.ui.getCore().byId("inputVendorMOB22").removeAllItems();//remove binded items
    //    sap.ui.getCore().byId("inputVendorMOB22").setEnabled(true);
        
	   
}
     		
     		else
     			{
     			
     			sap.m.MessageBox.show("Quantity should be more than Zero");
     			}
		}
	
	
	
} 
        	
        	////////////////////////////////////////////////////////////////////////////////////////////////
        	   /*var openNoti;
        	   if( g_runningOnPhone == true)
        		   {
        		   
        		   
        		 var oOverlayContainer = new sap.ui.ux3.OverlayContainer({
        			 id:"Mob22-oOverlayContainer"
        		 });
        		 oOverlayContainer.setOpenButtonVisible(false);
        		 oOverlayContainer.addContent(sap.ui.getCore().byId("Mob24-search"));	
        		 oOverlayContainer.addContent(sap.ui.getCore().byId("mob22iniList"));	
              	 
              	 
              	openNoti = new sap.m.Button({
                 		text: "Open Created Insp Lot",
	                   		press: function(oEvent){ 
	                   			if(!oOverlayContainer.isOpen()){
	                   				oOverlayContainer.open();
	                   			}
	                   		}
	                   	});
              	
              	
              	
        		   }*/
        	    	
		//////////////////////////////////////////////////////////////////////////////////////////////////////////
        	
        	
        	   if( g_runningOnPhone == true)
        		   {
        		   
        		   
        		   //Create New view
        		   	   var openNoti = new sap.m.Button({
        		  
                		text: "Open Created Insp Lot",
                   		press: function(oEvent){
                   	 		g_MobileNavigationId = "Mob22-SecondScreen-BackNavButton";
                   	 		
                   	 		
                   			sap.ui.getCore().byId("myApp").to("Mob24-OpenInsView");
                   			var addItem1 = sap.ui.getCore().byId("Mob24-search");
                   			var addItem2 = sap.ui.getCore().byId("mob22iniList")
                   			
                   			debugger;
                   			sap.ui.getCore().byId("Mob22-SecondScreen-BackNavButton").
                   			addContent(addItem1);
                   			
                   			
                   			sap.ui.getCore().byId("Mob22-SecondScreen-BackNavButton").
                   			addContent(addItem2);
                   			
                   			
                   		}
                   	});
        		   
        		   
        		   
        		   
        		   return new sap.m.Page({
        				//title: "{i18n>MOB_22_INSLOT}",
        			   showHeader : false,
        				content: [
        				          main
        						//vBox
        						//panel
        				],
        			enableScrolling : true,
        				footer: new sap.m.Bar({
        					id:"Mob22-addFoterBar",
        				    contentRight: [
        				                   
        				                  

        				      openNoti,
        				      new sap.m.Button({
        				
        				        text: "{i18n>MOB_22_NEW}",
        				        icon: "sap-icon://add",
        				        press : function () {
        				    		oController.newInspection();
        				        }
        				        	
        				      }),
        				      new sap.m.Button({
        			  	        text: "{i18n>MOB_22_SAVE}",
        			  	        icon: "sap-icon://save",
        			  	        press : function () {
        			  	    		msgDialog.open();
        			  	        }
        			  	      })
        				    ]
        				})
        				/*footer: new sap.m.Bar({
        				    contentRight: [
        				      new sap.m.Button({
        				        text: "Save",
        				        icon: "sap-icon://save",
        				        press : function () {

        				    		msgDialog.open();
        				        }
        				      }),
        				      new sap.m.Button({
        				        text: "Back",
        				        icon: "sap-icon://sys-back",
        				        press : function () {

        				    		//msgDialog1.open();
        				        	alert("Im Back");
        				    		
        				        }
        				        	
        				      }),
        				      
        				      new sap.m.Button({
        				           
        				            icon: "sap-icon://action",
        				            press : function () {
        				               
        				                oSelectDialog.open();
        				              }
        				          })
        				    ]

        				})
        						});
        					
        				
        					*/
        				
        				
        				});
        		   
        		   }
        	   
        	   else
        		   {
        		   return new sap.m.Page({
        				title: "Material Details",
        				content: [
        				          main
        						//vBox
        						//panel
        				],
        			enableScrolling : true,
        				footer: new sap.m.Bar({
        					id:"Mob22-addFoterBar",
        				    contentRight: [
        				                   
        				                  

        				      openNoti,
        				      new sap.m.Button({
        				
        				        text: "Reset",
        				        icon: "sap-icon://add",
        				        press : function () {
        				    		oController.newInspection();
        				        }
        				        	
        				      }),
        				      new sap.m.Button({
        			  	        text: "{i18n>MOB_22_SAVE}",
        			  	        icon: "sap-icon://save",
        			  	        press : function () {
        			  	    		msgDialog.open();
        			  	        }
        			  	      })
        				    ]
        				}).addStyleClass("footer")
        				/*footer: new sap.m.Bar({
        				    contentRight: [
        				      new sap.m.Button({
        				        text: "Save",
        				        icon: "sap-icon://save",
        				        press : function () {

        				    		msgDialog.open();
        				        }
        				      }),
        				      new sap.m.Button({
        				        text: "Back",
        				        icon: "sap-icon://sys-back",
        				        press : function () {

        				    		//msgDialog1.open();
        				        	alert("Im Back");
        				    		
        				        }
        				        	
        				      }),
        				      
        				      new sap.m.Button({
        				           
        				            icon: "sap-icon://action",
        				            press : function () {
        				               
        				                oSelectDialog.open();
        				              }
        				          })
        				    ]

        				})
        						});
        					
        				
        					*/
        				
        				
        				});
        		   
        		   }
        	   
	
	   
	  
	
	
	}		
});