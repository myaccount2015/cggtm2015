sap.ui.jsview("com.cg.gtm.view.Mob18Scrap_Items", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18Scrap_Items
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18Scrap_Items";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18Scrap_Items
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		/*//Define some sample data 
		var arrMatLst = 
			[{Material: "1134", Description: "Desc",Quantity: "1" },
			{Material: "1135", Description: "Desc",Quantity: "2"},
			{Material: "1136", Description: "Desc",Quantity: "3" },
			{Material: "1137", Description: "Desc",Quantity: "4" },
			{Material: "1138", Description: "Desc",Quantity: "5"},
			{Material: "1139", Description: "Desc",Quantity: "6" },
			
			];*/
		
		//Table Creation
		var table = new sap.m.Table("tableMat", {
			
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: true,
			   select : oController.matSel,
            columns : [new sap.m.Column({
            //	 new sap.ui.core.Icon("MaterialNoIcon_order"),
                                              header : new sap.m.Label({text : "Material"}) ,
                                           
                                              }),
                             new sap.m.Column({
                                              header : new sap.m.Label({ text : "Description" }) }),
                             new sap.m.Column({
                                               header : new sap.m.Label({ text : "Quantity" }) }),
                             new sap.m.Column({
                                                   header : new sap.m.Label({ text : "Delete" }) })
            ]
       }).addStyleClass("paddingBottom");
		
		//table.setVisible(false);
 
		
	
		//Create a model and bind the table rows to this model
		/*var oModel2 = new sap.ui.model.json.JSONModel();
		
		oModel2.setData({modelData: aData1});
		table.setModel(oModel2);*/
		var containerMaterial_Scrap = new sap.m.FlexBox({
			items: [
			        new sap.ui.core.Icon("MaterialNoIcon_scrap"),
			         new sap.m.Text("Material", {
				            text : "{Material}",
				            	 wrapping: true
				        })
			        ],
			alignItems:"Start"
		});
		
		table.bindItems("/modelData", new sap.m.ColumnListItem("materialListItem1", {
	        cells : [ 
	        
	        containerMaterial_Scrap,
	        new sap.m.Text("MatDesc", {
	            text : "{Description}",
	            wrapping: true
	        }),
	        new sap.m.Text( {
	            text : "{Quantity}",
	        }),
	        /*new sap.ui.core.Icon("Icon1", { 
	        	src : "sap-icon://sys-cancel",
	        	color: "#CC0000",
	        	size: "30px",
	        	press: oController.deleteMaterial
	        })*/
	        new sap.ui.core.Icon("Deletion", { 
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
            	var app = sap.ui.getCore().byId("splitAppMOB17");  
          	  	app.toMaster("idMOB17_MasterActionPage");
          	  sap.ui.getCore().byId("addMatFooterLast").setVisible(true);
            }
            
          });
    ////////////////////////////Mobile//////////////////////////////////////
        if(g_runningOnPhone == true)
		{
        	var btnback = new sap.m.Button({
    	       	//id : "idshow",
    				 text : "{i18n>Mob18_back}",
    				 icon: "sap-icon://close-command-field",
    			  //  icon: "sap-icon://search",
    		      //      style : sap.ui.commons.ButtonStyle.Accept,
    		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
    		            press : function(){
    		            	sap.ui.getCore().byId("myApp").to("idMOB18Matmas");
    		            	
    		            	//Deselect table Items
			    			var deselect = sap.ui.getCore().byId("tableMat");
			    			deselect.removeSelections();
    		           
    		            	
			    			//Clear Table List-start////
			    			var tabSerialLst = sap.ui.getCore().byId("tableMat");
			    				var oModel = tabSerialLst.getModel();
			    				var aData1 = [];
			    					
			    				oModel = new sap.ui.model.json.JSONModel();
			    					
			    				oModel.setData({modelData: aData1});
			    				tabSerialLst.setModel(oModel);

			    				//Clear Table List-end////
    		            	
    		            }
    		});
        	
        	var btnnext = new sap.m.Button({
    	       	//id : "idshow",
    				 text : "Next",
    				 icon: "sap-icon://open-command-field",
    			  //  icon: "sap-icon://search",
    		      //      style : sap.ui.commons.ButtonStyle.Accept,
    		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
    		            press : function(){
    		            	
    		            	var app = sap.ui.getCore().byId("myApp"); 
    		            	app.to("idMob18Scrapdetpage");
			    				
    		            	
    		            }
    		});
        	
        	var btnstcok = sap.ui.getCore().byId("idStock_Scrap");
        	
        	
        	var btnStock = new sap.m.Button({
	        	id : "idStock_Scrap_Mob",
				 text : "{i18n>Mob18_Stock}",
				// icon: "sap-icon://add", 
			  //  icon: "sap-icon://search",
		      //      style : sap.ui.commons.ButtonStyle.Accept,
		            layoutData: new sap.m.FlexItemData({growFactor: 1}),
		            press : function(){
		           // 	oController.check();
		            	g_backstock = "Mob18Scrap";
		            	//alert("inside stock");
		            	
		            	oController.Mo23nav_mob();
		            	
		            	var app = sap.ui.getCore().byId("myApp");  
				        //app.to("idMob23InitialScreen"); 
				        
				       // var app = sap.ui.getCore().byId("idMOB23SplitApp");  
    	   	        app.to("idMOB23Matmasdetail");
    	   	 
    	   	        
    	   	     sap.ui.getCore().byId("idsearch_WM").setVisible(false);
       			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false); 
       			 sap.ui.getCore().byId("idchange_phone").setVisible(false);
		            	
		            }
		           
			});
        	
        	return new sap.m.Page({
        		id : "Mob18_scrapitems",
        		//	title: "Scrap Bearing Case",
         			showHeader : false,
        			// headerContent :[btnBack],
        			content: [
        			          containerList
        			],showFooter: true,	
    	  			footer: new sap.m.Bar({
    	  				contentRight: [btnnext ],
    	  				contentLeft : [btnback],
    	  				contentMiddle : [btnStock]
    	  				
    	  			}).addStyleClass("mobfooter"),
showNavButton: true,
					
		            navButtonTap:function(){  
		          	  g_MobileNavigationId = "Mob18_Materialsearch";
		            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
		                           var app = sap.ui.getCore().byId("myApp"); 
		                           app.to("idMOB18Matmas");
		                           }
        		});
		}
        else{
        	////////////Tablet/Desktop Version////////////////
        	return new sap.m.Page({
    			title: "Material Items",
     			showHeader : false,
    			content: [
    			          containerList
    			],
    			showFooter: false
    		});
        }
		
 		
	}


});