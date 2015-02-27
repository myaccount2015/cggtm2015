//Scanner
function ScannerOut_M_S_E_B()
{
	/*if ( sap.ui.getCore().byId("scannerMOB00").getSelectedKey() == "BLU")
	{
		var scanDialog = sap.ui.getCore().byId("SCANDIAL");
		scanDialog.open();
		var deferred = $.Deferred(); //Defferred Method is declared.
		deferred.resolve(g_scannerJSONBT); //Value is assigned to deferred variable
		return deferred.promise(); //Finalized value is defined for deferred variable

	}

else
	{*/
var scanRes = $.when(scanBarcode());
return scanRes;
	//}

}

/*
 * This function is written to handle asynchronous call back function using jQuery deferred Method.
 * Refer below URL for more Details
 * http://www.html5rocks.com/en/tutorials/async/deferred/
 */
function scanBarcode() {
	
	
	var logInfo = getTimeStamp() +"Barcode Scan:: Start" ;
	var deferred = $.Deferred(); //Defferred Method is declared.
	cordova.plugins.barcodeScanner.scan(
		     function(result){
		    try
		    	 {
		    		 
    		 var scannerJSON;
    		 var Material = "";
    		 var errorText;
		     var mainArray= ["","","","","","",""];
		       
		     //var resArray = result.text.split("#");
		     var str = result.text;//"#M:200042#S:3001607#E:3001607#B:";
		     //var str ="#M:200042#S:3001607#E:3001607#B:";
		     
		     
		     var res = str.split("#");
		     for( var i = 1 ; i< res.length; i++)
		     {
		     Material = res[i];
		     Material = Material.split(":");
		     var identifier = Material[0];
		     Material = Material[1];
		    // alert(identifier);
		     if ( identifier ==  "M")
		       {
		       mainArray[0]= Material ;
		       }
		    /* else
		       {
		       
		       mainArray[0]= "NA" ;
		       }*/
		     if ( identifier ==  "S")
		       {
		       mainArray[1]= Material ;
		       }
		     /*else
		       {
		       
		       mainArray[1]= "NA" ;
		       }*/
		     if ( identifier ==  "E")
		       {
		       mainArray[2]= Material ;
		       }
		    /* else
		       {
		       
		       mainArray[2]= "NA" ;
		       }*/
		     if ( identifier ==  "B")
		       {
		       mainArray[3]= Material ;
		       }   
		    /* else
		       {
		       
		       mainArray[3]= "NA" ;
		       }*/
		     if ( identifier ==  "K")
		       {
		       mainArray[4]= Material ;
		       }   
		    /* else
		       {
		       
		       mainArray[4]= "NA" ;
		       }*/
		     
		     if ( identifier ==  "L")
		       {
		       mainArray[5]= Material ;
		       }   
		    /* else
		       {
		       
		       mainArray[5]= "NA" ;
		       }*/
		     if ( identifier ==  "T")
		       {
		       mainArray[6]= Material ;
		       }   
		    /* else
		       {
		       
		       mainArray[6]= "NA" ;
		       }*/
		     
		    // mainArray.push(Material); 
		     }
		     
		     scannerJSON = {"scanMaterials" : [
		                                      {
		                                           "Material" : mainArray[0],
		                                            "Serial" : mainArray[1],
		                                            "E" : mainArray[2],
		                                            "Batch" : mainArray[3],
		                                            "BinNonWM" : mainArray[4],
		                                            "BinWM" : mainArray[5],
		                                            "TO" : mainArray[6],
		                                            "Error" :  errorText
		                                           
		                                      }]};
		     
		     deferred.resolve(scannerJSON); //Value is assigned to deferred variable
		     
		     
		     if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"Barcode Scan:: "+str+"-Finish" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
		     
		     
		    }
		     
		     catch (error) {
				// TODO: handle exception
		    	 scannerJSON = "ERROR";
		    	// sap.m.MessageBox.show("Scan failed: " + error);
			     errorText = error;
			     
			     if( g_isDebug == true)
		        	{
		        	//Service End Time
		        	var logInfo1 = getTimeStamp() +"Barcode Scan:: ERROR" ;
		        	//Log file Service Start and End Time
		        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
		        	logFileUpdate(g_ServiceStartEndTime);
		        	}
			     
			}
		     
		     }, 
		     function(error){
		       scannerJSON = "ERROR";
		       //sap.m.MessageBox.show("Scan failed: " + error);
		       errorText = error;
		       
		       if( g_isDebug == true)
	        	{
	        	//Service End Time
	        	var logInfo1 = getTimeStamp() +"Barcode Scan:: ERROR" ;
	        	//Log file Service Start and End Time
	        	var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	        	logFileUpdate(g_ServiceStartEndTime);
	        	}
		       
		       
		     }); 
	
	return deferred.promise(); //Finalized value is defined for deferred variable

}



