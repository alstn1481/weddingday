document.addEventListener("DOMContentLoaded", ()=>{

    const slide = document.getElementById("slide");

    const toLeft = () => {
        slide.style.transition = "left 2s";
        slide.style.left = "-100%";
        

        setTimeout(append, 2000);
    };
    const append = ()=> {
        slide.style.transition = "none";
        slide.append(slide.firstElementChild);
        slide.style.left = 0;
        
    };

    setInterval(toLeft, 2800);

    

    /************************************************ */

    const noti_gel_btn = document.querySelectorAll('#noti_gel h2 button');
    const notice_ul = document.querySelector("#notice ul");
    const gallery_div = document.querySelector("#gallery>div");
    const noti_gal = [notice_ul, gallery_div];
    const multi_event = ["click", "focus"];

    noti_gel_btn.forEach (i => {

        multi_event.forEach (ev => {

            i.addEventListener(ev, () => {

                const parent = i.parentElement;
                

                noti_gal.forEach (j => {
    
                    j.style.display = "none";
                    j.previousElementSibling.previousElementSibling.classList.remove("active");
                    
                });

                const remove = () => {
                    parent.classList.add("active");
                    parent.nextElementSibling.nextElementSibling.style.display = "block";
                };
                
                parent ? remove() : null;

            });
            
        });

    });


    /************************************************ */

    const noti_List = document.querySelectorAll("#notice ul li a");
    const popup = document.getElementById("popup");
    const popup_btn = document.querySelector("#popup button");



    noti_List.forEach(i => {

        i.addEventListener("click", () => {

            popup.style.display = "block";

        });

    });

    popup_btn.addEventListener("click", () => {

        popup.style.display = "none";

    });

});///////////////////////전체 끝