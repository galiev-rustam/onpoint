let input = document.querySelector('.input');
let image = document.querySelectorAll('.image');
let range = document.querySelector('.input');


function DisplayNone() {
  for (let i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
  }
}

function iOnChange() {
  // 0 - 25
  if (range.value >= 0 && range.value <= 25) {
    range.value = 0;
    DisplayNone();
    image[0].style.display = 'flex';
    console.log(image[0]);

  }
  // 25 - 50
  if (range.value > 25 && range.value <= 50) {
    range.value = 50;
    DisplayNone();
    image[1].style.display = 'flex';
  }

  //50 - 75

  if (range.value > 50 && range.value <= 75) {
    range.value = 50;
    DisplayNone();
    image[1].style.display = 'flex';
  }

  //75 - 100

  if (range.value > 75 && range.value <= 100) {
    range.value = 100;
    DisplayNone();
    image[2].style.display = 'flex';
  }
}

DisplayNone();
image[0].style.display = 'flex';

range.onchange = iOnChange;








