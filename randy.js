$(function() { 
  var p1guess = $("#p1guess")
  var p2guess = $("#p2guess")
  var p1display = $("#display1")
  var p2display = $("#display2")
  var p1roll = $("#p1roll")
  var p2roll = $("#p2roll")
  var p1added = $("#added1")
  var aafinal = []
  var aa2final = []


  p1guess.keydown(function(enter) {
    if (enter.keyCode == 13){
      var number1 = p1guess.val()
    p1guess.attr("value", number1)
    p1guess.val("")
    }
  });

  p2guess.keydown(function(enter) {
    if (enter.keyCode == 13){
      var number2 = p2guess.val()
      p2guess.val("")
      console.log(number2)
    }
  });

  p2roll.click(function() {
    var dice2 = ["1","2","3","4","5","6"]

    var response2 = dice2[Math.floor(Math.random()*dice2.length)];
    p2display.html(response2);
    p2list = [];

    p2list.push(response2);
    var afinal2 = parseInt(p2list);
    var add2 = aa2final.slice(0,5).reduce(addFunction2,0);
    function addFunction2(a,b) {
      return a + b;
    }
    aa2final.push(afinal2);
    console.log(add2)
    var p2finaloutput = ""+add2;
    p2display.html(add2);
  });

  p1roll.click(function() {
    var dice1 = ["1","2","3","4","5","6"]

    var response = dice1[Math.floor(Math.random()*dice1.length)];
    p1display.html(response);
    p1list = [];

    p1list.push(response);
    var afinal = parseInt(p1list);
    var add = aafinal.slice(0,5).reduce(addFunction,0);
    function addFunction(a,b) {
      return a + b;
    }
    aafinal.push(afinal);
    console.log(add)
    var p1finaloutput = ""+add;
    p1display.html(add);
    var distance1 = parseInt(p1guess.val())
    });
});