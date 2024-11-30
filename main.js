const navContainer = document.querySelectorAll('.nav-item-container')
const hoverLine = document.querySelectorAll('.hover-line')

navContainer.forEach((item) => {
    item.addEventListener('mouseover', () => {
        // Find the hover-line element within the current nav-item-container
        const hoverLine = item.querySelector('.hover-line'); 

        // Remove the 'hidden' class from the found hover-line
        hoverLine.classList.remove('off'); 
    });
});

navContainer.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        const hoverLine = item.querySelector('.hover-line'); 

        // Add the 'hidden' class from the found hover-line
        hoverLine.classList.add('off'); 
    });
});
