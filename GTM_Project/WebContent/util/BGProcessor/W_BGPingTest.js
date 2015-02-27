/*
 * TODO
 */

function callPingTestWorker() {
    postMessage("");
    setTimeout("callPingTestWorker()", 15000);
}

callPingTestWorker();