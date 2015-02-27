sap.ui.controller("com.cg.gtm.view.Mob18OrderActionType", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob18OrderActionType
*/
//     onInit: function() {
//
//     },

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob18OrderActionType
*/
//     onBeforeRendering: function() {
//
//     },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob18OrderActionType
*/
    onAfterRendering: function() {
    	var jsonStore = null;
    	
    	var inputPlant = sap.ui.getCore().byId("inputPlant");
		if(typeof g_Mob18SelectedPlant != 'undefined') {
			inputPlant.setValue(g_Mob18SelectedPlant.title);
		} else {
			inputPlant.setValue(defaultPlantName); //defaultPlantCode & defaultPlantName
		}

		
	
		
		//	jsonStore = mob18storage();
			callStorageLocation_order();
			callMomentType();
			
	
		/*Setting Value for From & To Storage Location - Start */
		
		/*Setting Value for From & To Storage Location - End */
		/*Setting Value for From & To Storage Location - Start 
		
		var oJSONFromStorage = jsonStore;
		var fromStorage = sap.ui.getCore().byId("idStorage1");
		fromStorage.setModel(oJSONFromStorage);
		Setting Value for From & To Storage Location - End */
    },

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob18OrderActionType
*/
//     onExit: function() {
//
//     }
       check : function(){
    	   debugger;
              var valError = 0; 
              
              var strInputOrderno = sap.ui.getCore().byId("inputOrderno").getValue().trim();
              
              if(  null == strInputOrderno || strInputOrderno == "")
              {
                     sap.ui.getCore().byId("inputOrderno").setValueState(sap.ui.core.ValueState.Error);
                        valError = 1;
       
              }
       
              else
              {
              
               sap.ui.getCore().byId("inputOrderno").setValueState(sap.ui.core.ValueState.None);
              
             /*  if ( jQuery.device.is.phone == true)
                     showidMob18first();
                     {sap.ui.getCore().byId("myApp").to("idMOB18SplitScreen");
                     hideidMob18second();
                     }*/
                     
                     //change();
                     
                     var demo = sap.ui.getCore().getElementById("demoswitch").getState();
                     
                       if (demo)
                {      
                             
                             Mob18Orderdetails();
/*                           var table = sap.ui.getCore().byId("idtable_Order");
                           table.bindItems("/results",new sap.m.ColumnListItem("demomaterialListItem2", {
                                     cells : [ 
                                              new sap.ui.commons.Label("Material_order",{
                                       text : "{Material}",
                                       wrapping: true
                                   }),
                                   new sap.ui.commons.Label("Materialdesc_order",{
                                       text : "{MaterialDesc}",
                                       wrapping: true
                                   }),
                                   new sap.m.Text({
                                       text : "{Quantity}",
                                   })
                                  ]}));*/
                             if(g_runningOnPhone == true)
                 			{
                            	 var app = sap.ui.getCore().byId("myApp");
                            	 app.to("idMob18Orderpage");
                 			}
                             else{
                            	 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
                                 app.to("idMOB18SplitScreen");
                                 //showidMob18first();
                            // showidMob18second();
                             }
                                
                }
                       else{
                    	   //alert("inside order");
                    	  	sap.ui.getCore().byId("inputbatch_order").setValue("");
                        	sap.ui.getCore().byId("idLoc").setText("");
                        	sap.ui.getCore().byId("idMaterial").setText("");
                        	sap.ui.getCore().byId("inputSerial_order").setValue("");
                        	sap.ui.getCore().byId("inputQtyno").setValue("");
                        	sap.ui.getCore().byId("lblMatDocNo2").setVisible(false);
                        	sap.ui.getCore().byId("lblMatDocVal2").setVisible(false);
                        	sap.ui.getCore().byId("lblErr2").setVisible(false);
                        	sap.ui.getCore().byId("lblErrVal2").setVisible(false);
                    	   openSplashScreen();//splash screen 
                    	   //Adding Zeros as per the input field length
                     var txt = sap.ui.getCore().byId("inputOrderno");
                     var val = txt.getValue().trim();
                     var get = pad( val, 12, '0');
              
                     
                     
                     //alert(val);
                     var table = sap.ui.getCore().byId("idtable_Order");
                     var webmodel;
                     
                   //Service Start Time
                     var logInfo = getTimeStamp() +"MOB18:: Service: OrderDetail Start" ;

                     
                     var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/OrderDetail?OrderNo='" +get+ "'&$format=json");
                     if(serviceURL == "Fail")
            		 {
            		 return false;
            		 }

                     
                	 var oModel = new sap.ui.model.json.JSONModel();
                     
                     var aData = jQuery.ajax({   
            		     url : serviceURL,
            		     
            		     type: "GET",

            	         //jsonpCallback : 'getJSON',

            	         contentType : "application/json",

            	         dataType : 'json',
            	         
            	         //data : "",

            	         success : function(data, textStatus, jqXHR) {
            	        	var jsonObj = data.d.results; // Namespace
            	        	if(jsonObj.length>0){
                    	    for(var i=0;i<jsonObj.length;i++){
        								jsonObj[i].inputQty=jsonObj[i].Quantity;
        								jsonObj[i].inputBatch="";
        								jsonObj[i].selected=false
                    	        	}
            	        	var invDataFinalArray =  {"results" : jsonObj};
            	        	
            	        	 
                            webmodel = new sap.ui.model.json.JSONModel(invDataFinalArray);
                            table.setModel(webmodel);
                            
                            
                            if(g_runningOnPhone == true)
                     		{
                             	g_MobileNavigationId = "Mob18_OrderItems";
                         		  var app = sap.ui.getCore().byId("myApp");
                              	 app.to("idMob18Orderpage");
                       			}
                             else{
                            	 g_navbutton = "backOrderdetails";
                            //	 sap.ui.getCore().byId("idshow_order").setVisible(false);
                                 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
                                 app.to("idMOB18SplitScreen"); 
                                // showidMob18first();
                               //  hideidMob18second();
                                 $("#idMob18Orderdetpage").hide()
                             }
                            if ( g_runningInTablet == true || g_runningOnPhone == true)
          				  {
          					 sap.ui.getCore().byId("idscanserial_order").setVisible(false)
          					 
          				  }
                            else{
                            	sap.ui.getCore().byId("idscanserial_order").setVisible(false)
                            }
            	        	}
            	        	else{
            	        		sap.m.MessageBox.show(
         								"There are no Items to show for this Order Number",
         						sap.m.MessageBox.Icon.ERROR,"Error");
            	        		
            	        	}
                            closeSplashScreen();
                            
                            

                            if( g_isDebug == true)
                            {
                            //Service End Time
                            var logInfo1 = getTimeStamp() +"MOB18:: Service: OrderDetail Finish" ;
                            //Log file Service Start and End Time
                            var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
                            logFileUpdate(g_ServiceStartEndTime);
                            }
                            
                            
            	         },
            	         error: function(XMLHttpRequest, textStatus, errorThrown) { 
            	        	
            	        	 try{
             					var data = JSON.parse(XMLHttpRequest.responseText);
             					for(var event in data){
             					var dataCopy = data[event];	
             						try{
             						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
             						sap.m.MessageBox.show(
             						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
             						catch(e)
             						{
             						sap.m.MessageBox.show(data.error.message.value+ " " +" "+" ",
             						sap.m.MessageBox.Icon.ERROR,"Error");break;
             						}}}catch(e)
             						{sap.m.MessageBox.show(
             								"Service Not Available - Please contact system administrator" + " " +" "+" ",
             						sap.m.MessageBox.Icon.ERROR,"Error");}
             						
             						 var app = sap.ui.getCore().byId("idMOB18SplitApp");  
            	      	        	 app.toMaster("idMOB18Matmas");
            	      	        	 app.toDetail("idMOB18Blank");
            	      	        	 
            	      	        	 
            						closeSplashScreen();
            	        	
            	         } });
            	        	
                    /* var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/");
                     //var serviceURL = "http://in-mum-eccs:8000/sap/opu/odata/sap/ZUI_DEMO_QUERY2";
                     //http://in-mum-eccs:8000/sap/opu/odata/sap/ZUI_DEMO_QUERY2/
                  var loginoDataModel = new sap.ui.model.odata.ODataModel(serviceURL,true, myID, myPass, null, true, true, false);
                  
                  //execute a read operation with the set of selected data
              var readRequestURL = "/OrderDetail?OrderNo='" +get+ "'&$format=json";

                  
                     //alert("Before Service Call");
                     loginoDataModel.read(readRequestURL, null, null, false,   
                            function(oData, oResponse) { 
                                       //alert("Success");
                                                var result = oData.results;
                                                var invDataInialArray = [];
                                         //     alert(result.length);
                                                if(result.length > 0){
                                                       
                                                       for ( var i = 0 ; i <result.length ; i++ )
                                                              {
                                                              
                                                       var array = {
                                                "Batch": result[i].Batch,
                                                "Batchmanaged":result[i].Batchmanaged ,
                                                "ItemCategory": result[i].ItemCategory,
                                                "Material": result[i].Material,
                                                "MaterialDesc":result[i].MaterialDesc ,
                                                "Ordernumber":result[i].Ordernumber ,
                                                "Plant": result[i].Plant,
                                                "Quantity": result[i].Quantity,
                                                "ReservationItem":result[i].ReservationItem ,
                                                "ReservationNo": result[i].ReservationNo,
                                                "Serialized": result[i].Serialized,
                                                "SpecStock": result[i].SpecStock,
                                                "Splitvaluated": result[i].Splitvaluated,
                                                "StoreLoc": result[i].StoreLoc,
                                                "Uom": result[i].Uom,
                                                "Valuation": result[i].Valuation
                                         
                                         
                                         }
                                                       
                                                       invDataInialArray.push(array);
                                               }
                                                       invDataFinalArray =  {"results" : invDataInialArray};
                                                       
                                                       webmodel = new sap.ui.model.json.JSONModel(invDataFinalArray);
                                                       table.setModel(webmodel);
                                                }
                     
                     
                     
                     
                     
                     },  function(oError){  
                     //  alert(oError.message);
                       sap.m.MessageBox.show(
                         "Material No doesnt exist" + " " +" "+" ",
                                                sap.m.MessageBox.Icon.ERROR,"Error");
                    });
                     //alert("After Service Call");
                     */ 
                   

                            //app.toDetail("idMOB18Item");
                        //    showidMob18first();
                       //  
                     
              }
                     
                           
               }
              
               if (  valError ==  1 )
              {
                     sap.m.MessageBox.show("Please provide data in mandatory field",
                                  sap.m.MessageBox.Icon.ERROR,
                                         "Error"
                                  );
                
                }
       

       },
       
       
});


function pad(n, width, z) {
         z = z || '0';
         n = n + '';
         return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
       }
function callStorageLocation_order() {
	//openSplashScreen();//splash screen
	var plantCode = "";
	if(typeof g_Mob18SelectedPlant != 'undefined') {
		plantCode = g_Mob18SelectedPlant.description;
	} else {
		plantCode = defaultPlantCode; //defaultPlantCode & defaultPlantName
	}
	
	if(typeof plantCode != 'undefined' && plantCode.trim().length==0) {
		plantCode = g_inputPlantCode;
	} else if(plantCode == "") {
		plantCode = g_inputPlantCode;
	}
	
	//Default Plant:
  	var defaultPlant = "";
  	defaultPlant = window.localStorage.getItem("defPlantCode");
  	
	var jsonStore = null;
	var demo = sap.ui.getCore().byId("demoswitch"); 
	if (demo.getState() == true) {
		jsonStore = mob18storage();
	}
	else{
		//var plant = sap.ui.getCore().byId("inputPlant");
		// plantcode = plant.getValue();
		// alert(plantcode);
		
		//Service Start Time
	var logInfo = getTimeStamp() +"MOB18:: Service: StorageLocList Start" ;
    var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/StorageLocList?PlantId='" + plantCode + "'");
	if(url1 == "Fail")
	 {
	 return false;
	 }
	
	 var oModel = new sap.ui.model.json.JSONModel();
	 var aData = jQuery.ajax({   
	     url : url1,
	     
	     type: "GET",

         //jsonpCallback : 'getJSON',

         contentType : "application/json",

         dataType : 'json',
         
         //data : "",

         success : function(data, textStatus, jqXHR) {
        	var jsonObj = data.d.results; // Namespace
        	
        	var jsonFromStore = {"results":jsonObj};
        	
        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
    		var fromStorage = sap.ui.getCore().byId("idStorage1");
    		fromStorage.setModel(oJSONFromStorage);
    		
    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
    		
    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
    		var toStorage = sap.ui.getCore().byId("idToStorage");
    		toStorage.setModel(oJSONToStorage);*/
    		//closeSplashScreen();
    		
    		
    		
    		
    		
    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB18:: Service: StorageLocList Finish" ;
    		//Log file Service Start and End Time
    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    		logFileUpdate(g_ServiceStartEndTime);
    		}
    		
    		
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	 var a = textStatus;
        	// closeSplashScreen();
         }
	 
	 });
	}
	var oJSONFromStorage = jsonStore;
	var fromStorage = sap.ui.getCore().byId("idStorage1");
	fromStorage.setModel(oJSONFromStorage);

}

