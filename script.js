document.getElementById('year').textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
let hideTimer;

document.querySelectorAll('[data-soon]').forEach((el) => {
  el.addEventListener('click', () => {
    toast.classList.add('show');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  });
});
