//Ввод только цифр для поля телефона в форме
(function(){
    var input1 = document.getElementById('input1'),
    input2 = document.getElementById('input2'),
    input3 = document.getElementById('input3');
	 	var num = function (e) {
                  e = e || event;
                  if (e.ctrlKey || e.altKey || e.metaKey) return;
                  var chr = getChar(e);

                  if (chr == null) return;
                  if (chr < '0' || chr > '9') {
                    return false;
                  } 
                }
            function getChar(event) {
              if (event.which == null) {
                if (event.keyCode < 32) return null;
                return String.fromCharCode(event.keyCode) // IE
              }

              if (event.which != 0 && event.charCode != 0) {
                if (event.which < 32) return null;
                return String.fromCharCode(event.which) // остальные
              }

              return null; // специальная клавиша
            }
               input1.onkeypress = num;
               input2.onkeypress = num;
               input3.onkeypress = num;
              });
               //скрипт для плавной прокрутки
               $(document).ready(function(){
                $("#menu, #wrapper_button").on("click","a", function (event) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                      top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1000);
                });
     
                $("#form").submit(function(){
                    $.ajax({
                      type: "POST",
                      url: "mail.php",
                      data:$(this).serialize()
                      }).done(function(){
                        alert("Спасибо");
                      });
                      return false;
                    });
                });
               $('#to-order_button').click(function(){
                  $(this).addClass('active');
                  $(this).val('ЗАКАЗ ПРИНЯТ, СПАСИБО!');
               })


              //плагин для стилизации селектов
                  (function($) {
                     $(function() {
                      $('select').styler({
                      selectSearch: true
                      });
                    });
                  })(jQuery);

                              
             
     




	