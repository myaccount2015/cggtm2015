sap.ui.jsview("com.cg.gtm.view.Drop1_MOB31.Mob31SearchDetailPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mob31documentdisplay.Mob31SearchDetailPage
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB31.Mob31SearchDetailPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mob31documentdisplay.Mob31SearchDetailPage
	*/ 
	createContent : function(oController) {
		

		var list = new sap.m.List({
			id : "idfeedList",
		    mode: sap.m.ListMode.SingleSelectMaster,
		    selectionChange: documentSelected,
		   
   	      items: [
   	        new sap.m.StandardListItem({
   	      
   	        id : "tit1",
			title : "Operating Procedure V1", 
			icon: "sap-icon://pdf-attachment",
			 }),
 
		  new sap.m.StandardListItem({
		    	id : "tit2",
		    	title : "Operating Procedure V2", 
		    	icon: "sap-icon://attachment-photo",
		    	 }),
   	        
   	    /*    
   	     new sap.m.FeedListItem({
    	        //  sender: "Images",
    	          icon: "sap-icon://pdf-attachment",
    	          info: "",
    	          timestamp: "",
    	          text: "Operating Procedure V2",
    	          senderPress : function() {
    	    	   
    	          }, 
    	    	iconPress: function() {
    	 		var app = sap.ui.getCore().byId("splitAppDocumentDisplay");
    	 		app.to("idMOB31ImagePdf");
    	 		
    	 		var img = sap.ui.getCore().byId("mob31ImgVie");
    	 		img.setSrc("images/cah.jpg");
    	    	}
    	          
    	        }),*/
   	      	        
   	      ]
   	    });

		
		
 		return new sap.m.Page({
			title: "",
			content: [
list
			]
		});
	}

});
		
