sap.ui.jsview("com.cg.gtm.view.Drop1_MOB21.MOB21CharDetails", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB21CharDetails
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB21.MOB21CharDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB21CharDetails
	*/ 
	createContent : function(oController) {
		
		var desktopMode = true;
		if( g_runningOnPhone == false && g_runningInTablet == false){
			desktopMode = false;
		}
		var  imgSRC = "";
		var lblDummy1 = new sap.m.Label({
			id : "Mob21-ListDetail-Number-List",
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
		
		var lblDummy4 = new sap.m.Label({
			text: "Dummy"
		});
		lblDummy4.addStyleClass("HideLabelAndHeight");
		
		var lblDummy5 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");

		var lblDummy6 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		var lblDummy7 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		var lblDummy8 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		//////////////////////////////////////////////////////////////////////////////
		
		 var dialogImgUpload = new sap.m.BusyDialog({
	          title: "Uploading the image ",
	          text: 'Image is being uploaded...',
	         // showCancelButton: true
	        });
		 
		 var cmraDialog = new sap.m.Dialog({
			    title: "",
			   // width : "80%",
			    content:  new sap.m.Image({
				    src: "img/noti.png",
			    }),
			    leftButton: new sap.m.Button({
			      text: "No",
			      press: function () {
			    	  cmraDialog.close();
			      }
			    }),
			    rightButton: new sap.m.Button({
			      text: "Yes",
			      press: function () {
			    	  oNode1.setExpanded(false);
			    	  oNode2.setExpanded(false);
			    	  oNode3.setExpanded(false);
			    	  oNode4.setExpanded(false);
			    	  
			    	  app.to(page1);
			    	  cmraDialog.close();
			      }
			    })
			  }).addStyleClass("notiDia");
		// cmraDialog.
		
		var textInspectionMethod = new sap.m.Text({
		      text: "Inspection Method",
		    	  
		    }).addStyleClass("headerText");
		
		var textarea = new sap.m.Text({
			id : "MOB21InsMetText",
			
		}).addStyleClass("textarea");
		
		var textInspectionResult = new sap.m.Label({
		      text: "Inspection Result",
		    	 
		    }).addStyleClass("headerText");
		
		var textSpecification = new sap.m.Text({
			text : "Specification: 25,000 Volts"
			
		}).addStyleClass("textSpecification");
		
		var inputResults = new sap.m.Input({
			text : "",
			visible : false ,
			id : "ip_samplesize",
			liveChange :function(){
				if(this.getValue())
				oController.checkSampleSize()
				
			
			},
			change : function()
			{
				//oController.checkSampleSize;
				window.localStorage.setItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
						globalInsOp.concat(globalInsChar))+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText() , 
						sap.ui.getCore().byId("ip_samplesize").getValue());
				//oController.saveMOB21Local;
				saveMOB21Local();
			}
		});
		
		 var oItemTemplate = new sap.ui.core.Item({  
             id : "insResDDMOB21Temp",
             key : "{key}",
       	     text : "{text}"  
       	 }); 
		 
    var insResDDMOB21 = new sap.m.Select("insResDDMOB21", {
    
    width:"150px",
    visible : false ,
	 items: {
       	path : "/items",  
		    template : oItemTemplate  
          },
    change : function()
    {
    	window.localStorage.setItem(sap.ui.getCore().byId("Mob21lot").getText().concat(
				globalInsOp.concat(globalInsChar)+"_"+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText() ) , 
				sap.ui.getCore().byId("insResDDMOB21").getSelectedKey());
    	        saveMOB21Local();
    }
    });
		
		var containerBox1 = new sap.m.FlexBox({
			items: [
			        	textInspectionResult,
			        	textSpecification,
			        	inputResults,
			        	insResDDMOB21
			        ],
			//direction:"Row",
			//justifyContent:"Center",
			//alignItems:"Start",
			//width : "230px"
			        
			       
		});
		
		var textSampleSize = new sap.m.Label({
		      text: "Specification",
		    	 
		    }).addStyleClass("headerText");
		
		var textRange = new sap.m.Text({
			id : "text_er1"
			
			//text : "Expected: 5"
			
		}).addStyleClass("textSpecification");
		
		/*var inputSampleSize = new sap.m.Input({
			id : "ip_samplesize",
			text : "",
			liveChange : oController.checkSampleSize,
		});*/
		
		
		var containerBox2 = new sap.m.FlexBox({
			
			items: [
			        	textSampleSize,
			        	textRange
			        	//inputSampleSize
			        ],
			direction:"Row",
			justifyContent:"Center",
			alignItems:"Start",
			//width : "230px"
		});
		
		//var isRunningOnDesktop = jQuery.device.is.desktop; 
		var textInspectionNote ;
		/*if ( ! isRunningOnDesktop)
			{
			 textInspectionNote = new sap.m.Text({
		      text: "Inspection Note"
		    	 
		    }).addStyleClass("headerText");
		 
		var insNotesTextField = new sap.m.Input({
			 id : "insNotesTextFieldMob21",
		 });
			 
			}*/
		
		textInspectionNote = new sap.m.Label({
		      text: "Inspection Note"
		    	 
		    }).addStyleClass("headerText");
		 
		var insNotesTextField = new sap.m.TextArea("insNotesTextFieldMob21",{rows:4, cols:20,maxLength:40,  height : "8rem",
			
		change : function()
		{
			window.localStorage.setItem("InsNote_"+sap.ui.getCore().byId("Mob21lot").getText().concat(
					globalInsOp.concat(globalInsChar))+sap.ui.getCore().byId("Mob21-ListDetail-Number-List").getText() , 
					sap.ui.getCore().byId("insNotesTextFieldMob21").getValue());
			//oController.saveMOB21Local;
			saveMOB21Local();
		}
		
		});
		insNotesTextField.setPlaceholder("Add details(max 40 Char.)");
		
		
		///////////////////////////////////////////////////////////////////////////////
		
		var textReferenceMaterial = new sap.m.Text({
		      text: "Reference Material",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		
		
		var imageDoc = new sap.m.Image({
			id : "mob21ImgVie",
		    src: "img/ico_showimage.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
	   press : oController.showIMGMOB21
		  });
		
		
		var imageGallery =  new sap.m.Image({
		    src: "img/ico_showpdf.png",
	    	 press : oController.showPDFMOB21,
	    	
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        
		    })
		  });
		var imageInfo = new sap.m.Image({
		    src: "img/info.png",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    })
		  });
		
		
		function  attachImage() 
		{	 
			dialogImgUpload.open();
			 setTimeout(function(){
				 dialogImgUpload.close();
				cmraDialog.open();
				 //app.to(page3);
	    	    
	    	    },3000);
		};
		var imageMb15_01 = new sap.m.Image({
		    src: "img/MB15_01.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    }),
		    
		    press : attachImage
		  });
		
		/*var containerBox3 = new sap.m.FlexBox({
			items: [
			        	lblDummy4,
			        	textReferenceMaterial,
			        	imageDoc,
			        	imageGallery,
			        	imageInfo
			        ],
			direction:"Row",
			justifyContent:"Center",
			alignItems:"Start",
			//width : "230px"
		});*/
		
		var imageMb15_02 =  new sap.m.Image({
		    src: "img/MB15_02.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    }),
		    press : attachImage
		  });

		var imageMb15_01A = new sap.m.Image({
		    src: "img/MB15_01A.jpg",
		    visible : false ,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    }),
		    press : attachImage
		  });
		
		/*var imageGallery =  new sap.m.Image({
		    src: "img/gallery.png",
		    press: function () {
		    	 
		    	imageMb15_01.setVisible(true);
		    	imageMb15_02.setVisible(true);
		    	imageMb15_01A.setVisible(true);
		      },
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		        
		    })
		  });*/
		///////////////////////////////////////////////////
		
		var cmraDialog1 = new sap.m.Dialog({
		    title: "Add a Photo",
		    content: new sap.m.Text({
		    // id : "po1",		
		    text : "Do you want to take a new photo or find a saved photo"
		    }
		    	),
		    leftButton: new sap.m.Button({
		      text: "New Photo",
		      press: function () {
		    	  cmraDialog1.close();
		    	 
		    	  pictureSource=navigator.camera.PictureSourceType;
		          destinationType=navigator.camera.DestinationType;
		          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
		            destinationType: destinationType.FILE_URI  , 
		            saveToPhotoAlbum: false});
		      }
		    }),
		    rightButton: new sap.m.Button({
		      text: "Saved Photo",
		      press: function () {
		    	  
		    	  
		    	  document.getElementById("files").click();
				  selectImageFromLocal(sap.ui.getCore().byId("Mob21-LocalImageSelector"));
		    	 cmraDialog1.close();
		      }
		    })
		  });

		var selectedImage = new sap.m.Image({
			id:"Mob21-LocalImageSelector",
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
		  // window.resolveLocalFileSystemURI("file:///storage//sdcard/MOB21IMG", onResolveSuccess2, fail2);
		   console.log("now in move pic");
		   //new file name
		   newFileName = n + ".jpg";
		   var myFolderApp = "MOB21IMG";

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
			 var mob21Image = new Array();
			 var items = window.localStorage.getItem('MOB21IMGMEM');
			 if (items === undefined || items === null || items.length === 0)
			 {
				 
				// var notiImage = new Array();
				//alert("in first bliock ");
				 mob21Image[0] = newFileName;
				 oImageArrReceived[0] =  newFileName ;	
				var imageModelString = 	JSON.stringify(mob21Image);
					 window.localStorage.setItem("MOB21IMGMEM", imageModelString);
					
			 }
			 else
				 {
				 var items2 = window.localStorage.getItem('MOB21IMGMEM');
				// alert(items2);
				   oImageArrReceived =  JSON.parse(items2);
				 oImageArrReceived.push(newFileName);
				 
					var imageModelString = 	JSON.stringify(oImageArrReceived);
					 window.localStorage.setItem("MOB21IMGMEM", imageModelString);
				// alert( oImageArrReceived[0]);
					 
				 }
			 
			   
			// window.resolveLocalFileSystemURI("file:///storage//sdcard/MOB21IMG", onResolveSuccess, fail);
				 window.resolveLocalFileSystemURI("file:///storage//emulated/0/MOB21IMG", onResolveSuccess, fail);
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

			
			 image1Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-1]);
			 image2Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-2]);
			 image3Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-3]);
			 containerImage3.setVisible(true);
			 containerImage2.setVisible(true);
			 containerImage1.setVisible(true);
			 


			}
			else if (len == 2)
			{
			
			 image1Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-1]);
			 image2Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-2]);
			 containerImage2.setVisible(true);
			 containerImage1.setVisible(true);
			 containerImage3.setVisible(false);


			}
			else if (len == 1)
			{


			image1Mob21.setSrc("file:///storage//emulated/0/MOB21IMG/"+oImageArrReceived[len-1]);

			containerImage1.setVisible(true);
			containerImage3.setVisible(false);
			containerImage2.setVisible(false);
		}

		}

		function failIN(evt) {
		   console.log("in failIN");
		   console.log(evt.target.error.code);
		};
		
		var image1Mob21 = new sap.m.Image({
		   id : "image1Mob21",
		    width : "60px",
		    height : "60px",
		    layoutData : new sap.ui.layout.GridData({
		    	 span: "L1 M3 S3",
		        linebreakL: true,
				linebreakM: true,
				linebreakS: true
		    })
		  });

		image1Mob21.attachPress(oController.imgOpenMOB21);
		var image2Mob21 =  new sap.m.Image({
			  id : "image2Mob21",
		    width : "60px",
		    height : "60px",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L1 M3 S3",
		    })
		  });
		image2Mob21.attachPress(oController.imgOpenMOB21);


		
		
		var image3Mob21 = new sap.m.Image({
			id : "image3Mob21",
		    width : "60px",
		    height : "60px",
		    layoutData : new sap.ui.layout.GridData({
		    	 span: "L1 M3 S3",
		    })
		  });
		
		image3Mob21.attachPress(oController.imgOpenMOB21);

		
		
		var image4Mob21 =  new sap.m.Image({
		    src: "img/MB15-Camera_Icon.png",
		    width : "60px", 
		    height : "60px",
		    layoutData : new sap.ui.layout.GridData({
		    	  span: "L1 M3 S3",
		    }),
		    press: function () {
		       cmraDialog1.open();
		      },
		  });
		//image4Mob21.attachPress(oController.imgOpenMOB21);
		
		var oGridForm ;
		var oGridForm1;
		 
		
	 oGridForm = new sap.ui.layout.Grid({
            hSpacing: 1,
            vSpacing: 0,   
            defaultSpan : "L3 M3 S12",
            content: [
                      	lblDummy4,
                      	textReferenceMaterial,
                      	imageDoc,
                      	imageGallery
                ]
		  });
	 
	 
	 /************for image***********************/
	 
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
		    	 imgSRC = image1Mob21.getSrc();
		    	 delDialog.open();
		           //window.resolveLocalFileSystemURI
		         //  (image1.getSrc(), onResolveSuccessDel, failRem);
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
		    	 imgSRC = image2Mob21.getSrc();
		    	 delDialog.open();
		          // window.resolveLocalFileSystemURI
		         //  (image2.getSrc(), onResolveSuccessDel, failRem);
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
		    	 imgSRC = image3Mob21.getSrc();
		    	 delDialog.open();
		         //  window.resolveLocalFileSystemURI
		         //  (image3.getSrc(), onResolveSuccessDel, failRem);
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
		
	
	 var items2 = window.localStorage.getItem('MOB21IMGMEM');
		// alert(items2);
		  // oImageArrReceived =  JSON.parse(items2);			 
			var imageModelString = 	JSON.stringify(oImageArrReceived);
			 window.localStorage.setItem("MOB21IMGMEM", imageModelString);
			 
