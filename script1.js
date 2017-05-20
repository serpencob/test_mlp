var score=0;
var n=1;

function showAll() {
    var a1 = document.getElementById('fs1');
    a1.style.display = "block";
    var b1 = document.getElementById('showAll');
    b1.style.display = "none";
    var b2 = document.getElementById('showOne');
    b2.style.display = "none";
    for(var i=1; i<10; i++){
        var q1 = document.getElementById(i);
        q1.style.display = "block";
    }
    var b3 = document.getElementById('check');
    b3.style.display = "block";
}

function showFirst() {
    var a1 = document.getElementById('fs1');
    a1.style.display = "block";
    var b1 = document.getElementById('showAll');
    b1.style.display = "none";
    var b2 = document.getElementById('showOne');
    b2.style.display = "none";
    var l = document.getElementById('legend');
    l.style.display = "block";
    l.innerHTML = "Вопрос " + n;
    var q1 = document.getElementById(n);
    q1.style.display = "block";
    var b4 = document.getElementById('next');
    b4.style.display = "block";
}

function oneByOne() {
    n++;
        if (n < 10) {
            var l = document.getElementById('legend');
            l.innerHTML = "Вопрос " + n;
            var q1 = document.getElementById(n);
            q1.style.display = "block";
            var q2 = document.getElementById(n - 1);
            q2.style.display = "none";
            var b1 = document.getElementById('next');
            b1.style.display = "block";
            if (n == 9) {
                var b2 = document.getElementById('next');
                b2.style.display = "none";
                var b3 = document.getElementById('check');
                b3.style.display = "block";
            }
        }
}

function checkInputs(question, answer) {
    if (answer!="") {
        if (question == 1 && (answer == "6" || answer == "six" || answer == "шесть")) {
            score++;
        }
        if (question == 2 && (answer == "TANK" || answer == "Tank" || answer == "tank" || answer == "танк" || answer == "Танк" || answer == "ТАНК")) {
            score++;
        }
    }
}

function checkRadio(question, answer) {
    if ((question==4||question==5||question==6)&&answer==true){
        score++;
    }
}

function checkBox(question) {
    if(question==3){
        var a1=document.getElementById('31').checked;
        var a2=document.getElementById('32').checked;
        var a3=document.getElementById('33').checked;
        var a4=document.getElementById('34').checked;
        if(a1==true&&a2==true&&a3==true&&a4==true){
            score++;
        }
    }
    if(question==7){
        var a5=document.getElementById('71').checked;
        var a6=document.getElementById('72').checked;
        if(a5==true&&a6==true){
            score++;
        }
    }
    if(question==8){
        var a7=document.getElementById('82').checked;
        var a8=document.getElementById('83').checked;
        if(a7==true&&a8==true){
            score++;
        }
    }
}

function checkNine() {
    var i1=document.getElementById('91').value;
    var i2=document.getElementById('92').value;
    var i3=document.getElementById('93').value;
    var i4=document.getElementById('94').value;
    var i5=document.getElementById('95').value;
    if(i1=="2"&&i2=="4"&&i3=="1"&&i4=="5"&&i5=="3"){
        score++;
    }
}
function checkAll() {
    n=1;
    while (n<10) {
        if(n==9){
            checkNine();
        }
        if(n==7||n==8){
            checkBox(n);
        }
        if(n==6){
            checkRadio(n, document.getElementById(n + "2").checked);
        }
        if(n==5){
            checkRadio(n, document.getElementById(n + "4").checked);
        }
        if(n==4){
            checkRadio(n, document.getElementById(n + "3").checked);
        }
        if(n==3){
            checkBox(n);
        }
        if(n==1 || n==2) {
            checkInputs(n, document.getElementById(n + "1").value);
        }
        n++;
    }
}

function result() {
    var l = document.getElementById('legend');
    l.innerHTML = "Результат";
    checkAll();
    for(var i=1; i<10; i++){
        var q1 = document.getElementById(i);
        q1.style.display = "none";
    }
    var r = document.getElementById('check');
    r.style.display = "none";
    var r = document.getElementById('result');
    r.style.display = "block";
    var scorePoint = document.getElementById('scorePoint');
    scorePoint.innerHTML = score + " из 9";
    if (score==9){
        var yay = document.getElementById('win');
        yay.style.display = "inline";
    }
}