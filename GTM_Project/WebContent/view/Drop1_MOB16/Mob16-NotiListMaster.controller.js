sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob16-NotiListMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob16-NotiListMaster
*/
//	onBeforeRendering: function() {
//
//	},
	
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB16";
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
	
handleListItemPress:function(evt){
	sap.ui.getCore().byId("MOB16_taskDetails_tab").setSelectedKey("MOB16_task_detailKey");
	//sap.ui.getCore().byId("Mob16AddedImageList").unbindProperty();
	var emptyArray = [];
	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(emptyArray);
	sap.ui.getCore().byId("Mob16AddedImageList").setModel(oJasonNotiQModel);
	
	
	//Clear Image
	var getAlreadyBindedData = [];
	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(getAlreadyBindedData);
	sap.ui.getCore().byId("Mob16AddedImageList").setModel(oJasonNotiQModel);
		
		
	this.setSelected(true);
	var contextPath= this.getBindingContext().sPath;
	 contextPath= contextPath.substring(1,contextPath.length);
	   
	 
	if (g_runningOnPhone){
		var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
		 splitApp.to("idMOB16NotiListDetail"); // Navigating to Notification Detail
	}
	else{
		 var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
		 splitApp.toDetail("idMOB16NotiListDetail"); // Navigating to Notification Detail
	}
		
		
	var data= sap.ui.getCore().byId("TaskMasterList").getModel().oData[contextPath];
	sap.ui.getCore().byId("Mob16DummyLabel").setText(data.NotificationNo);
	var obj= sap.ui.getCore().byId("objheader");
	obj.setTitle(data.NotificationNo);
	obj.setNumber(data.NotificationType);
	obj.removeAllAttributes()
	obj.addAttribute(new sap.m.ObjectAttribute({
	              text: "Material Number:             "+ data.MaterialNumber
	            }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Description: "+data.NotificationDescription
      }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Serial Number: "+data.SerialNumber
      }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Batch Number:             "+ data.Batch
      }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Coding: "+data.Coding
    }));
	var obj= sap.ui.getCore().byId("objheader2");
	obj.setIntro(data.TaskText);
	obj.setTitle(data.TaskCodeText);
	obj.removeAllAttributes()
	obj.addAttribute(new sap.m.ObjectAttribute({
	              text: "Task Sequence: "+ data.TaskSequence
	            }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Task Code: "+data.TaskCode
      }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Planned Start date: "+com.cg.gtm.Formatter.startDate(data.PlannedStartDate),
        	
      }));
	obj.addAttribute(new sap.m.ObjectAttribute({
        text: "Planned finish date: "+com.cg.gtm.Formatter.startDate(data.PlannedFinishDate)
    }));
	sap.ui.getCore().byId("MOB16_Notes").setValue(data.TaskLongText);
	
	sap.ui.getCore().byId("MOB16_taskDetails_tab").setSelectedKey("MOB16_task_detailKey")
	sap.ui.getCore().byId("MOB16SaveComplete").setVisible(true);
	sap.ui.getCore().byId("MOB16SaveOnly").setVisible(true);
	
/*	
	var count= sap.ui.getCore().byId("Mob16ImageListItem").getItems().length;
	sap.ui.getCore().byId("MOB16_PhotoFilter").setCount(count);
	var count= sap.ui.getCore().byId("Mob16DocumentListItem").getItems().length;
	sap.ui.getCore().byId("MOB16_DocFilter").setCount(count);*/
	},
	
	collapse_expand: function(action){
		var items= sap.ui.getCore().byId("TaskMasterList").getItems();
		if(sap.ui.getCore().byId("MOB16_col_exp").getIcon()=="sap-icon://expand-group"){
			sap.ui.getCore().byId("MOB16_col_exp").setIcon("sap-icon://collapse-group")
			
			}
		else{
			sap.ui.getCore().byId("MOB16_col_exp").setIcon("sap-icon://expand-group")
			
			}
		
		for(i=0;i<items.length;i++){
			if(items[i].getAttributes){
				var item = $("#"+items[i].sId);
				if(item[0].hidden==true) {
					item[0].hidden = false;
					$("#"+items[i].sId).show();
				}else {
					item[0].hidden = true;
					$("#"+items[i].sId).hide();
				}
			}
		}
		
	},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob16-NotiListMaster
