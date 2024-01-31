$(document).ready(function(){

    $(".info").hide()
    $("#b2").hide()

    $("#b1").click(function(){
      $(".info").fadeIn(2000);
      $("#b1").hide();
      $("#b2").fadeIn(2000);
      
    })
    $("#b2").click(function(){
      $(".info").fadeOut(1000)
      $(this).hide()
      $("#b1").fadeIn(1000);
     
    })
    $("#b3").click(function(){
      $(".content").empty();
      var txt1 = $("<p></p>").text("Teemme hiekkapuhalluksia, maalauksia ja kaikenlaisia autojen korjaustöitä");
      var tx = $("<p></p>").text("Myymme jenkkiautojen purkuosia ja entisöimme vanhoja amerikanrautoja.");
      $(".content").append(txt1, tx)
      
    })
    $("#b4").click(function(){
      $(".content").empty();
      var txt2 = $("<p></p>").text("Tommi Ryynänen p. 0400-1394459");
      var txt3 = $("<p></p>").text("mail@rustbros.fi");
$(".content").append(txt2, txt3)
    })
    })