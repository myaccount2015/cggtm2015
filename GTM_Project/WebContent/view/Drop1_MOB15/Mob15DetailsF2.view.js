
sap.ui.jsview("com.cg.gtm.view.Drop1_MOB15.Mob15DetailsF2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Mob15DetailsF2
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB15.Mob15DetailsF2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Mob15DetailsF2
	*/ 
	//done
	
	createContent : function(oController) {
	
		var  imgSRC = "";
		var oMD15DataSoldTo = {"MD15CollectionSoldTo":
			[
			 {"key":"SOLD1","desc":"SOLD1"},
			 {"key":"SOLD2","desc":"SOLD2"},
			 {"key":"SOLD3","desc":"SOLD3"}
				 
				 ]};
		
		var oJSONSoldTo = new sap.ui.model.json.JSONModel(oMD15DataSoldTo);
		
		  
		  
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
		
		var lblMatNo =  new sap.m.Label({
             text: "{i18n>Matnum}",design: sap.m.LabelDesign.Bold,
             layoutData : new sap.ui.layout.GridData({
                     span: "L3 M3 S12",
                     linebreakL: true,
         			linebreakM: true,
         			linebreakS: true
             })
     });
     
    var lblQty = new sap.m.Label({
        text: "{i18n>quantity}",design: sap.m.LabelDesign.Bold,
        
         layoutData : new sap.ui.layout.GridData({
                 span: "L3 M3 S12"
         })
    });
    
    var lblPurOrdNo =  new sap.m.Label({
    	  text: "{i18n>Purchas}",design: sap.m.LabelDesign.Bold,
        layoutData : new sap.ui.layout.GridData({
                span: "L3 M3 S12",
                linebreakL: true,
    			linebreakM: true,
    			linebreakS: true
        })
    });
    
    var lblPurOrdItm =  new sap.m.Label({
        text: "{i18n>Purchasitem}",design: sap.m.LabelDesign.Bold,
        layoutData : new sap.ui.layout.GridData({
                span: "L3 M3 S12",
                linebreakL: true,
    			linebreakM: true,
    			linebreakS: true
        })
});

var lblDesc =  new sap.m.Label({
    text: "{i18n>descript}",design: sap.m.LabelDesign.Bold,
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});

/*
var lbDelNo =  new sap.m.Text({
    text: "{i18n>delivryno}",
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 
  var ipDelNo  = new sap.m.Input({
	  
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
 })
 
 });
  */
  
  var inputPurOrd  = new sap.m.Input("ip_purOrd", {
	  type : sap.m.InputType.Tel,
	  
	  liveChange : oController.checkipPurOrd,
	  
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
 })
 
 });
  
var inputPurOrdItm  = new sap.m.Input("ip_purOrdItm", {
	 liveChange : oController.checkipPurOrdItm,
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
 })
 
 });
  
  
  var lbSerialNo =  new sap.m.Label({
	  text: "{i18n>serialno}",design: sap.m.LabelDesign.Bold,
	    layoutData : new sap.ui.layout.GridData({
	            span: "L3 M3 S12",
	            linebreakL: true,
				linebreakM: true,
				linebreakS: true
	    })
	});
	 
	  var ipSerialNo  = new sap.m.Input("selnof2",{
		  type :sap.m.InputType.Tel,
		  maxLength : 7,
		  liveChange : function(){
				field_numeric_validation(sap.ui.getCore().byId("selnof2"));//go to string utility  
		  			
		  		    
		  		},
		  
		  layoutData : new sap.ui.layout.GridData({
	         span: "L3 M3 S12",
	         linebreakL: true,
				linebreakM: true,
				linebreakS: true
	 })
	 
	 });

	  
	  
	  var lblBatchNo =  new sap.m.Label({
		  text: "{i18n>batchno}",design: sap.m.LabelDesign.Bold,
	
		    layoutData : new sap.ui.layout.GridData({
		            span: "L3 M3 S12",
		            linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		});
		 
		  var inputBatchNo  = new sap.m.Input("batchf2",{
			  maxLength: 10,
			//	type :sap.m.InputType.Tel,
			  liveChange : function(){
				//	field_numeric_validation(sap.ui.getCore().byId("batchf2"));//go to string utility  
			  			
			  		    
			  		},
			  layoutData : new sap.ui.layout.GridData({
		         span: "L3 M3 S12",
		         linebreakL: true,
					linebreakM: true,
					linebreakS: true
		 })
		 
		 });
		  

var lblAdnInfo =  new sap.m.Label({
	  text: "{i18n>additionalInfo}",design: sap.m.LabelDesign.Bold,
    layoutData : new sap.ui.layout.GridData({
            span: "L3 M3 S12",
            linebreakL: true,
			linebreakM: true,
			linebreakS: true
    })
});
 
  var inputAddInfo  = new sap.m.TextArea("adninfof2", {rows:1, cols:80,height : "13rem"},{
	  
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         linebreakL: true,
			linebreakM: true,
			linebreakS: true
			
 }),
 //width:"500px"
 
 });
