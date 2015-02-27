jQuery.sap.require("sap.m.MessageBox");
sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.MOB21CharDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB21CharDetails
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB21CharDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB21CharDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB21CharDetails
*/
//	onExit: function() {
//
//	}
	
	
	handleMob21SelectedDocListpress : function(){
		
		
	},
	handleCameraButtonPress : function(){
		var idImage = "Mob21AttachedImageViewer1";
		var idImage1 = "Mob21AttachedImageViewer2";
		var idImage2 = "Mob21AttachedImageViewer3";
		var imgURL = "file:///android_asset/www/img/no-image.jpg";
		if( document.getElementById(idImage).src == imgURL){
			capturePhoto(idImage);
		}
		else if( document.getElementById(idImage1).src == imgURL){
			capturePhoto(idImage1);
		}
		else if( document.getElementById(idImage2).src == imgURL){
			capturePhoto(idImage2);
		}
		else{
			alert("Delete Some Photo, only 3 photos are allowed to upload!!!")
		}
	
	},
	
	handleSDCardButtonPress : function(){
		var idImage = "Mob21AttachedImageViewer1";
		var idImage1 = "Mob21AttachedImageViewer2";
		var idImage2 = "Mob21AttachedImageViewer3";
		var source = pictureSource.PHOTOLIBRARY;
		//getPhoto(source,idImage);
		var imgURL = "file:///android_asset/www/img/no-image.jpg";
		if( document.getElementById(idImage).src == imgURL){
			getPhoto(source,idImage);
		}
		else if( document.getElementById(idImage1).src == imgURL){
			getPhoto(source,idImage1);
		}
		else if( document.getElementById(idImage2).src == imgURL){
			getPhoto(source,idImage2);
		}
		else{
			alert("Delete Some Photo, only 3 photos are allowed to upload!!!")
		}
	
		
	
		
	},
	
	responsivePopoverZoom : function(oControllerEvent){
		sap.ui.getCore().byId("Mob00ResPopUp").openBy(g_commonResponsivePopoverOpenBy);
	    var myScroll = new IScroll('#__container1-scroll', {  
	     zoom: true,  
	     scrollX: true,  
	     scrollY: true,  
	     mouseWheel: true,  
	     wheelAction: 'zoom',  
	     scrollbars: false,  
	     freeScroll: true  
	  });
	     var listItem = oControllerEvent.getParameter('listItem');
		 var contextPath = listItem.oBindingContexts.undefined.sPath;
		 var source = this.getModel().getProperty(contextPath + "/imageData");
		 sap.ui.getCore().byId("PopOverImage").setSrc(source);
		 //g_DeleteImageFromPopOver = getImgId;
		 g_DeleteImageListFromPopOver = source;
		 //g_DeleteImageListId = "Mob16AddedImageList";
	},
	
	
	handleIconTabBarSelect : function(oControlEvent)
	{
	
	var insLotNum = sap.ui.getCore().byId("Mob21lot"); 
		var key = oControlEvent.mParameters.key;
		if( key == "Mob21Image")
			{	openSplashScreen();
			g_DeleteImageListId = "Mob21AddedImageList";
			var InspNum = insLotNum.getText();  
			var ListId = "Mob21ImageListItem";
			var MobId= "Mob21";
			var iconType = "IMG";
			//getDocument(matnum,listId,MobId,type);
			// var readRequestURL = "InsplotColl?$filter=Insplot_No  eq '"+NotiNumber +"' &$expand=NavDocs";
			getDocumentImageForMob21(InspNum,ListId,MobId,iconType);
			closeSplashScreen();
			}
		else if(key == "Mob21Doc" )
			{	openSplashScreen();
			var InspNum = insLotNum.getText();  
			var ListId = "Mob21DocumentListItem";
			var MobId= "Mob21";
			var iconType = "DOC";
			//getDocument(matnum,listId,MobId,type);
			// var readRequestURL = "InsplotColl?$filter=Insplot_No  eq '"+NotiNumber +"' &$expand=NavDocs";
			getDocumentImageForMob21(InspNum,ListId,MobId,iconType);
			closeSplashScreen();
			}
		
		
		else if(key == "Mob21Upload" )
		{
		sap.ui.getCore().byId("Mob21UploadImageSelection").openBy(g_commonResponsivePopoverOpenBy);
		}
		
	},
	
	handleMob21SelectedDocListpress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
		var results = "(Documentnumber='"  +  Documentnumber  +
	    "',Documenttype='"    +  Documenttype    +
	    "',Documentpart='"    +  Documentpart    +
	    "',Documentversion='" +  Documentversion +
	    "',Originaltype='"   +  Originaltype    +"')/$value";
		url1 = url1 + results;
	
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
		//navigator.app.loadUrl(url1, { openExternal:true } );
			downloadAndDisplayPDF(url1);
		}
		
		
	},
	
