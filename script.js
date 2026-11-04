// Ensure jQuery acts safely once the DOM content structure reports ready
$(document).ready(function() {
    
    // Check local storage for persistent preference mapping across pages
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('#theme-toggle').text('☀️ Light Mode');
    }

    // Toggle functional configuration via jQuery bind actions
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        // Evaluate dynamic changes to retain layout compliance state
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            $(this).text('☀️ Light Mode');
        } else {
            localStorage.setItem('theme', 'light');
            $(this).text('🌙 Toggle Theme');
        }
    });

    // Clean visual feedback effect over interactive blocks using jQuery
    $('.interactive-card').hover(
        function() {
            $(this).css('border-color', '#0d6efd');
        }, 
        function() {
            $(this).css('border-color', '');
        }
    );
});
