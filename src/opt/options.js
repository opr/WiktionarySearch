// document.title = chrome.i18n.getMessage("opts_title");
// document.getElementById("title").innerHTML = chrome.i18n.getMessage("opts_title");
document.getElementById("desc").innerHTML = chrome.i18n.getMessage("opts_desc");


var btn = document.getElementsByName('language');
var wikiurl = 'https://*.wiktionary.org';

function save() {
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].checked) {
            chrome.storage.sync.set({
                "language": btn[i].value
            });
            var a = document.querySelector("#url a");
            a.innerHTML = '';
            a.innerHTML = wikiurl.replace('*', btn[i].value);
            a.href = wikiurl.replace('*', btn[i].value);
            break;
        }
    }
    var status = document.getElementById('status');
    status.textContent = chrome.i18n.getMessage("saved");
    setTimeout(function() {
        status.textContent = '';
    }, 5000);
}

function restore_options() {
    chrome.storage.sync.get({
        language: chrome.i18n.getMessage("iso"),
    }, function(obj) {
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].value == obj.language) {
                btn[i].checked = true;
                document.querySelector("[for='*']".replace('*', btn[i].value)).scrollIntoView();
                window.scrollBy(0, -200);
                var a = document.querySelector("#url a");
                a.innerHTML = wikiurl.replace('*', obj.language);
                a.href = wikiurl.replace('*', obj.language);
            }
        }

    });
}

document.addEventListener('DOMContentLoaded', restore_options);
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',
        save);
}