handleMob21SelectedImageListpress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = this.getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = this.getModel().getProperty(contextPath + "/Documenttype");
		var Documentpart = this.getModel().getProperty(contextPath + "/Documentpart");
		var Documentversion = this.getModel().getProperty(contextPath + "/Documentversion");
		var Originaltype = this.getModel().getProperty(contextPath + "/Originaltype");
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
		var results = "(Documentnumber='"  +  Documentnumber  +
	    "',Documenttype='"    +  Documenttype    +
	    "',Documentpart='"    +  Documentpart    +
	    "',Documentversion='" +  Documentversion +
	    "',Originaltype='"   +  Originaltype    +"')/$value";
		url1 = url1 + results;
	
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
			downloadAndDisplayImage(url1);
		}
		
		
	},
	
	mob21CharDetSave : function()
	{
		
		// var sampleSize = sap.ui.getCore().byId("ip_samplesize").getValue(); 
		var sampleSize = "rr";
		 if ( null == sampleSize || sampleSize == "")
			{
			 sap.m.MessageBox.show(

					 "Please provide data in all mandatory fields",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"

					 );


			// alert("Please provide value in mandatory field/s ");
			 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
			}
		
		else
			{
			
			
			
			
			
		 var rangeText = sap.ui.getCore().byId("text_er1"); 
		     rangeText =  rangeText.getText().replace(/,/g,".");
		 var index = rangeText.indexOf("..");
		 var startRange = rangeText.substring(0,index);
		 var endRange = rangeText.substring(index +2);
		 var startRangeInt =   parseInt(startRange);
		 var endRangeInt =   parseInt(endRange);
		
		 var sampleSizeInt = parseInt(sampleSize);
		 
		 if ( sampleSizeInt <  startRangeInt || sampleSizeInt > endRangeInt)
			 {
			 sap.m.MessageBox.show("Please provide a value in the allowed range",
					 sap.m.MessageBox.Icon.ERROR,
						"Error"
					 );
			 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
			 }
		 
		 else
			 {
//entering  the inspection ....
			 saveMOB21Local();
			 var demoswitch = sap.ui.getCore().byId("demoswitch");
				
				if (demoswitch.getState())
				{
					sap.m.MessageBox.show("Inspection entered successfully",
							sap.m.MessageBox.Icon.SUCCESS,
							"Success"
							);
					
				}
				
				else
					{
			 openSplashScreen();//splash screen opened	
			   var insLotNum = sap.ui.getCore().byId("Mob21lot"); 
			 //DMS
				//Get Length of Added image in list
				var addedImageList = sap.ui.getCore().byId("Mob21AddedImageList").getModel();
				if( addedImageList != undefined){
					addedImageList = addedImageList.getData();
					if(addedImageList != null){
						addedImageList = addedImageList.length;
					}
				}
				var NotificationNo = insLotNum.getText();
				//var NotificationNo = "200000664";//200000476
				//var CurrentMob = "MOB21";
				var MobKeyValue = "QMQMEL";
				for( var i = 0 ; i< addedImageList; i++){
					var addedImageSourcePath1 = sap.ui.getCore().byId("Mob21AddedImageList").getModel().getData();
					var addedImageSourcePath = addedImageSourcePath1[i].imageData;
					
					var CurrentMob  = addedImageSourcePath1[i].imageName;
					var getResValue = 	getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath);
				}
				
				
			//Service Start Time
			 var logInfo = getTimeStamp() +"MOB21:: Service: InsplotColl Start" ; 
			 
			 var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
			 if(serviceURL == "Fail")
			 {
			 return false;
			 }
				var oDataEnterInspection = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName , getPassword, null, true, true, false);
				//var readRequestURL =
				//("/InsplotColl(Insplot_No='10000000217',Inspection_Operation_No='0010',Inspection_Char_No='8000')");
				var readRequestURL =(
					"/InsplotColl(Insplot_No='" + insLotNum.getText() + "'" + 
					",Inspection_Operation_No='" + globalInsOp +  "'" + 
					",Inspection_Char_No='" + globalInsChar +"')");
				
				oDataEnterInspection.setHeaders({
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/json",
					"X-CSRF-Token" : "Fetch",
					"DataServiceVersion" : "2.0"
				});
				var insResult = "";	
				if (sap.ui.getCore().byId("insResDDMOB21").getVisible())
					{
					
					insResult = sap.ui.getCore().byId("insResDDMOB21").getSelectedKey()+" HRECODE"; 
					}
				
				else
					{
					
					 insResult = sap.ui.getCore().byId("ip_samplesize").getValue(); 	
					}
				
				var insNotes = sap.ui.getCore().byId("insNotesTextFieldMob21"); 
				var createReqData = {
						//"Inspection_Result" : "20"
						"Inspection_Result" : insResult,
						"Inspection_Description":insNotes.getValue()
						
						
					};
				 setTimeout(function(){
					    closeSplashScreen();//splash screen closed
				oDataEnterInspection.update(readRequestURL, createReqData, null, 
						function(oResponse) {
					sap.m.MessageBox.show(
							"Inspection entered successfully",
							sap.m.MessageBox.Icon.SUCCESS,
							"Success");
					sap.ui.getCore().byId("mob21mastree1").getSelectedItem().setIcon("img/images_2.jpg")
					sap.ui.getCore().byId("insResDDMOB21").setEnabled(false);
					sap.ui.getCore().byId("insNotesTextFieldMob21").setEnabled(false);
					sap.ui.getCore().byId("ip_samplesize").setEnabled(false)
					sap.ui.getCore().byId("Mob21-footer-6").getContentRight()[0].setEnabled(false)
					
					
					if( g_isDebug == true)
					{
						//Service End Time
						var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Finish" ; 
						//Log file Service Start and End Time
						var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						logFileUpdate(g_ServiceStartEndTime);
					}
					
					
					
					//DMS
					var emptyArray = [];
					var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
					sap.ui.getCore().byId("Mob21AddedImageList").setModel(oJasonNotiQModel);
					
				}, function(oError){ 
					/*sap.m.MessageBox.show("Error While Entering the inspection " + oError.message +" "+oError.status+" "+oError.Statustype,
							sap.m.MessageBox.Icon.ERROR,
							"Error"
							);*/
					
			
					//DMS
					var emptyArray = [];
					var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
					sap.ui.getCore().byId("Mob21AddedImageList").setModel(oJasonNotiQModel);
					
					try{
						var data = JSON.parse(oError.response.body);
						for(var event in data){
						var dataCopy = data[event];	
							try{
							var messageFromBackend = dataCopy.innererror.errordetails[0].message;
							sap.m.MessageBox.show(
							messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
							catch(e)
							{sap.m.MessageBox.show(e.message+ " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");break;
							}}}catch(e){sap.m.MessageBox.show(
                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
							sap.m.MessageBox.Icon.ERROR,"Error");
							
							if( g_isDebug == true)
							{
							//Service End Time
							var logInfo1 = getTimeStamp() +"MOB21:: Service: InsplotColl Failed no network" ; 
							//Log file Service Start and End Time
							var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
							logFileUpdate(g_ServiceStartEndTime);
							}
							
							
							
							}
				});
				 },1000);//constant delay
					
			 
			 }
			}
		 
			}
	},
	showPDFMOB21 : function()
	{
		//alert("inside function");
		
 		
 		
 		if( g_runningOnPhone == true)
    	{
    	var app = sap.ui.getCore().byId("myApp");
 		app.to("idMOB21PDFView");
    	}
    else
    	{
    	var app = sap.ui.getCore().byId("splitAppMOB21Det");
 		app.to("idMOB21PDFView");
    	}
 		
 		// * Setting the IFRAME PDF Container - Start
 		 
 		var pdfHTMLContainer = sap.ui.getCore().byId("pdfHTMLContainerMOB21");
 		pdfHTMLContainer.setContent("<div id='pdfFrame' style='height:100%;padding-top:3%;padding-bottom:8%;padding-right:3%;padding-left:3%;'> <IFRAME name='iframe' src='viewer/web/viewer.html?file=sample.pdf' width=100% height=100% marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=auto></IFRAME> </div>");
 		
 		// * Setting the IFRAME PDF Container - End
 		 
		
		
	},
	showIMGMOB21 : function()
	{
		//alert("inside function");
		  var img = sap.ui.getCore().byId("mobImgVie21");
			  img.setSrc("img/mob31mattool.jpg");
				
			  
	    if( g_runningOnPhone == true)
	    	{
	    	var app = sap.ui.getCore().byId("myApp");
	 		app.to("idMOB21IIMGView");
	    	}
	    else
	    	{
	    	var app = sap.ui.getCore().byId("splitAppMOB21Det");
	 		app.to("idMOB21IIMGView");
	    	}
		
			  
	},


