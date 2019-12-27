let images = document.querySelectorAll('.slide-single');
let slide = document.querySelector('#slide');
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');

let image = [];

for (let i = 0; i < images.length; i++) {

    image[i] = images[i].src;
    images[i].remove();

}

console.log(image);


// Add click event to left arrow, that shifts image to the left

leftArrow.onclick = left;

let stepLeft = 0;

function drawLeft() {

    let img = document.createElement('img');
    img.src = image[stepLeft];
    img.setAttribute('class', 'slide-single');
    img.style.left = 515 + 'px';
    slide.append(img);

}


function left() {

    leftArrow.onclick = null;

    let images2 = document.querySelector('.slide-single');

    for (let i = 0; i < image.length; i++) {

        if (images2.src == image[i]) {

            if (i == 4) {

                stepLeft = 0;

            } else {

                stepLeft = i + 1;

            }

        }

    }

    shiftLeftDel();
    drawLeft();
    setTimeout(function () { shiftLeftAdd(); }, 600);
    leftArrow.onclick = left;

}



drawLeft();
shiftLeftAdd();

function shiftLeftAdd() {

    let img = document.querySelector('.slide-single');

    for (let i = 515; i >= 0; i--) {

        setTimeout(function () {

            img.style.left = i + 'px';

        }, 1);

    }

}

function shiftLeftDel() {

    let img = document.querySelector('.slide-single');

    for (let i = 0; i > -515; i--) {

        setTimeout(function () {

            img.style.left = i + 'px';

        }, 1);

    }

    setTimeout(function () {

        img.remove();

    }, 600);

}


// Add click event to right arrow, that shifts image to the right

let stepRight;

rightArrow.onclick = right;

function drawRight() {

    let img = document.createElement('img');
    img.src = image[stepRight];
    img.setAttribute('class', 'slide-single');
    img.style.left = -515 + 'px';
    slide.append(img);

    if (stepRight < 1) {

        stepRight = 4;

    } else {

        stepRight--;

    }

}

function right() {

    rightArrow.onclick = null;

    let imagesRight2 = document.querySelector('.slide-single');

    for (let i = 0; i < images.length; i++) {

        if (imagesRight2.src == image[i]) {

            if (i == 0) {

                stepRight = 4;

            } else {

                stepRight = i - 1;

            }

        }

    }

    shiftRightDel();

    drawRight();

    setTimeout(function () { shiftRightAdd(); }, 600);

    rightArrow.onclick = right;

}

function shiftRightAdd() {

    img = document.querySelector('.slide-single');

    for (let i = -515; i <= 0; i++) {

        setTimeout(function () {

            img.style.left = i + 'px';

        }, 1);

    }

}

function shiftRightDel() {

    img = document.querySelector('.slide-single');

    for (let i = 0; i < 515; i++) {

        setTimeout(function () {

            img.style.left = i + 'px';

        }, 1);

    }

    setTimeout(function () {

        img.remove();

    }, 600);

}


// Show arrows and bottom cicles (mouseover slide)

let arrow = document.querySelectorAll('.arrow');
let bottom_circles = document.querySelector('.bottom_circles');


let opacityValue = 0;

slide.addEventListener('mouseenter', mouseon);

function mouseon() {

    arrow[0].hidden = false;
    opacityOn(arrow[0]);

    arrow[1].hidden = false;
    opacityOn(arrow[1]);

    bottom_circles.hidden = false;
    opacityOn(bottom_circles);

    function opacityOn(a) {

        opacityValue += 0.08;
        a.style.opacity = opacityValue;

        if (opacityValue > 1) { return; }

        setTimeout(function () {

            opacityOn(a);

        }, 50);

    }

}


// Hide arrows and bottom cicles (mouseover slide)

slide.addEventListener('mouseleave', mouseoff);

function mouseoff() {

    opacityOff(arrow[0]);

    opacityOff(arrow[1]);

    opacityOff(bottom_circles);

    function opacityOff(a) {

        opacityValue -= 0.08;
        a.style.opacity = opacityValue;

        if (opacityValue < 0) { return; }

        setTimeout(function () {

            opacityOff(a);

        }, 50);

    }

}









