console.log("hello");

const navicon = document.getElementById('menu-bar-nav');

navicon.addEventListener('click',function() {
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.remove('closed-menu');
})

const wrongicon = document.getElementById('wrong-mark');
wrongicon.addEventListener('click',function(){
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.add('closed-menu');
});