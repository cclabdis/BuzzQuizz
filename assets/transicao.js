function carregaTela3(){

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    page1.classList.add('escondido')
    page2.classList.add('escondido')
    page3.classList.remove('escondido')
}

function baitclicado(elemento){

    BuscarQuizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${elemento.id}`)


    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    page1.classList.add('escondido')
    page2.classList.remove('escondido')
    page3.classList.add('escondido')

    BuscarQuizz.then(quizzTemplate)
}