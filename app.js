const intro = document.querySelector('.intro');
const video = intro .querySelector('video');
const text = intro.querySelector('h1');

//End Section
const section = document.querySelector('section');
const end = section.querySelector('h1');

// Scroll Magic

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({

    duration: 8000,
    triggerElement: intro,
    triggerHook: 0
})  .addIndicators()
    .setPin(intro)
    .addTo(controller);


//Text animation

const textAnim = TweenMax.fromTo(text, 3, {opacity: 1}, {opacity: 0});
    let scene2 = new ScrollMagic.Scene({
        duration:8000,
        triggerElement:intro,
        triggerHook:0
    }).setTween(textAnim)
    .addTo(controller);



// new ScrollMagic.Scene()
//         .addIndicators()
//         .setPin(intro)
//         .addTo(controller);

// // create a scene with custom options and assign a handler to it.
// var scene = new ScrollMagic.Scene({
//         duration: 1000,
//         offset: 200,
//         triggerHook: "onCenter",
//         reverse: false
// });

//Video Animation 

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e=>
{
    scrollpos = e.scrollPos / 1000;
    // console.log(e);
    
});

setInterval(() => {
    delay += (scrollpos-delay)*accelamount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
    
},100);