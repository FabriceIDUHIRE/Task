document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            const caption = photo.querySelector('.caption');
            caption.style.display = 'block';
        });

        photo.addEventListener('mouseout', () => {
            const caption = photo.querySelector('.caption');
            caption.style.display = 'none';
        });
    });
});
