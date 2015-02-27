		sap.ui.jsview("com.cg.gtm.view.Drop2_MOB28.MOB28MasterPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB28.MOB28MasterPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB28.MOB28MasterPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB28.MOB28MasterPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var mob28masvflex = new sap.m.VBox();
		
		var lblPlant = new sap.m.Label({
			text: "Plant"
				}).addStyleClass("paddingTopandfontweight");
		
		var defPlant = "";
		if (null != defaultPlantName && defaultPlantName != undefined )
			{
			defPlant = defaultPlantName;
			}
	    var textPlant = new sap.m.Text("inputPlantMOB28",
	    		{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		     text: defPlant,    	    		   
		  }).addStyleClass("matsearch");
	    
	    
	    var lblWarehouse = new sap.m.Label({
			text: "Warehouse"
				}).addStyleClass("paddingTopandfontweight");
		
		/*var defPlant = "";
		if (null != defaultPlantName && defaultPlantName != undefined )
			{
			defPlant = defaultPlantName;
			}*/
	    var textWarehouse = new sap.m.Text("inputWHMOB28",
	    		{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		     text: "Swansea",    	    		   
		  }).addStyleClass("matsearch");
		
		
		var movType = new sap.m.Label({
			text: "{i18n>mob24_movtype}"
				}).addStyleClass("paddingTopandfontweight");
		
		
		var oItemTemplate = new sap.ui.core.Item({  
            key : "{key}",
      	     text : "{text}"  
      	 }); 
		 
		var movypeMOB28 = new sap.m.Select("ddmovtypeMOB28", {
			width:"200px",
			items: {
	      	path : "/itemsMovtype",  
			    template : oItemTemplate  
	         },
	         change : function()
	         {	
	        	 gValMovType = this.getSelectedKey(); 	
	         }
   });
		
	   var matNumLbl = new sap.m.Label({
		   id : "lbl_materialmob28",
			text: "Material"
				}).addStyleClass("paddingTopandfontweight");  
		
	   var ip_matNumLbl = new sap.m.Input({
			id : "ip_matNumMOB28",
			 maxLength : 6,
			type :sap.m.InputType.Tel,
			liveChange : function()
			{
				//backNavMat =  "MOB17D";
				//validateMATNUMAccess = "MOB17";
				if ( sap.ui.getCore().byId("ip_matNumMOB28").getValue().length == 6)
					{
					
					validateMATNUMAccess="MOB28";
					sap.ui.getCore().byId("idMob24MaterialSearch").getController().
					validateMatNum(sap.ui.getCore().byId("ip_matNumMOB28").getValue());
					$("#idMob28MatDetPage").hide();
					 $("#idMob28MatListPage").hide();
					 sap.ui.getCore().byId("Mob28Save").setVisible(false);
					if(g_isMOB17Ser==true){
						
						this.setValue("");
					}
					}
				
			},
			showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  oController.openMatSearchMOB28();
		      
		      },
			//width: "50%"
		});
	   
	   var sto_binlbl = new sap.m.Label({
		   id : "lbl_sto_bin",
		   text: "Storage Bin"
				}).addStyleClass("paddingTopandfontweight");  
		
	  var ip_sto_bin = new sap.m.Input({
			id : "ip_sto_bin",
			//width: "50%",
			change : function()
			{/*		
			    if (ip_sto_bin.getValue() != "" && ip_sto_bin.getValue() != " ")	
			    	{
			    	sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(true);
			    	
			    	}
			    else
			    	{
			    	sap.ui.getCore().byId("ddstotypeMOB28").setEnabled(false);
			    	}
			*/}
		});
	   
	  
	  var stoType = new sap.m.Label({
			text: "Storage Type"
				}).addStyleClass("paddingTopandfontweight");
		
		
		var oItemTemplateStoType = new sap.ui.core.Item({  
          key : "{key}",
    	     text : "{text}"  
    	 }); 
		 
		var stoypeMOB28 = new sap.m.Select("ddstotypeMOB28", {
			width:"200px",
			enabled : true ,
			items: {
	      	path : "/itemsStotype",  
			    template : oItemTemplateStoType  
	         },
	         change : function()
	         {	
	        	 gValStoType = this.getSelectedKey(); 	
	         }
 });
		

		  matScanMOB28 =  new sap.m.Image({
		  id : "matScanMOB28" ,
		    src: "icon/ico_rect_scanbarcode.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L2 M3 S12",
		    }),
		    press: function () {
		    	varScan = "MOB28";
		    	MOB28SCANVAL =  "MAT";
		    	//globalMob15Detail = "Q1" ;
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();}
		  });
		  matScanMOB28.addStyleClass("matScan");
		//  matScanMOB28.addStyleClass("scanPadding");
		  

		  binScanMOB28 =  new sap.m.Image({
			  id : "binScanMOB28" ,
			    src: "icon/ico_rect_scanbarcode.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: function () {
			    	varScan = "MOB28";
			    	MOB28SCANVAL =  "BIN";
			    	globalMob15Detail = "Q1" ;
			    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();},
			  });
		  binScanMOB28.addStyleClass("matScan");
		 
		  
		  var MatScanRowMOB28 = new sap.m.FlexBox({
				items: [ ip_matNumLbl, matScanMOB28 ],
				direction:"Row",
				justifyContent:"Start",//Contents would be placed in the begin
				alignItems:"Start"});
		 
			var BinScanRowMOB28 = new sap.m.FlexBox({
			items: [ ip_sto_bin, binScanMOB28 ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"});
		  
	  		mob28masvflex.addItem(movType);
	  		mob28masvflex.addItem(movypeMOB28);
			mob28masvflex.addItem(lblPlant);
			mob28masvflex.addItem(textPlant);
			mob28masvflex.addItem(lblWarehouse);
			mob28masvflex.addItem(textWarehouse);
			mob28masvflex.addItem(matNumLbl);
			if ( g_runningInTablet == false && g_runningOnPhone == false)
			{
			mob28masvflex.addItem(ip_matNumLbl);
			}
			else
				{
				mob28masvflex.addItem(MatScanRowMOB28);
			
				}
			
			mob28masvflex.addItem(stoType);
			mob28masvflex.addItem(stoypeMOB28);
			
			
			mob28masvflex.addItem(sto_binlbl);
			if ( g_runningInTablet == false && g_runningOnPhone == false)
			{
				mob28masvflex.addItem(ip_sto_bin);
			}
			else
				{
				mob28masvflex.addItem(BinScanRowMOB28);
			
				}
			
			
			   var showButton = new sap.m.Button({
		    	   text: "Show",
		    	   icon : "sap-icon://show",
		      press: function () {	 
		    	  $("#idMob28MatDetPage").hide();
		    	  var valid= true;
		    	  
		    	  
		    	  if(!sap.ui.getCore().byId("ip_matNumMOB28").getValue()&&!sap.ui.getCore().byId("ddstotypeMOB28").getSelectedKey()
		    			  
		    			  && !sap.ui.getCore().byId("ip_sto_bin").getValue()){
		    		  sap.m.MessageBox.show("Please enter Material/Storage Type", 
								sap.m.MessageBox.Icon.ERROR,
											"Error"
										);
		    		  valid= false;
		    		  
		    	  }
		    	  
		    	  else if(sap.ui.getCore().byId("ip_sto_bin").getValue() && !sap.ui.getCore().byId("ddstotypeMOB28").getSelectedKey()){
		    		  
		    		  sap.m.MessageBox.show("Please enter Storage Type", 
								sap.m.MessageBox.Icon.ERROR,
											"Error"
										);
		    		  valid= false;
		    	  }
		    	  else if(!sap.ui.getCore().byId("ip_sto_bin").getValue() && sap.ui.getCore().byId("ddstotypeMOB28").getSelectedKey()){
		    		  
		    		  sap.m.MessageBox.show("Please enter Storage Bin", 
								sap.m.MessageBox.Icon.ERROR,
											"Error"
										);
		    		  valid= false;
		    	  }
		    	  else
		    		  {
		    	  
		    	  if ( g_isMOB17Inv == true)
		    		  {

		    		  
		    		  sap.m.MessageBox.show("Invalid material : Process cannot be executed", 
								sap.m.MessageBox.Icon.ERROR,
											"Error"
										);
		    		  
		    		  
		    		  }
		    	  else if ( g_isMOB17Ser ==   true)
		    		  {
		    		  
		    		  sap.m.MessageBox.show("Serialized material : Process cannot be executed", 
								sap.m.MessageBox.Icon.ERROR,
											"Error"
										);
		    		  
		    		  }
		    	  else if(valid)
		    		  {
		    		  oController.showDetailsMOB28();
		    		  
		    		  
		    		  
		    		 
		    		  }
		    		  }
				 	    	
		      }
		    });
		var oForm = new sap.ui.layout.form.SimpleForm({
		    editable: true,
	    layout: "ResponsiveGridLayout",
		labelSpanL:3,
		labelSpanM:3,
		columnsL:1,
		columnsM:1,
		    content:[
		             mob28masvflex
		            
		    ]
		});
		
		if ( g_runningOnPhone == true)
		{

	 		return new sap.m.Page({
				title: "Posting Change",
				content: [
				          oForm
				],
			/*	headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),*/
				
				 enableScrolling: true,
					
					//showNavButton: false,
					showFooter: true,
					showHeader: false,
					footer: new sap.m.Bar({
				        contentRight: [
				                       	showButton
				                       ]
					})
			});
			
		}
		else
			{
			
 		return new sap.m.Page({
			title: "Posting Change",
			content: [
			          oForm
			],
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
			
			 enableScrolling: false,
				
				//showNavButton: false,
				showFooter: true,
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       	showButton
			                       ]
				}).addStyleClass("footer")
		});
		}
	}

});