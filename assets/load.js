
let listaTodosQuizzes=[];

const quizzesPromise= axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
quizzesPromise.then(quizzes)

function quizzes(LISTAGEM){
    listaTodosQuizzes = LISTAGEM.data
    renderQuizzes()
}
function renderQuizzes(){
    caixaTodosQuizzes= document.querySelector(".allQuizzes")
    caixaTodosQuizzes.innerHTML=""
    for (let i=0; i<listaTodosQuizzes.length;i++){
    let quizz = listaTodosQuizzes[i] 
    caixaTodosQuizzes.innerHTML+= `<li class="quizz" id="${quizz.id}" onclick="baitclicado(this)">
    <div class="bgListC"><img class="bgListC" src="${quizz.image}"/></div>
    <div class="testGradient"> <p class="titleListC">"${quizz.title}"</p> </div></li>`
    }
}

function restartQuizz(){
    abrirQuiz(quizz-executando)
    fimQuizz = 0;
    acertos = 0;
    let fbqz = document.querySelector(".results")
    fbqz.classList.add("escondido")
}

function backHome() {
    console.log('voltar tela');
    window.location.reload()
}