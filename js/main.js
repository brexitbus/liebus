$(function() {
    console.log( "ready!" );

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    console.log('vars', vars);

    $('.line-1').html(decodeURIComponent( vars.line1.replace('+', ' ') ));
    $('[name="line1"]').val(decodeURIComponent(vars.line1.replace('+', ' ')));
    $('.line-2').html(decodeURIComponent(vars.line2.replace('+', ' ')));
    $('[name="line2"]').val(decodeURIComponent(vars.line2.replace('+', ' ')));
    $('.line-3').html(decodeURIComponent(vars.line3.replace('+', ' ')));
    	$('[name="line3"]').val(decodeURIComponent(vars.line3.replace('+', ' ')));
});