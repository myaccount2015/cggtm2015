String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
};

String.prototype.endsWith = function(suffix) {
    return this.match(suffix+"$") == suffix;
};

String.prototype.padBeginZero = function (num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

/*
* This method will take input as /Date(1395792000000)/ and convert to actual date 26/3/2014
*/
function formatDate(strDate)
{
	var numb = strDate.toLowerCase().match(/\d/g);
	numb = numb.join("");
	var date = new Date(parseFloat(numb));
	var month = date.getMonth();
	month = month + 1;
	var final_start_date = (date.getDate()+"/"+month+"/"+date.getFullYear());
	return final_start_date;
}

/*
 * Get input string as 26/3/2014 and convert to Date object
 */
function convertToDate(strDt)
{

	var dtToConvert = strDt.split("/");
	var dt = new Date(dtToConvert[2], dtToConvert[1] - 1, dtToConvert[0]);
	return dt;
}


function field_numeric_validation(getV)
{
	
	var tfValue = getV.getValue().trim();
	var myInteger = (/^-?\d*(\.\d+)?$/);
	var newval = tfValue.substr(0,(tfValue.length -1));
	
	if( !tfValue.match(myInteger) )
	{
	getV.setValueState(sap.ui.core.ValueState.Error);
	sap.m.MessageBox.show("Enter numeric values",sap.m.MessageBox.Icon.ERROR,"Error");
    getV.setValue("");
	return false;
	}

	/*else if(tfValue == 0)
	  {
		
		// getV.setValueState(sap.ui.core.ValueState.Error);
		   sap.m.MessageBox.show("Quantity has to be more that zero",sap.m.MessageBox.Icon.ERROR,"Error");
		   getV.setValue("");
	  
	  
	  }*/
   
	
	else if (tfValue < 0)
		{
		sap.m.MessageBox.show("negative values not allowed for this Field",sap.m.MessageBox.Icon.ERROR,"Error");
		return false;
		}
   else  
 	  {
	   getV.setValueState(sap.ui.core.ValueState.None);
		return true;
 	  }
	
	
	


	


}


function field_numeric_validation_qty(getT){
	var tfValue = getT.getValue().trim();
	
	
	
	//var tfValue = getT.getValue();
	//var tfValue = getV.getValue();
	var myInteger = (/^-?\d*(\.\d+)?$/);
	var newval = tfValue.substr(0,(tfValue.length -1));
	
	if( !tfValue.match(myInteger) )
	{
	getT.setValueState(sap.ui.core.ValueState.Error);
//alert(newval);
	getT.setValue(newval);
	sap.m.MessageBox.show("Enter numeric values",sap.m.MessageBox.Icon.ERROR,"Error");
	return;
	}
	else if(tfValue < 0)
	  {
		
		// getV.setValueState(sap.ui.core.ValueState.Error);
		   sap.m.MessageBox.show("Quantity has to be more than zero",sap.m.MessageBox.Icon.ERROR,"Error");
		  // getT.setValue("");
			return;
	  
	  }
	else{
		getT.setValueState(sap.ui.core.ValueState.None);
	}
	
}


function field_alphanumeric_validation_pass(getT){
	var tfValue = getT.getValue().trim();
	
	
	
	//var tfValue = getT.getValue();
	//var tfValue = getV.getValue();
	var myInteger =  /^[0-9a-zA-Z]+$/;
	var newval = tfValue.substr(0,(tfValue.length -1));
	
	if(tfValue == "" || tfValue == "null")
	  {
		
		 getT.setValueState(sap.ui.core.ValueState.Error);
		   sap.m.MessageBox.show("Password required",sap.m.MessageBox.Icon.ERROR,"Error");
		   getT.setValue("");
			return;
	  
	  }
	 else if( !tfValue.match(myInteger) )
	{
	getT.setValueState(sap.ui.core.ValueState.Error);
//alert(newval);
	getT.setValue(newval);
	sap.m.MessageBox.show("No special Charracters are allowed",sap.m.MessageBox.Icon.ERROR,"Error");
	getT.setValue("");
	return;
	}
	
	else{
		getT.setValueState(sap.ui.core.ValueState.None);
	}
	
}



function isNumRepeat(idControl) {
	var inp = idControl.getValue();
	// var reg =();//
	var myInteger = (/^(?!.*(\d)\1).*$/);
	if (!inp.match(myInteger) || inp.length < 2) {
		idControl.setValue("");
		// alert("not a Valid Pin");
		sap.m.MessageBox.show(

		"Pin should not have repeated numeric value",
				sap.m.MessageBox.Icon.ERROR, "Error");
		return true;
	}
}


function validate(idControl) {
	// var str = ;
	var str = idControl.getValue();
	var l = str.length, i;

	var isError = false;

	for (i = 0; i < l - 1; i++) {
		if ((parseInt(str[i], 10) + 1) % 10 != str[i + 1])

		{

			break;
		} else {
			sap.m.MessageBox.show(

			" PIN should not have Incremental Numeric Values",
					sap.m.MessageBox.Icon.ERROR, "Error");
		}

		sap.ui.getCore().byId('txtPin').setValue("");
		isError = true;
		break;
	}

	if (!isError) {
		isError = isNumRepeat(idControl);
	}

	return isError;

}


