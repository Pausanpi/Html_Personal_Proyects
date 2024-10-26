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


setInterval(updateCalendar, 1000);
setInterval(contNavidad, 1000);

updateCalendar();
contNavidad();
PlayAudio();