const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true
    }
});


tl.to("#scroll-text", {
    x: 0,
    opacity: 1,
    ease: "power2.out"
}, "+=0.2");
