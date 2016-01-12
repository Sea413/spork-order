$(document).ready(function() {
$("form#order1").submit(function(event) {
    var nameinput = $("input#name").val();
    var addressinput = $("input#address").val();

     $(".name").text(nameinput);
     $(".address").text(addressinput);
     $(".letter").show();
     $("h3, form").hide();
    event.preventDefault();

  });
  });
