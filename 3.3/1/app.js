const nav = document.querySelector('#main');
const menuIcon = document.querySelector('#menuIcon');
const bottomOfNav = nav.offsetTop + nav.offsetHeight;


function changeNav(){
    if(window.scrollY >= bottomOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.style.display = "hidden";
        menuIcon.style.display = 'block';

    } else {
        document.body.style.paddingTop = 0;
        nav.style.display = "flex";
        menuIcon.style.display = 'none';
        nav.style.position = null;
        document.body.classList.remove('show-nav');

    }
};

// Virkar ekki ad loka menu
function openlinks(){
    if(nav.style.position = "none"){
        nav.style.position = 'fixed';
        document.body.classList.add('show-nav');
        showNavClass = document.querySelector('.show-nav');
    }  else if (nav.style.position = 'fixed'){
        nav.style.position = null;
        document.body.classList.remove('show-nav');
        console.log('test');
    }

};


window.addEventListener('scroll', changeNav);
menuIcon.addEventListener('click', openlinks);



