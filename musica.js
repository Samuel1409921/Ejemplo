<script>
  const playBtn = document.getElementById('playBtn');
  const audio = document.getElementById('miAudio');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸ Pausar';
    } else {
      audio.pause();
      playBtn.textContent = '▶ Reproducir';
    }
  });
</script>
