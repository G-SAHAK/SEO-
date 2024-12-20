

document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        // e.preventDefault();
        alert('Please fill out all fields before submitting.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

// Lazy Loading Fallback for Images (if "loading" attribute is unsupported)
// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('img[loading="lazy"]');
//     images.forEach(img => {
//         if (!('loading' in HTMLImageElement.prototype)) {
//             const src = img.getAttribute('data-src');
//             if (src) {
//                 img.src = src;
//             }
//         }
//     });
// });