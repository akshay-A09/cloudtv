
// Responsive JS
const mediaQuery2 = window.matchMedia('(min-width:268px) and (max-width: 868px)');

if (mediaQuery2.matches) {

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
  start: "top 100%",
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
    start: "top 90%",
    end: "+=40%",
    scrub: true,
  }
  });
  s2.to(".ott_s4 .df-cover", { opacity:1,})
  .to(".appandcont_btns", { left: "0",})  

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
// Responsive JS End