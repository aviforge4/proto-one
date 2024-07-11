
$(document).ready(function() {
    // Toggle sidebar on menu button click
    $('#menuButton').click(function() {
        $('#sidebar').toggleClass('open');
    });

    // Close sidebar when clicking outside of it
    $(document).click(function(e) {
        if (!$(e.target).closest('#sidebar, #menuButton').length) {
            $('#sidebar').removeClass('open');
        }
    });

    // Close sidebar on close icon click
    $('#closeSidebar').click(function() {
        $('#sidebar').removeClass('open');
    });
});