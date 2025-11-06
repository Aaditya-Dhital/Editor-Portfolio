// Contact form new tab submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Set form target to _blank to open in new tab
    this.setAttribute('target', '_blank');
    
    // Optional: Add a small delay to ensure the form opens in new tab
    setTimeout(() => {
        // Reset the form target after submission
        this.removeAttribute('target');
    }, 1000);
});
