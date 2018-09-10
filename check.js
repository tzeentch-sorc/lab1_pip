function checkValues(){
    var y, form, error;
    form = document.getElementById('form');
    y = form.Y.value;
    error = false;
    if (y == "DEUS VULT" || y == "AVE MARIA"){
        var audio = new Audio('./music/DEUS_VULT.mp3');
        audio.play();
        document.body.style.backgroundImage = "url('./img/bg_crusade.jpg')";
        document.body.style.backgroundColor = "white";
        document.getElementById('send').style.visibility = "hidden";
        audio.onended = function() {
            document.body.style.backgroundImage = "url('./img/bg.jpg')";
            document.body.style.backgroundColor = "#9a0000";
            document.getElementById('send').style.visibility = "visible";
        };
    }
    else {
        if (isNaN(y) || y <= -3 || y >= 3) {
            error = true;
            alert("Неверное значение Y. Введите число от -3 до 3.");
        }
        if (y == "") {
            alert("Неверное значение Y. Введите число от -3 до 3.");
            error = true;
        }
        if (error===false) {
            form.submit();
            document.getElementById('answer').style.display="block";
            draw('canvas', form.R.value);
        }
    }

}

function extendSize(elementID){
    document.getElementById(elementID).height =  document.getElementById(elementID).contentWindow.document.body.scrollHeight + 20 + 'px';
}

function draw(canvasID, symbol) {
    var ctx = document.getElementById(canvasID).getContext("2d");
    ctx.clearRect(0,0, 500, 500);
    ctx.fillStyle = "rgba(255, 198, 42, 0.5)";
    ctx.fillRect(0, 0 , 500, 500);

    ctx.beginPath();
    ctx.strokeStyle = "#9a0000";
    ctx.fillStyle = "rgba(154, 0, 0, 0.7)";
    ctx.moveTo(150, 250);
    ctx.lineTo(250, 50);
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //прямоугольник
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(150, 450);
    ctx.lineTo(250, 450);
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //сектор
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 3*Math.PI/2,true);
    ctx.lineTo(250, 250);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //оси
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.stroke();
    //отметки
    ctx.beginPath();
    ctx.moveTo(245, 50);
    ctx.lineTo(255, 50);
    ctx.moveTo(245, 150);
    ctx.lineTo(255, 150);
    ctx.moveTo(245, 350);
    ctx.lineTo(255, 350);
    ctx.moveTo(245, 450);
    ctx.lineTo(255, 450);

    ctx.moveTo(50, 245);
    ctx.lineTo(50, 255);
    ctx.moveTo(150, 245);
    ctx.lineTo(150, 255);
    ctx.moveTo(350, 245);
    ctx.lineTo(350, 255);
    ctx.moveTo(450, 245);
    ctx.lineTo(450, 255);
    ctx.closePath();
    ctx.stroke();

    //подписи
    ctx.fillStyle="black";
    ctx.font = "20px Times New Roman bold";
    if(!isNaN(parseFloat(symbol))){
        ctx.fillText("-"+symbol, 40, 275);
        ctx.fillText("-"+(symbol/2), 130, 275);
        ctx.fillText(symbol/2, 340, 275);
        ctx.fillText(symbol, 445, 275);

        ctx.fillText(symbol, 265, 53);
        ctx.fillText(symbol/2, 265, 153);
        ctx.fillText("-"+(symbol/2), 265, 353);
        ctx.fillText("-"+symbol, 265, 453);
        ctx.stroke();
    }
    else{
        ctx.fillText("-R", 40, 275);
        ctx.fillText("-R/2", 130, 275);
        ctx.fillText("R/2", 340, 275);
        ctx.fillText("R", 445, 275);

        ctx.fillText("R", 265, 53);
        ctx.fillText("R/2", 265, 153);
        ctx.fillText("-R/2", 265, 353);
        ctx.fillText("-R", 265, 453);
        ctx.stroke();
    }

    //точка

}

