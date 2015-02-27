jQuery.sap.require("sap.m.MessageToast");

var MOB02Dialog;
var MOB02InputId;
var MOB02Previous;

sap.ui.controller("com.cg.gtm.view.Drop3_MOB02.MOB02Detail", {

	previousToggleButtonPressed: null,

	handleNavButtonPress: function () {
		sap.ui.getCore().byId("myApp").back();
	},

	handleHelpButtonPress: function () {


		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "MOB02";
		var helpDocNumber = HelpDocument(MobileScreenNumber);
		url1 = url1 + "('"+helpDocNumber+"')/$value";
		if(g_runningOnPhone == false && g_runningInTablet == false) {
		window.open(url1, '_blank'); 
		window.focus();
		} else {
		//navigator.app.loadUrl(url1, { openExternal:true } );
			downloadAndDisplayPDF(url1);
		}
		

	

	},

	handleValueHelp: function (evt) {
		MOB02InputId = evt.getSource().sId;
		MOB02Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB02.MOB02Dialog", sap.ui.getCore().byId("MOB02Detail").getController());
		MOB02Dialog.setTitle(evt.getSource().getName());
		var codesModel = new sap.ui.model.json.JSONModel("view/data/codes.json");
		MOB02Dialog.setModel(codesModel);
		MOB02Dialog.open(evt.getSource().getValue());
	},

	handleDialogSearch: function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter({
			filters: [
				new sap.ui.model.Filter("Code", sap.ui.model.FilterOperator.StartsWith, sValue)
			]
		});
		var oBinding = evt.getSource().getBinding("items");
		oBinding.filter([oFilter]);
	},

	handleDialogConfirm: function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var input = sap.ui.getCore().byId(MOB02InputId);
			input.setValue(oSelectedItem.getTitle());
		}
		//evt.getSource().getBinding("items").filter([]);
	},

	handleDialogCancel: function (evt) {
		//evt.getSource().getBinding("items").filter([]);
	},

	handleToggleButtonPress: function (evt) {
		if (this.previousToggleButtonPressed && this.previousToggleButtonPressed !== evt.getSource()) {
			this.previousToggleButtonPressed.setPressed(false);
		}
		this.previousToggleButtonPressed = evt.getSource();
		g_buttonvalMOB02 =  sap.ui.getCore().byId(evt.getSource().sId).getText();
		var durVal = "";
		//alert(g_buttonvalMOB02);
		switch (g_buttonvalMOB02) {
	    case "30 Mins":
	    	durVal = "30";
	        break;
	    case "1 Hour":
	        durVal = "60";
	        break;
	    case "1.5 Hours":
	        durVal = "90";
	        break;
	    case "2 Hours":
	        durVal = "120";
	        break;
	    case "3 Hours":
	        durVal = "180";
	        break;
	    case "4 Hours":
	        durVal = "240";
	        break;
	    
	}
		g_buttonvalMOB02 = durVal;
		//alert(g_buttonvalMOB02);
	},

	handleSubmitButtonPress: function () {
		
		if ( undefined == 	window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"CHGDUR"))
			{
			window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"CHGDUR", sap.ui.getCore().byId("reasonCodeInput").getValue()+"_"+g_buttonvalMOB02);
			}
		
		else
			{
		window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"CHGDUR");
		window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"CHGDUR", sap.ui.getCore().byId("reasonCodeInput").getValue()+"_"+g_buttonvalMOB02); 
			}
		drop3TRQ(g_ordnum + "_" + g_actnum, "CHGDUR");
		writeToFileMOB02(g_ordnum  ,  g_actnum);
		sap.ui.getCore().byId("myApp").back();
		sap.m.MessageToast.show(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB02SubmitMessage"));
	}

});

