$(function() {
    // console.log( "ready!" );

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

    // console.log('vars', vars.length);


    if(vars.line1) {
	    $('.line-1').html(decodeURIComponent( vars.line1.replace(/\+/g, ' ') ));
	    $('[name="line1"]').val(decodeURIComponent(vars.line1.replace(/\+/g, ' ')));
    }
    if(vars.line2) {
	    $('.line-2').html(decodeURIComponent(vars.line2.replace(/\+/g, ' ')));
	    $('[name="line2"]').val(decodeURIComponent(vars.line2.replace(/\+/g, ' ')));
    }
    if(vars.line3) {
	    $('.line-3').html(decodeURIComponent(vars.line3.replace(/\+/g, ' ')));
    	$('[name="line3"]').val(decodeURIComponent(vars.line3.replace(/\+/g, ' ')));
    }



    var url = window.location.href;


    $("meta[property='og\\:url']").attr("content", url);
    // console.log("url", $('meta-url'));

    var sharescript = '<div class="fb-share-button" data-href="' + encodeURI(url) + '" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(url) + ';src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>';

    $('.share-fb').html(sharescript);


    // var twsharescript = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=#LiesBus"><svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg"><path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z" style="fill:#ffffff;"/></svg> Tweet</a>';

    // $('.share-tw').html(twsharescript);
});