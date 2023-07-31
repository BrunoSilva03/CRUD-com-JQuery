$(function () {
    var numTarefas = 0;
    var contador = 0;


    $('#buttonmais').click(function () {
        abrirformulario();
    });

    $('#btnconfirmar').click(function () {
        conferirCampos();


    });

    $('#btncancelar').click(function () {
        cancelar();
    });

    $('#formulario input').focusin(function () {
        $(this).css("background", "white");
        $(this).css("color", "black");
    });

    // digitar enter e ir pulando para o próximo campo de preenchimento campo
    $('#inputnome').keyup(function () {
        if (event.keyCode === 13) {
            event.preventDefault();
            $('#inputdata').focus();
        }
    });

    $('#inputdata').keyup(function () {
        if (event.keyCode === 13) {
            event.preventDefault();
            $('#inputhorario').focus();
        }
    });

    $('#inputhorario').keyup(function () {
        if (event.keyCode === 13) {
            event.preventDefault();
            $('#btnconfirmar').click();
        }
    });




    function abrirformulario() {
        if (numTarefas == 0) {
            $('#textoinicial').hide();
            $('.soprohiddenfuncionar').fadeIn();
            $('#buttonmais').hide();
        } else {
            $('.soprohiddenfuncionar').fadeIn();
            $('#buttonmais').hide();
        }
    }

    function conferirCampos() {
        var campotarefa = $('#inputnome');

        if ($('#inputnome').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            campotarefa.css("background", "red");

        } else if ($('#inputdata').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            $('#inputdata').css("background", "red");

        } else if ($('#inputhorario').val() == '') {
            alert('Todos os campos precisam ser preenchidos');
            $('#inputhorario').css("background", "red");
        } else {
            criarTarefa();
        }
    }

    function criarTarefa() {
        let resultado = window.document.getElementById('areaLista');
        var nomeTarefa = $('#inputnome').val();
        var dataTarefa = $('#inputdata').val();
        var horarioTarefa = $('#inputhorario').val();
        let novaTarefa;

        let dataTarefaPadraoBr = dataTarefa.split('-').reverse().join('/');
        contador++;
        numTarefas++;

        /*
         novaTarefa = `
         <div class="tarefa" id="${contador}">
            <div class="icone-tarefa" onclick="marcarTarefa(${contador})">
                <i id="icone" class="mdi mdi-circle-outline" ></i>
            </div>

            <div class="conteudo-tarefa">
                <p id="nometarefa_${contador}">${nomeTarefa}</p>
                <p id="datatarefa_${contador}">${dataTarefa}</p>
                <p id="horariotarefa_${contador}${horarioTarefa}">15:30</p>

                <div class="areabotoestarefa">
                    <p>
                        <i id="btnupdatetarefa" class="mdi mdi-update" onclick="updateTarefa(${contador})"></i>

                        <i id="btnexcluirtarefa" class="mdi mdi-delete" onclick=excluirTarefa(${contador})></i>

                    </p>
                </div>
            </div>


        </div>`
        */


        $('.soprohiddenfuncionar').hide();
        limparInputs();
        $('#buttonmais').fadeIn();
        //resultado.innerHTML += novaTarefa;
        $('#areaLista').append(`
        <div class="tarefa" id="${contador}">
           <div class="icone-tarefa">
               <i id="icone_${contador}" class="mdi mdi-circle-outline" onclick="marcarTarefa(${contador})"></i>
           </div>

           <div class="conteudo-tarefa">
               <p id="nometarefa_${contador}">${nomeTarefa}</p>
               <p id="datatarefa_${contador}">${dataTarefa}</p>
               <p id="horariotarefa_${contador}">${horarioTarefa}</p>

               <div class="areabotoestarefa">
                   <p>
                       <i id="btnupdatetarefa" class="mdi mdi-update" onclick="updateTarefa(${contador})"></i>

                       <i id="btnexcluirtarefa" class="mdi mdi-delete" onclick="excluirTarefa(${contador})"></i>

                   </p>
               </div>
           </div>


       </div>`);
        confereFooter();

    }

    /*
    function marcarTarefa(idTarefa) {
        var item = $(`#${idTarefa}`);
        alert('Clicou');
        alert(`A classe tem o item ${item}`);
        alert('Ok');
        
    }
    */

    function marcarTarefa(id) {

    }

    function teste(id) {
        alert('oi');
    }

    $('#btnupdatetarefa').click(function () {
        alert('Você clicou no botão de update');
        
    })

    $('.icone-tarefa').on('click', function marcarTarefa() {
        $(this).parent('.tarefa').fadeOut(200);
        alert('Funcionou!');
    });

    $('.tarefa').click(function () {
        alert('Você clicou na tarefa!!!!!')
    })


    //O unbind serve para não realizar o evento em forma de fila várias vezes, pq eventualmente o usuário vai clicar na área do 
    //#areaLista várias vezes, e #btnupdatetarefa não sobrescreveria e sim seria enfileirado. 
    $('#areaLista').hover(function () {


        //TAREFA FEITA E NÃO FEITA MARCADOR
        
        $(`#icone_${idTarefa}`).unbind("click").on('click', function marcarTarefa(idTarefa) {
            if ($(this).hasClass('mdi-circle-outline')) {
                $(this).removeClass('mdi-circle-outline').addClass('mdi-check-circle');
                $('.tarefa').removeClass('tarefa').addClass('tarefa-feito');
            } else {
                $(this).removeClass('mdi-check-circle').addClass('mdi-circle-outline');
                $('.tarefa-feito').removeClass('tarefa-feito').addClass('tarefa');
            }
        })

        

        $('.tarefa').hover(function () {
            $('.icone-tarefa').hover(function () {
                $('.icone').unbind("click").on('click', function () {
                    $(this).removeClass('mdi-circle-outline').addClass('mdi-check-circle');
                })
            })
        })

        $('.tarefa-feito').unbind("dblclick").dblclick(function marcarTarefa(idTarefa) {
            $(this).removeClass('tarefa-feito').addClass('tarefa');

        })

        $('mdi').unbind("dblclick").on('click', function () {
            $(this).removeClass('mdi-circle-outline').addClass('mdi-check-circle');

        });

        $('#btnupdatetarefa').unbind("click").on('click', function () {
            alert('Tá clicando no update tarefa');
        });

        $('#btnexcluirtarefa').unbind("click").on('click', function excluirTarefa(idTarefa) {
            alert('Tá clicando no botão de excluir tarefa');
        });
    })





    function updateTarefa(id) {

    }

    function cancelar() {
        if (numTarefas == 0) {
            limparInputs();
            $('.soprohiddenfuncionar').hide();
            $('#textoinicial').fadeIn();
            $('#buttonmais').fadeIn();
        } else {
            limparInputs();
            $('.soprohiddenfuncionar').hide();
            $('#buttonmais').fadeIn();
        }
    }


    function limparInputs() {
        //limpa todos os campos inputs do formulário
        $('#formulario input').val('');
        $('#formulario input').css("background", "white");
        $('#formulario input').css("color", "black");
    }


    function confereFooter() {
        if (numTarefas >= 2) {
            $('footer').css("background", "#4ae4279d");
        } else {
            $('footer').css("background", "#39e612");
        }
    }
})