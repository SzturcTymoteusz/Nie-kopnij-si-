const tabs = [...document.querySelectorAll('.tabs')];
const container = document.querySelector('#container');
const btnMenu = document.querySelector('.menu');
const menu = document.querySelector('#menu');
const back = document.querySelector('.back');
const sections = [...document.querySelectorAll('.section')];


tabs.forEach(tab => {
    tab.addEventListener('click', e =>{
        changeTab(e);
        changeSection(e);
        menu.classList.remove('show-menu');
    })
})

// after we click on a tab, underline current pressed tab
const changeTab = e =>{
    tabs.forEach(tab => {
        if(tab === e.target || e.target.dataset.id === tab.dataset.id){
           tab.classList.add('pressed-tab');
        }
        else{
            tab.classList.remove('pressed-tab');
        }
    });
}

//after we click on a tab, change current section
const changeSection = e=> {
    sections.forEach( section =>{
        if(section.dataset.id === e.currentTarget.dataset.id){
            sections.forEach( section =>{
                section.classList.remove('current');
            })
            section.classList.add('current');
        }
    })
}


// open menu, change size windows,
const changeSize = () => {
    window.onresize = () =>{
    const openMenu = menu.classList.contains('show-menu');
        if(openMenu && window.innerWidth >= 700){
            menu.classList.toggle('show-menu');
        }
    }
}

changeSize();


btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
})

back.addEventListener('click', () =>{
    menu.classList.toggle('show-menu');
})

