// Reveal Gallery Photos on Scroll

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observerOptions = {
        root: null, // observe from the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class to trigger the CSS transition
                entry.target.classList.add('is-visible');
                
                // Optional: Lazy load the image
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }

                // Stop observing the image once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        observer.observe(item);
    });
});

// On Click, rotate Chevron arrow (Navbar Gallery dropdown menu on mobile)
document.addEventListener('DOMContentLoaded', () => {
    const mobileDropdown = document.querySelector('.mobile-gallery');

    mobileDropdown.addEventListener("click", () => {
        const chevron = document.querySelector('.bi-chevron-right');
        chevron.classList.toggle('chevron-rotate');
    })
})