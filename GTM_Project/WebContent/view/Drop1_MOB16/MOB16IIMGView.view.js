sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.MOB16IIMGView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB16IIMGView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.MOB16IIMGView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB16IIMGView
	*/ 
	createContent : function(oController) {
		
		var  imageArea = new sap.m.Image("mob16ImgVie", {
				id : "mob16ImgVie",
				width: (g_runningOnPhone) ? "50em" : "100em"
			    });
		
		var scrollContainer = new sap.m.ScrollContainer("img_ContainerMOB16",{
		      content: imageArea,
		      height: "100%",
		      width: "100%",
		      horizontal: true,
		      vertical: true
		    });
		 if ( g_runningOnPhone == true)
			{
			 return new sap.m.Page({
					title: "Image Viewer",
					content: [
					          scrollContainer
					],
					showNavButton: false,
					enableScrolling: true,
					footer: new sap.m.Bar({
						contentLeft: [
				                       
				          new sap.m.Button({
				            text: "Back",
				            icon: "sap-icon://close-command-field" ,
				            press : function ()
				            {
				        var myapp = sap.ui.getCore().byId("myApp");
				            //myapp.to("idMob16NotiListMaster");
				        		myapp.to("idMOB16NotiTaskDetail");
				            }
				            
				          })]
					
					})
		 		
				});
			 
			
			}
		 
		 else
			 {
 		return new sap.m.Page({
			title: "Image Viewer",
			content: [
			          scrollContainer
			],
			showNavButton: true,
			enableScrolling: true,
            navButtonTap:function(){  

            	var app = sap.ui.getCore().byId("splitAppNotiList");
         		app.to("idMOB16NotiTaskDetail");
                           
            }
 		
		});
			 }
	}

});