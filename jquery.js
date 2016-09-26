$(document).ready(function(){
	 $('.btn btn-primary').click(function() {
	 	$('.btn btn-primary').fadeOut('slow');
	 });


        $(".typed").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });
});
