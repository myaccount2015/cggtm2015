sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob16-NotiListMaster
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.Mob16-NotiListMaster";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob16-NotiListMaster
	*/ 
	//Done
	createContent : function(oController) {
		
		this.setHeight("100%");
			var notiflistTree=  new sap.m.List({
		          id: "TaskMasterList",
		          title:"test Title",
		          height: "100%",
		          items: {
		            path: "/",
		            template: new sap.m.ObjectListItem("",{
		              visible: true,
		              title: "{TaskText}",
		              type: "Navigation",
		              number: "{TaskSequence}",
		              press: oController.handleListItemPress,
		              intro : {
		                parts: [
		                  {path: "PlannedStartDate"},
		                  {path: "PlannedFinishDate"}
		                ],
		            formatter: com.cg.gtm.Formatter.dateRange
		              },
		              firstStatus: new sap.m.ObjectStatus({
		                text: {
		                  path: "Priority",
		                 formatter: com.cg.gtm.Formatter.statusText
		                },
		                state: {
		                  path: "Priority",
		              formatter: com.cg.gtm.Formatter.statusState
		                }
		              }),
		              
		              attributes: new sap.m.ObjectAttribute({
			            	text:"{NotificationNo}",
			            	
			            }),
		            }),
		            
		           
		            sorter: [new sap.ui.model.Sorter("Priority", false, function(oContext) {
		              return {
		                key: oContext.getProperty("NotificationNo"),
		              
		              };
		            }),
		            new sap.ui.model.Sorter("NotificationNo", false,null ),
		            new sap.ui.model.Sorter("TaskSequence", false,null )]
		          }
		        });
	/*	var oTreeTaskList = new sap.ui.commons.Tree("NotiTaskListTree");   
		oTreeTaskList.addStyleClass("paddingBottom_tree");
		oTreeTaskList.bindAggregation("nodes","/mTypes",function(sId,oContext){  
		           var treePath = oContext.getPath();  
		           var bindTextName = '';  
		           if(treePath.indexOf("mDetails") !== -1) {  
	                     bindTextName = "mValue";   
		           } else if((treePath.indexOf("details") || treePath.indexOf("details1") )  !== -1) {  
		                     bindTextName = "mDescription"; 
		           } 
		           else {  
		            	   
		        	   
	                     bindTextName = "name"; //+ "PriTex"; 
	                    
	                } 
		           
		           return new sap.ui.commons.TreeNode({
		        	   
		        	   selected : oController.onTreeSelection,  // Calling Tree Select event
		        	   expanded : true
		           }).bindProperty("text",bindTextName); 
		           
		           
		           
		}); 
		*/
		
	/*	var countValueSetter = new sap.m.Text({
			id:"countValueSetter",
			text : "1"
		});
		
		var countValueSetterNode = new sap.m.Text({
			id:"countValueSetterNode",
			text : "1"
		});*/
		
		
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		if( g_runningOnPhone == true)
			{
			return new sap.m.Page({
				id : "Mob16-BackNavButton",
				title: "Notification List",
				content: [
				          notiflistTree
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
				
				showNavButton: true,
				navButtonTap:function(){ 
					g_MobileNavigationId = "MainGrid-Quality";
					var app = sap.ui.getCore().byId("myApp");  
				    app.to("idGridSubMenuQM");
				    destroyMOb16Content();
				},
				
			});
			}
		else
			{
			return new sap.m.Page({
			 
				title: "Notification List",
				content: [
				          	notiflistTree
				],
				headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			showNavButton: true,
			navButtonTap:function(){ 
				g_MobileNavigationId = "MainGrid-Quality";
				var app = sap.ui.getCore().byId("myApp");  
			    app.to("idGridSubMenuQM");
			    destroyMOb16Content();
			},
				footer: new sap.m.Bar({
				     
				})//.addStyleClass("footer"),
			});
			}
	/*var header= new sap.m.Bar({
        contentLeft: [
     		          new sap.m.Button("MOB16_col_exp",{
     		           
     		        icon: "sap-icon://expand-group" ,
     		            press : function ()
     		            {
     		            oController.collapse_expand("col")
     		            }
     		            
     		          })]});*/
	/*return new sap.m.Page({
			title: "Notification List",
			content: [
			         // header,
notiflistTree
			]
	
	,
			
			footer: new sap.m.Bar({
		        contentRight: [
		          new sap.m.Button({
		            text: "Back",
		           // icon: "sap-icon://back" ,
		            press : function ()
		            {
		            	//app.to(page1);
		            }
		            
		          })
		          
		        ]
			})
		});*/
	
		
	}

});