/*
 * TODO
 */

function callDrop3Worker() {
    postMessage("");
    setTimeout("callDrop3Worker()", 1000 * 60 * 2); //2 minutes
}

callDrop3Worker();