checkSampleSize : function()
{	
	
var sampleSize = sap.ui.getCore().byId("ip_samplesize").getValue(); 
if ( null == sampleSize || sampleSize == "")
{

 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
}

else if ( sampleSize != null)
{
var num= (/^[0-9]*$/);
var text= sap.ui.getCore().byId("text_er1").getText();
var param= "";
for(i=0;i<text.length;i++){
	if(!text[i].match(num)){
		param= text[i];
		break;
	}
	
}
if(param== ","){
	var myInteger = (/^[0-9]+\,?[0-9]*$/);
	var character= "Comma";
	
}
else{
	var myInteger = (/^[0-9]+\.?[0-9]*$/);
	var character= "decimal";
}
var tfValue = sampleSize.trim();


//	var myInteger = (/^[0-9]+\,?[0-9]*$/);

//	var newval = tfValue.substr(0,(tfValue.length -1));

if( !tfValue.match(myInteger) )
{
	//sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
	sap.m.MessageBox.show(

			 "Only Numeric values and "+character+" allowed",
			 sap.m.MessageBox.Icon.ERROR,
				"Error"

			 );
	sap.ui.getCore().byId("ip_samplesize").setValue(sampleSize.substring(0,sampleSize.length-1))
}
else
{
	sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.None);
}


}




