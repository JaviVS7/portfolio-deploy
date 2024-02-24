const $aside = document.querySelector('#menu');
const $burger_btn = document.querySelector('.fa-bars');

export default function toggleMenu(btn) {
    const $menu_btn = document.querySelector(btn);
    
    $menu_btn.addEventListener('click', ()=>{
        $aside.classList.toggle("open");
        if ($aside.classList.contains("open"))
            $burger_btn.classList.replace("fa-bars", "fa-xmark");
        else
            $burger_btn.classList.replace("fa-xmark","fa-bars");
    })



}

