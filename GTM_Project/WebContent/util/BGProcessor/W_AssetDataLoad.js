/*
 * TODO
 */

function callAssetData() {
    postMessage("");
    setTimeout("callAssetData()", (1000*60*60));
}

callAssetData();