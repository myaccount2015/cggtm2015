sap.ui.controller("com.cg.gtm.view.Mob18Cost_Items", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18Cost_Items
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18Cost_Items
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18Cost_Items
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18Cost_Items
*/
//	onExit: function() {
//
//	}
	deleteRow : function(){
		
			g_MOB18Delete = true;
	},
	       
	matSel : function(oEvent){
		//showidMob18second_Cost();
		var arrPath = oEvent.oSource._aSelectedPaths;
		
		var path = arrPath[0];
		
		var strSelectedIndex = path.substring(path.lastIndexOf("/")+1);
		
		var selectedIndex = parseInt(strSelectedIndex);
		
		var tabMaterialLst = sap.ui.getCore().byId("idtable_Cost");
		var oModel = tabMaterialLst.getModel();
		//alert(oModel);
		var lenMaterialLst = oModel.oData.modelData.length;
		//alert(lenMaterialLst);
		
		var arrJSONMatLst = oModel.oData.modelData; //Getting JSON value of Material List
	
		var arrMatLst = [];
		
		for(i=0;i<=lenMaterialLst-1;i++) {
			
			if(typeof g_MOB18Delete != 'undefined' && g_MOB18Delete==true) {
				if(i!=selectedIndex) {
					arrMatLst.push(arrJSONMatLst[i]);
					
				}
				
			}
		
			/*if(i==selectedIndex) {
				
				$('span#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('span#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'bold');
				$('span#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'bold');
			}else {
				$('span#MaterialNo-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('span#MaterialDesc-tabMaterialLst-' + i).css('font-weight', 'normal');
				$('span#MaterialQty-tabMaterialLst-' + i).css('font-weight', 'normal');
			}
		}*/
		
		if(typeof g_MOB18Delete != 'undefined' && g_MOB18Delete==true) {
			var oModel2 = new sap.ui.model.json.JSONModel();
			oModel2.setData({modelData: arrMatLst});
			tabMaterialLst.setModel(oModel2);
		}
		
		var ListItem = oEvent.mParameters.listItem;
		ListItem.setSelected(false);
		
		
		g_MOB18Delete = false;
		
		}}
	
	
	
});
 
