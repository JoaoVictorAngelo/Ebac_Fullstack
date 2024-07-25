// Seleciona o formulário de depósito usando o ID do elemento
const form = document.getElementById('form-deposito');

// Seleciona o campo de entrada para o nome do beneficiário
const nomeBeneficiario = document.getElementById('nome-beneficiario');

// Seleciona o campo de entrada para o número da conta do beneficiário
const numeroContaBeneficiario = document.getElementById('numero-conta');

// Seleciona o campo de entrada para o valor do depósito
const valorDeposito = document.getElementById('valor-deposito');

// Seleciona o campo de entrada para a descrição (opcional)
const descricao = document.getElementById('descricao');

// Variável para verificar se o formulário é válido
let formEValido = false;

/**
 * Função que valida se o nome completo é válido.
 * O nome é considerado válido se houver pelo menos duas palavras.
 * 
 * @param {string} nomeCompleto - O nome completo a ser validado
 * @returns {boolean} - Retorna verdadeiro se o nome é válido, caso contrário, falso
 */
function validaNome(nomeCompleto) {
    // Divide o nome em um array de palavras
    const nomeComoArray = nomeCompleto.split(' ');

    // Retorna verdadeiro se o array tem 2 ou mais elementos (palavras)
    return nomeComoArray.length >= 2;
}

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
    // Impede o comportamento padrão de enviar o formulário
    e.preventDefault();

    // Monta a mensagem de sucesso com os dados inseridos pelo usuário
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> foi depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>. Descrição: <b>${descricao.value}</b>`;

    // Valida se o nome do beneficiário é válido
    formEValido = validaNome(nomeBeneficiario.value);

    if (formEValido) {
        // Se o formulário for válido, mostra a mensagem de sucesso
        const containerMensagemSucesso = document.querySelector('.success-message');

        // Insere a mensagem de sucesso no HTML
        containerMensagemSucesso.innerHTML = mensagemSucesso;

        // Torna a mensagem de sucesso visível
        containerMensagemSucesso.style.display = 'block';

        // Limpa os campos do formulário após o envio bem-sucedido
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricao.value = '';
    } else {
        // Se o formulário não for válido, destaca o campo de nome com uma borda vermelha
        nomeBeneficiario.style.border = '1px solid red';

        // Exibe a mensagem de erro se o nome não for completo
        document.querySelector('.error-message').style.display = 'block';
    }
});

// Adiciona um ouvinte de evento para a entrada de dados no campo de nome do beneficiário
nomeBeneficiario.addEventListener('keyup', function(e) {
    // Valida o nome do beneficiário a cada tecla digitada
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        // Se o nome não for válido, adiciona a classe de erro
        nomeBeneficiario.classList.add('error');
        valorDeposito.classList.add('error');
        numeroContaBeneficiario.classList.add('error');

        // Exibe a mensagem de erro
        document.querySelector('.error-message').style.display = 'block';
    } else {
        // Se o nome for válido, remove a classe de erro e adiciona a classe de sucesso
        nomeBeneficiario.classList.remove('error');
        nomeBeneficiario.classList.add('success');

        numeroContaBeneficiario.classList.remove('error');
        numeroContaBeneficiario.classList.add('success');

        valorDeposito.classList.remove('error');
        valorDeposito.classList.add('success');

        // Esconde a mensagem de erro
        document.querySelector('.error-message').style.display = 'none';
    }
});
