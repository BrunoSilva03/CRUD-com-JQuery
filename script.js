$(function() {
    var numTarefas = 0;

    $('#buttonmais').click(function() {
        abrirformulario();
    });

    $('#btnconfirmar').click(function() {
        conferirCampos();
        

    })

    $('#btncancelar').click(function() {
        cancelar();
    })

    $('#formulario input').focusin(function() {
        $(this).css("background", "white");
        $(this).css("color", "black");
    })


    function abrirformulario() {
        if(numTarefas == 0) {
            $('#textoinicial').hide();
            $('.soprohiddenfuncionar').fadeIn();
        }
    }

    function conferirCampos() {
        var campotarefa = $('#inputnome');

        if($('#inputnome').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            campotarefa.css("background", "red");

        } else if($('#inputdata').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            $('#inputdata').css("background", "red");

        } else if($('#inputhorario').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            $('#inputhorario').css("background", "red");
        } else {
            criarTarefa();
        }
    }

    function criarTarefa() {
        alert('Criar tarefa tarefinha');
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
        $('#formulario input').css("background", "white");
        $('#formulario input').css("color", "black");
    }
})