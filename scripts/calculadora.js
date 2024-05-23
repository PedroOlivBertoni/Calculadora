function adicionar(num) {
    document.getElementById('result').innerHTML += num;
}

function apagar() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function limpar() {
    document.getElementById('result').innerHTML = '';
}

function calcular() {
    var result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result);
    }
    else {
        alert("[ERRO] Não foi possível calucular!");
    }
}
