let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark')
    
    if (checked==true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun">';
        label_toggle.style.color="gold";
        document.querySelector('.caja-indice').classList.add('dark');
        document.querySelector('.caja-de-texto').classList.add('dark');
        document.querySelector('header').classList.add('dark_header');
        document.querySelector('main').classList.add('dark_main');
        document.querySelector('footer').classList.add('dark_footer');
        //cambia el color del link
        const enlaces = document.querySelectorAll('.indice_link');
        enlaces.forEach((enlace) => {
        enlace.classList.add('dark_link');
        });

    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon">';
        label_toggle.style.color="violet";
        document.querySelector('.caja-indice').classList.remove('dark');
        document.querySelector('.caja-de-texto').classList.remove('dark');
        document.querySelector('header').classList.remove('dark_header');
        document.querySelector('main').classList.remove('dark_main');
        document.querySelector('footer').classList.remove('dark_footer');
        //cambia el color del link
        const enlaces = document.querySelectorAll('.indice_link');
        enlaces.forEach((enlace) => {
        enlace.classList.remove('dark_link'); 
        });

    }
})


// let toggle=document.getElementsByClassName('toggle');
// let label_toggle=document.getElementsByClassName('label_toggle');
// toggle.addEventListener('change',(event)=>{
//     let checked=event.target.checked;
//     document.body.classList.toggle('dark')
    
//     if (checked==true){
//         label_toggle.innerHTML='<i class="fa-solid fa-sun">';
//         label_toggle.style.color="gold";
//         document.querySelector('.caja-indice').classList.add('dark');
//         document.querySelector('.caja-de-texto').classList.add('dark');
//         document.querySelector('header').classList.add('dark_header');
//         document.querySelector('main').classList.add('dark_main');
//         document.querySelector('footer').classList.add('dark_footer');
//         //cambia el color del link
//         const enlaces = document.querySelectorAll('.indice_link');
//         enlaces.forEach((enlace) => {
//         enlace.classList.add('dark_link');
//         });

//     }else{
//         label_toggle.innerHTML='<i class="fa-solid fa-moon">';
//         label_toggle.style.color="violet";
//         document.querySelector('.caja-indice').classList.remove('dark');
//         document.querySelector('.caja-de-texto').classList.remove('dark');
//         document.querySelector('header').classList.remove('dark_header');
//         document.querySelector('main').classList.remove('dark_main');
//         document.querySelector('footer').classList.remove('dark_footer');
//         //cambia el color del link
//         const enlaces = document.querySelectorAll('.indice_link');
//         enlaces.forEach((enlace) => {
//         enlace.classList.remove('dark_link'); 
//         });

//     }
// })

