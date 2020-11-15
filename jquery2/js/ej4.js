/*$("#hive").click(
    function () { 
        $("#befect1").hide(1000);
        alert("Gracias por ocultar");
    }
);

$("#show").click(
    function () { 
        $("#befect1").slideDown("slow");
        alert("Gracias por mostrar");
    }
);*/

$( "#hider" ).click(function() {
  $( "span:last-child" ).hide( "fast", function() {
    // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
  });
});
$( "#shower" ).click(function() {
  $( "span" ).show( 2000 );
});


