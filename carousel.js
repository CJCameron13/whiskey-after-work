const initSlider = () => {
    const slideButtons = document.querySelectorAll('.slide-button')
    const imageList = document.querySelector('#post-list')
    const sliderScrollbar = document.querySelector('#slider-scrollbar')
    const scrollbarThumb = document.querySelector('#scrollbar-thumb')
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth

    //Handle scrollbar thumb drag
    scrollbarThumb.addEventListener('mousedown', (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft

        //Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX
            const newThumbPosition = thumbPosition + deltaX
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft

            scrollbarThumb.style.left = `${boundedPosition}px`
            imageList.scrollLeft = scrollPosition
        }

        //Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        //Add event listeners for drag interaction
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    })

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

    //Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    imageList.addEventListener('scroll', () => {
        handleSlideButtons();
        updateScrollThumbPosition()
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

