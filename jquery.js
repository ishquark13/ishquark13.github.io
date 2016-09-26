$(document).ready(function(){
	 $('.btn btn-primary').click(function() {
	 	$('.btn btn-primary').fadeOut('slow');
	 });

     $(".col-sm-8 text left").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });
});
