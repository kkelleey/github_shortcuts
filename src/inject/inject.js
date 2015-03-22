chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

	 $prButton = $('.recently-pushed-branch-actions a');
   if ($prButton.length > 0) {
    $prButton.click();
   }

   // TEST  

	}
	}, 10);
});
