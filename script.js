let images = document.querySelectorAll('.slide-single');
let slide = document.querySelector('#slide');
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');
let timerIdLeft;
let timerIdRight;
let circle = document.querySelectorAll('.circle');
let idLeft;
let idRight;

mouseover_bottom_circles();
mouseout_bottom_circles();

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

    idLeft = 1;
    idRight = 0;
    let img = document.createElement('img');
    img.src = image[stepLeft];
    img.setAttribute('class', 'slide-single');
    img.style.left = -515 + 'px';
    slide.append(img);

}


function left() {

    leftArrow.onclick = null;

    black_circles();

    clearTimeout(timerIdLeft);
    clearTimeout(timerIdRight);

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

    timerIdLeft = setTimeout(function run() {
        left();
    }, 5000);

}

drawLeft();
setTimeout(function () { shiftLeftAdd(); });

timerIdLeft = setTimeout(function run() {
    left();
}, 5000);


function shiftLeftAdd() {

    let img = document.querySelector('.slide-single');
    active_circle_left(stepLeft);
    img.style.left = 0 + 'px';

}

function shiftLeftDel() {

    let img = document.querySelector('.slide-single');
    img.style.left = 515 + 'px';
    setTimeout(function () { img.remove(); }, 600);

}


// Add click event to right arrow, that shifts image to the right

let stepRight;

rightArrow.onclick = right;

function drawRight() {

    idLeft = 0;
    idRight = 1;
    let img = document.createElement('img');
    img.src = image[stepRight];
    img.setAttribute('class', 'slide-single');
    img.style.left = 515 + 'px';
    slide.append(img);

    if (stepRight < 1) {

        stepRight = 4;

    } else {

        stepRight--;

    }

}

function right() {

    rightArrow.onclick = null;

    black_circles();

    clearTimeout(timerIdLeft);
    clearTimeout(timerIdRight);

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

    timerIdRight = setTimeout(function run() {

        right();

    }, 5000);

}

function shiftRightAdd() {

    img = document.querySelector('.slide-single');
    active_circle_right(stepRight);
    img.style.left = 0 + 'px';

}

function shiftRightDel() {

    img = document.querySelector('.slide-single');
    img.style.left = -515 + 'px';
    setTimeout(function () { img.remove(); }, 600);

}


// Show arrows and bottom cicles (mouseover slide)

let arrow = document.querySelectorAll('.arrow');
let bottom_circles = document.querySelector('.bottom_circles');


slide.addEventListener('mouseenter', mouseon);

function mouseon() {

    arrow[0].style.opacity = 1;

    arrow[1].style.opacity = 1;

    bottom_circles.style.opacity = 1;

}


// Hide arrows and bottom cicles (mouseover slide)

slide.addEventListener('mouseleave', mouseoff);

function mouseoff() {

    arrow[0].style.opacity = 0;

    arrow[1].style.opacity = 0;

    bottom_circles.style.opacity = 0;

}

// White background of circles, when the corresponding picture appears

function active_circle_left(a) {

    for (let i = 0; i < circle.length; i++) {

        if (i == a) {

            circle[i].style.backgroundColor = 'white';
            circle[i].onmouseover = null;
            circle[i].onmouseout = null;

        }

    }

}

function active_circle_right(a) {

    a++

    if (a == 5) {

        circle[0].style.backgroundColor = 'white';
        circle[0].onmouseover = null;
        circle[0].onmouseout = null;


    } else {

        for (let i = 0; i < circle.length; i++) {

            if (i == a) {

                circle[i].style.backgroundColor = 'white';
                circle[i].onmouseover = null;
                circle[i].onmouseout = null;

            }

        }

    }

}

function black_circles() {

    for (let i = 0; i < circle.length; i++) {

        circle[i].style.backgroundColor = 'black';

        circle[i].onmouseover = () => {

            circle[i].style.backgroundColor = 'white';

        }

        circle[i].onmouseout = () => {

            circle[i].style.backgroundColor = 'black';

        }

    }

}

// Mouseover and mouseout at bottom circles functions (white or black background)

function mouseover_bottom_circles() {

    for (let i = 0; i < circle.length; i++) {

        circle[i].onmouseover = () => {

            circle[i].style.backgroundColor = 'white';

        }

    }

}

function mouseout_bottom_circles() {

    for (let i = 0; i < circle.length; i++) {

        circle[i].onmouseout = () => {

            circle[i].style.backgroundColor = 'black';

        }

    }

}

// Click event on bottom cicles

click_bottom_cicles();

function click_bottom_cicles() {

    for (let i = 0; i < circle.length; i++) {

        circle[i].onclick = () => {

            for (let k = 0; k < image.length; k++) {

                if (i == k) {

                    if (idLeft == 1) {

                        stepLeft = i;
                        clearTimeout(timerIdLeft);
                        black_circles();
                        shiftLeftDel();
                        drawLeft();
                        setTimeout(function () { shiftLeftAdd(); }, 600);
                        timerIdLeft = setTimeout(function run() {
                            left();
                        }, 5000);

                    } else {

                        stepRight = i;
                        clearTimeout(timerIdRight);
                        black_circles();
                        shiftRightDel();
                        drawRight();
                        setTimeout(function () { shiftRightAdd(); }, 600);
                        timerIdRight = setTimeout(function run() {
                            right();
                        }, 5000);

                    }


                }

            }

        }

    }

}

















