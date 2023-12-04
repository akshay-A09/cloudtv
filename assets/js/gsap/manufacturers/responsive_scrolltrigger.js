
// Responsive JS
const mediaQuery2 = window.matchMedia('(min-width:268px) and (max-width: 868px)');

if (mediaQuery2.matches) {

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
  delay:0.6
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
  start: "top 90%",
  end: "+=50%",
  scrub: true,
}
});
s1.to(".ogm_s3", { top: "0",opacity:1,})
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
  start: "top 70%",
  end: "+=50%",
  scrub: true,
}
});
s4.to(".ibox4-col-a", { left: "0px",visibility: "visible"})

const s4_2 = gsap.timeline({
duration: 3,
scrollTrigger: {
  trigger: ".ogm_s4",
  toggleActions: "restart pause resume pause",
  start: "top 70%",
  end: "+=50%",
  scrub: true,
}
});
s4_2.to(".ibox4-col-c", { right: "0px",visibility: "visible"})
// S4 End

// S4
const s2 = gsap.timeline({
  duration: 3,
  scrollTrigger: {
      trigger: ".ogm_s5",
      toggleActions: "restart pause resume pause",
      start: "top 90%",
      end: "+=40%",
      scrub: true,
  }
  });
  s2.to(".appandcont_btns", { left: "0",})  
  
  .to(".appandcont", { top: "0",opacity:1,})  
  
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
// Responsive JS End