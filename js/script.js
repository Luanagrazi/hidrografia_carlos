let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "(UERJ/2018) – Em meio à crise hídrica enfrentada pelo Espírito Santo, um projeto ambiental incentiva pequenos agricultores a adotarem medidas que ajudam a recuperar nascentes. A iniciativa faz parte do projeto Olhos D’Água, do fotógrafo Sebastião Salgado, que recuperou em sua propriedade uma área da Mata Atlântica e, por consequência, nascentes. Os beneficiados pelo projeto não sofreram muito com a seca: nascentes das fazendas estão cercadas com arame, o gado não chega perto, e mudas de árvores foram plantadas em volta. Até agora, mais de 1200 nascentes já estão protegidas com esse tipo de intervenção. O impacto da intervenção citada sobre a bacia hidrográfica local é a redução ao longo do ano da:",
    alternativaA : "carga do aquífero",
    alternativaB : "taxa de infiltração",
    alternativaC : "área da várzea",
    alternativaD : "oscilação da vazão",
    correta      : "oscilação da vazão",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Quais são os principais oceanos do mundo?",
    alternativaA : "Atlântico, Pacífico, Índico e Mar Negro",
    alternativaB : "Pacífico, Índico, Mediterrâneo e Caribenho",
    alternativaC : "Atlântico, Pacífico, Índico e Ártico",
    alternativaD : "Atlântico, Pacífico, Índico, Ártico e Antártico",
    correta      : "Atlântico, Pacífico, Índico e Ártico",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual é a maior profundidade conhecida nos oceanos?",
    alternativaA : "Fossa das Marianas, com cerca de 7.000 metros de profundidade",
    alternativaB : "Fossa das Marianas, com cerca de 11.000 metros de profundidade",
    alternativaC : "Fossa das Filipinas, com cerca de 8.000 metros de profundidade",
    alternativaD : "Fossa das Filipinas, com cerca de 10.000 metros de profundidade",
    correta      : "Fossa das Marianas, com cerca de 11.000 metros de profundidade",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Quais são os principais rios da América do Sul?",
    alternativaA : "Amazonas, Paraná, São Francisco e Orinoco",
    alternativaB : "Amazonas, Nilo, Mississippi e Danúbio",
    alternativaC : "Amazonas, Yangtzé, Ganges e Nilo",
    alternativaD : "Amazonas, Congo, Mekong e Nilo",
    correta      : "Amazonas, Paraná, São Francisco e Orinoco",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é a maior bacia hidrográfica do mundo?",
    alternativaA : "Bacia do Mississippi",
    alternativaB : "Bacia do Congo",
    alternativaC : "Bacia do Amazonas",
    alternativaD : "Bacia do Nilo",
    correta      : "Bacia do Amazonas",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Questão 07) (FAC. AGRONOMIA E ZOOTECNIA de Uberaba) Leia as afirmativas I e II. I. É a maior das três bacias que formam a Bacia Platina, pois possui 891.309 km2, o que corresponde a 10,4% da área do território brasileiro. II. Possui a maior potência instalada de energia elétrica, destacando-se algumas grandes usinas. Estas características referem-se à bacia do:",
    alternativaA : "Uruguai",
    alternativaB : "Uruguai",
    alternativaC : "São Francisco",
    alternativaD : "Paraná",
    correta      : "Paraná.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "São pontos importantes atrelados à bacia Platina, com exceção da",
    alternativaA : "utilização de fontes de água para a produção pecuária.",
    alternativaB : "cultivação de plantações irrigadas com a água dos rios.",
    alternativaC : "canalização da água para resfriamento de usinas nucleares.",
    alternativaD : "geração de energia elétrica por meio de hidrelétricas.",
    correta      : "canalização da água para resfriamento de usinas nucleares.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é a dinâmica pela qual evolui a rede de rios? O sistema evolui espontaneamente para o estado mais conveniente, de energia mínima, impulsionado por fluxos de água e energia vindos de tempestades, avalanches e transporte de sedimentos. Trata-se de um processo de auto-organização da paisagem. Um exemplo de auto-organização da paisagem natural relacionada aos rios é",
    alternativaA : "o escoamento laminar.",
    alternativaB : "a retificação dos cursos dágua.",
    alternativaC : "a formação de padrões meândricos.",
    alternativaD : "a lixiviação pedogênica.",
    correta      : "a formação de padrões meândricos.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "(Unesp) Considerando os rios como agentes modeladores do relevo terrestre, é correto afirmar que:",
    alternativaA : "em seu alto curso, predominam os processos de erosão do relevo e de remoção de materiais; em seu baixo curso, predominam os processos de deposição e de sedimentação.",
    alternativaB : "ao longo de todos os seus cursos, os processos de deposição e de sedimentação de materiais predominam sobre os processos de erosão do relevo e de remoção de materiais.",
    alternativaC : "ao longo de todos os seus cursos, predomina o transporte de materiais, sem que os processos de erosão e de sedimentação tenham relevância sobre o esculpimento do relevo.",
    alternativaD : "em seus alto e baixo cursos, predominam tanto os processos de erosão do relevo como de remoção de materiais; em seu médio curso, predominam os processos de deposição e de sedimentação.",
    correta      : "em seu alto curso, predominam os processos de erosão do relevo e de remoção de materiais; em seu baixo curso, predominam os processos de deposição e de sedimentação.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Assinale a alternativa que indica a melhor definição de bioma",
    alternativaA : "É uma unidade do espaço geográfico que possui características físicas em comum.",
    alternativaB : "É um espaço formado por plantas homogêneas que possuem estrutura semelhante.",
    alternativaC : "É uma área que tem um grande volume de espécies classificadas como endêmicas.",
    alternativaD : " É um recorte espacial que possui somente elementos das paisagens do tipo natural.",
    correta      : "É uma unidade do espaço geográfico que possui características físicas em comum.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}