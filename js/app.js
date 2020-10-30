import code from './data.js';
const container = document.querySelector('.container');


window.addEventListener('DOMContentLoaded', () => {
    container.innerHTML = code.book;
})

container.addEventListener('click', (e)=>{
    const menu = document.querySelector('.menu');
    if(e.target.classList.contains('menu-span')){
        menu.classList.toggle('menu-display');
        container.classList.toggle('container-menu');
    };
    if(e.target.classList.contains('back')){
        menu.classList.toggle('menu-display');
        container.classList.toggle('container-menu');
    };
    if(e.target.classList.contains('book')){
        container.innerHTML = code.book;
        menu.classList.toggle('menu-display');
        container.classList.toggle('container-menu');
    };
    if(e.target.classList.contains('contact')){
        container.innerHTML = code.contact;
        menu.classList.toggle('menu-display');
        container.classList.toggle('container-menu');
    };

    if(e.target.parentElement.classList.contains('write') || e.target.classList.contains('write')){
        console.log('write');
    };
    if(e.target.parentElement.classList.contains('download') || e.target.classList.contains('download')){
        fetch('./NieKopnijSie.pdf')
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            //name file i want to download
            a.download = './NieKopnijSie.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('oh no! try again'));
    };
})


// change logo mobile picture
window.addEventListener('resize', ()=>{
    const windowWidth = window.innerWidth;
    const imgTitle = document.querySelector('#title img');
    if(windowWidth < 700){
        imgTitle.src = "./img/Baner5.svg"
    }
    else{
        imgTitle.src = "./img/Baner.svg"
    }
})