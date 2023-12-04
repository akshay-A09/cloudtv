gsap.registerPlugin(ScrollTrigger);

// mediaQuery
const mediaQuery = window.matchMedia('(min-width: 868px) and (max-width: 4868px)');
if (mediaQuery.matches) {


// S1
gsap.to(".banner-ott",{
  duration:2,
  opacity:0.2,
  left:0,
  right:0,
  delay:0.6
})


// S1 End

// S3
const s1 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ott_s3",
  toggleActions: "restart pause resume pause",
  start: "top 60%",
  end: "+=10%",
  scrub: true,
}
});
s1.to(".ott_s3 .hds1", { top: "0",opacity:1,})
.to(".boxott2", { top: "0",opacity:1,})
// S3 END

// S4
const s2 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ott_s4",
    toggleActions: "restart pause resume pause",
    start: "top 70%",
    end: "+=40%",
    scrub: true,
  }
  });
  s2.to(".ott_s4 .df-cover", { opacity:1,})
  .to(".appandcont", { top: "0",opacity:1,})  
  .to(".appandcont_btns", { left: "0",})  

  const s2_1 = gsap.timeline({
    duration: 3,
    scrollTrigger: {
      trigger: ".ott_s4",
      toggleActions: "restart pause resume pause",
      start: "top 20%",
      end: "+=140%",
      scrub: true,
      toggleClass: "active",
    }
    });


// S4 End


// S5
const s5 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
    trigger: ".ott_s5",
    toggleActions: "restart none resume none",
    start: "top 50%",
    end: "+=1%",
    scrub: true,
  }
  });
  s5.to(".ott_s5 .hds1, .ott_s5 .para_w", { opacity:1,})
  .to(".boxott2-colA, .boxott2-colB", { left:0,right:0})





// S5 End

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


const mobileDevice = window.matchMedia('(max-width: 767px)');
if (mobileDevice.matches) {
  gsap.to(".banner-ott",{
    duration:2,
    opacity:0.5,
    left:0,
    right:0,
    delay:0.6
  })
}



// Screen Color Change
const color_s1 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS1",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient1", className: "active"}}});

const color_s2 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS2",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient2", className: "active2"}}});

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


// Screen Color Change End
