		sap.ui.jsview("com.cg.gtm.view.MOB19MatDetail", {
		
			/** Specifies the Controller belonging to this View. 
			* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
			* @memberOf view.MOB19MatDetail
			*/ 
			getControllerName : function() {
				return "com.cg.gtm.view.MOB19MatDetail";
			},
		
			/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
			* Since the Controller is given to this method, its event handlers can be attached right away. 
			* @memberOf view.MOB19MatDetail
			*/ 
			createContent : function(oController) {
				this.setHeight("100%");
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Space
		var lblDummy1 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy2 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy3 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy4 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy5 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy6 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy7 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		//Material
		var lblMat = new sap.m.Label({text : "Material",width : "250px",design: sap.m.LabelDesign.Bold,});
		var txtMat = new sap.m.Text({id : "MOB19Mat",width : "250px"});
		var MatRow = new sap.m.FlexBox({
		width : "500px",
		items: [ lblMat, txtMat ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Description
		var lblDes = new sap.m.Label({text : "Description",width : "250px",design: sap.m.LabelDesign.Bold,});
		var txtDes = new sap.m.Text({id : "MOB19MatDesc",width : "250px"});
		var DesRow = new sap.m.FlexBox({width : "500px",
		items: [ lblDes, txtDes ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Revison
		var lblRev = new sap.m.Label({text : "Revision",width : "250px",design: sap.m.LabelDesign.Bold,});
		var txtRev = new sap.m.Text({id : "MOB19Rev",width : "250px"});
		var RevRow = new sap.m.FlexBox({width : "500px",
		items: [ lblRev, txtRev ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		//Serial
		var lblSerial = new sap.m.Label({id : "MOB19SerialLabel" ,text : "Serial",
			design: sap.m.LabelDesign.Bold,
			width : "250px"});
		var txtSerial = new sap.m.Text({id : "MOB19Serial",width : "250px"});
		var SerialRow = new sap.m.FlexBox({width : "500px",
		items: [ lblSerial, txtSerial ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Batch
		var lblBatch = new sap.m.Label({text : "Batch",width : "250px",design: sap.m.LabelDesign.Bold,});
		var txtBatch = new sap.m.Input({id : "MOB19Batch1",editable: false,width : "150px"});
		var BatchRow1 = new sap.m.FlexBox("BatchRow1",{width : "500px",
		items: [ lblBatch, txtBatch ],visible: false,
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Expiry Date
		var lblBatch = new sap.m.Label({id : "MOB19BatchLabel" , text : "Date of Manufacturing",design: sap.m.LabelDesign.Bold,wrapping: true,
			width : "250px"});
		var txtBatch = new sap.m.DateTimeInput({ id :"MOB19Batch",
												 //valueFormat : "YYYY/MMM/DD"
													type : "Date",
													change : function(){
														debugger;
											var date= sap.ui.getCore().byId("MOB19Batch").getDateValue();
											delta= date.getDate();
											
														if(delta<10){
															delta= "0"+delta}
														else{
															delta= delta.toString();
														}
										var timestring=date.toJSON().substring(0,8)+delta+date.toJSON().substring(10,19)					
														
									window.localStorage.setItem
									(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem + "DateTime",
														sap.ui.getCore().byId("MOB19Batch").getValue());
									/*window.localStorage.setItem
									(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem + "DateTimeISO"+gindex,
											sap.ui.getCore().byId("MOB19Batch").getDateValue().toISOString().substring(0,19));	  */
										
										window.localStorage.setItem
										(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem + "DateTimeISO",
												timestring);	
												
													},
													
														})
		                                       ;//new sap.m.Input({id : "MOB19Batch",width : "150px"});
		var BatchRow = new sap.m.FlexBox({width : "500px",
		items: [ lblBatch, txtBatch ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Quantity
		var lblQty = new sap.m.Label({text : "Quantity",width : "250px",design: sap.m.LabelDesign.Bold,});
		var txtQty = new sap.m.Input({id : "MOB19Qty",width : "150px" ,	type :sap.m.InputType.Tel,
		liveChange : function(){
			
			if(sap.ui.getCore().byId("MOB19Qty").getValue().length>0){
			//var OverDelTolranceInt =  parseInt(gOverDelTolrance);
			var OverDelTolranceInt= sap.ui.getCore().byId("Mob19listMatNo").getModel().oData.results[gindex].qty
			var QtyInt = parseInt(Qty); 
			var ipQtyInt = parseInt(sap.ui.getCore().byId("MOB19Qty").getValue()); 
			if (ipQtyInt >  ( QtyInt + OverDelTolranceInt))
				{
				 sap.m.MessageBox.show("Quantity exceeds tolerance value");
				}
			else
				{
			 var oListMOB19Model = sap.ui.getCore().byId("Mob19listMatNo").getModel();
			 var results = oListMOB19Model.oData.results;
			 results[gindex].qty =  sap.ui.getCore().byId("MOB19Qty").getValue() ;
			window.localStorage.setItem
			(sap.ui.getCore().byId("ip_po_del_num").getValue()+"_"+gMatNumMOB19+gDeliveryItem+ "SerLogVal"+"_"+gindex,
					sap.ui.getCore().byId("MOB19Qty").getValue());
		field_numeric_validation(sap.ui.getCore().byId("MOB19Qty"));//go to string utility 
		
				}
				}
		},
		});
		var QtyRow = new sap.m.FlexBox({width : "500px",
			items: [ lblQty, txtQty ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		
		//Storage Location
		var lblLoc = new sap.m.Label({text : "Storage Location",
			design: sap.m.LabelDesign.Bold,
			width : "250px"});
		var txtBoxLoc = new sap.m.Text({id : "MOB19SLoc",
		liveChange : function(){
		//field_numeric_validation(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxLogSer"));//go to string utility  
		},
		});
		var LocRow = new sap.m.FlexBox({width : "500px",
			items: [ lblLoc, txtBoxLoc ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		
		/////////////////////////////////////////////////////////////////////////////////////////////
		var txtBoxManualEntryLog = new sap.m.Input({id : "Mob19-thrdScr-txtBoxManualEntryLog",	type :sap.m.InputType.Tel,
		liveChange : function(){
		field_numeric_validation(sap.ui.getCore().byId("Mob19-thrdScr-txtBoxManualEntryLog"));//go to string utility  
		},
		});
		
		var btnAdd = new sap.m.Button({ id : "Mob19-thrdScr-btnAdd",
		text : "Add Serial",
		press : function(){
		oController.addSerialMOB19();
		//sap.ui.getCore().byId("Mob19-popWin").close();	
		}});
		
		var txtAddRow = new sap.m.FlexBox({
		id : "Mob19-txtAddRow",
		items: [ txtBoxManualEntryLog, btnAdd ]});
		////////////////////////////////////////////////////////////////////////////////////////////
		//On click of scan Pop up window
		
		var iconCloseImage = new sap.m.Image({
			src : "img/button_cancel.png",
			press : function(){
				popWin.close();
			}
		});
		
		var popWin = new sap.m.Dialog({
		id : "Mob19-popWin",
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
		sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(true);
		}
		}),
		
		rightButton: new sap.m.Button({
		text: "Scan",
		press: function () {
		//popWin.close();	
			press: oController.ScanSerialMOB19();
		}
		})
		
		});
		
		//Scan
		
		
		var LogTxtRow = new sap.m.FlexBox
		(
		{width : "500px",
		items: [ /*txtBoxLog, btnScan*/ ]}
		);
		//Scanner  
		//var runningInDsktop = jQuery.device.is.desktop;
		/*if (runningInDsktop == false)
		{
			sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(false);
		}
		else{
			sap.ui.getCore().byId("Mob19-thrdScr-btnScan").setVisible(true);
			}*/
		
		var oResponsivePopoverList = new sap.m.List({
			id:"oResponsivePopoverListMOB19",
			  mode: sap.m.ListMode.Delete,
		  	  height : "300px",
		      includeItemInSelection: true,
		      rememberSelections : false,
		      items: {
		    	  path: "/results",
		        template: 
		        new sap.m.StandardListItem({
		        	title : "{scannerValues}",
		        	
		     	})}
		});
		
		if ( gMOB19Key == "PO")
			{
			oResponsivePopoverList.attachDelete(oController.handleDeleteMOB19);
			}
		else
			{
			oResponsivePopoverList.detachDelete(oController.handleDeleteMOB19);
			
			}
		
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
			id: "oResponsivePopoverMOB19",
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
		
		/*var btnlogSer = new sap.m.Button({
			text : "{i18n>Mob20_LoggedSerialNo}",
			id:"Mob19-btnlogSer",
			type : sap.m.ButtonType.Emphasized,
			press : oController.logSerMOB19
		});*/
		
		var btnlogSer =  new sap.m.Image({
			    id:"Mob19-btnlogSer",
			    src: "img/ico_showimage.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: oController.logSerMOB19
			  });
		
		var btnlogSerMore =  new sap.m.Image({
		    id:"Mob19-btnlogSerMore",
		    src: "img/more.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L2 M3 S12",
		    }),
		    press: oController.logSerMOB19
		  });
			
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		var errorText =  new sap.m.TextArea({
							id : "MOB19ErrTxt",
							rows : 1,
							enabled : false ,
							width : "250px",
							  height : "13rem"
		});
		/*var errorText =  new sap.m.Label({
			id : "MOB19ErrTxt"
}); */
		var scanButtons =  new sap.m.HBox({
			
			items: [//btnlogSer,
			        btnlogSerMore
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
			}).addStyleClass("ContainerPadding");
		
		var containerList = new sap.m.FlexBox({
		
		items: [lblDummy1,
		        MatRow,lblDummy2,DesRow,
		       // lblDummy3, ,RevRow,
		        lblDummy4,SerialRow,lblDummy5,BatchRow1,BatchRow,
		lblDummy6,QtyRow,lblDummy7,LocRow,scanButtons, errorText , LogTxtRow
		
		],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
		}).addStyleClass("ContainerPadding");
	
		
		
		var btnSave = new sap.m.Button({
	    	id : "Mob19SaveDUMMY",
	    	text : "Save",
	    	icon : "sap-icon://save"
	    });
	    btnSave.setVisible(false);
	    
	    var btnSaveMob = new sap.m.Button({
	    	id : "Mob19SaveMOb",
	    	text : "Save",
	    	icon : "sap-icon://save",
	    	press : function(){
	    		//if (oController.checkSerialQtyMOB19())
	    			//{
	    			//alert(sap.ui.getCore().byId("MOB19Batch").getDateValue().toISOString().substring(0,19));
	    		if (sap.ui.getCore().byId("idMOB19TwoScreen").getController().checkSelectCount())
	    			{
	    			sap.ui.getCore().byId("idMOB19TwoScreen").getController().saveMOB19();
	    			}
	    		
	    			//}
	    	}
	    });
	    btnSave.setVisible(false);
	    
	    var btnScanMob = new sap.m.Button
		(
				{ id : "Mob19ScanMob",
		text : "{i18n>Mob20_Scan}", 
		icon : "img/ico_rect_scanbarcode.png",
		press : function(){
		sap.ui.getCore().byId("Mob19-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob19-popWin").open();
		//popWin.open();
		}
				}
				);
	    
	    
	    var btnBackMob19 =   new sap.m.Button({
            text: "Back",
            icon: "sap-icon://sys-back" ,
            press : function ()
            {
            var myapp = sap.ui.getCore().byId("myApp");
            myapp.to("idMob19MatListPage");
            }
            
          });
	   
	    if ( g_runningOnPhone == true)
		{
			
			return new sap.m.Page({
				//title : "tttttttttt",
				id : "Mob19Detpage",
				showHeader: true,
				content: [
				          	containerList			
				],
				 showNavButton: true,
					//enableScrolling: false,
		            navButtonTap:function(){  
		             g_MobileNavigationId = "MOB19MatListPage";
		           //  alert("inside Lateral");
		             var myapp = sap.ui.getCore().byId("myApp");
		             myapp.to("idMob19MatListPage");
		            },
				footer: new sap.m.Bar({
			        contentLeft: [btnBackMob19
			         
			        ],
			        contentRight: [btnScanMob,btnSaveMob
			 			         
			  			        ]
			        
				})
			
			});
		}
		
		else
			{
	    
		return new sap.m.Page({
		//title : "tttttttttt",
		id : "Mob19Detpage",
		content: [
		containerList
		],
		enableScrolling: true,
		showFooter: false,
		showHeader: true,
		
		footer: new sap.m.Bar({
	        contentRight: [
	                       	//btnScan	 , btnSave               
	                       ]
		}).addStyleClass("footer")
		
		});
			}
		}
		
		});