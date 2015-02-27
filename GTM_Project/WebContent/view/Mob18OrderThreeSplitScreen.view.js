sap.ui.jsview("com.cg.gtm.view.Mob18OrderThreeSplitScreen", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18OrderThreeSplitScreen
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18OrderThreeSplitScreen";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18OrderThreeSplitScreen
	*/ 
	createContent : function(oController) {
		
		//var detailPage1 = sap.ui.view({id:"idMob18Orderpage", viewName:"com.cg.gtm.view.Mob18OrderItems", type:sap.ui.core.mvc.ViewType.JS});	
	     //var detailPage2 = sap.ui.view({id:"idMob18Orderdetpage", viewName:"com.cg.gtm.view.Mob18OrderBearingCase", type:sap.ui.core.mvc.ViewType.JS});
		var Mob18Orderpage = sap.ui.getCore().byId("idMob18Orderpage");
		var Mob18Orderpage2 = sap.ui.getCore().byId("idMob18Orderdetpage"); 

	 //  var Mob18Orderdetpage = sap.ui.getCore().byId("idMob18Orderdetpage"); 
	
		
		
		
		
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
			oLayout.createRow(Mob18Orderpage,Mob18Orderpage2);
			*/
			
			/*Mob18Orderpage.setWidth(width1);
			Mob18Orderpage2.setWidth(width2);*/
			Mob18Orderpage.setHeight("815px");
			Mob18Orderpage2.setHeight("815px");
			
			
			/*var oLayout= new sap.ui.layout.HorizontalLayout({
				content:[Mob18Orderpage,Mob18Orderpage2]
			});*/
			
			
			if( g_runningInTablet == false && g_runningOnPhone == false)
				{
				var nonResize = new sap.ui.layout.SplitterLayoutData({
					resizable : false,
				});
				Mob18Orderpage.setLayoutData(nonResize);
				}
			
			var oLayout = new sap.ui.layout.Splitter({
				id: "MOB18Splitter-Order",
				contentAreas : [Mob18Orderpage,Mob18Orderpage2]
			});
			
			var btnAdd = new sap.m.Button({
	        	id : "idAddMaterial_First",
				 text : "{i18n>Mob18_Add}",
				 icon: "sap-icon://add", 
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	alert("inside Add Material");
		           // 	oController.check();
		            	 backNavMat = "Mob18";
		            	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
			        	  app.toMaster("idMOB18Matmas");
			        	  
			        	  sap.ui.getCore().byId("idAddMaterial_First").setVisible(false);
		            	
		            }
		           
			});
			
			
			var btnScan = new sap.m.Button("idscan_order",{
	        	//id : "idshow",
				 text : "Add Serial",
				// icon: "img/ico_rect_scanbarcode.png",
				 visible : false,
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		             	oController.scan_order();
		            	
		            }
		           
			});
			
			/* if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {*/
			var btnSerialscan_order = new sap.m.Button("idscanserial_order",{
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
					    var MatInput = sap.ui.getCore().byId("inputSerial_order");
					    MatInput.setValue(scannerRes[0].Material);
			            })
		          
		            }
		           
			});
			 if ( g_runningInTablet == true || g_runningOnPhone == true)
			  {
				 btnSerialscan_order.setVisible(true)
				 
			  }
			var btnFinish = new sap.m.Button({
	        	id : "idshow_order",
				 text : "{i18n>Mob18_Finish}",
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		            	debugger;
		            	var valid= true;
		            	var items=sap.ui.getCore().byId("idtable_Order").getSelectedItems();
		            	if(items.length==0){
		            		valid=false;
		            		sap.m.MessageBox.show(
	 								"Please select at lease 1 line Item",
	 						sap.m.MessageBox.Icon.ERROR,"Error");
		            		
		            	}
	            	if(sap.ui.getCore().byId("MvtType").getSelectedKey().length!=3){
	            		valid= false;
	            		sap.m.MessageBox.show(
 								"Please select a valid Movement Type",
 						sap.m.MessageBox.Icon.ERROR,"Error");
	            	}
	            	if(valid){
	            	
	            	
	            	
	            	for(i=0;i<items.length;i++){
						if(items[i].getSecondStatus().getState()=="Warning"){
							valid=false;

						}

	            	}
					if(!valid)
	            	sap.m.MessageBox.show(
 								"Z Item category items cannot be issued. Please unselect",
 						sap.m.MessageBox.Icon.ERROR,"Error");
	            	}
	            	if(valid){
	            	oController.finish();
	            	}
	            	}
		           
			});
			
			//Back Button
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
						contentRight: [btnSerialscan_order,btnScan, btnFinish],
						
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
						showFooter: true,	
						showHeader : false,
						footer: new sap.m.Bar({
							contentRight: [btnScan,btnSerialscan_order, btnFinish],
							
							contentMiddle : [
					                      
							                // btnAdd    
					                       ]
						}).addStyleClass("footer"),
					}); 
			  }
 	
	}
	
});