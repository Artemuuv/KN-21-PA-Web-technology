const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Світла тема';
}
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Світла тема';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Темна тема';
    }
});
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name === '' || email === '' || message === '') {
        alert("Помилка: Будь ласка, заповніть усі поля!");
        return;
    }
    console.log("--- Нове повідомлення з сайту ---");
    console.log("Ім'я:", name);
    console.log("Email:", email);
    console.log("Текст:", message);
    alert(`Дякую, ${name}! Ваше повідомлення успішно надіслано.`);
    contactForm.reset();
});