//Select local image
function selectImageFromLocal(imgId){
    
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {var filesInput = document.getElementById("files");
        filesInput.addEventListener("change", function(event){
         var files = event.target.files; //FileList object
            for(var i = 0; i< files.length; i++)
            {var file = files[i];
                //Only pics
                if(!file.type.match('image'))
                  continue;
                var picReader = new FileReader();
                picReader.addEventListener("load",function(event){
                 var picFile = event.target;
                 imgId.setSrc(picFile.result);
                });
                //Read the image
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {console.log("Your browser does not support File API");
    }
}




function serialBatchValidation(getManualentryValue)
{
	debugger;
		var i;
		var checkingMaterial = 0;
		var serBatVal = sendResultToMaterialSearchDetPageButton;
		if(serBatVal.length > 0){
		for( i = 0 ; i < serBatVal.length; i++)
			{
				
				if((serBatVal[i].Materialno ==  getManualentryValue))
					{
					
					checkingMaterial = 1;
					sap.ui.getCore().byId("lblMatnrMOB15Desc").setText
					("Material Description : ".concat(serBatVal[i].Description));
					
					sap.ui.getCore().byId("idMatDesMob15-VendorError").setText
					("Material Description : ".concat(serBatVal[i].Description));
					
					sap.ui.getCore().byId("idMatDesMob15-Materialerror").setText
					("Material Description : ".concat(serBatVal[i].Description));
					
					sap.ui.getCore().byId("idMatDesMob15-IntPro").setText
					("Material Description : ".concat(serBatVal[i].Description));
					
				
					
//////////////////////////////////////////////////////////////////////////////////////////////////////////////					
							
			if(serBatVal[i].Serialized =="No")
				{
		
				var getPageId = backNavMat;
				switch(getPageId)
				{
				case "Mob15CreateNoti": //create noti
					sap.ui.getCore().byId("selno").setValue("");
					sap.ui.getCore().byId("ip_SerialNo4").setValue("");
					sap.ui.getCore().byId("selnof2").setValue("");
					sap.ui.getCore().byId("ip_SerialNoQ3").setValue("");
					sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(false);
					sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(false);
					sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(false);
					sap.ui.getCore().byId("containerBoxSerialNo-InternalProblemError").setVisible(false);
					//qty as 1
					//material
					 sap.ui.getCore().byId("ipQty4").setValue("");
					 sap.ui.getCore().byId("ipQty4").setEnabled(true);
					 
					 //Internal Error
					 sap.ui.getCore().byId("ipQty2").setValue("");
					 sap.ui.getCore().byId("ipQty2").setEnabled(true);
					 
					//vendor
					 sap.ui.getCore().byId("ipQty3").setValue("");
					 sap.ui.getCore().byId("ipQty3").setEnabled(true);
					 
					 //customercompl
					 sap.ui.getCore().byId("ipQty").setValue("");
					 sap.ui.getCore().byId("ipQty").setEnabled(true);
					break;
					
				case "Mob29Screen": //create noti
					
					sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(false);
					sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(false);
					sap.ui.getCore().byId("labelParnt-dummy3").setVisible(false);
					
					sap.ui.getCore().byId("printlabel-SerBatValidatn-Additional").setVisible(false);
					sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setVisible(false);
					sap.ui.getCore().byId("labelParnt-dummy3A").setVisible(false);
					//des
					 sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
					  sap.ui.getCore().byId("matLabPrintDes").setVisible(true); 
					  sap.ui.getCore().byId("matLabPrintDes").setText(serBatVal[i].Description);
					//qty
					 sap.ui.getCore().byId("matLabqtytext").setVisible(true); 
					 sap.ui.getCore().byId("PrtLabIPQty").setVisible(true); 
					 sap.ui.getCore().byId("PrtLabIPQty").setValue("");
					 sap.ui.getCore().byId("PrtLabIPQty").setEnabled(true);
					
					break;
		
				}
				
				}
			else{
				
				var getPageId = backNavMat;
				switch(getPageId)
				{
				case "Mob15CreateNoti":
					sap.ui.getCore().byId("containerBoxSerialNo-Customercomplaints").setVisible(true);
					sap.ui.getCore().byId("containerBoxSerialNo-Vendorerror").setVisible(true);
					sap.ui.getCore().byId("containerBoxSerialNo-MaterialError").setVisible(true);
					sap.ui.getCore().byId("containerBoxSerialNo-InternalProblemError").setVisible(true);
				
					//qty as 1
					//material
					 sap.ui.getCore().byId("ipQty4").setValue("1");
					 sap.ui.getCore().byId("ipQty4").setEnabled(false);
					//vendor
					 sap.ui.getCore().byId("ipQty3").setValue("1");
					 sap.ui.getCore().byId("ipQty3").setEnabled(false);
					 //customercompl
					 sap.ui.getCore().byId("ipQty").setValue("1");
					 sap.ui.getCore().byId("ipQty").setEnabled(false);
					 
					//internal Error
					 sap.ui.getCore().byId("ipQty2").setValue("1");
					 sap.ui.getCore().byId("ipQty2").setEnabled(false);
					 
					
					break;
					
		        case "Mob29Screen": //create noti
					
		        	sap.ui.getCore().byId("printlabel-SerBatValidatn").setVisible(true);
					sap.ui.getCore().byId("PrintLabSerBatIp1").setVisible(true);
					sap.ui.getCore().byId("labelParnt-dummy3").setVisible(true);
					
					//des
					  sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
					  sap.ui.getCore().byId("matLabPrintDes").setVisible(true);
					  sap.ui.getCore().byId("matLabPrintDes").setText(serBatVal[i].Description);
							  
					//qty as 1
					 sap.ui.getCore().byId("matLabqtytext").setVisible(true); 
					 sap.ui.getCore().byId("PrtLabIPQty").setVisible(true); 
					 sap.ui.getCore().byId("PrtLabIPQty").setValue("1");
					 sap.ui.getCore().byId("PrtLabIPQty").setEnabled(false);
					
					break;
					
			
					
	           
				}
			}
			}
			
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					
	        if(serBatVal[i].Batchmanaged =="No")
				{
	        	var getPageId1 = backNavMat;
	        	
	        	switch(getPageId1)
	        	{
	        	case "Mob15CreateNoti": //create notification
	        		sap.ui.getCore().byId("batchno").setValue("");
	        		sap.ui.getCore().byId("ip_BatNoQ3").setValue("");
	        		sap.ui.getCore().byId("batchf2").setValue("");
	        		sap.ui.getCore().byId("ip_BatNo4").setValue("");
	        		sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(false);
	        		sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(false);
	        		sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(false);
			    	sap.ui.getCore().byId("containerBoxBatchNo-InternalProblemError").setVisible(false);
	        		
	        		break;
	        	
	           case "Mob22InsLot"://create ins
	        	    sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(false);
					sap.ui.getCore().byId("batch").setVisible(false);
					sap.ui.getCore().byId("horizontal5").setVisible(false);
					break;
	           case "Mob29Screen": //create noti
		       		
	       		sap.ui.getCore().byId("printlabel-SerBatValidatn-Additional").setVisible(false);
	       		sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setVisible(false);
	       		sap.ui.getCore().byId("labelParnt-dummy3A").setVisible(false);
	       		//des
	       		 sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
	       		  sap.ui.getCore().byId("matLabPrintDes").setVisible(true); 
	       		  sap.ui.getCore().byId("matLabPrintDes").setText(serBatVal[i].Description);
	       		//qty
	       		/* sap.ui.getCore().byId("matLabqtytext").setVisible(true); 
	       		 sap.ui.getCore().byId("PrtLabIPQty").setVisible(true); 
	       		 sap.ui.getCore().byId("PrtLabIPQty").setValue("");
	       		 sap.ui.getCore().byId("PrtLabIPQty").setEnabled(true);*/
					
					break;
	          
	        	}
				}
	        
	        else{
				
				var getPageId = backNavMat;
				switch(getPageId)
				{
				case "Mob15CreateNoti":
					sap.ui.getCore().byId("containerBoxBatchNo-Customercomplaints").setVisible(true);
					sap.ui.getCore().byId("containerBoxBatchNo-Vendorerror").setVisible(true);
					sap.ui.getCore().byId("containerBoxBatchNo-MaterialError").setVisible(true);
			    	sap.ui.getCore().byId("containerBoxBatchNo-InternalProblemError").setVisible(true);
					break;
					
				case "Mob22InsLot":
					sap.ui.getCore().byId("batLabel-CreateInspection").setVisible(true);
					sap.ui.getCore().byId("horizontal5").setVisible(true);
					sap.ui.getCore().byId("batch").setVisible(true);
					break;
				
	            case "Mob29Screen": //create noti
					
	             	sap.ui.getCore().byId("printlabel-SerBatValidatn-Additional").setVisible(true);
	    			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setVisible(true);
	    			sap.ui.getCore().byId("labelParnt-dummy3A").setVisible(true);
	    			
	    			//des
	    			  sap.ui.getCore().byId("matLabPrintDesText").setVisible(true);
	    			  sap.ui.getCore().byId("matLabPrintDes").setVisible(true);
	    			  sap.ui.getCore().byId("matLabPrintDes").setText(serBatVal[i].Description);
	    					  
	    			//qty as 1
	    		/*	 sap.ui.getCore().byId("matLabqtytext").setVisible(true); 
	    			 sap.ui.getCore().byId("PrtLabIPQty").setVisible(true); 
	    			 sap.ui.getCore().byId("PrtLabIPQty").setValue("1");
	    			 sap.ui.getCore().byId("PrtLabIPQty").setEnabled(false);*/
					
					break;
				}
				
			}
	  
			}
				
					
				
			
			}
		

		 if( checkingMaterial == 0)
			{
				
			sap.m.MessageBox.show(
					"Not a Valid Material"+ " " +" "+" ",
						sap.m.MessageBox.Icon.ERROR,
						"Error");
			//Mob 29
			sap.ui.getCore().byId("printlabel-SerBatValidatn-Additional").setVisible(false);
			sap.ui.getCore().byId("PrintLabSerBatIp1-Additional").setVisible(false);
			sap.ui.getCore().byId("labelParnt-dummy3A").setVisible(false);
			
			//des
			  sap.ui.getCore().byId("matLabPrintDesText").setVisible(false);
			  sap.ui.getCore().byId("matLabPrintDes").setVisible(false);

					  
			//qty as 1
			 sap.ui.getCore().byId("matLabqtytext").setVisible(false); 
			 sap.ui.getCore().byId("PrtLabIPQty").setVisible(false); 

			return;
			
			}	
		
		 
		 
		
		
	}



function getTimeStamp() {
	var timestamp = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + 
	":" + new Date().getMilliseconds();
	
	return  timestamp;
}



function logFileUpdate(g_ServiceStartEndTime)
{
	var month = new Date().getMonth();
	month = month - (-1);
	var getDate = new Date().getDate() +"_"+month+"_"+new Date().getFullYear();
	var path = "HRE_log_"+ getDate +".txt";//DDMMYYYY
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
		    FS.root.getFile(path, {create:false, exclusive:false}, 
		        function(fileEntry) {
		            fileEntry.createWriter(
		                 function(writer) {
		                    writer.seek(writer.length);
		                    writer.write("\n"+g_ServiceStartEndTime);
		                    
		                 }, fail);
		        }, fail);
		}, fail);

	function fail(){
		//alert("Service Failed.." + g_ServiceStartEndTime);
		}
}

//Background log file
function logFileUpdate_Background(timeStamp)
{
	var month = new Date().getMonth();
	month = month - (-1);
	var getDate = new Date().getDate() +"_"+month+"_"+new Date().getFullYear();
	var path = "HRE_BackGround_Log"+ getDate +".txt";//DDMMYYYY
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
		    FS.root.getFile(path, {create:false, exclusive:false}, 
		        function(fileEntry) {
		            fileEntry.createWriter(
		                 function(writer) {
		                    writer.seek(writer.length);
		                    writer.write("\n"+timeStamp);
		                    
		                 }, fail);
		        }, fail);
		}, fail);

	function fail(){
		//alert("Service Failed.." + g_ServiceStartEndTime);
		}
}








