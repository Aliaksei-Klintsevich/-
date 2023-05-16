   function credit( ) {
            var monthlyPayment = 'Ежемесячный платеж:';
            var loanAmount = prompt ('Введите сумму договора');
            while ( true ) {
            var checkLoan = parseInt (loanAmount);
            if (!isNaN (checkLoan))
                break; // введено корректное число - выходим из цикла
            loanAmount = prompt ('Введите корректное число!');
        }
            var interestRate = prompt ('Введите процентную ставку');
            while ( true ) {
            var checkRate = parseInt (interestRate);
            if (!isNaN (checkRate))
                break; // введено корректное число - выходим из цикла
            interestRate = prompt ('Введите корректное число!');
        }
            var term = prompt ('Введите количество месяцев');
            while ( true ) {
            var checkTerm = parseInt (term);
            if (!isNaN (checkTerm))
                break; // введено корректное число - выходим из цикла
            term = prompt ('Введите корректное число!');
        }
            var principalDebt = parseFloat (loanAmount) / parseFloat (term); // Расчет суммы основного долга
            var percentages = parseFloat (loanAmount) * parseFloat (interestRate) * 30 / 360 / 100; //Расчет суммы процентов годовых
            var calculation = principalDebt + percentages; //Основной долг + проценты
            alert (monthlyPayment + ' ' + calculation);
        }

// Расчет ежемесячного платежа
   function creditTwo() {
     var monthlyPayment = 'Ежемесячный платеж:';
     var a = parseInt(document.getElementById("a").value);
     var b = parseInt(document.getElementById("b").value);
     var c = parseInt(document.getElementById("c").value);

     if (isNaN(a) == true) a = 0;
     if (isNaN(b) == true) b = 0;
     if (isNaN(c) == true) c = 0;

     var principalDebt = parseFloat (a) / parseFloat (c); // Расчет суммы основного долга
     var percentages = parseFloat (a) * parseFloat (b) * 30 / 360 / 100; //Расчет суммы процентов годовых
     var calculation = principalDebt + percentages; //Основной долг + проценты
     

     document.getElementById("result").innerHTML = monthlyPayment + ' ' + calculation;
   }
 



// Расчет коэффициента кредитоспособности
   function ratioTwo() {
    var monthlyPayment = 'Коэффициент кредитоспособности:';
    var ak = parseInt(document.getElementById("ak").value);
    var bk = parseInt(document.getElementById("bk").value);
    var ck = parseInt(document.getElementById("ck").value);
    var dk = parseInt(document.getElementById("dk").value);
    var ek = parseInt(document.getElementById("ek").value);
    var fk = parseInt(document.getElementById("fk").value);

    if (isNaN(ak) == true) ak = 0;
    if (isNaN(bk) == true) bk = 0;
    if (isNaN(ck) == true) ck = 0;
    if (isNaN(dk) == true) dk = 0;
    if (isNaN(ek) == true) ek = 0;
    if (isNaN(fk) == true) fk = 0;

    var principalDebt = parseFloat (ak) / parseFloat (ck); // Расчет суммы основного долга
    var percentages = parseFloat (ak) * parseFloat (bk) * 30 / 360 / 100; //Расчет суммы процентов годовых
    var calculation = principalDebt + percentages; //Основной долг + проценты
    var allRashody = parseFloat (dk) + parseFloat (ek);
    var koeff = (allRashody + calculation) / fk;


    document.getElementById("resultTwo").innerHTML = monthlyPayment + ' ' + koeff;
}



   function ratio( ) {
            var monthlyPayment = 'Коэффициент кредитоспособности:';
            var loanAmount = prompt ('Введите сумму договора');
            while ( true ) {
            var checkLoan = parseInt (loanAmount);
            if (!isNaN (checkLoan))
                break; // введено корректное число - выходим из цикла
            loanAmount = prompt ('Введите корректное число!');
        }
            var interestRate = prompt ('Введите процентную ставку');
            while ( true ) {
            var checkRate = parseInt (interestRate);
            if (!isNaN (checkRate))
                break; // введено корректное число - выходим из цикла
            interestRate = prompt ('Введите корректное число!');
        }
            var term = prompt ('Введите количество месяцев');
            while ( true ) {
            var checkTerm = parseInt (term);
            if (!isNaN (checkTerm))
                break; // введено корректное число - выходим из цикла
            term = prompt ('Введите корректное число!');
        }
            var rashody = prompt ('Введите расходы');
            while ( true ) {
            var checkRashody = parseInt (rashody);
            if (!isNaN (checkRashody))
                break; // введено корректное число - выходим из цикла
            rashody = prompt ('Введите корректное число!');
        }
            var dkh = prompt ('Введите расходы по ДКХ');
            while ( true ) {
            var checkDkh = parseInt (dkh);
            if (!isNaN (checkDkh))
                break; // введено корректное число - выходим из цикла
            dkh = prompt ('Введите корректное число!');
        }
            var dohod = prompt ('Введите размер дохода Заявителя');
            while ( true ) {
            var checkDohod = parseInt (dohod);
            if (!isNaN (checkDohod))
                break; // введено корректное число - выходим из цикла
            dohod = prompt ('Введите корректное число!');
        }
            var principalDebt = parseFloat (loanAmount) / parseFloat (term); // Расчет суммы основного долга
            var percentages = parseFloat (loanAmount) * parseFloat (interestRate) * 30 / 360 / 100; //Расчет суммы процентов годовых
            var calculation = principalDebt + percentages; //Основной долг + проценты
            var allRashody = parseFloat (dkh) + parseFloat (rashody);
            var koeff = (allRashody + calculation) / dohod;
            alert(monthlyPayment + ' ' + koeff);
        }


