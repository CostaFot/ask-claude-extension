const params = new URLSearchParams(window.location.search);
if (params.get("q")) {
  const trySend = setInterval(() => {
    const button = document.querySelector('button[aria-label="Send message"]');
    if (button && !button.disabled) {
      button.click();
      clearInterval(trySend);
    }
  }, 200);
  setTimeout(() => clearInterval(trySend), 5000);
}