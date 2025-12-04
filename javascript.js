const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-right a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message").value.trim();


    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");


    [nameError, emailError, passwordError, messageError, successMessage].forEach(el => el.style.display = "none");

    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passCheck = /^.{6,}$/; // at least 6 characters


    if (name === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        nameError.style.display = "block";
        isValid = false;
    }


    if (email === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailCheck.test(email)) {
        emailError.textContent = "Please enter a valid email";
        emailError.style.display = "block";
        isValid = false;
    }


    if (password === "") {
        passwordError.textContent = "Password is required";
        passwordError.style.display = "block";
        isValid = false;
    } else if (!passCheck.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.display = "block";
        isValid = false;
    }


    if (message === "") {
        messageError.textContent = "Message is required";
        messageError.style.display = "block";
        isValid = false;
    } else if (message.length < 5) {
        messageError.textContent = "Message is too short";
        messageError.style.display = "block";
        isValid = false;
    }


    if (isValid) {
        successMessage.textContent = "Message sent successfully ✅";
        successMessage.style.display = "block";
        document.getElementById("contactForm").reset();


        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);


document.querySelectorAll('.offer-card, .menu-item, .hour-card').forEach(el => {
    observer.observe(el);
});
