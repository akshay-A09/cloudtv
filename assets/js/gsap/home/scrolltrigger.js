gsap.registerPlugin(ScrollTrigger);


// loader
let tln = gsap.timeline({onComplete: contentShow,});
tln.to("#loader", {x: "100%",duration: 2,ease: "power2.in",});
function contentShow() {
gsap.set(".loder-logo", {display: "none"});
gsap.set("html", {overflowY: "auto"});
}
// loader End
 

// mediaQuery
const mediaQuery = window.matchMedia('(min-width: 868px) and (max-width: 4868px)');

if (mediaQuery.matches) {

// S1
gsap.to(".hs1-dev1", {
    y: "-15vh",
    duration: 3,
    delay: 2,
})

gsap.to(".hs1-dev1_hd2",{
    duration:2,
    delay: 2,
    lineHeight: "8vh"
})

gsap.to(".hs1-dev2", {
    top: "24vh",
    duration: 3,
    delay: 2.1,
   
})

gsap.to(".homescreen-slick",{
    duration:2,
    delay: 4,
    transform:"scale(1)"
})

gsap.to(".hs1_rp1",{
    duration:2,
    delay: 4.5,
    x:"130%",
    y: "235%",
})

gsap.to(".hs1_rp2",{
    duration:2,
    delay: 4.5,
    x:"160%",
    y: "55%",
    
})

gsap.to(".hs1_rp3",{
    duration:2,
    delay: 4.5,
    x:"-160%",
    y: "55%",
})

gsap.to(".hs1_rp4",{
    duration:2,
    delay: 4.5,
    x:"-130%",
    y: "235%",

})

gsap.to(".scree_header, .hs1-recently-text, .scree_header_2",{
    duration:2,
    delay: 5,
    opacity: 1,
})
// S1 End

// TV S2 Slide
const tl = gsap.timeline({
    duration: 3,
    
    scrollTrigger: {
        trigger: ".trigger-tv",
        toggleActions: "restart none none none",
        start: "top 80%",
        end: "+=60%",
        scrub: true,
   }
});
tl.to(".hs1-dev2-cover", { y: "40vh",duration:2,})
  .to(".hs1-dev2-cover", { x: "-50vh",y: "50vh",duration:2})
  .to(".hs1-dev2-cover", { scale:1.1,duration:2})

// TV S2 Slide End

// S2 Text
gsap.to(".hs3_users",{
duration: 4,
opacity: 1,
top:"80vh",
opacity:1,
scrollTrigger: {
    trigger: ".trigger-tv",
    toggleActions: "restart none none none",
    start: "top 40%",
    end: "+=40%",
    scrub: true,
}
})
// S2 Text End




// S3 INFO TAGS & TV SLIDE  
const tl3m = gsap.timeline({
duration: 3,
scrollTrigger: {
    trigger: ".trigger-tv3",
    toggleActions: "restart none none none",
    start: "top 50%",
    end: "+=40%",
    scrub: true,
}
});
tl3m.to(".hs1-dev2-cover-s3-in", {duration:1,y:"40vh"})
.to(".hs1-dev2-cover-s3-in", {duration:1,y:"94vh"})
.to(".hs3_users", {x:"90vh", duration:1,})
.to(".hs1-dev2-cover-s3", { x: "50vh", duration:3,})
.to(".hs1-dev2-cover", { scale: "1", duration:3,})
.to(".hs3-cont", {top:"35vh", opacity: "1"})
.to(".scree_header_2", {transform: "scale(1)",right:"-15vh",top:"-14vh", x:"0", y: "0",width: "13vh", duration:4})
.to(".scree_header_2", {opacity:"0",duration:4})
.to(".ifocall-sm", {opacity:"0.5"})
// .to(".tvhs3_cover", {opacity:"1"})
.to(".ifocall-sm", {margin: "0", opacity:"1"})
.to(".infomobile", {bottom:"-4vh", opacity: "1"})
.to(".hs3_tvbaneer", {opacity:0.3})
.to(".hs3_tvbaneer", {opacity:0.6})
.to(".hs3_tvbaneer", {opacity:1})
.to(".tv80x-mic-home", {opacity:"1",})
.to(".hs1-dev2-cover-s3-in", {scale:"1"})
// S3 INFO TAGS & TV SLIDE END



// S4
const tl5 = gsap.timeline({
duration: 2,
scrollTrigger: {
trigger: ".hs4",
toggleActions: "restart pause resume pause",
start: "top 80%",
end: "+=1%",
scrub: true,
}
});
tl5.to(".hs4", {  opacity: "1"})
.to(".hs3", {  opacity: "0.4"})
.to(".hs4_t15", { top: "30vh",  opacity: "1"})
.to(".hs4-cont", {  opacity: "1"})
.to(".hs2 .container", {opacity:1})

const tl5_n = gsap.timeline({
duration: 0,
scrollTrigger: {
trigger: ".hs4",
toggleActions: "play none none paly",
start: "top 50%",
end: "+=100%",
}});
tl5_n
.to(".t15_bg", {top:"-24%"})
.to(".t15_bg", {scale:"0.5",opacity:0,delay:0.3})
.to(".hs4insec_s2_logo_l,.hs4insec_s2_logo_r", {opacity:1,left: "0",right:0})
.to(".hs4insec_s3",{top: 0,opacity:1})
.to(".hs4insec_s1_owl img", {left: "-650px",delay:0.5})

const tl5_n2 = gsap.timeline({
duration: 0,
scrollTrigger: {
trigger: ".hs4",
toggleActions: "play none none paly",
start: "top 50%",
end: "+=100%",
} });
tl5_n2
.to(".tvhs3-dev2-cover-hs4", {  top: "65px",opacity: "1"})

// S4 end


// S5
const hs5_1 = gsap.timeline({
    duration: 6,
    scrollTrigger: {
        trigger: ".hs5_trigger",
        toggleActions: "restart none none none",
        start: "top 150%",
        end: "+=50%",
        scrub: true,
    }
});
hs5_1.to(".hs4 .container", { opacity: 0  })
    

 
const hs5_2 = gsap.timeline({
    duration: 6,
    scrollTrigger: {
        trigger: ".hs5",
        toggleActions: "restart none none none",
        start: "top 80%",
        end: "+=1%",
        scrub: true,
    }
});
hs5_2.to(".ctvlogo5s1_in", { opacity: 1 , })
.to(".ctvlogo5s1_in", { top: 0, left: 0, position: "relative",width:"100%"})
     .to(".ctvlogo5s1_min .ctvlogo5s1_sm img", { clipPath: "circle(100% at center)"})
     .to(".ctvlogo5s3", { top: 0, opacity:1})
     .to(".hs5-cont, .ctvapp", { opacity:1})


// S5 end


// S6


const hs6_1m = gsap.timeline({
    duration: 6,
    scrollTrigger: {
        trigger: ".hs6",
        toggleActions: "restart none none none",
        start: "top 69%",
        end: "+=20%",
        scrub: true,
    }
    });
    hs6_1m.to(".hs6", {opacity: "1",})
    .to(".hs6-cont", {top: "8vh"})
    .to(".hs6-cont, .tvhs3-dev2-cover-hs6", {opacity: 1,})
     .to(".tvhs3-dev2-cover-hs6", {top: "15vh",})

const hs6_2 = gsap.timeline({
duration: 6,
scrollTrigger: {
    trigger: ".hs6",
    toggleActions: "restart none none none",
    start: "top 90%",
    end: "+=10%",
    scrub: true,
}
}); 
const hs6_2M = gsap.timeline({
duration: 6,
scrollTrigger: {
    trigger: ".hs6",
    toggleActions: "restart none none none",
    start: "top 30%",
    end: "+=1%",
    scrub: true,
 }
});
hs6_2M.to(".bg_video_cover", {display:"none"})
// S6 end


// S7
const hs7_1 = gsap.timeline({
    duration: 6,
    scrollTrigger: {
        trigger: ".hs7",
        toggleActions: "play none none none",
        start: "top 55%",
        end: "+=30%",
        scrub: true,
        // markers:true
}
});

hs7_1.to(".hs6 .container", {top:"-90vh", opacity: "0"})

const hs7_1_2 = gsap.timeline({
    duration: 0,
    scrollTrigger: {
        trigger: ".hs7",
        toggleActions: "play none none none",
        start: "top 55%",
        end: "+=100%",
        // scrub: true,
}
});

hs7_1_2
.to(".hs7_in", {top:"0", visibility:"visible"})


const color_s7m = gsap.timeline({duration: 7,
    scrollTrigger: {trigger: ".gradientS7",toggleActions: "restart none none none",start: "top 30%",end: "+=100%",scrub: true, toggleClass: {targets: "body", className: "activeC"}}});
// S7 End


// S8

// const hs8_1 = gsap.timeline({
//     duration: 6,
//     scrollTrigger: {
//         trigger: ".hs8",
//         toggleActions: "restart none none none",
//         start: "top 30%",
//         end: "+=50%",
//         scrub: true,
//         toggleClass: "active",
//     }
// });

// const colorhs8 = gsap.timeline({duration: 2,
//     scrollTrigger: {trigger: ".hs8",toggleActions: "restart none none none",start: "top 50%",end: "+=100%",scrub: true, toggleClass: {targets: "body", className: "activehs8"}}});
    

const hs8_3 = gsap.timeline({
    duration: 0,
    scrollTrigger: {
        trigger: ".hs8-trigger",
        toggleActions: "play none play none",
        start: "top 70%",
        end: "+=0%",
    }
});
hs8_3
.to(".hs8 ", {background:"#fff"})
.to(".hs8-cont ", {top:"10vh", opacity: "1", lineHeight:"4.5vh"})
.to(".callremot_hs8", {bottom:"0vh", visibility:"visible"})
.to(".mic_hs8", {bottom:"30vh", })
.to(".mic_hs8 ", {y:"100vh", delay: 1.0})
.to(".mic_text ", {opacity:1,  scale:"1", delay: 0.2})
.to(".mic_text ", {opacity:1,  scale:"1", delay: 0.2})
.to(".mic_text ", {opacity:0,y:"10vh", })
.to(".callremot_hs8 ", {width:"35vh",height:"36vh",})
.to(".tvhs3-dev2-cover-hs8 ", {opacity:1,delay: 0.1})
.to(".callremot_bg ", {filter:"blur(2px)"})
// S8 End


// S10
const hs10_1 = gsap.timeline({
duration: 2,
scrollTrigger: {
    trigger: ".hs10",
    toggleActions: "restart none none none",
    start: "top 10%",
    end: "+=0%",
    scrub: true,
}
});
hs10_1.to(".pd_l2 ", {left:"-23vh"})

const hs10_2 = gsap.timeline({
duration: 2,
scrollTrigger: {
    trigger: ".hs10",
    toggleActions: "restart none none none",
    start: "top 10%",
    end: "+=0%",
    scrub: true,
}
});
hs10_2.to(".pd_l3 ", {right:"-23vh"})


const hs10_3 = gsap.timeline({
duration: 0,
scrollTrigger: {
    trigger: ".hs10",
    toggleActions: "restart none none none",
    start: "top 30%",
    end: "+=1%",
    scrub: true,
    // toggleClass: "active",
}
});
hs10_3.to(".hs10 .container ", {opacity:"1", top:0})


const hs10_4 = gsap.timeline({
duration: 2,
scrollTrigger: {
    trigger: ".hs10",
    toggleActions: "restart none none none",
    start: "top 90%",
    end: "+=50%",
    scrub: true,
}
});
hs10_4.to(".hs9 ", {opacity:"1"})
.to(".pd_l1 ", {opacity:"1"})
.to(".pd_l2,.pd_l3 ", {opacity:"1", delay:1})
// S10 End



// Screen 11
const hs11_1 = gsap.timeline({
    duration: 3,
    scrollTrigger: {
        trigger: ".hs11",
        toggleActions: "restart none none none",
        start: "top 40%",
        end: "+=1%",
        scrub: true,
    }
});
hs11_1
.to(".hs11-cont_in ", {top:"0",opacity:"1"})
.to(".tvhs3-dev2-cover-hs11 ", {top:"0",opacity:"1"})
.to(".tvhs3_cover-hs11 img ", {display:"block"})
// Screen 11 End


// Screen 12 
const hs12_1 = gsap.timeline({
    duration: 3,
    scrollTrigger: {
        trigger: ".hs12",
        toggleActions: "restart none none none",
        start: "top 50%",
        end: "+=1%",
        scrub: true,
    }
});
hs12_1.to(".hs12-cont", {opacity:"1"})
    .to(".hs12-cont ", {top:"0"})
    .to(".wnew_hs12 ", {top:"0",opacity:"1"})
    .to(".hs13-cont ", {top:"0",opacity:"1"})
// Screen 12 End

}
// mediaQuery End
 

