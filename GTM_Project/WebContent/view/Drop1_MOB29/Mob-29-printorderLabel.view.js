sap.ui.jsview("com.cg.gtm.view.Drop1_MOB29.Mob-29-printorderLabel", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob29-labelprinting.Mob-29-printorderLabel
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB29.Mob-29-printorderLabel";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob29-labelprinting.Mob-29-printorderLabel
	*/ 
	createContent : function(oController) {
		var lblDummy1 = new sap.m.Label({
		id : "Mob29-checkPrintFrstTime-matDocScr"
		});
		
		lblDummy1.addStyleClass("width_label");
		
		
		

	//////////////////////////////////////////////////////////////////////////////	 
		var text1 = new sap.m.Text({
		      text: "Material Doc Number *",
			  
		    }).addStyleClass("headerText");

		  oSearch = new sap.m.SearchField("idMob29search",{
		     placeholder: "Search",type :  sap.m.InputType.Tel,
			 // width : "480px",
		    //liveChange: oController.filterList
		     search : oController.searchPO,
		     maxLength : 10,
		     
		  });
		  oSearch.addStyleClass("search");
/////////////////////////////////////////////////////////////////////////////		  

				
				  
				//Define some sample data 
					var aData1 = [
						{MaterialNo: "0000011", MaterialDesc: "Consumable material1",POItem: "00010" ,PONumber:"4500000123"},
						{MaterialNo: "0000011", MaterialDesc: "Consumable material1",POItem: "00020" ,PONumber:"4500000123"}
						
						
						];
					   var btnAll  = new sap.m.Link(
				    			{
				    				id : "",
				    			   // src: "img/ico_selectall_30.png",
				    				text : "All",
				    			    press: function () {
				    			    	oController.selectAll_mob29();
				    			      },
				    			  }).addStyleClass("flex");
				    			
				    			var btnNone = new sap.m.Link(
				    					{
				    						id : "",
				    					   // src: "img/ico_selectall_30.png",
				    						text : "None",
				    					    press: function () {
				    					    	oController.selectNone_29();
				    					      },
				    					  }).addStyleClass("flex");
					//Table Creation
					var table = new sap.m.List("Mob29_Table", {
						
						//mode: sap.m.ListMode.MultiSelect,
						 mode: "MultiSelect",
					     // rememberSelections : false,
					      // includeItemInSelection: false,
						   selectionChange : oController.printSel,
					       
			            columns : [new sap.m.Column({
												       	
			              header : new sap.m.Label({text : "Search Results:"}) ,
			                                        
			              }),
			                new sap.m.Column({
			             header : new sap.m.Label({ text : "Copies" })  }),
			             
			            ],
					 items: {
			                path: "/modelData",
			                template: new sap.m.ColumnListItem({
			                id : "Mob29_ColumnList",
			               // selected : true,
			                //press:  oController.mob30matselect,
			               // type : "Active",
			                cells : [ 
					                  new sap.m.Text("Mob29_MaterialNo", {
					                	  text : "Material:{MaterialNo},\nMaterialDescription:{MaterialDesc},\nLineItem: {MaterialDocItem},\nQuantity:{Quantity},\nUoM:{UOM}",
					            wrapping: true
					        }),
					        new sap.m.Input({
					        	id:"Mob29_copies_field",
					        	type :sap.m.InputType.Tel,
					        	 placeholder: 'Enter Number of copies',
					        	change : function(oEvent)
					        	{
					        		var id = oEvent.mParameters.id;
					        		//field_numeric_validation(sap.ui.getCore().byId(id));//go to string utility  
					        	
					        		var tfValue = sap.ui.getCore().byId(id).getValue().trim();
					     			var myInteger = (/^-?\d*(\.\d+)?$/);
					        		var newval = tfValue.substr(0,(tfValue.length -1));
					        		if( !tfValue.match(myInteger) )
					        		{
					        		sap.m.MessageBox.show("Enter numeric values",sap.m.MessageBox.Icon.ERROR,"Error");
					        		sap.ui.getCore().byId(id).setValue("");
					        		
					        		return;
					        		}
	                                else if (tfValue < 0)
					        			{
					        			sap.m.MessageBox.show("negative values not allowed for this Field",sap.m.MessageBox.Icon.ERROR,"Error");
					        			
					        			return;
					        			}
					        	   else  
					        	 	  {
					        		   sap.ui.getCore().byId(id).setValueState(sap.ui.core.ValueState.None);
					        	 	  }
					        		
					        		
					        		
					        		
					        		
					        	
					        	}
					        })
					       
					        
					       
					        ]
					       
						
			                })
			            }
			       }).addStyleClass("paddingBottom");
					
					
					
					
					
					

                 /*   var oModel2 = new sap.ui.model.json.JSONModel();
 				
					oModel2.setData({modelData: aData1});
					table.setModel(oModel2);*/
					
									  
				  
				  
		////////////////////////////////////////////////////////////////////////////////////	  

				  //Print image viewer 
				  /*var printImage = new sap.m.Image({
					 id : "idMob29printImage1",
					 src : "img/PrintImage1.PNG",
					 width : "90%",
					 height : "90%"
				  });*/
				  
				     var printImage; 
					 if( sap.ui.getCore().byId("Mob29-checkPrintFrstTime-matDocScr").getText() == 1)
					 {
					 printImage = new sap.m.Image({
						 id : "idMob29printImage1",
						// src : "img/PrintImage1.PNG",
						 width : "90%",
						 height : "90%"
					  });
					 printImage.setSrc("img/PrintImage1.PNG");
					 
					 }
				 else
					 {
					 printImage = new sap.m.Text({
						 //id : "idMob29printImage",
						 text : "Do you wish to print this page?"
						// src : "img/PrintImage1.PNG",
						// width : "90%",
						// height : "90%"
					  });
				
					 
					 }
				  
				  
				  
				 
				  
				  
				  var leftButton_b = new sap.m.Button({
					  text : "No",
					  press : function(){
						  dialogWindow.close();
					  }
				  });
				  var RightButton_b = new sap.m.Button({
					  text : "Yes",
					  press : function(){
						  dialogWindow.close();
							debugger;
			            	var valid= true;
			            	var items=sap.ui.getCore().byId("Mob29_Table").getSelectedItems();
			            	if(items.length==0){
			            		valid=false;
			            		sap.m.MessageBox.show(
		 								"Please select at least 1 line Item",
		 						sap.m.MessageBox.Icon.ERROR,"Error");
			            		
			            	}
			            	else{
			            		valid = true;
			            		PrintLabelToServicePO();
			            	}
						  
						  
					  }
				  });
				  
				  var dialogWindow = new sap.m.Dialog({
					  leftButton : leftButton_b,
					  rightButton: RightButton_b,
					  content : printImage,
					  width : "90%"
					
				  }); 
				  
		
		 
	
if( g_runningOnPhone == true)
	{
	oSearch.setWidth("100%");
	


////////////////////////////////////////////////////////////
	 var main = new sap.m.FlexBox({
			items: [
                 
                //  oSearch,
                //  lblDummy1,
                  text1,
                  oSearch,
                  table,
                  
                  
                  
                 // oLayout
                 /* hBox,
                  lblDummy1,
                  hBox1,
                  lblDummy1,
                  hBox2,
                  lblDummy1,
                  hBox3,
                  lblDummy1*/

],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Center"
		}).addStyleClass("fluxBoxAllignment");
	}
else{
	oSearch.setWidth("480px");
	table.setWidth("480px");
	 var main = new sap.m.FlexBox({
			items: [
                 text1,
                 oSearch,
                 lblDummy1,
                 table
                 /* hBox,
                  lblDummy1,
                  hBox1,
                  lblDummy1,
                  hBox2,
                  lblDummy1,
                  hBox3,
                  lblDummy1*/

],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Center"
		}).addStyleClass("fluxBoxAllignment");
     }
		
 		return new sap.m.Page({
           
 		    
 			id : "Mob29-ThirdScreen-BackNavButton",
			title: "Print Material Labels for Material Document",
			content: [
			          main
			
			],
			showNavButton: true,
			enableScrolling: true,
            navButtonTap:function(){  
            	           g_MobileNavigationId = "Mob29-BackNavButton";
                           var app = sap.ui.getCore().byId("myApp");  
                           app.to("idMOB29LabelPrintingView");  
                           sap.ui.getCore().byId("idMob29search").setValue("");
                           
                           var aData1 = [];
              			   var oModel2 = new sap.ui.model.json.JSONModel();
              			   oModel2.setData({modelData: aData1});
              			   sap.ui.getCore().byId("Mob29_Table").setModel(oModel2);
              			   
              			   
                           
                          // sap.ui.getCore().byId("idMob29search").setPlaceholder("Search")
            } ,
			footer: new sap.m.Bar({
		        contentRight: [
		         /* new sap.m.Button({
		            text: "Back",
		            icon: "sap-icon://sys-back" ,
		            press : function ()
		            {
		            var app = sap.ui.getCore().byId("myApp");
		            app.to("idMOB29LabelPrintingView")
		            }
		            
		          }),*/
		          new sap.m.Button({
			            text: "Print",
			            icon: "sap-icon://print",
			            press : function(){
			            	var searchText = 
			            		sap.ui.getCore().byId("idMob29search").getValue();
			            		
			            		if( searchText == "")
			            			{
			            			sap.m.MessageBox.show("Please Enter Material Doc Number"+ " " +" "+" ",
			            					sap.m.MessageBox.Icon.ERROR,"Error");
			            			
			            			sap.ui.getCore().byId("idMob29search").setValue("");
			            			}
			            		else
			            			{
			            			dialogWindow.open();
			            			}
			            	 
			            }
			          })
		        ]
			})
 		
		});
	}

});