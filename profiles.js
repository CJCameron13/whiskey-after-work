const typeButtonContainer = document.querySelector('.type-selector')
const typeButton = document.querySelectorAll('.type')
const bourbonPage = document.querySelector('#bourbon')
const scotchPage = document.querySelector('#scotch')
const ryePage = document.querySelector('#rye')

typeButtonContainer.addEventListener('click', (event) => {
    const selected = event.target.closest('.type'); // Find the closest ancestor with the class 'type'
  
    if (selected) { 
      console.log(selected);
      typeButton.forEach((type) => {
        type.classList.remove('active')
      })
      selected.classList.add('active'); 
    }

    if (selected.classList.contains('bourbon')) {
        console.log('bourbon')
        scotchPage.classList.add('hidden')
        ryePage.classList.add('hidden')
        bourbonPage.classList.remove('hidden')
    } else if (selected.classList.contains('scotch')) {
        console.log('scotch')
        bourbonPage.classList.add('hidden')
        ryePage.classList.add('hidden')
        scotchPage.classList.remove('hidden')
    } else if (selected.classList.contains('rye')) {
        console.log('rye')
        bourbonPage.classList.add('hidden')
        scotchPage.classList.add('hidden')
        ryePage.classList.remove('hidden')
    }
  });

const whiskeyCards = document.querySelectorAll('.card')
const listContainer = document.querySelectorAll('.list-container')
const highlightImages = document.querySelectorAll('.highlight-image')

const angelsEnvyStraightHighlight = document.querySelector('#angels-envy-straight-highlight')
const fourRosesSmallBatch = document.querySelector('#four-roses-small-batch-highlight')

listContainer.forEach((container) => {
  container.addEventListener('click', (event) => {
    const chosen = event.target.closest('.card')
    if (chosen.classList.contains('angels-envy-straight')) {
      highlightImages.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      console.log(angelsEnvyStraightHighlight)
      return angelsEnvyStraightHighlight.classList.remove('hidden')
    } else if (chosen.classList.contains('four-roses-small-batch')) {
      highlightImages.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      fourRosesSmallBatch.classList.remove('hidden')
    }
  })
})
