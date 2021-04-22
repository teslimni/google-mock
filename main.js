const search = document.querySelector('.search-box');
const form = document.querySelector('.formOne');
const inputFull = document.querySelector('.hide');
const expand = document.querySelector('.droplist');
const offers = document.querySelector('.search-tabs');
const langs = document.querySelector('.search-langs');

search.addEventListener('click', e => {
    // search.style.display = 'none';
    // inputFull.style.display = 'block';
    form.classList.add('open');
    search.classList.add('rounded-b-none', 'hover:shadow-none');
    expand.classList.add('expanded');
    expand.classList.remove('hide');
    offers.classList.add('hide');
    langs.classList.add('hide');
}) 