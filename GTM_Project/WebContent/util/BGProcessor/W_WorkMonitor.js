/*
 * TODO
 */

function callWorkMonitor() {
	count = count + 1;
    postMessage(count);
    if(count == 100) { //100 * 100 = 10 Sec
    	count = 0;
    }
    setTimeout("callWorkMonitor()", 100);
}

var count = 0;
callWorkMonitor();