let w = window.innerWidth
let h = window.innerHeight

const btnMobile = document.getElementById('btnMobile')
const mobileOptions = document.getElementById('mobileOptions')
const showMobileMenu = document.getElementById('showMobileMenu')

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
        document.body.style.overflowY = 'hidden'

    }else{
        mobileOptions.style.display = 'none'
        document.getElementById('icon').src = 'assets/icons8-cardápio.svg'
        document.body.style.overflowY = ''
    }
})

