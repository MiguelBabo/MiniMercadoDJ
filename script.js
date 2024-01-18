let w = window.innerWidth
let h = window.innerHeight

const btnMobile = document.getElementById('btnMobile')
const mobileOptions = document.getElementById('mobileOptions')
const showMobileMenu = document.getElementById('showMobileMenu')
const backToTopBtn = document.getElementById('backToTopBtn')

mobileOptions.style.display = 'none'
document.body.style.overflowX = 'hidden'


if(w <= 767){
    btnMobile.style.display = 'block'
}else{
    btnMobile.style.display = 'none'
    mobileOptions.style.display = 'none'
}

showMobileMenu.addEventListener('click', () => {
    if(mobileOptions.style.display === 'none'){
        mobileOptions.style.display = 'flex'
        document.getElementById('icon').src = 'assets/icons8-excluir.svg'
        // document.body.style.overflowY = 'hidden'

    }else{
        mobileOptions.style.display = 'none'
        document.getElementById('icon').src = 'assets/icons8-cardápio.svg'
        // document.body.style.overflowY = ''
    }
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTo(0, 0) // For Chrome, Firefox, IE and Opera
}

backToTopBtn.addEventListener('click', topFunction)

const promo1 = document.getElementById('promo1')
const promo1info = document.getElementById('promo1info')
const promo2 = document.getElementById('promo2')
const promo2info = document.getElementById('promo2info')


promo1.addEventListener('click', () => {
  if(promo1info.style.display == "none"){
    promo1info.style.display = 'flex'
  }else{
    promo1info.style.display = 'none'
  }
})

promo2.addEventListener('click', () => {
  if(promo2info.style.display == "none"){
    promo2info.style.display = 'flex'
  }else{
    promo2info.style.display = 'none'
  }
})