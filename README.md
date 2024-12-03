<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content=""width=device-width, initial-scale="1.0">
        <title>pasta delights</title></title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <div class="logo">Pasta Delights</div>
            <nav>
                <ul>
                    <li><a href="#home">Home></a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="menu">Our Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

        <section id="home" class="hero">
            <h1>Welcome to Pasta Delights</h1>
            <p>Fresh, Handmade Pasta Delivered to Your Doorstep</p>
            <button onclick="showAlert()">Order Now</button>
        </section>
        <section id="about">
            <h2>Our Menu</h2>
            <div class="menu-item">
                <h3>Spaghetti Carbonara</h3>
                <p>Classic creamy pasta with garlic and chili.</p>
            </div>
            <div class="menu-item">
                <h3>Penne Arrabbiata</h3>
                <p>Rich and creamy Alfredo sauce</p>
            </div>
        </section>
        <section id="contact">
            <h2>contat Us</h2>
            <Form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input Type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">send</button>
            </Form>
        </section>
        <footer>
            <p>&copy;2024 Pasta Delights. All rights reserved.</p>
        </footer>
        <script src="script.js"></script>
    </body>
</html>
//show alert when clicking " order now "
fuction showalert() {
    alert('thank you for your interest! Visit our menu to place an order.');
}
//form submission handling
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventdefault();
    alert('Thank you for your message! we will get back to you soon');
});
/*General Styles*/
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/*header*/
header{
    background-color: #f4a261;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 10px 20px;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header.logo {
    font-size: 24px;
    font-weight: bold; 
}
header.logo {
    font-size: 24px;
    font-weight: bold;
}
header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
header nav ul li {
    text-decoration: none;
    color: white;
    font-size: 18ps;
}

/*Hero Section*/
.hero{
    background-image: url('https://source.unsplash.com/1600x900/?pasta');
    background-size: cover;
    color: white;
    text-align: center;
    padding: 100px 20px;
}
.hero button {
    background-color: #e76f51;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
}
.hero button{
    background: #e76f51;
    color: white;
    border:none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
}
.hero button: hover{
    background-color: #d62828;
}
/*Sections*/
section{
    padding: 50px 20px;
}
#about, #menu, #contact {
    background-color: #f8edeb;
}
h2{
    text-align: center; 
    color: #2a9d8f;
}
.menu-item {
    text-align: center;
    margin: 20px 0;
}
/* Form */
from{
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
form label{
    margin-top: 10px;
    font-weight: bold;
}
form input, form textarea, form button{
    margin-top: 5px;
    padding: 10px;
    font-size: 16px;
}
form button{
    background-color: #2a9d8f;
   color: white;
   border: none;
   margin-top: 20px;
   border-radius: 5px;
}
form button: hover {
    background-color: #1b7f67;
}
/* Footer */
footer {
    text-align: center;
    padding: 10px;
    background-color: #264653;
    color: white;
}
