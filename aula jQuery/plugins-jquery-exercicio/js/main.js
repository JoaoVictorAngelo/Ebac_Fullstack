$(document).ready(function(){

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('#form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor insira o seu nome',
        email: 'Por favor insira o seu email',
        telefone: 'Por favor insira o seu telefone',
        endereco: 'Por favor insira o seu endereço',
        cep: 'Por favor insira o seu cep',
        cpf: 'Por favor insira o seu cpf',
    },

    submitHandler: function (form) {
        console.log(form)
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
    },
    invalidHandler: function (evento, validator) {
        let camposIncorretos = validator.numberOfInvalids()
        if (camposIncorretos) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    }
})
})