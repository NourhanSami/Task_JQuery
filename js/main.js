// $(".para1").css("color", "red").css("font-size", "30px").css("background-color", "aqua")
// $(".para2").css("color", "green").css("font-size", "50px")
// $("#btn1").css("padding", "10px").css("width", "80px").css("background-color", "tomato").css("font-size", "18px")
// $("#btn2").css("padding", "10px").css("width", "90px").css("background-color", " blueviolet").css("font-size", "18px")
// $("body").css("background-color", "yellow")
// $("h1").css("color", "grey")


$("#btn1").click(function(){
    $("#div1").hide(2500)
})

$("#btn2").click(function(){
    $("#div1").show(2500)
})

$("#btn3").click(function(){
    $("#div1").fadeIn(2500)
})

$("#btn4").click(function(){
    $("#div1").fadeOut(2500)
})

$("#btn5").click(function(){
    $("#div1").fadeTo(2500, 0.3)
})

$("#btn6").click(function(){
    $("#div1").slideUp(2500)
})

$("#btn7").click(function(){
    $("#div1").slideDown(2500)
})