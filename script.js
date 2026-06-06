const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");

var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 0;

var bgMusic = new Audio('shape_of_my_heart.mp3');
bgMusic.loop = true;

startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input== ""){
        gifLanding.src = "https://media.giphy.com/media/VB3cK9oA48BbQWcObd/giphy.gif";
        questionLanding.innerHTML = "kasi tau nama kamu dulu sayang"
    }
    else{
        bgMusic.play().catch(error => console.log("Gagal memutar audio:", error));

        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Do You Love Me?</title>"+
        "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML =
          "<div class='wrapper'><h2 class='question'> halloww " +
          input +
          "  aku maw tanya sesuatu 🫣 </h2>" +
          "<h3 style='color:#e94d58; margin-bottom:15px'>kamu sayang aku tidaaaa.....</h3>" +
          "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>" +
          "<div class='btn-group'><button class='yes-btn'>iya sayang</button>" +
          "<button class='no-btn'>engga 🥲</button></div></div>";

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener(){
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Yay! makaci yaa for loving me ❤️, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "https://media.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif";
}

function noButtonListener(){
    const subQuestion = document.querySelector("h3");
    if (subQuestion) {
        subQuestion.style.display = "none";
    }
    if (count < 5) {
        gifMain.src ="https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
        questionMain.innerHTML = "kamu ga suka akuuu?";
    }
    else if (count >= 5 && count < 10){
        gifMain.src ="https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif";
        questionMain.innerHTML = "ayolahhh jawab yang bener , kamu suka aku atau ga?!";
    }
    else{
        gifMain.src ="https://media.giphy.com/media/8OPf6xrtXi3QEcu5h9/giphy.gif";
        questionMain.innerHTML = "jawab aja oyy, kamu suka aku ga 🥹?!";
    }
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count = count+1;
}