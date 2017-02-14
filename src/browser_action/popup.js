var lang;
chrome.storage.sync.get("language", function(obj) {
    if (!obj.language) {
        lang = chrome.i18n.getMessage("iso");
    } else {
        lang = obj.language;
    }
});
localStorage.locale_pref || lang;
window.addEventListener('load', function(evt) {
    document.getElementById('search').addEventListener('submit', openURL);
    document.getElementById("word").placeholder = chrome.i18n.getMessage("popup");
    document.getElementById('word').focus();

});

function openURL() {
    event.preventDefault();
    var word = encodeURIComponent(document.getElementById('word').value);
    chrome.tabs.create({
        'url': "http://" + lang + ".wiktionary.org/wiki/" + word
    });
}