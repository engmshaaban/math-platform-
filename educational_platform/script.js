$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            alert('تم إرسال الرسالة بنجاح!');
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    });
});
