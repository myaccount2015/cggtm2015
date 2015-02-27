sap.ui.jsview("com.cg.gtm.view.Mob26TwoScrOrderView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob26TwoScrOrderView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob26TwoScrOrderView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob26TwoScrOrderView
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*	var Ord_Table = new sap.m.Table({
			id : "Mob26-Ord_Table",
			columns :       [
	             new sap.m.Column({
				header : new sap.m.Label({text : "Order Details"}) ,
				}),
	             new sap.m.Column({
	              header : new sap.m.Label({ text : "" }) 
	              }),
	              ],
	             items : [
	                          new sap.m.ColumnListItem({
	                           // path : "{LineItems}",
	                            selected : true,
	                            type : "Active",
	                            press: function(){
	                     
	                    		},
	                            cells : [
	                            new sap.m.Text({
	                            text : "Material \n Description \n Batch \n Qty \n Stk Category \n Cust Stock \n Project Stock"
	                            }).addStyleClass("Mob26TabFont"),
	                            new sap.m.Text({
	                            text : "86754321 \n heavy water supply \n 12545546 \n 12 \n B \n C \n Q"
	                            }).addStyleClass("Mob26TabFont"),
	                            ]})],}).addStyleClass("CSS_Table_Example");*/
		
		
		
////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		/*var leave_Table = new sap.m.List({
	
             columns: [
	                new sap.m.Column({ header: new sap.m.Label({text: "Material"}) }),
	                new sap.m.Column({ header: new sap.m.Label({text: "Des"}) }),
	            ],
	         items: {
	                //path: "/results",
	                template: new sap.m.ColumnListItem({
	               // id : "Mob20-MatDesTable-Column-List",
	                selected : true,
	                //press: oController.Mob20TabColEvent,
	                type : "Active",
	        	    cells : [ 
	        	    new sap.m.ObjectIdentifier({
	        		title : "Material \n Description",
	        	    }),
	                new sap.m.ObjectIdentifier({
	        	    title : "123456 \n heavy watwesupply"
	                }), ]
	                })
	            }
	        });
		*/
		
