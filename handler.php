<?php
    error_reporting(E_ALL);
    $startTime = $_SERVER['REQUEST_TIME_FLOAT'];
    $x = $_POST['X'];
    $y = $_POST['Y'];
    $r = $_POST['R'];
    $file = 'history.txt';
    $data = file_get_contents($file);
    $results = unserialize($data);
    if (empty($results)){
        $elemAmount = 0;
    }
    else
        $elemAmount = count($results);

    if(
        ($x>=0 && $y>=0 &&($x*$x+$y*$y)<=$r*$r/4)||
        ($x<=0 && $y>=0 && $y<= $x+$r)||
        ($x>=-$r/2 && $x<=0 && $y>=-$r && $y<=0)
    )$answer = "Попадает";
    else
        $answer = "Не попадает";

    $results[$elemAmount]['valX'] = $x;
    $results[$elemAmount]['valY'] = $y;
    $results[$elemAmount]['valR'] = $r;
    $results[$elemAmount]['Result'] = $answer;
    $results[$elemAmount]['CurrentTime'] = date('H:i:s', strtotime("+3 hour"));
echo '    
    <!DOCKTYPE html>
    <html>
        <head>
            <title>Results</title>
            <meta charset="UTF-8">
            <style>
                #title{
                    font-family: century gothic;
                    font-size: 25px;
                    font-weight: bold;
                    color: #ffc62a;
                    text-align: center;
                    text-shadow: 2px 2px 3px black;
                }
                table{
                    border: 2px solid #ffc62a;
                    box-shadow: 0 0 6px 2px #9a0000;
                    vertical-align: center;
                    text-align: center;
                    background: rgba(255, 198, 42, 0.65);
                }
                td, th{
                    padding: 3px 6px;
                    width: 150px;
                    box-shadow: 0 0 3px 1px black inset;
                }
            </style>
        </head>
        <body>
            <p id="title">Результаты проверки</p>
            <table>
                <tr>
                    <th>Значение X</th>
                    <th>Значение Y</th>
                    <th>Значение R</th>
                    <th>Результат проверки</th>
                    <th>Время на расчет</th>
                    <th>Время начала</th>
                </tr>';


    $endTime = microtime(true);
    $results[$elemAmount]['WorkingTime'] = round(($endTime - $startTime)*1000, 3);
    $elemAmount++;
    for ($i = $elemAmount - 1; $i >= 0; $i--) {
        echo '
            <tr>
             <td>'.$results[$i]['valX'].'</td>
             <td>'.$results[$i]['valY'].'</td>
             <td>'.$results[$i]['valR'].'</td>
             <td>'.$results[$i]['Result'].'</td>
             <td>'.$results[$i]['WorkingTime'].' мкс</td>
             <td>'.$results[$i]['CurrentTime'].'</td>
            </tr>
        ';
    }

    echo '</table>
        </body>
    </html>';
    $data = serialize($results);
    file_put_contents($file, $data);