function logBGFileUpdate(text)
{
	var month = new Date().getMonth();
	month = month - (-1);
	
	
	var getDate = new Date().getDate() +"_"+month+"_"+new Date().getFullYear();
	var path = "HRE_BG_log_"+ getDate +".txt";//DDMMYYYY
	
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
		    FS.root.getFile(path, {create:false, exclusive:false}, 
		        function(fileEntry) {
		            fileEntry.createWriter(
		                 function(writer) {
		                    writer.seek(writer.length);
		                    writer.write("\n" + text);
		                    
		                 }, fail);
		        }, fail);
		}, fail);

	function fail(){
		//alert("Service Failed");
		}
}

function logFileUpdate1(fileName, content)
{
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
		    FS.root.getFile(fileName, {create:true}, 
		        function(fileEntry) {
		            fileEntry.createWriter(
		                 function(writer) {
		                    writer.seek(writer.length);
		                    writer.write(content);
		                    
		                 }, fail);
		        }, fail);
		}, fail);

	function fail(){
	//	alert("Service Failed");
		}
}

/*
 * Call function  
 * readLocalFileOnDevice("MasterData.json", function(funCall){
  	alert(funCall); // this is where you get the return value
	});
 */
function readLocalFileOnDevice(filePath, funCall) {
	if(filePath.indexOf("-PreFetch") > -1) {
		//Dont fill
	}else {
		filePath = getUserName()+filePath;
	}
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
	    FS.root.getFile(filePath, {create:false, exclusive:false}, 
	        function(fileEntry) {
	            fileEntry.file(function(file) {
	        		var reader = new FileReader();

	        		reader.onloadend = function(e) {
	        			funCall(this.result); //http://stackoverflow.com/questions/6847697/how-to-return-value-from-an-asynchronous-callback-function
	        		}
	        		reader.readAsText(file);
	        	});
	        }, fail);
	}, fail);

