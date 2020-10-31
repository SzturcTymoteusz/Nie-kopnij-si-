const code = {
    "book":`
    <section class="section">
            <header id="header">
                <div class="menu-container">
                    <span class="menu-span">Menu</span>
                </div>
                <section id="title">
                    <img src="./img/Baner.svg" alt="Nie kopnij się w palec"/>
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
                        <div class="main-img">
                            <img srcset="./img/image1.svg 692w, ./img/image1_sm.svg 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/image1.svg"
                            alt="image1"/>
                        </div>
                        <div class="first-circle">
                            <img srcset="./img/Circle1.png 692w, ./img/circle1_sm.png 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/Circle1.png"
                            alt="circle1"/>
                        </div>
                        <div class="second-circle">
                            <img srcset="./img/Circle2.png 692w, ./img/circle2_sm.png 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/Circle2.png"
                            alt="circle2"/>
                        </div>
                        <div class="ladybug1">
                            <img src="./img/LadyBug1.png" alt="ladybug1">
                        </div>
                        <div class="paramecium">
                            <img srcset="./img/Paramecium.png 692w, ./img/Paramecium_sm.png 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/Paramecium.png"
                            alt="paramecium"/>
                        </div>
                        <div class="ladybug2">
                            <img srcset="./img/LadyBug2.png 692w, ./img/LadyBug2_sm.png 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/LadyBug2.png"
                            alt="ladybug2"/>
                        </div>
                        <div class="redCircle">
                            <img srcset="./img/RedCircle.png 692w, ./img/RedCircle_sm.png 414w"
                            sizes="(max-width: 1121px) 414px, 692px"
                            src="./img/RedCircle.png"
                            alt="redCirlce"/>
                        </div>
                    </div>
                </article>
            </section>
        </section>
        <section class="menu" >
            <div class="content">
                <nav>
                    <div class="back-container"><span class="back">Wróć</span></div>
                    <div class="menu-title">
                        // <img src="./img/Baner2.svg" alt="Nie kopnij się w palec">
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
                <span class="menu-span">Menu</span>
            </div>
            <section id="title">
                <img src="./img/Baner.svg" alt="Nie kopnij się w palec">
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
                    Nazywam się Joachim i cieszę się, że tu jesteś. Wydałem <strong>Nie kopnij się w palec</strong>, bo uważam, że osobiste poznanie Boga przez Pana Jezusa jest najlepszym co Cię może spotkać!
                    <br/><br/>
                    Chcesz dowiedzieć się więcej, masz pytania do książki, albo po prostu chcesz pogadać? Napisz na <strong>kubieniec92@gmail.com</strong>.
                </p>
                <article class="images-wraper">
                    <div class="circleBig">
                        <img src="./img/Circle1.png" alt="circle1">
                    </div>
                    <div class="circleSmall">
                        <img src="./img/Circle2.png" alt="circle1">
                    </div>
                    <div class="ladybug-1">
                        <img src="./img/LadyBug1.png" alt="ladybug-1">
                    </div>
                    <div class="ladybug-2">
                        <img src="./img/LadyBug2.png" alt="ladybug-2">
                    </div>
                    <div class="paramecium-contact">
                        <img src="./img/Paramecium.png" alt="Paramecium">
                    </div>
                    <div class="red-circle-contact">
                        <img src="./img/RedCircle.png" alt="RedCircle">
                    </div>
                </article>
            </article>
        </section>
    </section>

    <section class="menu" >
        <div class="content">
            <nav>
                <div class="back-container"><span class="back">Wróć</span></div>
                <div class="menu-title">
                    <img src="./img/Baner2.svg" alt="Nie kopnij się w palec">
                </div>
            </nav>
            <section>
                <ul class="list-unstyled">
                    <li><span class="book" >Książka</span></li>
                    <li><span class="pressed-tab contact">Kontakt</span></li>
                </ul>
            </section>
        </div>
    </section>
    `
}
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

    if(e.target.parentElement.classList.contains('download') || e.target.classList.contains('download')){
        fetch('./NieKopnijSie.pdf')
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
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