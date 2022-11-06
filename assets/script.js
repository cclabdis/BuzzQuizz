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

let n_de_perguntas, n_de_niveis;
const request_criacao = {};

function infos_para_perguntas() {
    const elemento = document.querySelectorAll(".input-box");
    request_criacao['title'] = elemento[0].value;
    request_criacao['image'] = elemento[1].value;
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

    const elemento = document.querySelectorAll('.list-criacao-perguntas input');
    let re;
    let answers;
    const questions = [];

    for (let i = 0; i < n_de_perguntas; i++) {
        re = /[0-9A-Fa-f]{6}/g;
        test1 = elemento[10 * i].value.length >= 20;
        test2 = elemento[10 * i + 1].value[0] === '#';
        test3 = re.test(elemento[10 * i + 1].value);
        test4 = elemento[10 * i + 2].value !== '';
        test5 = elemento[10 * i + 3].value !== '';
        test6 = elemento[10 * i + 4].value !== '';
        test7 = elemento[10 * i + 5].value !== '';
        console.log(i, test1, test2, test3, test4, test5, test6, test7)
        if (!test1 || !test2 || !test3 || !test4 || !test5 || !test6 || !test7) {
            alert('Por favor, preencha corretamente!');
            break;
        }

    }
    for (let i = 0; i < n_de_perguntas; i++) {
        answers = [];
        answers.push({
            'text': elemento[10 * i + 2].value,
            'image': elemento[10 * i + 3].value,
            "isCorrectAnswer": true
        });
        answers.push({
            "text": elemento[10 * i + 4].value,
            "image": elemento[10 * i + 5].value,
            "isCorrectAnswer": false
        });
        if (elemento[10 * i + 6].value !== '') {
            answers.push({
                "text": elemento[10 * i + 6].value,
                "image": elemento[10 * i + 7].value,
                "isCorrectAnswer": false
            });
        };
        if (elemento[10 * i + 8].value !== '') {
            answers.push({
                "text": elemento[10 * i + 8].value,
                "image": elemento[10 * i + 9].value,
                "isCorrectAnswer": false
            });
        }
        questions.push({
            "title": elemento[10 * i].value,
            "color": elemento[10 * i + 1].value,
            "answers": answers
        })
    }
    request_criacao['questions'] = questions;
    const elemento2 = document.querySelector(".criacao-perguntas");
    const elemento3 = document.querySelector(".criacao-niveis");
    elemento2.classList.toggle("escondidos-pag-3")
    elemento3.classList.toggle("escondidos-pag-3")
    carregar_pag_3();



}

function niveis_para_final() {



    const elemento = document.querySelectorAll('.list-criacao-niveis input');
    let test1, test2, test3, test4;
    let igual_a_zero = false;
    const levels = [];

    for (let i = 0; i < n_de_niveis; i++) {
        test1 = elemento[4 * i].value.length >= 10;
        test2 = elemento[4 * i + 1].value <= 100;
        test3 = elemento[4 * i + 1].value >= 0;
        test4 = elemento[4 * i + 3].value.length >= 30;
        console.log(i, test1, test2, test3, test4)
        if (!test1 || !test2 || !test3 || !test4) {
            alert('Por favor, preencha corretamente!');
            break;
        }
        if (elemento[4 * i + 1].value === '0') {
            igual_a_zero = true;
        }
    }
    if (!igual_a_zero) {
        alert('Por favor, preencha corretamente!');
        return (0);
    }
    for (let i = 0; i < n_de_niveis; i++) {
        levels.push({
            "title": elemento[4 * i].value,
            "image": elemento[4 * i + 2].value,
            "text": elemento[4 * i + 3].value,
            "minValue": parseInt(elemento[4 * i + 1].value)

        })
    }
    request_criacao['levels'] = levels;
    promisse = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', request_criacao)

    const elemento2 = document.querySelector(".criacao-pagina-final");
    const elemento3 = document.querySelector(".criacao-niveis");
    elemento2.classList.toggle("escondidos-pag-3")
    elemento3.classList.toggle("escondidos-pag-3")
    carregar_pag_3();

}

function carregar_pag_2() {
    const elemento = document.querySelector(".criacao-perguntas .corpo-pag3");
    if (n_de_perguntas > 3) {

        for (let i = 4; i <= n_de_perguntas; i++) {
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
    }
    elemento.innerHTML += `
        <div class="div-do-butao">
                <button onclick="perguntas_para_niveis()">Prosseguir para criar níveis</button>
            </div>
        `
}

function carregar_pag_3() {
    const elemento = document.querySelector(".criacao-niveis .corpo-pag3");
    if (n_de_perguntas > 2) {

        for (let i = 3; i <= n_de_niveis; i++) {
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


    }
    elemento.innerHTML += `
        <div class="div-do-butao">
                <button onclick="niveis_para_final()">Finalizar quizz</button>
            </div>
        `
}

function mostrar_esconder(elemento) {
    elemento.parentElement.parentElement.childNodes[3].classList.toggle('escondidos-pag-3');
}