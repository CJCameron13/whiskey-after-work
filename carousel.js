const initSlider = () => {
    const slideButtons = document.querySelectorAll('.slide-button')
    const imageList = document.querySelector('#post-list')
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev-slide" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction //clientWidth returns the viewable width of an element in pixels
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'})
            console.log(scrollAmount)
            console.log(direction)
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block'
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block'
    }

    imageList.addEventListener('scroll', () => {
        handleSlideButtons();
    })
}

window.addEventListener('load', initSlider)

// const nextArrow = document.querySelector('#next-arrow-container')
// const allPosts = document.querySelectorAll('.post-container')

// const madeFromScratch = document.querySelector('#made-from-scratch')
// const theFirstTasting = document.querySelector('#the-first-tasting')

// let blogPosts = [madeFromScratch, theFirstTasting]

// nextArrow.addEventListener('click', () => {
//     let i = 0
//     i++

//     allPosts.forEach((post) => {
//         post.classList.remove('active')
//         post.classList.add('hidden')
//     })
    
//     blogPosts[i].classList.add('active')
//     blogPosts[i].classList.remove('hidden')
//     blogPosts[i].classList.remove('next-up')

//     console.log(blogPosts[i])
// })

