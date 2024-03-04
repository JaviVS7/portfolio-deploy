export default function contactFormValidation() {
    const $form = document.querySelector(".contact__form"),
        $inputs = document.querySelectorAll(".form__input[required]")

        
        $inputs.forEach(element => {
            const $span = document.createElement("span");                
            $span.id = element.name;
            $span.textContent = element.title;
            $span.classList.add("formErr", "none");
            element.insertAdjacentElement("afterend", $span);            
        });

        document.addEventListener("keyup", (e)=>{
            if(e.target.matches(".form__input[required]")){
                let pattern = e.target.pattern || e.target.dataset.pattern;
                // console.log(e.target, pattern);
                if(pattern && e.target.value!=="") {
                    let regexObj = new RegExp(pattern);    
                     
                    return !regexObj.exec(e.target.value)
                        ? document.getElementById(e.target.name).classList.add("is-active")                                             
                        : document.getElementById(e.target.name).classList.remove("is-active");                    
                }
            }

        });

}