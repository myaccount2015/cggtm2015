sap.ui.jsview("com.cg.gtm.view.Mob18WBS_Items", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob18WBS_Items
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Mob18WBS_Items";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob18WBS_Items
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		//Define some sample data 
		/* aData1 = 
			[{Material: "1134", Description: "Desc",Quantity: "1" },
			{Material: "1135", Description: "Desc",Quantity: "2"},
			{Material: "1136", Description: "Desc",Quantity: "3" },
			{Material: "1137", Description: "Desc",Quantity: "4" },
			{Material: "1138", Description: "Desc",Quantity: "5"},
			{Material: "1139", Description: "Desc",Quantity: "6" },
			
			];
		*/
		//Table Creation
		var table = new sap.m.Table("idtable2",{
			
		       mode : sap.m.ListMode.SingleSelect,
		       includeItemInSelection: true,
			  // select : oController.matSel,
		       select : oController.matSel,
			   itemPress: oController.matSel,
		       
          columns : [
                     new sap.m.Column({
					       	
					        header : new sap.m.Label({text : " "}) ,
					     
					        }),
                     new sap.m.Column({
									       	
                                            header : new sap.m.Label({text : "Material"}) ,
                                         
                                            }),
                           new sap.m.Column({
                                            header : new sap.m.Label({ text : "Description" }) }),
                           new sap.m.Column({
                                             header : new sap.m.Label({ text : "Quantity" }) })
                          
				                              
          ],
         /* select : function(oEvent){
          
          	
  			showidMob18second_WBS();
  		//var selectedItem =	table.getSelectedItem().getValue();
  			var table = sap.ui.getCore().byId("idtable");
  			//var select = oEvent.getSource().getBindingContext();
  			var row = table.getSelectedItem().getIdForLabel();
  			alert(row);
  			// selectedItem = table.getSelectedItem().getIdForLabel();
  			
  			
  			//oController.onSelectMOb18data();
  			 
  				var table = document.getElementById("idtable");
       		var indices = table.getSelectedIndices();
       		if(indices.length > 0){
       			var j=0;
       			for(var i=0; i<indices.length; i++){
       				aData1.splice(indices[i]-j,1);
       			}
       			
       			oModel2.setData({modelData: aData1});
       			table.setModel(oModel2);
       			table.bindRows("/modelData");
       			alert("Data is removed from the Table");
  			
  			  
  		}*/
          
     });
		
	

	
	
	/*	//Create a model and bind the table rows to this model
		var oModel2 = new sap.ui.model.json.JSONModel();
		
		oModel2.setData({modelData: aData1});
		table.setModel(oModel2);
		*/
		
		table.bindItems("/modelData", 
				
		 new sap.m.ColumnListItem({
		
		       
	        cells : [ 
		new sap.m.Image({
			src : "img/delete_icon.gif",
			press : function(){
				oController.deleteRow();
			//alert("image is being clicked");
			
		/*alert(this.getParent());
		
		var index = id_clicked.split("Element sap.m.ColmnListItem#_item38-idtable-");
			
				alert(index[0]);
				alert(index[1]);*/
		
		}
		}),
	                  new sap.m.Text({
	            text : "{Material}"
	        }),
	        new sap.m.Text({
	            text : "{Description}"
	        }),
	        new sap.m.Text({
	            text : "{Quantity}",
	        })
	       
	        ],
		
	    }));
 		return new sap.m.Page({
		//	title: "Title",
			content: [
			table
			]
		});
	}

});