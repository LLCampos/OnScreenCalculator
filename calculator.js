var add = function(n1, n2) {
    return n1 + n2;
}

var multiply = function(n1, n2) {
    return n1 * n2;
}

var subtract = function(n1, n2) {
    return n1 - n2;
}

var divide = function(n1, n2) {
    return n1 / n2;
}

var clear = function() {
    n1 = '';
    n2 = '';
    operator = '';
}

clear()

$(".number-btn").on('click', function() {
    n = $(this).text();
    if (!operator) {
        n1 = n1.concat(n);
        $('#number-on-screen').text(n1);
    } else {
        n2 = n2.concat(n);
        $('#number-on-screen').text(n2);
    }
    $('#operator-on-screen').text('');

});

$(".operation-btn").on('click', function() {
    operator = $(this).text();
    $('#operator-on-screen').text(operator);
});

$(".equal-btn").on('click', function() {
    n1 = Number(n1);
    n2 = Number(n2);

    switch (operator) {
        case '+':
            var result = (add(n1, n2)).toString();
            break;
        case '-':
            var result = (subtract(n1,n2)).toString();
            break;
        case '*':
            var result = (multiply(n1, n2)).toString();
            break;
        case '/':
            var result = (divide(n1, n2)).toString();
            break;
    }

    if ((n1 == "310394" && n2 == "090293") || (n1 == "090293" && n2 == "310394"))  {
        $('#number-on-screen').text('Amo-te!')
    } else {
        $('#number-on-screen').text(result);
    }

    $('#operator-on-screen').text('=');
    clear();
});

$('.clear-btn').on('click', function() {
    clear()
    $('#number-on-screen').text('0');
    $('#operator-on-screen').text('');
});