else
{
sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.None);
var rangeText = sap.ui.getCore().byId("text_er1"); 
rangeText =  rangeText.getText().replace(/,/g,".");
var index = rangeText.indexOf("..");
var startRange = rangeText.substring(0,index);
var endRange = rangeText.substring(index +2);

var startRangeInt =   parseInt(startRange);
var endRangeInt =   parseInt(endRange);

var sampleSizeInt = parseInt(sampleSize);

if ( sampleSizeInt <  startRangeInt || sampleSizeInt > endRangeInt)
 {

 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.Error);
 }
else
 {
 
 sap.ui.getCore().byId("ip_samplesize").setValueState(sap.ui.core.ValueState.None);
 }
}

},
imgOpenMOB21: function(event) {
	//aler("hi");

	var img = sap.ui.getCore().byId(event.mParameters.id);

	var str = img.mProperties.src;
	
	 var img = sap.ui.getCore().byId("mobImgVie21");
	   img.setSrc(str);
		var app = sap.ui.getCore().byId("splitAppMOB21Det");
 		app.to("idMOB21IIMGView");
	
	/*var n = str.lastIndexOf(".");
	
	var result = str.splice( n, 0, "_1" );
	
	var imgPop = sap.ui.getCore().byId("ImagePopMOB16");
	
	imgPop.setSrc(str);
	
	if (! this.popover) {
		this.popover = sap.ui.xmlfragment(
			"myprefix",
			[this.getView().getControllerName(), "popover"].join("."),
			this // associate controller with the fragment
		);
		
		this.popover = sap.ui.getCore().byId("PopoverMOB16");
	}
	//this.popover.setModel(this.getView().getModel());
	//this.popover.bindElement("/ProductCollection/0");
	this.popover.openBy(event.getSource());
	*/
	
},

