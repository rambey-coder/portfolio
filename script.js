const header = document.querySelector('.lists');
const hamburger = document.querySelector('.fa-solid');

hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
    if(hamburger.classList.contains('fa-bars')) {
        hamburger.classList.replace('fa-bars', 'fa-xmark')
    } else {
        hamburger.classList.replace('fa-xmark', 'fa-bars')
    }
})

// Scroll animation 
const animates = document.querySelectorAll('.animate')
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
   const triggerBottom =  window.innerHeight / 5 * 4;

   animates.forEach(param => {
       const paramTop = param.getBoundingClientRect().top

       if(paramTop < triggerBottom) {
           param.classList.add('display')
       } else {
           param.classList.remove('display')
       }
   })
}
