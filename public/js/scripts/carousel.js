const slider = document.querySelector('.carousel-slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.carousel-controls ul');

let sectionIndex = 0;

rightArrow.addEventListener('click', function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 0;
  document.querySelector('.carousel-controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
});

leftArrow.addEventListener('click', function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 3;
  document.querySelector('.carousel-controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
});

document.querySelectorAll('.carousel-controls li').forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    sectionIndex = index;
    document.querySelector('.carousel-controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
  });
});
