document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function () {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Function to animate elements on scroll
        const animateOnScroll = function () {
            document.querySelectorAll('.fade-in-element').forEach(element => {
                if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                    element.classList.add('fade-in');
                }
            });
        };
    
        // Run animation on scroll
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
    
        // Mobile menu links - close menu when clicked
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.overlay');
        
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    
        // Smooth scrolling for navigation links
        document.querySelectorAll("nav a").forEach(anchor => {
            anchor.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default link behavior
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust for navbar height
                        behavior: "smooth"
                    });
                }
            });
        });
    
        // Delay animation effect for #about-box
        const aboutBox = document.querySelector("#about-box");
        if (aboutBox) {
            setTimeout(() => {
                aboutBox.classList.add("animate");
            }, 500); // Delay animation by 0.5s for smooth effect
        }
    
        // Function to add animation classes to elements
        const addAnimationClasses = function () {
            document.querySelectorAll('.service-card, .testimonial-card').forEach((card, index) => {
                card.classList.add('fade-in-element');
                card.style.animationDelay = `${0.2 * index}s`;
            });
        };
    
        // Apply animation classes
        addAnimationClasses();
    
        // Trigger animations on page load and scroll
        animateOnScroll();
    
        // Add CSS styles for animations dynamically
        const style = document.createElement('style');
        style.textContent = `
            .fade-in-element {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
    
            .fade-in-element.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
    
            .no-scroll {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    });
    