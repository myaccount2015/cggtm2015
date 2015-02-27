sap.ui.jsview("com.cg.gtm.view.MOB17_MaterialList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MaterialList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17_MaterialList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17_MaterialList
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		//Define some sample data 
		/*var aData1 = [
			{Material: "1134", Description: "Desc",Quantity: "1" },
			{Material: "1135", Description: "Desc",Quantity: "2"},
			{Material: "1136", Description: "Desc",Quantity: "3" },
			{Material: "1137", Description: "Desc",Quantity: "4" },
			{Material: "1138", Description: "Desc",Quantity: "5"},
			{Material: "1139", Description: "Desc",Quantity: "6" },
			
			];*/
		
		//Table Creation
		var table = new sap.m.Table("tabMaterialLst", {
			
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: false,
			   select : oController.matSel,
            columns : [new sap.m.Column({
									       	
                                              header : new sap.m.Label({text : "{i18n>MOB17_Mat}"}) ,
                                           
                                              }),
                             new sap.m.Column({
                                              header : new sap.m.Label({ text : "{i18n>MOB17_Desc}" }) }),
                             new sap.m.Column({
                                               header : new sap.m.Label({ text : "{i18n>MOB17_Qty}" }) }),
                             new sap.m.Column({
                                                   header : new sap.m.Label({ text : "{i18n>MOB17_Del}" }) })
            ]
       }).addStyleClass("paddingBottom");
		
		//table.setVisible(false);
 
		
	
		//Create a model and bind the table rows to this model
		/*var oModel2 = new sap.ui.model.json.JSONModel();
		
		oModel2.setData({modelData: aData1});
		table.setModel(oModel2);*/
		
		var containerMaterial = new sap.m.FlexBox({
			items: [
			        new sap.ui.core.Icon("MaterialNoIcon"),

	                  new sap.m.Text("MaterialNo", {
	            text : "{Material}",
	            wrapping: true
	        })
			        ],
			alignItems:"Start"
		});
		
		table.bindItems("/modelData", new sap.m.ColumnListItem("materialListItem", {
	        cells : [
	                 containerMaterial,
	        new sap.m.Text("MaterialDesc", {
	            text : "{Description}",
	            wrapping: true
	        }),
	        new sap.m.Label("MaterialQty", {
	            text : "{Quantity}",
	        }),
	        new sap.ui.core.Icon("IconDel", { 
	        	src : "sap-icon://sys-cancel",
	        	color: "#CC0000",
	        	size: "30px",
	        	press: oController.deleteMaterial
	        })
	       
	        ],
		
	    }));

					 
		/*var TheScrollContainer1 = new sap.m.ScrollContainer({
            horizontal : true,
            vertical : true,
            content : [table
                       ],
            justifyContent:"Center"
        });*/
		
		var containerList = new sap.m.FlexBox({
			
			items: [
			        table
			      
			       ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Center"
		});
		
		var btnBack = new sap.m.Button({
            text: "Back",
            icon: "sap-icon://sys-back" ,
            press : function ()
            {
            	var myApp = sap.ui.getCore().byId("myApp");
        		myApp.to("idMOB17_MasterMatSearch");
            
            }
            
          });
		
		var btnDetails = new sap.m.Button({
            text: "{i18n>MOB17_BtnMatDet}",
            icon: "sap-icon://display" ,
            press : function ()
            {
            	  g_MobileNavigationId = "Mob17_MatDetail";
            	var myApp = sap.ui.getCore().byId("myApp");
        		myApp.to("idMaterialDetails");
            
            }
            
          });
		
		var btnComplete = new sap.m.Button({
			 id : "btnComplete1",
            text: "{i18n>MOB17_Complete}",
            icon: "sap-icon://complete",
            //type: sap.m.ButtonType.Accept,
            layoutData: new sap.m.FlexItemData({growFactor: 1}),
            press : oController.onComplete
          });
		
		
		var page = new sap.m.Page({
			id : "Mob17_Matlist",
			title: "{i18n>MOB17_MatItems}",
			content: [
			          containerList
			],
			showFooter: false,
			showHeader: true,
			showNavButton: false,
		    enableScrolling : false,
			navButtonTap:function(){ 
				  g_MobileNavigationId = "Mob17_MaterialSearch";
				  var myApp = sap.ui.getCore().byId("myApp");
	        		myApp.to("idMOB17_MasterMatSearch");
	        }
			
		});
		
		if(g_runningOnPhone == true) {
			var bar = new sap.m.Bar({
		        contentRight: [
		                       btnBack,
		                       btnDetails,
		                       btnComplete
		                       ]
			});
			
			
			page.setShowFooter(true);
			page.setShowHeader(true);
			page.setFooter(bar); 
			//page.setShowNavButton(true);
		}
		
 		return page;
	}

});
