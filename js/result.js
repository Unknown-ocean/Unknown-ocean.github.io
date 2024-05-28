document.addEventListener("DOMContentLoaded", function() {
    const heartbeatBtn = document.getElementById('heartbeatBtn');

    // Optionally, you can add event listeners to control the animation
    heartbeatBtn.addEventListener('mouseenter', function() {
        heartbeatBtn.style.animationPlayState = 'running';
    });

    heartbeatBtn.addEventListener('mouseleave', function() {
        heartbeatBtn.style.animationPlayState = 'paused';
    });
});
