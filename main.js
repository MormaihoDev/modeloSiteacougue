$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            alert('Obrigado- Sua mensagem enviada com sucesso!')
            $('#nome').val('');
            $('#email').val('');
            $('#telefone').val('');
            $('#mensagem').val('');

            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            console.log(camposIncorretos);
            if(camposIncorretos) {
                alert(`Existe ${camposIncorretos} campo(s) incorreto(s)`)
            }
        }
    });
})