display = document.getElementById("display")
btn0 = document.getElementById("btn0").addEventListener("click", function(){
    display.value = display.value + "0"
})
btn1 = document.getElementById("btn1").addEventListener("click", function(){
    display.value = display.value + "1"
})
btn2 = document.getElementById("btn2").addEventListener("click", function(){
    display.value = display.value + "2"
})
btn3 = document.getElementById("btn3").addEventListener("click", function(){
    display.value = display.value + "3"
})
btn4 = document.getElementById("btn4").addEventListener("click", function(){
    display.value = display.value + "4"
})
btn5 = document.getElementById("btn5").addEventListener("click", function(){
    display.value = display.value + "5"
})
btn6 = document.getElementById("btn6").addEventListener("click", function(){
    display.value = display.value + "6"
})
btn7 = document.getElementById("btn7").addEventListener("click", function(){
    display.value = display.value + "7"
})
btn8 = document.getElementById("btn8").addEventListener("click", function(){
    display.value = display.value + "8"
})
btn9 = document.getElementById("btn9").addEventListener("click", function(){
    display.value = display.value + "9"
})
btncomma = document.getElementById("btn.").addEventListener("click", function(){
    display.value = display.value + "."
})
btnadd = document.getElementById("btn+").addEventListener("click", function(){
    display.value = display.value + "+"
})
btnmulti = document.getElementById("btn*").addEventListener("click", function(){
    display.value = display.value + "x"
})
btndivi = document.getElementById("btn/").addEventListener("click", function(){
    display.value = display.value + "/"
})
btnclear = document.getElementById("clr").addEventListener("click", function(){
    display.value = ""
})
btnequal = document.getElementById("btneq").addEventListener("click", function(){
    const expression = display.value.replace(/x/g, "*");
    display.value = eval(expression);
}); 
btnsubtract = document.getElementById("btnminus").addEventListener("click", function(){
    display.value = display.value + "-"

})

