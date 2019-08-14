// function add (number1, number2) {
//  return number1 + number2
// };
//
// var subtract = function (number1, number2) {
//  return number1 - number2
// } ;
//
// var multiply = function (number1, number2) {
//  return number1 * number2
// } ;
//
// var divide = function (number1, number2) {
//  return number1 / number2
// } ;


$(document).ready(function(){
 $(".formOne").submit(function(event){

   var styleInput =  $("select#Style").val();
   var nameInput = $("input#name").val();
   var addressInput = $("input#address").val();
 // var number1 = parseInt($("#add1").val());
 // var number2 = parseInt($("#add2").val());
 // var result = multiply(number1, number2);
 $(".output").text(styleInput + " " + nameInput + " " + addressInput);

event.preventDefault();


});
});
