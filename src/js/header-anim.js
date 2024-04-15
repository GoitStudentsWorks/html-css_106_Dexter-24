function headerAnimatedto() {
  window.addEventListener('scroll', function () {
    const sectionhowitworks = document.querySelector('.how-it-works');
    const header = document.querySelector('.page-header');
    const sectionPosition = sectionhowitworks.getBoundingClientRect().top;
    if (sectionPosition < 0 && !header.classList.contains('.header-sticked')) {
      header.classList.add('.header-sticked');
    }
    if (sectionPosition > 0 && header.classList.contains('.header-sticked')) {
      header.classList.remove('.header-sticked');
    }
  });
}
headerAnimatedto();