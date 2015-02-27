sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ11", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob15DetailsQ11
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.Mob15DetailsQ11";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob15DetailsQ11
	*/ 
	//done
	
	createContent : function(oController) {
		
		
		var oMD15DataOrdNum = {"MD15CollectionORDNUM":
			[
				 {"key":"ORD1","detail":"1543300001","matnum":"0000000001","DOJ":"11/03/2002"},
				 {"key":"ORD2","detail":"8365870002","matnum":"0000000002","DOJ":"04/03/2006"},
				 {"key":"ORD3","detail":"3450000603","matnum":"0000000003","DOJ":"08/10/2009"},
				 {"key":"ORD4","detail":"6234500004","matnum":"0000000004","DOJ":"11/03/2010"},
				 {"key":"ORD5","detail":"9651238765","matnum":"0000000005","DOJ":"11/03/2002"},
				 {"key":"ORD6","detail":"0112378436","matnum":"0000000006","DOJ":"21/08/2012"}
				 
				 ]};
		
		var oJasonOrdNum = new sap.ui.model.json.JSONModel(oMD15DataOrdNum);
		
		var inputSalesOrderNo = new sap.m.Input("inputOrderNo1", {
		      type: sap.m.InputType.Text,
		      placeholder: 'Enter Sales Order No',
		     // showSuggestion: true,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		  }),
		     /* suggestionItems: {
		        path: "/MD15CollectionORDNUM",
		        template: new sap.ui.core.Item({
		          text: "{detail}"
		        })
		      },
		      showValueHelp: true,
		      valueHelpRequest: function (evt) {
		    	  oController.openOrderSearch();
		      
		      }*/
		  });
		
		inputSalesOrderNo.setModel(oJasonOrdNum);
		
		
		
		 var orderNoDialog = new sap.m.SelectDialog("orderNoDialog1", {
			 title: "Order Number",
		      items: {
		    	  title : "Select Order Number",
		        path: "/MD15CollectionORDNUM",
		        template: new sap.m.StandardListItem({
		          //icon: "{ProductPicUrl}",
		          iconDensityAware: false,
		          iconInset: false,
		          title: "{detail}",
		          description: "{key}"
		        })
		      },
		      search: function (evt) {
		        var sValue = evt.getParameter("value");
		        var oFilter = new sap.ui.model.Filter(
		          "detail",
		          sap.ui.model.FilterOperator.Contains, sValue
		        );
		        evt.getSource().getBinding("items").filter([oFilter]);
		      },
		      confirm: oController.handleConfirm,
		      cancel: oController.handleClose
		    });
		  
		  orderNoDialog.setModel(oJasonOrdNum);
		  
		  var selectContent = new sap.m.Select({
		      items: {
		    	name : "{i18n>Order_Number}",  
		        path: "/MD15CollectionORDNUM",
		        sorter: new sap.ui.model.Sorter("detail", false),
		        template: new sap.ui.core.Item({
		          key: "{key}",
		          text: "{detail}"
		        })
		      } ,
		      
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		
		selectContent.setModel(oJasonOrdNum);
		  
		  
		
		var oMD15DataACT = {"MD15CollectionACT":
			[
				 {"key":"CD1","detail":"CODE-1","matnum":"0000000001","DOJ":"11/03/2002"},
				 {"key":"CD2","detail":"CODE-2","matnum":"0000000002","DOJ":"04/03/2006"},
				 {"key":"CD3","detail":"CODE-3","matnum":"0000000003","DOJ":"08/10/2009"},
				 {"key":"CD4","detail":"CODE-4","matnum":"0000000004","DOJ":"11/03/2010"},
				 {"key":"CD5","detail":"CODE-5","matnum":"0000000005","DOJ":"11/03/2002"},
				 {"key":"CD6","detail":"CODE6","matnum":"0000000006","DOJ":"21/08/2012"}
				 ]};
		
		var oJasonAct = new sap.ui.model.json.JSONModel(oMD15DataACT);
		
		oMD15DataMATNR = {"MD15CollectionMATNR":
			[
		{"title":"1/2 TORQUE WRENCH","date":"01/10/2014","matnum":"1175","plant":"UKMF", "manufacturer":"Panel Engineering Inc", "modelNo":"123-tei-thy-1697", "supplier":"PartsOnDemand Ltd", "supplierPartNo":"POD-MP-113243"},
		{"title":"BAGGAGE RACKS (LARGE ITEMS)","date":"02/10/2014","matnum":"1147","plant":"UKMF", "manufacturer":"Panel Bar Engineering Inc", "modelNo":"183-toi-tmt-1634", "supplier":"Panel Bar Ltd", "supplierPartNo":"ZRP-MP-195643"},
		{"title":"BODY ASSEMBLY","date":"03/10/2014","matnum":"1133","plant":"UKMF", "manufacturer":"Screw Works Inc", "modelNo":"723-dui-tms-4697", "supplier":"Body Assembly Ltd", "supplierPartNo":"TMT-YP-353211"},
		{"title":"BOGIE MANUFACTURING","date":"04/10/2014","matnum":"1131","plant":"UKMF", "manufacturer":"Bogie Tools Inc", "modelNo":"923-vai-tor-3697", "supplier":"Bogie Ltd", "supplierPartNo":"ABC-XY-197240"},
		{"title":"BOLTS","date":"05/10/2014","matnum":"1181","plant":"UKMF", "manufacturer":"Bolts Company Inc", "modelNo":"453-tim-tht-5697", "supplier":"Bolts spares Ltd", "supplierPartNo":"XYQ-MR-213563"},
		{"title":"BRAKE ASSEMBLY KIT","date":"06/10/2014","matnum":"1186","plant":"UKMF", "manufacturer":"Break Assembly Inc", "modelNo":"624-qui-thk-961697", "supplier":"Break Parts Ltd", "supplierPartNo":"UTR-MR-573224"}
				 ]};
		
		
		
		var oJasonMatnr = new sap.ui.model.json.JSONModel(oMD15DataMATNR, "MD15CollectionMATNRModel");
		
		var oModel = sap.ui.getCore().getModel();
		
		
		//oModel.getProperty('/id')
		
		
		var lblMatNo =  new sap.m.Text({
             text: "{i18n>Matnum}",
             layoutData : new sap.ui.layout.GridData({
                     span: "L3 M3 S12",
                     linebreakL: true,
         			linebreakM: true,
         			linebreakS: true
             })
     });
     
    var lblQty = new sap.m.Text({
    	 text: "{i18n>quantity}",
         layoutData : new sap.ui.layout.GridData({
                 span: "L3 M3 S12"
         })
    });
    
    var lblOrdNo =  new sap.m.Text({
    	 text: "{i18n>salesorderno}",
        layoutData : new sap.ui.layout.GridData({
                span: "L3 M3 S12",
                linebreakL: true,
    			linebreakM: true,
    			linebreakS: true
        })
});


var lblDesc =  new sap.m.Text({
	 text: "{i18n>descript}",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});


var lblDelNo =  new sap.m.Text({
	 text: "{i18n>delivryno}",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 
  var inputDelNo  = new sap.m.Input("delnoq11",{
	  
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
 })
 
 });
  
  
var lblAdnInfo =  new sap.m.Text({
	 text: "{i18n>additionalInfo}",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 
  var inputAddInfo  = new sap.m.Input("adninfoq11",{
	  
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
			
 }),
 width:"500px"
 
 });
  
  
   inputMatnr = new sap.m.Input("inputMatnr1", {
		type :sap.m.InputType.Tel,
      placeholder: 'Enter Material Number',
     // showSuggestion: true,
      change : oController.checkinputMatnrMOB15Q11,
      liveChange : oController.checkinputMatnr_Q11,
      layoutData : new sap.ui.layout.GridData({
          span: "L3 M3 S12",
          linebreakL: true,
 			linebreakM: true,
 			linebreakS: true
  }),
      suggestionItems: {
        path: "/MD15CollectionMATNR",
        template: new sap.ui.core.Item({
          text: "{matnum}"
        })
      },
      showValueHelp: true,
      valueHelpRequest: function (evt) {
    	  oController.openMatSearch();
      
      }
  });
   
   
   
   
   
  inputMatnr.setModel(oJasonMatnr);
  inputMatnr.bindElement("/MD15CollectionMATNRModel");
  
 
var inputQty = new sap.m.Input("ipQty1", {

	type :sap.m.InputType.Tel,
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         
 })
 
	  
 });


var inputDesc  = new sap.m.Input("descq11",{
	maxLength : 40 ,
	liveChange : oController.checkipdesc_Q11,
	placeholder: "Add Description (max 40 Char.) ",
	  layoutData : new sap.ui.layout.GridData({
       span: "L6 M3 S12",
       linebreakL: true,
			linebreakM: true,
			linebreakS: true
}),
width: "26em"

});

var cmraDialog = new sap.m.Dialog({
	 title: "Add a Photo",
   content: new sap.m.Text({
    id : "po1",		
    text : "Do you want to take a new photo or find a saved photo"
   }
   	),
   leftButton: new sap.m.Button({
       text: "New Photo",
     press: function () {
   	  cmraDialog.close();
   	  
   	  pictureSource=navigator.camera.PictureSourceType;
         destinationType=navigator.camera.DestinationType;
   	// Take picture using device camera and retrieve image as base64-encoded string
   	  console.log("now firing ca,era")
         navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
           destinationType: destinationType.FILE_URI  , 
           saveToPhotoAlbum: false});
     }
   }),
   rightButton: new sap.m.Button({
       text: "Save Photo",
     press: function () {
   	  cmraDialog.close();
     }
   })
 });

