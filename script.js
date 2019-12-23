let images = document.querySelectorAll('.slide-single');
let slide = document.querySelector('#slide');
console.log(images);
let image = [];

for (let i = 0; i < images.length; i++) {

    image[i] = images[i].src;
    images[i].remove();

}

console.log(image);

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

function left() {

    document.onclick = null;

    let images2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;

    for (let i = 0; i < images2.length; i++) {

        images2[i].style.left = offset2 * 515 - 515 + 'px';
        offset2++;

    }

    setTimeout(function () {

        images2[0].remove();
        draw();
        document.onclick = left;

    }, 1000);

}

draw(); draw();
document.onclick = left;

