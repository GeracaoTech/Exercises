window.addEventListener('load', function () {
    var calcIMC = function (weight, height) { return weight / (Math.pow(height, 2)); };
    var showResult = function (result) { return console.log("O seu IMC \u00E9 igual \u00E0 ".concat(result.toFixed(2))); };
    var main = function () {
        var weightUser = Number(prompt('Digite seu peso'));
        var heightUser = Number(prompt('Digite sua altura'));
        showResult(calcIMC(weightUser, heightUser));
    };
    main();
});
