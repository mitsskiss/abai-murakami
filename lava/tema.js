// Переключатель темы Abai / Murakami
const btn = document.getElementById('themeToggle');
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('abai-theme');
    const isAbai = document.body.classList.contains('abai-theme');
    btn.textContent = isAbai ? 'Murakami Mode' : 'Abai Mode';
  });
}
