function GTM_LaunchpadService()
{

debugger;
var serviceURL = getUrl("/sap/opu/odata/UI2/PAGE_BUILDER_PERS/");
var tileSetupModel = new sap.ui.model.odata.ODataModel(	serviceURL, true, "dev1", "initial1", null,	true, true, false);
var readRequestURL = "PageSets('%2FUI2%2FFiori2LaunchpadHome')?$expand=AssignedPages/PageChipInstances/ChipInstanceBags/ChipInstanceProperties";
			tileSetupModel
					.read(
							readRequestURL,
							null,
							null,
							false,
							function(oData, oResponse) {
                            var result = oResponse.body; // Getting// JSON// response// body
                            window.localStorage.setItem("Mob00TileResults",result);
                            var jsonObj = JSON.parse(result); // Parsing// the// JSON// Object
                            var result = jsonObj.d.AssignedPages.results;
                            for (var index = 0; index < result.length; index++) {
                            		if (result[index].id.indexOf("Z_GRP_GTM") != -1)// this// is a// group// created// for// Custom// Launchpad
                            		{
                            			var tileNames = result[index].PageChipInstances.results;
                            			var innerIndex;
                            			for (innerIndex = 0; innerIndex < tileNames.length; innerIndex++) {
                            				var chipId = tileNames[innerIndex].chipId;
                            				var chipIDSPLIT1 = chipId.split("CUSTOMIZING");
                            				var tileSetupModelNew = new sap.ui.model.odata.ODataModel(serviceURL,		true,		"dev1",		"initial1",		null,		true,		true,		false);
                                            var readRequestURLNew = "Chips('"   + chipId    + "')?$expand=ChipBags/ChipProperties";
        	tileSetupModelNew.read(
        			readRequestURLNew,null,null,false,function(oData,oResponse) {
        				debugger;
					var result = oResponse.body;
                    var jsonObj = JSON.parse(result); 
                    var config = jsonObj.d.configuration;
					window.localStorage.setItem("Mob00UserTileSetUpChips_Array"+chipId,config);
					var configDataArr = config.split(",");
					var tileSubtitleInit = configDataArr[3];
					var subTitleArr = tileSubtitleInit.split(":");
					var tileSubtitleInitLen = subTitleArr[1].length;
					var tileSubtitleFinal = subTitleArr[1].substring(2,tileSubtitleInitLen - 2);
					var myTile = tileSubtitleFinal;
					if (    myTile == "L1_WM_SO" ||
							myTile == "L1_WM_SI" ||
							myTile == "L1_HR_HA" ||
							myTile == "L1_WM_GR"
								) {
							sap.ui.getCore().byId("tileconIMWM").addTile(sap.ui.getCore().byId(myTile));
                        }
},
function(
		oError) {
	errorRes = true;
	if (oError.response.statusCode == 401) {
		sap.m.MessageBox.show("User Unauthorized",sap.m.MessageBox.Icon.ERROR,"Error");
}
try {
	var data = JSON
			.parse(oError.response.body);
	for ( var event in data) {
		var dataCopy = data[event];
		try {
			var messageFromBackend = dataCopy.innererror.errordetails[0].message;
			sap.m.MessageBox
					.show(
							messageFromBackend
									+ " "
+ " "
+ " ",
sap.m.MessageBox.Icon.ERROR,
"Error");
} catch (e) {
	sap.m.MessageBox
			.show(
					e.message
							+ " "
+ " "
+ " ",
sap.m.MessageBox.Icon.ERROR,
"Error");
			break;
		}
	}
} catch (e) {
	sap.m.MessageBox
			.show(
					"Service Not Available - Please contact system administrator"
+ " "
+ " "
+ " ",
sap.m.MessageBox.Icon.ERROR,
"Error");
}
							});
		}
	}
}
},
function(oError) {
errorRes = true;
if (oError.response.statusCode == 401) {
	sap.m.MessageBox
			.show(
					"User Unauthorized",
sap.m.MessageBox.Icon.ERROR,
"Error");
}
try {
	var data = JSON
			.parse(oError.response.body);
	for ( var event in data) {
		var dataCopy = data[event];
		try {
			var messageFromBackend = dataCopy.innererror.errordetails[0].message;
			sap.m.MessageBox.show(messageFromBackend+ " "+ " "+ " ",sap.m.MessageBox.Icon.ERROR,"Error");
            } catch (e) {sap.m.MessageBox.show(e.message+ " "+ " "+ " ",sap.m.MessageBox.Icon.ERROR,"Error");
		      break;
	      }
}
} catch (e) {
	sap.m.MessageBox
			.show(
					"Service Not Available - Please contact system administrator"
+ " "
+ " "
+ " ",
sap.m.MessageBox.Icon.ERROR,
"Error");
}
});
}