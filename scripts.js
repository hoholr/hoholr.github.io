//TOOLTIP INIT
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

//COOKIE CONSENT
	function setCookie(){
		var expires = 60*60*24*30;
		document.cookie = "cookie=lesz2023; max-age=" + expires + "; path=/";
		$("#cookie").hide().css("z-index","-1");
		$('#resetCookie').removeClass('d-none').show();
	}

	function resetCookie(){
		var expires = 0;
		document.cookie = "cookie=; max-age=" + expires + "; path=/";
		$("#cookie").addClass('opacity-1').css("z-index","1030").show();
		$('#resetCookie').hide();
	}

//GALLERY
  $(".gallery").click(function(){
    var ATT_src = $(this).attr('src');
    $('#galModal img#galImg').attr('src',ATT_src);
    $('#galModal').modal();
  });

  $('#galModal').on('hidden.bs.modal', function (e) {
    $('#galModal img#galImg').attr('src','');
  });
