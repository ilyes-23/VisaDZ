//sticky navbar
window.addEventListener("scroll", function()
{
    var header = this.document.querySelector(".navigation-bars");
    header.classList.toggle("sticky", window.scrollY > 0);
    
})

//sticky navbar

//scroll to top
var scrollTop = document.querySelector('.scrolltop')
window.onscroll = function(){
    'use strict';
   if(window.pageYOffset >= 600){
    scrollTop.style.display ='block'

   }else
   scrollTop.style.display = 'none'
};


scrollTop.onclick = function () {
    'use strict';
    window.scrollTo(0, 0);

};

//scroll to top

// loader window 
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader-bg");
    loader.className += " hidden"; // class "loader-bg hidden"
});

// loader window 