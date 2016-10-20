$(document).ready(function() {
//UI Logic
var height = prompt("Enter your height in inches here:");

//Business Logic
var heightInInches = parseInt(height);

$('h2').toggle();
if (height >= 60) {
  $('#ride2').show();
  $('#ride3').show();
} else if (height >= 48) {
  $('#ride1').show();
  $('#ride2').show();
} else {
  $('#ride1').show();
}


});
