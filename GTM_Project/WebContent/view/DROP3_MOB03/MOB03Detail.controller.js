jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("com.cg.gtm.view.DROP3_MOB03.MOB03Detail", {

	handleNavButtonPress: function() {
		if( g_runningOnPhone) {
			g_MobileNavigationId = "MOB03MasterTwoPage";
			}
		sap.ui.getCore().byId("MOB03SplitApp").backDetail();
	},

	handleComponentDocListItemPress : function(oControlEvent){
		
		var contextPath = oControlEvent.mParameters.listItem.oBindingContexts.undefined.sPath;	
		var Documentnumber = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Documentnumber");
		var Documenttype = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Documenttype");
   		var Documentpart = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Documentpart");
   		var Documentversion = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Documentversion");
   		var Originaltype = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Originaltype");
		var Wsapplication = sap.ui.getCore().byId("MOB03DocList").getModel().getProperty(contextPath + "/Wsapplication");
		
   		var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV");
   		var results = "/DocumentSet(Documentnumber='"  +  Documentnumber  +
   	    "',Documenttype='"    +  Documenttype    +
   	    "',Documentpart='"    +  Documentpart    +
   	    "',Documentversion='" +  Documentversion +
   	    "',Originaltype='"   +  Originaltype    +"')/$value";
		var url12 = url1 + results;
   		if(g_runningOnPhone == false && g_runningInTablet == false) {
   			    window.open(url12, '_blank'); 
				window.focus();	
				
		} else {
		if(Wsapplication == "JPG" || Wsapplication == "PNG")
		{
		downloadAndDisplayImage(url12);
		}
		else if(Wsapplication == "PDF"){
		downloadAndDisplayPDF(url12);
		}
			
		}
		
		
	},
	
	
	/* Change Status, Job Actions & Reopen Buttons */
	
	selectIconTab : function(oControlEvent)
	{
		
		//alert(oControlEvent.getParameters.key);
	}
	,

	handleChangeStatusButtonPress: function(evt) {
		if (!this.changeStatusActions) {
			this.changeStatusActions = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ChangeStatusActions", this);
			this.getView().addDependent(this.changeStatusActions);
			this.changeStatusActions.setTitle(evt.getSource().getText());
		}

		this.changeStatusActions.openBy(evt.getSource());
		sap.ui.getCore().byId("MOB03RJCT").setVisible(false);
		sap.ui.getCore().byId("MOB03HOLD").setVisible(false);
		sap.ui.getCore().byId("MOB03COMP").setVisible(false);
		sap.ui.getCore().byId("MOB03CAN").setVisible(false);
		sap.ui.getCore().byId("MOB03ACPT").setVisible(false);
		sap.ui.getCore().byId("MOB03RES").setVisible(false);

		if ("DISP" === g_STATUSMOB03) {
			sap.ui.getCore().byId("MOB03ACPT").setVisible(true);
			sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
		} else if ("ACPT" === g_STATUSMOB03) {
			//sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
			sap.ui.getCore().byId("MOB03HOLD").setVisible(true);
			sap.ui.getCore().byId("MOB03COMP").setVisible(true);
			sap.ui.getCore().byId("MOB03CAN").setVisible(true);
		} else if ("HOLD" === g_STATUSMOB03) {
			//sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
			sap.ui.getCore().byId("MOB03RES").setVisible(true);
			//sap.ui.getCore().byId("MOB03COMP").setVisible(true);
			//sap.ui.getCore().byId("MOB03CAN").setVisible(true);
		} else if ("RESM" === g_STATUSMOB03) {
			sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
			sap.ui.getCore().byId("MOB03HOLD").setVisible(true);
			sap.ui.getCore().byId("MOB03COMP").setVisible(true);
			sap.ui.getCore().byId("MOB03CAN").setVisible(true);
		}
		
		//drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , g_STATUSMOB03);
	},

	handleJobActionButtonPress: function(evt) {
		if (!this.jobActionButtonActions) {
			this.jobActionButtonActions = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03JobActions", this);
			this.getView().addDependent(this.jobActionButtonActions);
			this.jobActionButtonActions.setTitle(evt.getSource().getText());
		}
		this.jobActionButtonActions.openBy(evt.getSource());
	},

	handleReopenButtonPress: function() {
		
		
		if (g_ACT === 1) {
			sap.m.MessageToast.show("You cannot accept more than one job at a time ");
		} else {
			g_ACT++;
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "ACPT");
			//	sap.ui.getCore().byId(g_listItemStatusID).setText("Accepted");
			//sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
			//g_STATUSMOB03  =  "ACPT" ;
			//sap.ui.getCore().byId("mob03comp").setVisible(true);
			//sap.ui.getCore().byId("mob03tool").setVisible(true);
			writeToFileMOB03AHR(g_ordnum , g_actnum , "ACPT" , "ACPT" );
			filterOpenJobs();
			filterClosedJobs();
			sap.m.MessageToast.show("Job Reopened");
			sap.ui.getCore().byId("MOB03SplitApp").backDetail();
			sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "ROPEN");
			drop3TRQ(g_ordnum + "_" + g_actnum, "ROPEN");
		}
	},

	/* Job Statuses */

	handleAcceptButtonPress: function() {
		//alert(g_ACT);
		if (g_ACT == 1) {
			sap.m.MessageToast.show("You cannot accept more than one job at a time ");
		} else {
			g_ACT++;
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "ACPT");
			sap.ui.getCore().byId(g_listItemStatusID).setText("Accepted");
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
			writeToFileMOB03AHR(g_ordnum , g_actnum , "ACPT" , "ACPT" );
			g_STATUSMOB03 = "ACPT";
			filterOpenJobs();
			sap.ui.getCore().byId("MOB03COMP").setVisible(true);
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(true);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(true);
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , g_STATUSMOB03);
			drop3TRQ(g_ordnum + "_" + g_actnum, "ACPT");
			//sap.ui.getCore().byId("mob03tool").setVisible(true);
			//sap.m.MessageToast.show(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03AcceptMessage"));
			//this.changeStatusActions = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ChangeStatusActions", this);
			//this.changeStatusActions.close();
			//sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
		}
	},

	handleRejectButtonPress: function() {
		g_reasonCode = "REJT";
		handleOpenRC(g_reasonCode);
		/*if ("ACPT" === g_STATUSMOB03 || "HOLD" === g_STATUSMOB03) {
			g_ACT--;
		}
		if ("HOLD" === g_STATUSMOB03) {
			g_HOLD--;
		}
		window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
		window.localStorage.setItem(g_ordnum + "_" + g_actnum, "RJCT");
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "RJCT");
		drop3TRQ(g_ordnum + "_" + g_actnum, "RJCT");
		writeToFileMOB03AHR(g_ordnum , g_actnum , "RJ01" , "REJT" );
		filterOpenJobs();
		sap.ui.getCore().byId("MOB03COMP").setVisible(false);
		//sap.ui.getCore().byId("mob03tool").setVisible(false);
		sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		sap.m.MessageToast.show("Job Rejected");
		//sap.ui.getCore().byId("MOB03SplitApp").backMaster();
		sap.ui.getCore().byId("MOB03SplitApp").backDetail();
		sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
		*/
		
	},

	handleHoldButtonPress: function() {
		
		g_reasonCode = "HOLD";
		handleOpenRC(g_reasonCode);
		/*
		if (g_HOLD < 2) {
			if ("ACPT" === g_STATUSMOB03) {
				g_ACT--;
			}
			g_HOLD++;
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "HOLD");
			//filterOpenJobs();
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
			g_STATUSMOB03 = "HOLD";
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , g_STATUSMOB03);
			drop3TRQ(g_ordnum + "_" + g_actnum, "HOLD");
			writeToFileMOB03AHR(g_ordnum , g_actnum , "OH01" , "HOLD" );
			filterOpenJobs();
			sap.ui.getCore().byId("MOB03COMP").setVisible(false);
			//sap.ui.getCore().byId("mob03tool").setVisible(false);
			sap.ui.getCore().byId(g_listItemStatusID).setText("On Hold");
			sap.m.MessageToast.show("Job put on hold");
			sap.ui.getCore().byId("MOB03SplitApp").backDetail();
			sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
		} else {
			sap.m.MessageToast.show("You can have a maximum of two jobs On Hold at a given time ");
		}*/
	},

	handleResumeButtonPress: function() {
		if (g_ACT === 1) {
			sap.m.MessageToast.show("You cannot accept more than one job at a time ");
		} else {
			g_ACT++;
			g_HOLD--;
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "DISP");
			sap.ui.getCore().byId(g_listItemStatusID).setText("Accepted");
			//	filterOpenJobs();
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
			sap.ui.getCore().byId("MOB03COMP").setVisible(true);
			//sap.ui.getCore().byId("mob03tool").setVisible(true);
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
			g_STATUSMOB03 = "ACPT";
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , g_STATUSMOB03);
			drop3TRQ(g_ordnum + "_" + g_actnum, "ACPT");
			writeToFileMOB03AHR(g_ordnum , g_actnum , "ACPT" , "ACPT" );
			filterOpenJobs();
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "ACPT");
			sap.m.MessageToast.show("Job Resumed");
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(true);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(true);
		}
	},

	handleCompleteButtonPress: function() {
		if ("ACPT" === g_STATUSMOB03) {
			g_ACT--;
		}
		g_MobileNavigationId = "MOB04Detail";
		sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		
		sap.ui.getCore().byId("MOB04FaultyPartInput").setValue("");
		sap.ui.getCore().byId("MOB04DamageInput").setValue("");
		sap.ui.getCore().byId("MOB04CauseInput").setValue("");
		sap.ui.getCore().byId("MOB03DAMAGE").setSelected(false);
		sap.ui.getCore().byId("MOB03COMMENTS").setValue("");
	 		 
	 	sap.ui.getCore().byId("MOB04DetObjHdr").setTitle(sap.ui.getCore().byId("MOB03DetObjHdr").getTitle());
		 sap.ui.getCore().byId("MOB04DetObjHdr").setNumber(sap.ui.getCore().byId("MOB03DetailPage").getTitle())
		 sap.ui.getCore().byId("MOB04PRI").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt1").getText());
		sap.ui.getCore().byId("MOB04ESD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt2").getText());
		//sap.ui.getCore().byId("MOB04EFD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt3").getText());
		
		var context = sap.ui.getCore().byId("MOB03Detail").getBindingContext();
		sap.ui.getCore().byId("MOB04Detail").setBindingContext(context);
		sap.ui.getCore().byId("myApp").to("MOB04Detail");
		sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "COMP");
	},

	handleCancelJobButtonPress: function() {
		
		g_reasonCode = "CANC";
		handleOpenRC(g_reasonCode); 
		
	/*	if ("ACPT" === g_STATUSMOB03) {
			g_ACT--;
		}
		if ("HOLD" === g_STATUSMOB03) {
			g_HOLD--;
		}
		window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
		window.localStorage.setItem(g_ordnum + "_" + g_actnum, "CANL");
		writeToFileMOB03AHR(g_ordnum , g_actnum , "CA04" , "CANC" )
		filterOpenJobs();
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "CANCL");
		drop3TRQ(g_ordnum + "_" + g_actnum, "CANCL");
		sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		sap.ui.getCore().byId("MOB03COMP").setVisible(false);
		//sap.ui.getCore().byId("mob03tool").setVisible(false);
		sap.ui.getCore().byId("MOB03SplitApp").backDetail();
		sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
		sap.m.MessageToast.show("Job Cancelled");*/
	},

	/* Job Actions */

	handleCreateFollowOnJobButtonPress: function() {
	    	
	    	sap.ui.getCore().byId("myApp").to("MOB01Initial");
	    	
	    	sap.ui.getCore().byId("MOB01FleetInput").setValue("");
			sap.ui.getCore().byId("MOB01FleetInput").setEnabled(true);

			sap.ui.getCore().byId("MOB01TrainInput").setValue("");
			sap.ui.getCore().byId("MOB01TrainInput").setEnabled(false);

			sap.ui.getCore().byId("MOB01CarInput").setValue("");
			sap.ui.getCore().byId("MOB01CarInput").setEnabled(false);

			sap.ui.getCore().byId("MOB01ZoneInput").setValue("");
			sap.ui.getCore().byId("MOB01ZoneInput").setEnabled(false);

			sap.ui.getCore().byId("MOB01PrimarySystemInput").setValue("");
			sap.ui.getCore().byId("MOB01PrimarySystemInput").setEnabled(false);
			
			sap.ui.getCore().byId("MOB01DepotInput").setValue("");
			sap.ui.getCore().byId("MOB01AREA").setValue("");
			
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "CRNT");
		
	    },

	handleChangeJobDurationButtonPress: function() {
		g_MobileNavigationId = "MOB02Detail";
		var context = sap.ui.getCore().byId("MOB03Detail").getBindingContext();
		sap.ui.getCore().byId("MOB02Detail").setBindingContext(context);
		sap.ui.getCore().byId("myApp").to("MOB02Detail");
		sap.ui.getCore().byId("MOB02OBJHDR").setTitle(sap.ui.getCore().byId("MOB03DetObjHdr").getTitle());
		sap.ui.getCore().byId("MOB02OBJHDR").setNumber(sap.ui.getCore().byId("MOB03DetObjHdr").getNumber());
		sap.ui.getCore().byId("MOB02OBJATRPRI").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt1").getText());
		sap.ui.getCore().byId("MOB02OBJSD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt2").getText());
		sap.ui.getCore().byId("MOB02OBJFD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt3").getText());
		sap.ui.getCore().byId("MOB02OBJST1").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt1").getText());
		sap.ui.getCore().byId("MOB02OBJST2").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt2").getText());
		sap.ui.getCore().byId("reasonCodeInput").setValue("");
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "CGDUR");
	},

	handleSplitJobButtonPress: function() {
		

	    
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
	  		 
	  		 var data =  { "Tran": "SPLT",
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
	  				"Order" : g_ordnum,
	  				"Activity" : g_actnum ,
	  				"ReasonForVariance" : "SPLT",
	  				"Plant" : "GWNP",
	  				"FaultyPartCodeGrp" :  "PM1",
	  				"FaultyPartCode" :  "02",
	  				"ProblemCodeGrp" :  "DOTEL",
				    "ProblemCode" : "12", 
				    "CauseCodeGrp" :"PM01", 
				    "CauseCode" : "0100", 
				    "NotificationType" :"ZP", 
				    "PersonnelNumber" :g_personalNum,
				    "LongText" : "",
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
	  		 
	  		 var data =  { "Tran": "SPLT",
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
	  				"Order" : g_ordnum,
	  				"Activity" : g_actnum ,
	  				"ReasonForVariance" : "SPLT",
	  				"Plant" : "GWNP",
	  				"FaultyPartCodeGrp" :  "PM1",
	  				"FaultyPartCode" :  "02",
	  				"ProblemCodeGrp" :  "DOTEL",
				    "ProblemCode" : "12", 
				    "CauseCodeGrp" :"PM01", 
				    "CauseCode" : "0100", 
				    "NotificationType" :"ZP", 
				    "PersonnelNumber" :g_personalNum,
				    "LongText" : "",
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
	  	 
	  
		  



	},

	handleAssetChangeButtonPress: function() {
		
		debugger;
			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
	     	var oModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
	    	var equip= sap.ui.getCore().byId("MOB03Master2List").getModel().getProperty(sap.ui.getCore().byId("MOB03Master2List").getSelectedItem().getBindingContext().sPath+ "/Equipment");
			//var equip= "800001" ;
	     	var readRequestURL = "AssetSet?$filter=Equnr eq '"+equip+"'&$expand=NavStProfile,NavGenData,NavSpecData,NavStData,NavMeasPt,NavDocs,NavCval&$format=json";
	     	oModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) {
	     		

	     		debugger;
	     		sap.ui.getCore().byId("myApp").to("MOB08Detail");
	    		
	    		var equipDetailData= oData.results[0];
	    		
	    		//Setting Doc Data
	    		
	    		var docData= equipDetailData.NavDocs;
	    		var model= new sap.ui.model.json.JSONModel(docData);
    			sap.ui.getCore().byId("MOB08DocList").setModel(model);
	    		
	    		//setting header data
				sap.ui.getCore().byId("MOB08_AssetObjHead").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHead").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHead").setTitle(equipDetailData.NavGenData.results[0].Descript);
				sap.ui.getCore().byId("MOB08_AssetObjHead").getAttributes()[0].setText(equipDetailData.NavSpecData.results[0].InstPos);
				//setting Manufacture data
				sap.ui.getCore().byId("MOB08MF").setValue(equipDetailData.NavGenData.results[0].Manfacture);
	    		sap.ui.getCore().byId("MOB08MFPART").setValue(equipDetailData.NavGenData.results[0].Manparno);
	    		sap.ui.getCore().byId("MOB08MFMODEL").setValue(equipDetailData.NavGenData.results[0].Manmodel);
	    		sap.ui.getCore().byId("MOB08MFSERIAL").setValue(equipDetailData.NavGenData.results[0].Manserno);
	    		
	    		
	    		//setting header data for UserStatus
	    		
	    		sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").setTitle(equipDetailData.NavGenData.results[0].Descript);
				sap.ui.getCore().byId("MOB08_AssetObjHeadStatus").getAttributes()[0].setText(equipDetailData.NavSpecData.results[0].InstPos);
	    		//setting user status
	    		
	    		var verticalLayout= sap.ui.getCore().byId("MOB08FormTwo").getContent()[1];
	    		verticalLayout.removeAllContent();
	    		
	    		var statusList=equipDetailData.NavStData.results;
	    		


	    		var statusProfiles= equipDetailData.NavStProfile.results;
	    		
	    		for(var i=0;i<statusProfiles.length;i++){
	    			
	    			var selected= getStatus(i);
	    			if(statusProfiles[i].Stonr=="00"){
						verticalLayout.addContent(new sap.m.CheckBox({
						text: statusProfiles[i].Txt30,
						selected: selected
	    				
	    			}
					));
						
					
	    			}
	    	    		else{
	    	    			verticalLayout.addContent(new sap.m.RadioButton({
	    						groupName: "userStatus",
	    						text: statusProfiles[i].Txt30,
	    						selected: selected
	    	    			}
	    					));
	    	    			}
	    		}

	    		function getStatus(index){
	    			var selected= false;
	    				if(statusList.length>0){
	    					for(var j=0;j<statusList.length;j++){
	    						if(statusProfiles[index].Estat==statusList[j].Stat && statusList[j].Inact!="X"){
	    							selected= true;
	    	
	    						}
	    					}
	    				}
					return selected;		
	    		}
	    		
	    		//setting header data for Classification
	    		
	    		sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setNumber(equip);
				sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setIntro(equipDetailData.NavSpecData.results[0].ReadFloc);
				sap.ui.getCore().byId("MOB08_AssetObjHeadClass").setTitle(equipDetailData.NavGenData.results[0].Descript);
	    		//setting characteristics data for classification
				
				var characteristicsData= equipDetailData.NavCval.results;
				var charateristicsTable= sap.ui.getCore().byId("MOB08CharactTable");
				charateristicsTable.removeAllItems();
				
				if(characteristicsData.length>0){
					for(i=0;i<characteristicsData.length;i++){
						var charDataType= characteristicsData[i].CharDataType;
						if(characteristicsData[i].CharEdit=="X"){
							var valuehelpRequired= true;
							
						}
						else{
							var valuehelpRequired= false;
						}
						if(charDataType=="CHAR"){
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }), 
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.Input({
											showValueHelp: true,
											enabled: valuehelpRequired,
											maxLength:characteristicsData[i].CharNum,
											valueHelpOnly : true ,
											value : characteristicsData[i].ValueChar,
											valueHelpRequest: [sap.ui.controller("com.cg.gtm.view.Drop3_MOB08.MOB08Detail").handleClassificationValueHelp]
										}),
							          ]
							}));
							
						}
						else if(charDataType=="DATE"){
							var dateValue=characteristicsData[i].ValueFrom;
							dateValue= parseFloat(dateValue).toString();
							var finalDate= dateValue.substring(4,6)+"/"+dateValue.substring(6,8)+"/"+dateValue.substring(2,4)
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }), 
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.DatePicker({
							        	 value : finalDate
							         }),  ]
							}));
							}
						else if(charDataType=="CURR"){
							
							var currencyValue=characteristicsData[i].ValueFrom;
						currencyValue=parseFloat(currencyValue).toString();
						charateristicsTable.addItem(new sap.m.ColumnListItem({
							cells : [
							         new sap.m.Text({
							        	 text : characteristicsData[i].CharactDesc
							         }),  
							         new sap.m.Text({
							        	 text : characteristicsData[i].Characteristic
							         }), 
							         new sap.m.Input({
							        	 value : currencyValue,
							        	 description:characteristicsData[i].CurrencyFrom
							         }),  ]
							}));
							}
						
					}
					
					
				}
				
	    		
	    		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "ASTCHG");
	     	
	     	},
	              
	              
	              function(oError){
	     		
	     		
	     	});	
			
		
		
	},

	handleInstallAssetButtonPress: function() {
		var context = sap.ui.getCore().byId("MOB03Detail").getBindingContext();
		sap.ui.getCore().byId("MOB09Install").setBindingContext(context);
		sap.ui.getCore().byId("myApp").to("MOB09Install");
		
		sap.ui.getCore().byId("INSASTHDR").setTitle(sap.ui.getCore().byId("MOB03DetObjHdr").getTitle());
		sap.ui.getCore().byId("INSASTHDR").setNumber(sap.ui.getCore().byId("MOB03DetObjHdr").getNumber());
		sap.ui.getCore().byId("INSASTATR1").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt1").getText());
		sap.ui.getCore().byId("INSASTSD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt2").getText());
		sap.ui.getCore().byId("INSASTFD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt3").getText());
		sap.ui.getCore().byId("INSASTST1").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt1").getText());
		sap.ui.getCore().byId("INSASTST2").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt2").getText());
		sap.ui.getCore().byId("MOB09InstallPositionInput").setValue("");
		//sap.ui.getCore().byId("MOB09RemovePositionInput").setValue("");
		
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "INSL");
	},

	handleRemoveAssetButtonPress: function() {
		var context = sap.ui.getCore().byId("MOB03Detail").getBindingContext();
		sap.ui.getCore().byId("MOB09Remove").setBindingContext(context);
		sap.ui.getCore().byId("myApp").to("MOB09Remove");
		
		sap.ui.getCore().byId("REMASTHDR").setTitle(sap.ui.getCore().byId("MOB03DetObjHdr").getTitle());
		sap.ui.getCore().byId("REMASTHDR").setNumber(sap.ui.getCore().byId("MOB03DetObjHdr").getNumber());
		sap.ui.getCore().byId("REMASTATR1").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt1").getText());
		sap.ui.getCore().byId("REMASTSD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt2").getText());
		sap.ui.getCore().byId("REMASTSD").setText(sap.ui.getCore().byId("MOB03DetObjHdrAtt3").getText());
		sap.ui.getCore().byId("REMASTST1").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt1").getText());
		sap.ui.getCore().byId("REMASTST2").setText(sap.ui.getCore().byId("MOB03DetObjHdrSt2").getText());
		
		sap.ui.getCore().byId("MOB09ManufacturerSerialNumberInput").setValue("");
		sap.ui.getCore().byId("MOB09RemovePositionInput").setValue("");
		
		drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "REM");
	},

	/* Components & Tools Add Buttons */

	handleAddComponentButtonPress: function (evt) {
	//	alert();
		if (!this.componentAndToolDialog) {
			this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			this.getView().addDependent(this.componentAndToolDialog);
		}
		this.componentAndToolDialog.setTitle("Add Component");
		this.componentAndToolDialog.open();
		var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
		//sap.ui.getCore().byId("MOB03ComponentList").insertItem(newItem, 0);
//		var items = sap.ui.getCore().byId("MOB03ComponentTable").getItems();
//		var newId = "MOB03ComponentListItem_" + items.length;
//		var newItem = new sap.m.ColumnListItem({
//			id: newId,
//			vAlign: "Middle",
//			cells: [
//				new sap.m.Input({
//					type: "Number",
//					showValueHelp: true,
//					valueHelpRequest: this.handleComponentValueHelp,
//					change: function(evt) {
//						var value = evt.getParameter("value");
//						var listItemId = evt.getSource().getParent().getId();
//						var cells = sap.ui.getCore().byId(listItemId).getCells();
//						// TODO: Service to find material, 1,2,3 as examples
//						switch (value) {
//							case "1":
//								cells[1].setText("HVAC Unit");
//								cells[3].setText("CM");
//								cells[4].setText("1430");
//								break;
//							case "2":
//								cells[1].setText("Train Fuel");
//								cells[3].setText("L");
//								cells[4].setText("1000");
//								break;
//							case "3":
//								cells[1].setText("Brake Pads");
//								cells[3].setText("CM");
//								cells[4].setText("140");
//								break;
//							default:
//								cells[1].setText("");
//								cells[3].setText("");
//								cells[4].setText("");
//						}
//					}
//				}),
//				new sap.m.Text(),
//				new sap.m.Input({
//					type: "Number",
//					value: "1"
//				}),
//				new sap.m.Text(),
//				new sap.m.Text(),
//				new sap.m.Button({
//					text: "None",
//					width: "100%",
//					type: "Emphasized",
//					press: [this.handleComponentChangeStatusButtonPress, this]
//				})
//			]
//		});
//		sap.ui.getCore().byId("MOB03ComponentTable").insertItem(newItem, 0);
	},
	
	handleAddToolButtonPress: function() {
		once_pressed = true;
		if (!this.componentAndToolDialog) {
			this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			dialog_box = this.componentAndToolDialog;
			this.getView().addDependent(this.componentAndToolDialog);
		}
		this.componentAndToolDialog.setTitle("Add Tool");
		this.componentAndToolDialog.open();
		var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
	},

	/* Components & Tools List Items */

	handleComponentListItemPress: function(evt) {
		
		
		if (!this.componentAndToolDialog) {
			this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			this.getView().addDependent(this.componentAndToolDialog);
		}
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
		var context = evt.getSource().getBindingContext("components");
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		sap.ui.getCore().byId("MOB03ComponentAndToolDialog").setBindingContext(context, "components");
		
		var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
		numberInput.setValue(sap.ui.getCore().byId("MOB03ComponentList").getModel().getProperty(contextPath + "/Materialno"), null, "OneWay");
		numberInput.setValueState("Success");
		
		var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
		quantityInput.setValue(sap.ui.getCore().byId("MOB03ComponentList").getModel().getProperty(contextPath + "/Quantity"), null, "OneWay");
		/*quantityInput.bindProperty("description", {
			path: "tools>Uom",
			mode: "OneWay"
		});*/
		quantityInput.setValueState("Success");
		
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogRequestPickButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogIssueButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogMakeAvailableButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogToReturnButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogDropOffButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogReturnButton").setVisible(true);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogDeleteButton").setVisible(true);
		
		this.componentAndToolDialog.setTitle("Component - " + sap.ui.getCore().byId("MOB03ComponentList").getModel().getProperty(contextPath + "/Status"));
		this.componentAndToolDialog.open();
		
	},

	handleToolListItemPress: function(evt) {
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogSerialInput").setValue("");
			if (!this.componentAndToolDialog) {
			this.componentAndToolDialog = sap.ui.jsfragment("com.cg.gtm.view.DROP3_MOB03.MOB03ComponentAndToolDialog", this);
			this.getView().addDependent(this.componentAndToolDialog);
		}
		
		var context = evt.getSource().getBindingContext("tools");
		sap.ui.getCore().byId("MOB03ComponentAndToolDialog").setBindingContext(context, "tools");
		
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		var numberInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogNumberInput");
		
		numberInput.setValue(sap.ui.getCore().byId("MOB03ToolList").getModel().getProperty(contextPath + "/Equipmentno"), null, "OneWay");
		numberInput.setValueState("Success");
		
		var quantityInput = sap.ui.getCore().byId("MOB03ComponentAndToolDialogQuantityInput");
		quantityInput.setValue(sap.ui.getCore().byId("MOB03ToolList").getModel().getProperty(contextPath + "/Quantity"), null, "OneWay");
		/*quantityInput.bindProperty("description", {
			path: "tools>Uom",
			mode: "OneWay"
		});
		quantityInput.setValueState("Success");*/
		
		this.componentAndToolDialog.setTitle("Tool - " + sap.ui.getCore().byId("MOB03ToolList").getModel().getProperty(contextPath + "/Status"));
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogRequestPickButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogIssueButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogMakeAvailableButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogToReturnButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogDropOffButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogReturnButton").setVisible(false);
		sap.ui.getCore().byId("MOB03ComponentAndToolDialogDeleteButton").setVisible(true);
		
		if (sap.ui.getCore().byId("MOB03ToolList").getModel().getProperty(contextPath + "/Status") ==  "Not Issued")
			{
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogIssueButton").setVisible(true);
			}
		else
			{
			sap.ui.getCore().byId("MOB03ComponentAndToolDialogReturnButton").setVisible(true);
			
			}
		this.componentAndToolDialog.open();
		
	},

	/* Components & Tools Actions */

	handleRequestButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03RequestedStatus"));
	},

	handlePickButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03PickedStatus"));
	},

	handleMakeAvailableButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03AvailableForOrderStatus"));
	},

	handleIssueButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03GoodsIssuedStatus"));
	},

	handleToReturnButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03ToBeReturnedStatus"));
	},

	handleDropButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03DroppedOffStatus"));
	},

	handleReturnButtonPress: function(evt) {
		var parentButton = evt.getSource().getParent().data("parentButton");
		parentButton.setText(sap.ui.getCore().getModel("i18n").getResourceBundle().getText("MOB03ReturnedStatus"));
	},

	/* Tools & Components Value Help */
	
	handleComponentValueHelp: function() {
		sap.ui.getCore().byId("myApp").to("MOB24Initial");
	},

	handleToolValueHelp: function() {
		
		sap.ui.getCore().byId("myApp").to("MOB37Initial");
	} ,
	
	getMaterial : function()
	{
		sap.ui.getCore().byId("MOB03ComponentAndToolDialog").close();
		backNavMat = "MOB03";
		
		var app = sap.ui.getCore().byId("myApp");  
        app.to("idMob24MaterialSearch"); 
       
        var app = sap.ui.getCore().byId("splitAppMaterial");  
	    app.toMaster("idMob24MaterialSearchInput");
	    app.toDetail("idMATSRBlank");
	  
	    var getPlant =  window.localStorage.getItem("defPlantDesc");
	    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		inputPlantMat.setValue(getPlant);
		//inputPlant.setValue(window.localStorage.getItem("defPlantCode"))
		 g_inputPlantCode =  window.localStorage.getItem("defPlantCode");
		 inputPlantMat.setEnabled(true); 
       
	  
	},
	
	createModifiedModelTools : function()
	{
		
		var model = sap.ui.getCore().byId("MOB03ToolList").getModel();
		var modeldata = model.oData.results;
		var modelDataStr = JSON.stringify(modeldata);
		
		if ( window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"MODT" ) ==  undefined )
			{
			
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"MODT");
			window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"MODT" , modelDataStr );
			}
		
		else
			{
			
			window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"MODT" , modelDataStr );
			}
		
		var modelQ =  window.localStorage.getItem("MODELQ");
		
		if ( undefined == modelQ)
			{
			var modelQJson = [];
			modelQJson.push(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem("MODELQ" , JSON.stringify(modelQJson));
			}
		
		else{
			var modelQJson = JSON.parse(modelQ);
			modelQJson.push(g_ordnum + "_" + g_actnum);
			window.localStorage.removeItem("MODELQ");
			window.localStorage.setItem("MODELQ" , JSON.stringify(modelQJson));
			
		}
	},
		
		createModifiedModelComp : function()
		{

			
			var model = sap.ui.getCore().byId("MOB03ComponentList").getModel();
			var modeldata = model.oData.results;
		//	var modelDataStr = JSON.stringify(modeldata);
			
			/*if ( window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"MODC" ) ==  undefined )
				{
				
				window.localStorage.removeItem(g_ordnum + "_" + g_actnum+"_"+"MODC");
				window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"MODC" , modelDataStr );
				}
			
			else
				{
				
				window.localStorage.setItem(g_ordnum + "_" + g_actnum+"_"+"MODC" , modelDataStr );
				}*/
			
			var myJSONObject = {"myData" : JSON.stringify(modeldata)};
			
			$.ajax({
				  url: "FileHandle?readOrWrite=write&fileName="+g_ordnum + "_" + g_actnum+"_"+"MODC",
				  type: "post",
				  dataType: "text",
					//processData: false,
					data: myJSONObject,
				  success: function(text){
				      //alert("success");
				     //  $("#result").html('submitted successfully');
				  },
				  error:function(){
				      alert("failure");
				     // $("#result").html('there is error while submit');
				  }   
				});
			
			
			var modelQ =  window.localStorage.getItem("MODELQC");
			
			if ( undefined == modelQ)
				{
				var modelQJson = [];
				modelQJson.push(g_ordnum + "_" + g_actnum);
				window.localStorage.setItem("MODELQC" , JSON.stringify(modelQJson));
				}
			
			else{
				var modelQJson = JSON.parse(modelQ);
				modelQJson.push(g_ordnum + "_" + g_actnum);
				window.localStorage.removeItem("MODELQC");
				window.localStorage.setItem("MODELQC" , JSON.stringify(modelQJson));
				
			}
		
		
		
		
		
		
	
		},
		handleSearch : function()
		{
			
		},
		handleDialogConfirm : function(evt)
	{
		var oSelectedItem = evt.getParameter("selectedItem");
		g_MOB01LOC =  oSelectedItem.getTitle();
		var varianceValue = ""; 
		 
		if (oSelectedItem) {
			
			varianceValue = oSelectedItem.getTitle();
		//	alert ("varinace..." + varianceValue );
			
			}
		if ( g_reasonCode == "REJT")
			{
			
         
			if ("ACPT" === g_STATUSMOB03 || "HOLD" === g_STATUSMOB03) {
				g_ACT--;
			}
			if ("HOLD" === g_STATUSMOB03) {
				g_HOLD--;
			}
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "RJCT");
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "RJCT");
			drop3TRQ(g_ordnum + "_" + g_actnum, "RJCT");
			writeToFileMOB03AHR(g_ordnum , g_actnum , varianceValue , "REJT" );
			filterOpenJobs();
			sap.ui.getCore().byId("MOB03COMP").setVisible(false);
			//sap.ui.getCore().byId("mob03tool").setVisible(false);
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
			sap.m.MessageToast.show("Job Rejected");
			//sap.ui.getCore().byId("MOB03SplitApp").backMaster();
			sap.ui.getCore().byId("MOB03SplitApp").backDetail();
			sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
			
			
		
			}
		
		if ( g_reasonCode == "HOLD")
		{

			if (g_HOLD < 2) {
				if ("ACPT" === g_STATUSMOB03) {
					g_ACT--;
				}
				g_HOLD++;
				window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
				window.localStorage.setItem(g_ordnum + "_" + g_actnum, "HOLD");
				//filterOpenJobs();
				sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
				g_STATUSMOB03 = "HOLD";
				drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , g_STATUSMOB03);
				drop3TRQ(g_ordnum + "_" + g_actnum, "HOLD");
				writeToFileMOB03AHR(g_ordnum , g_actnum , varianceValue , "HOLD" );
				filterOpenJobs();
				sap.ui.getCore().byId("MOB03COMP").setVisible(false);
				//sap.ui.getCore().byId("mob03tool").setVisible(false);
				sap.ui.getCore().byId(g_listItemStatusID).setText("On Hold");
				sap.m.MessageToast.show("Job put on hold");
				sap.ui.getCore().byId("MOB03SplitApp").backDetail();
				sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
			} else {
				sap.m.MessageToast.show("You can have a maximum of two jobs On Hold at a given time ");
			}
		
		}
		
		if ( g_reasonCode == "CANC")
		{

			if ("ACPT" === g_STATUSMOB03) {
				g_ACT--;
			}
			if ("HOLD" === g_STATUSMOB03) {
				g_HOLD--;
			}
			window.localStorage.removeItem(g_ordnum + "_" + g_actnum);
			window.localStorage.setItem(g_ordnum + "_" + g_actnum, "CANL");
			writeToFileMOB03AHR(g_ordnum , g_actnum , varianceValue , "CANC" )
			filterOpenJobs();
			drop3OrdQ(g_ordnum + "_" + g_actnum+"Q" , "CANCL");
			drop3TRQ(g_ordnum + "_" + g_actnum, "CANCL");
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
			sap.ui.getCore().byId("MOB03COMP").setVisible(false);
			//sap.ui.getCore().byId("mob03tool").setVisible(false);
			sap.ui.getCore().byId("MOB03SplitApp").backDetail();
			sap.ui.getCore().byId("MOB03SplitApp").toMaster("MOB03MasterTwo");
			sap.m.MessageToast.show("Job Cancelled");
		
		}
		
	}
	
	

});
//FUNCTION FOR ACCEPT HOLD REJECT 
function writeToFileMOB03AHR(ordnum , actnum , variance , ahr )
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
  		 
  		 var data =  { "Tran": ahr,
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
  				"ReasonForVariance" : variance,
  				"Plant" : "GWNP",
  				"FaultyPartCodeGrp" :  "PM1",
  				"FaultyPartCode" :  "02",
  				"ProblemCodeGrp" :  "DOTEL",
			    "ProblemCode" : "12", 
			    "CauseCodeGrp" :"PM01", 
			    "CauseCode" : "0100", 
			    "NotificationType" :"ZP", 
			    "PersonnelNumber" :g_personalNum,
			    "LongText" : "",
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
  		 
  		 var data =  { "Tran": ahr,
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
  				"ReasonForVariance" : variance,
  				"Plant" : "GWNP",
  				"FaultyPartCodeGrp" :  "PM1",
  				"FaultyPartCode" :  "02",
  				"ProblemCodeGrp" :  "DOTEL",
			    "ProblemCode" : "12", 
			    "CauseCodeGrp" :"PM01", 
			    "CauseCode" : "0100", 
			    "NotificationType" :"ZP", 
			    "PersonnelNumber" :g_personalNum,
			    "LongText" : "",
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

 function handleOpenRC(newStatus)
{


	//returnTrains("EC");
	g_AssetSrch = "MOB01TrainInput";	
   var sFleet = sap.ui.getCore().byId("MOB01FleetInput").getValue();
   //var sFleetArr = sFleetAll.split("-");
   //var sFleet = sFleetArr[0];
	//var assetData =  allAssets();
   if(g_runningInTablet || g_runningOnPhone) 
	{

	   var dataArrIni = [];
	   readLocalFileOnDevice("MasterData.json", function(funCall)
	
			{
		
		   var fleet = JSON.parse(funCall);
		 
		 assetDataArr = fleet[0].Nav2ReasonCodes.results ;
		// alert(g_reasonCode);
		 //alert(assetDataArr);
	      var dataArrIni = [];
			for ( var i = 0 ; i < assetDataArr.length ; i ++)
				{
				//alert(assetDataArr.OpProcess);
				 if (assetDataArr[i].OpProcess == g_reasonCode)
				{
					
					var data = {
							"code" : assetDataArr[i].VarianceReason , //+"-"+assetDataArr[i].Innam,
							 "desc" : assetDataArr[i].VarianceReasonTxt
							
					};
					dataArrIni.push(data);
				}
					
					
				}
		 
			
			var dataArrFinal = {"results" : dataArrIni};
			
			
				//MOB02InputId = evt.getSource().sId;
				MOB01Dialog = sap.ui.jsfragment("com.cg.gtm.view.Drop3_MOB01.MOB01Dialog", 
						sap.ui.getCore().byId("MOB03Detail").getController());
				MOB01Dialog.setTitle("Choose Variance Code");
				var codesModel = new sap.ui.model.json.JSONModel(dataArrFinal);
				MOB01Dialog.setModel(codesModel);
				MOB01Dialog.open();
		 
	});
	
	}
	else
		{}
	
	
}