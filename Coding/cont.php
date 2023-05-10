<?php
    $fp = fopen(date('Ymdhis').'-data.html', 'w');

    echo (fwrite($fp, $_POST['data'])) ? "Сохранено" : "Не сохранено";

    fclose($fp);?>