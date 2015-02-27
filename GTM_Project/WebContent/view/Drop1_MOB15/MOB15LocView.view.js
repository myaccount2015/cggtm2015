sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.MOB15LocView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB15LocView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.MOB15LocView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB15LocView
	*/ 
	createContent : function(oController) {

		
/*		var oLocTree = new sap.ui.commons.Tree("locTree");   
		oLocTree.expandAll(false);
		oLocTree.bindAggregation("nodes","/locTreeColl",function(sId,oContext){  
		           var treePath = oContext.getPath();  
		           var bindTextName = '';  
		           if(treePath.indexOf("QMARR") !== -1) {  
	                     bindTextName = "QM";   
		           } 
		           else {  
	                     bindTextName = "locationHdr"; 
	                } 
		           
		           return new sap.ui.commons.TreeNode({
		        	   
		        	 // selected : oController.onTreeSelectionMOB15Loc// function()
		           }).bindProperty("text",bindTextName); 
		}); */
		
		var oTableLocation = new sap.m.Table("idLocTable", {
			select : oController.locationSelect,
	   /*     headerToolbar : new sap.m.Toolbar({
	            content : [ new sap.m.Label({
	               // text : "Summary Data"
	            }), 
	            
	            new sap.m.ToolbarSpacer({}), new sap.m.Button("idPers", {
	                icon : "sap-icon://person-placeholder"
	            }) 
	            
	            ]
	        }),*/
	        columns : [ 
	                    
	                   /* new sap.m.Column({
	            width : "5em",
	            mergeDuplicates : true,
	            header : new sap.m.Label({
	            text : "Defect Group Desc"
	            })
	        }),*/
	        
	      /*  new sap.m.Column({
	            width : "5em",
	            header : new sap.m.Label({
	                text : "Defect Location Code"
	            })
	        }),*/
	        new sap.m.Column({
	            width : "5em",mergeDuplicates : true,
	            header : new sap.m.Label({
	                text : "Location Group Desc"
	            })
	            
	        }),
	        
	        new sap.m.Column({
	            width : "5em",
	            header : new sap.m.Label({
	                text : "Location Code Description"
	            })
	            
	        }),
	    
	      
	        
	        ],
	        
	       items: {
                path: "/subvariantsLoc",
                template: new sap.m.ColumnListItem({
                  	 selected : true,
                	 type : "Navigation",
                	press : oController.locationSelect,
                    cells: [
                  //  new sap.m.Text({text: "{defectGroupDescription}"}),
                    new sap.m.Text({text: "{defectGroupDescription}"}),
                    new sap.m.Text({text: "{defectCodeDescriptionForLocation}"}),
              
                    
                    
                    
                    
                    
                    ]
                })
            },
            
		 });
		

		
		  var runningInDsktop = g_runningOnDesktop;
		  var runningInTablet = g_runningInTablet;
		  
		  if( g_runningInTablet == false && g_runningOnPhone == false)
			  {
			  oTableLocation.setWidth("70%");
			  
			  oTableLocation.addStyleClass("left-location-Defect-Desktop");
			  
			  
			  }
		  else if( runningInTablet == true){
			  oTableLocation.setWidth("80%");
			  oTableLocation.addStyleClass("left-location-Defect-Tablet");
			   }
		  else{
			  oTableLocation.setWidth("100%");
			  
		  }
		
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	return new sap.m.Page({
			title: "Defect Locations",
			content: [
oTableLocation
			]
		});
	
		
	
	}

});