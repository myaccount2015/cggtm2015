var sorter = new sap.ui.model.Sorter("Priority", false);

sap.ui.controller("com.cg.gtm.view.DROP3_MOB03.MOB03MasterTwo", {

	handleNavButtonPress: function() {
		if( g_runningOnPhone) {
			g_MobileNavigationId = "MOB03MasterPage";
			}
		sap.ui.getCore().byId("MOB03SplitApp").backMaster();
		sap.ui.getCore().byId("MOB03SplitApp").backToTopDetail();
		sap.ui.getCore().byId("MOB03Master2List").removeSelections();
	},

	handleHelpButtonPress: function() {

		//alert(sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey());
		var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
		var MobileScreenNumber = "";
		if ( "TOOL"  ==  sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey())
			{
			 MobileScreenNumber = "MOB38";
			}
		else if ("COMP" == sap.ui.getCore().byId("MOB03IconTabBar").getSelectedKey())
			{
			 MobileScreenNumber = "MOB05";
			}
		else
			{
			 MobileScreenNumber = "MOB03";
			}
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

	handleListItemSelect: function(evt) {
		if( g_runningOnPhone) {
			g_MobileNavigationId = "MOB03DetailPage";
			}
		
		sap.ui.getCore().byId("MOB03IconTabBar").setSelectedKey("firstTab");
		var contextPath = evt.mParameters.listItem.oBindingContexts.undefined.sPath;
		//hideAndShowButtons(this.getModel().getProperty(contextPath + "/CurrentStatus"));
		g_STATUSMOB03 = this.getModel().getProperty(contextPath + "/CurrentStatus");
		g_ordnum = this.getModel().getProperty(contextPath + "/OrderNo");
		g_actnum = this.getModel().getProperty(contextPath + "/ActivityNo");
	
		//g_STATUSMOB03 = window.localStorage.getItem(g_ordnum + "_" + g_actnum);

		if (g_STATUSMOB03 === "ACPT") {
			//			sap.ui.getCore().byId("mob03comp").setVisible(true);
			//			sap.ui.getCore().byId("mob03tool").setVisible(true);
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(true);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(true);
			var componentListItems = sap.ui.getCore().byId("MOB03ComponentList").getItems();
			var toolListItems = sap.ui.getCore().byId("MOB03ToolList").getItems();
			for (var i in componentListItems) {
				componentListItems[i].setType("Active");
			}
			for (var i in toolListItems) {
				toolListItems[i].setType("Active");
			}
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
		} else {
			//			sap.ui.getCore().byId("mob03comp").setVisible(false);
			//			sap.ui.getCore().byId("mob03tool").setVisible(false);
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(false);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(false);
			var componentListItems = sap.ui.getCore().byId("MOB03ComponentList").getItems();
			var toolListItems = sap.ui.getCore().byId("MOB03ToolList").getItems();
			for (var i in componentListItems) {
				componentListItems[i].setType("Inactive");
			}
			for (var i in toolListItems) {
				toolListItems[i].setType("Inactive");
			}
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		}
		sap.ui.getCore().byId("MOB03SplitApp").toDetail("MOB03Detail");
		g_listItemStatusID = evt.mParameters.listItem.mAggregations.firstStatus.sId;
		/*//g_invdocnumMOB35 = this.getModel().getProperty(contextPath + "/InvDocument");
		var context = evt.getParameter("listItem").getBindingContext();
		var context2 = evt.getParameter("listItem").getBindingContext("components");
		var context3 = evt.getParameter("listItem").getBindingContext("tools");
		//sap.ui.getCore().byId("MOB03Detail").setBindingContext(context);
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context);
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context3, "tools");
		sap.ui.getCore().byId("MOB03SplitApp").toDetail("MOB03Detail");
		//sap.ui.getCore().byId("MOB03DetObjHdr").setTitle(this.getModel().getProperty(contextPath + "/OpearionText"));
		sap.ui.getCore().byId("MOB03DetObjHdr").setNumber(this.getModel().getProperty(contextPath + "/OrderNo") + " / "+ this.getModel().getProperty(contextPath + "/ActivityNo"));
		
		//alert(com.cg.gtm.view.Drop3Util.Formatter.priorityText(this.getModel().getProperty(contextPath + "/Priority")));
		sap.ui.getCore().byId("MOB03DetObjHdrAtt1").setText(com.cg.gtm.view.Drop3Util.Formatter.priorityText(this.getModel().getProperty(contextPath + "/Priority")));
		sap.ui.getCore().byId("MOB03DetObjHdrAtt2").setText(this.getModel().getProperty(contextPath + "/EarliestStartDate"));
		sap.ui.getCore().byId("MOB03DetObjHdrAtt3").setText(this.getModel().getProperty(contextPath + "/EarliestFinishDate"));
		sap.ui.getCore().byId("MOB03DetObjHdrSt1").setText(this.getModel().getProperty(contextPath + "/StandardTextKey"));
		sap.ui.getCore().byId("MOB03DetObjHdrSt2").setText(this.getModel().getProperty(contextPath + "/CurrentStatus"));
		sap.ui.getCore().byId("MOB03DETTR").setText( this.getModel().getProperty(contextPath + "/TrainSet") + 
				                                     "-" +
				                                     this.getModel().getProperty(contextPath + "/CarId") + 
				                                     "-" +
				                                     this.getModel().getProperty(contextPath + "/CarZone") + 
				                                     "-" +
				                                     this.getModel().getProperty(contextPath + "/CarSystem") 
				                                     );
		sap.ui.getCore().byId("MOB03DETROAD").setText(this.getModel().getProperty(contextPath + "/RoadDesc"));
		sap.ui.getCore().byId("MOB03DETEQ").setText( this.getModel().getProperty(contextPath + "/Equipment") + 
                "-" +
                this.getModel().getProperty(contextPath + "/EquipmentDesc") 
               
                );
		sap.ui.getCore().byId("MOB03DETST").setText(this.getModel().getProperty(contextPath + "/SystemStatus"));
		
		
		/***************************/
		

		//alert("182");
	//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));

		//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
		 if(g_runningInTablet || g_runningOnPhone) 
			{
			// alert("Job_4001736_0060");
			
	 	   var dataArrIni = [];
	 	  readLocalFileOnDevice("Job_"+g_ordnum+"_"+g_actnum+".json", function(funCall)
			
					{
	 		 //  alert("ndnwknd");
	 		  var allJobsArray  = JSON.parse(funCall);
	 		 g_personalNum =    allJobsArray.dataHeader.PersonalNo;
	 		 
	 		 g_MOB03NotiType= allJobsArray.dataHeader.NotificationType;
	 		 
	 		 
	 		 sap.ui.getCore().byId("MOB03DetailPage").setTitle(allJobsArray.dataHeader.OrderNo+"/"+allJobsArray.dataHeader.ActivityNo)
	 		sap.ui.getCore().byId("MOB03DetObjHdrAtt1").setText(allJobsArray.dataHeader.RevisionDesc);
	 		 
	 		sap.ui.getCore().byId("MOB03DetObjHdr").setTitle(allJobsArray.dataHeader.OpearionText);
	 		
	 		 // var allJobsArray = allJobsArrayIni.allJobs;
	 		  //alert(allJobsArray);
				// var allJobsArray = allJobsArrayIni.dataHeader;
				// alert(allJobsArray.dataHeader.OrderNo);
				 //alert(allJobsArray.dataHeader.EarliestFinishDate);
				var earFindate = allJobsArray.dataHeader.EarliestFinishDate ;
				//var earFinaldateSub = earFindate.subString(6 , earFindate.length-3);
				//alert ( new Date(earFinaldateSub));
				 
				 sap.ui.getCore().byId("MOB03DetObjHdrAtt2").setText(convertJsonDateString(allJobsArray.dataHeader.EarliestStartDate)+" | End Date:" +convertJsonDateString(allJobsArray.dataHeader.EarliestFinishDate));
					sap.ui.getCore().byId("MOB03DetObjHdrAtt3").setText(convertJsonDateString(allJobsArray.dataHeader.EarliestFinishDate));
					
				//	sap.ui.getCore().byId("MOB03DetObjHdr").setNumber(allJobsArray.dataHeader.OrderNo+"/"+allJobsArray.dataHeader.ActivityNo);
					
					//alert(com.cg.gtm.view.Drop3Util.Formatter.priorityText(this.getModel().getProperty(contextPath + "/Priority")));
				/*	sap.ui.getCore().byId("MOB03DetObjHdrAtt1").setText(com.cg.gtm.view.Drop3Util.
							Formatter.priorityText(allJobsArray.dataHeader.Priority));*/
					//sap.ui.getCore().byId("MOB03DetObjHdrAtt2").setText(this.getModel().getProperty(contextPath + "/EarliestStartDate"));
					//sap.ui.getCore().byId("MOB03DetObjHdrAtt3").setText(this.getModel().getProperty(contextPath + "/EarliestFinishDate"));
					sap.ui.getCore().byId("MOB03DetObjHdrSt1").setText(allJobsArray.dataHeader.StandardTextKey);
					sap.ui.getCore().byId("MOB03DetObjHdrSt2").setText(allJobsArray.dataHeader.CurrentStatus);
					sap.ui.getCore().byId("JobMethod").setText
					(allJobsArray.dataHeader.NotificationLongText + "\n" +allJobsArray.dataHeader.OperationLongText);
					//id : "JobMethod",
					/*******************************Richard Changes for MOB-03***********************************************/
					if(allJobsArray.dataHeader.TrainSet){
						sap.ui.getCore().byId("MOB03DetContTrain_Depot").setText(allJobsArray.dataHeader.TrainSet+" - "+allJobsArray.dataHeader.TrainSetDesc);
						sap.ui.getCore().byId("MOB03DetContTrain_Depot").setTitle("Train Set");
						sap.ui.getCore().byId("MOB03DetContCar").setText(allJobsArray.dataHeader.CarId+" - "+allJobsArray.dataHeader.CarDesc);
						sap.ui.getCore().byId("MOB03DetContZone_Sys").setText(allJobsArray.dataHeader.CarZone+" - "+allJobsArray.dataHeader.CarZoneDesc);
					}
					else{
						sap.ui.getCore().byId("MOB03DetContTrain_Depot").setText(allJobsArray.dataHeader.FunctionLoc+" - "+ allJobsArray.dataHeaderFunctionLocDesc);
						sap.ui.getCore().byId("MOB03DetContTrain_Depot").setTitle("Depot/Site")
						sap.ui.getCore().byId("MOB03DetContCar").setVisible(false);
						sap.ui.getCore().byId("MOB03DetContZone_Sys").setVisible(false);
					}
					sap.ui.getCore().byId("MOB03DetContRoad").setText(allJobsArray.dataHeader.Road+" - "+allJobsArray.dataHeader.RoadDesc);
					sap.ui.getCore().byId("MOB03DetContEquip").setText(allJobsArray.dataHeader.Equipment+" - "+allJobsArray.dataHeader.EquipmentDesc);
					sap.ui.getCore().byId("MOB03DetContManuSerial").setText(allJobsArray.dataHeader.ManufacturerSerialNo);// assign allJobsArray.dataHeaderManSerNo to this
					sap.ui.getCore().byId("MOB03DetContInstDetail").setText("Position "+allJobsArray.dataHeader.EquipmentPosition+" Superior Equipment "+allJobsArray.dataHeader.SuperordinateEquipment+" - "+allJobsArray.dataHeader.SuperordinateEquipmentDesc );
					sap.ui.getCore().byId("MOB03DetContPrio").setText(allJobsArray.dataHeader.Priority+" - "+com.cg.gtm.view.Drop3Util.Formatter.priorityText(allJobsArray.dataHeader.Priority));
					sap.ui.getCore().byId("MOB03DetContPMOrdtext").setText(allJobsArray.dataHeader.WorkCenterDesc);
					sap.ui.getCore().byId("MOB03DetContNotif").setText(allJobsArray.dataHeader.NotificationNo+"("+allJobsArray.dataHeader.NotificationType+")"+" - "+allJobsArray.dataHeader.NotificationText);
					sap.ui.getCore().byId("MOB03DetContWrkType").setText(allJobsArray.dataHeader.MaintenanceActivityType+" - "+allJobsArray.dataHeader.MaintenanceActivityTypeDesc);
					sap.ui.getCore().byId("MOB03DetContWrkCntr").setText(allJobsArray.dataHeader.Plant+" - "+allJobsArray.dataHeader.WorkCenter);
					sap.ui.getCore().byId("MOB03DetContCTRLKey").setText(allJobsArray.dataHeader.ControlKey+" - "+allJobsArray.dataHeader.ControlKeyDesc);
					sap.ui.getCore().byId("MOB03DetContSysSta").setText(allJobsArray.dataHeader.SystemStatus);
					
					
					//Install
					//sap.ui.getCore().byId("MOB09AssetText").setText(allJobsArray.dataHeader.SystemStatus);
					sap.ui.getCore().byId("MOB09MaterialNumberText").setText(allJobsArray.dataHeader.MaterialNo);
					sap.ui.getCore().byId("MOB09MaterialDescriptionText").setText(allJobsArray.dataHeader.MaterialDesc);
										
					sap.ui.getCore().byId("MOB09LocationText").setText(allJobsArray.dataHeader.FunctionLocDesc);
					sap.ui.getCore().byId("MOB09ReplacementSerialText").setText(allJobsArray.dataHeader.ManufacturerSerialNo);
					//sap.ui.getCore().byId("MOB09ModelNumberText").setText(allJobsArray.dataHeader.SystemStatus);
					
					//Remove
					//sap.ui.getCore().byId("MOB09_AssetText_Remove").setText(allJobsArray.dataHeader.SystemStatus);
					sap.ui.getCore().byId("MOB09_Location_Remove").setText(allJobsArray.dataHeader.FunctionLocDesc);
					
					sap.ui.getCore().byId("MOB09_MaterialNumber_Remove").setText(allJobsArray.dataHeader.MaterialNo);
					sap.ui.getCore().byId("MOB09_MaterialDescription_Remove").setText(allJobsArray.dataHeader.MaterialDesc);
					
					
					/**********************************************************************************************************/
					
					var dataDataJSONArr = {
							  "results" : allJobsArray.dataDocs
					  };
					  var docDataJSONModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					  docDataJSONModel.setData(dataDataJSONArr);
					  sap.ui.getCore().byId("MOB03DocList").setModel(docDataJSONModel);
				/*	sap.ui.getCore().byId("MOB03DETTR").setText( allJobsArray.dataHeader.TrainSet + 
							                                     "-" +
							                                     allJobsArray.dataHeader.CarId + 
							                                     "-" +
							                                     allJobsArray.dataHeader.CarZone + 
							                                     "-" +
							                                     allJobsArray.dataHeader.CarSystem
							                                     );
					sap.ui.getCore().byId("MOB03DETROAD").setText(allJobsArray.dataHeader.RoadDesc);
					sap.ui.getCore().byId("MOB03DETEQ").setText( allJobsArray.dataHeader.Equipment + 
			                "-" +
			                allJobsArray.dataHeader.EquipmentDesc);
			               
			               // );
					sap.ui.getCore().byId("MOB03DETST").setText(allJobsArray.dataHeader.SystemStatus);*/
					
				/* var toolsIni = allJobsArray.dataComp;
					//var allJobsData = allJobs();
					//var allJobsArray = allJobsData.d.results;
					
						  var toolDataJSONArr = {
								  "results" : toolsIni
						  };
						  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
						// set the data for the model
						  toolDataJSONModel.setData(toolDataJSONArr);
						  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);*/
						  });
				 
					
			}
	
	
	else
		{
		
		$.ajax({
			  url: "SaveJSONServlet?operation=Read&fileName=Job_"+g_ordnum+"_"+g_actnum+".json&Append=false",
			  type: "post",
			  dataType: "text",
			  success: function(text){
			 		 //  alert("ndnwknd");
		 		  var allJobsArray  = JSON.parse(funCall);
		 		 g_personalNum =    allJobsArray.dataHeader.PersonalNo;
		 		 
		 		 g_MOB03NotiType= allJobsArray.dataHeader.NotificationType;
		 		 sap.ui.getCore().byId("MOB03DetailPage").setTitle(allJobsArray.dataHeader.OrderNo+"/"+allJobsArray.dataHeader.ActivityNo)
		 		sap.ui.getCore().byId("MOB03DetObjHdrAtt1").setText(allJobsArray.dataHeader.RevisionDesc);
		 		 
		 		sap.ui.getCore().byId("MOB03DetObjHdr").setTitle(allJobsArray.dataHeader.OpearionText);
		 		
		 		 // var allJobsArray = allJobsArrayIni.allJobs;
		 		  //alert(allJobsArray);
					// var allJobsArray = allJobsArrayIni.dataHeader;
					// alert(allJobsArray.dataHeader.OrderNo);
					 //alert(allJobsArray.dataHeader.EarliestFinishDate);
					var earFindate = allJobsArray.dataHeader.EarliestFinishDate ;
					//var earFinaldateSub = earFindate.subString(6 , earFindate.length-3);
					//alert ( new Date(earFinaldateSub));
					 
					 sap.ui.getCore().byId("MOB03DetObjHdrAtt2").setText(convertJsonDateString(allJobsArray.dataHeader.EarliestStartDate)+" | End Date:" +convertJsonDateString(allJobsArray.dataHeader.EarliestFinishDate));
						sap.ui.getCore().byId("MOB03DetObjHdrAtt3").setText(convertJsonDateString(allJobsArray.dataHeader.EarliestFinishDate));
						
					//	sap.ui.getCore().byId("MOB03DetObjHdr").setNumber(allJobsArray.dataHeader.OrderNo+"/"+allJobsArray.dataHeader.ActivityNo);
						
						//alert(com.cg.gtm.view.Drop3Util.Formatter.priorityText(this.getModel().getProperty(contextPath + "/Priority")));
					/*	sap.ui.getCore().byId("MOB03DetObjHdrAtt1").setText(com.cg.gtm.view.Drop3Util.
								Formatter.priorityText(allJobsArray.dataHeader.Priority));*/
						//sap.ui.getCore().byId("MOB03DetObjHdrAtt2").setText(this.getModel().getProperty(contextPath + "/EarliestStartDate"));
						//sap.ui.getCore().byId("MOB03DetObjHdrAtt3").setText(this.getModel().getProperty(contextPath + "/EarliestFinishDate"));
						sap.ui.getCore().byId("MOB03DetObjHdrSt1").setText(allJobsArray.dataHeader.StandardTextKey);
						sap.ui.getCore().byId("MOB03DetObjHdrSt2").setText(allJobsArray.dataHeader.CurrentStatus);
						sap.ui.getCore().byId("JobMethod").setText
						(allJobsArray.dataHeader.NotificationLongText + "\n" +allJobsArray.dataHeader.OperationLongText);
						//id : "JobMethod",
						/*******************************Richard Changes for MOB-03***********************************************/
						if(allJobsArray.dataHeader.TrainSet){
							sap.ui.getCore().byId("MOB03DetContTrain_Depot").setText(allJobsArray.dataHeader.TrainSet+" - "+allJobsArray.dataHeader.TrainSetDesc);
							sap.ui.getCore().byId("MOB03DetContTrain_Depot").setTitle("Train Set");
							sap.ui.getCore().byId("MOB03DetContCar").setText(allJobsArray.dataHeader.CarId+" - "+allJobsArray.dataHeader.CarDesc);
							sap.ui.getCore().byId("MOB03DetContZone_Sys").setText(allJobsArray.dataHeader.CarZone+" - "+allJobsArray.dataHeader.CarZoneDesc);
						}
						else{
							sap.ui.getCore().byId("MOB03DetContTrain_Depot").setText(allJobsArray.dataHeader.FunctionLoc+" - "+ allJobsArray.dataHeaderFunctionLocDesc);
							sap.ui.getCore().byId("MOB03DetContTrain_Depot").setTitle("Depot/Site")
							sap.ui.getCore().byId("MOB03DetContCar").setVisible(false);
							sap.ui.getCore().byId("MOB03DetContZone_Sys").setVisible(false);
						}
						sap.ui.getCore().byId("MOB03DetContRoad").setText(allJobsArray.dataHeader.Road+" - "+allJobsArray.dataHeader.RoadDesc);
						sap.ui.getCore().byId("MOB03DetContEquip").setText(allJobsArray.dataHeader.Equipment+" - "+allJobsArray.dataHeader.EquipmentDesc);
						sap.ui.getCore().byId("MOB03DetContManuSerial").setText(allJobsArray.dataHeader.ManufacturerSerialNo);// assign allJobsArray.dataHeaderManSerNo to this
						sap.ui.getCore().byId("MOB03DetContInstDetail").setText("Position "+allJobsArray.dataHeader.EquipmentPosition+" Superior Equipment "+allJobsArray.dataHeader.SuperordinateEquipment+" - "+allJobsArray.dataHeader.SuperordinateEquipmentDesc );
						sap.ui.getCore().byId("MOB03DetContPrio").setText(allJobsArray.dataHeader.Priority+" - "+com.cg.gtm.view.Drop3Util.Formatter.priorityText(allJobsArray.dataHeader.Priority));
						sap.ui.getCore().byId("MOB03DetContPMOrdtext").setText(allJobsArray.dataHeader.WorkCenterDesc);
						sap.ui.getCore().byId("MOB03DetContNotif").setText(allJobsArray.dataHeader.NotificationNo+"("+allJobsArray.dataHeader.NotificationType+")"+" - "+allJobsArray.dataHeader.NotificationText);
						sap.ui.getCore().byId("MOB03DetContWrkType").setText(allJobsArray.dataHeader.MaintenanceActivityType+" - "+allJobsArray.dataHeader.MaintenanceActivityTypeDesc);
						sap.ui.getCore().byId("MOB03DetContWrkCntr").setText(allJobsArray.dataHeader.Plant+" - "+allJobsArray.dataHeader.WorkCenter);
						sap.ui.getCore().byId("MOB03DetContCTRLKey").setText(allJobsArray.dataHeader.ControlKey+" - "+allJobsArray.dataHeader.ControlKeyDesc);
						sap.ui.getCore().byId("MOB03DetContSysSta").setText(allJobsArray.dataHeader.SystemStatus);
						
						
						//Install
						//sap.ui.getCore().byId("MOB09AssetText").setText(allJobsArray.dataHeader.SystemStatus);
						sap.ui.getCore().byId("MOB09MaterialNumberText").setText(allJobsArray.dataHeader.MaterialNo);
						sap.ui.getCore().byId("MOB09MaterialDescriptionText").setText(allJobsArray.dataHeader.MaterialDesc);
											
						sap.ui.getCore().byId("MOB09LocationText").setText(allJobsArray.dataHeader.FunctionLocDesc);
						sap.ui.getCore().byId("MOB09ReplacementSerialText").setText(allJobsArray.dataHeader.ManufacturerSerialNo);
						//sap.ui.getCore().byId("MOB09ModelNumberText").setText(allJobsArray.dataHeader.SystemStatus);
						
						//Remove
						//sap.ui.getCore().byId("MOB09_AssetText_Remove").setText(allJobsArray.dataHeader.SystemStatus);
						sap.ui.getCore().byId("MOB09_Location_Remove").setText(allJobsArray.dataHeader.FunctionLocDesc);
						
						sap.ui.getCore().byId("MOB09_MaterialNumber_Remove").setText(allJobsArray.dataHeader.MaterialNo);
						sap.ui.getCore().byId("MOB09_MaterialDescription_Remove").setText(allJobsArray.dataHeader.MaterialDesc);
						
						
						/**********************************************************************************************************/
						
						var dataDataJSONArr = {
								  "results" : allJobsArray.dataDocs
						  };
						  var docDataJSONModel = new sap.ui.model.json.JSONModel();
						// set the data for the model
						  docDataJSONModel.setData(dataDataJSONArr);
						  sap.ui.getCore().byId("MOB03DocList").setModel(docDataJSONModel);
					/*	sap.ui.getCore().byId("MOB03DETTR").setText( allJobsArray.dataHeader.TrainSet + 
								                                     "-" +
								                                     allJobsArray.dataHeader.CarId + 
								                                     "-" +
								                                     allJobsArray.dataHeader.CarZone + 
								                                     "-" +
								                                     allJobsArray.dataHeader.CarSystem
								                                     );
						sap.ui.getCore().byId("MOB03DETROAD").setText(allJobsArray.dataHeader.RoadDesc);
						sap.ui.getCore().byId("MOB03DETEQ").setText( allJobsArray.dataHeader.Equipment + 
				                "-" +
				                allJobsArray.dataHeader.EquipmentDesc);
				               
				               // );
						sap.ui.getCore().byId("MOB03DETST").setText(allJobsArray.dataHeader.SystemStatus);*/
						
					/* var toolsIni = allJobsArray.dataComp;
						//var allJobsData = allJobs();
						//var allJobsArray = allJobsData.d.results;
						
							  var toolDataJSONArr = {
									  "results" : toolsIni
							  };
							  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
							// set the data for the model
							  toolDataJSONModel.setData(toolDataJSONArr);
							  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);*/
							  }
		
			  });
		}
		
		
		
		
	
	
		
		/*******************************/
		
		//Setting Models for Componenet and Tooling
		var modelQ =  window.localStorage.getItem("MODELQ");
		
		/*if ( undefined == modelQ)
			{
			//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
			$.ajax({
				  url: "SaveJSONServlet?operation=Read&fileName=Job_"+g_ordnum+"_"+g_actnum+".json&Append=false",
				  type: "post",
				  dataType: "text",
				  success: function(text){
					  
				  var allJobsArray = JSON.parse(text);
				  var toolsIni = allJobsArray.dataTools;
			//var allJobsData = allJobs();
			//var allJobsArray = allJobsData.d.results;
			
				  var toolDataJSONArr = {
						  "results" : toolsIni
				  };
				  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
				// set the data for the model
				  toolDataJSONModel.setData(toolDataJSONArr);
				  sap.ui.getCore().byId("MOB03ToolList").setModel(toolDataJSONModel);
				  }
			
				  });
			
			
			}
		
		else{
			var modelQJson = JSON.parse(modelQ);
			if ( modelQJson.indexOf(g_ordnum + "_" + g_actnum)  == -1)
					{
					
					sap.ui.getCore().byId("MOB03ToolList").setModel(sap.ui.getCore().getModel("tools"));
					}
			else
					{
					var toolData  =  window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"MODT");
					var toolDataJSON = JSON.parse(toolData);
					
					 var toolDataJSONArr = {
							  "results" : toolDataJSON
					  };
					  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					  toolDataJSONModel.setData(toolDataJSONArr);
					  sap.ui.getCore().byId("MOB03ToolList").setModel(toolDataJSONModel);
					}
		}*/
			
			
			var modelQC =  window.localStorage.getItem("MODELQC");
			
			if ( undefined == modelQC)
			{
				//alert("182");
			//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));

				//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
				 if(g_runningInTablet || g_runningOnPhone) 
					{
			 	   var dataArrIni = [];
			 	   readLocalFileOnDevice("Job_"+g_ordnum+"_"+g_actnum+".json", function(funCall)
					
							{
			 		   
			 		  var allJobsArray  = JSON.parse(funCall);
						// var allJobsArray = allJobsArrayIni.allJobs;
						 
						 var toolsIni = allJobsArray.dataComp;
							//var allJobsData = allJobs();
							//var allJobsArray = allJobsData.d.results;
							
								  var toolDataJSONArr = {
										  "results" : toolsIni
								  };
								  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
								// set the data for the model
								  toolDataJSONModel.setData(toolDataJSONArr);
								  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
								  });
						 
							
					}
			
			
			else
				{
				
				$.ajax({
					  url: "SaveJSONServlet?operation=Read&fileName=Job_"+g_ordnum+"_"+g_actnum+".json&Append=false",
					  type: "post",
					  dataType: "text",
					  success: function(text){
						  
					  var allJobsArray = JSON.parse(text);
					  var toolsIni = allJobsArray.dataComp;
				//var allJobsData = allJobs();
				//var allJobsArray = allJobsData.d.results;
				
					  var toolDataJSONArr = {
							  "results" : toolsIni
					  };
					  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					  toolDataJSONModel.setData(toolDataJSONArr);
					  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
					  }
				
					  });
				}
				
				
				
				
			
			}
		
		else{
			
			var modelQJson = JSON.parse(modelQC);
			if ( modelQJson.indexOf(g_ordnum + "_" + g_actnum)  == -1)
					{
			//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));

				//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
				if(g_runningInTablet || g_runningOnPhone) 
				{
		 	   var dataArrIni = [];
		 	   readLocalFileOnDevice("Job_"+g_ordnum+"_"+g_actnum+".json", function(funCall)
				
						{
		 		   
		 		  var allJobsArray  = JSON.parse(funCall);
					// var allJobsArray = allJobsArrayIni.allJobs;
					 
					 var toolsIni = allJobsArray.dataComp;
						//var allJobsData = allJobs();
						//var allJobsArray = allJobsData.d.results;
						
							  var toolDataJSONArr = {
									  "results" : toolsIni
							  };
							  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
							// set the data for the model
							  toolDataJSONModel.setData(toolDataJSONArr);
							  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
							  });
					 
						
				}
		
		
		else
			{
				$.ajax({
					 url: "SaveJSONServlet?operation=Read&fileName=Job_"+g_ordnum+"_"+g_actnum+".json&Append=false",
					  type: "post",
					  dataType: "text",
					  success: function(text){
						  
					  var allJobsArray = JSON.parse(text);
					  var toolsIni = allJobsArray.dataComp;
				//var allJobsData = allJobs();
				//var allJobsArray = allJobsData.d.results;
				
					  var toolDataJSONArr = {
							  "results" : toolsIni
					  };
					  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					  toolDataJSONModel.setData(toolDataJSONArr);
					  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
					  }
				
					  });
				
			}
				
			
			}
			else
					{
			//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));

				//sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
				
				if(g_runningInTablet || g_runningOnPhone) 
				{
		 	   var dataArrIni = [];
		 	   readLocalFileOnDevice(g_ordnum+"_"+g_actnum+"_MODC.json", function(funCall)
				
						{
		 		   
		 		  var allJobsArray  = JSON.parse(funCall);
					// var allJobsArray = allJobsArrayIni.allJobs;
					 
					 var toolsIni = allJobsArray.dataComp;
						//var allJobsData = allJobs();
						//var allJobsArray = allJobsData.d.results;
						
							  var toolDataJSONArr = {
									  "results" : toolsIni
							  };
							  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
							// set the data for the model
							  toolDataJSONModel.setData(toolDataJSONArr);
							  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
							  });
					 
						
				}
		
		
		else
			{
				$.ajax({
					  url: "SaveJSONServlet?operation=Read&fileName="+g_ordnum+"_"+g_actnum+"_MODC.json&Append=false",
					  type: "post",
					  dataType: "text",
					  success: function(text){
						  
					  var allJobsArray = JSON.parse(text);
					 // var toolsIni = allJobsArray.dataComp;
				//var allJobsData = allJobs();
				//var allJobsArray = allJobsData.d.results;
				
					  var toolDataJSONArr = {
							  "results" : allJobsArray
					  };
					  var toolDataJSONModel = new sap.ui.model.json.JSONModel();
					// set the data for the model
					  toolDataJSONModel.setData(toolDataJSONArr);
					  sap.ui.getCore().byId("MOB03ComponentList").setModel(toolDataJSONModel);
					  }
				
					  });
				
				
				
			
			
				
				/*
			var modelQJson = JSON.parse(modelQ);
			if ( modelQJson.indexOf(g_ordnum + "_" + g_actnum)  == -1)
					{
					sap.ui.getCore().byId("MOB03ComponentList").setModel(sap.ui.getCore().getModel("components"));
					
					}
			else
					{
						var complData  =  window.localStorage.getItem(g_ordnum + "_" + g_actnum+"_"+"MODC");
						var compDataJSON = JSON.parse(complData);
						
						 var compDataJSONArr = {
								  "results" : compDataJSON
						  };
						  var compDataJSONModel = new sap.ui.model.json.JSONModel();
						// set the data for the model
						  compDataJSONModel.setData(compDataJSONArr);
						  sap.ui.getCore().byId("MOB03ComponentList").setModel(compDataJSONModel);
						
						
					
					}
			
		*/}
		}
		}
		
		/*var tools = new sap.ui.model.json.JSONModel("view/data/tools.json");
		sap.ui.getCore().setModel(tools, "tools");
		
		var components = new sap.ui.model.json.JSONModel("view/data/components.json");
		sap.ui.getCore().setModel(components, "components");*/
		
		//sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
	},

	handleListItemPress: function(evt) {
		sap.ui.getCore().byId("MOB03IconTabBar").setSelectedKey("firstTab");
		var contextPath = evt.getSource().oBindingContexts.undefined.sPath;
		//hideAndShowButtons(this.getModel().getProperty(contextPath + "/CurrentStatus"));
		g_STATUSMOB03 = this.getModel().getProperty(contextPath + "/CurrentStatus");
		g_ordnum = this.getModel().getProperty(contextPath + "/OrderNo");
		g_actnum = this.getModel().getProperty(contextPath + "/ActivityNo");
		g_STATUSMOB03 = window.localStorage.getItem(g_ordnum + "_" + g_actnum);

		if (g_STATUSMOB03 === "ACPT") {
			//			sap.ui.getCore().byId("mob03comp").setVisible(true);
			//			sap.ui.getCore().byId("mob03tool").setVisible(true);
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(true);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(true);
			var componentListItems = sap.ui.getCore().byId("MOB03ComponentList").getItems();
			var toolListItems = sap.ui.getCore().byId("MOB03ToolList").getItems();
			for (var i in componentListItems) {
				componentListItems[i].setType("Active");
			}
			for (var i in toolListItems) {
				toolListItems[i].setType("Active");
			}
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(true);
		} else {
			//			sap.ui.getCore().byId("mob03comp").setVisible(false);
			//			sap.ui.getCore().byId("mob03tool").setVisible(false);
			sap.ui.getCore().byId("MOB03AddComponentButton").setEnabled(false);
			sap.ui.getCore().byId("MOB03AddToolButton").setEnabled(false);
			var componentListItems = sap.ui.getCore().byId("MOB03ComponentList").getItems();
			var toolListItems = sap.ui.getCore().byId("MOB03ToolList").getItems();
			for (var i in componentListItems) {
				componentListItems[i].setType("Inactive");
			}
			for (var i in toolListItems) {
				toolListItems[i].setType("Inactive");
			}
			sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
		}

		g_listItemStatusID = evt.getSource().mAggregations.firstStatus.sId;
		//g_invdocnumMOB35 = this.getModel().getProperty(contextPath + "/InvDocument");
		var context = evt.getSource().getBindingContext();
		var context2 = evt.getSource().getBindingContext("components");
		var context3 = evt.getSource().getBindingContext("tools");
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context);
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context2, "components");
		sap.ui.getCore().byId("MOB03Detail").setBindingContext(context3, "tools");
		sap.ui.getCore().byId("MOB03SplitApp").toDetail("MOB03Detail");
		//sap.ui.getCore().byId("MOB03JobActionButton").setVisible(false);
	},

	getSorter: function(evt) {

		var groupInfo = {
			"ACPT": {
				order: 1,
				text: "Accepted"
			},
			"HOLD": {
				order: 2,
				text: "On Hold"
			},
			"DISP": {
				order: 3,
				text: "Assigned"
			},
			"COMP": {
				order: 4,
				text: "Completed"
			},
			"REJT": {
				order: 4,
				text: "Rejected"
			},
			"CANC": {
				order: 5,
				text: "Cancelled"
			}
		};

		var oSorter = new sap.ui.model.Sorter("CurrentStatus", null, function(oContext) {
			var currentStatus = oContext.getProperty("CurrentStatus");
			return {
				key: currentStatus,
				text: groupInfo[currentStatus].text
			};
		});

		oSorter.fnCompare = function(a, b) {
			var agroup = groupInfo[a].order;
			var bgroup = groupInfo[b].order;
			if (agroup < bgroup) return -1;
			if (agroup > bgroup) return 1;
			if (a < b) return -1;
			if (a == b) return 0;
			if (a > b) return 1;
		}

		return oSorter;

	}

});

function hideAndShowButtons(status) {
	if ("DISP" === status) {
		sap.ui.getCore().byId("MOB03ACPT").setVisible(true);
		sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
	} else if ("ACPT" === status) {
		sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
		sap.ui.getCore().byId("MOB03HOLD").setVisible(true);
		sap.ui.getCore().byId("MOB03COMP").setVisible(true);
		sap.ui.getCore().byId("MOB03CAN").setVisible(true);
	} else if ("HOLD" === status) {
		sap.ui.getCore().byId("MOB03RJCT").setVisible(true);
		sap.ui.getCore().byId("MOB03RES").setVisible(true);
		//sap.ui.getCore().byId("MOB03COMP").setVisible(true);
		sap.ui.getCore().byId("MOB03CAN").setVisible(true);
	}
	//else
}

function fail(){
	//alert("Service Failed");
	}