// Расчет максимальной суммы кредита
function maxAmoutZeroFourTwo() {
    var maxAmout = 'Максимальная сумма кредита:';
    var am = parseInt(document.getElementById("am").value); // Размер дохода заявителя
    var bm = parseInt(document.getElementById("bm").value); // Расходы на коммунальные услуги и мобильную связь
    var cm = parseInt(document.getElementById("cm").value); // Расходы на ДКХ
    var dm = parseInt(document.getElementById("dm").value); // Количество иждивенцев
    var em = parseInt(document.getElementById("em").value); // Срок кредита
    var fm = parseInt(document.getElementById("fm").value); // Процентная ставка

    if (isNaN(am) == true) am = 0;
    if (isNaN(bm) == true) bm = 0;
    if (isNaN(cm) == true) cm = 0;
    if (isNaN(dm) == true) dm = 0;
    if (isNaN(em) == true) em = 0;
    if (isNaN(fm) == true) fm = 0;

    var bpm = 328.5;
    var ratio = 0.4;
    var maxProd = 10000;
    var minProd = 200;
    var nbrb = parseFloat (am) * parseFloat (ratio) - parseFloat (cm) - parseFloat (bm); // Платеж НБ РБ
    var bank = parseFloat (am) - parseFloat (bm) - parseFloat (cm) - parseFloat (bpm) * (1 + 0.2 * parseFloat (dm)); // Платеж БАНК
    var amoutNbrb = parseFloat (nbrb) * 1200 * parseFloat (em) / (1200 + parseFloat (fm) * parseFloat (em)); // Сумма НБ РБ
    var amoutBank = parseFloat (bank) * 1200 * parseFloat (em) / (1200 + parseFloat (fm) * parseFloat (em)); // Сумма БАНК
    var result = Math.min(amoutNbrb, amoutBank, maxProd);
    var yesOrNo = ((result < minProd));
    if (yesOrNo) {
    yesOrNo = 0;
    }
    else {
    yesOrNo = result;
    }
    var monthlyPayment = 'Ежемесячный платеж:';
    var principalDebt = parseFloat (yesOrNo) / parseFloat (em); // Расчет суммы основного долга
    var percentages = parseFloat (yesOrNo) * parseFloat (fm) * 30 / 360 / 100; //Расчет суммы процентов годовых
    var calculation = principalDebt + percentages; //Основной долг + проценты


    document.getElementById("resultThree").innerHTML = maxAmout + ' ' + yesOrNo + '\n' + monthlyPayment + ' ' + calculation;
}

