
    function allowDrop(ev)
    {
      ev.preventDefault();
    }

    function drag(ev)
    {
      ev.dataTransfer.setData("text", ev.target.id);

    }

    function drop(ev)
    {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      console.log(data);
      atual = document.getElementById(data);
      console.log(atual.getAttribute('meta-child'));

      ev.target.appendChild(document.getElementById(data));
      var target = ev.target.id;
      console.log(target);

      if(target == 'emprestimoLabel'){

          atual.setAttribute('meta-child', 'emprestimo');
          console.log(atual.getAttribute('meta-child'));

      }else if (target == 'clienteLabel') {

          atual.setAttribute('meta-child', 'cliente');
          console.log(atual.getAttribute('meta-child'));

      }else if (target == 'field6B' || target == 'field6E' ) {

          atual.setAttribute('meta-child', 'relacionamento');
          console.log(atual.getAttribute('meta-child'));

      }else if(target == 'field6A'  || target == 'field6C' || target == 'field6D' || target == 'field6F' ) {

          atual.setAttribute('meta-child', 'entidade');
          console.log(atual.getAttribute('meta-child'));

      }


    }


    function erro(ev)
    {
        alert('você não pode arrastar um atributo a outro');
        location.reload();
    }


    $(function($){
    /*Funcção da primeira questão.*/

    $('#submit1').click(function () {


    if (document.getElementById("check1").checked == true
        && document.getElementById("check2").checked == true
        && document.getElementById("check4").checked == true
        && document.getElementById("check6").checked == true
        && document.getElementById("check1").checked == true
        && document.getElementById("check7").checked == true  ) {


      console.log("Passou do teste");
      $('#myModal').modal('show');
      $('#submit1').removeClass("btn-danger");
      $('#submit1').addClass("btn-primary");
      $('#submit1').text("Resposta Correta !");
      //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
      $('#next1').show();


    }else{
      console.log("Não passou do teste");
      $('#submit1').addClass("btn-danger");
      $('#submit1').text("Tente outra vez");
    }

    })

    /*função da 2 questao*/
    $('#submit2').click(function () {

      console.log('teste');
      var qst1 = $('#qst1').val();
      var qst2 = $('#qst2').val();
      var qst3 = $('#qst3').val();
      var qst4 = $('#qst4').val();
      var qst5 = $('#qst5').val();
      var qst6 = $('#qst6').val();

      if(qst1 == 'relacionamento' &&
          qst2 =='entidade' &&
          qst3 == 'atributo'&&
          qst4 == 'especializacao'&&
          qst5 == 'entidadeAssoc'&&
          qst6 == 'atributoChave'){

              $('#myModal2').modal('show');
              console.log("Passou do teste");
              $('#submit2').removeClass("btn-danger");
              $('#submit2').addClass("btn-primary");
              $('#submit2').text("Resposta Correta !");
              //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
              $('#next2').show();

          }else{

            console.log("Não passou do teste");
            $('#submit2').addClass("btn-danger");
            $('#submit2').text("Tente outra vez");

          }

    })


    /*função da 3 questao*/
    $('#submit3').click(function () {

          a1 = $('#a1').val();
          a2 = $('#a2').val();
          b1 = $('#b1').val();
          b2 = $('#b2').val();
          c1 = $('#c1').val();
          c2 = $('#c2').val();

          if(a1 == 1
            && a2 == 1
            && b1 == 1
            && b2 == 'n'
            && c1 == 'n'
            && c2 == 'n'){
            console.log('ok');

            $('#myModal3').modal('show');
            console.log("Passou do teste");
            $('#submit3').removeClass("btn-danger");
            $('#submit3').addClass("btn-primary");
            $('#submit3').text("Resposta Correta !");
            //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
            $('#next3').show();

            console.log('a1:'+a1+'\n'+
                        'a2:'+a2+'\n'+
                        'b1:'+b1+'\n'+
                        'b2:'+b2+'\n'+
                        'c1:'+c1+'\n'+
                        'c2:'+c2+'\n')


          }else{

            console.log("Não passou do teste");
            $('#submit3').addClass("btn-danger");
            $('#submit3').text("Tente outra vez");

            console.log('a1:'+a1+'\n'+
                        'a2:'+a2+'\n'+
                        'b1:'+b1+'\n'+
                        'b2:'+b2+'\n'+
                        'c1:'+c1+'\n'+
                        'c2:'+c2+'\n')



          }



    })


    /*---------------Questao 4-------------*/
    $('#plusAD').click(function () {

      var status = $(this).data('status');

      switch (status) {
        case 'close':

          $('#desafio4A').show();
          $(this).data('status', 'open');
          break;
        case 'open':

          $('#desafio4A').hide();
          $(this).data('status', 'close');
        break;


        default:

      }
    })

    var desblock = 0;
    var entidades = [];
    $('#plusEntidade').click(function () {


      var entidadeField = $('#entidadeField').val();
      entidadeField.toLowerCase();

      if(entidadeField == 'floricultura' || entidadeField == 'produtos'  || entidadeField == 'clientes'){

          if(entidades.length < 1){
              entidades.push(entidadeField);
              $('#labelX').append('<h2>'+entidadeField+'</h2>');
              for (var i = 0; i < entidades.length; i++) {
                 console.log('['+i+']'+entidades[i]);
              }
          }else{
              console.log('else');

              var existe = 0;
              console.log('existe>' + existe);

              for (var i = 0; i < entidades.length; i++) {

                    if(entidadeField == entidades[i]){
                        console.log('entidadeField:'+entidadeField+'\n entidade['+i+']:'+entidades[i]);
                        existe = 1;
                    }
              }

              if(existe == 0){
                entidades.push(entidadeField);
                $('#labelX').append('<h2>'+entidadeField+'</h2>');
              }else if (existe == 1) {
                  alert('Entidade ja cadastrada');
              }

              if(entidades.length == 3){
                alert('Questão B desbloqueada')
                $('#desbloqueioA').show();
                $('#block').hide();
                $('#desafio4A').hide();
                $('#question4B').show();
              }

          }

        }else{
        alert("essa entidade não pertence ao texto");
      }

    })

      $('#plusRelacionamento').click(function () {

        var status = $(this).data('status');

        switch (status) {
          case 'close':

            $('#desafio4B').show();
            $(this).data('status', 'open');
            break;
          case 'open':

            $('#desafio4B').hide();
            $(this).data('status', 'close');
          break;


          default:

        }


      })

      $('#submit4').click(function () {

         var qst1 = $('#qst4BA').val();
         var qst2 = $('#qst4BB').val();
         var qst3 = $('#qst4BC').val();

         if(qst1 == 'cadastra' && qst2 == 'solicita' && qst3 == 'realiza'){

            $('#myModal4').modal('show');
            console.log("Passou do teste");
            $('#submit4').removeClass("btn-danger");
            $('#submit4').addClass("btn-primary");
            $('#submit4').text("Resposta Correta !");
            //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
            $('#next4').show();

        }else{

          console.log("Não passou do teste");
          $('#submit4').addClass("btn-danger");
          $('#submit4').text("Tente outra vez");

        }


      })


    $('#submit5').click(function () {

    var attrNome = document.getElementById('attrNome');
    var attrTelefone = document.getElementById('attrTel');
    var attrValor = document.getElementById('attrVal');
    var attrIdade = document.getElementById('attrAge');
    var attrCodigo = document.getElementById('attrCod');
    var attrNascimento = document.getElementById('attrNas');
    var attrCodEmpre = document.getElementById('attrEmpr');

    if(attrNome.getAttribute('meta-child') == 'cliente'
      && attrIdade.getAttribute('meta-child') == 'cliente'
      && attrNascimento.getAttribute('meta-child') == 'cliente'
      && attrTelefone.getAttribute('meta-child') == 'cliente'
      && attrValor.getAttribute('meta-child') == 'emprestimo'
      && attrCodigo.getAttribute('meta-child') == 'emprestimo'
      && attrCodEmpre.getAttribute('meta-child') == 'emprestimo')
    {

          $('#myModal5').modal('show');
          $('#submit5').removeClass("btn-danger");
          $('#submit5').addClass("btn-primary");
          $('#submit5').text("Resposta Correta !");
          //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
          $('#next5').show();


    }else{

      console.log("Não passou do teste");
      $('#submit5').addClass("btn-danger");
      $('#submit5').text("Tente outra vez");


    }


    })


    /*-------------------questao 6------------------------------*/


    $('#submit6').click(function (e) {

    e.preventDefault();
    $('#question6').addClass('journal');


    console.log('teste');
    var entidadeCD = document.getElementById('entCD').getAttribute('meta-child');
    var entidadeAlbum = document.getElementById('entAlbum').getAttribute('meta-child');
    var entidadeArtista = document.getElementById('entArtista').getAttribute('meta-child');
    var entidadeMusica = document.getElementById('entMusica').getAttribute('meta-child');
    var relPossui = document.getElementById('relPossui').getAttribute('meta-child');
    var relPertence = document.getElementById('relPertence').getAttribute('meta-child');

    if(entidadeCD){



      $('#myModal6').modal('show');

      $('#submit6').removeClass("btn-danger");
      $('#submit6').addClass("btn-primary");
      $('#submit6').text("Resposta Correta !");
      //$('#form1').append("<button class='btn btn-success col-md-10'></button>");
      $('#next6').show();
    }




    })






    /*-------------------------------------------------------------*/




      $('#go1').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question1').addClass('journal');
        $('#question1').show();


      })


      $('#go2').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question2').addClass('journal');
        $('#question2').show();


      })


      $('#go3').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question3').addClass('journal');
        $('#question3').show();


      })


      $('#go4').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question4').addClass('journal');
        $('#question4').show();


      })


      $('#go5').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question5').addClass('journal');
        $('#question5').show();


      })



      $('#go6').click(function (e) {

        console.log('teste');
        e.preventDefault();
        $('#question6').addClass('journal');
        $('#question6').show();


      })


      $('#startGame').click(function (e) {

        console.log('teste1');
        e.preventDefault();
        $('#startGame').hide();
        $('#welcome').hide();
        $('#video').show();
        $('#menu').show();
        $('#life').show();
      })





    });
