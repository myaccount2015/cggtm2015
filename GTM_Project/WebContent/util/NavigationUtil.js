/*
 *	This file contains Navigation related common methods  
 */

/*
 * This method responsible of below operations
 * 1. Maintain a global variable of navigation tree
 * 2. Accepts NavKey and pageIndex. If the NavKey already existing, append the pageIndex value to existing NavKey container
 *    else add new entry with NavKey as key value.
 */
function setNavigationPaths(NavKey, pageIndex) {
	
	/*
	 * Check NavKey already Exist
	 */
	
	if(g_NavigationTree[NavKey] != undefined) { //Existing
		var pageArr = g_NavigationTree[NavKey];
		var found = $.inArray(pageIndex, pageArr) > -1;
		if(found == false) {
			pageArr.push(pageIndex);
			g_NavigationTree[NavKey] = pageArr;
		}
	}else {
		var pageArr = [];
		var found = $.inArray(pageIndex, pageArr) > -1;
		if(found == false) {
			pageArr.push(pageIndex);
			g_NavigationTree[NavKey] = pageArr;
		}
	}
	
	var dummy = g_NavigationTree;
}

/*
 * This method remove the last navigated entry from Tree.
 */
function clearLeafNodeNav(NavKey, pageIndex) {
	if(g_NavigationTree[NavKey] != undefined) { //Existing
		var pageArr = g_NavigationTree[NavKey];
		
		var newPageArr = [];
		if(pageIndex == null) {
			for(var i=0;i<pageArr.length-1;i++) {
				newPageArr.push(pageArr[i]);
			}
		}else {
			for(var i=0;i<pageArr.length;i++) {
				if(pageIndex==pageArr[i]) {
					break;
				}
				newPageArr.push(pageArr[i]);
			}
		}
		g_NavigationTree[NavKey] = newPageArr;
	}
}

/*
 * This method clear all Navigation Entry
 */
function clearNav(NavKey) {
	if(g_NavigationTree[NavKey] != undefined) { //Existing
		g_NavigationTree[NavKey] = [];
	}
}

function setNavigationMOB(navMOB) {
	g_NavMOB = navMOB;
}

/*
 * This method fetch the leaf Node of current navigation Tree
 */
function getLeafNode() {
	var navIndex = g_NavMOB;
	
	if(g_NavMOB=="") {
		navIndex = "COM";
	}
	
	var pageArr = g_NavigationTree[navIndex];
	
	if(pageArr != undefined && pageArr.length < 2) {
		navIndex = "COM";
	}
	
	pageArr = g_NavigationTree[navIndex];
	
	if(pageArr != undefined && pageArr.length > 1) {
		if(navIndex=="COM") {
			return pageArr[pageArr.length-1];
		}else {
			return pageArr[pageArr.length-2];
		}
	}else {
		return "";
	}
}

function destroyMOb16Content(){
	
	sap.ui.getCore().byId("idMOB16NotificationList").destroyContent();
	sap.ui.getCore().byId("idMOB16NotificationList").destroy();
	/*sap.ui.getCore().byId("idMOB16NotiTaskDetail").destroyContent();
	alert("I am destroy 4");
	sap.ui.getCore().byId("idMOB16NotiTaskDetail").destroy();
	*/
	

	
	
	
	
}