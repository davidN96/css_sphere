const ball = document.querySelector('.ball');
const regQuantity = document.querySelector('#quantity');
const color = document.querySelector('#color');
quantity = 5;

function render(quan) {
    for (let i = 0; i <= quan; i++) {
        const div = document.createElement('div');
        div.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        div.style.transform = `rotateY(${i*(360/quan)}deg)`;
        div.classList.add('ring');
        ball.appendChild(div);
    }
}

function removeBall() {
    ball.innerHTML = '';
}

const rings = [...document.querySelectorAll('.ring')];

setInterval(() => {
    for (ring of rings) {
        ring.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    }
}, 500);

regQuantity.addEventListener('input', function () {
    quantity = this.value;
    removeBall();
    render(quantity);
});

color.addEventListener('input', function () {
    document.body.style.backgroundColor = `rgb(${this.value},${this.value},${this.value})`;
});

render(quantity);