function writeToFileMOB02(ordnum , actnum)
{
    
    var notiNumber =  "";
    var currDate = new Date();
		currDate.toDateString();
		  var timeMilli = currDate.getTime();
   // var items = window.localStorage.getItem('NOTILISTMOB01T');
    var trQ = window.localStorage.getItem('TRQ');
  	 if (trQ === undefined || trQ === null || trQ.length === 0)
  	 {
  		
  		// create a metadata object 
  		 /*var currDate = new Date();
       		currDate.toDateString();
       		  var timeMilli = currDate.getTime();*/
  		 
   		str1 = currDate.toDateString();
  		str2 =  " ";
  		str3 = currDate.toLocaleTimeString();
  		var res1 = str1.concat(str2);
  		var res2 = res1.concat(str3);
  		 
  		 var data =  { "Tran": "EXTEND",
  				       "Key" : timeMilli ,
  				      "Time" : timeMilli,
  				      "Status" : "INIT" ,
  				      "Date" : res2};
  		 
  		 
       		  notiNum[0] = data; 
  		var notiModelString = 	JSON.stringify(notiNum);
  		 window.localStorage.setItem("TRQ", notiModelString);//store the notification number 
  		
 		notiNumber="NOTI "+notiNumber;
  		 //NOW move data to actual object
 		
 		
  		var notiData = {
  				//"title": timeMilli.toString().concat(" (Q1)"),notiNumber
  				"time" : timeMilli,
  				"title": notiNumber,
  				"date": res2,
  				"Order" : ordnum,
  				"Activity" : actnum ,
  				"OperationProcessActivity" : "EXTD" ,
  				"ReasonForVariance" : "EXTD",
  				"Plant" : "GWNP",
			    "PersonnelNumber" :g_personalNum,
			    "PostingDate" : "2014-12-04T03:30:30",
			    "NormalDuration" : g_buttonvalMOB02
			 
			   };
  		

  			var stringifiedNoti = JSON.stringify(notiData);
  			
  			
  			var dataForFile =  {
  					            "Items" : notiData};
  			//var dataForFile = stringifiedNoti ;//JSON.stringify(result);
  			var myJSONObject = {"myData": JSON.stringify(dataForFile)};
  			
  			if(g_runningInTablet || g_runningOnPhone) {
  				//saveOnMobileMOB01(myJSONObject , timeMilli);
  				saveOnMobileMOB01(JSON.stringify(dataForFile) , getUserName()+timeMilli);  
  			}else {
  				//saveOnDesktopMD(myJSONObject);
  			
  			
  			//dataForFile =  "Ekdum jhakaas hai re ";
  			$.ajax({
  			  url: "FileHandle?readOrWrite=write&fileName="+timeMilli,
  			  type: "post",
  			  dataType: "text",
  				//processData: false,
  				data: myJSONObject,
  			  success: function(text){
  			      alert("success");
  			     //  $("#result").html('submitted successfully');
  			  },
  			  error:function(){
  			      alert("failure");
  			     // $("#result").html('there is error while submit');
  			  }   
  			});
  			}
  			
  			//window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notification number 
  			//createModifiedModelCompMOB01(timeMilli);
  	 }
  	 else
  		 {
  		 
  		
  		
  		notiNumRcvd =  JSON.parse(trQ);
  		
  		str1 = currDate.toDateString();
  		str2 =  " ";
  		str3 = currDate.toLocaleTimeString();
  		var res1 = str1.concat(str2);
  		var res2 = res1.concat(str3);
  		 
  		 var data =  { "Tran": "EXTEND",
			       "Key" : timeMilli ,
				      "Time" : timeMilli,
				      "Status" : "INIT" ,
				      "Date" : res2};
  		
		 
		 
  		notiNumRcvd.push(data);//pushing new noti number 
  		
  		//onotiNumRcvd.push(timeMilli);//pushing new noti number 
  		 
  		var notiNumRcvdString = 	JSON.stringify(notiNumRcvd);
  		 window.localStorage.setItem("TRQ", notiNumRcvdString);
  		 
  		str1 = currDate.toDateString();
 		str2 =  " ";
 		str3 = currDate.toLocaleTimeString();
 		var res1 = str1.concat(str2);
 		var res2 = res1.concat(str3);
 		notiNumber="NOTI "+notiNumber;
 		
  		var notiData = {
  				//"title": timeMilli.toString().concat(" (Q1)"),notiNumber
  				"time" : timeMilli,
  				"title": notiNumber,
  				"date": res2,
  				"Order" : ordnum,
  				"Activity" : actnum ,
  				"OperationProcessActivity" : "EXTD" ,
  				"ReasonForVariance" : "EXTD",
  				"Plant" : "GWNP",
			    "PersonnelNumber" :g_personalNum,
			    "PostingDate" : "2014-12-04T03:30:30",
			    "NormalDuration" : g_buttonvalMOB02
			 
			   };
  			//var stringifiedNoti = JSON.stringify(notiData);
  			
  			var stringifiedNoti = JSON.stringify(notiData);
  			var dataForFile =  {
		            "Items" : notiData};
//var dataForFile = stringifiedNoti ;//JSON.stringify(result);
var myJSONObject = {"myData": JSON.stringify(dataForFile)};
  			if(g_runningInTablet || g_runningOnPhone) {
  				saveOnMobileMOB01(JSON.stringify(dataForFile) , getUserName()+timeMilli);  
  			}else {
  			$.ajax({
    			  url: "FileHandle?readOrWrite=write&fileName="+timeMilli,
    			  type: "post",
    			  dataType: "text",
    				//processData: false,
    				data: myJSONObject,
    			  success: function(text){
    			      alert("success");
    			     //  $("#result").html('submitted successfully');
    			  },
    			  error:function(){
    			      alert("failure");
    			     // $("#result").html('there is error while submit');
    			  }   
    			});
  			}
  			   
  			//window.localStorage.setItem(timeMilli.toString(), stringifiedNoti);//store the notofication numnber 
  			//createModifiedModelCompMOB01(timeMilli);
    	}
  	 
  
	  

}