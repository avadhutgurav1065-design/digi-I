document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const profileBtn = document.getElementById('profileBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // Open profile modal
    profileBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        modalOverlay.style.opacity = ''; // Clear any inline style just in case
    });

    // Close profile modal when close button is clicked
    closeModalBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        modalOverlay.classList.remove('active');
    });

    // Close profile modal when clicking outside the modal content
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
    
    // Add simple interaction to bottom nav items
    const navItems = document.querySelectorAll('.bottom-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
