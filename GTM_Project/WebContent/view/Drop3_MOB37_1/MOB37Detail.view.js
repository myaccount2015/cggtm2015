sap.ui.jsview("com.cg.gtm.view.Drop3_MOB37.MOB37Detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB37.MOB37MatDetails
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop3_MOB37.MOB37Detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB37.MOB37MatDetails
	*/ 
	createContent : function(oController) {
				this.setHeight("100%");
			
				var topMatrix = new sap.ui.commons.layout.MatrixLayout(
						{hAlign:sap.ui.commons.layout.HAlign.Top,
							columns:2 ,
							width:"100%",
							widths: ['90%','10%']});		
				
				
				var topMatrix2 = new sap.ui.commons.layout.MatrixLayout(
						{hAlign:sap.ui.commons.layout.HAlign.Top,
							columns:2 ,
							width:"100%",
							widths: ['90%','10%']});
				
				var topMatrix3 = new sap.ui.commons.layout.MatrixLayout(
						{hAlign:sap.ui.commons.layout.HAlign.Top,
							columns:2 ,
							width:"100%",
							widths: ['90%','10%']});
				
				var lblHeader = new sap.m.Label({text : "Torque Wrench 200-100NM",
					hAlign:sap.ui.commons.layout.HAlign.Left
					}).addStyleClass("paddingTopandfontweight");
				var lblNumber = new sap.m.Label({text : "2000004",
					hAlign:sap.ui.commons.layout.HAlign.Right
					}).addStyleClass("paddingTopandfontweight");
				
				var lblHeader2 = new sap.m.Label({text : "Plant",
					hAlign:sap.ui.commons.layout.HAlign.Left
					}).addStyleClass("paddingTopandfontweight");
				var lblNumber2 = new sap.m.Label({text : "Noth Pole Depot",
					hAlign:sap.ui.commons.layout.HAlign.Right
					}).addStyleClass("paddingTopandfontweight");
				
				
				
				
				topMatrix.createRow(lblHeader,lblNumber);
				topMatrix2.createRow(lblHeader2,lblNumber2);
				
				
				
				var topSecondRow = new sap.ui.commons.layout.MatrixLayoutCell(
						{hAlign:sap.ui.commons.layout.HAlign.Top}
						);		
				
					
				
				
	   var oCelldetail = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Top});		
				
		
// label 				
	
		//Material
	//	var lblMat = new sap.m.Label({text : "Material",width : "250px"}).addStyleClass("paddingTopandfontweight");
	//	var txtMat = new sap.m.Text({id : "MOB37Mat",width : "250px"});
		//////////label and text ////////////////////////////
		
	var MOB37ManufacturerLabel	= new sap.m.Label({
			text: "{i18n>Manufacturer}",
			design: "Bold"
		});
	var txtManufacturer  = 	new sap.m.Text({
			text: "{tools>Manufacturer}"
		});
	var MOB37ModelNumberLabel= 	new sap.m.Label({
			text: "{i18n>ModelNumber}",
			design: "Bold"
		});
	var ModelNumber = 	new sap.m.Text({
			text: "{tools>ModelNumber}"
		});
	var MOB37ManufacturerPartNumberLabel = 	new sap.m.Label({
			text: "{i18n>Manufacturer Part Number}",
			design: "Bold"
		});
	var ManufacturerPartNumber = 	new sap.m.Text({
			text: "{tools>Manufacturer Part Number}"
		});
	var MOB37ManufacturerSerialNumberLabel = 	new sap.m.Label({
			text: "{i18n>Manufacturer SerialNumber}",
			design: "Bold"
		});
	var ManufacturerSerialNumber = 	new sap.m.Text({
			text: "{tools>ManufacturerSerialNumber}"
		});
	var MOB37StockTypeLabel = 	new sap.m.Label({
			text: "{i18n>StockType}",
			design: "Bold"
		});
	var StockType = 	new sap.m.Text({
			text: "{tools>StockType}"
		});
	var MOB37PlantLabel = 	new sap.m.Label({
			text: "{i18n>Plant}",
			design: "Bold"
		});
	var PlantName= 	new sap.m.Text({
			text: "{tools>PlantName}"
		});
	var MOB37StorageLocationLabel = 	new sap.m.Label({
			text: "{i18n>StorageLocation}",
			design: "Bold"
		});
	 var StorageLocation =	new sap.m.Text({
			text: "{tools>StorageLocation}"
		});
	 var MOB37SpecialStockLabel = 	new sap.m.Label({
			text: "{i18n>SpecialStock}",
			design: "Bold"
		});
	 var SpecialStock = 	new sap.m.Text({
			text: "{tools>SpecialStock}"
		});
	 var MOB37CustomerLabel = 	new sap.m.Label({
			text: "{i18n>Customer}",
			design: "Bold"
		});
	  var Customer = 	new sap.m.Text({
			text: "{tools>Customer}"
		});
		
	  
	  var form37 = new sap.ui.layout.form.SimpleForm({
			layout: "ResponsiveGridLayout",
			editable: true,
			emptySpanL: 6,
			emptySpanM: 6,
			labelSpanL: 3,
			labelSpanM: 3,
			breakpointM: 1000,
			content : [MOB37ManufacturerLabel,
			           txtManufacturer,
			           MOB37ModelNumberLabel,
			           ModelNumber,
			           MOB37ManufacturerPartNumberLabel,
			           ManufacturerPartNumber,
			           MOB37ManufacturerSerialNumberLabel,
			           ManufacturerSerialNumber,
			           MOB37StockTypeLabel,
			            StockType ,
			           MOB37PlantLabel,
			           PlantName,
			           MOB37StorageLocationLabel,
			           StorageLocation,
			           MOB37SpecialStockLabel,
			           SpecialStock ,
			           MOB37CustomerLabel ,
			           Customer] //MOB37ModelNumberLabel,ModelNumber,MOB37ManufacturerPartNumberLabel
	    	}); 
	  
	  
	  
	  
		
		
		//////////////////////////////////////////////////asym 
		
		
	var spacerbar = 	new sap.m.ToolbarSpacer();
	var btn_add_mob37  = 	new sap.m.Button({
			text: "Add",
			icon: "sap-icon://add",
			type: "Emphasized"
		});
	
	var list1_mob37 = new sap.m.StandardListItem({
		type: "Active",
		title: "photo1.jpeg",
		description: "Taken on: 10/01/14",
		icon: "sap-icon://attachment-photo"
	});
	var list2_mob37 =  new sap.m.StandardListItem({
		type: "Active",
		title: "photo2.png",
		description: "Taken on: 15/02/14",
		icon: "sap-icon://attachment-photo"
	});
	var list3_mob37 =  new sap.m.StandardListItem({
		type: "Active",
		title: "photo3.jpeg",
		description: "Taken on: 01/12/14",
		icon: "sap-icon://attachment-photo"
	});
		
		
		
	var mainlist_mob37 = 	new sap.m.List({
			headerToolbar: new sap.m.Toolbar({
				content: [
				          	spacerbar,
				          	btn_add_mob37
				]
			}),
			items: [
               list1_mob37,
			   list2_mob37,
			   list3_mob37
			]
		});
	// icon tab1 
	
	var icontabfilter_mob37_1 =  new sap.m.IconTabFilter({
		text: "Images",
		icon: "sap-icon://camera",
		content:[form37]
		});
	//////////icon tab2 
	
	var icontabfilter_mob37_2 =  new sap.m.IconTabFilter({
		text: "Images",
		icon: "sap-icon://camera",
		content:[list1_mob37,list2_mob37,
				 list3_mob37]
 });
	
