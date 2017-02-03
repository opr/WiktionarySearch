document.getElementById("desc").innerHTML = chrome.i18n.getMessage("opts_desc");


var btn = document.getElementsByName('language');

function save() {
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].checked) {
            chrome.storage.sync.set({
                "language": btn[i].value
            });
            document.getElementById("url").innerHTML = '';
            document.getElementById('url').innerHTML = '<br>'.repeat(i) + 'http://*.wiktionary.org'.replace('*', btn[i].value);
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
        likesColor: true
    }, function(obj) {
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].value == obj.language) {
                btn[i].checked = true;

								document.getElementById('url').innerHTML = '<br>'.repeat(i) + 'http://*.wiktionary.org'.replace('*', obj.language);
            }
        }

    });
}

document.addEventListener('DOMContentLoaded', restore_options);
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',
        save);
}