function onPhotoDataSuccess(imageData) {
	 console.log("now in data success");
  movePic(imageData);
};


function onFail() {
	    
	  console.log("in on fail ");
	  };

function movePic(file){ 
  window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
} ;

//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry){ 
  var d = new Date();
  var n = d.getTime();
  pos =  0;
 // window.resolveLocalFileSystemURI("file:///storage//sdcard/EasyPacking", onResolveSuccess2, fail2);
  console.log("now in move pic");
  //new file name
  newFileName = "000001_" + n + ".jpg";
  var myFolderApp = "EasyPacking";

  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
  //The folder is created if doesn't exist
  fileSys.root.getDirectory( myFolderApp,
                  {create:true, exclusive: false},
                  function(directory) {
                      entry.moveTo(directory, newFileName,  successMove, resOnError);
                  },
                  resOnError);
                  },
  resOnError);
  
} ;
function resOnError()
{
console.log("error in res on error");	
}
function successMove(entry) {
 
	// alert("done");
	 var notiImage = new Array();
	 var items = window.localStorage.getItem('000001');
	 if (items === undefined || items === null || items.length === 0)
	 {
		 
		// var notiImage = new Array();
		//alert("in first bliock ");
		  notiImage[0] = newFileName;
			
		var imageModelString = 	JSON.stringify(notiImage);
			 window.localStorage.setItem("000001", imageModelString);
			// alert("now set  ");
			 var items2 = window.localStorage.getItem('000001');
			// alert(items2);
			   oImageArrReceived =  JSON.parse(items2);
			// alert( oImageArrReceived[0]);
	 }
	 else
		 {
		 var items2 = window.localStorage.getItem('000001');
		// alert(items2);
		   oImageArrReceived =  JSON.parse(items2);
		 oImageArrReceived.push(newFileName);
		 
			var imageModelString = 	JSON.stringify(oImageArrReceived);
			 window.localStorage.setItem("000001", imageModelString);
		// alert( oImageArrReceived[0]);
			 
		 }
	 
	   
	// window.resolveLocalFileSystemURI("file:///storage//sdcard/EasyPacking", onResolveSuccess, fail);
		 window.resolveLocalFileSystemURI("file:///storage//emulated/0/EasyPacking", onResolveSuccess, fail);
};

