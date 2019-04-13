/*Hamburger menu code*/
const menus = document.getElementsByClassName('hammburger-menu');

[].forEach.call(menus, function(m) {
    m.addEventListener('click', function() {
        m.parentElement.classList.toggle('open');
    });
});

/*Banner carousel code*/
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

/*Changing background*/
function changebackground() {
    button1.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";

    })
    button2.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img2.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";

    })
    button3.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.background = "url('images/banner-img3.png')";
        document.getElementsByClassName('banner')[0].style.transition = "0.5s ease";

    })
}
changebackground();

/*Setting active class for buttons*/
let banner = document.getElementById('carousel');
let btns = banner.getElementsByClassName('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active');
        this.querySelector('div').classList.add('active');
    })
};

/*Client section content change*/

const arrow1 = document.getElementById('left');
const arrow2 = document.getElementById('right');

function changecontent() {
    arrow1.addEventListener('click', function() {
        document.getElementById('client1').style.display = "inline";
        document.getElementById('client2').style.display = "none";
    })
    arrow2.addEventListener('click', function() {
        document.getElementById('client2').style.display = "inline";
        document.getElementById('client1').style.display = "none";
    })
}

changecontent();