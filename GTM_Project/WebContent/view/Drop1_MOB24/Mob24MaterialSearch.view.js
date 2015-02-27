sap.ui.jsview("com.cg.gtm.view.Drop1_MOB24.Mob24MaterialSearch", {

    		/** Specifies the Controller belonging to this View. 
    		* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
    		* @memberOf com.cg.gtm.view.Mob24MaterialSearch
    		*/ 
    		getControllerName : function() {
    			return "com.cg.gtm.view.Drop1_MOB24.Mob24MaterialSearch";
    		},

    		/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    		* Since the Controller is given to this method, its event handlers can be attached right away. 
    		* @memberOf com.cg.gtm.view.Mob24MaterialSearch
    		*/ 
    		createContent : function(oController) {
    			this.setHeight("100%");
    			var oSplitApp = new sap.m.SplitApp("splitAppMaterial", 
    					{initialPage:"idMob24MaterialSearchInput",
    				
    					afterDetailNavigate: function(){
    						this.hideMaster();
    					}
    			
    					}
    					//The master area needs to be closed when navigation in detail area is done.
    					);
    			var masterpage = sap.ui.view({id:"idMob24MaterialSearchInput", viewName:"com.cg.gtm.view.Drop1_MOB24.MaterialSearchInput", type:sap.ui.core.mvc.ViewType.JS});
    			var plantListView = sap.ui.view({id:"idPlantListView", viewName:"com.cg.gtm.view.PlantListView", type:sap.ui.core.mvc.ViewType.JS});
    		   
    	
    			if(g_runningInTablet == true || (g_runningInTablet == false && g_runningOnPhone == false))
    				{
    				var matsrchBlank = sap.ui.view({id:"idMATSRBlank", viewName:"com.cg.gtm.view.Drop1_MOB24.Mob24MatBlank", type:sap.ui.core.mvc.ViewType.JS});
        		    var MaterialSearchDetailPageScreen = new sap.ui.view({id:"MaterialSearchDetailPage",viewName:"com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetailPage", type:sap.ui.core.mvc.ViewType.JS});
        		    
    				oSplitApp.addMasterPage(masterpage).addMasterPage(plantListView);
    				//var MaterialSearchDetailPageScreen = new sap.ui.view({id:"idMaterialSearchDetailPage",viewName:"com.cg.gtm.view.MaterialSearchDetailPage", type:sap.ui.core.mvc.ViewType.JS});
    				 oSplitApp.addDetailPage(matsrchBlank).addDetailPage(MaterialSearchDetailPageScreen);
    				 //Default open master;
    				 oSplitApp.showMaster();
    				 //oSplitApp.setMode(sap.m.SplitAppMode.StretchCompressMode);
    				 
    				//bar Code button show
    				 var disBarBtn = sap.ui.getCore().byId("btnbarCode");
				        disBarBtn.setVisible(true); 
    				}
    			
    			else if ( g_runningOnPhone == true){
    			
    				var matsrchpage = sap.ui.view({id:"idMATSR", viewName:"com.cg.gtm.view.Drop1_MOB24.MatSearchView", type:sap.ui.core.mvc.ViewType.JS});	
    				var matsrchDetail = sap.ui.view({id:"idMATSRDetail", viewName:"com.cg.gtm.view.Drop1_MOB24.MaterialSearchDetail", type:sap.ui.core.mvc.ViewType.JS});
    			    var app = sap.ui.getCore().byId("myApp"); 
    				app.addPage(masterpage).addPage(matsrchpage).addPage(matsrchDetail).addPage(plantListView);
    				
    				
    				//bar code button show
    				var disBarBtn = sap.ui.getCore().byId("btnbarCode");
   				        disBarBtn.setVisible(true);
    				
    			
    			}
    	        
    	        
    	    //Define button select material
    	  	 var  btnSelMat = new sap.m.Button(
    	  			 //"idselbtn",
    	  			 {
    	  		 id : "btnSelMat",
    	         text: "{i18n>selectMat}",
    	         icon: "sap-icon://accept",
    	       //  type: sap.m.ButtonType.Accept,
    	         layoutData: new sap.m.FlexItemData({growFactor: 1})
    	       });
    			  
    			 btnSelMat.attachPress(oController.onMaterialSel);
    			 btnSelMat.setVisible(false);
    			 
    			 
    			 var btnSearch = new sap.m.Button("idSearchbtn",{
    	             text: "{i18n>search_mat}",
    	            // type: sap.m.ButtonType.Accept,
    	             icon: "sap-icon://search",
    	             layoutData: new sap.m.FlexItemData({growFactor: 1})
    	           });
    			  
    			  btnSearch.attachPress(oController.onMaterialSearch);
    			  
    			  if ( g_runningOnPhone == true)
    				{
    				  
    	    	 		return new sap.m.Page({
    	    				title: "{i18n>mat_searchTit}",
    	    				content: [
    	    				          	masterpage
    	    				],
    	    				enableScrolling: false,
    	    				showNavButton: true,
    	    				showHeader : false,
    	    				showFooter: true,
    	    	            navButtonTap:function(){
    	    	            	// sap.ui.getCore().byId("splitAppMaterial").to("idMATSRBlank");
    	    	         
    	    	            	if(backNavMat=="Mob15CreateNoti") {
    	    	            		//alert("inside createnoti");
    	    	            		
    	    	            		var app = sap.ui.getCore().byId("myApp");  
    	    	                    app.to("idMob15Notification");
    	    	            		
    	    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    		            			plantLst.setValue(defaultPlantName);
    		            			
    		            		    clearMaterialInputs();
    	    	                    
    	    	            	}
    	    	            	
    	    	            	else if (backNavMat=="Mob22InsLot")
    	    	    			{
    	    	            		
    	    	            		if (globalValMatSrch == 1)
    	    	            			{
    	    	            			globalValMatSrch = 0;
    	    	            			 var app = sap.ui.getCore().byId("splitAppMaterial");  
    	    	        	        	 app.toMaster("idMob24MaterialSearchInput");
    	    	        	        	 app.toDetail("idMATSRBlank");
    	    	            			
    	    	            			}
    	    	            		
    	    	            		else
    	    	            			{
    	    	            			globalValMatSrch = 0;
    	    	            			//alert("inside Inpsection Lot");
    	        	            		
    	        	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	    	            			plantLst.setValue(defaultPlantName);
    	    	            			
    	    	            			clearMaterialInputs();
    	    	            			
    	    	            			var app = sap.ui.getCore().byId("myApp");  
    	    	                        app.to("idMOB22InitView");
    	    	            			
    	    	            			}
    	    	    			
    	    	    			
    	    	    			}
    	    	            	
    	    	            	else if (backNavMat == "idMob24MaterialSearchInput")
    	    	            		{
    	    	            		if (globalValMatSrch == 1)
    	    	        			{
    	    	        			globalValMatSrch = 0;
    	    	            		var app = sap.ui.getCore().byId("splitAppMaterial");  
    	    	   	        	    app.toMaster("idMob24MaterialSearchInput");
    	    	   	        	    app.toDetail("idMATSRBlank");
    	    	        			}
    	    	            		
    	    	            		else
    	    	        			{
    	    	        			globalValMatSrch = 0;
    	    	        			//alert("inside materialsearch");
    	    	            		
    	    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    		            			plantLst.setValue(defaultPlantName);
    		            			
    		            			clearMaterialInputs();
    		            		    
    	    	        			var app = sap.ui.getCore().byId("myApp");  
    	    	                    app.to("idGridSubMenuIMWM");
    	    	        			
    	    	        			}
    	    	   	        	  
    	    	            		}
    	    	            	
    	    	            	else if (backNavMat == "idMOB21Mas")
    	    	        		{
    	    	            		//alert(globalValMatSrch);
    	    	        		if (globalValMatSrch == 1)
    	    	    			{
    	    	    			globalValMatSrch = 0;
    	    	    			
    	    	    			
    	    	        		var app = sap.ui.getCore().byId("splitAppMaterial");  
    	    		        	    app.toMaster("idMob24MaterialSearchInput");
    	    		        	    app.toDetail("idMATSRBlank");
    	    	    			}
    	    	        		
    	    	        		else
    	    	    			{
    	    	    			globalValMatSrch = 0;
    	    	    			//alert("inside Enter Inpsection Lot");
    		            		
    		            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	            			plantLst.setValue(defaultPlantName);
    	            			
    	            			clearMaterialInputs();
    	            			
    	    	    			var app = sap.ui.getCore().byId("myApp");  
    	    	                app.to("idMOB21Mas");
    	    	    			
    	    	    			}
    	    		        	  
    	    	        		}
    	    	            	
    	    	            	else if(backNavMat=="Mob29Screen") {
    	    	            		//alert("inside mob29");
    	    	            		
    	    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    		            			plantLst.setValue(defaultPlantName);
    		            			
    		            			clearMaterialInputs();
    		            			
    	    	            		var app = sap.ui.getCore().byId("myApp");  
    	    	                    app.to("idMob29MaterialView");
    	    	            	}
    	    	            	else if (backNavMat == "Mob17")
    	    	        		{

    	    	        			var myApp = sap.ui.getCore().byId("myApp");
    	    	        	    	myApp.to("idMOB17");
    	    	        	    	
    	    	        	    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
    	    	        	    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
    	    	        	    	splitAppMOB17.toDetail("idMaterialFullDetPage");
    	    	        		}
    	    	        	   
    	    	        	    else if (backNavMat == "Mob18")
    	    	        	      {
    	    	            		//Clear MaterialSearch Input Fields
    	    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    		            			plantLst.setValue(defaultPlantName);
    		            			
    		            			clearMaterialInputs();
    		            			
    		            		    if(g_runningOnPhone == true)
    		            			{
    		            		    	var myApp = sap.ui.getCore().byId("myApp");
        	    	        	    	myApp.to("idMOB18Matmas");
    		            			}
    		            		    else{
    		            		    	var myApp = sap.ui.getCore().byId("myApp");
        	    	        	    	myApp.to("idMob18InitialScreen");
        	    	        	    	
        	    	        	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
        	    	        	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
        	    	        	    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
    		            		    }
    	    	        			
    	    	        		}

    	    	            	else if( backNavMat == "MOB23"){
    	    	            		
    	    	            		
    	    	            		var myApp = sap.ui.getCore().byId("myApp");
        	    	       	    	myApp.to("idMob23InitialScreen");
        	    	       	    	
        	    	       				
        	    	       			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
        	    	       			app.toMaster("idMOB23Matmaster");
    	    	            		
    	    	        			//Clear MaterialSearch Input Fields
    	    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    		            			plantLst.setValue(defaultPlantName);
    		            			
    		            			clearMaterialInputs();
    	    	       			
        	    	    			}	 
    	    	            	else if (   backNavMat == "MOB35")
    	    	    			{
    	    	    			
    	    	    			
    	    	    			var myApp = sap.ui.getCore().byId("myApp");
    	    	    	    	myApp.to("idMob35InitialScreen");
    	    	               			
    	    	    			}
    	    	       	
    	    	            	else {
    	    	            		var app = sap.ui.getCore().byId("myApp");  
    	    	                    app.to("idGridSubMenuQM");
    	    	            	}
    	    	            
    	    	            },
    	    	            
    	    				enableScrolling: false,
    	    				//showNavButton: false,
    	    				showFooter: false,
    	    				footer: new sap.m.Bar({
    	    					contentLeft: [btnSelMat],
    	    			        contentRight: [
    	    			                         			                       
    	    			                       ]
    	    				})
    	    			});
    	    		
    				}
    			  else
    				  {
    			  
    	        
    			
    	 		return new sap.m.Page({
    	 			id : "Mob24-BackNavButton",
    				title: "{i18n>mat_searchTit}",
    				content: [
    				          oSplitApp
    				],
    				enableScrolling: false,
    				showNavButton: true,
    				showFooter: false,
    	            navButtonTap:function(){
    	            	debugger;
    	            //	alert(backNavMat);
    	            	// sap.ui.getCore().byId("splitAppMaterial").to("idMATSRBlank");
    	            	g_MobileNavigationId = "MainGrid-Inventory";
    	            	if(backNavMat=="Mob15CreateNoti") {
    	            		//alert("inside createnoti");
    	            		g_MobileNavigationId = "Mob15-BackNavButton";
    	            		var app = sap.ui.getCore().byId("myApp");  
    	                    app.to("idMob15Notification");
    	            		
    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	        			plantLst.setValue(defaultPlantName);
    	        			
    	        			clearMaterialInputs();
    	                    
    	            	}
    	            	
    	            	else if (backNavMat=="Mob22InsLot")
    	    			{
    	            		g_MobileNavigationId = "Mob22-BackNavButton";
    	            		if (globalValMatSrch == 1)
    	            			{
    	            			globalValMatSrch = 0;
    	            			 var app = sap.ui.getCore().byId("splitAppMaterial");  
    	        	        	 app.toMaster("idMob24MaterialSearchInput");
    	        	        	 app.toDetail("idMATSRBlank");
    	            			
    	            			}
    	            		
    	            		else
    	            			{
    	            			globalValMatSrch = 0;
    	            			//alert("inside Inpsection Lot");
    		            		
    		            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	            			plantLst.setValue(defaultPlantName);
    	            			
    	            			clearMaterialInputs();
    	            			
    	            			var app = sap.ui.getCore().byId("myApp");  
    	                        app.to("idMOB22InitView");
    	            			
    	            			}
    	    			
    	    			}
    	            	
    	            	else if (backNavMat == "idMob24MaterialSearchInput")
    	            		{
    	            		g_MobileNavigationId = "MainGrid-Inventory";
    	            		if (globalValMatSrch == 1)
    	        			{
    	            			
    	        			globalValMatSrch = 0;
    	        			
    	        			var deselect = sap.ui.getCore().byId("listMatNo");	
    	            		deselect.removeSelections();
    	            		var app = sap.ui.getCore().byId("splitAppMaterial");  
    	   	        	    app.toMaster("idMob24MaterialSearchInput");
    	   	        	    app.toDetail("idMATSRBlank");
    	        			}
    	            		
    	            		else
    	        			{
    	        			globalValMatSrch = 0;
    	        			//alert("inside materialsearch");
    	            		
    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	        			plantLst.setValue(defaultPlantName);
    	        			
    	        			clearMaterialInputs();
    	        		    
    	        			var app = sap.ui.getCore().byId("myApp");  
    	                    app.to("idGridSubMenuIMWM");
    	        			
    	        			}
    	   	        	  
    	            		}
    	            	
    	            	else if (backNavMat == "idMOB21Mas")
    	        		{
    	            		g_MobileNavigationId = "Mob21-BackNavButton";
    	            		//alert(globalValMatSrch);
    	        		if (globalValMatSrch == 1)
    	    			{
    	    			globalValMatSrch = 0;
    	    			
    	    	
    	    			
    	    		
    	    				var app = sap.ui.getCore().byId("splitAppMaterial");  
    		        	    app.toMaster("idMob24MaterialSearchInput");
    		        	    app.toDetail("idMATSRBlank");
    	    				
    	    			
    	        		
    	    			}
    	        		
    	        		else
    	    			{
    	    			globalValMatSrch = 0;
    	    			//alert("inside Enter Inpsection Lot");
    	        		
    	        		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	    			plantLst.setValue(defaultPlantName);
    	    			
    	    			clearMaterialInputs();
    	    			
    	    			var app = sap.ui.getCore().byId("myApp");  
    	                
    	    			
    	    
    	    				app.to("idMOB21InitView12");
    	    			
    	    			
    	    			
    	    			}
    		        	  
    	        		}
    	            	
    	            	else if(backNavMat=="Mob29Screen") {
    	            		//alert("inside mob29");
    	            		g_MobileNavigationId = "Mob29-BackNavButton";
    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	        			plantLst.setValue(defaultPlantName);
    	        			
    	        			clearMaterialInputs();
    	        			
    	            		var app = sap.ui.getCore().byId("myApp");  
    	                    app.to("idMob29MaterialView");
    	            	}
    	            	else if (backNavMat == "Mob17")
    	        		{

    	        	    	var tabMaterialLst = sap.ui.getCore().byId("tabMaterialLst");
    	        			var oModel = tabMaterialLst.getModel();
    	        			
    	        			var lenMaterialLst = oModel.oData.modelData.length;
    	        			
    	        			if(lenMaterialLst==0) { //If no material in the list navigate to blank
    	        				var myApp = sap.ui.getCore().byId("myApp");
    	            	    	myApp.to("idMOB17");
    	            	    	
    	        				var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
    	        				splitAppMOB17.toDetail("idMOB17_BlankScreen");
    	        			}else {
    	        				
    	        				var myApp = sap.ui.getCore().byId("myApp");
    	            	    	myApp.to("idMOB17");
    	            	    	
    	            	    	var splitAppMOB17 = sap.ui.getCore().byId("splitAppMOB17");
    	            	    	splitAppMOB17.toMaster("idMOB17_MasterMatSearch");
    	            	    	splitAppMOB17.toDetail("idMaterialFullDetPage");
    	            	    	
    	        				/*
    	        				 * Select first item from the list
    	        				 */
    	        				populateMatDetail(0);
    	        			}
    	        		}
    	            	else if (backNavMat == "Mob18")
    	        		{
    	            		
    	            		
    	            		//Clear MaterialSearch Input Fields
    	            		//var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	        			//plantLst.setValue(defaultPlantName);
    	        			
    	        			clearMaterialInputs();
    	        			
    	        			
    	            		var tabMaterialLst = sap.ui.getCore().byId("tableMat");
    	            		var oModel = tabMaterialLst.getModel();
    	            		
    	            		
    	            		var Matlst = oModel.oData.modelData.length;
    	            		
    	            		if(Matlst==0){
    	            			var myApp = sap.ui.getCore().byId("myApp");
    	            	    	myApp.to("idMob18InitialScreen");
    	            	    	
    	            	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
    	            	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
    	            	    	idMOB18SplitApp.toDetail("idMOB18Blank");
    	            		}
    	            		else{
    	            			var myApp = sap.ui.getCore().byId("myApp");
    		        	    	myApp.to("idMob18InitialScreen");
    		        	    	
    		        	    	var idMOB18SplitApp = sap.ui.getCore().byId("idMOB18SplitApp");
    		        	    	idMOB18SplitApp.toMaster("idMOB18Matmas");
    		        	    	idMOB18SplitApp.toDetail("idMOB18SplitScrap");
    		        	    	
    		        	    	
    		        	    	SerialDetail_Scrap(0);
    	            		}
    	            		
    	            	
    	        		
    	        		}
    	            	else if( backNavMat == "MOB23"){
    	            		
    	            		
    	            		var myApp = sap.ui.getCore().byId("myApp");
    		       	    	myApp.to("idMob23InitialScreen");
    		       	    	
    		       				
    		       			var app = sap.ui.getCore().byId("idMOB23SplitApp");  
    		       			app.toMaster("idMOB23Matmaster");
    	            		
    	        			//Clear MaterialSearch Input Fields
    	            		var plantLst = sap.ui.getCore().byId("inputPlantMat"); 
    	        			plantLst.setValue(defaultPlantName);
    	        			
    	        			clearMaterialInputs();
    	       			
    		    			}	
    	            	else if( backNavMat == "MOB28"){
    	            		var app = sap.ui.getCore().byId("myApp");  
    	                    app.to("idMob28InitialScreen");
    	            		
    	            	}else if (backNavMat == "MOB35")
    	       			{
    		   				var appM = sap.ui.getCore().byId("myApp"); 
    		   				appM.to("idMob35InitialScreen");
    		   				
    		   				sap.ui.getCore().byId("idEmptyMOB35").setVisible(true);
    		   		    	sap.ui.getCore().byId("idNextMOB35").setVisible(true);
    	       			}
    	            	
    	            	else if (   backNavMat == "MOB03")
    	        		{
alert("opopo");
    	        			/*var app = sap.ui.getCore().byId("myApp");  
    	        			app.to("MOB03Initial");
    	        			var myApp = sap.ui.getCore().byId("MOB03SplitApp");
    	        			myApp.toMaster("MOB03MasterTwo");
    	        			myApp.toDetail("MOB03Detail");
    	        			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();*/
    	            		
    	            		var app = sap.ui.getCore().byId("myApp"); 
    	        			app.back();
    	        			sap.ui.getCore().byId("MOB03ComponentAndToolDialog").open();



    	        		}
    	        		
    	        		else if (   backNavMat == "MOB01T")
    	        		{

    	        			var app = sap.ui.getCore().byId("myApp");  
    	        			app.to("MOB01Initial");
    	        			var myApp = sap.ui.getCore().byId("MOB01SplitApp");
    	        			myApp.toMaster("MOB01Master");
    	        			myApp.toDetail("MOB01TrainDetailEdit");
    	        			sap.ui.getCore().byId("MOB01ComponentDialog").open();



    	        		}
    	        		
    	        		else if (   backNavMat == "MOB01POP")
    	        		{
    	        			var app = sap.ui.getCore().byId("myApp"); 
    	        			app.back();
    	        			/*app.to("MOB01Initial");
    	        			var myApp = sap.ui.getCore().byId("MOB01SplitApp");
    	        			myApp.toMaster("MOB01Master");
    	        			myApp.toDetail("MOB01DepotDetailEdit");*/
    	        			sap.ui.getCore().byId("MOB01ComponentDialog").open();



    	        		}
    	            	else {
    	            		
    	            		//var deselect = sap.ui.getCore().byId("listMatNo");	
    	            		//deselect.removeSelections();
    	            		g_MobileNavigationId = "MainGrid-Inventory";
    	            		var app = sap.ui.getCore().byId("myApp");  
    	                    app.to("idGridSubMenuQM");
    	            	}
    	            	
    	                  
    	                
    	               // alert(backNav);
    	            },
    	            
    				enableScrolling: false,
    				//showNavButton: false,
    				showFooter: false,
    				footer: new sap.m.Bar({
    					contentLeft: [],
    			        contentRight: [
    			                         			                       
    			                       ]
    				})//.addStyleClass("search"),
    				//.addStyleClass("select")
    	            
    	           // .addStyleClass("Matfooter")
    				/*footer : new sap.m.Bar({
    					contentLeft: [],	
    					contentMiddle: [],
    					contentRight: []
    				})*/
    			});
    		}
    		}

    	});
	

function clearMaterialInputs() {
	var desc = sap.ui.getCore().byId("txtDesc").setValue("");
    
    var manuf = sap.ui.getCore().byId("txtManu").setValue("");
    
    var matGrp = sap.ui.getCore().byId("txtMtrGrp").setValue("");
   
    var extMatGrp = sap.ui.getCore().byId("txtExtMtrGrp").setValue("");
    
    var vendor = sap.ui.getCore().byId("txtVendor").setValue("");
   
    var venPartNo = sap.ui.getCore().byId("txtVenPartNo").setValue("");
}
