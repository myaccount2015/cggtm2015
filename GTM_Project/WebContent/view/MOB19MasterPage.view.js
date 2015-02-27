sap.ui.jsview("com.cg.gtm.view.MOB19MasterPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB19MasterPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB19MasterPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB19MasterPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var mob19masvflex = new sap.m.VBox();
		var lblPlant = new sap.m.Label({
			text: "Plant"
				}).addStyleClass("paddingTopandfontweight");
		
		var defPlant = "";
		if (null != defaultPlantName && defaultPlantName != undefined )
			{
			defPlant = defaultPlantName;
			}
	    var inputPlant = new sap.m.Input("inputPlantMOB19",
	    		{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		     value: defPlant,    	    
		     showValueHelp: true,
		     valueHelpRequest: function (evt) {
		     globalPlantSearchFrom = "MOB19";
		    // sap.ui.getCore().byId("idCommonPlantSearch").getController().getPlantList();
		     getPlantList();
		     if ( g_runningOnPhone == true)
				{
					var app = sap.ui.getCore().byId("myApp"); 
					var idCommonPlantSearch = sap.ui.getCore().byId("idCommonPlantSearch");  
					app.to(idCommonPlantSearch);
				}else
					{
		     var app = sap.ui.getCore().byId("idMOB19SplitApp");  
		     var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
	    	  app.addMasterPage(commonPlantSearchPage);
	         app.toMaster(commonPlantSearchPage);
					}
		      
		      }
		  }).addStyleClass("matsearch");
		
		
		var grt = new sap.m.Label({
			text: "{i18n>G_R_T}"
				}).addStyleClass("paddingTopandfontweight");
		
		
		var oItemTemplate = new sap.ui.core.Item({  
            key : "{key}",
      	     text : "{text}"  
      	 }); 
		 
		var grtypeMOB19 = new sap.m.Select("ddgrtypeMOB19", {
			width:"200px",
			items: {
	      	path : "/itemsgrtype",  
			    template : oItemTemplate  
	         },
	         change : function()
	         {	
	        	var key = grtypeMOB19.getSelectedKey();
	        	oController.ddMOB19MasPageSel(key);	         	
	         }
   });
   
	   var po_del_num = new sap.m.Label({
		   id : "lbl_po_del_num",
			text: "PO Number"
				}).addStyleClass("paddingTopandfontweight");  
		
	   var ip_po_del_num = new sap.m.Input({
			id : "ip_po_del_num",
			width: "200px",
			maxLength: 20,
			type :sap.m.InputType.Tel,
		}).addStyleClass("input");
	   
	   var del_note_num = new sap.m.Label({
		   id : "lbl_del_note_num",
		   text: "Delivery Note"
				}).addStyleClass("paddingTopandfontweight");  
		
	  var ip_del_note_num = new sap.m.Input({
			id : "ip_del_note_num",required: true,
			width: "200px",
			//rows: 4
		}).addStyleClass("input");
	  del_note_num.setLabelFor(ip_del_note_num);
			mob19masvflex.addItem(lblPlant);
			mob19masvflex.addItem(inputPlant);
			mob19masvflex.addItem(grt);
			mob19masvflex.addItem(grtypeMOB19);
			mob19masvflex.addItem(po_del_num);
			mob19masvflex.addItem(ip_po_del_num);
			mob19masvflex.addItem(del_note_num);
			mob19masvflex.addItem(ip_del_note_num);
			
			
			   var nextButton = new sap.m.Button({
		    	   text: "Next",
		    	   icon : "sap-icon://open-command-field",
		      press: function () {
		    	  debugger;
		    	  var valid= true;
		    	  var localStorage= window.localStorage;
		    	  if(localStorage){/*
		    		  for(i=0;i<localStorage.length;i++){
		    			var key= localStorage.key(0).split("_");
		    			if(key[0]==sap.ui.getCore().byId("ip_po_del_num").getValue()){
		    				
		    				localStorage.removeItem(localStorage.key(0))
		    			}
		    			  
		    		  }
		    		  
		    	  */
		    		  
		    		  for(i=0;i<localStorage.length;i++){

		    			  key= localStorage.key(i)
		    			  if(parseInt(key).toString()!="NaN"){
		    			  localStorage.removeItem(localStorage.key(i))
		    			  i=i-1
		    			  }


		    			  }
		    	  }
		    	  
		    	  
		    	  if(grtypeMOB19.getSelectedKey()=="OD"&& !ip_po_del_num.getValue()){
		    		  valid=false;
	    			sap.m.MessageBox.show(
								
								"Please provide a OutBound Delivery Number",
								sap.m.MessageBox.Icon.ERROR,
								"Error"
								);
		    	  }
		    	  else if(grtypeMOB19.getSelectedKey()!="OD"&&(!ip_po_del_num.getValue()||!ip_del_note_num.getValue())){
		    		  	valid= false;
		    			sap.m.MessageBox.show(
								"Please provide a PO number/Inbound delivery Number and Delivery Note Number",
								sap.m.MessageBox.Icon.ERROR,
								"Error"
								);
		    	  }
		    	  
		
		 
		 if(valid){
			 
			 oController.showDetailsMOB19();
		 }
		    	if(grtypeMOB19.getSelectedKey()=="OD"||grtypeMOB19.getSelectedKey()=="ID"){
		    		debugger;
		    		sap.ui.getCore().byId("Mob19SelAll").setEnabled(false);
		    		sap.ui.getCore().byId("Mob19SelNone").setEnabled(false);
		    		/*var data=sap.ui.getCore().byId("Mob19listMatNo").getModel().oData
		    		for(i=0;i<data.results.length;i++){
		    			data.results[i].selected= true;

		    			}
		    			var oModel= new sap.ui.model.json.JSONModel(data)
		    			sap.ui.getCore().byId("Mob19listMatNo").setModel(oModel)*/
		    	}
		    	else{
		    		sap.ui.getCore().byId("Mob19SelAll").setEnabled(true);
		    		sap.ui.getCore().byId("Mob19SelNone").setEnabled(true);
		    		
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
		             mob19masvflex
		            
		    ]
		});
		
		if ( g_runningOnPhone == true)
		{

	 		return new sap.m.Page({
				title: "Log Goods Receipt",
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
					showHeader: false,
					footer: new sap.m.Bar({
				        contentRight: [
				                       	nextButton
				                       ]
					})
			});
			
		}
		else
			{
			
 		return new sap.m.Page({
			title: "Log Goods Receipt",
			content: [
			          oForm
			],
			 enableScrolling: false,
			 headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				
				//showNavButton: false,
				showFooter: true,
				showHeader: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       	nextButton
			                       ]
				}).addStyleClass("footer")
		});
		}
	}

});