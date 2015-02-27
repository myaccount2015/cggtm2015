sap.ui.controller("com.cg.gtm.view.GridSubMenuQM", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.cg.gtm.view.GridSubMenuQM
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.cg.gtm.view.GridSubMenuQM
*/
	onBeforeRendering: function() {
		//$("#sap-ui-blocklayer-popup1").hide();
		//$("#splash-screen").hide();
	
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.cg.gtm.view.GridSubMenuQM
*/
	onAfterRendering: function() {
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.cg.gtm.view.GridSubMenuQM
*/
//	onExit: function() {
//
//	}
	/*
	 * This Method is used to clear all input criteria in MOB-21
	 */
	clearInspInputs: function() {
		var oListItemPlantImg = sap.ui.getCore().byId("oListItemPlant-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		if(oListItemPlantImg != undefined) {
		
			oListItemPlantImg.setVisible(true);
		}
		
		var oListItemMatImg = sap.ui.getCore().byId("oListItemMat-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		if(oListItemMatImg != undefined) {
			oListItemMatImg.setVisible(false);
		}
		
		var oListItemWCImg = sap.ui.getCore().byId("oListItemWC-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		if(oListItemWCImg != undefined) {
			oListItemWCImg.setVisible(false);
			wcDesc="";
		}
		
		var oListItemVenImg = sap.ui.getCore().byId("oListItemVen-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		if(oListItemVenImg != undefined) {
			oListItemVenImg.setVisible(false);
			selectedVendor = "";
		}
				
		var oListItemTypeImg = sap.ui.getCore().byId("oListItemType-imgDel"); //List Item UI Control id hyphen imgDel to get the delete icon
		if(oListItemTypeImg !=undefined) {
			oListItemTypeImg.setVisible(false);
			selectedType="";
		}
		
		//Plant Criteria
		var plantList = sap.ui.getCore().byId("oListItemPlant");
		plantList.setDescription("North Pole Depot");
		plantList.setIcon("");
		
		//Material Criteria
		var matList = sap.ui.getCore().byId("oListItemMat");
		matList.setDescription("");
		matList.setIcon("");
		
		//Work Center Criteria
		var wcList = sap.ui.getCore().byId("oListItemWC");
		wcList.setDescription("");
		wcList.setIcon("");
		
		//Vendor Criteria
		var venList = sap.ui.getCore().byId("oListItemVen");
		venList.setDescription("");
		venList.setIcon("");
		
		//Type Criteria
		var typeList = sap.ui.getCore().byId("oListItemType");
		typeList.setDescription("");
		typeList.setIcon("");
		
		/*
		 * Hiding Detail Screens for MOB-21 for initial Load
		 */
		//hideMOB21Detail();
		 var getPlant =  window.localStorage.getItem("defPlantDesc");
			//	var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
			//	plantLst.setValue(getPlant);

MOB15plantCode = "";
MOB15plantDesc = "North Pole Depot";
var inputPlantMat = sap.ui.getCore().byId("oListItemPlant");   
inputPlantMat.setDescription(getPlant);

//Set Material Search default plant
var inputPlantMat_search = sap.ui.getCore().byId("inputPlantMat");   
inputPlantMat_search.setValue(getPlant);

getSelectedPlantId = MOB15plantCode ;
selectedPlantID = MOB15plantCode;
// inputPlantMat.setEnabled(true);
matSearchDoneMOB21 = 0;
	
	},

	
	/*
	 * This method is calling Notification Task List Service and transform in to Tree Structure that is being used in MOB-16
	 */
	loadInspectionQ : function()
	{
		
		var insNumRcvd = new Array();
		var mob22det  =  sap.ui.getCore().byId("inputMatnrMOB22");
		mob22det.setEnabled(true);
		
		var matnum = sap.ui.getCore().byId("inputMatnrMOB22"); 
		matnum.setEnabled(true);
		matnum.setValue("");
		matnum.setValueState(sap.ui.core.ValueState.None);
		
		
		var vendornum = sap.ui.getCore().byId("inputVendorMOB22");
		vendornum.setEnabled(true);
		//vendornum.setValue("");
		var dropDownDataArr = [] ;
		  var dropDownData = {  							    
				     "text":"" ,
				     "key" :""					  
				 }; 
		  
		  dropDownDataArr.push(dropDownData);
		  vendornum.setValue("")
				//  var oModelJsonList = sap.ui.getCore().byId("Customersdemo");  
					

	var dropDownDataFinal = [];
	dropDownDataFinal = {"items" : dropDownDataArr};
	var oModelJsonList = new sap.ui.model.json.JSONModel();  
	oModelJsonList.setData(dropDownDataFinal); 
	sap.ui.getCore().byId("inputVendorMOB22").setModel(oModelJsonList); 	
		
		var insLotQty = sap.ui.getCore().byId("insqty");
		insLotQty.setEnabled(true);
		insLotQty.setValue("");
		insLotQty.setValueState(sap.ui.core.ValueState.None);
		
		var batch = sap.ui.getCore().byId("batch");
		batch.setEnabled(true);
		batch.setValue("");
		
	    var insdet = sap.ui.getCore().byId("insdet"); 
	    insdet.setEnabled(true);
	    insdet.setValue("");
	   
	    var insLotLb = sap.ui.getCore().byId("insLotTime"); 
	    insLotLb.setVisible(false);
	    
	    insLotLb = sap.ui.getCore().byId("insLotLb"); 
	    insLotLb.setVisible(false);
		
	   var  globalCount = 0;
		var items = window.localStorage.getItem('INSLIST');
	 	 if (items === undefined || items === null || items.length === 0)
	 	 {
	 		 
	 		 //when there is no data in Queue
	 	 }
	 	 else
	 		 {
	 		
	 		
	 		insNumRcvd =  JSON.parse(items);
	 		var insItems = insNumRcvd.length;
	 		
	 		var oMD22Data = new Array();
	 		// globalMob15Detail;
	 		for (var i=0;i<insItems;i++)// iterate on array of notifications in Queue
	 		{ 
	 	    var insID =  insNumRcvd[i];	
	 	    var insIDNum = parseInt(insID);
	 	  
	 	    var currDate = new Date();
   		    currDate.toDateString();
   		    var timeMilli = currDate.getTime();
   		    
   		    var diff  =  (timeMilli - insIDNum)/1000 ;
   		  //  alert(timeMilli - insIDNum);
   		    
   		    if (diff < 3600)
   		    	{
	 	
	 		var insData = window.localStorage.getItem(insID);// get from local storage 
	 		oMD22Data.push(JSON.parse(insData));//the array needs to be parsed to convert to appropriate format
	 		globalCount ++ ;
   		    	}
	 		
	 		}
	 		
	 		var finalObj = {"list_22": oMD22Data};
	 		var oJasonInsQModel =  new sap.ui.model.json.JSONModel(finalObj);
	 		var insQ = sap.ui.getCore().byId("mob22iniList");
	 		insQ.setModel(oJasonInsQModel);
	 		}
		
	},
	callNotificationTaskList: function(oEvent) {
		/*
		 * Calling Service - Start
		 */
		
		var treeNotiTaskList = null;
		
		var oJSONModelNotiTaskLst = null;
		var demo = sap.ui.getCore().byId("demoswitch");  
		
		//alert(demo.getState());
		
		if (demo.getState() == true)
			{
			
			openSplashScreen();//splash screen loading
			//sap.ui.getCore().byId("busyDialogMain").open();//loading std busy
			MOB16Mock();
			}
		
		else
			{
			
		
			openSplashScreen();//splash screen loading
			//sap.ui.getCore().byId("busyDialogMain").open();//loading std busy
			
			//Service Start Time
			var logInfo = getTimeStamp() +"MOB15:: Service: TasklistCollection Start" ;

			var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_QM_MOBILEAPP_SRV/");
			if(serviceURL == "Fail")
			 {
			 return false;
			 }
			
			/*
			 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
			 * Hardcoding user and password
			 * TODO: Need to pass service user and password
			 */
	     	var notiTaskLstoDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, myID, myPass, null, true, true, false);
			var readRequestURL = "/TasklistCollection?&$format=json";
			
	   notiTaskLstoDataModel.read(readRequestURL, null, null, false,   
	              function(oData, oResponse) { 
		  // busyDialog.close();
		   
		                
						var result = oResponse.body; //Getting JSON response body
						
						var jsonObj = JSON.parse(result); // Parsing the JSON Object
						
						var result = jsonObj.d; // Taking the result inside namespace d
						
						
						 treeNotiTaskList = result.results;
						 
						 jSonModelSortList= new sap.ui.model.json.JSONModel(treeNotiTaskList, "MD15MATCollModel");
						 treeNotiTaskList = formatNotiTaskResponse(result.results); //Getting results, passing only Array
						//TODO: Change this oJSONModelNotiTaskLst1 Global variable
						 oJSONModelNotiTaskLst1 = new sap.ui.model.json.JSONModel(treeNotiTaskList, "MD15MATCollModel"); 
						  // return oJSONModelNotiTaskLst;
					
						 
						 
						 
						 if( g_isDebug == true)
						 {
						 //Service End Time
						 var logInfo1 = getTimeStamp() +"MOB15:: Service: TasklistCollection Finish" ;
						 //Log file Service Start and End Time
						 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						 logFileUpdate(g_ServiceStartEndTime);
						 }
						 
						 
					},  function(oError){  
						
						closeSplashScreen();//splash screen closed
			    	    sap.ui.getCore().byId("busyDialogMain").close();
						 // busyDialog.close();
						//  closeSplashScreen();//splash screen closed
							errorRes = true;
							//sap.m.MessageBox.show(oError.message);
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
									 var logInfo1 = getTimeStamp() +"MOB15:: Service: TasklistCollection Failed no network" ;
									 //Log file Service Start and End Time
									 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
									 logFileUpdate(g_ServiceStartEndTime);
									 }
									
									
									}
	      });
		}
	    /*
		 * Calling Service -End
		 */
		
		
	
	}

});



