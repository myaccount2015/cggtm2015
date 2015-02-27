sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.Mob16NotifiListNodeDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob16NotifiListNodeDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.Mob16NotifiListNodeDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob16NotifiListNodeDetail
	*/ 
	//Done
	createContent : function(oController) {
		var lblDummy1 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy1.addStyleClass("HideLabelAndHeight");
		
		var lblDummy2 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy2.addStyleClass("HideLabelAndHeight");
		
		var lblDummy3 = new sap.m.Label({
			text: "Dummy"
		});
		
		lblDummy3.addStyleClass("HideLabelAndHeight");
		var textDesc = new sap.m.Text({
		      text: "Description",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("paddingTop");
		
		var inputDesc = new sap.m.Text({
			  id : "Description1",
		     // text: "Vendor Incident",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		/*var text4 = new sap.m.Text({
		      text: "Type",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var text5 = new sap.m.Text({
		      id : "type1",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		var text6 = new sap.m.Text({
		      text: "Material Number",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var text7 = new sap.m.Text({
		    id :"matnum1",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		*/
		var textTaskSeq = new sap.m.Text({
		      text: "Task Sequence",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var inputTask = new sap.m.Text({
		     id  : "task",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("dataText");
		
		
		///////////////////////////////////////
        //Start with Footer
        var oFooter = new sap.m.Bar({
             enableFlexBox : true,               
            // contentLeft : new sap.m.Text("Holla",{text:"SABox"}),
             //contentMiddle : new sap.m.Button("Holla2",{text:"Click Me",type:sap.m.ButtonType.Accept}),
             contentRight : new sap.m.Text("Holla3",{text:"CopyRight@SA"}),
        }).addStyleClass("oFooter");
        ///////////////////////////////////////////////////////////
		
		
		 var oGridForm = new sap.ui.layout.Grid({
	            hSpacing: 1,
	            vSpacing: 0,   
	            defaultSpan : "L3 M3 S12",
	            content: [
	                      //	text1,
	                      	
	                      	
	                      	textDesc,
	                      	inputDesc,
	                      	lblDummy1,
	                      //	text4,
	                      //	text5,
	                      //	lblDummy2,
	                      //	text6,
	                      //	text7,
	                      	lblDummy3,
	                      	textTaskSeq,
	                      	inputTask,
	                      
	                      	
	                      	
	                    
	                ]
			  });
			 
			 
 		return new sap.m.Page({
			title: "{i18n>MOB16_NotiDetHeader}",
			content: [
			          oGridForm,
			        //  oFooter
			
			]/*,
			enableScrolling: false,
			showNavButton: false,
			showFooter: true,
			
			footer: new sap.m.Bar({
		        contentRight: [
		          new sap.m.Button({
		            text: "Back",
		            icon: "sap-icon://sys-back" ,
		            press : function ()
		            {
		            var app = sap.ui.getCore().byId("myApp");
		            app.to("idGridSubMenuQM");
		            }
		            
		          }),
		          new sap.m.Button({
		            text: "Save",
		            icon: "sap-icon://save"
		          }),
		          new sap.m.Button({
			            text: "Complete",
			            icon: "sap-icon://complete"
			          })
		        ]
			}).addStyleClass("footer")*/
          //  footer : 
            	/*footer: new sap.m.Bar({
            	    contentRight: [
            	      new sap.m.Button({
            	        text: "{i18n>MOB_22_SAVE}",
            	        icon: "sap-icon://save",
            	        press : function () {

            	    		//msgDialog.open();
            	        }
            	      })
            	      ]
            	})*/
		});
	}

});