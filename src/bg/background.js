// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  
 chrome.contextMenus.create({
    "title": "Search on Wiktionary",
    "contexts": ["selection"],
    "onclick" : function(e) {
  
	var bkg = chrome.extension.getBackgroundPage();
	bkg.console.log('foo');
	
    var url = e.pageUrl;
    var wikURL = "http://en.wiktionary.org/wiki/";

    if (e.selectionText) {
        // The user selected some text, put this in the message.
        wikURL += encodeURI(e.selectionText);
    }
    // Open the page up.
    chrome.tabs.create(
          {"url" : wikURL });
}
  });
  