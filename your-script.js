(function() {
    'use strict';

    // Function to highlight and click the "up" button
    function highlightAndClickUpButton() {
        // Find all anchor tags
        const elements = document.querySelectorAll('a');

        // Loop through all anchor tags to find the one with text content "up" and the specific onclick pattern
        elements.forEach(function(element) {
            if (element.textContent.trim() === 'up' && element.getAttribute('onclick') && element.getAttribute('onclick').includes("post_vote")) {
                // Highlight the button by changing its background color
                element.style.backgroundColor = 'yellow';

                // Log a message to the console for debugging
                console.log('Found the "up" button:', element);

                // Click the button after a short delay
                setTimeout(function() {
                    element.click();
                }, 1000); // 1 second delay for visual feedback
            }
        });
    }

    // Wait until the page is fully loaded
    window.addEventListener('load', function() {
        highlightAndClickUpButton();
    }, false);
})();