*/
	onAfterRendering: function() {
		
	//////setting all the items hidden when loading/////////////////////	
		
		var items= sap.ui.getCore().byId("TaskMasterList").getItems();
		for(i=0;i<items.length;i++){
			if(items[i].getAttributes){
				var item = $("#"+items[i].sId);
				if(item[0].hidden==true) {
					item[0].hidden = false;
					$("#"+items[i].sId).show();
				}else {
					item[0].hidden = true;
					$("#"+items[i].sId).hide();
				}
			}
		}
	
////////////////////////////appending the icon to the list item///////////////////
		for(i=0;i<items.length;i++){
			if(!items[i].getAttributes){
				var item = $("#"+items[i].sId);
				
				item.click(function(){
					
					var NotifNumber=this.childNodes[1].innerText
					var items= sap.ui.getCore().byId("TaskMasterList").getItems();
					for(i=0;i<items.length;i++){
						if(items[i].getAttributes){
							if(items[i].getAttributes()[0].getText()==NotifNumber){
								var item = $("#"+items[i].sId);
								if(item[0].hidden==true) {
									item[0].hidden = false;
									$("#"+items[i].sId).slideDown();
								}else {
									item[0].hidden = true;
									$("#"+items[i].sId).slideUp();
								}
							}
						}
					}
					
					/////rotating the icon on click
					sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster").rotateContent(this.childNodes[0].childNodes[0]);
				
				
								
							})
				item.css({
					"height": "3rem",
					"cursor": "pointer"
		});
				item.prepend("<div  class='hre_treeIcon' style='padding-right: 1rem;'><img src='img/arrow_RIGHT.png'> </div>");
			}
		}
		
	//////attaching a click event to the expand/collapse icon/////	
	/*$(".hre_treeIcon").click(function(){
		var NotifNumber=this.parentNode.getElementsByClassName("sapMGHLITitle")[0].innerText
		var items= sap.ui.getCore().byId("TaskMasterList").getItems();
		for(i=0;i<items.length;i++){
			if(items[i].getAttributes){
				if(items[i].getAttributes()[0].getText()==NotifNumber){
					var item = $("#"+items[i].sId);
					if(item[0].hidden==true) {
						item[0].hidden = false;
						$("#"+items[i].sId).slideDown();
					}else {
						item[0].hidden = true;
						$("#"+items[i].sId).slideUp();
					}
				}
			}
		}
		
		/////rotating the icon on click
		sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster").rotateContent(this.childNodes[0]);
	
	});*/
	
	
	///////attaching click even to the title list item/////
	
/*	$("#TaskMasterList-listUl .sapMGHLITitle").click(function(){
		var NotifNumber= this.innerText;

		var items= sap.ui.getCore().byId("TaskMasterList").getItems();

		for(var i=0;i<items.length;i++){
			if(items[i].getAttributes){
				if(items[i].getAttributes()[0].getText()==NotifNumber){
					var item = $("#"+items[i].sId);
					if(item[0].hidden==true) {
						item[0].hidden = false;
						$("#"+items[i].sId).slideDown();
					}else {
						item[0].hidden = true;
						$("#"+items[i].sId).slideUp();
					}
		
				}
			}
		}
	
		var listItem= this.parentNode.parentNode.getElementsByClassName("hre_treeIcon")[0].childNodes[0];
		sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster").rotateContent(listItem);
	});*/

	},
	
