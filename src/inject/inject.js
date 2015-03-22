chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

      $(document).on('keydown', null, 'p', function() {
        console.log("You pressed p");
        $prButton = $('.recently-pushed-branch-actions a')[0];
        if ($prButton) {
          $prButton.click();
        }
      });

      $(document).on('keydown', null, 'b', function() {
        console.log("You pressed b");
        $baseBranch = $('.range-editor span[aria-label="Choose a base branch"]')[0];
        if ($baseBranch) {
          $baseBranch.click();
          $('input[id^="commitish-filter"]').val('develop');
        }
      })

  	}
	}, 10);
});
