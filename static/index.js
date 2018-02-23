(function() {
    $( "img" ).not( "#profile" ).hover(function() {
        $( this ).fadeTo("slow", 0.2);
    }, function() {
        $( this ).fadeTo("slow", 1.0);
    });

    $( "#profile" ).mouseenter(function() {
        $( "div[id^='sidebar-']" ).fadeIn("slow");
        $( "#profile" ).fadeTo("slow", 0.75);
        $( "#close-button" ).fadeIn("slow");
    });

    $( "#close-button" ).click(function() {
        $( "div[id^='sidebar-']" ).fadeOut("slow");
        $( "#profile" ).fadeTo("slow", 1.0);
        $( "#close-button" ).fadeOut("slow");
    });
}) ();