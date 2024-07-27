const form = document.getElementById('form')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const ladoA = parseInt(document.getElementById('lado-a').value)
    const ladoB = parseInt(document.getElementById('lado-b').value)

    const msgErro = document.querySelector('.msg-erro')
    const msgSucesso = document.querySelector('.msg-sucesso')

    if (ladoA > ladoB) {
        msgErro.style.display = 'block';
        msgErro.textContent = '✖ Atenção! Lado A é maior!';
        msgSucesso.style.display = 'none';
    } else if (ladoA < ladoB) {
        msgSucesso.style.display = 'block';
        msgErro.style.display = 'none';
    } else {
        msgErro.style.display = 'block';
        msgErro.textContent = 'Os números são iguais! Certifique-se de que o lado B seja maior.';
        msgSucesso.style.display = 'none';
    }
});