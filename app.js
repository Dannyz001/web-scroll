// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const date = document.getElementById('date')


date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')
const scrollLinks = document.querySelectorAll('.scroll-link')

navToggle.addEventListener('click', function(){
   const containerHeight= linksContainer.getBoundingClientRect().height;
   const linksHeight= links.getBoundingClientRect().height;
   if(containerHeight===0){
    linksContainer.style.height = `${linksHeight}px`
   }
   else{
    linksContainer.style.height = 0
   }
   
   
})

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height
    
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
    }
    else{
     navBar.classList.remove('fixed-nav')   
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id)
       const naviHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - naviHeight;
        if(!fixedNav){
            position = position- naviHeight;
            
        }
        if(naviHeight > 82){
            position = position + containerHeight
        }
            window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0
    })
})