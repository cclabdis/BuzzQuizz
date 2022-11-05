function clickAnswer(){
alert('clicada');

};

function getQuizzes(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1');
    promise.then(quizzTemplate);
}


function quizzTemplate(response){

    console.log(response);
    const quizz = response.data;
    

    const template = document.querySelector('main');

    //template.innerHTML = '';

    for(let i = 0; i < quizz.length; i++){

        let quizzElement = quizz[i];

        layoutTemplate = `
        <nav class="quizz-main">
            <img class="img-title" src=${quizzElement.image}>
            <p class="quizz-title">${quizzElement.title}</p>
        </nav>

        <section class="questions">

            <div class="question-quizz">
                <p class="question-title">
                 ${quizzElement.questions.title}
                </p>
                
                <div class="question-answer">
                    <div class="option1" onclick="clickAnswer(this)">
                        <img class="img-question" src="${quizzElement.questions.answers.image}" >
                        <p class="text-answer">${quizzElement.questions.text}</p>
                    </div>
                    <div class="option2" onclick="clickAnswer(this)">
                        <img class="img-question" src="${quizzElement.questions.answers.image}" >
                        <p class="text-answer">${quizzElement.questions.text}</p>
                    </div>
                    <div class="option3" onclick="clickAnswer(this)">
                        <img class="img-question" src="${quizzElement.questions.answers.image}" >
                        <p class="text-answer">${quizzElement.questions.text}</p>
                    </div>
                    <div class="option4" onclick="clickAnswer(this)">
                        <img class="img-question" src="${quizzElement.questions.answers.image}" >
                        <p class="text-answer">${quizzElement.questions.text}</p>
                    </div>
                </div>
            </div>
        </section>  

        `;

        template.innerHTML += layoutTemplate;
    }

    
}

function renderQuizzes(answer) {
	const quizzList1 = answer.data;

	console.log(quizzList1);

	const quizzSpace = document.querySelector(".quizzList");
	quizzSpace.innerHTML = "";

	for (let i = 0; i < quizzList1.length; i++) {
		let quizz = quizzList1[i];
		quizzSpace.innerHTML += `
            <div class="quizz-item" onclick="showQuizPage(this)">
                <div class="image-bkg">
                    <p id="quizz-title">
                        ${quizz.title}
                    </p>
                </div>
            </div>
        `;
		const lastQuizz = quizzSpace.lastElementChild;
		lastQuizz.id = quizz.id;
		lastQuizz.style.backgroundImage = `url(${quizz.image})`;
	}
}