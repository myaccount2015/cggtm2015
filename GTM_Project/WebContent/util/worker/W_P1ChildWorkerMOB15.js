/*
 * TODO
 */

function callChildWorker1MOB15() {
    postMessage("");
    setTimeout("callChildWorker1MOB15()", (1000 * 1 * 60 * 5));
}

callChildWorker1MOB15();