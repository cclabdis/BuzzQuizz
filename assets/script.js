let quizzElement;
let answerSelected = [];



function clickAnswer(choice){
   //adicionar a opacidade na opção selecionada
   choice.classList.add('noopacity');

   answerSelected.push(choice);
   console.log (answerSelected);

   for(let i = 0; i < answerSelected.length ; i++){
    if(answerSelected[0].children[0] !== this){
        choice.classList.add('opacity');
    }
   }
   
   
   //if(answerSelected[0].classList[0] == ('option2')){
    //choice.querySelector('.option1').classList.add('opacity');
};

function getQuizzes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then(quizzTemplate);
}
getQuizzes();

//função resposável por embaralhar as respostas
function quizzRandomAnswers() {
    return (Math.random()-0.5);
};


function quizzTemplate(response){

    const quizz = response.data;
    console.log(quizz);  

    const template = document.querySelector('main');
    console.log(template);

    for(let i = 0; i < quizz.length; i++){

        quizzElement = quizz[i];
        
        let layoutTemplate = `
            <nav class="quizz-main">
                <img class="img-title" src=${quizzElement.image}>
                <p class="quizz-title">${quizzElement.title}</p>
            </nav>
    
            <section class="questions">
        
                <div class="question-quizz">
                    <p class="question-title" style="background-color: ${quizzElement.questions[0].color};">
                        ${quizzElement.questions[0].title}
                    </p>
                    
                    <div class="question-answer">
                        <div class="option1" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[0].answers[0].image}" >
                            <p class="text-answer">${quizzElement.questions[0].answers[0].text}</p>
                        </div>
                        <div class="option2" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[0].answers[1].image}" >
                            <p class="text-answer">${quizzElement.questions[0].answers[1].text}</p>
                        </div>
                        
                    </div>
                </div>              

                <div class="question-quizz">
                    <p class="question-title" style="background-color: ${quizzElement.questions[1].color};">
                        ${quizzElement.questions[1].title}
                    </p>
                    
                    <div class="question-answer">
                        <div class="option1" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[1].answers[0].image}" >
                            <p class="text-answer">${quizzElement.questions[1].answers[0].text}</p>
                        </div>
                        <div class="option2" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[1].answers[1].image}" >
                            <p class="text-answer">${quizzElement.questions[1].answers[1].text}</p>
                        </div>
                        
                    </div>
                </div>   

                <div class="question-quizz">
                    <p class="question-title" style="background-color: ${quizzElement.questions[2].color};">
                        ${quizzElement.questions[2].title}
                    </p>
                    
                    <div class="question-answer">
                        <div class="option1" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[2].answers[0].image}" >
                            <p class="text-answer">${quizzElement.questions[2].answers[0].text}</p>
                        </div>
                        <div class="option2" onclick="clickAnswer(this)">
                            <img class="img-question" src="${quizzElement.questions[2].answers[1].image}" >
                            <p class="text-answer">${quizzElement.questions[2].answers[1].text}</p>
                        </div>
                        
                    </div>
                </div>   

            </section>    
        `;
    
        template.innerHTML += layoutTemplate;
        console.log(layoutTemplate);
    };

    //gerar respostas das respectivas perguntas embaralhadas
    for(let i = 0; i < quizzElement.questions.length; i++){
        quizzElement.questions[i].answers.sort(quizzRandomAnswers);
    };

};


//lógica para renderizar a tela com os resultados do quizz;
//preciso criar uma constante para guardar o score do quizz e fazer essa comparação com os minValue
/*if(quizzElement.levels.minValue < 33){
    layoutResultsTemplate = `
        <section class="results">
            <div class="results-box">
                <div class="results-title">
                    <p class="quizz-result-title">${quizzElement.levels[0].title}</p>
                </div>
                <div class="results-score">
                    <img class="img-result" src="${quizzElement.levels[0].image}">
                    <p class="text-result">${quizzElement.levels[0].text}</p>
                </div>
            </div>
        </section>
    `;

} if (quizzElement.levels.minValue < 66){
    layoutResultsTemplate = `
        <section class="results">
            <div class="results-box">
                <div class="results-title">
                    <p class="quizz-result-title">${quizzElement.levels[1].title}</p>
                </div>
                <div class="results-score">
                    <img class="img-result" src="${quizzElement.levels[1].image}">
                    <p class="text-result">${quizzElement.levels[1].text}</p>
                </div>
            </div>
        </section>
    `;
} if(quizzElement.levels.minValue > 66){
    layoutResultsTemplate = `
        <section class="results">
            <div class="results-box">
                <div class="results-title">
                    <p class="quizz-result-title">${quizzElement.levels[2].title}</p>
                </div>
                <div class="results-score">
                    <img class="img-result" src="${quizzElement.levels[2].image}">
                    <p class="text-result">${quizzElement.levels[2].text}</p>
                </div>
            </div>
        </section>
    `;
}*/