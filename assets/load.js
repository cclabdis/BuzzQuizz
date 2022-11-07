
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
    caixaTodosQuizzes.innerHTML+= `<li class="quizz" id="${quizz.id}" onclick="clicado(this)">
    <div class="bgListC"><img class="bgListC" src="${quizz.image}"/></div>
    <div class="testGradient"> <p class="titleListC">"${quizz.title}"</p> </div></li>`
    }
}