function callMomentType(){
	var jsonStore = null;
	var demo = sap.ui.getCore().byId("demoswitch"); 
	if (demo.getState() == true) {
		jsonStore = mob18movt();
	}
	else{
		//var plant = sap.ui.getCore().byId("inputPlant");
		// plantcode = plant.getValue();
		// alert(plantcode);
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB18:: Service: MovementTypeList Start" ;
		

		
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/MovementTypeList?Flag='I'");
	if(url1 == "Fail")
	 {
	 return false;
	 }
	
	 var oModel = new sap.ui.model.json.JSONModel();
	 
	 var aData = jQuery.ajax({   
	     url : url1,
	     
	     type: "GET",

         //jsonpCallback : 'getJSON',

         contentType : "application/json",

         dataType : 'json',
         
         //data : "",

         success : function(data, textStatus, jqXHR) {
        	 
         	var jsonObj = data.d.results; // Namespace
         	
         	var arrayEm = [];
 			var SelectEmpty = {
             		"MovementtypeId" : "000ADummyDataData",
             		"MovementtypeDesc":"-Select Movement Type-"
             };
 			arrayEm.push(SelectEmpty);
 			for( var i = 0 ; i< jsonObj.length ; i++)
 			{
 				 SelectEmpty = {
             		"MovementtypeId" : jsonObj[i].MovementtypeId,
             		"MovementtypeDesc":jsonObj[i].MovementtypeDesc
             };
 				arrayEm.push(SelectEmpty);
 			}
 			
        	//var jsonObj = data.d.results; // Namespace
        	
        	var jsonFromStore = {"results":arrayEm};
        	
        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
    		var fromStorage = sap.ui.getCore().byId("MvtType");
    		fromStorage.setModel(oJSONFromStorage);
    		
    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
    		
    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
    		var toStorage = sap.ui.getCore().byId("idToStorage");
    		toStorage.setModel(oJSONToStorage);*/
    		//closeSplashScreen();
    		
    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB18:: Service: MovementTypeList Finish" ;
    		//Log file Service Start and End Time
    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    		logFileUpdate(g_ServiceStartEndTime);
    		}
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	 var a = textStatus;
        	// closeSplashScreen();
         }
	 
	 });
	}
	var oJSONFromStorage = jsonStore;
	var fromStorage = sap.ui.getCore().byId("MvtType");
	fromStorage.setModel(oJSONFromStorage);

}