rotateContent: function(source){
		var rotate= "";
		if(source.style.transform==""){
			rotate = "rotate(90" +"deg)";
			}
			else{
			 rotate = "";
				}
	        var trans = "all 0.3s ease-out";
	        $(source).css({
	            "-webkit-transform": rotate,
	            "-moz-transform": rotate,
	            "-o-transform": rotate,
	            "msTransform": rotate,
	            "transform": rotate,
	            "-webkit-transition": trans,
	            "-moz-transition": trans,
	            "-o-transition": trans,	
	            "transition": trans
	        });
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob16-NotiListMaster
*/
//	onExit: function() {
//
//	}
	
	onTreeSelection: function(event)
	   {
		
		
	
		   var nodeId = event.mParameters.id; // Getting node Id in the Tree
		   
		   var modelNode = sap.ui.getCore().byId(nodeId); // Getting actual Node Control
		   
		   var oTreeTaskList = sap.ui.getCore().byId("NotiTaskListTree"); // Getting Tree Control
		   var model = oTreeTaskList.getModel(); // Getting Model associated to Tree
		   
		   var contextPath = modelNode.oBindingContexts.undefined.sPath; // Getting context path for Node
		   
		   var strNode = contextPath.substring(0, contextPath.length - 2); // Getting parent level of Context Path
		   
		   var objValue = null;
		   
		   /*
		    * Global Variable for Notification No & Task Seq No
		    */
		   _g_NotificationNo = null;
		   _g_TaskSeq = null;
		   
		   
		   if(strNode != null && strNode != undefined && strNode.length > 0) {
			  
			    if(strNode.endsWith("mDetails")) {// Check selection is for Task Level
			
				   
			
				   
                     objValue = model.getProperty(strNode);
				   
				   
////////////////////////////////////////////////////////////////////////////////////////////////				
/*				  tasknum = sap.ui.getCore().byId("tasknum"); 
				  tasknum.setText(objValue[0].mValue);
				   
				   taskcode = sap.ui.getCore().byId("taskcode"); 
				   taskcode.setText(objValue[7].mValue);
				   
				   taskDetailCode = sap.ui.getCore().byId("taskDetailCode"); 
				   taskDetailCode.setText(objValue[6].mValue);
				   
				   taskDetailStDt = sap.ui.getCore().byId("taskDetailStDt"); 
				   taskDetailStDt.setText(objValue[3].mValue);
				   
				   taskDetailEnDt = sap.ui.getCore().byId("taskDetailEnDt"); 
				   taskDetailEnDt.setText(objValue[4].mValue);
				   
				   _g_NotificationNo = objValue[8]; //Notification No
				   _g_TaskSeq =  objValue[9]; //Task Seq No
*/				   
				   /*objValue = model.getProperty(strNode.substring(0, 9)); //Trimming "/mDetails"
				   _g_NotificationNo = objValue.name;
				   _g_TaskSeq = objValue.TaskSequence;*/
				   
				   
//////////////////////////////////////////////////////////////////////////////////////////////				   
				   
				//   var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
				//   splitApp.toDetail("idMOB16NotiTaskDetail"); // Navigating to Task Detail
			   }
			   else if(strNode.endsWith("mTypes")) {
				   
				   // Check selection is for Notification Level
				   
				  
				   objValue = model.getProperty(strNode);
				   
				   var nodetext =  modelNode.getText();
				  // alert(nodetext);
				   var len = objValue.length;
				   
				   for (var int = 0; int < len ; int++) {
					   
					 //  alert(objValue[int].name);
					   if (nodetext == objValue[int].name)
						   {
						   
						   /*_g_NotificationNo = objValue[int].name;
						   _g_TaskSeq = objValue[int].TaskSequence;*/
						   
						  // var u =  objValue[int].deatails[0].nameTest ;
						   
						   _g_NotificationNo = objValue[int].details[0].name;
						   _g_TaskSeq = objValue[int].details[0].TaskSequence;
						   
						   description = sap.ui.getCore().byId("Description"); 
						   description.setText(objValue[int].mDescription);
						   
						   type = sap.ui.getCore().byId("type"); 
						   type.setText(objValue[int].typeValue);
						   
						   matnum = sap.ui.getCore().byId("matnum"); 
						   matnum.setText(objValue[int].mMaterialNumber);
						   
						   snum = sap.ui.getCore().byId("snum"); 
						   snum.setText(objValue[int].mSerialNumber); 
						   
						  
						   prdord = sap.ui.getCore().byId("prdord"); 
						   prdord.setText(objValue[int].ProductionOrder);  // need field name for production order
						   
						   
						   coding = sap.ui.getCore().byId("coding"); 
						   coding.setText(objValue[int].mcoding);   // need field name coding
						   
						   break ;
						   
						   }
					
				}
				   //Tree expand & show description on single click 
				   var countValues = new sap.ui.getCore().byId("countValueSetter").getText();
				   if( (countValues % 2) != 0 )
					   {
					   sap.ui.getCore().byId(nodeId).setExpanded(true);
					   sap.ui.getCore().byId("countValueSetter").setText("2");
					   }
				   else{
					   sap.ui.getCore().byId(nodeId).setExpanded(false);  
					   sap.ui.getCore().byId("countValueSetter").setText("1");
				   }
				   
				   if ( g_runningOnPhone == true)
					{
					   g_MobileNavigationId = "Mob16-SecondScreen-BackNavButton";
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMOB16NotiListDetail");//navigation to new opa
					}	
						else
							{
				   var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
					splitApp.toDetail("idMOB16NotiListDetail"); // Navigating to Notification Detail
							}
			   }
			   else if(strNode.endsWith("details")) { // Check selection is for Notification Level
				
	/////////////////////////////////////////////////////////////////////////////////////////			   
		/*		   var nodetext =  modelNode.getText();
				  // alert(nodetext);
				   
                  var len = objValue.length;
				   
				   for (var int = 0; int < len ; int++) {
					   
					// alert(objValue[int].mDescription);
					   
					   if (nodetext == objValue[int].mDescription)
						   {
						   
						   description = sap.ui.getCore().byId("Description1"); 
						   description.setText(objValue[int].mDescription);
						   
						   type = sap.ui.getCore().byId("type1"); 
						   alert(objValue[int].taskDetailStDtVal);
						   type.setText(objValue[int].taskDetailStDtVal);
						   
						   
						   matnum = sap.ui.getCore().byId("matnum1"); 
						   alert(objValue[int].taskDetailEnDtVal);
						   matnum.setText(objValue[int].taskDetailEnDtVal);
						   
						   task = sap.ui.getCore().byId("task"); 
						  // alert(objValue[int].TaskSequence);
						   task.setText(objValue[int].TaskSequence);
						   
						  
						   prdord = sap.ui.getCore().byId("prdord"); 
						   prdord.setText(objValue[int].TaskSequence);
						   
						   
						   coding = sap.ui.getCore().byId("coding"); 
						   coding.setText(objValue[int].mSerialNumber);
						   
						   break ;
						   }
					
				}*/
	//////////////////////////////////////////////////////////////////////////////////////	
				   objValue = model.getProperty(strNode);
				   var nodetext =  modelNode.getText();
			
				   var len = objValue.length;
				  
				   for (var int = 0; int < len ; int++) {
					 //  alert(objValue[int].StartDateText);
					 
	
					   if (nodetext == objValue[int].mDescription)
						   {
						   
						   _g_NotificationNo = objValue[int].name;
						   _g_TaskSeq = objValue[int].TaskSequence;
							   
							   
						   tasknum = sap.ui.getCore().byId("tasknum"); 
						   tasknum.setText(objValue[int].mDescription);
						   
						   
						   taskseq = sap.ui.getCore().byId("taskcode"); 
						   taskseq.setText(objValue[int].TaskSequence);
						   
						   taskcode = sap.ui.getCore().byId("taskDetailCode"); 
						   taskcode.setText(objValue[int].TaskCode);
						   
						   taskcodetxt = sap.ui.getCore().byId("texttaskcodetext"); 
						   taskcodetxt.setText(objValue[int].TaskCodeText);
						 
						 
						   
						   additionalnotes = sap.ui.getCore().byId("Text_AddNotes"); 
						   additionalnotes.setValue(objValue[int].NotificationLongText);
						
						   
						   taskDetailStDt = sap.ui.getCore().byId("taskDetailStDt"); 
						   var convertDate = formatDate(objValue[int].StartDateText);//Convert to Date object calling util/StringUtility.js
						   
					       taskDetailStDt.setText(convertDate);
						   
					       convertDate = formatDate(objValue[int].EndDateText);//Convert to Date object calling util/StringUtility.js
						   
						   taskDetailEnDt = sap.ui.getCore().byId("taskDetailEnDt"); 
						   taskDetailEnDt.setText(convertDate);
						   
					   
						  
						   
						 break;
						   
						   }
					
				}
				   
				 //Tree expand & show description on single click 
				   var countValueSetterNode = new sap.ui.getCore().byId("countValueSetterNode").getText();
				   if( (countValueSetterNode % 2) != 0 )
					   {
					   sap.ui.getCore().byId(nodeId).setExpanded(true);
					   sap.ui.getCore().byId("countValueSetterNode").setText("2");
					   }
				   else{
					   sap.ui.getCore().byId(nodeId).setExpanded(false);  
					   sap.ui.getCore().byId("countValueSetterNode").setText("1");
				   }
				   
					if ( g_runningOnPhone == true)
					{
						
						g_MobileNavigationId = "Mob16-ThirdScreen-BackNavButton";
						var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMOB16NotiTaskDetail");//navigation to new opa
					}	
						else
							{
							 var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
							  splitApp.toDetail("idMOB16NotiTaskDetail");//navigation to new opa
							   
							}
				  
				   
				  // var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
					//splitApp.toDetail("idMOB16NotiListNodeDetail"); // Navigating to Notification Detail
			   }
		   }
		   
	   },
	
		/*toDetails : function(event)
		{
			var splitApp = sap.ui.getCore().byId("splitAppNotiList"); 
			splitApp.toDetail("idMOB16NotiListDetail");
		}*/

});

