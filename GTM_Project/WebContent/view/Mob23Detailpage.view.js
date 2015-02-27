sap.ui.jsview("com.cg.gtm.view.Mob23Detailpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23Detailpage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23Detailpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23Detailpage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var labeldummy1 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy1.addStyleClass("HideLabel");
		
		var labeldummy2 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy2.addStyleClass("HideLabel");
		
		var labeldummy3 = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		});
		labeldummy3.addStyleClass("HideLabel");
	/*	var data= [{Batch: "",Batchmanaged: "N",Blocked: "1.000",Material: "200005",Materidesc: "Primary Vertical Damper",Modlevel: "02",Plant: "GWNP",Plantdesc: "North Pole Depot",Qualityinsp: "29.000",Serialized: "Y",Serialnumber: "",Sloc: "0001",Slocdesc: "Non WM",
Splitvaluated: "N",
Unrestricted: "3.000",
Uom: "EA"},{Batch: "",Batchmanaged: "N",Blocked: "0.000",Material: "200005",Materidesc: "Primary Vertical Damper",Modlevel: "02",Plant: "GWNP",Plantdesc: "North Pole Depot",Qualityinsp: "72.000",Serialized: "Y",Serialnumber: "",Sloc: "0088",Slocdesc: "WM Managed",Splitvaluated: "N",Unrestricted: "1.000",Uom: "EA"}

]*/
		//Create a matrix layout with 2 columns
		/*var Ord_Table = new sap.ui.commons.layout.MatrixLayout({
			id : "Mob23_Stock",
			layoutFixed: true,
			
			width: '400px', 
			columns: 3});
		    Ord_Table.setWidths('5%','40%', '50%');
		    
		  //Dummy 
			var lbldummy1 = new sap.m.Label({text : ' '});

			var Inputdummy1 = new sap.m.Label({text :' '});

			
			
			var cell1_dummy1=  new sap.ui.commons.layout.MatrixLayoutCell({content: lbldummy1}).setHAlign("Center");
			var cell2_dummy1=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1}).setHAlign("Center");

			
			Ord_Table.createRow(cell1_dummy1,cell2_dummy1 );
			

		 //Plant
		    
		    var lblPlant = new sap.m.Label("idplant").bindProperty("text","Plant").addStyleClass("plant");
		    
		    
			var InputPlant = new sap.m.Label("idplantdes").bindProperty("text","Plantdesc").addStyleClass("plant");
			
			
			var cell1_dummyPlant=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
			var cell2_plant =  new sap.ui.commons.layout.MatrixLayoutCell({content: [lblPlant,InputPlant],colSpan: 2}).setHAlign("Begin").addStyleClass("cell");
		//	var cell3_plant =  new sap.ui.commons.layout.MatrixLayoutCell({content: InputPlant}).setHAlign("Center").addStyleClass("cell");
			
			
			Ord_Table.createRow(cell1_dummyPlant,cell2_plant, cell3_plant);
			Ord_Table.createRow(cell1_dummyPlant,cell2_plant);

		//Storage Location
		var lblSloc = new sap.m.Label("idsloc").bindProperty("text","Sloc");
		var InputSloc = new sap.m.Label("idslocdes").bindProperty("text","Slocdesc");
		
		var cell1_dummySloc=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
		var cell2_sloc =  new sap.ui.commons.layout.MatrixLayoutCell({content: lblSloc}).setHAlign("Center").addStyleClass("cell");
		var cell3_sloc =  new sap.ui.commons.layout.MatrixLayoutCell({content: InputSloc}).setHAlign("Center").addStyleClass("cell");
		
		Ord_Table.createRow(cell1_dummySloc,cell2_sloc, cell3_sloc);
		
		
		//Material
		var lblMat = new sap.m.Label("idMat23").bindProperty("text","Material");

		var InputMat = new sap.m.Label("idMatdes").bindProperty("text","Materidesc");

		
		var cell1_dummyMat=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
		var cell2_Mat=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblMat}).setHAlign("Center").addStyleClass("cell");
		var cell3_Mat=  new sap.ui.commons.layout.MatrixLayoutCell({content: InputMat}).setHAlign("Center").addStyleClass("cell");

		
		Ord_Table.createRow(cell1_dummyMat,cell2_Mat,cell3_Mat );
		
		
		//Qualityinsp
		var lblQty = new sap.m.Label("idQty",{text : 'Quantity Inspection', wrapping: true});

		var InputQty = new sap.m.Label("idQtyinsp").bindProperty("text","Qualityinsp");
		var InputQtyUOM=new sap.m.Label().bindProperty("text","Uom")
		
		var cell1_dummyQty=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
		var cell2_Qty=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblQty}).setHAlign("Center").addStyleClass("cell");
		var cell3_Qty=  new sap.ui.commons.layout.MatrixLayoutCell({content: [InputQty,InputQtyUOM]}).setHAlign("Center").addStyleClass("cell");

		
		Ord_Table.createRow(cell1_dummyQty,cell2_Qty,cell3_Qty );
		
		//Blocked
		var lblBlock = new sap.m.Label("idBlock",{text : 'Blocked'});

		var InputBlock = new sap.m.Label("idInputBlock").bindProperty("text","Blocked");
		var InputBlockUOM=new sap.m.Label().bindProperty("text","Uom")
		
		var cell1_dummyBlock=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
		var cell2_Block=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblBlock}).setHAlign("Center").addStyleClass("cell");
		var cell3_Block=  new sap.ui.commons.layout.MatrixLayoutCell({content: [InputBlock,InputBlockUOM]}).setHAlign("Center").addStyleClass("cell");

		
		Ord_Table.createRow(cell1_dummyBlock,cell2_Block,cell3_Block );
		
		//Unrestricted
		var lblUnres = new sap.m.Label("idUnres",{text : 'Unrestricted'});

		var InputUnres = new sap.m.Label("idInputUnres").bindProperty("text","Unrestricted");
		var InputresUOM=new sap.m.Label().bindProperty("text","Uom");
		
		var cell1_dummyUnres=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
		var cell2_Unres=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblUnres}).setHAlign("Center").addStyleClass("cell");
		var cell3_Unres=  new sap.ui.commons.layout.MatrixLayoutCell({content: [InputUnres,InputresUOM]}).setHAlign("Center").addStyleClass("cell");

		
		Ord_Table.createRow(cell1_dummyUnres,cell2_Unres,cell3_Unres );
		*/
		
		var serialNumberButton = new sap.m.Button("idserial",{text :'Show serial Numbers',
			tap: function(evt){
				
				
				oController.showserial(evt)
			}
				
				
		});

		
		
		/*var serialNumberCell=  new sap.ui.commons.layout.MatrixLayoutCell({content: serialNumberButton,colSpan: 3}).setHAlign("Center");

		
		Ord_Table.createRow(serialNumberCell);*/
		
		////////////////******************************////////////////////////////////////////////////
		/*	var lblPlant = new sap.m.Label("").bindProperty("text","Plant").addStyleClass("plant");
			var InputPlant = new sap.m.Label("").bindProperty("text","Plantdesc").addStyleClass("plant");
			var hlayout1= new sap.ui.layout.HorizontalLayout({
				content:[lblPlant,InputPlant]
			});
			
			
			
			var lblSloc = new sap.m.Label({}).bindProperty("text","Sloc");
			var lblMat = new sap.m.Label("").bindProperty("text","Material");
			var lblQty = new sap.m.Label("",{text : 'Quantity Inspection', wrapping: true});
			var lblBlock = new sap.m.Label("",{text : 'Blocked'});
			var lblUnres = new sap.m.Label("",{text : 'Unrestricted'});
			
			
			var dummy= new sap.m.Label({text: "Dummmy",}).addStyleClass("dummyHide");
			
			var InputSloc = new sap.m.Label("").bindProperty("text","Slocdesc");
			var InputMat = new sap.m.Label("").bindProperty("text","Materidesc");
			
			
			var InputQty = new sap.m.Label("").bindProperty("text","Qualityinsp");
			var InputQtyUOM=new sap.m.Label().bindProperty("text","Uom");
			var hlayout4= new sap.ui.layout.HorizontalLayout({
				content:[InputQty,InputQtyUOM]
			});
			
			var InputBlock = new sap.m.Label("").bindProperty("text","Blocked");
			var InputBlockUOM=new sap.m.Label().bindProperty("text","Uom");
			var hlayout5= new sap.ui.layout.HorizontalLayout({
				content:[InputBlock,InputBlockUOM]
			});
			
			var InputUnres = new sap.m.Label("").bindProperty("text","Unrestricted");
			var InputresUOM=new sap.m.Label().bindProperty("text","Uom");
			var hlayout6= new sap.ui.layout.HorizontalLayout({
				content:[InputUnres,InputresUOM]
			});
			
			var vLayout1= new sap.ui.layout.VerticalLayout("MOB23_leftLayout",{
				content:[hlayout1,lblSloc,lblMat,lblQty,lblBlock,lblUnres]
			
			});
			
			var vLayout2= new sap.ui.layout.VerticalLayout({
				content:[dummy,InputSloc,InputMat,hlayout4,hlayout5,hlayout6]
			
			}).addStyleClass("MOB23_Padding2REm");
			
			
			
			
			
			
			
			var hLayout= new sap.ui.layout.HorizontalLayout({
				
				content:[vLayout1,vLayout2]
			}).addStyleClass("MOB23_Padding1REm");
			
			var listLayout= new sap.ui.layout.VerticalLayout({content:[hLayout,serialNumberButton]}).addStyleClass("MOB23_Margin1rem")
		*//////////////////////////////
			var oLayout2 = new sap.ui.layout.form.GridLayout();

		var oForm2 = new sap.ui.layout.form.Form("Mob23_Stock",{
			layout: oLayout2,
			formContainers: [
				new sap.ui.layout.form.FormContainer("",{
					formElements: [
					
						new sap.ui.layout.form.FormElement({
							fields: [new sap.ui.layout.HorizontalLayout({
								content:[new sap.m.Text().bindProperty("text","Plant").addStyleClass("plant"),
								         new sap.m.Text().bindProperty("text","Plantdesc").addStyleClass("plant")],
								         
								       
							})]
						}),
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Text({ layoutData: new sap.ui.layout.form.GridElementData({hCells: "4"}),}).bindProperty("text","Sloc"),
							fields: [new sap.m.Text({  layoutData: new sap.ui.layout.form.GridElementData({hCells: "12"}),}).bindProperty("text","Slocdesc")]
						}),
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Text({  layoutData: new sap.ui.layout.form.GridElementData({hCells: "4"}),}).bindProperty("text","Material"),
							fields: [new sap.m.Text({  layoutData: new sap.ui.layout.form.GridElementData({hCells: "12"}),}).bindProperty("text","Materidesc")]
						}),
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Text({text: "Quality Inspection",  layoutData: new sap.ui.layout.form.GridElementData({hCells: "4"}),}),
							fields: [new sap.ui.layout.HorizontalLayout({
								content:[new sap.m.Text().bindProperty("text","Qualityinsp"),
								         new sap.m.Text().bindProperty("text","Uom")],layoutData: new sap.ui.layout.form.GridElementData({hCells: "12"}),
							})],
							  
						}),
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Text({text:"Blocked",  layoutData: new sap.ui.layout.form.GridElementData({hCells: "4"}),}),
							fields: [new sap.ui.layout.HorizontalLayout({
								content:[new sap.m.Text().bindProperty("text","Blocked"),
								         new sap.m.Text().bindProperty("text","Uom")],
										  layoutData: new sap.ui.layout.form.GridElementData({hCells: "12"}),
							})],

						}),
						new sap.ui.layout.form.FormElement({
							label: new sap.m.Text({text:"Unrestricted",  layoutData: new sap.ui.layout.form.GridElementData({hCells: "4"}),}),
							fields: [new sap.ui.layout.HorizontalLayout({
								content:[new sap.m.Text().bindProperty("text","Unrestricted"),
								         new sap.m.Text().bindProperty("text","Uom")],  layoutData: new sap.ui.layout.form.GridElementData({hCells: "12"}),
							})],
						}),
					]
				}),
			]
		}).addStyleClass("MOB23_Margin1rem");
	
			
			
			
		var listLayout= new sap.ui.layout.VerticalLayout({content:[oForm2,serialNumberButton]})
			
			//Responsive popup
		var oResponsivePopoverList = new sap.m.List({
        	id:"Mob23-oResponsivePopoverList",
        	 mode: sap.m.ListMode.SingleSelectMaster,
		  	  height : "300px",
		      includeItemInSelection: true,
		      rememberSelections : false,
		      items: {
		    	  path: "/modelData",
		        template: 
		        new sap.m.StandardListItem({
		        	title : "{serialNumber}",
		        	
		     	})}
       });
		
		//Define model to set JSON data for popover
		/*var oModel2 = new sap.ui.model.json.JSONModel();
		
		oModel2.setData({modelData: data});
		oResponsivePopoverList.setModel(oModel2);*/
       // oResponsivePopoverList.attachDelete(oController.handleDelete);
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
			id: "Mob23-oResponsivePopover",
			title : "Serial Numbers",
			showHeader : true,
			beginButton : oBeginButton,
			//endButton : oEndButton,
			horizontalScrolling : true,
			verticalScrolling : true,
			contentWidth : "250px",
			contentHeight : "300px",
			content : [ oResponsivePopoverList ]
		});
		///////////////////////////////////////////////
		//Dummy 
		var lbldummy = new sap.m.Label({text : ' '});

		var Inputdummy = new sap.m.Label({text :' '});

		
		
	/*	var cell1_dummy=  new sap.ui.commons.layout.MatrixLayoutCell({content: lbldummy}).setHAlign("Center");
		var cell2_dummy=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy}).setHAlign("Center");

		
		Ord_Table.createRow(cell1_dummy,cell2_dummy );*/
		
		
		var listItem= new sap.m.CustomListItem({
            //  id : "Mob20-MatDesTable-Column-List",
            // selected : true,
          //   type : "Active",
             /*press : function(evt){
		    	 
	            	   alert("Inside press");
	            	   
	            	   var IMdata= sap.ui.getCore().byId("idList_Mob23_Stock").getModel().oData;
	            	   var index= oList.indexOfItem(evt.getSource());
						var listItemData= IMdata[index];
						if(listItemData.Slocdesc=="WM Managed"){
						 Mob23WMshow();
						 var data= Global_MOB23Collection;
						 var wmdata= Global_MOB23Collection.results[0].NavWM.results;
						 var finalWMData= []
						for(i=0;i<wmdata.length;i++){
							if(listItemData.Sloc==wmdata.Sloc){
								finalWMData.push(wmdata[i])
								
							}
								
							
						}
						 
						 var model= new sap.ui.model.json.JSONModel(finalWMData);
						 sap.ui.getCore().byId("IdMob23WMdetailList").setModel(model);
	            	 	
						 
						 
					   
						}
						else{
							 var app = sap.ui.getCore().byId("idMOB23SplitApp"); 
							 app.toDetail("detailBlankScreen");
							 sap.m.MessageBox.show(
									 
							          "Bin Details are unavailable for IM",
							          sap.m.MessageBox.Icon.ERROR,
										"Error"
							        );
						}
	         
	         
		      },*/
		     
     	    content : [ 
     	             //  Ord_Table
     	            listLayout
     	             
     	          //oForm2
             ]
             });
		
		
