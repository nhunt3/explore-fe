import React, {useEffect} from 'react';
import './test.css';

// dummy test data
const coffeeShops = [
    {
        title: 'Coffee Shop 1',
        photos: [
            'picture 1 of Coffee Shop 1',
            'picture 2 of Coffee Shop 1',
            'picture 3 of Coffee Shop 1',
            'picture 4 of Coffee Shop 1'
        ]
    },
    {
        title: 'Coffee Shop 2',
        photos: [
            'picture 1 of Coffee Shop 2',
            'picture 2 of Coffee Shop 2',
            'picture 3 of Coffee Shop 2',
            'picture 4 of Coffee Shop 2'
        ]
    },
    {
        title: 'Coffee Shop 3',
        photos: [
            'picture 1 of Coffee Shop 3',
            'picture 2 of Coffee Shop 3',
            'picture 3 of Coffee Shop 3',
            'picture 4 of Coffee Shop 3'
        ]
    },
    {
        title: 'Coffee Shop 4',
        photos: [
            'picture 1 of Coffee Shop 4',
            'picture 2 of Coffee Shop 4',
            'picture 3 of Coffee Shop 4',
            'picture 4 of Coffee Shop 4'
        ]
    }
]

export const Test = () => {
    useEffect(() => {
        function loadContainer(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const svgs = container.querySelectorAll('.mySvg');
                    createObserver(svgs, rootMargin, container, loadImage);
                    observer.unobserve(container);
                    console.log(entry.rootBounds); //null in SO snippet but DOMRectReadOnly in a normal page???
                }
            });
        }

        function loadImage(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const svg = entry.target;
                    setTimeout(() => svg.children[0].setAttribute('fill', 'purple'), 500); // the setTimeout simulates downloading an image
                    observer.unobserve(svg);
                }
            });
        }
        const createObserver = (targets, rootMargin, root, callBack) => {
            const config = {
                root,
                rootMargin,
                threshold: 0
            };
            const observer = new IntersectionObserver(callBack, config);
            targets.forEach(function(target) {
                observer.observe(target);
            });
        };
        const scrollContainers = document.querySelectorAll('.scroll-container');
        const rootMargin = '0% 0% 0% 0%';
        createObserver(scrollContainers, rootMargin, null, loadContainer);
    }, [])

    return (
        <>
            <div style={{marginBottom: '50px'}}>Awesome Coffee Shops:</div>

            {coffeeShops.map(shop => {
                return (
                    <>
                        <div className='scroll-container'>
                            {shop.photos.map(photo => {
                                return (
                                    <svg width='4032' height='3024' className='mySvg'>
                                        <rect x="0" y="0" width='4032' height="3024" stroke='black' fill='white' />
                                    </svg>

                                );
                            })}
                        </div>
                        <div>{shop.title}</div>
                    </>
                );
            })}
        </>
    );
};



export const createObserver2 = (scrollContainers, rootMargin, root) => {
    const config = {
        root,
        rootMargin,
        threshold: 0
    };

    const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const scrollContainer = entry.target;
                setTimeout(() => scrollContainer.childNodes[0].childNodes[0].setAttribute('fill', 'purple'), 500); // the setTimeout simulates downloading an image
                observer.unobserve(scrollContainer);
            }
        });
    }, config);

    scrollContainers.forEach(function (scrollContainer) {
        lazyImageObserver.observe(scrollContainer);
    });
};

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
                setTimeout(() => svg.childNodes[0].setAttribute('fill', 'purple'), 500); // the setTimeout simulates downloading an image
                observer.unobserve(svg);
            }
        });
    }, config);

    svgs.forEach(function (svg) {
        lazyImageObserver.observe(svg);
    });
};