function callReasoncode(key){
	var jsonStore = null;
	var demo = sap.ui.getCore().byId("demoswitch"); 
	if (demo.getState() == true) {
		jsonStore = mob18Res();
	}
	else{
		//var plant = sap.ui.getCore().byId("inputPlant");
		// plantcode = plant.getValue();
		// alert(plantcode);
		
		
		//Service Start Time
		var logInfo = getTimeStamp() +"MOB18:: Service: ReasonCodeList Start" ;

	var url1 = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/ReasonCodeList?MovementType='"+key+"'");
	
	if(url1 == "Fail")
	 {
	 return false;
	 }
	
	
	 var oModel = new sap.ui.model.json.JSONModel();
	 
	 var aData = jQuery.ajax({   
	     url : url1,
	     
	     type: "GET",

         //jsonpCallback : 'getJSON',

         contentType : "application/json",

         dataType : 'json',
         
         //data : "",

         success : function(data, textStatus, jqXHR) {
        	var jsonObj = data.d.results; // Namespace
        	
        	var jsonFromStore = {"results":jsonObj};
        	
        	var oJSONFromStorage = new sap.ui.model.json.JSONModel(jsonFromStore);
    		var fromStorage = sap.ui.getCore().byId("ResType");
    		fromStorage.setModel(oJSONFromStorage);
    		
    		/*var jsonToStore = {"MOB17ToStorage":jsonObj};
    		
    		var oJSONToStorage = new sap.ui.model.json.JSONModel(jsonToStore);
    		var toStorage = sap.ui.getCore().byId("idToStorage");
    		toStorage.setModel(oJSONToStorage);*/
    		//closeSplashScreen();
    		
    		
    		
    		
    		
    		if( g_isDebug == true)
    		{
    		//Service End Time
    		var logInfo1 = getTimeStamp() +"MOB18:: Service: ReasonCodeList Finish" ;
    		//Log file Service Start and End Time
    		var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    		logFileUpdate(g_ServiceStartEndTime);
    		}
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
        	 var a = textStatus;
        	// closeSplashScreen();
         }
	 
	 });
	}
	var oJSONFromStorage = jsonStore;
	var fromStorage = sap.ui.getCore().byId("ResType");
	fromStorage.setModel(oJSONFromStorage);

}


