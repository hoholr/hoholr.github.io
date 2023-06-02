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

//EMAIL REVEAL
  function revealAddress(r){
      var address = $(r).data('address');
      $(r).text(address).append("@diamond-congress.hu");
      $(r).attr("href","mailto:"+address+"@diamond-congress.hu");
    }

//get URL parameter
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

//PRESS ENTER
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

console.log("hoholr.github.io");
