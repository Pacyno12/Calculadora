function suma(){
    $(function(){
        $("#suma").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val())
            let num2 = parseInt($("#num2").val())
            let resultado = num1 + num2;
            $("#txtResultado").append(resultado);
        });
    })
}
function resta(){
$(function(){
    $("#resta").click(() => {
        $("#txtResultado").text("");
        let num1 = parseInt($("#num1").val());
        let num2 = parseInt($("#num2").val());
        let resultado = num1 - num2;
        $("#txtResultado").append(resultado);
    });
})
}
function multiplicacion() {
    $(function(){
        $("#multiplicacion").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let num2 = parseInt($("#num2").val());
            let resultado = num1 * num2;
            $("#txtResultado").append(resultado);
        });
    })
}

function division(){
    $(function(){
        $("#division").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let num2 = parseInt($("#num2").val());
            let resultado = num1 / num2;
            $("#txtResultado").append(resultado);
        });
    })
}

function raiz(){
    $(function(){
        $("#raiz").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let resultado = Math.sqrt(num1);
            $("#txtResultado").append(resultado);
        });
    })
}

function seno(){
    $(function(){
        $("#seno").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let resultado = Math.sin(num1)
            $("#txtResultado").append(resultado);
        });
    })
}

function coseno(){
    $(function(){
        $("#coseno").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let resultado = Math.cos(num1);
            $("#txtResultado").append(resultado);
        });
    })
}

function tangente(){
    $(function(){
        $("#tangente").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let resultado = Math.tan(num1);
            $("#txtResultado").append(resultado);
        });
    })
}

function contangente(){
    $(function(){
        $("#cotangente").click(() => {
            $("#txtResultado").text("");
            let num1 = parseInt($("#num1").val());
            let resultado = 1 / Math.tan(num1);
            $("#txtResultado").append(resultado);
            console.log("cotangente");
        });
    })
}
