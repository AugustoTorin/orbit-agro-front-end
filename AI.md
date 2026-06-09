# AI.md - Uso de Inteligencia Artificial no Projeto Orbit Agro

Este documento descreve as interacoes com Inteligencia Artificial durante o desenvolvimento da disciplina **Web Development** da Global Solution 2026 (Industria Espacial - Engenharia de Software 1o Ano).

A IA foi utilizada principalmente para:
- Correcao de redundancias no codigo HTML/CSS e no JavaScript do projeto.
- Explicacoes pontuais sobre como implementar determinadas funcionalidades (ex.: troca de tema via variaveis CSS).
- Apoio na escrita das perguntas do quiz com base no tema da Industria Espacial.

---

## Interacao 1 - Analise do projeto existente

**O que foi solicitado para a IA:**
"Analise os arquivos do projeto Orbit Agro (index.html, css/style.css, integrantes.txt, link_github.txt) e a especificacao da Global Solution 2026 para identificar o que ja foi entregue na disciplina de Front-End Design e o que ainda precisa ser entregue na disciplina de Web Development."

**O que a IA retornou:**
A IA identificou que a landing page ja contemplava todos os requisitos da disciplina de Front-End Design (6 secoes, menu, rodape, Google Fonts, Flexbox, variaveis CSS, reset CSS, atributos alt) e listou o que faltava para Web Development:
- Slideshow com 3 imagens
- Formulario com validacao
- Quiz dinamico com 10 perguntas
- 3 opcoes de troca de tema
- Arquivo equipe.txt
- Arquivo AI.md

**O que foi alterado ou rejeitado e o motivo:**
A lista foi aceita integralmente, pois condiz com os requisitos do documento da Global Solution. Nada foi rejeitado nessa etapa.

---

## Interacao 2 - Perguntas do quiz

**O que foi solicitado para a IA:**
"Sugira 10 perguntas de multipla escolha sobre Industria Espacial usando como base os dados do documento da Global Solution (economia espacial, satelites em orbita, Falcon 9, Starlink, ODS prioritarios, etc.). Para cada pergunta, indique 4 alternativas e qual e a correta."

**O que a IA retornou:**
Uma lista com 10 perguntas e respectivas alternativas, abordando os topicos pedidos. A IA tambem propos uma pergunta extra sobre o foco da Orbit Agro para conectar o quiz ao tema do projeto da equipe.

**O que foi alterado ou rejeitado e o motivo:**
Aceitas as 10 perguntas, com pequenos ajustes no texto para deixar a linguagem mais direta. A implementacao do quiz em JavaScript (estrutura de dados, exibicao das perguntas, contagem de acertos e tela de resultado) foi feita pela equipe, sem usar codigo gerado pela IA.

---

## Interacao 3 - Validacao do formulario

**O que foi solicitado para a IA:**
"Faca uma funcao simples em JavaScript puro que valide um formulario com campos nome, email e mensagem, impedindo o envio se algum campo estiver vazio e exibindo uma mensagem de sucesso quando estiver tudo certo."

**O que a IA retornou:**
Funcao de validacao com `preventDefault()`, checagem de string vazia em cada campo e validacao basica do e-mail.

**O que foi alterado ou rejeitado e o motivo:**
Aceito. A IA inicialmente sugeriu validar e-mail com expressao regular complexa, mas isso foi rejeitado pois era de tecnicidade alta demais. Foi mantida apenas a checagem de presenca de `@` e `.` no e-mail.

---

## Interacao 4 - Explicacao sobre troca de tema

**O que foi solicitado para a IA:**
"Explique como funciona a troca de tema (paleta de cores) em uma pagina web usando variaveis CSS. Quero entender o conceito para implementar 3 temas diferentes no projeto."

**O que a IA retornou:**
Explicacao de que variaveis CSS sao declaradas no seletor `:root` e podem ser sobrescritas em tempo de execucao usando `document.documentElement.style.setProperty("--nome-variavel", "valor")`. A IA mostrou um exemplo curto com duas variaveis trocando de cor ao clicar em um botao.

