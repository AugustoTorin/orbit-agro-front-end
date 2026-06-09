var imgs = [
    "./images/irrigacao.jpg",
    "./images/conectividade-no-campo.jpg",
    "./images/trator-tecnologico.webp"
];

var legendas = [
    "Irrigacao inteligente baseada em dados orbitais",
    "Conectividade via satelite no campo",
    "Tecnologia espacial aplicada ao agronegocio"
];

var slide = 0;

function trocarSlide(n) {
    slide = slide + n;
    if (slide < 0) slide = imgs.length - 1;
    if (slide >= imgs.length) slide = 0;
    document.getElementById("slide-img").src = imgs[slide];
    document.getElementById("slide-img").alt = legendas[slide];
    document.getElementById("slide-legenda").innerText = legendas[slide];
}

function proximoSlide() { trocarSlide(1); }
function slideAnterior() { trocarSlide(-1); }

setInterval(function(){ trocarSlide(1); }, 5000);

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

function enviarForm(e) {
    e.preventDefault();
    var nome = document.getElementById("form-nome").value;
    var email = document.getElementById("form-email").value;
    var msg = document.getElementById("form-mensagem").value;
    var ret = document.getElementById("form-retorno");

    if (nome == "" || email == "" || msg == "") {
        ret.innerText = "Preencha todos os campos antes de enviar.";
        ret.className = "form-retorno form-erro";
        return false;
    }

    if (!validarEmail(email)) {
        ret.innerText = "Informe um e-mail válido.";
        ret.className = "form-retorno form-erro";
        return false;
    }

    ret.innerText = "Mensagem enviada com sucesso, " + nome + "!";
    ret.className = "form-retorno form-sucesso";
    document.getElementById("form-contato").reset();
}


var perguntas = [
    ["Qual o tamanho projetado da economia espacial global ate 2030?",
        ["US$ 100 bilhoes", "US$ 500 bilhoes", "US$ 1 trilhao", "US$ 10 trilhoes"], 2],
    ["Quantos satelites ativos existem em orbita hoje?",
        ["Mais de 600", "Mais de 6.000", "Mais de 60.000", "Mais de 600.000"], 1],
    ["Quantas pessoas ainda nao tem acesso confiavel a internet?",
        ["100 milhoes", "1 bilhao", "4 bilhoes", "7 bilhoes"], 2],
    ["Qual sistema operacional roda no software de voo do Falcon 9?",
        ["Windows", "macOS", "Linux", "Sistema proprio"], 2],
    ["Quantos satelites o Starlink coordena em orbita baixa?",
        ["100", "1.000", "Mais de 6.000", "100.000"], 2],
    ["Qual destas APIs nao oferece dados espaciais abertos?",
        ["NASA", "ESA", "INPE", "Netflix"], 3],
    ["Qual o foco principal da Orbit Agro?",
        ["Vender satelites", "Apoiar decisoes de irrigacao", "Lancar foguetes", "Criar games"], 1],
    ["Quantas linhas de instrucoes opera o sistema embarcado do Perseverance?",
        ["2 mil", "2 milhoes", "200 milhoes", "2 bilhoes"], 2],
    ["Qual ODS NAO foi destacado como prioritario neste desafio?",
        ["ODS 9 - Inovacao", "ODS 11 - Cidades", "ODS 13 - Clima", "ODS 5 - Igualdade de genero"], 3],
    ["Qual desses problemas a tecnologia espacial pode ajudar a resolver?",
        ["Monitoramento ambiental", "Agricultura de precisao", "Conectividade em areas remotas", "Todas as anteriores"], 3]
];

var pergAtual = 0;
var acertos = 0;
var escolhida = -1;

function montarPergunta() {
    escolhida = -1;
    document.getElementById("quiz-contador").innerText = "Pergunta " + (pergAtual+1) + " de " + perguntas.length;
    document.getElementById("quiz-pergunta").innerText = perguntas[pergAtual][0];

    var opcoes = document.getElementById("quiz-opcoes");
    opcoes.innerHTML = "";

    for (var i = 0; i < perguntas[pergAtual][1].length; i++) {
        var b = document.createElement("button");
        b.innerText = perguntas[pergAtual][1][i];
        b.className = "quiz-opcao";
        b.setAttribute("data-i", i);
        b.onclick = function() {
            var todos = document.getElementsByClassName("quiz-opcao");
            for (var j = 0; j < todos.length; j++) {
                todos[j].classList.remove("quiz-opcao-selecionada");
            }
            this.classList.add("quiz-opcao-selecionada");
            escolhida = parseInt(this.getAttribute("data-i"));
        };
        opcoes.appendChild(b);
    }
}

