sap.ui.jsview("com.cg.gtm.view.Drop3_MOB08.MOB08Detail", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB08.MOB08Detail
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB08.MOB08Detail";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB08IconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB08.MOB08Detail
	 */
	createContent: function (oController) {
		
		var soldId;
		var  imgSRC = "";
		var oImageModel = new sap.ui.model.json.JSONModel();
		var notiImage = new Array();
		var oImageArrReceived = new Array();
		imgid = "";
		//var  oImageArrReceived ;
		 //var pictureSource;   // picture source
		 //var destinationType; // sets the format of returned value 
		var desktopMode = true;
		if( g_runningOnPhone == false && g_runningInTablet == false){
			desktopMode = false;
		}

			var cmraDialog = new sap.m.Dialog({
				  title: "Add a Photo",
			    content: new sap.m.Text({
			     id : "po3mob08",		
			     text : "Do you want to take a new photo or find a saved photo"
			    }
			    	),
			    leftButton: new sap.m.Button({
			    	 text: "New Photo",
			      press: function () {
			    	  
			    	  cmraDialog.close();
			    	  var pictureSource;   // picture source
					  var destinationType; // sets the format of returned value 
			    	  pictureSource=navigator.camera.PictureSourceType;
			          destinationType=navigator.camera.DestinationType;
			    	// Take picture using device camera and retrieve image as base64-encoded string
			    	 
			          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
			            destinationType: destinationType.FILE_URI  , 
			            saveToPhotoAlbum: false});
			      }
			    }),
			    rightButton: new sap.m.Button({
			    	   text: "Saved Photo",
			      press: function () {
			    	  
			    	  
			    	  document.getElementById("files").click();
					  selectImageFromLocal(sap.ui.getCore().byId("Mob15-Q1-LocalImageSelector"));
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

		function resolveOnSuccess(entry){ 
		    var d = new Date();
		    var n = d.getTime();
		    pos =  0;
		   // window.resolveLocalFileSystemURI("file:///storage//sdcard/MOB01IMF", onResolveSuccess2, fail2);
		    console.log("now in move pic");
		    //new file name
		    newFileName = "MOB08IMD_" + n + ".jpg";
		    var myFolderApp = "MOB08IMFD";

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
			 var items = window.localStorage.getItem('MOB08IMD_');
			 if (items === undefined || items === null || items.length === 0)
			 {
				 
				// var notiImage = new Array();
				//alert("in first bliock ");
				  notiImage[0] = newFileName;
					
				var imageModelString = 	JSON.stringify(notiImage);
					 window.localStorage.setItem("MOB08IMD_", imageModelString);
					// alert("now set  ");
					 var items2 = window.localStorage.getItem('MOB08IMD_');
					// alert(items2);
					   oImageArrReceived =  JSON.parse(items2);
					// alert( oImageArrReceived[0]);
			 }
			 else
				 {
				 var items2 = window.localStorage.getItem('MOB08IMD_');
				// alert(items2);
				   oImageArrReceived =  JSON.parse(items2);
				 oImageArrReceived.push(newFileName);
				 
					var imageModelString = 	JSON.stringify(oImageArrReceived);
					 window.localStorage.setItem("MOB08IMD_", imageModelString);
				// alert( oImageArrReceived[0]);
					 
				 }
			 
			   
			// window.resolveLocalFileSystemURI("file:///storage//sdcard/MOB01IMF", onResolveSuccess, fail);
				 window.resolveLocalFileSystemURI("file:///storage//emulated/0/MOB08IMDF", onResolveSuccess, fail);
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
			   // alert(len);
			    
			   /* containerImage3.setVisible(false);
				 containerImage2.setVisible(false);
				 containerImage1.setVisible(false);*/
			    
			    if (len >= 3)
				{
				
				 console.log(3);
				 sap.ui.getCore().byId("image1MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-1]);
				 sap.ui.getCore().byId("image2MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-2]);
				 sap.ui.getCore().byId("image3MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-3]);
				/* containerImage3.setVisible(true);
				 containerImage2.setVisible(true);
				 containerImage1.setVisible(true);*/
				
				
				
				}
			else if (len == 2)
				{
				 console.log(2);
				 sap.ui.getCore().byId("image1MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-1]);
				 sap.ui.getCore().byId("image2MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-2]);
				/* containerImage2.setVisible(true);
				 containerImage1.setVisible(true);
				 containerImage3.setVisible(false);*/
				
				
				}
			else if (len == 1)
			{
			
			
			 console.log(1);
			
		    
			 sap.ui.getCore().byId("image1MOB08D").setSrc("file:///storage//emulated/0/MOB08IMFD/"+oImageArrReceived[len-1]);
		  
			 /*containerImage1.setVisible(true);
			 containerImage3.setVisible(false);
			 containerImage2.setVisible(false);
			*/
			
			}

		}

		function failIN(evt) {
		    console.log("in failIN");
		    console.log(evt.target.error.code);
		};
		
		return new sap.m.Page({
			title: "{i18n>MOB08DetailTitle}",
			showNavButton: true,
			navButtonPress: oController.handleNavButtonPress,
			headerContent: new sap.m.Button({
				icon: "sap-icon://sys-help",
				press: oController.handleHelpButtonPress
			}),
			content: [
				new sap.m.ObjectHeader("MOB08_AssetObjHead",{
				//	intro: "800001-811001-CABN-D",
					//title: "Tinted Windscreen",
					//number: "3002605",
					attributes: [
						new sap.m.ObjectAttribute({
							title: "{i18n>MOB08PositionObjectAttributeTitle}",
							text: "2"
						})
					]
				}),
				new sap.m.IconTabBar({
					id: "MOB08IconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Detail",
							icon: "sap-icon://request",
							content: [
							          
								new sap.ui.layout.form.SimpleForm({
									id: "MOB08Form",
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
										new sap.m.Label({
											text: "{i18n>MOB08ManufacturerLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id : "MOB08MF"
											
										}),
										new sap.m.Label({
											text: "{i18n>MOB08ManufacturerPartNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id : "MOB08MFPART"
											
										}),
										new sap.m.Label({
											text: "{i18n>MOB08ManufacturerModelLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id : "MOB08MFMODEL"

										}),
										new sap.m.Label({
											text: "{i18n>MOB08ManufacturerSerialNumberLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id : "MOB08MFSERIAL"

										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Documents",
							icon: "sap-icon://documents",
							content: [
							          	/*new sap.m.List("MOB08DocList",{
							          	   mode: sap.m.ListMode.SingleSelectMaster,
				 		                   select : oController.handleMob08SelectedImageListpress,
				 		                   		items: {
				 		                   				path: "/results",
				 		                   				template: new sap.m.ObjectListItem({
				 		                   					title: "{Documentnumber}",
				 		                   					number: "{Wsapplication}",
				 		                   					//press: [oController.handleComponentListItemPress, oController]
				 		                   				})
				 		                   		}
                                       }),*/
                		                new sap.m.List({
                		                   id : "MOB08DocList",
                		                    headerToolbar : new sap.m.Toolbar({
                		                    content:  [
                		                      new sap.m.Label({
                		                        text : "Available Images:" ,
                		                               }),
                		                      new sap.m.ToolbarSpacer(),
                		                      new sap.m.Button({
                		                        text: "Add",
                		                        visible : desktopMode,
                		                        icon: "sap-icon://add",
                		                        type: "Emphasized",
                		                        press: function(){
                		                    	        g_DeleteImageListId = "Mob08AddedImageList";
                		                    	   		sap.ui.getCore().byId("Mob00ImageDialogBox").open();
                		                       }
                		                      })
                		                    ] 
                		                  }),
							          	   mode: sap.m.ListMode.SingleSelectMaster,
				 		                   select : oController.handleMob08SelectedImageListpress,
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
                		                	id : "Mob08AddedImageList",
                		                    visible : desktopMode,
                		                	mode: sap.m.ListMode.SingleSelectMaster,
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
                		              
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
							 /*          new sap.m.Image({
							// src: "img/MB15_01A.jpg",
							id : "image1MOB08D",
							width : "60px" ,
							height : "60px" ,
							layoutData : new sap.ui.layout.GridData({
								span: "L2 M3 S12",
								linebreakL: true,
								linebreakM: true,
								linebreakS: true
							})
						}),
						
						new sap.m.Image({
							//  src: "img/MB15_02.jpg",
							id : "image2MOB08D",
							width : "60px" ,
							height : "60px" ,
							layoutData : new sap.ui.layout.GridData({
								span: "L2 M3 S12",
							})
						}),
						
						//image2.addStyleClass("BtnStyle");
						new sap.m.Image({
							// src: "img/MB15_01.jpg",
							id : "image3MOB08D",
							width : "60px" ,
							height : "60px" ,
							layoutData : new sap.ui.layout.GridData({
								span: "L2 M3 S12",
							})
						})*/
							           /*
								new sap.m.List({
									headerToolbar: new sap.m.Toolbar({
										content: [
											new sap.m.ToolbarSpacer(),
											new sap.m.Button({
												text: "Add",
												icon: "sap-icon://add",
												type: "Emphasized"
											})
										]
									}),
									items: [
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo1.jpeg",
											description: "Taken on: 10/01/14",
											icon: "sap-icon://attachment-photo"
										}),
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo2.png",
											description: "Taken on: 15/02/14",
											icon: "sap-icon://attachment-photo"
										}),
										new sap.m.StandardListItem({
											type: "Active",
											title: "photo3.jpeg",
											description: "Taken on: 01/12/14",
											icon: "sap-icon://attachment-photo"
										})
									]
								})
							*/]
						})
					]
				})
			],
			footer: new sap.m.Toolbar({
				content: [
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						text: "Submit",
						press: oController.handleSaveButtonPress
					}),
					new sap.m.Button({
						text: "{i18n>MOB08ActionButtonText}",
						type: "Emphasized",
						press: oController.handleActionButtonPress
					})
				]
			})
		});
	}
});