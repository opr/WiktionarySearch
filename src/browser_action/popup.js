window.addEventListener('load', function(evt) {

	document.getElementById('search').addEventListener('submit', openURL);
	document.getElementById('word').focus();
	
});

function openURL()
{
	event.preventDefault();
	var word = encodeURIComponent( document.getElementById('word').value );
	chrome.tabs.create({'url': "http://en.wiktionary.org/wiki/"+word});
}