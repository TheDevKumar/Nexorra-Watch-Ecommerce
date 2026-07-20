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

gsap.from(".card-1-season" , {
    y: 100,
    opacity: 0,
     scrollTrigger: {
       trigger: ".seasonal-cards",
        start: "top 75%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from(".img-side-A" , {
    x: -300,
    opacity: 0,
     scrollTrigger: {
       trigger: ".edition-bar-main",
        start: "top 65%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})


gsap.from(".left-btn" , {
    delay:2.7,
    y: -10,
    opacity: 0,
     scrollTrigger: {
       trigger: "nav",
        start: "top 80%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})


gsap.from(".text-area" , {
    delay:2.7,
    x: -20,
    opacity: 0,
     scrollTrigger: {
       trigger: "nav",
        start: "top 80%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})
gsap.from("#sign-up" , {
    delay:2.7,
    x: 100,
    opacity: 0,
     scrollTrigger: {
       trigger: "nav",
        start: "top 80%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})
gsap.from(".contact-us-circle h1" , {
    y: 50,
    opacity: 0,
     scrollTrigger: {
       trigger: ".contact-us-circle",
        start: "top 80%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})

gsap.from(".watch-img" , {
    y: 20,
    
    duration: 2,
     repeat: -1, 
     yoyo:true,
     scrollTrigger: {
       trigger: "nav",
        start: "top 80%",           
        end: "top 20%",
        // markers: true
    }
})



let watchbgc = document.querySelector(".display-text-watch");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const price = document.querySelector("#price");
let realwatch = document.querySelector("#watch-img-real")



const watches = [
       {
        img: "./1.png",
        color: "#F3F1F1", 
        price: "$400.00"
    },
 {
        img: "./4.png",
        color: "#D8E5D8", 
        price: "$340.00"
    },
    
    {
        img: "./bang.png",
        color: "#E4DCEC", 
        price: "$700.00"
    },

];

let current = 0;

function updateWatch() {
    
    realwatch.src = watches[current].img;
    watchbgc.style.backgroundColor = watches[current].color;
    // cardinside.style.backgroundColor = watches[current].color;
    // price.textContent = watches[current].price;
    
    gsap.from(".watch-img" , {
    y: -10,
    
    
    // opacity: 0,
     scrollTrigger: {
       trigger: "nav",
        start: "top 80%",           
        end: "top 20%",
        // scrub: 1,
        // markers: true
    }
})
}

nextBtn.addEventListener("click", () => {
    current++;

    if (current >= watches.length) {
        current = 0;
    }

    updateWatch();
});

prevBtn.addEventListener("click", () => {
    current--;

    if (current < 0) {
        current = watches.length - 1;
    }

    updateWatch();
});







document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");

    setTimeout(() => {
        splash.classList.add("exit");
        
        document.body.style.overflow = "auto";
        
        setTimeout(() => {
            splash.style.display = "none";
        }, 800);

        

    }, 2200); 



});

