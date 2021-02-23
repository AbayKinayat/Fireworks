$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});

$(document).ready(function(){
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1009,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 703,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '-200px',
  });
});

const showCatalogBtn = document.querySelector('#showCatalog');
const closeCatalogBtn = document.querySelector('#closeCatalog');
const catalogSidebar = document.querySelector('.header__sidebar');
const headerNavBurger = document.querySelector('.header__catalog-burger');

showCatalogBtn.addEventListener('click', showCatalog)
closeCatalogBtn.addEventListener('click', closeCatalog)

function showCatalog() {
  catalogSidebar.style.minWidth = '295px';
  headerNavBurger.style.width = '0px';
  navSolid.classList.remove('header__nav-solid_active');
}

function closeCatalog() {
  catalogSidebar.style.minWidth = '0px';
  headerNavBurger.style.width = '20%';
}
const showNavSolidBtn = document.querySelector('.header__nav-burger');
const navSolid = document.querySelector('.header__nav-solid');
const navOverlay = document.querySelector('.nav-overlay');

showNavSolidBtn.addEventListener('click', showNavSolid);
navOverlay.addEventListener('click', showNavSolid);

function showNavSolid() {

  if (navSolid.classList.contains('header__nav-solid_active')) {
    navOverlay.style.display = 'none';
  } else {
    navOverlay.style.display = 'block';
  }
  
  navSolid.classList.toggle('header__nav-solid_active');
  
}




