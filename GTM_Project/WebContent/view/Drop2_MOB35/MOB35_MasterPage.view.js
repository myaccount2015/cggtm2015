sap.ui.jsview("com.cg.gtm.view.Drop2_MOB35.MOB35_MasterPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Drop2_MOB35.MOB35_MasterPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop2_MOB35.MOB35_MasterPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Drop2_MOB35.MOB35_MasterPage
	*/ 
	createContent : function(oController) {
		this.setHeight("100%")
		//Dummy data for binding the list
		/*var data= [{stype: "0011",stypeDesc: "manchester", count: "23"},
		           {stype: "0011",stypeDesc: "manchester", count: "23"},
		           {stype: "0011",stypeDesc: "manchester", count: "23"},
		           {stype: "0011",stypeDesc: "manchester", count: "23"},
		           {stype: "0011",stypeDesc: "manchester", count: "23"},
		           {stype: "0011",stypeDesc: "manchester", count: "23"},
		           ];*/
		
		///label warehouse
		
		var btnSubmit = new sap.m.Button({
			  text : "{i18n>MOB35_Submit}",
			  icon: "sap-icon://sys-enter" ,
			  layoutData: new sap.m.FlexItemData({growFactor: 1}),
		      press : function(){
            	oController.submitCount();
		            }
			});
		
		var warehouseLabel= new sap.m.Label({
			text: "{i18n>MOB35_Warehouse}",
			design: sap.m.LabelDesign.Bold 
		}).addStyleClass("dataText");
		
		var warehouse= new sap.m.Text("MOB_35_warehouse",{
			text: window.localStorage.getItem("defWHCode") 
		}).addStyleClass("dataText");
		
		///template for list showing strage types
		
		
		var storageType_ListItem= new sap.m.ObjectListItem({

		//	width:"100%",
		title : "{InvDocument}", // string
			
			/*firstStatus : new sap.m.ObjectStatus({
				text :"{i18n>MOB35_Items}"+" "+"{ItemCountStype}", // string
				
			// sap.ui.core.Control, since 1.19
			}),*/ // sap.m.ObjectStatus
			//number : "Items "+"{count}", // string
			/*attributes : [ new sap.m.ObjectAttribute({
				text : "{InvDocument}", // string
			}) ], */// sap.m.ObjectAttribute
	
});
	
		///Storage type list
		var storageType_List= new sap.m.List("MOB35_STypeList",{
		//	width:"100%",
			  mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      rememberSelections : false,
		items:{
			 path: "/InvListMOB35",
			template: storageType_ListItem
		},
		//includeItemInSelection: true,
		  selectionChange : oController.fetchInvDocDataMOB35,
			
			//sap.ui.getCore().byId("MOB35Splitlayout").setVisible(true);
			//sap.ui.getCore().byId('mob35_detailBox').setVisible(false);
		
		      
			
		});
		
		//binding the list with dummy data
		//var model= new sap.ui.model.json.JSONModel(data);
		//storageType_List.setModel(model);


		var masterContainer= new sap.m.FlexBox({
			items: [warehouseLabel,warehouse],
				direction:"Column",
				justifyContent:"Start",//Contents would be placed in the begin
				alignItems:"Start"
			});
			
		
 		return new sap.m.Page({
			title: "{i18n>MOB35_Outstanding_Counts}",
			content: [masterContainer,storageType_List

			],
			
			headerContent: new sap.m.Button({
			icon: "sap-icon://sys-help",
			press: oController.handleHelpButtonPress
		}),
		});
	}

});