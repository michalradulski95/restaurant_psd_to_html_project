let menus = document.getElementsByClassName('hammburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        m.parentElement.classList.toggle('open');
    });
});