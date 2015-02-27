/*
 * DMS Function for Image upload, get image, store image
 * 
 * */

                    
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = imageData;
     // localStorage.setItem('img',smallImage.src);
      movePicturetoSDCard(imageData,null,null);
    }
    function onPhotoURISuccess(imageURI) {
      var largeImage = document.getElementById('largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;
      movePicturetoSDCard(imageURI,null,null);
    }
    
    ////////////////////////////////////////////Add photo to carousel Not Used//////////////////////
    function capturePhoto(idImage,ListId) {
      // Take picture using device camera and retrieve image as base64-encoded string
      var id = idImage;
      navigator.camera.getPicture(function (imageData) {
          // Uncomment to view the base64 encoded image data
          var smallImage = document.getElementById(id);
          smallImage.style.display = 'block';
          smallImage.src = imageData;
             jQuery.sap.require("sap.m.MessageToast");
	 		 var msg = 'Image added Successfully!!!';
	 	     sap.m.MessageToast.show(msg);
         // localStorage.setItem('img',smallImage.src);
        var path = movePicturetoSDCard(imageData,null,ListId);
        sap.ui.getCore().byId("Mob00DescriptionInput").setValue("");
        }, onFail, { quality: 50 });
    }
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true });
    }

    ////////////////////////////////////////////Add photo to carousel Not Used//////////////////////
    function getPhoto(source,idImage,ListId) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture( function (imageData) {
          // Uncomment to view the base64 encoded image data
          var smallImage = document.getElementById(idImage);
          smallImage.style.display = 'block';
          smallImage.src = imageData;
          //Create array addImageToList()
          //var str = "content://media/external/images/media/8490.jpg";
          //var res = str.split("/");
          // alert(res[6]);
          var str = imageData;
          var res = str.split("/");
          var imageList = {
        		  "imageName":res[6],
        		  "imageData":imageData
          }
          addImageToList(imageList,ListId);
         //////////////////////////////////////////////// 
          jQuery.sap.require("sap.m.MessageToast");
	 		 var msg = 'Image added Successfully!!!';
	 	     sap.m.MessageToast.show(msg);
         // localStorage.setItem('img',smallImage.src);
          var srcAlert = smallImage.src;
          //movePicturetoSDCard(imageData);
        }, onFail, { quality: 50,
           destinationType: destinationType.FILE_URI,
           sourceType: source });
    }
    
    ////////////////////////////Add Image to List Using SD Card////////////////////////////////////
    
    function getPhotoList(source,checkDes,ListId) {
        // Retrieve image file location from specified source
    	 /*var imageList = {
         		  //"imageName":res[6],
         		  "imageData":"img/JPEG_example_JPG_RIP_010.jpeg",
         		  "imageName":checkDes
         		
           }
    	 addImageToList(imageList,ListId);*/
    	
        navigator.camera.getPicture( function (imageData) {
           // var str = imageData;
           // var res = str.split("/");
            var imageList = {
          
          		 // "imageData":imageData,
            	  "imageName":checkDes,
            	  "imageData": "data:image/jpeg;base64," + imageData
          		  
          		
            }
            addImageToList(imageList,ListId);
          }, onFail, { quality: 50,
            // destinationType: destinationType.FILE_URI,
        	   destinationType: destinationType.DATA_URL,
             sourceType: source });
      }
    
    ///////////////////////////////////Add Image To List////////////////////////////////////////////
    function capturePhotoList(checkDes,ListId) {
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(function (imageData) {
            // Uncomment to view the base64 encoded image data
              movePicturetoSDCard(imageData,checkDes,ListId);
          }, onFail, { quality: 50 });
      }

    function onFail(message) {
      alert('Failed because: ' + message);
    }
    
    //////////////////////////////////////////Move picture to SD Card/////////////////////////////////////
    
    function movePicturetoSDCard(file,checkDes,ListId){ 
    	   var finalPath = "";
    	   var directoryPath ;
    	   window.resolveLocalFileSystemURI(file, function (entry){ 
        	   var d = new Date();
        	   var n = d.getTime();
        	   var fileNameNoExtn = "000001_" + n;
        	   var newFileName = "000001_" + n + ".jpg";
        	   var myFolderApp = "MyTestFolder";
        	   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
        	   fileSys.root.getDirectory( myFolderApp,
        	                   {create:true, exclusive: false},
        	                   function(directory) {
        	                       entry.moveTo(directory, newFileName,  function()
        	                       {
        	                    	jQuery.each(directory, function (i, input) {
        	                    		//if( i == "fullPath") //for Eclipse Build
										if( i == "nativeURL") //for Cordova build
        	                    		
        	                    		{
        	                    			directoryPath = input;
        	                    		}});
        	                       finalPath =directoryPath+"/"+newFileName;
        	                       var imageList = {
        	                    		  "imageName":checkDes,
        	                     		  "imageData":finalPath
        	                       }
        	                       addImageToList(imageList,ListId);
        	                       }, function()
        	                       {});}, function(){});},function(){});} , function(){ }); 
    }
    	
   /////////////////////////////////////////Upload Function Not Used//////////////////////////////////////////
    
    function uploadPhoto(imageURI) {
        var options = new FileUploadOptions();
        options.fileKey="file";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";
        var params = {};
        params.value1 = "test";
        params.value2 = "param";
        options.params = params;
        var ft = new FileTransfer();
        ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    }
    
 //////////////////////////////////////////////Add Image To List//////////////////////////////////////////
    
    function addImageToList(getImageJSON,ListId){
    	var notiQ = sap.ui.getCore().byId(ListId);
    	var descriptionValue = sap.ui.getCore().byId("Mob00DescriptionInput");
    	var record = notiQ.getModel();
    	if(record != undefined){
    		var oDataRecords = record.oData;
    		if(oDataRecords != undefined){
    			if( record.length == undefined){
        			var getAlreadyBindedData = notiQ.getModel().getData();
        			
        			for( var i = 0;i<getAlreadyBindedData.length;i++){
        				if( getAlreadyBindedData[i].imageName == descriptionValue.getValue() ){
        					alert("Already exist, Please use different description name");
        					return false;
        				}}
        			getAlreadyBindedData.push(getImageJSON);
        			var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(getAlreadyBindedData);
             		notiQ.setModel(oJasonNotiQModel);
        		}}
    	}
    	else{
    		var imageListArrayJSON = getImageJSON;
        	var bindRecordsToAddListItem = [];
        	bindRecordsToAddListItem.push(imageListArrayJSON);
         	var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(bindRecordsToAddListItem);
     		notiQ.setModel(oJasonNotiQModel);
    	}
 		jQuery.sap.require("sap.m.MessageToast");
	 	var msg = 'Image added Successfully!!!';
	 	sap.m.MessageToast.show(msg);
	 	
	 	descriptionValue.setValue("");
        sap.ui.getCore().byId("Mob00ImageDialogBox").close();
    }
    
    /////////////////Clear Image//////////////
    
    function DMS_Clear_image() {
    	var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(1, 1, 600, 300);
    	
    }
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    function commonResponsivePopoverAndDialogBox(){
    	g_DeleteImageListFromPopOver = "";
		g_DeleteImageListId = "";
		var responsivePopover= new sap.m.ResponsivePopover({
			id : "Mob00ResPopUp",
		    title: "Image Viewer",
	
		    //placement  : sap.m.PlacementType.Top,
		    beginButton : new sap.m.Button({
				text : "Close",
				width : "100%",
				type : sap.m.ButtonType.Reject,
				icon: "sap-icon://log",
				press : function() {
					responsivePopover.close();
				}
			}),
			endButton : new sap.m.Button({
				text : "Delete",
				width : "100%",
				type : sap.m.ButtonType.Reject,
				icon: "sap-icon://delete",
				press : function(){
					var bindRecordsToAddListItem = [];
					var deleteImageid = g_DeleteImageListFromPopOver;
					var list = sap.ui.getCore().byId(g_DeleteImageListId).getModel();
					if( list != undefined){
						var oData = list.getData();
						for( var i = 0 ; i< oData.length ; i++){
							if( deleteImageid != oData[i].imageData){
								var imageList = {
										"imageName":oData[i].imageName,
										"imageData":oData[i].imageData
								}
								bindRecordsToAddListItem.push(imageList);
							}
						}
						var oJasonNotiQModel =  new sap.ui.model.json.JSONModel(bindRecordsToAddListItem);
						var notiQ = sap.ui.getCore().byId(g_DeleteImageListId);
						notiQ.setModel(oJasonNotiQModel);
					}
					jQuery.sap.require("sap.m.MessageToast");
					var msg = 'Image deleted Successfully!!!';
					sap.m.MessageToast.show(msg);
					sap.ui.getCore().byId("Mob00ResPopUp").close();
				}
			}),
			horizontalScrolling : true,
			verticalScrolling : true,
			contentWidth : "60rem",
			contentHeight : "30rem",
		    content : [
		               new sap.m.ScrollContainer({
		            	      horizontal : true,
				        	  vertical   : true,
		            	      content : [new sap.m.Image({
		            		  id:"PopOverImage" ,
		            		  width : "55rem",
	        	              height : "27rem",
		            	   })
	           ]
		               })
		    ]
		});
		
		/*var dialog = new sap.m.Dialog({
 		   id : "Mob00ImageDialogBox",
 		   title:"Take Picture from: ",
 		   rightButton  : new sap.m.Button({
     			  text : "Close",
     			  contentWidth : "10rem",
     			  contentHeight :"10rem",
     			  press : function(){
     				  sap.ui.getCore().byId("Mob00ImageDialogBox").close(); 
     			  }
     		   }),
 		   content : [
 		              
 		              new sap.ui.layout.VerticalLayout({
 		            	 // width : "10rem",
 		            	  allowWrapping : true,
 		            	  content :[
 		            	            new sap.m.Button({
 		            	            	text : "Camera",
 		            	            	icon : "sap-icon://camera",
 		            	            	width : "20rem",
 		            	            	press : function(){
 		            	            		var checkDes = sap.ui.getCore().byId("Mob00DescriptionInput").getValue();
 		            	            		if( checkDes == ""){
 		            	            	      		alert("Please Enter Description");
 		            	            		}else{
 		            	            			capturePhotoList(checkDes,g_DeleteImageListId);
 		            	            		}
 		            	            	},
 		            	            	type : sap.m.ButtonType.Emphasized
 		            	            }),
 		            	           
 		            	            new sap.m.Button({
 		            	            	text : "SD Card",
 		            	           	    width : "20rem",
 		            	            	icon : "sap-icon://folder",
 		            	            	press : function(){
 		            	            		var checkDes = sap.ui.getCore().byId("Mob00DescriptionInput").getValue();
 		            	            		if( checkDes == ""){
 		            	            			alert("Please Enter Description");	
 		            	            		}else{
 		            	            			var source = pictureSource.PHOTOLIBRARY;
 		            	            			getPhotoList(source,checkDes,g_DeleteImageListId);
 		            	            		}
 		            	            	},
 		            	            	type : sap.m.ButtonType.Emphasized
 		            	            }),
 		            	            
 		            	           new sap.m.Input({
		              					id:"Mob00DescriptionInput",
		              					placeholder : "Enter Description:"
		              				})
 		            	            ]
 		                 }),
 		              				
 		              	] });*/
		
		
	
		var dialog = new sap.m.Dialog({
			  id: "Mob00ImageDialogBox",
			  title: "Add Photo",
			  beginButton: new sap.m.Button({
			    text: "Cancel",
			    press: function () {
			      sap.ui.getCore().byId("Mob00ImageDialogBox").close();
			    }
			  }),
			  afterClose: function () {
				  sap.ui.getCore().byId("Mob00DescriptionInput").setValue(null).setValueState("Error");
				  sap.ui.getCore().byId("MOB00CameraButton").setEnabled(false);
				  sap.ui.getCore().byId("MOB00GalleryButton").setEnabled(false);
			  },
			  content: [
			    new sap.ui.layout.form.SimpleForm({
			      layout: "ResponsiveGridLayout",
			      content: [
			        new sap.m.Label({
			          text: "Description"
			        }),
			        new sap.m.Input({
			          id: "Mob00DescriptionInput",
			          valueState: "Error", // used here just to signify importance rather than an error
			          showValueStateMessage: false,
			          liveChange: function (evt) {
			            var value = evt.getParameter("value");
			            if (value.trim() !== "") {
			              evt.getSource().setValueState("Success");
			              sap.ui.getCore().byId("MOB00CameraButton").setEnabled(true);
			              sap.ui.getCore().byId("MOB00GalleryButton").setEnabled(true);
			            } else {
			              evt.getSource().setValueState("Error");
			              sap.ui.getCore().byId("MOB00CameraButton").setEnabled(false);
			              sap.ui.getCore().byId("MOB00GalleryButton").setEnabled(false);
			            }
			          }
			        }),
			        new sap.m.Button({
			          id: "MOB00CameraButton",
			          enabled: false,
			          text: "Camera",
			          icon: "sap-icon://camera",
			          type: sap.m.ButtonType.Emphasized,
			          press: function () {
			        	var checkDes = sap.ui.getCore().byId("Mob00DescriptionInput").getValue();
			            capturePhotoList(checkDes, g_DeleteImageListId);
			          },
			          layoutData: new sap.ui.layout.GridData({
			            linebreak: true
			          })
			        }),
			        new sap.m.Button({
			          id: "MOB00GalleryButton",
			          enabled: false,
			          text: "Gallery",
			          icon: "sap-icon://background",
			          type: sap.m.ButtonType.Emphasized,
			          press: function () {
			        	var checkDes = sap.ui.getCore().byId("Mob00DescriptionInput").getValue();
			            var source = pictureSource.PHOTOLIBRARY;
			            getPhotoList(source, checkDes, g_DeleteImageListId);
			          },
			          layoutData: new sap.ui.layout.GridData({
			            linebreak: true
			          })
			        })
			      ]
			    })
			  ]
			});

    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////
    
    
    function CreateNotificationIconTabBarShow(){
    	//sap.ui.getCore().byId("MOB15_Q3_taskDetails_tab").setVisible(true);
    	//sap.ui.getCore().byId("MOB15_Q1_taskDetails_tab").setVisible(true);
    	//sap.ui.getCore().byId("MOB15_F2_taskDetails_tab").setVisible(true);
    	//sap.ui.getCore().byId("MOB15_F3_taskDetails_tab").setVisible(true);
    }
    function CreateNotificationIconTabBarHide(){
    	//sap.ui.getCore().byId("MOB15_Q3_taskDetails_tab").setVisible(false);
    	//sap.ui.getCore().byId("MOB15_Q1_taskDetails_tab").setVisible(false);
    	//sap.ui.getCore().byId("MOB15_F2_taskDetails_tab").setVisible(false);
    	//sap.ui.getCore().byId("MOB15_F3_taskDetails_tab").setVisible(false);
    }
    
    
    
   //Download doc
    function downloadAndDisplayPDF(url){
    	openSplashScreen();
    	//var downloadUrl = "http://hs1gd1comb.rm.hitachi-eu.com:8100/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet('IMMATERIALSEARCHHELPPAGE')/$value";
    	var downloadUrl = url;
    	//alert(downloadUrl);
    	var relativeFilePath = "HRE_PDF_MyDir/PDF_Viewer.pdf";  // using an absolute path also does not work
    	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
    	   var fileTransfer = new FileTransfer();
    	   fileTransfer.download(
    	      downloadUrl,
    	      fileSystem.root.toURL() + '/' + relativeFilePath,
    	      function (entry) {
    			 var finalRes = fileSystem.root.toURL() + '/' + relativeFilePath;
    			 window.plugins.fileOpener.open(finalRes);//Working
    				closeSplashScreen();//splash screen closed
    	      },
    	      function (error) {
    	        alert("Error during download. Code = " + error.code);
    	 		closeSplashScreen();//splash screen closed
    	      },true//Trust all host
    	   );
    	});
    	
    }
    
    // Download Image
    function downloadAndDisplayImage(url){
    	openSplashScreen();
    	//var downloadUrl = "http://hs1gd1comb.rm.hitachi-eu.com:8100/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/FileSet('IMMATERIALSEARCHHELPPAGE')/$value";
    	var downloadUrl = url;
    	//alert(downloadUrl);
    	var relativeFilePath = "HRE_Image_MyDir/ImageViewer.jpg";  // using an absolute path also does not work
    	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
    	   var fileTransfer = new FileTransfer();
    	   fileTransfer.download(
    	      downloadUrl,
    	      fileSystem.root.toURL() + '/' + relativeFilePath,
    	      function (entry) {
    			 var finalRes = fileSystem.root.toURL() + '/' + relativeFilePath;
    			 window.plugins.fileOpener.open(finalRes);//Working
    				closeSplashScreen();//splash screen closed
    	      },
    	      function (error) {
    	        alert("Error during download. Code = " + error.code);
    	 		closeSplashScreen();//splash screen closed
    	      },true//Trust all host
    	   );
    	});
    	
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
/*     function getImageURI(imageURI) {
    	
		 var gotFileEntry = function(fileEntry) {
	            alert("got image file entry: " + fileEntry.fullPath);
	            var gotFileSystem = function(fileSystem) {
	                fileSystem.root.getDirectory("TestFolder", {
	                    create : true
	                }, function(dataDir) {
	                    // copy the file
	                    fileEntry.moveTo(dataDir, "1.jpg", null, fsFail);
	                }, dirFail);
	            };
	            // get file system to copy or move image file to
	            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem,
	                    fsFail);
	        }; 
	     // resolve file system for image
	        window.resolveLocalFileSystemURI(imageURI, gotFileEntry, fsFail);
	        // file system fail
	        var fsFail = function(error) {
	            alert("failed with error code: " + error.code);
	        };
	        var dirFail = function(error) {
	            alert("Directory error code: " + error.code);
	        };

} */