var batchScanF2 ;
var isRunningOnDesktopF2 = g_runningOnDesktop; 
  if (g_runningInTablet == true || g_runningOnPhone == true)
	  {
	  batchScanF2 =  new sap.m.Image({
	  id : "batchScanF2" ,
	    src: "icon/ico_rect_scanbarcode.png",
	    layoutData : new sap.ui.layout.GridData({
	        span: "L2 M3 S12",
	    }),
	    press: function () {
	    	varScan = "Mob15CreateNoti";
	    	globalMob15Detail = "F2" ;
	    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanBatch();
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
	      },
	  });
	  batchScanF2.addStyleClass("matScan");
	  }
  
  var serialScanF2 ;

  if (g_runningInTablet == true || g_runningOnPhone == true)
  	  {
	  serialScanF2 =  new sap.m.Image({
  	  id : "serialScanF2" ,
  	    src: "icon/ico_rect_scanbarcode.png",
  	    layoutData : new sap.ui.layout.GridData({
  	        span: "L2 M3 S12",
  	    }),
  	    press: function () {
  	    	varScan = "Mob15CreateNoti";
  	    	globalMob15Detail = "F2" ;
  	    	//sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanSNUM();
  	  	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
  	      },
  	  });
	  serialScanF2.addStyleClass("matScan");
  	  }
  
  var matScanF2 ;
  
  if (g_runningInTablet == true || g_runningOnPhone == true)
	  {
	  matScanF2 =  new sap.m.Image({
	  id : "matScanF2" ,
	    src: "icon/ico_rect_scanbarcode.png",
	    layoutData : new sap.ui.layout.GridData({
	        span: "L2 M3 S12",
	    }),
	    press: function () {
	    	varScan = "Mob15CreateNoti";
	    	globalMob15Detail = "F2" ;
	    	sap.ui.getCore().byId("idMob24MaterialSearchInput").getController().scanNow();
	      },
	  });
  matScanF2.addStyleClass("matScan");
	  }
  
   inputMatnr = new sap.m.Input("inputMatnr3", {
	   type :  sap.m.InputType.Tel,
      maxLength : 6,
      placeholder: 'Enter Material Number',
    //  showSuggestion: true,
      liveChange : oController.checkinputMatnr_F2,
      change : function(){
    	  if(this.getValue()!=""){
        	  
    		  oController.checkinputMatnrMOB15F2()}} ,
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
   
   var lblmatnumdesc = new sap.m.Text({
	  id : "idMatDesMob15-VendorError",design: sap.m.LabelDesign.Bold,
	  wrapping : true,
	  
	   
   });
   
   
   
   
   
  inputMatnr.setModel(oJasonMatnr);
  inputMatnr.bindElement("/MD15CollectionMATNRModel");
  
 
var inputQty = new sap.m.Input("ipQty3", {
	type : sap.m.InputType.Tel,
	//maxLength : 3,
	  liveChange : function(){
		  field_numeric_validation_qty(sap.ui.getCore().byId("ipQty3"));//go to string utility  
	  			
	  		    
	  		},
	  layoutData : new sap.ui.layout.GridData({
         span: "L3 M3 S12",
         
 })
 
	  
 });


var inputDesc  = new sap.m.Input("descf2",{
	 liveChange : oController.checkipdesc_F2,
	 placeholder: "Add Description (max 40 Char.) ",
	 maxLength : 40 ,
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
     id : "po3",		
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
    	  
    	  
    	  document.getElementById("files").click();
		  selectImageFromLocal(sap.ui.getCore().byId("Mob15-F2-LocalImageSelector"));
    	  cmraDialog.close();
      }
    })
  });