//	alert(oImageArrReceived.length);
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
		  id : "containerImage1MOB21",
			items: [
          btnImg1Close,
          image1Mob21,
					
			        ],
			        visible : false ,       
			direction:"Row",
			//justifyContent:"Right",
			alignItems:"Start",
			height : "100px",
			width : "100px"
		});
	  
	  var containerImage2 = new sap.m.FlexBox({
		  id : "containerImage2MOB21",
			items: [
        btnImg2Close,
        image2Mob21,
					
			        ],
			        visible : false ,
			direction:"Row",
			//justifyContent:"Right",
			alignItems:"Start",
			height : "100px",
			width : "100px"
		});
	  
	  var containerImage3 = new sap.m.FlexBox({
		  
		  id : "containerImage3MOB21",
			items: [
        btnImg3Close,
        image3Mob21,
					
			        ],
			        visible : false ,
			direction:"Row",
			//justifyContent:"Right",
			alignItems:"Start",
			height : "100px",
			width : "100px"
		});
	  var containerImg = new sap.m.FlexBox({
		 // width : "400px",
		  defaultSpan : "L6 M6 S12",
			items: [
					containerImage1,
					containerImage2,
					containerImage3,
					image4Mob21,
					
					selectedImage
			        ],
			direction:"Row",
			justifyContent:"SpaceAround",
			alignItems:"Start"
		}).addStyleClass("paddingBottomMOB21");
	  
	  /***************************************************/
	 if (g_runningInTablet == true || g_runningOnPhone == true)
	  {/////////////////////////////////////////////////
		oGridForm1 = new sap.ui.layout.Grid({
			// width : "420px",
            hSpacing: 1,
            vSpacing: 0,   
            defaultSpan : "L6 M6 S12",
            content: [
            containerImg              	                   	                    	
                ]
		  }).addStyleClass("paddingBottomMOB21");
		  }
		
		var containerBoxTextInspectionMethod = new sap.m.FlexBox({
			items: [
				      
			        		//lblDummy3,
							textInspectionMethod,
							textarea
								
								
							
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("flex");
	
		var containerBoxTextsAndInputs = new sap.m.FlexBox({
			items: [
								lblDummy6,
								textSampleSize,
								textRange,
			        			lblDummy1,
				                textInspectionResult,
								//textSpecification,
								inputResults,
								insResDDMOB21,
								lblDummy2,
								textInspectionNote,
								insNotesTextField,
								lblDummy7,
			        ],
			direction:"Column",
			justifyContent:"Start",//Contents would be placed in the begin
			alignItems:"Start"
		}).addStyleClass("flex");
		
		
		var oForm = new sap.ui.layout.form.SimpleForm({
		    minWidth : 1024,
		    maxContainerCols: 4,
		    editable: true,
		    layout: "ResponsiveGridLayout",
		    labelSpanL:3,
		    labelSpanM:3,
		    columnsL:4,
		    columnsM:4,
		    content:[
		             containerBox1,
		          //   containerBox2,
		            // containerBox3
		            
		    ]
		});
		
	var btnSave =	new sap.m.Button({
            text: "Save",
           // icon: "sap-icon://sys-save",
            press : function (){
            	 oController.mob21CharDetSave();
         		}
          });
		
	
	//
	
	/*if( g_runningOnPhone == true)
	{
	
		return new sap.m.Page({
			title: "Enter Results",
			id : "Mob21-FifthScreen-Mobile-BackNavButton",
			content: [
			          containerBoxTextInspectionMethod,
			          oGridForm,
			          containerBoxTextsAndInputs,
			         // lblDummy8,
			          oGridForm1,
			          lblDummy5
			        //  btnSave
			         //oForm
			      
			],
			showFooter: true,
			
			
			showNavButton: true,
		    navButtonTap:function(){
		        	g_MobileNavigationId = "Mob21-ThirdScreen-Mobile-BackNavButton";
		            openSplashScreen();
		            setTimeout(function(){
		        	sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
		        	var appM = sap.ui.getCore().byId("myApp"); 
			    	{
						appM.to("idMOB21Det");
					    closeSplashScreen();
					}
		            },1000);//constant delay
		      	
		            
		            
            },
            
			
			
			
			
			footer: new sap.m.Bar({
				id : "Mob21-footer-6",
		        contentRight: [
		         
		          new sap.m.Button({
			            text: "Save",
			           icon: "sap-icon://save",
			            press : function (){
			            	
			            	 if( sap.ui.getCore().byId("insResDDMOB21").getSelectedKey() == " " 
			            		 
			            	 &&  sap.ui.getCore().byId("ip_samplesize").getValue() == ""
			            	 
			            	 
			            	 
			            	 )
					          {
						    	  sap.m.MessageBox.show(
								  "Please Enter Inspection Result"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");  
					          }
					          else
					        	  {
					        	  oController.mob21CharDetSave();
					        	  }
			            	 
			            	 
		                	
		             		}
			          })
		        ],
		        
		        contentLeft : [
		                       new sap.m.Button({
		       		            text: "Back",
		       		            icon : "sap-icon://close-command-field",
		       		            press : function(){
		       		             openSplashScreen();
		       		             setTimeout(function(){
		       		        	sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
		       		        	var appM = sap.ui.getCore().byId("myApp"); 
		       			    	{
		       						appM.to("idMOB21Det");
		       					    closeSplashScreen();
		       					}
		       		            },1000);//constant delay
		       		          
		       		          
		       		          	
		       			    	
		       			    	
		       				 }
		       		          }),
		       		          
		       		          ]
			})
			
			
			
 		
		});
	}
	
	else
		{
		
		return new sap.m.Page({
			title: "Enter Results",
			content: [
			          containerBoxTextInspectionMethod,
			          oGridForm,
			          containerBoxTextsAndInputs,
			         // lblDummy8,
			          oGridForm1,
			          lblDummy5
			        //  btnSave
			         //oForm
			      
			],
			showFooter: true,
			footer: new sap.m.Bar({
				id : "Mob21-footer-6",
		        contentRight: [
		          
		          new sap.m.Button({
			            text: "Save",
			            
			           icon: "sap-icon://save",
			            press : function (){
			            	
			            	if( sap.ui.getCore().byId("insResDDMOB21").getSelectedKey() == " " 
			            		 
				            	 &&  sap.ui.getCore().byId("ip_samplesize").getValue() == ""
				            	 
				            	 
				            	 
				            	 )
		          {
			    	  sap.m.MessageBox.show(
					"Please Enter Inspection Result"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");  
		          }
		          else
		        	  {
		        	  oController.mob21CharDetSave();
		        	  }
		                	
		             		}
			          })
		        ],
		        
		        contentLeft : [
new sap.m.Button({
    text: "Back",
    icon: "sap-icon://close-command-field" ,
    press : function(){

    openSplashScreen();
    
    setTimeout(function(){
    	   //closeSplashScreen();//splash screen closed	
    sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
	var appM = sap.ui.getCore().byId("myApp"); 
		
	
		{
		appM.to("idMOB21InitView12");
		var app = sap.ui.getCore().byId("splitAppMOB21Det");
        app.toDetail("idMob21BlankScreen");	
        
        closeSplashScreen();
		}
	
	 },1000);//constant delay
    
    
    }
  }),
		                       ]
			
			}).addStyleClass("footer")
			
			
			
 		
		});
		}*/
		
		
	
	//DMS Changes
	
	//if( g_runningOnPhone == true)
	{/*
	
		return new sap.m.Page({
			title: "Enter Results",
			id : "Mob21-FifthScreen-Mobile-BackNavButton",
			content: [
			          containerBoxTextInspectionMethod,
			          oGridForm,
			          containerBoxTextsAndInputs,
			          oGridForm1,
			          lblDummy5
			      
			],
			showFooter: true,
			showNavButton: true,
		    navButtonTap:function(){
		        	g_MobileNavigationId = "Mob21-ThirdScreen-Mobile-BackNavButton";
		            openSplashScreen();
		            setTimeout(function(){
		        	sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
		        	var appM = sap.ui.getCore().byId("myApp"); 
			    	{
						appM.to("idMOB21Det");
					    closeSplashScreen();
					}
		            },1000);//constant delay
            },
			
			footer: new sap.m.Bar({
					id : "Mob21-footer-6",
					contentRight: [
					               new sap.m.Button({
					            	   text: "Save",
					            	   icon: "sap-icon://save",
					            	   press : function (){
					            		   if( sap.ui.getCore().byId("insResDDMOB21").getSelectedKey() == " " 
					            			   &&  sap.ui.getCore().byId("ip_samplesize").getValue() == ""
					            		   )
					            		   {
					            			   sap.m.MessageBox.show(
					            					   "Please Enter Inspection Result"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");  
					            		   }
					            		   else
					            		   {
					            			   oController.mob21CharDetSave();
					            		   }
		             		}
			          })
		        ],
			})
		});
	*/}
	
	//else
		{
		
		return new sap.m.Page({
			title: "Enter Results",
			content: [
			          containerBoxTextInspectionMethod,
			          
			          //DMS Changes
			          new sap.m.IconTabBar({
			        	    id:"Mob21_IconTabBar",
	      					expandable: false,
	      					select : oController.handleIconTabBarSelect,
	      					items: [
	      						new sap.m.IconTabFilter({
	      							key: "firstTab",
	      							text: "Details",
	      							icon: "sap-icon://e-care",
	      							content: [
	      								new sap.ui.layout.form.SimpleForm({
	      									layout: "ResponsiveGridLayout",
	      									editable: false,
	      									labelSpanL : 12,
	      									labelSpanM : 12,
	      									//columnsL  :1,
	      									//emptySpanL: 12,
	      									//emptySpanM: 12,
	      									//breakpointM: 1000,
	      									content: [
	      									          textSampleSize,
	      									          textRange,
	      									          textInspectionResult,
	      									          new sap.ui.layout.HorizontalLayout({
	      									        	  content : [
	      									        	             inputResults,
	      									        	             insResDDMOB21,   
	      									        	             ]
	      									          }),
	      									          textInspectionNote,
	      									          insNotesTextField,  
	      									          ]
	      								     })     
	      								]    
	      						        }),
	      						      new sap.m.IconTabFilter({
	      								text: "Documents",
	      								icon: "sap-icon://documents",
	      								key : "Mob21Doc",
	      								content: [
	      									new sap.ui.layout.form.SimpleForm({
	      										layout: "ResponsiveGridLayout",
	      										editable: true,
	      										
	      										//emptySpanL: 6,
	      										//emptySpanM: 6,
	      										//breakpointM: 1000,
	      										content: [
	      										new sap.m.List({
	      										id : "Mob21DocumentListItem",
	      										noDataText: "",
	      										mode: sap.m.ListMode.SingleSelectMaster,
	      										select : oController.handleMob21SelectedDocListpress,
	      										items: {
													path: "/results",
													template: new sap.m.ObjectListItem({
														title :"{Wsapplication}"+"\n"+"{Documentnumber}",
														number:"{Documentpart}",
														numberUnit:"{Documentversion}",
														attributes:[
														            new sap.m.ObjectAttribute({
														            	text:"{DocDescription}"
														           })
														           ],
														firstStatus:
															       new sap.m.ObjectStatus({
														            	   	text: "{Description}"
															        }),
													})
												}
	      									})
	      										]
	      									})
	      								]
	      							}),
	      							 //DMS
	      				            new sap.m.IconTabFilter("MOB21_PhotoFilter",{
	      				            	 text: "{i18n>PHOTO}",
	      					              key : "Mob21Image",
	      					              icon: "sap-icon://attachment",
	      			 		              content: [
	      			 		                new sap.m.List({
	      			 		                   id : "Mob21ImageListItem",
	      			 		                    headerToolbar : new sap.m.Toolbar({
	      			 		                    content:  [
	      			 		                      new sap.m.Label({
	      			 		                        text : "Available Images:" ,
	      			 		                               }),
	      			 		                      new sap.m.ToolbarSpacer(),
	      			 		                      new sap.m.Button({
	      			 		                        text: "Add",
	      			 		                        icon: "sap-icon://add",
	      			 		                 	    visible : desktopMode,
	      			 		                        type: "Emphasized",
	      			 		                       press: function(){
	      			 		                    	   		sap.ui.getCore().byId("Mob00ImageDialogBox").open();
	      			 		                       }
	      			 		                      })
	      			 		                    ] 
	      			 		                  }),
	      			 		                   mode: sap.m.ListMode.SingleSelectMaster,
	      			 		                   select : oController.handleMob21SelectedImageListpress,
	      			 		                   items: {
													path: "/results",
													template: new sap.m.ObjectListItem({
														title :"{Wsapplication}"+"\n"+"{Documentnumber}",
														number:"{Documentpart}",
														numberUnit:"{Documentversion}",
														attributes:[
														            new sap.m.ObjectAttribute({
														            	text:"{DocDescription}"
														           })
														           ],
														firstStatus:
															       new sap.m.ObjectStatus({
														            	   	text: "{Description}"
															        }),
													})
												}
	      			 		                }),
	      			 		                new sap.m.List({
	      			 		                	id : "Mob21AddedImageList",
	      			 		                	mode: sap.m.ListMode.SingleSelectMaster,
	      			 		                	visible : desktopMode,
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
	      			 		            
	      				            })
	      							
	      						
	      						
	      						]}),
			          
			        //  oGridForm,
			          //containerBoxTextsAndInputs,
			         // oGridForm1,
			      
			],
			showFooter: true,
			showNavButton: g_runningOnPhone,
		    navButtonTap:function(){
		        	g_MobileNavigationId = "Mob21-ThirdScreen-Mobile-BackNavButton";
		            openSplashScreen();
		            setTimeout(function(){
		        	sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
		        	var appM = sap.ui.getCore().byId("myApp"); 
			    	{
						appM.to("idMOB21Det");
					    closeSplashScreen();
					}
		            },1000);//constant delay
            },
			footer: new sap.m.Bar({
				id : "Mob21-footer-6",
		        contentRight: [
		          new sap.m.Button({
			            text: "Save",
			           icon: "sap-icon://save",
			            press : function (){
			            	if( sap.ui.getCore().byId("insResDDMOB21").getSelectedKey() == " " 
				            	 &&  sap.ui.getCore().byId("ip_samplesize").getValue() == ""
				            	 )
		          {
			    	  sap.m.MessageBox.show(
					"Please Enter Inspection Result"+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");  
		          }
		          else
		        	  {
		        	  oController.mob21CharDetSave();
		        	  }}
			          })
		        ],
		        contentLeft : [
		                       new sap.m.Button({
		                    	   text: "Back",
		                    	   icon: "sap-icon://close-command-field" ,
		                    	   press : function(){
		                    		   openSplashScreen();
		                    		   setTimeout(function(){
		                    			   //closeSplashScreen();//splash screen closed	
		                    			   sap.ui.getCore().byId("idMOB21Mas").getController().loadInsTree();
		                    			   var appM = sap.ui.getCore().byId("myApp"); 
		                    			   {
		                    				   appM.to("idMOB21InitView12");
		                    				   var app = sap.ui.getCore().byId("splitAppMOB21Det");
		                    				   app.toDetail("idMob21BlankScreen");	
		                    				   closeSplashScreen();
		                    			   }
		                    		   },1000);//constant delay
		                    	   }}),]
			})//.addStyleClass("footer")
			});
			}
	}

});



		

	