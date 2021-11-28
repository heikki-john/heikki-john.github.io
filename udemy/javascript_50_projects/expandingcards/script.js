const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        revomeActiveClasses()
        panel.classList.add('active')
    })
})

function revomeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}