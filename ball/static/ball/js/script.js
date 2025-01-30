document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-preferences');
    const highlightContainer = document.getElementById('highlight-container');

    saveButton.addEventListener('click', function() {
        const team = document.getElementById('team').value;
        const player = document.getElementById('player').value;
        const highlightType = document.getElementById('highlight-type').value;

        // Here you would typically send this data to a server or process it
        console.log('Preferences Saved:', { team, player, highlightType });

        // Display a simple message in the highlights section
        highlightContainer.innerHTML = `<p>Preferences saved! You selected ${team} as your team, ${player} as your favorite player, and ${highlightType} as your preferred highlight type.</p>`;
    });
    const images = document.querySelectorAll("#rotating-images img");
    let currentIndex = 0;

    function showNextImage() {
        // Hide the current image
        images[currentIndex].classList.remove("active");

        // Move to the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Show the next image
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Rotate images every 5 seconds
    setInterval(showNextImage, 5000);
});