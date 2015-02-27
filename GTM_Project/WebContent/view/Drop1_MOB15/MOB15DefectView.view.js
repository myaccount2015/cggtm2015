sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.MOB15DefectView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB15DefectView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.MOB15DefectView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB15DefectView
	*/ 
	createContent : function(oController) {

/*	var summaryDetailData={"subvariants":
		[{"currentValue":"QM-Defect","Article":"1234567",
			"question":"Carpet Installation type"},
			{"currentValue":"QM-Defect","question":"CarpetQuantity"},
			{"currentValue":"2","Article":"1234568","question":"Underpad type"},
			{"currentValue":"","question":"UnderpadQuantity"},
			{"currentValue":"3","Article":"1234568","question":"Rapid Install"}
			]}	;*/
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
		/*var oDefectTree = new sap.ui.commons.Tree("defectTree");   
		oDefectTree.expandAll(false);
		oDefectTree.bindAggregation("nodes","/defects",function(sId,oContext){  
		           var treePath = oContext.getPath();  
		           var bindTextName = '';  
		           if(treePath.indexOf("QMEARR") !== -1) {  
	                     bindTextName = "QMEDET";   
		           } else if(treePath.indexOf("QMMARR") !== -1) {  
		                     bindTextName = "QMMDET"; 
		           } 
		           else {  
	                     bindTextName = "namedef"; 
	                } 
		           
		           return new sap.ui.commons.TreeNode({
		        	   
		        	   selected : oController.onTreeSelectionMOB15Def// function()
		           }).bindProperty("text",bindTextName); 
		}); 
		
		*/
		
		
	//////////////////////////////////////////////////////////////////////////////////////////////	
		
	
		
		
		var oTable = new sap.m.Table("idRandomDataTable", {
			
			
			//select : oController.tableselect,
	       /* headerToolbar : new sap.m.Toolbar({
	            content : [ new sap.m.Label({
	               // text : "Summary Data"
	            }), 
	            
	            new sap.m.ToolbarSpacer({}), new sap.m.Button("idPersonalizationButton", {
	                icon : "sap-icon://person-placeholder"
	            })
	            
	            ]
	        }),*/
	        columns : [ new sap.m.Column({
	           // width : "1em",
	            mergeDuplicates : true,
	            header : new sap.m.Label({
	            text : "Defect Group Desc"
	            })
	        }),
	        
	     /*   new sap.m.Column({
	            width : "5em",
	            header : new sap.m.Label({
	                text : "Defect Code"
	            })
	        }),*/
	        new sap.m.Column({
	         //   width : "3em",
	            header : new sap.m.Label({
	                text : "Defect Code Desc"
	            })
	        }),
	        
	        
	        ],
	        
	        items: {
                path: "/subvariants",
                template: new sap.m.ColumnListItem({
                  	 selected : true,
                	 type : "Navigation",
                	 press : oController.tableselect,
                    cells: [
                    new sap.m.Text({text: "{defectGroupDescription}"}),
                   
                    new sap.m.Text({text: "{defectCodeDescription}"}),
                    new sap.m.Text({text: "{defectCode}"}),
                 //   new sap.m.Text({text: "{defTypName}"}),
                    
                    ]
                })
            },
            
            
	        
	
		
	    });
/*
	    oTable.bindItems("/subvariants", new sap.m.ColumnListItem({
	   	 selected : true,
    	 type : "Navigation",
    	 press : oController.tableselect,
        
	        cells : [ 
new sap.m.Text({

    text : "{currentValue}",
   
}),         
new sap.m.ObjectIdentifier({
	        	id : "titleTab",
	        	title : "{Article}",
	         }),
	         
	         
	    
	        
	        
	        
	        ]
	    }));*/



	
	  var runningInDsktop = g_runningOnDesktop;
	  var runningInTablet = g_runningInTablet;
	  
	  if(g_runningInTablet == false && g_runningOnPhone == false)
		  {
		  oTable.setWidth("70%");
		  oTable.addStyleClass("left-location-Defect-Desktop");
		  
		  }
	  else if( runningInTablet == true){
		  oTable.setWidth("80%");
		  oTable.addStyleClass("left-location-Defect-Tablet");
		   }
	  else{
		  oTable.setWidth("100%");
		  
	  }
		

	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	return new sap.m.Page({
			title: "Defect List",
			content: [
oTable
			]/*,
			
			footer: new sap.m.Bar({
		        contentRight: [
		          new sap.m.Button({
		            text: "Back",
		           // icon: "sap-icon://back" ,
		            press : function ()
		            {
		            	//app.to(page1);
		            }
		            
		          })
		          
		        ]
			})*/
		});
	
		
	
	}

});