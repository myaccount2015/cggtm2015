sap.ui.controller("com.cg.gtm.view.Drop1_MOB21.MOB21DetailsMaster", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.MOB21DetailsMaster
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.MOB21DetailsMaster
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.MOB21DetailsMaster
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.MOB21DetailsMaster
*/
//	onExit: function() {
//
//	}
onListItemSelection: function(oEvent){
	

	sap.ui.getCore().byId("Mob21_IconTabBar").setSelectedKey("firstTab");
	this.setSelected(true);
	
	if(sap.ui.getCore().byId("mob21mastree1").getSelectedItem().getIcon()=="img/images_2.jpg"){
		sap.ui.getCore().byId("insResDDMOB21").setEnabled(false);
		sap.ui.getCore().byId("insNotesTextFieldMob21").setEnabled(false);
		sap.ui.getCore().byId("ip_samplesize").setEnabled(false);
		sap.ui.getCore().byId("Mob21-footer-6").getContentRight()[0].setEnabled(false);
		
	}
	else{
		sap.ui.getCore().byId("insResDDMOB21").setEnabled(true);
		sap.ui.getCore().byId("insNotesTextFieldMob21").setEnabled(true);
		sap.ui.getCore().byId("ip_samplesize").setEnabled(true);
		sap.ui.getCore().byId("Mob21-footer-6").getContentRight()[0].setEnabled(true);
	}
	
	var contextPath= this.getBindingContext().sPath;
	contextPath= contextPath.substring(1,contextPath.length);
	var number = oEvent.oSource.mProperties.number; 
	var data= sap.ui.getCore().byId("mob21mastree1").getModel().oData[contextPath];
	sap.ui.getCore().byId("MOB21InsMetText").setText(data.InspectionMethodText);
	sap.ui.getCore().byId("Mob21-ListDetail-Number-List").setText(number);
	globalInsOp =data.Inspection_Operation_No;
	globalInsChar=data.Inspection_Char_No;

	sap.ui.getCore().byId("text_er1").setText(data.Specification_Display);
	sap.ui.getCore().byId("text_er1").setVisible(true);
	       
	       if(g_runningOnPhone == true)
	              {
	              g_MobileNavigationId = "Mob21-FifthScreen-Mobile-BackNavButton"; 
	              }
	       
	       /////////////////////////////////////////////////////////////////////////////////           
	                        
	                              
	                              if (null == data.Code || data.Code == "")
	                                     {
	                                     sap.ui.getCore().byId("ip_samplesize").setVisible(true);
	                                     sap.ui.getCore().byId("ip_samplesize").setValueState("None");
	                                     sap.ui.getCore().byId("insResDDMOB21").setVisible(false);
	                                     var getValues =  window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                       globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText());
	                                     
	                                     sap.ui.getCore().byId("ip_samplesize").setValue(getValues);
	                                     var myInteger = (/^-?\d*(\.\d+)?$/);
                                      /*   
                                         if( !getValues.match(myInteger) )
                                      {
                                                sap.ui.getCore().byId("ip_samplesize").
                                                   setValue("");     
                                      }
                                         else
                                                {
                                                sap.ui.getCore().byId("ip_samplesize").
                                                   setValue(getValues);
                                                }*/

	                                     sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
	                                     window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                       globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText())
	                                     );
	                                     
	                                     }
	                              
	                              else
	                                     {
	                                         var codeArray  = data.Code.split("/")
	                                         var dropDownDataArr = [] ;
	                                         var dropDownDataBlank = {                                                
	                                                       "text": " " ,
	                                                       "key" : " "                                       
	                                                                            }; 
	                                         dropDownDataArr.push(dropDownDataBlank);
	                                         for ( i = 0 ; i < codeArray.length ; i++)
	                                                {
	                                                       var dropDownData = {                                                     
	                                                       "text": codeArray[i] ,
	                                                       "key" : codeArray[i]                                     
	                                                                            }; 
	                                                                
	                                                                dropDownDataArr.push(dropDownData);                                                    
	                                                       }             
	                                         
	                                         var dropDownDataFinal = [];
	                                         dropDownDataFinal = {"items" : dropDownDataArr};
	                                         var oModelJsonList = new sap.ui.model.json.JSONModel();  
	                                          oModelJsonList.setSizeLimit(1000000);
	                                         oModelJsonList.setData(dropDownDataFinal); 
	                                          sap.ui.getCore().byId("insResDDMOB21").setVisible(true);
	                                           sap.ui.getCore().byId("ip_samplesize").setVisible(false);
	                                         sap.ui.getCore().byId("insResDDMOB21").setModel(oModelJsonList);        
	                                          sap.ui.getCore().byId("insResDDMOB21").setSelectedKey(window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                              globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText()));
	                                         
	                                          sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
	                                                          window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                                            globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText()) 
	                                                                           
	                                                          ); 
	                                          
	                                  
	                                     }
	                              
	                                  var oSplitApp =sap.ui.getCore().byId("splitAppMOB21Det");
	                                 var detailpage2 =sap.ui.getCore().byId("idMOB21DetChar");
	                                 //oSplitApp.addDetailPage(detailpage2);
	                                   
	                                    
	                                   if(g_runningOnPhone == true)
	                                        {
	                                        var app =sap.ui.getCore().byId("myApp");
	                                        app.to("idMOB21DetChar");
	                                        }
	                                  
	                                   else
	                                        {
	                                         
	                                         oSplitApp.toDetail(detailpage2);
	                                        }
	                              //////////////////////////////////////////////////
	                        /****************************************/
	                        var insKey = [];
	                        var items = window.localStorage.getItem('INSRES');
	                      if (items === undefined || items === null || items.length === 0)
	                      {
	                            insKey[0] = sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                globalInsOp.concat(globalInsChar)); 
	                            var insKeyString =   JSON.stringify(insKey);
	                            window.localStorage.setItem("INSRES", insKeyString);//store the notification number 
	                            
	                            }
	                      else
	                             {
	                             
	                            var insresults = [];
	                            insresults = JSON.parse(items);
	                            var insresultsLen = insresults.length;
	                            var duplicate = false ;
	                            for ( index = 0; index < insresultsLen ; index ++)
	                                  {
	                                  
	                                  if (insresults[index] == sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                globalInsOp.concat(globalInsChar)))
	                                         {
	                                         duplicate = true ;
	                                         break ;
	                                         }
	                                  }
	                            
	                            if (duplicate ==  false)
	                                  {
	                                  insresults.push(sap.ui.getCore().byId("Mob21lot").getText().concat(
	                                                globalInsOp.concat(globalInsChar)));
	                                  var insresultsString =     JSON.stringify(insresults);
	                                    window.localStorage.setItem("INSRES", insresultsString);
	                                 }
	                     
	                        
	                  }
	                            

},
	
	
	onTreeSelectionMOB21: function(event)
	
	{
		
		if(g_runningOnPhone == true)
			{
			g_MobileNavigationId = "Mob21-FifthScreen-Mobile-BackNavButton"; 
			}
		 
		   var nodeId = event.mParameters.id; // Getting node Id in the Tree
		   var modelNode = sap.ui.getCore().byId(nodeId); // Getting actual Node Control
		   var ip_samplesize = sap.ui.getCore().byId("ip_samplesize"); 
		   ip_samplesize.setValue("");
		 /*  var oTree = sap.ui.getCore().byId("mob21mastree"); // Getting Tree Control
		   var model = oTree.getModel(); */// Getting Model associated to Tree
		   
		   var contextPath = modelNode.oBindingContexts.undefined.sPath; // Getting context path for Node
		   
		   var strNode = contextPath.substring(0, contextPath.length - 2); // Getting parent level of Context Path
		   sap.ui.getCore().byId("insNotesTextFieldMob21").setValue("");
		 // alert(contextPath);
		   globalValMOB21 =  1;
		  if(strNode != null && strNode != undefined && strNode.length > 0) {
			  // if(strNode.endsWith("mDetails")) { // Check selection is for Task Level
			    if(strNode.endsWith("valChar")) {
			    	//var app = sap.ui.getCore().byId("splitAppMOB21Det");
				      // app.toDetail("idMOB21DetChar"); 
			    	 
			    	
				   objValue = model.getProperty(contextPath);
				  
				   globalInsOp = objValue.insOp;
			       globalInsChar = objValue.insChar;
			       sap.ui.getCore().byId("MOB21InsMetText").setText(objValue.InspectionMethodText);
				  
		/////////////////////////////////////////////////////////////////////////////////		   
				   
				    var text_er1 = sap.ui.getCore().byId("text_er1");
					   text_er1.setText(objValue.specDisp);
					   sap.ui.getCore().byId("text_er1").setVisible(true);
					   //alert(objValue.code);
					   
					   if (null == objValue.code || objValue.code == "")
						   {
						   sap.ui.getCore().byId("ip_samplesize").setVisible(true);
						   sap.ui.getCore().byId("insResDDMOB21").setVisible(false);
						   
						   var getValues = window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
									globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText());
						   
						   var myInteger = (/^-?\d*(\.\d+)?$/);
													
							if( !getValues.match(myInteger) )
						    {
								sap.ui.getCore().byId("ip_samplesize").
								   setValue("");	
						    }
							else
								{
								sap.ui.getCore().byId("ip_samplesize").
								   setValue(getValues);
								}
							
						   
						   
						  
						   
						   
						   sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
						   window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
									globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText())
						   );
						   
						   
						   
						   }
					   
					   else
						   {
							var codeArray  = objValue.code.split("/");
							
							var i;
							
							var dropDownDataArr = [] ;
							var dropDownDataBlank = {  							    
									"text": " " ,
									"key" : " "						  
												 }; 
							dropDownDataArr.push(dropDownDataBlank);
							for ( i = 0 ; i < codeArray.length ; i++)
								{
								
								
									var dropDownData = {  							    
									"text": codeArray[i] ,
									"key" : codeArray[i]						  
												 }; 
										  
										  dropDownDataArr.push(dropDownData);								
									}		
							
							var dropDownDataFinal = [];
							dropDownDataFinal = {"items" : dropDownDataArr};
							 var oModelJsonList = new sap.ui.model.json.JSONModel();  
							 oModelJsonList.setSizeLimit(1000000);
							 oModelJsonList.setData(dropDownDataFinal); 
							 sap.ui.getCore().byId("insResDDMOB21").setVisible(true);
							  sap.ui.getCore().byId("ip_samplesize").setVisible(false);
							 sap.ui.getCore().byId("insResDDMOB21").setModel(oModelJsonList); 	
							 sap.ui.getCore().byId("insResDDMOB21").setSelectedKey(window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
										globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText()));
							 
							 sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
									   window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
												globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText())
									   ); 
							 
						
						   }
					   
						var oSplitApp =sap.ui.getCore().byId("splitAppMOB21Det");
					 	var detailpage2 =sap.ui.getCore().byId("idMOB21DetChar");
					 	//oSplitApp.addDetailPage(detailpage2);
					 	  
					 	  
					 	 if(g_runningOnPhone == true)
					 		{
					 		var app =sap.ui.getCore().byId("myApp");
					 		app.to("idMOB21DetChar");
					 		}
					 	 
					 	 else
					 		{
					 		 
					 		oSplitApp.toDetail(detailpage2);
					 		}
					   //////////////////////////////////////////////////
				   /****************************************/
				   var insKey = [];
				   var items = window.localStorage.getItem('INSRES');
		          	 if (items === undefined || items === null || items.length === 0)
		          	 {
		          		
		          		insKey[0] = sap.ui.getCore().byId("Mob21lot").getText().concat(
								globalInsOp.concat(globalInsChar)); 
		           		var insKeyString = 	JSON.stringify(insKey);
		           		window.localStorage.setItem("INSRES", insKeyString);//store the notification number 
		           		
		          		 
		          		}
		          	 else
		          		 {
		          		 
		          		var insresults = [];
		          		insresults = JSON.parse(items);
		          		var insresultsLen = insresults.length;
		          		var duplicate = false ;
		          		for ( index = 0; index < insresultsLen ; index ++)
		          			{
		          			
		          			if (insresults[index] == sap.ui.getCore().byId("Mob21lot").getText().concat(
		    						globalInsOp.concat(globalInsChar)))
		          				{
		          				duplicate = true ;
		          				break ;
		          				}
		          			}
		          		
		          		if (duplicate ==  false)
		          			{
		          			insresults.push(sap.ui.getCore().byId("Mob21lot").getText().concat(
		    						globalInsOp.concat(globalInsChar)));
		          			var insresultsString = 	JSON.stringify(insresults);
			          		 window.localStorage.setItem("INSRES", insresultsString);
		          			}
		          		
		          		 
		          		   	
		      
				   var text_er1 = sap.ui.getCore().byId("text_er1");
				   text_er1.setText(objValue.specDisp);
				   sap.ui.getCore().byId("text_er1").setVisible(true);
				   //alert(objValue.code);
				   
				   if (null == objValue.code || objValue.code == "")
					   {
					   sap.ui.getCore().byId("ip_samplesize").setVisible(true);
					   sap.ui.getCore().byId("insResDDMOB21").setVisible(false);
					   sap.ui.getCore().byId("ip_samplesize").
					   setValue(window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
								globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText()));
					   
					   
					   sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
							   window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
										globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText())
							   );
					   
					   
					   }
				   
				   else
					   {
						var codeArray  = objValue.code.split("/");
						
						var i;
						
						var dropDownDataArr = [] ;
						var dropDownDataBlank = {  							    
								"text": " " ,
								"key" : " "						  
											 }; 
						dropDownDataArr.push(dropDownDataBlank);
						for ( i = 0 ; i < codeArray.length ; i++)
							{
							
							
								var dropDownData = {  							    
								"text": codeArray[i] ,
								"key" : codeArray[i]						  
											 }; 
									  
									  dropDownDataArr.push(dropDownData);								
								}		
						
						var dropDownDataFinal = [];
						dropDownDataFinal = {"items" : dropDownDataArr};
						 var oModelJsonList = new sap.ui.model.json.JSONModel();  
						 oModelJsonList.setData(dropDownDataFinal); 
						 sap.ui.getCore().byId("insResDDMOB21").setVisible(true);
						  sap.ui.getCore().byId("ip_samplesize").setVisible(false);
						 sap.ui.getCore().byId("insResDDMOB21").setModel(oModelJsonList); 	
						 sap.ui.getCore().byId("insResDDMOB21").setSelectedKey(window.localStorage.getItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
									globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText()));
						 
						 
						 sap.ui.getCore().byId("insNotesTextFieldMob21").setValue(
								   window.localStorage.getItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
											globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText())
								   );
						 
						 
							var oSplitApp =sap.ui.getCore().byId("splitAppMOB21Det");
						 	var detailpage2 =sap.ui.getCore().byId("idMOB21DetChar");
						 	//oSplitApp.addDetailPage(detailpage2);
						 	
						 	if(g_runningOnPhone == true)
						 		{
						 		var app =sap.ui.getCore().byId("myApp");
						 		app.to("idMOB21DetChar");
						 		}
						 	else
						 		{
						 		 oSplitApp.toDetail(detailpage2);
						 		}
						 	 
					
					   }
				   
				  
				 //  text_er1.setText(window.localStorage.getItem(globalInsOp.concat(globalInsChar)));
				   
			    }
		          	  	
		  }
		   
			    else 
			    	{
			     
				 	 //Tree expand & show description on single click 
					   var countValues = new sap.ui.getCore().byId("countValueSetter-CharMob21").getText();
					   if( (countValues % 2) != 0 )
						   {
						   sap.ui.getCore().byId(nodeId).setExpanded(true);
						   sap.ui.getCore().byId("countValueSetter-CharMob21").setText("2");
						   }
					   else{
						   sap.ui.getCore().byId(nodeId).setExpanded(false);  
						   sap.ui.getCore().byId("countValueSetter-CharMob21").setText("1");
					   }
					   
					   
			    	
			    	}
			
		  }
		   
		  
				   
	 
	 	
	/////////////////////////////////////////////////////////////////////////////////////////// 	
	 
	 	/*var oSplitApp =sap.ui.getCore().byId("splitAppMOB21Det");
	 	var detailpage2 =sap.ui.getCore().byId("idMOB21DetChar");
	 	//oSplitApp.addDetailPage(detailpage2);
	 	  oSplitApp.toDetail(detailpage2);*/
	 	   
	}
		   

});