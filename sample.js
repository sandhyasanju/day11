function navigation() {
  $(".icons").mouseenter(function() {
    $(".text").show();
    $(".text").mouseleave(function(){
      $(".text").hide();
      $("#home").click(function(){
        $("#home1").toggle();
        $("profile").click(function(){
          $("#profile1").toggle();
          $("#people").click(function(){
            $("#profile1").toggle();
            $(".table").toggle();
            $("contact").click(function(){
              $("#contact1").toggle();
              $("#mail").click(function(){
                $("#mail1").toggle();
                $("#adress").click(function(){
                  $("#adress1").toggle();
                });
              });
            });
          });
        });
      });
    });
  });
}
