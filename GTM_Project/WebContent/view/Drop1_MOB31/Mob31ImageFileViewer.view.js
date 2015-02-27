sap.ui.jsview("com.cg.gtm.view.Drop1_MOB31.Mob31ImageFileViewer", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob31documentdisplay.Mob31ImageFileViewer
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB31.Mob31ImageFileViewer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob31documentdisplay.Mob31ImageFileViewer
	*/ 
	createContent : function(oController) {
		
		var  imageArea = new sap.m.Image("mob31ImgVie", {
				id : "mob31ImgVie",
				width: (g_runningOnPhone) ? "50em" : "100em"
			    });
		
		var scrollContainer = new sap.m.ScrollContainer("img_Container",{
		      content: imageArea,
		      height: "100%",
		      width: "100%",
		      horizontal: true,
		      vertical: true
		    });
	
 		return new sap.m.Page({
			title: "Document Viewer",
			content: [
			          scrollContainer
			],
			showNavButton: true,
			enableScrolling: true,
            navButtonTap:function(){  
            	var desele = sap.ui.getCore().byId("idfeedList"); 

            	desele.setSelectedItem(sap.ui.getCore().byId("tit2"),false);

                       var app = sap.ui.getCore().byId("splitAppDocumentDisplay");  
                           app.to("idMOB31Detail");  
                           
            }
		});
	}

});