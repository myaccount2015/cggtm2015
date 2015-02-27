/*
 * TODO
 */

function callParentWorkerMOB15() {
    postMessage("");
    setTimeout("callParentWorkerMOB15()", 100);
}

callParentWorkerMOB15();