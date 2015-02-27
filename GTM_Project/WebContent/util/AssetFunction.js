function returnTrains(sFleet)
{
	var assetData =  new sap.ui.model.json.JSONModel("view/data/assets.json");
	var assetDataArr = assetData.oData.results;
	var dataArrIni = [];
	var dataArrFinal = [];
	for ( var i = 0 ; i < assetDataArr.length ; i ++)
		{
		
		if ( assetDataArr[i].Tplnr == sFleet && assetDataArr[i].Ingrp.length == 0)
			{
			
			var data = {
					"code" : assetDataArr[i].Tplnr,
					"desc" : assetDataArr[i].Pltxt
					
			};
			dataArrIni.push(data);
			
			}
		}
	
	dataArrFinal = ["results" , dataArrIni];
	
	
		//MOB02InputId = evt.getSource().sId;
		MOB07Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB07.MOB07Dialog", sap.ui.getCore().byId("MOB07Detail").getController());
		//MOB02Dialog.setTitle(evt.getSource().getName());
		var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
		MOB07Dialog.setModel(codesModel);
		MOB07Dialog.open();
		
		//MOB07Dialog
	


}