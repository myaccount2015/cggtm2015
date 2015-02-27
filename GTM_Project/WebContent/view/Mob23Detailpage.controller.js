sap.ui.controller("com.cg.gtm.view.Mob23Detailpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob23Detailpage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob23Detailpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob23Detailpage
*/
//	onAfterRendering: function() {
//
//	},
select: function(evt){
	
	debugger
},
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob23Detailpage
*/
//	onExit: function() {
//
//	}
showserial : function(oEvent){
	
	 var demo = sap.ui.getCore().getElementById("demoswitch").getState();
     
     if (demo)
{   
 
  var jsonserial = null;
  jsonserial = mob23serial(jsonserial);  //Mock model called
  
	 var oList = sap.ui.getCore().byId("Mob23-oResponsivePopoverList");
	 oList.setModel(jsonserial);
	 
	 this.popover = sap.ui.getCore().byId("Mob23-oResponsivePopover");
		this.popover.openBy(oEvent.getSource());
}
     else{
   	  
 
	serialNumberShowFlag= false;
	var control= oEvent.getSource();
	var sId= control.sId;
	var itemIndex=parseInt(sId.substring(sId.length-1));
	
var plant= Global_MOB23Collection.results[0].NavIM.results[itemIndex].Plant;
var sloc= Global_MOB23Collection.results[0].NavIM.results[itemIndex].Sloc;

if(Global_MOB23Collection.results[0].NavIM.results[itemIndex].Slocdesc=="Non WM"){
	
	serialNumberShowFlag=true;
	sap.ui.getCore().byId("IdMob23WMdetailList").destroyItems();
	sap.ui.getCore().byId("idsearch_WM").setVisible(false);
	sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false);
	 
	

}
var arr= Global_MOB23Collection.results[0].NavSerial.results;
var serialArr=  [];
	for(var i=0;i<arr.length;i++){
		if(arr[i].Plant==plant && arr[i].StorageLoc==sloc){
			
			var obj={};
			obj.serialNumber= arr[i].SerialNo;
			serialArr.push(obj);
		}
		
	}

var oModel2 = new sap.ui.model.json.JSONModel();
oModel2.setSizeLimit(100000)
oModel2.setData({modelData: serialArr});
sap.ui.getCore().byId("Mob23-oResponsivePopoverList").setModel(oModel2);
	this.popover = sap.ui.getCore().byId("Mob23-oResponsivePopover");
	this.popover.openBy(oEvent.getSource());
}
},

selectList : function(evt){
	 if(!serialNumberShowFlag){
   	  
         var demo = sap.ui.getCore().getElementById("demoswitch").getState();
         
           if (demo)
    {   
          	 var Slocdesc = "WM Managed";
          	 if(Slocdesc=="WM Managed"){
/////////////////////////////Phone Version/////////////////////////
          		 if ( g_runningOnPhone == true)
          			{
          			  g_MobileNavigationId = "Mob23-SecondDetail";
          			 //Bin detail data binding
          			 sap.ui.getCore().byId("myApp").to("idMOB23WMDetail"); 
                  	 var jsonbin = null;
                  	 jsonbin = mob23Bindet(jsonbin);  //Mock model called
              		 var oList = sap.ui.getCore().byId("IdMob23WMdetailList");
                  	 oList.setModel(jsonbin);
                  	 sap.ui.getCore().byId("idsearch_WM").setVisible(true);
          			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(true); 
						
						
          			}
          		 else{
          		//	 Mob23WMshow();
          			 //Bin detail data binding
                  	 var jsonbin = null;
                  	 jsonbin = mob23Bindet(jsonbin);  //Mock model called
              		 var oList = sap.ui.getCore().byId("IdMob23WMdetailList");
                  	 oList.setModel(jsonbin);
          			 sap.ui.getCore().byId("idsearch_WM").setVisible(true);
          			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(true); 	
              		// sap.ui.getCore().byId("idsearch_WM").setVisible(true);
							//sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(true); 	 
          		 }
          		
          	 }
          	 else{
          		 sap.ui.getCore().byId("IdMob23WMdetailList").destroyItems();
						sap.ui.getCore().byId("idsearch_WM").setVisible(false);
						sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false);
						 sap.m.MessageBox.show(
								 
						          "This storage location is not WM Managed",
						          sap.m.MessageBox.Icon.WARNING,
									"Warning"
						        );
          	 }
    
    }
  		
  		
  		 

  	
  	/* else{
  		 sap.ui.getCore().byId("IdMob23WMdetailList").destroyItems();
				sap.ui.getCore().byId("idsearch_WM").setVisible(false);
				sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false);
				 sap.m.MessageBox.show(
						 
				          "This storage location is not WM Managed",
				          sap.m.MessageBox.Icon.WARNING,
							"Warning"
				        );
  	 }
}*/
   else{

  	   var IMdata= sap.ui.getCore().byId("idList_Mob23_Stock").getModel().oData;
   	  
  	   var sId= evt.mParameters.listItem.sId;
  	   var index= sId.substring(sId.length-1);
			var listItemData= IMdata[index];
			if(listItemData.Slocdesc=="WM Managed"){
				 if ( g_runningOnPhone == true)
      			{
					  g_MobileNavigationId = "Mob23-SecondDetail";
					 sap.ui.getCore().byId("myApp").to("idMOB23WMDetail"); 
      			}
				 else{
					 debugger;
					 //display: list-item;
					// sap.ui.getCore().byId("idMOB23WMDetail").css('display','list-item');
					 
					 
					// Mob23WMshow();
					 
					 sap.ui.getCore().byId("idsearch_WM").setVisible(true);
          			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(true); 	
				 }
			
			 var data= Global_MOB23Collection;
			 var wmdata= data.results[0].NavWM.results;
			 var finalWMData= []
			for(i=0;i<wmdata.length;i++){
				if(listItemData.Sloc==wmdata[i].Sloc){
					finalWMData.push(wmdata[i])
					
				}
					
				
			}
			 
			 var model= new sap.ui.model.json.JSONModel(finalWMData);
			 sap.ui.getCore().byId("IdMob23WMdetailList").setModel(model);
			 sap.ui.getCore().byId("idsearch_WM").setVisible(true);
			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(true);
			 
			 
		   
			}
			else{
				sap.ui.getCore().byId("IdMob23WMdetailList").destroyItems();
				sap.ui.getCore().byId("idsearch_WM").setVisible(false);
				sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false);
				 sap.m.MessageBox.show(
						 
				          "Bin Details are not available for the selected Storage Location",
				          sap.m.MessageBox.Icon.ERROR,
							"Error"
				        );
				 
				
			}
       }
	 }

	 else{
		 
		 serialNumberShowFlag=false; 
	 }
},




});



