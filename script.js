document.addEventListener('DOMContentLoaded', function() {
    // Select all icons in subsection headers
    const icons = document.querySelectorAll('.subsection-header i');

    // Add click event listener to each icon
    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Toggle the rotation of the icon
            this.classList.toggle('rotate-icon');

            // Get the closest parent tbody element
            const tbody = this.closest('tbody');
            
            // Toggle the visibility of all rows in this tbody except the first one (the header)
            Array.from(tbody.querySelectorAll('tr:not(:first-child)')).forEach(row => {
                row.classList.toggle('hidden');
            });
        });
    });
});