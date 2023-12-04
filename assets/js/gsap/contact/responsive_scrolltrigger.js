
// Responsive JS
const mediaQuery2 = window.matchMedia('(min-width:268px) and (max-width: 868px)');

if (mediaQuery2.matches) {


// S1
gsap.to(".form-area-sm",{
duration:2,
opacity:1,
left:0,
right:0,
})

gsap.to(".addr",{
duration: 1,
opacity:1,
top: 0,
delay:1.5
})

// S1 End


// S2 
const s1 = gsap.timeline({
duration: 3,
scrollTrigger: {
trigger: ".bns-ptl",
toggleActions: "restart pause resume pause",
start: "top 70%",
end: "+=1%",
scrub: true,
}
});
s1.to(".bns-ptl", { top: "0",opacity:1,})
// S2 End
    



}
// Responsive JS End