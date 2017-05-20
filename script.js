var score=0; //количество правильных ответов
var n=1; //порядковый номер вопроса

function vse() { //функция, показывающая все вопросы. Вызывается по нажатию на кнопку "Показать всё"
    var a1 = document.getElementById('fs1');
    a1.style.display = "block";                  //показывает область вопросов fieldset
    var b1 = document.getElementById('vse');
    b1.style.display = "none";                   //скрывает кнопку "Показать всё"
    var b2 = document.getElementById('pervyj');
    b2.style.display = "none";                   //скрывает кнопку "Показать по одному"
    for(var i=1; i<10; i++){
        var q1 = document.getElementById(i);
        q1.style.display = "block";
    }                                           //цикл для выведения на экран всех вопросов от 1 до 9
    var b3 = document.getElementById('proverit');
    b3.style.display = "block";                 //показывает кнопку "Проверить"
}

function pervyj() {                          //функция для вывода на экран только первого вопроса. Нужна для начала отсчёта и инициализации fieldset
    var a1 = document.getElementById('fs1');
    a1.style.display = "block";
    var b1 = document.getElementById('vse');
    b1.style.display = "none";
    var b2 = document.getElementById('pervyj');
    b2.style.display = "none";                  //до этого момента то же, что и в функции vse
    var l = document.getElementById('nadpis');
    l.style.display = "block";                  //показывает название области вопросов
    l.innerHTML = "Вопрос " + n;                //задаёт номер вопроса в названии. В данном случае, "Вопрос 1"
    var q1 = document.getElementById(n);
    q1.style.display = "block";                 //показывает первый вопрос, так как n=1
    var b4 = document.getElementById('next');
    b4.style.display = "block";                 //показывает кнопку "Следующий"
}

function po_odnomy() {                           //функция вывода на экран вопроса по нажатию на кнопку "Следующий"
    n++;
        if (n < 10) {
            var l = document.getElementById('nadpis');
            l.innerHTML = "Вопрос " + n;
            var q1 = document.getElementById(n);
            q1.style.display = "block";         //показывает текущий вопрос n
            var q2 = document.getElementById(n - 1);
            q2.style.display = "none";          //скрывает предыдущий вопрос (n-1)
            var b1 = document.getElementById('next');
            b1.style.display = "block";
            if (n == 9) {                       //когда n==9, нам нужно вывести вместо кнопки "Следующий" кнопку "Проверить"
                var b2 = document.getElementById('next');
                b2.style.display = "none";
                var b3 = document.getElementById('proverit');
                b3.style.display = "block";     //собственно, вывод кнопки "Проверить"
            }
        }
}

function polya(question, answer) {        //функция проверки двух первых полей ввода
    if (answer!="") {
        if (question == 1 && (answer == "6" || answer == "six" || answer == "шесть")) {
            score++;
        }
        if (question == 2 && (answer == "TANK" || answer == "Tank" || answer == "tank" || answer == "танк" || answer == "Танк" || answer == "ТАНК")) {
            score++;
        }
    }
}

function odin_variant(question, answer) {         //функция проверки вопросов с одним ответом
    if ((question==4||question==5||question==6)&&answer==true){
        score++;
    }
}

function mnogo(question) {                   //функция проверки вопросов с несколькими вариантами ответа
    if(question==3){
        var a1=document.getElementById('31').checked;   //берётся элемент из HTML-кода согласно id. В данном случае это вопрос 3, вариант 1
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

function last() {                          //функция проверки последнего вопроса номер 9
    var i1=document.getElementById('91').value;
    var i2=document.getElementById('92').value;
    var i3=document.getElementById('93').value;
    var i4=document.getElementById('94').value;
    var i5=document.getElementById('95').value;
    if(i1=="2"&&i2=="4"&&i3=="1"&&i4=="5"&&i5=="3"){
        score++;
    }
}
function proverka() {               //в этой функции задаются начальные параметры для проверки вопросов и вызываются нужные функции
    n=1;                            //в целом она служит для проверки всех вопросов по очереди
    while (n<10) {
        if(n==9){
            last();
        }
        if(n==7||n==8){
            mnogo(n);
        }
        if(n==6){
            odin_variant(n, document.getElementById('62').checked);       //параметры задаются согласно свойству id. В данном случае, id=62 (Вопрос 6, вариант ответа 2)
        }
        if(n==5){
            odin_variant(n, document.getElementById('54').checked);
        }
        if(n==4){
            odin_variant(n, document.getElementById('43').checked);
        }
        if(n==3){
            mnogo(n);
        }
        if(n==1 || n==2) {
            polya(n, document.getElementById(n + "1").value.trim());
        }
        n++;
    }
}

function result() {                     //функция вывода результата
    var l = document.getElementById('nadpis');
    l.innerHTML = "Результат";          //меняет имя поля fieldset с "Вопросы" на "Результат"
    proverka();                         //вызывает функцию проверки ответов
    for(var i=1; i<10; i++){            //скрывает все вопросы
        var q1 = document.getElementById(i);
        q1.style.display = "none";
    }
    var r = document.getElementById('proverit');
    r.style.display = "none";                   //скрывает кнопку "Проверить", если она есть
    var r = document.getElementById('result');
    r.style.display = "block";                  //показывает предложение "Вы ответили на... вопросов"
    var pravilnye = document.getElementById('pravilnye');
    pravilnye.innerHTML = score + " из 9";     //выводит количество правильных ответов в <span>
    if (score==9 || score==8 ){                              //если все ответы верны, показывает картинку
        var yay = document.getElementById('win');
        yay.style.display = "inline";
    }
	if (score==0 || score==1){
		var oh_my_God = document.getElementById('looser');
		oh_my_God.style.display = "inline";
	}
}