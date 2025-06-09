document.getElementById("viewWorksBtn")?.addEventListener("click", () => {
    const target = document.getElementById("projects-section");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const timeFraction = Math.min(progress / duration, 1);
        const easedProgress = easeInOutCubic(timeFraction);
        window.scrollTo(0, startPosition + distance * easedProgress);
        if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
});  