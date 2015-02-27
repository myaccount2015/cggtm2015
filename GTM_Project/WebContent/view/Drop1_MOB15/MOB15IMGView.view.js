sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.MOB15IMGView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB16IIMGView
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.MOB15IMGView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB16IIMGView
	*/ 
	createContent : function(oController) {
		
		var  imageArea = new sap.m.Image("mob16ImgVieQ1", {
				id : "mob16ImgVie",
				width: (g_runningOnPhone) ? "50em" : "100em"
			    });
		
		var scrollContainer = new sap.m.ScrollContainer("img_ContainerMOB16Q1",{
		      content: imageArea,
		      height: "100%",
		      width: "100%",
		      horizontal: true,
		      vertical: true
		    });
	
 		return new sap.m.Page({
			title: "Image Viewer",
			content: [
			          scrollContainer
			],
			showNavButton: true,
			enableScrolling: true,
            navButtonTap:function(){  
            	if( g_runningOnPhone == true)
      		   {
      			var app = sap.ui.getCore().byId("myApp"); 
      			app.to("idMob15DetailsQ1");
      		   }
      			else
      				{
            	var app = sap.ui.getCore().byId("splitApp");
         		app.to("idMob15DetailsQ1");
      				}
                           
            }
		});
	}

});