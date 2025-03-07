function updateCalendar() {
	const dateElement = document.getElementById("date");
	const timeElement = document.getElementById("time");

	const now = new Date();
	const options = {year: 'numeric', month: 'long', day: 'numeric'};
	const date = now.toLocaleDateString('es-ES', options);
	const time = now.toLocaleTimeString('es-ES');

	dateElement.textContent = date;
	timeElement.textContent = time;

	
}

function contNavidad() {
    const targetDate = new Date(new Date().getFullYear(), 11, 24, 0, 0, 0); // 24 de diciembre a medianoche
    const now = new Date();

    // Calcula la diferencia en milisegundos
    const difference = targetDate - now;

    if (difference > 0) {
        // Calcula días, horas, minutos y segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Actualiza el DOM
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        // Cuando la cuenta regresiva llega a cero
        document.querySelector('.countdown').innerHTML = "<h2>¡Feliz Navidad!</h2>";
    }
}

function PlayAudio() {
    document.getElementById("miAudio").play();
}

document.getElementById("navigateButton").addEventListener("click", function() {
    window.location.href = "advent.html";
});

/* PARTICULAS */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let particleCount = calculateParticleCount();

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() / 5 + 0.1;
        this.opacity = 1;
        this.fadeDelay = Math.random() * 600 + 100;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
    }

    update() {
        this.y += this.speed;
        if (this.y < 0) {
            this.reset();
        }

        if (!this.fadingOut && Date.now() > this.fadeStart) {
            this.fadingOut = true;
        }
        
        if (this.fadingOut) {
            this.opacity -= 0.008;
            if (this.opacity <= 0) {
                this.reset();
            }
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // Fijamos los valores de RGB en 255
        ctx.fillRect(this.x, this.y, 1, Math.random() * 2 + 1);
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

function calculateParticleCount() {
    return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particleCount = calculateParticleCount();
    initParticles();
}

window.addEventListener('resize', onResize);

initParticles();
animate();

setInterval(updateCalendar, 1000);
setInterval(contNavidad, 1000);

updateCalendar();
contNavidad();
PlayAudio();