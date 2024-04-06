

const vragen = ['vraag1', 'vraag2', 'vraag3', 'vraag4'];
const antwoorden = ['answer1', 'answer2', 'answer3', 'answer4'];
const plusmins = ['plusmin1', 'plusmin2', 'plusmin3', 'plusmin4']

let isClicked = false;

for(let i = 0; i < vragen.length; i++) {
    const vraag = document.querySelector(`.${vragen[i]}`);
    const antwoord = document.querySelector(`.${antwoorden[i]}`);
    const plusmin = document.querySelector(`.${plusmins[i]}`)


vraag.addEventListener('click', () => {
    if(!isClicked) {
    antwoord.style.display = "block";
    plusmin.src = "assets/images/icon-minus.svg"
    isClicked = true;
    } else {
        antwoord.style.display = "none";
        plusmin.src = "assets/images/icon-plus.svg" 
        isClicked = false;
    }
});

}



function adjustContainerSize(){
    const screenWidth = window.innerWidth;
    console.log(window.innerWidth);

    const article = document.querySelector('article');
const accordion = document.querySelector('.accordion');
    
    if (screenWidth < 400) {
        accordion.style.inlineSize = "19rem";
        article.style.inlineSize = "19rem";
    } else if (screenWidth > 400) {
        accordion.style.inlineSize = "32rem";
        article.style.inlineSize = "32rem";
    }
    }
    