function proximaPergunta() {
    if (escolhida == -1) {
        document.getElementById("quiz-aviso").innerText = "Selecione uma opcao antes de avancar.";
        return;
    }
    document.getElementById("quiz-aviso").innerText = "";

    if (escolhida == perguntas[pergAtual][2]) {
        acertos = acertos + 1;
    }

    pergAtual = pergAtual + 1;

    if (pergAtual >= perguntas.length) {
        document.getElementById("quiz-area").style.display = "none";
        document.getElementById("quiz-resultado").style.display = "block";

        var pct = Math.round((acertos / perguntas.length) * 100);
        document.getElementById("quiz-pontuacao").innerText = "Voce acertou " + acertos + " de " + perguntas.length + " (" + pct + "%)";

        var msg = "";
        if (pct == 100) msg = "Excelente! Voce e um expert em industria espacial!";
        else if (pct >= 70) msg = "Muito bom! Voce manja bastante do assunto.";
        else if (pct >= 40) msg = "Voce sabe algumas coisas. Que tal estudar mais?";
        else msg = "Continue estudando! O espaco e cheio de informacoes.";

        document.getElementById("quiz-mensagem").innerText = msg;
    } else {
        montarPergunta();
    }
}

function reiniciarQuiz() {
    pergAtual = 0;
    acertos = 0;
    escolhida = -1;
    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("quiz-resultado").style.display = "none";
    document.getElementById("quiz-aviso").innerText = "";
    montarPergunta();
}


function aplicarTema(t) {
    var r = document.documentElement;

    localStorage.setItem("tema", t);

    if (t == "verde") {
        r.style.setProperty("--cor-principal", "#1F6B3A");
        r.style.setProperty("--cor-secundaria", "#2F80ED");
        r.style.setProperty("--cor-fundo", "#F4F8F3");
        r.style.setProperty("--cor-fundo-areas", "#E3F2E1");
        r.style.setProperty("--cor-card", "#FFFFFF");
        r.style.setProperty("--cor-texto", "#1F2A24");
        r.style.setProperty("--cor-texto-suave", "#5F6F65");
        r.style.setProperty("--cor-rodape-bg", "#1B1F1D");
        r.style.setProperty("--cor-rodape-texto", "#F5F5F5");
    }

    if (t == "escuro") {
        r.style.setProperty("--cor-principal", "#A7D129");
        r.style.setProperty("--cor-secundaria", "#56CCF2");
        r.style.setProperty("--cor-fundo", "#121417");
        r.style.setProperty("--cor-fundo-areas", "#1E2228");
        r.style.setProperty("--cor-card", "#252A30");
        r.style.setProperty("--cor-texto", "#F5F5F5");
        r.style.setProperty("--cor-texto-suave", "#B0B5BA");
        r.style.setProperty("--cor-rodape-bg", "#000000");
        r.style.setProperty("--cor-rodape-texto", "#F5F5F5");
    }

    if (t == "espacial") {
        r.style.setProperty("--cor-principal", "#7B61FF");
        r.style.setProperty("--cor-secundaria", "#56CCF2");
        r.style.setProperty("--cor-fundo", "#0B1029");
        r.style.setProperty("--cor-fundo-areas", "#161B3D");
        r.style.setProperty("--cor-card", "#1F2552");
        r.style.setProperty("--cor-texto", "#F5F5FF");
        r.style.setProperty("--cor-texto-suave", "#B8BCDB");
        r.style.setProperty("--cor-rodape-bg", "#05071A");
        r.style.setProperty("--cor-rodape-texto", "#F5F5FF");
    }
}


window.onload = function() {
    trocarSlide(0);
    montarPergunta();

    document.getElementById("form-contato").onsubmit = enviarForm;

    var temaSalvo = localStorage.getItem("tema");

    if (temaSalvo) {
        aplicarTema(temaSalvo);
    }
};