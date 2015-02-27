/*
 * TODO
 */

function callMasterData() {
    postMessage("");
    setTimeout("callMasterData()", (1000*60*60));
}

callMasterData();