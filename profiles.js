const typeButton = document.querySelectorAll('.type')

typeButton.forEach((type) => {
    type.addEventListener('click', (event) => {
        let selected = event.target
        console.log(selected)
        selected.classList.add('active')
    })
})
