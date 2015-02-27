sap.ui.controller("com.cg.gtm.view.Mob23Matmaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Mob23Matmaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Mob23Matmaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Mob23Matmaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Mob23Matmaster
*/
//	onExit: function() {
//
//	}
	
	handleHelpButtonPress : function()
	{
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet");
	var MobileScreenNumber = "MOB23";
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
	show : function(){
		
        var valError = 0; 
        
        var strInputOrderno = sap.ui.getCore().byId("inputItem").getValue().trim();
        
        if(  null == strInputOrderno || strInputOrderno == "")
        {
               sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.Error);
                  valError = 1;
 
        }
 
        else
        {
        
         sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
        
        
               
               //change();
               
               var demo = sap.ui.getCore().getElementById("demoswitch").getState();
               
                 if (demo)
          {      
                	 //IM and WM Json data binding
                	 var jsonNavIM = null;
                	 jsonNavIM = mob23Detail(jsonNavIM);  //Mock model called
               
                	 var oList = sap.ui.getCore().byId("idList_Mob23_Stock");
                	 oList.setModel(jsonNavIM);
                	 
                	 //Bin detail data binding
                	 var jsonbin = null;
                	 jsonbin = mob23Bindet(jsonbin);  //Mock model called
                	 
                	 var oList = sap.ui.getCore().byId("IdMob23WMdetailList");
                	 oList.setModel(jsonbin);
                	 
                	
                	 
                	//Materil no 
           			var matno = sap.ui.getCore().byId("idMaterialno");
           			//matno.setModel(jsonNavIM);
           			matno.setText("20000");
           			
           			//Material desc
           			var matdesc = sap.ui.getCore().byId("idMatdesc");
           			//matdesc.setModel(jsonNavIM);
           			matdesc.setText("Primary ");
           			
           			//Warehouse
           			var WM = sap.ui.getCore().byId("idWMno");
           			//WM.setModel(jsonbin);
           			WM.setText("Np1");
           		 ///////////////////////Phone version///////////////////////////////
           		 if ( g_runningOnPhone == true)
           			{
           			 g_MobileNavigationId = "Mob23-SecondMaster";
           			 sap.ui.getCore().byId("myApp").to("idMOB23Matmasdetail");
           			}
           		 else{
           			 var app = sap.ui.getCore().byId("idMOB23SplitApp");  
          	        app.toMaster("idMOB23Matmasdetail");
          	        app.to("idMOB23Detailsplit");
          	      
          	       // Mob23WMhide();  
          	        
          	      sap.ui.getCore().byId("idsearch_WM").setVisible(false);
       			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false); 
           			}
                	   
         	    	
                     
          }
                 else{
              	   
              	   openSplashScreen();//splash screen 
              	   //Adding Zeros as per the input field length
               var val = sap.ui.getCore().byId("inputItem").getValue().trim();
             //Default Plant:

               var defaultPlant = "";

               defaultPlant = window.localStorage.getItem("defPlantCode");

               // var val = txt.getValue().trim();

               // var get = pad( val, 12, '0');



               if(typeof g_SelectedPlant != 'undefined') {
           		plantInput = g_SelectedPlant.description;
               	} else {
               		plantInput = defaultPlant; //defaultPlantCode & defaultPlantName
               	}
                          
                        
                          
             

              // var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/ContextStockSet?$filter=Material eq '"+val+"'and Plant eq '"+defaultPlant+"'&$expand=NavIM,NavWM,NavSerial");

            //   var val = txt.getValue().trim();
             //  var get = pad( val, 12, '0');
        
               
               
               //alert(val);
               var table = sap.ui.getCore().byId("Mob23_Stock");
               var webmodel;
               
             //Service Start Time
               var logInfo = getTimeStamp() +"MOB23:: Service: ContextStockSet Start" ;

               var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_IM_WM_MOBILEAPPS_SRV/ContextStockSet?$filter=Material eq '"+val+"'and Plant eq '"+plantInput+"'&$expand=NavIM,NavWM,NavSerial");
               
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
      	      
      	     var jsonObj= data.d.results[0].NavIM.results;
      	   Global_MOB23Collection= data.d;
      	        //	var jsonObj= data.d;
      	       	var model=new sap.ui.model.json.JSONModel(jsonObj);
      			sap.ui.getCore().byId("idList_Mob23_Stock").setModel(model);
      			
      			if(Global_MOB23Collection.results[0].NavIM.results.length>0){
      		  //Materil no 
      			var matno = sap.ui.getCore().byId("idMaterialno");
      			matno.setText(Global_MOB23Collection.results[0].NavIM.results[0].Material);
      			
      			//Material desc
      			var matdesc = sap.ui.getCore().byId("idMatdesc");
      			matdesc.setText(Global_MOB23Collection.results[0].NavIM.results[0].Materidesc);
      			
      			//Warehouse
      			var WM = sap.ui.getCore().byId("idWMno");
      			WM.setText(Global_MOB23Collection.results[0].NavWM.results[0].Whouse);
      			
      			
      			if ( g_runningOnPhone == true)
    			{
      				 g_MobileNavigationId = "Mob23-SecondMaster";
    			sap.ui.getCore().byId("myApp").to("idMOB23Matmasdetail");
    			}
    		
    		else
    			{
    			
    		
    			 var app = sap.ui.getCore().byId("idMOB23SplitApp");  
    	   	        app.toMaster("idMOB23Matmasdetail");
    	   	        app.toDetail("idMOB23Detailsplit");
    	   	   //  sap.ui.getCore().byId("idMOB23WMDetail").css('display','list-item');
    	   	      
    	   	       // Mob23WMhide();
    	   	        
    	   	     sap.ui.getCore().byId("idsearch_WM").setVisible(false);
       			 sap.ui.getCore().byId("IdMob23WMdetailList").setVisible(false); 
       			 
       			 
    			}
      			}
      			
      			else{
      				
      				sap.m.MessageBox.show(
							"No IM/WM details are maintained for this Material",
					sap.m.MessageBox.Icon.WARNING,"Warning")
      				
      			}
      		
      			
      			closeSplashScreen();
      	        	
      			
      			
      			
      			if( g_isDebug == true)
      			{
      			//Service End Time
      			var logInfo1 = getTimeStamp() +"MOB23:: Service: ContextStockSet Finish" ;
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
    						sap.m.MessageBox.Icon.ERROR,"Error");
    						
    						
    						if( g_isDebug == true)
    		      			{
    		      			//Service End Time
    		      			var logInfo1 = getTimeStamp() +"MOB23:: Service: ContextStockSet Failed no network" ;
    		      			//Log file Service Start and End Time
    		      			var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
    		      			logFileUpdate(g_ServiceStartEndTime);
    		      			}
    						
    						
    						}
    						
    						if ( g_runningOnPhone == true)
    		    			{
    		    			
    		    			sap.ui.getCore().byId("myApp").to("idMOB23Matmaster");
    		    			}
    						else{
    							var app = sap.ui.getCore().byId("idMOB23SplitApp");  
       	      	        	 app.toMaster("idMOB23Matmaster");
       	      	        	 app.toDetail("idMOB23Blank");
    						}
    						 
    	      	        	 
    	      	        	 
    						closeSplashScreen();
    						
    						
      	         }
      	        	 /*var a = textStatus;
      	        	 if(a!= null){
      	        	sap.m.MessageBox.show (a + " : Please Provide valid Material Number",
                            sap.m.MessageBox.Icon.ERROR,
                                   "Error"
                            );
      	        	 var app = sap.ui.getCore().byId("idMOB23SplitApp");  
      	        	 app.toMaster("idMOB23Matmaster");
      	        	 app.toDetail("idMOB23Blank");
      	        	 closeSplashScreen();
      	         }}*/
      	         
               
               
               });
      	        	
            
              
   	        
   	     ///////////////////////Naviation Area///////////////////////////////////////////////////////
    		
       
               
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
	Mob23openMatSearch : function(){
		
	//	globalMaterial = "MOB23";
		  backNavMat = "MOB23";
			
			var app = sap.ui.getCore().byId("myApp");  
	        app.to("idMob24MaterialSearch"); 
	        
	        var app = sap.ui.getCore().byId("splitAppMaterial");  
		    app.toMaster("idMob24MaterialSearchInput");
		    app.toDetail("idMATSRBlank");
		    
		    var inputPlantMat = sap.ui.getCore().byId("inputPlantMat"); 
		    inputPlantMat.setEnabled(true);
		  //  inputPlantMat.setValue("");
  	 
	        
	   
	},
	checkMaterial : function(){
		  field_numeric_validation(sap.ui.getCore().byId("inputItem"));//go to string utility 
	if (null ==  sap.ui.getCore().byId("inputItem").getValue() || sap.ui.getCore().byId("inputItem").getValue() == "")
 	  {
 	  sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.Error);
 	
 	  }
   
   else
 	  {
 	  sap.ui.getCore().byId("inputItem").setValueState(sap.ui.core.ValueState.None);
 	  
 	  }
		
	},
	checkmaterial : function(){
		validateMATNUMAccess = "MOB23-StockOverview";
		sap.ui.getCore().byId("idMob24MaterialSearch").getController().
		validateMatNum(sap.ui.getCore().byId("inputItem").getValue());
	}
});