////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		//flex box
		
		
		
		/*
		var flex1 = new sap.m.FlexBox({ 

       	 items: [new sap.m.Label({
			text : "Material",
			
			textAlign : "Center"
			
		}).addStyleClass("borderStyle"),
		
		new sap.m.Label({
			text : "12345678",
			
			textAlign : "Center"
			
		}).addStyleClass("borderStyle"),
		
		
       	],
       	         // direction:"Column",
       	          justifyContent:"Center",//Contents would be placed in the begin
       	          alignItems:"Center"

        		});
		
		
		var flex2 = new sap.m.FlexBox({ 

	       	 items: [new sap.m.Label({
				text : "Desc",
				
				textAlign : "Center"
				
			}).addStyleClass("borderStyle"),
			
			new sap.m.Label({
				text : "dsadadwedcdfgdfdgerfgererggerger",
				
				textAlign : "Center"
				
			}).addStyleClass("borderStyle"),
			
			
	       	],
	       	        //  direction:"Column",
	       	          justifyContent:"Center",//Contents would be placed in the begin
	       	          alignItems:"Center"

	        		});
		
		var Ord_Table = new sap.m.Table({
			columns :       [
	             new sap.m.Column({
				header : new sap.m.Label({text : "Order Details"}) ,
				}),
	             new sap.m.Column({
	              header : new sap.m.Label({ text : "" }) 
	              }),
	              ],
	             items : [
	                          new sap.m.ColumnListItem({
	                           // path : "{LineItems}",
	                           // selected : ,
	                            type : "Active",
	                            press: function(){
	                     
	                    		},
	                            cells : [
	                                      
	                                     new sap.m.FlexBox({ 

	                                    	 items: [ flex1,
	                                    	          flex2,
	                                    	          ],
	                                    	          direction:"Column",
	                                    	          justifyContent:"Center",//Contents would be placed in the begin
	                                    	          alignItems:"Center"
		
	                                     		}).addStyleClass("flex-box-padding"),
	                           
	     	                                     		
	     	                                     		]
	                    		
	                          })]});
		
		
		
		
		*/
		
		
	//////////////////////////////////////////////////////////////////////////////////////////////	
		
		
	//Create a matrix layout with 2 columns
	/*var Ord_Table = new sap.ui.commons.layout.MatrixLayout({
		id : "Mob26-Mat",
		layoutFixed: true, width: '500px', columns: 2});
	    Ord_Table.setWidths('140px', '300px');



	//Create a form
	var oLabel = new sap.m.Label({text: 'Material' , textAlign : "Center"});
	var oInput = new sap.m.Label({id : "Mob26-twoScr-Mat",text: '',textAlign : "Center",wrapping : true});

	Ord_Table.createRow(oLabel, oInput);
	
	
	//Create a form
	var oLabel1 = new sap.m.Label({text: 'Description'});
	var oInput1 = new sap.m.Text({id : "Mob26-twoScr-Des" ,textAlign: "Center", text: '',width : "200px",wrapping : true});

	Ord_Table.createRow(oLabel1, oInput1);

	//Create a form
	var oLabel2 = new sap.m.Label({text: 'Batch '});
	var oInput2 = new sap.m.Label({id : "Mob26-twoScr-Batch",text: '',wrapping : true});

	Ord_Table.createRow(oLabel2, oInput2);
	
	//Create a form
	var oLabel3 = new sap.m.Label({text: 'Qty'});
	var oInput3 = new sap.m.Label({id : "Mob26-twoScr-Qty",text: '',wrapping : true});

	Ord_Table.createRow(oLabel3, oInput3);
	
	//Create a form
	var oLabel4 = new sap.m.Label({text: 'Stk Category'});
	var oInput4 = new sap.m.Label({id : "Mob26-twoScr-StkCat",text: '',wrapping : true});

	Ord_Table.createRow(oLabel4, oInput4);
	

	//Create a form
	var oLabel5 = new sap.m.Label({id:"Mob26-customerStocklbl",text: 'Proj/Cust Stk'});
	var oInput5 = new sap.m.Label({id : "Mob26-twoScr-CusStk",text: '',wrapping : true});
	

	Ord_Table.createRow(oLabel5, oInput5);
	
	//Create a form
	var oLabel6 = new sap.m.Label({id:"Mob26-projectStocklbl",text: 'Project Stock'});
	var oInput6 = new sap.m.Label({id : "Mob26-twoScr-ProStk",text: '',wrapping : true});*/

	//Ord_Table.createRow(oLabel6, oInput6);
	/***********************************************************************/
	var oLayout2 = new sap.ui.layout.form.GridLayout();

	var oForm2 = new sap.ui.layout.form.Form("Mob26-Mat",{
		layout: oLayout2,
		formContainers: [
			new sap.ui.layout.form.FormContainer("C2",{
				formElements: [
				
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text({text: "Material",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-Mat",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text({text: "Description",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-Des",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text({text: "Batch",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-Batch",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text({text: "Qty",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-Qty",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text({text: "Stk Category",layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-StkCat",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					new sap.ui.layout.form.FormElement({
						label: new sap.m.Text("Mob26-customerStocklbl",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "5"})}),
						fields: [new sap.m.Text("Mob26-twoScr-CusStk",{layoutData: new sap.ui.layout.form.GridElementData({hCells: "11"})})]
					}),
					
				]
			}),
		]
	});
	

///////////////////////////////////////////////////////////////////////////////////////////////////////////
		 
		var lblDummy = new sap.m.Label({
			text: "{i18n>DumyTxt}"
		}).addStyleClass("HideLabel");
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
	 
	 
		var lblExpDet = new sap.m.Label({
		 text : "Expected Destination Storage bin" 
	  }).addStyleClass("Mob26AllTextFont");
		
	  var txtStrBin = new sap.m.Label({
	        id : "Mob26-lblStrBin"
	  });
	  
	  var lblStrBin = new sap.m.Label({
			 text : "Storage bin to be Used" 
		  }).addStyleClass("Mob26AllTextFont");
		
	  var ipStrBin = new sap.m.Input({
		  id : "Mob26-ipStrBin"
	  });
	  
	  var scanIp = new sap.m.Image({
			src : "img/ico_rect_scanbarcode.png",
			press : function()
			{
			
			
		/*	cordova.plugins.barcodeScanner.scan(
		            function(result){
	
		            var str = result.text;//"A-01-01-01";
		         
		            sap.ui.getCore().byId("Mob26-ipStrBin").setValue(str);
                    }, 
		            function(error){
		           	sap.m.MessageBox.show("Scan failed: " + error);
		           	errorText = error;
		            });	*/
			
				varScan = "Mob26Master";
				Mob26scan = "Bin";
			sap.ui.getCore().byId("idMob24MaterialSearchInput")
			.getController().scanNow();
			
			/*	var Material = "";
			    var mainArray= [];
			    
			    var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
			cordova.plugins.barcodeScanner.scan(
		            function(result){
		            //var resArray = result.text.split("#");
		            var str = result.text;//#L:NP1001X-01-01-2
		            var res = str.split("#");
		            for( var i = 1 ; i< res.length; i++)
		            {
		            Material = res[i];
		            Material = Material.split(":");
		            Material = Material[1];
		            mainArray.push(Material);
		            }
		            var bin= mainArray[0].substring(6,mainArray[0].length);
		            sap.ui.getCore().byId("Mob26-ipStrBin").setValue(bin);
		            
		            if( g_isDebug == true)
		        	{
		        	//Service End Time
		        	var logInfo1 = getTimeStamp() +"Barcode Scan::"+str+" Finish" ;
		        	//Log file Service Start and End Time
		        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        	logFileUpdate(g_ServiceStartEndTime);
		        	}
		            
		            
		            }, 
		            function(error){
		           	sap.m.MessageBox.show("Scan failed: " + error);
		           	if( g_isDebug == true)
		        	{
		        	//Service End Time
		        	var logInfo1 = getTimeStamp() +"Barcode Scan:: Error" ;
		        	//Log file Service Start and End Time
		        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        	logFileUpdate(g_ServiceStartEndTime);
		        	}
		            });	*/
				
			}
		});
	  
	  
	  
	  if(g_runningInTablet == false && g_runningOnPhone == false )
		  {
		  scanIp.setVisible(false);
		  }
	  
	  else
		  {
		  scanIp.setVisible(true);
		  }
				
	var Hbox = new sap.m.HBox({
			width : "300px",
		    items:[
               ipStrBin,scanIp
		         ]
	        });
	
	var flexBox_table = new sap.m.FlexBox({ 
		id : "MOB26-SecScreenflexBox_table",
		items: [
		        
		        //Ord_Table,
		        oForm2
		         ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
			
	    });
	
	var flexBox = new sap.m.FlexBox({ 
		id : "MOB26-SecScreenflexBox",
		items: [ 
		         lblExpDet,
		         txtStrBin,
		         lblDummy,
		         lblDummy1,
		         lblStrBin,
		         Hbox,
		        
		         
		         
		         ],
		direction:"Column",
		justifyContent:"Start",//Contents would be placed in the begin
		alignItems:"Start"
			
	    }).addStyleClass("flex-box-padding");
		
	
	var Scrolling = new sap.m.ScrollContainer({
       // width : "500px",
       // height : "400px",
        horizontal : true,
        vertical : true,
        content : [
                   
                  // 	Ord_Table
                   flexBox_table,
		          	  ]
    });
		
	var btnBack = new sap.m.Button({
		
    	text : "Back",
    	
       	icon : "sap-icon://close-command-field",
    	press : function()
    	{
    		sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");	
    		
    	}
    });
	
	//
	if ( g_runningOnPhone == true)
	{
		return new sap.m.Page({
 			id: "Mob26-OrderDetTit",
			title: "",
			content: [
			          	 Scrolling,
			          	 flexBox,
			          	 lblDummy2,
				         lblDummy3,
				         lblDummy4,
				         lblDummy5,
				         lblDummy6,
				         lblDummy7
			          	   
			],
			enableScrolling: false,
			showFooter: true,
			showHeader: true,
			navButtonTap:function(){  
				//sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");
				
				  g_MobileNavigationId = "Mob26-BackNavButton";
				  sap.ui.getCore().byId("myApp").to("idMob26InitialScreen");
				
				
	          },
			footer: new sap.m.Bar({
				contentLeft : [btnBack],
		        contentRight: [
		                       new sap.m.Button({
		                    	  text : "Next",
		                    	  icon : "sap-icon://step",
		                    	  press : oController.SecScrNext
		                       })
		                       
		                       ]
			})
			
		});	
		
	}
	else
		{
		
		return new sap.m.Page({
 			id: "Mob26-OrderDetTit",
			title: "",
			content: [
			          	 Scrolling,
			          	 flexBox,
			          	 lblDummy2,
				         lblDummy3,
				         lblDummy4,
				         lblDummy5,
				         lblDummy6,
				         lblDummy7
			          	   
			],
			enableScrolling: false,
			showFooter: false,
			showHeader: true,
			
			
		});
		}
 		
	}

});