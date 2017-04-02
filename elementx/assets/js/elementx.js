$(document).ready(function(){
   $("input:radio:checked").parent('label').addClass("checked");

   $('.customRadio input:radio').click(function(){
     $('.customRadio').removeClass("checked");
     $("input:radio:checked").parent('label').addClass("checked");
   });
});
