function headerAnimatedto() {
  window.addEventListener('scroll', function () {
    const sectionhowitworks = document.querySelector('#how_it_works');
    const header = document.querySelector('.page-header');
    const sectionPosition = sectionhowitworks.getBoundingClientRect().top;
    if (sectionPosition < 0 && !header.classList.contains('.header-sticky')) {
      header.classList.add('.header-sticky');
    }
    if (sectionPosition > 0 && header.classList.contains('.header-sticky')) {
      header.classList.remove('.header-sticky');
    }
  });
}
headerAnimatedto();