var selectedImage = new sap.m.Image({
	id:"Mob15-F2-LocalImageSelector",
	width : "160px",
	height : "160px"
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
   
// Get a directory reader
   var directoryReader = fileEntry.createReader();

   // Get a list of all the entries in the directory
   directoryReader.readEntries(success,failIN);
};

function fail(evt) {
   console.log(evt.target.error.code);
};

function success() {
	
	   var len = oImageArrReceived.length;
	    
	    containerImage3.setVisible(false);
		 containerImage2.setVisible(false);
		 containerImage1.setVisible(false);
	    
	    if (len >= 3)
		{
		
		 console.log(3);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 image3.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-3]);
		 containerImage3.setVisible(true);
		 containerImage2.setVisible(true);
		 containerImage1.setVisible(true);
		 
		
		
		}
	else if (len == 2)
		{
		 console.log(2);
		 image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);
		 image2.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-2]);
		 containerImage2.setVisible(true);
		 containerImage1.setVisible(true);
		 containerImage3.setVisible(false);
		
		
		}
	else if (len == 1)
	{
	
	
	 console.log(1);
	
  
  image1.setSrc("file:///storage//emulated/0/EasyPacking/"+oImageArrReceived[len-1]);

	 containerImage1.setVisible(true);
	 containerImage3.setVisible(false);
	 containerImage2.setVisible(false);
	
	
	}

}

function failIN(evt) {
   console.log("in failIN");
   console.log(evt.target.error.code);
};
var isRunningOnDesktop = g_runningOnDesktop; // determine if the applicatio is running on desktop or as a mobile app 

//if (!isRunningOnDesktop)  // Show image part if on mobile 
		  	//{	

var image1 = new sap.m.Image({
   // src: "img/MB15_01A.jpg",
	id : "imageF21",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
        linebreakL: true,
		linebreakM: true,
		linebreakS: true
    })
  });

//image1.addStyleClass("BtnStyle");
image1.attachPress(oController.imgOpen);


var image2 =  new sap.m.Image({
  //  src: "img/MB15_02.jpg",
	id : "imageF22",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
    })
  });

//image2.addStyleClass("BtnStyle");
image2.attachPress(oController.imgOpen);

var image3 = new sap.m.Image({
    //src: "img/MB15_01.jpg",
	id : "imageF23",
	width : "60px" ,
	height : "60px" ,
    layoutData : new sap.ui.layout.GridData({
        span: "L2 M3 S12",
    })
  });
//image3.addStyleClass("BtnStyle");
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
		  //	}


var containerBoxMaScanF2 = new sap.m.FlexBox({
	items: [
        	
        	inputMatnr,
        	matScanF2
        	
        ],
direction:"Row",
justifyContent:"Center",
alignItems:"Start",
});

