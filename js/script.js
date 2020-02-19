$(document).ready(function() {

	/*Header menu*/

	$(".header .header-menu").click(function(e){
	  e.preventDefault();
	  $(".menu").toggleClass("show");
	});

	$(document).on('click','.milk-shadow',function(){
	  $(".header .header-menu").click();
	});


	$('.banners').owlCarousel({
	    loop:false,
	    items:1,
	    margin:15,
	    dots: false,
	    stagePadding: 25,
	    responsiveClass:true,
	    responsive:{
	    		580:{
	    		    items:2,
	    		    stagePadding: 25,
	    		},
	            768:{
	                items:2,
	                stagePadding: 25,
	            },
	            992:{
	                items:3,
	                stagePadding: 0,
	            }
	        }
	})

});

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

function copy() {
  $('input.copy').select();
  document.execCommand("copy");
}



