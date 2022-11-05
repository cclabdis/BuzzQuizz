function clickAnswer() {
    alert('clicada');

};

function getQuizzes() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1');
    promise.then(quizzTemplate);
}


function quizzTemplate(response) {

    console.log(response);
    const quizz = response.data;


    const template = document.querySelector('main');

    //template.innerHTML = '';

    for (let i = 0; i < quizz.length; i++) {

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

/*Parte Gustavo*/

let titulo_do_quizz, url_do_quizz, n_de_perguntas, n_de_niveis;

function infos_para_perguntas() {
    const elemento = document.querySelectorAll(".input-box");
    titulo_do_quizz = elemento[0].value;
    url_do_quizz = elemento[1].value;
    n_de_perguntas = elemento[2].value;
    n_de_niveis = elemento[3].value;


    if (titulo_do_quizz.length < 65 && titulo_do_quizz.length > 20 && n_de_niveis >= 2 && n_de_perguntas >= 3) {
        const elemento = document.querySelector(".criacao-perguntas");
        const elemento2 = document.querySelector(".criacao-info-base");
        elemento.classList.toggle("escondidos-pag-3")
        elemento2.classList.toggle("escondidos-pag-3")
        carregar_pag_2();


    } else {
        alert("Por favor, preencha os dados corretamente!")
    }


}

function perguntas_para_niveis() {

    const elemento = document.querySelector(".criacao-perguntas");
    const elemento2 = document.querySelector(".criacao-niveis");
    elemento.classList.toggle("escondidos-pag-3")
    elemento2.classList.toggle("escondidos-pag-3")
    carregar_pag_3();

    /*
    const elemento = document.querySelectorAll(".input-box");
    titulo_do_quizz = elemento[0].value;
    url_do_quizz = elemento[1].value;
    n_de_perguntas = elemento[2].value;
    n_de_niveis = elemento[3].value;

    if (titulo_do_quizz.length < 65 && titulo_do_quizz.length > 20 && n_de_niveis >= 2 && n_de_perguntas >= 3) {
        const elemento = document.querySelector(".criacao-perguntas");
        const elemento2 = document.querySelector(".criacao-info-base");
        elemento.classList.toggle("escondidos-pag-3")
        elemento2.classList.toggle("escondidos-pag-3")
        carregar_pag_2();


    } else {
        alert("Por favor, preencha os dados corretamente!")
    }
    */

}

function carregar_pag_2() {
    if (n_de_perguntas > 3) {
        const elemento = document.querySelector(".criacao-perguntas .corpo-pag3");
        for (let i = 4; i <= n_de_niveis; i++) {
            elemento.innerHTML += `
            <div class="list-criacao-perguntas">
            <div>
                <p>Pergunta ${i}</p>
                <ion-icon name="create-sharp" onclick="mostrar_esconder(this)"></ion-icon>
            </div>
            <ul class="escondidos-pag-3">
                <li><input type="text" placeholder="Texto da pergunta" class="input-box" /></li>
                <li><input type="text" placeholder="Cor de fundo da pergunta" class="input-box" /></li>
                <p>Resposta correta</p>
                <li><input type="text" placeholder="Resposta correta" class="input-box" /></li>
                <li><input type="url" placeholder="URL da imagem" class="input-box" /></li>
                <p>Respostas incorretas</p>
                <li><input type="text" placeholder="Resposta incorreta 1" class="input-box" /></li>
                <li><input type="url" placeholder="URL da imagem 1" class="input-box separacao" /></li>
                <li><input type="text" placeholder="Resposta incorreta 2" class="input-box" /></li>
                <li><input type="url" placeholder="URL da imagem 2" class="input-box separacao" /></li>
                <li><input type="text" placeholder="Resposta incorreta 3" class="input-box" /></li>
                <li><input type="url" placeholder="URL da imagem 3" class="input-box" /></li>
            </ul>
        </div>`
        }
        elemento.innerHTML += `
        <div class="div-do-butao">
                <button onclick="perguntas_para_niveis()">Prosseguir para criar níveis</button>
            </div>
        `

    }
}

function carregar_pag_3() {
    if (n_de_perguntas > 2) {
        const elemento = document.querySelector(".criacao-niveis .corpo-pag3");
        for (let i = 3; i <= n_de_perguntas; i++) {
            elemento.innerHTML += `
            <div class="list-criacao-niveis ">
                <div>
                    <p>Nível ${i}</p>
                    <ion-icon name="create-sharp" onclick="mostrar_esconder(this)"></ion-icon>
                </div>
                <ul class="escondidos-pag-3">
                    <li><input type="text" placeholder="Título do nível" class="input-box" /></li>
                    <li><input type="number" placeholder="% de acerto mínima" class="input-box" /></li>
                    <li><input type="url" placeholder="URL da imagem do nível" class="input-box" /></li>
                    <li><input type="text" placeholder="Descrição do nível" class="input-box" /></li>
                </ul>
            </div>`
        }
        elemento.innerHTML += `
        <div class="div-do-butao">
                <button>Finalizar quizz</button>
            </div>
        `

    }
}

function mostrar_esconder(elemento) {
    elemento.parentElement.parentElement.childNodes[3].classList.toggle('escondidos-pag-3');
}