const tabs = [...document.querySelectorAll('.tabs')];
const tabs2 = [...document.querySelectorAll('.tabs2')];
const container = document.querySelector('#container');
const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('#menu');
const back = document.querySelector('.back');




tabs.forEach(tab => {
    tab.addEventListener('click', e =>{
        tabs.forEach(tab => {
            tab.classList.remove('pressed-tab')
        });
        e.target.classList.add('pressed-tab');
    })
})

btnMenu.addEventListener('click', ()=>{
    container.classList.add('hide-container');
    container.classList.remove('show-container');
    menu.classList.add('show-menu');
    menu.classList.remove('hide-menu');
})

back.addEventListener('click', () =>{
    container.classList.add('show-container');
    container.classList.remove('hide-container');
    menu.classList.remove('show-menu');
    menu.classList.add('hide-menu');
})
