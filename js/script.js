// Dark mode toggle
function darkModeToggle() {
    document.body.classList.toggle('dark-mode');
}

// Smooth scrolling for navigation links and interactive greeting
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Interactive greeting that updates based on user name and time of day
    const nameInput = document.getElementById('name');
    const greetingElement = document.getElementById('live-greeting');

    function getTimeOfDayGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    }

    function updateGreeting() {
        if (!greetingElement) return;

        const name = nameInput ? nameInput.value.trim() : '';

        if (name) {
            const timeGreeting = getTimeOfDayGreeting();
            greetingElement.textContent = `${timeGreeting}, ${name}! I look forward to your message.`;
        } else {
            greetingElement.textContent = '';
        }
    }

    if (nameInput) {
        nameInput.addEventListener('input', updateGreeting);
        // Initialize greeting in case the browser autofills the name
        updateGreeting();
    }

    // Contact form validation and feedback
    const contactForm = document.querySelector('#contact form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm && formFeedback) {
        function setFormFeedback(message, type) {
            formFeedback.textContent = message;
            formFeedback.classList.remove('feedback-success', 'feedback-error', 'fade-in');

            if (type === 'success') {
                formFeedback.classList.add('feedback-success');
            } else if (type === 'error') {
                formFeedback.classList.add('feedback-error');
            }

            // trigger fade-in animation
            void formFeedback.offsetWidth;
            formFeedback.classList.add('fade-in');
        }

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!name || !email || !message) {
                setFormFeedback('Please fill in your name, email, and message before sending.', 'error');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                setFormFeedback('Please enter a valid email address so I can get back to you.', 'error');
                return;
            }

            // Simulate sending data / loading state
            setFormFeedback('Sending your message...', null);

            setTimeout(function () {
                const didFail = Math.random() < 0.3; // 30% chance to simulate a failure

                if (didFail) {
                    setFormFeedback('Something went wrong while sending your message. Please try again in a moment.', 'error');
                } else {
                    const successMessage = name
                        ? `Thanks, ${name}! Your message has been sent.`
                        : 'Thanks! Your message has been sent.';
                    setFormFeedback(successMessage, 'success');
                    contactForm.reset();
                    updateGreeting();
                }
            }, 800);
        });
    }
});