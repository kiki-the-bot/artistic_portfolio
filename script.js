const button = document.getElementById('mail');

if (button) {
  button.onclick = () => umami.track('mail click');
}
