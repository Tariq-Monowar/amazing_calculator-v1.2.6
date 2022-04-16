function sin(){
    document.calculator.result.value = Math.sin(document.calculator.result.value)
}

function cos(){
    document.calculator.result.value = Math.cos(document.calculator.result.value)
}

function tan(){
    document.calculator.result.value = Math.tan(document.calculator.result.value)
}

function BACKSPC(){
    var a = document.calculator.result.value;
    document.calculator.result.value =  a.substr(0, a.length-1)
}

function sqruare(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,2)
}
function qubbed(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,2)
}

function squrt2(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/2)
}
function squrt3(){
    document.calculator.result.value = Math.pow(document.calculator.result.value,1/3)
}

function number(value){
    document.calculator.result.value += value;
}
function remov(){
    document.calculator.result.value = " ";
}
function equal(){
    document.calculator.result.value = eval(document.calculator.result.value)
}

function bin(){
    document.calculator.result.value = ((document.calculator.result.value >>> 0).toString(2)) 
   
}  