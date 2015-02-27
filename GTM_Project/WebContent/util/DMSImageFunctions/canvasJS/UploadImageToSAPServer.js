var csrfToken = "";
var dataUR = " ";
var file = true;
var file1;
//Convert image file to blob
function convertToBLOB(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath){
		
	/*var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //var img = document.getElementById("myCanvasImage");
    var imageObj = new Image(300, 200);
    imageObj.src = addedImageSourcePath;
    imageObj.onload = function() {
    ctx.drawImage(imageObj, 0, 0);
    if (c.toBlob) {
        c.toBlob(
            function (blob) {
            	  var reader = new FileReader();
                  reader.readAsArrayBuffer(blob); //array buffer
                  reader.onload = function (evt){
               	 // file1 = evt.target.result;  
                  file1 = evt;
               	  var  getResValue = uploadImageToServer(file1,NotificationNo,CurrentMob,MobKeyValue);
                 	//DMS_Clear_image();
            	  return getResValue;
                 };
            },
            'image/jpeg'
        );
    }
    };*/
	
	var canvas = document.getElementById("myCanvas");
	if (canvas.getContext) {
	      var image =  new Image(400, 400);
	      image.src = addedImageSourcePath;
	      //  Do this once image loads
	      image.addEventListener("load", function () {
	          var ctx = canvas.getContext("2d");                // Get the context.
	          ctx.clearRect(0, 0, canvas.width, canvas.height);    // Clear the last image, if it exists.
	          ctx.fillStyle = "black";
	     	  // Stretch the image a bit.
	          ctx.drawImage(image, 0, 0, 400, 400);
	          if (canvas.toBlob) {
	        	  canvas.toBlob(
	                  function (blob) {
	                  	  var reader = new FileReader();
	                          reader.readAsArrayBuffer(blob); //array buffer
	                          reader.onload = function (evt){
	                     	  // file1 = evt.target.result;  
	                          file1 = evt;
	                     	  uploadImageToServer(file1,NotificationNo,CurrentMob,MobKeyValue);
	                       };
	                  },
	                  'image/jpeg'
	              );
	          }
	          
	      },false);
	    }
}

function getCsrfToken(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath){
	openSplashScreen();//splash screen opened
	var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
	var aData = jQuery.ajax({   
	     url : url1,
	     headers: { "X-CSRF-Token":"Fetch" ,
            	 	"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "image/jpeg",
					"DataServiceVersion": "2.0",
					//"slug": "200000664,MOB15,QMQMEL",
					"slug": NotificationNo+","+CurrentMob+","+MobKeyValue,
	     },
	     type: "GET",
	     async : false,
         contentType : "application/json",
         dataType : 'json',
         data : " ",
         success : function(data, textStatus, jqXHR) {
        	 
        	 csrfToken = jqXHR.getResponseHeader('x-csrf-token');
        	 var  getResValue = convertToBLOB(NotificationNo,CurrentMob,MobKeyValue,addedImageSourcePath); 
        	 return getResValue;
         },
         error: function(XMLHttpRequest, textStatus, errorThrown) { 
         }
	 });
	
}


function uploadImageToServer(file1,NotificationNo,CurrentMob,MobKeyValue){
	try {
		if (file) {
			
			this._bUploading = true;
			var that = this;
			var _handleSuccess = function(data, textStatus, jqXHR){
				closeSplashScreen();//splash screen closed
				//var respons= jqXHR.responseText;
				
			//	alert("IMAGE UPLOADED SUCCESSFULLY!!!");
				//alert("Response:"+respons);
				that.fireUploadComplete({"response": "Success: File uploaded to entity" });
				that._bUploading = false;
				var  getResValue = true;
           	    return getResValue;
			}; 
			var _handleError = function(data){
				  closeSplashScreen();//splash screen closed
				//  alert("Failed to upload your Image");
				var errorMsg = '';
				if (data.responseText[1]){
					errorMsg = /<message>(.*?)<\/message>/.exec(data.responseText)[1];
				}else{
					errorMsg = 'Something bad happened';
				}
				that.fireUploadComplete({"response": "Error: " + errorMsg});
				that._bUploading = false;
			};
			var oHeaders = {
				"x-csrf-token": csrfToken,
				//"slug": "200000664,MOB15,QMQMEL", //Qantas	
				"slug": NotificationNo+","+CurrentMob+","+MobKeyValue, //Qantas	
	    	 	"X-Requested-With": "XMLHttpRequest",
	    		"Content-Type": "image/jpeg",
				"DataServiceVersion": "2.0",
				"Accept" : "text/plain, */*"
			}; 
			var url1 = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_APP_SRV/DocumentSet");
			dataUR = file1.target.result;
			jQuery.ajax({
				type: 'POST',
				url: url1,
				headers: oHeaders,
				cache: false,
				contentType: "image/jpeg",
				dataType: "text",
				processData: false,
				async : false,
				data: dataUR,
				success: _handleSuccess,
				error: _handleError
			});
			jQuery.sap.log.info("File uploading to " + this.getUploadUrl());
		}
		} catch(oException) {
	jQuery.sap.log.error("File upload failed:\n" + oException.message);
		}	
}

