gsap.registerPlugin(ScrollTrigger);

// mediaQuery
const mediaQuery = window.matchMedia('(min-width: 868px) and (max-width: 4868px)');
if (mediaQuery.matches) {


// S1
gsap.to(".boxsm",{
  duration:2,
  opacity:1,
  left:0,
  right:0,
  delay:0.6
})


gsap.to(".intv-s2",{
  duration:1,
  display:"block",
  opacity:1,
  delay:0.9
})
// S1 End

// S2
gsap.to(".ogm_s2",{
  duration: 2,
  opacity:1,
  top: 0,
  delay:2
})

const s1 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s2",
  toggleActions: "restart pause resume pause",
  start: "top 70%",
  end: "+=50%",
  scrub: true,
}
});
s1.to(".ogm_s1", { top: "-3%",opacity:0,})
.to(".ogm_s3", { top: "0",opacity:1,})
// S2 END

// S3
const s3 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s3",
  toggleActions: "restart pause resume pause",
  start: "top 70%",
  end: "+=50%",
  scrub: true,
}
});
s3.to(".ogm_s2 .container", { top: "0px",opacity: 0})
.to(".ogm_s4", { top: "0",opacity:1,})

// S3 End


// S4
const s4 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s4",
  toggleActions: "restart pause resume pause",
  start: "top 60%",
  end: "+=10%",
  scrub: true,
}
});
s4.to(".ibox4-col-a,.ibox4-col-c", { left: "0px",right:0,visibility: "visible"})

// S4 End


// S5
const s5 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s5",
  toggleActions: "restart none resume none",
  start: "top 90%",
  end: "+=10%",
  scrub: true,
}
});
s5.to(".ogm_s5", { top: "0",opacity:1,})

const s5_2 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s5",
    toggleActions: "restart none resume none",
    start: "top 30%",
    end: "+=10%",
    scrub: true,
  }
  });
s5_2.to(".ogm_s4", {opacity: 0})


const s5_3 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s5",
    toggleActions: "restart none resume none",
    start: "top 30%",
    end: "+=10%",
    scrub: true,
  }
  });
s5_3.to(".tv80x-text_left, .tv80x-text_right", {margin: "0",})
// S5 End

// S6

const s6 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s6",
    toggleActions: "restart none resume none",
    start: "top 80%",
    end: "+=10%",
    scrub: true,
  }
  });
  s6.to(".ogm_s6", { top: "0",opacity:1,})
  .to(".ogm_s6-box_a, .ogm_s6-box_c", { right: "0px",left:0,visibility: "visible"})



const s6_2 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s6",
    toggleActions: "restart none resume none",
    start: "top 30%",
    end: "+=10%",
    scrub: true,
  }
  });
  s6_2.to(".ogm_s7", { top: "0",opacity:1,})
// S6


// S8
const s8 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s8",
  toggleActions: "restart none resume none",
  start: "top 80%",
  end: "+=10%",
  scrub: true,
}
});
s8.to(".ogm_s8", { top: "0",opacity:1,})
.to(".ogm_s8-box-a, .ogm_s8-box-c", { right: "0px",left:0,visibility: "visible"})
// S8

// S9
const s9 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s9",
    toggleActions: "restart none resume none",
    start: "top 50%",
    end: "+=10%",
    scrub: true,
  }
  });
  s9.to(".customers-slick", { right: "0",opacity:1,})
// S9 End


// S10
const s10 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ogm_s9",
    toggleActions: "restart none resume none",
    start: "top 20%",
    end: "+=20%",
    scrub: true,
  }
  });
  s10.to(".ogm_s10", { top: "0",opacity:1,})
// S10 End
 
}
// mediaQuery End


// Screen Color Change
const color_s1 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS1",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient1", className: "active"}}});

const color_s2 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS2",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient2", className: "active"}}});

const color_s3 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS3",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient3", className: "active"}}});

const color_s4 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS4",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient4", className: "active"}}});

const color_s5 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS5",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient5", className: "active"}}});

const color_s6 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS6",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient6", className: "active"}}});

const color_s7 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS7",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient7", className: "active"}}});

const color_s8 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS8",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient8", className: "active"}}});

const color_s9 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS9",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient9", className: "active"}}});

const color_s10 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS10",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient10", className: "active"}}});

// Screen Color Change End