/*
 * This method is getting inputs from oData WS(Notification Task List) and formatting the inputs as required in the screen.
 * It transforms the JSON object and creating new structure out of it.
 * Below is the sample data need to be transformed for Tree
 * var jsonNotificationList = 
				{  
			          "mTypes": [ {  
			                        "name" : "2000000001-Bucholz Relay",  
			                        "description" : "TYPE1_desc",  
			                        "details": [  
			                          {  
			                            "name": "ITEM1",  
			                            "mDescription": "Task 1",  
			                            "mDetails": [
                                                       {  
                                                    	   "mValue": "Vendor ABC Limited"  
                                                       },
                                                       {  
                                                    	   "mValue": "Inspect Material"  
                                                       },
                                                       {  
                                                           "mValue": "Priority: High"  
                                                       },
                                                       {
                                                    	   "mValue": "START : 01/10/2013" 
                                                       },
                                                       {
                                                    	   "mValue": "END : 01/11/2013" 
                                                       }
			                                        ]
			                          }, {  
				                            "name": "ITEM1",  
				                            "mDescription": "Task 2",  
				                            "mDetails": [
	                                                       {  
	                                                    	   "mValue": "Vendor ABC Limited 1"  
	                                                       },
	                                                       {  
	                                                    	   "mValue": "Inspect Material 1"  
	                                                       },
	                                                       {  
	                                                           "mValue": "Priority: Low"  
	                                                       },
	                                                       {
	                                                    	   "mValue": "START : 01/10/2013" 
	                                                       },
	                                                       {
	                                                    	   "mValue": "END : 01/11/2013" 
	                                                       }
				                                        ]
				                          }
			                            
			                                    ]
			          
			                         }, 
			                         
	/////////////////////////////////secnd content/////////////////////////////////////////////////////////////		                         
			                         {  
					                        "name" : "2000000002-Cab Seal Failure",  
					                        "description" : "TYPE1_desc",  
					                        "details": [  
					                          {  
					                            "name": "ITEM1",  
					                            "mDescription": "Tasks",  
					                            "mDetails": [
		                                                       {  
		                                                       "mValue": "Vendor ABC Limited"  
		                                                       },
		                                                       {  
		                                                       "mValue": "Inspect Material"  
		                                                       },
		                                                       {  
		                                                           "mValue": "Priority: Low"  
		                                                       },
		                                                       {
		                                                    	   "mValue": "START : 01/10/2013" 
		                                                       },
		                                                       {
		                                                    	   "mValue": "END : 01/11/2013" 
		                                                       }
					                                        ]
					                          }, 
					                                    ]
					                         }, 
			                              ]                     
			 
		};
 */
