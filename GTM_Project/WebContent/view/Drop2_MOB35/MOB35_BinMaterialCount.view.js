sap.ui.jsview("com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB35_BinMaterialCount
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB35.MOB35_BinMaterialCount";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB35_BinMaterialCount
	*/ 
	createContent : function(oController) {
		
		this.setHeight("100%");
		
		
		var materaialLbl= new sap.m.Label({text: "{i18n>MOB35_Material}",
			design: sap.m.LabelDesign.Bold});
		var materialInput= new sap.m.Input("MOB35_matInput",{
			maxLength : 18,
			placeholder: 'Scan or manual entry',
			type :sap.m.InputType.Tel,
			change : function()
			{
				if(sap.ui.getCore().byId("MOB35_matInput").getValue().trim() != "")
				{
					validateMATNUMAccess =  "MOB35";
					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
					validateMatNum(sap.ui.getCore().byId("MOB35_matInput").getValue());
					sap.ui.getCore().byId("MOB35_serialInput").setValue("");	
				}
				
			},
			liveChange : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("MOB35_matInput"));//go to string utility  
		      },
		      
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  oController.openMatSearchMOB35();
		    	  backNavMat = "MOB35";
		      }
		});
		
		var materaialDescLbl= new sap.m.Label("MOB35MatDesc", {text: ""});
		
		var btnScanMat = new sap.m.Button({
			 id : "MOB35_matScan",
			// visible: false,
          icon: "img/ico_rect_scanbarcode.png",
          press:function(evt){
        	  oController.scanMaterial(evt);
        	  
          } 
        });
		 if(g_runningInTablet == false && g_runningOnPhone == false )
		  {
			 btnScanMat.setVisible(false);
		  }
	  
	  else
		  {
		  btnScanMat.setVisible(true);
		  }
		
		var matScanInput=  new sap.m.FlexBox({
			items: [
				     materialInput ,
				     btnScanMat
							        ],
			direction:"Row",
			//justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		var quantityLbl= new sap.m.Label("quantityLbl", {text: "{i18n>MOB35_Quantity}",
			design: sap.m.LabelDesign.Bold,});
		var quantityInput= new sap.m.Input({
			
			id : "MOB35Qty",
			type :sap.m.InputType.Tel,
			required: true,
			liveChange : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("MOB35Qty"));//go to string utility  
		      },
			
		});
		quantityLbl.setLabelFor(quantityInput);
		var UOMLbl= new sap.m.Label("lblUOMMOB35", {text: "{i18n>MOB35_UOM}",
			design: sap.m.LabelDesign.Bold});
		var UOMInput= new sap.m.Input({
			id : "MOB35UOM",
			value: "",
			enabled: false});
		
		var serialLbl= new sap.m.Label({
			id : "MOB35SerLbl",
			design: sap.m.LabelDesign.Bold,
			text: "{i18n>MOB35_Serial}"});
		var serialInput= new sap.m.Input("MOB35_serialInput",{
			placeholder: 'Scan or manual entry',
			type :sap.m.InputType.Tel,
			liveChange : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("MOB35_serialInput"));//go to string utility  
		      },
		});
		

		var iconCloseImage = new sap.m.Image({
			src : "img/button_cancel.png",
			press : function(){
				popWin.close();
			}
		});
		
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob35-thrdScr-txtBoxManualEntryLog",
			liveChange : function(){
			field_numeric_validation(sap.ui.getCore().byId("Mob35-thrdScr-txtBoxManualEntryLog"));//go to string utility  
			},
			});
			
			var btnAdd = new sap.m.Button({ id : "Mob35-thrdScr-btnAdd",
			text : "Add Serial",
			press : function(){
			oController.addSerialMOB35();
			//sap.ui.getCore().byId("Mob35-popWin").close();	
			}});
			
			var txtAddRow = new sap.m.FlexBox({
			id : "Mob35-txtAddRow",
			items: [ txtBoxManualEntryLog, btnAdd ]});
			
		var popWin = new sap.m.Dialog({
		id : "Mob35-popWin",
		subHeader : new sap.m.Bar({
            contentLeft : [],
            contentMiddle : [new sap.m.Text({text : "Add a Serial number for material"})],
            contentRight : [iconCloseImage],
        }),
		type: sap.m.DialogType.Message,
		content: [
		new sap.m.Text({
		//text:"skcsdjcnsdncsdncnsncsdjccjsdnc"
		}),
		txtAddRow
		
		
		],
		leftButton: new sap.m.Button({
		text: "Manual Entry",
		press: function () {
		sap.ui.getCore().byId("Mob35-txtAddRow").setVisible(true);
		}
		}),
		
		rightButton: new sap.m.Button({
		text: "Scan",
		press: function () {
		//popWin.close();	
		 oController.ScanSerialMOB35();
		 //oController.addSerialMOB35();
		}
		})
		
		});
		
		var btnScanSerial = new sap.m.Button({
			 id : "MOB35_serialScan", 
			// visible: true,
         icon: "img/ico_rect_scanbarcode.png",
         press:function(evt){
       	 // oController.scanMaterial(evt)
        	 sap.ui.getCore().byId(
				"Mob35-thrdScr-txtBoxManualEntryLog")
				.setValue("");
        	 sap.ui.getCore().byId("Mob35-popWin").open();
         } 
       });
		
		
		var serialScanInput=  new sap.m.FlexBox({
			id : "serialBoxMOB35",
			items: [
				     serialInput ,
				     btnScanSerial
							        ],
			direction:"Row",
			//justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		var batchLbl= new sap.m.Label({
			id : "MOB35BatLbl",
			text: "{i18n>MOB35_Batch}"});
		var batchInput= new sap.m.Input("MOB35_batchInput",{
			placeholder: 'Scan or manual entry',
			//type :sap.m.InputType.Tel,
			/*liveChange : function()
		      {
		    	  
		    	  field_numeric_validation(sap.ui.getCore().byId("MOB35_batchInput"));//go to string utility  
		      },*/
		});
		
		var btnScanBatch = new sap.m.Button({
			 id : "MOB35_batchScan", visible: false,
        icon: "img/ico_rect_scanbarcode.png",
        press:function(evt){
      	  oController.scanMaterial(evt);
      	  
        } 
      });
		
		
		var bactchScanInput=  new sap.m.FlexBox({
		id : "batchBoxMOB35",
			items: [
				     batchInput ,
				     btnScanBatch
							        ],
			direction:"Row",
			//justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		
		
		var sTypeLbl= new sap.m.Label({text: "{i18n>MOB35_SType}"});
		var QualitySType= new sap.m.RadioButton({
			text: "{i18n>MOB35_Quality}",
			groupName: "MOB35_Stype"
			
		});
		var BlockedSType= new sap.m.RadioButton({
			text: "{i18n>MOB35_Blocked}",
			groupName: "MOB35_Stype"
			
		});
		
		var container_Item2 = new sap.m.FlexBox({
			items: [QualitySType,BlockedSType],
			direction:"Row",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("lab1");
		
		
		var scannedResults= new sap.m.TextArea({
			  height : "13rem",
			cols: 45,
			rows: 1,
			enabled: false
		});
		
		var oResponsivePopoverList = new sap.m.List({
			id:"oResponsivePopoverListMOB35",
			  mode: sap.m.ListMode.Delete,
		  	  height : "300px",
		      includeItemInSelection: true,
		      rememberSelections : false,
		      items: {
		    	  path: "/resultsMOB35Ser",
		        template: 
		        new sap.m.StandardListItem({
		        	title : "{scannerValues}",
		        	
		     	})}
		});
		
		oResponsivePopoverList.attachDelete(oController.handleDeleteMOB35);
		
		var oBeginButton = new sap.m.Button({
			text : "Close",
			width : "100%",
			type : sap.m.ButtonType.Reject,
			press : function() {
				oResponsivePopover.close();
			}
		});
		var oResponsivePopover = new sap.m.ResponsivePopover({
			placement : sap.m.PlacementType.Auto,
			id: "oResponsivePopoverMOB35",
			title : "Serial Number",
			showHeader : true,
			beginButton : oBeginButton,
			//endButton : oEndButton,
			horizontalScrolling : false,
			verticalScrolling : true,
			contentWidth : "520px",
			contentHeight : "300px",
			content : [ oResponsivePopoverList ]
		});
		
		var btnShowSerial = new sap.m.Button({ 
			id : "Mob35ShowSer",
			text : "Show Serial Numbers",
			icon: "sap-icon://show" ,
			press : oController.logSerMOB35
			//sap.ui.getCore().byId("Mob35-popWin").close();	
			});
		/*****************************************************************/
			var btnaddedMat = new sap.m.Button({ 
			id : "Mob35ShowMatAdded",
			text : "Show Added material",
			icon: "sap-icon://show" ,
			press : oController.AddedMat
			//sap.ui.getCore().byId("Mob35-popWin").close();	
			});
			/*var storageType_ListItem= new sap.m.ObjectListItem({
			title : "{Material}", // string
				firstStatus : new sap.m.ObjectStatus({
					text :"Quantity: "+" "+"{Quantity}", 
				}), 
			});*/
		
			///Storage type list
			var addedmaterialList= new sap.m.List("MOB35_AddedMatList",{
				  mode: sap.m.ListMode.SingleSelectMaster,
			      includeItemInSelection: true,
			      rememberSelections : false,
			items:{
				 path: "/",
				template: new sap.m.ObjectListItem({
					title : "{Material}", // string
					firstStatus : new sap.m.ObjectStatus({
						text :"Quantity: "+" "+"{Quantity}", 
					}), 
				})
			},
				
			});
			
			var addedmaterialPopoverClose  = new sap.m.Button({
				text : "Close",
				width : "100%",
				type : sap.m.ButtonType.Reject,
				press : function() {
					addedmaterialPopover.close();
				}
			});
			var addedmaterialPopover = new sap.m.ResponsivePopover({
				placement : sap.m.PlacementType.Auto,
				id: "AddedMaterialPOP",
				title : "Added Material",
				showHeader : true,
				beginButton : addedmaterialPopoverClose,
				//endButton : oEndButton,
				horizontalScrolling : false,
				verticalScrolling : true,
				contentWidth : "520px",
				contentHeight : "300px",
				content : [ addedmaterialList ]
			});
			
////*****below code for Stock Type //////
			
			var lblStockType = new sap.m.Label("lblStockType35", {
			      text: "{i18n>MOB35_StockType}"
			    });
			
			lblStockType.addStyleClass("topPadding");
			
			var lblDummy1 = new sap.m.Label({
			      text: ""
			    }).addStyleClass("paddingBottom");
			

			
			var radiobtnST0 = new sap.m.RadioButton({
				id : "idradio-ST0-Mob35",
				groupName : "Mob35-Radio-ST",
				text : "None",
				selected:true
			
			});
			
			var radiobtnST1 = new sap.m.RadioButton({
				id : "idradio-ST1-Mob35",
				groupName : "Mob35-Radio-ST",
				text : "QI"
				
			});
			
			var radiobtnST2 = new sap.m.RadioButton({
				id : "idradio-ST2-Mob35",
				groupName : "Mob35-Radio-ST",
				text : "Blocked"
			});
			
			
			
			var radioBtnST = new sap.m.HBox("radioBtnST", {
				
			});
			radioBtnST.addItem(radiobtnST0);
			radioBtnST.addItem(radiobtnST1);
			radioBtnST.addItem(radiobtnST2);
			
			//************************************************************************************
		
		////*****below code copied from MOb 17 for special stocks//////
			
			var lblSpeStock = new sap.m.Label("lblSpeStock", {
			      text: "{i18n>MOB17_SpecialStock}"
			    });
			
			lblSpeStock.addStyleClass("topPadding");
			

			
			var radiobtnSS0 = new sap.m.RadioButton({
				id : "idradio-SS0-Mob35",
				groupName : "Mob35-Radio-SS",
				text : "None",
				selected:true,
				select : function()
				{ //None Selected
					sap.ui.getCore().byId("selectCustProj35").setVisible(false);
					
					clearSpecialStockMOB35();
				}
			
			});
			
			var radiobtnSS1 = new sap.m.RadioButton({
				id : "idradio-SS1-Mob35",
				groupName : "Mob35-Radio-SS",
				text : "Project",
				select : function()
				{ 
					sap.ui.getCore().byId("selectCustProj35").setVisible(true);
					callProjSearchHelpMOB35();
				}
				
			});
			
			var radiobtnSS2 = new sap.m.RadioButton({
				id : "idradio-SS2-Mob17",
				groupName : "Mob35-Radio-SS",
				text : "Customer",
				select : function()
				{ 
					sap.ui.getCore().byId("selectCustProj35").setVisible(true);
					callCustomerSearchHelpMOB35();
				}
			
			});
			
			
			
			var radioBtnSS = new sap.m.HBox("radioBtnSS", {
				
			});
			radioBtnSS.addItem(radiobtnSS0);
			radioBtnSS.addItem(radiobtnSS1);
			radioBtnSS.addItem(radiobtnSS2);
			
			//************************************************************************************
			
			var selectCustProj = new sap.m.Select("selectCustProj35", {
			      items: {
			        path: "/MOB35CustProj",
			        sorter: new sap.ui.model.Sorter("key", false),
			        template: new sap.ui.core.Item({
			          key: "{key}",
			          text: "{detail}"
			        })
			      },
			      layoutData : new sap.ui.layout.GridData({
			          span: "L3 M3 S12",
			          linebreakL: true,
			 			linebreakM: true,
			 			linebreakS: true
			      })
			    }).addStyleClass("paddingBottom");
			
			
		
		/**********************************************************************/
		var btnAddMaterial = new sap.m.Button({ 
			id : "Mob35ADDMat",
			text : "Add Material",
			icon: "sap-icon://add-product" ,
			press : oController.addMatMOB35
			//sap.ui.getCore().byId("Mob35-popWin").close();	
			});
		
		var btnConAddMaterial = new sap.m.Button({ 
			id : "Mob35ConADDMat",
			text : "Confirm and add",
			icon: "sap-icon://activity-2" ,
			press : oController.addMatMOB35
			//sap.ui.getCore().byId("Mob35-popWin").close();	
			});
		
		var container_Item1 = new sap.m.FlexBox("mob35_detailBox",{
			items: [
				     materaialLbl, matScanInput, materaialDescLbl,
				     btnaddedMat,
				    quantityLbl,quantityInput,
				    UOMLbl,UOMInput,
				    serialLbl,serialScanInput,
				    btnShowSerial,
				    batchLbl,bactchScanInput,
				   // sTypeLbl,container_Item2,
				     btnConAddMaterial,
				     lblStockType,
				     radioBtnST,
				     lblSpeStock,
				     radioBtnSS,
				     selectCustProj,
				     lblDummy1
							        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("ContainerPadAll");
				
		 var btnSubmit = new sap.m.Button({
			  text : "{i18n>MOB35_Submit}",
			  icon: "sap-icon://sys-enter" ,
			  
			  layoutData: new sap.m.FlexItemData({growFactor: 1}),
		      press : function(){
		    	  debugger;
		    	  if ( gMOB35AddMatArr.length  == 0 || sap.ui.getCore().byId("MOB35_matInput").getValue().trim().length>0)
					{
		    		  sap.m.MessageBox.show(
				    		   "Please Add Material before Submitting.",
								sap.m.MessageBox.Icon.ERROR,
								"Error");
		    		  }else {
		    			  oController.submitCount();
		    		  }
				}
			});
		 if ( g_runningOnPhone == true)
			{
			 

		 		return new sap.m.Page("mob35BinPage",{
					title: "{i18n>MOB35_Material}",
					
					showNavButton: true,

					navButtonTap:function(){  
						 g_MobileNavigationId = "MOB35verifyBinPage";
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMOB35BinDetail");
						
					},

					content: [container_Item1],
					footer: new sap.m.Bar({
				    contentRight: [btnAddMaterial ,btnSubmit]
					})
				});
		 		
					 
			}
		 
		 else
			 {
		return new sap.m.Page("mob35BinPage",{
			title: "{i18n>MOB35_Material}",
			
			showNavButton: true,

			navButtonTap:function(){  
				 g_MobileNavigationId = "MOB35verifyBinPage";
				var app = sap.ui.getCore().byId("myApp"); 
				app.to("idMOB35BinDetail");
				
			},

			content: [container_Item1],
			footer: new sap.m.Bar({
		    contentRight: [btnAddMaterial,btnSubmit]
			}).addStyleClass("footer")
		});
			 }
	}

});