function maxAmoutZeroFourThree() {
    var maxAmout = 'Максимальная сумма кредита:';
    var ams = parseInt(document.getElementById("ams").value); // Размер дохода заявителя
    var bms = parseInt(document.getElementById("bms").value); // Расходы на коммунальные услуги и мобильную связь
    var cms = parseInt(document.getElementById("cms").value); // Расходы на ДКХ
    var dms = parseInt(document.getElementById("dms").value); // Количество иждивенцев
    var ems = parseInt(document.getElementById("ems").value); // Срок кредита
    var fms = parseInt(document.getElementById("fms").value); // Процентная ставка

    if (isNaN(ams) == true) ams = 0;
    if (isNaN(bms) == true) bms = 0;
    if (isNaN(cms) == true) cms = 0;
    if (isNaN(dms) == true) dms = 0;
    if (isNaN(ems) == true) ems = 0;
    if (isNaN(fms) == true) fms = 0;

    var bpm = 328.5;
    var ratio = 0.6;
    var maxProd = 10000;
    var minProd = 200;
    var nbrb = parseFloat (ams) * parseFloat (ratio) - parseFloat (cms) - parseFloat (bms); // Платеж НБ РБ
    var bank = parseFloat (ams) - parseFloat (bms) - parseFloat (cms) - parseFloat (bpm) * (1 + 0.2 * parseFloat (dms)); // Платеж БАНК
    var amoutNbrb = parseFloat (nbrb) * 1200 * parseFloat (ems) / (1200 + parseFloat (fms) * parseFloat (ems)); // Сумма НБ РБ
    var amoutBank = parseFloat (bank) * 1200 * parseFloat (ems) / (1200 + parseFloat (fms) * parseFloat (ems)); // Сумма БАНК
    var result = Math.min(amoutNbrb, amoutBank, maxProd);
    var yesOrNo = ((result < minProd));
    if (yesOrNo) {
    yesOrNo = 0;
    }
    else {
    yesOrNo = result;
    }
    var monthlyPayment = 'Ежемесячный платеж:';
    var principalDebt = parseFloat (yesOrNo) / parseFloat (ems); // Расчет суммы основного долга
    var percentages = parseFloat (yesOrNo) * parseFloat (fms) * 30 / 360 / 100; //Расчет суммы процентов годовых
    var calculation = principalDebt + percentages; //Основной долг + проценты


    document.getElementById("resultFour").innerHTML = maxAmout + ' ' + yesOrNo + '\n' + monthlyPayment + ' ' + calculation;
}


   /*function maxAmoutZeroFour( ) {
            var maxAmout = 'Максимальная сумма кредита:';
            var income = prompt ('Введите размер дохода Заявителя');
            while ( true ) {
            var checkLoan = parseInt (income);
            if (!isNaN (checkLoan))
                break; // введено корректное число - выходим из цикла
                income = prompt ('Введите корректное число!');
        }
            var expenses = prompt ('Введите расходы Заявителя');
            while ( true ) {
            var checkRate = parseInt (expenses);
            if (!isNaN (checkRate))
                break; // введено корректное число - выходим из цикла
                expenses = prompt ('Введите корректное число!');
        }
            var expensesCredit = prompt ('Введите расходы на ДКХ');
            while ( true ) {
            var checkTerm = parseInt (expensesCredit);
            if (!isNaN (checkTerm))
                break; // введено корректное число - выходим из цикла
                expensesCredit = prompt ('Введите корректное число!');
        }
            var children = prompt ('Введите количество иждивенцев');
            while ( true ) {
            var checkRashody = parseInt (children);
            if (!isNaN (checkRashody))
                break; // введено корректное число - выходим из цикла
                children = prompt ('Введите корректное число!');
        }
            var term = prompt ('Введите желаемый срок кредита');
            while ( true ) {
            var checkDkh = parseInt (term);
            if (!isNaN (checkDkh))
                break; // введено корректное число - выходим из цикла
                term = prompt ('Введите корректное число!');
        }
            var interestRate = prompt ('Введите процентную ставку');
            while ( true ) {
            var checkDohod = parseInt (interestRate);
            if (!isNaN (checkDohod))
                break; // введено корректное число - выходим из цикла
                interestRate = prompt ('Введите корректное число!');
        }
        var bpm = 328.5;
        var ratio = 0.4;
        var maxProd = 10000;
        var minProd = 200;
        var nbrb = parseFloat (income) * parseFloat (ratio) - parseFloat (expensesCredit) - parseFloat (expenses); // Платеж НБ РБ
        var bank = parseFloat (income) - parseFloat (expenses) - parseFloat (expensesCredit) - parseFloat (bpm) * (1 + 0.2 * parseFloat (children)); // Платеж БАНК
        var amoutNbrb = parseFloat (nbrb) * 1200 * parseFloat (term) / (1200 + parseFloat (interestRate) * parseFloat (term)); // Сумма НБ РБ
        var amoutBank = parseFloat (bank) * 1200 * parseFloat (term) / (1200 + parseFloat (interestRate) * parseFloat (term)); // Сумма БАНК
        var result = Math.min(amoutNbrb, amoutBank, maxProd);
        var yesOrNo = ((result < minProd));
        if (yesOrNo) {
        yesOrNo = 0;
        }
        else {
        yesOrNo = result;
        }
        var monthlyPayment = 'Ежемесячный платеж:';
        var principalDebt = parseFloat (yesOrNo) / parseFloat (term); // Расчет суммы основного долга
        var percentages = parseFloat (yesOrNo) * parseFloat (interestRate) * 30 / 360 / 100; //Расчет суммы процентов годовых
        var calculation = principalDebt + percentages; //Основной долг + проценты
            alert(maxAmout + ' ' + yesOrNo + '\n' + monthlyPayment + ' ' + calculation);
        }*/

   function maxAmoutZeroSix( ) {
            var maxAmout = 'Максимальная сумма кредита:';
            var income = prompt ('Введите размер дохода Заявителя');
            while ( true ) {
            var checkLoan = parseInt (income);
            if (!isNaN (checkLoan))
                break; // введено корректное число - выходим из цикла
                income = prompt ('Введите корректное число!');
        }
            var expenses = prompt ('Введите расходы Заявителя');
            while ( true ) {
            var checkRate = parseInt (expenses);
            if (!isNaN (checkRate))
                break; // введено корректное число - выходим из цикла
                expenses = prompt ('Введите корректное число!');
        }
            var expensesCredit = prompt ('Введите расходы на ДКХ');
            while ( true ) {
            var checkTerm = parseInt (expensesCredit);
            if (!isNaN (checkTerm))
                break; // введено корректное число - выходим из цикла
                expensesCredit = prompt ('Введите корректное число!');
        }
            var children = prompt ('Введите количество иждивенцев');
            while ( true ) {
            var checkRashody = parseInt (children);
            if (!isNaN (checkRashody))
                break; // введено корректное число - выходим из цикла
                children = prompt ('Введите корректное число!');
        }
            var term = prompt ('Введите желаемый срок кредита');
            while ( true ) {
            var checkDkh = parseInt (term);
            if (!isNaN (checkDkh))
                break; // введено корректное число - выходим из цикла
                term = prompt ('Введите корректное число!');
        }
            var interestRate = prompt ('Введите процентную ставку');
            while ( true ) {
            var checkDohod = parseInt (interestRate);
            if (!isNaN (checkDohod))
                break; // введено корректное число - выходим из цикла
                interestRate = prompt ('Введите корректное число!');
        }
        var bpm = 328.5;
        var ratio = 0.6;
        var maxProd = 10000;
        var minProd = 200;
        var nbrb = parseFloat (income) * parseFloat (ratio) - parseFloat (expensesCredit) - parseFloat (expenses); // Платеж НБ РБ
        var bank = parseFloat (income) - parseFloat (expenses) - parseFloat (expensesCredit) - parseFloat (bpm) * (1 + 0.2 * parseFloat (children)); // Платеж БАНК
        var amoutNbrb = parseFloat (nbrb) * 1200 * parseFloat (term) / (1200 + parseFloat (interestRate) * parseFloat (term)); // Сумма НБ РБ
        var amoutBank = parseFloat (bank) * 1200 * parseFloat (term) / (1200 + parseFloat (interestRate) * parseFloat (term)); // Сумма БАНК
        var result = Math.min(amoutNbrb, amoutBank, maxProd);
        var yesOrNo = ((result < minProd));
        if (yesOrNo) {
        yesOrNo = 0;
        }
        else {
        yesOrNo = result;
        }
        var monthlyPayment = 'Ежемесячный платеж:';
        var principalDebt = parseFloat (yesOrNo) / parseFloat (term); // Расчет суммы основного долга
        var percentages = parseFloat (yesOrNo) * parseFloat (interestRate) * 30 / 360 / 100; //Расчет суммы процентов годовых
        var calculation = principalDebt + percentages; //Основной долг + проценты
            alert(maxAmout + ' ' + yesOrNo + '\n' + monthlyPayment + ' ' + calculation);
        }

   function Spoiler() {
      var ele = document.getElementById("contentSpoiler");
      var text = document.getElementById("linkSpoiler");
      if(ele.style.display == "block") {
             ele.style.display = "none";
         text.innerHTML = "Подробнее";
        }
      else {
         ele.style.display = "block";
         text.innerHTML = "Скрыть";
      }
   }

   function SpoilerTwo() {
      var ele = document.getElementById("contentSpoilerTwo");
      var text = document.getElementById("linkSpoiler");
      if(ele.style.display == "block") {
             ele.style.display = "none";
         text.innerHTML = "Подробнее";
        }
      else {
         ele.style.display = "block";
         text.innerHTML = "Скрыть";
      }
   }
