// const serviceLink = document.querySelector("#menu-primary li:first-child a");
// serviceLink.removeAttribute('href');
// serviceLink.style.cursor = 'pointer';
 
 //WOW INIT
 new WOW().init();
 
	//SLIDE MENU IN MOBILE
    function classToggle() {
        var nav = document.querySelector('nav');
        nav.classList.toggle('toggle-open');
    }
    document.querySelector('.menu-toggle').addEventListener('click', classToggle);


    //SHOW BACK TO TOP
    var myScrollFunc = function() {
    var y = window.scrollY;
        if (y >= 20) {
            document.querySelector('.bck-top').style.display = 'block';
        } else {
            document.querySelector('.bck-top').style.display = 'none';
        }
    };

    window.addEventListener("scroll", myScrollFunc);


    //ICON ANIMATION
    function iconAnimate() {
        this.classList.toggle('open');
    }
    document.querySelector('#nav-icon3').addEventListener('click', iconAnimate);

    //ICON MODAL
const whoWeAre = document.querySelector('.whoWeAre');
const watch = document.querySelector('#watch');
const modal = document.querySelector("#youtube-modal")
const closeModal = document.querySelector("#youtube-modal")
const video = document.querySelector("#video");


if(watch) {
	watch.addEventListener('click', (e) => {
    e.preventDefault();
   modal.classList.add('openmodal'); 
   document.body.style.overflow = "hidden"; 
   document.body.style.height = "100vh"; 
})

}

if(closeModal) {
	closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    let whoPos = whoWeAre.getBoundingClientRect().top;
    modal.classList.remove('openmodal'); 
    document.body.style.overflow = "auto";
    document.body.style.height = "auto"; 
    window.scrollTo(0, whoPos - 80); 
	video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');

 })
 
}



//TESTIMONIAL SLIDER
if(document.querySelector('#slider')) {
	 var slider = tns({ 
        container: "#slider", 
        items: 1,
        nav: true,
        // slideBy: "page",
        autoplay: false, 
        controls: false, 
        autoplayButtonOutput: false, 
        mouseDrag: true
     });

    
}
	
    

//DIFER YOUTUBE
function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;

// LOAD API
const projectWrapper = document.querySelector('.project__wrapper');
let limit = 3
let page = 1

if(projectWrapper) {
	console.log(showProjects())	
}



async function getProjects () {
	const res = await fetch(`https://frontlinebusiness.com.ph/wp-json/wp/v2/project?_embed`);
	const data = await res.json()
	return data;
}

async function showProjects() {
	const data = await getProjects();
	let html = '';
	
	data.forEach((el) => {
			html += `
					 <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<div class="portfolio-container mb--30">
						<img src='${el._embedded.featuredmedia.source_url}'>
					  <div class="overlay">
						<div class="text">
						  <a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							>asdasdas</a
						  >
						</div>
					  </div>
					</div>
				  </div>
				`

		});
	
	projectWrapper.innerHTML = html;
}


//LCSS SLIDER
if(document.querySelector('#lcss-slider')) {
  var slider = tns({
    container: '#lcss-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });

    
}

   
        const lcsSeeMore = document.querySelectorAll('.seeMore');
        lcsSeeMore.forEach((seeMore) => {
            seeMore.addEventListener("click", () =>{
                const service__title = document.querySelector(`#${seeMore.id}-content`);
                service__title.classList.toggle("active");
                seeMore.classList.toggle("changeText");
            });
        });
 