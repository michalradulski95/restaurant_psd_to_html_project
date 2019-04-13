const menus = document.getElementsByClassName('hammburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        m.parentElement.classList.toggle('open');
    });
});

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');



function changebackground() {
    document.getElementById('button1').addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";
        document.getElementsByClassName('banner')[0].className += " active";


    })
    button2.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img2.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";
        document.getElementsByClassName('banner')[0].className += " active";
    })
    button3.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img3.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";
        document.getElementsByClassName('banner')[0].className += " active";
    })
}

changebackground();