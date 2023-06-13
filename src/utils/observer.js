export const createObserver = (svgs, rootMargin, root) => {
    const config = {
        root,
        rootMargin,
        threshold: 0
    };

    const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const svg = entry.target;
                let lazyImage = svg.previousElementSibling;
                lazyImage.src = lazyImage.dataset.src;
                // svg.classList.remove('.mySvg');
                observer.unobserve(svg);
            }
        });
    }, config);

    svgs.forEach(function (svg) {
        lazyImageObserver.observe(svg);
    });
};
