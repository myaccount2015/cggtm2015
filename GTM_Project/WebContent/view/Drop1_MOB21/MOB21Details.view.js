sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21Details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21Details
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.MOB21Details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21Details
	*/ 
	createContent : function(oController) {
		this.setHeight("100%"); 
		
		var inputOrderNo = new sap.m.Text({
			id : "MOb21Matnr",
			width : "90px"
			
		});
			
		var inputMatDesc = new sap.m.Text({
				id : "MOb21MatDesc",
				width : "90px"
		    
		  });
		
	/////////////////////////////////////////////////////////////////	
		
		 var inputCenter  = new sap.m.Text({
			 id : "Mob21center",
			 width : "90px"
		
		 
		 });
	
		 ///////////////////////////////////////////////////////
		 
		 var inputLot  = new sap.m.Text({
			 id : "Mob21lot" ,
			 width : "90px"
		 
			
		 });
		 
		 
		 var inputType  = new sap.m.Text({
			id : "Mob21type" ,
			width : "90px"
			
		 
		 });
		 
		 
		 var inputVendor  = new sap.m.Text({
				 id : "Mob21vendor" ,
				 width : "90px"
			 
		 
		 });
		
		var lblMaterialNumber =  new sap.m.Label({
             text: "Material Number: ",
             design: sap.m.LabelDesign.Bold ,
             width : "160px",
             layoutData : new sap.ui.layout.GridData({
                     span: "L3 M3 S12",
                     linebreakL: true,
         			linebreakM: true,
         			linebreakS: true
             })
     });
     
  
    
   

var lblMaterialDescription =  new sap.m.Label({
	 text: "Description: ",design: sap.m.LabelDesign.Bold ,
	 width : "160px",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});


var lblCenter =  new sap.m.Label({
	 text: "Center: ",design: sap.m.LabelDesign.Bold ,
	 width : "140px",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 
 
  
  
  var lblLot =  new sap.m.Label({
	  text: "Lot: ",design: sap.m.LabelDesign.Bold ,
	  width : "140px",
	    layoutData : new sap.ui.layout.GridData({
	            span: "L3 M3 S12",
	            linebreakL: true,
				linebreakM: true,
				linebreakS: true
	    })
	});
	 
	 
	  
	  
	  var lblType =  new sap.m.Label({
		  text: "Type: ",design: sap.m.LabelDesign.Bold ,
		  width : "140px",
		    layoutData : new sap.ui.layout.GridData({
		            span: "L3 M3 S12",
		            linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		});
		  

var lblVendor =  new sap.m.Label({
	 text: "Vendor: ",design: sap.m.LabelDesign.Bold ,
	 width : "140px",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 

var containerBoxMatNoOrdNo = new sap.m.FlexBox({
	items: [
	        	lblMaterialNumber,
	        	inputOrderNo
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});

var containerBoxMaterialDes = new sap.m.FlexBox({
	items: [
	        	lblMaterialDescription,
	        	inputMatDesc
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});

var containerBoxCenter = new sap.m.FlexBox({
	items: [
				lblCenter,
				inputCenter
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});
	
var containerBoxLot = new sap.m.FlexBox({
	items: [
				lblLot,
				inputLot
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});

var containerBoxType = new sap.m.FlexBox({
	items: [
				lblType,
				inputType
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});

var containerBoxVendor = new sap.m.FlexBox({
	items: [
				lblVendor,
				inputVendor
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
	width : "230px"
});



var oForm = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
    labelSpanL:3,
    labelSpanM:3,
    columnsL:1,
    columnsM:1,
    content:[
             containerBoxMatNoOrdNo,
             containerBoxMaterialDes
            
    ]
});

var oForm1 = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
    labelSpanL:3,
    labelSpanM:3,
    columnsL:1,
    columnsM:1,
    content:[
            
containerBoxCenter,
containerBoxLot    
            
    ]
});

var oForm2 = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
    labelSpanL:3,
    labelSpanM:3,
    columnsL:1,
    columnsM:1,
    content:[
            
             
             containerBoxType,
             containerBoxVendor
    ]
});

var DetailPageDetails = new sap.ui.layout.form.SimpleForm({
	layout: "ResponsiveGridLayout",
	emptySpanL: 6,
	emptySpanM: 6,
	breakpointM: 1000,
	//title: "Inspection Lots:",
	content: [lblMaterialNumber,
	          inputOrderNo,
	          lblMaterialDescription,
	          inputMatDesc,
	          lblCenter,
	          inputCenter,
	          lblLot,
	          inputLot,
	          lblType,
	          inputType,
	          lblVendor,
	          inputVendor]
});

		  
		  var page_detail ;
		    inputMatDesc.setWidth("300px"); 
			inputOrderNo.setWidth("150px"); 
			inputCenter.setWidth("300px"); 
			inputLot.setWidth("300px"); 
			inputType.setWidth("300px"); 
			inputVendor.setWidth("300px"); 
		//  var runningInTablet = g_runningInTablet;
	     //   var runningInDsktop = jQuery.device.is.desktop;
	       // runningInDsktop = false ;
	      //  runningInTablet = false ;
			//alert(runningInDsktop);
			
			if(g_runningOnPhone == false) {
				
				
				containerBoxMatNoOrdNo.addStyleClass("paddingTop");
				containerBoxMaterialDes.addStyleClass("paddingTop");
				containerBoxCenter.addStyleClass("paddingTop");
				containerBoxLot.addStyleClass("paddingTop");
				containerBoxType.addStyleClass("paddingTop");
				containerBoxVendor.addStyleClass("paddingTop");
				
				
				var chatListImg =  new sap.m.Image({
					id : "chatListImg" ,
				    src: "icon/show_characteristics.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    press: function () {
				    	oController.onSelect() ;
				      }				
				
				});
				chatListImg.addStyleClass("matScan");
				
				var charList = new sap.m.List({
					id : "mob21charlist",   
					mode: sap.m.ListMode.SingleSelectMaster,
					//width : "500px",
					includeItemInSelection: true,
					rememberSelections : false,
					select : oController.onSelect,
				         items: {
							path: "/MOB21charCollection",
							template: new sap.m.StandardListItem({
							title: "{charval}",
							//description: "{desc}",
							//info : "{lot}",
							type : sap.m.ListType.Navigation,
							//press : oController.onClick
							})
							}
				}).addStyleClass("paddingTop");
								
				  page_detail = new sap.m.Page({
					 	//title: "{i18n>mob15DetQ1}",
						content: [
						          	DetailPageDetails
						        /* containerBoxMatNoOrdNo,
						         containerBoxMaterialDes,
						         containerBoxCenter,
						         containerBoxLot,
						         containerBoxType,
						         containerBoxVendor,*/
						        // chatListImg
						         //charList
						],
						enableScrolling: true,
						showHeader : false,
						showNavButton: false,
						navButtonTap:function(){  
							//alert("Pressed Back");
							sap.ui.getCore().byId("myApp").to("idMOB21Det");
							
			            }
				 
					}).addStyleClass("footer");
			                    
		 		return page_detail;
						
				
			}
			
			else
				{
		
		  page_detail = new sap.m.Page({
			 	title: "Inspection Details",
                id : "Mob21-ThirdScreen-Mobile-BackNavButton",
				content: [
DetailPageDetails
				         /*oForm,
				         oForm1,
				         oForm2*/
				],
				enableScrolling: false,
				showHeader : true,
				showNavButton: true,
				navButtonTap:function(){  
					g_MobileNavigationId = "Mob21-SecondScreen-Mobile-BackNavButton"; 
					sap.ui.getCore().byId("myApp").to("idMOB21Det");
	            },
	            footer : new sap.m.Bar({
	            	contentRight : [new sap.m.Button({
	        		
	        		    text : "{i18n>MOB21_SHOW_CHAR}",
	        		    icon: "sap-icon://search",
	        		    //style : sap.ui.commons.ButtonStyle.Accept,
	        		    press : function (){
	        		    	sap.ui.getCore().byId("idMOB21Det3scr").getController().showChar();
	        		    	g_MobileNavigationId = "Mob21-FourthScreen-Mobile-BackNavButton"; 
	        				}
	        		    }).addStyleClass("btn")
	            	                
	            	                ]
	            })
		 
			});
	                    
 		return page_detail;
				}
	}

});