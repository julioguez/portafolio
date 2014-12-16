// menu functionality
$(function() {
    var btnMenu = $('#Mobile-icon');
    $(btnMenu).on('click', showMenu);

    function showMenu(event) {
        event.preventDefault();
        $('#Menu').slideToggle();
    }

});
