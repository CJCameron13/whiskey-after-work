const nextArrow = document.querySelector('#next-arrow-container')

const madeFromScratch = document.querySelector('#made-from-scratch')
const theFirstTasting = document.querySelector('#theFirstTasting')

let blogPosts = [madeFromScratch, theFirstTasting]

nextArrow.addEventListener('click', () => {
    console.log(blogPosts[0])
})