// Home Screen Color Change
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
scrollTrigger: {trigger: ".gradientS8",toggleActions: "restart none none none",start: "top 50%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient8", className: "active"}}});

const color_s9 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS9",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient9", className: "active"}}});

const color_s10 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS10",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient10", className: "active"}}});

const color_s11 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS11",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient11", className: "active"}}});

const color_s12 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS12",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient12", className: "active"}}});

const color_s13 = gsap.timeline({duration: 7,
scrollTrigger: {trigger: ".gradientS13",toggleActions: "restart none none none",start: "top -1%",end: "+=100%",scrub: true,toggleClass: {targets: ".gradient13", className: "active"}}});
// Home Screen Color Change End
  


// Tabs
jQuery(".hs7tab_btn").click(function () {
    var tab_id = jQuery(this).attr("data-tab");
    jQuery(".hs7tab_btn").removeClass("active");
    jQuery(".hs7tab_cont").removeClass("active");
    jQuery(this).addClass("active");
    jQuery("#" + tab_id).addClass("active");
  });
   
  jQuery(".hs9tab_btn").click(function () {
    var tab_id = jQuery(this).attr("data-tab");
    jQuery(".hs9tab_btn").removeClass("active");
    jQuery(".hs9tab_cont").removeClass("active");
    jQuery(this).addClass("active");
    jQuery("#" + tab_id).addClass("active");
  });
