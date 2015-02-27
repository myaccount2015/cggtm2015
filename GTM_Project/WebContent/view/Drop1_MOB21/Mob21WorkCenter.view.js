sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21WorkCenter", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21WorkCenter
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21WorkCenter";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21WorkCenter
	*/ 
	createContent : function(oController) {
var data = [];
		
var textWorkCente = new sap.m.Text({
    text: "Work Center",
  	 
  }).addStyleClass("textDefaultPlant");

var inputWorkCenter = new sap.m.Input({
	id : "ipwrkcntr",
	text : "",
	width: "90%"
}).addStyleClass("selectWC");

var btnOKWC = new sap.m.Button({
    text: "OK",
   // type: sap.m.ButtonType.Accept,
    layoutData: new sap.m.FlexItemData({growFactor: 1})
  }).addStyleClass("btnWC");;
 
btnOKWC.attachPress(oController.workCenterSel);

		data = {"names":
			[
				 {"title":"MECH"},
				 {"title":"MECH1"},
				 {"title":"MECH2"},
				 {"title":"MECH3"},
				 
				 {"title":"MECH4"},
			
				 {"title":"MECH5"},
			
				 {"title":"MECH6"},
				
			
				 {"title":"MECH7"},
			
				
			
				
				 ]};
		//var oJason1 = new sap.ui.model.json.JSONModel(item_list);
		// create a Model with this data
		var model = new sap.ui.model.json.JSONModel();
		model.setData(data);
		
	
		
		// create a List control
		    
		var list = new sap.m.List({
			
		      mode: sap.m.ListMode.SingleSelectMaster,
		      includeItemInSelection: true,
		      selectionChange : oController.workCenterSel,
		      items: {
		        path: "/names",
		        template: new sap.m.StandardListItem({
		          title: "{title}",
		           iconDensityAware: false,
		          iconInset: false ,
		         
		        })
		      }
		 });
		
	 list.setModel(model);
	 //list.addStyleClass("List");
	 
	 var btnBack =  new sap.m.Button({
		// icon : "sap-icon://nav-back",
         type: sap.m.ButtonType.Back,
    
         tap : function() {
        	 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
          	 app.toMaster("idMOB21Mas");
          
        	   // oSplitApp.toMaster(Mainpage);
         }
	 
});
		
		if( g_runningOnPhone == true)
		{
		
    	 
       	return new sap.m.Page({
			title: "Work Center",
			 headerContent :[
			    new sap.m.Button({
		        type: sap.m.ButtonType.Back,
		    //    icon : "sap-icon://nav-back",
		        tap : function() {
		        	 var appM = sap.ui.getCore().byId("myApp"); 
		        	 appM.to("idMOB21InitView12");
		           	 appM.to("idMOB21Mas");
		         }
			 
		})],
			content: [
			        //  list
			        textWorkCente,
			        inputWorkCenter,
			        btnOKWC
			],
			footer: new sap.m.Bar({
                
			})
		});
		
		}
		
		else
			{
			return new sap.m.Page({
				title: "Work Center",
				 headerContent :[btnBack],
				content: [
				        //  list
				        textWorkCente,
				        inputWorkCenter,
				        btnOKWC
				],
				footer: new sap.m.Bar({
	                
				}).addStyleClass("footer"),
			});
			}
		
		
		
	}

});