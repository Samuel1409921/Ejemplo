const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');


  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('mode', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('mode', 'light');
  }
});