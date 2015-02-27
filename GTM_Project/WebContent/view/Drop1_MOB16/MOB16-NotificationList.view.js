sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB16-NotificationList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.MOB16-NotificationList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB16-NotificationList
	*/ 
	//Done
	createContent : function(oController) {
		
	    debugger;
		var oSplitApp = new sap.m.SplitApp("splitAppNotiList", 
				{
				}
				);
		var masterpage = sap.ui.view({id:"idMob16NotiListMaster", viewName:"com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster", type:sap.ui.core.mvc.ViewType.JS});
		var detailpageBlank = sap.ui.view({id:"idBlankPage", viewName:"com.cg.gtm.view.Drop1_MOB24.Mob24MatBlank", type:sap.ui.core.mvc.ViewType.JS});
		var detailpageListDetail = sap.ui.view({id:"idMOB16NotiListDetail", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail", type:sap.ui.core.mvc.ViewType.JS});
		
	//	var detailpageTaskDetail = sap.ui.view({id:"idMOB16NotiTaskDetail", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16-NotiTaskDetail", type:sap.ui.core.mvc.ViewType.JS});
		
	//	var detailpageNotiListDetail =  sap.ui.view({id:"idMOB16NotiListNodeDetail", viewName:"com.cg.gtm.view.Drop1_MOB16.Mob16NotifiListNodeDetail", type:sap.ui.core.mvc.ViewType.JS});
		
       // var mob31PDFPage = sap.ui.view({id:"idMOB16PDFView", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16PDF", type:sap.ui.core.mvc.ViewType.HTML});
       // alert("Step 4");
		//var mob31IMGPage =  sap.ui.view({id:"idMOB16IIMGView", viewName:"com.cg.gtm.view.Drop1_MOB16.MOB16IIMGView", type:sap.ui.core.mvc.ViewType.JS});
		//alert("Step 5");
		/*********Code for Mobile Changes for Split App****************************************/
		
		//Define Button save
        btnSave = new sap.m.Button(//"MOB16SaveComplete",
        		{
           text: "{i18n>MOB16_SaveAndComplete}",
           icon: "sap-icon://save",visible: false,
          // type: sap.m.ButtonType.Accept,
           layoutData: new sap.m.FlexItemData({growFactor: 1})
         });
		  
		 btnSave.attachPress(sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail").onSaveAndComplete);
		 
		 var btnSaveOnly = new sap.m.Button(//"MOB16SaveOnly",
				 {
	            text: "{i18n>MOB16_Save}",
	            icon: "sap-icon://save",visible: false,
	           // type: sap.m.ButtonType.Accept,
	            layoutData: new sap.m.FlexItemData({growFactor: 1})
	          });
			  
		 btnSaveOnly.attachPress(sap.ui.controller("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiListDetail").onSave);
		  
		 
		 var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(detailpageListDetail);
			
			oSplitApp.addMasterPage(masterpage);
	        oSplitApp.addDetailPage(detailpageBlank).addDetailPage(detailpageListDetail);
	        
	        
	        
	        return new sap.m.Page("MOB_16_Splitapppage",{
	 			id : "Mob16-BackNavButton",
				title: "{i18n>MOB16_Header}",
				content: [
				          oSplitApp
				],
				enableScrolling: false,
				showNavButton: true,
				showHeader : false,
				showFooter: false,///shubh on 8th nov
	            navButtonTap:function(){
	            	 app = sap.ui.getCore().byId("myApp");  
	                 app.to("idGridSubMenuQM");  
	                 destroyMOb16Content();
	            },
				footer: new sap.m.Bar({
			        contentRight: [
			          btnSaveOnly,
			          btnSave
			        ]
				})
			});
		
	 		
	 		
   
		/*if ( g_runningOnPhone == true)
		{
			
			var app = sap.ui.getCore().byId("myApp"); 
			app.addPage(masterpage).addPage(detailpageListDetail);
			//addPage(detailpageTaskDetail).addPage(detailpageNotiListDetail).
			//addPage(mob31PDFPage).addPage(mob31IMGPage);
			var btnBack = new sap.m.Button({
	            text: "{i18n>Mob18_back}",
	           // type: sap.m.ButtonType.Accept,
	            icon: "sap-icon://close-command-field",
                press : function()
			{
	            	
	            	//oController.backMobile();
			}
	          });
		//page
		return new sap.m.Page({
			title: "",
			content: [ masterpage ],
			showNavButton: false,
			enableScrolling: false,
			showHeader: false,
			showFooter: true,
			footer: new sap.m.Bar({
		        contentLeft: [
		                       //btnBack,
		                      
		                       
		                       ]
			}),
           
                           }
		);
		}
		*//***********************************************************************************************//*
		else
			{
		oSplitApp.addMasterPage(masterpage);
        oSplitApp.addDetailPage(detailpageBlank).addDetailPage(detailpageListDetail).
      //  addDetailPage(detailpageTaskDetail).addDetailPage(detailpageNotiListDetail).
       // addDetailPage(mob31PDFPage).addDetailPage(mob31IMGPage);
      //  oSplitApp.addDetailPage(detailpageBlank).addDetailPage(detailpageListDetail);
        oSplitApp.setMode("ShowHideMode");
      
        oSplitApp.setInitialDetail("idBlankPage");
        oSplitApp.setInitialMaster("idMob16NotiListMaster");
			
        //oSplitApp.setDefaultTransitionNameDetail("fade");
        
 		return new sap.m.Page("MOB_16_Splitapppage",{
 			id : "Mob16-BackNavButton",
			title: "{i18n>MOB16_Header}",
			content: [
			          oSplitApp
			],
			enableScrolling: false,
			showNavButton: true,
			showFooter: false,///shubh on 8th nov
            navButtonTap:function(){
            	
            	 app = sap.ui.getCore().byId("myApp");  
                 app.to("idGridSubMenuQM");  
                 destroyMOb16Content();
            
            	 var containerImage3 = sap.ui.getCore().byId("containerImage1MOB16");
     		    var containerImage2 = sap.ui.getCore().byId("containerImage2MOB16");
     		    var containerImage1 = sap.ui.getCore().byId("containerImage3MOB16");
			showFooter: false,
            navButtonTap:function(){  
            	// var containerImage3 = sap.ui.getCore().byId("containerImage1MOB16");
     		  //  var containerImage2 = sap.ui.getCore().byId("containerImage2MOB16");
     		  //  var containerImage1 = sap.ui.getCore().byId("containerImage3MOB16");
     		// containerImage3.setVisible(false);
     		// containerImage2.setVisible(false);
     		// containerImage1.setVisible(false);
            	
            g_MobileNavigationId = "MainGrid-Quality";
     		var items = window.localStorage.getItem('000002');
     		window.localStorage.removeItem('000002');
     		
                app = sap.ui.getCore().byId("myApp");  
                app.to("idGridSubMenuQM");  
                if (items != undefined && items != null && items.length != 0)
   			 {
                var items2 = window.localStorage.getItem('000002');
				// alert(items2);
				   oImageArrReceived =  JSON.parse(items2);
				   oImageArrReceived.splice(0,oImageArrReceived.length-1);
				    
					var imageModelString = 	JSON.stringify(oImageArrReceived);
					 window.localStorage.setItem("000002", imageModelString);
				// alert( oImageArrReceived[0]);
			 }
            },
            //showFooter: true,
			footer: new sap.m.Bar({
		        contentRight: [
		                       
		          new sap.m.Button({
		         /* new sap.m.Button({
		            text: "Back",
		            icon: "sap-icon://sys-back" ,
		            press : function ()
		            {
		            	 var containerImage3 = sap.ui.getCore().byId("containerImage1MOB16");
		     		    var containerImage2 = sap.ui.getCore().byId("containerImage2MOB16");
		     		    var containerImage1 = sap.ui.getCore().byId("containerImage3MOB16");
		     		// containerImage3.setVisible(false);
		     		// containerImage2.setVisible(false);
		     		// containerImage1.setVisible(false);
		     		var items = window.localStorage.getItem('000002');
		     		window.localStorage.removeItem('000002');
		     		 if (items != undefined && items != null && items.length != 0)
					 {
		                
		                var items2 = window.localStorage.getItem('000002');
						// alert(items2);
						   oImageArrReceived =  JSON.parse(items2);
						   oImageArrReceived.splice(0,oImageArrReceived.length-1);
						    
							var imageModelString = 	JSON.stringify(oImageArrReceived);
							 window.localStorage.setItem("000002", imageModelString);
						// alert( oImageArrReceived[0]);
					 }
		     		 
		            var app = sap.ui.getCore().byId("myApp");
		            app.to("idGridSubMenuQM");
		            }
		            
		          }),
		          btnSaveOnly,
		          btnSave
		          
		          new sap.m.Button({
		            text: "Save",
		            icon: "sap-icon://save & Complete"
		          })
		         
		        ]
			})//.addStyleClass("Pfooter")
			
			footer : new sap.m.Bar({
				contentLeft: [],	
				contentMiddle: [],
				contentRight: []
			})
		});
	}*/
	}
});