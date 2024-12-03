//show alert when clicking " order now "
fuction showalert() {
    alert('thank you for your interest! Visit our menu to place an order.');
}
//form submission handling
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventdefault();
    alert('Thank you for your message! we will get back to you soon');
});