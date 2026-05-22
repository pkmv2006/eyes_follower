document.addEventListener("mousemove", (event) => {
    const eyes = document.querySelectorAll(".eye");
    
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);

        const pupil = eye.querySelector(".pupil");
        const moveRadius = 25; 

        const pupilX = Math.cos(angle) * moveRadius;
        const pupilY = Math.sin(angle) * moveRadius;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
