sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.Mob21PlantList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob21PlantList
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.Mob21PlantList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob21PlantList
	*/ 
	createContent : function(oController) {

		// create the data
				
				
				var data = [];
				
				
				data = {"names":
					[
						 {"title":"Holborn Plant"},
						 {"title":"Ashford Plant"},
						 {"title":"Newton Aycliffe"},
						 {"title":"Central Warehouse"},
						 
						 {"title":"North Pole"},
					
						 {"title":"Stoke Gifford"},
					
						 {"title":"Swansea"},
						
					
						 {"title":"Doncaster"},
					
						 {"title":"Craigentinny-Edingburgh"},
						 {"title":"Bounds Green - London"},
						 {"title":"Ferme Park-London"},
						 {"title":"Clay Hills-Aberdeen"},
						 {"title":"Neville Hill-Leeds"},
						 {"title":"Heaton-Newcastle"},
						 {"title":"Polmadie-Glasgow"},
						 {"title":"Inverness"},
					
						
						 ]};
				//var oJason1 = new sap.ui.model.json.JSONModel(item_list);
				// create a Model with this data
				var model = new sap.ui.model.json.JSONModel();
				model.setData(data);
				
			
				
				// create a List control
				    
				/*var list = new sap.m.List({
					
				      mode: sap.m.ListMode.SingleSelectMaster,
				      includeItemInSelection: true,
				      selectionChange : oController.plantSel,
				      items: {
				        path: "/names",
				        template: new sap.m.StandardListItem({
				          title: "{title}",
				           iconDensityAware: false,
				          iconInset: false ,
				         
				        })
				      }
				 });*/
				
			// list.setModel(model);
			 //list.addStyleClass("List");
			 
			 var listPlants = new sap.m.List({
				 id : "listPlantsMOb21",
			      mode: sap.m.ListMode.SingleSelectMaster,
			      includeItemInSelection: true,
			      selectionChange : oController.onPlantSelMOB21,
			      items: {
			        path: "/ModelPlant",
			        template: new sap.m.StandardListItem({
			          title: "{plantName}",
			          description : "{plantId}",
			           iconDensityAware: false,
			          iconInset: false
			         
			        })
			      }
			 }).addStyleClass("padding-bottom");
			 
				var labeldummy1 = new sap.m.Label({
					text: "{i18n>DumyTxt}"
				});
				labeldummy1.addStyleClass("HideLabel");
				var labeldummy2 = new sap.m.Label({
					text: "{i18n>DumyTxt}"
				});
				labeldummy2.addStyleClass("HideLabel");
				var labeldummy3 = new sap.m.Label({
					text: "{i18n>DumyTxt}"
				});
				labeldummy3.addStyleClass("HideLabel");
				var labeldummy4 = new sap.m.Label({
					text: "{i18n>DumyTxt}"
				});
				
				var flexBox = new sap.m.FlexBox({ 
		
					items: [ 
					    	listPlants,labeldummy1,labeldummy2,labeldummy3      

					         ],
					direction:"Column",
					justifyContent:"Start",//Contents would be placed in the begin
					alignItems:"Start"
						
				    });
				
				
			
			 
			 var btnBack =  new sap.m.Button({
		         
		         type: sap.m.ButtonType.Back,
		       //  icon : "sap-icon://nav-back",
		    
		         tap : function() {
		                   
		        	 /*
		        		ostListItem1.setDescription('');
		        		//ostListItem1.setBackground("#1A3444");
		        	    ostListItem1.setIcon("");
		        	    ostListItem2.setDescription('');
		        		//ostListItem1.setBackground("#1A3444");
		        	    ostListItem2.setIcon("");
		        	    ostListItem3.setDescription('');
		        		//ostListItem1.setBackground("#1A3444");
		        	    ostListItem3.setIcon("");
		        	    ostListItem4.setDescription('');
		        		//ostListItem1.setBackground("#1A3444");
		        	    ostListItem4.setIcon("");
		        	    bu1.setVisible(false);
		           	    bu2.setVisible(false);
		           	    back_view_lab.setVisible(false);*/
		           	    
		        	
		          	 
		          	 if( g_runningOnPhone == true)
		          		 {
		          		 var app = sap.ui.getCore().byId("myApp");  
			          	 app.to("idMOB21Mas");
		          		 }
		          	 else
		          		 {
		          		 var app = sap.ui.getCore().byId("splitAppInsCreate1");  
			          	 app.toMaster("idMOB21Mas");
		          		 }
		          	 
		          	 
		          			        	    //oSplitApp.toMaster(masterpage);
		         }
			 
		});
			 
			 
			 if( g_runningOnPhone == true)
      		 {
				 return new sap.m.Page({
						title: "Plant Location",
						 headerContent :[btnBack],
						content: [

						          //flexBox
						          listPlants,labeldummy1,labeldummy2,labeldummy3   

						],
						footer: new sap.m.Bar({
					                       
						})
					
					});
      		 }
      	 else
      		 {
      		return new sap.m.Page({
				title: "Plant Location",
				 headerContent :[btnBack],
				content: [

				          //flexBox
				          listPlants,labeldummy1,labeldummy2,labeldummy3   

				],
				footer: new sap.m.Bar({
			                       
				}).addStyleClass("footer"),
			
			});
      		 }
			 
			 
			 
			
		 		
		 		
		 		
		 		
		 		
		 		
			}

});