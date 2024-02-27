const $menubar = document.querySelector('#menu');
let lastScrollTop = 0;


export default function hideMenu() {

    window.addEventListener('scroll', ()=> {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop)
            $menubar.style.bottom = '-3rem';
        else 
            $menubar.style.bottom ='0rem';

        lastScrollTop = scrollTop;
    })
    
   


}

