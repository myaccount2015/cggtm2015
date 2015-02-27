sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21DetailsMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21DetailsMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.MOB21DetailsMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21DetailsMaster
	*/ 
	createContent : function(oController) {
		
		var countValueSetter = new sap.m.Text({
			id:"countValueSetter-CharMob21",
			text : "1"
		});

/*var treeStructure = new sap.ui.commons.Tree("mob21mastree");
treeStructure.bindAggregation("nodes","/mob21TreeData",function(sId,oContext){  
    var treePath = oContext.getPath();  
    var bindTextName = "";  
    if(treePath.indexOf("valChar") !== -1) {  
        bindTextName = "charval";   
} else 

{  
        bindTextName = "textChar"; 
    //hw to use press property in model

} 
    return new sap.ui.commons.TreeNode({
 	   expanded : false,
 	   selected : oController.onTreeSelectionMOB21// function()
    }).bindProperty("text",bindTextName);  
});*/

var treeStructure=  new sap.m.List({
    id: "mob21mastree1",
    
    height: "100%",
//    mode: "{device>/listMode}",
  //  noDataText: "{i18n>TaskMasterNoData}",
    items: {
      path: "/",
      template: new sap.m.ObjectListItem("",{
      	visible: true,
        title: "{InspCharacterstic_Text}",
    type: "Navigation",
        number: "{Inspection_Char_No}",
      press: oController.onListItemSelection,
    
        
        attributes: new sap.m.ObjectAttribute({
          	text:"{Insplot_No}",
          	
          }),
      }),
      
     
      sorter: new sap.ui.model.Sorter("Inspection_Operation_No", false, function(oContext) {
        return {
          key: oContext.getProperty("Inspection_Operation_No")+ " -"+ oContext.getProperty("InspOperation_Text"),
        
        };
      })
    }
  });





if( g_runningOnPhone == true)
	{
	return new sap.m.Page({
		id : "Mob21-FourthScreen-Mobile-BackNavButton",
		title: "Inspection Characteristics",
	content: [treeStructure],
	
	showNavButton: true,
	navButtonTap:function(){  
		g_MobileNavigationId = "Mob21-ThirdScreen-Mobile-BackNavButton"; 
		//sap.ui.getCore().byId("myApp").to("idMOB21DetChar");
		
		sap.ui.getCore().byId("myApp").to("idMOB21Detscr");
		
	
		
		
	},
	
	
	footer: new sap.m.Bar({
	     
	})

	
});
	
	}

else
	{
	return new sap.m.Page({
		title: "Inspection Characteristics",
	content: [treeStructure],
	footer: new sap.m.Bar({
	     
	}).addStyleClass("footer"),

	
});
	
	}

	
	

 		
	}

});