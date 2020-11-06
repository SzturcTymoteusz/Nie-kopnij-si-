const code = {
    "book":`
    <section class="section">
        <header id="header">
            <div class="menu-container">
                <span class="menu-span"><i class="fas fa-bars"></i></span>
            </div>
            <section id="title">
                <img src="./img/Logo.svg" alt="Nie kopnij się w palec"/>
            </section>
            <nav id="nav">
                <ul class="list-unstyled">
                    <li><span class="pressed-tab book">Książka</span></li>
                    <li><span class="contact">Kontakt</span></li>
                </ul>
            </nav>
        </header>
        <section class="section-book">
            <article class="text">
                <div class="text-wraper">
                    <p class="text-title">Jakie masz plany po emeryturze?</p>
                    <p class="text-content">Książka o Bogu i o nas.<br> Przeczytaj zanim kopniesz <br>w kalendarz!</p>
                    <button class="btn download" type="button"><span>pobierz pdf</span></button>
                </div>
            </article>
            <article class="images">
                <div class="img-wraper">
                    <img src="./img/mainImg.png" alt="mainImg" class="main-img"/>
                    <img class="first-circle" src="./img/Circle1.png" alt="circle1"/>
                    <img class="second-circle" src="./img/Circle2.png" alt="circle2"/>
                    <img class="ladybug1" src="./img/LadyBug1.png" alt="ladybug1">
                    <img class="paramecium" src="./img/Paramecium.png" alt="paramecium"/>
                    <img class="ladybug2" src="./img/LadyBug2.png" alt="ladybug2"/>
                    <img class="redCircle" src="./img/RedCircle.png" alt="redCirlce"/>
                </div>
            </article>
        </section>
    </section>
    <section class="menu" >
        <div class="content">
            <nav>
                <div class="back-container"><span class="back"><i class="fas fa-times"></i></span></div>
                <div class="menu-title">
                    <img src="./img/Logo-menu.svg" alt="Nie kopnij się w palec">
                </div>
            </nav>
            <section>
                <ul class="list-unstyled">
                    <li><span class="pressed-tab book" >Książka</span></li>
                    <li><span class="contact" >Kontakt</span></li>
                </ul>
            </section>
        </div>
    </section>`,
    "contact":`
    <section class="section">
            <header id="header">
                <div class="menu-container">
                    <span class="menu-span"><i class="fas fa-bars"></i></span>
                </div>
                <section id="title">
                    <img src="./img/Logo.svg" alt="Nie kopnij się w palec"/>
                </section>
                <nav id="nav">
                    <ul class="list-unstyled">
                        <li><span class="book">Książka</span></li>
                        <li><span class="pressed-tab contact">Kontakt</span></li>
                    </ul>
                </nav>
            </header>
            <section class="section-contact">
                <article class="text-box">
                    <p class="title">
                        Kontakt
                    </p>
                    <p class="content">
                        Nazywam się Joachim i cieszę się, że tu jesteś. Wydałem <br/><strong>Nie kopnij się w palec</strong>, bo uważam, że osobiste poznanie Boga przez Pana Jezusa jest najlepszym co Cię może spotkać!
                        <br/><br/>
                        Chcesz dowiedzieć się więcej, masz pytania do książki, albo po prostu chcesz pogadać? Napisz na <strong>kubieniec92@gmail.com</strong>.
                    </p>
                    <article class="images-wraper">
                        <img src="./img/Circle1.png" alt="circle1" class="circleBig">
                        <img src="./img/Circle2.png" alt="circle1" class="circleSmall">
                        <img src="./img/LadyBug1.png" alt="ladybug-1" class="ladybug-1">
                        <img src="./img/LadyBug2.png" alt="ladybug-2" class="ladybug-2">
                        <img src="./img/Paramecium.png" alt="Paramecium" class="paramecium-contact">
                        <img src="./img/RedCircle.png" alt="RedCircle" class="red-circle-contact">
                    </article>
                </article>
            </section>
        </section>

        <section class="menu" >
            <div class="content">
                <nav>
                    <div class="back-container"><span class="back"><i class="fas fa-times"></i></span></div>
                    <div class="menu-title">
                        <img src="./img/Logo-menu.svg" alt="Nie kopnij się w palec">
                    </div>
                </nav>
                <section>
                    <ul class="list-unstyled">
                        <li><span class="book" >Książka</span></li>
                        <li><span class="pressed-tab contact" >Kontakt</span></li>
                    </ul>
                </section>
            </div>
        </section>
    `
}
const container = document.querySelector('.container');

window.addEventListener('DOMContentLoaded', () => {
    container.innerHTML = code.book;
    changeLogo();
})

container.addEventListener('click', (e)=>{
    const menu = document.querySelector('.menu');
    if(e.target.parentElement.classList.contains('menu-span')){
        menu.classList.toggle('menu-display');
        container.classList.toggle('container-menu');
    };
    if(e.target.parentElement.classList.contains('back')){
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

    if(e.target.parentElement.classList.contains('download') || e.target.classList.contains('download')){
        // fetch('./NieKopnijSie.pdf')
        // .then(resp => resp.blob())
        // .then(blob => {
        //     const url = window.URL.createObjectURL(blob);
        //     const a = document.createElement('a');
        //     a.style.display = 'none';
        //     a.href = url;
        //     a.download = './NieKopnijSie.pdf';
        //     document.body.appendChild(a);
        //     a.click();
        //     window.URL.revokeObjectURL(url);
        // })
        // .catch(() => alert('oh no! try again'));
        window.open('./NieKopnijSie.pdf', "NieKopnijSię");
    };
})


// change logo mobile picture
window.addEventListener('resize', ()=>{
    changeLogo();
});
const changeLogo = ()=>{
    const windowWidth = window.innerWidth;
    const imgTitle = document.querySelector('#title img');
    if(windowWidth < 700){
        imgTitle.src = "./img/Logo-menu.svg"
    }
    else{
        imgTitle.src = "./img/Logo.svg"
    }
}