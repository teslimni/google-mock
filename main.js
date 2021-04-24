// Variables for the search box
const search = document.querySelector('.big-search-box');
const mobileSearch = document.querySelector('.mobile-search');
const formMobile = document.querySelector('.formMobile');
const inputFull = document.querySelector('.hide');
const expand = document.querySelector('.mobile-droplist');
// const offers = document.querySelector('.search-tabs');
const langs = document.querySelector('.search-langs');

// Variables for the results page
const close = document.querySelector('.close');
const footerOffer = document.querySelector('.scroller');
const gOffer = document.querySelector('.g-Offer')

mobileSearch.addEventListener('click', e => {
    formMobile.classList.toggle('open');
    mobileSearch.classList.toggle('rounded-b-none');
    mobileSearch.classList.add('hover:shadow-none');
    expand.classList.toggle('hide');
    // offers.classList.add('hide');
    // langs.classList.add('hide');
}) 

close.addEventListener('click', e => {
    expand.classList.add('hide')
})


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
