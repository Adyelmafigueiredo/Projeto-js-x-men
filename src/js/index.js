/* 
    O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos
    que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a 
    imagem, o nome e o texto grande que está selecionado.
*/
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    
    personagem.addEventListener('mouseenter', () => {
    
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        personagem.classList.add('selecionado');

        removerSelecaoDoPersonagem();

        alterarImagemPersonagemSelecionado(personagem);
        
        alterarNomePersonagemSelecionado(personagem);

        // alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem);
})

})

function alterarDescricaoPersonagem(personagem) {
    const descriçãoPersonagem = document.getElementById('descricao-personagem');
    descriçãoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
