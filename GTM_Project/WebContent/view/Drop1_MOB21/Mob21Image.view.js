sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21Image", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21Image
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21Image";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21Image
	*/ 
	createContent : function(oController) {
		var  imageArea = new sap.m.Image("mobImgVie21", {
			id : "mobImgVie21",
			width: (g_runningOnPhone) ? "50em" : "100em"
		    });
	
	var scrollContainer = new sap.m.ScrollContainer("img_ContainerMOB21",{
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
         		app.to("idMOB21DetChar");
     			}
     		
     		else
     			{
     			var app = sap.ui.getCore().byId("splitAppMOB21Det");
         		app.to("idMOB21DetChar");
     			}
     		
     		
     		
     		
                       
        }
	});
}

});