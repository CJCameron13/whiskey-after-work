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