//List Item
		
		var oList = new sap.m.List("idList_Mob23_Stock", {
			
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      rememberSelections : false,
		     // visible:false,
		     select : oController.selectList,


		     
		      items: {
	                path: "/",
	                template: listItem,
	                /*new sap.m.CustomListItem({
	              //  id : "Mob20-MatDesTable-Column-List",
	               // selected : true,
	             //   type : "Active",
	                press : function(evt){
	   		    	 
		            	   alert("Inside press");
		            	   
		            	   var IMdata= sap.ui.getCore().byId("idList_Mob23_Stock").getModel().oData;
		            	   var index= oList.indexOfItem(evt.getSource())
							var listItemData= IMdata[index];
							if(listItemData.Slocdesc=="WM Managed"){
							 Mob23WMshow();
							 var data= Global_MOB23Collection;
							 var wmdata= Global_MOB23Collection.results[0].NavWM.results;
							 var finalWMData= []
							for(i=0;i<wmdata.length;i++){
								if(listItemData.Sloc==wmdata.Sloc){
									finalWMData.push(wmdata[i])
									
								}
									
								
							}
							 
							 var model= new sap.ui.model.json.JSONModel(finalWMData);
							 sap.ui.getCore().byId("IdMob23WMdetailList").setModel(model)
		            	 	
							 
							 
						   
							}
		         
		         
			      },
			     
	        	    content : [ 
	        	               Ord_Table
	                ]
	                })*/
				        
		        	
		        	
		           
		      }
		 });

		
		
		var flexBox_table = new sap.m.FlexBox({ 
		//id : "MOB23-flexBox_tablelist",
		items: [ oList,
		         
		          
		          
		         ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
			
	    });
		/////////////////////////////Phone Version/////////////////////////
		 if ( g_runningOnPhone == true)
			{
			 
			 return new sap.m.Page({
					
				 id : "Mob23-FirstDetail",
					content: [
					          	oList,
					          	labeldummy1,
						          labeldummy2,
						          labeldummy3
					        
					],
					showNavButton : true,
					showScrollBar : true,
					navButtonTap:function(){  
						
						 g_MobileNavigationId = "Mob23-SecondMaster";
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMOB23Matmasdetail");
						},
				});
			}
		 else{
			 return new sap.m.Page({
				 showHeader: false,
				 enableScrolling : false,
				 showFooter: false,
				 title:"{i18n>mob23_Mat}",
					content: [
					          	oList,
					          	labeldummy1,
						          labeldummy2,
						          labeldummy3
					        
					]
				}); 
		 }
 		
	}

});