chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

	 $prButton = $('.recently-pushed-branch-actions a');
   if ($prButton.length > 0) {
    console.log($prButton);
    $prButton.click();
   } else {
    console.log('No button');
   }

   // TEST  

	}
	}, 10);
});
