sap.ui.jsview("com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetailEdit", {

	/** Specifies the Controller belonging to this View.
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf drop3mockups.MOB01.MOB01DepotDetailEdit
	 */
	getControllerName: function () {
		return "com.cg.gtm.view.Drop3_MOB01.MOB01DepotDetailEdit";
	},
	
	onBeforeShow: function () {
		sap.ui.getCore().byId("MOB01DepotEditIconTabBar").setSelectedKey("firstTab");
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf drop3mockups.MOB01.MOB01DepotDetailEdit
	 */
	createContent: function (oController) {
		
		var soldId;
		var  imgSRC = "";
		var oImageModel = new sap.ui.model.json.JSONModel();
		var notiImage = new Array();
		var oImageArrReceived = new Array();
		imgid = "";
		//var  oImageArrReceived ;
		// var pictureSource;   // picture source
		// var destinationType; // sets the format of returned value 
		 
		//DMS
		 var desktopMode = true;
			if( g_runningOnPhone == false && g_runningInTablet == false){
				desktopMode = false;
			}

			var cmraDialog = new sap.m.Dialog({
				  title: "Add a Photo",
			    content: new sap.m.Text({
			     id : "po2mob01d",		
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
		    newFileName = "MOB01IMD_" + n + ".jpg";
		    var myFolderApp = "MOB01IMFD";

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
			 var items = window.localStorage.getItem('MOB01IMD_');
			 if (items === undefined || items === null || items.length === 0)
			 {
				 
				// var notiImage = new Array();
				//alert("in first bliock ");
				  notiImage[0] = newFileName;
					
				var imageModelString = 	JSON.stringify(notiImage);
				//alert(imageModelString);
					 window.localStorage.setItem("MOB01IMD_", imageModelString);
					// alert("now set  ");
					 var items2 = window.localStorage.getItem('MOB01IMD_');
					// alert(items2);
					   oImageArrReceived =  JSON.parse(items2);
					 //  alert(oImageArrReceived);
					// alert( oImageArrReceived[0]);
			 }
			 else
				 {
				 var items2 = window.localStorage.getItem('MOB01IMD_');
				// alert(items2);
				   oImageArrReceived =  JSON.parse(items2);
				 oImageArrReceived.push(newFileName);
				 
					var imageModelString = 	JSON.stringify(oImageArrReceived);
					 window.localStorage.setItem("MOB01IMD_", imageModelString);
				// alert( oImageArrReceived[0]);
					 
				 }
			 
			   
			// window.resolveLocalFileSystemURI("file:///storage//sdcard/MOB01IMF", onResolveSuccess, fail);
				 window.resolveLocalFileSystemURI("file:///storage//emulated/0/MOB01IMFD", onResolveSuccess, fail);
		};

		function onResolveSuccess(fileEntry) {
			//alert("153");
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
			    
			   /* if (len >= 3)
				{
				
				 console.log(3);
				 sap.ui.getCore().byId("image1MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-1]);
				 sap.ui.getCore().byId("image2MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-2]);
				 sap.ui.getCore().byId("image3MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-3]);
				 containerImage3.setVisible(true);
				 containerImage2.setVisible(true);
				 containerImage1.setVisible(true);
				
				
				
				}
			else if (len == 2)
				{
				 console.log(2);
				 sap.ui.getCore().byId("image1MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-1]);
				 sap.ui.getCore().byId("image2MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-2]);
				 containerImage2.setVisible(true);
				 containerImage1.setVisible(true);
				 containerImage3.setVisible(false);
				
				
				}
			else if (len == 1)
			{
			
			
			 console.log(1);
			
		    
			 sap.ui.getCore().byId("image1MOB01D").setSrc("file:///storage//emulated/0/MOB01IMFD/"+oImageArrReceived[len-1]);
		  
			 containerImage1.setVisible(true);
			 containerImage3.setVisible(false);
			 containerImage2.setVisible(false);
			
			
			}*/

		}

		function failIN(evt) {
		    console.log("in failIN");
		    console.log(evt.target.error.code);
		};
		
		return new sap.m.Page({
			title: "{i18n>MOB01DepotDetailEditTitle}",
			showNavButton: "{device>/isPhone}",
			navButtonPress: oController.handleNavButtonPress,
			navButtonPress: oController.handleNavButtonPress,
			content: [
				new sap.m.IconTabBar({
					id: "MOB01DepotEditIconTabBar",
					expandable: false,
					items: [
						new sap.m.IconTabFilter({
							key: "firstTab",
							text: "Info",
							icon: "sap-icon://notification",
							content: [
								new sap.ui.layout.form.SimpleForm({
									layout: "ResponsiveGridLayout",
									editable: true,
									emptySpanL: 6,
									emptySpanM: 6,
									breakpointM: 1000,
									content: [
							          	new sap.m.Label({
					                      text: "{i18n>MOB01ShortDescriptionLabel}",
					                      design: "Bold"
					                    }),
					                    new sap.m.Input({
					                    	id : "MOB01DSD",
					                    	maxLength: 40
	
					                    }),
					                    new sap.m.Label({
					                      text: "{i18n>MOB01LongDescriptionLabel}",
					                      design: "Bold"
					                    }),
					                    new sap.m.TextArea({
					                      placeholder: "{i18n>MOB01LongDescriptionPlaceholder}",
					                      //rows: 5,
					                      id : "MOB01DLD",
					                      height : "5rem"
					                    }),
					                   /* new sap.m.Label({
											text: "{i18n>MOB01FaultLocationLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											showValueHelp: true,
											 id : "MOB01FLOC",
											 valueHelpRequest: [oController.handleValueHelpFLOC, oController]
										}),
										new sap.m.Label({
											text: "{i18n>MOB01RoomLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											id : "MOB01ROOM"

										}),*/
					                    new sap.m.Label({
											text: "{i18n>MOB01CodingLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											showValueHelp: true,
											valueHelpOnly : true ,
											id :  "MOB01DCOD",
											 valueHelpRequest: [oController.handleValueHelpCoding, oController]
										}),
					                    
					                    new sap.m.Label({
											text: "{i18n>MOB01PriorityLabel}",
											design: "Bold"
										}),
										new sap.m.Input({
											showValueHelp: true,
											valueHelpOnly: true,
											id : "MOB01DPRIO",
											valueHelpRequest: [oController.handleValueHelpPriority, oController]
										}),
										new sap.m.Label({
											text: "{i18n>MOB01BreakdownLabel}",
											design: "Bold"
										}),
										new sap.m.CheckBox({
											id : "MOB01BRKDWND"

										})
									]
								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Components",
							icon: "sap-icon://puzzle",
							content: [
								new sap.m.List({
									id: "MOB01DepotDetailEditComponentList",
									noDataText: "{i18n>MOB01NoComponentsData}",
									mode : sap.m.ListMode.SingleSelectMaster,
									select : [oController.handleComponentListItemPress, oController],
									headerToolbar: new sap.m.Toolbar({
										content: [
											new sap.m.ToolbarSpacer(),
											new sap.m.Button({
												text: "{i18n>MOB01AddComponentButton}",
												icon: "sap-icon://add",
												type: "Emphasized",
												press: [oController.handleAddComponentButtonPress, oController]
											})
										]
									}),
									items: {
										path: "/results",
										template: new sap.m.ObjectListItem({
											type: "Active",
											title: "{Materialno} - {Description}",
											number: "{Available}",
											attributes: [
												new sap.m.ObjectAttribute({
													title: "Quantity",
													text: "{Quantity} {Uom} - {PlantName}"
												})
											],
											firstStatus: new sap.m.ObjectStatus({
												text: "{Status}"
											}),
											//press: [oController.handleComponentListItemPress, oController]
										})
									}
								})
//								new sap.m.Table({
//									mode: "Delete",
//									headerToolbar: new sap.m.Toolbar({
//										content: [
//											new sap.m.ToolbarSpacer(),
//											new sap.m.Button({
//												text: "Remove Material",
//												icon: "sap-icon://less"
//											}),
//											new sap.m.Button({
//												text: "Add Material",
//												icon: "sap-icon://add",
//												type: "Emphasized"
//											})
//										]
//									}),
//									items: {
//										path: "materials>/results",
//										template: new sap.m.ColumnListItem({
//											vAlign: "Middle",
//											cells: [
//												new sap.m.Text({
//													text: "{materials>Materialno}"
//												}),
//												new sap.m.Text({
//													text: "{materials>Description}"
//												}),
//												new sap.m.Input({
//													id: "MOB01DepotEditQuantityInput",
//													type: "Number"
//												}),
//												new sap.m.Text({
//													text: "{materials>Uom}"
//												}),
//												new sap.m.Text({
//													text: "{materials>MaterialGroup}"
//												})
//											]
//										})
//									},
//									columns: [
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "ID"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Desc"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Qty"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "UoM"
//											})
//										}),
//										new sap.m.Column({
//											header: new sap.m.Text({
//												text: "Avail"
//											})
//										})
//									]
//								})
							]
						}),
						new sap.m.IconTabFilter({
							text: "Images",
							icon: "sap-icon://camera",
							content: [
//DMS
new sap.m.List({
 	id : "Mob01_Depot_AddedImageList",
    visible : desktopMode,
 	mode: sap.m.ListMode.SingleSelectMaster,
 	headerText : "Added Image List",
 	headerToolbar: new sap.m.Toolbar({
		content: [
		          new sap.m.ToolbarSpacer(),
		          new sap.m.Button({
		        	  text: "Add",
		        	  icon: "sap-icon://add",
		        	  type: "Emphasized",
		        	  press : function()
		        	  {
		        		//DMS
		        		  g_DeleteImageListId = "Mob01_Depot_AddedImageList";
               	   		  sap.ui.getCore().byId("Mob00ImageDialogBox").open();
		        	  }
		          })
		          ]
	}),
 	itemPress : oController.responsivePopoverZoom,
		items: {
			    path: "/",
		  	    template: new sap.m.StandardListItem({
		  		title: "{imageName}"+""+"",
				type: "Active",
				icon: "{imageData}",
		})
		}
 }),
							          
							/*new sap.m.Image({
							// src: "img/MB15_01A.jpg",
							id : "image1MOB01D",
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
							id : "image2MOB01D",
							width : "60px" ,
							height : "60px" ,
							layoutData : new sap.ui.layout.GridData({
								span: "L2 M3 S12",
							})
						}),
						
						//image2.addStyleClass("BtnStyle");
						new sap.m.Image({
							// src: "img/MB15_01.jpg",
							id : "image3MOB01D",
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
						text: "{i18n>MOB01SubmitButton}",
						icon: "sap-icon://action",
						type: "Emphasized",
						press: oController.handleSubmitButtonPress
					})
				]
			})
		});
	}

});