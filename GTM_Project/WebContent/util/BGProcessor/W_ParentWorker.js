/*
 * TODO
 */

function callParentWorker() {
    postMessage("");
    setTimeout("callParentWorker()", 100);
}

callParentWorker();