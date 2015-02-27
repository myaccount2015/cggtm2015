sap.ui.jsview("com.cg.gtm.view.Mob23WMdetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob23WMdetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob23WMdetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob23WMdetail
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		
					//Create a matrix layout with 2 columns
				/*	var Ord_Table = new sap.ui.commons.layout.MatrixLayout({
						id : "Mob23_WM",
						layoutFixed: true,
						
						width: '400px', 
						columns: 4});
					    Ord_Table.setWidths('5%','40%', '50%','5%');
					    
					    
					  //Dummy for Spacing
						var lbldummy1 = new sap.m.Label({text : ' '});

						var Inputdummy1 = new sap.m.Label({text :' '});

						
						
						var cell1_dummy1=  new sap.ui.commons.layout.MatrixLayoutCell({content: lbldummy1}).setHAlign("Center");
						var cell2_dummy1=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1}).setHAlign("Center");

						
						Ord_Table.createRow(cell1_dummy1,cell2_dummy1 );
						

					 //Plant
					    
					    var lblBin = new sap.m.Label("idbin" ,{"text":'Bin'});
						var InputBin = new sap.m.Label("idInputbin").bindProperty("text","Storagebin");
						
						var cell1_dummybin=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
						var cell2_bin =  new sap.ui.commons.layout.MatrixLayoutCell({content: lblBin}).setHAlign("Center").addStyleClass("cell");
						var cell3_bin =  new sap.ui.commons.layout.MatrixLayoutCell({content: InputBin}).setHAlign("Center").addStyleClass("cell");
						var cell4_dummybin=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
						
						Ord_Table.createRow(cell1_dummybin, cell2_bin,cell3_bin,cell4_dummybin);
						

					//Storage Type
						
					var lblSttype = new sap.m.Label("idsttype",{"text":'StorageType'});
					var InputSttype = new sap.m.Label("idInputsttype").bindProperty("text","Storagetype");
					
					var cell1_dummysttype=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					var cell2_sttype =  new sap.ui.commons.layout.MatrixLayoutCell({content: lblSttype}).setHAlign("Center").addStyleClass("cell");
					var cell3_sttype =  new sap.ui.commons.layout.MatrixLayoutCell({content: InputSttype}).setHAlign("Center").addStyleClass("cell");
					var cell4_dummysttype=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					
					Ord_Table.createRow(cell1_dummysttype, cell2_sttype,cell3_sttype,cell4_dummysttype);
					
					
					//Stock category
					
					var lblStcategory = new sap.m.Label("idstcategory", {"text":"Stock Category"});

					var InputStcategory = new sap.m.Label("idInputstcategory").bindProperty("text","Stckcategory");

					
					var cell1_dummystcat=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					var cell2_Stcat =  new sap.ui.commons.layout.MatrixLayoutCell({content: lblStcategory}).setHAlign("Center").addStyleClass("cell");
					var cell3_Stcat =  new sap.ui.commons.layout.MatrixLayoutCell({content: InputStcategory}).setHAlign("Center").addStyleClass("cell");
					var cell4_dummystcat=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					
					Ord_Table.createRow(cell1_dummystcat,cell2_Stcat,cell3_Stcat,cell4_dummystcat );
					
					
					//Special stock
					
					var lblSplstock = new sap.m.Label("idSplstock",{text : 'Special stock'});

					var InputSplstock = new sap.m.Label("idInputSplstock").bindProperty("text","Splstock");

					
					var cell1_dummySplstck=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					var cell2_Splstck=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblSplstock}).setHAlign("Center").addStyleClass("cell");;
					var cell3_Splstck=  new sap.ui.commons.layout.MatrixLayoutCell({content: InputSplstock}).setHAlign("Center").addStyleClass("cell");
					var cell4_dummySplstck=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					
					Ord_Table.createRow(cell1_dummySplstck,cell2_Splstck,cell3_Splstck, cell4_dummySplstck);
					
					
					//Quantity
					
					var lblQty = new sap.m.Label("idQuantity",{text : 'Quantity'});

					var InputQty = new sap.m.Label("idInputQuantiy").bindProperty("text","Avialablestock");

					
					var cell1_dummyQty=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					var cell2_Qty=  new sap.ui.commons.layout.MatrixLayoutCell({content: lblQty}).setHAlign("Center").addStyleClass("cell");;
					var cell3_Qty=  new sap.ui.commons.layout.MatrixLayoutCell({content: InputQty}).setHAlign("Center").addStyleClass("cell");
					var cell4_dummyQty=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy1});
					
					Ord_Table.createRow(cell1_dummyQty,cell2_Qty,cell3_Qty, cell4_dummyQty);
					
					//Dummy 
					var lbldummy = new sap.m.Label({text : ' '});

					var Inputdummy = new sap.m.Label({text :' '});

					
					
					var cell1_dummy=  new sap.ui.commons.layout.MatrixLayoutCell({content: lbldummy}).setHAlign("Center");
					var cell2_dummy=  new sap.ui.commons.layout.MatrixLayoutCell({content: Inputdummy}).setHAlign("Center");

					
					Ord_Table.createRow(cell1_dummy,cell2_dummy );
					
/////////////////////////////************************************************//////////////////
					
		/*			var lblBin = new sap.m.Label("" ,{"text":'Bin'});
					var InputBin = new sap.m.Label("").bindProperty("text","Storagebin");
					var lblSttype = new sap.m.Label("",{"text":'StorageType'});
					var InputSttype = new sap.m.Label("").bindProperty("text","Storagetype");
					var lblStcategory = new sap.m.Label("", {"text":"Stock Category"});
				
					var InputStcategory = new sap.m.Label("").bindProperty("text","Stckcategory");
				
				
					var lblSplstock = new sap.m.Label("",{text : 'Special stock'});

					var InputSplstock = new sap.m.Label("").bindProperty("text","Splstock");

					var lblQty = new sap.m.Label("",{text : 'Quantity'});

					var InputQty = new sap.m.Label("").bindProperty("text","Avialablestock");

					var vLayout1= new sap.ui.layout.VerticalLayout("",{
					content:[lblBin,lblSttype,lblStcategory,lblSplstock,lblQty]
				
					});
				
					var vLayout2= new sap.ui.layout.VerticalLayout({
					content:[InputBin,InputSttype,InputStcategory,InputSplstock,InputQty]
					
					}).addStyleClass("MOB23_Padding2REm");
				
				
				var hLayout= new sap.ui.layout.HorizontalLayout({
					//width:"400px",
					content:[vLayout1,vLayout2]
				}).addStyleClass("MOB23_Padding1REm");*/
					
				var oLayout2 = new sap.ui.layout.form.GridLayout();

				var oForm2 = new sap.ui.layout.form.Form("Mob23_WM",{
					layout: oLayout2,
					formContainers: [
						new sap.ui.layout.form.FormContainer("",{
							formElements: [
							
								
								new sap.ui.layout.form.FormElement({
									label: new sap.m.Text({text: "Bin",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
									fields: [new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})}).bindProperty("text","Storagebin")]
								}),
								new sap.ui.layout.form.FormElement({
									label: new sap.m.Text({text: "Storage Type",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
									fields: [new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})}).bindProperty("text","Storagetype")]
								}),
								new sap.ui.layout.form.FormElement({
									label: new sap.m.Text({text: "Stock Category",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
									fields: [new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})}).bindProperty("text","Stckcategory")]
								}),
								new sap.ui.layout.form.FormElement({
									label: new sap.m.Text({text:"Special stock",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
									fields: [new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})}).bindProperty("text","Splstock")]
								}),
								new sap.ui.layout.form.FormElement({
									label: new sap.m.Text({text:"Quantity",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
									fields: [new sap.m.Text({layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})}).bindProperty("text","Avialablestock")]
								}),
							]
						}),
					]
				}).addStyleClass("MOB23_Margin1rem");
					//List Item
					
					var oList = new sap.m.List("IdMob23WMdetailList", {
						width:"100%",
					      mode: sap.m.ListMode.SingleSelectMaster,
					     // includeItemInSelection: true,
					     // select : oController.matSel,
					      rememberSelections : false,
					      visible : false,
					      items: {
				                path: "/",
				                template: new sap.m.CustomListItem({
				              //  id : "Mob20-MatDesTable-Column-List",
				              //  selected : true,
				                	//width:"100%",
				             //   press: oController.Mob20TabColEvent,
				                type : "Active",
				        	    content : [ 
				        	               oForm2
				                ]
				                })
					      }
					 }).addStyleClass("paddingBottom_tree");
					/*var model=new sap.ui.model.json.JSONModel(data);
					oList.setModel(model);*/
					
					/*oList.addItem(new sap.m.CustomListItem({
				              //  id : "Mob20-MatDesTable-Column-List",
				                selected : true,
				             //   press: oController.Mob20TabColEvent,
				                type : "Active",
				        	    content : [ 
				        	               Ord_Table
				                ]
				                }))*/
					
					
					
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
					
					
					var oSearch = new sap.m.SearchField("idsearch_WM",{
					    placeholder: "Search Bin",
					    liveChange: oController.filterList_WMlist,
					    visisble : false
					  });
					
					var flexBox_table = new sap.m.FlexBox({ 
					id : "MOB23-flexBox_tableWM",
					items: [ oSearch,
					         oList,
					         labeldummy1,
					          labeldummy2,
					          labeldummy3
					         ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
						
				    });
					
					
					 if ( g_runningOnPhone == true)
         			{
						 return new sap.m.Page({
							 title:"{i18n>mob23_WM}",	
							 id : "Mob23-SecondDetail",
								content: [
								          flexBox_table,
								          
								        
								],
								showNavButton : true,
								showScrollBar : true,
								navButtonTap:function(){  
									
									 g_MobileNavigationId = "Mob23-FirstDetail";
									 //alert("inside third screen")
									 var deselect = sap.ui.getCore().byId("idList_Mob23_Stock");
										deselect.removeSelections();
										
									var app = sap.ui.getCore().byId("myApp"); 
									app.to("idMOB23Detail");
									},
							}); 
      			}
					 else{
						 return new sap.m.Page({
							 showHeader: false,
							 title:"{i18n>mob23_WM}",
							 enableScrolling: true,
							 showFooter: false,
								content: [
								          flexBox_table,
								          
								        
								]
							}); 
					 }
			 		
				}

			});