<<<<<<< HEAD
let menus = document.getElementsByClassName('hammburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        m.parentElement.classList.toggle('open');
    });
=======
let menus = document.getElementsByClassName('hammburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        m.parentElement.classList.toggle('open');
    });
>>>>>>> 2b9ebc9a75701afc658dfb571dd78be30b532525
});