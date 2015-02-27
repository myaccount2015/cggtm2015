sap.ui.jsview("com.cg.gtm.view.Drop3_MOB08.MOB08DetailThree", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf drop3mockups.MOB08.MOB08DetailThree
     */
    getControllerName: function() {
        return "com.cg.gtm.view.Drop3_MOB08.MOB08DetailThree";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf drop3mockups.MOB08.MOB08DetailThree
     */
    createContent: function(oController) {
    	
    	g_MOB08ClassificationField="";
    	 var MOB08CharactTable = new sap.m.Table("MOB08CharactTable", {
				
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: true,
		       columns : [
		                  
		            new sap.m.Column({width:"",
		        	   	header : new sap.m.Label({text : "Characteristics Description",wrapping: true }),
					}),
					new sap.m.Column({width:"",visible: false,
		        	   	header : new sap.m.Label({text : "Characteristics",wrapping: true }),
					}),
					new sap.m.Column({width:"",
                        header : new sap.m.Label({text : "Value", wrapping: true}),
		       		}),
		       ]
		 });
  	/*  tblSerial.bindItems("/", function(sId, oContext) {
  		  var oItem = new sap.m.ColumnListItem({
  			  cells : [
  			    new sap.m.Text({
  			  text : "{CharactDesc}"
  			  }), new sap.m.Text({
  			  text : "{sID}"
  			  }), new sap.m.Text({
  			  text : "{sDate}"
  			  }), new sap.m.Text({
  			  text : "{desc}"
  			  }), new sap.m.Text({
  			  text : "{typeSystemVersion}"
  			  }), new sap.m.Text({
  			  text : "{responsibleAgency}"
  			  }) ]
  			  });
  			  return oItem;
  			  });*/
        return new sap.m.Page({
            title: "{i18n>MOB08DetailThreeTitle}",
            showNavButton: true,
            enableScrolling: true,
            navButtonPress: oController.handleNavButtonPress,
            content: [
				new sap.m.ObjectHeader("MOB08_AssetObjHeadClass",{
					intro: "800001-811001-CABN-D",
					title: "Tinted Windscreen",
					number: "3002605",
					attributes: [
						new sap.m.ObjectAttribute({
							title: "{i18n>MOB08PositionObjectAttributeTitle}",
							text: "2"
						})
					]
				}),
				new sap.m.IconTabBar({
                    expandable: false,
                    items: [
                        new sap.m.IconTabFilter({
                            text: "Detail",
                            icon: "sap-icon://request",
                            content: [MOB08CharactTable/*
								new sap.ui.layout.form.SimpleForm({
									id: "MOB08FormThree",
								    layout: "ResponsiveGridLayout",
								    editable: true,
								    emptySpanL: 6,
				                    emptySpanM: 6,
				                    breakpointM: 1000,
								    content: [
								        new sap.m.Label({
								            text: "{i18n>MOB08VolatageText}",
								            design: "Bold"
								        }),
								        new sap.m.Input({
								        	id : "MOB08VOLTAGE"
								        	
								        }),
								        new sap.m.Label({
								            text: "{i18n>MOB08OverallLengthText}",
								            design: "Bold"
								        }),
								        new sap.m.Input({
								        	type: "Number",
								        	id : "MOB08LEN"
								        }),
								        new sap.m.Label({
								            text: "{i18n>MOB08MountingPositionText}",
								            design: "Bold"
								        }),
								        new sap.m.Input({
								        	showValueHelp: true,
								        	id : "MOB08POS"
								        })
								    ]
								})
							*/]
                        })
                    ]
				})
            ],
            footer: new sap.m.Toolbar()
        });
    }
});