var containerBoxMatno = new sap.m.FlexBox({
	items: [
	        	lblMatNo,
	        	containerBoxMaScanF2,
	        	lblmatnumdesc
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
				lblPurOrdNo,
				inputPurOrd
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxPurOrdItm = new sap.m.FlexBox({
	items: [
				lblPurOrdItm,
				inputPurOrdItm
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});



var inputBarCodeBtn  = new sap.m.Button("inputBarCodeBtn",{
	  
	  layoutData : new sap.ui.layout.GridData({
       span: "L3 M3 S12",
       linebreakL: true,
			linebreakM: true,
			linebreakS: true
}),
text : "Scan",
type : "Emphasized",
press : function(){
	oController.MOB15F2Scan() ;
}

});
//inputBarCodeBtn.setVisible(false);	

var runningOnDesktop = g_runningOnDesktop;
if(g_runningInTablet == false && g_runningOnPhone == false)
	{
	inputBarCodeBtn.setVisible(false);	
	}
else{
	inputBarCodeBtn.setVisible(true);	
}

var containerBoxSerialNoScan = new sap.m.FlexBox({
	items: [
				
				ipSerialNo,
				serialScanF2
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
});
var containerBoxSerialNo = new sap.m.FlexBox({
	id : "containerBoxSerialNo-Vendorerror",
	items: [
				lbSerialNo,
				containerBoxSerialNoScan
	        ],
	direction:"Column",
	justifyContent:"Center",
	alignItems:"Start",
});

var containerBoxBatchNoScan = new sap.m.FlexBox({
	items: [
				
				inputBatchNo,
				batchScanF2
	        ],
	direction:"Row",
	justifyContent:"Center",
	alignItems:"Start",
});
var containerBoxBatchNo = new sap.m.FlexBox({
	id : "containerBoxBatchNo-Vendorerror",
	items: [
				lblBatchNo,
				containerBoxBatchNoScan
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
var reasonforfail = new sap.m.Text({
	id : "mobF2-reasonforfail",design: sap.m.LabelDesign.Bold,
	text : "",
	wrapping : true
	
}).addStyleClass("reasonForErrorMessageColor");
var containerBoxAddInfo = new sap.m.FlexBox({
	items: [
				lblAdnInfo,
				inputAddInfo,
				reasonforfail
				
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
             containerBoxQty,
             containerBoxOrdNo
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
             containerBoxPurOrdItm,
             containerBoxSerialNo,
             containerBoxBatchNo
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
		
		  var imagePop =  new sap.m.Image("ImagePop3",{
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
		  
		  var popover = new sap.m.Popover("ImgPopover3", {
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
		  
		  
		  var delDialog = new sap.m.Dialog({
			    title: "Delete Image",
			    content: new sap.m.Text({
			   	
			    text : "Do you want to delete the image"
			    }
			    	),
			    leftButton: new sap.m.Button({
			      text: "YES",
			      press: function () {
			    	  delDialog.close();
			    	 
			           window.resolveLocalFileSystemURI
			           ( imgSRC  , onResolveSuccessDel, failRem);
			      }
			    }),
			    rightButton: new sap.m.Button({
			      text: "NO",
			      press: function () {
			    	  delDialog.close();
			      }
			    })
			  });
		  
		  var btnImg1Close =  new sap.m.Image({
			    src: "img/Remove-icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    width : "30px",
			    height : "30px",
			    press: function () {
			    	 delImg =  1;
			    	 imgSRC = image1.getSrc();
			    	 delDialog.open();
			      },
			  });
		 
				
		  var btnImg2Close = new sap.m.Image({
			    src: "img/Remove-icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    width : "30px",
			    height : "30px",
			    press: function () {
			    	 delImg =  2;
			    	 imgSRC = image2.getSrc();
			    	 delDialog.open();
			           window.resolveLocalFileSystemURI
			           (image2.getSrc(), onResolveSuccessDel, failRem);
			      },
			  });
		  
		  
		  var btnImg3Close = new sap.m.Image({
			    src: "img/Remove-icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    width : "30px",
			    height : "30px",
			    press: function () {
			    	 delImg =  3;
			    	 imgSRC = image3.getSrc();
			    	 delDialog.open();
			         //  window.resolveLocalFileSystemURI
			          // (image3.getSrc(), onResolveSuccessDel, failRem);
			      },
			  });
		  
		  
			  
	function onResolveSuccessDel(entry)
	{
		// alert("now removing");
		entry.remove(successRem, failRem);
	}
	function successRem()
	{
		
		//alert("success");
		
			oImageArrReceived.splice(oImageArrReceived.length-delImg,1);
			
		
		 var items2 = window.localStorage.getItem('000001');
			// alert(items2);
			  // oImageArrReceived =  JSON.parse(items2);			 
				var imageModelString = 	JSON.stringify(oImageArrReceived);
				 window.localStorage.setItem("000001", imageModelString);
				 
		//alert(oImageArrReceived.length);
		success();
	}
	function failRem(evt)
	{
		
		alert("Failed to remove");
		 alert(evt.target.error.code);
	}
	
	function onResolveSuccessRem(fileEntry) {
	    console.log(fileEntry.name);
	    successMove(fileEntry);
	 // Get a directory reader
	  //  image1.setSrc("");
	  //  image2.setSrc("");
	   // image3.setSrc("");
	   // var directoryReader = fileEntry.createReader();

	    // Get a list of all the entries in the directory
	   // directoryReader.readEntries(success,failIN);
	};
		  
		  var containerImage1 = new sap.m.FlexBox({
			  id : "containerImage1F2",
				items: [
                   btnImg1Close,
						image1,
						
				        ],
				        visible : false ,       
				direction:"Row",
				//justifyContent:"Right",
				alignItems:"Start",
				height : "100px",
				width : "100px"
			});
		  
		  var containerImage2 = new sap.m.FlexBox({
			  id : "containerImage2F2",
				items: [
                 btnImg2Close,
						image2,
						
				        ],
				        visible : false ,
				direction:"Row",
				//justifyContent:"Right",
				alignItems:"Start",
				height : "100px",
				width : "100px"
			});
		  
		  var containerImage3 = new sap.m.FlexBox({
			  
			  id : "containerImage3F2",
				items: [
                 btnImg3Close,
						image3,
						
				        ],
				        visible : false ,
				direction:"Row",
				//justifyContent:"Right",
				alignItems:"Start",
				height : "100px",
				width : "100px"
			});
		  var containerImg = new sap.m.FlexBox({
				items: [
						containerImage1,
						containerImage2,
						containerImage3,
						image4,
						selectedImage
				        ],
				direction:"Row",
				justifyContent:"SpaceAround",
				alignItems:"Start"
			});
		  
		  
		  
		  var btnCreateNoti = new sap.m.Button({
	             text: "Create Notification",
	             icon: "sap-icon://action",
	           //  type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
		  btnCreateNoti.attachPress(oController.onCreateNoti);
		  
		  var btnNewNoti = new sap.m.Button({
	             text: "Reset",
	             icon: "sap-icon://refresh",
	            // type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
		  btnNewNoti.attachPress(oController.newNoti);
		  
		  var btnEdit = new sap.m.Button({
			  id : "Edit-mob15-vendorError",
	             text: "Edit",
	             icon: "sap-icon://edit",
	            // type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1})
	           });
			  
		  btnEdit.attachPress(oController.Edit);
		  
		  var openActionSheetF2 = new sap.m.Button({
			  id : "openActionSheetMOB15F2",
			  placement: sap.m.PlacementType.Top,  
			  icon: "sap-icon://action",
	             text: "Actions...",
	            // icon: "sap-icon://edit",
	            // type: sap.m.ButtonType.Accept,
	             layoutData: new sap.m.FlexItemData({growFactor: 1}),
		  press: function()
		  {
			  var mobileActionSheet = new sap.m.ActionSheet({
					 //showCancelButton : false ,
					  buttons : [
			                      
			                       btnEdit,
			                     ////  btnEdit1,
			                     //  btnEdit2
			                       btnNewNoti,
			                       btnCreateNoti,
			                         btnOpenNotiMOB15,
			                       
			                       ]
					  
				  });
			  mobileActionSheet.openBy(openActionSheetF2);
		  }
	           });
		  var lblDummy2 = new sap.m.Label({
				text: "{i18n>DumyTxt}"
			});
			
			lblDummy2.addStyleClass("HideLabel");
		  
		  var containerBtn = new sap.m.FlexBox({
				items: [
				        	//lblDummy2,
				        	btnEdit,
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
		 
		  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////		  
var desktopMode = false;
if( g_runningOnPhone == false && g_runningInTablet == false){
	desktopMode = true;
}
//DMS
var iconTab = new sap.m.IconTabBar("MOB15_F2_taskDetails_tab",{
  expandable: false,
  //visible : desktopMode,
  //select : oController.handleIconTabBarSelect,
  items: [
        //DMS
new sap.m.IconTabFilter("MOB15_F2_Detail",{

  key : "Mob15_F2Detail",
  text: "{i18n>Details}",
  icon: "sap-icon://task",
      content : [
oForm,
oForm1, 
oForm2,
oForm3,


                 
                 ]
}),


new sap.m.IconTabFilter("MOB15_F2_PhotoFilter",{
  text: "{i18n>PHOTO}",
  key : "Mob15_F2Image",
  icon: "sap-icon://attachment",
  visible : desktopMode,
  content: [
    new sap.m.List({
    	id : "Mob15_F2_AddedImageList",

mode: sap.m.ListMode.SingleSelectMaster,
headerToolbar : new sap.m.Toolbar({
content:  [
  new sap.m.Label({
    text : "Add Image:" ,
           }),
  new sap.m.ToolbarSpacer(),
  new sap.m.Button({
    text: "Add",
icon: "sap-icon://add",
type: "Emphasized",
press: function(){
	    g_DeleteImageListId = "Mob15_F2_AddedImageList";
        sap.ui.getCore().byId("Mob00ImageDialogBox").open();
       }
      })
    ] 
  }),
	headerText : "Added Image List",
itemPress : oController.responsivePopoverZoom,
items: {
	    path: "/",
template: new sap.m.StandardListItem({
title: "{imageName}"+""+"",
type: "Active",
icon: "{imageData}",
						})
						}
	                })
	              ]
	            
            }),
              
              ]
});
			
/////////////////////////////////////////////////////////////////////////////////////////////////////////
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  if (g_runningInTablet == false && g_runningOnPhone == false)  // Show image part if on mobile 
		 		  	{	
		  
		  page_detail = new sap.m.Page({
			 title: "{i18n>mob15DetF2Tit}",
			// id : "Mob15-F2-BackNavButton",
				content: [
				         /*oForm,
				         oForm1, 
				         oForm2,
				         oForm3,
				       // oForm4,
				        // oForm5,
				         oForm6,
				         oForm7,
				         oForm8,*/
				         
				         iconTab

				],
				enableScrolling: true,
				//showNavButton: false,
				showFooter: true,
				footer: new sap.m.Bar({
			        contentRight: [
			                       
			                       btnEdit,
			                       btnNewNoti,
			                       btnCreateNoti
			                       
			                       ]
				}).addStyleClass("footer"),
				navButtonTap:function(){  
					//alert("Pressed Back");
					g_MobileNavigationId =  "Mob15-BackNavButton";
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
			 if( g_runningOnPhone == true)
			   {
				 var  mob15BackMobileF2 =   new sap.m.Button({
				      text: "Back",
				      icon : "sap-icon://close-command-field",
				      press: function () {
				    	  g_MobileNavigationId =  "Mob15-BackNavButton";
						  var app = sap.ui.getCore().byId("myApp"); 
							  app.to("idGridSubMenuCreateNoti");
				      }
				    });
				  page_detail = new sap.m.Page({
					 title: "{i18n>mob15DetF2Tit}",
					 id : "Mob15-F2-BackNavButton",
						content: [
						        /* oForm,
						         oForm1, 
						         oForm2,
						         oForm3,
						         //oForm4,
						         //oForm5,
						         oForm6,
						         oForm7,
						         oForm8,*/
						         
						         iconTab

						],
						enableScrolling: true,
						showNavButton: true,
						showFooter: true,
						footer: new sap.m.Bar({
							contentLeft : [mob15BackMobileF2],
					        contentRight: [openActionSheetF2]
						}),
						navButtonTap:function(){  
							//alert("Pressed Back");
							g_MobileNavigationId =  "Mob15-BackNavButton";
							var app = sap.ui.getCore().byId("myApp"); 
							  app.to("idGridSubMenuCreateNoti");
							  
							  
							/*switch(window.orientation) 
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
						    }*/
							
			                
			                //app.to("idMD15INITIAL1");  
			            }
				 
					});
				 		  	
				 
				 
				 
			   }
			 else
				 {
			  page_detail = new sap.m.Page({
				 title: "{i18n>mob15DetF2Tit}",
			     id : "Mob15-F2-BackNavButton",
					content: [
					          	//i,b,addPic,
					          
					         /*oForm,
					         oForm1, 
					         oForm2,
					         oForm3,
					         //oForm4,
					         oForm6,
					         oForm7,
					         oForm8,*/
					         iconTab

					],
					enableScrolling: true,
					//showNavButton: false,
					showFooter: true,
					footer: new sap.m.Bar({
				        contentRight: [	btnEdit,
				                       btnNewNoti,
				                       btnCreateNoti
				                       
				                       ]
					}).addStyleClass("footer"),
					navButtonTap:function(){  
						//alert("Pressed Back");
						 g_MobileNavigationId =  "Mob15-BackNavButton";
						  var app = sap.ui.getCore().byId("myApp"); 
						  app.to("idGridSubMenuCreateNoti");
						
						
						
						switch(window.orientation) 
					    {/*  
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
					    */}
						
		                
		                //app.to("idMD15INITIAL1");  
		            }
			 
				});
			 		  	
			 
			 }
			 }
                      
 		return page_detail;
	}

});
