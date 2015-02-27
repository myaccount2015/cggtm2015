/*
 * TODO
 */

function callChildWorker3MOB15() {
    postMessage("");
    setTimeout("callChildWorker3MOB15()", (1000 * 1 * 60 * 15));
}

callChildWorker3MOB15();