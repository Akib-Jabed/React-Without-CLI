const panels = document.querySelectorAll('.panel')

const removeClassList = () => {
    panels.forEach(panel => {
       panel.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassList()
        panel.classList.add('active')
    })
})