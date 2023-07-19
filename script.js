$(function() {
    var numTarefas = 0;

    $('#buttonmais').click(function() {
        abrirformulario();
    });

    $('#btncancelar').click(function() {
        cancelar();
    })


    function abrirformulario() {
        if(numTarefas == 0) {
            $('#textoinicial').hide();
            $('.soprohiddenfuncionar').fadeIn();
        }
    }

    function cancelar() {
        if(numTarefas == 0) {
            limparInputs();
            $('.soprohiddenfuncionar').hide();
            $('#textoinicial').fadeIn();
        }
    }


    function limparInputs() {
        //limpa todos os campos inputs do formulário
        $('#formulario input').val('');
    }
})