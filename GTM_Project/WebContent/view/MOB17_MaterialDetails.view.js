sap.ui.jsview("com.cg.gtm.view.MOB17_MaterialDetails", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB17_MaterialDetails
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.MOB17_MaterialDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB17_MaterialDetails
	*/ 
	createContent : function(oController) {
		this.setHeight("100%");
		
		var lblMovType = new sap.m.Label("lblMovType", {
		      text: "{i18n>MOB17_StoToSto}",design: sap.m.LabelDesign.Bold,

		      width : "270px"
		    }).addStyleClass("topPadding");
		
		var lblMatNo = new sap.m.Label({
		      text: "{i18n>MOB17_MatNo}",design: sap.m.LabelDesign.Bold,

		      width : "270px"
		    }).addStyleClass("topPadding");
		
		var lblMatNoVal = new sap.m.Label("lblMatNoVal", {
		      text: "",
		      width : "270px"
		    });
		
		var lblMatDesc = new sap.m.Label({
		      text: "{i18n>MOB17_MatDesc}",design: sap.m.LabelDesign.Bold,

		      width : "270px"
		    }).addStyleClass("topPadding");
		
		var lblMatDescVal = new sap.m.Label("lblMatDescVal", {
		      text: "",
		      width : "270px"
		    });
		
		var lblCust = new sap.m.Label({
		      text: "{i18n>MOB17_Cust}",design: sap.m.LabelDesign.Bold,

		      width : "270px"
		    }).addStyleClass("topPadding");
		
		var lblCustVal = new sap.m.Text("lblCustVal", {
		      text: "",
		      wrapping: true,
		      width : "270px"
		    });
		
		var lblSerial = new sap.m.Label("lblSerial", {
		      text: "{i18n>MOB17_Ser}",design: sap.m.LabelDesign.Bold,

		      width : "270px"
		    }).addStyleClass("topPadding");
		
		 var inputSerial  = new sap.m.Input("inputSerial",{
			 width:"270px",
				type :sap.m.InputType.Tel,
			 placeholder: '{i18n>MOB17_TypeSer}',
			  maxLength : 13,
			   liveChange : function(){
			  		    
			  		},
			  layoutData : new sap.ui.layout.GridData({
		         span: "L3 M3 S12",
		         linebreakL: true,
					linebreakM: true,
					linebreakS: true
		 })
		 });
		 
		 var imgShowSerials = new sap.m.Image("imgShowSerials", {
			    src: "img/ico_showimage.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			        linebreakL: true,
					linebreakM: true,
					linebreakS: true
			    }),
			  press : oController.showSerialLst
			  }).addStyleClass("paddingLeft");
		 
		 
		 var tblSerial = new sap.m.Table("tblSerial", {
				
		       mode : sap.m.ListMode.SingleSelectMaster,
		       includeItemInSelection: true,
		       columns : [new sap.m.Column({
                                    header : new sap.m.Label({text : "{i18n>MOB17_SerNos}", visible: false}),
		       						}),
                          new sap.m.Column({
                                        header : new sap.m.Label({text : "{i18n>MOB17_Del}", visible: false})
                           })
		       ]
		 }).addStyleClass("paddingBottom");
		 
		 /*var aData1 = [
		   			{Serial: "98798989"},
		   			{Serial: "65465689"},
		   			{Serial: "44654645"},
		   			{Serial: "65455766"},
		   			{Serial: "87876777"},
		   			{Serial: "87578655"},
		   			
		   			];
		 
		 
		 var oModel2 = new sap.ui.model.json.JSONModel();
			
			oModel2.setData({modelData: aData1});
			tblSerial.setModel(oModel2);*/
			
			tblSerial.bindItems("/modelData", new sap.m.ColumnListItem({
				
			       
		        cells : [ 
		                  new sap.m.Text({
		            text : "{Serial}"
		        }),
		        new sap.ui.core.Icon("IconDelSer", { 
		        	src : "sap-icon://sys-cancel",
		        	color: "#CC0000",
		        	size: "30px",
		        	press: oController.deleteSerial
		        })
		       
		        ],
			
		    }));
		
		 var popoverMOB17Serial = new sap.m.Popover("popoverMOB17Serial", {
	            title: "{i18n>MOB17_SerList}", 
	            contentWidth: "300px",
	            contentHeight: "400px",
	            //verticalScrolling: true,
	            placement: sap.m.PlacementType.Auto, 
	            footer: new sap.m.Bar({
	                contentRight: [new sap.m.Button({
	                    text: 'Close', 
	                    press: function(){
	                    	sap.ui.getCore().byId("popoverMOB17Serial").close();
	                    }
	                })]
	            }), 
	            content: tblSerial 
	        });
		 
		 popoverMOB17Serial.setVerticalScrolling(true);
		
		 var lblBatch = new sap.m.Label("lblBatch", {
			 width : "270px",design: sap.m.LabelDesign.Bold,

		      text: "{i18n>MOB17_Bat}"
		    }).addStyleClass("topPadding");
		 
		 /*var lblBatchVal = new sap.m.Label("lblBatchVal", {
			 width : "270px",
		      text: "376587686"
		    });*/
		 
		 var inputBatch  = new sap.m.Input("inputBatch",{
			 width:"270px",
				//type :sap.m.InputType.Tel,
			// placeholder: '{i18n>MOB17_TypeBatNo}',
			  maxLength : 13,
			   change : oController.updateBatch,
			  layoutData : new sap.ui.layout.GridData({
		         span: "L3 M3 S12",
		         linebreakL: true,
					linebreakM: true,
					linebreakS: true
		 })
		 });
		 
		 var lblUOM = new sap.m.Label("lblUOM", {
			 width : "270px",design: sap.m.LabelDesign.Bold,

		      text: "{i18n>MOB17_UOM}"
		    }).addStyleClass("topPadding");
		 
		 var lblUOMVal = new sap.m.Label("lblUOMVal", {
			 width : "270px",
		      text: "EA"
		    });
		 
		 /*var lblQtyIcon = new sap.ui.core.Icon("lblQtyIcon", {
			 height: "1px"
		 });*/
		 
		 var lblQty = new sap.m.Label("lblQty", {
			 width : "420px",design: sap.m.LabelDesign.Bold,

		      text: "{i18n>MOB17_Qty}"
		    }).addStyleClass("topPadding");
		 
		 var containerQty = new sap.m.FlexBox({
				items: [
				        //lblQtyIcon,
				        lblQty
				        ],
				alignItems:"Start"
			});
		 
		 var inputQty = new sap.m.Input("inputQty",{
			 width:"70px",
				type :sap.m.InputType.Tel,
			  maxLength : 13,
			   liveChange : oController.onQtyChange,
			  layoutData : new sap.ui.layout.GridData({
		         span: "L3 M3 S12",
		         linebreakL: true,
					linebreakM: true,
					linebreakS: true
		 })
		 });
		 
		 var lblMatDocNo = new sap.m.Label("lblMatDocNo", {
			 width : "420px",design: sap.m.LabelDesign.Bold,

		      text: "{i18n>MOB17_DocNo}"
		    }).addStyleClass("topPadding");
		 
		 var lblMatDocVal = new sap.m.Label("lblMatDocVal", {
			 width : "270px",
		      text: "6876735727"
		    });
		 
		 var lblErr = new sap.m.Text("lblErr", {
			 width : "420px",design: sap.m.LabelDesign.Bold,

		      text: "{i18n>MOB17_ErrMsg}"
		    }).addStyleClass("topPadding");
		 
		 var lblErrVal = new sap.m.Text("lblErrVal", {
			 width : "420px",
		      text: "{i18n>MOB17_ErrMsg}"
		    }).addStyleClass("text_er");
		
		 
		/*var TheScrollContainer1 = new sap.m.ScrollContainer({
            horizontal : false,
            vertical : false,
            content : [lblMovType,
                       lblMatNo,
                       lblMatNoVal,
                       lblMatDesc,
                       lblMatDescVal,
                       lblCust,
                       lblCustVal,
                       lblSerial,
                       inputSerial,
                       imgShowSerials,
                       lblBatch,
                       inputBatch,
                       lblUOM,
                       lblUOMVal,
                       containerQty,
                       inputQty,
                       lblMatDocNo,
                       lblMatDocVal,
                       lblErr,
                       lblErrVal]
        });
		
		TheScrollContainer1.addStyleClass("ContainerPadAll");*/
		 
		 var containerSerial = new sap.m.FlexBox({
				items: [
	                       inputSerial,
	                       imgShowSerials],
			direction:"Row",
			justifyContent:"Start",
			alignItems:"Start",
			});
					
			var TheScrollContainer1 = new sap.m.FlexBox({
				items: [lblMovType,
	                       lblMatNo,
	                       lblMatNoVal,
	                       lblMatDesc,
	                       lblMatDescVal,
	                       lblCust,
	                       lblCustVal,
	                       lblSerial,
	                       containerSerial,
	                       lblBatch,
	                       inputBatch,
	                       lblUOM,
	                       lblUOMVal,
	                       containerQty,
	                       inputQty,
	                       lblMatDocNo,
	                       lblMatDocVal,
	                       lblErr,
	                       lblErrVal],
			direction:"Column",
			justifyContent:"Center",
			alignItems:"Start",
			});
			
			TheScrollContainer1.addStyleClass("ContainerPadAll");
			
			
		
		var btnBack = new sap.m.Button({
            text: "Back",
            icon: "sap-icon://sys-back" ,
            press : function ()
            {
            	var myApp = sap.ui.getCore().byId("myApp");
        		myApp.to("idMaterialList");
            
            }
            
          });
		
		var btnScanMat = new sap.m.Button({
			 id : "btnScanMaterial1",
            text: "{i18n>MOB17_ScanMat}",
            icon: "img/ico_rect_scanbarcode.png",
            //type: sap.m.ButtonType.Accept,
            layoutData: new sap.m.FlexItemData({growFactor: 1}),
            press: oController.scanMaterial
          });
		
		var page = new sap.m.Page({
 			id : "Mob17_MatDetail",
			title: "{i18n>MOB17_MatDet}",
			showHeader: true,
			showNavButton : false,
			navButtonTap:function(){ 
				  g_MobileNavigationId = "Mob17_Matlist";
					var myApp = sap.ui.getCore().byId("myApp");
	        		myApp.to("idMaterialList");
	        },
			content: [
			          TheScrollContainer1
			]
		});
 		
 		if(g_runningOnPhone == true) {
			var bar = new sap.m.Bar({
		        contentRight: [
		                       btnBack,
		                       btnScanMat
		                       ]
			});
			
			page.setShowFooter(true);
			page.setShowHeader(true);
			page.setFooter(bar); 
			//page.setShowNavButton(true);
		}
 		
 		return page;
	}

});