sap.ui.jsview("com.cg.gtm.view.MOB19MatList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB19MatList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB19MatList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB19MatList
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		globalVisitedIDs = [];
		
		/*var btnAll = new sap.m.Button({ id : "Mob19SelAll",
			text : "Select All",
			press : function(){
			oController.selectAll();
			//sap.ui.getCore().byId("Mob19-popWin").close();	
			}});
		
		var btnNone = new sap.m.Button({
				id : "Mob19SelAll",
			    src: "img/MB15-Camera_Icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: function () {
			    	oController.selectAll();
			      }		
		});*/
		
		/*var btnAll =  new sap.m.Image({
			id : "Mob19SelAll",
		    src: "img/ico_selectall_30.png",
		    press: function () {
		    	oController.selectAll();
		      },
		  }).addStyleClass("selectAllnone");
		
		var btnNone =  new sap.m.Image({
			id : "Mob19SelNone",
		    src: "img/ico_selectnone_30.png",
		    press: function () {
		    	oController.selectNone();
		      },
		  }).addStyleClass("selectAllnone");*/
		
		var btnSel  = new sap.m.Link(
				{
					id : "Mob19Select",
				   // src: "img/ico_selectall_30.png",
					text : "Select",
				    press: function () {
				    	//oController.selectAll();
				      },
				  }).addStyleClass("flex");
		
		var btnAll  = new sap.m.Link(
		{
			id : "Mob19SelAll",
		   // src: "img/ico_selectall_30.png",
			text : "All",
		    press: function () {
		    	oController.selectAll();
		      },
		  }).addStyleClass("flex");
		
		var btnNone = new sap.m.Link(
				{
					id : "Mob19SelNone",
				   // src: "img/ico_selectall_30.png",
					text : "None",
				    press: function () {
				    	oController.selectNone();
				      },
				  }).addStyleClass("flex");
		
		var listMatNo = new sap.m.List({
			  id : "Mob19listMatNo",
		      mode: sap.m.ListMode.MultiSelect,
		     
		  	  //height : "300px",
		      //includeItemInSelection: true,
			  selectionChange : oController.Mob19MatSel,
			 
		     // showUnread : true,
		      rememberSelections : false,
		       
		      items: {
		    	  path: "/results",
		     
		        	
		         /* new sap.m.StandardListItem({
		          id : "Mob19stdMatSel",
		          title: "{desc}"+ "       .        " + "{qty}",
		          description: "{qty}",
		          info : "{matnum}",
		          iconDensityAware: false,
		          iconInset: false ,
		         
		        })*/
		        	
		        	template: new sap.m.ObjectListItem({
						title: "{desc}", 
						description: "{qty}",
						info : "{matnum}",
						icon : "{icon}",
						type : "Active",
						selected : "{selected}",
					
						 press : oController.Mob19MatSelPress,
						 /* {
							 alert("wekfjh");
						  },
						*/
						//info : "{matdesc}",
						//press : oController.onClick

						//type : sap.m.ListType.Navigation,

						//press : oController.onClick ,
						firstStatus : new sap.m.ObjectStatus({

						text : "{loc}"
						}),
				secondStatus : new sap.m.ObjectStatus({

						text : "Quantity : " + "{qty}"	

						}),

						attributes : [

						new sap.m.ObjectAttribute({

						text : "{matnum}"

						}),

						
						]

						})
		        	
		      }
	
		 }).addStyleClass("paddingBottom");
		
         var pageTitle = sap.ui.getCore().byId("ip_del_note_num").getValue();
		/*var oJSONModelMob19MasterList = new sap.ui.model.json.JSONModel(res, "results");
		var listMat = sap.ui.getCore().byId("Mob19listMatNo");
		listMat.setModel(oJSONModelMob19MasterList);*/
         
         var labeldummy = new sap.m.Label({
 			text: "{i18n>DumyTxt}",

 		});
 		labeldummy.addStyleClass("HideLabel");
 		
 		
		
		
		var flexBox = new sap.m.FlexBox({ 
		
			items: [ 
			        labeldummy,  	
			         
			         ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Center"
				
		    })//.addStyleClass("flex-box-padding");
		
		
		
		if ( g_runningOnPhone == true)
		{
			
			return new sap.m.Page({
				title: pageTitle,
				id : "MOB19MatListPage",
				content: [
flexBox,
//btnSel , 
btnAll, btnNone ,listMatNo
				],
				showNavButton: true,
				//enableScrolling: false,
	            navButtonTap:function(){  
	             g_MobileNavigationId = "Mob19-BackNavButton";
		            sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");	
	            },
				footer: new sap.m.Bar({
			        contentLeft: [
			          new sap.m.Button({
			            text: "Back",
			            icon: "sap-icon://close-command-field" ,
			            press : function ()
			            {
			          //  var myapp = sap.ui.getCore().byId("myApp");
			           // myapp.to("idMOB19MasPg");
			            sap.ui.getCore().byId("myApp").to("idMob19InitialScreen");	
			            }
			            
			          })
			        ]
				})
			
			});
		}
		
		else
			{
		
 		return new sap.m.Page({
 			id : "MOB19MatListPage",
			title: pageTitle,
			content: [
flexBox	 ,
//btnSel ,
btnAll, btnNone ,listMatNo         	
			],			
            enableScrolling: false
 		}).addStyleClass("footer");
	}
		
	
	}

});