function onResolveSuccess(fileEntry) {
  console.log(fileEntry.name);
  
//Get a directory reader
  var directoryReader = fileEntry.createReader();

  // Get a list of all the entries in the directory
  directoryReader.readEntries(success,failIN);
};

function fail(evt) {
  console.log(evt.target.error.code);
};

function success(entries) {
  var i;
  for (i=0; i<entries.length; i++) {
      console.log(entries[i].name);
  };
  
 // alert(oImageArrReceived);
  
//image1.setSrc("file:///storage//sdcard/EasyPacking/"+oImageArrReceived[0]);
  image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[0]);
  
  var len = oImageArrReceived.length;
  
  if (len >= 3)
	{
	
	 console.log(3);
	 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
	 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
	 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
	
	
	}
else if (len == 2)
	{
	 console.log(2);
	 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
	 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
	
	}

else
	{
	
	
	 console.log(1);
	
    
    image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
	
	}

}

function failIN(evt) {
  console.log("in failIN");
  console.log(evt.target.error.code);
};

var isRunningOnDesktop = g_runningOnDesktop; // determine if the applicatio is running on desktop or as a mobile app 

if (
		g_runningInTablet == true || g_runningOnPhone == true)  // Show image part if on mobile 
	{
var image1 = new sap.m.Image({
    //src: "img/MB15_01A.jpg",
	id : "imageQ111",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
        linebreakL: true,
		linebreakM: true,
		linebreakS: true
    })
  });