var header_attribute_mob37 = 	new sap.m.ObjectAttribute({
		title: "{i18n>Torque }",
		text: "{tools>PlantName}"
	});
	
	
var header_mob37 = 	new sap.m.ObjectHeader({
		title: "{tools>Description}",
		number: "{tools>Equipmentno}",
		attributes: [
		             	header_attribute_mob37
		             ],

		             statuses: [
                     toolstate_mob37	
                     	]
		});

var toolstate_mob37	=	new sap.m.ObjectStatus({
				icon: {
		        path: "tools>ToolState",
		       //  formatter: com.cg.gtm.util.Formatter.toolStateIcon
				},
				state: {
					path: "tools>ToolState",
				//	formatter: com.cg.gtm.util.Formatter.toolValueState
				}
				});


	
	var icontabbar_mob37 = 	new sap.m.IconTabBar({
		id: "MOB37IconTabBar",
		expandable: false,
		items: [icontabfilter_mob37_1,icontabfilter_mob37_2]});
	
	
	
		///////////////labeland text //////////////////////////////////////
		
		
	//	oCelldetail .addContent(lblMat);	
	//	oCelldetail .addContent(txtMat);   
		/*var containerList = new sap.m.FlexBox({
		
		items: [lblMat,
		        txtMat
		       ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
		}).addStyleClass("ContainerPadding");
	*/
		
		
	
	   
	    if ( g_runningOnPhone == true)
		{
			
			return new sap.m.Page({
				title : "Tools",
				id : "MOB37Detpage",
				showHeader: true,
				content: [
				          mainlist_mob37 ,  icontabbar_mob37
				        
				],
				showNavButton: true,
				 navButtonTap:function(){  
					 g_MobileNavigationId = "MOB37-frstScreen"; 
     	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
					  var myapp = sap.ui.getCore().byId("myApp");
			            myapp.to("idMOB37MatListPage");
                    },
				footer: new sap.m.Bar({
			        contentLeft: [ //btnBackMOB37
			         
			        ],
			        contentRight: [
			                      // btnSaveMob//btnScanMob,
			 			         
			  			        ]
			        
				})
			
			});
		}
		
		else
			{
	    
		return new sap.m.Page({
		title : "TOOLS",
		id : "MOB37Detpage",
		content: [  
		      		  mainlist_mob37 ,icontabbar_mob37
		          
		          ],
		enableScrolling: true,
		//showFooter: false,
		showHeader: true,
		showFooter: true,
		footer: new sap.m.Toolbar({
			content: [
						new sap.m.ToolbarSpacer(),
						new sap.m.Button({
							text: "{i18n>Use Tool}",
							icon: "sap-icon://search",
							type: "Emphasized",
							press: [oController.handleSearchButtonPress, oController]
							
						
						})
					]
				}),
		showNavButton: true,
		navButtonTap:function(){ 
			  g_MobileNavigationId = "MainGrid-Inventory";
        	var app = sap.ui.getCore().byId("myApp"); 
			app.to("idGridSubMenuIMWM");
        },
        
	});
}

return page;
}

});