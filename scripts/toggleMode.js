const toggleMode = document.querySelectorAll('.moon')
const choiceText = document.querySelectorAll('#choice')

toggleMode.forEach((mode)=> {
    mode.addEventListener('click', function() {
        document.body.classList.toggle('dark')
        if(document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled')

            choiceText.forEach((text)=> {
                text.innerHTML = 'on'
            })
        } else {
            localStorage.setItem('darkMode', 'disabled')

            choiceText.forEach((text)=> {
                text.innerHTML = 'off'
            })
        }
    })
})

if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.toggle('dark')
}