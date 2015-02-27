sap.ui.jsview("com.cg.gtm.view.Drop1_MOB16.MOB16-NotiTaskDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.MOB16-NotiTaskDetail
	*/ 
	getControllerName : function() {
		return "com.cg.gtm.view.Drop1_MOB16.MOB16-NotiTaskDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.MOB16-NotiTaskDetail
	*/ 
	//Done
	
	createContent : function(oController) {
		
		 
		/* var oModelTaskDetRcvd =    sap.ui.getCore().getModel("oModelTaskDet");
		 var taskcode = oModelTaskDetRcvd.getProperty("/taskDetailCode", null);
		 var taskDetailCode = oModelTaskDetRcvd.getProperty("/taskDetailCode", null);
		 var taskDetailStDt = oModelTaskDetRcvd.getProperty("/taskDetailStDt", null);
		 var taskDetailEnDt = oModelTaskDetRcvd.getProperty("/taskDetailCode", null);*/
		 var pictureSource;   // picture source
		 var destinationType; // sets the format of returned value 
		 var imgSRC = "";
		    
		var textTaskNo = new sap.m.Text({
		    text: "Task Description",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("paddingTopandfontweight");
		
		var inputTaskNo = new sap.m.Text({
			id: "tasknum",
		   
			//text : oNotiTaskLstModel.getProperty("111"),
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		var lblDummy1 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var textTaskCode = new sap.m.Text({
		    text: "Task Sequence",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("FontBold");
		
		var inputTaskCode = new sap.m.Text({
			id: "taskcode",
		   
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		var lblDummy2 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var textTaskTxt = new sap.m.Text({
		    text: "Task Code",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("FontBold");
		
		var textTskDetailCode = new sap.m.Text({
			id: "taskDetailCode",
		  
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		
		
		var lblDummy3 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		
		var textcodtext = new sap.m.Text({
		    text: "Task Code Text",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("FontBold");
		

		
		var texttaskcodetext = new sap.m.Text({
			id: "texttaskcodetext",
		  
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		var lblDummy4A = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		
		
		
		
		var textPlannedStrtDate = new sap.m.Text({
		    text: "Planned Start Date",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L4 M6 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("FontBold");
		
		var textTskDetailStrtDt = new sap.m.Text({
			
			id : "taskDetailStDt",
	
		   
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		var lblDummy4 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		

		
		var textPlannedFnDt = new sap.m.Text({
		    text: "Planned Finish Date",
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  }).addStyleClass("FontBold");
		
		var textTskDetailEnDt = new sap.m.Text({
			
			id : "taskDetailEnDt",
		   // text: taskDetailEnDt,
		    layoutData : new sap.ui.layout.GridData({
		        span: "L3 M3 S12",
		        linebreakL: true,
					linebreakM: true,
					linebreakS: true
		    })
		  });
		
		var lblDummy5 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy5A = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		var lblDummy5B = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		var textAdNotes = new sap.m.Text({
		      text: "Additional Notes",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		
		var textAreaAdNotes = new sap.m.TextArea("Text_AddNotes", {
			cols : 40,
			rows : 1,
			  height : "200px",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L12 M12 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    });
		
		var lblDummy6 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy7 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy8 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var lblDummy9 = new sap.m.Label({
			text: "Dummy"
		}).addStyleClass("HideLabelAndHeight");
		
		var btnSave = new sap.m.Button({
	        icon: "sap-icon://save",
            text: "SAVE",
           // type: sap.m.ButtonType.Accept,
            layoutData: new sap.m.FlexItemData({growFactor: 1})
          });
		  
		 btnSave.attachPress(sap.ui.getCore().byId("idMOB16NotificationList").getController().onSave);
		  
		  var btnSaveAndComplete = new sap.m.Button({
             text: "{i18n>MOB16_SaveAndComplete}",
             icon: "sap-icon://save",
            // type: sap.m.ButtonType.Accept,
             layoutData: new sap.m.FlexItemData({growFactor: 1})
           });
		  
		  btnSaveAndComplete.attachPress(sap.ui.getCore().byId("idMOB16NotificationList").getController().onSaveAndComplete);
		 
		 var lblDummy10 = new sap.m.Label("lblDummy10",{
				text: "Dummy"
			}).addStyleClass("HideLabelAndHeight");
		 
		 var lblDumm11 = new sap.m.Label("lblDumm11",{
				text: "Dummy"
			}).addStyleClass("HideLabelAndHeight");
		  
		  var textRefMat = new sap.m.Text({
		      text: "Reference Material",
		      layoutData : new sap.ui.layout.GridData({
		          span: "L3 M3 S12",
		          linebreakL: true,
		 			linebreakM: true,
		 			linebreakS: true
		      })
		    }).addStyleClass("headerText");
		  
		  var image1 = new sap.m.Image({
			    src: "img/ico_showimage.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			        linebreakL: true,
					linebreakM: true,
					linebreakS: true
			    }),
			   press : oController.showIMGMOB16
			  });
			
			

			var image3 = new sap.m.Image({
			    src: "img/ico_showpdf.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			    }),
			    press : oController.showPDFMOB16
			  });
			
			

			
			var dialog = new sap.m.BusyDialog({
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
			
			function  attachImage() 
			{	 
				dialog.open();
				 setTimeout(function(){
					 dialog.close();
					cmraDialog.open();
					 //app.to(page3);
		    	    
		    	    },3000);
			};
			var image4 = new sap.m.Image({
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
			
			var image5 =  new sap.m.Image({
			    src: "img/MB15_02.jpg",
			    visible : false ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			    }),
			    press : attachImage
			  });

			var image6 = new sap.m.Image({
			    src: "img/MB15_01A.jpg",
			    visible : false ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			    }),
			    press : attachImage
			  });
			
			var image2 =  new sap.m.Image({
			    src: "img/gallery.png",
			    press: function () {
			    	 
			    	  image4.setVisible(true);
			    	  image5.setVisible(true);
			    	  image6.setVisible(true);
			      },
			    layoutData : new sap.ui.layout.GridData({
			        span: "L1 M3 S3",
			        
			    })
			  });
/***********************************for image*******************/
			
			function onResolveSuccessDel(entry)
			{
				 //alert("now removing");
				entry.remove(successRem, failRem);
			}
			function successRem()
			{
				
				//alert("success");
				
					oImageArrReceived.splice(oImageArrReceived.length-delImg,1);
					
				
				 var items2 = window.localStorage.getItem('000002');
					// alert(items2);
					  // oImageArrReceived =  JSON.parse(items2);			 
						var imageModelString = 	JSON.stringify(oImageArrReceived);
						 window.localStorage.setItem("000002", imageModelString);
						 
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
			
		//	var isRunningOnDesktop = jQuery.device.is.desktop; 
			if (  g_runningInTablet == true || g_runningOnPhone == true)
				{
			var imageMOB16_1 = new sap.m.Image({
			   // src: "img/MB15_01A.jpg",
				id : "imageMOB16_1",
				width : "60px" ,
				height : "60px" ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			        linebreakL: true,
					linebreakM: true,
					linebreakS: true
			    })
			  });

			//imageMOB16_1.addStyleClass("BtnStyleMOB16");
			imageMOB16_1.attachPress(oController.imgOpenMOB16);


			var imageMOB16_2 =  new sap.m.Image({
			  //  src: "img/MB15_02.jpg",
				id : "imageMOB16_2",
				width : "60px" ,
				height : "60px" ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    })
			  });

			//imageMOB16_2.addStyleClass("BtnStyleMOB16");
			imageMOB16_2.attachPress(oController.imgOpenMOB16);

			var imageMOB16_3 = new sap.m.Image({
			   // src: "img/MB15_01.jpg",
				id : "imageMOB16_3",
				width : "60px" ,
				height : "60px" ,
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    })
			  });
			//imageMOB16_3.addStyleClass("BtnStyleMOB16");
			imageMOB16_3.attachPress(oController.imgOpenMOB16);

			var imageMOB16_4 =  new sap.m.Image({
			    src: "img/MB15-Camera_Icon.png",
			    layoutData : new sap.ui.layout.GridData({
			        span: "L2 M3 S12",
			    }),
			    press: function () {
			    	
			    	  pictureSource=navigator.camera.PictureSourceType;
			          destinationType=navigator.camera.DestinationType;
			    	// Take picture using device camera and retrieve image as base64-encoded string
			    	 
			          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
			            destinationType: destinationType.FILE_URI  , 
			            saveToPhotoAlbum: false});
			      },
			  });
			imageMOB16_4.addStyleClass("BtnStyleMOB16");
			
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
			 
			
			 var btnImg1CloseMOB16 =  new sap.m.Image({
				    src: "img/Remove-icon.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    width : "30px",
				    height : "30px",
				    press: function () {
				    	 delImg =  1;
				    	 imgSRC = imageMOB16_1.getSrc();
				    	 delDialog.open();
				         //  window.resolveLocalFileSystemURI
				           //(imgSRC, onResolveSuccessDel, failRem);
				      },
				  });
			 
					
			  var btnImg2CloseMOB16 = new sap.m.Image({
				    src: "img/Remove-icon.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    width : "30px",
				    height : "30px",
				    press: function () {
				    	 delImg =  2;
				    	 imgSRC = imageMOB16_2.getSrc();
				    	 delDialog.open();
				         //  window.resolveLocalFileSystemURI
				          // (imageMOB16_2.getSrc(), onResolveSuccessDel, failRem);
				      },
				  });
			  
			  
			  var btnImg3CloseMOB16 = new sap.m.Image({
				    src: "img/Remove-icon.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    }),
				    width : "30px",
				    height : "30px",
				    press: function () {
				    	 delImg =  3;
				    	 imgSRC = imageMOB16_3.getSrc();
				    	 delDialog.open();
				         //  window.resolveLocalFileSystemURI
				          // (imageMOB16_3.getSrc(), onResolveSuccessDel, failRem);
				      },
				  });
			
			 
			  
			  var containerImage1 = new sap.m.FlexBox({
				  id : "containerImage1MOB16",
					items: [
	                     btnImg1CloseMOB16,
	                     imageMOB16_1,
							
					        ],
					        visible : false ,       
					direction:"Row",
					//justifyContent:"Right",
					alignItems:"Start",
					height : "100px",
					width : "100px"
				});
			  
			  var containerImage2 = new sap.m.FlexBox({
				  id : "containerImage2MOB16",
					items: [
	                   btnImg2CloseMOB16,
	                   imageMOB16_2,
							
					        ],
					        visible : false ,
					direction:"Row",
					//justifyContent:"Right",
					alignItems:"Start",
					height : "100px",
					width : "100px"
				});
			  
			  var containerImage3 = new sap.m.FlexBox({
				  
				  id : "containerImage3MOB16",
					items: [
	                   btnImg3CloseMOB16,
	                   imageMOB16_3,
							
					        ],
					        visible : false ,
					direction:"Row",
					//justifyContent:"Right",
					alignItems:"Start",
					height : "100px",
					width : "100px"
				});
			
			  
			var containerBoxImages = new sap.m.FlexBox({
				width : "480px",
				//fitContainer : true ,
				items: [
							containerImage1,
							containerImage2,
							containerImage3,
							imageMOB16_4
				        ],
				        direction:"Row",
						//justifyContent:"SpaceAround",
						//alignItems:"Start"
			});
			
			 var imagePopMOb16 =  new sap.m.Image("",{
				    src: "img/MB15-Camera_Icon.png",
				    layoutData : new sap.ui.layout.GridData({
				        span: "L2 M3 S12",
				    })
				  });
			 //new sap.ca.ui.ZoomableScrollContainer(
			 var mob6ScrollContainer =  new sap.m.ScrollContainer({
		            width : "300px",
		            height : "400px",
		            horizontal : true,
		            vertical : true,
		            content : [imagePopMOb16]
		        });
			
			 var popoverMOB16 = new sap.m.Popover("", {
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
		            content: mob6ScrollContainer 
		        });
			
			 var oFormImg = new sap.ui.layout.form.SimpleForm({
				  //  minWidth : 1024,
				 width : "510px",
				   
				layout: "ResponsiveGridLayout",
				
				    content:[
                      containerBoxImages
				    ]
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
			   // window.resolveLocalFileSystemURI("file:///storage//sdcard/NotiTaskList", onResolveSuccess2, fail2);
			    console.log("now in move pic");
			    //new file name
			    newFileName = "000002_" + n + ".jpg";
			    var myFolderApp = "NotiTaskList";

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
				 var items = window.localStorage.getItem('000002');
				 if (items === undefined || items === null || items.length === 0)
				 {
					 
					// var notiImage = new Array();
					//alert("in first bliock ");
					  notiImage[0] = newFileName;
						
					var imageModelString = 	JSON.stringify(notiImage);
						 window.localStorage.setItem("000002", imageModelString);
						// alert("now set  ");
						 var items2 = window.localStorage.getItem('000002');
						// alert(items2);
						   oImageArrReceived =  JSON.parse(items2);
						// alert( oImageArrReceived[0]);
				 }
				 else
					 {
					 var items2 = window.localStorage.getItem('000002');
					// alert(items2);
					   oImageArrReceived =  JSON.parse(items2);
					 oImageArrReceived.push(newFileName);
					 
						var imageModelString = 	JSON.stringify(oImageArrReceived);
						 window.localStorage.setItem("000002", imageModelString);
					// alert( oImageArrReceived[0]);
						 
					 }
				 
				   
				// window.resolveLocalFileSystemURI("file:///storage//sdcard/NotiTaskList", onResolveSuccess, fail);
					 window.resolveLocalFileSystemURI("file:///storage//emulated/0/NotiTaskList", onResolveSuccess, fail);
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
			    
			   // alert(oImageArrReceived);
			    
			 // image1.setSrc("file:///storage//sdcard/NotiTaskList/"+oImageArrReceived[0]);
			   // imageMOB16_1.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[0]);
			    
			    var len = oImageArrReceived.length;
			    containerImage3.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage1.setVisible(false);
			    
			    if (len >= 3)
				{
				
				 console.log(3);
				 imageMOB16_1.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-1]);
				 imageMOB16_2.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-2]);
				 imageMOB16_3.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-3]);
				 containerImage1.setVisible(true);
				 containerImage2.setVisible(true);
				 containerImage3.setVisible(true);
				
				
				}
			else if (len == 2)
				{
				 console.log(2);
				 imageMOB16_1.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-1]);
				 imageMOB16_2.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-2]);
				 containerImage1.setVisible(true);
				 containerImage2.setVisible(true);
				 containerImage3.setVisible(false);
				
				}

			else if ( len == 1)
				{
				
				
				 console.log(1);
				
			      
				 imageMOB16_1.setSrc("file:///storage//emulated/0/NotiTaskList/"+oImageArrReceived[len-1]);
				 containerImage1.setVisible(true);
				 containerImage2.setVisible(false);
				 containerImage3.setVisible(false);
				
				}
			  
			}

			function failIN(evt) {
			    console.log("in failIN");
			    console.log(evt.target.error.code);
			};
				
				}
			/*************************************/
			/*************************************/
		
		 var oGridForm = new sap.ui.layout.Grid({
	            hSpacing: 1,
	            vSpacing: 0, 
	            width : "810px",
	            defaultSpan : "L6 M6 S12",
	      //      defaultSpan : "L12 M12 S12",   
	            content: [
	                      	textTaskNo,
	                      	inputTaskNo,
	                      	lblDummy1,
	                      	textTaskCode,
	                      	inputTaskCode,
	                      	lblDummy2,
	                      	textTaskTxt,
	                      	textTskDetailCode,
	                      	
	                      	lblDummy4A,
	                		textcodtext,
	                		texttaskcodetext,
	                		
	                      	lblDummy3,
	                      	textPlannedStrtDate,
	                      	textTskDetailStrtDt,
	                      	
	                      	
	                      	lblDummy4,
	                    //  	lblDummy5A,
	                    //  	lblDummy5B,
	                      	textPlannedFnDt,
	                      	textTskDetailEnDt,
	                      	
	                		
	                		
	                      	lblDummy5,
	                      	textAdNotes,
	                      	textAreaAdNotes,
	                      	lblDummy10,
	                      	lblDumm11,
	                      	textRefMat,
	                      	image1,
	                      	//image2,
	                      	image3,
	                      
	                      	containerBoxImages,
	                      	
	                      	lblDummy6
	                ]
			  }).addStyleClass("paddingBottom");
		 
		 

		 
		 var oGridForm1 = new sap.ui.layout.Grid({
	            hSpacing: 1,
	            vSpacing: 0,   
	            defaultSpan : "L12 M12 S12",
	         
	            content: [
	                      	lblDummy7,
	                      	//btnSave,
	                      	lblDummy8,
	                      	lblDummy9
	                ]
			  });
			 
		 if ( g_runningOnPhone == true)
			{
				
 		return new sap.m.Page({
 			id : "Mob16-ThirdScreen-BackNavButton",
			title: "Task Detail",
			content: [
			          
			          oGridForm,
			          oGridForm1
			
			],
			
			showNavButton: true,
		    navButtonTap:function(){  
            	g_MobileNavigationId = "Mob16-BackNavButton";

		        var myapp = sap.ui.getCore().byId("myApp");
		        myapp.to("idMOB16NotificationList");
		            
                        
            },
 		
			footer: new sap.m.Bar({
				contentLeft: [
		                       
		         /* new sap.m.Button({
		            text: "Back",
		            icon: "sap-icon://close-command-field" ,
		            press : function ()
		            {
		        var myapp = sap.ui.getCore().byId("myApp");
		            //myapp.to("idMob16NotiListMaster");
		        		myapp.to("idMOB16NotificationList");
		            },
		            
		            
		            
		          })*/
		          
		          ],
		          contentRight : [btnSave,btnSaveAndComplete]
			
			})
		});
			}
		 
		 
		 else
			 {
			 return new sap.m.Page({
					title: "Task Detail",showFooter: true,
					content: [
					          
					          oGridForm,
					          oGridForm1
					
					]
					
				});
			 
			 }
	}

});