removeLocalData : function()
{
	
	
	   var items = window.localStorage.getItem('INSRES');
    	 if (items != undefined && items != null && items.length != 0)
    	 {
    		 
    		var insresults = [];
    		insresults = JSON.parse(items);
    		var insresultsLen = insresults.length;
    		
    		for ( index = 0; index < insresultsLen ; index ++)
    			{
    			  
    			 window.localStorage.removeItem(insresults[index]);
    			
               }
    		 window.localStorage.removeItem('INSRES');

}
}

});

function saveMOB21Local()
{	
	var charList = new Array();;
	 var currDate = new Date();
      	currDate.toDateString();
      	var timeMilli = currDate.getTime();
	 var items = window.localStorage.getItem('MOB21CHAR');
 	 if (items === undefined || items === null || items.length === 0)
 	 {
 		 
 		charList[0] = sap.ui.getCore().byId("Mob21lot").getText() ;//.concat(
				//globalInsOp.concat(globalInsChar));  //Key value either timestamp (or) NotiId
 		var charModelString = 	JSON.stringify(charList);
 		 window.localStorage.setItem("MOB21CHAR", charModelString);//store the notification number 
 	 }else {
 		var currDate = new Date();
      	currDate.toDateString();
      	var timeMilli = currDate.getTime();
      	
      	var cahrDetRcvd =  JSON.parse(items);
      	
      	var cahrDetRcvdLen = cahrDetRcvd.length ;
      	var duplicate = false ;
      	
      	for ( index = 0 ; index < cahrDetRcvdLen ; index ++)
      		{
      		if (sap.ui.getCore().byId("Mob21lot").getText() == cahrDetRcvd[index])
      			{
      			
      			duplicate = true ;
      			break ;
      			
      			}
      		
      		}
      if (duplicate == false )
    	  {
    	  
    	  cahrDetRcvd.push(sap.ui.getCore().byId("Mob21lot").getText()); //.concat(
		  var charRcvdString = 	JSON.stringify(cahrDetRcvd);
    	  window.localStorage.setItem("MOB21CHAR", charRcvdString);
    	  }
      		
 	 }
	
	var currDate = new Date();
  	currDate.toDateString();
  	var timeMilli = currDate.getTime();
	var insResult = "";
	if (sap.ui.getCore().byId("insResDDMOB21").getVisible())
	{
	
	insResult = sap.ui.getCore().byId("insResDDMOB21").getSelectedKey(); 
	}
	else
		{
		
		insResult = sap.ui.getCore().byId("ip_samplesize").getValue();
		}
	var charData = {
				//"title": timeMilli.toString().concat(" (Q1)"),
						"key": globalInsOp.concat(globalInsChar),
						"insres" : 	insResult,    	 
	     				"inslot" : sap.ui.getCore().byId("Mob21lot").getText(),
				"imgList" : [sap.ui.getCore().byId("image1Mob21").getSrc(),
				             sap.ui.getCore().byId("image2Mob21").getSrc(),
				             sap.ui.getCore().byId("image3Mob21").getSrc()],
				
				"createdTime" : timeMilli
			};
	
	var stringifiedNoti = JSON.stringify(charData);
	var insKey =  sap.ui.getCore().byId("Mob21lot").getText().concat("_".concat(globalInsOp.concat(globalInsChar)));
	
	 var itemsIns = window.localStorage.getItem(insKey);
 	 if (itemsIns === undefined || itemsIns === null || itemsIns.length === 0)
 	 {
	window.localStorage.setItem(insKey , stringifiedNoti);
	 }
 	 else
 		 {
 		window.localStorage.removeItem(insKey);
 		window.localStorage.setItem(insKey , stringifiedNoti);
 		 }
}
 		 
	