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
const highlightImagesBourbon = document.querySelectorAll('.highlight-image.bourbon')

const angelsEnvyStraightHighlight = document.querySelector('#angels-envy-straight-highlight')
const fourRosesSmallBatch = document.querySelector('#four-roses-small-batch-highlight')
const elijahCraigSmallBatch = document.querySelector('#elijah-craig-small-batch-highlight')
const hunterAndScottBourbon = document.querySelector('#hunter-and-scott-bourbon-highlight')

listContainer.forEach((container) => {
  container.addEventListener('click', (event) => {
    const chosen = event.target.closest('.card')
    if (chosen.classList.contains('angels-envy-straight')) {
      highlightImagesBourbon.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      console.log(angelsEnvyStraightHighlight)
      angelsEnvyStraightHighlight.classList.remove('hidden')
    } else if (chosen.classList.contains('four-roses-small-batch')) {
      highlightImagesBourbon.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      fourRosesSmallBatch.classList.remove('hidden')
    } else if (chosen.classList.contains('elijah-craig-small-batch')) {
      highlightImagesBourbon.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      elijahCraigSmallBatch.classList.remove('hidden')
    } else if (chosen.classList.contains('hunter-and-scott-bourbon')) {
      highlightImagesBourbon.forEach((highlight) => {
        highlight.classList.add('hidden')
      });
      hunterAndScottBourbon.classList.remove('hidden')
    }
  })
})