function fail(){
	//alert("Read Failed");
	}
}

function checkIfFileExists(path){
    var result = false;

    window.requestFileSystem(
        LocalFileSystem.PERSISTENT, 
        0, 
        function(fileSystem){
            fileSystem.root.getFile(
                path, 
                { create: false }, 
                function(){ result = true; }, // file exists
                function(){ result = false; } // file does not exist
            );
        },
        getFSFail
    ); //of requestFileSystem

    
    function getFSFail()
    {
    	
    }
    return result;
}

function drop3OrdQ(sKey , sVal)
{

	if ( undefined == 	window.localStorage.getItem(sKey+"_"+"HIST"))
	{
	window.localStorage.setItem(sKey+"_"+"HIST" , sVal);
	}

else
	{
	var localHist = window.localStorage.getItem(sKey+"_"+"HIST");
	
	if( localHist.indexOf(sVal) == -1)
		{
	localHist =  localHist+"_"+sVal;
	window.localStorage.removeItem(sKey+"_"+"HIST");
	window.localStorage.setItem(sKey+"_"+"HIST" , localHist); 
		}
	}
	
}

function drop3TRQ(sKey , sVal)
{
	var trQ = window.localStorage.getItem("transactionQ");
	
	if ( undefined == trQ)
		{
		var trQArr = [];
		//trQArr = JSON.parse(trQ);
		var trQData = { " key" : sKey , "tran" : sVal};
		trQArr.push(trQData);
		 window.localStorage.setItem("transactionQ", JSON.stringify(trQArr));
		
		}
	
	else
		{
		
		var trQArr = [];
		trQArr = JSON.parse(trQ);
		var trQData = { " key" : sKey , "tran" : sVal};
		trQArr.push(trQData);
		 window.localStorage.setItem("transactionQ", JSON.stringify(trQArr));
		}
	
	
		
}


function writeFiles()
{

	window.requestFileSystem = window.requestFileSystem ||
    window.webkitRequestFileSystem;

// Create a variable that will store a reference to the FileSystem.
var filesystem = null;
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, successCallback, errorCallback);

navigator.webkitPersistentStorage.requestQuota(1024 * 1024 * 5,
  function(grantedSize) {

    // Request a file system with the new size.
    window.requestFileSystem(window.PERSISTENT, grantedSize, function(fs) {

      // Set the filesystem variable.
      filesystem = fs;

      // Setup event listeners on the form.
      saveFile(filesystem , "himanshu.txt", "testing content");

      // Update the file browser.
     // listFiles();

    }, errorHandler);

  }, errorHandler);

}

function successCallback()
{
	
}

function errorCallback()
{
	
}

function errorHandler(error) {

alert("error");
}


function replaceFileOnMobile(objStringify, path) {

	//alert("Date:"+getDate);
	
	var checkFile = checkIfFileExists(path);
	//alert("check is "+checkFile);
//alert("Check Ex File:"+checkFile);
	if(checkFile == true )
		{
		
		removeFile(path);
		//alert("now removed");
		
			//Create Log File First time
			/*window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.createWriter(function (writer) {
			    writer.onwrite = function(evt) {
			   
			        //alert("On Write");
			    };
			//writer.write("");
	
			} , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
			}
		
		*/}
	
	//logFileUpdate(path, objJSONMD);
	//alert("now creating");
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(FS) {
	    FS.root.getFile(path, {create:true}, 
	        function(fileEntry) {
	            fileEntry.createWriter(
	                 function(writer) {
	                    writer.seek(writer.length);
	                    writer.write(objStringify);
	                    
	                 }, fail);
	        }, fail);
	}, fail);

function fail(){
//	alert("Service Failed");
	}
	
}

function saveFile(filesystem , filename, content) {
	//var filesystem = null;
    filesystem.root.getFile(filename, {create: true}, function(fileEntry) {

      fileEntry.createWriter(function(fileWriter) {

        fileWriter.onwriteend = function(e) {
        	
        	 var contentBlob = new Blob([content], {type: 'text/plain'});

             fileWriter.write(contentBlob);
        	alert("file saved");
          // Update the file browser.
         // listFiles();

          // Clean out the form field.
         // filenameInput.value = '';
          //contentTextArea.value = '';

          // Show a saved message.
          //messageBox.innerHTML = 'File saved!';
        };

        fileWriter.onerror = function(e) {
          console.log('Write error: ' + e.toString());
          alert('An error occurred and your file could not be saved!');
        };

       

      }, errorHandler);

    }, errorHandler);
  }


function drop3NotiQPush()
{
	var items = window.localStorage.getItem('NOTILISTMOB01T');
	notiNumRcvd =  JSON.parse(items);
	var notiData ;
	var notiItems ;
	 
	for ( var index = 0 ; index < notiNumRcvd.length ; index ++)
		{
		$.ajax({
			  url: "FileUpload?readOrWrite=read&fileName="+notiNumRcvd[index],
			  type: "post",
			  dataType: "text",
				//processData: false,
				//data: myJSONObject,
			  success: function(text){
			      alert("success");
			      notiData =  JSON.parse(text);
			     //  $("#result").html('submitted successfully');
			  },
			  error:function(){
			      alert("failure");
			     // $("#result").html('there is error while submit');
			  }   
			}); 
		
		$.ajax({
			  url: "FileUpload?readOrWrite=read&fileName="+notiNumRcvd[index]+"_COMPLIST",
			  type: "post",
			  dataType: "text",
				//processData: false,
				//data: myJSONObject,
			  success: function(text){
			      alert("success");
			      notiItems =  JSON.parse(text);
			     //  $("#result").html('submitted successfully');
			  },
			  error:function(){
			      alert("failure");
			     // $("#result").html('there is error while submit');
			  }   
			}); 
		}
	
}



