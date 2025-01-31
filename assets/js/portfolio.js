// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get the filter category
            const filterValue = button.textContent.toLowerCase();

            // Filter the portfolio items
            portfolioItems.forEach(item => {
                const itemCategory = item.dataset.category;
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    // Add animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 100);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('.portfolio-item img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });
});

// Optional: Add lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.portfolio-item img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger load if using placeholder
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});