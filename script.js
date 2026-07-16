const tl = gsap.timeline({
    scrollTrigger: {
       trigger: ".scroll-section",
        start: "top 80%",           
        end: "top 20%",
        scrub: 1,
        // markers: false
    }
});


tl.to("#scroll-text", {
    x: 0,
    opacity: 1,
    ease: "power2.out"
}, "+=0.0014");