// Tabs end



const mediaQuery3 = window.matchMedia('(min-width: 868px) and (max-width: 4868px) and (min-height: 0px) and (max-height: 940px) ');

if (mediaQuery3.matches) {

// S2 LOGO & Frame
const tl2 = gsap.timeline({
duration: 3,
scrollTrigger: {
    trigger: ".trigger-tv",
    toggleActions: "restart none none none",
    start: "top 50%",
    end: "+=30%",
    scrub: true,
}
});
tl2.to(".screen_cover", {x:"-30%", duration:6,opacity:0})
.to(".scree_header_2", {transform: "scale(4)", x:"-18vh"})
.to(".scree_header_2", {y: "17vh",width: "60%", duration:4})
// S2 LOGO & Frame


}

const mediaQuery4 = window.matchMedia('(min-width: 868px) and (max-width: 4868px) and (min-height: 940px) and (max-height: 4868px)');

if (mediaQuery4.matches) {

    
// S2 LOGO & Frame
const tl2 = gsap.timeline({
    duration: 3,
    scrollTrigger: {
        trigger: ".trigger-tv",
        toggleActions: "restart none none none",
        start: "top 50%",
        end: "+=30%",
        scrub: true,
    }
    });
    tl2.to(".screen_cover", {x:"-30%", duration:6,opacity:0})
    .to(".scree_header_2", {transform: "scale(4)", x:"-16vh"})
    .to(".scree_header_2", {y: "14vh",width: "60%", duration:4})
    // S2 LOGO & Frame
    

}

