document.getElementById('registration-form').addEventListener('submit', function(event) {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let age = document.getElementById('age').value;
    let studentGroup = document.getElementById('student-group').value;

    let hasErrors = false;
    if (username === '') {
        document.getElementById('username-error').textContent = "Поле імені не може бути порожнім[cite: 901, 922].";
        hasErrors = true;
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = "Поле email є обов'язковим.";
        hasErrors = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = "Некоректний формат email[cite: 932, 944].";
        hasErrors = true;
    }
    if (password.length < 6) {
        document.getElementById('password-error').textContent = "Пароль має містити мінімум 6 символів[cite: 933].";
        hasErrors = true;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = "Паролі не збігаються.";
        hasErrors = true;
    }
    if (age === '') {
        document.getElementById('age-error').textContent = "Будь ласка, вкажіть ваш вік.";
        hasErrors = true;
    } else if (parseInt(age) < 10) {
        document.getElementById('age-error').textContent = "Перевірка: вік має бути 10+ років[cite: 935].";
        hasErrors = true;
    }
    if (studentGroup === '') {
        document.getElementById('group-error').textContent = "Помилка: група не вибрана[cite: 940].";
        hasErrors = true;
    }
    if (!hasErrors) {
        alert("Реєстрація успішна! [cite: 947]");
        console.log("Успішно зареєстровано користувача:", { username, email, age, studentGroup });
        document.getElementById('registration-form').reset();
    }
});