**O que foi alterado ou rejeitado e o motivo:**
Aceita a explicacao conceitual. A implementacao no projeto (funcao `aplicarTema` com os 3 temas: verde, escuro e espacial, e a escolha das cores de cada um) foi feita pela equipe a partir desse entendimento, sem reaproveitar codigo da IA.

---

## Interacao 5 - Correcao de redundancia no HTML/CSS

**O que foi solicitado para a IA:**
"Revise o index.html e style.css e aponte redundancias ou trechos repetidos que possam ser limpos."

**O que a IA retornou:**
A IA observou que os estilos das secoes `layout-cards`, `layout-slideshow`, `layout-quiz` e `layout-contato` repetiam declaracoes parecidas (mesmo `font-size` de h2, mesma `max-width` no texto descritivo, etc.) e sugeriu agrupar essas regras em um seletor combinado.

**O que foi alterado ou rejeitado e o motivo:**
Aceito parcialmente. Foi mantido o estilo separado de cada layout porque cada secao tem cores de fundo diferentes (`--cor-fundo` vs `--cor-fundo-areas`) e isso ajuda na leitura do CSS. Aceitamos a sugestao de agrupar o `font-size` dos h2 no media query responsivo, evitando repeticao no breakpoint.

---

## Interacao 6 - Verificacao de redundancia no JavaScript

**O que foi solicitado para a IA:**
"Revise o arquivo js/script.js e aponte trechos redundantes ou repetidos que possam ser simplificados sem mudar muito o estilo do codigo."

**O que a IA retornou:**
A IA listou 4 sugestoes de mudanca:

1. Unificar as funcoes `proximoSlide()` e `slideAnterior()` numa unica funcao `trocarSlide(n)` que recebe a direcao como parametro (`1` ou `-1`), eliminando duplicacao de logica.
2. Reaproveitar o array `legendas` tambem como atributo `alt` da imagem do slideshow, em vez de manter um terceiro array so para isso.
3. Usar `escolhida = -1` como flag de "nenhuma opcao selecionada" no quiz, em vez de criar uma variavel booleana separada do tipo `respondeu = false`.
4. Substituir as tres repeticoes de `r.style.setProperty(...)` da funcao `aplicarTema` por um unico bloco `with(r.style) { setProperty(...) }`, reduzindo a quantidade de texto repetido por tema.

**O que foi alterado ou rejeitado e o motivo:**
Aceitas as sugestoes 1, 2 e 3 (visiveis no codigo atual: a funcao `trocarSlide` recebe direcao, o `alt` da imagem usa o mesmo array `legendas` e a variavel `escolhida` comeca em `-1` e e usada como flag).

Rejeitada a sugestao 4. O comando `with` e desencorajado, nao funciona em modo estrito (`strict mode`) e prejudica a legibilidade — por isso preferimos manter a repeticao de `r.style.setProperty(...)` mesmo sendo verbosa. Em vez disso a variavel `r` foi mantida apenas para encurtar a referencia ao `documentElement.style`.

---

## Interacao 7 - Estrutura final e organizacao dos arquivos

**O que foi solicitado para a IA:**
"Confirme se a estrutura final do projeto atende todos os requisitos da disciplina de Web Development."

**O que a IA retornou:**
A IA listou os requisitos e cada arquivo correspondente:
- Slideshow com 3 imagens -> secao `#galeria` + funcoes no `script.js`
- Formulario com validacao -> secao `#contato` + funcao de envio em `script.js`
- Quiz com 10 perguntas + resultado -> secao `#quiz` + array de perguntas em `script.js`
- 3 opcoes de tema -> botoes no header + funcao `aplicarTema`
- Arquivo `equipe.txt` -> com nomes, RMs e link do GitHub
- Arquivo `AI.md` -> este documento

**O que foi alterado ou rejeitado e o motivo:**
Aceito. Nenhuma alteracao foi necessaria nessa etapa, foi apenas uma verificacao de cobertura dos requisitos.

---

## Observacoes finais

- Todo o codigo gerado ou influenciado pela IA foi revisado manualmente pela equipe antes de ser integrado ao projeto.
