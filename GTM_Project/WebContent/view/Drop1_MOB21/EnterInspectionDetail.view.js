sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.EnterInspectionDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.EnterInspectionDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.EnterInspectionDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.EnterInspectionDetail
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");

    var mob21list = new sap.m.List({
	id : "mob21list", 
	 icon : "sap-icon://edit",
	mode: sap.m.ListMode.SingleSelectMaster,
	//width : "500px",
	includeItemInSelection: true,
	rememberSelections : false,
	select : oController.onSelectMOb21List,
         items: {
			path: "/MOB21Collection",
			
				template: new sap.m.ObjectListItem({
					title: "{lot}", 
					description: "{desc}",
					info : "{matdes}",
					icon : "{insLotSavedSrc}",
					//info : "{matdesc}",
					//press : oController.onClick

					//type : sap.m.ListType.Navigation,

					//press : oController.onClick ,
					firstStatus : new sap.m.ObjectStatus({

					text : "{matnum}"
					}),
			secondStatus : new sap.m.ObjectStatus({

					text : "{matdes}"	

					}),

					attributes : [

					new sap.m.ObjectAttribute({

					text : "{desc}"

					}),

					
					]

					})
					},
});

    if( g_runningOnPhone == false)
    	{
    	 mob21list.addStyleClass("paddingBottom_Ins");
    	}
   
    
    
    
    
/* oSearch = new sap.m.SearchField({
    placeholder: "Search",
    liveChange: oController.filterList
  });*/
 
//list1.setModel(oJason1);
  
var containerList = new sap.m.FlexBox({
	
	items: [
	       mob21list
	      
	       ],
	direction:"Column",
	justifyContent:"Start",//Contents would be placed in the begin
	alignItems:"Center"
});


if(g_runningOnPhone == true)
	{
	return new sap.m.Page({
		id  : "Mob21-SecondScreen-Mobile-BackNavButton",
		title: "Inspection Lots",
	content: [mob21list],
	showNavButton: true,
	navButtonTap:function(){  
		g_MobileNavigationId = "Mob21-BackNavButton"; 
		sap.ui.getCore().byId("myApp").to("idMOB21Mas");
	},
});
	}
else
	{
	return new sap.m.Page({
		//title: "",
		showHeader : false,
	content: [mob21list]
	
});
	}
	

 		
	}

});