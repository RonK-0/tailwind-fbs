// AOS init and set animations to occur only once
AOS.init({ once: true });

const burg = document.querySelector(".burger");
const nav = document.querySelector("nav");
const bodih = document.querySelector("body");
// nav burger toggle mobile
burg.addEventListener("click", ()=>{
    burg.classList.toggle("active");
    nav.classList.toggle("open");
    bodih.classList.toggle("open");
});
// auto close nav menu on click of any link for mobile
const menu_entry = document.querySelectorAll("#menu-item");
menu_entry.forEach((item) => {
    item.addEventListener("click", ()=>{
        burg.classList.remove("active");
        nav.classList.remove("open");
        bodih.classList.remove("open");
    });
});

// on scroll show back to top button
window.onscroll = function() { 
    var btt = document.querySelector('.backTop');
    var pageBanner = document.querySelector('.pageBanner');
    var bannerHeight = pageBanner.offsetHeight*0.025
    if ( window.scrollY > bannerHeight ) { btt.classList.add("shown"); }
    else { btt.classList.remove("shown"); }
}
// scroll to top function
function scrollToTop(){ window.scrollTo(0,0); }







    //PREVIOUS JS UNUSED FOR THIS PROJECT

// const links = document.querySelectorAll(".links__item h4");
// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.querySelector("i").classList.toggle("open");
//     link.nextElementSibling.classList.toggle("open");
//   });
// });

// const starNav = document.querySelectorAll(".coffee__nav__link");
// const starContent = document.querySelectorAll(".coffee__item");
// starNav.forEach((star) => {
//   star.addEventListener("click", () => {
//     starNav.forEach((star) => {
//         star.classList.remove("active");
//       });
//     star.classList.add("active");
//     const activeContent = document.querySelector(`#${star.id}-content`);
//     starContent.forEach((content) => {
//         content.classList.remove("active");
//       });
//     activeContent.classList.add("active");
//   });
// });

// window.onscroll = function() {
//     var navd = document.getElementById('navd');
//     var navm = document.getElementById('header');
//     if ( window.scrollY > 0 ) {
//         navd.classList.add("scroll");
//         navm.classList.add("scroll");
//     }
//     else {
//         navd.classList.remove("scroll");
//         navm.classList.remove("scroll");
//     }
// }

// const khards = document.querySelectorAll(".khards");
// khards.forEach((khard) => {
//     khard.addEventListener("click", ()=>{
//         khard.classList.toggle("down");
//     });
// });

// const faqMenu = document.querySelectorAll(".faq__menu li");
// const faqMenuContent = document.querySelectorAll(".faq__menu_content");
// faqMenu.forEach((menuList)=>{
//     menuList.addEventListener("click", ()=>{
//         faqMenu.forEach((menu)=>{
//             menu.classList.remove("active")
//         })
//         menuList.classList.add("active");
//         const activeContent = document.querySelector(`#${menuList.id}-content`);
//         faqMenuContent.forEach((content)=>{
//             content.classList.remove("active")
//         })
//         activeContent.classList.add("active")
//     })
// });