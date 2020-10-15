const tabs = [...document.querySelectorAll('.tabs')];
const tabs2 = [...document.querySelectorAll('.tabs2')];
const container = document.querySelector('#container');
const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('#menu');
const back = document.querySelector('.back');
const sections = [...document.querySelectorAll('.section')];


tabs.forEach(tab => {
    tab.addEventListener('click', e =>{
        tabs.forEach(tab => {
            tab.classList.remove('pressed-tab')
        });
        e.target.classList.add('pressed-tab');
        sections.forEach( section =>{
            if(section.dataset.id === e.currentTarget.dataset.id){
                sections.forEach( section =>{
                    section.classList.remove('current');
                })
                section.classList.add('current');
            }
        })
        // tab2
    })
})

btnMenu.addEventListener('click', ()=>{
    container.classList.toggle('hide-container');
    menu.classList.add('show-menu');
    menu.classList.remove('hide-menu');
})

back.addEventListener('click', () =>{
    container.classList.toggle('hide-container');
    menu.classList.remove('show-menu');
    menu.classList.add('hide-menu');
})

