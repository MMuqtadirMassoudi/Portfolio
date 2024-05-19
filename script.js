function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else{
        menuBtn.className = "nav-menu";
    }
}           

// Dark Mode

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
});

// Typing Effect

var typingEffect = new Typed(".typedText", {
    strings: ["Data Scientist", "Developer", "Coder"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})

// Scroll Reveal Animation

// const sr = ScrollReveal({
//     origin: "top",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// });

// sr.reveal(".featured-name", { delay: 100 });
// sr.reveal(".text-info", { delay: 200 });
// sr.reveal(".text-btn", { delay: 200 });
// sr.reveal(".social_icons", { delay: 200 });
// sr.reveal(".featured-image", { delay: 320 });


// sr.reveal(".project-box", { delay: 200 });

// sr.reveal(".top-header", {  });

// const srLeft = ScrollReveal({
//     origin: "left",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// })

// srLeft.reveal(".about-info", { delay: 100 });
// srLeft.reveal(".contact-info", { delay: 100 });

// const srRight = ScrollReveal({
//     origin: "right",
//     distance: "80px",
//     duration: 2000,
//     reset: true,
// })

// srRight.reveal(".skill", { delay: 100 });
// srRight.reveal(".skill-box", { delay: 100 });

