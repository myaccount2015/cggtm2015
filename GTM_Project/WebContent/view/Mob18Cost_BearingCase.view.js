sap.ui.jsview("com.cg.gtm.view.Mob18Cost_BearingCase", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Cost_BearingCase
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Cost_BearingCase";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Cost_BearingCase
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		var lblDummy = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy1 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy2 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy3 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy4 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy6 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		var lblDummy7 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblDummy5 = new sap.m.Label({
			text: "{i18n>Mob18_DumyTxt}"
		});
		
		var lblMaterial = new sap.m.Label({
			text: "{i18n>Mob18_Material}",
			width : "80px"
		});
		
		var txtMaterial = new sap.m.Text({
			//text : "{i18n>Mob18_plantname}"
		});
		
		var lblSerial = new sap.m.Label({
			text: "{i18n>Mob18_Serial}",
			width : "80px"
		});
		
		var inputSerial = new sap.m.Input("inputSerial_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter Serial Number',
		    
		  });
		
		var lblUoM = new sap.m.Label({
			text: "{i18n>Mob18_UoM}",
			width : "80px"
		});
		
		var inputUoM = new sap.m.Input("inputUoM_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter UoM Number',
		    
		  });
		
		var lblBatch = new sap.m.Label({
			text: "{i18n>Mob18_Batch}",
			width : "80px"
		});
		
		var inputBatch = new sap.m.Input("inputbatch_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter Batch Number',
		    
		  });
		
		var lblQuantity = new sap.m.Label({
			text: "{i18n>Mob18_Quantity}",
			width : "80px"
		});
		
		var inputQuantity = new sap.m.Input("inputQty_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter Quantity Number',
		    
		  });
		
		
		var lblLocation = new sap.m.Label({
			text: "{i18n>Mob18_Loc}",
			width : "80px"
		});
		
		var inputLocation = new sap.m.Input("inputLoc_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter Location Number',
		    
		  });
		
		var inputLocation_no = new sap.m.Input("inputLocno_cost",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Text,
		    
		      placeholder: 'Enter Location Number',
		    
		  });
		
		var lblReason = new sap.m.Label({
			text: "{i18n>Mob18_reason}",
			width : "80px"
		});
		
		
		var jsonReason = {"MOB18Reason":
			[
				 {"Key" :"1", "detail":"Reason for Scrapping"},
				 {"Key" :"2", "detail":"Reason for Scrapping"},
				 { "Key" :"3","detail":"Reason for Scrapping"}
				 ]};
		
		
		var oModel2 = new sap.ui.model.json.JSONModel(jsonReason);
		//oModel2.setData({modelData: jsonReason});
		
		var selectReason = new sap.m.Select("selectReason_cost", {
		      items: {
		        path: "/MOB18Reason",
		        sorter: new sap.ui.model.Sorter("key", false),
		        template: new sap.ui.core.Item({
		         key: "{key}",
		          text: "{detail}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		selectReason.setModel(oModel2);
		
		
		
		

		
	
		var container_Mat = new sap.m.FlexBox({
			items: [
			        
			        lblMaterial,
			        txtMaterial
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Serial = new sap.m.FlexBox({
			items: [
			        
			        lblSerial,
			        inputSerial
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_UoM = new sap.m.FlexBox({
			items: [
			        
			        lblUoM,
			        inputUoM
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Batch = new sap.m.FlexBox({
			items: [
			        
			        lblBatch,
			        inputBatch
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_quanity = new sap.m.FlexBox({
			items: [
			        
			        lblQuantity,
			        inputQuantity
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Location = new sap.m.FlexBox({
			items: [
			        
			        lblLocation,
			        inputLocation,
			        inputLocation_no
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		var container_Reason = new sap.m.FlexBox({
			items: [
			        
			        lblReason,
			        selectReason
				//inputPlant
			        
			        ],
			direction:"Row",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		var container_Main = new sap.m.ScrollContainer({
			horizontal : true,
            vertical : true,
			content: [
			          lblDummy,
			          container_Mat,	
			        lblDummy1,
			        container_Serial,
				    lblDummy2,
				    container_UoM,
				    lblDummy3,
				    container_Batch,
			        
			        lblDummy4,
			        container_quanity,
			        lblDummy5,
			        container_Location,
			        lblDummy6,
			        container_Reason,
			        lblDummy7
				    
					//container_Cust,
					//lblDummy4
			        ],
			
		}).addStyleClass("ContainerPadding");
		
		
		//Back Button
		var btnBack = new sap.m.Button({
			//text : "back",
			icon: "sap-icon://nav-back",
			press : function(){
			//	var btnShow = sap.ui.getCore().byId("idshow");
			//	btnShow.setVisible(false);
				hideidMob18first_Cost();
				hideidMob18second_Cost();
				 var deselect = sap.ui.getCore().byId("idtable_Cost");
					deselect.removeSelections();
				
				
				 
	           	var app = sap.ui.getCore().byId("idMOB18SplitApp");  
				 app.toMaster("idBlankScreen_18");
				
			}
		});
		
 		return new sap.m.Page({
			title: "Bearing Case",
			// headerContent :[btnBack],
			content: [
			          container_Main
			]
		});
	}

});