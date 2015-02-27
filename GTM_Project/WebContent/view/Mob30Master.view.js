sap.ui.jsview("com.cg.gtm.view.Mob30Master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob30Master
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob30Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob30Master
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
		
		
		var lblType = new sap.m.Label({
			text: "{i18n>mob30_storage}",
			width : "90px"
		});
		
		
		//Storage Type
		var inputStorage = new sap.m.Select("idStorageType", {
			 width : "15rem",
			 placeholder: 'Storage Type',
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("Storagetype", false),
		        template: new sap.ui.core.Item({
		          key: "{Storagetype}",
		          text: "{StoragetypeDesc}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("input_mob23");
		
		var lblBin = new sap.m.Label({
			text: "{i18n>mob30_storagebin}",
			width : "80px"
		});
		
		var inputStoragebin = new sap.m.Select("idStoragebin", {
			 width : "15rem",
			 placeholder: 'Storage Bin',
		      items: {
		        path: "/results",
		        sorter: new sap.ui.model.Sorter("Storagetype", false),
		        template: new sap.ui.core.Item({
		          key: "{Storagebin}",
		          text: "{Storagebin}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("input_mob23");
		
		//Plant
		

		var lblPlant = new sap.m.Label({
			text: "{i18n>Mob18_Plant}",
			width : "80px"
		});
		
		var inputPlant = new sap.m.Input("inputPlant30",{
		     // type: sap.m.InputType.Text,
			 type: sap.m.InputType.Email,
		    width : "15rem",
		     placeholder: 'Enter Plant',
		    //  showSuggestion: true,
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		      suggestionItems: {
		        path: "/MD24CollectionPlant",
		        template: new sap.ui.core.Item({
		          text: "{plantName}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  globalPlantSearchFrom = "MOB30";
		    	  
		    	  getPlantList();
		    	  
		    	  
		    	  var app = sap.ui.getCore().byId("idMOB30SplitApp"); 
		    	  
		    	  var commonPlantSearchPage = sap.ui.getCore().byId("idCommonPlantSearch");
		    	  app.addMasterPage(commonPlantSearchPage);
		    	  
	        	  app.toMaster("idCommonPlantSearch");
	        	  
	        	  
		      }
		    
		  }).addStyleClass("input_mob23");
		
		
		
		//Warehouse
		var lblWarehouse = new sap.m.Label({
			text: "{i18n>mob30_warehouse}",
			width : "80px"
		});
		
		
		var inputWarehouse = new sap.m.Label("idwarehouse",{
			//text: "Np1",
			width : "80px"
		});
		
		//storage Type Flex Box
		var container_Type = new sap.m.FlexBox({
			items: [
				   
					lblType,
					inputStorage
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//storage Bin Flex Box
		var container_Bin = new sap.m.FlexBox({
			items: [
				  
					lblBin,
					inputStoragebin
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		
		//Plant Flex Box
		var container_plant = new sap.m.FlexBox({
			items: [
				   
					lblPlant,
					inputPlant
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//WareHouse Flex Box
		var container_warehouse = new sap.m.FlexBox({
			items: [
				   
					lblWarehouse,
					inputWarehouse
				   // matScanQ1
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		});
		
		//Main Flex box
		var container_Main = new sap.m.FlexBox({
			items: [
				   
					lblDummy,
					container_Type,
					lblDummy1,
					container_Bin,
					lblDummy2,
					container_plant,
					lblDummy3,
					container_warehouse
				
			        ],
			direction:"Column",
			justifyContent:"Center",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("mob23flex");
		
		
		
		//Buttons in footer
		var btnShow = new sap.m.Button({
			text : "Show",
			 icon: "sap-icon://show",
			press : oController.Mob30MatItem
			
              //  $("#idMOB30MatDetail").hide();
          	
			
		});
 		return new sap.m.Page({
			title: "{i18n>mob30_bin}",
			content: [
			          container_Main
			],
			enableScrolling: false,
	 		showFooter: true,	
			footer: new sap.m.Bar({
				//contentLeft: [ btnSearch.addStyleClass("search")],
		        contentRight: [
		                      
		                      btnShow  
		                       ]
			}).addStyleClass("footer"),
		});
	}

});