function getDocument(matVal,ListId,MobId,iconType)
{
	openSplashScreen();
	var matnum = matVal;//sap.ui.getCore().byId("valMatNo2").getText();  
var defaultplant = g_inputPlantCode;//window.localStorage.getItem("defPlantCode");
{ {
		var logInfo = getTimeStamp() +MobId+":: Service: MaterialSet Start" ; 
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_SRV/MaterialSet");
if(serviceURL == "Fail")
{
return false;
}
 var downloadModel = new sap.ui.model.odata.ODataModel(serviceURL);
 var readRequestURL = "?$filter=Plant eq '"+defaultplant +"' and Materialno eq '"+  matnum  +"'&$expand=NavMDocs";
 downloadModel.read(readRequestURL, null, null, false,   
  function(oData, oResponse) { 
	 if( oData.results.length >= 1)
      {
      var result = oData.results[0].NavMDocs; //Getting JSON response body
  var docArrayResults = result.results;//.results;
  var imageArray = [];
  var DocArray = [];
  
  //Wsapplication
  for ( var i = 0 ; i< docArrayResults.length ; i++ ){
	  if( docArrayResults[i].Wsapplication == "JPG"){
  var sortImage = {
		"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
	  }
	imageArray.push(sortImage);  
  }
  else{
	   var sortDoc = {
				"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
    		  }
		 DocArray.push(sortDoc);    
	  }
  }
 
  if ( iconType == "IMG"){
  
  var imageArrayList = {
		  "results" : imageArray
	  }
	  var oModel = new sap.ui.model.json.JSONModel();
      oModel.setData(imageArrayList);
      sap.ui.getCore().byId(ListId).setModel(oModel); 
  }
  else if(iconType == "DOC" ){
var docArrayList = {
		  "results" : DocArray
    	  }
    	
    	  var oModel = new sap.ui.model.json.JSONModel();
          oModel.setData(docArrayList);
          sap.ui.getCore().byId(ListId).setModel(oModel);
      }
      }
   
	 if( g_isDebug == true)
	 {
	 var logInfo1 = getTimeStamp() +MobId+":: Service: MaterialSet Finish" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }
	  closeSplashScreen(); 	 
 },    function(oError){ 
			   closeSplashScreen();
				errorRes = true;
				try{
					var data = JSON.parse(oError.response.body);
					for(var event in data){
					var dataCopy = data[event];	
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						sap.m.MessageBox.show(
						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
catch(e)
{sap.m.MessageBox.show(e.message+ " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");break;
}}}catch(e){sap.m.MessageBox.show(
"Service Not Available - Please contact system administrator" + " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");
if( g_isDebug == true)
 {
 var logInfo1 = getTimeStamp() +"MOB24:: Service: MaterialSet Failed no network" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }}
  });}}
}



function getEfect(effCode)
{

	switch (effCode) {
    case "No Effect":
        day = "1";
        break;
    case "In service minor effect ( KPI effect )":
        day = "2";
        break;
    case "In service minor effect ( Delay )":
        day = "3";
        break;
    case "In service cancellation":
        day = "4";
        break;
    case "In depot not able to enter service":
        day = "5";
        break;
    case "In depot able to enter service":
        day = "6";
        break;
    case "In depot no effect":
        day = "7";
        break;
        
        return day ;
}
}

function getPriority(priCode)
{

	switch (priCode) {
    case "Safety Critical":
        day = "1";
        break;
    case "Not to leave depot":
        day = "2";
        break;
    case "Degraded Mode":
        day = "3";
        break;
    case "In Campaign":
        day = "4";
        break;
    case "Deferred":
        day = "5";
        break;
    case "Monitoring":
        day = "6";
        break;
    case "Non Urgent":
        day = "7";
        break;
        
        return day ;
}
}

/*Drop 3 common DMS List*/

function Drop3_Common_DMS_Document_List(DynamicserviceURL,readRequestURL,ListId,MobId,iconType){

	//Empty List
	var docArrayListEmpty = {
    };
	 
	 var oModelEmpty = new sap.ui.model.json.JSONModel();
	 oModelEmpty.setData(docArrayListEmpty);
     sap.ui.getCore().byId(ListId).setModel(oModelEmpty);

     
openSplashScreen();

{ 
	{
		var logInfo = getTimeStamp() +MobId+":: Service: ContextSet Start" ; 
var serviceURL = getUrl(DynamicserviceURL);
if(serviceURL == "Fail")
{
return false;
}
 var downloadModel = new sap.ui.model.odata.ODataModel(serviceURL);
 //var readRequestURL = "/AssetSet?$filter=Equnr eq '"+800001+"'&$expand=NavDocs";
 downloadModel.read(readRequestURL, null, null, false,   
  function(oData, oResponse) { 
	 if( oData.results.length >= 1)
      {
     var result = oData.results[0].NavDocs; //Getting JSON response body
     var docArrayResults = result.results;
     if( docArrayResults != ""){
    	 var DocArray = [];
    	 for ( var i = 0 ; i< docArrayResults.length ; i++ ){
    	    	
    	        var sortDoc = {
    	   		  "Documenttype" : docArrayResults[i].Documenttype,
    	   		  "Documentnumber" :docArrayResults[i].Documentnumber,
    	   		  "Documentpart":docArrayResults[i].Documentpart,
    	   		  "Documentversion":docArrayResults[i].Documentversion,
    	   		  "Originaltype": docArrayResults[i].Originaltype,
    	   		  "Wsapplication":docArrayResults[i].Wsapplication,
    	   		  "Description":docArrayResults[i].Description,
    	   		  "ContentDescription":docArrayResults[i].ContentDescription,
    	   		  "Objectkey":docArrayResults[i].Objectkey,
    	   		  "DocDescription" :docArrayResults[i].DocDescription
    	   		      		  };
    	   		  DocArray.push(sortDoc); 
    	             var docArrayList = {
    	     		                    "results" : DocArray
    	         	      };
    	         	  var oModel = new sap.ui.model.json.JSONModel();
    	                 oModel.setData(docArrayList);
    	                 sap.ui.getCore().byId(ListId).setModel(oModel);
    		 
    	 }
    	 
         }
    
         else{
		 var docArrayList = {
         };
		 var oModel = new sap.ui.model.json.JSONModel();
         oModel.setData(docArrayList);
         sap.ui.getCore().byId(ListId).setModel(oModel);
	 }
      }
	 else{
		 var docArrayList = {
          };
		 var oModel = new sap.ui.model.json.JSONModel();
         oModel.setData(docArrayList);
         sap.ui.getCore().byId(ListId).setModel(oModel);
	 }
	 closeSplashScreen(); 	
	 if( g_isDebug == true)
	 {
	 var logInfo1 = getTimeStamp() +MobId+":: Service: ContextSet Finish" ; 
     var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }
	   
 },    function(oError){
			   closeSplashScreen();
				errorRes = true;
				try{
					var data = JSON.parse(oError.response.body);
					for(var event in data){
					var dataCopy = data[event];	
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						sap.m.MessageBox.show(
						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
catch(e)
{sap.m.MessageBox.show(e.message+ " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");break;
}}}catch(e){sap.m.MessageBox.show(
"Service Not Available - Please contact system administrator" + " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");
if( g_isDebug == true)
 {
 var logInfo1 = getTimeStamp() +MobId+":: Service: ContextSet Failed no network" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }}
  });}}

}



function getDocumentImageForMob16(NotiNum,ListId,MobId,iconType)
{
	openSplashScreen();
    var NotiNumber = NotiNum;//window.localStorage.getItem("defPlantCode");
{ {
		var logInfo = getTimeStamp() +MobId+":: Service: ContextSet Start" ; 
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_SRV");
if(serviceURL == "Fail")
{
return false;
}
 var downloadModel = new sap.ui.model.odata.ODataModel(serviceURL);
 var readRequestURL = "ContextSet?$filter=NotificationNo eq '"+NotiNumber +"' &$expand=NavDocs";
// /sap/opu/odata/sap/ZGW_DOCUMENT_SRV/ContextSet?$filter=NotificationNo eq '200001043' &$expand=NavDocs
 downloadModel.read(readRequestURL, null, null, false,   
  function(oData, oResponse) { 
	 if( oData.results.length >= 1)
      {
      var result = oData.results[0].NavDocs; //Getting JSON response body
  var docArrayResults = result.results;//.results;
  var imageArray = [];
  var DocArray = [];
  
  //Wsapplication
  for ( var i = 0 ; i< docArrayResults.length ; i++ ){
	  if( docArrayResults[i].Wsapplication == "JPG"){
  var sortImage = {
"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
	  }
	imageArray.push(sortImage);  
  }
  else{
	   var sortDoc = {
"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
    		  }
		 DocArray.push(sortDoc);    
	  }
  }
 
  if ( iconType == "IMG"){
  
  var imageArrayList = {
		  "results" : imageArray
	  }
	  var oModel = new sap.ui.model.json.JSONModel();
      oModel.setData(imageArrayList);
      sap.ui.getCore().byId(ListId).setModel(oModel); 
  }
  else if(iconType == "DOC" ){
var docArrayList = {
		  "results" : DocArray
    	  }
    	
    	  var oModel = new sap.ui.model.json.JSONModel();
          oModel.setData(docArrayList);
          sap.ui.getCore().byId(ListId).setModel(oModel);
      }
      }
   
	 if( g_isDebug == true)
	 {
	 var logInfo1 = getTimeStamp() +MobId+":: Service: ContextSet Finish" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }
	  closeSplashScreen(); 	 
 },    function(oError){ 
			   closeSplashScreen();
				errorRes = true;
				try{
					var data = JSON.parse(oError.response.body);
					for(var event in data){
					var dataCopy = data[event];	
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						sap.m.MessageBox.show(
						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
catch(e)
{sap.m.MessageBox.show(e.message+ " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");break;
}}}catch(e){sap.m.MessageBox.show(
"Service Not Available - Please contact system administrator" + " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");
if( g_isDebug == true)
 {
 var logInfo1 = getTimeStamp() +"MOB24:: Service: ContextSet Failed no network" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }}
  });}}
}


function getDocumentImageForMob21(NotiNum,ListId,MobId,iconType)
{
openSplashScreen();
var NotiNumber = NotiNum;//window.localStorage.getItem("defPlantCode");
{ {
		var logInfo = getTimeStamp() +MobId+":: Service: InsplotColl Start" ; 
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_DOCUMENT_SRV");
if(serviceURL == "Fail")
{
return false;
}
 var downloadModel = new sap.ui.model.odata.ODataModel(serviceURL);
 var readRequestURL = "InsplotColl?$filter=Insplot_No  eq '"+NotiNumber +"' &$expand=NavDocs";
// /sap/opu/odata/sap/ZGW_DOCUMENT_SRV/ContextSet?$filter=NotificationNo eq '200001043' &$expand=NavDocs
   downloadModel.read(readRequestURL, null, null, false,   
    function(oData, oResponse) { 
	 if( oData.results.length >= 1)
      {
      var result = oData.results[0].NavDocs; //Getting JSON response body
  var docArrayResults = result.results;//.results;
  var imageArray = [];
  var DocArray = [];
  //Wsapplication
  for ( var i = 0 ; i< docArrayResults.length ; i++ ){
	  if( docArrayResults[i].Wsapplication == "JPG"){
  var sortImage = {
		"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
	  }
	imageArray.push(sortImage);  
  }
  else{
	   var sortDoc = {
				"Documenttype" : docArrayResults[i].Documenttype,
"Documentnumber" :docArrayResults[i].Documentnumber,
"Documentpart":docArrayResults[i].Documentpart,
"Documentversion":docArrayResults[i].Documentversion,
"Originaltype": docArrayResults[i].Originaltype,
"Wsapplication":docArrayResults[i].Wsapplication,
"Description":docArrayResults[i].Description,
"ContentDescription":docArrayResults[i].ContentDescription,
"Objectkey":docArrayResults[i].Objectkey,
"DocDescription" :docArrayResults[i].DocDescription
  }
  DocArray.push(sortDoc);    
	  }}
  if ( iconType == "IMG"){
  
var imageArrayList = {
		  "results" : imageArray
	  }
	  var oModel = new sap.ui.model.json.JSONModel();
      oModel.setData(imageArrayList);
      sap.ui.getCore().byId(ListId).setModel(oModel); 
  }
  else if(iconType == "DOC" ){
var docArrayList = {
		  "results" : DocArray
	  }
	
	  var oModel = new sap.ui.model.json.JSONModel();
      oModel.setData(docArrayList);
      sap.ui.getCore().byId(ListId).setModel(oModel);
  }
      }
   
 if( g_isDebug == true)
 {
 var logInfo1 = getTimeStamp() +MobId+":: Service: InsplotColl Finish" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }
	  closeSplashScreen(); 	 
 },    function(oError){ 
			   closeSplashScreen();
				errorRes = true;
				try{
					var data = JSON.parse(oError.response.body);
					for(var event in data){
					var dataCopy = data[event];	
						try{
						var messageFromBackend = dataCopy.innererror.errordetails[0].message;
						sap.m.MessageBox.show(
						messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");}
catch(e)
{sap.m.MessageBox.show(e.message+ " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");break;
}}}catch(e){sap.m.MessageBox.show(
"Service Not Available - Please contact system administrator" + " " +" "+" ",
sap.m.MessageBox.Icon.ERROR,"Error");
if( g_isDebug == true)
 {
 var logInfo1 = getTimeStamp() +"MOB24:: Service: InsplotColl Failed no network" ; 
 var g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
	 logFileUpdate(g_ServiceStartEndTime);
	 }}
  });}}
}


//DMS Display Documents

function Display_Document_Image_PDF(myFileName){
openSplashScreen();
var oResPop = new sap.m.ResponsivePopover({
		    //placement  : sap.m.PlacementType.Down,
});
var html11 ='';
var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_HELP_FILES_SRV/");
var quotationsearchModel = new sap.ui.model.odata.ODataModel(serviceURL);
var readRequestURL = "/FileSet('"+myFileName+"')/$value";//myFileName //IMMATERIALSEARCHHELPPAGE
quotationsearchModel.read( readRequestURL, null, null, true, function(oData, oResponse){  
var pdfURL = oResponse.requestUri;    
var urltype = oResponse.headers["Content-Type"];
html11 = new sap.ui.core.HTML("html11", {
content:
    //"<div> <object data=" + pdfURL + " type="+ urltype +" width='300' height='200'> alt : <a href=" + pdfURL + ">test.pdf</a> </object> </div>",
	"<div>	<iframe src="+pdfURL +" ></iframe> </div>",	
    preferDOM : false,
	afterRendering : function(e) {
		debugger;
	}
});
     oResPop.addContent(html11);
     closeSplashScreen(); 	
     oResPop.openBy(this);
    },function(){  
     alert("Read failed");
 closeSplashScreen();  
});
}

 function removeFile(path)
{
	



	//var path = "AssetList.json";
	//alert("Date:"+getDate);
	
	//var checkFile = checkIfFileExists(path);
//alert("Check Ex File:"+checkFile);
	//if(checkFile == false )
		//{
			//Create Log File First time
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
			    
			    fileSystem.root.getFile(path, {create: true, exclusive: false}, function (fileEntry) {
			    fileEntry.remove(function () {
			    	
			    	//alert("file removed");
			    } , fail);
			}, fail);
	        }, fail);
	
			function fail()
			{
				
				alert("Failed to remove file");
			}
			
			/*var path2 = "MasterData.json";
			//alert("Date:"+getDate);
			
			//var checkFile = checkIfFileExists(path);
		//alert("Check Ex File:"+checkFile);
			//if(checkFile == false )
				//{
					//Create Log File First time
					window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
					    
					    fileSystem.root.getFile(path2, {create: true, exclusive: false}, function (fileEntry) {
					    fileEntry.remove(function () {
					    	
					    	//alert("file removed");
					    } , fail);
					}, fail);
			        }, fail);
			
					function fail()
					{
						
						//alert("Failed to remove file");
					}*/
		
		//}
	
	//logFileUpdate(path, objJSONMD);
	
	

}
 
 function removeAllFiles()
 {
	//alert("in remove all files");
	 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
		 var reader = fileSystem.root.createReader();
		 reader.readEntries(gotList, failRead);   
		 /*reader.readEntries(
				 var i;
				    for (i=0; i<entries.length; i++) {
				    	alert(entries[i].name);
				        
				    }
				 , fail);*/
     }, fail);

		function fail()
		{
			
		//	alert("Failed to read all  file");
		}
 }
 
 function gotList(entries) {
	// alert("in got list");
	    var i;
	    var savedUsr = getUserName();
	    for (i=0; i<entries.length; i++) { 
	    	//alert(entries[i].name);
	    	if (entries[i].name.indexOf(savedUsr) != -1)
	    		{
	    		removeFile(entries[i].name);
	    		}
	        
	    }
	}
 
 function failRead()
 {
	 
	 alert("fail read all");
 }
 
 
 function getUserParam()
 {
	 
	 ///sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/UserParameterList?UserId='RDAVIES'&$format=json
		var serviceURL = getUrl("/sap/opu/odata/sap/ZGW_PM_MOBILEAPPS_SRV/");
		
			
			/*
			 * new sap.ui.model.odata.ODataModel(sServiceUrl, bJSON?, sUser?, sPassword?, mHeaders?, bTokenHandling?, bWithCredentials?, bLoadMetadataAsync?)
			 */
		 	var defectDataModel = new sap.ui.model.odata.ODataModel(serviceURL, true, getUserName(), getPassword(), null, true, true, false);
		 	
		 	/*
		 	 * Replace with below req URL once the service is ready.
		 	 */
		 	//var readRequestURL = "/InsplotColl?$filter=Plant eq 'GWNP' and Material eq '" + matDesc + "' and Workcenter eq '" + wcDesc + "' and Vendor_Name eq '" + venDesc + "' and Inspection_Lot_Type eq '" + typeDesc + "'&$format=json";
		 	
			var readRequestURLOpen = "/UserParameterList?UserId='"+getUserName()+"'";
			//var readRequestURLOpen = "/OrderListSet?$filter=UserId eq '"+getUserName()+"' and JobTypeO eq 'X'";
			
			defectDataModel.read(readRequestURLOpen, null, null, false,   
		          function(oData, oResponse) { 
				  var result = oData.results;
			      // alert(result.length);
		          if(result.length > 0){
						var result = oResponse.body; //Getting JSON response body
					
					var jsonObj = JSON.parse(result); // Parsing the JSON Object
					
					var result = jsonObj.d; // Taking the result inside namespace d
					//alert(result.results.length);
					for ( var count = 0 ; count < result.results.length ;count ++ )
						{
						
						var data = "";
						//alert( result.results[count].ParameterId);
						if (result.results[count].ParameterId ==  "IHG" ) {
							
						//	alert( result.results[count].ParameterValue);
							window.localStorage.setItem("IHG" , result.results[count].ParameterValue);
							sap.ui.getCore().byId("MOB01FleetInput").setValue(window.localStorage.getItem("IHG"));
							sap.ui.getCore().byId("MOB07FleetInput").setValue(window.localStorage.getItem("IHG"));
						}
						
						if (result.results[count].ParameterId ==  "ZMOBILE_NOTIF_DEPOT" ) {
							//alert( result.results[count].ParameterValue);
							window.localStorage.setItem("ZMOBILE_NOTIF_DEPOT" , result.results[count].ParameterValue);
							
						}
						
						
						}
					
					
					
		        	
		           }
				
						
					},  function(oError){  
							errorRes = true;
						//	alert(oError.message);
							try{
								var data = JSON.parse(oError.response.body);
								for(var event in data){
								var dataCopy = data[event];	
									try{
									var messageFromBackend = dataCopy.innererror.errordetails[0].message;
									//sap.m.MessageBox.show(
									//messageFromBackend+ " " +" "+" ",sap.m.MessageBox.Icon.ERROR,"Error");
									}
									catch(e)
									{//sap.m.MessageBox.show(e.message+ " " +" "+" ",
									//sap.m.MessageBox.Icon.ERROR,"Error");
									break;
									}}}catch(e){sap.m.MessageBox.show(
		                            "Service Not Available - Please contact system administrator" + " " +" "+" ",
									sap.m.MessageBox.Icon.ERROR,"Error");
									if( g_isDebug == true)
						              {
						              //Service End Time
						            //  var logInfo1 = getTimeStamp() +"Open Jobs Load" ; 
						              //Log file Service Start and End Time
						              g_ServiceStartEndTime = logInfo + "\n" + logInfo1;
						              logFileUpdate(g_ServiceStartEndTime);
						              }
									
									
									}
						
		  });
			
			
			
			
			

 }
 
 function convertJsonDateString(jsonDate) {
     var shortDate = null;
     if (jsonDate) {
         var regex = /-?\d+/;
         var matches = regex.exec(jsonDate);
         var dt = new Date(parseInt(matches[0]));
         var month = dt.getMonth() + 1;
         var monthString = month > 9 ? month : '0' + month;
         var day = dt.getDate();
         var dayString = day > 9 ? day : '0' + day;
         var year = dt.getFullYear();
         shortDate = monthString + '-' + dayString + '-' + year;
     }
     return shortDate;
 };
 

 
 /*
  * This function is responsible of reading Drop3 Transaction Details
  */
 function readDrop3TransactionDetails(objKey, callBackFunc) {

		if(g_runningInTablet || g_runningOnPhone) 
		{
			readLocalFileOnDevice(objKey+".json", callBackFunc);
		}
		
	}
 
 function readQBeforeClearing()
 {
	 
	  g_trQ = window.localStorage.getItem("TRQ");
	 
 }
 function restoreQueue()
 {


		 trQ = window.localStorage.getItem("TRQ");

		if (trQ) {

			var notiNumRcvd = JSON.parse(trQ);

			var button = this;
			button.setEnabled(false);

			// keeps track of async method calls
			var counter = 0;
			var dataArray = [];

			for (var i = notiNumRcvd.length - 1; i >= 0; i--) {

				(function (i_copy) {

					readDrop3TransactionDetails(notiNumRcvd[i_copy].Key, function (result) {

						var data = {
							"Tran": notiNumRcvd[i_copy].Tran,
							"Key": notiNumRcvd[i_copy].Key,
							"Time": notiNumRcvd[i_copy].Time,
							"Status": notiNumRcvd[i_copy].retryStatus,
							"numOfRetry": notiNumRcvd[i_copy].retryStatus === "Failed" ? notiNumRcvd[i_copy].numOfRetry : 0,
							"Date": notiNumRcvd[i_copy].res2,
							"shrtdesc": "N/A",
							"Order": "N/A",
							"Activity": "N/A"
						};

						var parsedJSON = JSON.parse(result);

						if (parsedJSON.hasOwnProperty("Header")) {
							if (parsedJSON.Header.hasOwnProperty("shrtdesc")) data["shrtdesc"] = parsedJSON.Header.shrtdesc;
						} else if (parsedJSON.hasOwnProperty("Items")) {
							if (parsedJSON.Items.hasOwnProperty("Order")) data["Order"] = parsedJSON.Items.Order;
							if (parsedJSON.Items.hasOwnProperty("Activity")) data["Activity"] = parsedJSON.Items.Activity;
						}

						var index = (notiNumRcvd.length - 1) - i_copy;
						dataArray[index] = data;

						counter++;

						// last result
						if (counter === notiNumRcvd.length) {
							var model = sap.ui.getCore().byId("D3QU").getModel();
							model.setProperty("/results", dataArray);
							sap.ui.getCore().byId("D3QU").setModel(model);
							button.setEnabled(true);
						}

					});

				}(i));

			}

		}

	
 }
