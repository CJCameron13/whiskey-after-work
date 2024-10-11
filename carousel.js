const nextArrow = document.querySelector('#next-arrow-container')
const allPosts = document.querySelectorAll('.post-container')

const madeFromScratch = document.querySelector('#made-from-scratch')
const theFirstTasting = document.querySelector('#the-first-tasting')

let blogPosts = [madeFromScratch, theFirstTasting]

nextArrow.addEventListener('click', () => {
    let i = 0
    i++

    allPosts.forEach((post) => {
        post.classList.remove('active')
        post.classList.add('hidden')
    })

    blogPosts[i].classList.add('active')
    blogPosts[i].classList.remove('hidden')
    blogPosts[i].classList.remove('next-up')

    console.log(blogPosts[i])
})

