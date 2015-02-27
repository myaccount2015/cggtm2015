sap.ui.jsview("com.cg.gtm.view.Mob18ThreeSplitScrap", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18ThreeSplitScrap
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18ThreeSplitScrap";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18ThreeSplitScrap
	*/ 
	createContent : function(oController) {
		
		var Mob18Scrappage = sap.ui.getCore().byId("idMob18Scrappage");
		var Mob18Scrappage2 = sap.ui.getCore().byId("idMob18Scrapdetpage"); 

	 //  var Mob18Orderdetpage = sap.ui.getCore().byId("idMob18Orderdetpage"); 
	
		/////////////////////////////////Mobile////////////////////////////////////////////////////////////////////
		/*if(jQuery.device.is.phone == true)
			{
			sap.ui.getCore().byId("myApp").addPage(Mob18Scrappage).addPage(Mob18Scrappage2);
			
			var oLayout = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : true,
				

				});
			oLayout.createRow(Mob18Scrappage);
			
			
			return new sap.m.Page({
				id:"Mob18-firstScreen",
				title: "",
				content: [
				          oLayout
				],
				enableScrolling: false,
				
				showNavButton: true,
				showFooter: true,
				showHeader: true,
				 navButtonTap:function(){  
						sap.ui.getCore().byId("myApp").to("idMOB18Scrapmas");
	              },
	             
	              
				footer: new sap.m.Bar({
			        contentRight: [
               
			                       ]
				}).addStyleClass("footer")
			});
			
			}*/
//////////////////////////Tablet and Desktop////////////////////////////////////////////////////////	
	
			this.setHeight("100%");
			//Divide the width to set three split screen
			/*var width1 = ((screen.width)/2.5) + "px";
			var width2 = ((screen.width)/3) + "px";
			var height1 = width1.height + "px";*/
			
			// create a simple matrix layout with given sizes
			/*var oLayout = new sap.ui.commons.layout.MatrixLayout({
				layoutFixed : true,
				columns : 2,
				widths : [ width1, width2],
				height : "815px"

				});
			oLayout.createRow(Mob18Scrappage,Mob18Scrappage2);*/
			/*Mob18Scrappage.setWidth(width1);
			Mob18Scrappage2.setWidth(width2);*/
			Mob18Scrappage.setHeight("815px");
			Mob18Scrappage2.setHeight("815px");
			
			
			/*var oLayout= new sap.ui.layout.HorizontalLayout({
				content:[Mob18Scrappage,Mob18Scrappage2]
			});*/
			
			
			
			if( g_runningInTablet == false && g_runningOnPhone == false)
				{
				var nonResize = new sap.ui.layout.SplitterLayoutData({
					resizable : false,
				});
				Mob18Scrappage.setLayoutData(nonResize);
				
				}

			
			
			var oLayout = new sap.ui.layout.Splitter({
				id: "MOB18Splitter-Scrap",
				contentAreas : [Mob18Scrappage,Mob18Scrappage2]
			});
			
			var btnAdd = new sap.m.Button({
	        	id : "idAddMaterial_Scrap",
				 text : "{i18n>Mob18_Add}",
				 icon: "sap-icon://add", 
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	
		            	backNavMat = "Mob18_matback";
		            	
		            	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
			        	  app.toMaster("idMOB18Matmas");
			        	  
			        	  sap.ui.getCore().byId("idAddMaterial_Scrap").setVisible(false);
			        	
			        	 // sap.ui.getCore().byId("idAddMaterial_second").setVisible(true);
		            	
		            }
		           
			});

			var btnStock = new sap.m.Button({
	        	id : "idStock_Scrap",
				 text : "{i18n>Mob18_Stock}",
				 icon : "icon/ico_stockissue.png",
				// icon: "sap-icon://add", 
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	g_backstock = "Mob18Scrap";
		            	//alert("inside stock");
		            	
		            	oController.Mo23nav();
		            	
		            	var app = sap.ui.getCore().byId("myApp");  
				        app.to("idMob23InitialScreen"); 
				        
				        var app = sap.ui.getCore().byId("idMOB23SplitApp");  
    	   	        app.toMaster("idMOB23Matmasdetail");
    	   	 
    	   	        
    	   	     sap.ui.getCore().byId("idsearch_WM").setVisible(false);
       			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false); 
       			 sap.ui.getCore().byId("idchange").setVisible(false);
		            	
		            }
		           
			});
			var btnSerialscan = new sap.m.Button("idscanserial",{
	        	//id : "idshow",
				visible: false,
				 text : "{i18n>Mob18_Scan}",
				 icon: "img/ico_rect_scanbarcode.png",
				// icon: "img/ico_rect_scanbarcode.png",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		        
		            	 /*sap.m.MessageBox.show("Items are scanned",
		    					 sap.m.MessageBox.Icon.ERROR,
		    						"Error"
		    		
		    					);*/
		            
		            	var jsonScanResult = ScannerOut_M_S_E_B();//    .scanMaterials[0];
						jsonScanResult.done(function(results){
					    var scannerRes = results.scanMaterials;
					    var MatInput = sap.ui.getCore().byId("inputSerial_scrap");
					    MatInput.setValue(scannerRes[0].Material);
			            })
		          
		            }
		           
			});
			 if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
				 btnSerialscan.setVisible(true)
			  }
			
			var btnScan = new sap.m.Button("idscan",{
	        	//id : "idshow",
				 text : "Add Serial",
				 icon: "sap-icon://add", 
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	oController.scan();	
		            	 /*sap.m.MessageBox.show("Items are scanned",
		    					 sap.m.MessageBox.Icon.ERROR,
		    						"Error"
		    		
		    					);*/
		           
		           
					
		           
		            }
		           
			});
			var btnFinish = new sap.m.Button({
	        	//id : "idshow",
				 text : "{i18n>Mob18_Finish}",
				 icon: "sap-icon://complete",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	oController.Mob18Complete();
		            	 
		            	
		            }
		           
			});
			
			  if(g_runningOnPhone == true)
		{
        	return new sap.m.Page({
			//title: "Three Split",
			content: [
			          oLayout
			],
			showHeader : false,
			showFooter: true,	
			footer: new sap.m.Bar({
				contentRight: [btnSerialscan,btnScan, btnFinish],
				
				contentMiddle : [
				                 btnStock,
				               //  btnAdd    
		                       ]
			}).addStyleClass("footer"),
		});
		}
		else{
		return new sap.m.Page({
			//title: "Three Split",
			content: [
			          oLayout
			],
			showHeader : false,
			showFooter: true,	
			footer: new sap.m.Bar({
				contentRight: [btnScan,btnSerialscan, btnFinish],
				
				contentMiddle : [
				                 btnStock,
				               //  btnAdd    
		                       ]
			}).addStyleClass("footer"),
		});	
		}
 		
	}

});
 		