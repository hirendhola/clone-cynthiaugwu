const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim(){
    let tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    tl.from(".bounding",{
        y: '100',
        duration:1.5,
        ease: Expo.easeInOut
    })
    tl.to(".bounding",{
        y: '0',
        duration:2,
        ease: Expo.easeInOut,
        stagger: .01
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove",function(data){
        document.querySelector("#circle").style.transform = `translate(${data.clientX}px ,${data.clientY}px)`;
    })
}
circleMouseFollower();
firstpageAnim();