document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.innerText = 'toggle fullscreen';

  button.onclick = goFullscreen;

  document.body.appendChild(button);
});

function goFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
