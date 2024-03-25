// AOS init and set animations to occur only once
AOS.init({
    once: true
});

// const burg = document.querySelector(".burger");
// const nav = document.querySelector("nav");
// const bodih = document.querySelector("body");
// burg.addEventListener("click", ()=>{
//     burg.classList.toggle("active");
//     nav.classList.toggle("open");
//     bodih.classList.toggle("open");
// });


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