function HelpDocument(mobileScreenNumber) {

var helpDoc = {"HelpDocument":
[
 			 {"MOB":"MOB00", "HelpDocValue":"MOBILELOGONMENUHELPPAGE"},
			 {"MOB":"MOB15", "HelpDocValue":"QMCREATENOTIFICATIONHELPP"},
			 {"MOB":"MOB16", "HelpDocValue":"QMNOTIFICATIONTASKLISTHEL"},
			 {"MOB":"MOB17", "HelpDocValue":"IMSTOCKTRANSFERHELPPAGE"},
			 {"MOB":"MOB18", "HelpDocValue":"IMSTOCKISSUEHELPPAGE"},
			 {"MOB":"MOB19", "HelpDocValue":"IMSTOCKRECEIPTHELPPAGE"},
			 {"MOB":"MOB20", "HelpDocValue":"IMINVENTORYCOUNTHELPPAGE"},
			
			 
			 {"MOB":"MOB21", "HelpDocValue":"QMENTERINSPECTIONRESULTSH"},
			 {"MOB":"MOB22", "HelpDocValue":"QMINSPECTIONLOTCREATEHELP"},
			 {"MOB":"MOB23", "HelpDocValue":"IMSTOCKOVERVIEWHELPPAGE"},
			 {"MOB":"MOB24", "HelpDocValue":"IMMATERIALSEARCHHELPPAGE"},
			 {"MOB":"MOB26", "HelpDocValue":"WMPUTAWAYHELPPAGE"},
			 {"MOB":"MOB27", "HelpDocValue":"WMPICKINGHELPPAGE"},
	
			 {"MOB":"MOB28", "HelpDocValue":"WMPOSTINGCHANGEHELPPAGE"},
			 {"MOB":"MOB29", "HelpDocValue":"IMLABELPRINTHELPPAGE"},
			 {"MOB":"MOB30", "HelpDocValue":"WM2CONFIRMBIN2BINHELPPAGE"},
			 {"MOB":"MOB31", "HelpDocValue":"MOBILEOPENDOCUMENTHELPPAGE"},
			 {"MOB":"MOB35", "HelpDocValue":"WMINVENTORYCOUNTHELPPAGE"},
			 
			 {"MOB":"MOB01", "HelpDocValue":"PMCREATENOTIFICATIONHELPP"},
			 {"MOB":"MOB02", "HelpDocValue":"PMCHANGEDURATIONHELPPAGE"},
			 {"MOB":"MOB03", "HelpDocValue":"PMORDERLISTTHELPPAGE"},
			 {"MOB":"MOB04", "HelpDocValue":"PMORDERCONFIRMHELPPAGE"},
			 {"MOB":"MOB05", "HelpDocValue":"PMCOMPONENTPICKHELPPAGE"},
			 {"MOB":"MOB07", "HelpDocValue":"PMASSETLISTHELPPAGE"},
	
			 {"MOB":"MOB08", "HelpDocValue":"PMASSETCHANGEHELPPAGE"},
			 {"MOB":"MOB09", "HelpDocValue":"PMASSETREPLACEHELPPAGE"},
			 {"MOB":"MOB33", "HelpDocValue":"PMMEASUREMENTHELPPAGE"},
			 {"MOB":"MOB37", "HelpDocValue":"IMTOOLSEARCHHELPPAGE"},
			 {"MOB":"MOB38", "HelpDocValue":"PMPICKTOOLSHELPPAGE"}
			 
		
			 
			 
]};
for( var i = 0 ; i< helpDoc.HelpDocument.length ; i++)
{
if( helpDoc.HelpDocument[i].MOB == mobileScreenNumber)
{
return helpDoc.HelpDocument[i].HelpDocValue;
}


}

} 