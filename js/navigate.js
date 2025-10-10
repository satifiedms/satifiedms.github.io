let currentUrl  = window.location.href;
if(currentUrl.slice(-1) === '/'){
  currentUrl = currentUrl.slice(0, -1); 
}

let navLink = document.querySelectorAll('.nav-bar a');
navLink.forEach(function(link) {
  let navUrl = link.href;
  if(navUrl.slice(-1) === '/'){
    navUrl = navUrl.slice(0, -1);
  }
  if(navUrl === currentUrl ){
   link.classList.add('active'); 
  }
});

let openClose = document.querySelector('.nav-toggle');
let header = document.querySelector('header');  
let navBar = document.querySelector('.nav-bar');
openClose.addEventListener('click', function() {
  openClose.classList.toggle('active'); 
  header.classList.toggle('active');
  navBar.classList.toggle('open');
})