const openNavBtn = document.querySelector('.open-nav')
const nav = document.querySelector('nav')


window.addEventListener('click', function(e) {
    if(e.target.classList.contains('fa-bars')) {
        nav.classList.add('show-nav')
    } else {
        nav.classList.remove('show-nav')
    }
})