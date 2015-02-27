sap.ui.jsview("com.cg.gtm.view.Drop1_MOB22.InspectionLotInitialView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.InspectionLotInitialView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB22.InspectionLotInitialView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.InspectionLotInitialView
	*/ 
	//Done
	createContent : function(oController) {
		this.setHeight("100%");
		/*
		 * Initializing Busy Dialog UI Component
		 */
		 var busyDialog = new sap.m.BusyDialog({
			          title: "Notification Task List",
			          text: "Retrieving Notification Task List..."
			         // showCancelButton: true
		 });
		
		 var oSplitApp = new sap.m.SplitApp("splitAppInsCreate") ;
			var masterpage = sap.ui.view({id:"idMOB22Ini", viewName:"com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotInitial", type:sap.ui.core.mvc.ViewType.JS});
			var detailpage = sap.ui.view({id:"idMOB22Det", viewName:"com.cg.gtm.view.Drop1_MOB22.MOB22InspectionLotDetail", type:sap.ui.core.mvc.ViewType.JS});
			
			oSplitApp.addMasterPage(masterpage);
	        oSplitApp.addDetailPage(detailpage);
	        oSplitApp.setMode("ShowHideMode");
	        
	        
	        
        
        var msgDialog = new sap.m.Dialog({
        	title: "Inspection Lot",
        	 icon: "sap-icon://sys-help",
        	type: sap.m.DialogType.Message,
        	content: [
        	new sap.m.Text({
        	text:"Are you sure you wish to send this  Inspection Lot now?"
        	}),
        	],
        	leftButton: new sap.m.Button({
        	text: "No",
        	press: function () {
        	msgDialog.close();
        	}
        	}),
        	rightButton: new sap.m.Button({
        	text: "Yes",
        	press: function () {
        		
        		msgDialog.close();
        		validateData();
        		
        		
        		
        		/*
	        	msgDialog.close();
	        	
	        	setTimeout(function(){
	        		
		        	 * Calling Save Inspection Lot Service
		        	 
		        	oController.saveInspecLot();
		        	busyDialog.close(); // Hide Busy Indicator
		        	msgDialog1.open();
		    	 }, 1000);
        	*/}
        	})
        	});
        /*******************************************************************************************************/
        	/*Message Dialog for Yes button*/

        	var msgDialog1 = new sap.m.Dialog({
        	title: "Inspection Lot",
        	type: sap.m.DialogType.Message,
        	// icon: "sap-icon://sys-enter"
        	content: [
        	          new sap.m.Text({
        	text:"Inspection Lot Created !! Do you wish to create another ?",
        	})
        	],

        	leftButton: new sap.m.Button({
        	text: "Yes",
        	press: function () {
        		msgDialog1.close();
        	}
        	}),
        	rightButton: new sap.m.Button({
        	text: "No",
        	press: function () {
	        	msgDialog1.close();
	        	var app = sap.ui.getCore().byId("myApp"); 
				app.to("idGridSubMenuQM");
        	}
        	})
        	});
        	
        	
        	function validateData()
        	{
        		
        		///////////////////////////////////////////////////////
        		
        		var mandfield = 0;
        		
        		if (null ==  sap.ui.getCore().byId("inputMatnrMOB22").getValue() || sap.ui.getCore().byId("inputMatnrMOB22").getValue() == "")
          	  {
          	  sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.Error);
          	mandfield = 1;
          	  }
            
            else
          	  {
          	  sap.ui.getCore().byId("inputMatnrMOB22").setValueState(sap.ui.core.ValueState.None);
          	  
          	  }
            
            if ( null ==  sap.ui.getCore().byId("insqty").getValue() ||  sap.ui.getCore().byId("insqty").getValue() == "" )
          	  {
          	  
          		sap.ui.getCore().byId("insqty").setValueState(sap.ui.core.ValueState.Error);
          		mandfield = 1;
          	  }
            else
          	  {
          	  sap.ui.getCore().byId("insqty").setValueState(sap.ui.core.ValueState.None);
          	  
          	  }
            if (null ==  sap.ui.getCore().byId("insdet").getValue() || sap.ui.getCore().byId("insdet").getValue() == "")
  	   	  {
  	   	  sap.ui.getCore().byId("insdet").setValueState(sap.ui.core.ValueState.Error);
  	   	mandfield = 1;
  	   	  }
  	     
  	     else
  	   	  {
  	   	  sap.ui.getCore().byId("insdet").setValueState(sap.ui.core.ValueState.None);
  	   	  
  	   	  }
      	 
      	 
      	 if (  mandfield ==  1 )
          	{
          	
      		sap.m.MessageBox.show(

      				"Please provide data in all mandatory fields",
      				sap.m.MessageBox.Icon.ERROR,
					"Error"

      				);


          	  }
     	else
		{
     		var qtyInt =  parseInt(sap.ui.getCore().byId("insqty").getValue());
     		if (qtyInt > 0)
     		{
     		var msg = 'Inspection Lot has been saved sucessfully';
            jQuery.sap.require("sap.m.MessageToast");
          //  sap.m.MessageToast.show(msg);
     	//matnum.setValueState(sap.ui.core.ValueState.None);
     	//	insLotQty.setValueState(sap.ui.core.ValueState.None);
		oController.saveInspecLot();
		oController.showQ(); 
		//msgDialog1.open();
		
	//	sap.ui.getCore().byId("inputVendorMOB22").removeAllItems();//remove binded items
    //    sap.ui.getCore().byId("inputVendorMOB22").setEnabled(true);
        
	   var	app = sap.ui.getCore().byId("myApp"); 
	   app.to("idGridSubMenuQM");
     		}
     		
     		else
     			{
     			
     			sap.m.MessageBox.show("Quantity should be more than Zero");
     			}
		}
	
	
	
}
      	 //////////////////////////////////////////////////////////////////////////////
        		/*var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
        		var mandfield = 0;
        		if (null == matnum.getValue() || "" == matnum.getValue())
        			{
        			mandfield = 1;
        			
        			}
        		
        		var insLotQty = sap.ui.getCore().byId("insqty");
        		if (null == insLotQty.getValue() || "" == insLotQty.getValue())
    			{
    			mandfield = 1;
    			
    			}
        		
        		
        		
        		if (mandfield == 1)
        		
        		{
        			
        			matnum.setValueState(sap.ui.core.ValueState.Error);
        			insLotQty.setValueState(sap.ui.core.ValueState.Error);
        			alert("Please provide values in mandatory fields");
        			
        		}*/
        	//////////////////////////////////////////////////////////////////////////////////////	
        	
         if( g_runningOnPhone == true)
        	 {
        	 sap.ui.getCore().byId("myApp").addPage(detailpage);
        	
        	  return new sap.m.Page({
        		id:"Mob22-BackNavButton",
      			title: "Inspection Lot",
      			content: [
      			          
      			          	detailpage 
      			],
      			headerContent: new sap.m.Button({
					icon: "sap-icon://sys-help",
					press: oController.handleHelpButtonPress
				}),
      			enableScrolling: false,
      			showNavButton: true,
      			showFooter: false,
                  navButtonTap:function(){  
                     // sap.ui.getCore().byId("inputVendorMOB22").removeAllItems();//remove binded items
                	  
                	  g_MobileNavigationId = "MainGrid-Quality";
                      sap.ui.getCore().byId("inputVendorMOB22").setEnabled(true);
                      var insdet = sap.ui.getCore().byId("insdet"); 
                      insdet.setEnabled(true);
              	    insdet.setValue("");
              	    insdet.setValueState(sap.ui.core.ValueState.None);
              		
                  		var app = sap.ui.getCore().byId("myApp");  
                          app.to("idGridSubMenuQM");
                  	},
                  	footer: new sap.m.Bar({
                  	    /*contentRight: [
                  	                   
                  	                   
                  	                   
                  	    new sap.m.Button({
	                    text: "Open Overlay Container",
	                    press: function(oEvent){ 
		                if(!oOverlayContainer.isOpen()){
			            oOverlayContainer.open();
		                }
	                    }
                        }),
                  	                   
                  	                   
                  	      new sap.m.Button({
                  	        text: "{i18n>MOB_22_NEW}",
                  	        icon: "sap-icon://add",
                  	        press : function () {
                  	    		oController.newInspection();
                  	        }
                  	        	
                  	      }),
                  	      new sap.m.Button({
                    	        text: "{i18n>MOB_22_SAVE}",
                    	        icon: "sap-icon://save",
                    	        press : function () {
                    	    		msgDialog.open();
                    	        }
                    	      })
                  	    ]*/
                  	})
      		});
        	 }
         else
        	 {
        	
 	        
 	         
        	  return new sap.m.Page({
        		  title: "{i18n>MOB_22_INSLOT}",
        		  id:"Mob22-BackNavButton",
      			content: [
      			          oSplitApp
      			         
      			],
      			enableScrolling: true,
      			showNavButton: true,
      			showFooter: false,
                  navButtonTap:function(){  
                     // sap.ui.getCore().byId("inputVendorMOB22").removeAllItems();//remove binded items
                	  g_MobileNavigationId = "MainGrid-Quality";
                      sap.ui.getCore().byId("inputVendorMOB22").setEnabled(true);
                      var insdet = sap.ui.getCore().byId("insdet"); 
                      insdet.setEnabled(true);
              	    insdet.setValue("");
              	    insdet.setValueState(sap.ui.core.ValueState.None);
              		
                  		var app = sap.ui.getCore().byId("myApp");  
                          app.to("idGridSubMenuQM");
                  	},
                  	footer: new sap.m.Bar({
                  	    contentRight: [
                  	      new sap.m.Button("idMob22New",{
                  	        text: "{i18n>MOB_22_NEW}",
                  	        icon: "sap-icon://add",
                  	        press : function () {
                  	    		oController.newInspection();
                  	        }
                  	        	
                  	      }),
                  	      new sap.m.Button("idMob22Save",{
                    	        text: "{i18n>MOB_22_SAVE}",
                    	        icon: "sap-icon://save",
                    	        press : function () {
                    	    		msgDialog.open();
                    	        }
                    	      })
                  	    ]
                  	}).addStyleClass("footer")
      		});
        	 }
        	
    
	
 		
	}

});