image1.addStyleClass("BtnStyle");
image1.attachPress(oController.imgOpen);


var image2 =  new sap.m.Image({
    //src: "img/MB15_02.jpg",
	id : "imageQ112",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
    })
  });

image2.addStyleClass("BtnStyle");
image2.attachPress(oController.imgOpen);

var image3 = new sap.m.Image({
   // src: "img/MB15_01.jpg",
	id : "imageQ113",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
    })
  });
image3.addStyleClass("BtnStyle");
image3.attachPress(oController.imgOpen);

var image4 =  new sap.m.Image({
    src: "img/MB15-Camera_Icon.png",
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
    }),
    press: function () {
       cmraDialog.open();
      },
  });
image4.addStyleClass("BtnStyle");

	}

var containerBoxMatno = new sap.m.FlexBox({
	items: [
	        	lblMatNo,
	        	inputMatnr
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxQty = new sap.m.FlexBox({
	items: [
	        	lblQty,
	        	inputQty
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxOrdNo = new sap.m.FlexBox({
	items: [
				lblOrdNo,
				inputSalesOrderNo
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxDelNo = new sap.m.FlexBox({
	items: [
				lblDelNo,
				inputDelNo
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxDesc = new sap.m.FlexBox({
	items: [
			 	lblDesc,
				inputDesc
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start"
});

var containerBoxAddInfo = new sap.m.FlexBox({
	items: [
				lblAdnInfo,
				inputAddInfo
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
	layoutData: new sap.m.FlexItemData({growFactor: 1})
});

var oForm = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
labelSpanL:3,
labelSpanM:3,
columnsL:1,
columnsM:1,
    content:[
             containerBoxMatno,
             containerBoxQty
    ]
});

var oForm1 = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
labelSpanL:3,
labelSpanM:3,
columnsL:1,
columnsM:1,
    content:[
             containerBoxOrdNo,
             containerBoxDelNo
    ]
});
 

var oForm2 = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
labelSpanL:3,
labelSpanM:3,
columnsL:1,
columnsM:1,
    content:[
             	containerBoxDesc
    ]
});

var oForm3 = new sap.ui.layout.form.SimpleForm({
    minWidth : 1024,
    maxContainerCols: 2,
    editable: true,
    layout: "ResponsiveGridLayout",
labelSpanL:3,
labelSpanM:3,
columnsL:1,
columnsM:1,
    content:[
             	containerBoxAddInfo
    ]
});
		
		  var imagePop =  new sap.m.Image("ImagePop1",{
			    src: "img/MB15-Camera_Icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    })
			  });
		  
		  var TheScrollContainer = new sap.m.ScrollContainer({
	            width : "300px",
	            height : "400px",
	            horizontal : true,
	            vertical : true,
	            content : [imagePop]
	        });
		  
		  var popover = new sap.m.Popover("ImgPopover1", {
			  title: "Image Viewer",
	            placement: sap.m.PlacementType.Top, 
	            footer: new sap.m.Bar({
	                contentRight: [new sap.m.Button({
	                    text: 'close', 
	                    press: function(){
	                    	popover .close();
	                    }
	                })]
	            }), 
	            content: TheScrollContainer 
	        });
		  
		  
		  var containerImg = new sap.m.FlexBox({
				items: [
						image1,
						image2,
						image3,
						image4
				        ],
				direction:"Row",
				justifyContent:"SpaceAround",
				alignItems:"Start"
			});
		  
		  
		  var btnCreateNoti = new sap.m.Button({
		         text: "{i18n>mob15NotTit}",
	            // type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
		  btnCreateNoti.attachPress(oController.onCreateNoti);
		  
		  var btnNewNoti = new sap.m.Button({
	             text: "{i18n>reset}",
	           //  type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
		  btnNewNoti.attachPress(oController.newNoti);
		  
		  var lblDummy2 = new sap.m.Label({
			  text: "{i18n>DumyTxt}"
			});
			
			lblDummy2.addStyleClass("HideLabel");
		  
		  var containerBtn = new sap.m.FlexBox({
				items: [
				        	//lblDummy2,
				        	btnNewNoti,
				        	btnCreateNoti
				        ],
				//direction:"Column",
				justifyContent:"SpaceAround",
				alignItems:"End"
			});
		  
		  containerBtn.setWidth("90%");
		  containerBtn.addStyleClass("ContainerPaddingLeft");
		  
		  
		  var oForm4 = new sap.ui.layout.form.SimpleForm({
			    minWidth : 1024,
			    maxContainerCols: 2,
			    editable: true,
			    layout: "ResponsiveGridLayout",
			labelSpanL:3,
			labelSpanM:3,
			columnsL:1,
			columnsM:1,
			    content:[
			             	containerImg
			    ]
			});
		  
		  var oForm5 = new sap.ui.layout.form.SimpleForm({
			    minWidth : 1024,
			    maxContainerCols: 2,
			    editable: true,
			    layout: "ResponsiveGridLayout",
			labelSpanL:3,
			labelSpanM:3,
			columnsL:1,
			columnsM:1,
			    content:[
			             containerBtn
			    ]
			});
		  
		  var oForm6 = new sap.ui.layout.form.SimpleForm({
			    minWidth : 1024,
			    maxContainerCols: 2,
			    editable: true,
			    layout: "ResponsiveGridLayout",
			labelSpanL:3,
			labelSpanM:3,
			columnsL:1,
			columnsM:1,
			    content:[
			             	lblDummy2
			    ]
			});
		  
		  var oForm7 = new sap.ui.layout.form.SimpleForm({
			    minWidth : 1024,
			    maxContainerCols: 2,
			    editable: true,
			    layout: "ResponsiveGridLayout",
			labelSpanL:3,
			labelSpanM:3,
			columnsL:1,
			columnsM:1,
			    content:[
			             	lblDummy2
			    ]
			});
		  
		  var oForm8 = new sap.ui.layout.form.SimpleForm({
			    minWidth : 1024,
			    maxContainerCols: 2,
			    editable: true,
			    layout: "ResponsiveGridLayout",
			labelSpanL:3,
			labelSpanM:3,
			columnsL:1,
			columnsM:1,
			    content:[
			             	lblDummy2
			    ]
			});
		  
		 // var isRunningOnDesktop = jQuery.device.is.desktop; // determine if the applicatio is running on desktop or as a mobile app 
		  var page_detail ;
		  if (g_runningInTablet == false && g_runningOnPhone == false)  // Show image part if on mobile 
		  	{  
		 page_detail = new sap.m.Page({
			 title: "{i18n>mob15DetQ11Tit}",
				content: [
				         oForm,
				         oForm1, 
				         oForm2,
				         oForm3,
				       //  oForm4,
				        // oForm5,
				         oForm6,
				         oForm7,
				         oForm8

				],
				enableScrolling: false,
				//showNavButton: false,
				showFooter: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       btnNewNoti,
			                       btnCreateNoti
			                       
			                       ]
				}).addStyleClass("footer"),
				navButtonTap:function(){  
					//alert("Pressed Back");
					
					switch(window.orientation) 
				    {  
				      case -90:
				      case 90:
				       // alert('landscape');
				        var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMD15Master");
		               // osplit.back();
				        break; 
				      default:
				       // alert('portrait');
				      var app = sap.ui.getCore().byId("myApp"); 
						app.to("idMD15Master");
		               // osplit.back();
				        break; 
				    }
					
	                
	                //app.to("idMD15INITIAL1");  
	            }
		 
			});
		  	}
		  
		  else
			  {
			  
				 page_detail = new sap.m.Page({
					 title: "{i18n>mob15DetQ11Tit}",
						content: [
						         oForm,
						         oForm1, 
						         oForm2,
						         oForm3,
						         oForm4,
						        // oForm5,
						         oForm6,
						         oForm7,
						         oForm8

						],
						/*enableScrolling: false,
						//showNavButton: false,
						showFooter: true,
						footer: new sap.m.Bar({
					        contentRight: [
					                       btnNewNoti,
					                       btnCreateNoti
					                       
					                       ]
						}).addStyleClass("footer"),*/
						navButtonTap:function(){  
							//alert("Pressed Back");
							
							switch(window.orientation) 
						    {  
						      case -90:
						      case 90:
						       // alert('landscape');
						        var app = sap.ui.getCore().byId("myApp"); 
								app.to("idMD15Master");
				               // osplit.back();
						        break; 
						      default:
						       // alert('portrait');
						      var app = sap.ui.getCore().byId("myApp"); 
								app.to("idMD15Master");
				               // osplit.back();
						        break; 
						    }
							
			                
			                //app.to("idMD15INITIAL1");  
			            }
				 
					});
				  	
			  
			  }
                      
 		return page_detail;
	}

});