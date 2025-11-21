
const btn = document.getElementById('toggle-theme');
const body = document.body;


function setTheme(night) {
    if (night) {
        body.classList.remove('day-mode');
        btn.innerText = '🌙';
        btn.setAttribute('aria-label', 'Cambiar a modo día');
    } else {
        body.classList.add('day-mode');
        btn.innerText = '☀️';
        btn.setAttribute('aria-label', 'Cambiar a modo noche');
    }
}


let isNight = true;

btn.addEventListener('click', function() {
    isNight = !isNight;
    setTheme(isNight);
});

setTheme(isNight);
