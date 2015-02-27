sap.ui.jsview("com.cg.gtm.view.Drop2_MOB28.MOB28MatDetails", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB28.MOB28MatDetails
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB28.MOB28MatDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB28.MOB28MatDetails
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
		
		var lblDummy8 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy9 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		var lblDummy10 = new sap.m.Label({
		text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//BIN 
		var lblBin = new sap.m.Label({text : "Bin",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtBin = new sap.m.Text({id : "MOB28Bin",width : "250px"});
		var BinRow = new sap.m.FlexBox({
		width : "500px",
		items: [ lblBin, txtBin ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Material
		var lblMat = new sap.m.Label({text : "Material",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtMat = new sap.m.Text({id : "MOB28Mat",width : "250px"});
		var MatRow = new sap.m.FlexBox({
		width : "500px",
		items: [ lblMat, txtMat ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Description
		var lblDes = new sap.m.Label({text : "Description",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtDes = new sap.m.Text({id : "MOB28MatDesc",width : "250px"});
		var DesRow = new sap.m.FlexBox({width : "500px",
		items: [ lblDes, txtDes ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Batch
		var lblBatch = new sap.m.Label({id : "MOB28BatchLabel" , text : "Batch",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtBatch = new sap.m.Text({id : "MOB28Batch",width : "150px"});
		var BatchRow = new sap.m.FlexBox({width : "500px",
		items: [ lblBatch, txtBatch ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Type
		var lblType = new sap.m.Label({id : "MOB28TypeLabel" , text : "Type",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtType = new sap.m.Text({id : "MOB28Type",width : "150px"});
		var TypeRow = new sap.m.FlexBox({width : "500px",
		items: [ lblType, txtType ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Type
		var lblQty = new sap.m.Label({id : "MOB28QtyLabel" , text : "Quantity",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtQty = new sap.m.Text({id : "MOB28Qty",width : "150px"});
		var QtyRow = new sap.m.FlexBox({width : "500px",
		items: [ lblQty, txtQty ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});
		
		//Type
		var lblCust = new sap.m.Label({id : "MOB28CustLabel" , text : "Customer",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtCust = new sap.m.Text({id : "MOB28Cust",width : "150px"});
		var CustRow = new sap.m.FlexBox({width : "500px",
		items: [ ] ,//lblCust, txtCust ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"});

		//Quantity
		var lblQtyToChg = new sap.m.Label({text : "Quantity To Change",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtQtyToChg = new sap.m.Input({id : "MOB28QtyChg",	type :sap.m.InputType.Tel,width : "150px" ,
		
		});
		var QtyToChgRow = new sap.m.FlexBox({width : "500px",
			items: [ lblQtyToChg, txtQtyToChg ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		
		//Storage Location
		var lblUOM = new sap.m.Label({text : "UOM",width : "250px"}).addStyleClass("paddingTopandfontweight");
		var txtBoxUOM = new sap.m.Text({id : "MOB28SUOM",
		});
		var UOMRow = new sap.m.FlexBox({width : "500px",
			items: [ lblUOM, txtBoxUOM ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		
		var errorText =  new sap.m.TextArea({
			                 height : "13rem",
							id : "MOB28ErrTxt",
							rows : 1,
							enabled : false ,
							width : "250px"
		});
		
		var containerList = new sap.m.FlexBox({
		
		items: [lblDummy1,
		        BinRow,lblDummy2,MatRow ,lblDummy3 , DesRow,
		        lblDummy4,BatchRow,lblDummy5 ,TypeRow , //lblDummy6 , TypeRow ,
		lblDummy7,QtyRow,lblDummy8,CustRow,lblDummy9 , QtyToChgRow, lblDummy10 ,  UOMRow 
		
		],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
		}).addStyleClass("ContainerPadding");
	
		
		
		var btnSave = new sap.m.Button({
	    	id : "Mob28SaveDUMMY",
	    	text : "Save",
	    	icon : "sap-icon://save"
	    });
	    btnSave.setVisible(false);
	    
	    var btnSaveMob = new sap.m.Button({
	    	id : "Mob28SaveMOb",
	    	text : "Save",
	    	icon : "sap-icon://save",
	    	press : function(){
	    		//if (oController.checkSerialQtyMOB28())
	    			//{
	    			//alert(sap.ui.getCore().byId("MOB28Batch").getDateValue().toISOString().substring(0,28));
	    		if (oController.checkQtyMob28MOB())
	    			{
	    			oController.saveMOB28MOB();
	    			}
	    		
	    			//}
	    	}
	    });
	    btnSave.setVisible(false);
	    
	    var btnScanMob = new sap.m.Button
		(
				{ id : "Mob28ScanMob",
		text : "{i18n>Mob20_Scan}", 
		icon : "img/ico_rect_scanbarcode.png",
		press : function(){
		sap.ui.getCore().byId("Mob28-txtAddRow").setVisible(false);
		sap.ui.getCore().byId("Mob28-popWin").open();
		//popWin.open();
		}
				}
				);
	    
	    
	    var btnBackMob28 =   new sap.m.Button({
            text: "Back",
            icon: "sap-icon://close-command-field" ,
            press : function ()
            {
            var myapp = sap.ui.getCore().byId("myApp");
            myapp.to("idMob28MatListPage");
            }
            
          });
	   
	    if ( g_runningOnPhone == true)
		{
			
			return new sap.m.Page({
				title : "Material Details",
				id : "Mob28Detpage",
				showHeader: true,
				content: [
				          	containerList			
				],
				showNavButton: true,
				 navButtonTap:function(){  
					 g_MobileNavigationId = "Mob28-frstScreen"; 
     	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
					  var myapp = sap.ui.getCore().byId("myApp");
			            myapp.to("idMob28MatListPage");
                    },
				footer: new sap.m.Bar({
			        contentLeft: [btnBackMob28
			         
			        ],
			        contentRight: [
			                       btnSaveMob//btnScanMob,
			 			         
			  			        ]
			        
				})
			
			});
		}
		
		else
			{
	    
		return new sap.m.Page({
		title : "Material Details",
		id : "Mob28Detpage",
		content: [
		containerList
		],
		enableScrolling: false,
		showFooter: false,
		showHeader: true,
		
		footer: new sap.m.Bar({
	        contentRight: [
btnSave//btnScan	 , btnSave               
	                       ]
		}).addStyleClass("footer")
		
		});
			}
		}

});