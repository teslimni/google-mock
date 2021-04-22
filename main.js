const search = document.querySelector('.search-box');
const mobileSearch = document.querySelector('.mobile-search');
const form = document.querySelector('.formOne');
const inputFull = document.querySelector('.hide');
const expand = document.querySelector('.droplist');
const offers = document.querySelector('.search-tabs');
const langs = document.querySelector('.search-langs');
const footerOffer = document.querySelector('.scroller');
const gOffer = document.querySelector('.g-Offer')

// search.addEventListener('click', e => {
//     form.classList.add('open');
//     search.classList.add('rounded-b-none', 'hover:shadow-none');
//     mobileSearch.classList.add('hover:shadow-none');
//     expand.classList.add('expanded');
//     expand.classList.remove('hide');
//     offers.classList.add('hide');
//     langs.classList.add('hide');
// }) 


// Results Page Accordion
const accordions = Array.from(document.querySelectorAll('.accordion'))
accordions.forEach(accordion => {
    // Find the accordion header
    const accordionHeader = accordion.querySelector('.accordion__header')
  
    // Add event listener to the accordion header
    accordionHeader.addEventListener('click', event => {
  
      // Toggle the is-open class
      accordion.classList.toggle('is-open')
    })
})

footerOffer.addEventListener('scroll', e => {
    gOffer.classList.toggle('scrolled')
})
