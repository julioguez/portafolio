// menu functionality
$(function() {
    var btnMenu = $('#Mobile-icon');
    $(btnMenu).on('click', showMenu);

    // hide & show menu when click on the icon menu
    function showMenu(event) {
        event.preventDefault();
        $('#Menu').slideToggle();
    }

    // hide the menu when click on links
    var menuLink = $('.Menu-link');
    $(menuLink).on('click', hideMenu);

    function hideMenu(event) {
        $('#Menu').hide(500);
    }

});
