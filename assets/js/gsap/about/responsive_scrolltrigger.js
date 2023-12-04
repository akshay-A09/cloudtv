
// Responsive JS
const mediaQuery2 = window.matchMedia('(min-width:268px) and (max-width: 868px)');

if (mediaQuery2.matches) {

  
// S1
gsap.to(".abt-ttl",{
  duration: 1,
  opacity:1,
  x:0,
  delay:0.4
})
gsap.to(".abt-img",{
  duration: 2,
  x:0,
  opacity:1,
})
// S1 End

// S2
gsap.to(".ab_s2",{
  duration: 2,
  opacity:1,
  x:0,
  y:0,
  delay:0.8
})
// S2 END

// S3
const tl = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ab_s3",
  toggleActions: "restart none none none",
  start: "top 50%",
  end: "+=1%",
  scrub: true,
}
});

tl.to(".ab_s3 .crnt-h4", { top: "0",opacity:1,})
.to(".timeline-slider_row", { right: "0",opacity:1,})
// S3 End


// S4
const tl2 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ab_s4",
  toggleActions: "restart none none none",
  start: "top 50%",
  end: "+=1%",
  scrub: true,
}
});
tl2.to(".ab_s4 .crnt-h4", { top: "0",opacity:1,})
.to(".os-crd-dtl_s1, .os-crd-dtl_s3", { left: "0",})
.to(".os-crd-dtl_s1, .os-crd-dtl_s3", { opacity:"1",})
// S4 End

// S5
const color_s1 = gsap.timeline({duration: 2,
  scrollTrigger: {trigger: ".ab_s5",toggleActions: "restart none none none",start: "top 90%",end: "+=150%",scrub: true, toggleClass: {targets: "body", className: "ab_s5-active"}}});
  
const color_s2 = gsap.timeline({duration: 2,
  scrollTrigger: {trigger: ".bg-tx-2",toggleActions: "restart none none none",start: "top 90%",end: "+=100%",scrub: true, toggleClass: {targets: "body", className: "bg-tx-2-active"}}});
  

const tl3 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ab_s5",
    toggleActions: "restart none none none",
    start: "top 50%",
    end: "+=1%",
    scrub: true,
  }
});
tl3.to(".ab_s5_txt", { top: "0",opacity:1,})


const tl3m = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ab_s5",
  toggleActions: "restart none none none",
  start: "top 40%",
  end: "+=50%",
  scrub: true,
}
});
tl3m.to(".sec_bg",{opacity: 1} )


const tl3m2 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".sec_bg",
    toggleActions: "restart none none none",
    start: "top 50%",
    end: "+=1%",
    scrub: true,
  }
  });
  tl3m2.to(".bg-tx-2 div",{top: 0,opacity: 1} )
   
// S5 End





}
// Responsive JS End