const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim(){
    let tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1,
        ease: Expo.easeInOut
    })
    tl.from(".bounding-1",{
        y: '100',
        opacity:0,
        duration:1,
        ease: Expo.easeInOut
    })
    tl.to(".bounding-1",{
        y: '0',
        duration:1,
        opacity:1,
        ease: Expo.easeInOut,
    })
    tl.from(".bounding-2",{
        y: '100',
        opacity:0,
        duration:1,
        ease: Expo.easeInOut
    })
    tl.to(".bounding-1",{
        y: '0',
        duration:1,
        opacity:1,
        ease: Expo.easeInOut,
    })
     .from(".mainpage_footer",{
        
     })
}

function circleMouseFollower(){
    window.addEventListener("mousemove",function(data){
        document.querySelector("#circle").style.transform = `translate(${data.clientX}px ,${data.clientY}px)`;
    })
}
circleMouseFollower();
firstpageAnim();