function formatNotiTaskResponse(aTaskList) {
	var aTaskListLength = aTaskList.length;
	
	var aNotiList = [];
	
	for(cnt=0; cnt<aTaskListLength; cnt++) {
	
		var NotificationNo = aTaskList[cnt].NotificationNo;
		var NotificationDescription = aTaskList[cnt].NotificationDescription;
		var NotificationType = aTaskList[cnt].NotificationType;
		var NotificationTypeText = aTaskList[cnt].NotificationTypeText;
		var SalesOrder = aTaskList[cnt].SalesOrder;
		var DeliveryNumber = aTaskList[cnt].DeliveryNumber;
		var DefectLocation = aTaskList[cnt].DefectLocation;
		var PurchaseOrder = aTaskList[cnt].PurchaseOrder; 
		var PurchaseOrderItem = aTaskList[cnt].PurchaseOrderItem;
		var ProductionOrder = aTaskList[cnt].ProductionOrder;
		var NotificationLongText = aTaskList[cnt].NotificationLongText;
		var MaterialNumber = aTaskList[cnt].MaterialNumber;
		var Batch = aTaskList[cnt].Batch;
		var SerialNumber = aTaskList[cnt].SerialNumber;
		var PlantForMaterial = aTaskList[cnt].PlantForMaterial;
		var Quantity = aTaskList[cnt].Quantity;
		var TaskSequence = aTaskList[cnt].TaskSequence;
		var TaskCode = aTaskList[cnt].TaskCode;
		var TaskCodeText = aTaskList[cnt].TaskCodeText;
		var TaskText = aTaskList[cnt].TaskText;
		var PlannedStartDate = aTaskList[cnt].PlannedStartDate;
		var PlannedFinishDate = aTaskList[cnt].PlannedFinishDate;
		var TaskStatus = aTaskList[cnt].TaskStatus;
		var DefectType = aTaskList[cnt].DefectType;
		var RevisionLevel = aTaskList[cnt].RevisionLevel;
		var Priority = aTaskList[cnt].Priority;
		var Coding = aTaskList[cnt].Coding;
		var TaskLongText =  aTaskList[cnt].TaskLongText;
		 NotificationLongText = TaskLongText; 
		
		
		//var typeValue = aTaskList[cnt].__metadata.type;//type comes under metadata field
		
	
		
		
		
		var PriorityText = "Priority: NA";
		if(Priority != undefined || Priority != null) {
			if(Priority == "1") {
				PriorityText = "Priority: Very high";
			}else if(Priority == "2") {
				PriorityText = "Priority: High";
			}else if(Priority == "3") {
				PriorityText = "Priority: Medium";
			}else if(Priority == "4") {
				PriorityText = "Priority: Low";
			}else {
				Priority = "5"; //Setting the Priority as lowest
			}
		}
		
		
		var taskDetailCode = {  
           	   "mValue": TaskCodeText  
        };
		
		var taskDetailMatNo = {  
           	   "mValue": "Material No: " + MaterialNumber  
        };
		
		var taskDetailPriority = {  
                "mValue": PriorityText
        };
		
		var taskDetailStDt = {
           	   "mValue": "START : " + formatDate(PlannedStartDate) //Format Date calling util/StringUtility.js
        };
			
		var taskDetailEnDt = {
           	   "mValue": "END : " + formatDate(PlannedFinishDate) //Format Date calling util/StringUtility.js
        };
		

		  
		var arrTaskList = { // Each Task List
				"name": NotificationNo ,
				"mDescription": TaskSequence + "--"+TaskText,//NotificationDescription,
				"taskDetailStDtVal": convertToDate(formatDate(PlannedStartDate)),//Convert to Date object calling util/StringUtility.js
				"taskDetailEnDtVal": convertToDate(formatDate(PlannedFinishDate)),//convertToDate(formatDate(PlannedFinishDate)),//Convert to Date object calling util/StringUtility.js
				"TaskSequence": TaskSequence,
				"TaskCode" : TaskCode,
				"TaskCodeText" : TaskCodeText,
				"NotificationLongText" : NotificationLongText,
			   "StartDateText" : PlannedStartDate,
			   "EndDateText" : PlannedFinishDate,
				"mDetails": [
	                       //  taskDetailCode, hide task code
	                       //	  taskDetailMatNo,
	                        // taskDetailPriority,
	                         taskDetailStDt,
	                         taskDetailEnDt,
	                         SerialNumber,
	                         TaskCodeText,
	                         NotificationLongText,
	                        // TaskLongText,
	                         TaskCode,
	                         NotificationNo,
	                         TaskSequence
	                      ]
		};
		
		var objCurrentNoti = { //Constructing Notification
				"name": NotificationNo + "("+PriorityText+")", 
				 "nameTest" : NotificationNo,
				"PriTex" : PriorityText,
				"details":[arrTaskList],
				"mDescription": NotificationDescription,
				"mSerialNumber": SerialNumber,
				"mDefectType" : DefectType ,
				"mMaterialNumber" : MaterialNumber,
				"mPurchaseOrder" : PurchaseOrder,
				"taskDetailPriority": Priority, //Task Priority is Notification Priority
				"typeValue" : NotificationTypeText,
				"ProductionOrder" : ProductionOrder,
				"mcoding" : Coding
				
		}
		
		/*
		 * Merging the Task into Existing Notification - Start
		 */
		var b_notiExisting = false;
		
		for(i=0;i<aNotiList.length;i++) {
			var objNoti = aNotiList[i];
			
		
			if((NotificationNo==objNoti.nameTest) &&(PriorityText ==objNoti.PriTex) ) 
			{
				b_notiExisting = true;
				objNoti.details.push(arrTaskList);
			}
		}
		
		/*
		 * Merging the Task into Existing Notification - End
		 */
		
		if(!b_notiExisting) { //Add Notification only when the Notification not existing in the list
			aNotiList.push(objCurrentNoti);
		}
		
		
		
		
	}
	
	/*
	 * Sort function Descending for Task Start Date - Implicit Function
	 */
	var sorterDescDate = function (a, b) {
	    var key1 = a.taskDetailStDtVal;
	    var key2 = b.taskDetailStDtVal;

	    if (key1 < key2) {
	        return 1;
	    } else if (key1 == key2) {
	        return 0;
	    } else {
	        return -1;
	    }
	};
	
	/*
	 * Sort function Ascending for Task Start Date - Implicit Function
	 */
	var sorterAscDate = function (a, b) {
	    var key1 = a.taskDetailStDtVal;
	    var key2 = b.taskDetailStDtVal;

	    if (key1 < key2) {
	        return -1;
	    } else if (key1 == key2) {
	        return 0;
	    } else {
	        return 1;
	    }
	};
	
	/*
	 * Sorting Descending order - Start
	 */
	for(var i=0;i<aNotiList.length;i++) {
		var objNoti = aNotiList[i];
		objNoti.details.sort(sorterDescDate); //Sorting Desc order
	}
	/*
	 * Sorting Descending order - End
	 */
	
	/*
	 * Deleting Empty Node - Start
	 */
	for(var i=0;i<aNotiList.length;i++) {
		var objNoti = aNotiList[i];
		
		var arTask = objNoti.details;
		
		for(j=0;j<arTask.length;j++) {
			var objTask = arTask[j];
			
			delete objTask["taskDetailStDtVal"]; //Refer http://stackoverflow.com/questions/15451290/remove-element-from-json-object
			delete objTask["taskDetailEnDtVal"];
		}
		
		
	}
	/*
	 * Deleting Empty Node - End
	 */
	
	/*
	 * Sort function Descending for Priority - Implicit Function
	 */
	var sorterDescPriority = function (a, b) {
	    var key1 = a.taskDetailPriority;
	    var key2 = b.taskDetailPriority;

	    if (key1 < key2) {
	        return 1;
	    } else if (key1 == key2) {
	        return 0;
	    } else {
	        return -1;
	    }
	};
	
	/*
	 * Sort function Ascending for Priority - Implicit Function
	 */
	var sorterAscPriority = function (a, b) {
	    var key1 = a.taskDetailPriority;
	    var key2 = b.taskDetailPriority;

	    if (key1 < key2) {
	        return -1;
	    } else if (key1 == key2) {
	        return 0;
	    } else {
	        return 1;
	    }
	};
	
	
	aNotiList.sort(sorterAscPriority); //Sorting Based on Notification Priority
	
	var jsonNotificationList = { //Outer most part for Notification Header
			
			"mTypes": aNotiList
			
	};
	
	return jsonNotificationList;
}

/*
 * This method is sorting the Tree based on Notification Priority
 */
function sortTreeNotiList(jsonNotiLst) {
	
}


function hideMOB21Detail() {
	$("#idMOB21Det").hide();
	$("#idMOB21Det3scr").hide();
	
}

function showMOB21Detail() {
	$("#idMOB21Det").show();
	$("#idMOB21Det3scr").show();
	
}

function hideMOB21Dtl3rdColumn() {
	$("#idMOB21Detscr").hide();
}

function showMOB21Dtl3rdColumn() {
	$("#idMOB21Detscr").show();
}


function showNotificationCnt()
{
//alert("now re");
window.localStorage.removeItem('000001');
//alert("now removed");
var notificationQueue = sap.ui.getCore().byId("myList");
if(typeof notificationQueue.oModels.undefined != 'undefined' && typeof notificationQueue.oModels.undefined.oData != 'undefined') 
{
var arrMD15Collection01 = notificationQueue.oModels.undefined.oData.MD15Collection01;


var mstPageMOB15 = sap.ui.getCore().byId("mstPage_MOB15");
mstPageMOB15.setTitle("Notifications (" + arrMD15Collection01.length + ")");
}

}


