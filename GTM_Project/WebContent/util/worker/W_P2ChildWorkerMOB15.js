/*
 * TODO
 */

function callChildWorker2MOB15() {
    postMessage("");
    setTimeout("callChildWorker2MOB15()", (1000 * 1 * 60 * 10));
}

callChildWorker2MOB15();