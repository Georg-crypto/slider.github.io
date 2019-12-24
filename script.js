let images = document.querySelectorAll('.slide-single');
let slide = document.querySelector('#slide');
let leftArrow = document.querySelector('.left');

let image = [];

for (let i = 0; i < images.length; i++) {

    image[i] = images[i].src;
    images[i].remove();

}

let step = 0;
let offset = 0;

function draw() {

    let img = document.createElement('img');
    img.src = image[step];
    img.setAttribute('class', 'slide-single');
    img.style.left = offset * 515 + 'px';
    slide.append(img);

    if (step + 1 == image.length) {

        step = 0;

    } else {

        step++;

    }
    offset = 1;

}


// Add click event to left arrow, that shifts image to the left...

function left() {

    leftArrow.onclick = null;

    let images2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;

    for (let i = 0; i < images2.length; i++) {

        images2[i].style.left = offset2 * 515 - 515 + 'px';
        offset2++;

    }

    setTimeout(function () {

        images2[0].remove();
        draw();
        leftArrow.onclick = left;

    }, 1000);

}

draw(); draw();

leftArrow.onclick = left; // Add click event to left arrow, that shifts image to the left

let arrow = document.querySelectorAll('.arrow');
let bottom_circles = document.querySelector('.bottom_circles');


// Show arrows and bottom cicles (mouseover slide)

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










