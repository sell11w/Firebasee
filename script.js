document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneInput = document.getElementById('phone').value;
    const messageElement = document.getElementById('message');
    
    // تحقق من طول الرقم (10 أرقام) فقط
    if (/^\d{10}$/.test(phoneInput)) {
        messageElement.textContent = 'تم التسجيل بنجاح';
        messageElement.classList.remove('hidden');
    } else {
        messageElement.textContent = 'رقم الهاتف غير صحيح. يرجى إدخال 10 أرقام.';
        messageElement.classList.remove('hidden');
    }
});