
// Responsive JS
const mediaQuery2 = window.matchMedia('(min-width:268px) and (max-width: 868px)');

if (mediaQuery2.matches) {


// S1
gsap.to(".hs1-dev1", {
    y: "-84px",
    duration: 3,
    delay: 2,
})

gsap.to(".hs1-dev1_hd2",{
    duration:2,
    delay: 2,
    lineHeight: "60px"
})

gsap.to(".hs1-dev2", {
    top: "50px",
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
    delay: 5,
    x:"130%",
    y: "235%",
})

gsap.to(".hs1_rp2",{
    duration:2,
    delay: 5,
    x:"160%",
    y: "55%",
    
})

gsap.to(".hs1_rp3",{
    duration:2,
    delay: 5,
    x:"-160%",
    y: "55%",
})

gsap.to(".hs1_rp4",{
    duration:2,
    delay: 5,
    x:"-130%",
    y: "235%",

})

gsap.to(".scree_header, .hs1-recently-text, .scree_header_2",{
    duration:2,
    delay: 6,
    opacity: 1,
})

gsap.to(".hs3_users",{
    duration:2,
    delay: 3,
    opacity: 1,
    opacity: 1,
    top:"170",
})
// S1 End



// Screen 3
const tl3 = gsap.timeline({
    duration: 6,
    smooth: 4,
    scrollTrigger: {
        trigger: ".trigger-tv3",
        toggleActions: "restart pause resume pause",
        start: "top 100%",
        end: "+=1%",
        scrub: true,
    }
});
tl3.to(".hs3", {duration:6,opacity:1})
// Screen 3 end


// S4
const s2 = gsap.timeline({
duration: 3,
scrollTrigger: {
    trigger: ".hs3",
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
.to(".hs4_t15", { top: "30vh",  opacity: "1"})
.to(".hs4-cont", {  opacity: "1"})
.to(".hs2 .container", {opacity:0})


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
.to(".hs4insec_s1_owl img", {left: "-350px",delay:0.5})

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
    
// Simplified End
// S4 end

// S5

const hs5_2 = gsap.timeline({
duration: 6,
scrollTrigger: {
trigger: ".hs5_trigger2",
toggleActions: "restart pause resume pause",
start: "top 90%",
end: "+=1%",
scrub: true,
}
});

hs5_2.to(".hs5", {  opacity: "1"})
.to(".hs5-cont", {  visibility: "visible"  })
.to(".ctvlogo5s1_sm", {opacity: "1" , left: "0", top: "0", borderRadius: 0, width: "auto", height: "auto"  })
.to(".ctvlogo5s1_sm img", {left: 0, top: 0, transform: "scale(1)"})
// S5 end


// S6

const hs6_1m = gsap.timeline({
duration: 6,
scrollTrigger: {
trigger: ".hs6",
toggleActions: "restart none none none",
start: "top 70%",
end: "+=1%",
scrub: true,
}
});
hs6_1m.to(".hs6", {opacity: "1",})
.to(".hs6-cont", {top: "120px"})
.to(".hs6-cont, .tvhs3-dev2-cover-hs6", {opacity: 1,})
.to(".tvhs3-dev2-cover-hs6", {top: "160px",})

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
start: "top 90%",
end: "+=10%",
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
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "+=1%",
        scrub: true,
    }
    });

    hs7_1.to(".hs7_in", {visibility:"visible"})
   

// S7 End

 
// S8

const hs8_3 = gsap.timeline({
duration: 0,
scrollTrigger: {
trigger: ".hs8-trigger",
toggleActions: "play none play none",
start: "top 80%",
end: "+=0%",
}
});
hs8_3
.to(".hs8 ", {background:"#fff"})
.to(".hs8-cont ", {top:"10px", opacity: "1", lineHeight:"31px"})
.to(".callremot_hs8", {bottom:"0vh", visibility:"visible"})
.to(".mic_hs8", {bottom:"170px", })
.to(".mic_hs8 ", {y:"400px", delay: 1.5})
.to(".mic_text ", {opacity:1,  scale:"1", delay: 0.5})
.to(".mic_text ", {opacity:1,  scale:"1", delay: 0.5})
.to(".mic_text ", {opacity:0,y:"200px", })
.to(".callremot_hs8 ", {width:"123px",height:"140px",})
.to(".tvhs3-dev2-cover-hs8 ", {opacity:1,delay: 0.1})
// S8 End



// S9
const hs9_1 = gsap.timeline({
    duration: 2,
    scrollTrigger: {
    trigger: ".hs9",
    toggleActions: "restart none none none",
    start: "top 50%",
    end: "+=0%",
    scrub: true,
    }
    });
    hs9_1.to(".callremot_hs8",{opacity:0})
    
// S9 End
    
// S10
const hs10_1 = gsap.timeline({
duration: 2,
scrollTrigger: {
trigger: ".hs10",
toggleActions: "restart none none none",
start: "top 60%",
end: "+=0%",
scrub: true,
}
});
hs10_1.to(".pd_l2 ", {left:"-30vh"})


const hs10_2 = gsap.timeline({
duration: 2,
scrollTrigger: {
trigger: ".hs10",
toggleActions: "restart none none none",
start: "top 60%",
end: "+=0%",
scrub: true,
}
});
hs10_2.to(".pd_l3 ", {right:"-30vh"})


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
end: "+=1%",
scrub: true,
}
});
hs10_4.to(".hs9 ", {opacity:"1"})
.to(".pd_l1 ", {opacity:"1"})
.to(".pd_l2,.pd_l3 ", {opacity:"1", delay:1})
// S10 End
    



// Screen 11
const hs11_1 = gsap.timeline({
    duration: 6,
    scrollTrigger: {
        trigger: ".hs11",
        toggleActions: "restart none none none",
        start: "top 60%",
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
    duration: 6,
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
// Responsive JS End