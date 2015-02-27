sap.ui.jsview("com.cg.gtm.view.Mob18OrderItems", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18OrderItems
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18OrderItems";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18OrderItems
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		
		
		//Define some sample data 
		var aData1 = [
			{Material: "1134", Description: "Desc",Quantity: "1",Location : "Ashford",Batch : "A",Unit : "1" },
			{Material: "1135", Description: "Desc",Quantity: "2",Location : "Central Warehouse",Batch : "A",Unit : "1"},
			{Material: "1136", Description: "Desc",Quantity: "3",Location : "Holborn",Batch : "A",Unit : "1" },
			{Material: "1137", Description: "Desc",Quantity: "4",Location : "Inverness",Batch : "A",Unit : "1" },
			{Material: "1138", Description: "Desc",Quantity: "5",Location : "Swansea",Batch : "A",Unit : "1"},
			{Material: "1139", Description: "Desc",Quantity: "6",Location : "Doncaster",Batch : "A",Unit : "1"},
			
			];
		
		//Table Creation	var table = new sap.m.Table("tableMat", {
		
	     var selectedInexTable = new sap.m.Label({
	    	id : "Mob18-selectedindextable" 
	     });
	  
	     var btnAll  = new sap.m.Link(
	    			{
	    				id : "",
	    			   // src: "img/ico_selectall_30.png",
	    				text : "All",
	    			    press: function () {
	    			    	oController.selectAll();
	    			      },
	    			  }).addStyleClass("flex");
	    			
	    			var btnNone = new sap.m.Link(
	    					{
	    						id : "",
	    					   // src: "img/ico_selectall_30.png",
	    						text : "None",
	    					    press: function () {
	    					    	oController.selectNone();
	    					      },
	    					  }).addStyleClass("flex");
			var table = new sap.m.List({
				  id : "idtable_Order",
			      mode: sap.m.ListMode.MultiSelect,
			     
			  	  //height : "300px",
			      //includeItemInSelection: true,
//				/  selectionChange : oController.Mob19MatSel,
				 
			     // showUnread : true,
			      rememberSelections : false,
			       
			      items: {
			    	  path: "/results",
			     
			        	
			         /* new sap.m.StandardListItem({
			          id : "Mob19stdMatSel",
			          title: "{desc}"+ "       .        " + "{qty}",
			          description: "{qty}",
			          info : "{matnum}",
			          iconDensityAware: false,
			          iconInset: false ,
			         
			        })*/
			        	
			        	template: new sap.m.ObjectListItem({
							title: "{MaterialDesc}", 
							description: "{Quantity}",
							info : "{Material}",
							
							type : "Active",
							selected : "{selected}",
							firstStatus : new sap.m.ObjectStatus({

								text : "Quantity: "+"{Quantity}"
								}),
						
								secondStatus : new sap.m.ObjectStatus({
									text :{
										
							                  path: "ItemCategory",
							              formatter: function(value){
							            	 if(value=="Z"){
							            		 return "Item Category: "+ value
							            	 }
							            	 else{
							            		 return ""
							            	 }
							              }
									},
								state: {
							                  path: "ItemCategory",
							              formatter: function(value){
							            	 if(value=="Z"){
							            		 return "Warning"
							            	 }
							            	 else{
							            		 return "Success"
							            	 }
							            	  
							              }
							                }
									}),
							
								attributes : [

								new sap.m.ObjectAttribute({

								text : "{Material}"

								})],
							 press : oController.matSel_order,
							})
			        	
			      }
		
			 }).addStyleClass("paddingBottom");
	     
	     
	/*	var table = new sap.m.Table("idtable_Order",{
			rememberSelections: false,
			mode : sap.m.ListMode.MultiSelect,
		 includeItemInSelection: true,
	 // select : oController.matSel_order,
            columns : [
                     //  new sap.ui.core.Icon("MaterialNoIcon_order"),
                       
                       new sap.m.Column({
									       	
                                              header : new sap.m.Label({text : "Material"}) ,
                                           
                                              }),
                             new sap.m.Column({
                                              header : new sap.m.Label({ text : "Description" }) }),
                             new sap.m.Column({
                                               header : new sap.m.Label({ text : "Quantity" }) })
                            
				                              
            ],
           
            	
            	
       });*/
		
		//table.setVisible(false);
 
	//var	webmodel = new sap.ui.model.json.JSONModel();
	   //  table.setModel(webmodel);
	
		/*//Create a model and bind the table rows to this model
		var oModel2 = new sap.ui.model.json.JSONModel();
		
		oModel2.setData({modelData: aData1});
		table.setModel(oModel2);
		webmodel = new sap.ui.model.json.JSONModel();
	     table.setModel(webmodel);*/
		var containerMaterial_order = new sap.m.FlexBox({
			items: [
			        new sap.ui.core.Icon("MaterialNoIcon_order"),

			        new sap.m.Text("Material_order1",{
		                text : "{Material}",
		                wrapping: true
		            })
			        ],
			alignItems:"Start"
		});
		
		/*table.bindItems("/results",new sap.m.ColumnListItem("materialListItem2", {
			
            cells : [ 
            
                     containerMaterial_order ,
            new sap.m.Text("MatDesc_order1", {
                text : "{MaterialDesc}",
                wrapping: true
            }),
            new sap.m.Text({
                text : "{Quantity}",
            })
           
            ],
          
        }).attachPress(function(){
        	alert("hi")
        })
		
		
		);*/
		

		/////////////////////////////Mobile//////////////////////////////////////
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
    		            	//Deselect table Items
			    			var deselect = sap.ui.getCore().byId("idtable_Order");
			    			deselect.removeSelections();
    		           
    		            	sap.ui.getCore().byId("myApp").to("idMOB18Locmas");
    		            	
    		            	
    		            }
    		});
        	
        	return new sap.m.Page({
        		id : "Mob18_OrderItems",
    			title: "Order Items",
    			// headerContent :[btnBack],
    			content: [
btnAll,btnNone, table
    			] ,showFooter: true,	
	  			footer: new sap.m.Bar({
	  				contentRight: [btnback ],
	  				
	  				
	  			}).addStyleClass("mobfooter"),
	  			showNavButton: true,
	            navButtonTap:function(){  
	          	  g_MobileNavigationId = "Mob18_OrderMas";
	            	         //  sap.ui.getCore().byId("LocallblLoadingPageMob26").setText("1");
	                           var app = sap.ui.getCore().byId("myApp"); 
	                           app.to("idMOB18Locmas");
	                           }
    		});
    	}
		

        ////////////////////////Tablet/Desktop//////////////////////////////
		
        else{
        	
       
 		return new sap.m.Page({
			title: "Order Items",
			content: [
btnAll,btnNone,  table
			]
		});
	}
	 }

});
