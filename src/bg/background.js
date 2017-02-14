// if you checked "fancy-settings" in extensionizr.com, uncomment this lines
// var settings = new Store("settings", {
//		 "sample_setting": "This is how you use Store.js to remember values"
// });
//example of using a message handler from the inject scripts
var lang;
chrome.storage.sync.get("language", function(obj) {
    if (!obj.language) {
        lang = chrome.i18n.getMessage("iso");
    }
});
chrome.storage.onChanged.addListener(function(changes, namespace) {
    chrome.storage.sync.get("language", function(obj) {

        // Update status bar text here
        lang = obj.language;
    });
});

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });

chrome.contextMenus.create({
    "title": chrome.i18n.getMessage("context"),
    "contexts": ["selection"],
    "onclick": function(e) {



        var bkg = chrome.extension.getBackgroundPage();

        var url = e.pageUrl;
        var wikURL = "http://" + lang + ".wiktionary.org/wiki/";

        if (e.selectionText) {
            // The user selected some text, put this in the message.
            wikURL += encodeURI(e.selectionText);
        }
        // Open the page up.
        chrome.tabs.create({
            "url": wikURL
        });

    }
});