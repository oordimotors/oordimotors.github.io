$(document).ready(function(){
   $("input:radio:checked").parent('label').addClass("checked");

   $('.customRadio input:radio').click(function(){
     $('.customRadio').removeClass("checked");
     $("input:radio:checked").parent('label').addClass("checked");
   });

  //  material_faux
  //  material_genuine
  //  variant_base
  // variant_cooling
  // variant_heating
  // variant_cooling_heating

  $('.material_faux input[type="radio"]').change(function() {
    $('.variant_cooling, .variant_cooling_heating').attr('disabled',!this.checked);
    $('.variant_cooling input[type="radio"], .variant_cooling_heating input[type="radio"]').attr('disabled', 'disabled');
    $('.variant_cooling, .variant_cooling_heating').addClass('disabled');
    $('.variant_base, .variant_cooling, .variant_heating, .variant_cooling_heating').removeClass('checked');
    $('.variant_base input[type="radio"]').prop('checked', 'checked').parent().addClass('checked');
    $(this).parents('.form-horizontal').find('.btn-primary .big').text('8000');
  });
  $('.material_genuine input[type="radio"]').change(function() {
    $('.variant_cooling input[type="radio"], .variant_cooling_heating input[type="radio"]').removeAttr('disabled');
    $('.variant_cooling, .variant_cooling_heating').removeClass('disabled');
  });

  $('.variant_base input[type="radio"]').change(function() {
    $(this).parents('.form-horizontal').find('.btn-primary .big').text('8000');
  });
  $('.variant_cooling input[type="radio"]').change(function() {
    $(this).parents('.form-horizontal').find('.btn-primary .big').text('10500');
  });
  $('.variant_heating input[type="radio"]').change(function() {
    $(this).parents('.form-horizontal').find('.btn-primary .big').text('10500');
  });
  $('.variant_cooling_heating input[type="radio"]').change(function() {
    $(this).parents('.form-horizontal').find('.btn-primary .big').text('16000');
  });

  var text = ["1", "2", "3", "4", "5", "6", "7", "8"];
  var counter = 0;
  setInterval(change, 1000);
  function change() {
   $('img.heroImage').attr('src', 'assets/images/360/'+text[counter]+'.png');
      counter++;
      if(counter >= text.length) { counter = 0; }
  };

});

// Set the date we're counting down to
var countDownDate = new Date("Apr 10, 2017 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    $('#clockdiv .days').text(days);
    $('#clockdiv .hours').text(hours);
    $('#clockdiv .minutes').text(minutes);
    $('#clockdiv .seconds').text(seconds);
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    // + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        $('#clockdiv .days').text('00');
        $('#clockdiv .hours').text('00');
        $('#clockdiv .minutes').text('00');
        $('#clockdiv .seconds').text('00');
        $('#clockdiv .expiredText').show();
        // document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$('[data-toggle="tooltip"]').tooltip();
