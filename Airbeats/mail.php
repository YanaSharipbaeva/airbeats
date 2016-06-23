
<?php
if($_POST)
    {
    $to = "katerdon2016@gmail.com"; //куда отправлять письмо
    $from = 'почта@mail.ru'; // от кого
    $subject = "Проверка почты"; //тема
     $message = 'ФИО: '.$_POST['name'].'; Номер телефона: '.$_POST['tel1'].'; Город: '.$_POST['town'].'; Отделение новой почты: '.$_POST['mail'].'; Цвет наушника: '.$_POST['color'].';          ';
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: <почта@mail.ru>\r\n";
    $result = mail($to, $subject, $message, $headers);
 
    // if ($result){
    //     echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
    // }
    }
?>