const ball = document.querySelector('.ball');

for (let i = 0; i <= 10; i++) {
    const div = document.createElement('div');
    div.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    div.style.transform = `rotateY(${i*36}deg)`;
    div.classList.add('ring');
    ball.appendChild(div);
}

const rings = [...document.querySelectorAll('.ring')];

setInterval(() => {
    for (ring of rings) {
        ring.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
}, 500);